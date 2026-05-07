---
title: "Respond to the 'your price is too high' objection"
slug: objection-handler-price
function: sales
role: ae
description: "Generate a confident, non-defensive response to price objections that reframes value and advances the deal."
useCase: "Use this prompt when a prospect pushes back on price during a deal. Price objections are usually value gaps in disguise — this prompt generates a response that uncovers the real concern and reestablishes ROI without discounting."
prompt: |
  You are a senior account executive coaching another rep through a price objection. Generate a response strategy and specific language for handling this situation.

  Deal context:
  - Prospect name: {{prospect_name}}
  - Prospect title: {{prospect_title}}
  - Company: {{company_name}}
  - Deal stage: {{deal_stage}} (e.g., post-demo, post-proposal, verbal commitment stage)
  - Your price / proposal amount: {{price}}
  - What the prospect said exactly (or approximate): {{objection_quote}}
  - What you know about their budget situation: {{budget_context}}
  - The ROI or value case you've built so far: {{value_case}}
  - Competing alternatives they've mentioned (if any): {{alternatives}}

  Generate:

  ## 1. Objection Diagnosis (internal, not to say aloud)
  What is the real concern behind this price objection? Is it:
  - A genuine budget constraint (no money)?
  - A value gap (they don't see enough ROI yet)?
  - A negotiating tactic (testing if you'll budge)?
  - A prioritization issue (competing with other spending)?
  - Something else?
  Name the most likely diagnosis and why, based on the context.

  ## 2. Immediate Response (what to say next)
  A 3–5 sentence verbal response that:
  - Does NOT immediately defend the price or offer a discount
  - Opens with empathy, not defensiveness
  - Asks a clarifying question to confirm the real objection
  - Keeps the deal alive without giving up margin

  ## 3. Value Reframe (if the real issue is a value gap)
  Talking points that reconnect the investment to the ROI case — using their numbers, not yours.

  ## 4. If They Push for a Discount
  Guidance on how to handle a discount request: what to offer (if anything), what to ask for in return, and what to avoid saying.

  ## 5. The Question That Moves the Deal Forward
  One specific question to ask that either resolves the objection or surfaces the real blocker.
variables:
  - "{{prospect_name}}"
  - "{{prospect_title}}"
  - "{{company_name}}"
  - "{{deal_stage}}"
  - "{{price}}"
  - "{{objection_quote}}"
  - "{{budget_context}}"
  - "{{value_case}}"
  - "{{alternatives}}"
exampleInput: |
  prospect_name: Rachel
  prospect_title: VP of Marketing
  company_name: Stratum Media
  deal_stage: post-proposal, two weeks from quarter end
  price: $84,000 annually
  objection_quote: "We love what you've shown us, but $84K is a stretch. We were thinking closer to $60K."
  budget_context: Rachel mentioned in discovery that they have a $120K martech budget for the year; unclear what else is in it
  value_case: we estimated 15 hours/week saved in manual reporting = ~$65K in team time annually, plus attribution clarity worth 10-15% improvement in campaign ROI
  alternatives: they mentioned evaluating one competitor who quoted $55K
exampleOutput: |
  ## 1. Objection Diagnosis
  This is most likely a combination of a negotiating tactic and a value gap — not a true budget constraint. Rachel mentioned a $120K martech budget in discovery, and $84K is 70% of that, which feels large when framed that way even if the ROI exceeds the cost. The competitor quote at $55K is giving her a benchmark that makes your number feel inflated. The "we love what you've shown us" opener is a positive signal — she wants to buy, she's trying to buy cheaper.

  ## 2. Immediate Response
  "Rachel, I appreciate you being direct — that's helpful. Before I respond to the number, help me understand: is the $60K a hard budget ceiling, or is the concern more about whether the value justifies the investment at $84K? Those are actually two different conversations, and I want to make sure I'm addressing the right one."

  [Wait for her answer before saying anything else about price.]

  ## 3. Value Reframe
  "Let me come back to the numbers we built together. We estimated about 15 hours a week in manual reporting time for your team — at a loaded cost, that's roughly $65K a year in team time alone. So at $84K, you're essentially breaking even on time savings in year one, and getting attribution clarity that you told me is worth 10–15% in campaign efficiency on top of that. Does the math still feel off, or is it more about where the $84K comes from in the budget?"

  ## 4. If They Push for a Discount
  Do not drop straight to $60K — that's a 29% discount that signals your price was inflated. If you're going to move at all:
  - Offer a smaller move (e.g., $76K) in exchange for something: a longer contract term, a faster signature date, a logo reference, or an expanded scope commitment
  - Say: "I can work with you on the number, but I'd need something in return to get there. If we could lock in a 2-year term, I can get to $76K. Does that work?"
  - Never discount without asking for something. It trains them that your prices are negotiable on demand.

  ## 5. The Question That Moves the Deal Forward
  "If the investment number weren't the issue — if we were at $60K today — would you be ready to move forward? I want to understand if price is the only thing between us and a yes."
tips:
  - "Never be the first to introduce a discount. Let them ask explicitly — and even then, ask what they'd give you in return."
  - "Run the 'diagnosis' section seriously. Responding to a negotiating tactic as if it's a budget constraint is one of the most common and costly mistakes in sales."
  - "If you can't articulate the ROI case in concrete numbers, the price objection will always win. Make sure the value case is built before you get to pricing conversations."
  - "After running this prompt, ask Claude: 'What are 3 things I should NOT say in response to this objection?' — the negative guidance is often as useful as the positive."
  - "The best outcome of a price objection conversation is learning whether price is actually the issue. If they wouldn't buy at $60K either, that's critical to know early."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - objection-handler-timing
  - deal-close-email
  - proposal-executive-summary
tags:
  - objection-handling
  - price
  - negotiation
  - ae
---
