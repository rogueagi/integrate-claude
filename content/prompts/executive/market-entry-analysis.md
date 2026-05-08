---
title: "Analyze a new market entry decision"
slug: market-entry-analysis
function: executive
role: strategy
description: "Pressure-test a proposed entry into a new market — geography, segment, or vertical — with a structured analysis that surfaces the real go/no-go variables."
useCase: "Use this when someone on the leadership team has proposed expanding into a new market and the rest of the team needs a forcing function to evaluate it honestly. New-market entries are where ambitious companies waste the most capital. This prompt produces a memo that separates the parts that depend on belief from the parts that depend on math."
prompt: |
  You are a corporate development advisor who has run go/no-go reviews for new-market entries at scaleups. Produce a market entry analysis memo for the {{company_name}} leadership team.

  Inputs:
  - Company and current market: {{company_name}}, currently selling {{current_offering}} to {{current_market}}
  - Proposed new market: {{new_market}} (geography, segment, vertical, or new buyer)
  - Why the team thinks this is a good idea: {{thesis}}
  - What we know about the new market today: {{market_facts}}
  - Estimated investment required (people, capital, time): {{investment_estimate}}
  - The internal champion of this idea: {{champion}}
  - Constraints we are operating under: {{constraints}}

  Structure the memo with these sections:

  ## Recommendation (One Line)
  Go, no-go, or "go but only if X is true." State it first. Earn the reader's attention by not making them hunt for it.

  ## The Thesis Restated
  Restate the team's thesis in the most generous form possible. The reader should feel the proposal is being argued for, not against.

  ## What Has To Be True
  Five conditions that must hold for the entry to succeed. For each, mark whether it is **proven**, **plausible**, or **a leap of faith** based on what we currently know.

  ## Where The Money Goes
  A simple table of the major investment buckets, the timeline, and what each bucket is buying. If a bucket is large and vague, flag it.

  ## What Could Kill This (Pre-Mortem)
  Imagine it is 18 months from now and the entry has failed. Describe in detail the most likely failure path. Then describe the second most likely.

  ## What Would Make Us Double Down
  Describe the early signal — within the first 6 months — that would tell us this is working and we should accelerate. Be specific: a number, an event, a customer behavior.

  ## The Cheaper Version
  Propose a less expensive way to test the same thesis. Often the right move is not "go or no-go" but "test the cheap version first." If a cheaper test exists, name it.

  ## Decision Asked Of Leadership
  The specific decision being asked of the room, by when, with what fallback if it is delayed.

  Constraints:
  - Be honest about uncertainty. Label assumptions.
  - Avoid TAM/SAM/SOM theater unless the input data supports it.
  - Take a position in the recommendation.
variables:
  - "{{company_name}}"
  - "{{current_offering}}"
  - "{{current_market}}"
  - "{{new_market}}"
  - "{{thesis}}"
  - "{{market_facts}}"
  - "{{investment_estimate}}"
  - "{{champion}}"
  - "{{constraints}}"
exampleInput: |
  company_name: Mosaic Apparel
  current_offering: DTC women's activewear
  current_market: US, ages 28–45, online-first
  new_market: UK and Ireland, same product line, same buyer persona
  thesis: existing US customers in the UK are buying through forwarders; we should capture that demand directly and use it as a beachhead for broader EU expansion
  market_facts: ~6% of US site traffic is from UK/Ireland; one CPG-adjacent competitor entered UK last year and reported 2x revenue in 12 months; UK fulfillment partner identified at 1.6x current cost
  investment_estimate: $2.4M over 18 months — UK warehousing, marketing, country manager, customs/VAT setup
  champion: Head of Growth, who lived in London for five years
  constraints: just closed Series B, board wants disciplined growth and gross margin protection
