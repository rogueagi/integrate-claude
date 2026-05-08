---
title: "Write an Architecture Decision Record (ADR)"
slug: architecture-decision-record
function: engineering
role: documentation
description: "Document a significant architectural decision with full context, the options considered, the decision made, and the consequences — so future engineers understand why the system is designed the way it is."
useCase: "Use this prompt when making a significant technical decision: choosing a database, message broker, framework, API design pattern, or deployment strategy. ADRs prevent the 'why did we do it this way?' problem that makes refactoring risky years later."
prompt: |
  You are a senior software architect documenting a technical decision for future engineers. Write an Architecture Decision Record (ADR) for the decision described below.

  **Decision title:** {{decision_title}}
  **Date:** {{date}}
  **Decision makers:** {{decision_makers}} (names or roles)
  **Context:** {{context}} (what was happening that required this decision — what problem were you solving?)
  **Options considered:** {{options}} (what alternatives did you evaluate?)
  **Decision made:** {{decision}} (what you chose)
  **Key reasons for the decision:** {{reasons}}
  **Known trade-offs or downsides accepted:** {{trade_offs}}
  **Constraints that influenced the decision:** {{constraints}} (budget, team skills, timeline, existing systems)
  **Status:** {{status}} (Proposed / Accepted / Deprecated / Superseded)
  **Related decisions or documents:** {{related}}

  Write a complete ADR following this structure:

  # ADR-[number]: [Decision Title]

  **Date:** [date]
  **Status:** [status]
  **Decision Makers:** [names/roles]

  ## Context

  [1–3 paragraphs describing the situation that required a decision. Include: the problem being solved, the current state, any relevant constraints or forcing functions. A reader unfamiliar with this system should understand why a decision was needed.]

  ## Decision Drivers

  The most important factors that shaped this decision:
  - [Driver 1]
  - [Driver 2]
  - ...

  ## Options Considered

  ### Option A: [Name]
  **Description:** [What this option entails]
  **Pros:**
  - [Pro 1]
  - [Pro 2]
  **Cons:**
  - [Con 1]
  - [Con 2]

  [Repeat for each option]

  ## Decision

  **We chose [Option X].**

  [1–2 paragraphs explaining the rationale — not just that it won, but *why* it won. What factors tipped the decision? What made the winning option better than the alternatives in this specific context?]

  ## Consequences

  ### Positive
  - [What improves as a result of this decision]

  ### Negative (Accepted Trade-offs)
  - [What gets worse or more complex — these are explicitly accepted]

  ### Risks
  - [What could go wrong with this decision, and what would trigger revisiting it]

  ## Implementation Notes
  [Anything a future engineer needs to know to implement or maintain this decision correctly. Not a full implementation guide — just the non-obvious things.]

  ## Revisiting This Decision
  [Under what conditions should this decision be reconsidered? What metrics or triggers would indicate it's no longer the right choice?]

  ## Related
  - [Links to related ADRs, design docs, or RFCs]
variables:
  - "{{decision_title}}"
  - "{{date}}"
  - "{{decision_makers}}"
  - "{{context}}"
  - "{{options}}"
  - "{{decision}}"
  - "{{reasons}}"
  - "{{trade_offs}}"
  - "{{constraints}}"
  - "{{status}}"
  - "{{related}}"
exampleInput: |
  decision_title: Use PostgreSQL for primary data storage instead of MongoDB
  date: 2025-01-20
  decision_makers: CTO, VP Engineering, Lead Backend Engineer
  context: |
    We are building the Beacon HR platform from scratch. We need to choose a primary database for storing: user accounts, survey definitions (with complex nested question structures), survey responses, and team/org hierarchy data. 
    
    Our current prototype uses MongoDB because the founding engineer was familiar with it. Before committing further, we want to make a deliberate choice.
    
    Our team of 6 engineers has mixed experience: 4 know SQL well, 1 knows Mongo well, 1 is junior with limited DB experience. We are targeting B2B customers with 100–10K employees.
  options: |
    Option A: Continue with MongoDB (document store)
    Option B: Migrate to PostgreSQL (relational)
    Option C: Use both — PostgreSQL for relational data, MongoDB for survey responses
  decision: PostgreSQL for all data
  reasons: |
    - Team SQL expertise (4/6 engineers)
    - Survey data has more relational structure than we initially thought (teams, org hierarchy, response attribution)
    - JSONB in PostgreSQL handles semi-structured survey question definitions without needing a document store
    - Single database reduces operational complexity for a 6-person team
    - Strong ORM support (SQLAlchemy/Django) simplifies development
  trade_offs: |
    - Some survey response data is genuinely document-like; JSONB is slightly less ergonomic than native MongoDB documents
    - Schema migrations required when survey question types evolve (vs. schemaless Mongo)
    - Need to migrate the prototype (estimated 3 days)
  constraints: |
    - Small team, want minimal operational overhead
    - 3-month runway before next fundraise — need to ship, not maintain two databases
    - Must support complex reporting queries (e.g., response rates by department)
  status: Accepted
  related: "ADR-002 (ORM selection), ADR-005 (caching strategy)"
exampleOutput: |
  # ADR-001: Use PostgreSQL for Primary Data Storage

  **Date:** 2025-01-20
  **Status:** Accepted
  **Decision Makers:** CTO, VP Engineering, Lead Backend Engineer

  ---

  ## Context

  The Beacon HR platform is being built from the ground up and requires a primary database for its core data: user accounts, survey definitions, survey responses, and organizational hierarchy (teams, departments, reporting relationships).

  The founding prototype used MongoDB, chosen for speed of initial development. Before committing to this choice at scale, the team decided to evaluate it deliberately. Key concerns with continuing on MongoDB included: the team's limited collective Mongo experience (1 of 6 engineers), the increasingly relational nature of the data model as product requirements clarified, and the operational overhead of potentially running a specialized database at a 6-person company.

  The decision was also time-sensitive — the team had 3 months to next fundraise and needed to make a choice that enabled fast, confident development rather than one that required ongoing DB expertise to operate.

  ## Decision Drivers

  - **Team expertise:** 4 of 6 engineers have strong SQL/PostgreSQL experience; 1 has MongoDB experience
  - **Data model complexity:** Org hierarchy and response attribution require relational queries that are verbose in document stores
  - **Reporting requirements:** Complex aggregation queries (response rates by department, trend analysis) are a first-class use case
  - **Operational simplicity:** A 6-person team can't afford to maintain operational expertise in multiple database systems
  - **Time constraint:** 3-month runway requires technology that the full team can work confidently with immediately

  ## Options Considered

  ### Option A: Continue with MongoDB
  **Description:** Keep the existing MongoDB prototype and build the production system on top of it.
  **Pros:**
  - No migration required (saves 3 days of migration work)
  - One team member has strong Mongo expertise
  - Flexible schema is convenient for evolving survey question definitions
  - Document model matches survey response payloads naturally
  **Cons:**
  - Only 1 of 6 engineers knows Mongo well — creates a bus factor risk
  - Org hierarchy and cross-document queries are verbose and slow without careful denormalization
  - Aggregation pipeline syntax is less familiar to the team than SQL for reporting use cases
  - No native transaction support for multi-document writes (required for survey submission atomicity)

  ### Option B: Migrate to PostgreSQL
  **Description:** Replace MongoDB with PostgreSQL for all data storage. Use JSONB columns for semi-structured data like survey question definitions and response payloads.
  **Pros:**
  - 4 of 6 engineers proficient — fastest team velocity
  - Strong relational support for org hierarchy, team attribution, and reporting queries
  - JSONB handles semi-structured data with indexing support
  - Full ACID transaction support
  - Rich ORM ecosystem (SQLAlchemy, Django ORM)
  - Single system to operate and monitor
  **Cons:**
  - ~3 days to migrate prototype
  - Schema migrations required as survey question types evolve
  - JSONB slightly less ergonomic than native MongoDB documents for deeply nested survey data

  ### Option C: PostgreSQL + MongoDB (polyglot)
  **Description:** Use PostgreSQL for relational data (users, teams, org hierarchy) and MongoDB for survey definitions and responses.
  **Pros:**
  - Optimized storage for each data type
  - MongoDB's document model is genuinely well-suited for survey response payloads
  **Cons:**
  - Two databases to operate, monitor, and back up
  - Cross-database queries require application-layer joins (complexity, performance risk)
  - Two different expertise requirements on a small team
  - Significantly higher operational overhead for marginal benefit

  ## Decision

  **We chose Option B: PostgreSQL for all data.**

  PostgreSQL wins primarily on team velocity and operational simplicity. With 4 of 6 engineers proficient in SQL and 0 operational experience with production MongoDB, the team's ability to build quickly and confidently outweighs the document-store ergonomics MongoDB offers for survey payloads.

  PostgreSQL's JSONB type addresses the core use case for unstructured storage (survey question definitions, response payloads with variable question types) without requiring a second database. The slightly reduced ergonomics compared to native MongoDB documents are an acceptable trade-off given that query performance at our scale (B2B customers up to 10K employees) will not be meaningfully different. The cross-team reporting queries — a first-class product requirement — are dramatically simpler in SQL than in MongoDB's aggregation pipeline.

  Option C was rejected explicitly: the marginal benefit of native document storage for survey responses does not justify the cost of operating two production databases for a team of 6.

  ## Consequences

  ### Positive
  - Full team can write and review database code confidently from day one
  - Complex reporting queries (response rates by department, trend analysis) written in standard SQL
  - Full ACID transactions simplify survey submission logic
  - Single system to back up, monitor, and scale
  - ORM support (SQLAlchemy) reduces boilerplate and migration tooling is mature (Alembic)

  ### Negative (Accepted Trade-offs)
  - Survey question definitions and response payloads stored in JSONB — slightly less ergonomic than native MongoDB documents; querying deeply nested fields requires PostgreSQL JSONB operators
  - Schema migrations are required when survey question type definitions change (vs. schemaless Mongo). Mitigation: Alembic handles migrations cleanly; we accept this overhead as worthwhile for schema integrity.
  - 3-day migration cost from prototype

  ### Risks
  - If survey response volume grows significantly (>100M responses), PostgreSQL JSONB columns on the responses table may become a query performance bottleneck. Mitigation: monitor query performance at scale; consider partitioning or response archiving at that point.
  - If we acquire customers with complex custom survey types requiring deeply variable response structures, JSONB ergonomics may become a meaningful friction point.

  ## Implementation Notes

  - Survey question definitions are stored in a `questions` JSONB column on the `surveys` table. Index the `type` key: `CREATE INDEX ON surveys ((questions->>'type'))`.
  - Survey response payloads are stored in a `responses.payload` JSONB column. Design the payload schema consistently — use a documented schema (even informally) to maintain consistency across survey types.
  - Use `select_related` / `prefetch_related` (Django) or `joinedload` (SQLAlchemy) for org hierarchy queries — naive ORM queries on trees generate N+1 queries.

  ## Revisiting This Decision

  Revisit if any of the following occur:
  - PostgreSQL query P99 on survey response tables exceeds 500ms after optimization efforts
  - Survey response volume exceeds 100M rows and JSONB querying becomes a maintenance burden
  - A significant portion of the team transitions to engineers with strong MongoDB backgrounds and weak PostgreSQL skills

  ## Related
  - ADR-002: ORM Selection (SQLAlchemy vs. Django ORM)
  - ADR-005: Caching strategy for high-read survey data
tips:
  - "Write the ADR at decision time, not months later. The options you rejected and the reasons you rejected them are just as important as the decision itself — and you'll forget them."
  - "The 'Consequences — Negative' section is the most important for future engineers. Explicitly acknowledging the trade-offs you accepted tells them the decision was deliberate, not accidental."
  - "Include a 'Revisiting This Decision' section — it tells future engineers when they're allowed to change this. Without it, legacy decisions calcify into sacred cows."
  - "An ADR doesn't need to be long. A single-page ADR written the day of the decision is worth more than a comprehensive 10-page document written 6 months later from memory."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - system-design-review
  - tech-stack-evaluation
  - readme-draft
  - runbook-draft
tags:
  - architecture
  - documentation
  - decision-making
  - engineering
  - adr
---
