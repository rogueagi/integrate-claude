---
title: "Craft the narrative for a fundraising pitch"
slug: fundraising-narrative
function: executive
role: board-prep
description: "Build the narrative spine of a fundraising pitch — the through-line a CEO actually says in the room, before slides exist or get redesigned."
useCase: "Use this when you're 60 days out from a fundraising round and the deck is starting to take shape, but the core narrative is still mushy. The companies that close strong rounds are the ones whose CEO can tell the story without slides. This prompt produces that story — the spine the deck wraps around, not the bullet list the deck becomes."
prompt: |
  You are a venture partner who has heard 500 pitches and led the rounds for 30 of them. Help {{ceo_name}} of {{company_name}} craft the narrative spine for a {{round_type}} pitch.

  Inputs:
  - Company and what it does in one sentence: {{company_one_liner}}
  - Founding insight — the thing the founder believes that others did not, when they started: {{founding_insight}}
  - The change in the world that makes this the right time: {{why_now}}
  - The thing that has worked so far (proof points, metrics, customer behavior): {{traction}}
  - The hard thing the company has done (built, hired, shipped, weathered) that no competitor has: {{hard_won}}
  - The bigger company this could become — described as a state of the world, not a market size: {{ambition}}
  - Round size and what the capital is for: {{round_ask}}
  - The two questions every investor will ask: {{anticipated_questions}}
  - The honest weakness of the story: {{honest_weakness}}

  Produce a narrative spine in eight beats. Each beat is the story moment, not the slide. The CEO should be able to deliver the entire pitch standing without slides if needed.

  ## Beat 1: The Opening Moment
  A specific scene, customer quote, or number that lands the company in the room within 30 seconds. Not "we are X." A moment.

  ## Beat 2: The Insight
  The founding insight in plain language. What did {{ceo_name}} see that others didn't, and how did that shape the company? Two sentences. Concrete.

  ## Beat 3: Why Now
  The change in the world that makes this the right moment. Specific. Recent. Not "AI is changing everything."

  ## Beat 4: What Has Worked
  The proof points that say the bet is real. Numbers. Customer names. Behavior, not opinion. The investor should leave the section thinking "the data is moving."

  ## Beat 5: The Hard-Won Thing
  The non-trivial thing this company has built that competitors can't easily replicate. Be specific. "Our team" is not a hard-won thing; "our 14-month compliance certification with three named healthcare regulators" is.

  ## Beat 6: The Ambition
  Where this goes if it works. Described as a state of the world: "in five years, when a healthcare CIO buys an analytics platform, this is the question they ask first." Not "we will be a billion-dollar company."

  ## Beat 7: The Round
  What we're raising, what the capital is for in three buckets, and what hitting plan looks like. Tight. Investors mostly know the structure; they want to know the specific bets the capital funds.

  ## Beat 8: The Honest Frame
  Address {{honest_weakness}} on your own terms. The version of this story that works long-term names the weakness before the investor does. One sentence on what we don't yet have, and the path to having it.

  After the eight beats, also produce:

  ## The Three Hardest Questions and Drafted Answers
  Investor questions designed to break the story. For each, a 3–4 sentence answer that acknowledges the question, holds the frame, and moves forward.

  ## The Single Memorable Line
  One sentence the investor should walk out of the room repeating to their partners. Test: would the lead investor's partner remember it 24 hours later in the partner meeting?

  Constraints:
  - First-person singular voice. The CEO is telling the story.
  - Specific over abstract. Names, numbers, scenes.
  - No "category-defining," "10x better," "last-mover advantage."
  - The narrative must be deliverable in 12 minutes spoken, slides or no slides.
  - Take a position on the ambition. Investors fund conviction, not hedged frames.
variables:
  - "{{ceo_name}}"
  - "{{company_name}}"
  - "{{round_type}}"
  - "{{company_one_liner}}"
  - "{{founding_insight}}"
  - "{{why_now}}"
  - "{{traction}}"
  - "{{hard_won}}"
  - "{{ambition}}"
  - "{{round_ask}}"
  - "{{anticipated_questions}}"
  - "{{honest_weakness}}"
