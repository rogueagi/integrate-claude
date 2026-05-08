---
title: "Discovery script tuned for founder-led selling"
slug: founder-sales-discovery-script
function: founder
role: founder-sales
description: "Build a founder-voice discovery script that gets to real pain in 25 minutes — without sounding like a salesperson reading from a playbook."
useCase: "Use this in your first 20-50 sales calls. Founders often think they don't need a discovery script because they 'know the product cold.' That's exactly why their calls drift — they default to product-talk instead of pain-discovery. This prompt produces a script-shaped framework that's flexible enough to feel like a conversation but structured enough to consistently surface the buying signals you need."
prompt: |
  You are a sales operator who has helped founders run their first 100 sales calls. You know that founder-led sales has different rhythms than enterprise sales — the founder has more credibility but less time, and prospects expect honesty rather than polish.

  Build a discovery framework for:

  Product / company: {{product}}
  ICP: {{icp}}
  Likely persona on the other side of the call: {{persona}}
  Typical call length: {{call_length}}
  Top 3 pains the product solves: {{pains}}
  What I need to learn before quoting price or moving to a next step: {{must_learn}}
  Things that have surprised me on past calls (good or bad): {{surprises}}
  Common reasons prospects say no after the call: {{lost_reasons}}

  Build a discovery framework with these sections:

  1. **The 3-minute open.** What I say to set up the call. Not "tell me about you" — a direct statement of what I think is going on for them and an invitation for them to redirect.

  2. **The 5 questions you must ask, in priority order.** For each question:
     - The question itself, written in conversational founder voice
     - What it's actually testing for (the underlying signal)
     - What a green flag answer looks like
     - What a red flag answer looks like
     - A natural follow-up question

  3. **Pain calibration moment.** A specific transition where I confirm the pain is real and quantified. Sample language for this turn.

  4. **The one question to ask about buying process.** Most founders skip this. Make it natural and direct.

  5. **The transition to the next step.** Sample language for either (a) proposing a follow-up demo, (b) proposing a pilot, or (c) gracefully disqualifying. Include all three.

  6. **The 3 things to NOT do during discovery.** Specific anti-patterns founders fall into.

  7. **Post-call recap email template.** A 5-line email I send within 2 hours summarizing what we discussed, what's true, and what's next.

  Tone: founder-voice. Direct, specific, not salesy. The prospect should feel like they're talking to the person who built the thing — because they are.
variables:
  - "{{product}}"
  - "{{icp}}"
  - "{{persona}}"
  - "{{call_length}}"
  - "{{pains}}"
  - "{{must_learn}}"
  - "{{surprises}}"
  - "{{lost_reasons}}"
exampleInput: |
  product: Linework — mobile-first ops platform for shift handoffs, incident logs, and floor visibility for mid-market apparel/logistics ops teams
  icp: 200-2000-employee multi-site companies in apparel or logistics, with a Director or VP of Ops as the buyer
  persona: Director of Ops — usually 5-10 years in operations, responsible for 2-5 distribution centers, owns budget up to ~$200k/year
  call_length: 30 minutes
  pains:
    - Morning shift handoff is chaotic and takes 30-60 min per site
    - Director has no real-time visibility into what's happening at remote sites
    - Incident reporting is inconsistent across sites, making performance comparison impossible
  must_learn:
    - Number of sites and headcount per site
    - What they use today (tools and processes)
    - Who else is involved in the buying decision
    - Real timeline (urgency) and budget reality
    - What would make a pilot a "success" for them
  surprises:
    - Often the buyer says they have "a system" that turns out to be Excel + Slack + a tribal knowledge handoff
    - Sometimes IT is a hidden veto we didn't know about
    - Some directors care more about reporting/visibility than the handoff itself
  lost_reasons:
    - "I need to talk to IT first" — and IT kills it
    - "Now's not the right time" — usually means they don't feel the pain hard enough
    - "We're going to build something internally" — usually a deflection from a real concern they didn't share
