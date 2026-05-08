---
title: "Review and propose refactors for a SQL query"
slug: sql-refactor-review
function: data
role: analytics-engineering
description: "Produce a structured review of a SQL query — correctness, readability, performance, and dbt-fitness — with concrete refactor suggestions."
useCase: "Use this prompt when reviewing a colleague's SQL or your own after a quick first draft. Forces an explicit pass on correctness before style, and produces concrete refactor suggestions instead of vague 'this is messy' feedback."
prompt: |
  You are a senior analytics engineer reviewing a SQL query. The author is asking for a thorough review before merging. Your job is to surface real issues, not nitpicks, and to give specific, actionable refactor suggestions.

  Inputs:
  - Query: {{query}}
  - Warehouse / dialect: {{warehouse}}
  - Purpose / business context: {{purpose}}
  - Where this runs: {{run_context}} (dbt model, ad-hoc, scheduled job, BI tool view)
  - Performance constraints if any: {{performance}}
  - Project conventions to honor: {{conventions}}

  Produce a review with these sections:

  ## Correctness Issues (highest priority)
  Bugs that produce wrong numbers. For each:
  - The issue, with the line or expression that contains it
  - Why it's wrong (what edge case or input causes incorrect output)
  - The fix
  Examples to look for:
  - Joins that fan out (one-to-many where one-to-one is intended)
  - NULL handling: NULLs swallowed in COUNT(), NULLs in IN(), NULL-equality
  - Time zone confusion (mixed UTC and local)
  - Window functions partitioned wrong
  - Date math near month/year boundaries
  - Implicit type coercion
  - Aggregations on filtered subsets that exclude needed rows

  ## Readability and Maintainability
  - CTE structure: does it help comprehension or just add nesting?
  - Naming: are CTE and column aliases descriptive?
  - SELECT *: where it's risky (across joins, in models with downstream consumers)
  - Magic numbers / strings without named meaning
  - Comments where they actually help vs. where they restate the SQL

  ## Performance
  - Joins or filters that should be pushed earlier
  - Unnecessary self-joins or correlated subqueries
  - Missing partition / cluster pruning ({{warehouse}}-specific)
  - Wide SELECTs on tables with many columns
  - Repeated subqueries that could be a single CTE
  Be specific to {{warehouse}} — generic perf advice is rarely the right call.

  ## dbt / Project Fit (if applicable)
  - References (`ref()`, `source()`) used correctly
  - Materialization appropriate to size and refresh pattern
  - Tests and documentation present?
  - Project conventions from {{conventions}} honored

  ## Refactor Sketch
  Provide a refactored version of the query (or the highest-leverage section) demonstrating the most important suggestions. Don't rewrite the whole thing if 30% of the changes get 90% of the value.

  ## What's Fine
  Two to three things that are well done. Reviews that are 100% criticism are rarely useful and often miss real strengths to preserve.

  Tone: technical, direct, respectful. Surface real issues; don't manufacture concerns to look thorough.
variables:
  - "{{query}}"
  - "{{warehouse}}"
  - "{{purpose}}"
  - "{{run_context}}"
  - "{{performance}}"
  - "{{conventions}}"
exampleInput: |
  query: |
    select
      c.customer_id,
      c.email,
      count(*) as order_count,
      sum(o.total) as total_spent,
      max(o.created_at) as last_order_date,
      case when count(*) > 5 then 'VIP' else 'Regular' end as customer_tier
    from customers c
    left join orders o on c.customer_id = o.customer_id
    left join order_items oi on o.order_id = oi.order_id
    where o.created_at >= '2024-01-01'
    group by c.customer_id, c.email
  warehouse: Snowflake
  purpose: Build a customer summary table for the lifecycle marketing team. Should give one row per customer with their order count and total spend in 2024, and a tier flag.
  run_context: dbt model (mart layer), runs daily, full-refresh
  performance: Customers ~2M rows; orders ~30M rows; order_items ~180M rows. Expected runtime under 5 minutes.
  conventions: snake_case columns; explicit currency suffix on money columns; fct_/dim_ prefixes; no SELECT *; tests on grain.