exampleInput: |
  ceo_name: Lila Hassan
  company_name: Vantage Systems
  round_type: Series D (planned, ~12 months out)
  company_one_liner: Vantage is the analytics platform that mid-market healthcare providers and payers run their operations on
  founding_insight: when we started, every analytics platform was horizontal and treated healthcare as one vertical among many; we believed healthcare was actually three or four distinct buying problems and needed a platform that took compliance, integration, and clinical workflow as the core, not the add-on
  why_now: HIPAA-era AI guidance is forcing every healthcare CIO to re-evaluate their analytics stack in the next 18 months; mid-market healthcare M&A is consolidating buyers who can buy at scale; horizontal incumbents are too distracted to respond before the window closes
  traction: $31.6M ARR (from $4M three years ago); healthcare segment NRR 138%; 47 healthcare logos with average ACV $400K; AI compliance module shipped April 2027 with 9 paying customers in the first week
  hard_won: 14-month build of a healthcare-native compliance audit module with three named compliance partners; relationships with the top 5 healthcare M&A consolidators that drive future buyer concentration; a customer success motion that delivered 138% segment NRR
  ambition: a future where the question for any mid-market healthcare CIO is not "should I buy an analytics platform" but "should I buy Vantage, and what does it run on?"
  round_ask: $90M Series D, used to expand healthcare go-to-market in the US, build the EU footprint that healthcare-buyer M&A is creating, and accelerate two specific module bets that compete with horizontal incumbents
  anticipated_questions: 1) why won't a horizontal player like Helio just spin up a healthcare team and out-resource you; 2) is mid-market healthcare really a big enough market to support a $1B+ revenue business
  honest_weakness: we are still small; we have 47 healthcare logos and the next year is about whether that becomes 100 or stays at 60; the platform bet works at the larger logo count, not yet at this one
