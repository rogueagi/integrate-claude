---
title: "Propose naming conventions for a semantic layer"
slug: semantic-layer-naming
function: data
role: analytics-engineering
description: "Produce a naming convention spec for tables, columns, metrics, and dimensions in a semantic layer or dbt project — covering prefixes, casing, and the awkward edge cases."
useCase: "Use this prompt when starting (or cleaning up) a dbt project, semantic layer, or data warehouse and need a written naming convention everyone can point to. Generates the spec, the rationale, and the worked examples — including the edge cases that always start naming-debate Slack threads."
prompt: |
  You are a senior analytics engineer writing the naming convention spec for a data warehouse and semantic layer. The audience is the data team plus any analyst or engineer who builds models, metrics, or dashboards.

  Inputs:
  - Stack: {{stack}} (warehouse, dbt, semantic layer / metrics tool, BI tool)
  - Existing project state: {{existing_state}} (greenfield, partial conventions, full mess)
  - Constraints from tools: {{constraints}} (e.g., Looker LookML restrictions, BigQuery column name rules)
  - Areas to cover: {{areas}} (sources, staging, intermediate, marts, metrics, dimensions, measures)
  - Known pain points: {{pain_points}} (e.g., "we have 3 tables called 'orders'", "case is inconsistent")

  Produce:

  ## Principles (5 max)
  Short list of principles the conventions follow. Each principle gets one sentence. Examples: "Names describe what something is, not where it came from"; "Casing is uniform across layers"; "Grain is in the name when ambiguous."

  ## Layer-by-Layer Conventions
  For each model layer (sources, staging, intermediate, marts) and each object type:
  - The naming pattern (with placeholders)
  - 2–3 worked examples
  - Why this pattern (the principle it serves)

  Patterns to specify:
  - Source tables: `<source>__<entity>` or similar
  - Staging models: `stg_<source>__<entity>`
  - Intermediate models: `int_<entity>__<purpose>`
  - Mart models: `fct_<grain>` and `dim_<entity>`
  - Snapshots: `snap_<entity>`
  - Seeds: `seed_<purpose>__<entity>`

  ## Column Conventions
  - Casing (snake_case across the warehouse)
  - Booleans: `is_*` / `has_*` prefix
  - Timestamps: `*_at` for moments, `*_date` for calendar dates, suffix `_utc` if non-obvious
  - Foreign keys: `<entity>_id`
  - Currency-bearing columns: include currency in the name (`amount_usd`)
  - Counts and rates: explicit (`count_*`, `rate_*`, `pct_*`)
  - Status/enum columns: `<entity>_status`

  ## Metric and Dimension Conventions (Semantic Layer)
  - Metric names: snake_case, plain English nouns/noun phrases (`monthly_recurring_revenue`, not `mrr_metric_v2`)
  - Dimensions: same casing as columns; descriptive
  - Measures vs. metrics: how to distinguish in your tool
  - Avoid versioned names — use deprecation, not v2 suffixes

  ## The Edge Cases (the section everyone actually needs)
  Address the cases that produce naming arguments:
  - Same entity at different grains (orders vs. order_lines)
  - Pivoted vs. long-format columns
  - Point-in-time vs. current-state versions of the same dimension (`dim_customers_current` vs. `dim_customers_history`)
  - Renamed columns from upstream sources
  - Test/sandbox/scratch models
  - Personal models in shared projects
  - Multi-business-unit naming (when one warehouse serves multiple products)

  ## Migration / Enforcement
  - How to migrate existing models to the convention (rename, alias, or grandfather)
  - Enforcement mechanism (CI lint rules, dbt project_evaluator, manual review)
  - What is non-negotiable vs. style preference

  Tone: pragmatic, opinionated, willing to take a side on contested choices. A naming spec that hedges every choice produces no consensus.
variables:
  - "{{stack}}"
  - "{{existing_state}}"
  - "{{constraints}}"
  - "{{areas}}"
  - "{{pain_points}}"
