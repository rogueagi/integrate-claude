---
title: "Write an SLO definition document for a service"
slug: slo-definition-doc
function: it-security
role: sre
description: "Produce a complete SLO definition with SLIs, error budgets, alerting policy, and consequences when the budget is exhausted."
useCase: "Use this prompt when standing up SLOs for a new service or formalizing what a team has been informally measuring. The output is a document that engineering, product, and SRE can all agree on — and that drives concrete behavior when the error budget runs out."
prompt: |
  You are an SRE writing an SLO definition document. Be precise. SLOs that aren't measurable or actionable are decorative.

  Service:
  - Name: {{service_name}}
  - What it does: {{service_description}}
  - Critical user journeys: {{user_journeys}}
  - Existing telemetry: {{telemetry}}
  - Business sensitivity: {{business_context}}

  Produce:

  1. **SLIs** (3–5 max): for each, specify
     - Exact metric definition (formula with numerator/denominator)
     - Data source and query
     - Reasoning for picking it (and what you rejected)

  2. **SLOs**: target per SLI, time window (rolling 30d preferred), justification — derived from user pain threshold, not pulled from "four nines" mythology

  3. **Error budget**: explicit minutes/requests of allowed bad time per window

  4. **Alerting**: multi-window multi-burn-rate (MWMBR) policy with both fast-burn (page) and slow-burn (ticket) thresholds. Show the math.

  5. **Error-budget policy**: what changes when the budget is exhausted (deploy freeze, reliability work prioritization, on-call posture). Be specific about who can override.

  6. **Reporting cadence**: weekly review, monthly exec view, quarterly target adjustment

  7. **What this SLO is not**: explicit non-goals — things this SLO will not catch and what other measurement covers them

  8. **Open questions** the doc author isn't sure about — don't pretend confidence you don't have

  Audience is the service team and SRE leadership. Direct, no Google SRE Book quotes.
variables:
  - "{{service_name}}"
  - "{{service_description}}"
  - "{{user_journeys}}"
  - "{{telemetry}}"
  - "{{business_context}}"
exampleInput: |
  service_name: search-api
  service_description: Backend search service powering product search across web and mobile. Postgres + OpenSearch + a Redis cache layer.
  user_journeys: 1) Type query, get results in <500ms; 2) Apply filter, get refined results; 3) Pagination through results
  telemetry: Datadog APM, custom RUM events, OpenSearch query logs
  business_context: Search drives 60% of conversions. A 100ms latency increase in past A/B tests dropped conversion 1.8%. Outages over 5 min generate Slack noise from sales.