exampleOutput: |
  ## Beat 1: The Opening Moment
  Three weeks ago, the CIO of a 4,000-bed mid-market provider — Brookline Health — signed a $1.2 million, five-year contract with us. He sent me a one-line email after he signed: "You were the only company that took the compliance question seriously."

  That sentence is why I'm in this room.

  ## Beat 2: The Insight
  When we started Vantage three years ago, every analytics platform on the market treated healthcare as a vertical to support — a logo on the marketing page. The bet we made was that healthcare wasn't a vertical. It was three or four different buying problems — compliance, clinical workflow, payer-side analytics, integration into legacy hospital systems — and that a platform built for those problems first, not retrofitted, would win the segment by a margin that would compound.

  We were right. The horizontal players are still general; we are healthcare-deep. Today our average healthcare ACV is $400,000 and our segment NRR is 138%. Those numbers don't happen in a category where the market is treating you as one of many.

  ## Beat 3: Why Now
  Three things have shifted in the last 12 months. HIPAA-era AI guidance from HHS is forcing every healthcare CIO to re-evaluate their analytics stack inside the next 18 months — most of them have not yet decided who they're buying. Mid-market healthcare M&A is consolidating the buying side: the consolidators who acquired 14 mid-market providers in the last six months are buyers we know, and they buy at scale. And the horizontal incumbents are distracted — they're climbing toward enterprise, fighting each other on capital, and they will not respond to healthcare-vertical pressure inside this window.

  This is the year the category shape locks. The companies that lead healthcare in 2028 will lead it in 2032.

  ## Beat 4: What Has Worked
  Three years ago we had $4 million in ARR. Today we are at $31.6 million. We grew the healthcare segment from 18% of revenue to 60% in 18 months because that's where the unit economics were better — and we listened. Our healthcare segment NRR is 138%; the company-wide blended is 128%. Our last 47 healthcare logos closed at an average ACV of $400,000 — eight times the ACV of the SMB experiment we ran and shut down because it didn't deliver.

  The shape of the business is what tells the story. Customers expand inside Vantage because the platform gets more valuable with every clinical workflow we touch. The expansion is not an upsell motion. It's a usage motion.

  ## Beat 5: The Hard-Won Thing
  We spent 14 months building the AI compliance module. Three named compliance partners signed off on it. We shipped it on April 30 of this year, and nine paying customers turned it on in the first week. That work — the 14 months of healthcare-native compliance plumbing — is the thing a horizontal player cannot build in a quarter, cannot build by acquiring a company, and cannot build by doubling capital.

  This is the moat. It is built out of the hard, slow work that healthcare buyers can verify and that horizontal players don't want to do.

  ## Beat 6: The Ambition
  In five years, when a mid-market healthcare CIO is asked "what does your analytics layer run on?" — the answer is Vantage. Not "we use a few tools." Not "we have a Snowflake instance with some BI." The answer is one word, and the question is not whether they buy us, but what they build on top of us.

  That's the company we are building.

  ## Beat 7: The Round
  We're raising $90 million in Series D. The capital is for three things. First, doubling US healthcare go-to-market — we have 47 logos and we believe the right number is 200 inside 24 months. Second, opening EU healthcare ahead of the consolidation that's about to happen there — same dynamic as the US, twelve months later. Third, two specific module bets — clinical workflow and payer-side analytics — that take the platform deeper than horizontal players will follow.

  At plan, the capital takes us from $32 million to $130 million ARR, profitable, and the unambiguous market leader in mid-market healthcare analytics by end of 2029.

  ## Beat 8: The Honest Frame
  We are still small. 47 healthcare logos is not 200. The platform thesis works at the larger logo count, not yet at this one. The next 12 months are about whether we can take healthcare from 47 to 100 logos — and that's the bet this round funds. If we miss that, the thesis stays a thesis. If we hit it, the platform bet becomes obvious to the next round and to the public market.

  That is the trade I want you in on.

  ## The Three Hardest Questions and Drafted Answers

  **Q: Why won't Helio or another horizontal player spin up a healthcare team and out-resource you?**
  "They will try. Helio raised $120M Series C and is climbing toward enterprise — they'll have a healthcare initiative inside 12 months. The reason they won't catch us is structural: their core motion is PLG and marketing-led; healthcare buying is procurement-led with 18-month sales cycles and compliance pre-qualification. Their motion isn't designed for it. We have a 14-month head start on the compliance work, the customer base, and the partner relationships. By the time they pivot the motion, we have 200 logos. The race isn't capital — the race is which of us spent the last three years doing healthcare-specific work."

  **Q: Is mid-market healthcare really big enough to support a $1B+ revenue business?**
  "Yes, and the math is concrete. There are roughly 4,000 mid-market healthcare provider and payer organizations in the US that fit our ICP. At our current ACV trajectory ($400K and rising as we add modules), 30% penetration is $480M ARR — without EU, without enterprise, without payer-deep modules. The question isn't whether the market is big enough. It's whether we can capture the segment before someone else owns it."

  **Q: What happens if you don't hit 100 logos in 12 months?**
  "Then we have a different conversation in your partner meeting next year. I won't pretend the thesis is bulletproof against missing the milestone — it's not. The mitigations are: a sales motion that has been proven in the last 18 months, a partner channel that's now meaningfully producing pipeline, and the AI module which is showing 31 of our top 50 customers expressing immediate buying interest. If we miss the 100-logo target, the most likely cause is execution velocity, not market demand. That's a manageable problem; market demand failures are not."

  ## The Single Memorable Line
  "Horizontal companies serve every healthcare buyer fine — and none of them well. We are the platform a healthcare CIO actually loves."
tips:
  - "Open with a moment, not a thesis. The first 30 seconds determine whether the investor is leaning forward."
  - "Name the weakness on your own terms. Investors trust founders who address the elephant before being asked."
  - "The 'why now' beat is the one most pitches butcher. Be specific about the change in the world. 'AI is hot' is not a why-now."
  - "Practice the eight beats without slides. If you can deliver the pitch standing in a coffee shop, the deck becomes easier."
  - "After every pitch meeting, write down the question you handled worst. Update the answer. The third version of the pitch is the one that closes."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - board-update-narrative
  - exec-podcast-talking-points
  - investor-update-monthly
  - press-statement
tags:
  - fundraising
  - pitch
  - narrative
  - investor-relations
  - ceo
---
