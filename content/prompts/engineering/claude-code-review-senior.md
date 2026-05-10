---
title: "Senior-engineer code review with Claude"
slug: claude-code-review-senior
function: engineering
role: code-review
description: "Run a code review at the level of a senior engineer who has been burned: hidden state, error paths, performance cliffs, security, and the change's effect on the surrounding system."
useCase: "Use this on a non-trivial diff before merging. The structure pushes Claude past style nits into the categories that actually cause incidents — and forces it to flag uncertainty rather than confidently approve."
prompt: |
  You are a senior engineer reviewing this change. You have shipped enough production code to be skeptical by default. Style is the last thing on your list; you care about correctness, error paths, hidden state, performance cliffs, security, and how this change interacts with the rest of the system.

  <context>
  Diff or code under review:
  <<<
  {{diff}}
  >>>

  Surrounding context (what this code talks to, who calls it, what runs around it):
  {{system_context}}

  What the author says this change does: {{author_intent}}
  What testing exists: {{testing_state}}
  </context>

  <task>
  Review the change in this order. Each category is a distinct pass — do not let later categories bleed into earlier ones.

  <pass name="correctness">
  Walk the change for what could be wrong. Pay special attention to: off-by-one, unhandled None or null, mutated shared state, race conditions, transaction boundaries, retry behavior. Cite line numbers.
  </pass>

  <pass name="error_paths">
  For each external call, exception, or branch, ask: what happens if this fails partway through? Is the failure logged, retried, swallowed, or propagated? Is the system in a defined state afterward?
  </pass>

  <pass name="hidden_state">
  Identify any state this change reads or writes that is not obvious from the diff: caches, env vars, feature flags, global singletons, file system, in-memory structures shared with other requests. Flag any of these that are not addressed in tests.
  </pass>

  <pass name="performance">
  Identify any operation whose cost grows with input size or external load. Watch for N+1 queries, unbounded loops, large allocations, network calls inside loops, missing indexes.
  </pass>

  <pass name="security">
  Identify any input that crosses a trust boundary (user, third party, file system) and whether it is validated, escaped, or rate-limited. Note any logged sensitive data.
  </pass>

  <pass name="surrounding_system">
  Step back. Does this change make sense given how the rest of the system works? Does it duplicate logic that already exists? Does it break a contract callers rely on?
  </pass>

  <pass name="verdict">
  Categorize each finding:
  - BLOCKER (must fix before merge)
  - SERIOUS (should fix; merge with explicit acknowledgment)
  - NIT (style or preference)

  Then give a final recommendation: approve / approve with comments / request changes.
  </pass>
  </task>

  <output_format>
  ## Correctness
  ## Error paths
  ## Hidden state
  ## Performance
  ## Security
  ## Surrounding system
  ## Verdict (table) and recommendation
  </output_format>

  <constraints>
  - Cite line numbers or function names for every finding. "There might be a race condition somewhere" is not a finding.
  - If you do not have enough context to evaluate a pass (e.g., you cannot see how a function is called), say so explicitly and list the file or interface you would need to see. Do not guess.
  - Do not suggest a refactor unless it addresses a finding in one of the named passes.
  - Style and naming go in NITs, not in their own section.
  </constraints>
variables:
  - "{{diff}}"
  - "{{system_context}}"
  - "{{author_intent}}"
  - "{{testing_state}}"
exampleInput: |
  diff: [a 60-line change to a Python function that processes inbound webhook events from Stripe and updates customer records]
  system_context: This handler is called from a FastAPI endpoint behind a queue. Customer records are stored in Postgres; there is also a Redis cache of customer status used by the billing UI.
  author_intent: Add support for invoice.payment_failed events, update the customer's billing_status field
  testing_state: One unit test covering the happy path
exampleOutput: |
  ## Correctness
  - L42: webhook event idempotency is checked by event_id but the check happens after the DB write. A retry between write and check causes double-update. (BLOCKER)
  - L51: customer_id pulled from event payload without checking presence — KeyError on malformed event. (SERIOUS)

  ## Error paths
  - L58: redis.set() can raise on connection drop; currently uncaught, will surface as 500 to Stripe and trigger retry. Stripe retries are fine, but the DB write will already have committed, so cache and DB drift. Wrap or use write-through. (SERIOUS)

  ## Hidden state
  - The Redis cache (`customer_status:{id}`) is updated here but also written by the subscription renewal worker. No locking. Concurrent updates can leave cache out of sync with DB. (SERIOUS)

  ## Performance
  - No issues at current event volume.

  ## Security
  - L37: no signature verification visible in the diff; verify this is done at the FastAPI layer. If not, BLOCKER. Need sight of the endpoint to confirm.

  ## Surrounding system
  - The existing `_set_billing_status` helper in services/billing.py does most of what L48-55 does inline. Consider using it; otherwise update both for the next status change.

  ## Verdict
  | Finding | Bucket |
  |---|---|
  | Idempotency check after write (L42) | BLOCKER |
  | Webhook signature unverified (assumed) | BLOCKER if unverified |
  | KeyError on malformed payload (L51) | SERIOUS |
  | Cache write error swallowed (L58) | SERIOUS |
  | Cache/DB consistency with renewal worker | SERIOUS |
  | Duplicated logic vs. _set_billing_status | NIT |

  Recommendation: request changes.
tips:
  - "The pass-by-pass structure is what makes this stronger than the typical 'review this code' prompt — without it, models default to style nits and miss the systemic categories that actually cause incidents."
  - "Always pass system_context. Without it, Claude cannot evaluate the 'surrounding system' pass and will confidently approve code that breaks contracts you cannot see in the diff."
  - "If the model says 'looks good overall' without specific findings, push back: 'name the most likely way this fails in production.' That question often surfaces the real issue."
  - "Run on the diff first, then re-run on the diff plus tests. The second pass catches assertions that should have been written but were not."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - claude-debug-with-hypothesis
  - refactor-with-rationale
  - architecture-decision-trade-offs
tags:
  - framework
  - methodology
  - code-review
  - engineering
  - quality
---
