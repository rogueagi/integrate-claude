---
title: "Write a rigorous metric definition spec"
slug: metric-definition-spec
function: data
role: analytics-engineering
description: "Produce a metric definition spec for a metrics layer (LookML, Cube, dbt Semantic Layer, MetricFlow) that closes the ambiguity that causes downstream disagreement."
useCase: "Use this prompt when adding a metric to the semantic layer or company metrics dictionary. Forces an explicit definition, grain, filter logic, edge cases, and known gotchas — the spec that prevents three teams from each defining 'active customer' differently."
prompt: |
  You are a senior analytics engineer writing the definition spec for a new metric in the company's metrics layer. The audience is everyone who will reference this metric: analysts, BI developers, finance, and downstream automated reports.

  Inputs:
  - Metric name: {{metric_name}}
  - Plain-language intent: {{intent}}
  - Underlying table(s) and key columns: {{tables}}
  - How it's currently being calculated (if anywhere): {{current_definitions}}
  - Known disagreements or ambiguity to resolve: {{known_ambiguity}}
  - Audience for the metric: {{audience}}

  Produce a metric spec with these sections:

  ## Metric Definition
  - **Name** (canonical): {{metric_name}}
  - **One-sentence definition** suitable for a dashboard tooltip
  - **Type:** count, sum, ratio, average, etc.
  - **Unit:** count of X, USD, percentage, etc.
  - **Source of truth table:** the canonical model
  - **Grain:** what dimension this can be computed at (e.g., per day, per customer, per channel)

  ## Formal Calculation
  Pseudo-SQL or expression form. Be explicit about:
  - The numerator and denominator if it's a ratio
  - The filter conditions (which records are included)
  - The time grain (when is the metric "as of")
  - Any deduplication logic

  ## What Counts and What Doesn't (the most important section)
  Walk through edge cases explicitly. For each, state in/out and why.
  Examples to address (pick those relevant to the metric):
  - Trial users
  - Cancelled / refunded transactions
  - Internal / test accounts
  - Multi-product or multi-seat accounts
  - Customers paused or dunning
  - Currency conversion if multi-currency
  - Time zone handling
  - Late-arriving data

  ## Allowed Slices and Disallowed Slices
  - The dimensions this metric is safe to slice by
  - The dimensions this metric should NOT be sliced by (and why — usually because the slice produces meaningless aggregation)

  ## Known Gotchas / Common Mistakes
  Document the 2–4 most common ways people get this metric wrong, including any prior incorrect definitions in {{current_definitions}}.

  ## Reconciliation
  - What other metric or report this should reconcile to (e.g., "should match the finance MRR report within 1%")
  - The owner team responsible for the source of truth

  ## Versioning
  - Effective date
  - Replaces / deprecates: any prior definition

  Tone: pedantic in the productive sense — every ambiguity surfaced and resolved. The goal is to never have the "wait, but does that include trials?" conversation again.
variables:
  - "{{metric_name}}"
  - "{{intent}}"
  - "{{tables}}"
  - "{{current_definitions}}"
  - "{{known_ambiguity}}"
  - "{{audience}}"
exampleInput: |
  metric_name: monthly_recurring_revenue (MRR)
  intent: The recurring monthly revenue from active paid subscriptions. Used by finance for board reporting and by GTM for sales attainment.
  tables: |
    fct_subscriptions (one row per subscription per state change)
    dim_customers
    fct_invoices (for reconciliation, not for MRR calculation)
  current_definitions: |
    Finance: SUM(monthly_recurring_amount_usd) on active subscriptions as of month-end, excluding trials.
    Sales ops dashboard: SUM(billing_amount) / billing_period_months on subscriptions where status = 'active'.
    Product analytics dashboard: appears to include 14-day trial subs, producing a number ~7% higher than finance.
  known_ambiguity: |
    1. Are paused subscriptions in MRR? (currently inconsistent)
    2. Annual contracts billed up front — included at 1/12 of contract value, or excluded?
    3. Multi-currency — convert at booking FX rate or current FX rate?
    4. Discounts — is MRR net of discount or gross?
  audience: Finance, GTM ops, product analytics, board / investor reporting
