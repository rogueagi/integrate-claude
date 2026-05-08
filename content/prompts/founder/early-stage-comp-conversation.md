---
title: "Frame an early-stage comp conversation when you can't compete on cash"
slug: early-stage-comp-conversation
function: founder
role: early-hiring
description: "Build a comp conversation that's honest about what early-stage companies can offer and what they can't — with specific framing for cash, equity, and the harder-to-quantify upside."
useCase: "Use this when a finalist candidate is comparing your offer to a Series B+ company's offer and you can't match the cash. Founders often try to win these conversations by overselling equity, hyping mission, or hand-waving about 'unique opportunity.' The candidates worth hiring see through it. This prompt produces a framing that's honest about the tradeoff and lets the candidate decide cleanly."
prompt: |
  You are an experienced founder who has had this conversation many times. You know that strong candidates respect honesty about tradeoffs more than spin, and that the wrong frame loses you the candidate AND damages your reputation. Help me have this conversation well.

  The candidate: {{candidate_name}}
  Role: {{role}}
  Their current comp: {{current_comp}}
  The competing offer they have: {{competing_offer}}
  My offer: {{my_offer}} (cash + equity)
  My company stage: {{stage}}
  My realistic post-money valuation: {{valuation}}
  How I think the candidate is weighing the decision: {{candidate_priorities}}
  What I genuinely believe about the equity upside: {{honest_equity_take}}
  What I CAN'T match: {{cannot_match}}
  What I CAN offer that the larger company can't: {{can_offer}}

  Build me three things:

  1. **The framing for the conversation.** A 5-7 sentence setup the candidate will hear in the meeting. It should:
     - Acknowledge directly that I can't match cash
     - Refuse to hype equity in unrealistic ways
     - Be specific about the tradeoff
     - Position the decision as theirs, not mine to win

  2. **Equity math, honest version.** Walk through the equity offer with realistic exit scenarios:
     - Failure case (most common): equity is worth $0
     - Modest outcome (3-5x return): what the equity is worth
     - Strong outcome (10-30x): what the equity is worth
     - Frame this as "expected value is hard to know — here's the math, you decide your risk tolerance."

  3. **The non-cash, non-equity case.** A specific list of 3-5 things they'd actually get at this stage that they wouldn't at the larger company. Be concrete, not "more impact." Examples: "you'd be in every product decision for the next 18 months," "you'd hire your own team," "you'd build the function from zero." Specific to their role and seniority.

  4. **What NOT to say.** 3-4 phrases or moves I should avoid that founders commonly make in this conversation.

  5. **A graceful close.** A specific way to end the conversation that doesn't pressure the candidate. Includes a clear next step and a stated date by which they should decide.

  Tone: respectful of the candidate's intelligence. They've heard the standard pitch. Be honest and let them choose.
variables:
  - "{{candidate_name}}"
  - "{{role}}"
  - "{{current_comp}}"
  - "{{competing_offer}}"
  - "{{my_offer}}"
  - "{{stage}}"
  - "{{valuation}}"
  - "{{candidate_priorities}}"
  - "{{honest_equity_take}}"
  - "{{cannot_match}}"
  - "{{can_offer}}"
exampleInput: |
  candidate_name: Priya
  role: Founding PM at Linework (vertical SaaS for ops teams)
  current_comp: $215k base + ~$80k stock at Notion
  competing_offer: Series B vertical SaaS company at $230k base + $90k stock + $30k signing
  my_offer: $180k base + 0.75% equity (4-year vest, 1-year cliff)
  stage: post-seed, $48k MRR
  valuation: $14M post-money on the seed
  candidate_priorities: She's said she cares most about scope and learning. Has a 1-year-old — second concern is stability and not regretting a risky move. Said cash matters but she has runway from Notion stock vesting through 2026.
  honest_equity_take: 0.75% at $14M post is $105k of paper value at the post-money. If we 5x to $70M (Series A path or modest outcome) it's $525k. If we hit a $300M outcome (real win), it's ~$2.2M before further dilution. Most likely outcome statistically: zero. I genuinely believe the modest outcome is plausible if we execute, but the strong outcome is a 15-20% probability and the zero outcome is the base case.
  cannot_match:
    - $50k of base
    - $30k signing
    - Stability of a Series B company with real revenue
  can_offer:
    - First PM, full ownership of product strategy
    - Direct work with the founders, decisions in days not quarters
    - Hire her own team within 12 months
    - Working on a product where the user is exactly who she's been writing about for 3 years
    - Equity upside with material asymmetry vs. Series B equity
