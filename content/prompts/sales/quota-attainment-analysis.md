---
title: "Analyze quota attainment data and surface insights"
slug: quota-attainment-analysis
function: sales
role: sales-ops
description: "Transform raw quota attainment data into a structured analysis with performance insights, root causes, and actionable recommendations."
useCase: "Use this prompt at the end of a quarter or fiscal period to analyze rep-level quota attainment data. Goes beyond the numbers to surface patterns, explain root causes, and recommend specific actions for the next period."
prompt: |
  You are a senior sales operations analyst. Analyze the following quota attainment data and produce a structured performance analysis.

  Context:
  - Time period: {{time_period}}
  - Team: {{team_name}}
  - Number of reps analyzed: {{rep_count}}
  - Overall team quota: {{team_quota}}
  - Overall team attainment: {{team_attainment}}
  - Individual rep data: {{rep_data}} (paste a table or list with rep name, quota, attainment, and any available context like tenure, segment, or role)
  - Known context or factors: {{known_factors}} (e.g., product changes, territory changes, market conditions, headcount changes)

  Produce:

  ## 1. Executive Summary (3–5 sentences)
  Overall performance snapshot, key headline number, and the one-line narrative that explains the quarter.

  ## 2. Attainment Distribution Analysis
  - What percentage of reps hit 100%+ of quota?
  - What percentage hit 75–99%?
  - What percentage hit below 75%?
  - Is this distribution healthy, concerning, or mixed? Why?

  ## 3. Top Performer Analysis
  Who overperformed and what patterns explain it? Look for: tenure, segment, deal type, average deal size, activity levels (if available). Identify 2–3 specific drivers of overperformance.

  ## 4. Underperformance Analysis
  Who underperformed and what are the likely root causes? Distinguish between:
  - Systemic issues (quota setting, territory, market)
  - Skill/execution gaps (specific and coachable)
  - Pipeline health issues (deal quality, sourcing)
  - External factors (headcount gaps, product gaps, competitive losses)

  ## 5. Quota Setting Assessment
  Were quotas set appropriately? Flag if quota distribution appears too high (majority missing), too low (majority hitting easily), or imbalanced across reps/segments.

  ## 6. 3 Recommended Actions for Next Period
  Specific, prioritized actions with clear owners and expected impact. Not generic ("improve coaching") — specific ("restructure the bottom 20% of territory assignments before Q2 quota setting").
variables:
  - "{{time_period}}"
  - "{{team_name}}"
  - "{{rep_count}}"
  - "{{team_quota}}"
  - "{{team_attainment}}"
  - "{{rep_data}}"
  - "{{known_factors}}"
