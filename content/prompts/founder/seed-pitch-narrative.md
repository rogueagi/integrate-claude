---
title: "Draft the narrative arc for a seed pitch"
slug: seed-pitch-narrative
function: founder
role: fundraising
description: "Build a tight seed pitch narrative — problem, wedge, market, traction, ask — that survives 10 minutes of investor questions instead of falling apart in 3."
useCase: "Use this when you're prepping for seed pitch meetings and your deck is a deck but your story isn't a story. The deck is downstream of the narrative; if the narrative is weak, no design fixes it. This prompt produces a coherent 6-beat arc you can deliver verbally in 6-8 minutes, then defend in Q&A."
prompt: |
  You are a seed-stage investor and ex-founder. You've heard 1,500 pitches. The good ones tell a story; the bad ones recite features. Help me build the narrative.

  Company: {{company_name}}
  Stage: {{stage}}
  Round size: {{round_size}}
  Target investor type: {{investor_type}} (e.g., generalist seed, vertical specialist, angel)

  The raw inputs:

  Problem (in your customer's words, not yours):
  {{problem}}

  Wedge — the specific narrow place you start (a use case, a customer segment, a workflow):
  {{wedge}}

  Why now — what changed in the world that makes this possible/urgent today:
  {{why_now}}

  Market — TAM and how it's structured. What does winning look like in 7 years?:
  {{market}}

  What you've built and what works:
  {{product}}

  Traction (real numbers):
  {{traction}}

  Why you / why this team:
  {{team}}

  The ask — round size, what you'll do with it, what milestones it gets you to:
  {{ask}}

  What's missing or weak that you don't want to lead with:
  {{weaknesses}}

  Build a narrative with these 6 beats. Each beat should be 1-3 sentences in spoken form (not bullet points):

  1. **The problem** — concrete, in customer language, painful enough that an investor goes "oh that's real."
  2. **The wedge** — narrow enough to feel achievable. The specific opening move.
  3. **Why now** — what shift makes this possible today that wasn't 3 years ago.
  4. **The expanding market / the bigger game** — how you go from wedge to a real outcome. Bridge from $1M to $1B.
  5. **Traction + product** — proof the wedge is working. Real numbers, real customer behavior.
  6. **The team and the ask** — why you, what you're raising, what it gets you to.

  After the 6-beat narrative, give me:

  - **Three transition phrases** between beats so the talk track flows verbally.
  - **The two hardest investor questions** this narrative will provoke and how I should answer them.
  - **One thing in my inputs that's actually a strength I'm under-selling.**
  - **One thing in my inputs that's a weakness investors will spot — and how to address it before they ask.**

  Be opinionated. Don't write "this is a huge market" — investors have heard it. Be specific.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{round_size}}"
  - "{{investor_type}}"
  - "{{problem}}"
  - "{{wedge}}"
  - "{{why_now}}"
  - "{{market}}"
  - "{{product}}"
  - "{{traction}}"
  - "{{team}}"
  - "{{ask}}"
  - "{{weaknesses}}"
exampleInput: |
  company_name: Linework
  stage: pre-seed, 8 months in, $32k MRR
  round_size: $2M seed
  investor_type: generalist seed funds with vertical SaaS portfolios
  problem: Mid-market ops teams (200-2000 employees) run their physical operations on a stack of spreadsheets, Slack threads, and three different SaaS tools that don't talk to each other. When something goes wrong on the floor, finding the source of truth takes 45 minutes.
  wedge: Specifically, the morning shift handoff at apparel and logistics companies. We replace the stack of tools with one mobile-first handoff and incident log. ICP: ops manager at a 200-500 person company with 1+ physical site.
  why_now: AI lets us auto-summarize messy operations data in real time — that wasn't reliable 18 months ago. Also, the post-2020 generation of ops managers is expecting consumer-grade software, not SAP.
  market: Mid-market ops software is a $40B+ category dominated by legacy ERPs and custom-built internal tools. We start with apparel/logistics (Patagonia is a customer), expand to manufacturing, and become the operating system for mid-market physical operations.
  product: Mobile-first ops platform with shift handoff, incident log, and real-time floor visibility. Live with 14 customers including Patagonia ops team.
  traction:
    - $32k MRR (up from $8k 3 months ago)
    - 14 paying customers, 4 expansions in last 60 days
    - NPS 58
    - Patagonia signed last month
  team: Maya (CTO, 8 yrs eng at Stripe), Jordan (CEO, 6 yrs sales/PM at HubSpot, prior ops manager at a logistics startup). Domain expertise + technical depth.
  ask: $2M to extend runway 24 months, hire 2 engineers + 1 AE, get to $200k MRR and 3 enterprise logos.
  weaknesses:
    - We don't have SOC2 yet
    - Our ACVs are still mostly mid-market ($24k average), no real enterprise yet
    - Sales is still founder-led
exampleOutput: |
  THE NARRATIVE — 6 beats

  1. THE PROBLEM (15 seconds)
  When a 300-person logistics company has a problem on the floor at 7am, finding out what happened takes 45 minutes — across three SaaS tools, a Slack thread, and a spreadsheet someone forgot to update. Mid-market ops teams run their physical operations on duct tape. Their software stack is a generation behind what their finance and sales teams use, and the people doing the work hate it.

  2. THE WEDGE (20 seconds)
  We start in one specific place: the morning shift handoff at apparel and logistics companies, 200-500 people. One mobile-first app for the handoff and the incident log — replacing three tools and a spreadsheet. ICP is the ops manager who runs that handoff every morning. Narrow on purpose.

  3. WHY NOW (20 seconds)
  Two things happened. AI got reliable enough to auto-summarize the messy back-and-forth of an ops floor in real time — that didn't work 18 months ago. And the people running mid-market ops today grew up with consumer-grade apps; they're done with SAP screens. The buying pattern changed before the software did.

  4. THE EXPANDING MARKET (25 seconds)
  Mid-market ops software is a $40B+ category, and it's owned by ERPs that nobody likes and internal tools that nobody maintains. We win shift handoff first because it's where the pain is sharpest and the buyer is clearest. From there, we expand into incident management, then floor visibility, then we become the operating system for mid-market physical ops. Apparel today, logistics next, manufacturing after that.

  5. TRACTION + PRODUCT (25 seconds)
  We're 8 months in. $32k MRR — up from $8k three months ago. 14 paying customers, four of them expanded in the last 60 days, NPS 58. Patagonia's ops team signed last month — they're our first recognizable logo and they're already spreading internally to a second site. The product is live, mobile-first, and customers who turn it on stay.

  6. TEAM + ASK (20 seconds)
  Maya ran engineering at Stripe; she's built infra for problems harder than this. I [Jordan] sold and PMd at HubSpot, and before that I was an ops manager at a logistics startup — this is the product I wanted and couldn't buy. We're raising $2M to extend runway 24 months, hire two engineers and an AE, and get to $200k MRR with three real enterprise logos. We have $X soft-circled.

  TRANSITION PHRASES

  - Beat 1 → 2: "Where we start is narrower than the problem."
  - Beat 3 → 4: "Which is why what we're really building isn't a shift handoff app."
  - Beat 5 → 6: "Two more things you should know — who we are, and what we're raising for."

  THE TWO HARDEST QUESTIONS

  Q1: "Why won't a horizontal player like Notion or a vertical incumbent just build this?"
  Answer: "Mid-market ops is a workflow product, not a document product. Notion-class tools fail because the workflow has to live on a phone, in a noisy environment, with intermittent connectivity. Incumbents don't build it because their ACVs and sales motions are wrong for mid-market — they're enterprise-only. The gap we sit in is structural, not coincidental."

  Q2: "Your ACVs are $24k. How do you get to a $1B outcome?"
  Answer: "We get to $1B by either expanding ACVs into enterprise — which we're starting to do, Patagonia is the first — or by going broad in mid-market with a $40k-$80k ACV at scale. We don't need both, and our model gets us to a real outcome on either path. The mid-market path is bigger than people think because the incumbents have ignored it."

  STRENGTH YOU'RE UNDER-SELLING

  Your expansion rate. 4 of 14 customers expanded in 60 days. That's a 28% expansion rate at small numbers — investors will multiply this in their head. Lead beat 5 with the expansion data, not the MRR.

  WEAKNESS TO ADDRESS BEFORE THEY ASK

  No SOC2 + founder-led sales + no enterprise yet — strung together, an investor reads this as "they're going to hit a wall scaling into enterprise and have nothing prepared." Address it explicitly in the ask: "$300k of the $2M is earmarked for SOC2 + first AE so we don't get stuck where we are." Pre-empt the concern; don't wait for them to surface it.
tips:
  - "Practice this verbally 20 times before the first investor meeting. The narrative reads differently when spoken — you'll find the spots that don't flow."
  - "The wedge is the most important beat. If your wedge is too broad ('mid-market ops'), investors discount the whole pitch. If your wedge is too narrow without a credible expansion, they discount the outcome. Get this beat right."
  - "Open with the problem, not your company. 'Linework helps mid-market ops teams' is a weaker first sentence than the customer's pain in their own words."
  - "Pre-empt your weaknesses. Sophisticated investors will find them anyway. Bringing them up first signals self-awareness; making them dig signals defensiveness."
  - "If the narrative requires three slides of context before the listener understands the problem, the wedge is wrong. Tighten until the problem lands in 30 seconds."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - investor-objection-rebuttal
  - data-room-checklist
  - fundraise-status-tracker
tags:
  - fundraising
  - pitch
  - narrative
  - seed
  - storytelling
---
