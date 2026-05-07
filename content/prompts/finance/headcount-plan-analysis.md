---
title: "Analyze a proposed headcount plan for cost and risk"
slug: headcount-plan-analysis
function: finance
role: fpa
description: "Evaluate a proposed headcount plan against financial capacity, business rationale, and risk factors — and generate a structured analysis for leadership review."
useCase: "Use this prompt when reviewing a proposed headcount plan from department heads or preparing a headcount request for leadership approval. Headcount is typically the largest cost driver in a company — this prompt ensures every hire is evaluated against business impact and financial sustainability."
prompt: |
  You are a senior FP&A analyst reviewing a proposed headcount plan. Produce a structured analysis covering cost, rationale, risk, and recommendation.

  Context:
  - Company: {{company_name}}
  - Planning period: {{planning_period}}
  - Current headcount: {{current_headcount}}
  - Current monthly burn: {{current_burn}}
  - Cash on hand: {{cash_balance}}
  - Current runway: {{current_runway}} months
  - Revenue or ARR: {{current_revenue}}
  - Proposed headcount additions: {{proposed_headcount}} (list each role, department, proposed start date, fully-loaded cost)
  - Business rationale provided by department: {{business_rationale}}
  - Revenue or growth target the headcount is expected to support: {{growth_target}}

  Produce:

  ## 1. Plan Summary
  Total proposed headcount additions, total incremental annual cost, and the resulting change to burn rate and runway.

  ## 2. Headcount-to-Revenue Ratio Check
  Calculate: proposed annual cost as a % of current ARR/revenue. Compare to industry benchmarks for the company's stage and business model if applicable. Flag if ratio is out of range.

  ## 3. Role-by-Role Assessment
  For each proposed role:
  - Incremental annual cost (fully loaded)
  - Business rationale assessment: is this a revenue-generating, revenue-enabling, or cost-center role?
  - Time to productivity estimate
  - Recommended action: approve as proposed / approve with conditions / defer / deny
  - Rationale for recommendation (1–2 sentences)

  ## 4. Scenario Analysis
  Two scenarios:
  - Approve all: resulting burn rate, new runway, ratio metrics
  - Approve priority hires only (recommend which): resulting burn rate, runway impact

  ## 5. Risk Assessment
  - What happens to the plan if revenue growth comes in 20% below target?
  - What is the cost of reversing these hiring decisions if business conditions deteriorate?
  - Are there any roles where the cost is justified only under optimistic assumptions?

  ## 6. Recommendation
  Clear recommendation: approve full plan / approve modified plan / defer / deny — with specific conditions or alternatives.
variables:
  - "{{company_name}}"
  - "{{planning_period}}"
  - "{{current_headcount}}"
  - "{{current_burn}}"
  - "{{cash_balance}}"
  - "{{current_runway}}"
  - "{{current_revenue}}"
  - "{{proposed_headcount}}"
  - "{{business_rationale}}"
  - "{{growth_target}}"
exampleInput: |
  company_name: Anchor Analytics
  planning_period: Q2–Q3 2024
  current_headcount: 28
  current_burn: $410K/month
  cash_balance: $4.2M
  current_runway: 10.2 months
  current_revenue: $1.82M ARR
  proposed_headcount: |
    1. Senior AE, Sales — May 1 start, $180K fully loaded
    2. AE, Sales — May 15 start, $145K fully loaded
    3. Marketing Manager, Marketing — June 1 start, $130K fully loaded
    4. Customer Success Manager, CS — June 1 start, $120K fully loaded
    5. Data Engineer, Engineering — July 1 start, $190K fully loaded
  business_rationale: "Sales wants to accelerate pipeline. Marketing needs support for Signal campaign. CS is stretched. Engineering wants to build data infrastructure."
  growth_target: reach $3.2M ARR by year-end (75% growth)
exampleOutput: |
  ## 1. Plan Summary
  5 proposed additions, $765K total incremental annual cost. Monthly burn increases from $410K to $474K (+$64K/month). New runway: 8.9 months (down from 10.2). To reach 12-month runway with this plan, the company would need $750K of additional cash generation or a financing event.

  ## 2. Headcount-to-Revenue Ratio
  Current headcount cost as % of ARR: approximately 270% (SaaS early-stage benchmark: 200–300% is typical at this revenue scale). Proposed plan brings the ratio to approximately 310%. This is approaching the upper range — acceptable if revenue growth accelerates as planned, but a concern if growth lags.

  ## 3. Role-by-Role Assessment

  | Role | Annual Cost | Type | Time to Productivity | Recommendation |
  |---|---|---|---|---|
  | Senior AE | $180K | Revenue-generating | 60–90 days | Approve — extends the AE capacity that's already showing ramp progress |
  | AE | $145K | Revenue-generating | 90 days | Defer to Q3 — adding a third ramping AE while two are still ramping creates management bandwidth risk |
  | Marketing Manager | $130K | Revenue-enabling | 30 days | Approve with condition — only if Signal campaign is funded and a 90-day program plan exists |
  | CSM | $120K | Revenue-enabling / retention | 30 days | Approve — CS is understaffed relative to ARR per CSM ($1.82M / 2 CSMs); attrition risk if not addressed |
  | Data Engineer | $190K | Cost center (internal) | 60+ days | Defer — no revenue-generating rationale provided; internal infrastructure can be addressed post-Series A |

  ## 4. Scenario Analysis

  **Approve all 5:** Burn $474K/month, runway 8.9 months. Adds $765K to annual cost. Requires $3.0M+ ARR by Q4 for the plan to be self-sustaining without additional financing.

  **Approve 3 priority roles (Senior AE, Marketing Manager, CSM):** Burn $454K/month, runway 9.2 months. Annual cost increase $430K. More defensible; aligns hiring with revenue and retention priorities. Recommend this option.

  ## 5. Risk Assessment
  - If revenue comes in 20% below target ($2.6M vs. $3.2M): full plan brings runway to approximately 6.5 months — a dangerous position without a fundraise in progress
  - Severance cost if conditions deteriorate and hires must be reversed: estimated $150–200K for all 5, with the data engineer being the most expensive to reverse
  - The AE (2nd hire) and data engineer are the roles with highest risk — both are justified only under optimistic assumptions

  ## 6. Recommendation
  Approve 3 of 5 roles: Senior AE, Marketing Manager, and CSM. Defer the second AE to Q3 (contingent on Q2 close rate exceeding 70% of plan) and defer the data engineer to post-Series A or until ARR exceeds $3M. This plan reduces incremental burn risk while addressing the most pressing revenue and retention constraints.
tips:
  - "The headcount plan analysis is most powerful when presented alongside a cash runway chart — executives respond viscerally to a chart showing runway declining with each hire."
  - "Always distinguish revenue-generating from cost-center hires. Revenue-generating hires (sales, CS) have a shorter payback period; cost-center hires should face a higher bar for approval in constrained environments."
  - "The 20% revenue shortfall test is a simple but powerful stress test. If the plan is catastrophic at 80% of plan, it needs to be modified."
  - "Defer is better than deny. Giving a department a clear milestone to hit ('we'll approve the second AE when Q2 close rate exceeds 70%') is more motivating than a flat no."
  - "Run this analysis for every headcount cycle, not just annual planning. Mid-year headcount requests are often where companies overextend their runway."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - budget-variance-analysis
  - annual-operating-plan-summary
  - board-finance-update
tags:
  - headcount
  - fpa
  - planning
  - cost-analysis
  - hiring
---