exampleInput: |
  stack: Snowflake + dbt Cloud + Looker (LookML) + soon adding dbt Semantic Layer for non-Looker consumers
  existing_state: Partial conventions — staging is consistent, marts are a mix of fct_ / dim_ / nothing; column casing varies (some camelCase from source, some snake_case)
  constraints: |
    - Snowflake is case-insensitive but stores names as upper unless quoted
    - LookML view names cannot contain double underscores
    - Some BI tool restrictions on metric names with leading underscores
  areas: sources, staging, intermediate, marts, metrics, dimensions
  pain_points: |
    - Three different "customers" tables exist
    - Boolean columns are inconsistent (is_active vs. active vs. status_active)
    - Currency columns don't always indicate USD vs. local
    - We have models named v2 / v3 / final / final_final
exampleOutput: |
  ## Principles
  1. **Names describe what an object is, not where it came from.** A mart model is named for its business meaning, not the source system.
  2. **Casing is uniform across layers — snake_case everywhere.** Source-system camelCase is renamed at the staging layer.
  3. **Grain is in the name when ambiguous.** `fct_orders` is order-grain; `fct_order_lines` is line-grain. Never both in one name.
  4. **Versioned names are forbidden.** Use deprecation, not `v2`.
  5. **Naming conflicts get resolved on the principle, not the squeakiest stakeholder.**

  ## Layer-by-Layer Conventions

  **Sources (Fivetran / Stitch / etc.)**
  Pattern: kept as-is in the source database; documented in `sources.yml`. Do not rename at the source layer.

  **Staging models** (`models/staging/<source>/`)
  Pattern: `stg_<source>__<entity>` (single underscore separates source and entity)
  - `stg_stripe__charges`
  - `stg_salesforce__opportunities`
  - `stg_segment__pageviews`
  Why: source is preserved for traceability; the rest of the project can ignore source by referring to mart-layer names. Note: LookML disallows double underscores in view names — staging models are not exposed as Looker views, so this is fine.

  **Intermediate models** (`models/intermediate/`)
  Pattern: `int_<entity>__<purpose>`
  - `int_orders__joined_customers`
  - `int_subscriptions__events_pivoted`
  Why: intermediate models are scaffolding for marts; the purpose suffix prevents 12 differently-named "joined" models.

  **Mart models** (`models/marts/`)
  - Facts: `fct_<grain>` — `fct_orders`, `fct_order_lines`, `fct_subscription_events`. Grain is encoded in the name.
  - Dimensions: `dim_<entity>` — `dim_customers`, `dim_products`, `dim_dates`.
  - Aggregates / OBTs: `agg_<grain>__<purpose>` — `agg_customer__lifetime_metrics`. (Use sparingly.)
  Why: every reader knows what `fct_` and `dim_` mean. The grain in the fact name resolves the existing 3-customers-tables problem.

  **Snapshots:** `snap_<entity>` — `snap_subscriptions`, `snap_opportunities`.
  **Seeds:** `seed_<purpose>__<entity>` — `seed_country_codes__iso`, `seed_test_accounts__excluded`.

  ## Column Conventions
  - **Casing:** snake_case everywhere. Source camelCase is renamed at the staging layer (`createdAt` → `created_at_utc`).
  - **Booleans:** `is_*` (state) or `has_*` (possession). Always boolean type, never 0/1 or 'Y'/'N'. Examples: `is_active`, `is_internal`, `has_payment_method`.
  - **Timestamps:** `*_at` for instants. Always include `_utc` suffix if the column is in UTC and a non-UTC version may exist (`created_at_utc`). Calendar dates: `*_date` (no time, no zone).
  - **Foreign keys:** `<entity>_id` matching the dimension table's primary key. `customer_id` joins `dim_customers.customer_id`.
  - **Currency-bearing columns:** include the currency in the name. `amount_usd`, `total_usd`, `arr_usd`. If multi-currency, use `amount` + a separate `currency` column, but never leave currency implicit.
  - **Counts and rates:** explicit prefixes. `count_orders`, `rate_conversion`, `pct_active_users`.
  - **Status/enum columns:** `<entity>_status` — `order_status`, `subscription_status`. Always paired with an `accepted_values` test.
  - **PII columns:** flag with a `meta: { contains_pii: true }` in schema.yml; column names are unaffected.

  ## Metric and Dimension Conventions
  - Metric names: snake_case plain English. `monthly_recurring_revenue`, `gross_logo_churn_rate`, `trial_to_paid_conversion`.
  - No abbreviations except when the abbreviation is the canonical name (`mrr` is acceptable as an alias; `monthly_recurring_revenue` is the canonical).
  - No version suffixes. If a metric definition changes, deprecate the old metric and create a new metric with a new name (`mrr_v1` → deprecate; new metric `mrr` with a versioned spec).
  - Dimensions in semantic layer use same column conventions. Display names (in BI tool) can be human-friendly ("Customer Segment"); machine names are snake_case.

  ## The Edge Cases
  - **Same entity at different grains:** name on grain. `fct_orders` (order-grain), `fct_order_lines` (line-grain). Never have two models that could be either.
  - **Pivoted vs. long-format:** suffix the wide model with `__wide` only when both versions coexist (rare). Default to long.
  - **Point-in-time vs. current-state dimensions:** default `dim_customers` is current-state. Historical SCD2 version is `dim_customers_history` (with `valid_from` / `valid_to` columns). Never let "current vs. historical" be ambiguous.
  - **Renamed upstream columns:** rename at staging, alias the original in a comment on the staging model. Downstream uses the new name only.
  - **Test / scratch models:** `_scratch_*` or in a personal schema (`<analyst>_dev`). Never in mart paths. Excluded from CI deploys.
  - **Personal exploratory models in shared projects:** prohibited in `marts/`. Allowed in a `sandbox/` directory that is not built in production.
  - **Multi-business-unit naming:** prefix the BU at the mart layer when one warehouse serves multiple products: `marts/<bu>/fct_<grain>` (e.g., `marts/checkout/fct_payments`, `marts/billing/fct_invoices`). Cross-BU shared dimensions live in `marts/shared/`.
  - **The "active" boolean problem:** standardize to `is_active`. Migrate any `active`, `status_active`, or `active_flag` to `is_active`. Single source of truth.

  ## Migration / Enforcement
  - **New models:** required to follow the convention from day 1. Enforced via CI (dbt project_evaluator + a custom linter for naming patterns).
  - **Existing models:** rename in a single migration PR per layer, with downstream aliases for one quarter. After the deprecation window, aliases removed.
  - **The "v2 / v3 / final" cleanup:** one-time exercise. For each affected model, decide which is canonical, rename to the canonical name, deprecate the others.
  - **Non-negotiable:** snake_case casing; `stg_` / `int_` / `fct_` / `dim_` prefixes; explicit currency in column names; no version suffixes.
  - **Style preference (open to discussion):** specific suffix choices for intermediate purposes; how to name aggregate models.

  Open this spec for review on a 6-month cadence. Conventions calcify; the project changes.
tips:
  - "Take a side on contested choices. A spec that hedges everything produces no agreement and changes nothing."
  - "Make 'grain in the name' a non-negotiable. The single largest source of analyst confusion is two tables that could each be the answer to the same question."
  - "Forbid version suffixes hard. Once `_v2` is allowed, the project ends up with `final_v3_actual_final.sql`."
  - "Casing decisions matter less than uniformity. Pick one, document it, lint it. Mixed casing is the issue, not which one wins."
  - "Schedule a six-month convention review. Stacks change, conventions go stale, and the worst projects are the ones with naming docs from three years ago that no one follows."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - dbt-model-documentation
  - metric-definition-spec
  - self-serve-data-glossary
tags:
  - naming-conventions
  - semantic-layer
  - dbt
  - data-modeling
  - analytics-engineering
---
