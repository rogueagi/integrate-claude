---
title: "Generate hypotheses for a funnel dropoff"
slug: funnel-dropoff-investigation
function: data
role: data-analyst
description: "Take a conversion funnel with a notable dropoff and produce a ranked set of hypotheses with a concrete investigation plan for each."
useCase: "Use this prompt when a funnel step is leaking and you need to organize the investigation before pulling more data. Generates a ranked hypothesis list with the specific cut, query, or test that would confirm or rule out each one — the planning artifact you bring into a working session with PM or growth."
prompt: |
  You are a senior data analyst preparing a hypothesis tree for a funnel dropoff investigation. Your goal is to make the next two days of analyst time efficient — every hypothesis must come with the specific cut or test that proves or disproves it.

  Inputs:
  - Funnel: {{funnel_steps}} (ordered list of steps with conversion rates between each)
  - The step with the dropoff: {{problem_step}}
  - Magnitude and recency of the change: {{change_magnitude}} (e.g., "dropoff went from 18% to 31% over the last 3 weeks")
  - What changed in the product, marketing, or environment in that window: {{recent_changes}}
  - Available data dimensions: {{available_dimensions}} (channel, device, geo, plan, persona, etc.)
  - Business context: {{business_context}}

  Produce:

  ## Problem Restatement (3–4 sentences)
  State the dropoff cleanly: which step, how much it moved, when it started, and why it matters in business terms.

  ## Ranked Hypotheses (5–8)
  For each hypothesis include:
  - **Hypothesis** — one sentence, falsifiable
  - **Why it's plausible** — what makes this fit the timing, magnitude, or known changes
  - **How to test it** — the specific cut, segment, query, or experiment that confirms or rules it out, named precisely. Reference {{available_dimensions}}
  - **What would falsify it** — the result that would let you drop this thread
  - **Effort to test** — small / medium / large

  Rank by expected information value: tests that can decide between many hypotheses go higher than tests that only confirm one.

  ## Two-Day Investigation Plan
  Sequence the first 4–6 cuts an analyst should run, in order. The order should reflect what's fastest to confirm and what would most narrow the tree. Note which hypotheses each cut addresses.

  ## What Not to Do Yet
  Call out 1–2 things that are tempting but premature — e.g., shipping a fix, A/B testing, surveying users — and what data should exist before doing them.

  Tone: direct and operational. No throat-clearing. The reader is going to start querying within 30 minutes of reading this.
variables:
  - "{{funnel_steps}}"
  - "{{problem_step}}"
  - "{{change_magnitude}}"
  - "{{recent_changes}}"
  - "{{available_dimensions}}"
  - "{{business_context}}"
exampleInput: |
  funnel_steps: |
    1. Land on pricing page
    2. Click "Start free trial" (CTR: 22%)
    3. Complete signup form (form-completion: 64% → recently 49%)
    4. Verify email (verify rate: 81%)
    5. Reach activation milestone in 7 days (activation: 38%)
  problem_step: Step 2 → Step 3, signup form completion
  change_magnitude: Dropoff worsened from 36% to 51% (15-point hit) over the last 18 days
  recent_changes: |
    - Signup form redesign shipped 22 days ago (added company-size and role fields)
    - New paid social campaign launched 14 days ago targeting SMB
    - GA4 → Snowplow tracking migration shipped 10 days ago
    - No infra outages reported
  available_dimensions: traffic source, device, country, browser, signup form variant (A/B 50/50 still running), referrer
  business_context: B2B SaaS, $99/mo entry plan, signup form is the gate to a 14-day free trial; trial-to-paid conversion is roughly 14%
