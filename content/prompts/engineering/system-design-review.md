---
title: "Review a system design proposal"
slug: system-design-review
function: engineering
role: architecture
description: "Critically evaluate a system design proposal — assessing scalability, reliability, data consistency, security, operational complexity, and cost — with prioritized feedback and alternative approaches."
useCase: "Use this prompt during design reviews for new systems or significant features, before a team commits to an architecture. A good design review surfaces the assumptions that will cause problems at scale, identifies the failure modes nobody has thought about, and asks the questions the team forgot to ask."
prompt: |
  You are a principal engineer with deep experience in distributed systems, reviewing a design proposal. Provide a thorough, critical review of the system design below.

  **System name:** {{system_name}}
  **What it does:** {{system_description}}
  **Scale requirements:** {{scale}} (users, requests per second, data volume, latency requirements)
  **Design document or description:**
  {{design_description}}
  **Technology choices made:** {{tech_choices}}
  **Team context:** {{team_context}} (team size, experience level, operational maturity)
  **Constraints:** {{constraints}} (budget, timeline, existing systems that must be integrated)

  Conduct a thorough design review using this structure:

  ## Design Review Summary
  Overall assessment: **Strong / Solid with concerns / Needs rework / Fundamentally flawed**

  Top 3 concerns in order of severity. If the design is strong, top 3 things done well.

  ## Functional Correctness
  - Does the design actually solve the stated problem?
  - Are there edge cases or user flows the design doesn't handle?
  - Are there implicit assumptions in the design that need to be made explicit?

  ## Scalability Analysis
  - Will this design handle the stated scale requirements?
  - What breaks first as scale increases?
  - At what scale does the design need to change fundamentally?
  - Identify any bottlenecks (single points of high load, database hotspots, synchronous chains)

  ## Reliability and Failure Modes
  - What happens when each component fails?
  - Are there single points of failure?
  - What is the blast radius of each failure mode?
  - Is there appropriate redundancy for the criticality of the system?
  - How does the system degrade gracefully?

  ## Data Consistency and Integrity
  - What are the consistency requirements? (strong, eventual, causal)
  - Are there any race conditions or data integrity risks?
  - How are distributed transactions handled?
  - What happens if a write partially succeeds?

  ## Security Considerations
  - Authentication and authorization model
  - Data access controls — can users access data they shouldn't?
  - Sensitive data handling (PII, credentials)
  - New attack surface introduced

  ## Operational Complexity
  - How hard is this to deploy, monitor, and debug?
  - Is the team equipped to operate this? (tooling, expertise, on-call requirements)
  - What monitoring and alerting does this require?

  ## Cost Analysis
  - Rough order-of-magnitude cost estimate for the stated scale
  - Any unexpectedly expensive components
  - Cost scaling behavior (does it scale linearly? exponentially?)

  ## Alternative Approaches
  For the most significant design decisions, propose 1–2 alternatives with trade-off comparison.

  ## Open Questions
  Questions the design leaves unanswered that should be resolved before implementation begins.

  ## Recommended Changes
  Prioritized list: Must-change before building, Should-change before shipping, Nice-to-have improvements.
variables:
  - "{{system_name}}"
  - "{{system_description}}"
  - "{{scale}}"
  - "{{design_description}}"
  - "{{tech_choices}}"
  - "{{team_context}}"
  - "{{constraints}}"
