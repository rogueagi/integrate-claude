---
title: "Summarize A/B test results with statistical caveats"
slug: ab-test-results-summary
function: data
role: data-analyst
description: "Turn raw A/B test output into a stakeholder-ready writeup with effect size, confidence, segment behavior, and a clear ship/kill/iterate recommendation."
useCase: "Use this prompt when an A/B test has finished or hit its decision point and you need to produce the writeup that goes to PM, growth, or leadership. Forces explicit handling of significance, practical effect, segment heterogeneity, and the most common failure mode — declaring a winner on a noisy or peeked test."
prompt: |
  You are a senior data analyst writing the results readout for an A/B test. Your reader is the PM or growth lead who will decide whether to ship the variant.

  Inputs:
  - Test name and hypothesis: {{test_hypothesis}}
  - Primary metric and direction expected: {{primary_metric}}
  - Secondary / guardrail metrics: {{secondary_metrics}}
  - Variant definitions: {{variants}}
  - Sample sizes per variant: {{sample_sizes}}
  - Results: {{results}} (per-metric, per-variant — point estimate, confidence interval or p-value, lift)
  - Test duration and traffic allocation: {{duration_allocation}}
  - Pre-registered MDE / power assumptions if any: {{mde}}
  - Known segments of interest: {{segments}} (e.g., new vs. returning, mobile vs. desktop, plan tier)
  - Any anomalies during the test: {{anomalies}} (outages, marketing campaigns, holidays, code freezes)

  Write a results summary with these sections:

  ## Recommendation (1 paragraph, top of doc)
  Ship / kill / extend / iterate. Make the call. If the call is "extend," say what specific evidence would change the decision and how long.

  ## Headline Result
  - Variant winner (or null)
  - Primary metric lift with confidence interval
  - One-sentence interpretation: is this a real, meaningful, durable effect, or noise?

  ## Statistical Read
  - Did the test reach pre-registered MDE? If not, what's the achieved MDE?
  - Significance and confidence interval — be specific. Avoid "p < 0.05" if you can give the actual p-value or CI.
  - Note any assumption violations: SRM (sample ratio mismatch), peeking, novelty, seasonality contamination.

  ## Segment Behavior
  Cut the primary metric by the segments in {{segments}}. Flag any segment where the variant moves in the opposite direction or where the effect is concentrated. If the win is driven entirely by one segment, say so plainly.

  ## Guardrail Check
  Walk through each metric in {{secondary_metrics}}. Flag any negative movement on a guardrail even if not significant — e.g., a 1.5% revenue dip with wide CI is worth naming.

  ## Caveats and What Could Be Wrong
  Two to four ways this read could be wrong: novelty effect, learning effect, simultaneous test interference, holiday timing, sample bias. Be explicit.

  ## If We Ship, What to Watch
  If the recommendation is ship, name 2–3 metrics to monitor for the next 4 weeks and the threshold that would prompt a rollback.

  Tone: rigorous, decisive, honest. Do not soften a null result. Do not declare significance you don't have.
variables:
  - "{{test_hypothesis}}"
  - "{{primary_metric}}"
  - "{{secondary_metrics}}"
  - "{{variants}}"
  - "{{sample_sizes}}"
  - "{{results}}"
  - "{{duration_allocation}}"
  - "{{mde}}"
  - "{{segments}}"
  - "{{anomalies}}"
exampleInput: |
  test_hypothesis: Removing the credit-card requirement at trial start will lift trial-to-paid conversion by attracting higher-intent finishers without flooding the funnel with garbage trials.
  primary_metric: Trial-to-paid conversion rate, measured 21 days after trial start
  secondary_metrics: trial starts, activation rate, paid-customer 30-day retention, MRR per signup
  variants: |
    Control: credit card required at trial start (current)
    Variant: no credit card required at trial start
  sample_sizes: Control 18,420 trial starts; Variant 19,140 trial starts
  results: |
    Trial-to-paid conversion: Control 14.2%, Variant 11.8%, lift -16.9% (95% CI: -22.1% to -11.4%, p < 0.001)
    Trial starts (per visitor): Control 6.1%, Variant 9.4%, lift +54% (p < 0.001)
    Activation rate (within trial): Control 41%, Variant 28%, lift -32% (p < 0.001)
    Paid-customer 30-day retention: Control 88%, Variant 86%, lift -2.3% (p = 0.31)
    MRR per signup (visitor → MRR): Control $14.80, Variant $13.10, lift -11.5% (95% CI: -17% to -5%)
  duration_allocation: 28 days, 50/50 traffic split, all signup traffic
  mde: Pre-registered MDE +5% relative on trial-to-paid; powered to 80%
  segments: traffic source (paid vs. organic), persona (SMB vs. mid-market self-id at signup), device
  anomalies: None reported. No marketing campaign overlap. No code freezes.