exampleOutput: |
  ## Correctness Issues
  1. **The `order_items` join multiplies the row count, breaking `order_count` and `total_spent`.** Lines: the third join. Each order has multiple line items, so after the join, an order with 4 line items contributes 4 rows. `count(*)` then counts items, not orders, and `sum(o.total)` quadruples that order's revenue. This is the most consequential bug — every aggregate column is wrong.
     - Fix: drop the `order_items` join entirely (it's never used). Aggregate at the orders grain.

  2. **`where o.created_at >= '2024-01-01'` on a LEFT JOIN converts it to an INNER JOIN.** Customers with no 2024 orders are filtered out completely, even though `LEFT JOIN` was intended to keep them. Result: this query returns only 2024-active customers, not all customers — silently excluding the customers lifecycle marketing most cares about (lapsed users).
     - Fix: move the date filter into the join condition: `LEFT JOIN orders o ON c.customer_id = o.customer_id AND o.created_at >= '2024-01-01'`. Then COUNT and SUM on `o.order_id` (not `*`) so customers with no 2024 orders get 0 / NULL → coalesce to 0.

  3. **`count(*)` after a LEFT JOIN counts at least 1 even for customers with no orders.** Even after fix #2, `count(*)` will be 1 for a customer with no matched orders (the LEFT JOIN produces a row with NULL order columns). Use `count(o.order_id)` to count only matched rows.

  4. **Time zone is unstated.** `o.created_at` may be UTC or local. The `'2024-01-01'` literal is a naive date. If `created_at` is in a non-UTC zone, the filter is a few hours off the intended window. Either cast to a known zone or rename the column to `created_at_utc`.

  5. **`sum(o.total)` — currency is implicit.** If `orders.total` is multi-currency, this sums dollars and euros without conversion. Confirm currency homogeneity before trusting the column.

  ## Readability and Maintainability
  - No CTE structure: a single SELECT with three joins and a CASE is fine for a small query, but in a dbt mart model, a `customers`, `orders_2024`, `aggregated` CTE pattern makes the logic reviewable in pieces and easier to test.
  - `o.total` is ambiguous (is this gross or net of discount/refund?). Either rename in staging or alias here with a comment.
  - The hard-coded VIP threshold of 5 orders is a magic number — pin it to a variable or comment with the business reason.
  - The `customer_tier` CASE will be wrong (counting line items, not orders) until the row-fanout bug is fixed; fixing the join fixes the CASE.

  ## Performance (Snowflake)
  - `order_items` is 180M rows; joining and discarding it is expensive. Removing the join (per Correctness #1) is also the largest perf win.
  - `customers` × `orders` is a 2M × 30M-filter-to-≈8M join. With Snowflake's automatic clustering on `customer_id` (verify), this is fine.
  - If `orders.created_at` has a clustering or partitioning key, the date filter being inside the join condition (per Fix #2) lets Snowflake prune. Confirm the clustering key.
  - GROUP BY on `customer_id` and `email` — `email` adds nothing because `customer_id` is unique. Drop `email` from the GROUP BY and instead `MAX(c.email)` (or just keep it ungrouped if `c.customer_id` is the key in `customers`).

  ## dbt / Project Fit
  - References should be `{{ ref('dim_customers') }}` and `{{ ref('fct_orders') }}`. The current query uses bare table names — likely a stub that needs `ref()` before merge.
  - Materialization is full-refresh daily; for 2M customers this is fine. If the table grows, consider incremental on a load timestamp.
  - Column conventions: rename `total` → `total_usd` (or whatever currency); rename `last_order_date` → `last_order_at_utc` if it's a timestamp; rename `created_at` references throughout.
  - Add a `unique` and `not_null` test on `customer_id` (the grain) in schema.yml.

  ## Refactor Sketch
  ```sql
  with customers as (
      select * from {{ ref('dim_customers') }}
  ),
  orders_2024 as (
      select
          customer_id,
          order_id,
          total_usd,
          created_at_utc
      from {{ ref('fct_orders') }}
      where created_at_utc >= '2024-01-01'
        and created_at_utc <  '2025-01-01'
  ),
  aggregated as (
      select
          c.customer_id,
          c.email,
          count(o.order_id)        as order_count_2024,
          coalesce(sum(o.total_usd), 0) as total_spent_usd_2024,
          max(o.created_at_utc)    as last_order_at_utc,
          case
              when count(o.order_id) > 5 then 'VIP'
              when count(o.order_id) > 0 then 'Regular'
              else 'Inactive'
          end                      as customer_tier
      from customers c
      left join orders_2024 o
          on c.customer_id = o.customer_id
      group by c.customer_id, c.email
  )
  select * from aggregated
  ```
  Notes on the refactor:
  - The `order_items` join is gone — was the cause of every aggregate being wrong.
  - The date filter sits inside the `orders_2024` CTE, which preserves the LEFT JOIN behavior for inactive customers.
  - `count(o.order_id)` (not `*`) so inactive customers correctly get 0.
  - Year upper bound added to make the window unambiguous and prevent the query from drifting into 2025 data without a code change.
  - `customer_tier` now has an `Inactive` branch, which is the segment the lifecycle team most needs.

  ## What's Fine
  - The CASE for tiering is a clean structure; the bug is in the inputs, not the structure.
  - The use of `MAX(created_at)` for last order date is the right pattern.
  - Filtering at the year boundary rather than rolling 365 days is fine for the stated purpose, though worth confirming with the lifecycle team.
tips:
  - "Lead with correctness. A query with elegant CTEs and wrong numbers is worse than ugly SQL with right numbers."
  - "The LEFT JOIN + WHERE-on-right-side bug is one of the most common silent SQL errors. Always check whether a date or status filter on the right table is in the WHERE or in the ON clause."
  - "Row-fanout from extra joins quietly multiplies aggregates. Whenever a query joins a child table that isn't used in the SELECT, ask why it's there."
  - "Performance suggestions should be warehouse-specific. Generic 'add an index' advice doesn't apply to Snowflake or BigQuery; clustering, partitioning, and pruning rules are different."
  - "Always close with what's working. Reviews that are pure criticism erode trust and miss strengths the author should preserve in the next query."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - dbt-model-documentation
  - data-quality-test-plan
  - metric-definition-spec
tags:
  - sql
  - code-review
  - refactor
  - dbt
  - analytics-engineering
---