exampleInput: |
  time_period: Q1 2024
  team_name: Mid-Market East
  rep_count: 7
  team_quota: $2.1M
  team_attainment: $1.58M (75.2%)
  rep_data: |
    Rep | Quota | Attainment | Attainment % | Tenure | Notes
    Alicia Chen | $350K | $412K | 118% | 3 years | Strong pipeline coming into Q1
    Marcus Webb | $350K | $298K | 85% | 1 year | New territory (split from Alicia's)
    Priya Nair | $350K | $210K | 60% | 8 months | First full quarter; ramp still in effect
    David Torres | $300K | $178K | 59% | 2 years | Lost 2 deals to competitor in final stage
    Sandra Okonkwo | $300K | $280K | 93% | 18 months | Solid; one deal slipped to Q2
    James Yee | $250K | $126K | 50% | 6 months | Still ramping; had 2 deals pushed by customers
    Tom Haskell | $200K | $74K | 37% | 4 years | Performance concern; PIP started in February
  known_factors: new competitor entered market in January with aggressive pricing; two territories were split in December creating disruption; Q1 historically weakest quarter for this segment
exampleOutput: |
  ## 1. Executive Summary
  The Mid-Market East team closed Q1 at 75.2% of quota ($1.58M of $2.1M), landing below the 80% threshold that typically indicates a healthy quarter. However, this result is partially explained by structural factors: two territory splits in December disrupted pipeline continuity, and a new competitive entrant created late-stage deal friction that wasn't anticipated in quota setting. Excluding reps still in their ramp period (Priya Nair and James Yee), the blended attainment for tenured reps rises to 78.6% — still soft, but more contextually defensible. The quarter's clearest signal: Tom Haskell's 37% attainment is a persistent performance issue, not a situational one.

  ## 2. Attainment Distribution Analysis
  - 100%+ attainment: 1 rep (14% of team) — Alicia Chen
  - 75–99% attainment: 2 reps (29%) — Marcus Webb (85%), Sandra Okonkwo (93%)
  - Below 75% attainment: 4 reps (57%) — Priya Nair (60%), David Torres (59%), James Yee (50%), Tom Haskell (37%)

  Assessment: The distribution is concerning on its face but needs segmentation. Two of the four sub-75% reps (Priya, James) are still ramping — adjusting for ramp expectations, their performance is within normal range. David Torres's miss warrants investigation (2 late-stage losses to a new competitor). Tom Haskell's miss is the most significant concern and is already being managed via PIP.

  ## 3. Top Performer Analysis
  Alicia Chen (118%) is the clear outlier. Her overperformance traces to three factors: (1) she entered Q1 with the strongest qualified pipeline because she held a larger territory before the December split; (2) her deal sizes are consistently above team average, meaning fewer deals needed to hit quota; (3) she's been in the role 3 years and knows the competitive landscape well enough to have handled the new entrant effectively. The lesson: pipeline heading into the quarter is the strongest predictor of attainment.

  ## 4. Underperformance Analysis

  **David Torres (59%):** Two late-stage losses to the new competitor suggest a positioning or competitive handling gap, not a pipeline issue. He had the deals — he's losing them at the close. This is a coachable, specific problem: competitive objection handling and late-stage differentiation. Root cause: skill/execution gap in competitive scenarios.

  **Priya Nair (60%), James Yee (50%):** Both are within ramp-adjusted expectations for their tenure. Priya had a full quarter for the first time; James is 6 months in. Neither warrants significant concern yet — monitor Q2 pipeline generation.

  **Tom Haskell (37%):** At 4 years of tenure with 37% attainment on a $200K quota (the team's lowest), this is a sustained performance issue. The PIP is appropriate. His pipeline coverage was below 2.5x heading into Q1 — insufficient to hit quota even with normal conversion rates.

  ## 5. Quota Setting Assessment
  The team's quotas appear moderately aggressive for Q1, particularly given: (1) the territory disruption from December splits, (2) Q1 seasonal softness in this segment, and (3) the competitive entrant not factored into quotas. Marcus Webb's $350K quota on a newly split territory (previously part of a $350K established territory) was likely too high for his first full quarter in it. Recommend a quota review process that accounts for territory age and competitive dynamics.

  ## 6. Recommended Actions for Next Period

  1. **Run competitive deal coaching for David Torres (and broader team) on the new entrant — by April 15 | Owner: Sales Manager.** Build a battle card specifically for the new competitor and roleplay late-stage scenarios in the next team meeting. Torres had the deals; he needs the language to hold position at close.

  2. **Recalibrate Marcus Webb's Q2 quota to reflect his territory's actual maturity — by April 1 | Owner: Sales Ops.** A newly split territory shouldn't carry the same quota as an established one. Adjust to 80% of the full quota for the first two quarters while pipeline develops.

  3. **Evaluate Tom Haskell's PIP outcomes by May 15 and make a decision — Owner: Sales Manager + HR.** At 37% on the lowest quota on the team with 4 years of tenure, the data is clear. The PIP deadline should trigger a decision, not another extension.
tips:
  - "Separate ramp-period reps from full-quota reps before drawing any conclusions — mixing them distorts both the attainment rate and the root cause analysis."
  - "Ask Claude to run this analysis twice: once with all reps, once excluding ramp-period reps. Compare the narratives."
  - "The most important output is the recommended actions. If your analysis doesn't produce specific, named, dated actions, it's a report, not an analysis."
  - "If you have activity data (calls made, emails sent, meetings booked), paste it in alongside the attainment data — it unlocks root cause analysis that pure attainment numbers can't provide."
  - "Share the executive summary with leadership, the full analysis with sales management. Calibrate the detail level for the audience."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - pipeline-review-agenda
  - board-finance-update
  - kpi-dashboard-commentary
tags:
  - quota
  - attainment
  - sales-ops
  - analytics
  - performance
---