exampleInput: |
  system_name: Real-Time Survey Response Pipeline
  system_description: A system that ingests survey responses in real time as employees submit them, aggregates engagement metrics, and updates manager dashboards within 30 seconds of each submission
  scale: |
    - 800 customer accounts, each running 1–5 concurrent surveys
    - Peak: 5,000 survey submissions per minute (Monday morning after weekend reminders)
    - Dashboard: 200 concurrent managers refreshing dashboards every 30 seconds
    - P99 dashboard freshness: data must be no more than 30 seconds old
  design_description: |
    Each survey submission triggers a webhook to our ingestion service (FastAPI). The ingestion service writes the raw response to PostgreSQL, then immediately recalculates all aggregate metrics for that survey (response rate, score averages per question, by-department breakdowns) and writes the results to a Redis cache. Manager dashboards poll a separate read API that reads from Redis. If Redis cache is cold (cache miss), read API falls back to PostgreSQL for live calculation.
    
    All of this happens synchronously — the webhook response returns only after all aggregation is complete.
  tech_choices: "FastAPI (Python), PostgreSQL 15, Redis 7. All deployed on a single Kubernetes cluster on AWS EKS."
  team_context: "6 engineers, 2 of whom have strong backend experience. Team has PostgreSQL and Redis experience. No message queue experience. No dedicated SRE — developers do on-call."
  constraints: |
    - 6-week timeline to first version
    - Must integrate with existing PostgreSQL database
    - No new vendors without VP approval (Redis is already approved)