exampleOutput: |
  ## Recommendation
  Conditional go — but as a 6-month, $400K test using a 3PL and paid-only acquisition, not the full $2.4M plan.

  ## The Thesis Restated
  We have organic demand from UK customers buying through forwarders, an established DTC brand, a comparable competitor with a proven 2x revenue path, and an experienced internal champion. Capturing this demand directly converts paid traffic we are already buying and creates a foothold in a $9B activewear market without changing the product.

  ## What Has To Be True
  1. UK customer acquisition cost stays within 1.4x of US CAC. *Plausible.* Comparable competitor data suggests this; not yet validated for our brand.
  2. Gross margin holds above 58% after UK fulfillment, VAT, and returns. *Leap of faith.* Returns rates and VAT handling are the typical killers; we have not modeled them at scale.
  3. The brand resonates with UK buyers without major creative localization. *Plausible.* Forwarder traffic suggests demand exists, but forwarder buyers self-select; broader audiences may differ.
  4. We can hire or contract a UK-based country lead who understands DTC. *Proven.* Champion's network has at least three credible candidates.
  5. The Series B narrative supports the burn. *Proven, with care.* Board has signaled openness to international, but expects gross margin protection.

  ## Where The Money Goes
  | Bucket | $ | Timeline | Buying |
  |---|---|---|---|
  | UK warehousing & 3PL setup | $600K | Months 1–3 | Local fulfillment, customs |
  | Marketing & creative | $900K | Months 1–18 | Demand generation, brand |
  | Country manager + 2 hires | $600K | Months 2–18 | Local expertise, ops |
  | Tech, payments, VAT/legal | $200K | Months 1–4 | Infrastructure |
  | Buffer | $100K | — | — |

  The $900K marketing bucket is the largest and the vaguest. Without a defined CAC target it can absorb infinite spend.

  ## What Could Kill This (Pre-Mortem)
  **Most likely failure:** We hit the launch but UK CAC is 2x US CAC because organic forwarder traffic was a self-selected subset. Marketing spend doubles to hit topline targets, gross margin compresses, and at month 12 the unit economics force a retreat that leaves a stranded warehouse and a country manager to lay off.

  **Second most likely failure:** Returns and VAT eat margin. UK return rates run higher than US (5–8 percentage points is typical), VAT compliance gets more expensive than estimated, and the contribution margin on every order is 6–8 points worse than modeled. The business is fine but never reaches the growth case the board approved.

  ## What Would Make Us Double Down
  By month 6: paid-only UK acquisition delivers CAC within 1.4x US, gross margin above 55% on a steady-state basis, and at least two repeat-purchase cohorts behaving like our top US cohorts. If those three indicators are green, write the next $1.5M check. If two are green, extend the test. If only one is green, exit.

  ## The Cheaper Version
  Run a 3PL-based, paid-only UK launch for 6 months at $400K. No country manager, no warehouse, no headcount. Use this to validate CAC, gross margin after returns and VAT, and cohort behavior. The full $2.4M plan is a fine answer if the test works — and a much cheaper lesson if it does not.

  ## Decision Asked Of Leadership
  Approve $400K, 6-month UK paid-only test by end of month, with a hard go/no-go review at month 6 against the three indicators above. If approval slips past 30 days, defer the entire program to next year — competitors will have moved and the math changes.
tips:
  - "The 'cheaper version' section saves more money than any other part of this analysis. Always force it."
  - "Mark each 'what has to be true' as proven / plausible / leap of faith — it makes the risk concentration visible at a glance."
  - "Have the internal champion red-team their own thesis through the pre-mortem. They will catch failure modes a skeptic would miss."
  - "Put the recommendation on line one. Memos that hide the answer get re-read instead of acted on."
  - "Re-run the analysis at the 6-month checkpoint with actual data. The discipline of comparing predictions to outcomes is what makes the next entry decision better."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - annual-strategic-plan-outline
  - acquisition-target-evaluation
  - capital-allocation-memo
  - business-model-canvas
tags:
  - market-entry
  - strategy
  - expansion
  - decision-memo
  - leadership
---
