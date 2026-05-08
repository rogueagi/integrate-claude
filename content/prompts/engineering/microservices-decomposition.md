---
title: "Plan a monolith-to-microservices decomposition"
slug: microservices-decomposition
function: engineering
role: architecture
description: "Analyze a monolithic application and produce a decomposition plan — identifying service boundaries, migration sequence, communication patterns, and the risks of the split — with a phased approach that keeps the system running throughout."
useCase: "Use this prompt when a monolith is creating scaling or team coordination problems and you're evaluating whether microservices are the right answer, or when you've decided to decompose and need a safe migration plan."
prompt: |
  You are a principal engineer who has led multiple monolith-to-microservices migrations. Analyze the monolith described below and produce a decomposition plan.

  **Application name:** {{app_name}}
  **What it does:** {{app_description}}
  **Current technology stack:** {{tech_stack}}
  **Team structure:** {{team_structure}} (number of teams, how they're organized, Conway's Law implications)
  **Primary pain points driving this decision:** {{pain_points}} (scaling bottlenecks, deployment coupling, team coordination issues)
  **Current architecture description:**
  {{architecture_description}}
  **Scale requirements:** {{scale}}
  **Constraints:** {{constraints}} (cannot have downtime, must keep current DB, regulatory, etc.)

  Produce a complete decomposition plan:

  ## 1. Should You Actually Do This?

  Before planning the migration, honestly assess:
  - Are the pain points actually caused by the monolith architecture, or by code quality, team process, or missing tooling?
  - What's the minimum change that would solve the stated pain points?
  - What's the organizational readiness? (Does the team have Kubernetes, CI/CD, distributed tracing, service mesh experience?)
  - Recommendation: Proceed with decomposition / Proceed with targeted extraction only / Address pain points differently

  ## 2. Domain Analysis and Service Boundary Identification

  Identify the natural service boundaries using Domain-Driven Design principles:
  - List the bounded contexts in the application
  - For each context: what data it owns, what operations it performs, how it relates to other contexts
  - Which contexts are strong candidates for extraction (high cohesion, low coupling to others)
  - Which contexts should stay in the monolith (too tightly coupled, too small to justify a service)

  ## 3. Proposed Services

  For each proposed service:
  - **Service name and responsibility**
  - **Data it owns** (tables or entities it should own exclusively)
  - **API it exposes** (key operations)
  - **Dependencies** (which other services it calls)
  - **Justification** (why this is its own service — what problem does extracting it solve?)
  - **Risk** (what makes this service hard to extract?)

  ## 4. Communication Patterns

  For each inter-service interaction, specify:
  - Synchronous (REST/gRPC) vs. asynchronous (events/messages)
  - Which interactions are acceptable to be eventually consistent
  - Which interactions require strong consistency (and how to achieve it)
  - How distributed transactions will be handled (Saga pattern, etc.)

  ## 5. Migration Sequence (Strangler Fig)

  A phased extraction plan that keeps the system running throughout:
  - **Phase 1:** Which service to extract first and why (easiest, least risky)
  - **Phase 2:** Next extraction
  - **Phase N:** ...
  - For each phase: what the system looks like during and after, and how to validate it worked

  ## 6. Data Migration Strategy

  - How to split the shared database without downtime
  - Dual-write period for any tables being migrated
  - How to handle queries that currently join across future service boundaries

  ## 7. Operational Prerequisites

  What must be in place before the first service is extracted:
  - Distributed tracing
  - Centralized logging
  - Service discovery
  - API gateway
  - Circuit breakers
  - Health checks and readiness probes

  ## 8. Risks and Mitigations

  The top risks in this decomposition and how to manage them.
variables:
  - "{{app_name}}"
  - "{{app_description}}"
  - "{{tech_stack}}"
  - "{{team_structure}}"
  - "{{pain_points}}"
  - "{{architecture_description}}"
  - "{{scale}}"
  - "{{constraints}}"
