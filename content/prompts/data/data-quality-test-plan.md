---
title: "Plan data quality tests for a new pipeline"
slug: data-quality-test-plan
function: data
role: analytics-engineering
description: "Produce a tiered data quality test plan for a new ingest or pipeline — covering source freshness, schema, volume, and business-logic checks without over-testing."
useCase: "Use this prompt when standing up a new pipeline or dbt project area and needing the test plan before you ship to production. Forces a tiered approach so you don't end up with 400 tests, half of them flapping."
prompt: |
  You are a senior analytics engineer designing the data quality test plan for a new pipeline. The goal is to catch real problems early, fail loudly when they matter, and avoid the test-fatigue trap where engineers ignore alerts because half are false positives.

  Inputs:
  - Pipeline overview: {{pipeline_overview}} (source, transformations, destination, downstream consumers)
  - Source(s) and their reliability: {{source_reliability}} (vendor SLA, known issues, schema stability)
  - Critical downstream uses: {{downstream_uses}} (e.g., "drives finance MRR report — must reconcile to Stripe", "powers customer-facing usage dashboard")
  - Existing tests in adjacent areas: {{existing_tests}}
  - Tooling available: {{tooling}} (dbt tests, dbt-utils, dbt-expectations, Great Expectations, Monte Carlo, Elementary, custom)
  - Alert routing: {{alert_routing}} (where failures go, who's on-call)

  Produce a plan with these tiers:

  ## Tier 1: Source / Freshness Tests
  Tests that verify data is arriving and is structurally what we expect. Run these as the first gate.
  - Source freshness (max age since last load) — set thresholds based on source reliability
  - Source row volume bounds (min/max expected daily volume; absolute floor + relative drop %)
  - Schema drift detection (new columns, removed columns, type changes)
  - Specify alert severity: page or ticket?

  ## Tier 2: Structural / Schema Tests
  Tests on the materialized models that verify dbt-level invariants.
  - Primary key uniqueness and not-nullness on every model's grain column
  - Referential integrity for foreign keys to dimension tables
  - Accepted values for status / enum columns
  - Not-null on columns the SQL guarantees won't be null
  - Be conservative — only test what the model actually guarantees

  ## Tier 3: Business Logic Tests
  Tests that verify the pipeline produces correct numbers. These are the highest-value tests and the ones most worth the engineering time.
  - Reconciliation against an external source of truth (e.g., daily revenue total in pipeline = daily revenue total in vendor dashboard within X%)
  - Ratio bounds (e.g., conversion rate should be between 1% and 30%; negative outside means a bug)
  - Cross-table consistency (e.g., sum of order line items = order total)
  - Derived metric stability (large WoW deltas on metrics that should be stable)

  ## Tier 4: Anomaly / Trend Tests
  Optional. Run sparingly. These are softer signals.
  - Volume anomaly detection (today's volume more than 3σ from rolling 30-day mean)
  - Distribution drift on key categorical columns
  - Late-arriving data warnings

  ## Routing and Severity
  For each tier, define:
  - Alert severity (page on-call, ticket, dashboard-only)
  - Owner (analytics engineering, data engineering, business owner)
  - Expected response SLA

  ## What NOT to Test
  Call out 3–5 things that are tempting to test but produce more noise than signal. Examples: testing every nullable column for non-null; testing aggregate metrics that legitimately move day-to-day; testing exact equality on derived columns subject to ordering.

  Tone: pragmatic. The plan should produce a finite, defensible list of tests, not an exhaustive coverage matrix.
variables:
  - "{{pipeline_overview}}"
  - "{{source_reliability}}"
  - "{{downstream_uses}}"
  - "{{existing_tests}}"
  - "{{tooling}}"
  - "{{alert_routing}}"
exampleInput: |
  pipeline_overview: |
    Source: Stripe (Fivetran connector, hourly sync)
    Staging: stg_stripe__charges, stg_stripe__customers, stg_stripe__subscriptions
    Marts: fct_charges (transaction-level), fct_subscription_events (subscription state changes), dim_subscriptions
    Consumers: finance MRR/ARR reporting, GTM dashboards, customer success at-risk model
  source_reliability: Stripe is highly reliable; Fivetran connector has had 2 schema-drift incidents in the last 12 months (both column additions, not breaking)
  downstream_uses: |
    1. Finance MRR report — must reconcile to Stripe dashboard within 0.5%
    2. Customer-facing usage / billing dashboard — wrong numbers are visible to customers
    3. Churn prediction model — feature freshness matters
  existing_tests: dbt project has uniqueness/not-null tests on existing dimension models; no business-logic reconciliation tests yet
  tooling: dbt + dbt-utils + dbt-expectations; Elementary for anomaly detection; Slack for alerts; PagerDuty integration available
  alert_routing: Slack #data-alerts for warnings; PagerDuty for criticals; analytics-eng on-call rotation
exampleOutput: |
  ## Tier 1: Source / Freshness Tests
  - **stg_stripe__charges freshness:** warn at 4h, error at 8h. Stripe is hourly; an 8h gap means the connector is broken. → PagerDuty.
  - **stg_stripe__customers / __subscriptions freshness:** warn at 8h, error at 24h. Less time-critical. → Slack.
  - **Daily charge volume bounds:** absolute floor of 50 charges/day (sanity), and relative bound: today's volume not less than 50% of trailing 7-day median or more than 200%. → Slack first hit, PagerDuty if persists 2 days.
  - **Schema drift on stg_stripe__* tables:** monitor for added/removed columns or type changes via Elementary. Added columns → ticket (non-blocking, common). Removed columns or type changes → PagerDuty (prior incidents had column additions, but type changes would break downstream).
  - **Owner:** analytics engineering on-call.

  ## Tier 2: Structural / Schema Tests
  Apply to all marts:
  - `unique` and `not_null` on grain columns: `charge_id` (fct_charges), `subscription_event_id` (fct_subscription_events), `subscription_id` (dim_subscriptions).
  - `relationships` test from `fct_charges.customer_id` to `dim_customers.customer_id`. Use a where-clause to permit guest charges if any.
  - `accepted_values` on `status`, `currency`, `subscription_state` columns.
  - `not_null` on `created_at_utc`, `amount_usd_net_discount`, `customer_id` (where the SQL guarantees it).
  - **Owner:** model author at PR time; CI blocks on failure.

  ## Tier 3: Business Logic Tests (the highest-value tier)
  - **Daily reconciliation: sum(fct_charges.amount_usd) by date vs. Stripe API daily summary, last 7 days.** Threshold: 0.5% absolute difference. This is the test that earns the rest of the plan its keep — it catches every silent breakage that schema tests miss. → PagerDuty if outside threshold.
  - **MRR computed from dim_subscriptions vs. finance MRR report:** monthly. Threshold: 0.5%. → ticket to finance + analytics-eng.
  - **Subscription state machine integrity:** for each subscription_id, the sequence of `subscription_event_type` should be a valid path (e.g., 'created' → 'active' → 'cancelled', not 'cancelled' → 'active'). Custom dbt test. → Slack.
  - **Charge amount bounds:** `amount_usd >= 0`, `currency in ('USD','EUR','GBP', ...)`. → CI block.
  - **Cross-table: sum of `fct_charges` for a subscription should be ≤ contract value × 1.05 (5% buffer for usage overages).** Catches double-charging or stale dim joins. → ticket.
  - **Owner:** analytics engineering writes; business owner (finance) approves the threshold.

  ## Tier 4: Anomaly / Trend Tests
  - **Daily charge count anomaly (Elementary):** alert when today's count is >3σ from rolling 30-day mean. → Slack only, suppressed on weekends and known marketing-event days.
  - **Daily new-subscription count anomaly:** same setup. → Slack only.
  - **Late-arriving subscription events:** flag any event whose `event_at_utc` is more than 48h before the loader timestamp. Stripe occasionally backfills, but a sudden surge is a quality signal. → ticket.
  - **Owner:** monitored by analytics-eng on-call; not actioned outside business hours unless paired with a Tier 1–3 alert.

  ## Routing and Severity
  | Tier | Severity | Channel | Owner | SLA |
  | --- | --- | --- | --- | --- |
  | Tier 1 critical (freshness, schema-break) | Page | PagerDuty | AE on-call | Acknowledge 30 min |
  | Tier 1 warning (volume bound) | Ticket | Slack #data-alerts | AE on-call | Same business day |
  | Tier 2 | Block CI | n/a | Model author | At PR review |
  | Tier 3 reconciliation | Page | PagerDuty | AE on-call + finance | Acknowledge 1h |
  | Tier 3 logic | Ticket | Slack | AE on-call | Same business day |
  | Tier 4 | Info | Slack only | AE on-call (review weekly) | Weekly review |

  ## What NOT to Test
  - **Don't test every nullable column for not_null.** Many columns are legitimately null (e.g., `cancelled_at_utc` on active subscriptions). Test what the SQL guarantees, not what would feel safer.
  - **Don't test exact equality on derived ratios.** Floating-point drift and ordering produce false positives. Use bounds.
  - **Don't anomaly-test metrics that should move day-to-day** (e.g., daily new charges during a marketing campaign window). Use suppression windows or skip.
  - **Don't reconcile against the dbt project's own MRR for "validation."** Reconcile against an external source (Stripe API or finance's hand-calculated total). A test that compares the model to itself catches nothing.
  - **Don't add a test for every business stakeholder request.** Stakeholder concerns are real but should be addressed in CI / dashboards / docs first; tests are a last resort because they have an ongoing maintenance cost.
tips:
  - "Tier the tests. Treating every test as equally important guarantees alert fatigue and ignored failures."
  - "The single highest-leverage test is reconciliation to an external source of truth. If you only have time for one Tier 3 test, that's the one."
  - "Set thresholds based on the cost of a false positive. A flapping test that wakes someone up at 2am will be silenced and stop catching real problems."
  - "Don't test the model against itself. Self-consistency tests catch nothing — reconciliation has to be against a different system."
  - "Schedule a quarterly test review. Tests accumulate; the marginal value of each one decays. Prune tests that haven't fired meaningfully in 6 months."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - dbt-model-documentation
  - sql-refactor-review
  - anomaly-investigation-plan
tags:
  - data-quality
  - testing
  - dbt
  - pipeline
  - analytics-engineering
---
