---
title: "Disciplined 5 Whys with explicit causal chain"
slug: five-whys-root-cause
function: operations
role: ops-management
description: "Run a 5 Whys analysis that follows a real causal chain and refuses to stop at 'human error,' surfacing the systemic cause and the testable countermeasure."
useCase: "Use this after an incident, a missed delivery, or a recurring quality issue. The structure prevents the typical 5 Whys failure case — stopping early at a person or a process step instead of the system that produced both."
prompt: |
  You are running a 5 Whys analysis on a problem. The discipline is to follow a real causal chain — each "why" must be a direct cause of the previous step, not a different angle on the same level. The analysis is not finished until the root is a system, decision, or design, not a person or a single moment of bad judgment.

  <context>
  Problem or incident: {{problem}}
  When and where it happened: {{when_where}}
  What is known about how it unfolded: {{timeline}}
  Who was involved: {{actors}}
  What has already been tried or assumed: {{prior_thinking}}
  </context>

  <task>
  Step 1 — Restate the problem as an effect, not an event.
  Convert the incident into an effect statement: "The system produced X when Y was expected." This anchors the chain in cause and effect, not blame.

  Step 2 — Walk the chain.
  Ask "why?" at least five times. For each step:
  - State the cause clearly
  - Cite the evidence that this is the cause (logs, witness, data, document)
  - If you do not have evidence, mark UNCONFIRMED and name what evidence would confirm it
  - Each step must be a direct cause of the previous step, not a sibling or a reframing

  Step 3 — Refuse to stop at human error.
  If a "why" lands on "person X did Y," ask the next why: why was the system shaped such that person X could and did do Y? People are signals, not roots. Continue until the root is in design, process, incentive, or training.

  Step 4 — Verify the chain.
  Reverse-walk the chain from root to symptom. Each step should follow logically forward. If any step does not, the chain is wrong; rebuild it.

  Step 5 — Countermeasure at the root.
  Propose 1 to 2 specific, testable countermeasures at the root cause level. Each must:
  - Be implementable within a stated time window
  - Have a leading indicator that would tell you it worked
  - Not introduce a worse problem

  Step 6 — Side branches.
  Note 1 to 2 contributing factors that were not on the main chain but made the failure more likely or worse. These get their own smaller fixes.
  </task>

  <output_format>
  ## Effect statement
  ## Causal chain (numbered, with evidence)
  ## Reverse walk (sanity check)
  ## Root-cause countermeasures
  ## Contributing factors
  </output_format>

  <constraints>
  - Do not stop at "human error" or "they should have known." Both are starting points, not endings.
  - Each "why" must be supported by evidence or marked UNCONFIRMED. The credibility of the analysis is in the evidence column.
  - Do not branch sideways. If multiple causes contribute at the same level, pick the most load-bearing for the main chain and put the others in contributing factors.
  - Countermeasures must be at the root, not the symptom. Adding "more training" is almost always a symptom-level fix.
  </constraints>
variables:
  - "{{problem}}"
  - "{{when_where}}"
  - "{{timeline}}"
  - "{{actors}}"
  - "{{prior_thinking}}"
exampleInput: |
  problem: We shipped a billing run that double-charged 217 customers
  when_where: Last Tuesday's monthly billing batch, production
  timeline: Job ran at 04:00, completed normally, alerts started at 07:30 from customer support
  actors: On-call engineer kicked off a re-run of a partially failed sub-batch from the prior week
  prior_thinking: Initial fix is "engineer should have checked first"
exampleOutput: |
  ## Effect statement
  The billing system produced two charges per customer when one was expected, for 217 customers across the partial sub-batch and the full batch.

  ## Causal chain
  1. Why did 217 customers get double-charged? The same customers were processed in both the prior sub-batch retry and the full batch run. Evidence: billing logs match same customer_ids in both runs.
  2. Why did both runs touch the same customers? The retry sub-batch did not mark customers as processed; the full batch had no exclusion list. Evidence: code review of retry handler shows no `mark_billed` call.
  3. Why did the retry handler skip the mark? It was written as a one-off recovery path 14 months ago and bypasses the normal billing pipeline that does the marking. Evidence: git blame, original PR description.
  4. Why does the bypass exist? At the time, the normal pipeline failed on the partial-batch case; the workaround was faster than fixing the pipeline. Evidence: original incident postmortem from 14 months ago.
  5. Why was the workaround still in production 14 months later? No follow-up ticket was created to replace it; the workaround had no expiry or owner. Evidence: ticket tracker — no related tickets after the initial incident.
  6. Why are emergency workarounds allowed to persist without expiry or owner? There is no policy or system that flags one-off recovery code as needing follow-up; postmortems do not generate enforceable cleanup tickets. (ROOT)

  ## Reverse walk
  No process flags one-off recovery code → workarounds persist → bypass for billing pipeline persists → retry handler skips marking → both runs touch same customers → 217 double charges. Logical forward chain.

  ## Root-cause countermeasures
  1. Add a "workaround" tag to incident response checklist. Any code path created during incident response is automatically tagged with an owner and a 90-day expiry; expiry triggers a P2 ticket. Implement in 2 weeks. Leading indicator: # of expired workaround tags re-extended without justification, reviewed monthly.
  2. Add a billing pipeline invariant: a customer cannot be charged twice within any 24-hour window without a manual approval flag. Implement in 3 days. Leading indicator: invariant fires in staging during the next monthly run.

  ## Contributing factors
  - On-call engineer ran the retry without a dry-run option. Fix: add a `--dry-run` flag to the retry script as default, requires explicit opt-out.
  - No reconciliation alert between billing runs; the double-charge was caught by support, not the system. Fix: post-batch reconciliation that compares charges against expected count.
tips:
  - "The 'cite evidence per step' requirement is what makes this stronger than the typical 5 Whys — without it, the chain becomes a story the team tells themselves about what probably happened."
  - "If the chain ends at a person, you stopped early. Real roots are in systems, incentives, or design choices that produced the person's behavior."
  - "The reverse walk catches sloppy chains. If the forward narrative does not flow, one of the 'why's was a sibling cause, not a parent."
  - "Countermeasures at the root are usually fewer and more boring than countermeasures at the symptom. If your fix list is exciting, you are still at the symptom."
  - "Pair with fishbone-analysis when the problem has multiple causes contributing simultaneously. 5 Whys finds the spine; fishbone finds the ribs."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - fishbone-analysis
  - claude-pre-mortem
  - claude-debug-with-hypothesis
tags:
  - framework
  - methodology
  - root-cause
  - operations
  - incident-analysis
---
