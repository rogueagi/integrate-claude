---
title: "Evaluate a potential acquisition target"
slug: acquisition-target-evaluation
function: executive
role: strategy
description: "Produce a structured acquisition target evaluation memo that separates strategic fit, financial logic, and integration risk so leadership can make a real go/no-go decision."
useCase: "Use this when you're seriously considering acquiring a company and need a memo that goes beyond a banker's deck. Most acquisition narratives are written by the people who want the deal to happen. This prompt forces the kind of skepticism that prevents the worst category of M&A regret."
prompt: |
  You are a former corporate development executive who has closed eight acquisitions and walked away from twenty. Produce a target evaluation memo for the {{company_name}} leadership team.

  Inputs:
  - Acquirer: {{company_name}}, {{acquirer_stage}}
  - Target: {{target_name}}, {{target_stage}}
  - Strategic rationale being considered: {{rationale}}
  - What you know about the target's revenue, growth, margin, and burn: {{target_financials}}
  - Target's product and customer base: {{target_product_and_customers}}
  - Likely deal range: {{deal_range}}
  - Form of consideration (cash/stock/mix): {{consideration}}
  - Internal champion of the deal: {{champion}}
  - The honest, unspoken concern someone has raised: {{unspoken_concern}}

  Structure the memo:

  ## Recommendation
  One sentence: pursue at price X with conditions Y, pass, or "diligence further before deciding."

  ## Why This Could Be A Great Deal
  The strongest version of the bull case. Three reasons, each with the underlying assumption explicit.

  ## Why This Could Be A Disaster
  The strongest version of the bear case. Three reasons. Be honest — most acquisitions fail on integration, not thesis.

  ## The Strategic Question Being Answered
  In one sentence: what does {{company_name}} get from this deal that it cannot build, partner, or hire its way to in 18 months? If the honest answer is "we could build it," that is the deal-killer most teams talk themselves out of.

  ## Financial Logic
  - Implied valuation multiple at {{deal_range}} (revenue and any other relevant metric)
  - The price at which this deal makes sense, the price at which it gets hard, the price at which we walk
  - Synergy assumptions, with each one labeled as **realistic**, **stretch**, or **hopeful**

  ## Integration Risk
  Three concrete integration risks. For each: how it shows up, how we'd detect it in the first 90 days, and what the contingency is.

  ## People
  The two or three people on the target's team whose retention is required for the deal to work, and the two or three on our side whose ownership of integration is required. If you cannot name them, the deal is not ready.

  ## The Unspoken Concern
  Address {{unspoken_concern}} directly. Do not minimize it.

  ## Decision Asked
  The specific decision asked of leadership, the price ceiling we should authorize, and the date by which a counter-offer or walk-away decision must be made.

  Constraints:
  - Take a position. "Further diligence" is acceptable only if you specify what diligence and the deadline.
  - Be skeptical of synergies. They almost always come in late and small.
  - Name people, not roles, where retention matters.
variables:
  - "{{company_name}}"
  - "{{acquirer_stage}}"
  - "{{target_name}}"
  - "{{target_stage}}"
  - "{{rationale}}"
  - "{{target_financials}}"
  - "{{target_product_and_customers}}"
  - "{{deal_range}}"
  - "{{consideration}}"
  - "{{champion}}"
  - "{{unspoken_concern}}"
exampleInput: |
  company_name: Northwind Analytics
  acquirer_stage: Series C, $80M ARR, profitable
  target_name: Pulseboard
  target_stage: Series A, $9M ARR, ~40 employees
  rationale: acquire Pulseboard's marketing-attribution product and team to accelerate our move into the marketing-ops buyer
  target_financials: $9M ARR, 80% YoY growth, gross margin 68%, burning $1.2M/month, ~14 months runway
  target_product_and_customers: lightweight attribution product, 220 paying customers, average ACV $40K, concentrated in Series A–B SaaS
  deal_range: $90M–$120M, cash and stock mix
  consideration: 60% stock, 40% cash, with 18-month founder retention
  champion: Chief Product Officer, who knows Pulseboard's CEO from a prior company
  unspoken_concern: Pulseboard has churned two of its three senior engineers in the last six months and the head of sales just left
