---
title: "Create a structured meeting agenda with pre-work and outcomes"
slug: meeting-agenda
function: operations
role: ops-management
description: "Generate a detailed, time-boxed meeting agenda with stated objectives, required pre-work, and expected outcomes for each agenda item."
useCase: "Use this prompt before any important meeting — team syncs, planning sessions, cross-functional reviews, or stakeholder updates. Good agendas are the single highest-leverage action you can take to make meetings shorter and more productive. Provide the meeting context and get a ready-to-share agenda."
prompt: |
  You are an expert facilitator and operations leader. Create a highly effective, structured meeting agenda for the meeting described below.

  **Meeting name:** {{meeting_name}}
  **Meeting type:** {{meeting_type}} (e.g., weekly sync, quarterly planning, retrospective, decision meeting, kickoff)
  **Duration:** {{duration}} minutes
  **Attendees and their roles:** {{attendees}}
  **Meeting objectives — what must be true at the end of this meeting:** {{objectives}}
  **Topics to cover:** {{topics}}
  **Decisions that need to be made (if any):** {{decisions_needed}}
  **Known tensions or issues to address:** {{known_tensions}}

  Produce a complete meeting agenda using this structure:

  ## Meeting Header
  - Meeting name, date/time placeholder, location/link placeholder
  - Meeting type and facilitator
  - Total duration

  ## Meeting Purpose (1–2 sentences)
  A crisp statement of why this meeting is happening and what success looks like.

  ## Pre-Work (sent 48 hours in advance)
  List specific pre-work tasks for each attendee role. Be concrete — "review the Q3 forecast spreadsheet (link)" not "come prepared." Each item should include:
  - Who: [role]
  - What: [specific action]
  - Time required: [estimate]

  ## Agenda
  Build a time-boxed agenda where each item includes:
  - Time block (start time relative to meeting start, e.g., 0:00–0:10)
  - Item name and type (e.g., [INFORM], [DISCUSS], [DECIDE], [BRAINSTORM], [CHECK-IN])
  - Facilitator for this item
  - Discussion questions or prompts (2–3 specific questions to drive the conversation)
  - Expected output (what does done look like for this item)

  Rules for the agenda:
  - Reserve the first 5 minutes for check-in/context-setting
  - Reserve the last 10 minutes for action item capture and next steps
  - Time-box discussions — if an item is [DECIDE], put the decision criteria upfront
  - Flag any item that could easily consume the whole meeting as [WATCH TIME]
  - If there are known tensions, assign them a dedicated slot rather than letting them hijack another item

  ## Decision Log Template
  A table for capturing any decisions made during the meeting:
  | Decision | Owner | Rationale | Date |

  ## Action Items Template
  A table for capturing action items:
  | Action | Owner | Due Date | Dependencies |

  ## Parking Lot
  A section for items that come up but are out of scope for this meeting.

  ## Post-Meeting (within 24 hours)
  What should happen after the meeting: who sends notes, where are they stored, what triggers next steps.
variables:
  - "{{meeting_name}}"
  - "{{meeting_type}}"
  - "{{duration}}"
  - "{{attendees}}"
  - "{{objectives}}"
  - "{{topics}}"
  - "{{decisions_needed}}"
  - "{{known_tensions}}"
exampleInput: |
  meeting_name: Q4 Roadmap Prioritization
  meeting_type: Decision meeting
  duration: 90
  attendees: VP Product (facilitator), Head of Engineering, Head of Design, CFO, 2x Product Managers
  objectives: Leave the meeting with a finalized, ranked Q4 feature list that engineering can begin sprint planning against. Everyone aligned on what is NOT in Q4.
  topics: Review scoring from last week's prioritization exercise, debate top 5 contested features, confirm engineering capacity constraints, set Q4 release milestone dates
  decisions_needed: Which 8–10 features make the Q4 cut. Which 3 features explicitly move to Q1. Whether to pursue the enterprise SSO feature given the engineering cost estimate.
  known_tensions: Engineering believes the AI search feature is underscoped and will take 3x the estimated time. Design thinks the mobile redesign is a prerequisite for two other features and should be non-negotiable. CFO wants the billing upgrade to be the top priority for revenue reasons.
