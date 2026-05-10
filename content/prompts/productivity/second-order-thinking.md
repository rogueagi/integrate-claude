---
title: "Second- and third-order consequences of a decision"
slug: second-order-thinking
function: productivity
role: decision-making
description: "Map the chain of consequences from a proposed action — not just what happens, but what happens because of what happens. Surface incentive shifts, downstream behaviors, and second-order risks."
useCase: "Use this for any decision where the first-order outcome is obvious but the system effects are not — a pricing change, a comp restructure, a policy shift, a public announcement. The forced layering is what most second-order analyses skip."
prompt: |
  You are a systems thinker mapping the cascade of consequences from a proposed action. First-order effects are easy. The risk lives in second and third order.

  <context>
  Proposed action: {{action}}
  Who takes the action: {{actor}}
  Who is affected: {{affected_parties}}
  Stated goal: {{goal}}
  </context>

  <task>
  Build a 3-level consequence tree.

  Level 1 — First-order effects:
  What happens directly and immediately because of {{action}}? List 4 to 6 effects, including ones the actor wants and ones the actor does not want.

  Level 2 — Second-order effects:
  For each level 1 effect, ask: "And then what?" What do the affected parties do in response? How do their incentives shift? What do they tell each other? What do competitors do?

  Level 3 — Third-order effects:
  For the most consequential level 2 effects (top 3 by impact), continue: "And then what?" These are usually the surprising ones — emergent behaviors, equilibrium shifts, reputation effects.

  Then answer:
  - Which third-order effect, if it materialized, would cause the actor to regret the original decision?
  - Which level 2 effect could be detected first as an early signal that the cascade is going wrong?
  </task>

  <output_format>
  Use a nested markdown tree (heading per level). End with the two summary questions answered explicitly.
  </output_format>

  <constraints>
  - Each level must add a new actor's response — if level 2 is just a continuation of level 1, you are not actually doing second-order thinking.
  - Include at least one positive cascade and one negative cascade. Real systems have both.
  - If the action is novel and you cannot ground a third-order effect in plausible behavior, mark it SPECULATIVE rather than asserting it.
  </constraints>
variables:
  - "{{action}}"
  - "{{actor}}"
  - "{{affected_parties}}"
  - "{{goal}}"
exampleInput: |
  action: Cut the standard SaaS contract from annual to month-to-month for all new customers under $50k ACV
  actor: VP of Sales at a mid-market B2B SaaS company
  affected_parties: prospects, existing customers, sales reps, finance, customer success
  goal: Increase win rate on smaller deals by removing the annual commitment objection
exampleOutput: |
  # Level 1 — First order
  - Win rate on sub-$50k deals increases (intended)
  - Time-to-close shortens (intended)
  - ARR contracted-but-not-yet-billed drops (cash flow impact)
  - Existing annual customers ask for the same terms when they renew

  # Level 2 — Second order
  - From level 1.1: Reps now compensated on a stream of monthly subs become reluctant to push for annual on bigger deals (incentive shift)
  - From level 1.3: Finance loses ability to forecast accurately for 9-12 months as cohort behavior is unproven; board updates degrade in confidence
  - From level 1.4: Renewal team faces a wave of downgrade requests; accounts that would have renewed annually now go monthly, increasing churn surface area
  - Competitors observe the move and either match (race to bottom) or position themselves on stability ("you stay annual with us")

  # Level 3 — Third order
  - From the comp shift: Sales culture quietly reorients toward smaller, faster deals; pipeline composition over 12 months tilts down-market by ACV (this is the regret scenario)
  - From the renewal cascade: Net revenue retention drops 4-7 points in the first full renewal cycle; investors flag NRR in the next round
  - From competitor positioning: Brand perception bifurcates — "easy to try" but "less serious"

  ## Most regrettable third-order effect
  Pipeline composition tilts down-market permanently. The win-rate gain on small deals masks a quieter shift: reps stop hunting bigger deals because the comp is easier on monthly. By the time it shows up in ACV trends, the muscle is atrophied.

  ## Earliest detectable signal
  Average new-deal ACV month-over-month. If it drops more than 10% in the first 60 days, the cascade is starting.
tips:
  - "Most second-order analyses stop at 'and then competitors react' — the requirement to specify which actor responds at each level is what forces actual systems thinking."
  - "The 'regrettable third-order effect' question is load-bearing. It is the single output that justifies the whole exercise and gives the decision-maker something to actively monitor."
  - "If the level 3 effects all sound the same, you are over-extrapolating one cascade. Force diversity by mapping different actors at level 2."
  - "Run this in parallel with claude-pre-mortem. Pre-mortem catches execution risk; second-order catches systemic risk. They surface different things."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - claude-pre-mortem
  - inverse-thinking
  - first-principles-decomposition
tags:
  - framework
  - methodology
  - systems-thinking
  - decision-making
  - reasoning
---
