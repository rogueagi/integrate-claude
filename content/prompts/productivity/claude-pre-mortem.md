---
title: "Claude pre-mortem on a planned project or decision"
slug: claude-pre-mortem
function: productivity
role: decision-making
description: "Run a structured pre-mortem on a plan you are about to commit to. Surface failure modes, weight likelihood and impact, then propose specific mitigations."
useCase: "Use this prompt before launching a project, signing a vendor, or making a hire — any decision where the cost of failure is high enough that you want to imagine the post-mortem before living it. The XML scaffolding forces Claude to actually generate distinct failure modes rather than vague risk bullets."
prompt: |
  You are a seasoned operator running a pre-mortem on a plan that has already been approved. The goal is not to kill the plan — it is to surface the most likely ways it fails so the team can mitigate them in advance.

  <context>
  Plan or decision: {{plan}}
  Owner: {{owner}}
  Time horizon: {{time_horizon}}
  Definition of success: {{success_criteria}}
  What could go wrong (the user's current intuition): {{known_risks}}
  </context>

  <task>
  Imagine it is {{time_horizon}} from today and the plan has clearly failed. Work backwards.

  1. Generate 8 to 12 distinct failure modes. Span at least four categories: execution, market, team, and external. Do not duplicate by rephrasing.
  2. For each failure mode, score:
     - Likelihood (1 to 5)
     - Impact if it happens (1 to 5)
     - Detectability before it bites (1 to 5, where 5 = will be obvious early)
  3. Rank the failure modes by Likelihood times Impact divided by Detectability. The highest scores are your priority risks.
  4. For the top 5 risks, propose one specific, testable mitigation each — something the owner can put on a calendar or a checklist this week.
  </task>

  <output_format>
  Return a markdown table for steps 1 to 3, then a numbered list for the top 5 mitigations.
  </output_format>

  <constraints>
  - If a risk is generic ("team gets distracted"), make it concrete ("Q3 hiring backfill pulls the lead engineer off this project for 4+ weeks").
  - If you do not have enough information about the plan to score a risk credibly, say so and ask one clarifying question rather than inventing.
  - Do not include risks below 6 on the combined score. Tight is better than long.
  </constraints>
variables:
  - "{{plan}}"
  - "{{owner}}"
  - "{{time_horizon}}"
  - "{{success_criteria}}"
  - "{{known_risks}}"
exampleInput: |
  plan: Launch a self-serve tier of our B2B product in 90 days, targeting solo operators and 2-5 person teams.
  owner: Head of Product
  time_horizon: 6 months
  success_criteria: 500 self-serve signups, 8% convert to paid, CAC payback under 4 months
  known_risks: pricing might be wrong; engineering capacity is tight; sales team may resist
exampleOutput: |
  | # | Failure mode | Cat. | L | I | D | Score |
  |---|---|---|---|---|---|---|
  | 1 | Self-serve tier cannibalizes mid-market sales motion before PLG flywheel takes hold | Market | 4 | 5 | 2 | 10.0 |
  | 2 | Engineering capacity gets pulled to enterprise reliability fires, slipping launch by 6+ weeks | Execution | 4 | 4 | 4 | 4.0 |
  | 3 | Solo-operator ICP churns at 15%+ monthly because product was built for teams | Market | 3 | 5 | 3 | 5.0 |
  | 4 | Pricing is set without willingness-to-pay research, lands either too low (margin) or too high (conversion) | Execution | 4 | 4 | 3 | 5.3 |
  | 5 | Support volume from low-ACV self-serve users overwhelms the team, degrading enterprise CSAT | Execution | 4 | 3 | 2 | 6.0 |
  | 6 | Sales reps actively steer prospects away from self-serve to protect commission | Team | 3 | 4 | 4 | 3.0 |
  ...

  Top 5 mitigations:
  1. Cannibalization: Add a hard ICP gate (company size, use case) on the signup flow for the first 60 days. Review weekly with sales.
  2. Pricing: Run 30 willingness-to-pay interviews in weeks 1-3, anchor pricing on outcomes not seats.
  3. Support load: Stand up a self-serve-only support queue with deflection-first triage before launch day.
  4. Cannibalization (sales comp): Pre-decide a comp adjustment so reps are neutral on which path a deal takes.
  5. Capacity: Freeze enterprise feature scope for the launch quarter; publish the freeze to sales in writing.
tips:
  - "The detectability score is what makes this version sharper than the typical 'list of risks' pre-mortem — risks you cannot detect early are the truly dangerous ones, and the formula surfaces them."
  - "Force category coverage in the prompt. Without it, Claude will generate eight versions of 'execution risk' and miss market and team failure modes entirely."
  - "Run this with the team after Claude generates the draft. Use Claude's list as a starting point, then have humans add risks they would never put in writing."
  - "If Claude scores everything 4 or 5, push back: ask it to re-score using the actual base rate of similar projects failing this way."
  - "Save the output as a decision artifact. Six months later, compare actual failures against the predicted list — it is the fastest way to calibrate your risk intuition."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - inverse-thinking
  - second-order-thinking
  - five-whys-root-cause
tags:
  - framework
  - methodology
  - decision-making
  - risk
  - pre-mortem
---
