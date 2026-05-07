---
title: "Analyze budget vs. actuals and narrate key variances"
slug: budget-variance-analysis
function: finance
role: fpa
description: "Transform raw budget vs. actuals data into a structured variance analysis with clear explanations of drivers, implications, and recommended actions."
useCase: "Use this prompt at the end of each month or quarter to turn your budget vs. actuals data into a narrative analysis that leadership and the board can read without staring at a spreadsheet. Good variance analysis explains the why, not just the what."
prompt: |
  You are a senior FP&A analyst. Analyze the following budget vs. actuals data and produce a structured variance analysis narrative.

  Context:
  - Time period: {{time_period}}
  - Company/entity: {{company_name}}
  - Business context this period: {{business_context}} (e.g., product launch, headcount changes, seasonality, market shifts)
  - Budget vs. actuals data: {{variance_data}} (paste table or bullet list with line items, budget, actuals, variance $ and %)

  Produce:

  ## 1. Executive Summary (3–5 sentences)
  Overall performance vs. budget — favorable or unfavorable, by how much, and the one or two factors that explain most of the variance. Written for an executive who won't read the detail.

  ## 2. Revenue Analysis
  - Total revenue variance ($ and %)
  - Key drivers: which product lines, segments, or regions drove the variance
  - Whether the variance is structural (trend) or one-time (pull-forward, timing)
  - Implication for full-year outlook

  ## 3. Expense Analysis
  - Total expense variance ($ and %)
  - Department or category breakdown: where are we over/under budget and why?
  - Distinguish between: investment decisions (intentional spend), execution misses (spend that didn't deliver), and timing differences (this month vs. next)
  - Any surprises worth flagging

  ## 4. Bottom Line
  - Net income / EBITDA variance vs. budget
  - Is the miss/beat at the revenue or expense line (or both)?
  - One-line assessment: is performance on track, recovering, or deteriorating?

  ## 5. Forward Look
  - Based on this period's variances, is the full-year budget still achievable?
  - 2–3 specific risks to the remainder of the year
  - 1–2 opportunities to offset negative variances

  ## 6. Recommended Actions (3–5)
  Specific, prioritized actions with suggested owners. Not generic ("review expenses") — specific ("Finance to work with Marketing to reconcile Q1 campaign spend against approved budget by April 15").
variables:
  - "{{time_period}}"
  - "{{company_name}}"
  - "{{business_context}}"
  - "{{variance_data}}"
exampleInput: |
  time_period: March 2024 (Q1 close)
  company_name: Anchor Analytics
  business_context: Q1 included the launch of Signal feature; hired 3 new sales reps in February; enterprise segment underperformed
  variance_data: |
    Revenue:
    - Total ARR: Budget $2.1M, Actual $1.75M, Variance -$350K (-16.7%)
    - New ARR: Budget $420K, Actual $290K, Variance -$130K (-31%)
    - Expansion ARR: Budget $180K, Actual $165K, Variance -$15K (-8.3%)
    - Churn: Budget -$80K, Actual -$95K, Variance -$15K (-18.75%)

    Expenses:
    - Headcount (S&M): Budget $580K, Actual $640K, Variance -$60K (-10.3%)
    - Headcount (R&D): Budget $420K, Actual $415K, Variance +$5K (+1.2%)
    - Marketing programs: Budget $120K, Actual $98K, Variance +$22K (+18.3%)
    - Cloud infrastructure: Budget $85K, Actual $91K, Variance -$6K (-7.1%)
    - G&A: Budget $140K, Actual $138K, Variance +$2K (+1.4%)
exampleOutput: |
  ## 1. Executive Summary
  Anchor closed Q1 at $1.75M in ARR, $350K (16.7%) below the $2.1M budget. The miss is concentrated in new ARR, which came in 31% below plan — reflecting slower-than-expected ramp time for three new sales reps hired in February and softer enterprise conversion rates in Q1. Expenses ran $37K above budget, driven by sales headcount that is now in place and ramping. The Signal feature launched on schedule; early leading indicators are positive, but the revenue impact is not yet visible in Q1 actuals.

  ## 2. Revenue Analysis
  Total ARR was $350K unfavorable to budget. New ARR ($290K vs. $420K budget) drove the bulk of the miss. Two contributing factors: (1) three new AEs hired in February are still in ramp — they contributed approximately $40K of new ARR vs. a budgeted $120K combined, reflecting standard 90-day ramp curves; (2) enterprise segment closed at 45% of Q1 new ARR budget, with two deals slipping to Q2. Expansion ARR was $15K short, suggesting customer growth is slightly below plan but not a primary concern. Churn of $95K exceeded budget by $15K — warranting monitoring but representing only 3 accounts.

  Structural vs. timing: the AE ramp variance is structural (corrects in Q2–Q3 as reps come online); the enterprise deal slippage is timing — both deals have confirmed close dates in Q2.

  Full-year implication: the new ARR miss is partially recoverable in Q2 as reps ramp. However, if enterprise conversion doesn't improve, full-year ARR is at risk of landing $800K–$1.2M below the $9M plan.

  ## 3. Expense Analysis
  Total expenses were $37K unfavorable to budget. Sales & Marketing headcount was $60K over budget, reflecting the new AE hires arriving 3 weeks ahead of plan. This was an investment decision, not a miss. Marketing programs were $22K favorable — Q1 campaign spend came in under budget due to one deferred program (pushed to Q2). Infrastructure was $6K over budget due to Signal launch traffic — expected and acceptable. R&D and G&A were approximately on plan.

  ## 4. Bottom Line
  Net performance was $387K unfavorable to budget at the revenue-minus-expense level. The miss is predominantly at the revenue line (new ARR). Expense overruns are a secondary factor and are largely explained by planned investment (new hires). Assessment: performance is behind plan but recoverable — the path back to plan requires two enterprise deals to close in Q2 and AE ramp to proceed on schedule.

  ## 5. Forward Look
  Full-year budget is achievable but requires: (1) Q2 enterprise close rate to improve materially, (2) three new AEs to ramp to productivity by Q3, and (3) Signal to begin contributing to upsell expansion in Q2–Q3.

  Risks:
  - If enterprise close rate remains at 45% of plan through Q2, full-year ARR misses by 12–15%
  - Churn trend (+18.75% vs. budget) — monitor closely; if it reaches 3+ accounts per month, intervention needed
  - New AE productivity assumptions may be optimistic if market softness persists

  Opportunities:
  - Signal upsell pipeline from existing customers was not in the original budget — $150K–$200K opportunity in H2 if adoption accelerates
  - Marketing program deferral creates $22K of available Q2 spend that could be redeployed against enterprise pipeline

  ## 6. Recommended Actions
  1. VP Sales to provide updated enterprise pipeline commit by April 15 — with deal-by-deal close probability for the 2 slipped Q1 deals.
  2. Finance to model a revised full-year scenario assuming 45% enterprise close rate — present to leadership by April 20 before board meeting.
  3. CSM team to conduct proactive outreach to the 3 churned accounts — identify whether churn is preventable in future cohorts.
  4. Sales ops to establish AE ramp tracking dashboard — weekly visibility on new hire productivity vs. plan starting April 1.
  5. Marketing to confirm Q2 campaign deployment plan for the $22K deferred spend.
tips:
  - "The structural vs. timing distinction in section 2 is the most important analytical judgment in variance analysis. A timing miss corrects itself; a structural miss requires a plan change."
  - "Don't just describe variances — explain them. 'Revenue was $350K below budget' is information. 'Revenue was $350K below budget because new AEs are in ramp and two enterprise deals slipped' is insight."
  - "The 'Recommended Actions' section must have named owners. 'Finance should review' is not an action — it's a suggestion. Assign to a specific role."
  - "Run this prompt monthly, not quarterly. Monthly variance analysis produces early warning signals that quarterly analysis misses."
  - "After running this prompt, ask Claude to draft the variance section of the board deck narrative using the executive summary and forward look sections as source material."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - monthly-finance-commentary
  - board-finance-update
  - kpi-dashboard-commentary
tags:
  - variance-analysis
  - budget
  - fpa
  - financial-planning
---
