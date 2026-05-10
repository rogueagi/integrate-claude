---
title: "Inverse thinking — how would this fail?"
slug: inverse-thinking
function: productivity
role: decision-making
description: "Invert the goal. Instead of asking how to succeed, ask how to guarantee failure — then avoid those paths. Forces Claude to map the failure surface, not just the success path."
useCase: "Use this when a plan looks too clean. The success path is always shorter than the failure surface, and inversion is the cheapest way to find the failure paths you would otherwise discover the hard way. Most useful for high-stakes single-shot decisions."
prompt: |
  You are inverting a goal to find its failure surface. The principle: if you can clearly enumerate the ways to fail, avoiding them is often easier than chasing success directly.

  <context>
  Goal: {{goal}}
  Owner: {{owner}}
  Why this goal matters: {{stakes}}
  What success looks like: {{success_definition}}
  </context>

  <task>
  Step 1 — Invert.
  Instead of "how do we achieve {{goal}}?", answer: "what would I have to do to guarantee {{goal}} fails?" Generate 10 to 15 distinct failure-causing actions or non-actions. Be specific and almost cynical — what would a saboteur do?

  Step 2 — Honest mirror.
  For each failure-causing action, ask: is the owner currently doing some version of this, even mildly? Mark each:
  - DOING: yes, currently doing this
  - DRIFTING: not doing it, but trending toward it
  - SAFE: clearly not doing it
  Include a one-sentence rationale per item.

  Step 3 — Concentrate.
  Of the items marked DOING or DRIFTING, which 3 are most dangerous? Why?

  Step 4 — Negate.
  For each of the top 3, write the inverse: the specific behavior that would clearly avoid the failure. This becomes a rule the owner can adopt.
  </task>

  <output_format>
  ## Ways to guarantee failure
  ## Honest mirror (table)
  ## Top 3 dangers
  ## Rules to adopt
  </output_format>

  <constraints>
  - Step 1 should be uncomfortable. If the failure-causing actions feel polite, push harder. Real saboteurs are blunt.
  - In step 2, do not flatter. If you do not have evidence either way, mark UNKNOWN and ask one question rather than guessing.
  - Rules in step 4 must be observable behaviors, not aspirations. "Decide faster" is not a rule. "Resolve any open decision older than 7 days at Friday review" is.
  </constraints>
variables:
  - "{{goal}}"
  - "{{owner}}"
  - "{{stakes}}"
  - "{{success_definition}}"
exampleInput: |
  goal: Hire a great VP of Engineering in the next 90 days
  owner: CEO of a Series A startup, 28 employees
  stakes: Current head of eng is overloaded; missed delivery on flagship feature already cost a key customer
  success_definition: Signed offer with someone who has scaled a 20-100 person eng org and has cultural alignment with the team
exampleOutput: |
  ## Ways to guarantee failure
  1. Run the search yourself with no recruiter, calibration, or pipeline goal
  2. Define the role only by your current pain, not the next 18 months
  3. Settle for "smart and available" because the search is dragging
  4. Avoid hard questions in interviews because the candidate seems senior
  5. Skip backchannel references on finalists
  6. Negotiate compensation on hope rather than data
  7. Onboard them with no 30-60-90 plan
  8. Let the existing head of eng informally veto without being part of the decision
  ...

  ## Honest mirror
  | Failure action | Status | Why |
  |---|---|---|
  | Run search yourself with no recruiter | DOING | No retained recruiter engaged; CEO is sourcing solo |
  | Define role by current pain | DRIFTING | JD reads as "fix delivery now," not 18-month leader profile |
  | Settle on "smart and available" | DRIFTING | Pipeline is thin; only 2 finalists in week 6 |
  | Skip backchannels | UNKNOWN | Need to confirm |
  | No 30-60-90 plan | DRIFTING | None drafted yet |

  ## Top 3 dangers
  1. Running the search solo — kills pipeline depth, almost guarantees settling
  2. JD anchored on current pain — recruits a firefighter, not a leader
  3. No 30-60-90 — almost guarantees a 6-month exit

  ## Rules to adopt
  1. Engage a retained recruiter or VP-of-Eng-search advisor by Friday. Calibration call within 7 days.
  2. Rewrite JD with two sections: "first 90 days" and "next 18 months." If the first section dominates, the search will produce a manager, not a leader.
  3. Block 4 hours next week to draft the 30-60-90 with the exiting head of eng before any final round.
tips:
  - "The 'honest mirror' step is what separates this from the typical inversion exercise — without it, the failure list stays abstract and never lands. Ask Claude to be diagnostic, not just generative."
  - "If the saboteur list feels too aggressive, that is the point. Inversion only works when you give Claude permission to be uncharitable about the current path."
  - "Pair with claude-pre-mortem for big decisions. Inversion finds the things the owner is already doing wrong; pre-mortem finds the things that could go wrong even if execution is perfect."
  - "Save the 'rules to adopt' as a check-in document. Two weeks later, ask Claude to re-run step 2 only — measure drift."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - claude-pre-mortem
  - devils-advocate
  - second-order-thinking
tags:
  - framework
  - methodology
  - inversion
  - decision-making
  - reasoning
---
