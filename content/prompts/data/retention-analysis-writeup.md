---
title: "Write up a retention analysis with cohort-level insight"
slug: retention-analysis-writeup
function: data
role: data-analyst
description: "Produce a structured retention analysis writeup that goes beyond the cohort table — segments by behavior, isolates drivers, and recommends concrete retention bets."
useCase: "Use this prompt when you have a retention pull and need to deliver a memo to product or growth leadership. Pushes past 'retention curve flattens at week 6' into the segmentation and product hypotheses that drive retention work."
prompt: |
  You are a senior product analyst writing a retention analysis memo for a product or growth leadership audience.

  Inputs:
  - Retention metric definition: {{retention_definition}} (what counts as "retained" — e.g., "logged in week N", "took core action X in week N", "still subscribed")
  - Cohort grid: {{cohort_grid}} (cohorts × periods)
  - Behavioral segmentation if available: {{behavioral_segments}} (e.g., users who activated feature X in week 1; users who invited a teammate; users on plan tier Y)
  - Persona / acquisition cuts available: {{persona_cuts}}
  - Time range: {{time_range}}
  - Business context: {{business_context}} (stage, what retention drives — LTV, NRR, virality)
  - Audience: {{audience}}

  Write the memo with these sections:

  ## Headline (3–4 sentences)
  Where the retention curve is now, where it has moved, and the single most important question this analysis answers — or fails to answer.

  ## The Retention Curve
  Describe the shape: early dropoff (week 0–2), mid (week 2–8), and long-tail floor (week 8+). For each, the rate and what it tells you about the product. Note where the curve flattens — the long-tail floor is the load-bearing number for LTV.

  ## The Behavioral Splits That Matter
  Compare retention curves for users who do vs. do not take a candidate "magic moment" action in week 1. Use the behavioral segments in {{behavioral_segments}}. For each split:
  - Lift in week-4 and week-12 retention from doing the action
  - Population size of the segment that does it
  - Whether the lift survives controlling for plan or persona
  - Whether the action is plausibly causal or just a correlate of intent

  Be honest about correlation vs. causation. The user who invites a teammate is also a more committed user; the invite may not be the lever.

  ## Persona / Acquisition Differences
  Retention by persona, plan, or acquisition channel. Identify the segment that retains best (and at what scale) and the segment that retains worst. Quantify the gap.

  ## Long-Tail Floor and LTV Implications
  Estimate where the long-tail retention floor sits. Translate to a rough LTV implication: if floor is X% and ARPU is Y, lifetime value lands roughly in Z range. Avoid false precision — give a band.

  ## Where to Bet
  Three retention bets, ranked. For each:
  - The lever (e.g., make X happen for more new users in week 1)
  - The expected size of the prize (move floor from X% to Y%)
  - The risk it's a correlation, not a cause, and how to test before committing

  Tone: rigorous, plainspoken, willing to say "we don't know yet." The memo's job is to focus the next quarter of retention work, not to declare victory.
variables:
  - "{{retention_definition}}"
  - "{{cohort_grid}}"
  - "{{behavioral_segments}}"
  - "{{persona_cuts}}"
  - "{{time_range}}"
  - "{{business_context}}"
  - "{{audience}}"
exampleInput: |
  retention_definition: User logged in and performed at least one "core action" (created or edited a doc) in the calendar week
  cohort_grid: |
    Cohort   | W1   | W2   | W4   | W8   | W12  | W24
    2023-Q3  | 100% | 56%  | 38%  | 28%  | 24%  | 20%
    2023-Q4  | 100% | 58%  | 40%  | 30%  | 26%  | 22%
    2024-Q1  | 100% | 61%  | 43%  | 32%  | 28%  | -
  behavioral_segments: |
    Invited at least 1 teammate in week 1: 22% of users
    Created 3+ docs in week 1: 31% of users
    Used the AI assist feature at least once: 18% of users
    Connected an integration (Slack/Drive/etc.) in week 1: 14% of users
  persona_cuts: |
    Self-serve solo: 41% of signups
    Self-serve team (2+ seats): 36%
    Sales-assisted team (paid): 23%
    By acquisition: organic 38%, paid 27%, referral 22%, partner 13%
  time_range: Q3 2023 – Q1 2024 cohorts; observed through May 2024
  business_context: B2B productivity SaaS, freemium with paid team plan, $20/user/month, current ARR $18M, retention drives both expansion and virality
  audience: VP of Product and Growth PM
