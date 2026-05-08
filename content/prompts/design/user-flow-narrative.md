---
title: "Walk through a user flow as a written narrative"
slug: user-flow-narrative
function: design
role: ux-design
description: "Translate a user flow diagram or step list into a story stakeholders can read in 90 seconds — one that surfaces decision points, risks, and the user's emotional state at each step."
useCase: "Use this when you need to present a flow to non-designers (PMs, eng leads, execs) who won't sit and decode a Figma frame. A written narrative forces you to defend every step, exposes gaps before build, and gives the room a shared mental model. Especially useful before flow reviews, design crits, and sprint kickoffs."
prompt: |
  You are a senior UX designer writing a flow narrative for a cross-functional review. Translate the following user flow into a written walkthrough that a PM or engineer can read in under 90 seconds and immediately understand.

  Context:
  - Product: {{product}}
  - Persona: {{persona}}
  - Flow goal: {{goal}}
  - Entry point: {{entry_point}}
  - Steps in the flow: {{steps}}
  - Known constraints or edge cases: {{constraints}}

  Write the narrative as follows:
  - Use present tense, third person ("Maya opens the dashboard...").
  - For each step, cover: what the user sees, what they do, what the system does in response, and what they're feeling or expecting.
  - Call out every decision point explicitly and what happens on each branch.
  - Flag any step where friction, drop-off, or ambiguity is likely — mark these with "RISK:".
  - End with a "Open questions" section listing 2–4 things the team needs to decide before build.

  Do not:
  - Describe pixel-level UI ("a blue button on the right"). Stay at the behavior level.
  - Pad with generic UX language ("delightful experience", "seamless journey").
  - Skip the emotional state — it's the part PMs and engineers usually miss.

  Output: the narrative, then RISK callouts inline, then Open questions at the end.
variables:
  - "{{product}}"
  - "{{persona}}"
  - "{{goal}}"
  - "{{entry_point}}"
  - "{{steps}}"
  - "{{constraints}}"
exampleInput: |
  product: Vantage Systems checkout flow (B2B procurement)
  persona: Maya, ops manager at a 200-person manufacturer, buys ~$8K of supplies monthly
  goal: Submit a multi-line PO for approval before end of day
  entry_point: Email link to a saved cart from her account manager
  steps: Open cart, review line items, edit quantities, add PO number, route for approval, see confirmation
  constraints: Approval routing depends on cart total; over $5K needs CFO sign-off
exampleOutput: |
  Maya clicks the cart link in her account manager's email at 4:42 PM. The page loads with 14 line items already populated — she's relieved she doesn't have to rebuild it. She skims totals and immediately notices two items show "backorder 2 weeks." She expected this; her AM warned her.

  She edits quantities on three lines, watching the subtotal update in real time. She trusts the math because it matches the quote PDF on her desk.

  She enters her internal PO number. The field accepts it without validation feedback — she's mildly anxious it might be wrong but moves on.

  RISK: Maya has no way to know if her PO format is valid until approval bounces. Consider client-side format hints.

  The cart total crosses $5K. The "Submit" button changes to "Route for CFO approval" — Maya pauses. She wasn't expecting a different button. She reads it twice, then clicks.

  RISK: Button label change is jarring without context. Add an inline note: "Orders over $5K route to your CFO — typical approval time 4 hours."

  The system shows a confirmation screen with the approver's name (Janet), a status timeline, and a "We'll email you when it moves" message. Maya feels confident she's done what she needed and closes the tab.

  Open questions:
  - What happens if Janet is OOO? Is there a backup approver path?
  - Should we show backorder dates inline or only on hover?
  - Do we need a "save and finish later" state if Maya gets pulled away mid-flow?
tips:
  - "Read the narrative out loud before sharing it. If you stumble, the flow has a gap."
  - "Force yourself to write the emotional state at each step — it's where most flow problems hide."
  - "RISK callouts beat a separate 'concerns' section. Reviewers actually read them in context."
  - "If the narrative runs longer than 400 words, the flow is probably two flows."
  - "Pair this with the actual Figma frames in the review — narrative first, frames second."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - heuristic-evaluation
  - usability-test-rewrite
  - ia-card-sort-summary
tags:
  - ux
  - user-flow
  - design-review
  - storytelling
  - stakeholder-comms
---
