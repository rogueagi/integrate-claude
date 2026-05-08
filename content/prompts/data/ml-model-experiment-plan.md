---
title: "Draft an ML model experiment plan"
slug: ml-model-experiment-plan
function: data
role: data-science
description: "Produce a structured ML experiment plan: problem framing, hypotheses, baselines, success criteria, and the path to a deployable model — before writing any training code."
useCase: "Use this prompt when scoping a new ML project and you need a written plan to align with stakeholders and the data science team. Forces explicit framing, baselines, and falsification criteria — the artifacts that prevent a six-week modeling effort from drifting."
prompt: |
  You are a senior data scientist drafting the experiment plan for a new ML project. The reader is a mix of data science peers, the product or business stakeholder, and an engineering partner who will productionize the model.

  Inputs:
  - Business problem: {{business_problem}}
  - Proposed ML formulation: {{ml_formulation}} (classification, regression, ranking, embedding, etc.)
  - Available data: {{available_data}} (sources, volume, time range, label availability and quality)
  - Decision the model will inform: {{decision}} (the action taken when a prediction comes out)
  - Constraints: {{constraints}} (latency, refresh cadence, interpretability requirements, fairness requirements, regulatory)
  - Existing baselines or prior attempts: {{prior_work}}
  - Timeline: {{timeline}}

  Produce:

  ## Problem Framing (1 paragraph)
  Restate the business problem and the proposed ML problem precisely. State the prediction target, the unit of prediction, and the action the prediction triggers. If the formulation is questionable (e.g., classification when ranking is more natural), say so.

  ## Hypothesis
  The single sentence that the experiment is designed to test. Examples: "A churn classifier with X feature set outperforms the existing tenure-based heuristic by Y on Z metric, on a held-out time-period sample."

  ## Success Criteria
  - Primary metric and the threshold above which the model is worth deploying. Be specific (AUC > 0.78; precision @ top 10% > 0.45).
  - Secondary metrics for tradeoff analysis (calibration, recall at threshold, fairness gaps across groups).
  - Business metric the model is supposed to move (and how it will be measured in deployment — A/B test, holdout, before/after).
  - Failure criteria: what result would cause us to abandon the project.

  ## Baselines
  At minimum:
  - The current decision rule or heuristic (must beat this)
  - A trivial ML baseline (logistic regression with a simple feature set, or a tree on basic features)
  Beating a baseline is the gate; an unbeaten baseline kills the project.

  ## Data Plan
  - Label definition (precise — see "what counts" approach from metric specs)
  - Train / validation / test split — prefer time-based for non-IID data
  - Sample size and class balance check
  - Known label noise and how it will be handled
  - Leakage risks (features that contain post-event information) and how to audit

  ## Feature Plan (high level)
  - 2–4 feature families to start with
  - 1–2 features that are explicitly ruled out (and why — leakage, fairness, drift)

  ## Model Candidates
  - 2–4 model families to try, in order. Start simple — logistic regression / GBM before deep learning unless there's a reason.
  - Compute and serving cost estimate for each

  ## Risks and Falsifiers
  - Three things that could make this project fail
  - For each, the early signal to watch and the kill criterion
  Common failures: insufficient label volume, target leakage, the heuristic baseline is already very good, deployment latency makes the model unusable.

  ## Timeline and Checkpoints
  - Week-by-week milestones
  - Decision points where stakeholders review and decide whether to continue

  ## What This Plan Doesn't Cover
  Deployment, monitoring, retraining cadence — note that they're explicitly out of scope for this plan and will follow if the experiment succeeds.

  Tone: rigorous, plainspoken, honest about uncertainty. The plan's job is to set the conditions under which the project succeeds or fails before the team writes a line of training code.
variables:
  - "{{business_problem}}"
  - "{{ml_formulation}}"
  - "{{available_data}}"
  - "{{decision}}"
  - "{{constraints}}"
  - "{{prior_work}}"
  - "{{timeline}}"
exampleInput: |
  business_problem: Customer success wants to identify mid-market accounts at risk of churn 60 days before renewal so CSMs can intervene.
  ml_formulation: Binary classification — predict probability of non-renewal at the 60-day-before-renewal mark.
  available_data: |
    - 4 years of subscription history (~12K mid-market accounts, ~3.2K renewal events per year)
    - Product usage telemetry (daily active users, feature adoption, last-30-day session counts)
    - Support ticket volume and CSAT
    - Account firmographics from Salesforce
    - Renewal outcomes labeled cleanly back to 2021 (~13K labeled renewals total; ~14% non-renewal rate)
  decision: CSM is paged to run a save play; ~25-account weekly capacity per CSM team
  constraints: |
    - Predictions must run weekly batch (no real-time)
    - CSMs need a top-reasons explanation per account (interpretability matters)
    - Cannot use protected attributes (industry is sensitive in some segments; review with legal)
  prior_work: A heuristic exists — accounts flagged when DAU drops >40% in trailing 30 days. Precision approximately 0.30 at the top 10% threshold.
  timeline: 8 weeks to first model decision; 12 weeks to deployment if successful.