exampleOutput: |
  ## Headline
  Retention has improved meaningfully across cohorts: week-4 retention rose from 38% (Q3'23) to 43% (Q1'24), and the week-24 floor moved from 20% to a projected 23–24%. The analysis points to three behavioral correlates — teammate invite, integration connection, and AI assist usage — but only the first two appear plausibly causal after controlling for plan. The unanswered question: is the long-tail floor lift driven by product changes or by an acquisition mix shift toward team plans?

  ## The Retention Curve
  - Week 0→2: drops to 56–61%. This is the activation cliff. The 5-point improvement across cohorts is the largest gain anywhere in the curve and likely reflects 2024 onboarding work.
  - Week 2→8: glides from ~58% to ~30%. Standard productivity-SaaS shape; the slope hasn't changed materially.
  - Week 8→24: flattens from ~30% to ~22%. The long-tail floor is the load-bearing LTV number, and the 2-point lift here is more economically meaningful than it looks.

  Curve flattens around week 8–10. Users still active at week 8 are largely long-term users.

  ## The Behavioral Splits That Matter
  - **Invited a teammate in week 1 (22% of users):** week-4 retention 71% (vs. 36% for non-inviters); week-12 retention 52% (vs. 22%). 30+ point lift sustained through week 24. Population is large enough to matter. The lift partially survives controlling for plan: even within the self-serve solo segment, inviters retain at ~58% week-4 vs. 33% non-inviters. Plausibly causal — the act of inviting creates social commitment and content others depend on. Strong candidate.
  - **Created 3+ docs in week 1 (31%):** week-4 retention 64% vs. 30%. Almost certainly a correlate of intent rather than a lever — users who were going to retain anyway create more docs. Suggestive but should not be the bet.
  - **Connected an integration (14%):** week-4 retention 68% vs. 39%. Population is small but lift is large and survives plan controls. Plausibly causal — integrations create daily-driver behavior. Worth a serious shipping bet.
  - **Used AI assist at least once (18%):** week-4 retention 51% vs. 41%. 10-point lift; smaller than the others and may largely be intent. Not the highest-leverage bet from this cut.

  ## Persona / Acquisition Differences
  - **Plan:** sales-assisted team plans retain at 78% W4 / 58% W12. Self-serve team at 52% / 31%. Self-serve solo at 33% / 18%. Plan tier is the largest single retention discriminator in the data.
  - **Channel:** referral cohort retains best at W12 (39%); paid worst (21%). Organic and partner sit between (28% and 32%). Channel-level retention gaps are stable across the three cohorts.
  - The Q1 cohort has a 4-point higher share of self-serve team plans than Q3 — which mechanically lifts blended retention. This is part of the apparent improvement.

  ## Long-Tail Floor and LTV Implications
  Long-tail floor lands in the 22–24% range based on the W24 cell and the slope of W12→W24 in earlier cohorts. At $20/user/month and the observed seat-expansion rate, lifetime gross revenue per signup is roughly in the $80–$130 range — a band, not a point. The Q1 lift, if durable, moves the band ~$10 higher. Worth noting that LTV is dominated by team plans; solo retention lifts have small LTV impact.

  ## Where to Bet
  1. **Drive teammate invite in week 1.** The lift is large, the population is meaningful, and the correlation is more plausibly causal than the others. Test: a randomized prompt that boosts invite rate among solo users; measure W4 retention lift in the prompted group. Risk: invitees may be lower-quality and dilute the effect; measure both halves.
  2. **Drive integration connection in week 1.** Smaller population but enormous per-user lift. Test: a streamlined integration setup in onboarding for the most-used tools (Slack, Drive). Risk: harder to instrument as a clean experiment because of integration availability differences.
  3. **Move solo signups toward team plans through targeted prompts at the moment of collaboration intent.** Plan tier is the biggest retention discriminator in the data; team-plan conversion is more leverage than within-plan retention work for the solo cohort.

  Open question to settle before committing: how much of the Q1 retention lift is mix shift toward team plans vs. real product improvement on the underlying curve. A like-for-like cut by plan tier across cohorts would resolve this in a day.
tips:
  - "Always cut the curve into early / mid / long-tail. The early cliff is an activation problem; the long-tail floor is an LTV story. Different teams own them."
  - "Behavioral splits are useful only after controlling for at least one lurking variable (usually plan or intent proxy). Otherwise you'll mistake correlation for a lever."
  - "When the company changes acquisition mix between cohorts, blended retention movement can be entirely a mix story. Always do one like-for-like cut to rule this out."
  - "Translate floor changes into LTV bands, not point estimates. A 2-point floor lift sounds small until you do the math; a point estimate sounds more confident than the data supports."
  - "Be honest about which behavioral correlates are plausibly causal. The cleanest way to mislead a product team is to label intent proxies as levers."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - cohort-analysis-narrative
  - churn-prediction-framing
  - exec-dashboard-narrative
tags:
  - retention
  - cohort-analysis
  - product-analytics
  - ltv
  - data-analyst
---
