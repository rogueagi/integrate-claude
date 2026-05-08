---
title: "Generate a 1-page meeting prep brief"
slug: meeting-prep-brief
function: productivity
role: calendar
description: "Turn a vague calendar invite and a few notes into a 1-page brief: goal, attendees, key questions, your stance, and the win condition."
useCase: "Use this in the 10 minutes before a meeting you didn't fully prep for. Beats walking in cold and beats over-preparing for a meeting that didn't need it."
prompt: |
  You are preparing me for an upcoming meeting. Build a 1-page prep brief from sparse inputs.

  Meeting title: {{meeting_title}}
  Scheduled by / organizer: {{organizer}}
  Other attendees and their roles: {{attendees}}
  Duration: {{duration}}
  Stated agenda or invite description: {{stated_agenda}}
  My role / why I was invited: {{my_role}}
  Relevant context I have (prior emails, threads, decisions): {{context}}
  What I'd consider a win from this meeting: {{win_condition}}

  Produce a 1-page brief with:

  1. ONE-LINE GOAL — what is this meeting actually for, in plain language (not the calendar title)
  2. LIKELY UNSPOKEN AGENDA — what the organizer probably wants but didn't say (be honest)
  3. KEY QUESTIONS I should bring — 3-5 questions, prioritized
  4. MY STANCE — given the context, what's my position on the likely decisions
  5. RISKS — what could go wrong in this meeting, what dynamics to watch
  6. WIN CONDITION — the specific outcome that means I succeeded
  7. IF I HAVE 5 MINUTES TO PREP — the absolute minimum to read or do beforehand

  Be brief. The whole brief should fit on one screen.
variables:
  - "{{meeting_title}}"
  - "{{organizer}}"
  - "{{attendees}}"
  - "{{duration}}"
  - "{{stated_agenda}}"
  - "{{my_role}}"
  - "{{context}}"
  - "{{win_condition}}"
exampleInput: |
  meeting_title: Q1 roadmap review
  organizer: VP Product
  attendees: VP Product, CEO, Head of Eng, Head of Design, me (Senior PM)
  duration: 60 minutes
  stated_agenda: "walk through the draft Q1 roadmap and align"
  my_role: I drafted the roadmap and own the customer-facing portion
  context: |
    - CEO has been pushing for a bigger AI bet this quarter
    - VP Product wants to keep two of three planned bets and defer the third
    - Eng head flagged staffing concern privately last week
    - My draft included three bets including AI; deferring AI would be controversial
  win_condition: Roadmap approved or committed to a path-to-approval; AI bet either green-lit or explicitly traded for something specific
exampleOutput: |
  ONE-LINE GOAL
  Get alignment from CEO, VP Product, Eng, and Design on what ships in Q1 — and confirm whether the AI bet is in or out.

  LIKELY UNSPOKEN AGENDA
  CEO wants the meeting to validate his AI push; VP Product wants to use the meeting to renegotiate scope down; Eng head wants to surface the staffing problem without being seen as blocking. The "alignment" framing hides a real tradeoff.

  KEY QUESTIONS
  1. If we keep all three bets, what's the explicit understaffing tradeoff and who decides? (Eng)
  2. If we cut the AI bet, what's the message to the team and the board? (CEO)
  3. What does "alignment" mean here — approval, or directional consent with revisions?
  4. What's the decision-maker for trade-offs surfaced in the meeting?
  5. Does customer-facing work (mine) get protected or used as the lever?

  MY STANCE
  Keep all three bets but only if the AI bet is scoped to a single shippable milestone, not a category. Otherwise cut AI and trade for additional customer-facing work. Don't let scope ambiguity become my problem to solve later.

  RISKS
  - CEO and VP Product disagree in the meeting; you're caught in the middle as the doc owner
  - Eng head doesn't bring up staffing → you ship a doomed plan
  - "Approved" outcome is actually "directional" and slips into a re-meeting next week

  WIN CONDITION
  Walk out with: (1) explicit list of bets in/out, (2) named decision-maker for any open tradeoff, (3) a deadline for the staffing question to be resolved.

  IF I HAVE 5 MINUTES
  Re-read the draft roadmap doc once with one question in mind: "What's the lever I'd pull if asked to cut 30% of scope right now?" That's the meeting's real question.
tips:
  - "The 'unspoken agenda' section is the most valuable. Most meetings go sideways because someone misread the room — this forces you to name it."
  - "Always end with a win condition. If you can't articulate it, the meeting probably isn't worth attending."
  - "Run this for any meeting where you're the second-most-senior person in the room. The most senior person rarely needs prep; you do."
  - "If your win condition is just 'don't get blamed', that's a sign the meeting shouldn't happen and you should fix that upstream."
  - "Re-read the brief 60 seconds before the meeting starts, then close it. Don't bring it in — it's a primer, not a script."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - weekly-calendar-audit
  - meeting-notes-synthesis
  - meeting-decline-template
tags:
  - meetings
  - prep
  - calendar
  - communication
  - influence
---
