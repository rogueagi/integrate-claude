---
title: "Architecture decision — surface trade-offs and recommend"
slug: architecture-decision-trade-offs
function: engineering
role: architecture
description: "Surface the real trade-offs in a technical design, weight them against the team's actual context, and recommend with named assumptions."
useCase: "Use this when you have a design decision that has more than one reasonable answer and the team is converging too fast. The structure forces Claude to identify the axes of trade-off explicitly, then weight them against your context, rather than producing a generic comparison table."
prompt: |
  You are evaluating a technical architecture decision. The goal is not to find the "correct" answer — it is to surface the real trade-offs, weight them against the team's actual constraints, and commit to a recommendation with named assumptions.

  <context>
  Decision: {{decision}}
  Options under consideration: {{options}}
  Team context (size, expertise, current stack): {{team_context}}
  Operational context (scale, traffic, latency requirements, compliance): {{operational_context}}
  Time horizon: {{horizon}} (when does this decision get revisited?)
  Reversibility: {{reversibility}} (how hard would it be to change later?)
  </context>

  <task>
  Step 1 — Identify the axes of trade-off.
  Do not jump into comparing options yet. First, name the 4 to 6 axes on which the options actually differ. Common axes: complexity, operational burden, throughput, latency, cost, team familiarity, reversibility, blast radius of failure. Pick the axes that matter for THIS decision.

  Step 2 — Score each option on each axis.
  Use a 1 to 5 scale, with explicit definition of what 1 and 5 mean for each axis. If an axis cannot be scored without more information, mark it UNKNOWN and name the experiment or measurement that would resolve it.

  Step 3 — Apply weights.
  Given {{team_context}} and {{operational_context}}, weight the axes from 1 to 3 by how much they matter for this team right now. Justify each weight in one sentence.

  Step 4 — Compute and recommend.
  Multiply scores by weights, sum, rank. Recommend the winner.

  Step 5 — Name your assumptions.
  List the 3 to 5 assumptions your recommendation depends on. For each, name the leading indicator that would tell you the assumption is breaking.

  Step 6 — Build a one-paragraph ADR.
  Produce a short Architecture Decision Record entry: context, decision, consequences. 4 to 6 sentences total.
  </task>

  <output_format>
  ## Axes of trade-off (with scale definitions)
  ## Scoring table (option x axis, with weights)
  ## Recommendation
  ## Assumptions and leading indicators
  ## ADR entry
  </output_format>

  <constraints>
  - Do not invent operational characteristics. If you do not know the latency budget or QPS, treat it as UNKNOWN and ask. Do not score on imagined numbers.
  - Avoid axis collapse. "Better" is not an axis. "P99 latency under load" is.
  - If two options tie within 10%, name the tiebreaker explicitly. Do not pretend the math decided.
  - The ADR must be readable by someone joining the team in 12 months with no other context.
  </constraints>
variables:
  - "{{decision}}"
  - "{{options}}"
  - "{{team_context}}"
  - "{{operational_context}}"
  - "{{horizon}}"
  - "{{reversibility}}"
exampleInput: |
  decision: How should we handle async job processing for a new feature in our SaaS app?
  options: (a) extend our existing Sidekiq + Redis setup; (b) introduce a managed queue (SQS); (c) build on a lightweight Postgres-based job queue (Solid Queue / pgq)
  team_context: 8 backend engineers, all comfortable with Rails and Postgres; one engineer has SQS experience; current stack is Rails on Heroku Postgres + Redis
  operational_context: ~500 jobs/min steady, bursts to 5k/min, max acceptable processing latency 30s, compliance does not require cross-region
  horizon: 18 months until expected scale doubles
  reversibility: medium — would take ~2 weeks to migrate handlers
exampleOutput: |
  ## Axes of trade-off
  - Operational burden (1=zero ops, 5=we own the failure modes)
  - Burst tolerance (1=fails at burst, 5=easy 10x headroom)
  - Team familiarity (1=new to all, 5=we already run it)
  - Cost at current and 2x scale (1=expensive, 5=negligible)
  - Tooling and visibility (1=primitive, 5=mature)

  ## Scoring (with weights)
  | Axis | Weight | Sidekiq | SQS | Postgres |
  |---|---|---|---|---|
  | Op. burden | 3 | 3 | 5 | 4 |
  | Burst tolerance | 2 | 4 | 5 | 3 |
  | Familiarity | 3 | 5 | 2 | 5 |
  | Cost at 2x | 1 | 4 | 3 | 5 |
  | Tooling | 2 | 5 | 4 | 3 |
  | Total | | 36 | 33 | 35 |

  ## Recommendation
  Stay on Sidekiq, scoped to this feature. Total score is within 10% of Postgres-based; tiebreaker is that visibility tooling already exists and on-call is already trained on it.

  ## Assumptions and leading indicators
  - Burst tolerance assumption: 5k/min for under 5 minutes. Indicator: queue latency p99 over 60s during bursts → revisit.
  - Cost assumption: Redis cost remains under 5% of infra at 2x scale. Indicator: Redis ENOMEM or memory pressure alerts.
  - Team familiarity assumption: no Sidekiq Pro/Enterprise features required. Indicator: feature requires unique-job semantics → reconsider Postgres-based queue with native uniqueness.

  ## ADR
  Context: A new feature requires async processing in a system already running Sidekiq on Redis. Decision: Process new feature jobs on the existing Sidekiq cluster, with a separate queue name for isolation and dedicated worker concurrency. Consequences: zero operational learning cost; Redis becomes a more critical dependency; if Redis cost or burst behavior degrades, migration to a Postgres-based queue is the path of least resistance, since job interfaces will not couple to Redis-specific features.
tips:
  - "The 'axes of trade-off' step is what makes this stronger than the typical decision-matrix prompt — without forcing the team to name the axes first, you get a generic comparison instead of one tuned to your actual constraints."
  - "Pin scale-definition explicitly. '1 to 5' without anchors lets the model drift into vague scoring; '1 = on-call paged weekly' grounds it."
  - "If the score margin is under 10%, do not let the math decide. Name the tiebreaker so the team agrees on what they are actually choosing."
  - "The leading indicators in step 5 are the highest-leverage output. Put them in the ADR or a runbook so the team revisits the decision when an indicator trips, not when it is too late."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - claude-code-review-senior
  - claude-tree-of-thoughts
  - claude-pre-mortem
  - refactor-with-rationale
tags:
  - framework
  - methodology
  - architecture
  - decision-making
  - trade-offs
---
