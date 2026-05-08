---
title: "Create a board meeting agenda with discussion guides"
slug: board-meeting-agenda
function: finance
role: investor-relations
description: "Generate a structured board meeting agenda with time allocations, discussion guides, and pre-read requirements — designed to produce a productive, action-oriented board meeting."
useCase: "Use this prompt to plan and structure a board meeting. A well-structured agenda is the difference between a board meeting that generates strategic value and one that turns into a 3-hour investor update. This prompt produces an agenda that allocates time appropriately, structures discussion for decisions rather than reporting, and prepares the board to be genuinely helpful."
prompt: |
  You are a CEO or Chief of Staff preparing for a board of directors meeting.

  Context:
  - Company: {{company_name}}
  - Board meeting date: {{meeting_date}}
  - Meeting duration: {{duration}} (e.g., 3 hours, half-day)
  - Board composition: {{board_composition}} (number and types of board members: investor seats, independent seats, observer seats)
  - Last board meeting: {{last_meeting}} (date and key topics from prior meeting)
  - Period to be reviewed: {{period_reviewed}}
  - Key topics for this meeting: {{key_topics}} (what decisions or discussions are most important this meeting)
  - Decisions requiring board vote: {{formal_votes}} (any resolutions or formal approvals needed)
  - Company context: {{company_context}} (stage, major events since last board meeting, strategic inflection points)

  Generate a complete board meeting agenda including:

  ## Meeting Overview
  Date, time, location/format, attendees, and any standing administrative items.

  ## Agenda at a Glance (table format)
  | Time | Item | Format | Owner |
  Time allocations should reflect strategic priority — no item should get less than 10 minutes, and reporting items should be compressed to leave time for discussion.

  ## Pre-Read Requirements
  What materials should be sent in advance and when. Board members who haven't read the materials arrive unprepared — specify what's required reading vs. supplemental.

  ## Section-by-Section Agenda with Discussion Guides
  For each agenda item:
  - **Topic:** Name and brief description
  - **Time allocated:** Number of minutes
  - **Format:** Information share / Discussion / Decision
  - **Pre-read material:** What board members should have read beforehand
  - **Key questions for discussion:** 3–5 specific questions to drive the conversation (not rhetorical — actual questions management needs input on)
  - **Decision or output:** What the meeting should produce for this item (a vote, a recommendation, a shared understanding, a plan)

  ## Standing Closing Items
  Executive session, action items review, next meeting date.

  Tone: precise and practical. The agenda should signal to board members that this meeting is organized and their time will be used well. Vague agenda items produce unfocused discussions — every item should be specific enough that a board member could prepare for it in advance.
variables:
  - "{{company_name}}"
  - "{{meeting_date}}"
  - "{{duration}}"
  - "{{board_composition}}"
  - "{{last_meeting}}"
  - "{{period_reviewed}}"
  - "{{key_topics}}"
  - "{{formal_votes}}"
  - "{{company_context}}"
exampleInput: |
  company_name: Anchor Analytics
  meeting_date: April 25, 2024, 10:00 AM – 1:00 PM PT
  duration: 3 hours
  board_composition: 5 members — CEO (Marcus Chen), 2 investor seats (Sarah Nguyen/Sequoia, David Park/Founder Collective), 1 independent (Jennifer Holt, former VP Product at Atlassian), 1 observer (Matt Torres/Founder Collective)
  last_meeting: January 18, 2024 — topics: 2024 AOP approval, Signal roadmap, Q4 2023 results
  period_reviewed: Q1 2024
  key_topics: Q1 financial results (below plan), Signal launch reception, enterprise sales strategy, Series A timing decision, headcount plan approval
  formal_votes: None this meeting (next vote will be Series A authorization)
  company_context: Signal launched April 15 (after quarter close); Q1 ARR miss of 16.7% due to AE ramp and 2 enterprise slips; team now at 28 people; Series A conversations being planned for Q3
