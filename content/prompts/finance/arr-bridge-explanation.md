---
title: "Build an ARR bridge explanation for a board meeting"
slug: arr-bridge-explanation
function: finance
role: fpa
description: "Generate a clear, board-ready narrative for an ARR bridge that walks beginning ARR to ending ARR through new, expansion, contraction, and churn."
useCase: "Use this prompt when preparing the ARR slide or memo for a board meeting and you need words that match the chart. Boards consistently misread ARR bridges when the numbers and the narrative do not match. This prompt produces a tight, honest explanation that aligns the visual with the story."
prompt: |
  You are the head of FP&A at {{company_name}} preparing the ARR bridge narrative for an upcoming board meeting.

  Inputs:
  - Reporting period: {{period}}
  - Beginning ARR: {{beginning_arr}}
  - New ARR (new logos): {{new_arr}}
  - Expansion ARR (existing customers, upsell or seat expansion): {{expansion_arr}}
  - Contraction ARR (existing customers, downgrades or seat reductions): {{contraction_arr}}
  - Churn ARR (logos lost): {{churn_arr}}
  - Ending ARR: {{ending_arr}}
  - One-time adjustments or reclassifications affecting the bridge: {{adjustments}}
  - Plan or guidance numbers for the period: {{plan_numbers}}
  - Notable deals or events that drove the period: {{notable_events}}

  Produce the narrative with these sections:

  ## ARR Bridge Walk (200 to 300 words)
  Walk the bridge from beginning ARR to ending ARR in plain language. Each component should get one or two sentences. State each number, then say what is interesting about it. Reconcile to the ending ARR explicitly so the board can match the narrative to the slide.

  ## Vs. Plan
  Compare each component (new, expansion, contraction, churn) to plan or guidance. Quantify the variance and assign a primary cause to each material variance.

  ## Quality of the Quarter
  Assess the quality of the ARR result independent of the headline number. Specifically: was net new ARR driven by repeatable motions or one or two large deals? Did expansion outpace contraction and churn combined? Is the new logo mix concentrated in one segment?

  ## Forward Read
  In 75 to 100 words, give the board a forward read. What does this period suggest about next period's bridge? Be honest about pipeline coverage, ramp dynamics, and known risks or tailwinds.

  Tone: factual, specific, and unvarnished. Boards penalize narratives that do not match the numbers and the ones that overstate the quality of a result. Match the precision of the chart.
variables:
  - "{{company_name}}"
  - "{{period}}"
  - "{{beginning_arr}}"
  - "{{new_arr}}"
  - "{{expansion_arr}}"
  - "{{contraction_arr}}"
  - "{{churn_arr}}"
  - "{{ending_arr}}"
  - "{{adjustments}}"
  - "{{plan_numbers}}"
  - "{{notable_events}}"
exampleInput: |
  company_name: Cobalt Procurement
  period: Q1 2026
  beginning_arr: $14.2M
  new_arr: $1.85M
  expansion_arr: $1.10M
  contraction_arr: $0.22M
  churn_arr: $0.48M
  ending_arr: $16.45M
  adjustments: $0 (clean quarter)
  plan_numbers: New ARR plan $2.10M; Expansion ARR plan $0.90M; Contraction plan $0.25M; Churn plan $0.55M; Ending ARR plan $16.40M
  notable_events: |
    - Two enterprise deals slipped from Q1 to Q2 (combined $420K ACV)
    - One platform deal closed early (Hadley Industrials, $310K ACV — was a Q2 commit)
    - Expansion overperformed driven by 11 customers adopting Cobalt Insights add-on (launched October 2025)
    - One churn was a strategic loss (Marlow Group, $180K ARR, acquired by competitor)
exampleOutput: |
  ## ARR Bridge Walk
  Cobalt entered Q1 at $14.20M ARR and exited at $16.45M, net new ARR of $2.25M. New logo ARR contributed $1.85M, the largest single component of the bridge. New ARR ran below plan due to two enterprise deals slipping into Q2, partially offset by Hadley Industrials closing one quarter early. Expansion ARR was the standout at $1.10M, $200K above plan, driven by 11 existing customers adopting the Cobalt Insights add-on launched in October. Contraction was modest at $220K, $30K better than plan as no large account reduced seats this quarter. Churn ARR was $480K against a $550K plan, with the meaningful event being the Marlow Group loss ($180K) driven by acquisition rather than dissatisfaction. Ending ARR of $16.45M came in $50K above the $16.40M plan, despite the new ARR shortfall, because expansion outperformed and churn underran.

  ## Vs. Plan
  - New ARR: $1.85M vs. $2.10M plan, $250K under. Cause: two deal slips ($420K combined ACV) partially offset by Hadley Industrials early close ($310K).
  - Expansion ARR: $1.10M vs. $0.90M plan, $200K over. Cause: faster than projected adoption of Cobalt Insights.
  - Contraction ARR: $220K vs. $250K plan, $30K better. No specific driver — clean quarter.
  - Churn ARR: $480K vs. $550K plan, $70K better. The Marlow loss was anticipated; smaller projected churns did not materialize.

  ## Quality of the Quarter
  The Q1 result is higher quality than the headline new ARR shortfall suggests. Net new ARR of $2.25M was nearly on plan and was driven by a healthier mix: expansion was 33 percent of gross new ARR, up from 22 percent in Q4 and 15 percent a year ago. The Cobalt Insights add-on is converting into a real expansion revenue line rather than an experiment. New logo concentration is reasonable — Hadley is the largest at $310K but no single deal exceeds 20 percent of the new ARR figure. Net new ARR was not propped up by one heroic deal.

  ## Forward Read
  Q2 carries forward the two slipped deals ($420K combined) plus a normal pipeline. If both close as expected, Q2 new ARR should run above plan. The Insights expansion line is now a planning input — we are reforecasting Q2 expansion to $1.20M on Insights momentum and seat expansion at three accounts already in motion. The forward risk is concentration of net new ARR in expansion: if Insights adoption plateaus, the model becomes more dependent on new logo, where the pipeline is healthy but ramp-loaded.
tips:
  - "Always reconcile the narrative to ending ARR explicitly. A bridge narrative that does not arrive at the same ending number as the chart is the most common board-prep mistake."
  - "Identify whether net new ARR was driven by one or two large deals. Boards distinguish between repeatable motions and lucky quarters."
  - "When new ARR misses plan, lead with the cause not the apology. 'Two deals slipped to Q2' is a fact; 'we underperformed' is a confession that obscures the diagnosis."
  - "Expansion crossing into double-digit percent of gross new ARR is a structural milestone worth flagging — it signals a different stage of company maturity."
  - "If there are one-time adjustments or reclassifications, surface them in the walk. Hidden adjustments that surface in board Q&A damage credibility more than the original miss."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - saas-metrics-commentary
  - board-finance-update
  - monthly-finance-commentary
  - cohort-revenue-narrative
tags:
  - finance
  - arr
  - board-prep
  - fpa
  - reporting
---