exampleOutput: |
  THE FRAMING (what to say)

  "Priya — I want to talk about the offer directly. The Series B can pay you more cash and offers a more stable risk profile. I can't match the $50k base or the $30k signing. I'm not going to try to convince you that 0.75% of Linework is worth more than the cash difference — that depends on what we do over the next 4 years, and neither of us knows that yet.

  What I'd rather do is be honest about the actual tradeoff: you'd be making roughly $50k/year less in cash for the next 1-2 years, in exchange for being the first PM at a company where you'd own product strategy directly and where the equity has real asymmetric upside. Whether that's the right trade for you depends on things only you know — your runway, your risk tolerance, what you want to be doing in 3 years. I can't decide that for you, and I don't want to pressure you to."

  EQUITY MATH (the honest version)

  At today's valuation:
  - Your 0.75% is paper-worth ~$105k at the post-seed valuation. (This is paper, not realized.)

  At a Series A in 12 months at, say, $50M post-money (modestly successful execution):
  - With ~25% additional dilution by then, your stake might be ~0.55%. At $50M, that's ~$275k of paper value.

  At a $200M outcome 5-7 years out (a genuinely strong outcome — what we'd call winning):
  - With further dilution, perhaps ~0.4% remaining. At $200M, that's ~$800k.

  At a $1B+ outcome (a very strong outcome — meaningful but not insane):
  - Roughly $2-3M, depending on dilution.

  The base case statistically is $0. Most seed-stage companies don't reach Series B. I believe we have a real shot at the modest-to-strong range, but I won't pretend that's certain. The honest expected value here is hard to compute. The right way to think about it is: are you OK if it's $0, and is the upside meaningful enough to you to take that risk?

  THE NON-CASH, NON-EQUITY CASE (specific to Priya)

  - First PM. You own product strategy. Every roadmap call goes through you. At a Series B, you'd be PM #5-8 on a more mature product.
  - You'd hire your own team within 12 months. By Series A, you have a PM under you. At the Series B, you'd be reporting into a Director and inheriting a structure.
  - The user is exactly the person you've been writing about. The closest match between candidate's interest and company's product I've ever seen.
  - Decision speed. Things you propose on Monday ship by Friday. The Series B has process for good reasons; we don't yet.
  - You'd build the product function. At year 4 here, you've built and led a 5-7 person team and own the function. That's a different career trajectory than IC PM at a Series B.

  WHAT NOT TO SAY

  - "Equity is the way to wealth." Sounds like a sales pitch and most candidates have heard it.
  - "Trust me, this is going to be huge." Even if you believe it, saying it makes you look unserious.
  - "We'll find a way to bridge the gap." If you can't, don't promise. If you can, just do it.
  - "Most people regret turning down founding-team roles." Statistical nonsense and patronizing.

  GRACEFUL CLOSE

  "I'd love to have you here, but the right decision for you might not be us, and that's OK. Take through Friday to think about it. If you want to talk through the equity math more, jump on a call with our existing investor [name] who can give you a less-biased perspective. If by Friday you're a yes, we'll send the formal offer. If you're a no, I'd ask one favor — tell me what would have changed your mind. I want to learn from this conversation either way.

  No pressure between now and Friday. I'm not going to chase you. Take the time."
tips:
  - "Honesty wins more candidates than spin at the seed stage. Sophisticated candidates can detect when an equity case is being oversold and downgrade everything else you say."
  - "Always run the equity math out loud. Vague claims about 'huge upside' are worse than specific math with realistic probability ranges."
  - "Mention the $0 outcome explicitly. Founders who pretend it's not possible lose credibility. Founders who name it and then make the case anyway look serious."
  - "Don't try to close the candidate in the same conversation. Strong candidates need 24-72 hours to think and talk to people. Pressure tactics select against the people you most want."
  - "Consider offering an investor backchannel call. Letting your candidate talk to an existing investor (without you on the call) signals confidence and gives them honest information."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - founder-led-recruiting-outreach
  - first-hire-job-description
  - early-hire-trial-project
tags:
  - hiring
  - compensation
  - equity
  - candidate-conversation
  - early-stage
---
