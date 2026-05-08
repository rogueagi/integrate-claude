---
title: "Evaluate technology options for a new project or component"
slug: tech-stack-evaluation
function: engineering
role: architecture
description: "Systematically compare technology options for a technical decision — evaluating fit, maturity, team readiness, operational cost, and long-term risk — and produce a structured recommendation with clear rationale."
useCase: "Use this prompt when choosing between frameworks, databases, message brokers, cloud providers, or any major technology component. Structured evaluation prevents gut-feel decisions and creates a record of why the choice was made."
prompt: |
  You are a principal engineer helping a team make an informed technology decision. Evaluate the options described below and provide a structured recommendation.

  **Decision to make:** {{decision}}
  **What this technology will be used for:** {{use_case}}
  **Options to evaluate:** {{options}}
  **Scale and performance requirements:** {{scale_requirements}}
  **Team context:** {{team_context}} (size, experience, existing stack)
  **Budget constraints:** {{budget}}
  **Must-have requirements:** {{must_haves}} (requirements that would eliminate an option)
  **Nice-to-have requirements:** {{nice_to_haves}}
  **Timeline:** {{timeline}} (when does a decision need to be made? how long to implement?)

  Provide a structured evaluation:

  ## Decision Context
  Restate the decision clearly and identify the most important factors that should drive it.

  ## Elimination Round
  For each must-have requirement, note which options (if any) fail to meet it and are eliminated.

  ## Option Evaluations

  For each remaining option:

  ### [Option Name]

  **What it is:** Brief description for context.

  **Fit for this use case:**
  - How well does it address the specific requirements?
  - What does it do particularly well for this use case?
  - What does it do poorly or require workarounds for?

  **Maturity and ecosystem:**
  - How mature is it? (years in production, adoption, community size)
  - Quality of documentation and support resources
  - Vendor / project stability (commercial backing, open source health, license)

  **Team readiness:**
  - Learning curve from the team's current stack
  - Time to first productive commit (days/weeks/months)
  - Hiring implications (is this skill common in the market?)

  **Operational cost:**
  - Infrastructure cost at stated scale
  - Maintenance burden (upgrades, patches, configuration)
  - Observability (monitoring tools, debugging experience)

  **Long-term risk:**
  - Lock-in risk (how hard to switch away?)
  - Technology trajectory (growing, stable, declining?)
  - Known issues or limitations that would matter at 2x/10x scale

  **Score:** [1–5] for each dimension: Fit, Maturity, Team readiness, Operational simplicity, Long-term risk

  ## Comparison Matrix

  | Criterion | Weight | [Option A] | [Option B] | [Option C] |
  |---|---|---|---|---|
  | Fit for use case | [X]% | [score] | [score] | [score] |
  | Maturity | [X]% | | | |
  | Team readiness | [X]% | | | |
  | Operational cost | [X]% | | | |
  | Long-term risk | [X]% | | | |
  | **Weighted total** | 100% | | | |

  ## Recommendation

  **Recommended option:** [Name]
  **Confidence:** High / Medium / Low

  [2–3 paragraphs explaining the recommendation. What makes this the right choice? What's the strongest argument against it, and why you're recommending it anyway?]

  ## The Runner-Up Case
  When would the second-place option be the better choice? (conditions under which the recommendation might change)

  ## Risk Mitigations
  For the top 1–2 risks in the recommended option, what specific mitigations reduce those risks?

  ## Decision Expiry
  This recommendation is based on current conditions. Under what circumstances should the team revisit this decision?
variables:
  - "{{decision}}"
  - "{{use_case}}"
  - "{{options}}"
  - "{{scale_requirements}}"
  - "{{team_context}}"
  - "{{budget}}"
  - "{{must_haves}}"
  - "{{nice_to_haves}}"
  - "{{timeline}}"
