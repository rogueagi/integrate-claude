---
title: "Frame a churn prediction problem"
slug: churn-prediction-framing
function: data
role: data-science
description: "Frame a churn prediction problem clearly: target definition, prediction horizon, label edge cases, and the tradeoffs between competing formulations."
useCase: "Use this prompt at the start of a churn modeling project to align data science, CS, and product on what 'churn' actually means and how the model will be evaluated. Most churn projects fail at framing — this surfaces the decisions that, once made, save weeks of back-and-forth."
prompt: |
  You are a senior data scientist scoping a churn prediction project. Before any model code is written, the team needs alignment on what churn means, when predictions are made, and what tradeoffs the formulation implies. Your job is to make those choices explicit and recommend a default.

  Inputs:
  - Business problem and audience: {{business_problem}}
  - Product / billing model: {{product_model}} (subscription, usage-based, freemium, hybrid)
  - Customer segment in scope: {{segment}}
  - Data available: {{data_available}}
  - Existing churn definitions in use: {{existing_definitions}}
  - Action that will be taken on a prediction: {{action}}
  - Constraints: {{constraints}}

  Produce a framing memo with these sections:

  ## What Churn Means Here (the core decision)
  Walk through the candidate definitions of "churn":
  - Hard cancellation only
  - Failed renewal (subscription)
  - Downgrade above a threshold
  - Inactivity for N days
  - Negative-NRR (revenue decrease) over a window
  For each, state who it includes, who it excludes, and the consequence for modeling. Then **recommend a primary definition** with explicit edge case handling. The recommendation must reflect the action: if the action is "save play," the definition should include the customers a save play could save and exclude those it cannot.

  ## Prediction Horizon
  - When predictions are made (e.g., 60 days before renewal, weekly cadence, end of trial)
  - The lookback window used for features
  - The lookforward window the prediction concerns
  - Tradeoff: shorter horizons are easier to predict but leave less time for action; longer horizons give more lead time but are noisier.

  ## Unit of Prediction
  - Account, user, subscription, or contract
  - Why the chosen unit matches the decision

  ## Label Edge Cases
  Address each, with a recommendation:
  - **M&A-driven churn:** include or exclude?
  - **Pause vs. cancel:** treat the same?
  - **Annual vs. monthly billing:** different prediction cadences?
  - **Downgrades:** is a 30% seat reduction churn or expansion-loss?
  - **Customers who churn and return:** does the original churn still count?
  - **Trial / freemium populations:** included in the model or separate?

  ## Class Balance and Sample Size
  - Estimated positive rate at the chosen definition and horizon
  - Implications for model choice and evaluation
  - Whether class weighting / resampling is warranted

  ## Why Not the Other Formulations
  Briefly explain why the recommended formulation is preferable to the obvious alternatives — ties decisions back to the action and the available data.

  ## What This Implies for Evaluation
  - Primary metric and threshold (precision @ top-K is common when the action is capacity-constrained; AUC is rarely the right primary)
  - Holdout strategy
  - Business metric the model is supposed to move

  ## Open Decisions for the Sponsor
  Two to four decisions that the data science team cannot make alone — definitional or operational choices that the business owner must commit to before modeling starts.

  Tone: rigorous, opinionated, willing to make a recommendation. The output is a basis for a 30-minute decision meeting, not a survey.
variables:
  - "{{business_problem}}"
  - "{{product_model}}"
  - "{{segment}}"
  - "{{data_available}}"
  - "{{existing_definitions}}"
  - "{{action}}"
  - "{{constraints}}"
exampleInput: |
  business_problem: Reduce mid-market non-renewal by enabling earlier, more targeted save plays.
  product_model: Annual subscription with optional auto-renewal; some monthly contracts (small fraction).
  segment: Mid-market accounts ($25K–$250K ARR).
  data_available: 4 years of subscription, billing, usage, support, and CSM activity data; ~13K mid-market renewals labeled.
  existing_definitions: |
    CS team uses "any non-renewal" loosely; finance reports "logo churn" as count of non-renewing accounts.
    Product analytics has a separate "active customer" definition based on usage.
  action: CSMs are paged to run a save play; team has capacity for ~25 plays/week.
  constraints: |
    Predictions run weekly batch.
    Acquisition-driven outcomes (parent company acquired) cannot be saved by CSM action.
    Sales-led contract negotiations are out of CSM scope; pure pricing-driven churn excluded if identifiable.
