---
title: "Write an operational runbook for a service or process"
slug: runbook-draft
function: engineering
role: documentation
description: "Generate a complete operational runbook for a service — covering startup/shutdown, health checks, common failure scenarios with step-by-step resolution procedures, escalation paths, and on-call guidance."
useCase: "Use this prompt when a service goes into production without documentation, when you've responded to the same incident three times and need to capture the fix, or when onboarding a new on-call engineer. A runbook is the document you wish existed at 2 AM."
prompt: |
  You are a senior site reliability engineer writing documentation for on-call engineers. Create a complete operational runbook for the service described below.

  **Service name:** {{service_name}}
  **What it does:** {{service_description}}
  **Technology stack:** {{tech_stack}}
  **Dependencies:** {{dependencies}} (databases, queues, external APIs, other internal services)
  **Deployment environment:** {{environment}} (e.g., Kubernetes on AWS, bare metal, Heroku, single EC2)
  **Monitoring and alerting:** {{monitoring}} (tools used, key dashboards)
  **Common failure modes you've seen:** {{known_failures}}
  **On-call escalation path:** {{escalation}}

  Write a complete runbook with these sections:

  ## 1. Service Overview
  - What the service does and why it matters
  - Business impact if the service is down (severity classification)
  - Key SLOs / SLAs (if applicable)

  ## 2. Architecture Diagram (Text)
  A text-based diagram showing the service's dependencies and data flow:
  ```
  [Client] → [Service] → [Dependency1]
                       → [Dependency2]
  ```

  ## 3. Access and Credentials
  - How to connect to the service (SSH, kubectl exec, admin console)
  - Where to find credentials (never put actual credentials in runbooks — link to secrets manager)
  - Key admin URLs and dashboards

  ## 4. Health Checks
  - How to verify the service is healthy (specific commands to run)
  - Expected output when healthy
  - What "degraded" looks like vs "down"

  ## 5. Common Operations

  ### Start / Restart
  ```bash
  [exact commands]
  ```

  ### Stop / Graceful Shutdown
  ```bash
  [exact commands]
  ```

  ### Deploy / Rollback
  ```bash
  [exact commands]
  ```

  ### View Logs
  ```bash
  [exact commands for common log queries]
  ```

  ## 6. Alert Response Procedures

  For each known alert or failure mode, provide a step-by-step procedure:

  ### Alert: [Alert Name]
  **What it means:** [Plain English explanation]
  **Severity:** P1 / P2 / P3
  **Steps:**
  1. [Exact command or action]
  2. [Next step]
  3. ...
  **If unresolved after [N] minutes:** [What to do — escalate, roll back, etc.]

  ## 7. Escalation Matrix
  | Severity | First Contact | Second Contact | Timeout |
  |---|---|---|---|

  ## 8. Post-Incident Steps
  - What to do after resolving an incident
  - How to file an incident report
  - Common items to add to the post-mortem

  ## 9. Maintenance Procedures
  - Scheduled maintenance windows
  - Database backup and restore procedure
  - Certificate renewal
  - Dependency upgrades
variables:
  - "{{service_name}}"
  - "{{service_description}}"
  - "{{tech_stack}}"
  - "{{dependencies}}"
  - "{{environment}}"
  - "{{monitoring}}"
  - "{{known_failures}}"
  - "{{escalation}}"
exampleInput: |
  service_name: Survey Delivery Worker
  service_description: Background worker that sends survey invitations and reminders via email and in-app notifications. Processes jobs from a Redis queue and writes delivery status back to PostgreSQL.
  tech_stack: Python 3.12, Redis 7, PostgreSQL 15, AWS SES for email
  dependencies: |
    - Redis (job queue) — redis.internal:6379
    - PostgreSQL — db.internal:5432, database: beacon_prod
    - AWS SES — email delivery
    - Beacon API — fetches recipient lists and survey content
  environment: Kubernetes cluster on AWS EKS. Service runs as a Deployment with 3 replicas.
  monitoring: |
    - Datadog dashboards: "Survey Delivery" dashboard
    - Alerts: PagerDuty for P1/P2, Slack #eng-alerts for P3
    - Key metrics: queue depth, delivery success rate, worker error rate
  known_failures: |
    - Redis connection lost → workers crash and don't restart cleanly
    - SES sending limits hit → emails fail silently, surveys show 0% delivery
    - PostgreSQL connection pool exhausted → workers hang on DB writes
    - Survey content fetch from Beacon API times out → job retried but can cause duplicates
  escalation: |
    P1 (service down, surveys not delivering): page on-call engineer immediately
    P2 (degraded, some deliveries failing): Slack #eng-oncall, 15min response
    P3 (minor errors, monitoring only): Slack #eng-alerts, next-business-day
