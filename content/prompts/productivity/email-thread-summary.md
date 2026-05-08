---
title: "Summarize a long email thread into decisions and open asks"
slug: email-thread-summary
function: productivity
role: email
description: "Compress a 20-message email chain into a structured summary: decisions made, open questions, who owes what, and the current state of play."
useCase: "Use this when you've been added to a thread mid-conversation, when you need to brief a leader on a thread before a meeting, or when you're returning from PTO to a chain that has spiraled. Read once, get the state, move on."
prompt: |
  You are summarizing an email thread for me. I'll paste the full thread (oldest to newest or newest to oldest — figure it out from timestamps).

  Produce a structured summary with these sections:

  1. ONE-LINE STATE OF PLAY — what is the thread about and where does it stand right now
  2. KEY PARTICIPANTS — name, role/affiliation if known, their stance or interest
  3. DECISIONS MADE — explicitly agreed in the thread, with who agreed and when
  4. OPEN QUESTIONS — what is still being debated or unanswered
  5. OUTSTANDING ASKS — who owes what to whom, with implied deadlines
  6. RISKS / TENSIONS — any disagreements, frustration, or political dynamics
  7. WHAT I SHOULD DO NEXT — concrete next action for me specifically (given my role: {{my_role}})

  My role in the thread: {{my_role}}
  My specific concern or angle: {{my_angle}}

  Email thread:
  ---
  {{thread_content}}
  ---

  Be terse. Bullet points, no prose paragraphs. If a section has nothing, write "(none)" and move on.
variables:
  - "{{my_role}}"
  - "{{my_angle}}"
  - "{{thread_content}}"
exampleInput: |
  my_role: I was just CC'd; I run procurement and need to know if I'm on the hook
  my_angle: Whether vendor selection has actually been finalized or is still open
  thread_content: |
    [14 messages over 6 days between Marketing, Legal, Finance, and IT discussing whether to sign with HubSpot or Marketo, with the CMO pushing HubSpot, CFO worried about cost, IT flagging a security review delay, and Legal asking about data residency. Latest message: CMO says "let's pick something by Friday."]
exampleOutput: |
  STATE OF PLAY
  Marketing wants to sign a marketing automation platform by Friday; HubSpot is the front-runner but security and legal reviews are not closed.

  KEY PARTICIPANTS
  - Lena (CMO): pushing HubSpot, wants speed
  - David (CFO): cost-sensitive, hasn't blocked but flagged 3-year TCO
  - Raj (IT): security review for HubSpot still pending; estimated 5 more business days
  - Mira (Legal): asked HubSpot for EU data residency confirmation; no answer yet
  - You (Procurement): just looped in, no stance yet

  DECISIONS MADE
  - Shortlist narrowed to HubSpot vs Marketo (Tuesday)
  - Marketo deprioritized due to integration concerns (Wednesday)

  OPEN QUESTIONS
  - Will HubSpot security review finish in time for Friday signature?
  - Has data residency requirement been confirmed?
  - Is the CFO's TCO concern resolved or just deferred?

  OUTSTANDING ASKS
  - Raj owes: security review status update (no deadline given but Friday is implied)
  - HubSpot owes Mira: data residency confirmation
  - Lena expects: signed contract by Friday

  RISKS / TENSIONS
  - CMO speed vs. IT/Legal due diligence — classic
  - CFO has been quiet for 2 days; silence may not be agreement
  - "Pick by Friday" is a soft mandate, not a real deadline

  WHAT I SHOULD DO NEXT
  Reply asking: (1) is procurement formally driving the contract or supporting? (2) what's the actual must-sign-by date — Friday or end of month? Block any signature until security and legal greens are explicit.
tips:
  - "Tell Claude your role explicitly. The same thread looks completely different to procurement vs. marketing vs. legal."
  - "The 'tensions' section is the most useful and the one people skip. Surface political dynamics so you don't walk into a landmine."
  - "If you're the one being asked something in the thread, the WHAT I SHOULD DO NEXT section is your action item — don't just file the summary."
  - "Re-run this prompt every time the thread adds 10+ messages. Old summaries get stale fast."
  - "Paste the whole thread, not your manual extract. Models catch tone and dropped questions you missed."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - email-triage-batch
  - email-reply-draft
  - meeting-prep-brief
tags:
  - email
  - summary
  - threads
  - communication
  - synthesis
---
