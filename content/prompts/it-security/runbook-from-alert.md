---
title: "Generate a runbook entry from a specific alert"
slug: runbook-from-alert
function: it-security
role: sre
description: "Turn an alert definition into a complete runbook entry with diagnostics, mitigations, and escalation guidance for the on-call engineer."
useCase: "Use this prompt every time you create a new alert that pages a human. The doc forces you to answer: when this fires at 3am, what does the responder do? Alerts without runbooks are tickets in disguise."
prompt: |
  You are an SRE writing a runbook entry for an alert that pages on-call. Be concrete. The reader is half-awake and trying to act, not learn.

  Alert:
  - Name: {{alert_name}}
  - Definition (query / threshold / window): {{alert_definition}}
  - What it really detects (in plain language): {{detection_intent}}
  - Service: {{service}}
  - Severity (page / ticket): {{severity}}
  - Known historical causes: {{historical_causes}}
  - Tooling: {{tooling}}

  Produce a runbook entry with:

  1. **TL;DR**: 1–2 sentences — what this alert means and the most likely action
  2. **Confirm it's real**: 2–3 quick checks to rule out false positives (e.g., metric stale, deploy in progress, scheduled maintenance)
  3. **Triage decision tree**: a flowchart-as-text — "if X, go to A; if Y, go to B" — covering the top 3–4 causes
  4. **Common causes** with for each: symptoms, exact diagnostic commands, mitigation steps
  5. **Mitigation actions** (commands, dashboard links, kill switches) — copy-pastable
  6. **Escalation**: when and who to escalate to, what to share
  7. **What this alert is NOT**: what it doesn't detect, so the responder doesn't get tunnel-vision
  8. **Post-incident**: what to leave behind — ticket, postmortem trigger, dashboard annotation

  Format: short headings, bullet points, code blocks for commands. Avoid prose paragraphs.
variables:
  - "{{alert_name}}"
  - "{{alert_definition}}"
  - "{{detection_intent}}"
  - "{{service}}"
  - "{{severity}}"
  - "{{historical_causes}}"
  - "{{tooling}}"
exampleInput: |
  alert_name: orders-api high p99 latency
  alert_definition: |
    Datadog metric: max:trace.express.request.duration{service:orders-api,env:prod}.as_count()
    p99 over 5min > 1500ms for 3 consecutive evaluation windows
  detection_intent: Customer-facing latency exceeding our SLO budget; users feel order placement as slow or hung
  service: orders-api (Node.js, EKS, depends on Postgres + Redis + Stripe)
  severity: page (SEV2 default; SEV1 if also error rate > 2%)
  historical_causes: 1) Postgres connection pool exhaustion under traffic spikes; 2) Redis evictions causing cache misses; 3) Stripe API slowness propagating; 4) noisy-neighbor pod (memory pressure)
  tooling: Datadog APM + dashboards, kubectl, AWS RDS Performance Insights, PagerDuty
