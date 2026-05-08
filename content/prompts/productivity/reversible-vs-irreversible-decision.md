---
title: "Frame a decision as reversible (Type 2) or irreversible (Type 1)"
slug: reversible-vs-irreversible-decision
function: productivity
role: decision-making
description: "Determine whether a decision is reversible (Type 2 — make it fast) or irreversible (Type 1 — slow down) so you spend the right amount of deliberation."
useCase: "Use this when you're agonizing over a decision and don't know if you should be agonizing. Most people over-deliberate Type 2 decisions and under-deliberate Type 1 ones. This prompt sorts it."
prompt: |
  You are helping me classify a decision as Type 1 (irreversible / one-way door) or Type 2 (reversible / two-way door), then advising on how much time to spend.

  Decision I'm facing: {{decision}}
  Context: {{context}}
  Stakes if it goes wrong: {{stakes_if_wrong}}
  Stakes if I delay: {{stakes_of_delay}}
  Why I think it might be hard to reverse (if I do): {{reversal_difficulty}}

  Run this analysis:

  1. CLASSIFICATION — Type 1, Type 2, or mixed (some elements of each). Be specific. Many decisions are mixed and people misjudge them in either direction.
  2. EVIDENCE FOR / AGAINST EACH TYPE — list the specific factors that make this reversible or not. Cost to reverse, time cost, social/political cost, opportunity cost.
  3. HOW MUCH TIME I SHOULD SPEND DELIBERATING — concrete (e.g., "an hour", "a day", "two weeks of structured analysis"). Most people deliberate too long on Type 2; correct that.
  4. WHAT I'D LOSE BY DELAYING — be honest about the cost of waiting; sometimes the slow decision IS the wrong decision.
  5. THE 70% RULE CHECK — if you only need ~70% of the information you wish you had (Bezos' rule for Type 2), do you already have it? If yes, decide.
  6. STRESS TEST — name the worst plausible outcome. Is it actually unrecoverable, or just embarrassing/expensive but recoverable?
  7. RECOMMENDATION — decide now / decide by [specific date] / gather these specific 2-3 inputs and then decide. Be prescriptive.

  Be direct. If I'm agonizing over a Type 2, say so plainly.
variables:
  - "{{decision}}"
  - "{{context}}"
  - "{{stakes_if_wrong}}"
  - "{{stakes_of_delay}}"
  - "{{reversal_difficulty}}"
exampleInput: |
  decision: Whether to switch our team's project management tool from Asana to Linear
  context: 12-person product+eng team; been on Asana 2 years; team is split — eng wants Linear, design + PM are neutral, ops admin doesn't want to migrate again
  stakes_if_wrong: lost data from migration, productivity dip during switch, frustration if people hate Linear
  stakes_of_delay: nothing immediate; the eng team will keep grumbling
  reversal_difficulty: switching back to Asana would be possible but feel like a public reversal; we'd lose 3 months of historical data either direction
exampleOutput: |
  CLASSIFICATION
  Type 2 (reversible) — but with a Type 1 wrapper around the social cost. The tool itself is fully replaceable; the leadership credibility cost of switching twice is the harder-to-reverse element.

  EVIDENCE FOR / AGAINST EACH TYPE
  Reversible:
  - Both tools have export/import functionality
  - 12 people is small enough to migrate again if needed
  - No customer-facing impact
  - Historical data already aging (3 months loss is annoying but not catastrophic)
  Less reversible:
  - Reversing the decision damages trust in your decision-making more than the decision itself
  - Migration fatigue is real — people will resist a third tool change
  - If you switch and 30% of the team hates it, you've created a political problem on top of a tooling problem

  HOW MUCH TIME YOU SHOULD SPEND
  At most one week. You're treating this like a Type 1 decision (which is why it's been an open question) when the actual underlying decision is Type 2. The political cost is making it FEEL bigger.

  WHAT YOU'D LOSE BY DELAYING
  - Eng team's grumbling compounds — if they're "right" and you don't act, it erodes their trust in your responsiveness
  - The longer you wait, the more sunk cost in Asana feels real
  - Decision fatigue — open decisions are tax on your attention

  70% RULE CHECK
  Do you have 70% of the info you need? Probably yes. You know:
  - What each tool does (and Linear is well-known)
  - Who's pro/con on your team
  - Migration is doable
  What you don't know is whether design + PM (currently neutral) will actively dislike Linear post-migration. That's a real gap, but it's only knowable AFTER the switch — no amount of deliberation gets it.

  STRESS TEST
  Worst plausible outcome: you switch, design and PM hate it, eng is happier but the team is split, productivity dips for 6 weeks, and you switch back in 4 months. Embarrassing, expensive, recoverable. Not unrecoverable.

  RECOMMENDATION
  Decide by Friday next week. Specifically:
  1. This week: 30-minute conversation with the ops admin (the only blocker) — surface what they actually fear; usually it's "I'll have to do all the work" and you can solve that.
  2. Run a 1-day Linear trial with 3 people from across roles — not eng-only.
  3. Decide Friday. If switching, set a 6-week post-migration check-in to evaluate. If not, kill the conversation cleanly so the eng team has closure.

  Don't keep this open another month. The cost of the open question is now larger than the cost of being wrong.
tips:
  - "Most decisions are Type 2 misclassified as Type 1. The agony is the symptom — if it's been open for weeks, classify it."
  - "Type 1 decisions deserve real time. Hiring, firing, public commitments, big architectural decisions. Don't speed-run these."
  - "The 70% rule is a forcing function. If you've crossed 70% information and you're still deliberating, you're stalling, not deciding."
  - "When the worst-case is 'embarrassing but recoverable,' it's Type 2. Embarrassment is not the same as disaster — don't conflate them."
  - "Set a decision deadline in your calendar. Decisions without deadlines drift forever and become decisions by default."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - decision-options-expansion
  - pre-mortem-prompt
  - trusted-advisor-simulation
tags:
  - decision-making
  - frameworks
  - thinking
  - strategy
  - bezos
---
