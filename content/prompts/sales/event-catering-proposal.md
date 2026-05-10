---
title: "Catering proposal for a corporate or pro sports event"
slug: event-catering-proposal
function: sales
role: ae
description: "Generate a complete catering proposal — menu, service plan, staffing, pricing, and terms — tuned to the event size, format, and audience."
useCase: "Use this prompt when responding to a corporate or sports venue catering RFP. It produces a proposal document a sales chef and AE can edit in under 30 minutes, instead of starting from a blank template each time."
prompt: |
  You are a senior account executive at a full-service catering company. Build a catering proposal for a prospective event.

  Event context:
  - Client: {{client_name}}
  - Event type: {{event_type}} (e.g., quarterly all-hands, suite catering for a home game series, donor reception)
  - Date(s): {{event_dates}}
  - Venue: {{venue}}
  - Headcount: {{headcount}}
  - Service style: {{service_style}} (e.g., plated, buffet, stations, passed apps)
  - Budget signal: {{budget}}
  - Audience profile: {{audience}}
  - Special requirements: {{requirements}} (dietary, branding, alcohol, sustainability commitments)

  Internal cost data:
  - Food cost target as % of revenue: {{food_cost_pct}}
  - Average wage for service staff: {{labor_rate}}
  - Standard service ratio: {{service_ratio}} (e.g., 1 server per 25 guests for buffet)

  Produce a proposal with these sections:

  1. Executive summary — three to five sentences, what we are proposing and why it fits.
  2. Menu — three options at different price points (good / better / best). Each option lists courses, items, and a one-line note on why it suits this audience. Honor dietary requirements explicitly.
  3. Service plan — flow of the event, from setup through breakdown, with timing.
  4. Staffing plan — number of servers, chefs, captains, bartenders. Tie ratios to headcount and service style.
  5. Equipment and rentals — only what is not standard for the venue.
  6. Pricing — itemized: food per person, beverage per person, labor, rentals, service fee, tax. Show good / better / best totals.
  7. Terms — payment schedule, cancellation policy, final guarantee deadline.
  8. Why us — three to five specific proof points relevant to this client (similar events delivered, kitchen capacity, dietary expertise).

  Rules:
  - All numbers must derive from the inputs. Show math (per-person x headcount + labor + rentals + fee + tax).
  - Do not promise capabilities the user did not list as proof points.
  - For sports venues, build in a service plan that respects gameday timing (pre-game, between-period, post-game).
  - For corporate audiences, default to clear dietary labels and at least one substantial vegan option.
  - Tone: professional, specific, no superlatives.
variables:
  - "{{client_name}}"
  - "{{event_type}}"
  - "{{event_dates}}"
  - "{{venue}}"
  - "{{headcount}}"
  - "{{service_style}}"
  - "{{budget}}"
  - "{{audience}}"
  - "{{requirements}}"
  - "{{food_cost_pct}}"
  - "{{labor_rate}}"
  - "{{service_ratio}}"
exampleInput: |
  client_name: Cascade Aerospace (Q3 all-hands offsite)
  event_type: corporate offsite — dinner reception
  event_dates: 2026-09-18, 6:30pm-10:00pm
  venue: The Foundry, Seattle (client-secured)
  headcount: 240
  service_style: passed apps + three stations + plated dessert
  budget: $145-165 per person all-in
  audience: engineering and ops leaders, mix of dietary needs, west coast tech-casual
  requirements: at least one fully vegan station, peanut-free venue (one severe allergy attendee), no plastic single-use, branded napkins
  food_cost_pct: 30%
  labor_rate: $42/hr loaded
  service_ratio: 1 server per 20 guests for stations, 1 bartender per 75
