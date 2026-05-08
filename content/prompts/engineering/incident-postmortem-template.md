---
title: "Write an incident postmortem report"
slug: incident-postmortem-template
function: engineering
role: documentation
description: "Generate a thorough, blameless incident postmortem that captures the timeline, root cause, contributing factors, and concrete action items — turning an outage into lasting organizational learning."
useCase: "Use this prompt within 48–72 hours of resolving an incident, while the details are fresh. A good postmortem prevents the same incident from happening again and builds the team's institutional knowledge about their system's failure modes."
prompt: |
  You are an SRE writing a blameless incident postmortem. Generate a complete postmortem for the incident described below.

  **Incident title:** {{incident_title}}
  **Incident date and time:** {{incident_datetime}}
  **Duration:** {{duration}} (from first customer impact to full resolution)
  **Severity:** {{severity}} (P1/P2/P3 and definition)
  **Services affected:** {{services_affected}}
  **Customer impact:** {{customer_impact}} (how many customers, what they couldn't do)
  **Incident commander:** {{incident_commander}}
  **People involved in response:** {{responders}}
  **Timeline of events:** {{timeline}} (rough notes — what happened when)
  **Root cause:** {{root_cause}} (your current understanding)
  **Contributing factors:** {{contributing_factors}}
  **What mitigated or resolved it:** {{resolution}}
  **Detection method:** {{detection}} (how was it discovered — alert, customer report, engineer noticed)
  **Action items discussed:** {{action_items}}

  Write a complete blameless postmortem with:

  ## Incident Summary
  A 2–3 sentence executive summary: what happened, what was the impact, and the most important thing learned.

  ## Impact
  - Specific customer-facing impact (quantified where possible)
  - Duration of impact
  - Affected services and error rates during the incident

  ## Timeline
  A minute-by-minute or hour-by-hour timeline from first signals to full resolution:
  | Time (UTC) | Event |
  |---|---|

  Include: first signal, detection, escalation points, key diagnostic steps, resolution steps, all-clear.

  ## Root Cause Analysis

  ### Immediate Cause
  The specific technical condition that triggered the incident.

  ### Root Cause
  The underlying reason that condition existed — the thing that, if fixed, prevents this category of incident.

  ### Contributing Factors
  Other conditions that made the incident worse, harder to detect, or harder to resolve. These are often systemic issues worth addressing even if they didn't cause the incident directly.

  ## Detection
  - How was the incident detected?
  - How long after impact before detection? (time to detect)
  - If a customer reported it before an alert fired: what alert was missing?

  ## Response Assessment
  - What went well in the response?
  - What slowed the response down?
  - Was the right people were involved at the right time?

  ## Action Items
  For each action item:
  - **What:** Specific, concrete task (not "improve monitoring" — "add alert for X metric exceeding Y threshold")
  - **Why:** Which failure mode this prevents or detects earlier
  - **Owner:** Role or team responsible
  - **Priority:** P1 (within 1 week) / P2 (within 1 month) / P3 (within quarter)
  - **Status:** Open

  ## Lessons Learned
  What should the broader team and organization know about this incident?
  - Technical lessons (about the system's behavior)
  - Process lessons (about how the team responds to incidents)
  - Monitoring/alerting gaps revealed
variables:
  - "{{incident_title}}"
  - "{{incident_datetime}}"
  - "{{duration}}"
  - "{{severity}}"
  - "{{services_affected}}"
  - "{{customer_impact}}"
  - "{{incident_commander}}"
  - "{{responders}}"
  - "{{timeline}}"
  - "{{root_cause}}"
  - "{{contributing_factors}}"
  - "{{resolution}}"
  - "{{detection}}"
  - "{{action_items}}"
exampleInput: |
  incident_title: Survey delivery outage — Redis connection pool exhaustion
  incident_datetime: 2025-03-10, 09:14 UTC
  duration: 1 hour 47 minutes
  severity: P1 — customer-facing service fully unavailable
  services_affected: Survey Delivery Worker, Survey Submission API
  customer_impact: |
    - 100% of survey submission attempts failed from 09:14 to 10:47 UTC (Monday morning peak)
    - ~3,200 submission attempts failed
    - 14 customers called support during the outage
    - No data was lost — failed submissions were retried by clients
  incident_commander: Jamie (on-call backend engineer)
  responders: Jamie (IC), Marcus (infra), Sarah (customer success lead)
  timeline: |
    09:14 — PagerDuty alert fires: Survey Delivery Worker error rate > 50%
    09:16 — Jamie acknowledges, checks Datadog
    09:20 — Jamie sees Redis connection errors in logs, unclear why
    09:25 — Marcus joins, suspects Redis instance
    09:35 — Redis looks healthy (low memory, CPU fine), confused
    09:45 — Marcus checks Redis max connection config: maxclients=100
    09:50 — Connection count is 98 of 100. Workers are leaking connections.
    10:00 — Identified: connection pool not being closed on worker crash/restart
    10:15 — Deployed hotfix: explicit connection.close() in worker shutdown handler
    10:22 — Connection count starts dropping
    10:47 — Error rate returns to 0%. Incident resolved.
    10:50 — Customer communications sent via Sarah
  root_cause: |
    Survey Delivery Workers were not closing Redis connections on graceful shutdown. Each worker restart during the morning scale-up event left a dangling connection. After 3 restart cycles during the Kubernetes rolling update, connections accumulated to the 100-connection limit. New connection attempts failed, causing all workers to fail their health checks and stop processing.
  contributing_factors: |
    - Redis maxclients set to 100 (default) — not appropriate for a production workload with 6 workers at 3 connections each minimum
    - No alert on Redis connection count approaching the limit
    - Rolling update triggered 18 worker pod restarts (3 replicas × 6 restarts each during botched deploy from Friday)
    - Time to detect was 14 minutes after customer impact started — no proactive monitoring
  resolution: |
    Deployed a hotfix adding explicit Redis connection cleanup in the Celery worker shutdown signal handler. Increased Redis maxclients to 500. Restarted all worker pods to flush dangling connections.
  detection: PagerDuty alert on delivery worker error rate (threshold: >50% for 2 minutes). Alert fired 0 minutes after error rate crossed threshold, but impact had been occurring for ~0 minutes before the alert fired — alert timing was correct, detection was not delayed.
  action_items: |
    1. Add Redis connection count monitoring and alert at 70% of maxclients
    2. Fix connection leak in worker shutdown handler (done as hotfix)
    3. Increase Redis maxclients to 500 in production (done during resolution)
    4. Add integration test for worker graceful shutdown (connection cleanup)
    5. Review all other services for similar Redis connection leak patterns
    6. Fix the deploy process that caused 18 pod restarts on Friday
exampleOutput: |
  # Incident Postmortem: Survey Delivery Outage — Redis Connection Pool Exhaustion

  **Date:** 2025-03-10 | **Duration:** 1h 47m | **Severity:** P1
  **Incident Commander:** Jamie | **Postmortem Author:** Jamie
  **Review Date:** 2025-03-12

  ---

  ## Incident Summary

  On Monday March 10 at 09:14 UTC, the Survey Delivery Worker exhausted the Redis connection pool limit, causing 100% of survey submissions to fail for 1 hour and 47 minutes during Monday morning peak traffic. The root cause was a Redis connection leak in the worker's shutdown handler, compounded by 18 pod restarts from a botched Friday deploy that accumulated dangling connections over the weekend. The most important learning: Redis connection limits must be monitored proactively — this failure was invisible until connections were fully exhausted.

  ---

  ## Impact

  - **Outage window:** 09:14 UTC – 10:47 UTC (1 hour, 47 minutes)
  - **Customer impact:** 3,200 survey submission attempts failed (100% failure rate during impact window)
  - **Customer contacts:** 14 customers called or emailed support during the outage
  - **Data loss:** None — client-side retry logic preserved all submissions
  - **SLO breach:** Yes — monthly error budget consumed by approximately 40%

  ---

  ## Timeline

  | Time (UTC) | Event |
  |---|---|
  | 09:14 | PagerDuty alert fires: Survey Delivery Worker error rate >50% for 2 minutes |
  | 09:16 | Jamie (IC) acknowledges alert, opens Datadog dashboard |
  | 09:18 | Confirms 100% of delivery attempts failing with `ConnectionError: max number of clients reached` |
  | 09:20 | Sarah notified, begins monitoring support channels |
  | 09:25 | Marcus joins investigation. Initial hypothesis: Redis instance down |
  | 09:30 | Redis instance health confirmed normal (memory <20%, CPU <10%) |
  | 09:38 | Jamie checks connection count: `redis-cli INFO clients` → connected_clients: 98 |
  | 09:45 | Marcus identifies Redis maxclients=100 (default, never changed) |
  | 09:50 | Traced connection accumulation to Kubernetes rolling update from Friday (18 pod restarts) |
  | 10:00 | Root cause confirmed: connection pool not closed on worker shutdown — each restart left 1+ dangling connections |
  | 10:08 | Hotfix coded: explicit `connection.close()` in Celery SIGTERM handler |
  | 10:15 | Hotfix deployed to production |
  | 10:15 | Redis maxclients increased to 500 via config update |
  | 10:22 | Connected clients count starts decreasing (workers processing queued jobs again) |
  | 10:47 | Error rate returns to 0%. Delivery queue fully drained. Incident resolved. |
  | 10:50 | Sarah sends status update email to the 14 affected customers who contacted support |
  | 10:55 | Incident all-clear posted to #eng-incidents |

  ---

  ## Root Cause Analysis

  ### Immediate Cause
  Redis reached its `maxclients` connection limit (100), causing all new connection attempts to fail with `ERR max number of clients reached`. New worker pods could not establish connections; existing workers' connections were silently leaked.

  ### Root Cause
  The Celery worker's SIGTERM handler (graceful shutdown) did not close the Redis connection pool. Every time a worker pod was restarted or killed, it left 1–3 dangling Redis connections that remained open from Redis's perspective. After 18 pod restarts over the preceding 48 hours (from a botched Friday rolling deploy that restarted each of 3 replicas 6 times), 40+ leaked connections accumulated. Monday morning's normal scale-up event added 6 more. The total crossed 100, the default Redis maxclients limit, and all new connection attempts failed.

  ### Contributing Factors

  1. **Redis maxclients never increased from default (100):** The production Redis instance was never configured for production workloads. The default of 100 is a footgun for any application with more than a handful of concurrent clients. This turned a minor leak into a total outage.

  2. **No monitoring on Redis connection count:** There was no alert or dashboard panel showing current vs. maximum connections. The connection limit was filling silently for 48 hours before the outage — an alert at 70% would have given the team time to investigate on Friday before the weekend.

  3. **Friday rolling deploy caused 18 pod restarts:** An error in the deployment configuration caused each of 3 replicas to restart 6 times during a routine Friday deploy. This is what produced the initial accumulation of leaked connections. The deploy issue is a separate problem from the connection leak but made it catastrophic.

  4. **The Friday deploy was not noticed:** No one reviewed the pod restart count after Friday's deploy. An alert or deploy validation check would have flagged the abnormal restarts.

  ---

  ## Detection

  The PagerDuty alert fired at 09:14 UTC — the error rate alert is correctly configured and fired promptly. **There was no detection delay for the alert itself.**

  However, the *connection accumulation* that caused the outage was invisible for 48 hours. The missing detection was a Redis connection count alert. Had one existed at 70% of maxclients (70 connections), the team would have been notified Friday evening and could have investigated before Monday peak.

  **Time to detect (alert to acknowledgment):** 2 minutes — good.
  **Time to root cause:** 46 minutes — longer than necessary; a Redis connection count panel in the Datadog dashboard would have pointed directly to the issue in the first 5 minutes.

  ---

  ## Response Assessment

  **What went well:**
  - PagerDuty alert fired correctly with minimal delay
  - Marcus joining quickly and bringing infrastructure expertise shortened the diagnosis
  - Sarah proactively managed customer communications without being asked — 14 customers received updates within 3 minutes of resolution
  - Hotfix was coded, reviewed, and deployed in 15 minutes — strong execution under pressure

  **What slowed the response:**
  - No Redis connection count panel in Datadog — the team spent 25 minutes ruling out Redis instance health before checking the connection limit
  - The `maxclients` configuration was unknown to the response team — had to look up the Redis default in the middle of an incident

  ---

  ## Action Items

  | # | Action | Why | Owner | Priority | Status |
  |---|---|---|---|---|---|
  | 1 | Add Redis connection count to Datadog dashboard + alert at 70% of maxclients | Would have detected this 48h before outage | Platform (Marcus) | P1 — this week | Open |
  | 2 | Add connection.close() to Celery SIGTERM handler | Prevents future connection leaks (hotfix is in, but add integration test) | Backend (Jamie) | P1 — this week | Hotfix deployed; test pending |
  | 3 | Set Redis maxclients to 500 in Terraform (infrastructure as code) | Done manually during incident; must be codified to survive next Redis replacement | Platform (Marcus) | P1 — this week | Open |
  | 4 | Write integration test for worker graceful shutdown | Catches connection leak regressions in CI before they reach production | Backend (Jamie) | P2 — this month | Open |
  | 5 | Fix the rolling deploy configuration that caused 18 pod restarts | Eliminates the compounding factor; abnormal restart counts should never go unnoticed | Platform (Marcus) | P2 — this month | Open |
  | 6 | Add post-deploy validation: alert if pod restart count exceeds expected during rolling update | Catches botched deploys before they accumulate weekend damage | Platform | P2 — this month | Open |
  | 7 | Audit all other services for Redis connection leak patterns | This pattern likely exists elsewhere in the codebase | Backend team | P3 — this quarter | Open |

  ---

  ## Lessons Learned

  **Technical:**
  - Redis default `maxclients=100` is not a safe production default for any service with multiple workers. Always configure this explicitly.
  - Connection leaks in async workers are silent — they accumulate slowly and only become visible as a sudden cliff when the limit is hit.
  - Infrastructure defaults (Redis, PostgreSQL connection limits, Kubernetes resource limits) should be reviewed and explicitly set during initial service deployment, not discovered during incidents.

  **Monitoring:**
  - Resource exhaustion metrics (connection counts, memory, file descriptors) should have proactive alerts at 70–80% of their limits — not just alarms when services start failing.
  - A single Datadog dashboard panel for Redis connection count would have cut diagnosis time from 46 minutes to 5 minutes.

  **Process:**
  - Friday deploy restarts should have been noticed. Post-deploy validation (checking pod restart count against expected) is a gap in our deploy process.
  - The on-call engineer didn't have a runbook entry for "Redis maxclients exhausted" — adding this to the runbook prevents the same 25-minute investigation next time.
tips:
  - "A postmortem is only valuable if the action items get done. Assign each item a named owner and a deadline — 'the team' is not an owner, and 'eventually' is not a deadline."
  - "Blameless means focusing on system conditions, not individual mistakes. 'The engineer forgot to close connections' is blaming; 'there was no automated test to catch connection leaks' is blameless and more actionable."
  - "The most important section is Contributing Factors. Root causes get fixed; contributing factors often don't — and they're what make the next incident worse."
  - "Write the postmortem within 48–72 hours. After a week, the timeline becomes fuzzy, the nuance is lost, and the action items lose momentum."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - runbook-draft
  - architecture-decision-record
  - migration-script
  - system-design-review
tags:
  - incidents
  - documentation
  - reliability
  - engineering
  - postmortem
---
