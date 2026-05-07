---
title: "Draft quarterly OKRs for a team or department"
slug: okr-draft
function: operations
role: ops-management
description: "Generate well-structured Objectives and Key Results for a team or department, grounded in company strategy and measurable at the end of the quarter."
useCase: "Use this prompt at the start of OKR planning season when you have strategic priorities in mind but haven't translated them into crisp OKR language. Works best when you provide the company-level goals and any known team context — produces 3–5 objectives with 2–4 KRs each, ready for team review."
prompt: |
  You are an expert in OKR methodology with experience coaching teams at high-growth companies. Draft a set of quarterly OKRs for the team described below.

  **Team/department:** {{team_name}}
  **Quarter:** {{quarter}}
  **Company-level goals this quarter:** {{company_goals}}
  **Team's primary responsibilities:** {{team_responsibilities}}
  **Key initiatives or projects planned this quarter:** {{planned_initiatives}}
  **Last quarter's biggest challenges or lessons:** {{previous_quarter_lessons}}
  **Any specific metrics the team is already tracking:** {{existing_metrics}}
  **Number of OKRs desired:** {{num_objectives}} (typically 3–5)

  Draft OKRs using these strict guidelines:

  **Objective quality criteria:**
  - Objectives must be qualitative, aspirational, and memorable — they should answer "Where do we want to go?"
  - Each objective should be achievable within one quarter
  - Objectives should be clearly owned by this team (not dependent on another team to define success)
  - Avoid objectives that are just restated tasks (bad: "Complete project X" / good: "Become the most reliable data platform in the company")
  - Each objective should connect clearly to at least one company-level goal

  **Key Result quality criteria:**
  - Key Results must be quantitative and binary-measurable (achieved or not achieved at end of quarter)
  - Each KR must have a specific metric, baseline, and target number
  - Avoid KRs that describe activities or outputs (bad: "Hold 10 customer interviews" / good: "Achieve Net Promoter Score of 42+")
  - Include the measurement method for each KR (how will you know if you hit it?)
  - 2–4 KRs per objective; together they should fully define what achieving the objective looks like
  - At least one KR per objective should be "stretch" (70% confident you can hit it)

  **For each Objective, provide:**
  1. The objective statement
  2. Why this matters this quarter (1–2 sentences connecting to company goals)
  3. 2–4 Key Results, each formatted as:
     - KR: [Metric] from [baseline] to [target] by [date]
     - Measurement: [How this will be measured]
     - Confidence: [High 90%+ / Medium 70% / Stretch 50%]
  4. Key dependencies (what or who does this objective rely on outside the team?)
  5. Risks (what could prevent achieving this objective?)

  After the OKRs, provide:
  - A **scoring guidance** section explaining how to score each KR at quarter-end (0.0–1.0 scale)
  - A **what's NOT included** section listing important work the team will do this quarter that is intentionally excluded from OKRs (to prevent the team from ignoring non-OKR work)
  - A **check-in cadence** recommendation (weekly, bi-weekly check-in questions)
variables:
  - "{{team_name}}"
  - "{{quarter}}"
  - "{{company_goals}}"
  - "{{team_responsibilities}}"
  - "{{planned_initiatives}}"
  - "{{previous_quarter_lessons}}"
  - "{{existing_metrics}}"
  - "{{num_objectives}}"
exampleInput: |
  team_name: Customer Success
  quarter: Q1 2025
  company_goals: Grow ARR by 30%, reduce churn below 5% annually, expand into mid-market segment
  team_responsibilities: Onboarding new customers, driving product adoption, managing renewals, and handling escalations for ~200 accounts
  planned_initiatives: Launch new onboarding program (reducing time-to-value from 45 to 14 days), implement health score tracking in Gainsight, begin QBR program for accounts >$50K ARR
  previous_quarter_lessons: Lost 3 large accounts due to low adoption in first 90 days. Renewal conversations often started too late. Team was reactive rather than proactive.
  existing_metrics: NRR (currently 98%), CSAT (currently 4.1/5), Time-to-first-value (currently 45 days)
  num_objectives: 3
