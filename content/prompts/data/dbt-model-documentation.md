---
title: "Generate dbt model documentation from SQL"
slug: dbt-model-documentation
function: data
role: analytics-engineering
description: "Take a dbt model's SQL and generate the schema.yml description, column docs, and recommended tests an analytics engineer would actually approve."
useCase: "Use this prompt when documenting a dbt model that has been written but not yet documented. Generates a draft schema.yml block — model description, column descriptions, recommended tests — that you review and edit, instead of writing from a blank page."
prompt: |
  You are an experienced analytics engineer documenting a dbt model. The reader of this documentation is an analyst or BI developer who will join the project in 6 months and need to understand what this model does and where its data comes from.

  Inputs:
  - Model SQL: {{model_sql}}
  - Model name: {{model_name}}
  - Materialization: {{materialization}} (table, view, incremental, ephemeral)
  - Upstream sources / refs: {{upstream}}
  - Known business context: {{business_context}} (what this model is used for, by whom)
  - Existing documentation conventions in the project: {{conventions}} (e.g., "we use lower_snake_case in descriptions; we always document grain; we tag PII columns")

  Produce:

  ## Model Description (3–5 sentences)
  - Plain-language description of what the model represents
  - Grain — explicitly: "one row per [entity] per [time period]"
  - The use cases this model is designed for (and any uses it is NOT designed for)
  - Refresh cadence and dependencies if relevant

  ## Column Documentation
  For each column in the SELECT list, generate a short, factual description. Conventions:
  - 1 sentence each
  - State the unit, currency, or units of measurement when applicable
  - Flag PII or sensitive columns
  - For any boolean or status column, document the possible values
  - For derived columns (CASE WHENs, aggregations), state how they're computed in plain language
  - Mark columns that are nullable and explain when they're null

  ## Recommended Tests
  Suggest dbt tests for this model. Use the schema.yml test syntax. Cover:
  - Primary key (unique + not_null on the grain column)
  - Referential integrity for any foreign keys to other models
  - accepted_values for any enum or status column
  - Custom tests where business logic dictates (e.g., a revenue column should never be negative; an end_date should be >= start_date)
  - Freshness if applicable to upstream sources

  Be conservative — only suggest tests where the SQL or the business context warrants. Over-testing dbt projects is its own problem.

  ## Open Questions for the Author
  List 2–4 things you cannot infer from the SQL alone and would need the author to clarify before publishing the documentation. Examples: business definitions, intended consumers, edge case behavior.

  Output as a draft schema.yml block (in YAML), followed by the open questions.

  Tone: precise, factual, defensive about ambiguity. Don't invent business meaning the SQL doesn't justify.
variables:
  - "{{model_sql}}"
  - "{{model_name}}"
  - "{{materialization}}"
  - "{{upstream}}"
  - "{{business_context}}"
  - "{{conventions}}"
exampleInput: |
  model_sql: |
    {{ config(materialized='incremental', unique_key='order_id') }}

    with orders as (
      select * from {{ ref('stg_shopify__orders') }}
      where _loaded_at >= (select coalesce(max(_loaded_at), '1900-01-01') from {{ this }})
    ),
    customers as (
      select * from {{ ref('dim_customers') }}
    ),
    enriched as (
      select
        o.order_id,
        o.customer_id,
        c.customer_segment,
        o.created_at_utc,
        o.order_status,
        o.subtotal_usd,
        o.shipping_usd,
        o.tax_usd,
        o.discount_usd,
        o.subtotal_usd + o.shipping_usd + o.tax_usd - o.discount_usd as total_usd,
        case when o.order_status = 'cancelled' then true else false end as is_cancelled,
        case when o.refunded_at_utc is not null then true else false end as is_refunded,
        o._loaded_at
      from orders o
      left join customers c on o.customer_id = c.customer_id
    )
    select * from enriched
  model_name: fct_orders
  materialization: incremental
  upstream: stg_shopify__orders, dim_customers
  business_context: Used by finance for revenue reporting and by CX for customer order history. Source of truth for order-level analysis. Must reconcile to Shopify dashboard within 0.5%.
  conventions: lower_snake_case descriptions; always document grain; tag PII columns; tests live in schema.yml not separate files
