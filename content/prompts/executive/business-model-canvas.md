---
title: "Generate a business model canvas for a new initiative"
slug: business-model-canvas
function: executive
role: strategy
description: "Produce a tight, decision-ready business model canvas for a new product, business unit, or initiative — useful as a one-page artifact for early validation."
useCase: "Use this in the first 30 days of evaluating a new initiative, before serious investment is committed. The classic nine-box canvas is fine for kickoff workshops but rarely survives leadership scrutiny. This prompt forces sharper inputs and adds a critical-assumptions section so the canvas becomes a real working document."
prompt: |
  You are a business design coach who has built canvases for early-stage startups and corporate spinouts. Produce a business model canvas for the following initiative.

  Inputs:
  - Parent company: {{parent_company}}
  - Initiative name and one-sentence description: {{initiative}}
  - Why now: {{why_now}}
  - Whose problem is being solved: {{customer}}
  - The current alternative they use: {{current_alternative}}
  - What is being proposed: {{proposed_solution}}
  - Internal sponsor: {{sponsor}}

  Produce a one-page canvas with the following sections:

  ## 1. Customer Segments
  Who specifically buys and who specifically uses. Distinguish economic buyer from end user if they are different.

  ## 2. Value Proposition
  Two sentences. What gets better for the customer. Quantify if possible.

  ## 3. Channels
  How we reach them and how they reach us. Mark each channel as **today** or **needed**.

  ## 4. Customer Relationships
  The post-purchase relationship: self-serve, high-touch, community, etc. State which one and why.

  ## 5. Revenue Streams
  The pricing model and the price point hypothesis. Include any non-recurring revenue (services, setup, etc.).

  ## 6. Key Resources
  The 3–5 things this business actually needs that are non-trivial to acquire (data, talent, distribution, IP).

  ## 7. Key Activities
  The 3–4 things the team has to be unusually good at for this to work.

  ## 8. Key Partnerships
  Partners required and what they get in return. Distinguish nice-to-have from required-to-launch.

  ## 9. Cost Structure
  The major cost buckets and the dominant ones. Note variable vs. fixed.

  Then, after the canvas:

  ## Critical Assumptions (The Top Five)
  The five assumptions on which the entire model depends. For each:
  - The assumption stated as a falsifiable claim
  - The cheapest way to test it
  - What "validated" looks like

  ## What This Canvas Is Missing
  Honest call-out of any boxes where the inputs are weak or where more research is required before this canvas can survive a real review.

  Constraints:
  - No buzzwords. "Disruptive" and "category-defining" are banned.
  - If a box requires data the inputs don't provide, name the gap rather than guessing.
  - The critical-assumptions section is the most important. Spend the most attention there.
variables:
  - "{{parent_company}}"
  - "{{initiative}}"
  - "{{why_now}}"
  - "{{customer}}"
  - "{{current_alternative}}"
  - "{{proposed_solution}}"
  - "{{sponsor}}"
exampleInput: |
  parent_company: Mosaic Apparel
  initiative: Mosaic Rental — peer-to-peer rental of Mosaic activewear pieces, member-run, app-based
  why_now: rental and resale categories growing 18% YoY in apparel; existing customer base highly engaged on social
  customer: existing Mosaic loyalists, ages 24–35, urban, willing to monetize their wardrobe
  current_alternative: list pieces individually on resale platforms (Vinted, Depop) or do nothing
  proposed_solution: app where members list, rent, and return Mosaic items with our cleaning, insurance, and logistics layer
  sponsor: VP of Innovation
