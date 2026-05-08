---
title: "Generate exec narrative on top of a dashboard"
slug: exec-dashboard-narrative
function: data
role: data-analyst
description: "Produce a one-page exec narrative that sits on top of a dashboard data dump — the story leadership reads instead of squinting at the dashboard."
useCase: "Use this prompt before a leadership meeting or board prep when you have a dashboard or KPI table and need the written interpretation that goes in the doc. Forces an honest read of trajectory, not a recital of metrics."
prompt: |
  You are a senior data analyst writing the executive narrative on top of a KPI dashboard. Your reader is a CEO, COO, or VP who will spend 90 seconds on this page before the meeting.

  Inputs:
  - KPI table or dashboard data dump: {{dashboard_data}} (metric, current period, prior period, target/plan, year-ago)
  - Reporting period: {{period}}
  - Business context: {{business_context}} (stage, recent strategy bets, market conditions)
  - Top concerns or open questions on the exec's mind: {{exec_concerns}}
  - Page length target: {{length}} (default: 1 page, ~400 words)

  Write the narrative with these sections:

  ## State of the Business (3–5 sentences)
  The honest one-paragraph read. Is the business accelerating, flat, or decelerating against plan? Pick a direction and defend it. Avoid corporate filler.

  ## What's Working
  Two to three things genuinely going right. For each: the metric, the magnitude, and why this matters strategically — not just numerically.

  ## What's Not Working
  Two to three things genuinely off track. For each: the metric, the gap to plan, the most likely root cause, and whether it requires intervention now or is on a known fix.

  ## What's Quietly Changing
  One or two trends that are not yet headline-worthy but matter for the next two quarters. The "watch this" section that distinguishes good analysis from rote reporting.

  ## Decisions or Asks
  If the exec needs to make a decision, fund something, unblock something, or sponsor a change — name it. Three or fewer asks, ranked.

  Rules:
  - Use numbers. Specific numbers, not "significantly" or "meaningfully" without quantification.
  - One direct claim per sentence.
  - Do not list every metric — pick what's load-bearing for the period.
  - Frame against plan or trajectory, not just last period. Execs care about whether the year still happens.
  - No more than ~{{length}}. If pressed, cut.

  Tone: calm, candid, slightly more direct than is comfortable. Execs trust analysts who tell them what's wrong.
variables:
  - "{{dashboard_data}}"
  - "{{period}}"
  - "{{business_context}}"
  - "{{exec_concerns}}"
  - "{{length}}"
exampleInput: |
  dashboard_data: |
    Metric              | Q1'24    | Q4'23    | Plan Q1  | Q1'23
    ARR (ending)        | $24.6M   | $22.8M   | $25.5M   | $17.4M
    Net new ARR         | $1.8M    | $2.1M    | $2.7M    | $1.6M
    NRR (TTM)           | 109%     | 112%     | 115%     | 117%
    Gross logo churn    | 6.1%     | 4.8%     | <5.0%    | 4.4%
    Pipeline coverage   | 2.4x     | 3.1x     | >3.0x    | 3.3x
    Magic number        | 0.71     | 0.84     | >0.80    | 0.92
    Headcount           | 184      | 172      | 188      | 142
    Cash runway (mo)    | 19       | 22       | 20       | 28
    Gross margin        | 73%      | 74%      | 74%      | 71%
  period: Q1 2024
  business_context: $24M ARR vertical SaaS, raised Series B 14 months ago, GTM rebuild last 6 months, two new enterprise AEs hired in Q1, competitive market with one well-funded entrant
  exec_concerns: CEO is asking whether we hit plan for FY24 and whether the GTM rebuild is paying off
  length: 1 page (400 words)
exampleOutput: |
  ## State of the Business
  Q1 was a miss against plan, and it is not a one-quarter miss — three of the five GTM efficiency metrics have decelerated for two quarters running. ARR grew $1.8M (vs. $2.7M plan), NRR fell to 109% (from 112%), and pipeline coverage dropped to 2.4x heading into Q2. The GTM rebuild has not yet produced; on current trajectory, FY24 plan is not reachable without either a step-change in Q2 sales productivity or a downward replan. Cash and margin remain healthy, so the issue is growth efficiency, not balance sheet.

  ## What's Working
  - **Gross margin held at 73%** despite product investment in two new modules. Unit economics on the platform side are intact; the problem is acquisition and retention, not delivery cost.
  - **Headcount discipline:** ending Q1 at 184 against plan of 188. The growth team did not over-hire ahead of demand, which preserves runway optionality.

  ## What's Not Working
  - **Pipeline coverage at 2.4x** vs. >3.0x plan is the single most important metric in this readout. With the current win rate and sales cycle, Q2 is not bookable to plan from today's pipeline. This is where the GTM rebuild needs to show results in 30 days, not 60.
  - **NRR slipped to 109%** (from 112% Q4, 117% Q1'23). Logo churn 6.1% vs. <5.0% plan is the proximate driver; mid-market churn has run higher than expected for two quarters. Needs a CS-led retrospective on the cohort that churned and a structural answer, not another QBR cadence change.
  - **Magic number 0.71** vs. >0.80 plan: the new AE hires and rebuild costs are loaded into Q1 without yielding bookings yet. Defensible if Q2 reverses; concerning if not.

  ## What's Quietly Changing
  Net new ARR mix: expansion fell to 38% of gross new ARR (from 47% in Q4). Two quarters of declining expansion mix is a leading indicator of NRR pressure that will show up in Q3 if not addressed. Worth a focused look at expansion motion in the top 50 accounts.

  ## Decisions or Asks
  1. **Replan FY24 vs. push for catch-up.** Recommend a formal replan exercise in May after Q2 mid-quarter pipeline read. Pretending the plan is intact loses time.
  2. **Sponsor a churn retrospective on the mid-market segment** within 2 weeks. CS team needs exec air cover to pull engineering and product into root cause.
  3. **Hold on additional GTM hiring** until Q2 mid-quarter pipeline shows recovery. Magic number does not improve by adding more reps to an underperforming motion.
tips:
  - "Pick a direction in the State of the Business paragraph. 'Mixed' is not a read; 'decelerating against plan' is."
  - "Frame everything against plan or trajectory, not just QoQ. Execs care whether the year still happens, not whether this quarter beat last quarter."
  - "Quantify everything. 'Significantly below plan' is filler; '$1.8M against $2.7M plan' is information."
  - "The 'quietly changing' section is where you earn your keep. Anyone can read the dashboard; only the analyst flags the leading indicator that does not have a headline yet."
  - "Limit asks to three. An exec narrative with seven recommendations gets zero of them done."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - weekly-metrics-commentary
  - data-storytelling-deck-outline
  - cohort-analysis-narrative
tags:
  - executive-reporting
  - kpi
  - narrative
  - board-prep
  - data-analyst
---
