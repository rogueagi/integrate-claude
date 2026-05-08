---
title: "Write an ML model card for stakeholders"
slug: ml-model-card
function: data
role: data-science
description: "Produce a model card that documents what an ML model does, how it was built, where it works, and where it does not — for stakeholders, auditors, and the team that will inherit it."
useCase: "Use this prompt when finishing an ML project that will be deployed and maintained by other people. Generates the structured model card — purpose, performance, limitations, fairness — that lets future operators understand what they own."
prompt: |
  You are a senior data scientist writing the model card for an ML model going to production. The reader includes the product owner who will use the predictions, the engineer who will operate the system, a future data scientist who may inherit it, and possibly auditors or compliance reviewers.

  Inputs:
  - Model name and version: {{model_name_version}}
  - Intended use: {{intended_use}} (the decision the model informs and who acts on it)
  - Out-of-scope uses: {{out_of_scope}}
  - Model type and architecture: {{model_type}}
  - Training data: {{training_data}} (source, time range, volume, label definition)
  - Evaluation data and metrics: {{evaluation}} (split strategy, primary and secondary metrics with values, confidence intervals where relevant)
  - Subgroup performance: {{subgroup_performance}} (performance broken out by relevant slices: segment, geography, plan, etc.)
  - Known limitations and failure modes: {{limitations}}
  - Fairness considerations: {{fairness}} (protected attributes, audit results, mitigations)
  - Operational details: {{ops_details}} (refresh cadence, monitoring, owner team)
  - Ethical / regulatory context: {{regulatory}}

  Produce a model card in the following structure:

  ## Model Details
  - Name and version
  - Owner team and on-call
  - Date and version history
  - Model type / architecture (one paragraph, plain language; avoid jargon-laden architecture descriptions)
  - License or restrictions if applicable

  ## Intended Use
  - Primary intended use: the decision the model informs, the actor, and the action
  - Out-of-scope uses: explicit list of uses for which the model is NOT validated. Examples: real-time decisioning, customer-facing predictions, use in geographies not represented in training data
  - Users: who interacts with predictions

  ## Training Data
  - Source(s) and time window
  - Volume and label balance
  - Label definition (precise)
  - Known data quality issues
  - Exclusions (test accounts, invalid records, etc.)

  ## Evaluation
  - Split strategy and rationale (time-based vs. random, etc.)
  - Primary metric with value and CI
  - Secondary metrics
  - Calibration (if applicable)
  - Comparison to baseline or prior version

  ## Subgroup / Slice Performance
  Performance broken out across the slices in {{subgroup_performance}}. Flag any slice where performance materially diverges from the aggregate.

  ## Limitations and Failure Modes
  Be specific and honest. Examples:
  - Performance degrades in segment X
  - Predictions are unreliable for users with fewer than N events
  - Model has not been evaluated on data more recent than [date]
  - Drift sensitivity: which input distributions, if they shift, will silently degrade the model

  ## Fairness Considerations
  - Protected attributes: which were considered, which were used or excluded
  - Audit results across demographic or business-relevant slices
  - Known disparate performance and any mitigations

  ## Operational Notes
  - Refresh cadence (training and scoring)
  - Monitoring metrics and thresholds
  - What triggers a retraining
  - Owner team contact

  ## What's Coming Next
  Two to three planned improvements or known follow-ups.

  Tone: precise, honest, neither defensive nor overclaiming. The model card's purpose is to make future operators (and current users) safe — that requires writing down the bad as carefully as the good.
variables:
  - "{{model_name_version}}"
  - "{{intended_use}}"
  - "{{out_of_scope}}"
  - "{{model_type}}"
  - "{{training_data}}"
  - "{{evaluation}}"
  - "{{subgroup_performance}}"
  - "{{limitations}}"
  - "{{fairness}}"
  - "{{ops_details}}"
  - "{{regulatory}}"
