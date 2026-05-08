---
title: "Draft a board meeting agenda"
slug: board-meeting-agenda
function: executive
role: board-prep
description: "Build a board meeting agenda that allocates time deliberately — protecting space for the strategic discussions that actually matter and not letting status updates eat the room."
useCase: "Use this in the two weeks before a board meeting, after the leadership team has aligned on what the board needs to discuss. The most common failure mode of board meetings is that the first 90 minutes go to status updates and the strategic conversation gets compressed into the last 15. This prompt produces an agenda that prevents that."
prompt: |
  You are a corporate secretary turned operating CFO who has run board meetings at startups from Series A through pre-IPO. Draft a board meeting agenda for {{company_name}}'s {{meeting_type}} board meeting on {{meeting_date}}.

  Inputs:
  - Company and stage: {{company_name}}, {{stage}}
  - Meeting type — pick one: regular quarterly, annual planning, special-purpose: {{meeting_type}}
  - Meeting date and total length: {{meeting_date}}, {{meeting_length_hours}} hours
  - Board composition (count and types — investor, independent, founder): {{board_composition}}
  - The two strategic decisions or discussions you most want time for: {{strategic_topics}}
  - Topics that are status only and should be sent in the pre-read, not discussed live: {{prereads}}
  - Any required formal items (approvals, ratifications, options grants): {{formal_items}}
  - One thing the CEO genuinely wants the board's perspective on: {{ceo_ask}}

  Produce:

  ## Agenda
  Time-boxed schedule with these conventions:
  - Status updates that should be pre-read are listed but allocated minimal live time (5 minutes for questions, no presentation).
  - Strategic discussions get the meaningful blocks (30–60 minutes).
  - Open executive session at the end with no management.
  - Allocate "buffer" only if the meeting is over 4 hours.

  Format each line as:
  `[Start time] – [End time] (X min) — Topic — Owner — Format`

  Format options:
  - **Pre-read Q&A:** brief, 5 min, no presentation
  - **Discussion:** open conversation, no slides required
  - **Presentation + Q&A:** the standard board pattern
  - **Working session:** structured exercise the board does together
  - **Decision:** formal vote required

  ## The Three Discussions This Meeting Is Really About
  Three sentences naming the three strategic threads the meeting is trying to advance. The agenda above must serve these three.

  ## Pre-Read Package (Outline)
  List the documents and dashboards that go to the board 72 hours before the meeting:
  - Operating dashboard (KPIs, with prior-quarter and plan deltas)
  - CEO letter (1–2 pages, narrative)
  - Function status updates (engineering, sales, marketing, etc.) — 1 page each
  - Financial pack
  - Any decision-specific memos for items requiring approval

  ## The CEO's Single Ask
  The one thing the CEO is asking the board's perspective on, framed cleanly. Not a status update, not an FYI — a real question.

  ## What This Agenda Is Deliberately Not Doing
  Two or three things the agenda is not making time for, with the reasoning. Keeps the leadership team disciplined about what stays in pre-read versus what gets live time.

  Constraints:
  - Status presentations should not exceed 25% of total meeting time.
  - At least 50% of total time should be discussion or working session, not presentation.
  - The executive session at the end is non-negotiable.
  - If the agenda doesn't contain a hard decision or a real strategic question, ask why the meeting is happening.
variables:
  - "{{company_name}}"
  - "{{meeting_type}}"
  - "{{meeting_date}}"
  - "{{stage}}"
  - "{{meeting_length_hours}}"
  - "{{board_composition}}"
  - "{{strategic_topics}}"
  - "{{prereads}}"
  - "{{formal_items}}"
  - "{{ceo_ask}}"
exampleInput: |
  company_name: Vantage Systems
  meeting_type: regular quarterly
  meeting_date: May 21, 2027
  stage: Series B SaaS, $30M ARR, post-Series-C close
  meeting_length_hours: 4
  board_composition: 7 members — 3 investor (lead Series A, lead Series B, lead Series C), 1 founder/CEO, 2 independent, 1 observer
  strategic_topics: 1) the AI compliance module GA — what we ship, what we don't, and the implications; 2) 2028 plan shape — how aggressive on healthcare expansion, and the M&A landscape
  prereads: Q1 financials and KPIs, function-by-function status, hiring update, customer health summary
  formal_items: ratify the Series C close terms, approve new hires above threshold (CRO grant), ratify the new CPO promotion
  ceo_ask: should we begin actively pursuing acquisition targets in healthcare-adjacent analytics, or stay fully organic for the next 12 months
