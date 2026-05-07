---
title: "Build a 3-scenario financial model framework"
slug: scenario-planning-framework
function: finance
role: fpa
description: "Generate a structured 3-scenario planning framework (base/bull/bear) with assumptions, drivers, and financial outputs for executive and board decision-making."
useCase: "Use this prompt when leadership needs to understand the range of financial outcomes under different business conditions — before a board meeting, during a fundraise, or when a major strategic decision is being made. Scenario planning forces disciplined thinking about key drivers and their downstream effects."
prompt: |
  You are a senior FP&A leader building a 3-scenario financial model framework. This framework will be used for board presentations and strategic decision-making.

  Context:
  - Company: {{company_name}}
  - Planning period: {{planning_period}} (e.g., next 12 months, FY2025)
  - Current financial baseline: {{current_baseline}} (ARR, revenue, burn rate, cash, headcount)
  - Key business drivers: {{key_drivers}} (the 3–5 variables that most determine financial outcomes)
  - Strategic decisions or uncertainties being stress-tested: {{key_uncertainties}}
  - Audience for the scenarios: {{audience}} (e.g., board, investors, executive team)

  Build a scenario planning framework with these sections:

  ## 1. Framework Overview
  - The three scenarios: Base, Bull (Upside), Bear (Downside)
  - The core question each scenario is designed to answer
  - The key driver or combination of drivers that differentiates them

  ## 2. Scenario Assumptions Table
  For each of the 3 scenarios, define assumptions for each key driver:
  - Base case: your most likely outcome given current information
  - Bull case: credible upside — not a best-case fantasy, but achievable under favorable conditions
  - Bear case: credible downside — not catastrophic, but the outcome if key things go wrong

  For each driver: state the assumption in concrete, measurable terms (not "revenue grows well" but "new ARR grows 25% vs. 15% in base").

  ## 3. Financial Outputs by Scenario
  For each scenario, project:
  - Revenue / ARR (end of period)
  - Gross margin
  - Operating expenses (total and by major category)
  - EBITDA / operating loss
  - Cash runway (given current balance)
  - Key SaaS metrics if applicable (NRR, churn, CAC payback)

  ## 4. Scenario Narratives (one paragraph each)
  Write a brief narrative for each scenario: what would have to happen in the business and market for this scenario to materialize?

  ## 5. Decision Framework
  Based on the scenarios: what specific decisions or actions should be taken now, regardless of which scenario materializes? What decisions are conditional (take action if X, but wait if Y)?

  ## 6. Monitoring Indicators
  What are the 3–5 early indicators that will tell you which scenario is materializing? What are the trigger points for action?
variables:
  - "{{company_name}}"
  - "{{planning_period}}"
  - "{{current_baseline}}"
  - "{{key_drivers}}"
  - "{{key_uncertainties}}"
  - "{{audience}}"
exampleInput: |
  company_name: Anchor Analytics
  planning_period: FY2025 (12 months)
  current_baseline: $1.75M ARR, 74% gross margin, $410K monthly burn, $4.2M cash, 28 employees
  key_drivers: new ARR growth rate, net revenue retention (NRR), sales team productivity (quota attainment), Signal feature adoption driving upsell
  key_uncertainties: whether the 3 new AEs will ramp to full productivity; whether Signal drives meaningful upsell; whether enterprise close rates improve from Q1 levels
  audience: board of directors and Series A investors
