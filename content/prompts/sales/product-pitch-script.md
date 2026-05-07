---
title: "Write a 2-minute product pitch script"
slug: product-pitch-script
function: sales
role: sales-enablement
description: "Generate a tight, outcome-focused 2-minute pitch script for a new product feature that reps can deliver in demos, calls, and events."
useCase: "Use this prompt when a new product feature ships and you need reps to articulate its value quickly and consistently. A 2-minute pitch is the core unit of sales communication — this prompt ensures every rep leads with outcomes, not functionality."
prompt: |
  You are a sales enablement leader and expert communicator. Write a 2-minute verbal pitch script for a new product feature.

  Context:
  - Product name: {{product_name}}
  - New feature name: {{feature_name}}
  - What the feature does (technical): {{feature_description}}
  - The problem it solves for the customer: {{customer_problem}}
  - Who benefits most (role/persona): {{primary_persona}}
  - Key outcome or result it delivers: {{key_outcome}}
  - One customer proof point or early result (if available): {{proof_point}}
  - What they had to do before this feature existed: {{before_state}}

  Write a 2-minute pitch script (~250–280 words at natural speaking pace) that:

  - Opens with a relatable description of the customer's problem (the "before state") — NOT with the feature name or what it does
  - Transitions to the feature as the solution only after the problem is established
  - Uses the "before/after/proof" structure: what life was like before, what's different now, real evidence it works
  - Explains the feature in plain English — no technical jargon, no acronyms unless you define them
  - Anchors to a specific outcome ({{key_outcome}}) with a number if possible
  - Closes with a question that invites the prospect to see themselves in the scenario

  Format:
  - Write it as a natural script with natural paragraph breaks and pauses
  - Add [PAUSE] cues where the speaker should stop and wait for a reaction
  - Add one [OPTIONAL: share screen here] cue if there's a logical moment to show the feature
  - Include a 10-word "elevator version" at the end — the single-sentence version for hallway conversations

  Tone: confident, conversational, credible. Not excited-sales-voice.
variables:
  - "{{product_name}}"
  - "{{feature_name}}"
  - "{{feature_description}}"
  - "{{customer_problem}}"
  - "{{primary_persona}}"
  - "{{key_outcome}}"
  - "{{proof_point}}"
  - "{{before_state}}"
exampleInput: |
  product_name: Velox
  feature_name: Smart Queue Routing
  feature_description: AI-powered inbound lead routing that analyzes lead attributes and historical win data to assign leads to the best-fit rep in real time
  customer_problem: inbound leads are being routed by round-robin or territory, not by which rep is most likely to win the deal
  primary_persona: VP of Sales, Revenue Operations
  key_outcome: 23% increase in inbound win rates in beta, with no change in lead volume
  proof_point: Cascade Software saw a 31% lift in Q1 win rate within 60 days of enabling the feature
  before_state: manually reviewing and reassigning leads, or leaving it to round-robin and hoping for the best
exampleOutput: |
  [Script]

  Here's something most sales teams live with but never question: your best rep and your newest rep get the same inbound leads. Round-robin is fair, but fair isn't the same as optimal. [PAUSE]

  If you think about the leads your team closed last quarter versus the ones that went quiet — a lot of that outcome had nothing to do with the lead quality. It had to do with which rep got it.

  [OPTIONAL: share screen here]

  What we built is called Smart Queue Routing. Instead of distributing leads by turn order or geography, it analyzes every inbound lead against your historical close data — deal size, industry, persona, source, timing — and routes it to the rep most likely to convert it, in real time.

  No manual reassignment. No RevOps sitting in Salesforce moving records around. The routing happens before a rep even sees the lead in their queue.

  In beta, teams using Smart Queue Routing saw a 23% increase in inbound win rate on average — without changing lead volume, sales headcount, or process. Cascade Software saw a 31% lift in their Q1 win rate within 60 days of enabling it. [PAUSE]

  So my question for you is: if you looked at your last 90 days of inbound leads, how confident are you that the right rep got the right lead every time?

  ---

  Elevator version: "AI routing that sends every inbound lead to the rep most likely to close it."
tips:
  - "Rehearse the script before delivering it — a scripted pitch sounds scripted unless you internalize it. Run it 3 times before using it on a real call."
  - "The [PAUSE] cues are where you learn the most. If the prospect doesn't react during a pause, the problem framing isn't landing — you haven't found their pain yet."
  - "Customize the proof point for each prospect's industry if possible. A logistics company cares about case studies from logistics, not SaaS."
  - "Ask Claude to write a 30-second version of the same pitch for trade show or event use — different format, same structure."
  - "After reps deliver this pitch a few times, run a debrief: which part of the script consistently gets the best reaction? Move that earlier."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - competitive-battle-card
  - onboarding-email-sequence
  - case-study-template
tags:
  - pitch
  - product-messaging
  - sales-enablement
  - script
---