exampleInput: |
  app_name: Beacon (HR survey platform)
  app_description: B2B SaaS HR platform — companies run engagement surveys for employees, managers view results in dashboards, HR admins configure surveys and recipient groups
  tech_stack: Python/Django monolith, PostgreSQL, Redis (caching only), deployed as a single Docker container on AWS ECS
  team_structure: |
    3 product squads of 3 engineers each:
    - Survey Squad: survey creation, question design, logic
    - Delivery Squad: sending surveys, reminders, tracking completion
    - Analytics Squad: response aggregation, dashboards, reports
    Each squad deploys through the same monolith — one team's buggy deploy breaks everyone.
  pain_points: |
    1. Deployment coupling: a bug in Analytics code caused a 45-minute outage affecting survey delivery last month
    2. Database lock contention: analytics aggregation queries lock tables used by survey submission writes during peak hours
    3. Team autonomy: squads can't deploy independently; every deploy requires coordination
  architecture_description: |
    Single Django app with three main Django apps: surveys, delivery, analytics.
    Single PostgreSQL database with all tables.
    Redis used for caching analytics results only.
    All three apps import from each other freely (high coupling between apps).
  scale: "800 customers, 500K employees, peak 5K survey submissions/minute, 200 concurrent dashboard users"
  constraints: |
    - No downtime allowed
    - Team has basic Kubernetes experience (one cluster running staging)
    - No dedicated platform/SRE team — squads share on-call
    - 6-month migration budget before next product cycle