exampleOutput: |
  ## Problem Framing
  CS wants to identify mid-market accounts at risk of non-renewal 60 days before contract end so CSMs can run targeted save plays. Formulating as binary classification with a 60-day prediction window is reasonable. However, the actual decision is "which 25 accounts per week to act on," which is a ranking problem. We will train as classification but evaluate primarily as a ranking task (precision @ top-K), since the CSM team's capacity, not a probability threshold, sets the action.

  ## Hypothesis
  A gradient-boosted classifier using product usage, firmographic, and support features will achieve precision @ top 10% of at least 0.45 on a held-out renewal cohort — beating the existing 30-day-DAU-drop heuristic (precision @ top 10% ≈ 0.30) by 15 absolute percentage points or more.

  ## Success Criteria
  - **Primary:** Precision @ top 10% ≥ 0.45 on the held-out 2024 renewal cohort.
  - **Secondary:** Recall @ top 10% (how much of all non-renewal we surface in the actionable set); calibration (Brier score, reliability plot — important because CSMs see probabilities); top-3-features-per-prediction interpretability.
  - **Business metric:** non-renewal rate among model-flagged accounts that received a save play vs. matched controls. Measured via A/B holdout in deployment, evaluated 6 months post-launch.
  - **Failure criteria:** if precision @ top 10% < 0.40 across reasonable model families, we drop the project. If precision is between 0.40 and 0.45, we have a conversation with CS about whether the lift is worth the operational cost.

  ## Baselines
  1. **Existing heuristic:** trailing-30-day DAU drop > 40%. Reproduce its precision/recall on the same evaluation cohort. This is the floor — any ML candidate must clear this by a meaningful margin.
  2. **Logistic regression on a small feature set:** 5–8 hand-picked features (DAU trend, support tickets last 30 days, contract age, last QBR date). The cheap baseline that often surprises people.
  3. **GBM on the full first-pass feature set.** Expected to be the candidate that ships if anything does.

  ## Data Plan
  - **Label definition:** non-renewal = (subscription end date < 30 days post contract-end with no renewal) OR (downgrade by ≥50% of seat count at renewal). Includes voluntary downgrades to surface seat-loss risk; excludes pure churn-due-to-acquisition since the save play wouldn't change outcome — those will be filtered with an `is_acquired = false` rule.
  - **Splits:** time-based. Train on 2021–2023 renewals; validate on first half of 2024; test on held-out second half of 2024. No random splits — feature distributions drift and an IID split overstates performance.
  - **Sample size:** ~13K labeled renewals total, ~1,800 non-renewals. Class imbalance is real (14%) but workable with class weighting; do not oversample naively.
  - **Label noise:** known issue — some "renewals" in 2022 were paid extensions during a discount push. Audit a sample of 100 positive labels for quality before training.
  - **Leakage risks:** any feature recorded after the 60-day-pre-renewal cutoff is forbidden. Audit by computing each feature's "as-of" timestamp and rejecting any with future-leakage. Particular suspicion: support-ticket features (CSMs may file tickets in response to known risk).

  ## Feature Plan
  Initial feature families:
  1. Usage trends — DAU, MAU, trailing 7/30/90-day session counts and ratios.
  2. Feature adoption — count of "core actions" used in last 60 days; trend.
  3. Support engagement — ticket count, CSAT, escalations in last 90 days.
  4. Firmographic and contract — account age, seat count, ARR, contract length.

  Explicitly ruled out for v1:
  - **Industry / vertical attributes** until legal review confirms permitted use.
  - **CSM-entered "risk" notes from Salesforce** — leakage risk; these are often written when a CSM already suspects churn.

  ## Model Candidates
  1. Logistic regression (baseline benchmark; interpretable; cheap).
  2. Gradient-boosted trees (XGBoost or LightGBM) — primary candidate. Good with tabular data, mixed feature types, calibrates reasonably.
  3. Calibrated GBM with monotonic constraints on a few intuitive features (DAU trend should monotonically affect risk).
  4. *(Optional)* a sequence model on usage time series — only if 1–3 underperform expectations and we have signal that time dynamics matter beyond what aggregated features capture.

  Compute: all candidates trainable on a single CPU machine; weekly batch scoring is trivial. No GPU needed.

  ## Risks and Falsifiers
  1. **The heuristic is harder to beat than expected.** Possible — DAU drop is genuinely informative. Early signal: if the logistic baseline doesn't clear the heuristic by week 3, the GBM probably won't either by 15 points.
  2. **Label noise in 2022 is large.** If audit finds >10% noisy labels, retrain on 2023+ only and accept reduced sample size.
  3. **Interpretability requirement isn't satisfiable from a GBM.** SHAP-based top-features is the planned approach; if CSMs find SHAP outputs unusable, fall back to a logistic model with a small feature set.

  ## Timeline and Checkpoints
  - **Weeks 1–2:** data audit (label quality, leakage check), reproduce heuristic baseline.
  - **Week 3:** logistic baseline trained and evaluated. **Checkpoint:** does it clear the heuristic? If not, re-examine data and features before moving to GBM.
  - **Weeks 4–5:** GBM training and tuning; calibration; feature importance analysis.
  - **Week 6:** evaluation on held-out 2024 H2 cohort. **Checkpoint:** does precision @ top 10% clear 0.45?
  - **Week 7:** stakeholder review with CS leadership; decide whether to deploy.
  - **Week 8:** deployment plan handoff to MLE / data engineering.

  ## What This Plan Doesn't Cover
  Deployment architecture, monitoring, drift detection, retraining cadence, and the A/B test design for measuring lift. Those are scoped after the experiment outcome at week 7.
tips:
  - "Pick the success metric that matches the actual decision. If the action is 'top-K accounts per week,' precision @ K is the metric, not AUC."
  - "Always include a heuristic baseline. Beating no baseline at all is the easiest way to ship a bad model — and the easiest way to mistake a bad model for a good one."
  - "Time-based splits, not random, for any non-IID problem. A random split on a temporally drifting target overstates performance every time."
  - "Audit for leakage before modeling. The features most predictive on a leaky validation set are often the ones recorded in response to the outcome."
  - "Define failure criteria up front. A project that has no kill criterion will run for two more quarters than it should."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - feature-engineering-brainstorm
  - churn-prediction-framing
  - ml-model-card
tags:
  - machine-learning
  - experiment-plan
  - data-science
  - modeling
  - classification
---
