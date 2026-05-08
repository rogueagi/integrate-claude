---
title: "Summarize foreign exchange exposure and hedging options"
slug: foreign-exchange-exposure-summary
function: finance
role: treasury
description: "Generate a structured analysis of a company's foreign exchange exposure and a plain-language summary of hedging options for executive or board review."
useCase: "Use this prompt when your company is generating meaningful revenue or incurring costs in foreign currencies and leadership needs to understand the exposure and consider mitigation strategies. FX risk is often ignored until a currency move creates a surprise — this prompt structures the analysis before that happens."
prompt: |
  You are a treasury analyst or VP of Finance summarizing your company's foreign exchange (FX) exposure and hedging options.

  Context:
  - Company: {{company_name}}
  - Functional currency: {{functional_currency}} (the currency in which financial statements are reported)
  - Foreign currency exposures: {{fx_exposures}} (list each currency, the type of exposure — revenue, costs, assets, liabilities — and approximate annual amount)
  - Current hedging approach: {{current_hedging}} (none, natural hedging, forward contracts, options, etc.)
  - Key business events creating FX exposure: {{business_context}} (e.g., UK customer contracts, European payroll, Canadian office)
  - Risk tolerance: {{risk_tolerance}} (how sensitive is the company to FX moves — high, medium, or low)
  - Board/investor context: {{stakeholder_context}} (is FX a topic of concern for investors or lenders?)

  Write an FX exposure summary with these sections:

  ## FX Exposure Summary (1 paragraph)
  The plain-language overview: which currencies the company is exposed to, the nature of the exposure (revenue vs. cost), the approximate annual dollar impact of a 10% adverse move in the primary currency pair, and the company's current approach to managing this risk.

  ## Exposure Analysis by Currency
  For each foreign currency exposure:
  - Currency and exposure type (revenue / cost / balance sheet)
  - Annual volume in foreign currency and USD equivalent
  - Exposure direction (long = benefit when USD weakens; short = benefit when USD strengthens)
  - Current period P&L impact (favorable or unfavorable vs. prior year, due to rate changes)

  ## Natural Hedging Assessment
  Does the company have natural offsets? (e.g., EUR revenue offset by EUR costs in the same region) If so, what is the net exposure after natural hedges?

  ## Hedging Options
  For each material net exposure, describe 2–3 hedging approaches:
  - **Natural hedging:** Can costs be incurred in the same currency as revenue?
  - **Forward contracts:** Lock in a known rate for future transactions — how it works, typical terms and cost
  - **Currency options:** Right to exchange at a set rate — cost (premium), benefit (floor protection with upside participation)
  - **Do nothing:** The cost and benefit of accepting the exposure without hedging

  ## Recommended Approach
  Given the company's exposure size, risk tolerance, and stage, what approach is recommended? Be specific: hedge X% of exposure, using Y instrument, for Z months forward.

  ## Board/Investor Summary (3–5 sentences)
  Plain-language summary for non-finance stakeholders: what the company's FX exposure is, what it means for reported results, and what management is doing about it.

  Tone: clear and practical. FX is technical — the narrative should make it accessible to executives and board members who are not treasury specialists.
variables:
  - "{{company_name}}"
  - "{{functional_currency}}"
  - "{{fx_exposures}}"
  - "{{current_hedging}}"
  - "{{business_context}}"
  - "{{risk_tolerance}}"
  - "{{stakeholder_context}}"
exampleInput: |
  company_name: Anchor Analytics
  functional_currency: USD
  fx_exposures: |
    British Pound (GBP): £420K annual revenue from 3 UK enterprise customers (invoiced in GBP); ~£85K annual costs (UK contractor); net long GBP ~£335K
    Canadian Dollar (CAD): ~CAD $95K annual costs (2 contractors); no CAD revenue; net short CAD ~CAD $95K
    Euro (EUR): No current exposure; 2 pipeline deals in Germany that may close in H2 (combined ~€180K potential ARR)
  current_hedging: None — all FX gains/losses flow through P&L as transactional
  business_context: UK enterprise expansion began Q3 2023; CAD contractors hired Q1 2024; German pipeline represents first EU market entry
  risk_tolerance: Medium — company can tolerate modest FX variance but doesn't want FX moves to materially affect reported results or board narrative
  stakeholder_context: Series A investors will be US-based and will review USD-reported financials; FX has not been raised by the board yet but will become relevant if UK expansion continues
