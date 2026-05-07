---
title: "Transform raw meeting notes into structured action items"
slug: meeting-notes-summary
function: operations
role: ops-management
description: "Convert messy, stream-of-consciousness meeting notes into a clean summary with decisions, action items, open questions, and next steps."
useCase: "Use this prompt immediately after a meeting while context is fresh. Paste in your raw notes — even if they're fragmented bullet points, half-sentences, or shorthand — and get a polished summary ready to share with attendees and stakeholders."
prompt: |
  You are a highly organized executive assistant and operations professional. Transform the raw meeting notes below into a clean, structured meeting summary suitable for sharing with all attendees and relevant stakeholders.

  **Meeting name:** {{meeting_name}}
  **Date:** {{meeting_date}}
  **Attendees:** {{attendees}}
  **Meeting purpose:** {{meeting_purpose}}
  **Raw notes:** {{raw_notes}}

  Produce a structured meeting summary with the following sections:

  ## 1. Meeting Overview (3–5 sentences)
  A concise narrative summary of what was discussed and what was accomplished. Write this for someone who wasn't in the meeting — they should be able to understand the significance without reading the full notes. Include: what was the meeting about, what was the mood/energy, and what was the single most important outcome.

  ## 2. Key Decisions Made
  List every decision made in the meeting. For each decision:
  - **Decision:** [What was decided, stated as a clear, complete sentence]
  - **Owner:** [Who owns executing or communicating this decision]
  - **Context:** [1–2 sentences on why this decision was made]
  - **Not decided:** Flag anything that was discussed but where no decision was reached

  If no decisions were made, state that explicitly.

  ## 3. Action Items
  Extract every action item, commitment, or follow-up mentioned. Present as a table:
  | # | Action | Owner | Due Date | Priority | Dependencies |
  Rules:
  - Every action item must have a named owner (a person, not a team)
  - If no due date was mentioned, write "TBD — needs confirmation"
  - Priority: Critical (blocks others), High (this week), Normal (this sprint/month)
  - Flag any action item that was unclear or ambiguous with [CLARIFY]

  ## 4. Open Questions & Parking Lot
  List questions that were raised but not answered, and topics that were tabled for a future meeting.
  - **Open question:** [Question] — Owner of finding the answer: [Name]
  - **Parked topic:** [Topic] — When/where will this be addressed: [Placeholder]

  ## 5. Key Discussion Points
  For each major topic discussed, provide a 2–4 sentence summary capturing:
  - What was discussed
  - Key viewpoints or perspectives raised
  - Any consensus reached or disagreement surfaced

  ## 6. Next Meeting
  - Proposed date/time (if discussed)
  - Agenda items to carry forward
  - Who is responsible for scheduling

  ## Formatting notes:
  - If a name appears in the raw notes as an initial or nickname, use the full name from the attendees list
  - If the raw notes mention a document, spreadsheet, or link, note it as "[Document: name/description — link TBD]"
  - Highlight anything that appears to be time-sensitive with [URGENT]
  - If something in the notes is unclear or contradictory, flag it with [UNCLEAR: describe the ambiguity]
variables:
  - "{{meeting_name}}"
  - "{{meeting_date}}"
  - "{{attendees}}"
  - "{{meeting_purpose}}"
  - "{{raw_notes}}"
exampleInput: |
  meeting_name: Weekly Product-Eng Sync
  meeting_date: 2024-10-15
  attendees: Sarah Chen (VP Product), Marcus Williams (Head of Engineering), Priya Patel (PM, Growth), Dev Anand (Tech Lead), Lena Schmidt (PM, Core)
  meeting_purpose: Weekly alignment between product and engineering on sprint progress and blockers
  raw_notes: |
    - sprint 42 velocity down - dev says team had 3 people out sick
    - auth bug blocking lena's checkout flow - marcus says it'll be fixed by Thursday hopefully
    - priya - referral experiment results: 12% lift!! need to talk about permanent implementation
    - sarah asked about mobile redesign timeline - dev said need design specs first, waiting on design team
    - decision: push referral to prod next Tuesday after QA
    - marcus flagged: infra costs up 40% this month - need to review, something about new logging setup
    - lena - holiday campaign feature - is it still Q4?? sarah said she needs to check with cfo
    - action: priya to write up referral implementation spec by friday
    - action: marcus to pull infra cost report and share with sarah
    - no notes on API rate limiting - said they'd cover it next week
    - next meeting same time next week
