---
title: "Generate an incident response playbook for a service"
slug: incident-response-playbook
function: it-security
role: sre
description: "Produce a service-specific incident response playbook covering severity, roles, comms, common failure modes, and recovery steps."
useCase: "Use this prompt when a service is graduating to production, after a postmortem reveals the team's response was ad-hoc, or when onboarding a new on-call rotation. The output is the document on-call reads at 3am, not a slide deck for leadership."
prompt: |
  You are a senior SRE writing an incident response playbook for a specific service. Write the document on-call would actually open at 3am — concise, scannable, full of links and exact commands.

  Service:
  - Name: {{service_name}}
  - Architecture: {{architecture}}
  - Upstream/downstream dependencies: {{dependencies}}
  - Known historical failure modes: {{historical_failures}}
  - Tooling: {{tooling}}
  - Customer impact profile: {{customer_impact}}

  The playbook must include:

  1. **Severity matrix**: SEV1/SEV2/SEV3 criteria specific to this service, with "if you see X, declare Y" examples
  2. **Roles**: Incident Commander, Comms Lead, Subject Matter Expert, Scribe — when each is needed
  3. **First 5 minutes checklist**: literal numbered steps, no theory
  4. **Communication plan**: where to post (channels, status page), what to say, cadence (every 30 min during SEV1)
  5. **Diagnostic playbook**: top 5 failure modes for this service, with "symptoms → checks → fixes" for each. Include exact commands or dashboard links.
  6. **Mitigation actions**: kill switches, traffic shedding, failover triggers — who authorizes and how to execute
  7. **Recovery & validation**: how to declare resolved, what to verify before standing down
  8. **Postmortem trigger**: when one is required (always for SEV1+, conditional otherwise)
  9. **Contact tree**: who to escalate to and when

  Tone: imperative, no fluff. Bullet over prose. Specific channel names, dashboard URLs (use `<dashboard:name>` placeholders), command examples.
variables:
  - "{{service_name}}"
  - "{{architecture}}"
  - "{{dependencies}}"
  - "{{historical_failures}}"
  - "{{tooling}}"
  - "{{customer_impact}}"
exampleInput: |
  service_name: payments-gateway
  architecture: Stateless Go service on EKS, fronted by ALB; talks to Stripe + Adyen + internal ledger-api; persists idempotency keys in DynamoDB
  dependencies: Upstream — checkout-service. Downstream — Stripe, Adyen, ledger-api, DynamoDB. Hard dependency on AWS KMS for envelope encryption.
  historical_failures: 1) Stripe API 5xx surge during their incidents; 2) DynamoDB throttling during Black Friday; 3) Idempotency key collision after deploy that changed the hash function (postmortem PG-2024-11)
  tooling: Datadog (APM, logs, monitors), PagerDuty, Slack, Statuspage.io, AWS Console, kubectl/argo, Stripe and Adyen status pages
  customer_impact: Direct revenue impact. 5 min outage = ~$8k lost transactions. Full outage in EU during business hours triggers Statuspage public update.
