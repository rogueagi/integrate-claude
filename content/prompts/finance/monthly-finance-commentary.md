---
title: "Write the narrative for a monthly finance package"
slug: monthly-finance-commentary
function: finance
role: fpa
description: "Generate a clear, executive-ready narrative commentary for a monthly financial package that turns numbers into insight."
useCase: "Use this prompt to write the narrative section of a monthly finance package for leadership or the board. Most financial packages lead with tables and charts — this prompt produces the written commentary that makes those numbers tell a coherent story."
prompt: |
  You are a senior FP&A leader writing the narrative section of a monthly finance package. Your audience is the executive team and, in some cases, the board of directors.

  Context:
  - Company: {{company_name}}
  - Month and year: {{period}}
  - Key financial results: {{financial_results}} (paste key metrics: revenue, expenses, EBITDA, cash, etc.)
  - Business context: {{business_context}} (what happened this month — product launches, team changes, market events, strategic decisions)
  - Prior month performance: {{prior_month}} (for comparison)
  - Full-year budget performance YTD: {{ytd_performance}}
  - Any notable one-time items: {{one_time_items}}

  Write a narrative commentary with these sections:

  ## Month Headline (1 sentence)
  The one-sentence summary of the month. Should be specific, not generic ("March was a challenging month" is not a headline).

  ## Financial Performance Summary
  3–5 paragraphs covering:
  - Revenue: how did we perform vs. prior month, vs. budget, and what drove the result
  - Expenses: major movements, notable investments or savings, any surprises
  - Profitability / cash: where did we land on EBITDA or operating income, and what does the cash position tell us

  ## Business Context
  2–3 sentences connecting financial performance to business events. What happened operationally that explains the financial results?

  ## Year-to-Date Assessment
  Are we tracking to the full-year plan? What are the key factors that will determine whether we hit the annual goal?

  ## Month-Ahead Outlook
  2–3 sentences on what to watch next month — specific leading indicators or decisions that will shape the next period's results.

  Tone: clear, direct, and analytical. Written for executives who read quickly and need to understand the most important things first. No jargon without context. No tables — this is a prose narrative.
variables:
  - "{{company_name}}"
  - "{{period}}"
  - "{{financial_results}}"
  - "{{business_context}}"
  - "{{prior_month}}"
  - "{{ytd_performance}}"
  - "{{one_time_items}}"
exampleInput: |
  company_name: Anchor Analytics
  period: March 2024
  financial_results: |
    Revenue: $1.75M ARR (vs. $2.1M budget, -16.7%)
    Gross margin: 74% (vs. 76% budget)
    Operating expenses: $1.38M (vs. $1.34M budget, +3%)
    EBITDA: -$410K (vs. -$200K budget)
    Cash: $4.2M (vs. $5.1M prior month)
  business_context: Signal feature launched April 15; 3 new AEs hired February; two enterprise deals slipped to Q2; board meeting scheduled April 25
  prior_month: $1.81M ARR; $4.1M OpEx (February was higher due to one-time recruiting costs)
  ytd_performance: Q1 ARR $1.75M vs. $2.1M budget; YTD EBITDA loss -$980K vs. budget -$600K
  one_time_items: $45K one-time recruiting fees for new AE hires (February); Signal launch engineering crunch cost an estimated $30K in overtime
exampleOutput: |
  ## Month Headline
  March closed at $1.75M ARR — 16.7% below budget — with the miss concentrated in new ARR as three new AEs remain in ramp and two enterprise deals moved to Q2.

  ## Financial Performance Summary

  **Revenue:** ARR ended March at $1.75M against a $2.1M budget, a $350K shortfall driven by slower new ARR generation ($290K vs. $420K budgeted). The primary factors were: three AEs hired in February who remain in their ramp period and collectively contributed $40K of new ARR against a $120K combined plan; and two enterprise opportunities that were expected to close in Q1 and have since committed to Q2 timelines. Expansion ARR was modestly below plan at $165K vs. $180K budgeted. Churn of $95K ran $15K above budget, representing three accounts — all identified and in active retention outreach.

  **Expenses:** Total operating expenses came in at $1.38M, approximately $40K above the $1.34M budget. The overrun is primarily attributable to accelerated sales headcount — new AE hires arrived three weeks ahead of the original plan — and to approximately $30K of engineering overtime associated with the Signal feature launch. Both items were known at the time of incurrence and do not represent unexpected spend. G&A and R&D were within $5K of budget.

  **Profitability and cash:** March EBITDA landed at -$410K against a budgeted -$200K, with the $210K unfavorable variance driven approximately 70% by the revenue shortfall and 30% by expense timing. Cash decreased from $4.1M to $4.2M — note this is an increase, reflecting a favorable timing difference on collections that is expected to partially reverse in April. Excluding this timing item, underlying cash consumption was consistent with budget assumptions.

  ## Business Context
  The Signal feature launched on April 15 (after month close) and represents the most significant product event in Q1. While Signal's revenue impact will appear in Q2 metrics, the engineering and marketing investments that supported the launch are reflected in March expenses. Two enterprise deals that slipped out of March have confirmed Q2 close targets; the sales team considers both high-probability, and we are tracking them closely ahead of the April 25 board meeting.

  ## Year-to-Date Assessment
  Through Q1, ARR is tracking $350K (16.7%) below the annual budget's Q1 milestone, and EBITDA is $380K unfavorable YTD. The full-year plan remains achievable but requires: AE ramp productivity to materialize in Q2–Q3, the two slipped enterprise deals to close as committed, and Signal to begin generating upsell expansion revenue in H2. If enterprise close rates remain at current levels through Q2, a revised full-year scenario will be presented to the board.

  ## Month-Ahead Outlook
  April will be the first test of the Signal launch reception — monitoring new trial signups and feature adoption among existing customers is the leading indicator to watch. The two committed enterprise closes and the AE ramp trajectory will determine whether Q2 begins to close the YTD gap. The April 25 board meeting will include a revised full-year scenario if Q2 pipeline data warrants it.
tips:
  - "The month headline is the hardest sentence to write well. It should tell the whole story in one line — the result, the driver, and the implication. Revise it last, after the full narrative is written."
  - "Separate the structural from the one-time. Executives need to know whether this month's result tells them something about the business or about timing."
  - "Avoid phrases like 'we continue to monitor' and 'we are focused on' — these are content-free. Replace with a specific metric or milestone being tracked."
  - "The month-ahead outlook is where the best FP&A leaders earn their seat at the table. It signals that you're forward-looking, not just backward-reporting."
  - "After writing the narrative, read it aloud. If any sentence takes more than one breath, it's too long."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - budget-variance-analysis
  - board-finance-update
  - saas-metrics-commentary
tags:
  - finance
  - monthly-close
  - fpa
  - commentary
  - executive-reporting
---