exampleOutput: |
  ## Metric Definition
  - **Name (canonical):** monthly_recurring_revenue (MRR)
  - **One-sentence definition:** The total monthly recurring revenue from active paid subscriptions, normalized to a monthly figure and net of standing discounts.
  - **Type:** sum
  - **Unit:** USD per month
  - **Source of truth table:** `fct_subscriptions` (state at the as-of date)
  - **Grain:** computable per day (point-in-time), commonly reported per month-end. Sliceable by customer, plan, segment.

  ## Formal Calculation
  ```
  MRR(as_of_date) =
    SUM(
      CASE
        WHEN sub.billing_period = 'monthly' THEN sub.billing_amount_usd_net_discount
        WHEN sub.billing_period = 'annual'  THEN sub.billing_amount_usd_net_discount / 12
        WHEN sub.billing_period = 'quarterly' THEN sub.billing_amount_usd_net_discount / 3
      END
    )
  WHERE sub.status IN ('active')
    AND sub.is_trial = FALSE
    AND sub.start_date <= as_of_date
    AND (sub.end_date IS NULL OR sub.end_date > as_of_date)
  ```
  Time zone: dates are evaluated in UTC.
  Currency: amounts are in USD, converted at the booking FX rate fixed on the subscription start date (not the current FX rate).

  ## What Counts and What Doesn't
  - **Trials (free or paid trial periods):** OUT. Only includes subscriptions where `is_trial = FALSE`.
  - **Paused subscriptions (`status = 'paused'`):** OUT. Pause is reversible; treat as not contributing to MRR until reactivated. (This resolves the inconsistency in the prior product analytics dashboard.)
  - **Cancelled / churned subscriptions:** OUT. `status = 'cancelled'` is excluded.
  - **Annual contracts billed up front:** IN, at 1/12 of the annual contract value (net of discount).
  - **Quarterly billing:** IN, at 1/3 of the quarterly amount.
  - **Refunded transactions:** Refunds do not affect MRR. They affect cash and revenue but not the recurring run-rate metric. Use `net_revenue` for refund-aware analysis.
  - **Internal / test accounts (`dim_customers.is_internal = TRUE`):** OUT. Always exclude.
  - **Multi-seat / multi-line subscriptions:** Each line item rolls up to the subscription's `billing_amount_usd_net_discount`. No double-counting at the subscription level.
  - **Discounts:** Standing discounts are netted in MRR. One-time credits or coupons applied to a single invoice do not affect MRR.
  - **Currency:** booking FX rate on the subscription start date. Re-conversion at current FX is explicitly not done — this preserves continuity of MRR through FX volatility, but means MRR diverges from current-FX revenue. (See Reconciliation.)
  - **Late-arriving data:** subscriptions with a start_date in the past but loaded today: included as of their start_date in retroactive snapshots.

  ## Allowed Slices and Disallowed Slices
  - **Allowed:** customer_id, plan, billing_period, customer_segment, acquisition_channel, sales_owner, country, signup_cohort.
  - **Disallowed / dangerous:**
    - Slicing by `invoice_id` — invoices are not the grain; this produces over- or under-counting.
    - Slicing by `is_trial` — trials are excluded by definition; the slice always returns FALSE.
    - Slicing by date-of-payment — MRR is point-in-time on the subscription state, not on payment.

  ## Known Gotchas / Common Mistakes
  1. **Including trials.** The product analytics dashboard's prior calculation included trial subscriptions, inflating MRR by ~7%. The corrected calculation uses `is_trial = FALSE`.
  2. **Conflating MRR with billed revenue.** Annual subscriptions paid up front contribute $X to cash but $X/12 to MRR. Anyone reading both should know which one they're looking at.
  3. **Adding cancelled MRR to "ARR" without netting churn.** ARR = MRR × 12 only at a point in time; bridging across periods requires the standard new/expansion/contraction/churn decomposition.
  4. **Currency drift.** A customer's MRR contribution does not change when FX moves; this is intentional. Anyone doing FX-aware revenue analysis must use a different metric (e.g., `revenue_at_current_fx`).

  ## Reconciliation
  - Should reconcile to finance's month-end MRR within 0.5%. Discrepancies above that threshold trigger a tie-out exercise (owner: finance + analytics engineering).
  - Should not be expected to match billed revenue from `fct_invoices` — different concept. Reconciliation between the two uses the standard ARR roll-forward bridge.
  - Owner team for source of truth: analytics engineering. Owner of the metric definition: finance.

  ## Versioning
  - Effective date: 2024-04-01
  - Replaces: any prior MRR definition in product analytics or sales ops dashboards. Supersedes the inconsistent treatments of trials and paused subscriptions documented above.
  - Migration plan: legacy dashboards will be re-pointed to the canonical metric within 30 days; old definitions will be flagged in the catalog.
tips:
  - "The 'what counts and what doesn't' section is where the spec actually earns its keep. Every metric disagreement in your company traces back to one of these edge cases."
  - "Be explicit about time zone and currency. These are the two silent sources of inter-team disagreement that nobody documents until something blows up."
  - "Document allowed and disallowed slices. Telling people what NOT to do with a metric prevents more bad dashboards than telling them what to do."
  - "Always include a reconciliation target — 'should match the finance MRR within 0.5%.' Without a tie-out target, drift becomes invisible."
  - "Version the spec. When you change a definition, the old one needs to be deprecated explicitly so nobody is silently consuming the wrong number."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - dbt-model-documentation
  - semantic-layer-naming
  - self-serve-data-glossary
tags:
  - metrics-layer
  - semantic-layer
  - data-modeling
  - mrr
  - analytics-engineering
---
