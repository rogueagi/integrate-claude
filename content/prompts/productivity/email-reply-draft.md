---
title: "Draft an email reply that matches tone and answers everything"
slug: email-reply-draft
function: productivity
role: email
description: "Generate a complete email reply that answers every question in the original message and matches the sender's level of formality."
useCase: "Use this when an email needs a substantive reply — multiple questions, a tone you want to match, or a relationship you don't want to fumble. Beats writing the first draft from scratch and forgetting the third question buried in paragraph two."
prompt: |
  You are drafting an email reply for me. Read the inbound email carefully, then write a reply that:

  1. Answers EVERY explicit and implicit question (list them first internally before drafting)
  2. Matches the sender's tone and formality level (warm/cool, casual/formal, terse/verbose)
  3. Uses my voice: {{my_voice}}
  4. Is no longer than necessary — match the sender's length unless they asked for detail

  Inbound email:
  ---
  {{inbound_email}}
  ---

  My relationship to the sender: {{relationship}}
  Key facts I want to convey: {{key_points}}
  Things I will NOT commit to or share: {{do_not_say}}
  Desired outcome from my reply: {{desired_outcome}}

  Output in this order:
  - QUESTIONS DETECTED (numbered list of every ask in the inbound)
  - TONE READ (1 line: how the sender wrote — warm/clipped/anxious/formal/etc.)
  - DRAFT REPLY (ready to paste)
  - OPTIONAL ADD-ON (one sentence I could add if I want to be warmer or push the relationship forward)
variables:
  - "{{my_voice}}"
  - "{{inbound_email}}"
  - "{{relationship}}"
  - "{{key_points}}"
  - "{{do_not_say}}"
  - "{{desired_outcome}}"
exampleInput: |
  my_voice: direct, friendly, low on filler, occasional dry humor
  inbound_email: |
    Hey — circling back on the dashboard project. Quick questions:
    1) Are we still tracking to launch in early August?
    2) Did the design review go well last week — anything I should know?
    3) Do we need budget for the analytics tool we discussed, or can ops absorb?

    No rush, but want to mention this in Friday's exec sync. Thanks!
    — Janet
  relationship: COO, my direct manager, prefers crisp updates
  key_points: |
    - Launch slipped to mid-August (one week) due to design review feedback
    - Design review surfaced a critical UX issue we're fixing — net positive
    - Analytics tool needs $4k of new budget; ops budget can't absorb without cutting something else
  do_not_say: anything that sounds like blame on the design team
  desired_outcome: Janet has clean answers for Friday and isn't surprised by the slip or the budget ask
exampleOutput: |
  QUESTIONS DETECTED
  1. Launch timeline — still early August?
  2. Design review status / anything she should know?
  3. Budget for analytics tool — new ask or absorbed?

  TONE READ
  Friendly, brisk, low-formality — uses dashes and "no rush" but is clearly prepping for an exec moment.

  DRAFT REPLY
  Hey Janet —

  Quick answers ahead of Friday:

  1. Timeline: slipping one week to mid-August. Design review caught a UX issue worth fixing before launch — better to ship right than ship Tuesday.
  2. Design review went well overall. The team flagged a navigation pattern that would have hurt adoption; fix is in progress and doesn't add scope.
  3. Analytics tool needs a $4k budget add — ops can't absorb without trading off the vendor consolidation work. Happy to walk through the tradeoff if useful.

  Let me know if you want any of this packaged differently for the exec sync.

  — [Name]

  OPTIONAL ADD-ON
  "If it helps, I can drop a 5-line summary in your Friday prep doc directly."
tips:
  - "Always have Claude list the questions first. The #1 way to mishandle an email is to answer 2 of 3 asks and ship it."
  - "Match length. If they wrote three sentences, don't reply with three paragraphs. Length signals importance and you'll seem off-key."
  - "The OPTIONAL ADD-ON is gold for relationships you want to invest in. Use sparingly — every email isn't a moment."
  - "If you're declining or delivering bad news, paste in the do-not-say list explicitly. Models are too eager to hedge or apologize."
  - "For replies to your manager, tell Claude their preferred format (bullets vs prose). It changes the draft meaningfully."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - email-triage-batch
  - email-thread-summary
  - cold-email-response-decline
tags:
  - email
  - reply
  - tone
  - communication
  - drafting
---