exampleOutput: |
  # Q4 Roadmap Prioritization
  **Date:** [Date] | **Time:** [Time] | **Location:** [Zoom link]
  **Type:** Decision Meeting | **Facilitator:** VP Product | **Duration:** 90 minutes

  ## Meeting Purpose
  Make final, binding decisions on the Q4 feature set so engineering can begin sprint planning on Monday. Success = everyone leaves knowing exactly what is in Q4, what is not, and why.

  ## Pre-Work (send by Wednesday EOD)
  - **All attendees:** Review the prioritization scoring sheet (link) — 15 min
  - **Head of Engineering:** Prepare updated capacity model for Q4 (3-week sprint cadence, 12 engineers) — 30 min
  - **Product Managers:** Prepare a 2-slide brief for each of the 5 contested features: customer evidence, revenue impact estimate, engineering estimate — 45 min
  - **CFO:** Share the revenue model showing impact of billing upgrade at different launch dates — 20 min

  ## Agenda

  **0:00–0:05 | Check-in [CHECK-IN]** — Facilitator: VP Product
  - One word: how are you feeling about Q4 right now?
  - Output: Room calibrated; any blocking news surfaced

  **0:05–0:15 | Capacity & Constraints [INFORM]** — Facilitator: Head of Engineering
  - What is our actual engineering capacity for Q4 (story points)?
  - Which features have significant estimation uncertainty?
  - Output: Shared understanding of constraints before prioritization debate begins

  **0:15–0:25 | Mobile Redesign: Prerequisite or Standalone? [DECIDE]** — Facilitator: VP Product [WATCH TIME]
  - Decision: Is the mobile redesign a blocker for the onboarding and dashboard features, or can they ship independently?
  - Decision criteria: If >2 features require the redesign as a dependency, it gets prioritized; if not, it's optional.
  - Questions: (1) Which features technically depend on the redesign? (2) What's the partial-build option?
  - Output: Binary decision on mobile redesign status

  **0:25–0:50 | Contested Feature Debates [DISCUSS + DECIDE]** — Facilitator: VP Product [WATCH TIME]
  - Run through each of the 5 contested features (4 minutes per feature):
    (1) AI Search — address engineering scope concern directly. Is the estimate defensible?
    (2) Enterprise SSO — build vs. buy analysis. What's the revenue unlock?
    (3) Billing Upgrade — CFO's case. What's the cost of delaying 1 quarter?
    (4–5) [PM to present remaining two]
  - Questions per feature: (1) What's the strongest argument for? (2) What's the strongest argument against? (3) Given constraints, does it make the cut?
  - Output: In/Out/Defer decision on each feature

  **0:50–1:10 | Full Q4 List Review + Sequencing [DECIDE]** — Facilitator: VP Product
  - Review the consolidated In list against capacity model
  - Questions: (1) Does this fit? (2) What's the sequence/dependency order? (3) What are the milestone dates?
  - Output: Ranked, sequenced Q4 list with target milestone dates

  **1:10–1:20 | Q1 Backlog Confirmation [INFORM]** — Facilitator: VP Product
  - Confirm which features move to Q1 and in what priority order
  - Output: Q1 backlog starter list

  **1:20–1:30 | Action Items + Next Steps [ACTION]** — Facilitator: VP Product
  - Capture all actions, owners, due dates
  - Who sends the final Q4 list to the broader team, and by when?
  - Output: Complete action item table; clear communication plan

  ## Decision Log
  | Decision | Owner | Rationale | Date |
  |----------|-------|-----------|------|

  ## Action Items
  | Action | Owner | Due Date | Dependencies |
  |--------|-------|----------|--------------|

  ## Parking Lot
  *(Items to address after this meeting)*

  ## Post-Meeting
  VP Product sends decision summary + Q4 feature list to all product and engineering stakeholders by EOD Friday. Head of Engineering schedules sprint planning kickoff for Monday.
tips:
  - "Send the agenda 48 hours in advance — not 10 minutes before the meeting. Pre-work only happens if people have time to do it."
  - "The [DECIDE] tag is the most important: state the decision criteria before the meeting so people don't spend time debating what they're deciding."
  - "Time-boxing is aspirational — build a 5-minute buffer between major sections so the facilitator can recover without running over."
  - "The parking lot is essential for keeping the meeting on track. Visibly capturing off-topic items lets people let go of them without feeling dismissed."
complexity: beginner
modelRecommendation: claude-haiku
relatedSlugs:
  - meeting-notes-summary
  - cross-functional-brief
  - retrospective-summary
  - decision-memo
tags:
  - meetings
  - facilitation
  - productivity
  - planning
  - operations
---
