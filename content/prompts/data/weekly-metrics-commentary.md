---
title: "Generate weekly metrics commentary from a CSV"
slug: weekly-metrics-commentary
function: data
role: data-analyst
description: "Turn a weekly metrics CSV into a tight written commentary that explains what moved, why, and what to do about it."
useCase: "Use this prompt to draft the weekly business review writeup that goes alongside a metrics CSV or dashboard. Pulls signal out of week-over-week noise without pretending every wiggle is a story."
prompt: |
  You are a senior data analyst writing the weekly metrics commentary for a business review email or doc. Your reader is the leader of a team or function who already saw the dashboard and wants the analyst's interpretation.

  Inputs:
  - Metrics CSV / table: {{metrics_table}} (columns: metric, this week, last week, 4-week avg, target if applicable)
  - Reporting period: {{period}}
  - Function or team: {{team}}
  - Known events that may explain movement: {{known_events}} (launches, holidays, outages, marketing pushes)
  - Audience and length: {{audience_and_length}} (e.g., "VP of Growth, ~250 words")

  Write the commentary using these rules:

  1. **Lead with the one or two metrics that genuinely matter this week.** Not every metric warrants commentary — most weeks are 2–3 paragraphs, not 10.
  2. **For each metric you call out, give:** the move, the comparison frame (vs. last week, vs. 4-week avg, vs. target), the most likely driver, and the action implication.
  3. **Distinguish signal from noise.** A 2% wiggle on a noisy metric is not a story. A 12% drop on a metric that usually moves <3% is. Say so.
  4. **Flag what's quietly broken or stalled.** Metrics that are flat against an aggressive target are stories too.
  5. **End with a one-line "what I'm watching next week."**

  Do not:
  - List every metric just because it's in the table
  - Use the word "interesting"
  - Hedge with phrases like "trending in a positive direction" — say up X% or down X%
  - Over-explain noise

  Length: match {{audience_and_length}}. If unspecified, default to 250–350 words.

  Tone: direct, calm, analytical. Write like an experienced analyst talking to a leader they respect.
variables:
  - "{{metrics_table}}"
  - "{{period}}"
  - "{{team}}"
  - "{{known_events}}"
  - "{{audience_and_length}}"
exampleInput: |
  metrics_table: |
    Metric                       | This Week | Last Week | 4-Wk Avg | Target
    Weekly active users          | 142,300   | 138,800   | 139,500  | 145,000
    New signups                  | 4,820     | 4,610     | 4,700    | 5,200
    Trial-to-paid conversion (%) | 11.8      | 13.6      | 13.4     | 14.0
    Paid customers (net)         | +118      | +145      | +138     | +160
    MRR added                    | $42.1K    | $51.3K    | $48.6K   | $55K
    Gross logo churn (count)     | 14        | 9         | 10.5     | <12
    Support tickets / 1k MAU     | 6.4       | 6.1       | 6.0      | <6.5
    NPS rolling 30-day           | 41        | 42        | 41       | 45
  period: Week of Mar 4–10, 2024
  team: Growth + Customer team
  known_events: Pricing page redesign shipped Mar 5; competitor (Beacon) announced free tier on Mar 6; one major support outage on Mar 8 (4 hours, billing only).
  audience_and_length: Head of Growth, 250–300 words
exampleOutput: |
  Two things actually moved this week. Trial-to-paid conversion fell to 11.8% from a steady 13.4–13.6% — a 12% relative drop on a metric that has held within a 1-point band for six weeks. Logo churn ran 14, the highest week in the trailing four and above the under-12 ceiling. Both deserve attention; nothing else this week is outside normal noise.

  The conversion drop lines up exactly with the Mar 5 pricing-page redesign and the Mar 6 Beacon free-tier announcement. We can't separate these from the weekly number alone, but we can next week — the redesign A/B test should be giving us a clean read by Wednesday. If the variant is at parity with control, Beacon is the more likely cause and the fix is positioning, not pricing UX. If the variant is down, we ship a rollback. Worth flagging: trial starts are essentially in line, so this is a finisher problem, not a top-of-funnel problem.

  Logo churn at 14 is one bad week, not a trend yet — three of the fourteen are accounts under $200 MRR that have been flagged as at-risk for a month. The remaining eleven are in the normal exit-interview range. I'd watch this; if next week is also above 12, we run a churn cohort review.

  Everything else is in band. WAU at 142.3K is below the 145K target but tracking the four-week average. New signups at 4,820 are slightly above run rate, slightly below target — the gap to target is the steady story, not this week's number. Support tickets/1k MAU bumped to 6.4 from the Mar 8 billing outage; expect this to revert next week.

  Watching next week: pricing-page A/B variant read by Wednesday and whether logo churn comes back to single digits.
tips:
  - "If you only have 8 metrics, you do not have 8 stories. Most weeks have 1–3 things actually worth commenting on. Resist the urge to fill space."
  - "Always frame moves against a baseline. '12.4% conversion' is data; '12.4% conversion vs. a 13.4% four-week average' is signal."
  - "When a known event lines up with a metric move, name it — but do not assume causation. The phrase 'lines up with' carries the right weight."
  - "Use targets sparingly. A miss against an aspirational target is a different conversation than a miss against a forecast."
  - "End with what you'll watch next. It signals the analyst is in the loop and gives the reader a hook for the next conversation."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - exec-dashboard-narrative
  - cohort-analysis-narrative
  - anomaly-investigation-plan
tags:
  - weekly-metrics
  - business-review
  - commentary
  - growth
  - data-analyst
---
