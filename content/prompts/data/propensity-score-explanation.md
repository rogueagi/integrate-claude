---
title: "Explain a propensity score model to a non-technical exec"
slug: propensity-score-explanation
function: data
role: data-science
description: "Explain what a propensity model does, what its score means, and how to use it — for a non-technical executive who will sponsor or rely on the output."
useCase: "Use this prompt when presenting a propensity model (churn risk, conversion likelihood, lead score) to a CFO, CRO, or VP who will fund, sponsor, or trust the output. Strips out jargon while preserving the limits and caveats execs need to act responsibly."
prompt: |
  You are a senior data scientist briefing a non-technical executive on a propensity score model. The exec will use this for funding, sponsorship, or operational decisions — they need enough understanding to act, and enough understanding to know when not to.

  Inputs:
  - Model purpose and the action it informs: {{purpose}}
  - The score's range and meaning: {{score_meaning}}
  - The exec's role and sophistication: {{exec_role}}
  - The decision they need to make from this briefing: {{exec_decision}}
  - Headline performance numbers: {{performance}}
  - Known limitations to disclose: {{limitations}}
  - Time available: {{time_available}} (e.g., "10-minute briefing", "1-page memo")

  Write the explanation. Default format: 1-page memo with optional 5-minute oral version. Adapt to the time available.

  Sections:

  ## What This Model Does (3–4 sentences, no jargon)
  Plain-language description. What it predicts, who acts on it, what the action is. The exec should be able to repeat this back without using statistical terms.

  ## What the Score Means
  - The range (e.g., "0 to 1, with 1 meaning highest risk")
  - The most useful intuition: a 0.85 score means roughly X out of 100 similar customers will Y
  - What the score is NOT: not a guarantee, not a fixed identity, not a customer's "true probability of churn" — it's a model's best estimate based on patterns it has seen
  - When the score is reliable and when it isn't (calibration in plain language)

  ## How We Know It Works
  Performance translated to business terms. Replace AUC and precision with phrasing the exec uses:
  - "Of the top 100 accounts the model flags, about 49 will actually churn within 60 days. Without the model, that number is about 14."
  - Comparison to the prior method
  - Honest framing of the gap between the model and a perfect predictor

  ## Where It Doesn't Work
  Explicit, plain-language list of where the model is unreliable:
  - Segments with weak performance
  - Cases where the score is overconfident
  - Situations the model wasn't trained for (and shouldn't be applied to)
  - Drift risk in everyday terms

  ## What to Do With the Score
  - The intended use: who acts on it, when, and how
  - The most common misuse to avoid (e.g., treating the score as a customer attribute, or applying it to populations the model doesn't cover)
  - The right way to talk about it with the team that uses it

  ## What We're Asking You For
  Translate {{exec_decision}} into a concrete ask with the tradeoffs spelled out. If asking for resources, name the resource. If asking for sponsorship, name what sponsorship looks like.

  Rules:
  - No statistical jargon (probability, calibration, ROC, lift, AUC) without immediate plain-language translation
  - No false certainty
  - No false modesty either — if the model genuinely outperforms the alternative, say so and quantify
  - Use named comparisons (50 out of 100, not 0.49 precision)

  Tone: confident, plainspoken, respectful of the exec's time. Treat them as a decision-maker, not a statistics class.
variables:
  - "{{purpose}}"
  - "{{score_meaning}}"
  - "{{exec_role}}"
  - "{{exec_decision}}"
  - "{{performance}}"
  - "{{limitations}}"
  - "{{time_available}}"
exampleInput: |
  purpose: Identify mid-market accounts at risk of non-renewal 60 days out so CSMs can run save plays.
  score_meaning: Probability between 0 and 1 of non-renewal within 60 days, calibrated to actual rates up to ~0.7 and over-confident above that.
  exec_role: Chief Customer Officer (newly hired, financially sophisticated but not technical)
  exec_decision: Approve continued investment in the model and sponsor the A/B holdout that measures save-play lift
  performance: |
    Precision @ top 10% = 0.49; baseline heuristic was 0.30. Beats prior approach by 19 absolute points.
    Recall @ top 10% = 0.41 (we surface 41% of all eventual non-renewals in the actionable set).
    Calibration well-behaved up to predicted probability 0.7; over-confident above.
    Subgroup gap: EU performance ~8 points lower than US.
  limitations: |
    Doesn't predict M&A-driven outcomes (deliberately excluded).
    Weaker on long-tenure (3+ year) accounts.
    Not validated on data after Dec 2024.
    Calibration unreliable above 0.7.
  time_available: 1-page memo for a 15-minute briefing
exampleOutput: |
  # Briefing: Mid-Market Churn Risk Model

  ## What This Model Does
  Each week, the model looks at our mid-market accounts and ranks them by risk of not renewing in the next 60 days. Customer Success uses the top of that ranked list to decide which accounts to focus save plays on. The model doesn't make decisions — it surfaces the accounts most worth a CSM's attention.

  ## What the Score Means
  Each account gets a number between 0 and 1. A 0.6 score on an account means: of all the mid-market accounts we've seen with patterns like this one over the last few years, about 6 out of 10 didn't renew. It's an estimate based on patterns, not a verdict on any individual customer. Two important things to keep in mind:

  - The score is reliable in the middle range (roughly 0.1 to 0.7). For accounts the model rates higher than 0.7, the actual non-renewal rate is somewhat lower than the score suggests — so we treat scores in that range as "very high risk," not as literal probabilities.
  - The score reflects a snapshot. A customer's score next week depends on what they do this week — it's not a label they carry around.

  ## How We Know It Works
  We tested the model on a recent half-year of accounts that the model had never seen. Of the top 100 accounts the model flagged as highest risk, about 49 actually didn't renew. Under the previous approach (a simple rule based on a 30-day usage drop), about 30 of those top 100 would have been actual non-renewals. So the model surfaces ~19 more accurate flags per 100 — roughly a 60% improvement over the rule we were using. We also catch about 41% of all eventual non-renewals inside the top 10% of accounts, which is a strong yield given CSM capacity.

  Worth being honest about: the model is not a perfect predictor, and won't be. About half the accounts in the top 100 will renew, sometimes for reasons no model can see (a champion's good week, a budget approval). The value is in concentrating CSM time on the right group, not in eliminating uncertainty.

  ## Where It Doesn't Work
  - **Acquisition-driven non-renewals.** When a parent company is acquired, the customer often leaves regardless of any save play. We deliberately excluded these from training, so the model is silent on them.
  - **Long-tenure accounts (3+ years).** These accounts churn rarely and for idiosyncratic reasons; the model is meaningfully weaker here. CSMs should treat the score as one signal, not the signal, for these accounts.
  - **EU accounts.** Performance is about 8 points lower than US accounts, likely because EU represents a smaller share of training data. Worth pairing with regional CSM judgment.
  - **Drift.** The model was last trained on data through end of 2024. Big product changes (e.g., a feature that changes how often customers log in) can quietly make the model less reliable. We monitor for this and retrain quarterly.

  ## What to Do With the Score
  - **Use it as a prioritization aid for the weekly save-play meeting.** It tells the CSM team where to look first, not who to give up on.
  - **Don't share it with customers or with frontline reps as a "risk grade."** It's an internal allocation tool, not a customer-facing label.
  - **Don't apply it to SMB accounts, trials, or non-US/EU/Canada geographies.** The model wasn't trained on those populations and we don't know how it behaves there.

  ## What We're Asking You For
  Two things:

  1. **Sponsor a 90-day A/B holdout.** To measure whether save plays actually reduce churn, we need to randomly hold back ~10% of high-risk accounts from receiving a save play. This feels uncomfortable — we'd be deliberately not acting on customers we know are at risk — but it's the only way to know whether the save plays move the needle. Without this, we'll continue running plays on hunch.

  2. **Approve continued investment** at current scope: quarterly retrain plus a planned v1.1 in Q3 to close the EU gap. Estimated cost: 0.5 FTE on the data science team and modest infrastructure. Expected return depends on the A/B above; a 3-point reduction in mid-market non-renewal rate would more than fund the program.
tips:
  - "Replace every statistical term with a counted-out-of-100 phrasing. 'Precision of 0.49' becomes '49 out of the top 100 actually churn.' This is not dumbing down — it's translating to the unit the exec actually thinks in."
  - "Be specific about where the model fails. Execs trust models more when limitations are stated, not less. Hiding limitations creates the bad surprise later."
  - "Tie the ask back to a decision the exec can make in the meeting. 'Continued investment' is too vague; '0.5 FTE plus sponsorship of an A/B holdout' is actionable."
  - "Never let the score be misused as a customer attribute. Frame it as a snapshot and a prioritization aid — not as a label that follows a customer around."
  - "Honest framing of the gap to perfection earns trust. Saying 'about half the top 100 will renew anyway' is not a weakness — it sets the right expectation for what the model is."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - ml-model-card
  - churn-prediction-framing
  - exec-dashboard-narrative
tags:
  - propensity-score
  - executive-communication
  - ml-explanation
  - data-science
---
