---
title: "Write an engineering job description"
slug: job-description-engineering
function: hr
role: recruiting
description: "Generate a well-structured, compelling engineering job description that attracts strong candidates without unnecessarily narrowing the applicant pool."
useCase: "Use this prompt to write a job description for an engineering role that accurately represents the work, the team, and the company — without defaulting to generic requirements that filter out strong candidates. Most engineering JDs are either too vague or too prescriptive; this prompt produces a description that attracts the right people."
prompt: |
  You are a recruiting partner or engineering manager writing a job description for an engineering role.

  Context:
  - Company: {{company_name}}
  - Role title: {{role_title}} (e.g., Senior Software Engineer, Staff Engineer, ML Engineer)
  - Team and product context: {{team_context}} (what team this person joins, what they'll be working on)
  - Seniority level: {{seniority}} (IC1–IC6, or equivalent — junior/mid/senior/staff/principal)
  - Primary technical responsibilities: {{responsibilities}} (the 4–6 most important things this person will own or contribute to)
  - Required technical skills: {{required_skills}} (languages, frameworks, systems — be honest about what's truly required vs. nice to have)
  - Preferred skills: {{preferred_skills}} (genuinely nice to have — not hidden requirements)
  - Team size and structure: {{team_structure}}
  - Company stage and culture notes: {{company_culture}} (what makes working here distinct — be honest)
  - Compensation range: {{comp_range}} (include if known and if policy allows)
  - Remote/hybrid/office: {{work_location}}

  Write a job description with these sections:

  ## Role Overview (3–4 sentences)
  What this person will do and why this role exists. Specific to the actual work, not generic engineering platitudes. The first sentence should tell a reader what they'll be building, not just that they'll "join a dynamic team."

  ## What You'll Work On
  5–7 specific bullet points describing the primary responsibilities. Written in present tense ("You design and build…"), active and specific. No "other duties as assigned."

  ## What We're Looking For
  Split into two sections:
  - Required: The genuine minimum bar for success in this role. Be honest — if someone without a CS degree can do this job, don't list "BS in Computer Science or equivalent" as required.
  - Nice to have: Real preferences, not hidden requirements.

  ## What You'll Find Here (Company/team differentiation)
  3–5 bullets on what makes working here distinct from other engineering jobs. Must be specific and honest — don't list "we move fast and break things" if that's not true.

  ## Compensation and Benefits (if applicable)
  Salary range, equity, and key benefits. Include this — companies that share ranges see higher application quality and save time for everyone.

  Tone: direct and specific. The best engineering candidates are skeptical of generic job descriptions — every sentence should tell them something real about the role, team, or company.
variables:
  - "{{company_name}}"
  - "{{role_title}}"
  - "{{team_context}}"
  - "{{seniority}}"
  - "{{responsibilities}}"
  - "{{required_skills}}"
  - "{{preferred_skills}}"
  - "{{team_structure}}"
  - "{{company_culture}}"
  - "{{comp_range}}"
  - "{{work_location}}"
exampleInput: |
  company_name: Anchor Analytics
  role_title: Senior Software Engineer, Data Platform
  team_context: Joining the 4-person data platform team responsible for the data ingestion, transformation, and serving infrastructure that powers Signal and all customer-facing analytics
  seniority: Senior (IC3 equivalent — 5+ years experience)
  responsibilities: Design and maintain Spark-based data pipeline infrastructure; build and scale the data serving layer that powers Signal's real-time insights; own reliability and performance of the core data platform; collaborate with product engineering to define data contracts; lead technical design for new data ingestion connectors; contribute to on-call rotation (currently low volume — ~2 incidents/month)
  required_skills: Python or Scala (3+ years); experience building and operating distributed data systems (Spark, Flink, or similar); experience with data modeling and schema design; comfort with cloud infrastructure (AWS preferred); ability to lead technical design reviews
  preferred_skills: Experience with Airflow or similar orchestration; familiarity with dbt; Kafka or streaming systems experience; experience at a SaaS company
  team_structure: 4-person data platform team; reports to CTO (Priya Patel); close collaboration with 6-person product engineering team
  company_culture: Pre-Series A startup, 28 people; real ownership — you'll be setting architecture direction, not implementing tickets; strong technical culture led by a CTO with ML background from Palantir; Signal is new and growing fast — the infrastructure decisions you make now will set the foundation for the next 3 years
  comp_range: $165K–$195K base + meaningful equity (0.15–0.25% depending on experience)
  work_location: Remote (US) with quarterly in-person team week
exampleOutput: |
  # Senior Software Engineer, Data Platform
  **Anchor Analytics | Remote (US) | $165K–$195K + equity**

  ## Role Overview
  You'll design and scale the data infrastructure that powers Signal — Anchor's AI-driven analytics layer that surfaces operational insights for SaaS companies. The data platform team owns everything between raw customer data and the product surface: ingestion, transformation, modeling, and serving. This is a foundational role at a pre-Series A company — you'll be setting architecture direction, not working through a backlog of tickets someone else designed.

  ## What You'll Work On
  - Design and operate the Spark-based data pipeline infrastructure that processes event and transactional data from 40+ customer systems
  - Build and scale the data serving layer that powers Signal's real-time and near-real-time insight delivery
  - Define data contracts between the platform team and product engineering — including schema evolution strategy as Signal's data requirements grow
  - Lead the technical design for new data source connectors (CRM, billing, product analytics — we add 2–3 new connectors per quarter)
  - Drive reliability and performance of the core platform: SLAs, monitoring, alerting, and incident response
  - Contribute to the on-call rotation (currently ~2 incidents/month; you'll help keep it that way)
  - Participate in architectural decision-making for the data platform's next 12 months — Signal is growing fast and the infrastructure decisions made now have a long runway

  ## What We're Looking For

  **Required:**
  - 5+ years of software engineering experience, with meaningful time spent on distributed data systems
  - Strong proficiency in Python or Scala — you write production code, not just glue scripts
  - Hands-on experience building and operating systems like Spark, Flink, or equivalent at scale
  - Experience with data modeling and schema design in a production environment
  - Comfortable working with cloud infrastructure (AWS preferred; GCP/Azure experience also valued)
  - Ability to lead technical design reviews and communicate architecture decisions clearly to non-platform engineers

  **Nice to have:**
  - Experience with Airflow or another orchestration framework
  - Familiarity with dbt for transformation layer
  - Streaming systems experience (Kafka, Kinesis)
  - Prior experience at a B2B SaaS company — you'll find the customer data landscape familiar

  We don't require a CS degree. If you've built serious data infrastructure and can demonstrate it, we want to talk.

  ## What You'll Find Here
  - **Real ownership:** The data platform team makes architecture decisions, not just implementation decisions. You'll have direct input on what we build and how we build it.
  - **Strong technical leadership:** Our CTO (Priya Patel) built ML infrastructure at Palantir. Technical bar is high and the conversations are substantive.
  - **A product that needs good infrastructure:** Signal is growing fast — 31% of eligible customers adopted it in 2 weeks. The infrastructure you build will be under real load and real scrutiny from real customers.
  - **Early equity that means something:** We're pre-Series A. The equity offered at this stage has more upside than post-Series A hires, and the strike price reflects where we are today.
  - **Quarterly in-person weeks:** The data platform team meets in person once per quarter — SF or wherever makes sense. The rest is fully remote.

  ## Compensation
  - Base salary: $165,000–$195,000 (depending on experience)
  - Equity: 0.15–0.25% (options, 4-year vest with 1-year cliff)
  - Benefits: full medical/dental/vision, $2,000/year professional development, home office stipend ($500 one-time)
tips:
  - "The first sentence of the role overview is your most important recruiting sentence. Most engineers decide in 10 seconds whether to keep reading — start with what they'll actually be building."
  - "The 'nice to have' section should actually be nice to have. If you genuinely require Kafka experience, it's a requirement. Hiding requirements as preferences wastes candidates' time and the recruiting team's time."
  - "Publishing a salary range increases application quality and reduces time-to-offer. Candidates who self-select based on compensation are better candidates than those who discover misalignment at the offer stage."
  - "Avoid 'we move fast' and 'high growth environment' — every startup says these things and they've lost all meaning. Describe specifically what fast looks like in this role (e.g., 'we ship to production multiple times per day')."
  - "The equity section matters more at early-stage companies than most JDs acknowledge. Be specific about percentage ranges — a range of 0.15–0.25% tells a candidate far more than 'competitive equity.'"
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - job-description-sales
  - structured-interview-questions
  - interview-scorecard
  - offer-letter-draft
tags:
  - recruiting
  - job-description
  - engineering
  - hiring
  - hr
---