exampleOutput: |
  ## Problem Restatement
  Signup form completion dropped from 64% to 49% over 18 days — a 15-point absolute decline that translates to roughly 35% fewer trial starts at constant top-of-funnel volume. The dropoff overlaps three potential causes: a form redesign 22 days ago, a paid social launch 14 days ago, and a tracking migration 10 days ago. We need to disentangle these before shipping a fix to the form.

  ## Ranked Hypotheses

  1. **Tracking migration is undercounting completions** (the bug, not the user)
     - Plausible: dropoff timing partially aligns; tracking migrations frequently lose events on conditional fields.
     - Test: reconcile Snowplow signup_completed events to backend `users.created_at` rows by day for the last 30 days. Look for divergence post-migration.
     - Falsifier: Snowplow and backend counts agree within 2%.
     - Effort: small.

  2. **Paid social campaign brought lower-intent traffic that abandons the form**
     - Plausible: campaign launched 14 days ago and timing fits the worst week. SMB targeting can pull in browsers, not buyers.
     - Test: cut form completion by traffic source for the last 30 days. Compare paid-social cohort to organic and direct.
     - Falsifier: paid-social completion is similar to organic.
     - Effort: small.

  3. **New form fields (company size, role) are friction**
     - Plausible: redesign shipped 22 days ago; added fields predictably reduce completion. The 50/50 A/B is the cleanest test we have.
     - Test: pull the existing variant test results — completion rate by variant for the last 14 days, segmented by traffic source to control for the campaign.
     - Falsifier: variants are within 1 point of each other.
     - Effort: small.

  4. **Mobile experience regressed in the redesign**
     - Plausible: form redesigns frequently introduce mobile-specific bugs (keyboard overlap, dropdown selection).
     - Test: cut form completion by device (mobile vs. desktop) pre- and post-redesign.
     - Falsifier: device split is unchanged.
     - Effort: small.

  5. **Geographic shift in traffic mix**
     - Plausible: paid social may have changed country mix; some countries convert lower on B2B SaaS forms (currency, language).
     - Test: cut by country for the last 30 days, weighted by traffic.
     - Falsifier: country mix and per-country rates are stable.
     - Effort: small.

  6. **Browser-specific bug introduced in redesign**
     - Plausible: redesigns frequently break Safari or older Chrome.
     - Test: cut by browser, post-redesign only. Look for an outlier.
     - Falsifier: browser distribution of completion rates is flat.
     - Effort: small.

  7. **Form validation errors rejecting valid inputs**
     - Plausible: new fields (role, company size) often have over-strict validation.
     - Test: log validation errors by field for the last 7 days; compare pre- vs. post-redesign error rates.
     - Falsifier: error rate is flat.
     - Effort: medium (requires instrumentation if not already in place).

  ## Two-Day Investigation Plan
  1. **Reconcile Snowplow to backend signup events by day.** Rules in or out hypothesis 1 entirely. If tracking is broken, every other cut is contaminated. (~1 hour)
  2. **Cut form completion by traffic source for last 30 days.** Addresses hypotheses 2 and 5 simultaneously. (~1 hour)
  3. **Pull A/B variant results for the form, segmented by traffic source.** Cleanest test of hypothesis 3 once 2 is controlled. (~1 hour)
  4. **Cut by device, then by browser, post-redesign only.** Addresses hypotheses 4 and 6. (~1 hour)
  5. **Log validation error rates by field.** Tests hypothesis 7. Skip if A/B variant test already shows the redesign is innocent. (~3 hours, if instrumentation needed)

  Expected end-of-day-2 output: tracking confirmed clean (or fixed), and a clear answer on whether the cause is form redesign, traffic mix, or both.

  ## What Not to Do Yet
  - **Don't roll back the form redesign.** The A/B test is the right artifact to make that decision; rolling back loses the data.
  - **Don't survey abandoners yet.** Survey response on form abandonment is biased and slow. Get the quantitative cut first; survey only the segment that the cut points to.
tips:
  - "Always check tracking before chasing user behavior. A migration in the same window is a strong reason to suspect instrumentation before shipping a product fix."
  - "Rank hypotheses by how much they discriminate, not how plausible they feel. A test that decides between three hypotheses is worth more than one that confirms your favorite."
  - "Name the exact cut. 'Look at traffic sources' is not a plan; 'cut form completion by `utm_source` for the last 30 days, paid_social vs. organic vs. direct' is."
  - "When multiple changes ship in the same window, the A/B test is the most reliable artifact you have. Find it before designing new analysis."
  - "Hypotheses you can rule out in 30 minutes go first. Information value compounds — every ruled-out branch makes the next cut sharper."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - anomaly-investigation-plan
  - ab-test-results-summary
  - cohort-analysis-narrative
tags:
  - funnel-analysis
  - investigation
  - hypotheses
  - conversion
  - data-analyst
---
