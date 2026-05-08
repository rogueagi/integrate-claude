---
title: "Synthesize raw meeting notes into decisions and actions"
slug: meeting-notes-synthesis
function: productivity
role: notes
description: "Turn messy meeting notes — half-sentences, side conversations, half-decisions — into a clean structured summary with decisions, actions, and open questions."
useCase: "Use this right after a meeting when your notes are a chaotic stream. Beats the temptation to clean them up by hand (you won't) or to send them as-is (no one will read them)."
prompt: |
  You are turning raw meeting notes into a structured summary. The notes will be messy: shorthand, half-sentences, names without context, side commentary. Make sense of them.

  Meeting context: {{meeting_context}}
  Attendees and their roles: {{attendees}}
  My role in the meeting: {{my_role}}

  Raw notes:
  ---
  {{raw_notes}}
  ---

  Produce a structured summary with these sections:

  1. ONE-LINE OUTCOME — what actually happened in this meeting (different from "what was discussed")
  2. DECISIONS — explicit decisions made, with the decider if identifiable
  3. ACTION ITEMS — owner | task | implied or explicit deadline. If owner is unclear, mark "(owner TBD)"
  4. OPEN QUESTIONS — issues raised but not resolved
  5. PARKING LOT — items deferred to a future meeting or doc
  6. NUANCES — anything in tone, dynamics, or asides worth remembering (skip if nothing notable)
  7. WHAT I OWE — items where I am the owner, pulled from #3 for my own visibility

  Be terse. Use bullets, no narrative paragraphs. If I missed something an external reader would need, flag it as "[CLARIFY]".
variables:
  - "{{meeting_context}}"
  - "{{attendees}}"
  - "{{my_role}}"
  - "{{raw_notes}}"
exampleInput: |
  meeting_context: Q1 roadmap review with leadership; 60 minutes
  attendees: CEO (Sam), VP Product (Lena), Head of Eng (Raj), Head of Design (Mira), me (Senior PM, Alex)
  my_role: Roadmap doc owner; presented the draft
  raw_notes: |
    Sam pushed hard on AI bet — wants visible win Q1
    Lena agreed but scoped down: AI = single feature not category
    Raj flagged 2 eng short, esp. backend. Said maybe defer payments work?
    Mira good w design load if AI bet stays narrow
    Sam: "we need to ship something AI by mid-Feb"
    Lena to me: roadmap doc revision by Wed
    Discussed pricing changes — Sam wants exec offsite to cover, not this meeting
    Raj will get me staffing detail by Mon
    Open: do we cut payments or stretch the team
    Sam left at 50 min, decided "AI in, payments TBD"
    Mira asked about design review cadence — table for next week
exampleOutput: |
  ONE-LINE OUTCOME
  AI feature is in the Q1 roadmap (mid-Feb ship target); payments work is at risk pending staffing answer Monday.

  DECISIONS
  - AI bet stays in roadmap, scoped as a single feature not a category (Sam, Lena)
  - Mid-February ship target for AI feature (Sam)
  - Pricing changes discussion deferred to exec offsite (Sam)

  ACTION ITEMS
  - Alex (me): Revise roadmap doc reflecting AI scope, due Wed
  - Raj: Provide staffing detail (backend gap) by Monday
  - Lena (owner TBD?): Decision on payments work cut-or-stretch, blocked on Raj's staffing input
  - Mira / Lena: Schedule design review cadence conversation for next week

  OPEN QUESTIONS
  - Cut payments work entirely or stretch the team to cover both AI and payments?
  - What does "single feature, not category" mean concretely for AI? [CLARIFY]
  - Who is the DRI for the AI feature — me, Lena, or someone TBD?

  PARKING LOT
  - Pricing changes (exec offsite)
  - Design review cadence (next week)

  NUANCES
  - Sam left 10 min early after declaring AI in / payments TBD — decision feels less negotiable than it sounds
  - Raj framed staffing as a question but it read like a flag he wants on the record before commitments harden
  - Lena and Sam aligned in real-time, which means scope can re-expand fast if not pinned down in the doc revision

  WHAT I OWE
  - Roadmap doc revision by Wed (AI scope clarified, payments noted as TBD pending staffing)
  - Follow up with Lena: confirm AI feature DRI before doc goes out
tips:
  - "Send the synthesis to attendees within 24 hours. Memory decays fast and yours becomes the canonical record."
  - "Always flag '[CLARIFY]' items — surfacing what you're unclear on protects you and forces decisions."
  - "The 'nuances' section is for you only, or trusted teammates. Never send it to the whole attendee list."
  - "If a decision was made but no owner emerged, that's not a decision — list it under open questions and assign explicitly."
  - "Run this prompt 5 minutes after the meeting ends, not at the end of the day. The shorthand decays into nonsense fast."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - meeting-prep-brief
  - email-thread-summary
  - project-status-self-update
tags:
  - notes
  - meetings
  - synthesis
  - documentation
  - communication
---
