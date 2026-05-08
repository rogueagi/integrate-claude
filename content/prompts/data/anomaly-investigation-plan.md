---
title: "Plan an investigation into a metric anomaly"
slug: anomaly-investigation-plan
function: data
role: data-analyst
description: "Produce a structured investigation plan for a sudden metric anomaly: triage steps, candidate causes, ownership, and the order of cuts to run."
useCase: "Use this prompt when a metric drops or spikes unexpectedly and the team is asking 'is this real?' This produces the triage plan you bring to the first meeting — not a writeup of what happened."
prompt: |
  You are a senior data analyst building an anomaly triage plan. The metric just moved, the team is alarmed, and you have an hour to stand up an investigation.

  Inputs:
  - Metric and movement: {{metric_movement}} (e.g., "DAU dropped 18% on Mar 12, recovered partial 50% by Mar 13")
  - When it started: {{onset}}
  - How it was detected: {{detection}} (alert, dashboard glance, exec ping, customer report)
  - Recent changes in scope: {{recent_changes}} (deploys, marketing, instrumentation, infra, vendor)
  - Stakeholders and their question: {{stakeholders}}
  - Available systems and data: {{systems}}
  - Severity assessment: {{severity}} (revenue impact, customer-facing, exec-visible)

  Produce a triage plan with these sections:

  ## Is It Real? (the first 30 minutes)
  Three to five quick checks that determine whether this is a data problem or a real-world problem. Order by speed. Examples: tracking pipeline health, comparing two independent data sources for the same metric, checking whether the move is on an aggregate or only specific dimensions. For each: the check, the system or query, and the expected time.

  ## If Real: Candidate Causes (ranked)
  For each candidate cause:
  - One-sentence statement
  - Why it fits the timing and shape of the anomaly
  - The specific test to confirm or rule out
  - Effort to test
  Rank by how well they fit the anomaly's shape (sudden vs. gradual, recovered vs. persistent, segment-wide vs. concentrated).

  ## Ownership and Sequencing
  - Who runs which check (analyst, data engineer, product engineer, ops, vendor)
  - The order: what runs first, what depends on what
  - The next checkpoint and what we need to know by then

  ## Communications Plan
  - Who needs an update and when (especially if {{severity}} is high)
  - The interim message to send before the investigation concludes (1–2 sentences)
  - The escalation trigger: if X by Y time, raise to Z

  ## What Not to Do
  Two to three things that are tempting but wrong: shipping a fix before root cause, communicating uncertainty as certainty, or rolling back a deploy without isolating it as the cause.

  Tone: calm, structured, operational. The reader is in incident mode and needs a plan, not a recap.
variables:
  - "{{metric_movement}}"
  - "{{onset}}"
  - "{{detection}}"
  - "{{recent_changes}}"
  - "{{stakeholders}}"
  - "{{systems}}"
  - "{{severity}}"
exampleInput: |
  metric_movement: Daily revenue (gross transactions) dropped 31% on Mar 18 vs. 28-day average. Mar 19 morning data shows partial recovery to -12%.
  onset: Drop began at approximately 09:00 UTC on Mar 18; persisted through end of day.
  detection: Anomaly alert in Looker triggered at 14:00 UTC; CFO emailed at 17:00 UTC asking what happened.
  recent_changes: |
    - Checkout v3 deployed 22 hours before drop (rolled to 100%)
    - Stripe SDK upgraded same day in same deploy
    - Marketing turned down a paid search campaign for budget reasons Mar 17 evening
    - Monthly Stripe report run and reconciliation pipeline ran at 08:50 UTC
  stakeholders: CFO (asking), VP Eng (deploy owner), Head of Growth (marketing change)
  systems: Stripe dashboard, internal billing DB (Postgres), Looker, Snowplow, Sentry, deploy log
  severity: High — revenue-visible, exec-visible, customer-impact unknown