exampleOutput: |
  # Incident Response Playbook: payments-gateway

  Owner: Payments team. On-call: PagerDuty `payments-oncall`. Last drill: 2026-04-15.

  ## 1. Severity matrix

  | SEV | Criteria | Examples |
  |---|---|---|
  | SEV1 | Payments globally failing OR EU/US region down OR customer money at risk | 5xx > 5% for 5 min on /charge; ledger-api unreachable; Stripe webhook signing key compromised |
  | SEV2 | One processor down (Stripe OR Adyen but not both); elevated errors below SEV1; latency p95 > 2s for 10 min | Stripe 5xx surge but Adyen routing healthy; DynamoDB throttling without 5xx |
  | SEV3 | Degraded quality not yet user-visible; non-revenue features broken | Receipt-PDF generation failing; admin reporting endpoint slow |

  Declare up, not down. If unsure between SEV1 and SEV2, call SEV1.

  ## 2. Roles

  - **Incident Commander (IC)**: required for SEV1/SEV2. Owns decisions, not implementation. Default = on-call.
  - **Comms Lead**: required for SEV1, optional SEV2. Owns Slack updates, status page, internal comms.
  - **SME**: anyone with deep service knowledge pulled in by IC. May rotate per phase.
  - **Scribe**: required for SEV1. Logs decisions and timestamps in `#inc-payments-YYYYMMDD`.

  IC + Comms can be the same person on SEV2 if traffic is light.

  ## 3. First 5 minutes

  1. Acknowledge the page in PagerDuty.
  2. Open `<dashboard:payments-overview>` and `<dashboard:payments-incident-cockpit>`.
  3. Check Stripe and Adyen status pages. If either is down, this is likely a SEV2 (one processor) — verify routing fallback engaged.
  4. Run `!incident payments-gateway` in `#sre-incidents` to spin up incident channel.
  5. Within 5 min of declaration, post initial status:
     - Slack `#payments-status`: "Investigating elevated errors on payments. Customer impact: confirmed/unconfirmed. IC: <name>."
     - If SEV1 and customer-visible: Statuspage.io component `payments` → "Investigating".

  ## 4. Communication plan

  | Audience | Channel | Cadence | Owner |
  |---|---|---|---|
  | Internal eng | `#payments-status` | Every 30 min during SEV1; on state change SEV2 | Comms Lead |
  | Leadership | `#leadership-incident` | At declaration, on resolution, on major state change | IC |
  | Customers (public) | Statuspage.io | At declaration if SEV1; updates every 30 min | Comms Lead |
  | CS team | `#cs-payments-alerts` | At declaration with talking points | Comms Lead |
  | Sales | Email digest at resolution if revenue impact > $50k | Once | Engineering Director |

  Templates in `<runbook:payments-comms-templates>`.

  ## 5. Diagnostic playbook — top 5 failure modes

  ### A. Stripe API 5xx surge
  - **Symptoms**: spike in `stripe.api.errors` metric; checkout-service backing off; logs show `stripe_api_5xx` rate climbing
  - **Checks**: Stripe status page; `<dashboard:processor-routing>` → Stripe error rate by region
  - **Fix**: enable Adyen-primary routing via `kubectl set env deploy/payments-gateway PROCESSOR_PRIMARY=adyen` — fallback is pre-validated and rolled out within 60s. Notify in `#payments-status`.

  ### B. DynamoDB throttling
  - **Symptoms**: `aws.dynamodb.throttled_requests` > 0 on `payments-idempotency` table; latency p99 spikes; `ProvisionedThroughputExceededException` in logs
  - **Checks**: `<dashboard:dynamodb-payments>` → consumed vs provisioned capacity
  - **Fix**: bump on-demand limit via AWS console (requires AWS admin); short-term mitigation is to scale gateway replicas down to reduce write rate (counterintuitive but lowers concurrent writes from a noisy retry loop). Long-term: tune backoff in client.

  ### C. Idempotency key collision (post-deploy)
  - **Symptoms**: customers seeing "duplicate transaction" errors right after a deploy; `idempotency_collision_total` non-zero
  - **Checks**: compare current vs previous hash function; check `git log -- internal/idempotency/`
  - **Fix**: roll back. Do not attempt to forward-fix. Reference: postmortem PG-2024-11.

  ### D. KMS unavailability
  - **Symptoms**: `kms.errors` non-zero; encrypt/decrypt failing; cards can't be tokenized
  - **Checks**: AWS Service Health for KMS in active region; CloudTrail for KMS access denied
  - **Fix**: trigger region failover (us-west-2 standby) — runbook `<runbook:payments-region-failover>`. Requires IC authorization.

  ### E. Slow ledger-api
  - **Symptoms**: payments-gateway p95 latency climbs while own service metrics look healthy; ledger-api dashboard shows queue depth growing
  - **Checks**: `<dashboard:ledger-api-health>`; tracing waterfall in Datadog APM
  - **Fix**: this is a downstream incident — escalate to ledger team via PagerDuty `ledger-oncall`. Short-term: enable async ledger writes via `LEDGER_MODE=async` to keep payments flowing; ledger reconciliation will catch up.

  ## 6. Mitigation actions

  | Action | Trigger | Authorizer | How |
  |---|---|---|---|
  | Processor failover (Stripe ↔ Adyen) | One processor degraded | IC | `kubectl set env deploy/payments-gateway PROCESSOR_PRIMARY=...` |
  | Region failover (us-east-1 → us-west-2) | KMS or full region down | IC + Engineering Director | runbook `<runbook:payments-region-failover>` |
  | Traffic shed (return 503 to non-priority merchants) | Capacity overload | IC | feature flag `payments.shed_low_priority=true` in LaunchDarkly |
  | Async ledger mode | Ledger downstream incident | IC | env `LEDGER_MODE=async`, monitor reconciliation backlog |
  | Full kill switch (return 503 to all) | Suspected fraud / data integrity issue | Engineering Director + Security | feature flag `payments.kill=true`, status page → major outage |

  ## 7. Recovery & validation

  Before declaring resolved:
  1. Error rate back to baseline for 15 minutes
  2. Synthetic transaction succeeds against both processors
  3. Reconciliation report shows no orphaned charges in last 24 hours
  4. CS team confirms ticket inflow rate has returned to normal

  Then:
  - Update Statuspage to "Resolved"
  - Final Slack update with rough impact summary
  - Schedule postmortem (see below)

  ## 8. Postmortem trigger

  Required for: all SEV1, all SEV2 with revenue impact > $25k, any incident exposing customer data, any incident requiring region failover.

  Optional for: SEV3 unless it's the third occurrence of the same issue.

  Template: `<doc:postmortem-template>`. Draft within 5 business days, review within 10.

  ## 9. Contact tree

  - On-call → PagerDuty `payments-oncall`
  - Manager escalation → Payments team manager (auto-paged after 15 min unack)
  - Director escalation → Engineering Director (auto-paged after 30 min unack on SEV1)
  - Security escalation → `#sec-incidents` + PagerDuty `security-oncall`
  - Stripe TAM → `<contact:stripe-tam>` (business hours), Stripe Support escalation form (24/7)
  - Adyen TAM → `<contact:adyen-tam>`
tips:
  - "On-call reads this at 3am. Ruthlessly favor scannability — tables, bullets, command examples — over prose. Cut anything that isn't actionable."
  - "Top-5 failure modes should be your actual top 5, derived from past postmortems. If your team's history disagrees with the playbook, the playbook is wrong."
  - "Run a tabletop exercise quarterly using this playbook. The exercise will find the broken links and ambiguous steps that the doc author missed."
  - "Pair with a 'first responder' cheat sheet — even more compressed, fits on a single screen, has the kill-switch commands. The full playbook is the reference; the cheat sheet is the action."
  - "AI assistance is not a replacement for security review by qualified professionals. Have an SRE manager and your security lead review escalation paths and authorization rules before adoption."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - runbook-from-alert
  - postmortem-writeup
  - security-incident-comms
tags:
  - incident-response
  - sre
  - playbook
  - on-call
  - reliability
---