exampleOutput: |
  # Survey Delivery Worker — Operational Runbook

  **Last updated:** 2025-03-15 | **Owner:** Platform Engineering

  ---

  ## 1. Service Overview

  The Survey Delivery Worker processes queued jobs to send survey invitations and reminders to employees. It is responsible for all email and in-app notifications related to surveys.

  **Business impact if down:** Survey recipients do not receive invitations or reminders. Active surveys show 0% delivery. Response rates drop significantly after 2+ hours of downtime.

  **Severity classification:** P1 if service is fully down during a major survey send (>1000 recipients). P2 for partial failures or off-peak issues.

  **SLO:** 99.5% of survey delivery jobs processed within 5 minutes of enqueue.

  ---

  ## 2. Architecture

  ```
  Beacon API → Redis Queue (delivery-jobs)
                     ↓
             Survey Delivery Worker (3 replicas)
                     ↓
             AWS SES → Recipient Email
             Beacon API → In-app notification
             PostgreSQL → Delivery status write
  ```

  ---

  ## 3. Access

  **Connect to a worker pod:**
  ```bash
  kubectl -n production get pods -l app=survey-delivery-worker
  kubectl -n production exec -it survey-delivery-worker-[pod-id] -- /bin/bash
  ```

  **Credentials:** See 1Password vault → "Production Infrastructure" → "Survey Delivery Worker".

  **Dashboards:**
  - Datadog: [Survey Delivery Dashboard](https://app.datadoghq.com/dashboard/survey-delivery)
  - Redis queue depth: `redis-cli -h redis.internal LLEN delivery-jobs`
  - PagerDuty: `survey-delivery-worker` service

  ---

  ## 4. Health Checks

  **Check pod status:**
  ```bash
  kubectl -n production get pods -l app=survey-delivery-worker
  # Healthy: 3/3 Running, Restarts: 0
  # Degraded: any pod in CrashLoopBackOff or Restarts > 5
  ```

  **Check queue is being processed:**
  ```bash
  redis-cli -h redis.internal LLEN delivery-jobs
  # Healthy: <100 (growing queues indicate processing issues)
  # Warning: >500 and growing
  # Critical: >2000 or not decreasing over 5 minutes
  ```

  **Check recent error rate (Datadog):**
  Look at the "Worker Error Rate" panel. Normal: <0.5%. Elevated: >2% sustained for 5 minutes.

  ---

  ## 5. Common Operations

  ### Restart workers
  ```bash
  kubectl -n production rollout restart deployment/survey-delivery-worker
  kubectl -n production rollout status deployment/survey-delivery-worker
  # Wait for: "deployment successfully rolled out"
  ```

  ### Roll back to previous version
  ```bash
  kubectl -n production rollout undo deployment/survey-delivery-worker
  kubectl -n production rollout status deployment/survey-delivery-worker
  ```

  ### Scale replicas (e.g., during high-volume sends)
  ```bash
  kubectl -n production scale deployment/survey-delivery-worker --replicas=6
  # Scale back after send completes:
  kubectl -n production scale deployment/survey-delivery-worker --replicas=3
  ```

  ### View logs
  ```bash
  # Last 100 lines from all pods
  kubectl -n production logs -l app=survey-delivery-worker --tail=100

  # Follow logs in real time
  kubectl -n production logs -l app=survey-delivery-worker -f

  # Filter for errors only
  kubectl -n production logs -l app=survey-delivery-worker --tail=500 | grep '"level":"error"'
  ```

  ---

  ## 6. Alert Response Procedures

  ### Alert: `survey_delivery_queue_depth_critical`
  **What it means:** More than 2000 jobs are queued and not decreasing — workers are not processing jobs fast enough or have stopped.
  **Severity:** P1

  **Steps:**
  1. Check pod status: `kubectl -n production get pods -l app=survey-delivery-worker`
  2. If pods are in `CrashLoopBackOff`: check logs for the crash reason (see below)
  3. If pods appear Running: check Redis connectivity from inside a pod:
     ```bash
     kubectl -n production exec -it survey-delivery-worker-[pod] -- redis-cli -h redis.internal PING
     # Expected: PONG
     ```
  4. If Redis is unreachable: escalate to infrastructure team (Redis outage)
  5. If Redis is reachable and pods are running: restart the deployment (step above)
  6. Monitor queue depth after restart — should start decreasing within 60 seconds

  **If unresolved after 15 minutes:** Page infrastructure on-call.

  ---

  ### Alert: `survey_delivery_ses_error_rate_high`
  **What it means:** AWS SES is returning errors for >5% of email sends. Surveys are being processed but emails are not reaching recipients.
  **Severity:** P2

  **Steps:**
  1. Check AWS SES sending limits in AWS Console → SES → Sending Statistics
  2. Check for SES bounce/complaint rate (must stay below 10% / 0.5% respectively)
  3. Check worker logs for the error type:
     ```bash
     kubectl -n production logs -l app=survey-delivery-worker --tail=200 | grep 'SES'
     ```
  4. If rate limit hit: pause the high-volume survey send (via Beacon admin → Surveys → Pause) and contact AWS support to request limit increase
  5. If bounce rate issue: check which domain/sender is bouncing, escalate to deliverability team

  **If unresolved after 30 minutes:** Escalate to P1, page engineering lead.

  ---

  ### Alert: `survey_delivery_db_connection_pool_exhausted`
  **What it means:** Workers are waiting for PostgreSQL connections and jobs are timing out.
  **Severity:** P2

  **Steps:**
  1. Check current connection count:
     ```sql
     SELECT count(*) FROM pg_stat_activity WHERE datname = 'beacon_prod';
     ```
     Expected: <150. Critical: >200.
  2. Kill idle connections if needed:
     ```sql
     SELECT pg_terminate_backend(pid)
     FROM pg_stat_activity
     WHERE datname = 'beacon_prod' AND state = 'idle' AND query_start < NOW() - INTERVAL '5 minutes';
     ```
  3. Restart delivery workers to reset their connection pools
  4. If persistent: reduce worker replicas to 2 temporarily to reduce DB load

  ---

  ## 7. Escalation Matrix

  | Severity | First Contact | Second Contact | SLA |
  |---|---|---|---|
  | P1 — Service down | On-call engineer (PagerDuty) | Engineering lead | 15 minutes to respond |
  | P2 — Degraded | #eng-oncall Slack | On-call engineer if no response in 15min | 30 minutes |
  | P3 — Minor | #eng-alerts Slack | Next business day | — |

  ---

  ## 8. Post-Incident Steps

  1. Confirm queue is fully drained after fix: `redis-cli -h redis.internal LLEN delivery-jobs`
  2. Verify delivery success rate returned to normal in Datadog
  3. Check for any surveys with partial delivery — manually trigger re-send if needed (via Beacon admin)
  4. File incident report in Linear with: timeline, root cause, fix applied, follow-up actions
  5. Add a new procedure to this runbook if the failure was novel

  ---

  ## 9. Maintenance

  **Certificate renewal:** Workers use internal service certificates managed by cert-manager. Renewals are automatic. If a certificate error appears in logs, run: `kubectl -n production delete secret survey-worker-tls` to force renewal.

  **Dependency upgrades:** Run the test suite against the staging environment before upgrading Redis or PostgreSQL client libraries. The staging namespace mirrors production configuration.
tips:
  - "Write runbooks as if you'll be reading them at 3 AM after being woken up. Commands should be exact and copy-paste ready — no placeholder values that require additional lookup."
  - "Update the runbook immediately after every incident. The best time to capture the fix is right after you've done it, while the steps are fresh."
  - "Link to dashboards with full URLs, not just 'check Datadog' — at 3 AM, nobody wants to navigate a monitoring tool from scratch."
  - "Add 'expected output' to every health check command. Knowing what 'healthy' looks like is as important as knowing how to check."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - incident-postmortem-template
  - architecture-decision-record
  - environment-setup-guide
  - api-integration-plan
tags:
  - operations
  - documentation
  - reliability
  - engineering
  - on-call
---