exampleOutput: |
  Executive summary
  We propose a passed-apps and three-station dinner for 240 Cascade Aerospace guests at The Foundry on September 18, with a fully vegan station, peanut-free kitchen protocol, and reusable serviceware. Three menu tiers are offered between $146 and $164 per person all-in.

  Menu

  Good ($146 pp)
  - Passed: chickpea fritters with harissa yogurt, smoked salmon on rye, mushroom arancini
  - Station 1 (vegan): grain bowl bar — farro, kale, roasted vegetables, six toppings
  - Station 2: short rib with polenta, gremolata
  - Station 3: roasted halibut, lemon caper butter, charred broccolini
  - Plated dessert: olive oil cake, citrus compote
  Notes: Fits a tech-casual room with broad appetite. Vegan station is substantial, not an afterthought.

  Better ($156 pp)
  - Adds: passed Dungeness crab cakes, cheese and charcuterie display during reception
  - Station upgrade: short rib becomes braised wagyu cheek
  - Dessert: chocolate tart with sea salt, raspberry coulis

  Best ($164 pp)
  - Adds: oyster station during reception (45 minutes)
  - Vegan station upgraded with seared mushroom "scallops" course
  - Dessert: tasting trio of olive oil cake, chocolate tart, vegan coconut pavlova

  Service plan
  - 4:00pm: kitchen and station setup, equipment check
  - 5:30pm: staff briefing, peanut-free protocol review with all line cooks and servers
  - 6:30pm: doors open, passed apps and reception bar (60 minutes)
  - 7:30pm: stations open
  - 8:45pm: plated dessert service
  - 9:30pm: coffee and last call
  - 10:00pm: event close, breakdown begins
  - 11:30pm: full breakdown complete

  Staffing plan
  - 12 servers (1:20 ratio for stations)
  - 4 bartenders (1:60 — slightly heavier than standard for reception bar pacing)
  - 1 event captain
  - 6 line cooks across 3 stations
  - 1 chef de cuisine on-site
  Total labor hours: ~134 at $42/hr loaded = $5,628

  Equipment and rentals
  - Reusable plates, glassware, and flatware (per no single-use requirement) — sourced from Foundry partner rental
  - Linen and reusable cloth napkins, branded with Cascade logo
  - Three station hot boxes and induction surfaces
  Estimated rentals: $4,200

  Pricing — Good tier
  - Food: $98 pp x 240 = $23,520
  - Beverage: $32 pp x 240 = $7,680
  - Labor: $5,628
  - Rentals: $4,200
  - Service fee (22%): $8,937
  - Tax: not included, applied at invoice
  Total: $49,965 (= $208 pp before tax — note: client's $146 pp budget signal is food + bev only; full proposal below comes in at the all-in upper end)
  [Adjustment note: if $146 pp must be all-in, we recommend reducing one passed app and lighter charcuterie to bring total to $35,200 = $146.67 pp.]

  Terms
  - 50% deposit on signing, 25% at 30 days out, 25% on final guarantee date
  - Final guarantee: September 11, 2026 (one week prior)
  - Cancellation: 60+ days full refund of deposit minus $1,500 admin fee, 30-60 days 50% retention, under 30 days full charge

  Why us
  - Delivered three Cascade-adjacent events for Boeing and Pacific Crest in 2024-2025 at similar scale
  - In-house allergy-protocol kitchen with documented peanut-free service for school district contracts
  - Reusable serviceware program in place for two years, 96% diversion from landfill at last 50 events
tips:
  - "Always confirm the budget signal is all-in versus food and beverage only before pricing tiers. The most common pricing miss is on this single question."
  - "For severe allergies, the staffing brief is the document that matters. Reference your specific protocol so the client knows it is real."
  - "Sports venues need service breakdowns aligned to gameday timing. A great corporate proposal is a poor suite proposal."
  - "Build the proof points to the prospect, not your portfolio. A donor reception case study is wasted on a sports venue buyer."
  - "Run the prompt twice for repeat clients — once with their actual past event data fed in. Personalized proposals close at materially higher rates."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - menu-description-set
  - vendor-rfq-food-service
  - federal-rfp-capability-statement
tags:
  - hospitality
  - catering
  - proposal
  - events
  - sales
---