exampleOutput: |
  ## Recommendation
  **Kill the variant.** Removing the credit card lifted trial starts +54% but cut trial-to-paid conversion by 16.9% and MRR per signup by 11.5% — both well outside MDE and statistically robust. The hypothesis that no-CC would attract higher-intent finishers is falsified: the variant pulls in lower-intent users who never activate. Ship the control. There is a narrower variant of this test worth running (no-CC for paid-traffic only) — see "Iterate" note below.

  ## Headline Result
  - Winner: Control
  - Trial-to-paid conversion: -16.9% relative (95% CI: -22.1% to -11.4%, p < 0.001)
  - This is a real, large, durable effect — the CI excludes any positive outcome and the magnitude is far outside MDE.

  ## Statistical Read
  - Test reached pre-registered MDE on the primary metric (MDE +/-5%; observed -16.9%).
  - p < 0.001 on the primary metric with tight CI; no peeking concerns since the test ran the full 28 days.
  - Sample ratio: 18,420 vs. 19,140 = 49.0% / 51.0% on a 50/50 allocation. This is borderline — a chi-square SRM check should be run, but a 1-point imbalance on this volume is small enough that it does not change the directional read.
  - No seasonality contamination flagged.

  ## Segment Behavior
  - **Traffic source:** the variant performs worst on paid traffic (trial-to-paid -22%) and meaningfully better — though still negative — on organic and direct (-9%). Paid traffic is doing the most damage to the variant.
  - **Persona (SMB vs. mid-market self-id):** mid-market trial-to-paid is roughly flat (-3%, not significant); SMB drives nearly all of the loss (-21%). The no-CC barrier removal disproportionately attracts low-intent SMB browsers.
  - **Device:** mobile vs. desktop is similar in direction; no meaningful split.

  This segment pattern is the most actionable finding: the no-CC change is plausibly net-positive for mid-market organic traffic and clearly net-negative for SMB paid traffic.

  ## Guardrail Check
  - Trial starts +54%: as expected, but this is volume not value.
  - Activation rate -32%: large, significant. Confirms the "low-intent fillers" interpretation.
  - 30-day paid retention -2.3%: not significant (p = 0.31), but directionally negative — worth re-checking at 60 days if the variant ever ships.
  - **MRR per signup -11.5%, CI -17% to -5%:** this is the single most important number after the headline. Volume up, value down — the trade is bad.

  ## Caveats and What Could Be Wrong
  - **Novelty / learning effect — unlikely to flip the call.** Trial-to-paid is measured at 21 days, so most of the conversion window is past the novelty period. A novelty effect would more likely inflate variant performance, not depress it.
  - **CC-required acts as a quality filter that other onboarding steps could replicate.** This test does not show that asking for a CC is the only way to filter — only that removing it without compensating for it loses money.
  - **Mid-market segment finding is on smaller N.** The mid-market no-CC subgroup is ~3,400 users; the flat read is suggestive, not conclusive.
  - **30-day retention CI is wide.** If the variant ships in any segment, watch retention at 60 and 90 days — the directional negative could grow.

  ## If We Ship (We Don't, But If We Did): What to Watch
  Not applicable — recommendation is to kill. However, if a follow-up test ships no-CC to mid-market organic only:
  - Trial-to-paid conversion in that segment, weekly, for 4 weeks. Rollback if it falls more than 5% relative to the segment's pre-test baseline.
  - 60-day paid retention. Rollback if it drops more than 3 points.
  - MRR per signup. Rollback if it does not match or beat control within 4 weeks.

  **Iterate note:** the segment data supports a narrower v2 — no-CC for mid-market organic only. Worth scoping. Do not run no-CC on paid traffic again.
tips:
  - "Lead with the recommendation. Stakeholders will skim — do not bury the call under three pages of stats."
  - "Always check the secondary metrics with the same rigor as the primary. The most expensive ship decisions are the ones where the primary metric won and a guardrail quietly lost."
  - "When the variant lifts volume but cuts unit value, frame the trade explicitly. 'Trial starts +54%, MRR per signup -11.5%' is the headline, not just the conversion lift."
  - "Run an SRM check on every test before drawing conclusions. A 53/47 split on a 50/50 test is a red flag, not a rounding error."
  - "Segment heterogeneity is where the next test lives. A bad overall result with a clean segment win is the most valuable readout you can produce."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - funnel-dropoff-investigation
  - ml-model-experiment-plan
  - exec-dashboard-narrative
tags:
  - ab-testing
  - experimentation
  - statistics
  - causal-analysis
  - data-analyst
---