exampleOutput: |
  # Anchor Analytics Board Meeting
  **April 25, 2024 | 10:00 AM – 1:00 PM PT | Zoom (link distributed separately)**

  **Attendees:** Marcus Chen (CEO), Sarah Nguyen (Sequoia), David Park (Founder Collective), Jennifer Holt (Independent), Matt Torres (Founder Collective, Observer)
  **Presenters:** Maya Chen (Controller), James Wu (VP Sales) — joining for relevant sections

  ---

  ## Agenda at a Glance

  | Time | Item | Format | Owner |
  |---|---|---|---|
  | 10:00–10:05 | Welcome and housekeeping | Administrative | Marcus |
  | 10:05–10:35 | Q1 Financial Review | Information + Discussion | Maya Chen |
  | 10:35–11:05 | Signal Launch: Early Data and Implications | Information + Discussion | Marcus |
  | 11:05–11:45 | Enterprise Sales Strategy | Discussion | James Wu + Board |
  | 11:45–12:15 | Headcount Plan | Decision | Marcus + Board |
  | 12:15–12:45 | Series A Timing and Strategy | Discussion | Marcus + Board |
  | 12:45–12:55 | Action Items Review | Administrative | Marcus |
  | 12:55–1:00 | Executive Session (without CEO) | Investor-only | Board |

  ---

  ## Pre-Read Requirements

  **Due by April 23, 11:59 PM PT (required reading):**
  - Q1 2024 Finance Package (P&L, balance sheet, cash flow, KPI dashboard) — 8 pages
  - Q1 Board Deck (slides 1–22)
  - Signal Launch Data Summary — 3 pages
  - Headcount Plan Proposal — 2 pages

  **Supplemental (optional):**
  - Enterprise Pipeline Tracker (Salesforce export)
  - Series A Comparable Transactions Summary

  Board members are expected to have read all required materials before the meeting. The financial review section will assume familiarity with the Q1 numbers and will focus on discussion, not recitation of charts.

  ---

  ## Section-by-Section Agenda

  ### 10:05–10:35 | Q1 Financial Review (30 minutes)
  **Format:** 10-minute information share, 20-minute discussion
  **Owner:** Maya Chen (Controller), supported by Marcus
  **Pre-read:** Q1 Finance Package, Board Deck slides 1–8

  **Summary for board:** Q1 ARR landed at $1.75M, $350K (16.7%) below the $2.1M plan. The miss is concentrated in new ARR (31% below plan), driven by AE ramp lag and 2 enterprise deal slips. Cash at $4.2M; runway 10.2 months at current burn.

  **Key discussion questions:**
  1. Given the AE ramp dynamic, what is the board's assessment of the Q2 AE productivity trajectory? Are there benchmarks from portfolio companies we should be comparing against?
  2. The Q1 enterprise close rate of 45% vs. 65% plan — does the board view this as an AE execution issue, market timing issue, or competitive issue? This distinction matters for how we respond.
  3. Cash runway of 10.2 months (8.9 if we approve the full headcount plan) — is the board comfortable with this level of runway cushion going into a potential fundraise process?

  **Expected output:** Shared understanding of the Q1 result and alignment on the key variables to watch in Q2. Specific board guidance on enterprise close rate interpretation.

  ---

  ### 10:35–11:05 | Signal Launch: Early Data and Implications (30 minutes)
  **Format:** 10-minute information share, 20-minute discussion
  **Owner:** Marcus Chen
  **Pre-read:** Signal Launch Data Summary; Board Deck slides 9–14

  **Summary for board:** Signal launched April 15. In the first 10 days: 31% of eligible customers enabled Signal (vs. 25% target), NPS improved 4 points to 42, and trial volume hit a weekly record. The early data is positive. One flag: trial-to-paid conversion dropped from 22% to 18% — we're investigating whether it's trial quality or product friction.

  **Key discussion questions:**
  1. Signal users are scoring 8 points higher on NPS than non-users. If this holds, it suggests Signal is meaningfully improving product stickiness — does the board see this as a retention play, an expansion play, or both? This affects how we prioritize Signal development.
  2. The trial-to-paid conversion decline concerns us. Jennifer, given your product background — what's your instinct on whether this is a traffic quality issue or an in-product issue, and how quickly should we expect to know?
  3. If Signal adoption reaches 50%+ of eligible customers in Q2, does the board think we should begin pricing Signal as a separate tier rather than a bundled feature? This has significant ARR implications.

  **Expected output:** Board input on Signal's strategic positioning and pricing. Shared view on the conversion decline risk level and response threshold.

  ---

  ### 11:05–11:45 | Enterprise Sales Strategy (40 minutes)
  **Format:** Discussion (no formal presentation)
  **Owner:** James Wu (VP Sales) presenting, board discussion
  **Pre-read:** Enterprise Pipeline Tracker (supplemental), Board Deck slides 15–18

  **Context:** Enterprise (deals >$30K ARR) represents 60% of our ARR target but drove the Q1 miss. The Q2 pipeline contains 6 enterprise opportunities with committed timelines. The board has context on enterprise dynamics from portfolio companies that would be valuable here.

  **Key discussion questions:**
  1. Our Q1 close rate on enterprise was 45% vs. 65% plan. James believes this reflects deal timing, not competitive weakness — but we haven't confirmed it. How should we distinguish between a timing problem and a structural close rate problem?
  2. Two of our 6 Q2 enterprise pipeline deals are healthcare organizations (following the Meridian Health close). Should we lean into healthcare as a vertical focus, or is this coincidental? Board members with healthcare enterprise experience: does this signal something?
  3. The second AE hire in our headcount plan is on hold pending Q2 close rate data. At what Q2 close rate would the board recommend proceeding with the hire vs. deferring further?

  **Expected output:** Board guidance on how to interpret the enterprise close rate data; view on vertical focus; decision input for the headcount discussion (next item).

  ---

  ### 11:45–12:15 | Headcount Plan (30 minutes)
  **Format:** Discussion leading to a decision/recommendation
  **Owner:** Marcus Chen + Board
  **Pre-read:** Headcount Plan Proposal (required)

  **Context:** Management proposes approving 3 of 5 planned roles (Senior AE, Marketing Manager, CSM) and deferring the second AE and data engineer. Full plan: $765K incremental annual cost, 8.9 months runway. Modified plan: $430K incremental cost, 9.2 months runway. Finance recommendation: modified plan.

  **Key discussion questions:**
  1. The Marketing Manager hire is tied to the Signal campaign and Series A narrative. Sarah, from a fundraise preparation standpoint, how important is it to have a marketing leader in place before Series A conversations begin?
  2. The CSM hire addresses a customer-to-CSM ratio that's stretching the team. If we defer and Q2 churn ticks up, we'll wish we hired earlier — but if Q2 is strong, we'll have excess CS capacity. What's the board's risk tolerance on CS capacity vs. churn risk?
  3. The data engineer is the most expensive role and the hardest to justify pre-Series A. Finance recommends deferring. Is there a Q2 milestone that would change that calculus?

  **Expected output:** Board recommendation on headcount plan approval: full plan / modified plan / defer all. Management will act on this recommendation.

  ---

  ### 12:15–12:45 | Series A Timing and Strategy (30 minutes)
  **Format:** Discussion
  **Owner:** Marcus Chen + Board
  **Pre-read:** Board Deck slides 19–22; Series A Comparable Transactions Summary (supplemental)

  **Context:** Current runway is 10.2 months (9.2 with modified headcount plan). A Series A process typically requires 4–6 months from first meeting to close. Beginning in Q3 leaves approximately 5 months of process time before runway becomes critical.

  **Key discussion questions:**
  1. The board has direct relationships with Series A funds. Given what you're seeing in the market right now — is Q3 2024 a favorable time to begin Series A conversations, or would Q4 be better positioned if we have 2 additional quarters of Signal data?
  2. Our planned raise is $10–12M. Given the Q1 ARR miss and the current trajectory, what ARR level or growth rate would the board want to see before beginning formal Series A conversations?
  3. Which board members are prepared to make direct investor introductions and to whom? Can we align on the top 3 target funds and the outreach approach before leaving this meeting?

  **Expected output:** Alignment on Series A timing (Q3 vs. Q4); ARR threshold that triggers formal process; specific introduction commitments from board members.

  ---

  ### 12:45–12:55 | Action Items Review (10 minutes)
  Review all commitments and follow-up items from today's meeting.

  | Action Item | Owner | Deadline |
  |---|---|---|
  | [To be populated during meeting] | | |

  ---

  ### 12:55–1:00 | Executive Session (without CEO)
  Standard board practice: investor and independent board members only. No CEO/management present. Provides space for board members to discuss CEO performance, company trajectory, and governance matters privately.

  **Next board meeting:** To be scheduled — proposed July 25, 2024 (Q2 results review)
tips:
  - "The biggest board meeting mistake is making it a reporting session. Board members have read the pre-read — the meeting should be for discussion and decisions, not for management to narrate slides."
  - "Allocate time based on importance, not on how much material exists. Finance teams often over-present on the numbers and under-invest in strategic discussion — flip this ratio."
  - "Specific discussion questions are the difference between a productive board meeting and a rambling one. If your agenda item has no discussion questions, it should be a pre-read, not an agenda item."
  - "The executive session at the end is board governance best practice — even if nothing sensitive needs to be discussed. It signals that the board has space to discuss management performance openly."
  - "Send the board deck at least 48 hours in advance and enforce it. A board member who hasn't read the materials can't contribute productively — the meeting becomes an information dump instead of a strategic conversation."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - board-finance-update
  - investor-update-email
  - fundraising-narrative
  - scenario-planning-framework
tags:
  - board
  - investor-relations
  - governance
  - meeting-planning
  - founder
---
