---
title: "Trusted board simulation — advice from a personal board of mentors"
slug: trusted-board-simulation
function: executive
role: strategy
description: "Simulate the advice of a personal board of mentors with distinct lenses, then synthesize where they agree, where they conflict, and what to do with the conflict."
useCase: "Use this on a hard decision where multiple legitimate viewpoints exist and your own thinking is too inside the situation. The synthesis step prevents the typical 'four-perspectives' output by forcing Claude to surface and adjudicate the disagreements."
prompt: |
  You are simulating a personal board of mentors. Each member has a different lens. Your job is not just to channel them but to surface where they disagree and what the disagreement reveals.

  <context>
  Decision or situation: {{decision}}
  Owner: {{owner}}
  Stakes (what is at risk): {{stakes}}
  Time horizon: {{horizon}}
  </context>

  <board>
  Convene these four mentors. Each one is asked to advise from their lens only — do not let them be balanced individually; balance comes in the synthesis.

  1. The operator: a battle-tested COO who has scaled organizations through chaos. Lens: execution, second-order effects on the team, who actually does the work.
  2. The capital allocator: a senior investor or CFO. Lens: opportunity cost, capital efficiency, what this decision says about how the owner allocates scarce attention and money.
  3. The contrarian peer: someone running a similar org who has made the opposite call recently. Lens: what the prevailing view is missing, where consensus is fragile.
  4. The long-arc thinker: a mentor who has seen industries cycle. Lens: where this decision sits in the longer arc, what the owner will think of this in 5 years.

  Optional 5th: {{custom_mentor}} (only if the user provided one)
  </board>

  <task>
  Step 1 — Each mentor speaks.
  For each mentor, produce a 4 to 6 sentence response in their voice:
  - Their reading of the situation in one sentence
  - The specific advice they would give
  - The question they would push back with
  - A short note on what they think the owner is not seeing

  Step 2 — Map agreement and disagreement.
  Build a table: for each mentor pair, where do they agree, where do they disagree, and is the disagreement on facts, values, or strategy?

  Step 3 — Adjudicate the disagreements.
  Pick the 1 to 2 disagreements that matter most. For each, name what evidence or judgment call would resolve it. Do not pretend the disagreements all dissolve.

  Step 4 — Composite recommendation.
  Synthesize a recommendation that takes the strongest insight from each mentor without averaging them into mush. Where mentors flatly conflict, take a side and say why.

  Step 5 — One question to ask each mentor again.
  After the recommendation, what is the single follow-up question for each mentor that would sharpen the decision further?
  </task>

  <output_format>
  ## Mentor responses (4 sections)
  ## Agreement / disagreement map
  ## Adjudication of key disagreements
  ## Composite recommendation
  ## Follow-up questions
  </output_format>

  <constraints>
  - Do not soften the mentors. The operator is allowed to be blunt. The contrarian is allowed to be unfair. The point is to surface views the owner is too close to see.
  - Do not let mentors all agree. If they do, you have not channeled them faithfully — push the contrarian harder.
  - In the composite recommendation, do not list the mentors and their advice again. Synthesize, then commit.
  - If the user does not have enough context for a mentor to advise meaningfully, that mentor says so explicitly rather than confabulating.
  </constraints>
variables:
  - "{{decision}}"
  - "{{owner}}"
  - "{{stakes}}"
  - "{{horizon}}"
  - "{{custom_mentor}}"
exampleInput: |
  decision: Should I take a Series B term sheet at a flat valuation from our existing lead, or run a process for a higher round that will take 4 months and pull me out of operations?
  owner: CEO of a 60-person B2B SaaS company, $9M ARR, growing 80% YoY
  stakes: 18 months runway at current burn; growth requires 4 net new hires this quarter
  horizon: 12 months
exampleOutput: |
  ## Mentor responses

  **Operator:** A 4-month fundraise at your stage means losing the founder for a quarter. With 4 hires queued and growth still founder-led on the top accounts, the cost is not "lower priced round" — it is one quarter of slipped execution. Take the term sheet, get back to running. Question: are the existing investors offering protective terms you have not modeled? What you are not seeing: the team has been watching you fundraise for two months already; another four will read as drift.

  **Capital allocator:** A flat round at 80% growth is mispriced unless your unit economics have softened. The opportunity cost of 4 months running a process is real, but so is the dilution from accepting a stale price. Question: have you run the math on what the comparable round looks like at fair price minus 4 months of pulling you out? What you are not seeing: the existing lead's flat offer is information about what they think the market will pay you, not just a friendly hand.

  **Contrarian peer:** Most founders take the bird in hand and regret it 9 months later when comps re-rate. The flat term sheet is your insurance, not your only option — a fast process with two warm investors is 6 weeks, not 4 months, and you control the timeline. Question: who in your network already wants to lead, and have you actually asked? What you are not seeing: "we don't have time" is often founder avoidance dressed as discipline.

  **Long-arc thinker:** In 5 years, the difference between flat and a 30% markup will look small if growth continues. What will matter is who is on the cap table and whether they were chosen or defaulted to. Question: do you actually want this lead for the next two rounds? What you are not seeing: this decision sets a tone for how you raise capital for the next decade.

  ## Agreement / disagreement map
  | Pair | Agree on | Disagree on |
  |---|---|---|
  | Operator + Capital | Execution cost is real | Capital allocator pushes harder on dilution math |
  | Operator + Contrarian | — | Operator says 4 months; contrarian says 6 weeks if scoped right |
  | Capital + Long-arc | Quality of investor matters | Long-arc weights story over price |
  | Contrarian + Long-arc | Flat now sets a precedent | Long-arc accepts flat if the lead is right |

  ## Adjudication
  The operator and contrarian disagree on the actual cost of running a process. This is resolvable: list the 5 investors who would credibly take a meeting next week, and time-box to 6 weeks. If you have fewer than 3 warm names, the operator is right; if you have 5+, the contrarian is.

  ## Composite recommendation
  Do not accept the flat term sheet this week. Spend 7 days running the contrarian's test: 5 warm investor conversations. If at least 3 result in real engagement, run a tight 6-week process with the existing offer as a floor. If fewer than 3 engage, take the flat offer with the existing lead and stop the bleeding.

  ## Follow-up questions
  - Operator: which of the 4 hires can you delay one quarter without giving up growth?
  - Capital allocator: at what spread vs. flat does the dilution math actually favor running a process?
  - Contrarian: who specifically would you call first?
  - Long-arc: which of these investors do you not want on the cap table at any price?
tips:
  - "The agreement-disagreement map is what makes this stronger than the typical 'multiple perspectives' prompt — without it, the four voices feel rich but the owner is left to reconcile them. Forcing a synthesis is the deliverable."
  - "Resist the urge to add more mentors. Four lenses force real distinctiveness; six dilutes."
  - "If the contrarian and operator agree, channel the contrarian harder. The point is to surface a view the owner is too close to see."
  - "The 'what you are not seeing' line per mentor is where the highest-value insight usually lives. Make sure each mentor produces one."
  - "Save the output and re-run after the decision plays out. The mentors that turned out to be right are the lenses you have been undervaluing."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - devils-advocate
  - what-would-the-best-version-of-this-be
  - claude-pre-mortem
  - claude-as-skeptical-vc
tags:
  - framework
  - methodology
  - strategy
  - decision-making
  - mentorship
---