exampleOutput: |
  # Mosaic Rental — Business Model Canvas

  ## 1. Customer Segments
  - **Renter (end user):** Mosaic-aware, ages 24–35, urban, has tried resale, motivated by access over ownership.
  - **Lister (economic supplier):** existing Mosaic owner with 5+ pieces, motivated by passive income from a closet they're under-using.
  - These are two segments running on one platform; both must be satisfied or the marketplace tips.

  ## 2. Value Proposition
  For renters: try premium Mosaic pieces for 1/10th the buy price, with cleaning and shipping handled. For listers: turn an under-used closet into $40–$120 of monthly income with no logistics work.

  ## 3. Channels
  - In-app prompts to existing Mosaic customers (today)
  - Email lifecycle to engaged purchasers (today)
  - Influencer seeding to top 50 community members (needed)
  - Paid social for renter acquisition (needed)
  - Referral program with both-sided incentive (needed)

  ## 4. Customer Relationships
  Community-led with operational backstop. Listers get a private Slack/Discord, named CSM for the top 100 listers. Renters are self-serve with chat support. The brand identity holds the marketplace together — without it, this is just another clothing rental.

  ## 5. Revenue Streams
  Take rate of 25% on each rental. Average rental hypothesis: $35 per item per rental. Setup fee waived to seed supply. Cleaning fee passed through at cost. Insurance bundled.

  ## 6. Key Resources
  - The Mosaic brand and customer base (we have it)
  - Logistics/cleaning partner network (need to build or partner)
  - App and marketplace tech (build or buy)
  - Lister education and onboarding content (build)

  ## 7. Key Activities
  - Match supply and demand in real time
  - Logistics coordination (pickup, cleaning, return)
  - Trust and quality enforcement
  - Community management with the lister side

  ## 8. Key Partnerships
  - Cleaning and logistics provider (required)
  - Insurance partner (required)
  - Payments processor with marketplace support (required)
  - Influencer cohort for seeding (helpful, not required)

  ## 9. Cost Structure
  - Logistics and cleaning per rental (variable, ~30% of rental price)
  - Tech build or third-party platform (fixed, $400–$800K year one)
  - Customer service (semi-variable, scales with volume)
  - Marketing acquisition (variable)
  - Loss/damage reserve (variable, ~3–5% of rental value)

  ## Critical Assumptions (The Top Five)
  1. **Listers will list at a 25% take rate.** *Test:* offer 50 top customers a private beta listing slot with a stated take rate; measure conversion. *Validated:* >40% of invited listers list at least one item.
  2. **Average rental price holds at $35 per item.** *Test:* simulate the marketplace with synthetic listings and run a 2-week landing-page test; measure stated willingness-to-pay. *Validated:* median willingness-to-pay $30+.
  3. **Logistics economics work — cleaning + shipping ≤ $10 per rental.** *Test:* live operational pilot with one logistics partner across 100 rentals. *Validated:* per-unit cost ≤ $10 at 100-rental volume.
  4. **Mosaic loyalists will rent before they buy.** *Test:* survey existing customers on intent and run a 2-week soft launch with a small inventory. *Validated:* >15% of surveyed buyers express intent and >5% convert in soft launch.
  5. **Brand experience survives the rental layer.** *Test:* run a quality audit on the first 200 rentals with mystery-shopper inspection. *Validated:* NPS on rentals ≥ NPS on retail.

  ## What This Canvas Is Missing
  - Loss and damage rates are pure assumption — need 2–3 months of operational data before they can be modeled with any confidence.
  - The lister-to-renter ratio that makes the marketplace economical is unstudied; this is the single biggest unknown and should be the focus of the initial pilot.
  - International expansion logistics are out of scope and should not be considered until US economics are validated.
tips:
  - "The critical-assumptions section is the canvas. The nine boxes are scaffolding."
  - "If you can't articulate the cheapest test for an assumption, you don't understand the assumption yet."
  - "Mark every channel and partnership as 'today' or 'needed' — it surfaces the build vs. buy decisions immediately."
  - "Two-sided marketplaces and platforms need two customer segments on the canvas. One canvas with two segments is honest; one canvas with one segment is wishful."
  - "Re-run the canvas every 90 days with what you learned. The first version is mostly hypotheses; the third version is mostly evidence."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - market-entry-analysis
  - swot-analysis
  - capital-allocation-memo
  - okr-framework-company
tags:
  - business-model
  - canvas
  - new-initiative
  - strategy
  - planning
---