exampleOutput: |
  ```yaml
  version: 2

  models:
    - name: fct_orders
      description: |
        Order-level fact table built from Shopify order events, enriched with customer segment from dim_customers.
        Grain: one row per order_id. Each row is an order in any status (placed, fulfilled, cancelled, refunded).
        Used by finance for revenue reporting and by CX for customer order history. Should reconcile to the Shopify
        dashboard within 0.5%. Refreshes incrementally on _loaded_at.
        Not designed for line-item analysis — use fct_order_lines for that.
      columns:
        - name: order_id
          description: Primary key. Unique identifier of the Shopify order.
          tests:
            - unique
            - not_null
        - name: customer_id
          description: Foreign key to dim_customers. Null if the order was placed by a guest checkout.
          tests:
            - relationships:
                to: ref('dim_customers')
                field: customer_id
                config:
                  where: "customer_id is not null"
        - name: customer_segment
          description: Segment of the customer at the time of join (current value from dim_customers, not point-in-time). Null when customer_id is null.
        - name: created_at_utc
          description: Timestamp the order was created, in UTC. Source of truth for order date.
          tests:
            - not_null
        - name: order_status
          description: Lifecycle status of the order. Sourced from Shopify.
          tests:
            - not_null
            - accepted_values:
                values: ['placed', 'fulfilled', 'cancelled', 'refunded', 'pending']
                # NOTE: confirm with author whether 'pending' is a valid status in stg_shopify__orders
        - name: subtotal_usd
          description: Order subtotal in USD before shipping, tax, and discount. Always >= 0.
          tests:
            - not_null
            - dbt_utils.expression_is_true:
                expression: ">= 0"
        - name: shipping_usd
          description: Shipping charges applied to the order, in USD.
        - name: tax_usd
          description: Tax applied to the order, in USD.
        - name: discount_usd
          description: Total discount applied to the order, in USD. Stored as a positive number.
        - name: total_usd
          description: |
            Order total in USD. Computed as subtotal_usd + shipping_usd + tax_usd - discount_usd.
            This is the figure used for revenue reporting and should reconcile to the Shopify total.
          tests:
            - not_null
            - dbt_utils.expression_is_true:
                expression: ">= 0"
        - name: is_cancelled
          description: True when order_status = 'cancelled'.
        - name: is_refunded
          description: True when refunded_at_utc is not null on the upstream order. Independent of order_status — a fulfilled order can also be refunded.
        - name: _loaded_at
          description: Loader timestamp from stg_shopify__orders. Used as the incremental key.
          tests:
            - not_null
  ```

  ## Open Questions for the Author
  1. Does `total_usd` exclude any fees (gift card redemption, store credit) that should be netted? The current expression assumes the four columns are exhaustive.
  2. Should refunded orders be included in revenue reporting at full `total_usd`, or netted to zero? This affects how downstream finance models should consume this column.
  3. The `accepted_values` test for `order_status` uses my best guess at the status enum — please confirm against the source.
  4. Is `customer_segment` intended to be point-in-time (segment at order time) or current (segment now)? The current join produces "current" — which is fine, but should be noted in the description if downstream finance wants point-in-time.
tips:
  - "Always document the grain explicitly. 'One row per [entity] per [period]' is the single most useful sentence in dbt documentation."
  - "Be conservative about tests. Every test you add becomes someone else's CI failure — only test invariants the SQL or business actually guarantees."
  - "Flag the difference between point-in-time joins and current-state joins in the description. This is the source of half of all 'why are these numbers different' tickets."
  - "Generate the open questions as a separate section. The questions you can't answer from the SQL alone are exactly the ones that matter most for documentation quality."
  - "If a derived column has any business logic in it, restate the formula in plain language in the description — not just the SQL. Future readers won't open the model file."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - sql-refactor-review
  - metric-definition-spec
  - data-quality-test-plan
tags:
  - dbt
  - documentation
  - schema-yml
  - analytics-engineering
  - data-modeling
---