exampleInput: |
  decision: Choose a message queue / async task system for background job processing
  use_case: |
    Processing background jobs: sending emails, generating PDF reports, syncing data to third-party integrations, running scheduled aggregation jobs. Currently doing this synchronously in the web process, which is causing timeouts. Need a proper async job system.
  options: Celery + Redis, BullMQ (Node.js), AWS SQS + Lambda, Temporal
  scale_requirements: |
    - ~10K jobs per day currently, expect 100K/day in 12 months
    - Peak: 500 jobs/minute during business hours
    - Most jobs: < 30 seconds execution time
    - Report generation: up to 5 minutes
    - Latency: jobs should start within 30 seconds of enqueue
  team_context: |
    8 engineers, primarily Python/Django background. 2 engineers have used Celery before (positively). No Node.js expertise. Some AWS experience (we're on AWS). Team does their own on-call.
  budget: "Prefer managed services to minimize ops burden. Cost is not the primary constraint."
  must_haves: |
    - Works with Python (our primary language)
    - Retry with exponential backoff
    - Dead letter queue for failed jobs
    - Monitoring / dashboard out of the box or easy to add
  nice_to_haves: |
    - Scheduled/cron jobs
    - Job prioritization
    - Workflow orchestration (chains, groups of dependent tasks)
  timeline: "Decision needed this week, implementation in 2 weeks alongside feature work"
exampleOutput: |
  ## Decision Context

  The core decision is how to move background processing out of the web request cycle. The most important factors are: (1) Python compatibility (a must-have that eliminates BullMQ immediately), (2) team's ability to operate it given self-managed on-call, and (3) fit for the job complexity level — which ranges from simple fire-and-forget to multi-minute report generation.

  ## Elimination Round

  - **BullMQ:** Eliminated — Node.js only, no Python SDK. Team has no Node.js expertise.
  - **Celery, SQS + Lambda, Temporal:** All pass Python must-have. Proceeding.

  ---

  ## Option Evaluations

  ### Celery + Redis

  **What it is:** The de facto standard Python task queue. Workers pull jobs from Redis (or RabbitMQ), execute them, and report results back.

  **Fit for this use case:**
  - Excellent fit — designed for exactly this workload (emails, reports, scheduled jobs, integrations)
  - Native support for retries, backoff, dead-letter queues, cron-style periodic tasks (Celery Beat), and task chaining/grouping (Canvas)
  - Django integration is first-class (django-celery-results, Flower dashboard)
  - Report generation up to 5 minutes: supported natively with task time limits

  **Maturity and ecosystem:**
  - 13+ years in production, massive adoption across the Python ecosystem
  - Flower (monitoring dashboard) is mature but dated in UI; better: using django-celery-results + custom Grafana, or a commercial APM
  - Some documentation inconsistency across versions, but StackOverflow coverage is excellent

  **Team readiness:**
  - 2 engineers have positive Celery experience — team is not starting from scratch
  - Rest of team: Python background means Celery concepts map naturally; expect productive in 1–2 days
  - No new language or paradigm to learn

  **Operational cost:**
  - Redis is already in the stack (approved, team familiar)
  - 100K jobs/day is well within Celery + Redis capacity on a single Redis instance
  - On-call: Celery worker crashes are straightforward to debug; Flower or Prometheus metrics help monitoring
  - Celery Beat (for scheduled jobs) is a single-point-of-failure scheduler — need redundancy or use django-celery-beat with DB backend

  **Long-term risk:**
  - At 10x scale (1M jobs/day), Redis as broker may need to be replaced with RabbitMQ — migration is possible but non-trivial
  - Celery development has slowed; the core library is stable but not actively innovating
  - Lock-in: Celery is Python-specific, but task logic is plain Python functions — easy to migrate to another system if needed

  **Score:** Fit: 5 | Maturity: 4 | Team readiness: 5 | Operational simplicity: 4 | Long-term risk: 3

  ---

  ### AWS SQS + Lambda

  **What it is:** Managed queue (SQS) triggering serverless functions (Lambda). Fully managed by AWS — no workers to run.

  **Fit for this use case:**
  - Good fit for simple, stateless, short-running jobs (emails, integrations)
  - Poor fit for report generation: Lambda has a 15-minute max execution time and 10GB memory limit — workable, but cold start latency and per-invocation pricing add up
  - No built-in workflow orchestration for chained/dependent tasks (need Step Functions, which adds significant complexity)
  - Monitoring via CloudWatch — functional but requires setup to match Celery + Flower

  **Team readiness:**
  - Team has some AWS experience but no Lambda production experience
  - Debugging Lambda functions requires understanding cold starts, IAM permissions, VPC networking — steeper curve than Celery for a Django team
  - Expect 2–3 weeks to be fully productive, versus 2 days for Celery

  **Operational cost:**
  - At 100K jobs/day: SQS cost ~$0.40/month (negligible). Lambda cost ~$2–10/month depending on execution time. Effectively free at this scale.
  - No workers to manage or scale — genuine operational simplicity advantage
  - However: debugging Lambda failures requires CloudWatch expertise; local development requires SAM or similar tooling

  **Score:** Fit: 3 | Maturity: 5 | Team readiness: 3 | Operational simplicity: 4 | Long-term risk: 2

  ---

  ### Temporal

  **What it is:** A workflow orchestration platform for long-running, stateful workflows. Think Celery + complex DAG support + built-in state persistence.

  **Fit for this use case:**
  - Excellent for complex, multi-step workflows; likely overkill for current workload (emails, reports, syncs)
  - The durable execution model eliminates an entire class of failure modes (worker crash mid-job resumes from where it left off)
  - Django/Python SDK exists and is production-quality

  **Team readiness:**
  - Steepest learning curve of the three: new concepts (workflows, activities, signals), new mental model
  - Temporal Cloud (managed) removes ops burden but adds $200–500/month at small scale
  - Self-hosted Temporal requires Elasticsearch + Cassandra — significant ops overhead for a self-managed on-call team

  **Score:** Fit: 3 | Maturity: 3 | Team readiness: 2 | Operational simplicity: 2 | Long-term risk: 5

  ---

  ## Comparison Matrix

  | Criterion | Weight | Celery + Redis | SQS + Lambda | Temporal |
  |---|---|---|---|---|
  | Fit for use case | 35% | 5 (1.75) | 3 (1.05) | 3 (1.05) |
  | Maturity | 20% | 4 (0.80) | 5 (1.00) | 3 (0.60) |
  | Team readiness | 25% | 5 (1.25) | 3 (0.75) | 2 (0.50) |
  | Operational simplicity | 10% | 4 (0.40) | 4 (0.40) | 2 (0.20) |
  | Long-term risk | 10% | 3 (0.30) | 2 (0.20) | 5 (0.50) |
  | **Weighted total** | 100% | **4.50** | **3.40** | **2.85** |

  ## Recommendation

  **Recommended option: Celery + Redis**
  **Confidence: High**

  Celery wins decisively for this team and workload. The combination of immediate team productivity (two engineers with positive Celery experience, rest of team fluent in Python), exact fit for the stated use case (emails, reports, scheduled jobs, integrations, cron), and deep Django integration makes this the lowest-risk path to a working system in the 2-week implementation window.

  The strongest argument against Celery is its long-term trajectory — the project is stable but not actively innovating. For a 100K jobs/day workload growing to 1M, this is not a near-term concern; Celery + Redis at this scale is a well-understood configuration deployed at hundreds of companies far larger than this team.

  SQS + Lambda is genuinely appealing for operational simplicity at zero cost, but the team's learning curve and poor fit for complex job patterns (report generation, chained tasks) make it the wrong choice for this timeline. Temporal is powerful but overkill — it would solve problems the team won't have for years.

  ## The Runner-Up Case

  Choose **SQS + Lambda** if: (1) the job workload remains simple (no multi-step workflows, no >5-minute jobs), and (2) the team has 4–6 weeks instead of 2 weeks to get productive with the new system. The zero operational overhead is a genuine long-term advantage for a team doing self-managed on-call.

  Choose **Temporal** if: the job workload evolves significantly toward complex, multi-step workflows with human-in-the-loop steps (e.g., approval workflows, complex data pipelines). Celery's task chains are functional but become hard to manage at high complexity.

  ## Risk Mitigations

  **Risk: Celery Beat single-point-of-failure for scheduled jobs**
  Mitigation: Use `django-celery-beat` with a database-backed schedule. This allows multiple Beat instances with leader election, eliminating the single scheduler risk.

  **Risk: Redis as broker at 10x scale**
  Mitigation: Celery supports RabbitMQ as a drop-in broker replacement. Design task payloads to be small (IDs only, not full objects) to stay well within Redis memory limits. Reassess if monthly job volume approaches 5M.

  ## Decision Expiry

  Revisit this decision if:
  - Monthly job volume exceeds 3M (Redis capacity planning)
  - More than 30% of jobs become multi-step workflows requiring state persistence (Temporal becomes more attractive)
  - The team gains significant AWS Lambda experience through other projects (SQS + Lambda becomes more operationally practical)
tips:
  - "Identify your must-have requirements before looking at options — they simplify the decision significantly by eliminating options that can't qualify."
  - "Weight the criteria before scoring — the weights encode your actual priorities. Changing the weights after seeing the scores is a sign you're rationalizing, not deciding."
  - "The 'team readiness' dimension is underweighted in most technology decisions. A slightly inferior technology your team knows well often beats a superior one they'll spend months learning."
  - "Always document the options you rejected and why. Future engineers will wonder 'why didn't they just use X?' and the answer should be recorded."
complexity: intermediate
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - architecture-decision-record
  - system-design-review
  - data-model-review
  - microservices-decomposition
tags:
  - architecture
  - technology-evaluation
  - decision-making
  - engineering
  - strategy
---
