---
title: "Debug with a ranked hypothesis tree"
slug: claude-debug-with-hypothesis
function: engineering
role: coding
description: "Debug an issue by generating a ranked tree of hypotheses, the cheapest test for each, and what each result rules in or out."
useCase: "Use this when a bug is non-obvious and the team is at risk of churning on the most-likely-looking cause for hours. The structure forces Claude to think like a Bayesian: enumerate hypotheses, estimate prior likelihood, and rank by cost-to-test, not by which feels most interesting."
prompt: |
  You are debugging an issue. The discipline is not to chase the first plausible cause but to enumerate hypotheses, estimate which are most likely, and pick the cheapest one to test next.

  <context>
  Symptom (what is observed, exactly): {{symptom}}
  When it started or what changed: {{trigger}}
  Where it happens (env, user segment, time of day): {{scope}}
  What has already been ruled out: {{ruled_out}}
  Relevant logs, errors, or repro steps: {{evidence}}
  System under suspicion (architecture brief): {{system_brief}}
  </context>

  <task>
  Step 1 — Enumerate hypotheses.
  Generate 6 to 10 distinct hypotheses about the cause. Span layers: code logic, data, configuration, infrastructure, external dependency, observer effect (the symptom is real but the cause is not where it appears). Include at least one "boring" hypothesis (cache, clock skew, race condition) and one "the symptom is misleading."

  Step 2 — Score each.
  For every hypothesis, estimate:
  - Prior likelihood (1 to 5): given what we know, how likely
  - Cost to test (1 to 5, where 5 = expensive): time and risk to verify or rule out
  - Information value (1 to 5): if true, how much does it explain? If false, how much does it rule out?

  Rank by (Likelihood × Information value) / Cost. The top of the list is what to test next.

  Step 3 — Define the test.
  For the top 3 hypotheses, write the exact test or experiment that would confirm or refute. Include:
  - The action to take
  - What outcome confirms the hypothesis
  - What outcome refutes it
  - What outcome is ambiguous (and what to do then)

  Step 4 — Sequencing.
  Recommend an order. Often the cheapest test that rules out the most siblings goes first, even if it is not the most likely cause.

  Step 5 — Trap check.
  Name 1 to 2 ways this debugging session could waste a day. (Looking in the wrong system, fixing a symptom that masks the cause, etc.)
  </task>

  <output_format>
  ## Hypotheses (ranked table)
  ## Test plans for top 3
  ## Recommended order
  ## Traps to avoid
  </output_format>

  <constraints>
  - Do not assume the symptom is what it appears to be. The "observer effect" hypothesis must be present unless you have proof of the failure mode.
  - If you cannot estimate a likelihood credibly, mark UNKNOWN and ask one clarifying question. Do not invent.
  - Tests must be executable: a query to run, a flag to flip, a request to make. "Investigate further" is not a test.
  - If two hypotheses produce the same test outcome, merge them or note the ambiguity.
  </constraints>
variables:
  - "{{symptom}}"
  - "{{trigger}}"
  - "{{scope}}"
  - "{{ruled_out}}"
  - "{{evidence}}"
  - "{{system_brief}}"
exampleInput: |
  symptom: ~5% of API requests to /v1/checkout return 200 OK but the order is not actually saved; user retries succeed
  trigger: Started ~6 days ago; last deploy was 8 days ago; coincides with a Postgres minor version upgrade
  scope: Production only; all customer segments; no time-of-day pattern
  ruled_out: Auth (200s are returning), client retries (logs show no client-side retry), specific endpoint nodes (spread across all)
  evidence: No 5xx in logs; orders missing from DB; checkout service logs show "order saved" message before the 200; no errors in Postgres logs
  system_brief: FastAPI service writes to Postgres in a transaction, returns 200 on commit; reads go to a read replica with 50-200ms lag
exampleOutput: |
  ## Hypotheses (ranked)
  | # | Hypothesis | Layer | L | Cost | Info | Score |
  |---|---|---|---|---|---|---|
  | 1 | Read replica lag: order is saved on primary, but a downstream read confirms missing on replica before lag catches up — symptom is misleading | Observer | 4 | 1 | 5 | 20 |
  | 2 | Transaction is committing on a stale connection from a pool not aware of pg upgrade; commit silently rolls back | Infra | 3 | 2 | 5 | 7.5 |
  | 3 | The "order saved" log fires before commit, masking a rollback later in the transaction | Code | 3 | 1 | 4 | 12 |
  | 4 | Orders save then a separate cleanup job deletes them as orphaned | Data | 2 | 1 | 4 | 8 |
  | 5 | DB-level CHECK or trigger added in pg upgrade silently fails the insert | Infra | 1 | 2 | 4 | 2 |
  | 6 | Idempotency layer dedups requests too aggressively, returns 200 without writing | Code | 2 | 2 | 4 | 4 |

  ## Test plans
  - 1: For 5 reported missing orders, query primary (not replica) directly. Confirm: rows are present on primary → symptom is read-side. Refute: missing on primary too. (10 minutes)
  - 3: Read the checkout service code path. Confirm: log line is before the commit() call. Refute: log is after commit and outside try/except. (15 minutes)
  - 2: Check connection pool logs for stale connections after pg upgrade window; query pg_stat_activity for orphaned connections. (30 minutes)

  ## Recommended order
  Test 1 first. It is the cheapest and rules out an entire branch (anything observer-side) if it comes back negative. Then test 3, then test 2.

  ## Traps to avoid
  - Treating the "order saved" log as proof. It is a log, not the commit.
  - Spending a day on the pg upgrade theory before confirming the rows are actually missing on the primary.
tips:
  - "The cheapest-test-that-rules-out-the-most rule is what makes this stronger than the typical 'list of possible causes' prompt — without it, debugging follows curiosity instead of information value."
  - "The 'observer effect' hypothesis catches a class of bugs that destroy debugging sessions. Always include it. If the symptom is misreported, every other hypothesis is wrong."
  - "Force the model to write what each test result means in advance. If the test runs and the result is ambiguous, you have not learned anything — the prompt should have caught that."
  - "Pair with a senior code review pass on the suspect code path. Hypotheses get sharper when the code is read carefully alongside them."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - claude-code-review-senior
  - five-whys-root-cause
  - claude-tree-of-thoughts
tags:
  - framework
  - methodology
  - debugging
  - engineering
  - troubleshooting
---