exampleOutput: |
  ## 1. Framework Overview
  The three scenarios test the range of outcomes across two core uncertainties: (1) new ARR generation from the expanded sales team, and (2) Signal-driven expansion revenue. The base case assumes partial AE ramp and modest Signal upsell. The bull case assumes full AE productivity and Signal becoming a meaningful upsell driver. The bear case assumes continued AE underperformance and Signal adoption remaining limited.

  ## 2. Scenario Assumptions Table

  | Driver | Bear | Base | Bull |
  |---|---|---|---|
  | New ARR growth (vs. Q1 run rate) | -10% (ramp continues to underperform) | +20% (ramp materializes in Q3) | +45% (ramp + enterprise recovery) |
  | NRR | 95% (churn exceeds expansion) | 102% (modest net expansion) | 110% (Signal drives meaningful upsell) |
  | AE quota attainment (avg) | 55% | 75% | 90% |
  | Signal upsell ARR (FY2025) | $50K (limited adoption) | $200K (moderate) | $500K (strong adoption) |
  | Gross margin | 72% | 74% | 76% |
  | Headcount additions | 2 (hold hiring) | 5 (plan) | 8 (accelerate) |

  ## 3. Financial Outputs by Scenario

  | Metric | Bear | Base | Bull |
  |---|---|---|---|
  | ARR at year-end | $2.4M | $3.2M | $4.5M |
  | ARR growth | 37% | 83% | 157% |
  | Gross margin | 72% | 74% | 76% |
  | Monthly burn | $380K | $420K | $510K |
  | Cash at year-end | $0.2M | $2.0M | $3.8M* |
  | Runway (months remaining) | 0.5 | 4.8 | 7.5 |
  | NRR | 95% | 102% | 110% |

  *Bull case assumes $2M bridge or new investment in H2 to fund accelerated growth

  ## 4. Scenario Narratives

  **Base (Most Likely):** AEs hit ~75% of quota by Q3, generating new ARR that gets Anchor to $3.2M by year-end. Signal drives $200K in upsell from existing customers — meaningful but not transformative. Enterprise close rates improve to 60–65% of plan. The company executes at plan with modest variance; the fundraise discussion begins in Q4 with 4–5 months of runway remaining.

  **Bull (Credible Upside):** AEs ramp faster than expected, enterprise close rates recover, and Signal becomes a genuine expansion driver — with 40%+ of eligible customers enabling it and demonstrating measurable ROI. Anchor exits FY2025 at $4.5M ARR with strong NRR, making a Series A raise straightforward at a favorable valuation. This scenario requires strong execution across sales, product, and CS simultaneously.

  **Bear (Credible Downside):** AE productivity remains at Q1 levels through H2 due to enterprise market softness, Signal adoption is limited to early adopters, and churn ticks up. Anchor reaches $2.4M ARR — meaningful growth but well below plan. Cash hits critically low levels by Q4, requiring an emergency bridge or restructuring. This scenario requires immediate action in Q2 to reduce burn if leading indicators point toward it.

  ## 5. Decision Framework

  Decisions to take regardless of scenario:
  - Establish AE ramp milestones and a decision point in June: if attainment is below 60%, delay any further headcount additions
  - Invest in Signal onboarding regardless of scenario — adoption is the key variable in both base and bull

  Conditional decisions:
  - If June pipeline indicates bear trajectory: reduce discretionary spend by $80K/month immediately and begin fundraise process
  - If June pipeline indicates bull trajectory: begin Series A conversations in August, model accelerated headcount additions

  ## 6. Monitoring Indicators
  1. **AE quota attainment (monthly):** Target 60% by May, 70% by June, 80% by August — trigger review if below 50% in May
  2. **Signal adoption rate:** % of eligible customers enabling Signal — target 25% by end of Q2
  3. **Enterprise pipeline (weekly):** Watch close rate on enterprise opportunities; below 50% triggers scenario review
  4. **Net revenue retention:** Monthly — if NRR falls below 98%, churn intervention required
  5. **Cash burn rate:** If monthly burn exceeds $450K for two consecutive months, trigger expense review
tips:
  - "The bear case must be credible, not catastrophic. A bear case so extreme it 'couldn't happen' is useless for planning. A bear case that could realistically occur if 2–3 key things go wrong is what forces productive conversation."
  - "Anchor the scenarios to 2–3 key drivers, not 20. Too many variables produce complexity without insight. The best scenario frameworks are simple enough that every executive can explain them without the model."
  - "The 'decision regardless of scenario' section is the most valuable output. These are the actions that have positive expected value across all outcomes — they should be executed immediately."
  - "Update scenarios monthly against actual results. A static scenario model becomes fiction within 60 days — a rolling update against real data is the discipline that makes it useful."
  - "Present all three scenarios to the board, not just base. Boards who only see base case have no context for risk. Boards who see all three scenarios can have a real strategic conversation."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - budget-variance-analysis
  - board-finance-update
  - cash-flow-forecast-narrative
tags:
  - scenario-planning
  - fpa
  - financial-modeling
  - board
  - strategy
---