exampleOutput: |
  ## Is It Real? (first 30 minutes)
  1. **Reconcile internal billing DB to Stripe dashboard for Mar 18.** Both systems should agree on gross daily revenue. If Stripe shows a smaller drop (or no drop), the anomaly is in our pipeline, not in real transactions. (~10 min — VP Eng or analyst, query Postgres + open Stripe dashboard side by side)
  2. **Check Snowplow event volume for `purchase_completed` on Mar 18 vs. 28-day baseline.** A third independent source. If Snowplow agrees with the drop, it's likely real. If Snowplow shows normal volume, the issue is downstream of purchase. (~10 min — analyst)
  3. **Look at the reconciliation pipeline log.** It ran at 08:50 UTC, 10 minutes before drop began. Did it complete normally? Did it write to the same tables Looker reads from? (~10 min — data engineer)
  4. **Sentry for checkout/payment errors Mar 18.** Spike in checkout errors after the v3 deploy is the simplest "real" cause. (~5 min — VP Eng)

  Decision point at the end of these checks: real, data, or partial.

  ## If Real: Candidate Causes (ranked)
  1. **Checkout v3 introduced a regression on a payment path.**
     - Fits: deploy was 22 hours before onset; partial recovery suggests a hotfix or partial rollback may already be active. Sudden onset matches a deploy.
     - Test: Sentry error rate on checkout endpoints; conversion rate on the payment step pre- vs. post-deploy; segment by browser/country/payment method. Cross-check with deploy timeline for any rollback or feature flag change between Mar 18 and Mar 19.
     - Effort: small.

  2. **Stripe SDK upgrade is silently failing for a subset of cards or 3DS flows.**
     - Fits: same deploy, but SDK issues often hit specific BIN ranges or 3DS regions, which would explain partial (not total) drop and partial recovery if traffic mix changed.
     - Test: Stripe error codes by hour on Mar 18; cut by card brand, country, 3DS yes/no. Compare to Mar 17.
     - Effort: small (Stripe dashboard is fastest).

  3. **Paid search pause cut top-of-funnel transaction-likely traffic.**
     - Fits: pause happened evening of Mar 17; lower volume from a high-converting channel could explain part of the drop.
     - Test: pull transaction volume by traffic source for Mar 18 vs. 28-day baseline. If the drop is concentrated in paid search and broader sources are flat, this is the cause (or a contributor).
     - Effort: small.
     - Note: a 31% revenue drop is unlikely to be fully explained by a single paid search pause unless that channel is unusually large. Likely contributor, not full cause.

  4. **Reconciliation pipeline corrupted Mar 18 figures (data, not real).**
     - Fits: pipeline ran 10 minutes before the apparent drop. If checks 1 and 2 disagree, this is the answer.
     - Test: covered in "Is It Real?" check 1. If real, drop this candidate.
     - Effort: small.

  5. **External: Stripe outage or card network issue.**
     - Fits: real but exogenous. Less likely without other companies reporting it. Status page is one click.
     - Test: Stripe status page, downdetector, ops Slack channels.
     - Effort: trivial.

  ## Ownership and Sequencing
  - **VP Eng:** Sentry check, deploy timeline reconciliation (in parallel with analyst's reconciliation).
  - **Data engineer:** reconciliation pipeline log; confirm Looker source-of-truth tables.
  - **Analyst:** Stripe vs. internal DB reconciliation, Snowplow check, traffic-source cut.
  - **Order:** the four "Is It Real?" checks run in parallel within the first 30 minutes. By T+30, we know whether to investigate as data or as product. Whichever path it is, ranked candidates above sequence accordingly.
  - **Next checkpoint:** stand-up at T+30, then again at T+90.

  ## Communications Plan
  - **Now (interim message to CFO):** "We're seeing the same drop and have an investigation running across pipeline, deploy, and traffic sources. Will have a directional answer within 60 minutes; root cause within 3 hours."
  - **At T+90:** update with confirmed cause direction (real vs. data, candidate cause if real).
  - **Escalation trigger:** if no clear direction by T+90 and Sentry shows ongoing checkout errors, page on-call and consider a rollback of the checkout v3 deploy.

  ## What Not to Do
  - **Do not roll back the checkout deploy yet.** Without isolating it as the cause, a rollback both costs work and destroys evidence. Hold rollback as the action you take after the deploy is confirmed as the cause, unless customer-facing checkout is breaking right now.
  - **Do not communicate "checkout is broken" to anyone outside the investigation team yet.** Premature attribution to a deploy creates noise and damages eng trust.
  - **Do not assume the recovery on Mar 19 means the issue is over.** A partial recovery with no root cause identified means it can come back.
tips:
  - "Always start with 'is it real?' Pipeline issues masquerading as business issues are common, and you cannot un-pull-the-fire-alarm with the CFO."
  - "Two independent data sources beat one trusted source. If Stripe and your internal DB agree, it's real; if they disagree, you have a different (smaller) problem."
  - "Map the anomaly's shape — sudden vs. gradual, persistent vs. partial recovery, segment-concentrated vs. wide — before ranking causes. The shape rules out half the candidates immediately."
  - "Send a calm interim message to execs early. 'We're investigating, will have an update in 60 minutes' beats silence and beats speculation."
  - "Resist the urge to roll back a deploy before isolating it. Rollback is an action of last resort during triage, not first."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - funnel-dropoff-investigation
  - weekly-metrics-commentary
  - data-quality-test-plan
tags:
  - anomaly-detection
  - incident
  - investigation
  - triage
  - data-analyst
---
