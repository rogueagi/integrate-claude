---
title: "Draft an RFQ to food service vendors with detailed specs"
slug: vendor-rfq-food-service
function: operations
role: vendor-management
description: "Generate a structured request for quote to send to food service vendors, with item specs, volume estimates, delivery requirements, and evaluation criteria."
useCase: "Use this prompt when bidding out a recurring food service contract — produce, proteins, dairy, dry goods. It produces an RFQ that vendors can respond to apples-to-apples instead of returning incomparable quotes."
prompt: |
  You are a procurement manager for a multi-unit restaurant or hospitality group. Draft an RFQ to send to food service vendors.

  Buyer context:
  - Buyer entity: {{buyer_entity}}
  - Number of locations: {{location_count}}
  - Estimated annual spend in this category: {{annual_spend}}
  - Category being bid: {{category}} (e.g., produce, proteins, dairy, dry goods, paper and chemicals)
  - Contract term: {{term}}

  Item specifications:
  {{item_specs}}

  Volume estimates (units per week per location, or total per week):
  {{volume_estimates}}

  Delivery requirements:
  - Delivery windows: {{delivery_windows}}
  - Delivery frequency: {{delivery_frequency}}
  - Locations to be served: {{location_list}}

  Evaluation criteria and weights:
  {{evaluation_criteria}}

  Produce an RFQ document with these sections:

  1. Cover note — one short paragraph explaining who we are, what we are bidding, and the response deadline.
  2. Scope of work — bullets covering category, locations, term, and any exclusions.
  3. Item specifications — table with: item name, spec (size, grade, cut, organic/conventional, country of origin acceptable), unit of measure, estimated weekly volume per location, notes.
  4. Service requirements — delivery windows, vehicle requirements (refrigerated, etc.), order cutoff times, minimum order, substitution policy, returns and credits.
  5. Pricing structure requested — fixed price for term, market-plus formula, or hybrid. Specify what we expect.
  6. Insurance and certifications — required (e.g., COI minimums, food safety certifications, traceability).
  7. Sustainability and sourcing requirements (if relevant) — local %, fair trade, certifications.
  8. Evaluation criteria — restate weights so vendors know how they will be scored.
  9. Response format — exactly what the vendor must include in their response so we can compare apples-to-apples.
  10. Timeline — RFQ release, Q&A deadline, response deadline, award date, contract start.

  Rules:
  - Specs must be unambiguous. "Tomatoes" is not a spec; "vine-ripened, 5x6 size, USDA No. 1, 25 lb case" is.
  - Always require pricing on a unit basis the vendor cannot manipulate (per pound, per case of fixed count, not per "delivery").
  - State that quotes received in non-conforming format may be deemed non-responsive.
  - Tone: professional, clear, no boilerplate filler.
variables:
  - "{{buyer_entity}}"
  - "{{location_count}}"
  - "{{annual_spend}}"
  - "{{category}}"
  - "{{term}}"
  - "{{item_specs}}"
  - "{{volume_estimates}}"
  - "{{delivery_windows}}"
  - "{{delivery_frequency}}"
  - "{{location_list}}"
  - "{{evaluation_criteria}}"
exampleInput: |
  buyer_entity: Riverbend Hospitality Group
  location_count: 6
  annual_spend: $1.4M
  category: produce
  term: 12 months with a 12-month renewal option
  item_specs:
  - Romaine hearts: 12-count case, USDA No. 1, hydrocooled
  - Roma tomatoes: 5x6 size, USDA No. 1, 25 lb case
  - Yellow onions: jumbo, 50 lb sack
  - Strawberries: 8x1 lb clamshell, USDA No. 1
  - Mixed organic greens: 3 lb bag, certified organic, packed within 48 hours of delivery
  volume_estimates:
  - Romaine hearts: 4 cases per location per week
  - Roma tomatoes: 6 cases per location per week
  - Yellow onions: 3 sacks per location per week
  - Strawberries: 8 cases per location per week (seasonal — May to September)
  - Organic greens: 14 bags per location per week
  delivery_windows: 5am-7am, 6 days per week (no Sunday)
  delivery_frequency: 4 deliveries per week per location
  location_list: 6 restaurants in metro Denver, list provided in addendum A
  evaluation_criteria: 50% price, 25% service reliability, 15% quality and rejection rate, 10% sustainability
