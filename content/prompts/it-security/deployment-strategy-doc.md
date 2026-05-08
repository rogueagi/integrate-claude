---
title: "Document a deployment strategy (blue-green, canary, rolling)"
slug: deployment-strategy-doc
function: it-security
role: devops
description: "Produce a written deployment strategy document with rationale, mechanics, rollback procedure, and risk tradeoffs for a specific service."
useCase: "Use this prompt when standardizing deployment behavior for a new service or proposing a change to how an existing service deploys. The output is the doc that engineering review boards, SREs, and SOC 2 auditors actually want to see — not generic deployment-strategy theory."
prompt: |
  You are a staff DevOps/SRE engineer documenting a deployment strategy. Write a deployment-strategy doc for the service below. The audience is the eng review board, the on-call team, and a future auditor — not a beginner.

  Service:
  - Name: {{service_name}}
  - Workload type: {{workload}} (stateless API, stateful, batch, mobile backend, etc.)
  - Traffic profile: {{traffic}}
  - Tolerance for incomplete rollout: {{tolerance}} (e.g., zero-downtime required, 30s blip OK)
  - Tooling available: {{tooling}}
  - Constraints: {{constraints}} (DB migration coupling, feature flag system, region count)

  Cover these sections:

  1. **Strategy decision**: pick one of rolling, blue-green, canary, or shadow. Justify the pick against the workload, traffic, and tolerance. Explicitly say what you rejected and why.
  2. **Mechanics**: step-by-step what happens at deploy time, including DNS/load balancer behavior, replica counts, health gates
  3. **Promotion criteria**: numeric thresholds — error rate, latency, custom business metrics. Include the time window for each.
  4. **Rollback**: triggers (automatic and manual), procedure, expected RTO
  5. **Database migrations**: how the strategy handles schema changes (expand/contract, backfills, irreversible migrations)
  6. **Risk tradeoffs**: blast radius, cost, complexity, observability requirements
  7. **Operational runbook**: who pages, what dashboards to check, what success looks like
  8. **Failure modes**: 3–5 realistic ways the strategy can fail and the mitigation for each

  Write it in a tone an experienced engineer would respect — direct, opinionated, no fluff.
variables:
  - "{{service_name}}"
  - "{{workload}}"
  - "{{traffic}}"
  - "{{tolerance}}"
  - "{{tooling}}"
  - "{{constraints}}"
exampleInput: |
  service_name: checkout-service
  workload: Stateless HTTP API (Node.js), depends on Postgres + Redis
  traffic: 800 RPS peak, 200 RPS off-peak; transactional payments
  tolerance: zero-downtime; any failed transaction triggers customer impact and chargebacks
  tooling: AWS EKS, Argo Rollouts, Datadog, LaunchDarkly
  constraints: schema migrations land in a separate PR; multi-region active-passive (us-east-1 primary, us-west-2 standby)
