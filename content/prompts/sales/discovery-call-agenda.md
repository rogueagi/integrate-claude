---
title: "Write a discovery call agenda and talking points"
slug: discovery-call-agenda
function: sales
role: ae
description: "Generate a structured first-call agenda with opening, transitions, and talking points that keep the conversation productive and on track."
useCase: "Use this prompt to build a shareable agenda you send to prospects before a discovery call — and use as your own guide during it. A pre-sent agenda sets expectations, signals professionalism, and reduces no-shows."
prompt: |
  You are a senior account executive who runs highly effective discovery calls. Create a discovery call agenda and internal talking points guide for an upcoming call.

  Call details:
  - Prospect name: {{prospect_name}}
  - Prospect title: {{prospect_title}}
  - Company: {{company_name}}
  - Call duration: {{call_duration}} minutes
  - Call goal: {{call_goal}} (e.g., understand their workflow pain, qualify the opportunity, determine if there's a fit worth pursuing)
  - Your product/service: {{your_product}}
  - What they came in knowing about you: {{prospect_context}}

  Produce two outputs:

  ## OUTPUT 1: Prospect-Facing Agenda (to send in the calendar invite or pre-call email)
  - Professional, brief, and outcome-oriented
  - Lists 4–5 agenda items with approximate time allocations
  - Includes a note that you've reserved 5 minutes at the end for their questions
  - Signals that this is a two-way conversation, not a pitch

  ## OUTPUT 2: Internal Talking Points Guide (for your eyes only)
  For each agenda item, write:
  - Your opening line or transition to introduce the section
  - 1–2 key things to accomplish in that section
  - A "bridge" line to transition to the next section

  Include:
  - An opening that establishes rapport and sets the agenda collaboratively (not unilaterally)
  - A section for understanding their current state and goals
  - A section for uncovering problems and their implications
  - A section for sharing relevant proof/positioning (NOT a full demo — just enough to be credible)
  - A closing that nails down a specific next step
  - A "if they go off-topic" recovery line

  Tone for internal guide: direct coach voice — what to say, not just what to cover.
variables:
  - "{{prospect_name}}"
  - "{{prospect_title}}"
  - "{{company_name}}"
  - "{{call_duration}}"
  - "{{call_goal}}"
  - "{{your_product}}"
  - "{{prospect_context}}"
exampleInput: |
  prospect_name: Tom Wiesner
  prospect_title: Director of Operations
  company_name: Cascade Logistics
  call_duration: 45
  call_goal: understand whether their dispatch coordination problem is severe enough to justify a platform purchase
  your_product: real-time fleet operations platform
  prospect_context: responded to a LinkedIn ad, filled out a form mentioning "dispatch bottlenecks"
exampleOutput: |
  ## OUTPUT 1: Prospect-Facing Agenda

  Subject: Our call Thursday — agenda

  Tom — looking forward to our conversation. Here's a quick outline so we make good use of the time:

  Thursday, [Date] | 45 minutes

  1. Quick intros and context (5 min)
  2. Your current operations and where things are working / breaking down (15 min)
  3. Where Cascade wants to be in the next 12 months (10 min)
  4. What we've seen work for similar logistics teams — and whether it's relevant here (10 min)
  5. Your questions + next steps if there's a fit (5 min)

  My goal is to understand your situation well enough to know if we can genuinely help — and to be straight with you if we can't. No pressure, no pitch deck.

  See you Thursday.

  ---

  ## OUTPUT 2: Internal Talking Points Guide

  OPENING (5 min)
  Opening line: "Tom, appreciate you making time. I looked at what you filled out on the form — you mentioned dispatch bottlenecks, which is exactly the kind of thing I want to understand better. Before I do any talking, can I ask a few questions to make sure I'm not wasting your time with things that aren't relevant?"
  Key goal: Establish that this is their meeting, not yours. Get them talking first.
  Bridge: "Let me start at the 30,000-foot level — tell me about Cascade's operations today. How many routes, how many drivers, what does a typical dispatch day look like?"

  CURRENT STATE (15 min)
  Opening line: [Use their answer to your bridge question to go deeper]
  Key goals: (1) Understand the dispatch workflow — where does coordination break down? (2) Get a sense of team size and whether this is a people problem or a process/tool problem.
  Recovery if off-topic: "That's useful context — I want to come back to that. But first, help me understand the dispatch coordination piece you mentioned, because that's where I think I can add the most value today."
  Bridge: "So it sounds like the main friction is [restate what they said]. Has that always been the case, or did something change that made it worse?"

  GOALS + IMPLICATIONS (10 min)
  Opening line: "Let me shift forward a bit — where does Cascade want to be operationally in the next year? More routes, better margins, faster dispatch times?"
  Key goals: (1) Connect today's pain to future goals. (2) Get them to say what it costs them NOT to fix this — in time, money, or customer impact.
  Bridge: "If dispatch is still a bottleneck 12 months from now, what does that cost you? In driver time, missed pickups, whatever the right metric is for you."

  POSITIONING (10 min)
  Opening line: "Let me share what I've seen work for teams with a similar profile — and you tell me if any of it resonates."
  Key goal: Share 1–2 specific customer stories, NOT a feature list. Frame everything as "here's what teams like yours have done" not "here's what our product does."
  Bridge: "That's roughly what we do — but I don't want to keep talking about us. Does any of that match what you're dealing with?"

  CLOSE + NEXT STEP (5 min)
  Opening line: "Based on what you've told me — [restate their problem and goal] — I think there's something worth exploring here. What would be most useful as a next step for you?"
  Key goal: Propose a specific next step with a date. Don't leave it at "I'll send you some info."
  If no clear next step: "What would need to be true for this to be worth continuing the conversation?"
tips:
  - "Send the prospect-facing agenda 24 hours before the call, not 5 minutes before. It reduces no-shows and gets prospects thinking about their answers."
  - "The internal guide is for you to internalize, not read from. If you're reading talking points on a call, the prospect can tell."
  - "The most powerful part of a discovery call is the bridge question after each section — it keeps momentum without feeling like an interrogation."
  - "If the prospect tries to turn the call into a demo, say: 'I want to show you exactly the right thing — let me ask a couple more questions so we don't waste time on parts that aren't relevant to you.'"
  - "After the call, run the crm-note-summary prompt to capture what you learned in a structured format."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - sales-discovery-call-prep
  - crm-note-summary
  - proposal-executive-summary
tags:
  - discovery
  - call-agenda
  - ae
  - sales-process
---
