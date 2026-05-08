---
title: "Outline a data-storytelling deck for leadership"
slug: data-storytelling-deck-outline
function: data
role: business-intelligence
description: "Produce a slide-by-slide outline for a data-storytelling deck — built around a single argument, with charts that earn their place and a clear ask."
useCase: "Use this prompt when prepping a deck that walks leadership through an analysis or recommendation. Forces a single-argument structure that resists the temptation to dump every chart you ran."
prompt: |
  You are a senior BI analyst outlining a data-storytelling deck for a leadership audience. The deck is in service of one argument or recommendation; every slide either advances the argument or supports a specific objection.

  Inputs:
  - Topic and core argument: {{topic_argument}} (the one-sentence claim the deck makes)
  - Audience: {{audience}} (who's in the room, what they care about, what they'll push back on)
  - Decision or action being asked for: {{ask}}
  - Available data and analyses: {{available_analyses}}
  - Time slot for the deck: {{time_slot}} (e.g., "20 minutes including discussion")
  - Anticipated objections: {{objections}}

  Produce:

  ## Argument in One Sentence
  Restate the core argument cleanly. If the input version is fuzzy or hedged, sharpen it.

  ## Deck Skeleton
  10–14 slides max. For each slide:
  - **Title** (a complete-sentence headline that states the slide's point, not a topic label)
  - **Chart or content** (chart type, what it shows, what data it uses)
  - **Talking point** (1–2 sentences the presenter says with this slide)
  - **What this slide does for the argument** (sets context / advances the argument / addresses objection X / closes with the ask)

  Recommended structure (adapt to the argument):
  1. Cover slide — title states the recommendation
  2. The situation (1–2 slides) — what changed or what we observed that warrants this conversation
  3. The evidence (3–5 slides) — the analysis that supports the argument; each chart is a step in the chain
  4. Why other interpretations are wrong (1–2 slides) — pre-empt the most likely pushback
  5. The recommendation (1 slide) — concrete, scoped, with cost
  6. Risks and what we'll watch (1 slide)
  7. The ask (1 slide) — what we need from this room

  ## Charts to Cut
  Three to five charts that are tempting but don't earn a slide:
  - Charts that show context but don't advance the argument
  - Charts that re-state the same point another chart already made
  - Charts that introduce a side-debate
  - Pretty visuals with low information density

  ## Anticipated Objections and Responses
  For each objection in {{objections}}:
  - One-sentence response
  - The slide or backup chart that supports the response
  - Whether to put it in the main deck or appendix

  ## Appendix
  List 3–6 backup charts to keep ready but not in the main deck. These respond to specific objections or follow-up questions.

  ## Length / Pacing
  Match {{time_slot}}. As a rough rule, allow 1.5–2 minutes per main-deck slide including questions.

  Tone: opinionated, structured, focused. The deck makes one argument well; it does not catalogue the analysis.
variables:
  - "{{topic_argument}}"
  - "{{audience}}"
  - "{{ask}}"
  - "{{available_analyses}}"
  - "{{time_slot}}"
  - "{{objections}}"
exampleInput: |
  topic_argument: We should pause new account expansion in the SMB segment for two quarters and redirect spend to mid-market. SMB unit economics have decayed past the point where additional acquisition is worth funding.
  audience: CEO, CRO, CFO, VP Marketing. CRO is sponsor of the SMB GTM motion and will resist; CFO is sympathetic; CEO has not formed a view.
  ask: Approval to pause SMB paid acquisition starting next quarter and reallocate $1.8M of marketing budget to mid-market and partner channels.
  available_analyses: |
    - SMB CAC trend over 18 months (rising 40% YoY)
    - SMB LTV by cohort (declining)
    - SMB gross retention by cohort (eroding)
    - Mid-market CAC and LTV (stable, healthy)
    - Funnel comparison SMB vs. mid-market
    - Sales productivity by segment
    - Revenue mix shift over time
    - 2-quarter forecast under each scenario
  time_slot: 25 minutes including discussion
  objections: |
    1. CRO: "We're abandoning a segment that's still 30% of new logos."
    2. CRO: "Mid-market can't absorb $1.8M of additional spend."
    3. CFO: "What's the revenue impact of pausing?"
    4. CEO: "If we pause and the market shifts, can we restart?"
exampleOutput: |
  ## Argument in One Sentence
  SMB unit economics have decayed past the threshold at which additional spend is worth funding; we should redirect $1.8M to mid-market for two quarters and reassess.

  ## Deck Skeleton (12 slides)

  **Slide 1 — Cover.** Title: "Pause SMB acquisition for two quarters; redirect $1.8M to mid-market."
  - Sets the room's expectation up front. The headline is the recommendation, not the topic.

  **Slide 2 — The situation: SMB CAC has risen 40% over 18 months.** Line chart of SMB blended CAC, monthly, with a target line.
  - Talking point: "Our SMB acquisition cost has grown faster than any other segment. Eighteen months ago we were under target; today we're 60% over."
  - Sets context.

  **Slide 3 — At the same time, SMB LTV has declined.** Cohort-based LTV chart, last 6 cohorts.
  - Talking point: "It isn't just that we're paying more; we're keeping less. Cohort LTV has dropped 22% over the same period."
  - Sets context — pairs with slide 2 to introduce the unit-economics framing.

  **Slide 4 — The result: SMB LTV/CAC is below 1.0 on the most recent two cohorts.** Bar chart of LTV/CAC by quarterly cohort, with the 1.0 line marked.
  - Talking point: "We are now spending more to acquire SMB customers than we expect to earn from them. This is the central fact."
  - Advances the argument — the headline number.

  **Slide 5 — Mid-market unit economics are healthy and stable.** Side-by-side LTV/CAC by segment, last 6 cohorts.
  - Talking point: "Mid-market sits at 3.4 LTV/CAC — well above the threshold. The contrast with SMB is the case for reallocation."
  - Advances the argument.

  **Slide 6 — Sales and CSM productivity is also higher in mid-market.** Bar chart of revenue per AE and revenue per CSM by segment.
  - Talking point: "It isn't just acquisition. Our delivery cost per dollar of revenue is lower in mid-market. The margin stack favors the segment we're recommending."
  - Advances the argument.

  **Slide 7 — Why this isn't a SMB-product problem.** Funnel comparison, SMB vs. mid-market, with the SMB conversion rates flat over 18 months.
  - Talking point: "SMB conversion hasn't degraded — the funnel works. The problem is that the cost of getting customers into the funnel has risen and the value at the bottom has fallen. This is a market and channel problem, not a product fix."
  - Addresses objection 1 (CRO: abandoning a segment) — pre-empts the "fix the product" reflex.

  **Slide 8 — Mid-market can absorb the spend with achievable productivity assumptions.** Spend-absorption model showing $1.8M reallocation across paid, partner, and outbound channels with assumed CAC.
  - Talking point: "Reallocating $1.8M doesn't require heroics. The plan assumes mid-market CAC stays in its current band and partner motion doubles within its existing capacity."
  - Addresses objection 2 (CRO: mid-market can't absorb spend).

  **Slide 9 — Revenue impact: ~$2.4M ARR forgone in SMB; ~$3.1M expected from mid-market reallocation over two quarters.** Two-quarter forecast comparison.
  - Talking point: "The pause forgoes about $2.4M of SMB ARR. The mid-market reallocation, even with conservative assumptions, projects $3.1M. The trade is positive — and that's before accounting for the difference in retained revenue."
  - Addresses objection 3 (CFO: revenue impact).

  **Slide 10 — This is reversible.** Restart playbook — the existing SMB acquisition assets, channels, and learnings preserved; restart timeline 6 weeks.
  - Talking point: "We're not exiting the segment. We're pausing acquisition. If unit economics improve or our market read changes, we can be back in market within six weeks."
  - Addresses objection 4 (CEO: restartability).

  **Slide 11 — Risks and what we'll watch.** Three risks: SMB market does an inflection we miss; mid-market CAC rises; partner motion under-delivers. Each with a leading indicator and a trigger to revisit.
  - Talking point: "Three things would change the recommendation. We'll watch each monthly and bring this back if any trip."
  - Builds credibility — pre-empts the implicit "what could go wrong" question.

  **Slide 12 — The ask.** Approve pause of SMB paid acquisition starting next quarter and $1.8M reallocation as scoped. Confirm review cadence: monthly check-in, full reassessment in 6 months.
  - Closes with the ask.

  ## Charts to Cut
  - **18-month revenue mix shift chart.** Visually compelling but doesn't advance the unit-economics argument; risks a side-debate about whether the mix shift is good or bad.
  - **SMB churn reasons breakdown.** Real, but starts a "fix churn first" conversation that's a separate decision.
  - **Detailed funnel-by-funnel breakdown.** Slide 7 covers the point at the right altitude; deeper detail belongs in appendix.
  - **CAC by paid channel within SMB.** The argument is segment-level, not channel-level; channel detail invites tactical debate.
  - **Competitor pricing comparison.** Tempting framing but unverifiable in the room and not load-bearing for the argument.

  ## Anticipated Objections and Responses
  1. **"We're abandoning 30% of new logos." (CRO)** Response: "We're pausing new acquisition, not exiting. We continue to support and grow existing SMB customers. The 30% logo count is real, but the dollar contribution is below the cost to acquire — see slide 4." Backup: appendix chart of SMB ARR contribution vs. cost over time.
  2. **"Mid-market can't absorb $1.8M." (CRO)** Slide 8 carries this. Backup: appendix detail of channel-level absorption capacity.
  3. **"What's the revenue impact?" (CFO)** Slide 9. Backup: appendix sensitivity table — revenue impact under three CAC assumptions for mid-market.
  4. **"If the market shifts, can we restart?" (CEO)** Slide 10. Backup: detailed restart playbook in appendix.
  5. **"Why not raise SMB pricing instead?" (likely from CEO)** Backup-only response: appendix chart showing SMB price elasticity from the last increase. Not in main deck — would dilute the argument.

  ## Appendix
  - SMB ARR contribution vs. cost, last 18 months
  - Channel-level mid-market absorption capacity
  - Revenue impact sensitivity by CAC assumption
  - Detailed restart playbook
  - SMB price elasticity from prior increase
  - Sales rep productivity raw numbers

  ## Length / Pacing
  12 slides, 25 minutes. Average ~2 minutes per slide leaves room for the discussion that will concentrate on slides 7, 9, and 12. Consider rehearsing slides 1–6 to fit in 10 minutes so half the slot is available for the harder conversation.
tips:
  - "Slide titles should be sentences that make the point, not topic labels. 'Q1 SMB CAC' is a label; 'SMB CAC has risen 40% over 18 months' is a slide."
  - "One argument per deck. The single most common failure of data decks is making three arguments at once and losing all of them."
  - "Pre-empt objections inside the deck, not in Q&A. The slide that answers the loudest expected objection should be in the main deck, not the appendix."
  - "Build a real appendix and use it. The appendix is where you show your work for the people who will push hardest; it doesn't pollute the main flow."
  - "Cut more charts than feels comfortable. The deck's job is to walk an audience through one argument, not to display all the analysis you ran."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - exec-dashboard-narrative
  - dashboard-design-spec
  - data-request-triage
tags:
  - data-storytelling
  - presentation
  - bi
  - leadership
  - business-intelligence
---
