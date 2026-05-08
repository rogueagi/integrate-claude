---
title: "Draft company-level OKRs for the quarter"
slug: okr-framework-company
function: executive
role: strategy
description: "Generate a tight set of company OKRs from your strategic priorities, with objectives that are inspirational and key results that are actually measurable."
useCase: "Use this at the start of every quarter when you have a sense of the company's priorities but need to translate them into a small number of objectives the whole company can rally around. Most OKR drafts are too many, too vague, or too feature-shaped. This prompt forces them into the right form."
prompt: |
  You are a former Google product leader who has authored OKRs at scale. Draft company-level OKRs for {{company_name}} for {{quarter}}.

  Inputs:
  - Company and stage: {{company_name}}, {{stage}}
  - Annual strategic priorities: {{annual_priorities}}
  - Last quarter's results (what hit, what missed): {{last_quarter_results}}
  - Top constraint or risk to plan against: {{top_constraint}}
  - Initiatives the team is already committed to this quarter: {{committed_initiatives}}
  - Number of objectives desired: {{objective_count}} (recommend 3, max 5)

  Produce OKRs that follow these rules:

  **Objectives:**
  - Inspirational and qualitative — describe a state of the world you want to be true at the end of the quarter
  - Memorable enough that a director can recite them without looking
  - Not feature-shaped (no "Launch X")

  **Key Results:**
  - 3 KRs per objective
  - Numeric and bounded ("from X to Y by Z")
  - A mix of leading and lagging measures across the objective
  - "Done" must be unambiguous on the last day of the quarter
  - Hard enough that hitting all of them feels like a real achievement (50-70% confidence)

  Output Format:

  ## Quarter Theme (One Line)
  A single sentence stating what this quarter is about. Helps the company hold the OKRs together in their head.

  ## Objective 1: [Name]
  *Why this matters:* [1 sentence]
  - **KR1:** [from X to Y by end of {{quarter}}]
  - **KR2:** [from X to Y by end of {{quarter}}]
  - **KR3:** [from X to Y by end of {{quarter}}]
  *Owner:* [single executive]

  Repeat for each objective.

  ## What These OKRs Are Deliberately Not Measuring
  Three things the OKRs are not tracking — areas where the team should not be optimizing this quarter. This forces explicit prioritization.

  ## Watch-Items
  Two or three things to keep an eye on but not formally OKR. Useful to capture without diluting focus.

  Constraints:
  - No more than {{objective_count}} objectives. Discipline is the point.
  - Each KR must be a number, not an adjective.
  - If you can't write a clean numeric KR for an objective, the objective is probably too soft to keep.
variables:
  - "{{company_name}}"
  - "{{quarter}}"
  - "{{stage}}"
  - "{{annual_priorities}}"
  - "{{last_quarter_results}}"
  - "{{top_constraint}}"
  - "{{committed_initiatives}}"
  - "{{objective_count}}"
exampleInput: |
  company_name: Vantage Systems
  quarter: Q2 2027
  stage: Series B SaaS, $24M ARR, 180 employees
  annual_priorities: own mid-market healthcare; ship the AI compliance module; reach default-alive (breakeven by Q4)
  last_quarter_results: hit ARR ($28.5M of $28M target); missed AI module beta milestone (slipped 3 weeks); NRR strong at 126%
  top_constraint: engineering capacity is flat YoY; AI module slip cannot recur
  committed_initiatives: AI compliance module GA, healthcare go-to-market expansion, gross margin program (target 75%)
  objective_count: 3
exampleOutput: |
  ## Q2 2027 Theme
  Make Vantage the obvious choice for healthcare buyers, and ship the module that proves it.

  ## Objective 1: Become the default analytics platform for mid-market healthcare
  *Why this matters:* Healthcare is our highest-conviction wedge against better-funded competitors. We win or lose this category in the next two quarters.
  - **KR1:** Healthcare share of new ARR from 35% to 55% by end of Q2 2027
  - **KR2:** Active healthcare logos from 41 to 70 by end of Q2 2027
  - **KR3:** Healthcare-vertical pipeline coverage from 2.4x to 3.5x of plan
  *Owner:* CRO

  ## Objective 2: Ship the AI compliance module and put it in the hands of paying customers
  *Why this matters:* The roadmap slip last quarter cost us deals. GA on time, used by real customers, is what closes the credibility gap.
  - **KR1:** AI compliance module GA from internal beta to released by April 30
  - **KR2:** Paid customers using the module in production from 0 to 18 by end of Q2 2027
  - **KR3:** Win rate on deals where the module is required from baseline 38% to 60%
  *Owner:* CPO

  ## Objective 3: Hold the line on cash and gross margin
  *Why this matters:* Default-alive by Q4 requires that this quarter is the one where the trajectory bends. Easier now than later.
  - **KR1:** Gross margin from 71% to 74% by end of Q2 2027
  - **KR2:** Net new headcount no greater than +6 (versus rolling baseline) for the quarter
  - **KR3:** Operating cash burn from -$2.1M/month to -$1.4M/month by end of Q2 2027
  *Owner:* CFO

  ## What These OKRs Are Deliberately Not Measuring
  - Total ARR growth — already covered by the healthcare objective; tracking it separately would dilute focus
  - SMB or self-serve activity — closed last year, no resurrection this quarter
  - International expansion — out of scope for 2027

  ## Watch-Items
  - NRR (currently 126%) — should not regress; review monthly but not OKR
  - Engineering attrition — flat headcount means we cannot afford regret losses
  - Competitor pricing moves on enterprise renewals
tips:
  - "Three objectives is almost always right. Five means the team is afraid to choose."
  - "Run the 'recite without looking' test on each objective. If you cannot, simplify."
  - "If a KR is qualitative ('improve customer satisfaction'), kill it or replace it with a number you actually trust."
  - "Pair this with a kickoff narrative — OKRs without context become a checklist."
  - "At week 6, review against the OKRs honestly. If you are 80% to a KR with 6 weeks left, it was too easy. If you are 20%, ask what changed."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - annual-strategic-plan-outline
  - all-hands-narrative
  - exec-memo-leadership
  - capital-allocation-memo
tags:
  - okr
  - planning
  - quarterly
  - strategy
  - leadership
---