exampleOutput: |
  ## 1. Should You Actually Do This?

  **Honest assessment: Targeted extraction, not full decomposition.**

  The stated pain points are real but don't require decomposing into 3+ microservices:

  - **Deployment coupling** is solved by independent deployment pipelines — which can be achieved with a modular monolith (separate deployable modules) before committing to distributed services.
  - **Database lock contention** between analytics reads and survey submission writes is a database problem, solvable with read replicas and query optimization before splitting services.
  - **Team autonomy** is primarily a code boundary and CI/CD problem, not an architecture problem.

  **Minimum change that solves the pain:** Strict module boundaries within the monolith (no cross-app imports) + separate deployment pipelines per squad + a read replica for analytics. This eliminates all three pain points in 4–6 weeks instead of 6 months.

  **Recommendation:** Extract one service (Survey Delivery) as a pilot to prove the team's distributed systems capability, while hardening the monolith's internal boundaries. Do not decompose all three domains without this operational experience first.

  If the team chooses to proceed with decomposition anyway, here is the plan:

  ---

  ## 2. Domain Analysis and Service Boundary Identification

  **Bounded contexts:**

  | Context | Data it owns | Coupling to others | Extraction candidate? |
  |---|---|---|---|
  | Survey Authoring | surveys, questions, survey_versions | Low — other contexts read survey definitions | Yes |
  | Survey Delivery | deliveries, notifications, completion_tracking | Medium — reads surveys, writes to responses | Yes — extract first |
  | Analytics | aggregated_metrics, report_snapshots | High — reads from all other tables | Extract last |
  | User/Org | users, companies, departments, teams | High — referenced by all | Keep in monolith or extract as shared identity service |

  **Strong extraction candidate:** Survey Delivery — high cohesion, clear boundary (sending messages), team ownership maps 1:1 to a squad, and it's the context most harmed by the current deployment coupling.

  **Keep in monolith initially:** Analytics — it reads from almost everything, making it the hardest to extract. Serve analytics from a read replica of the main DB while the rest of the migration proceeds.

  ---

  ## 3. Proposed Services

  ### Service 1: Survey Delivery Service
  - **Responsibility:** Scheduling and sending survey invitations and reminders; tracking delivery status and completion
  - **Data it owns:** `deliveries`, `delivery_events`, `completion_tracking`
  - **API:** POST /deliveries (schedule a send), GET /deliveries/{id}/status, POST /completions (mark complete)
  - **Dependencies:** Reads survey definitions from Survey Service (sync); writes completion events consumed by Analytics (async/events)
  - **Justification:** This is the context most impacted by deployment coupling. Isolating it means a delivery bug doesn't affect survey submission or dashboards.
  - **Risk:** Currently shares the `responses` table with the Analytics context — must agree on data ownership before splitting

  ### Service 2: Survey Authoring Service
  - **Responsibility:** Creating, editing, versioning, and publishing survey definitions
  - **Data it owns:** `surveys`, `questions`, `survey_versions`, `survey_templates`
  - **API:** CRUD on surveys and questions; GET /surveys/{id}/definition (read-heavy, cacheable)
  - **Dependencies:** Read-only by Delivery and Analytics
  - **Justification:** Low coupling to other services; survey definitions are the read-only "reference data" that other services consume
  - **Risk:** Low — this is the cleanest extraction

  ---

  ## 4. Communication Patterns

  | Interaction | Pattern | Consistency | Rationale |
  |---|---|---|---|
  | Delivery reads survey definition | Sync REST (cached) | Eventual (cache TTL: 5 min) | Survey definitions rarely change; cache eliminates runtime coupling |
  | Survey submitted → Analytics notified | Async event (Redis Pub/Sub → move to SQS) | Eventual | Analytics doesn't need to know about submissions in real time |
  | Completion tracked → delivery updated | Sync REST | Strong | Delivery service owns this data; must be authoritative |
  | Analytics reads response data | Read from delivery service's DB replica (during transition) | Eventual | Until analytics is fully extracted |

  **Distributed transaction handling:** The current synchronous write (response saved → analytics updated) must become an outbox pattern: write response to Delivery DB, publish `response.submitted` event to SQS, Analytics processes event asynchronously. This is eventually consistent — dashboards may lag by 10–30 seconds. Acceptable given the stated 30-second freshness SLO.

  ---

  ## 5. Migration Sequence (Strangler Fig)

  **Phase 1 (Weeks 1–4): Harden the monolith boundaries**
  - Enforce strict module boundaries (no cross-app imports in Django). Use `import-linter` to enforce this in CI.
  - Add a read replica for analytics queries — eliminates the lock contention issue immediately
  - Add separate deployment pipelines per squad (same container, different deploy triggers)
  - **Validation:** Deploy each squad independently without coordination. Lock contention gone.

  **Phase 2 (Weeks 5–10): Extract Survey Delivery**
  - Deploy Survey Delivery as a separate FastAPI service alongside the monolith
  - Monolith routes delivery-related requests to the new service via an internal API gateway
  - Dual-write delivery events to both the monolith DB and the new service DB during transition
  - Cut over reads to the new service; remove dual-write after 2 weeks of validated data parity
  - **Validation:** Delivery squad deploys independently. A bug in delivery does not require a monolith rollback.

  **Phase 3 (Weeks 11–16): Extract Survey Authoring**
  - Simpler extraction — survey definitions are mostly read
  - Add a thin GraphQL or REST API to the new service; update Delivery to consume it
  - Cache aggressively (CDN or Redis) for high-read survey definition endpoints
  - **Validation:** Authoring squad deploys independently. Survey definitions served from new service.

  **Phase 4 (Optional, beyond 6 months): Analytics**
  - Only extract if team has validated operational capability from Phases 2–3
  - Analytics extraction requires the most sophisticated data pipeline work

  ---

  ## 7. Operational Prerequisites

  Before Phase 2 begins, the following must be in place:
  - **Distributed tracing:** OpenTelemetry + Jaeger or Datadog APM. Without this, debugging cross-service failures at 2 AM is nearly impossible.
  - **Centralized logging:** All services log to the same destination with a consistent correlation ID on every request.
  - **Health checks:** Every service exposes `/health` and `/ready` for Kubernetes probes.
  - **Circuit breakers:** When Survey Delivery calls Survey Authoring, a circuit breaker prevents cascading failures if Authoring is slow.
  - **API gateway:** AWS API Gateway or nginx for routing — allows the monolith and new services to share the same domain.

  ---

  ## 8. Risks and Mitigations

  | Risk | Likelihood | Impact | Mitigation |
  |---|---|---|---|
  | Team lacks distributed systems operational experience | High | High | Do Phase 1 first; learn on the monolith before adding network hops |
  | Data migration causes inconsistency during dual-write | Medium | High | Run dual-write for minimum 2 weeks; automated consistency checks before cutover |
  | Latency increases due to network hops | High | Medium | Cache survey definitions aggressively; keep analytics on read replica longer |
  | On-call complexity increases significantly | High | High | Invest in distributed tracing before Phase 2; one incident without tracing will cost more time than setup |
tips:
  - "The hardest part of microservices is not the services — it's the operational infrastructure (tracing, logging, service discovery) that makes them debuggable. Don't underestimate this."
  - "Extract the service with the clearest boundary and least coupling first. It builds confidence and exposes gaps in your operational readiness before you attempt a harder split."
  - "Many monolith pain points are actually code organization and CI/CD problems, not architecture problems. A modular monolith with strict module boundaries and independent deployment pipelines solves deployment coupling without the distributed systems complexity."
  - "Never start with the database split. Extract the service first, keep it pointed at the shared database, then migrate the data in a second phase once the service is proven."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - system-design-review
  - tech-stack-evaluation
  - architecture-decision-record
  - runbook-draft
tags:
  - architecture
  - microservices
  - migration
  - engineering
  - distributed-systems
---
