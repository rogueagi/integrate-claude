---
title: "Fishbone (Ishikawa) analysis for a multi-cause problem"
slug: fishbone-analysis
function: operations
role: project-management
description: "Map a multi-cause problem across the standard fishbone categories, weight each cause by likelihood and impact, then commit to the highest-leverage interventions."
useCase: "Use this when a problem has multiple plausible causes contributing simultaneously and a single root-cause analysis would oversimplify. The structure forces Claude to populate every category and then weight, instead of producing a balanced-looking diagram with no decision."
prompt: |
  You are running a fishbone analysis. The discipline is to populate every category honestly (resisting the urge to stuff everything in one), then weight which causes are doing the real work.

  <context>
  Problem (the "head" of the fish): {{problem}}
  Scope (where this problem shows up, where it does not): {{scope}}
  What has been tried or ruled out: {{prior_thinking}}
  Time horizon for fixing this: {{horizon}}
  </context>

  <task>
  Step 1 — Populate each category.
  For each of the six standard categories, list 2 to 5 specific contributing causes. Be specific. "Communication" is not a cause; "weekly cross-functional sync was canceled three weeks running" is.

  - People: skills, roles, training, motivation, attention
  - Process: workflows, handoffs, sequencing, dependencies
  - Tools/Tech: software, integrations, automation, gaps
  - Environment: physical or organizational context, time pressure, distractions
  - Inputs: data quality, materials, upstream signals
  - Measurement: how performance is measured, what is visible vs. invisible

  If a category is genuinely empty for this problem, say so explicitly rather than inventing a cause.

  Step 2 — Score each cause.
  For every cause, score:
  - Likelihood it is contributing (1 to 5)
  - Impact if removed (1 to 5)
  - Cost to address (1 to 5, where 5 = expensive)

  Combined score = (Likelihood × Impact) / Cost.

  Step 3 — Identify load-bearing causes.
  Highlight the 3 to 5 causes that score highest. Note which categories they cluster in. If they cluster in one or two categories, that is signal — the problem may not be multi-cause after all.

  Step 4 — Interventions.
  Propose one specific, testable intervention per load-bearing cause. Each must be deliverable within {{horizon}}.

  Step 5 — Sequencing.
  Recommend the order. Start with the cause whose intervention also weakens other causes (a "leverage move"), even if it is not the highest-scoring on its own.
  </task>

  <output_format>
  ## Fishbone (six categories, with causes)
  ## Scoring table
  ## Load-bearing causes (and clustering observation)
  ## Interventions
  ## Recommended sequence
  </output_format>

  <constraints>
  - Each cause must be specific enough that someone reading it for the first time knows what to look at. "Bad communication" is too vague.
  - If you find yourself stuffing every cause into one category, the problem may be single-cause. Note that and run 5 Whys instead.
  - Do not invent causes to fill out empty categories. Better to say "Measurement: no contributing causes identified."
  - Cost scores should reflect organizational cost, not just dollar cost. Re-organizing a team is expensive even if it costs no money.
  </constraints>
variables:
  - "{{problem}}"
  - "{{scope}}"
  - "{{prior_thinking}}"
  - "{{horizon}}"
exampleInput: |
  problem: Our customer onboarding NPS has fallen from 62 to 38 over two quarters
  scope: All segments; worse in mid-market; not seen in self-serve
  prior_thinking: We assumed it was the new onboarding flow that shipped Q1; rollback didn't restore the score
  horizon: 90 days
exampleOutput: |
  ## Fishbone

  **People**
  - CSM team turnover: 4 of 11 CSMs are <90 days tenured
  - New onboarding lead reorganized handoff but did not retrain frontline
  - Product specialists deprioritized onboarding sessions in favor of expansion calls

  **Process**
  - Sales-to-CS handoff doc is filled out inconsistently (~40% complete based on audit)
  - Kickoff scheduling slipped from "within 5 days" to "within 14 days" median
  - No defined "stuck" check-in between weeks 2 and 4 of onboarding

  **Tools/Tech**
  - Onboarding portal launched in Q1; mid-market customers report 3+ confusing steps
  - Notification flow does not surface stuck customers to CSMs proactively

  **Environment**
  - Sales is being pushed harder on Q3 quotas; deals close with thinner CS prep
  - Q2 reorg moved CSMs under sales-aligned pods; cultural reset still ongoing

  **Inputs**
  - Sales-provided customer goals are vaguer than they used to be (30% of handoffs lack a measurable goal)
  - Pre-kickoff customer data is incomplete in 25% of cases

  **Measurement**
  - NPS is measured at day 30; we do not measure leading indicators (time-to-first-value, # of stuck checkpoints)

  ## Scoring (top causes only)
  | Cause | Cat | L | I | Cost | Score |
  |---|---|---|---|---|---|
  | CSM tenure | People | 5 | 4 | 4 | 5.0 |
  | Handoff doc inconsistent | Process | 5 | 4 | 2 | 10.0 |
  | Kickoff slip 5→14 days | Process | 4 | 5 | 2 | 10.0 |
  | Sales goals vaguer | Inputs | 4 | 4 | 3 | 5.3 |
  | No stuck check-in | Process | 4 | 4 | 2 | 8.0 |
  | No leading indicators | Meas. | 5 | 3 | 2 | 7.5 |

  ## Load-bearing causes
  Three of the top five are in **Process**, with one each in Inputs and Measurement. Clustering signal: the problem is mostly process, not people or tools, despite the team's instinct to blame the new portal. The portal is contributing but is not load-bearing.

  ## Interventions
  - Handoff doc: enforce required fields; deals cannot move to "closed" until handoff is complete. Implement in 2 weeks.
  - Kickoff slip: SLA reset to 5 days; weekly dashboard publishes median to leadership. 1 week.
  - Stuck check-in: add a Day-14 check-in to the playbook; CSM owns it. 1 week.
  - Leading indicators: instrument time-to-first-value and stuck-checkpoint count; report alongside NPS. 3 weeks.

  ## Recommended sequence
  Start with the handoff doc fix. It is the cheapest, and it directly improves three other causes (kickoff prep quality, vague sales goals, stuck check-in usefulness). Then the SLA, then the check-in, then instrumentation in parallel.
tips:
  - "The clustering observation is what makes this stronger than the typical fishbone — without it, the diagram looks balanced and the team does not realize the problem is concentrated in one or two categories."
  - "If every category is full, double-check. Real problems usually live in 1 to 3 categories; symmetric fishbones are often padded."
  - "The 'leverage move' sequencing rule is high-value. The intervention that weakens multiple causes at once is almost always the best place to start, even if it scores lower individually."
  - "Pair with five-whys-root-cause if the load-bearing causes all live in one category. Fishbone surfaces multi-cause problems; 5 Whys digs into single-cause ones."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - five-whys-root-cause
  - mece-breakdown
  - swot-with-rigor
tags:
  - framework
  - methodology
  - root-cause
  - operations
  - problem-solving
---