exampleOutput: |
  ## FX Exposure Summary
  Anchor Analytics has meaningful foreign currency exposure in two currencies: British Pounds (GBP), where the company has a net long position of approximately £335K annually (more GBP inflows than outflows), and Canadian Dollars (CAD), where the company has a net short position of approximately CAD $95K annually (costs but no revenue). At current exchange rates, total annualized FX exposure approximates $490K USD. A 10% adverse move in GBP/USD (i.e., USD strengthens relative to GBP) would reduce reported USD revenue by approximately $52K annually. The company currently does not hedge any FX exposure, which means P&L results fluctuate with currency movements. Given the medium risk tolerance and growing UK customer base, this is worth formalizing into a hedging policy before Series A close.

  ## Exposure Analysis by Currency

  **British Pound (GBP) — Net Long £335K/year**
  | Item | GBP | USD Equivalent |
  |---|---|---|
  | UK customer revenue (annual) | £420,000 | ~$530,000 |
  | UK contractor costs (annual) | (£85,000) | (~$107,000) |
  | **Net GBP exposure** | **£335,000** | **~$423,000** |

  Exposure direction: Net long GBP. Anchor *benefits* when GBP strengthens vs. USD (more USD when converting GBP revenue), and *loses* when GBP weakens. In 2023, GBP/USD moved from ~1.21 to ~1.27, representing a tailwind for UK-originated revenue. The risk is a reversal — if GBP weakens to 1.15 (a 10% move from current rates), GBP-denominated revenue loses approximately $52K of USD value per year.

  **Canadian Dollar (CAD) — Net Short CAD $95K/year**
  | Item | CAD | USD Equivalent |
  |---|---|---|
  | Canadian contractor costs (annual) | (CAD $95,000) | (~$70,000) |
  | **Net CAD exposure** | **(CAD $95,000)** | **(~$70,000)** |

  Exposure direction: Net short CAD. Anchor *benefits* when CAD weakens vs. USD (costs less USD to pay CAD-denominated contractors), and *loses* when CAD strengthens. At current scale, this exposure is modest — approximately $70K annually — and a 10% adverse CAD move would cost approximately $7K/year. Manageable without hedging.

  **Euro (EUR) — Potential Pipeline Exposure**
  No current EUR exposure. Two German pipeline deals representing approximately €180K in potential ARR would create EUR receivables if closed. If the German market becomes a systematic revenue channel in H2, an EUR hedging policy should be established before the first invoice is issued.

  ## Natural Hedging Assessment
  Anchor has a small natural hedge in GBP: £85K of GBP-denominated contractor costs offsets a portion of the £420K GBP revenue. The net exposure after natural hedging is £335K — natural hedging reduces gross exposure by 20%. There is no meaningful natural hedge for CAD, as the company has no CAD-denominated revenue.

  Opportunity: if UK operations expand and require additional local hiring, each £ of UK-based payroll naturally reduces the GBP exposure. This is worth considering as a staffing criterion if UK headcount plans are made.

  ## Hedging Options

  **For GBP Net Long (~£335K/year):**

  *Option 1 — Do nothing (current approach):* Accept P&L volatility from GBP/USD rate movements. Pros: no cost, no complexity. Cons: GBP revenue can vary by 5–15% in USD terms from year to year. At current revenue scale (~$530K from UK), a 10% GBP move affects reported USD revenue by $53K — material at $1.75M total ARR.

  *Option 2 — Forward contracts (recommended):* Enter into forward contracts to sell GBP and buy USD at a locked rate, matched to the timing of expected UK customer collections. A 6-month rolling forward program covering 50–75% of expected GBP collections would reduce USD revenue volatility significantly. Cost: forward points (the rate differential between spot and forward), typically 0.5–1.5% annually depending on rate differentials. Establishes predictable USD conversion rates for the finance team and the board.

  *Option 3 — Currency options:* Purchase GBP put options (right to sell GBP at a floor rate) to limit downside while retaining upside if GBP strengthens. More flexible than forwards but requires paying an option premium (typically 1–3% of notional). More appropriate if the company wants to maintain upside on GBP appreciation — not necessary at current scale.

  **For CAD Net Short (~CAD $95K/year):**
  At $70K USD equivalent, CAD exposure is below the threshold that warrants a formal hedging program. Recommend reviewing if CAD costs exceed $150K annually. No action required currently.

  ## Recommended Approach
  Given Anchor's medium risk tolerance and growing GBP exposure, we recommend implementing a 6-month rolling forward program covering 60% of expected GBP revenue. This approach:
  - Reduces USD revenue volatility by approximately 60%
  - Costs an estimated 0.5–1.0% of hedged notional (~$2,500–$5,000/year at current scale)
  - Can be established through the company's primary bank without requiring a separate FX broker
  - Converts the majority of UK revenue into predictable USD for reporting and planning purposes

  No hedging is recommended for CAD at current scale. EUR exposure should be monitored — if the German pipeline closes, establish a forward program before invoicing.

  ## Board/Investor Summary
  Anchor generates approximately $530K of annual revenue from UK customers invoiced in British Pounds. As the company reports in USD, GBP/USD exchange rate movements affect our reported revenue — a 10% weakening of GBP would reduce reported USD revenue by approximately $53K annually. We also have modest CAD cost exposure (~$70K/year) from Canadian contractors. Management is evaluating a forward contract program to lock in USD conversion rates on GBP revenue and reduce the volatility in our reported results. We expect to implement this before Series A close. Exposure is manageable at current scale and will be reported as part of the quarterly finance update going forward.
tips:
  - "The '10% adverse move' test is a useful benchmark for materiality: if a 10% currency move creates less than 1–2% variance in total revenue, the exposure may not warrant a hedging program."
  - "Natural hedging is always the cheapest form of FX risk management. Before implementing financial hedges, evaluate whether cost or vendor structures can naturally offset currency risk."
  - "Forward contracts are the right tool for most small companies entering FX hedging for the first time — they're simple, widely understood, and low-cost. Currency options are more appropriate once FX management is a more significant operational function."
  - "Disclose FX exposure to the board before it creates a surprise in the financials. A 5% currency move that reduces reported revenue is much more damaging when the board didn't know the exposure existed."
  - "Document your hedging policy even if the policy is 'we don't hedge.' Auditors and investors want to know that management has made a deliberate decision, not just that they haven't gotten around to it."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cash-management-policy
  - cash-flow-forecast-narrative
  - board-finance-update
tags:
  - treasury
  - foreign-exchange
  - hedging
  - risk-management
  - international
---
