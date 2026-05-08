---
title: "Write a narrative summary of a cohort analysis"
slug: cohort-analysis-narrative
function: data
role: data-analyst
description: "Turn a raw cohort retention table into a clear narrative that explains what's happening across cohorts and why it matters."
useCase: "Use this prompt when you have a cohort retention table (CSV, SQL output, or pasted grid) and need to deliver a written analysis to product, growth, or leadership. A retention grid alone rarely changes minds — the narrative on top is what drives action."
prompt: |
  You are a senior data analyst writing the narrative summary of a cohort retention analysis. Your reader is a product or growth lead who can read numbers but does not have time to stare at the grid themselves.

  Inputs:
  - Cohort table: {{cohort_table}} (rows are cohorts by signup month/week, columns are periods since signup, cells are retention %)
  - Cohort definition: {{cohort_definition}} (e.g., "all users who completed signup", "paid trial starters", "activated accounts")
  - Retention metric: {{retention_metric}} (e.g., "weekly active", "made a payment", "logged in")
  - Time range: {{time_range}}
  - Known product or marketing changes during the window: {{product_changes}}
  - Audience for the writeup: {{audience}}

  Write a narrative with these sections:

  ## Headline (2–3 sentences)
  The single most important pattern in the data, stated directly. If retention is improving, by how much and starting when. If it's flat or worsening, say so.

  ## Cohort Behavior
  - Compare early-period retention (period 1–2) across cohorts — is the top of the curve moving?
  - Compare late-period retention (period 6+ or whatever is available) — is the long-tail floor changing?
  - Identify any cohorts that broke from the pattern, positively or negatively, and propose a reason tied to {{product_changes}} when plausible.

  ## What's Likely Driving It
  Two to four hypotheses for the trend, ranked by how well they fit the data. Be explicit about which evidence supports each — and which would falsify it. Do not stretch causation beyond what the cohort grid alone can support.

  ## What This Means
  Translate the pattern into business consequence. If retention is up X points at week 4, what does that imply for LTV, payback, or the next planning cycle? Use rough math, not false precision.

  ## Recommended Next Cuts
  Suggest 2–3 follow-up cuts that would sharpen the analysis — by acquisition channel, plan tier, persona, or onboarding path. Be specific about which cut tests which hypothesis.

  Tone: direct, confident where the data is strong, hedged where it isn't. Do not use the word "interesting." Do not pad. If a section has nothing meaningful to say, write one sentence and move on.
variables:
  - "{{cohort_table}}"
  - "{{cohort_definition}}"
  - "{{retention_metric}}"
  - "{{time_range}}"
  - "{{product_changes}}"
  - "{{audience}}"
exampleInput: |
  cohort_table: |
    Cohort     | M0   | M1   | M2   | M3   | M4   | M5
    2024-01    | 100% | 42%  | 31%  | 26%  | 24%  | 23%
    2024-02    | 100% | 41%  | 30%  | 25%  | 23%  | 22%
    2024-03    | 100% | 44%  | 33%  | 28%  | 26%  | 25%
    2024-04    | 100% | 48%  | 37%  | 31%  | 29%  | -
    2024-05    | 100% | 52%  | 40%  | 33%  | -    | -
    2024-06    | 100% | 53%  | 41%  | -    | -    | -
  cohort_definition: New signups who completed email verification
  retention_metric: Logged in at least once during the calendar month
  time_range: January–June 2024 cohorts
  product_changes: New onboarding checklist shipped Apr 3; in-app tour redesign May 12; pricing page change May 20 (no plan changes)
  audience: VP of Product and the growth PM
exampleOutput: |
  ## Headline
  M1 retention jumped from a 41–44% range in Q1 to 52–53% for the May and June cohorts — roughly a 10-point lift that holds through M2 and M3. The improvement appears to start with the April cohort and accelerates after the May 12 in-app tour redesign.

  ## Cohort Behavior
  Q1 cohorts (Jan–Mar) cluster tightly: M1 retention 41–44%, M3 retention 25–28%. The April cohort breaks the pattern at M1 (48%), and May and June extend the lift to 52% and 53%. Late-period retention is also rising — M3 for the April cohort is 31% versus 25–28% for Q1 cohorts, suggesting the gain is not just an activation bump that decays. Too early to call the M4 floor, but the April M4 of 29% is meaningfully above Q1's 23–24% floor.

  No cohort moves backwards. The lift is monotonic from March onward, which makes a one-time external cause less likely.

  ## What's Likely Driving It
  1. **In-app tour redesign (May 12) — strongest fit.** May and June cohorts each saw 4-point M1 jumps over the prior cohort, lining up with the tour ship date. Falsifier: if April-cohort users who never saw the tour also retained at 48%, the tour is not the driver.
  2. **Onboarding checklist (April 3) — partial fit.** April's 4-point M1 lift over March aligns with the ship date. The checklist plausibly improved activation in a way that compounds with the tour.
  3. **Acquisition mix shift — possible but unverified.** A change in channel mix (e.g., more product-led signups, fewer paid social) could explain durable retention gains without any product change. This needs a channel cut to rule in or out.
  4. **Seasonality — unlikely.** Spring/summer seasonality in this product has historically been small (<2 points), and the lift exceeds that.

  ## What This Means
  If the new M3 retention of ~31% holds through M6 at the same Q1 decay rate, the long-run retention floor for May–June cohorts lands near 27–28%, versus 22–23% for Q1. On a rough LTV basis, that's a 20–25% lift in expected lifetime sessions per signup — material enough to revisit payback assumptions in the FY plan if it sustains for two more cohorts.

  ## Recommended Next Cuts
  - **Acquisition channel cut on May–June cohorts.** Tests the channel-mix hypothesis directly.
  - **Tour-exposed vs. tour-unexposed users within the May cohort.** Cleanest test of the tour hypothesis. Use the natural A/B from the staged rollout if one exists.
  - **Plan tier cut on April–June cohorts.** Tells you whether the lift is concentrated in self-serve or also showing up in trial-to-paid behavior.
tips:
  - "Always lead with the headline number. Readers will skim — make the first paragraph carry the analysis."
  - "Check that cohorts have comparable size before declaring a trend. A 50% retention rate on 80 users is not the same evidence as 50% on 8,000."
  - "When you have a candidate cause and a candidate ship date, state explicitly what evidence would falsify the link. Analysts gain credibility by ruling things out, not just in."
  - "Late-period cohort cells are partial — be careful not to compare a partial M4 to a complete M4. Mark unfinished periods as incomplete."
  - "If you only have 3–4 cohorts post-change, hedge. Cohort patterns can reverse with 2 more cohorts of data."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - retention-analysis-writeup
  - weekly-metrics-commentary
  - exec-dashboard-narrative
tags:
  - cohort-analysis
  - retention
  - product-analytics
  - narrative
  - data-analyst
---
