---
title: "Build a tiered media pitch list for a specific story"
slug: media-pitch-list-builder
function: pr-comms
role: media-relations
description: "Generate a tiered list of journalists to pitch for a specific story, with the angle each one would care about and notes on past coverage."
useCase: "Use before any major announcement to build a target media list. Outputs a tiered list (Tier 1 anchor, Tier 2 trade, Tier 3 long-tail) with named journalists, recent coverage that signals fit, the specific angle to pitch each, and outreach order."
prompt: |
  You are a senior media strategist who has run launches at companies like Stripe, Notion, and Anthropic. Build a tiered media pitch list for {{company_name}}'s announcement about {{news_summary}}.

  Inputs:
  - News type: {{news_type}}
  - Industry/category: {{category}}
  - Target audience for the story: {{target_audience}} (e.g., engineering leaders, public-market investors, IT buyers)
  - Geographic focus: {{geo}}
  - What's strategically valuable: {{strategic_value}} (logos, executive credibility, recruiting, fundraising)
  - Embargo strategy: {{embargo_strategy}} (single exclusive, tiered embargo, or open release)
  - Past coverage relationships: {{past_relationships}}

  Build a list with three tiers:

  Tier 1 — Anchor outlets (1 to 3): The journalists most likely to drive the narrative. These get the exclusive or first call. Reserve for outlets with clear category authority.

  Tier 2 — Trade and category outlets (5 to 8): Verticals and trades whose readers are the buying audience. They follow the anchor coverage and add depth.

  Tier 3 — Long-tail and newsletter (5 to 10): Substacks, podcasts, niche newsletters, and analysts. Often higher engagement per reader than legacy media.

  For each journalist, output:
  - Name and outlet
  - Beat
  - One specific recent piece that signals fit (with a 1-sentence why-it-matches)
  - The angle to pitch them (different from the angle for other tiers)
  - Outreach order (day 1 / day 2 / launch day)
  - Risk note (e.g., "covered competitor 2 weeks ago, may decline" or "off this beat since January")

  Closing summary:
  - Recommended outreach sequence with rationale
  - Three reporters to deliberately NOT pitch and why
  - One contrarian outlet pick — someone unexpected who could break this story

  Avoid generic lists. If you don't have a real reason a journalist fits, leave them off.
variables:
  - "{{company_name}}"
  - "{{news_summary}}"
  - "{{news_type}}"
  - "{{category}}"
  - "{{target_audience}}"
  - "{{geo}}"
  - "{{strategic_value}}"
  - "{{embargo_strategy}}"
  - "{{past_relationships}}"
exampleInput: |
  company_name: Linden AI
  news_summary: $42M Series B for autonomous customer support, with three named customer wins from competitor churn
  news_type: Funding round + customer milestone
  category: Enterprise AI / customer support software
  target_audience: VPs of Customer Experience and CFOs at $50M-$500M ARR SaaS companies
  geo: US, with secondary UK/EU interest
  strategic_value: Recruiting senior engineers and accelerating enterprise pipeline
  embargo_strategy: Single exclusive to Tier 1, then 24-hour tiered embargo to Tier 2
  past_relationships: Founder did a podcast with Lenny Rachitsky in 2024; comms lead has placed two prior pieces with Ron Miller at TechCrunch.
exampleOutput: |
  TIER 1 — ANCHOR (single exclusive)

  Kate Clark, The Information — Beat: enterprise SaaS, AI applications. Recent piece: "AI support startups quietly losing logos." Match: she has a live thesis on consolidation; we are the named winning side. Pitch angle: data on competitor churn + Bessemer's investment thesis. Outreach: Day 1, exclusive offer. Risk: high traffic of competing pitches; needs decision in 24 hours.

  TIER 2 — TRADE AND CATEGORY (24-hour embargo, Day 2 outreach)

  Ron Miller, TechCrunch — Enterprise SaaS funding. Recent: covered Decagon's Series C. Match: existing relationship. Angle: funding + ARR milestone. Risk: low; covers most enterprise rounds.

  Aisha Counts, Bloomberg — AI enterprise adoption. Recent: piece on enterprise CIOs cutting AI vendor count. Angle: consolidation tailwind for category leaders. Risk: needs CFO-level source; offer Maya plus a customer CFO.

  Jordan Novet, CNBC — Cloud and enterprise software. Angle: market sizing of autonomous support. Risk: prefers public-company angles; lower priority unless Bessemer offers public-market context.

  CX Today (Charlie Mitchell) — CX/contact center trade. Angle: deflection benchmark data. Risk: low.

  Saastr (Jason Lemkin newsletter) — Recent: "AI support: the consolidation is here." Angle: founder POV piece, possibly co-bylined. Risk: he writes when he wants, hard to commit.

  Enterprise Software Times (analyst, Liz Miller, Constellation Research) — Angle: analyst note. Risk: long lead, may publish a week late.

  TIER 3 — LONG-TAIL AND NEWSLETTER (Launch day)

  Lenny Rachitsky (Lenny's Newsletter) — Existing relationship. Angle: a follow-up to the 2024 podcast: how the company scaled from there. Format: podcast or guest post.

  Packy McCormick (Not Boring) — Angle: contrarian take on the agentic-AI thesis from a customer-validation angle.

  Luke Metro (The CX Lead newsletter) — Practitioner audience. Angle: the customer churn story, told from the buyer's POV.

  Sarah Wang (a16z Future) — Angle: enterprise AI category analysis; would not lead the story but cite it.

  AIM Group analyst note — picks up trade citations downstream.

  Latent Space podcast (Swyx) — engineering audience for recruiting. Angle: founding engineer interview.

  RECOMMENDED SEQUENCE
  Day -3: Brief Kate Clark, offer The Information exclusive with 48-hour embargo.
  Day -1: If exclusive lands, send embargoed pitch to Tier 2 with 24-hour clock.
  Day 0: Tier 3 outreach goes live with the published piece as proof.

  DO NOT PITCH
  - Reuters / AP — funding rounds at this size rarely break through and the wire dilutes the exclusive value.
  - Casey Newton at Platformer — covers consumer-facing AI ethics, not enterprise SaaS rounds. Wrong beat.
  - Eric Newcomer — recently covered our lead investor's other portfolio company; conflict optics.

  CONTRARIAN PICK
  Stratechery (Ben Thompson). He rarely covers single-company news, but his recent essays argue support is the canonical agentic-AI use case. A briefing (not a pitch) on the customer data could yield a referenced mention in a future piece, which is worth more than coverage in most trades.
tips:
  - "Tier 1 should be one outlet for an exclusive, not three. 'Tier 1' is not a synonym for 'big.' It means the outlet that sets the narrative."
  - "Cut any reporter you can't tie to a specific recent piece. A list of names without coverage links is a list of strangers."
  - "Trade press moves enterprise buyers more than TechCrunch does. Don't undervalue Tier 2."
  - "The 'do not pitch' list is as important as the pitch list. Pitching the wrong reporter burns the relationship for the next launch."
  - "Newsletters and podcasts often outperform legacy outlets on conversion to pipeline. Track downstream signal, not just impressions."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - journalist-outreach-pitch
  - press-release-draft
  - embargo-request-email
tags:
  - media-list
  - press
  - media-relations
  - launch
  - planning
---