exampleOutput: |
  # Customer Success OKRs — Q1 2025

  ---
  ## Objective 1: Make the first 90 days unmissable for every new customer

  **Why this matters:** Three enterprise account losses last quarter traced directly to poor adoption in the first 90 days. Fixing onboarding is the highest-leverage action CS can take to protect ARR and reduce churn.

  **Key Results:**
  - **KR 1.1:** Reduce median time-to-first-value from 45 days to 14 days for customers onboarded in Q1
    - Measurement: Tracked in Gainsight via "First Value Event" trigger per account
    - Confidence: Medium (70%)
  - **KR 1.2:** Achieve 90-day product adoption score of ≥65 (vs. current avg of 48) for all accounts onboarded in Q4 2024 and Q1 2025
    - Measurement: Gainsight Health Score — Adoption pillar
    - Confidence: Medium (70%)
  - **KR 1.3:** Complete structured 30/60/90-day check-ins for 100% of accounts onboarded in Q1
    - Measurement: Gainsight activity log — zero gaps
    - Confidence: High (90%)

  **Dependencies:** Product team to deliver in-app onboarding improvements by Jan 15; Marketing to provide updated customer education content

  **Risks:** Onboarding program launch delayed if product dependencies slip; CS team capacity if Q1 new business volume exceeds forecast

  ---
  ## Objective 2: Get ahead of renewals before it's too late

  **Why this matters:** Last quarter's renewal conversations started too late and felt reactive. Building a proactive renewal motion directly supports the company's churn target and NRR goal.

  **Key Results:**
  - **KR 2.1:** Initiate renewal conversations for all accounts renewing in Q2 at least 90 days before renewal date (100% coverage by March 15)
    - Measurement: Gainsight renewal playbook — stage gate completion
    - Confidence: High (90%)
  - **KR 2.2:** Achieve Q1 renewal rate of ≥97% by ARR value
    - Measurement: Closed-won renewal opportunities in Salesforce
    - Confidence: Medium (70%)
  - **KR 2.3:** Complete Executive Business Reviews for 80% of accounts with ARR ≥$50K by March 31
    - Measurement: Gainsight EBR activity log
    - Confidence: Stretch (50%)

  **Dependencies:** Sales Ops to configure Gainsight renewal stage automation; Exec team availability for EBR participation

  **Risks:** High renewal volume in March may compress bandwidth; EBR scheduling requires customer exec participation

  ---
  ## Objective 3: Build a customer health system we actually trust

  **Why this matters:** The team currently has no reliable early warning system for at-risk accounts. Building one enables proactive intervention and reduces reactive firefighting.

  **Key Results:**
  - **KR 3.1:** Fully configure and validate Gainsight health scores for 100% of the account base by February 1
    - Measurement: Gainsight dashboard — zero accounts with "Unknown" health status
    - Confidence: High (90%)
  - **KR 3.2:** Identify and execute intervention playbooks for all Red accounts within 14 days of turning Red (zero accounts Red for >14 days without documented action)
    - Measurement: Gainsight — open Red accounts with no activity log entry
    - Confidence: Medium (70%)
  - **KR 3.3:** Improve average CSAT from 4.1 to 4.4 across all touchpoints
    - Measurement: Delighted survey aggregated in Gainsight
    - Confidence: Stretch (50%)

  **Dependencies:** RevOps to complete Gainsight data integrations by Jan 10; IT to connect product usage data feed

  **Risks:** Data quality issues in Salesforce may delay health score reliability

  ---
  ## Scoring Guidance
  Score each KR at quarter-end on a 0.0–1.0 scale:
  - 1.0 = Target fully achieved
  - 0.7 = Strong progress, within 10% of target
  - 0.5 = Meaningful progress, 50–70% of target
  - 0.3 = Started but significant gap
  - 0.0 = Not started or abandoned
  Target average score of 0.7 across all KRs (not 1.0 — if you're always hitting 1.0, your targets are too easy).

  ## What's NOT in These OKRs (But Still Important)
  - Handling support escalations and reactive customer issues
  - Hiring and onboarding a new CSM (if approved)
  - Internal tooling improvements and Gainsight maintenance
  - Upsell and expansion conversations (owned by Account Management)

  ## Check-in Cadence
  Weekly: Review Red account list; confirm renewal pipeline is progressing; flag any KR that is off-track
  Monthly: Score all KRs 0.0–1.0; discuss whether any targets need adjustment; surface blockers to leadership
tips:
  - "OKRs should make you slightly uncomfortable — if you're 100% confident you'll hit all of them, set more ambitious targets."
  - "Limit to 3–5 objectives. More than 5 means you don't have priorities, you have a to-do list."
  - "Key Results fail most often because they measure activity (meetings held, reports sent) instead of outcomes (score achieved, rate improved). Review every KR: could you hit it while the business is getting worse? If yes, rewrite it."
  - "Share the draft with the team before finalizing — OKRs that are handed down rather than co-created get ignored."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - decision-memo
  - cross-functional-brief
  - capacity-planning-analysis
  - annual-priorities-memo
tags:
  - okrs
  - goal-setting
  - planning
  - operations
  - strategy
---