exampleOutput: |
  Cover note
  Riverbend Hospitality Group is bidding our produce category for a 12-month term, with a 12-month renewal option. Annual spend in this category is approximately $1.4M across six restaurants in metro Denver. We are seeking proposals from up to four qualified vendors. Responses are due by [date]. Award decision by [date]. Contract start [date].

  Scope of work
  - Category: produce only
  - Locations: 6 restaurants in metro Denver (see addendum A)
  - Term: 12 months, 12-month renewal at buyer option
  - Excluded: paper goods, dairy, proteins, dry goods (separate RFQs)

  Item specifications
  | Item | Spec | UoM | Est. weekly volume per location | Notes |
  | Romaine hearts | 12-count case, USDA No. 1, hydrocooled | case | 4 | Reject if outer leaves brown |
  | Roma tomatoes | 5x6 size, USDA No. 1, 25 lb case | case | 6 | Firm, no soft spots |
  | Yellow onions | Jumbo, 50 lb sack | sack | 3 | Dry skins, no sprouting |
  | Strawberries | 8x1 lb clamshell, USDA No. 1 | case | 8 | Seasonal, May-September |
  | Mixed organic greens | 3 lb bag, certified organic, packed within 48 hours | bag | 14 | Provide pack date on each delivery |

  Service requirements
  - Delivery windows: 5am-7am, six days per week (no Sunday)
  - Frequency: 4 deliveries per location per week
  - Refrigerated trucks required for all produce, temperature logs available on request
  - Order cutoff: 6pm prior business day
  - Minimum order: none (multi-location consolidated billing acceptable)
  - Substitutions: must be approved by Riverbend chef on file before delivery
  - Returns and credits: full credit for rejected items at delivery, 24-hour notice for quality claims after acceptance

  Pricing structure requested
  Submit two pricing scenarios for each item:
  - Fixed price for the 12-month term
  - Market-plus formula (e.g., USDA Mountain region wholesale plus markup), with markup expressed as a fixed dollar amount per unit and reset frequency stated
  Specify how seasonal items (strawberries) will be handled outside of season — in-season pricing only, or year-round availability with seasonal-adjusted pricing.

  Insurance and certifications
  - General liability $2M aggregate, naming Riverbend Hospitality Group as additional insured
  - Auto liability $1M
  - Workers comp per Colorado statute
  - Current GFSI-recognized food safety certification (SQF, BRC, or equivalent)
  - Traceability program documented to grower or farm level for organic items

  Sustainability and sourcing
  - Report % of produce sourced within 250 miles of Denver
  - Report % organic by spend
  - Disclose any single-use plastic reduction programs

  Evaluation criteria
  - Price: 50%
  - Service reliability (on-time delivery rate, fill rate): 25%
  - Quality and rejection rate: 15%
  - Sustainability: 10%

  Response format
  - Pricing on attached template (Excel) — pricing in any other format may be deemed non-responsive
  - Vendor profile, three references from comparable accounts
  - Sample weekly delivery schedule
  - COI sample
  - Sustainability disclosures

  Timeline
  - RFQ release: [date]
  - Vendor questions due: [date + 7]
  - Buyer answers issued: [date + 10]
  - Responses due: [date + 21] by 5pm MT
  - Vendor presentations (top 2): [date + 28]
  - Award: [date + 35]
  - Contract start: [date + 60]
tips:
  - "Always require the pricing template. Vendors who submit in their own format are either disorganized or hiding markup structures."
  - "Insist on traceability for organic items. Without it, organic pricing is a margin claim, not a sourcing commitment."
  - "Build in a quarterly business review clause. Pricing on year-long contracts drifts unless reviewed."
  - "If you have multiple locations, weight service reliability above 25%. A great price with three missed deliveries a month costs more than a higher quote with 99.5% on-time."
  - "Run the prompt for each major category separately. Bundling produce, dairy, and proteins into one RFQ usually leaves money on the table."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - event-catering-proposal
  - kitchen-shift-handoff-summary
  - federal-rfp-capability-statement
tags:
  - hospitality
  - procurement
  - rfq
  - vendor-management
  - operations
---