exampleOutput: |
  # Deployment Strategy: checkout-service

  Owner: Platform team. Last updated: 2026-05-07. Audience: eng review board, on-call, audit.

  ## 1. Strategy decision: progressive canary

  Canary using Argo Rollouts with metric-based analysis. Promotion: 5% → 25% → 50% → 100%, with a 10-minute bake at each step.

  Rejected:
  - **Rolling**: too coarse for a payment workload — by the time the canary signal would be visible, ~30% of pods already serve broken traffic.
  - **Blue-green**: doubles infra cost during deploy and gives no early signal — you cut over 100% at once. Not suitable for transactional traffic.
  - **Shadow**: useful as a separate pre-prod gate, not as the primary deploy mechanism — it doesn't tell you about user-visible failures because users aren't seeing the shadow.

  ## 2. Mechanics

  - Argo Rollouts replaces the standard Deployment with a Rollout resource pointing at two ReplicaSets (stable + canary)
  - Istio VirtualService sets weights between stable and canary subsets
  - At deploy: Argo Rollouts creates new RS at canary weight 5%, runs analysis template, advances on success
  - LB unaffected — Istio handles weighting; ALB is the same target
  - Each step requires both: (a) analysis template passes, (b) bake duration elapses

  ## 3. Promotion criteria

  Per step, all must hold for the bake duration:

  | Metric | Threshold | Source |
  |---|---|---|
  | HTTP 5xx rate | < 0.5% | Datadog APM |
  | p99 latency | < 800ms | Datadog APM |
  | Payment success rate (business) | > 99.0% | Custom Datadog metric |
  | Pod CrashLoopBackOff count | 0 | K8s metrics |

  Bake durations: 10 min at 5%, 10 min at 25%, 10 min at 50%, then promote to 100%.

  Total deploy time happy-path: ~32 minutes including pod startup.

  ## 4. Rollback

  **Automatic**: Argo Rollouts AnalysisRun failure → immediate rollback (canary weight 0, kill canary RS). RTO ~60 seconds.

  **Manual**: `kubectl argo rollouts abort checkout-service`. RTO ~30 seconds.

  **Stable-RS preserved** for 24 hours / 5 revisions to allow undo after promotion.

  Failure-to-rollback safety net: if analysis fails and Argo Rollouts is itself unhealthy, on-call manually scales canary RS to 0 and stable RS back to full replica count.

  ## 5. Database migrations

  Schema migrations land in a separate PR and deploy ahead of the application change. Strict expand/contract:

  - **Expand PR**: add columns/tables, backwards compatible, deploy via this same canary process
  - **App PR**: uses both old and new schema (dual-write or feature-flagged read path)
  - **Contract PR**: drops the old columns once the app PR is at 100% for ≥48 hours

  Irreversible migrations (data backfills, type narrowing) require a written runbook attached to the migration PR and explicit on-call sign-off.

  ## 6. Risk tradeoffs

  - **Blast radius**: 5% during canary = ~40 RPS affected = ~30 transactions/min impacted in worst case before auto-rollback fires (~60s detection). Acceptable.
  - **Cost**: Argo Rollouts overhead is ~1.2x replica count during deploy = ~$80/mo extra at our scale.
  - **Complexity**: requires healthy AnalysisTemplates and Datadog metric availability. If Datadog is degraded, deploys pause — accepted as a feature, not a bug.
  - **Observability requirement**: hard dependency on Datadog APM and the custom payment metric. Both have monitors of their own.

  ## 7. Operational runbook

  - On-call gets a deploy-start notification in #checkout-deploys
  - Primary dashboard: `Checkout - Canary Health` (Datadog)
  - Watch: 5xx, p99, payment success rate, canary pod CPU
  - "Done" = Argo Rollouts shows status `Healthy`, all replicas on new RS, monitor confirms no anomaly for 30 min post-promote
  - Standby region (us-west-2): same canary process, kicked off after primary reaches 100% successfully

  ## 8. Failure modes and mitigations

  1. **Analysis metric is stale (Datadog ingest lag)** — analysis incorrectly passes. *Mitigation*: AnalysisTemplate fails-closed if data points < expected, treat missing data as failure.
  2. **Canary cohort is unrepresentative (e.g., all canary pods land on one node)** — false confidence. *Mitigation*: topologySpreadConstraints force canary across AZs.
  3. **Slow leak (memory)** — won't show in 10-min bake. *Mitigation*: 30-min post-promote monitor + 24-hour stable-RS retention.
  4. **DB migration not deployed first** — app pods crashloop on canary. *Mitigation*: pre-deploy check in CI verifies migration PR was merged ≥1 hour before app PR.
  5. **Region failover during deploy** — partial state across regions. *Mitigation*: never deploy both regions simultaneously; primary must reach 100% before secondary starts.

  ## Audit notes (SOC 2 / change management)

  - Argo Rollouts AnalysisRun results are retained 90 days (CC8.1 evidence)
  - Manual aborts emit an audit event to CloudTrail via the Argo controller
  - Production promotion to 100% is gated by the AnalysisRun and does not require human approval — the analysis is the control. Bypass requires `cluster-admin` and is logged.
tips:
  - "If your team can't articulate the promotion thresholds, your strategy isn't a strategy — it's a vibe. Force the numbers."
  - "Match the strategy to the worst-case transaction, not the average. Payments need canary; an internal CRUD admin tool can rolling-update in 30 seconds and live."
  - "Database migrations break more deploys than code does. Make expand/contract the default and give yourself permission to refuse irreversible migrations."
  - "AI assistance is not a replacement for security review by qualified professionals. Have an SRE and your security/audit lead review the rollback and audit-trail sections before adopting."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - ci-cd-pipeline-design
  - kubernetes-manifest-review
  - runbook-from-alert
tags:
  - deployment
  - canary
  - blue-green
  - sre
  - devops
---