exampleOutput: |
  # Weekly Product-Eng Sync — Meeting Summary
  **Date:** October 15, 2024 | **Attendees:** Sarah Chen, Marcus Williams, Priya Patel, Dev Anand, Lena Schmidt

  ## 1. Meeting Overview
  The team reviewed Sprint 42 progress (velocity down due to illness), celebrated a strong referral experiment result, and surfaced an infrastructure cost spike that needs urgent attention. The main outcome was a go-decision for the referral feature launch next Tuesday. One open question remains on the holiday campaign feature's Q4 status pending CFO confirmation.

  ## 2. Key Decisions Made
  - **Decision:** The referral feature will be pushed to production on Tuesday, October 22, following QA review.
    **Owner:** Priya Patel (implementation) + Marcus Williams (deployment)
    **Context:** The referral experiment showed a 12% lift, clearing the threshold for permanent implementation.

  - **Not decided:** Whether the holiday campaign feature remains in Q4 — Sarah Chen needs to confirm with the CFO before this can be resolved.

  ## 3. Action Items
  | # | Action | Owner | Due Date | Priority | Dependencies |
  |---|--------|-------|----------|----------|--------------|
  | 1 | Write referral feature implementation spec | Priya Patel | Friday, Oct 18 | Critical | Needed before QA can begin |
  | 2 | Pull infrastructure cost report and share with Sarah Chen | Marcus Williams | TBD — needs confirmation | High | None |
  | 3 | Confirm Q4 status of holiday campaign feature with CFO | Sarah Chen | TBD — needs confirmation [CLARIFY] | High | CFO availability |
  | 4 | Provide design specs for mobile redesign to engineering | [CLARIFY: Design team not in meeting — who is the owner?] | TBD | Normal | Design team capacity |
  | 5 | Fix authentication bug blocking checkout flow | Marcus Williams / Dev Anand | Thursday, Oct 17 | Critical | Blocks Lena Schmidt's work |

  ## 4. Open Questions & Parking Lot
  - **Open question:** Is the holiday campaign feature still planned for Q4? — Owner: Sarah Chen (confirm with CFO)
  - **Open question:** What is causing the 40% infrastructure cost increase? — Owner: Marcus Williams (cost report will answer this)
  - **Parked topic:** API rate limiting — will be covered in next week's sync

  ## 5. Key Discussion Points

  **Sprint 42 Velocity**
  Sprint 42 velocity came in below target due to three team members being out sick. Engineering does not view this as a process issue — it is attributed to illness. No corrective action was discussed.

  **Authentication Bug**
  An auth bug is blocking Lena Schmidt's checkout flow feature. Marcus Williams expects a fix by Thursday. This is the highest-urgency engineering item from the meeting.

  **Referral Experiment Results**
  Priya Patel shared that the referral experiment produced a 12% lift — described as a strong positive result. The team agreed to move forward with permanent implementation and set a Tuesday launch target after QA.

  **Infrastructure Cost Spike**
  Marcus Williams flagged that infrastructure costs are up 40% this month, potentially linked to a recent logging setup change. The team agreed to investigate but did not discuss the cause in detail. [URGENT]

  **Mobile Redesign Timeline**
  Dev Anand indicated that engineering cannot begin the mobile redesign until they receive design specifications. The design team was not in the meeting; the dependency is unresolved.

  ## 6. Next Meeting
  - **Date/Time:** Same time next week (October 22, 2024)
  - **Carry-forward items:** API rate limiting discussion
  - **Scheduling:** Recurring — no action needed
tips:
  - "The more detail in your raw notes, the better the output. Even capturing the rough order of topics helps the model reconstruct the narrative."
  - "Flag [UNCLEAR] items in the output for yourself, then go back and clarify before sending — don't send a summary with ambiguities to stakeholders."
  - "If you're in back-to-back meetings, use voice-to-text to capture raw notes while you're in the meeting — even imperfect transcription works well with this prompt."
  - "For recurring meetings, save past summaries and reference them in your notes ('same discussion as last week on X') so the model can track patterns."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - meeting-agenda
  - retrospective-summary
  - team-update-email
  - cross-functional-brief
tags:
  - meetings
  - productivity
  - action-items
  - communication
  - operations
---
