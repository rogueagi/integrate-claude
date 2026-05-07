---
title: "Write commentary for a KPI dashboard update"
slug: kpi-dashboard-commentary
function: finance
role: fpa
description: "Generate concise, insight-driven commentary for a KPI dashboard that explains metric movements and tells the story behind the numbers."
useCase: "Use this prompt when distributing a KPI dashboard to leadership, the board, or investors. Charts without commentary are just pictures — this prompt produces the written narrative that turns metric movements into actionable insights."
prompt: |
  You are a senior FP&A analyst. Write commentary for the following KPI dashboard update.

  Context:
  - Company: {{company_name}}
  - Dashboard period: {{period}}
  - Audience: {{audience}} (e.g., weekly exec team, monthly board packet, investor update)
  - KPIs and their current values: {{kpi_data}} (paste each KPI with: current value, prior period value, target/budget, trend direction)
  - Business context this period: {{business_context}}

  For each KPI, write a commentary entry with:
  - **KPI name** — current value vs. target/prior period
  - A 1–3 sentence explanation of what's driving the movement (not just restating the number)
  - A "watch" flag if the KPI is trending in a concerning direction
  - A "positive signal" flag if the KPI shows an important favorable development

  After all KPIs, write:

  ## Dashboard Summary (3–5 sentences)
  The overall narrative across the metrics — what story do these KPIs tell together? What's the most important thing the reader should take from this dashboard?

  ## Top Priority for Next Period
  The one metric or trend the team should focus on most in the coming period, and why.

  Tone: analytical and direct. Each commentary entry should add insight beyond what the number itself communicates. No restating the obvious ("revenue increased because we had more revenue").
variables:
  - "{{company_name}}"
  - "{{period}}"
  - "{{audience}}"
  - "{{kpi_data}}"
  - "{{business_context}}"
exampleInput: |
  company_name: Anchor Analytics
  period: April 2024 (Week 2)
  audience: weekly executive team standup
  kpi_data: |
    ARR: $1.82M (prior: $1.75M, target: $1.95M) — up $70K WoW, still behind target
    New Trials Started: 47 (prior: 31, target: 35) — above target
    Trial-to-Paid Conversion: 18% (prior: 22%, target: 20%) — below target and declining
    Churn ARR (MTD): $28K (prior month total: $95K, target: <$80K/month) — on track
    NPS Score: 42 (prior: 38, target: 40) — above target, improving
    Signal Adoption (existing customers): 31% (first data point, target: 25%) — above target
  business_context: Signal launched April 15; 3 new AEs in ramp; one enterprise deal expected to close this week
exampleOutput: |
  **ARR: $1.82M (target: $1.95M, +$70K vs. prior week)**
  The $70K week-over-week gain reflects 2 new customer closes and a small expansion from an existing account. The $130K gap to target remains largely driven by AE ramp — the new hires contributed $35K of the $70K this week, ahead of their individual targets for the week. At this pace, we close approximately half the ARR gap to target by month-end; the other half is contingent on the pending enterprise close.

  ---

  **New Trials: 47 (target: 35) — POSITIVE SIGNAL**
  Trial starts hit a new weekly high, running 34% above target. This appears to be a direct effect of the Signal launch — referral traffic and earned media from the April 15 announcement drove above-normal inbound. The quality of these trials will be visible in conversion metrics over the next 3–4 weeks.

  ---

  **Trial-to-Paid Conversion: 18% (target: 20%, down from 22%) — WATCH**
  Conversion has declined 4 points over the past two weeks despite strong trial volume. This is the week's most important metric to monitor. Two hypotheses: (1) the Signal-driven trial surge may include a higher proportion of lower-intent, top-of-funnel visitors who convert at a lower rate; or (2) something in the trial experience is creating friction. Recommend a cohort analysis comparing Signal-attributed trials vs. prior cohorts before drawing conclusions.

  ---

  **Churn ARR (MTD): $28K (target: <$80K/month)**
  Through week 2, MTD churn is tracking well within target. The 3 accounts that churned in March have been processed; no additional churn flags from the CS team this week.

  ---

  **NPS: 42 (target: 40) — POSITIVE SIGNAL**
  NPS improved 4 points to 42, the highest score in the past 6 months. The Signal launch appears to be positively impacting sentiment — preliminary analysis shows Signal users scoring 8 points higher on NPS than non-users (48 vs. 40). Early signal worth tracking.

  ---

  **Signal Adoption: 31% of eligible customers (target: 25%)**
  First adoption data point post-launch: 31% of eligible Professional and Enterprise customers have enabled Signal, ahead of the 25% target. Notably, the accounts that adopted Signal earliest tend to be the highest-engagement accounts — adoption among the bottom quartile is lower. Retention team should proactively outreach to low-engagement accounts who haven't enabled Signal.

  ---

  ## Dashboard Summary
  Two weeks post-Signal launch, the product release is showing early positive impact: trials are up 34% above target, NPS is at a 6-month high, and Signal adoption is ahead of plan. The conversion decline is the primary concern — it warrants investigation before concluding that the trial quality has shifted. ARR is recovering but remains behind target; the pending enterprise close is the most significant near-term lever. Overall: cautiously positive, with one important metric to watch.

  ## Top Priority for Next Period
  Trial-to-paid conversion. If the decline reflects trial quality (top-of-funnel visitors who aren't buyers), no action is needed — the rate will normalize. If it reflects friction in the trial experience, the fix has material revenue implications. Run the cohort analysis by end of this week.
tips:
  - "Every commentary entry should add information the number itself doesn't convey — the 'why' or 'so what.' 'NPS improved to 42' is a caption; 'Signal users score 8 points higher on NPS than non-users' is an insight."
  - "The WATCH and POSITIVE SIGNAL flags help executives scan the dashboard quickly. Use them sparingly — if everything is a watch flag, nothing is."
  - "The 'Top Priority' section is the most valuable output for weekly operating cadences. It forces you to synthesize across all metrics and name the single most important thing."
  - "For board or investor audiences, compress this commentary into 1–2 sentences per KPI and expand the Dashboard Summary. For internal audiences, depth is more valuable than brevity."
  - "After running this prompt, ask Claude to identify any KPIs that are missing from the dashboard that would add analytical value — the gaps in your dashboard are often as informative as what's there."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - budget-variance-analysis
  - saas-metrics-commentary
  - monthly-finance-commentary
tags:
  - kpi
  - dashboard
  - fpa
  - metrics
  - commentary
---
