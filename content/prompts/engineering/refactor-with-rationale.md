---
title: "Refactor with explicit rationale per change"
slug: refactor-with-rationale
function: engineering
role: coding
description: "Refactor code with an explicit rationale and risk note for every change, so reviewers can evaluate the diff one decision at a time."
useCase: "Use this when proposing a refactor that crosses several files or touches load-bearing logic. The structure forces Claude to justify each change individually and flag the ones that carry real risk, instead of producing a single 'improved' version reviewers cannot triage."
prompt: |
  You are refactoring code. The discipline is that every change must have a stated reason and an honest risk note. Reviewers must be able to evaluate this diff one decision at a time, and they must be able to say no to any individual change without unwinding the rest.

  <context>
  Code under refactor:
  <<<
  {{code}}
  >>>

  Reason for refactor: {{reason}} (e.g., readability, testability, performance, removing duplication, preparing for a feature)
  Constraints: {{constraints}} (e.g., must not change public API, must keep tests passing, must not change behavior)
  Existing test coverage: {{tests}}
  </context>

  <task>
  Step 1 — Inventory.
  List every change you intend to make at the function or block level. Each change is a separate item, even if related.

  Step 2 — Justify each change.
  For every item from step 1, write:
  - Rationale (why this change is worth making, given {{reason}})
  - Behavior delta (does this change observable behavior? If yes, name the behavior. If no, state how you know.)
  - Risk note (what could go wrong; what tests would catch it)
  - Independence (can this change be merged on its own, or does it depend on another change in the list?)

  Step 3 — Produce the refactor.
  Write the refactored code. Annotate each substantive change inline with a comment referencing the item number from step 1 (e.g., `# refactor item 3`).

  Step 4 — Test gap analysis.
  Compared to {{tests}}, list any new tests that should be added to make this refactor safe. For each, name what it asserts and which item it protects.

  Step 5 — Honesty pass.
  List the 1 to 3 changes you considered but did NOT make, and why. (E.g., "could extract a base class but it would couple two unrelated subclasses; not worth it.")
  </task>

  <output_format>
  ## Inventory (numbered)
  ## Per-change justification (table)
  ## Refactored code
  ## Test gap analysis
  ## Changes considered but rejected
  </output_format>

  <constraints>
  - Do not bundle unrelated improvements. Each item must trace back to {{reason}} or to a constraint.
  - If a change has no behavior delta, justify the "no delta" claim explicitly. Naming or inlining changes are easy to get wrong.
  - Risk notes should not be empty. Every change has some risk; if you cannot find any, you have not thought about it long enough.
  - Match the language and idioms of the original code. Do not impose a different style unless removing inconsistency is the named reason.
  </constraints>
variables:
  - "{{code}}"
  - "{{reason}}"
  - "{{constraints}}"
  - "{{tests}}"
exampleInput: |
  code: [a 120-line Python class that parses CSV uploads, validates rows, and writes to DB; mixes parsing, validation, and persistence in one method]
  reason: testability — current method requires DB and file system to test
  constraints: must not change behavior; must not change public API (single method `import_csv(path)`)
  tests: One end-to-end test with a small CSV
exampleOutput: |
  ## Inventory
  1. Extract `_parse_rows(file)` from import_csv
  2. Extract `_validate_row(row)` from import_csv
  3. Extract `_persist_rows(rows)` from import_csv
  4. Inject DB session as constructor argument (currently grabbed from a global)
  5. Replace `print` warnings with logger.warning at item 2

  ## Per-change justification
  | # | Rationale | Behavior delta | Risk | Independent? |
  |---|---|---|---|---|
  | 1 | Lets parsing be tested with a string buffer, no file system | None — same iteration order, same exception types | If new exception escapes, test will catch | Yes |
  | 2 | Validation logic now has 6 rules; testing them inline requires DB | None | Risk: extracting changes scope of a `continue` statement; preserve via test | Yes |
  | 3 | Persistence is the slowest part to test; isolating it lets parse/validate run in unit tests | None | Risk: transaction boundary moves; keep commit at the same scope | Depends on 4 |
  | 4 | Without DI, `_persist_rows` is still untestable | None for callers; constructor signature changes | Public API constraint says method `import_csv` cannot change; constructor is internal | Independent |
  | 5 | Logger respects test config; print pollutes test output | None observable | Low | Yes |

  ## Refactored code
  ```python
  class CSVImporter:
      def __init__(self, db_session):  # refactor item 4
          self.db = db_session

      def import_csv(self, path):
          with open(path) as f:
              rows = self._parse_rows(f)  # item 1
          valid = [r for r in rows if self._validate_row(r)]  # item 2
          self._persist_rows(valid)  # item 3
      ...
  ```

  ## Test gap analysis
  - Add unit test for `_parse_rows` with malformed CSV → asserts which exception (protects item 1)
  - Add unit test for each of 6 validation rules in `_validate_row` (protects item 2)
  - Add test that `_persist_rows` opens and closes a single transaction for a batch (protects item 3 risk note)

  ## Considered but rejected
  - Extracting an interface for `RowValidator`. Only one implementation exists and the constraint says "do not change behavior." Pulling an interface would invite premature abstraction.
tips:
  - "The 'behavior delta' column is what makes this stronger than the typical refactor prompt — without it, models cheerfully change behavior under the banner of 'cleaner.' Forcing the claim of no-delta makes it auditable."
  - "Independence matters more than people think. Refactors that must merge as one unit are scarier than refactors that can be done one at a time. If most items are dependent, consider splitting the refactor into phases."
  - "The rejected-changes section is signal that the model actually thought, not just produced output. If it is empty, push back: 'what cleaner version did you not propose, and why?'"
  - "Pair with the senior-engineer code review prompt on the resulting diff. Refactor produces the diff; review pressure-tests it."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - claude-code-review-senior
  - claude-debug-with-hypothesis
  - architecture-decision-trade-offs
tags:
  - framework
  - methodology
  - refactoring
  - engineering
  - code-quality
---
