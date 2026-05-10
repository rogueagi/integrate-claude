---
title: "Pitch deck narrative for a real estate investment opportunity"
slug: investor-pitch-real-estate
function: founder
role: fundraising
description: "Generate the narrative copy for a real estate investment pitch deck — opportunity, market, deal structure, returns, and risks — without the boilerplate."
useCase: "Use this prompt when raising LP capital for a single asset or a small fund. It produces deck-ready copy for the eight slides that actually move investor decisions, grounded in the deal numbers you provide."
prompt: |
  You are a real estate sponsor who has raised capital from family offices and accredited investors. Write the narrative copy for an investment pitch deck.

  Deal details:
  - Asset type: {{asset_type}}
  - Location: {{location}}
  - Acquisition price: {{acq_price}}
  - Total project cost: {{total_cost}}
  - Equity raise target: {{equity_raise}}
  - Hold period: {{hold_period}}
  - Projected IRR / equity multiple: {{returns}}
  - Sponsor co-invest: {{sponsor_co_invest}}
  - Strategy: {{strategy}} (e.g., value-add multifamily, ground-up retail, opportunistic conversion)
  - Sponsor track record: {{track_record}}

  Market context:
  - Submarket trends: {{submarket_trends}}
  - Demand drivers: {{demand_drivers}}
  - Supply pipeline: {{supply_pipeline}}

  Risks (real ones, not boilerplate):
  - {{key_risks}}

  Produce eight slide narratives. For each, output a slide title and 50-90 words of body copy:

  1. Opportunity in one slide — what the deal is, in plain language.
  2. Market and timing — why this submarket, why now.
  3. The asset — specific facts about the property.
  4. The plan — what you will do over the hold period to create value.
  5. Sponsor and team — track record framed by relevant precedents, not a resume.
  6. Deal structure — how the capital stack works, who gets paid when.
  7. Returns and downside — projected returns and the most likely scenarios where they slip.
  8. The ask — equity raise size, minimum check, timeline to close.

  Rules:
  - Numbers must come from the inputs. Do not invent IRRs, cap rates, or rent assumptions.
  - The risks slide must reference the user-provided risks. No generic "market risk, interest rate risk" filler.
  - Tone: confident, specific, no real estate cliches ("trophy asset", "irreplaceable location").
  - Do not include disclaimers, securities legends, or accreditation language. Counsel will add those.

  Note: this draft is marketing narrative only. All offering materials must be reviewed by qualified securities counsel before distribution to any prospective investor.
variables:
  - "{{asset_type}}"
  - "{{location}}"
  - "{{acq_price}}"
  - "{{total_cost}}"
  - "{{equity_raise}}"
  - "{{hold_period}}"
  - "{{returns}}"
  - "{{sponsor_co_invest}}"
  - "{{strategy}}"
  - "{{track_record}}"
  - "{{submarket_trends}}"
  - "{{demand_drivers}}"
  - "{{supply_pipeline}}"
  - "{{key_risks}}"
exampleInput: |
  asset_type: 84-unit garden-style multifamily
  location: Greenville, SC
  acq_price: $11.4M
  total_cost: $14.2M (includes $2.4M renovation budget, $400K closing/financing)
  equity_raise: $5.6M
  hold_period: 5 years
  returns: 17% IRR, 1.9x equity multiple projected
  sponsor_co_invest: $560K (10%)
  strategy: value-add — interior renovations on unit turnover, common area refresh, push rents to current market
  track_record: 3 prior multifamily deals in the Carolinas, 2 fully exited at 1.7x and 2.1x, third stabilized
  submarket_trends: Greenville population +2.4% per year, Class B rent growth 4.1% trailing 12 months
  demand_drivers: BMW, Michelin, GE Power expansions, downtown Main St growth
  supply_pipeline: 1,200 new units delivering 2026-2027, mostly Class A downtown — limited overlap with our submarket
  key_risks: interest rate cap expires year 3, renovation cost inflation, single submarket concentration
exampleOutput: |
  Slide 1 — Opportunity
  We are acquiring an 84-unit garden-style apartment community in Greenville, SC for $11.4M and investing $2.4M to bring units to current market standard. Total project cost is $14.2M. We are raising $5.6M of LP equity for a five-year hold. Our base case projects a 17% IRR and 1.9x equity multiple driven by renovation premium rents and disciplined operations.

  Slide 2 — Market and timing
  Greenville is one of the steadier population growth stories in the Southeast at 2.4% per year, anchored by BMW, Michelin, and GE Power. Class B rents in our submarket have grown 4.1% over the trailing 12 months. New supply is concentrated in Class A downtown, with roughly 1,200 units delivering through 2027 — limited direct competition with workforce housing four miles out.

  Slide 3 — The asset
  Built in 1998, the property has a stable rent roll and 94% occupancy at acquisition. Two-thirds of units are still on classic finishes. We assumed financing at 6.1% fixed for five years with a rate cap. The seller is an out-of-state owner who has not raised rents to market over the last four years.

  Slide 4 — The plan
  Over five years we will renovate units on natural turnover at roughly 25 to 30 units per year, refresh the leasing office and pool deck in year one, and reposition the property's online presence. Renovated unit premiums in comparable nearby properties run $145 to $175 per month. We underwrote $135 to be conservative.

  Slide 5 — Sponsor and team
  This is our fourth multifamily acquisition in the Carolinas. We have fully exited two prior deals at 1.7x and 2.1x equity multiples. The third is stabilized and on track. The same in-house operations and construction team that ran those deals is running this one.

  Slide 6 — Deal structure
  $5.6M LP equity, $560K sponsor co-invest at 10%. 8% preferred return to LPs, 70/30 split above the pref, with a catch-up at a 14% IRR moving to a 60/40 split. Standard sponsor fees: 1% acquisition, 2% asset management, 1% disposition. Distributions paid quarterly starting month 12.

  Slide 7 — Returns and downside
  Base case: 17% IRR, 1.9x. Upside if renovation premiums hit $165: 19.5% IRR. Downside scenarios: rate cap expires year three and rates remain elevated, renovation costs inflate 15% above budget, or rent growth slows to 2%. In the most likely downside, IRR compresses to roughly 11% and the equity multiple to 1.5x. We have stress-tested for all three.

  Slide 8 — The ask
  We are raising $5.6M with a $100K minimum LP check. Target close is 60 days from term sheet. Sponsor co-invest is committed. We have soft circles on $3.2M and are introducing the deal this week.
tips:
  - "Sophisticated LPs read the risks slide first. A specific, honest risks section earns trust faster than the returns slide."
  - "Always show your sponsor co-invest as a percent and a dollar figure. LPs want to know how much skin you actually have in."
  - "If you cite a comparable rent premium, be ready to send the underwriting model that supports it. Do not put numbers in the deck you cannot defend in a 30-minute call."
  - "The 'returns and downside' slide should include at least one downside scenario, even if the base case is strong. LPs trust sponsors who underwrite their own bear case."
  - "All offering materials require review by qualified securities counsel. This prompt produces narrative copy, not a Reg D-compliant document."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - comparative-market-analysis-narrative
  - listing-description-from-photos
  - federal-rfp-capability-statement
tags:
  - real-estate
  - fundraising
  - investor-deck
  - multifamily
  - founder
---
