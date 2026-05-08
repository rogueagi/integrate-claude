---
title: "Pitch a story to a specific journalist"
slug: journalist-outreach-pitch
function: pr-comms
role: media-relations
description: "Write a tailored pitch email to a named journalist that reads like you've read their last five pieces — because Claude has."
useCase: "Use when you're pitching a single reporter rather than blasting a list. The output references the journalist's recent coverage, finds the angle their readers would care about, and proposes a story they could actually write next week."
prompt: |
  You are a senior PR strategist who has placed bylines in TechCrunch, The Information, Stratechery, and Axios. Draft a pitch email to {{journalist_name}} at {{publication}} about {{story_subject}}.

  Inputs:
  - Journalist's beat: {{beat}}
  - Recent piece they wrote (link or summary): {{recent_piece}}
  - The angle they'd find interesting: {{angle}}
  - What I can offer them: {{offer}} (e.g., exclusive, embargoed access, data, named source, customer interview)
  - Why now: {{news_peg}}
  - Pitcher's relationship to the story: {{pitcher_role}} (founder, comms lead, customer, etc.)

  Write a pitch email that:
  - Has a subject line under 8 words that tells them what's inside, not "quick question" or "story idea"
  - Opens with one specific reference to {{recent_piece}} that proves I read it (not "loved your latest piece")
  - States the news/angle in the second paragraph in plain English
  - Offers something concrete: an exclusive, an embargo, a data drop, a named source, a contrarian take
  - Closes with a low-friction CTA — a 15-min call, a one-pager, a draft fact sheet
  - Is under 150 words total

  Voice rules:
  - No "I hope this email finds you well." No "circling back." No "wanted to put this on your radar."
  - Do not flatter. Reference work specifically or not at all.
  - Avoid the word "innovative." Avoid "thought leader."
  - Treat the journalist as a peer who is busy and skeptical.

  Output: subject line, then body, then a 2-bullet "why this should land" note explaining the angle choice.
variables:
  - "{{journalist_name}}"
  - "{{publication}}"
  - "{{story_subject}}"
  - "{{beat}}"
  - "{{recent_piece}}"
  - "{{angle}}"
  - "{{offer}}"
  - "{{news_peg}}"
  - "{{pitcher_role}}"
exampleInput: |
  journalist_name: Kate Clark
  publication: The Information
  story_subject: We're raising a $42M Series B led by Bessemer for autonomous customer support
  beat: enterprise SaaS, AI applications, late-stage venture
  recent_piece: Her piece last week on AI support startups quietly losing logos as customers consolidate vendors — she ID'd Forethought and Ada as exposed.
  angle: We're seeing the consolidation she described from the winning side — three customer wins in Q1 came from companies churning off Ada and one off Forethought.
  offer: Exclusive, embargoed access to round details and three customer references, including one named churn story
  news_peg: Funding closes Friday; planning to announce next Tuesday
  pitcher_role: Comms lead at the funded company
exampleOutput: |
  Subject: Series B + the consolidation you flagged last week

  Kate,

  Your piece on Ada and Forethought losing logos to consolidation lined up with what I'm seeing on our side. Three of our Q1 wins were companies churning off Ada, one off Forethought. We can name two of them on record.

  Linden AI is closing a $42M Series B led by Bessemer, announcing Tuesday. Happy to give you exclusive embargoed access — the round, the customer churn data, and a 20-min call with Maya Okafor (CEO) and Talia Roth at Bessemer on the consolidation thesis.

  If useful, I can send a one-pager today. Tuesday 8am ET embargo lifts.

  — Sara, Linden AI

  Why this should land:
  - The opener references Kate's specific reporting (companies named) rather than generic flattery, which signals this isn't a blast.
  - The exclusive + named customer churn data is the kind of asset that turns a passing pitch into a Tuesday lead story for The Information.
tips:
  - "Read at least two of the journalist's recent pieces before drafting. The opener must prove it."
  - "Match the offer to the publication's economics. The Information wants exclusives. Axios wants speed. Stratechery wants strategic angles, not news."
  - "If you can't articulate the angle in one sentence to a friend, the journalist won't write it. Tighten the angle first, draft second."
  - "Never pitch the same story to two reporters at the same outlet. They talk."
  - "If you don't hear back in 48 hours, one short follow-up is fine. Two is annoying. Three is a relationship killer."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - press-release-draft
  - media-pitch-list-builder
  - embargo-request-email
  - expert-quote-craft
tags:
  - media-pitch
  - journalist-outreach
  - press
  - media-relations
  - email
---