exampleOutput: |
  DISCOVERY FRAMEWORK — Linework, Director of Ops persona

  THE 3-MINUTE OPEN

  "Hi [name] — thanks for the time. Before we get into anything specific, I want to be honest about how I'd like to use the next 30 minutes. I'm not going to demo first. I'd rather spend 20 minutes understanding what's actually going on at [their company] and 10 minutes showing you the parts of our product that are relevant. Some of this is going to feel like I'm asking a lot of questions — that's because most products in our space promise to solve problems they don't actually understand. I'd rather understand yours first, and then tell you whether we're a fit. Sound good?"

  Note: this is a permission-set. It buys you the right to spend 20 minutes on discovery without the prospect getting impatient.

  THE 5 QUESTIONS

  Question 1: "Walk me through what your morning looks like — from the time the first shift starts until you've got eyes on what's happening at all your sites."
  - Testing for: where the actual pain shows up, who's involved, how chaotic it is.
  - Green flag: they describe a real, painful sequence — phone calls, Slack, "I usually find out from [someone] when something's wrong."
  - Red flag: "It's pretty smooth, our managers handle it." (They're not feeling the pain; deal is unlikely.)
  - Follow-up: "When something goes wrong at the site you're not at, how do you find out?"

  Question 2: "What are you using today to run shift handoff and incident reporting?"
  - Testing for: real tooling stack, IT entanglement, switching costs.
  - Green flag: "Honestly, Excel and Slack and a paper clipboard." Or: "We bought [competitor] last year and nobody uses it." Both are buying signals.
  - Red flag: "We just rolled out [enterprise system] last quarter." (Switching costs too high; deal is unlikely soon.)
  - Follow-up: "What does [tool they named] do well, and where does it fall down?"

  Question 3: "If we waved a magic wand and the morning was easy, what would change for you specifically? Like, your own day-to-day."
  - Testing for: whether the buyer feels the pain personally (they do = deal moves) or sees it as someone else's problem (deal stalls).
  - Green flag: "I'd stop getting calls at 6am" or "I could spend my mornings on actual strategy."
  - Red flag: "It would be nice for the DC managers." (No personal pain = weak buyer urgency.)
  - Follow-up: "How often does that happen now — being pulled into something at 6am?"

  Question 4: "If you decided this was the right thing to do, walk me through how a decision actually gets made at [company]. Who else is involved?"
  - Testing for: real buying process, IT veto, procurement, executive sponsor.
  - Green flag: "I have budget up to $X. For something bigger I'd loop in [VP/CFO], but for a pilot I can decide."
  - Red flag: "It would have to go through IT and procurement, which usually takes 4-6 months." (You need to know now, not later.)
  - Follow-up: "Has IT been part of approving software at the operations layer before, or is this kind of thing your call?"

  Question 5: "If we did a 30-day paid pilot at one site and at the end of it the manager said 'I love this, never take it away' — what would have to be true for you to roll it out everywhere?"
  - Testing for: real success criteria, whether they've actually thought past the pilot, whether their definition of success matches what we deliver.
  - Green flag: specific criteria like "handoff time under 10 min" or "manager NPS over 7."
  - Red flag: "I'd just know." (Means there's no real evaluation framework — pilot will drift.)
  - Follow-up: "What would you measure? What would the manager have to say?"

  PAIN CALIBRATION MOMENT

  After question 3, pause and reflect back: "So if I'm hearing you right — the morning chaos is costing you [X hours of your week] and it's also the reason you're stuck reactive instead of strategic. Is that fair?" Wait for them to confirm or correct. This is the pain confirmation that everything else hangs on.

  THE BUYING PROCESS QUESTION (often skipped)

  Built into Question 4. If you didn't get a clear answer, ask: "I want to make sure I'm not wasting your time or mine — for something in the $80-120k range, what does the approval process look like? I'm trying to figure out if we're 30 days from a pilot or 6 months from procurement."

  TRANSITION TO NEXT STEP

  If they're warm and process is clear:
  "Here's what I'd propose. Pick one site — ideally the one whose manager is most fed up with the current setup. We do a 30-day paid pilot at $4k. We define three success criteria together. If we hit them, we expand to all sites. If we don't, you walk. Send the pilot agreement tomorrow?"

  If they need more info:
  "It sounds like the next step is for you to see the product in the context of your actual workflow. Can I do a 30-min focused demo next week, with [DC manager] on the call so they can react too? I'd rather have them in the room than report back what they thought."

  If they're not a fit (low pain, or buying process is 6+ months):
  "Honestly, based on what you've told me, I'm not sure now is the right time. We're better when the pain is sharp and the buyer can move quickly. If you want, let's stay in touch — and if things change in the next 6 months, reach out."

  THREE THINGS TO NOT DO

  1. Don't demo before discovery is done. The demo without context lands wrong every time.
  2. Don't quote price unprompted. Anchor on pilot price ($4k), not annual price ($120k).
  3. Don't fill silence after a question. They'll think — let them. Founders kill more deals by talking through silence than any other anti-pattern.

  POST-CALL RECAP EMAIL (send within 2 hours)

  Subject: [Their company] + Linework — recap and next step

  Hi [name],

  Quick recap of what I heard today:
  - Today: [their current process, in their words]
  - Pain: [the specific pain we agreed on]
  - Decision process: [what they told me about how they buy]
  - Success criteria for a pilot: [what we agreed]
  - Next step: [pilot proposal / demo / nothing]

  If I got any of that wrong, let me know. Otherwise — [specific next step with a date].

  — [Founder]
tips:
  - "Send the recap email within 2 hours of the call. It anchors what was discussed in writing, surfaces any misalignment, and dramatically improves close rate."
  - "Aim for 30/70 talk ratio — you talking 30%, prospect talking 70%. Founders almost always over-talk; track this and self-correct."
  - "If you can't get a clear answer to the buying process question, the deal is not real yet. Don't optimize the demo — get the answer."
  - "Always pre-commit to one disqualifying signal before the call. Knowing 'if X, I walk' keeps you honest when you start to like the prospect."
  - "After 20 calls, run all your post-call recaps through Claude and look for patterns. The questions that consistently produce 'oh I never thought of that' answers are the questions to lead with going forward."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - founder-led-sales-call-prep
  - lost-deal-postmortem-founder
  - design-partner-pitch
tags:
  - sales
  - discovery
  - founder-led-sales
  - script
  - early-stage
---