exampleOutput: |
  ## Recommendation
  Pursue at $90M cap, contingent on retaining Pulseboard's founder and remaining lead engineer for 24 months and on a 30-day technical diligence sprint. Walk if the founder will not commit to the retention package or if technical diligence reveals deeper team attrition.

  ## Why This Could Be A Great Deal
  1. **Buyer access we cannot build quickly.** Pulseboard sells to marketing-ops; we sell to data and revops. The 220-customer book gives us a seeded land into a buyer we have failed to crack organically for two years. *Assumption: 70%+ of Pulseboard's customers stay through transition.*
  2. **Product wedge against Helio.** Marketing-attribution is the gap competitors are exploiting. Buying instead of building compresses 18 months of roadmap. *Assumption: integration into our platform is a 6-month project, not a 24-month one.*
  3. **Talent in a tight market.** The remaining engineering team is strong on a category we are weak on. *Assumption: at least the lead engineer stays.*

  ## Why This Could Be A Disaster
  1. **Team has already started to leave.** Two of three senior engineers gone in six months and the head of sales out the door is a flashing light. We may be buying a brand and a customer book without the people who built them.
  2. **Burn profile.** $1.2M/month at 14 months runway means leverage is on their side fading fast — but it also means the deal closes into a business that needs immediate investment to stabilize. The $90M sticker is the start, not the end.
  3. **Cultural integration.** Their PLG, marketing-led culture is meaningfully different from our enterprise sales culture. The integration playbook for that gap is not well-developed at our company.

  ## The Strategic Question Being Answered
  Can we own the marketing-ops buyer in B2B SaaS analytics in the next 18 months? Building organically would take three years and a head of marketing-product we have not been able to hire. Acquisition is genuinely faster — but only if Pulseboard's people stay.

  ## Financial Logic
  - At $90M: ~10x ARR. Defensible given 80% growth.
  - At $120M: ~13.3x ARR. Hard to defend given burn profile and team risk.
  - We make sense at: $80M–$95M.
  - It gets hard at: $96M–$110M.
  - We walk at: above $115M, or any price if retention package falls.

  Synergy assumptions:
  - Cross-sell into our 1,400-customer base: +$3M ARR in year 1. **Stretch.**
  - Cost reduction from consolidating overlapping tooling: $1.5M annual. **Realistic.**
  - Faster pipeline into marketing-ops buyer: 30% lift on net-new logos. **Hopeful.**

  ## Integration Risk
  1. **Engineering attrition continues.** *Detection:* monthly retention scorecard for the first 6 months. *Contingency:* offer top-of-band retention grants and a clear post-acquisition charter for the remaining engineers within week one.
  2. **Customer churn at renewal.** *Detection:* track NPS and renewal pipeline at 60 and 120 days post-close. *Contingency:* keep Pulseboard's CS lead in place for 12 months, do not consolidate accounts until a 90-day quiet period passes.
  3. **Product roadmap collision.** *Detection:* joint roadmap exercise within 30 days of close. *Contingency:* CPO owns the integrated roadmap, single source of truth, no parallel planning.

  ## People
  Required from Pulseboard: Daniel Choi (CEO/founder), Priya Ramani (lead engineer), Marcus O'Hara (head of customer success).
  Required from Northwind: VP Product (integration owner), VP Engineering (technical integration), and a dedicated integration lead — name to be filled within 7 days of LOI.

  ## The Unspoken Concern
  The departures of two senior engineers and the head of sales are the most important data point in this memo. They are either a sign that Pulseboard is unwinding before we get there, or they are a signal that smart people inside the company already know the next round is hard and are hedging. Either way, a 30-day technical diligence sprint focused on team stability and code quality is non-negotiable. If we cannot meet at least four of the remaining ten engineers and walk away believing they will stay 18 months, we walk.

  ## Decision Asked
  Authorize an LOI at $90M cap with the retention conditions above, by next Friday. If counter comes back above $110M or the retention package is rejected, walk and reallocate the budget to organic build of the marketing-attribution module.
tips:
  - "Most acquisitions fail at integration, not strategy. Spend 60% of your diligence time on people and 40% on the business case."
  - "Force the question 'could we build this in 18 months?' If the honest answer is yes, the acquisition rationale needs to be more than time-to-market."
  - "Label every synergy as realistic, stretch, or hopeful. Hopeful synergies almost never arrive."
  - "The walk-away price needs to be set before negotiation starts. Otherwise you'll talk yourself into the ceiling."
  - "After close, write a six-month retrospective. Compare what you predicted in this memo to what actually happened. The next deal will be smarter for it."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - market-entry-analysis
  - capital-allocation-memo
  - board-update-narrative
  - competitive-analysis-strategic
tags:
  - acquisition
  - m-and-a
  - corp-dev
  - decision-memo
  - leadership
---