exampleOutput: |
  # SLO: search-api

  Owner: Search team. Reviewer: SRE platform. Effective: 2026-05-07. Next review: 2026-08-07.

  ## SLIs

  ### SLI-1: Query availability
  - **Definition**: `count(http_requests{service="search-api", route="/search", status<500}) / count(http_requests{service="search-api", route="/search"})`
  - **Source**: Datadog APM (Envoy access logs)
  - **Excludes**: 4xx (client errors are not our availability problem), requests during scheduled maintenance windows tagged `maint:true`
  - **Why**: simplest meaningful availability metric. Rejected: synthetic-only checks (don't reflect real user mix); pod-readiness signals (lie when caching masks backend failures).

  ### SLI-2: Query latency
  - **Definition**: `p95(http_request_duration_seconds{service="search-api", route="/search"})`
  - **Source**: Datadog APM
  - **Why p95 not p99**: p99 is dominated by long-tail filter combinations that are real but rare; the median user feels p95. We track p99 separately on the dashboard but don't SLO it.

  ### SLI-3: Result quality (zero-result rate)
  - **Definition**: `count(search_responses{result_count=0, query_length>=3}) / count(search_responses{query_length>=3})`
  - **Source**: custom Datadog metric emitted by application
  - **Why**: a fast 200 with no results is technically a success but a product failure. Excludes single-character queries (noise).

  ## SLOs

  | SLI | Target | Window | Rationale |
  |---|---|---|---|
  | Availability | 99.9% | rolling 30d | At 800 RPS, 99.9% = ~43 min/month bad time. Customer pain threshold is "I tried twice and it failed." Below 99.5% reaches that. |
  | Latency p95 < 500ms | 99% of 1-min buckets | rolling 30d | A/B data shows 100ms regression = 1.8% conversion drop. 500ms is the upper bound of acceptable based on 2024 RUM. |
  | Zero-result rate | < 8% | rolling 30d | Baseline historical rate is ~5–6%; persistent excursion above 8% has correlated with index-build failures. |

  ## Error budget

  - Availability: 0.1% × 30d = 43.2 minutes of permitted unavailability per rolling 30d
  - Latency: 1% × (number of 1-min buckets) = ~432 bad minutes per 30d
  - Zero-result: ratio metric; no minute-based budget — alert on slope (see below)

  ## Alerting (multi-window multi-burn-rate)

  Availability burn-rate alerts:

  | Severity | Burn rate | Window | Implication |
  |---|---|---|---|
  | Page (fast) | 14.4× | 1h short / 5m long | Whole 30d budget burns in 50 min. Page on-call. |
  | Page (slow) | 6× | 6h short / 30m long | Budget burns in 5 days. Page on-call. |
  | Ticket | 1× | 24h short / 2h long | Budget burns in 30d. Open Linear ticket; no page. |

  Alert fires only when both windows agree (avoid flaps). Math behind 14.4×: budget is 0.1%, alert at 14.4× means 1.44% error rate sustained over 5 min and 1 hour.

  Latency: page when p95 > 500ms for 5 of last 10 minutes; ticket when 1-hour p95 > 500ms even briefly.

  Zero-result: ticket only — page if rate > 15% sustained 30 min (proxy for OpenSearch index broken).

  ## Error budget policy

  When the rolling 30d availability budget is more than 100% consumed:
  1. Search team enters **deploy freeze for non-reliability changes**. Reliability fixes, security patches, and rollbacks are exempt.
  2. Top 3 reliability items move to the top of the team's backlog for the next sprint.
  3. SRE pairs with the team on root-cause work for the highest-impact incident in the window.

  Override: Engineering Director may grant a 7-day exception for a documented business-critical change. The exception goes in the next monthly SLO review.

  When budget is between 50–100% consumed: weekly review trigger; team ranks reliability work but no automatic freeze.

  ## Reporting cadence

  - **Weekly**: search team reviews SLI dashboards in Monday standup
  - **Monthly**: SRE generates a one-page report (current burn, top incidents, budget remaining) reviewed in eng leadership 1:1
  - **Quarterly**: target review — are these still the right SLIs? Is 99.9% the right target given conversion data?

  ## What this SLO is not

  - Not a measure of product correctness — relevance ranking quality is owned by the search-quality team via offline NDCG metrics
  - Not a security signal — auth failures show up here as 4xx (excluded) and are tracked by SecOps separately
  - Not a capacity signal — capacity-driven latency degradation will breach this, but we won't know it's capacity from this metric alone

  ## Open questions

  - Should latency SLO be on RUM (real user) or APM (server-side)? Currently APM; RUM data is noisier but truer to user. Pilot RUM-based SLO in Q3.
  - Cache hit rate is a leading indicator of latency degradation; consider as SLI-4 once we have 60 days of clean data.
  - Mobile vs web split — should we have separate SLOs? Currently combined; investigate if traffic mix shifts materially.
tips:
  - "Pick 3–5 SLIs, not 15. The point is consequences, not coverage. Add metrics to dashboards; reserve SLOs for the few that drive behavior."
  - "Justify your target with user pain or business data, not industry custom. '99.9%' is not a justification; '500ms p95 because A/B data shows conversion drops past that' is."
  - "Multi-window multi-burn-rate alerts are the single highest-leverage change you can make to alert quality. Implement them even if you change nothing else."
  - "Write the error-budget policy with teeth. An SLO that doesn't change behavior when breached is a dashboard, not an SLO."
  - "AI assistance is not a replacement for security review by qualified professionals. Have an experienced SRE review the burn-rate math and the policy consequences before publishing."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - incident-response-playbook
  - runbook-from-alert
  - capacity-planning-memo
tags:
  - slo
  - sre
  - reliability
  - observability
  - error-budget
---
