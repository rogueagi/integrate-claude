---
title: "Brainstorm feature engineering candidates"
slug: feature-engineering-brainstorm
function: data
role: data-science
description: "Generate a structured set of feature engineering candidates for an ML problem, organized by feature family with leakage and stability flags."
useCase: "Use this prompt at the start of feature engineering for a new model. Produces a brainstormed list of candidates organized by family, each with notes on leakage risk, drift, and the cost-to-build — the working artifact you take into a feature design session."
prompt: |
  You are a senior data scientist brainstorming feature candidates for a new model. The list will be reviewed by the modeling team and trimmed; your job is to be generative and organized, not to over-curate.

  Inputs:
  - Prediction task: {{prediction_task}}
  - Prediction unit and time horizon: {{prediction_unit}} (e.g., "per customer per week, predicting 30 days ahead")
  - The "as-of" cutoff: {{as_of_cutoff}} (the timestamp before which all features must be derived)
  - Available raw data: {{available_data}}
  - Constraints: {{constraints}} (interpretability, latency, fairness, regulatory)
  - Prior model features (if any): {{prior_features}}

  Produce:

  ## Feature Families
  Organize candidates into 5–8 feature families. For each family:
  - One-line description
  - 4–8 specific feature candidates
  - For each candidate, in a tight format:
    - **Definition** (precise — what's computed, over what window, with what aggregation)
    - **Cost to build** (small / medium / large)
    - **Leakage risk** (low / medium / high; describe if non-low)
    - **Drift risk** (low / medium / high; describe if non-low)
    - **Notes** if any (correlation with existing features, interpretability concerns, sparsity issues)

  Common families to consider — pick those that fit the data and task:
  - Recency / activity windows (last 7/30/90 days)
  - Trend / change features (slope, week-over-week deltas)
  - Ratios and rates (per-user, per-session, per-month)
  - Comparison to peers / cohorts
  - Categorical encodings of high-cardinality columns
  - Sequence features (most recent N events, time since last X)
  - Interaction features
  - Text / unstructured derivations
  - External / contextual features (calendar, geography, weather if applicable)

  ## Features to Avoid
  Three to five candidates that look attractive but have specific failure modes:
  - Features with future leakage (recorded after the as-of cutoff)
  - Features that encode the label directly (e.g., counting events that imply the outcome)
  - Features highly correlated with protected attributes
  - Features that drift severely over the deployment horizon

  ## Sequencing Recommendation
  Suggest the order to build and test families:
  - Cheap, high-information families first
  - Expensive families that should wait until cheap ones are exhausted
  - Families that should only be added if the model needs the lift

  ## Open Questions for the Data Pipeline
  Two to four things you can't answer from the brief — e.g., is feature X available at the as-of cutoff, what's the data freshness lag, are protected attributes already excluded from the warehouse view.

  Tone: generative but disciplined. Don't propose features the available data can't support; do propose features that require modest engineering if they look high-value.
variables:
  - "{{prediction_task}}"
  - "{{prediction_unit}}"
  - "{{as_of_cutoff}}"
  - "{{available_data}}"
  - "{{constraints}}"
  - "{{prior_features}}"
exampleInput: |
  prediction_task: Predict whether a self-serve trial user will convert to paid by the end of the 14-day trial.
  prediction_unit: Per trial user, predicted at end of day 3 of the trial.
  as_of_cutoff: End of day 3 of the trial. Any feature derived from day 4 onward is leakage.
  available_data: |
    - User profile (signup form: email, role, company size, country)
    - Activation events (workspace created, first project, first invite, first export)
    - Daily product usage (sessions, time-on-platform, features used)
    - Marketing attribution (utm_source, utm_campaign, landing_page)
    - Email engagement (opens, clicks during trial)
    - Support / chat interactions
  constraints: Predictions run nightly batch; must be explainable to growth PM (top-3 reasons per user); cannot use country if it correlates with restricted geographies — defer that decision.
  prior_features: Existing simple model uses: number of sessions in days 1–3, whether user invited a teammate, role from signup form. Logistic regression baseline.
exampleOutput: |
  ## Feature Families

  ### 1. Activation Milestones (days 1–3)
  Did the user reach key activation steps in the first 3 days?
  - **`reached_first_project_d3`** — boolean, did the user create a first project by end of day 3. Cost: small. Leakage: low. Drift: low.
  - **`days_to_first_project`** — integer 0–3 (or null if not reached). Cost: small. Leakage: low. Drift: low. Notes: more granular than the boolean; may be redundant.
  - **`activation_steps_completed_d3`** — count of canonical activation steps reached (workspace, project, invite, export). Cost: small. Leakage: low. Drift: low. Notes: sums multiple boolean activations into one richer signal.
  - **`reached_first_invite_d3`** — boolean. Cost: small. Leakage: low. Drift: low. Notes: invite is one of the highest-signal activations in the prior model — worth its own feature even if also rolled into the count.
  - **`reached_first_export_d3`** — boolean. Cost: small. Leakage: low. Drift: low.

  ### 2. Usage Intensity (recency / activity windows)
  How much the user has used the product so far.
  - **`session_count_d1` / `_d2` / `_d3`** — daily session counts. Cost: small. Leakage: low. Drift: low.
  - **`total_minutes_d1_d3`** — total time on platform in days 1–3. Cost: small. Leakage: low. Drift: low.
  - **`features_used_distinct_d3`** — count of distinct features touched. Cost: small. Leakage: low. Drift: low. Notes: a richer signal than session count for "is this user exploring?"
  - **`active_day_count_d3`** — number of days out of 3 the user was active. Cost: small. Leakage: low. Drift: low. Notes: distinguishes one big day from steady use.

  ### 3. Trend / Engagement Trajectory
  Is the user accelerating or decelerating over the first 3 days?
  - **`session_slope_d1_d3`** — slope of daily sessions. Cost: small. Leakage: low. Drift: low. Notes: 3 points is a noisy slope; consider as a categorical (up / flat / down).
  - **`time_since_last_session_hours`** — hours between end of day 3 and last session. Cost: small. Leakage: low. Drift: low. Notes: high-information; users who haven't been back in 24h convert poorly.
  - **`day3_vs_day1_session_ratio`** — ratio of day 3 sessions to day 1 sessions. Cost: small. Leakage: low. Drift: medium. Notes: noisy on small numbers; cap or smooth.

  ### 4. User / Firmographic Profile (signup form)
  Who is this user? From the form they filled out.
  - **`role_grouped`** — role bucketed into 6–8 categories (engineer, designer, PM, founder, ops, other). Cost: small. Leakage: low. Drift: medium. Notes: free-text role fields drift as new options are added; lock the bucketing.
  - **`company_size_bucketed`** — bucketed (1, 2–10, 11–50, 51–200, 201+). Cost: small. Leakage: low. Drift: low.
  - **`email_domain_type`** — work / freemail (gmail/yahoo) / edu / other. Cost: small. Leakage: low. Drift: low. Notes: freemail correlates with consumer use, lower convert rate. Watch for fairness implications.
  - **`country_grouped`** — top-N countries plus "other"; defer pending the constraint review.

  ### 5. Acquisition Source
  Where the user came from.
  - **`utm_source_grouped`** — top sources + "other". Cost: small. Leakage: low. Drift: high. Notes: paid campaigns rotate; bucket carefully or use a rolling encoding.
  - **`landing_page_type`** — pricing / feature / homepage / blog / other. Cost: small. Leakage: low. Drift: medium.
  - **`is_referral`** — boolean. Cost: small. Leakage: low. Drift: low.

  ### 6. Email and Lifecycle Engagement
  How the user has engaged with onboarding emails.
  - **`onboarding_email_open_count_d3`** — emails opened in days 1–3. Cost: small. Leakage: low. Drift: medium. Notes: open-tracking is increasingly noisy due to email-client privacy proxies (Apple Mail). Falling reliability over 2024.
  - **`onboarding_email_click_count_d3`** — clicks. Cost: small. Leakage: low. Drift: low. Notes: clicks are more reliable than opens.

  ### 7. Support / Friction Signals
  Has the user hit problems?
  - **`support_chat_count_d3`** — chats initiated. Cost: small. Leakage: medium — chat content sometimes mentions intent ("just looking around"). Limit to count, not content.
  - **`error_event_count_d3`** — product error events fired. Cost: medium (depends on event instrumentation). Leakage: low. Drift: medium.

  ### 8. Comparison to Peers
  How does this user compare to similar users at day 3?
  - **`session_count_pctile_among_role`** — user's day-3 session count as a percentile among trial users with the same role bucket in the last 90 days. Cost: medium (requires a rolling reference distribution). Leakage: low. Drift: medium. Notes: re-baselines the user against their peer group — often higher signal than absolute counts.

  ## Features to Avoid
  - **Day 4–14 events.** Anything past the day-3 cutoff is leakage. This sounds obvious but is the most common mistake — particularly for trial behaviors logged with a delay.
  - **`is_paid_today`** or any feature derived from billing events. Trial conversion is the label; any billing signal is the label restated.
  - **Email body / content topic embeddings.** Marketing sends different content to user segments; embedding the email content can encode the segment, partially leaking the team's targeting decision.
  - **Country at-the-IP-level.** Fairness and constraint review pending; defer until that decision is made.
  - **Free-text role string (raw).** Drift is high (new entries appear monthly), and the bucketed version captures most signal.

  ## Sequencing Recommendation
  1. **First pass:** activation milestones (Family 1), usage intensity (Family 2), basic firmographic (Family 4). These are cheap and capture most of the signal in trial-conversion problems.
  2. **Second pass:** trend / trajectory (Family 3) and acquisition source (Family 5). Both add modest lift.
  3. **Add only if needed:** email engagement (Family 6) — fragile data; peer-percentile comparison (Family 8) — engineering cost is real, defer until first-pass model plateaus.
  4. **Skip for v1:** support / friction (Family 7) — instrumentation may be incomplete; revisit if model needs more lift after first two passes.

  ## Open Questions for the Data Pipeline
  1. Is `activation_steps_completed_d3` available as an event-store query or does it need a derived view? Building the view is a one-time medium-cost step.
  2. What's the data freshness lag at end of day 3? If events take >2h to land in the warehouse, the day-3 cutoff has to be late enough to capture them.
  3. Is `landing_page_type` already bucketed or is the raw URL the only available column? Bucketing logic should live in the staging layer.
  4. Has the legal/fairness review on `country` happened? If country is permitted, add it to Family 4; if not, exclude entirely (don't use as proxy).
tips:
  - "Always pin the as-of cutoff explicitly. Half of feature engineering bugs are 'this feature included data from after the prediction time.'"
  - "Brainstorm wide first, prune in review. A list of 40 candidates ranked by cost and risk is far more useful than 10 you self-edited down to."
  - "Mark drift risk for every feature. UTM and email-open features are notorious for shifting under your model — flagging them up front saves a deployment fire later."
  - "Resist features that look high-signal because they're correlated with the action that produces the label. Support-chat content is the classic case."
  - "Sequence cheap, high-information features first. The first 5–8 features usually capture 70%+ of the model's lift; extra families pay diminishing returns."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - ml-model-experiment-plan
  - churn-prediction-framing
  - ml-model-card
tags:
  - machine-learning
  - feature-engineering
  - data-science
  - modeling
---
