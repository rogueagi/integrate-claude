---
title: "Run a Nielsen heuristic evaluation on a screen"
slug: heuristic-evaluation
function: design
role: ux-design
description: "Apply Nielsen's 10 heuristics to a screen description or screenshot description and produce a prioritized issue list with severity ratings and concrete fixes."
useCase: "Use this when you don't have time for a full usability test but need a rigorous critique. Heuristic evaluation catches 60–80% of usability issues for a fraction of the cost. Best for pre-launch reviews, sanity checks on competitor screens, and self-critique before a design crit."
prompt: |
  You are a senior UX evaluator with deep expertise in Nielsen's 10 usability heuristics. Evaluate the screen below and produce a structured findings report.

  Context:
  - Screen / surface: {{screen_name}}
  - Product context: {{product_context}}
  - User goal on this screen: {{user_goal}}
  - Description of what's on screen: {{screen_description}}
  - Known constraints (eg "can't change information architecture this sprint"): {{constraints}}

  For each issue you find:
  - Heuristic violated (use Nielsen's standard names: Visibility of system status, Match between system and the real world, User control and freedom, Consistency and standards, Error prevention, Recognition rather than recall, Flexibility and efficiency of use, Aesthetic and minimalist design, Help users recognize/diagnose/recover from errors, Help and documentation)
  - Severity: 0 (not a problem), 1 (cosmetic), 2 (minor), 3 (major), 4 (catastrophic)
  - What's wrong (one sentence)
  - Why it's a problem for this user goal (one sentence)
  - Concrete fix (one sentence — specific enough that a designer could action it)

  Rules:
  - Find at least 5 issues. If you find more than 12, you're nitpicking — cut to the most impactful 12.
  - Don't double-count. If one root cause produces three symptoms, log it once.
  - Order findings by severity descending.
  - Skip heuristics that don't apply rather than forcing a finding.

  After the list, write a 3-sentence summary: the dominant pattern of issues, the one fix that would have the highest impact, and whether you'd ship this screen as-is.

  Output: findings table, then summary.
variables:
  - "{{screen_name}}"
  - "{{product_context}}"
  - "{{user_goal}}"
  - "{{screen_description}}"
  - "{{constraints}}"
exampleInput: |
  screen_name: Invoice creation form
  product_context: Lumen Billing — SaaS for freelancers and small agencies
  user_goal: Create and send a one-off invoice in under 2 minutes
  screen_description: Single-column form with fields for client (dropdown of saved clients with no search), invoice number (pre-filled but editable), date issued, due date (default +30 days), line items table with Description / Qty / Rate / Amount columns and a small "Add line" link, tax field (single percentage, no breakdown), notes textarea, "Save draft" and "Send" buttons at bottom right. No preview. No clear indication of what "Send" actually does.
  constraints: Backend can't support multi-tax-rate this quarter
exampleOutput: |
  Findings

  | # | Heuristic | Severity | Issue | Why it matters | Fix |
  |---|---|---|---|---|---|
  | 1 | Visibility of system status | 4 | "Send" button gives no indication of what it does — email? portal link? both? | User can't tell if clicking will fire an email to their client immediately, which is a high-stakes action they may not be ready for | Change button to "Send via email" with a small subline showing the recipient; add a confirmation step if the client has no email on file |
  | 2 | Error prevention | 3 | No invoice preview before send | Sending the wrong invoice to a client is embarrassing and hard to undo; preventing this is cheap | Add a "Preview" button next to "Send" that shows the rendered PDF in a modal; consider making preview the default action and Send a secondary button |
  | 3 | Recognition rather than recall | 3 | Client dropdown has no search — user must scroll a list of potentially hundreds of saved clients | At any meaningful client count, this becomes the slowest step in the flow and forces the user to remember exact client names | Replace native select with a typeahead component; show the 5 most recently invoiced clients at the top |
  | 4 | Flexibility and efficiency of use | 2 | "Add line" link is small and easy to miss; no keyboard shortcut to add rows | Power users invoicing many lines lose time hunting for the link | Make "Add line" a full-width button below the table; support Tab from the last cell to auto-add a row |
  | 5 | Match between system and the real world | 2 | "Tax" field labeled as a single percentage with no context | Users in regions with multiple taxes (HST + provincial, sales + use, VAT bands) will be confused or enter wrong totals | Label as "Tax rate (%)" and include a help tooltip noting multi-rate is coming Q2; add a placeholder showing "e.g. 8.875" |
  | 6 | Consistency and standards | 1 | "Save draft" left of "Send" reverses the conventional primary-on-right pattern for destructive/forward actions | Minor cognitive overhead | Keep "Send" on the right as the primary; demote "Save draft" to a tertiary text link |

  Summary: The dominant pattern is missing system status — users can't see what the system will do or has done at key moments. The single highest-impact fix is adding an invoice preview before send; it eliminates the most expensive failure mode (wrong invoice sent) and gives the user a moment of confidence. I would not ship this screen as-is — issues 1 and 2 are blockers.
tips:
  - "Severity 4 means 'someone gets fired or files a support ticket.' Use it sparingly so it stays meaningful."
  - "If you can't write a one-sentence fix, the issue isn't well-scoped yet — keep digging."
  - "Run the same screen through this prompt twice with different user goals. The findings shift, and that's revealing."
  - "For a screenshot, describe it in dense prose first. The act of writing the description usually surfaces issues before Claude even responds."
  - "Pair heuristic findings with one round of guerrilla usability testing — they catch different bugs."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - user-flow-narrative
  - usability-test-rewrite
  - design-review-checklist
tags:
  - ux
  - usability
  - heuristic-evaluation
  - design-critique
  - nielsen
---