exampleInput: |
  model_name_version: churn-risk-mid-market v1.0
  intended_use: Weekly batch scoring of mid-market accounts to surface churn risk 60 days before contract renewal. CSMs use the top-K list to prioritize save plays.
  out_of_scope: |
    - SMB accounts (not in training data)
    - Customer-facing predictions (CSMs only)
    - Real-time decisioning
    - Geographies outside US/EU/Canada (training data dominated by US)
  model_type: Gradient-boosted decision tree (LightGBM), 250 trees, depth 6, monotonic constraints on 4 intuitive features.
  training_data: |
    Subscription history Q1 2021 – Q4 2023, mid-market accounts only.
    13,140 labeled renewals; 1,840 non-renewals (14% non-renewal rate).
    Label: non-renewal = no renewal within 30 days of contract end OR seat-count downgrade ≥ 50% at renewal.
    Excluded: accounts whose parent company was acquired during contract term (270 accounts).
  evaluation: |
    Time-based split: train 2021–2023, validate H1 2024, test H2 2024.
    Primary: Precision @ top 10% = 0.49 on H2 2024 test (95% CI: 0.45–0.53). Beats heuristic baseline (0.30) by 19 absolute points.
    Recall @ top 10% = 0.41.
    Brier score = 0.094 (well-calibrated up to 0.7 predicted; over-confident above).
    AUC = 0.82.
  subgroup_performance: |
    By region: US precision @ top 10% = 0.51; EU = 0.43; Canada = 0.46. EU is materially weaker.
    By contract size: large ($75K+ ARR) precision = 0.42; small ($25K-$75K) = 0.52. Large accounts are harder.
    By tenure: <1 year = 0.55; 1–3 years = 0.48; 3+ years = 0.38. Long-tenure accounts are hardest.
  limitations: |
    Model has not been evaluated on data after Dec 2024.
    Performance degrades for accounts with <90 days of usage history.
    Calibration is poor at very high predicted probabilities (>0.7).
    Acquisition-driven non-renewal is excluded from the label, so the model does not predict M&A-driven churn.
  fairness: |
    Protected attributes (where defined): no demographic attributes available or used. Industry segment was reviewed and excluded due to small-N concerns in some regulated verticals.
    Slice review across region, contract size, and tenure shows performance gaps but no protected-class disparity (none represented).
  ops_details: |
    Weekly batch scoring every Sunday 03:00 UTC.
    Retrained quarterly on a rolling 3-year window.
    Monitoring: drift detection on top 15 features (KS-test alerts at p<0.01); precision tracking on actioned accounts.
    Owner: data science team (slack #ml-churn); on-call rotation shared with analytics engineering.
  regulatory: No regulatory frameworks (GDPR data minimization observed; no automated decision affecting individuals — CSM is in the loop).
exampleOutput: |
  # Model Card: churn-risk-mid-market v1.0

  ## Model Details
  - **Name and version:** churn-risk-mid-market v1.0
  - **Owner:** Data Science team. Slack #ml-churn. Shared on-call with analytics engineering.
  - **Date:** First deployed January 2025. v1.0 is the initial production release.
  - **Architecture:** Gradient-boosted decision tree ensemble (LightGBM), 250 trees, depth 6, with monotonic constraints on four features where direction is intuitive (DAU trend, support escalation count, contract age, seat utilization). Outputs a calibrated probability of non-renewal.
  - **License:** Internal use only.

  ## Intended Use
  - **Primary use:** Surface mid-market accounts at elevated risk of non-renewal 60 days before contract end, so customer success managers can prioritize save plays. Predictions run weekly batch; the top-K list (typically top 10%) is the operational artifact.
  - **Actor in the loop:** CSM. The model does not take action automatically.
  - **Out of scope:**
    - SMB accounts (no training representation; do not score or surface)
    - Customer-facing display of predictions (CSM tooling only)
    - Real-time / latency-sensitive decisioning (model is batch only)
    - Geographies outside US/EU/Canada (training is US-dominated; predictions in other regions are not validated)
    - Use as a layoff or staffing-allocation signal for the CSM team

  ## Training Data
  - **Source:** Subscription history, product usage telemetry, support, and account firmographic data.
  - **Time window:** Q1 2021 – Q4 2023.
  - **Volume:** 13,140 labeled renewals (mid-market only). Non-renewal rate 14% (1,840 events).
  - **Label definition:** non-renewal = (no renewal within 30 days of contract end) OR (seat-count downgrade ≥ 50% at renewal). Includes voluntary downgrades to surface seat-loss risk.
  - **Exclusions:** 270 accounts whose parent company was acquired during the contract term — these are excluded because save plays cannot affect M&A-driven outcomes. Test accounts and internal accounts excluded throughout.
  - **Known data quality issues:** the 2022 cohort includes ~80 renewals that were the result of a one-time discount push; these are treated as renewals in the label (audit confirmed they were genuinely retained).

  ## Evaluation
  - **Split:** time-based. Train Q1 2021 – Q4 2023, validate H1 2024, test H2 2024. Random splits were not used because account behavior and product features drift over time.
  - **Primary metric — Precision @ top 10%:** 0.49 on H2 2024 test cohort (95% CI: 0.45–0.53). Beats the existing heuristic baseline (0.30) by 19 absolute points.
  - **Recall @ top 10%:** 0.41.
  - **AUC:** 0.82.
  - **Calibration (Brier score):** 0.094. Reliability plot is well-calibrated up to a predicted probability of 0.7, then over-confident — predicted probabilities above 0.7 are systematically higher than empirical rates.
  - **Comparison:** beats the prior 30-day-DAU-drop heuristic, which had precision @ top 10% = 0.30 on the same evaluation cohort.

  ## Subgroup / Slice Performance
  | Slice | Precision @ top 10% | Note |
  | --- | --- | --- |
  | US accounts | 0.51 | Strongest segment. |
  | EU accounts | 0.43 | Materially weaker than US — 8 absolute points. Likely fewer training examples and different usage patterns. |
  | Canadian accounts | 0.46 | Closer to aggregate. |
  | Large accounts ($75K+ ARR) | 0.42 | Harder — fewer accounts, higher idiosyncratic noise. |
  | Small accounts ($25K–$75K ARR) | 0.52 | Easier; more uniform. |
  | Tenure <1 year | 0.55 | |
  | Tenure 1–3 years | 0.48 | |
  | Tenure 3+ years | 0.38 | Hardest — long-tenure churn is rare and idiosyncratic. |

  **Slices flagged for caution:** EU and 3+ year tenure are below the threshold at which we feel comfortable with broad CSM action without secondary review.

  ## Limitations and Failure Modes
  - Not evaluated on data after Dec 2024. Performance on more recent cohorts is presumed similar but not validated.
  - Performance degrades for accounts with fewer than 90 days of usage history. Such accounts should not be scored; the scoring pipeline filters them out.
  - Calibration is unreliable for predicted probabilities above 0.7 — values in this range should be treated as "high risk," not as literal probabilities.
  - Long-tenure accounts (3+ years) have meaningfully lower precision; teams should weight the predictions accordingly.
  - The model excludes M&A-driven non-renewal from the label and therefore cannot predict it. CS leadership should not look to this model for that signal.
  - **Drift sensitivity:** the model's top features include DAU trend and support escalation rate. A product change that shifts session counts (e.g., a successful AI feature that reduces session frequency) will look like risk to the model. Monitor.

  ## Fairness Considerations
  - No demographic protected attributes are available in training data and none were used.
  - Industry segment was reviewed for inclusion and excluded for v1 due to small-N concerns in some regulated verticals.
  - Slice performance gaps exist (region, contract size, tenure) but no protected-class disparity is represented.
  - The CSM is in the loop on every action; the model does not directly affect customers without human review.

  ## Operational Notes
  - **Scoring cadence:** weekly batch, Sundays 03:00 UTC.
  - **Training cadence:** quarterly retrain on a rolling 3-year window.
  - **Monitoring:** drift detection on the top 15 features (KS-test, alerts at p<0.01); precision tracking on actioned accounts (closed loop after 60 days); calibration check at quarterly retrain.
  - **Retraining trigger:** scheduled quarterly OR drift alert in 3+ top features OR aggregate precision drops more than 5 absolute points.
  - **Contact:** data science team (#ml-churn).

  ## What's Coming Next
  - **v1.1:** improve EU performance via region-aware feature scaling.
  - **v1.2:** evaluate adding industry segment after legal review on regulated verticals.
  - **Better calibration at the high end** — Platt scaling on the >0.7 region or a richer GBM calibrator.
tips:
  - "Spend most of the model card's effort on Limitations and Subgroup Performance. Those are the sections that protect users and future operators."
  - "Be honest about calibration. A model that is well-calibrated in the middle range and over-confident at the top is the rule, not the exception — write it down."
  - "Out-of-scope uses are as important as intended uses. The most common production model failures come from someone applying a validated model to an unvalidated use."
  - "Always include drift sensitivity. Predicting where the model will silently fail is the single most useful thing a model card does for the engineer who inherits it."
  - "Update the card every retrain. A model card from a year ago is more dangerous than no model card at all."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - ml-model-experiment-plan
  - propensity-score-explanation
  - churn-prediction-framing
tags:
  - model-card
  - ml-documentation
  - data-science
  - responsible-ai
---
