---
title: "What would the best version of this be?"
slug: what-would-the-best-version-of-this-be
function: executive
role: strategy
description: "Critique a current plan by imagining the best possible version, then map the gaps so the team knows where to invest more thinking."
useCase: "Use this on a plan that looks adequate but you suspect could be much better with another pass. The structure forces Claude to construct an actual best-case version rather than offering generic 'how to improve' advice, then surface the specific gaps."
prompt: |
  You are doing a "best-version" analysis on a current plan. The point is not to praise or critique the plan in the abstract — it is to construct what the best version of this plan would actually look like, then identify the specific gaps between current and best.

  <context>
  Current plan: {{plan}}
  Owner: {{owner}}
  Constraints that are real (cannot be relaxed): {{hard_constraints}}
  Constraints that look real but might not be: {{soft_constraints}}
  Definition of "good": {{success_criteria}}
  </context>

  <task>
  Step 1 — Read the current plan back in your own words.
  3 to 5 sentences capturing what the plan actually is, including any commitments and assumptions.

  Step 2 — Construct the best-version.
  Imagine the plan as it would exist if it had been worked on by the best team in the field with one more month of thinking and zero ego. Write it out — same format as the current plan, but reflecting what excellent looks like for {{success_criteria}}. Honor {{hard_constraints}}; treat {{soft_constraints}} as challengeable.

  Step 3 — Gap analysis.
  Compare the current plan to the best-version. List 5 to 8 specific gaps. For each gap:
  - What the current plan does
  - What the best-version does
  - Why the difference matters
  - Cost to close the gap (low / medium / high)
  - Confidence the gap is real (low / medium / high)

  Step 4 — Highest-leverage moves.
  Pick the 2 to 3 gaps where closing the gap has the highest ratio of impact to cost. Recommend specific actions to close them in the next 2 weeks.

  Step 5 — Honesty pass.
  Was there any soft_constraint you left in place that you would have removed if it were challenged? Name it. The user can then decide whether to push.
  </task>

  <output_format>
  ## Current plan in summary
  ## The best-version
  ## Gap analysis (table)
  ## Highest-leverage moves
  ## Soft constraints worth challenging
  </output_format>

  <constraints>
  - The best-version must be concrete, not aspirational. "World-class go-to-market" is not a plan; "two design partners signed by week 3, weekly customer council from week 5" is.
  - Do not fantasize. The best-version must respect {{hard_constraints}} (budget, team, timing). The point is excellence within reality.
  - If the current plan is already very strong, say so and produce a thinner gap analysis. Do not invent gaps.
  - Cost to close must be honest. If a gap is "high cost," the recommendation should reflect that, not pretend it is easy.
  </constraints>
variables:
  - "{{plan}}"
  - "{{owner}}"
  - "{{hard_constraints}}"
  - "{{soft_constraints}}"
  - "{{success_criteria}}"
exampleInput: |
  plan: Q4 launch of our new analytics module: 6-week build, 2-week beta with 5 customers, public launch with blog post, sales enablement deck, and a webinar
  owner: VP Product at a 80-person B2B SaaS company
  hard_constraints: Cannot extend timeline; team of 3 engineers + 1 PM + 1 designer
  soft_constraints: Marketing has a "no-discount-at-launch" policy; sales wants no usage limits in beta
  success_criteria: 25% of installed base activates in first 60 days; 3 case-study-quality deployments by day 90
exampleOutput: |
  ## Current plan in summary
  Six-week build, two-week beta with five customers, public launch with blog, deck, webinar. Beta is closed; launch is broad. No usage limits in beta. Success defined by activation and case-study deployments.

  ## The best-version
  Six-week build, but week 5-6 includes a "customer-in-residence" — one beta customer embedded daily with the team. Beta is 8 customers, selected for shape (2 power users, 3 typical, 3 edge cases), not for relationship. Beta runs week 7-9, three weeks not two, with a structured weekly call and a deployment scorecard. Public launch is staged: week 10 to existing customers with a clear how-to, week 12 broader after the first 3 case studies are real. Sales enablement materials are built FROM the beta customers' actual workflows, not generically. Webinar features 2 beta customers, not the company.

  ## Gap analysis
  | Gap | Current | Best-version | Matters because | Cost | Confidence |
  |---|---|---|---|---|---|
  | Beta customer selection | 5 by relationship | 8 by shape | Wrong-shape betas miss real failure modes | Low | High |
  | Beta length | 2 weeks | 3 weeks | Activation and adoption signals require ≥2 weeks of usage | Medium (timeline pressure) | High |
  | Customer-in-residence | None | 1 embedded | Closes the loop on real workflow gaps before launch | Low | Medium |
  | Launch staging | Single broad launch | Existing-base first, then broad | Lets the first case studies be real, not invented | Low | High |
  | Enablement materials | Generic | Built from beta customer workflows | Sales talks pattern-match to real customers, not pitches | Medium | High |
  | Webinar voice | Company | Beta customers | Trust transfer; new audience hears from peers | Low | High |
  | "No usage limits in beta" | Honored | Limits to drive engagement signal | Without limits, you cannot tell who is active vs. tire-kicking | Low | Medium |
  | "No discount at launch" | Honored | Use launch credit for first 30 days | Drives activation; creates installed-base flywheel | Low (but marketing pushback) | Medium |

  ## Highest-leverage moves
  1. Reshape the beta customer list this week — replace 2 of the 5 with edge-case customers; add 3 new ones. Cost: 3 days of CS + sales conversation. Closes 1 gap, sharpens 3 others.
  2. Embed one customer for week 5-6. Cost: scheduling. Catches the "wrong workflow" failure mode before launch.
  3. Stage the launch: week 10 to existing base, week 12 broader. Cost: rewriting the comms plan in 2 days. Buys real case studies before the broad launch.

  ## Soft constraints worth challenging
  - "No-discount-at-launch" — a launch credit is not a discount; the marketing team likely has a more nuanced view than the policy implies. Worth a 30-minute conversation.
  - "No usage limits in beta" — the absence of limits costs you the signal you need to identify activation. Sales wants the limits gone; product needs them on.
tips:
  - "Constructing an actual best-version is what makes this stronger than the typical 'how to improve' prompt — without it, models produce generic suggestions that do not compare to a concrete alternative."
  - "Always separate hard and soft constraints. Hard constraints respect reality; soft constraints are where the leverage usually is. The honesty pass at step 5 is the highest-value output for many plans."
  - "If the gap analysis is full of LOW-confidence items, the best-version is wishful. Re-run with a tighter definition of success."
  - "Run this on yourself, too. If the best version of your work week looks much better than your current week, the gaps are concrete actions, not vague aspiration."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - trusted-board-simulation
  - devils-advocate
  - first-principles-decomposition
  - claude-pre-mortem
tags:
  - framework
  - methodology
  - strategy
  - planning
  - critique
---
