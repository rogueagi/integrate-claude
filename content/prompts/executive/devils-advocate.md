---
title: "Devil's advocate — strongest case against a plan, then triage"
slug: devils-advocate
function: executive
role: strategy
description: "Argue the strongest case against a proposed plan, then identify which of those arguments are decisive versus which are just noise."
useCase: "Use this on a plan that has strong internal support but where you suspect groupthink. The triage step prevents the typical 'list of objections' output and forces a verdict on which counterarguments would actually change the decision."
prompt: |
  You are the strongest available critic of the plan below. Your job is to argue against it as if your reputation depends on it — but then sort your own arguments by which ones are actually decisive.

  <context>
  Plan being argued for: {{plan}}
  Why the team is bullish: {{bull_case}}
  Constraints and stakes: {{stakes}}
  Decision deadline: {{deadline}}
  </context>

  <task>
  Step 1 — Argue against, hard.
  Generate the 8 to 12 strongest arguments against {{plan}}. No softballs. Cover at least:
  - Strategic (does this matter at all?)
  - Execution (can the team actually do it?)
  - Market or environment (is the world set up for this to work?)
  - Opportunity cost (what does this displace?)
  - Second-order (what does success look like, and is it actually good?)

  Step 2 — Steelman each.
  For each argument, write the version that an honest insider would have to take seriously. No strawmen. If you cannot steelman it, drop it.

  Step 3 — Triage.
  Sort the arguments into three buckets:
  - DECISIVE: if true, the plan should not proceed as written
  - SERIOUS: should be addressed before launch but does not kill the plan
  - NOISE: technically valid but would not move a serious decision-maker

  Step 4 — Resolve the decisive ones.
  For each DECISIVE argument, name the single piece of information or evidence that would resolve it (either confirming the objection or putting it to bed). The information must be obtainable before {{deadline}}.

  Step 5 — Verdict.
  Give your honest assessment: should the plan proceed, proceed with named modifications, or be rethought? Three sentences max.
  </task>

  <output_format>
  ## Arguments against (steelmanned)
  ## Triage table (Decisive / Serious / Noise)
  ## Decisive: information needed to resolve
  ## Verdict
  </output_format>

  <constraints>
  - Do not pretend to be impartial. You are arguing against. The triage and verdict are where balance returns.
  - Steelman means good faith. If you can only argue against by assuming bad faith on the team's part, drop the argument.
  - "Noise" should not be empty. If everything is decisive, you are not triaging — you are just listing fears.
  - The information needed in step 4 must be specific and obtainable. "More research" is not specific.
  </constraints>
variables:
  - "{{plan}}"
  - "{{bull_case}}"
  - "{{stakes}}"
  - "{{deadline}}"
exampleInput: |
  plan: Acquire a 12-person competitor for $4M cash + earnout, primarily for the engineering team
  bull_case: Their team has rare expertise we'd take 18 months to build organically; the price is below our 6-month hiring cost for equivalent talent
  stakes: Series B SaaS, $30M ARR, 14 months runway pre-deal, post-deal 11 months
  deadline: 3 weeks until LOI expires
exampleOutput: |
  ## Arguments against (steelmanned)
  1. Acquihires fail for cultural reasons more often than financial ones. The acquired team's senior engineers will probably leave within 12 months, taking the expertise with them.
  2. The runway hit (14 to 11 months) puts you in fundraising mode 3 months earlier, into a market that may not be more friendly than today.
  3. "Below our 6-month hiring cost" assumes you would actually hire 12 senior engineers in 6 months. You have not hired 12 senior engineers in any 6-month period in your company's history.
  4. The competitor's expertise is real but specific to their product. Half the value may not transfer to yours.
  5. Earnout structures encourage the acquired team to optimize for their earnout, not your roadmap, for 12 to 24 months.
  6. M&A integration absorbs ~30% of an exec team's bandwidth for two quarters. Your roadmap is not built for that absorption.
  7. The competitor's reason for selling at this price is information you do not have. Asymmetric information cuts against the buyer.
  8. Post-deal cap-table dilution from earnout shares may complicate Series C at terms you have not modeled.

  ## Triage
  | Argument | Bucket |
  |---|---|
  | 1 (cultural retention) | DECISIVE |
  | 2 (runway compression) | DECISIVE |
  | 3 (hiring counterfactual is wrong) | SERIOUS |
  | 4 (expertise transfer) | DECISIVE |
  | 5 (earnout misalignment) | SERIOUS |
  | 6 (integration bandwidth) | SERIOUS |
  | 7 (asymmetric info) | NOISE — applies to all M&A |
  | 8 (cap table) | SERIOUS |

  ## Decisive: information needed
  - 1: Reference calls with three engineers who left a similar acquihire in the last 18 months. Obtainable in 1 week.
  - 2: Cash flow model that puts the post-deal fundraise at 9 months; show the team what that timeline looks like with current metrics. 3 days of CFO time.
  - 4: 2 deep technical interviews with their lead engineers on a problem from your roadmap, scored against existing internal candidates. 1 week.

  ## Verdict
  Do not proceed as written. Run the three resolutions in week 1; if all three come back clean, proceed with a restructured deal that pushes more cash to retention bonuses and reduces the immediate cash hit. If any one comes back ambiguous, walk.
tips:
  - "The triage step is what makes this stronger than the typical 'list of objections' prompt — without it, the team gets 12 reasons to worry and no signal on which 2 actually matter."
  - "Insist on steelmanning. Strawman objections are easy to dismiss in the meeting and the plan ships unchanged. Steelmen are why this is useful."
  - "If everything ends up DECISIVE, you have not triaged. Push: 'imagine the plan proceeds and only one of these is the reason it fails — which one?'"
  - "The 'information to resolve' step is the deliverable. The verdict matters less than the three things you go investigate this week."
  - "Pair with claude-pre-mortem for big bets. Devil's advocate kills bad plans early; pre-mortem hardens the surviving ones."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - claude-pre-mortem
  - inverse-thinking
  - claude-as-skeptical-vc
  - strategic-narrative-test
tags:
  - framework
  - methodology
  - strategy
  - critique
  - decision-making
---