exampleOutput: |
  ## What Churn Means Here
  Candidate definitions:
  - **Hard cancellation only.** Cleanest signal but excludes seat downgrades, which represent meaningful revenue loss and are precisely what save plays can affect. Reject — too narrow.
  - **Failed renewal (any non-renewal at contract end).** Aligns with finance "logo churn." Captures the renewal moment but ignores within-term downgrades and pauses. Mid-market.
  - **Failed renewal OR seat downgrade ≥ 50% at renewal.** Captures the spectrum of revenue loss CSMs can plausibly intervene on. **Recommended primary.**
  - **Inactivity-based (no usage for 60 days).** Useful for product-led signals but doesn't map to the renewal action — an inactive customer can still renew, and an active one can churn.
  - **Negative-NRR (revenue down vs. prior contract).** More finance-aligned; harder to operationalize at the per-account-per-week cadence.

  **Recommendation:** non-renewal = (no renewal within 30 days of contract end) OR (seat-count downgrade ≥ 50% at renewal). Predict at the account level. Edge cases handled in section below.

  ## Prediction Horizon
  - **Predictions made:** weekly, surfacing accounts within 30–90 days of contract end. The 60-day-before-renewal mark is the operational anchor.
  - **Feature lookback:** 90 days for usage and support; full account lifetime for static firmographic features.
  - **Lookforward:** 60 days post-prediction, evaluated at contract-end disposition.
  - **Tradeoff:** 60 days is the sweet spot for this segment. 30 days is too late for save plays; 120 days is too noisy because mid-renewal-cycle behavior changes substantially.

  ## Unit of Prediction
  Account-level. The action (save play) is run by a CSM at the account level. User-level or subscription-level units would either over-count (multi-subscription accounts double-flagged) or fragment (a save play targets the whole relationship, not a seat).

  ## Label Edge Cases
  - **M&A-driven churn:** EXCLUDE from the label. Save plays cannot reverse acquisitions; including them adds noise that the model will fit. Identifier: look for parent-company acquisition events in the customer master or CRM. ~270 accounts removed in the prior data audit.
  - **Pause vs. cancel:** treat **paused-and-not-resumed-by-contract-end** as churn; treat reactivated pauses as non-churn. Operationally simple to apply at the renewal cutoff.
  - **Annual vs. monthly billing:** the small fraction of monthly contracts (estimate <10% of mid-market by ARR) should be modeled separately or labeled with a different effective horizon. **Recommendation:** scope v1 to annual contracts only; defer monthly to v1.1.
  - **Downgrades:** ≥50% seat reduction at renewal counts as churn. Below that threshold, label as renewal but track separately for expansion-loss analysis.
  - **Customers who churn and return:** the original churn event still counts. Returns are a separate (and rarer) modeling problem.
  - **Trial / freemium populations:** out of scope. Different decision, different actor (growth, not CS), different data. Build separately.

  ## Class Balance and Sample Size
  - Expected positive rate: ~14–16% at the recommended definition and horizon.
  - 13K labeled accounts is sufficient for tree-based models with class weighting. No oversampling required.
  - Class imbalance is mild enough that AUC is meaningful, but the **primary metric must remain precision @ top-K** because the action is capacity-constrained at 25 plays per week.

  ## Why Not the Other Formulations
  - **Hard cancellation only** ignores the largest portion of revenue at risk that CSMs can act on (seat downgrades).
  - **Inactivity-based churn** misaligns with the renewal action and creates false positives — quiet customers who renew on time.
  - **Per-user churn** fragments the action and over-counts across multi-seat accounts.
  - **Negative-NRR** is the right finance lens but a poor operational target for weekly per-account decisions.

  ## What This Implies for Evaluation
  - **Primary metric:** Precision @ top 10% on a held-out time-period sample. Threshold for a deployable model: ≥ 0.45.
  - **Secondary metrics:** recall @ top 10% (how much of all churn we surface); calibration (CSMs see probabilities); subgroup performance by region and contract size.
  - **Holdout:** time-based — train on 2021–2023, validate H1 2024, test H2 2024. No random splits.
  - **Business metric:** non-renewal rate among model-flagged accounts that received a save play vs. matched controls. Measured via A/B in deployment.

  ## Open Decisions for the Sponsor
  1. **Confirm the 50% seat-downgrade threshold.** Should it be 30%, 50%, or revenue-based instead? Different threshold materially changes the positive rate and the population CSMs are pointed at.
  2. **Confirm out-of-scope: M&A churn, pricing-driven churn from sales-led negotiations.** If sales-driven churn is in scope, we need a way to identify it in the label.
  3. **Confirm v1 scope is annual contracts only.** Monthly contracts can be added in v1.1; including them in v1 creates label heterogeneity that hurts model performance.
  4. **Define the deployment A/B holdout.** Reserving 10% of high-risk accounts as a no-action control is the only way to measure lift causally. CS team buy-in is required because it means not running save plays on those accounts.
tips:
  - "The hardest decision in churn modeling is the label, not the model. Spend the first week on definition, not features."
  - "Tie the label to the action. If the action is a save play, the label should include exactly the customers a save play could affect — not more, not less."
  - "Exclude M&A-driven outcomes from the label. They're noise the model will fit and they make the lift number meaningless."
  - "Predict at the unit the action is taken on. User-level predictions for an account-level save play create operational confusion."
  - "Use precision @ top-K as the primary metric whenever the action is capacity-constrained. AUC is a secondary diagnostic, not the goal."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - ml-model-experiment-plan
  - feature-engineering-brainstorm
  - retention-analysis-writeup
tags:
  - churn
  - problem-framing
  - machine-learning
  - data-science
---
