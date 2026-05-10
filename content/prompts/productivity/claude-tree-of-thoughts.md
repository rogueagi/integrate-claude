---
title: "Claude tree of thoughts — branch, evaluate, prune"
slug: claude-tree-of-thoughts
function: productivity
role: decision-making
description: "Explore a decision by branching into multiple reasoning paths, scoring each branch on the same criteria, then committing to the strongest one with explicit trade-offs."
useCase: "Use this when there are several plausible directions and the right one is not obvious. The branching structure prevents Claude from anchoring on the first plausible answer, and the explicit scoring prevents the output from becoming a list of options the user still has to choose between."
prompt: |
  You are reasoning by branching: explore multiple paths in parallel, evaluate them on the same criteria, then prune everything but the strongest. Your job is to commit, not to enumerate.

  <context>
  Decision: {{decision}}
  Constraints that matter: {{constraints}}
  Definition of a good outcome: {{success_criteria}}
  Time horizon for the decision to play out: {{horizon}}
  </context>

  <task>
  Step 1 — Branch.
  Generate 4 to 6 distinct paths to address {{decision}}. Paths should differ on a real axis (strategy, sequencing, resourcing, or scope), not just be variations of one approach. Name each path in 5 words or fewer.

  Step 2 — Evaluate.
  Score every path on the same 4 criteria (each 1 to 5):
  - Fit with success_criteria
  - Cost or effort to execute
  - Reversibility (5 = easy to undo)
  - Information value (5 = whichever way it goes, you learn the most)

  Step 3 — Stress-test.
  For each of the top 2 paths, name:
  - The strongest argument against
  - The single condition under which this path is clearly wrong

  Step 4 — Commit.
  Recommend one path. State:
  - Why it wins on these criteria
  - What you would have to believe for the second-place path to be better
  - The first concrete step the owner can take in the next 7 days
  </task>

  <output_format>
  ## Branches (named)
  ## Evaluation table
  ## Stress test on top 2
  ## Recommendation (with the disconfirming belief)
  ## Step in the next 7 days
  </output_format>

  <constraints>
  - Branches must be meaningfully distinct. If two branches differ only in tactics, merge them.
  - Do not refuse to commit. If information is genuinely missing, name the one piece of information that would resolve the choice rather than hedging across all branches.
  - The "what you would have to believe" sentence is the most important output. Force yourself to write it cleanly.
  </constraints>
variables:
  - "{{decision}}"
  - "{{constraints}}"
  - "{{success_criteria}}"
  - "{{horizon}}"
exampleInput: |
  decision: How should we go to market with our new AI feature in our HR SaaS product?
  constraints: 6-person product team; existing 200-customer base; competitor launched a similar feature 60 days ago
  success_criteria: 30% of installed base activates within 90 days; positive impact on renewal rate
  horizon: 6 months
exampleOutput: |
  ## Branches
  1. Default-on for all customers
  2. Opt-in beta with 20 design partners
  3. Bundle into top-tier plan only
  4. Free standalone product as top-of-funnel
  5. Co-launch with one customer case study

  ## Evaluation table
  | Branch | Fit | Cost | Reversibility | Info value | Total |
  |---|---|---|---|---|---|
  | 1 | 4 | 2 | 2 | 3 | 11 |
  | 2 | 3 | 4 | 5 | 5 | 17 |
  | 3 | 3 | 3 | 4 | 3 | 13 |
  | 4 | 2 | 2 | 3 | 4 | 11 |
  | 5 | 4 | 4 | 4 | 4 | 16 |

  ## Stress test
  - Branch 2: strongest counterargument is that 60 days behind a competitor means optionality has a cost; wrong if churn risk in Q4 is already moving.
  - Branch 5: wrong if the chosen customer is unrepresentative — the case study leads the rest of the base in the wrong direction.

  ## Recommendation — Branch 2
  Beta with 20 design partners ranks highest on information value with low cost. For Branch 5 to win, you would have to believe the renewal-rate signal in success_criteria depends more on social proof than on activation depth — possible, but unproven.

  ## Step in the next 7 days
  Send a short note to 30 candidate design partners; aim for 20 confirmed by end of next week. Prep a one-page activation playbook before the first install.
tips:
  - "The forced commit at step 4 is what makes this stronger than the typical 'option analysis' prompt — without it, you get a balanced menu and still have to decide alone."
  - "If two branches tie on the score, the tiebreaker should be information value. The path that teaches you the most is almost always right under uncertainty."
  - "Watch for branches that are actually the same strategy in different packaging. Ask Claude to name the cutting axis between every pair — if the axis is weak, prune."
  - "The 'what you would have to believe' sentence often surfaces a question the team has not actually asked yet. That question is more valuable than the recommendation itself."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - first-principles-decomposition
  - mece-breakdown
  - claude-pre-mortem
  - second-order-thinking
tags:
  - framework
  - methodology
  - reasoning
  - decision-making
  - tree-of-thoughts
---
