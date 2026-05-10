---
title: "Generate a comparative market analysis narrative from comp data"
slug: comparative-market-analysis-narrative
function: marketing
role: content
description: "Turn raw comparable sales data into a clear CMA narrative that explains pricing recommendations to a seller in plain language."
useCase: "Use this prompt when preparing a CMA presentation for a listing appointment. It takes the comp grid you pulled from MLS and produces a narrative the seller can actually follow, framing the pricing recommendation with reasoning rather than just numbers."
prompt: |
  You are a residential listing agent with 15 years of experience walking sellers through pricing. Write the narrative section of a CMA based on the data below.

  Subject property:
  - Address: {{subject_address}}
  - Beds / baths / sqft: {{subject_specs}}
  - Year built / lot: {{subject_year_lot}}
  - Notable features: {{subject_features}}
  - Notable detractors: {{subject_detractors}}

  Comparable sales (last 6 months, within 0.5 miles):
  {{comp_data}}

  Active competition (currently on market):
  {{active_listings}}

  Market context:
  - Days on market trend: {{dom_trend}}
  - List-to-sale price ratio trend: {{lp_sp_ratio}}
  - Inventory: {{inventory}}

  Recommended list price range: {{recommended_range}}

  Produce a narrative with these sections:

  1. Market overview (one paragraph) — what is happening in this submarket right now in plain language.
  2. How we selected comps — explain the criteria in two to three sentences.
  3. Subject vs comps walk-through — for each comp, explain in one or two sentences why it sold for what it sold for and how the subject compares (better, worse, similar) on the dimensions that matter.
  4. Active competition note — what the seller will be competing against this week.
  5. Pricing recommendation — restate the recommended range with the three most important reasons.
  6. Risks of pricing too high — specific, not generic. Tie to current DOM and list-to-sale ratio.

  Tone: candid, respectful, written for a homeowner who is not a real estate professional. No jargon. No flattery.
variables:
  - "{{subject_address}}"
  - "{{subject_specs}}"
  - "{{subject_year_lot}}"
  - "{{subject_features}}"
  - "{{subject_detractors}}"
  - "{{comp_data}}"
  - "{{active_listings}}"
  - "{{dom_trend}}"
  - "{{lp_sp_ratio}}"
  - "{{inventory}}"
  - "{{recommended_range}}"
exampleInput: |
  subject_address: 1407 Beacon St, Brookline, MA
  subject_specs: 3 bed / 2 bath / 1,820 sqft
  subject_year_lot: 1929 / 4,200 sqft
  subject_features: renovated kitchen 2024, finished basement, off-street parking for 2
  subject_detractors: one bath on main level shared with primary, dated bathrooms
  comp_data:
  - 1322 Beacon: 3/2, 1,790 sqft, sold $1.21M, 18 DOM, similar layout, updated baths
  - 27 Crowninshield: 3/2, 1,910 sqft, sold $1.34M, 9 DOM, full reno 2023, garage
  - 88 Stearns: 3/1.5, 1,700 sqft, sold $1.08M, 42 DOM, original kitchen, no parking
  active_listings:
  - 612 Washington: 3/2, 1,850 sqft, listed $1.29M, 21 DOM, kitchen mid-grade
  - 19 Sumner: 4/2, 2,100 sqft, listed $1.39M, 6 DOM, larger
  dom_trend: rising — 14 days March, 22 days April
  lp_sp_ratio: 99.2% in March, 96.8% in April
  inventory: up 30% year over year, still below 2019 levels
  recommended_range: $1.18M - $1.22M
exampleOutput: |
  Market overview
  Brookline single-family activity has cooled slightly this spring. Days on market climbed from 14 to 22 between March and April, and homes are now selling at about 97% of list price instead of 99%. Inventory is up roughly 30% year over year. Buyers still show up, but they are more patient and they push back on price.

  How we selected comps
  We pulled three sales within half a mile, closed in the last six months, in the 1,700 to 1,950 square foot range with similar bed and bath counts. We excluded two larger homes and one teardown that would have skewed the picture.

  Subject vs comps
  - 1322 Beacon at $1.21M is the closest comp on layout and size. Their bathrooms were updated, ours are dated. That is the gap to close.
  - 27 Crowninshield at $1.34M sold higher because of a full renovation in 2023 and a garage. We will not match that, and we should not try.
  - 88 Stearns at $1.08M sat for 42 days with an original kitchen and no parking. Our 2024 kitchen and two-car off-street parking pull us above that comp.

  Active competition
  Two active listings matter. 612 Washington at $1.29M has been on for three weeks with a mid-grade kitchen. 19 Sumner at $1.39M is larger and just listed. A buyer comparing your home this week will see those two side by side with yours.

  Pricing recommendation
  We recommend listing in the $1.18M to $1.22M range. The three reasons: comparable layout to 1322 Beacon adjusted for our older bathrooms, the kitchen renovation and parking lift us above 88 Stearns, and current market conditions reward homes that price slightly under the highest comp.

  Risks of pricing too high
  Listing at $1.27M or above puts you next to 612 Washington, which has already sat for 21 days. With list-to-sale ratios at 96.8% and rising days on market, an aggressive price likely means a price cut in week three. Homes that take a price cut typically sell for less than homes that priced correctly out of the gate. We would rather generate two offers in the first ten days at $1.20M than chase the market down from $1.27M.
tips:
  - "Bring the comp grid to the listing appointment as the appendix, not the headline. Sellers respond to the narrative, not the spreadsheet."
  - "Always include both the upside (why your features lift price) and the gap (what comps had that yours doesn't). Sellers trust agents who acknowledge both."
  - "Run the prompt with the comps your seller will eventually find on Zillow. If you exclude the obvious low comp, they will surface it themselves and you lose credibility."
  - "Update the market overview paragraph weekly during your listing season. The same submarket can shift in three weeks."
  - "Read the risks section out loud at the appointment. The phrase 'we would rather generate two offers at $1.20M than chase the market from $1.27M' lands harder spoken than read."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - listing-description-from-photos
  - investor-pitch-real-estate
  - buyer-followup-sequence
tags:
  - real-estate
  - cma
  - pricing
  - listing
  - content
---
