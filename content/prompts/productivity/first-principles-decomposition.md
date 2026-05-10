---
title: "First-principles decomposition of a problem"
slug: first-principles-decomposition
function: productivity
role: decision-making
description: "Strip a problem down to its load-bearing assumptions, then rebuild from atoms. Forces Claude to separate what is true from what is convention."
useCase: "Use this when you suspect the standard answer to a problem is just the inherited one — pricing, org structure, a recurring process, a product approach. The XML structure separates 'what everyone believes' from 'what is actually true,' which is where first-principles thinking usually breaks down in practice."
prompt: |
  You are reasoning from first principles in the spirit of physics: what do we actually know is true, and what have we just inherited as convention?

  <context>
  Problem or domain: {{problem}}
  Current standard approach: {{standard_approach}}
  Why the user is questioning it: {{trigger}}
  </context>

  <task>
  Step 1 — List the assumptions.
  Enumerate every assumption baked into the standard approach. Aim for 10 to 15. Include the obvious ones, especially those.

  Step 2 — Classify each assumption.
  For each, label it as:
  - PHYSICAL (constrained by physics, math, or biology — cannot be changed)
  - ECONOMIC (true given current cost structures — could change if costs change)
  - REGULATORY (true given current law — could change)
  - CONVENTIONAL (true because everyone does it this way — no real reason)
  - PSYCHOLOGICAL (true because of how humans behave at scale)

  Step 3 — Identify the atoms.
  After removing all CONVENTIONAL assumptions, what is left? State the irreducible truths of the problem in 3 to 6 bullets.

  Step 4 — Rebuild.
  Starting only from the atoms, propose 2 to 3 designs that solve the original problem. At least one design must look unfamiliar relative to {{standard_approach}}.
  </task>

  <output_format>
  ## Assumptions (with classifications)
  ## Atoms (irreducible truths)
  ## Rebuilt designs
  ## Which atom, if it changed, would invalidate every design above?
  </output_format>

  <constraints>
  If you find yourself classifying every assumption as PHYSICAL, you are anchoring on the standard approach. Re-examine.
  If you cannot identify any CONVENTIONAL assumptions, push harder — the goal of this exercise is to find them.
  Do not invent technical claims. If you are not sure whether something is physical or conventional, mark it UNCERTAIN and flag it.
  </constraints>
variables:
  - "{{problem}}"
  - "{{standard_approach}}"
  - "{{trigger}}"
exampleInput: |
  problem: How should our 40-person SaaS company structure its weekly all-hands?
  standard_approach: 60-minute Monday all-hands with CEO update, department updates, then Q&A
  trigger: Engagement is dropping; the same 4 people ask all the questions; updates feel performative
exampleOutput: |
  ## Assumptions
  1. The all-hands needs to be live (CONVENTIONAL)
  2. It needs to be weekly (CONVENTIONAL)
  3. Every department should report (CONVENTIONAL)
  4. The CEO opens (CONVENTIONAL)
  5. Q&A surfaces real questions (PSYCHOLOGICAL — false at scale; status dynamics suppress real questions)
  6. People want context on the company (PSYCHOLOGICAL — true)
  7. People want to feel heard (PSYCHOLOGICAL — true)
  8. Synchronous attention is the most efficient way to share information (CONVENTIONAL — usually false vs. async)
  9. 60 minutes is the right length (CONVENTIONAL)
  ...

  ## Atoms
  - Employees need shared context on direction and priorities to make good local decisions
  - People want to feel that leadership knows what is happening on the ground
  - Trust is built by leaders engaging with hard questions, not soft ones
  - Synchronous time is the team's most expensive shared resource

  ## Rebuilt designs
  1. Weekly async written CEO note + monthly 30-minute live AMA with anonymous-question priority queue
  2. Bi-weekly 25-minute live, format fixed: 5-min priority update, 20-min Q&A only on pre-submitted questions ranked by upvote
  3. Monthly 90-minute "show the work" all-hands where two teams demo, no department status updates

  ## Critical atom
  If "trust is built by engaging hard questions" is wrong (e.g., team prefers polished comms), every design above is wrong.
tips:
  - "The classification step is what separates this from the typical 'first principles' prompt — without forcing a label per assumption, models just rephrase the standard approach in different words."
  - "Watch the CONVENTIONAL bucket. If it has fewer than 3 entries, Claude is anchoring; push back and ask 'what would a smart person from a different industry change first?'"
  - "Step 4 is where the real value is. If the rebuilt designs all look like the standard approach, the atoms are wrong — go back to step 3."
  - "Pair this with claude-pre-mortem on the rebuilt design. First principles gets you novel; pre-mortem keeps you alive."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - claude-pre-mortem
  - mece-breakdown
  - claude-tree-of-thoughts
tags:
  - framework
  - methodology
  - first-principles
  - reasoning
  - decision-making
---
