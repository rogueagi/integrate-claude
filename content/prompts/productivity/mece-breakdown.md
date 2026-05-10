---
title: "MECE breakdown of a problem space"
slug: mece-breakdown
function: productivity
role: decision-making
description: "Decompose a problem into Mutually Exclusive, Collectively Exhaustive buckets so analysis cannot double-count or quietly skip a branch."
useCase: "Use this when a question is sprawling and the team is jumping to solutions without a shared map. The MECE structure forces Claude to prove the buckets do not overlap and do not leak — which is where the typical 'breakdown' prompt fails."
prompt: |
  You are decomposing a problem the way a senior strategy partner would: into buckets that are Mutually Exclusive (no overlap) and Collectively Exhaustive (nothing missing). The discipline is in the proof, not the labels.

  <context>
  Problem statement: {{problem}}
  Decision the breakdown will inform: {{decision}}
  Audience for the analysis: {{audience}}
  Known constraints or scope boundaries: {{constraints}}
  </context>

  <task>
  Step 1 — Frame.
  Restate the problem as a single question that a 3 to 6 bucket breakdown could answer. If the problem as written is two questions, split it and pick the one most relevant to {{decision}}.

  Step 2 — Propose two candidate breakdowns.
  Generate two distinct top-level decompositions (3 to 6 buckets each). Use different cutting axes (for example, customer segment vs. revenue mechanism vs. lifecycle stage). Label the axis used for each.

  Step 3 — MECE check each candidate.
  For each breakdown, run two tests:
  - Mutual exclusivity: name a concrete case that could plausibly fall in two buckets. If you find one, the breakdown fails.
  - Collective exhaustiveness: name a concrete case that falls in none of the buckets. If you find one, the breakdown fails.
  Show the test cases and the verdict explicitly.

  Step 4 — Recommend.
  Pick the breakdown that better serves {{decision}}. Justify in two sentences. Then expand the chosen breakdown one level deeper (3 to 5 sub-buckets per top-level bucket).

  Step 5 — Where to dig first.
  Identify the single bucket where investigating further is most likely to change {{decision}}. Explain why.
  </task>

  <output_format>
  ## Reframed question
  ## Candidate A and B (with axis)
  ## MECE tests (table)
  ## Chosen breakdown (two levels)
  ## Highest-leverage bucket
  </output_format>

  <constraints>
  - If you cannot find a breakdown that passes both MECE tests, say so plainly and propose a "near-MECE" version with explicit caveats. Do not paper over overlaps.
  - Do not invent data. The output is a structure, not a conclusion.
  - Bucket labels should be nouns or noun phrases that name a category, not verbs that imply an action.
  </constraints>
variables:
  - "{{problem}}"
  - "{{decision}}"
  - "{{audience}}"
  - "{{constraints}}"
exampleInput: |
  problem: Why is our net revenue retention slipping from 118% to 104% over the last three quarters?
  decision: Where to focus the retention task force in Q4
  audience: CEO and head of CS
  constraints: B2B SaaS, ~600 customers, ACV $25k median
exampleOutput: |
  ## Reframed question
  Which sources of NRR change account for the 14-point drop, and which are most addressable in one quarter?

  ## Candidates
  - A (mechanism axis): logo churn, downsell, expansion shortfall, price compression, mix shift
  - B (segment axis): SMB, mid-market, enterprise, partner-sourced, self-serve

  ## MECE tests
  | Candidate | Overlap test | Exhaust. test | Verdict |
  |---|---|---|---|
  | A | A customer that downgrades and then churns hits two buckets — fix by attributing to first event in window | An NRR change from currency FX fits none — add "non-operational" bucket | Pass with caveats |
  | B | Self-serve SMB sits in two buckets | All customers covered | Fails MX |

  ## Chosen breakdown — A
  - Logo churn → reason: product fit, support, price, sponsor change, M&A
  - Downsell → seat reduction, plan downgrade, scope cut at renewal
  - Expansion shortfall → fewer upsells, smaller upsells, longer cycles
  - Price compression → discount creep, multi-year locks, free seat policy
  - Non-operational → FX, accounting policy

  ## Highest-leverage bucket
  Downsell. It typically lags churn by one quarter and is the earliest reversible signal — if Q3 downsell is up sharply, Q4 churn is forecastable and CS can intervene now.
tips:
  - "The MECE test step is what makes this stronger than the typical decomposition prompt — without forcing concrete overlap and gap test cases, breakdowns look clean on paper but leak in practice."
  - "Two candidate breakdowns is non-negotiable. The first one Claude proposes is almost always biased toward the user's framing; the second exposes the cutting-axis assumption."
  - "If both candidates fail the exhaustiveness test, the problem is not yet a question. Go back to step 1."
  - "Keep top-level buckets to 3 to 5. Above 6, the audience cannot hold them in working memory and the breakdown stops being useful."
  - "Pair with first-principles-decomposition when the buckets all feel inherited — MECE structures the surface, first principles tests whether the surface is real."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - first-principles-decomposition
  - claude-tree-of-thoughts
  - fishbone-analysis
  - swot-with-rigor
tags:
  - framework
  - methodology
  - decomposition
  - decision-making
  - structured-thinking
---