exampleOutput: |
  ## Agenda — Vantage Systems Board Meeting, May 21, 2027 (9am–1pm PT)

  09:00 – 09:10 (10 min) — Welcome, agenda confirmation, formal approvals — CEO — **Decision** (ratify Series C terms, CRO grant, CPO promotion)

  09:10 – 09:25 (15 min) — Q1 financials + KPIs walkthrough — CFO — **Pre-read Q&A** (full pack distributed Friday May 16; 15 min for questions only, no presentation)

  09:25 – 09:40 (15 min) — Function pre-read Q&A — leadership team — **Pre-read Q&A** (eng, sales, marketing, hiring sent in pre-read; live block is for questions, not presentations)

  09:40 – 10:30 (50 min) — **Strategic Discussion 1: AI Compliance Module GA** — CPO leads, CEO frames — **Discussion** (no slides; CPO frames trade-offs, board engages)

  10:30 – 10:45 (15 min) — Break

  10:45 – 11:45 (60 min) — **Strategic Discussion 2: 2028 Plan Shape & M&A Landscape** — CEO leads — **Working session** (board breaks into two questions: aggression curve on healthcare; appetite for acquisition. Output is a tentative direction the leadership team can refine.)

  11:45 – 12:15 (30 min) — **CEO's Ask: Active M&A Pursuit?** — CEO frames, all board contribute — **Discussion** (the explicit question; aim is not consensus but to understand each board member's view)

  12:15 – 12:35 (20 min) — Customer voice — VP Customer Success — **Presentation + Q&A** (one named customer story, one churned customer post-mortem, what we learned)

  12:35 – 12:50 (15 min) — Risks register, governance items — General Counsel — **Presentation + Q&A**

  12:50 – 13:00 (10 min) — Executive session (board only, no management) — Independent chair leads — **Discussion**

  13:00 — Adjourn

  ## The Three Discussions This Meeting Is Really About
  1. Are we shipping the AI compliance module on the right scope, on the right date, and into the right customer base? This is the operational bet of the year.
  2. How aggressive should 2028 be — and how does the Series C close change that question?
  3. Is now the time to begin actively scouting M&A in healthcare-adjacent analytics, or do we stay organic for another 12 months?

  Every other agenda item supports or contextualizes these three.

  ## Pre-Read Package (Sent Friday May 16)
  - **Operating dashboard:** Q1 vs. plan vs. Q4, full KPI set, healthcare segment cut, AI module milestone tracking.
  - **CEO letter:** 2 pages narrative on the quarter, the year shape, and the M&A question.
  - **Function status updates:** 1 page each — Engineering, Sales, Marketing, CS, People, Platform.
  - **Financial pack:** Q1 actuals, full-year reforecast, cash runway under three scenarios.
  - **Strategic discussion memos:** AI module trade-offs (3 pages); 2028 plan options (4 pages); M&A landscape scan (3 pages).
  - **Approval memos:** Series C ratification, CRO grant, CPO promotion details.

  ## The CEO's Single Ask
  "Should we begin a structured M&A scouting program in healthcare-adjacent analytics in the next 90 days, or hold organic focus through end of year?"

  This is not asking the board to approve a deal. It is asking for each board member's view on whether the company should now be capable of moving on a target, given the Series C close and the operational state of the company. The aim of the discussion is to understand where the board is, not to drive consensus today.

  ## What This Agenda Is Deliberately Not Doing
  - **Not presenting Q1 financials live.** The pack is rich; reading it is more efficient than presenting it. The board's questions get the live time.
  - **Not doing a function-by-function tour.** Each function leader sent a one-page pre-read. Live time is for the strategic threads, not the parade.
  - **Not formal-business-heavy.** The three required votes are at the start, in 10 minutes. Formal business should not eat strategy time.
tips:
  - "Send the pre-read 72 hours in advance. Sending it at midnight the day before is the most reliable way to ensure the board is unprepared and the meeting is dominated by status."
  - "Status presentations should not exceed 25% of the meeting. If yours do, the agenda is wrong."
  - "Always have an executive session at the end with no management. Boards need a moment to talk without the CEO in the room."
  - "Frame at least one CEO ask per meeting. Boards do their best work when they have a real question to engage with."
  - "After each meeting, write a short retro on what the board engaged with versus what they didn't. The next agenda is better for it."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - board-deck-outline
  - board-update-narrative
  - board-q-and-a-prep
  - investor-update-monthly
tags:
  - board
  - agenda
  - governance
  - meeting-prep
  - leadership
---