exampleOutput: |
  # Runbook: orders-api high p99 latency

  Owner: Orders team. Linked alert: `dd:orders_api_p99_latency`. Last validated: 2026-05-01.

  ## TL;DR
  p99 latency on `orders-api` over 1.5s for 15 minutes. Most likely Postgres pool exhaustion or Redis cache misses. Start with the connection-pool check.

  ## Confirm it's real (60 seconds)

  - Open `<dashboard:orders-api-overview>`. Is p99 actually elevated, or is the alert stale?
  - Check `#deploys-orders` for a deploy in the last 30 minutes — if yes, latency may be cold-cache transient. Wait 5 min, recheck.
  - Check `<dashboard:upstream-traffic>` — is request volume up >2x? Could be a load event, not a regression.
  - Check Datadog `Events` for "maintenance" tags on dependencies.

  If still elevated and not explained → continue.

  ## Triage decision tree

  ```
  Is error rate > 2%?           → upgrade to SEV1, comms lead, see incident-response-playbook
  Is Postgres CPU > 80%?         → A) Postgres saturation
  Is Redis hit rate < 60%?       → B) Cache regression
  Is Stripe latency elevated?    → C) Upstream Stripe
  None of the above?             → D) Pod / node issue
  ```

  ## Common causes

  ### A) Postgres connection pool exhaustion
  - **Symptoms**: orders-api logs `connection pool timeout`; Postgres `pg_stat_activity` near `max_connections`; DB CPU normal but waits high
  - **Diagnose**:
    ```bash
    kubectl exec -n orders deploy/orders-api -- node -e "console.log(require('pg').pool.totalCount)"
    aws rds describe-db-clusters --db-cluster-identifier orders-prod --query 'DBClusters[0].DatabaseName'
    ```
    Open RDS Performance Insights → top SQL → look for unindexed query
  - **Mitigate**:
    - Short-term: scale orders-api replicas down by 30% (paradoxically reduces total connections during a noisy-retry storm). `kubectl scale deploy/orders-api --replicas=N` with N = current * 0.7
    - If query is identifiable: add to query-killer Lambda allow-list or kill via `pg_terminate_backend(pid)`
    - If pool size is the cap: increase `PG_POOL_MAX` env var (requires redeploy)

  ### B) Redis cache regression
  - **Symptoms**: hit rate drop on `<dashboard:redis-orders-cache>`; latency rises despite normal DB metrics
  - **Diagnose**:
    ```bash
    redis-cli -h orders-redis.prod INFO stats | grep keyspace
    redis-cli -h orders-redis.prod INFO memory | grep evicted_keys
    ```
  - **Mitigate**:
    - If `evicted_keys` is climbing: increase Redis memory tier (terraform `redis_node_size`)
    - If hit rate drop is post-deploy: roll back; cache key shape may have changed

  ### C) Upstream Stripe slowness
  - **Symptoms**: Datadog APM trace waterfall shows Stripe span dominating; Stripe status page shows degraded
  - **Diagnose**: `<dashboard:stripe-integration>` → Stripe API duration percentiles
  - **Mitigate**:
    - Enable async order-confirmation flow: feature flag `orders.stripe_async=true` in LaunchDarkly. Customers get a "processing" UI instead of blocked checkout.
    - If Stripe is fully down: failover to Adyen routing — see `<runbook:payments-region-failover>`

  ### D) Pod / node issue (noisy neighbor or single-pod failure)
  - **Symptoms**: latency p99 elevated only on a subset of pods; specific node CPU/mem pressure
  - **Diagnose**:
    ```bash
    kubectl top pods -n orders --sort-by=memory
    kubectl describe node $(kubectl get pods -n orders -o wide | awk '/orders-api/ {print $7}' | sort -u)
    ```
  - **Mitigate**: cordon/drain the affected node; let pods reschedule. `kubectl drain <node> --ignore-daemonsets --delete-emptydir-data`

  ## Mitigation cheat sheet

  | Action | Command |
  |---|---|
  | Scale replicas | `kubectl scale deploy/orders-api --replicas=N -n orders` |
  | Force redeploy | `kubectl rollout restart deploy/orders-api -n orders` |
  | Roll back | `kubectl rollout undo deploy/orders-api -n orders` |
  | Async Stripe flag | LaunchDarkly: `orders.stripe_async=true` |
  | Drain noisy node | `kubectl drain <node> --ignore-daemonsets --delete-emptydir-data` |

  ## Escalation

  - Page Postgres team if RDS Performance Insights shows query-storm not solved by app-side action
  - Page Payments team if Stripe-routed; their on-call may already be engaged
  - Escalate IC to manager if not mitigating after 30 minutes

  Share when escalating: alert link, dashboard link, time of detection, mitigation already attempted, current customer-visible state.

  ## What this alert is NOT

  - Not an availability alert — orders may still be succeeding, just slowly. Check error rate separately.
  - Not a capacity-planning trigger — sustained breach over multiple days needs SLO/capacity review, not pages
  - Doesn't catch correctness bugs (orders saved with wrong data) — those are tracked by reconciliation reports

  ## Post-incident

  - If you mitigated without root cause, open a ticket in `orders-eng` to investigate
  - Annotate the Datadog dashboard with what happened — future you will appreciate it
  - Add an entry to the team's `runbook-validated` log: which step in this runbook actually worked
  - If runbook was wrong or missing a case → file a PR against this doc before the end of your shift
tips:
  - "Every alert that pages a human gets a runbook. No exceptions. If you can't write the runbook, the alert is too vague to page on."
  - "Use commands, not descriptions. 'Check the connection pool' is unhelpful at 3am; `kubectl exec ...` is."
  - "Update the runbook after every incident. The first version is always wrong somewhere; the third version is usable."
  - "Validate runbooks during game days, not during real incidents. If the command in the runbook needs fixing, fix it under low pressure."
  - "AI assistance is not a replacement for security review by qualified professionals. Have a senior SRE review escalation paths and any commands that touch production data before adoption."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - incident-response-playbook
  - postmortem-writeup
  - slo-definition-doc
tags:
  - runbook
  - sre
  - on-call
  - alerting
  - reliability
---