exampleOutput: |
  ## Design Review Summary

  **Solid with concerns** — The overall approach is reasonable for the scale and team context, but there are two significant issues that will cause problems in production: synchronous aggregation in the webhook response path, and unbounded write amplification at peak load. Neither is a fundamental redesign — both can be fixed within the proposed technology choices.

  **Top 3 concerns:**
  1. Synchronous aggregation on the webhook response path — a slow aggregation query delays the HTTP response and causes submission failures to cascade
  2. Write amplification at peak load (5K submissions/minute = 5K full aggregation recalculations/minute — this will saturate PostgreSQL)
  3. Cache invalidation — no described strategy for what happens when Redis restarts or an entry expires mid-session

  ## Functional Correctness

  The core flow (submit → ingest → aggregate → cache → serve) covers the happy path. Missing:
  - **Duplicate submission handling:** If the submitter retries a request (network timeout, client-side retry), will it create duplicate responses? The design doesn't mention idempotency keys.
  - **Survey close/open state:** What if a submission arrives after a survey closes? Is this handled at ingestion?
  - **Partial aggregations:** If a department has 0 responses yet, does the aggregation return 0 or null? Both are valid but have different UI implications.

  ## Scalability Analysis

  **At stated scale (5K submissions/minute peak):**
  - 5K submissions/minute = ~83/second. Each triggers a full re-aggregation of the survey's metrics (response rate, question averages, department breakdowns).
  - A survey with 500 participants requires scanning potentially 500 response rows per aggregation. 83 aggregations × 500 rows = 41,500 row reads/second from PostgreSQL, plus 83 writes for raw responses. This will saturate a single PostgreSQL instance at peak.
  - **Bottleneck:** PostgreSQL is the bottleneck. The synchronous aggregation design means submission latency = raw write + full aggregation query. As concurrent submissions spike, PostgreSQL connection pool exhaustion will cause cascading failures.

  **At 2x scale (10K submissions/minute):** System will fail. Not a gradual degradation — connection pool exhaustion causes hard failures.

  ## Reliability and Failure Modes

  | Component | Failure Mode | Impact | Mitigation in Design |
  |---|---|---|---|
  | PostgreSQL | Unavailable | All submissions fail | None described |
  | Redis | Unavailable | Dashboards fall back to PostgreSQL — this may be fine or catastrophic depending on query performance | Cache-miss fallback exists; good |
  | Aggregation query timeout | Webhook times out | Submitter sees error; response may or may not be saved (race condition) | None |
  | Redis cache cold after restart | All 200 managers trigger cache miss simultaneously | 200 concurrent PostgreSQL aggregation queries | Not described |

  **Most dangerous failure mode:** Redis restart during a major survey send. If Redis is cold and 5K submissions/minute are coming in AND 200 managers are refreshing dashboards every 30 seconds, you'll have both write load and read load hammering PostgreSQL simultaneously. This is likely a full outage scenario.

  ## Data Consistency and Integrity

  - **Race condition in aggregation:** Two simultaneous submissions for the same survey will both trigger a full aggregation. If they run concurrently, the last writer wins — this is fine for eventual consistency, but the design should make this explicit.
  - **Aggregate-vs-raw consistency:** Raw responses are in PostgreSQL; aggregates are in Redis. If the Redis write fails after the PostgreSQL write succeeds, dashboards will show stale data indefinitely. The design doesn't describe what happens in this case.
  - **Recommendation:** Separate the write path from the aggregation path. Write raw response to PostgreSQL and return 200 OK. Trigger aggregation asynchronously. Accept that dashboards may be up to 30 seconds stale (which matches the stated SLO anyway).

  ## Operational Complexity

  Current design is actually well-suited to a 6-person team with no message queue experience. PostgreSQL + Redis is a stack they know. The synchronous design is easy to debug (follow the request, find the slow query).

  The main operational risk: synchronous aggregation means a bad query in production will show up as slow survey submissions — not slow dashboards. This correlation will be confusing to debug initially. Recommend logging aggregation time separately from submission write time.

  ## Alternative Approaches

  ### Alternative to synchronous aggregation: Deferred aggregation with polling

  Instead of recalculating on every submission, recalculate on a timer (every 15–30 seconds) per active survey.

  ```
  Submission → Write to PostgreSQL → 200 OK (fast)
  Background job (every 30s) → Recalculate aggregates for active surveys → Update Redis
  Manager dashboard → Read from Redis (always fast, never falls back)
  ```

  **Trade-offs:**
  - Pro: Eliminates write amplification completely. 30-second recalculation batch replaces per-submission recalculation.
  - Pro: Submission endpoint is now just a fast PostgreSQL INSERT — much lower latency and more reliable
  - Pro: Naturally handles the stated 30-second freshness SLO — you can tune the batch interval to match
  - Con: Requires a background job scheduler (can use Kubernetes CronJob or APScheduler — no new vendor)
  - Con: Slightly more complex code than synchronous path

  This is the recommended change. It eliminates the bottleneck, improves submission reliability, and still meets the 30-second SLO.

  ## Open Questions

  1. **Idempotency:** How are duplicate submissions handled? (Network retries are common in mobile/flaky networks)
  2. **Survey concurrency:** If 800 accounts each run 5 surveys, peak is 4000 concurrent active surveys. How are active surveys tracked for the background aggregation job?
  3. **Historical data:** Do dashboards show only real-time data or historical trend data? The design implies real-time only — confirm.
  4. **Dashboard polling interval:** 30-second polling from 200 managers = ~7 requests/second to the read API. This is fine — just confirm the read API is stateless and horizontally scalable.

  ## Recommended Changes

  **Must-change before building:**
  1. Decouple submission write from aggregation — make aggregation asynchronous (background job)
  2. Define idempotency strategy for duplicate submissions (idempotency key in request header, deduplicated at ingestion)

  **Should-change before shipping:**
  3. Add a Redis warm-up strategy — pre-populate cache for active surveys on startup and after Redis restart
  4. Add a circuit breaker on the PostgreSQL fallback — if PostgreSQL is slow, the fallback will make things worse

  **Nice-to-have:**
  5. Log aggregation time and submission write time as separate metrics in Datadog for easier debugging
  6. Add a dead-letter queue for submissions that fail to persist — important for not losing data silently
tips:
  - "The best system design reviews ask 'what happens when X fails?' for every X. Most design documents show the happy path — the failure modes reveal whether the design is actually production-ready."
  - "Call out implicit assumptions explicitly. 'This assumes Redis is always available' is worth saying, even if Redis HA is planned — it makes the dependency visible."
  - "Frame must-change vs. nice-to-have clearly. Design reviews that treat all concerns equally make it hard for the team to prioritize."
  - "If you're going to reject a design choice, propose an alternative. 'This won't scale' is less useful than 'this won't scale — here's a pattern that will.'"
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - architecture-decision-record
  - tech-stack-evaluation
  - data-model-review
  - api-integration-plan
tags:
  - architecture
  - system-design
  - scalability
  - reliability
  - engineering
---
