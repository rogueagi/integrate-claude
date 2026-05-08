---
title: "Review and recommend pricing strategy adjustments"
slug: pricing-strategy-review
function: executive
role: strategy
description: "Conduct a structured pricing review that surfaces where current pricing is leaving money on the table, where it is creating friction, and what the next move should be."
useCase: "Use this when revenue per customer feels off, win rates are sliding, or a competitor has just changed their pricing. Pricing changes are some of the highest-leverage decisions a company makes — and the ones most often deferred for fear of getting it wrong. This prompt produces a memo that gives leadership the structure to act."
prompt: |
  You are a pricing strategist who has run pricing redesigns at SaaS, B2B services, and consumer companies. Produce a pricing strategy review for {{company_name}}.

  Inputs:
  - Company and category: {{company_name}}, {{category}}
  - Current pricing model and tiers: {{current_pricing}}
  - Average ACV / order value: {{current_acv}}
  - Win rate and where deals are lost: {{win_rate_data}}
  - Discount frequency and average discount given: {{discounting_data}}
  - Customer feedback on pricing (signals, not vibes): {{customer_signals}}
  - Competitor pricing landscape: {{competitor_pricing}}
  - The trigger for this review: {{trigger}}
  - Constraints (e.g., contracts in flight, board commitments): {{constraints}}

  Structure the review:

  ## The Diagnosis (One Paragraph)
  What is actually happening with pricing today, in plain language. Avoid jargon — describe the customer behavior and the financial outcome.

  ## Where The Money Is Leaking
  Three specific leaks, each with the financial estimate. Examples: high discount rate on a specific tier, low attach on a paid module, expansion that should be paid but is being given away.

  ## What The Pricing Is Telling Customers
  Pricing is communication. Describe what the current pricing is unintentionally signaling — about who the product is for, what is valuable, and what is replaceable.

  ## Three Adjustments To Consider
  Three specific pricing changes, ordered from least to most ambitious. For each:
  - **What changes:** the concrete adjustment
  - **Why now:** the trigger or evidence
  - **Expected revenue impact:** an estimate with the assumption stated
  - **Risk:** what could go wrong and at what magnitude
  - **Implementation effort:** time, systems, comms

  ## What I Would Recommend
  Take a position. Of the three options, which one and why. Or a sequence: do A now, B in 6 months.

  ## Communication & Migration Plan (Sketch)
  How existing customers find out, what grandfathering looks like, what sales teams need, what the rollout cadence is. Sketch only — not the full plan, but enough to know if the change is feasible.

  ## What We Should Not Change
  Pricing components that are working and should be left alone. Just as important as what to change.

  Constraints:
  - Be specific about dollar impact. If you don't have data, name the assumption you'd test first.
  - Avoid the trap of "raise prices" as a default answer. Sometimes the answer is restructure or unbundle.
  - Pricing changes ripple through sales comp, finance, and CS. Acknowledge that.
variables:
  - "{{company_name}}"
  - "{{category}}"
  - "{{current_pricing}}"
  - "{{current_acv}}"
  - "{{win_rate_data}}"
  - "{{discounting_data}}"
  - "{{customer_signals}}"
  - "{{competitor_pricing}}"
  - "{{trigger}}"
  - "{{constraints}}"
exampleInput: |
  company_name: DataStream
  category: real-time analytics for e-commerce
  current_pricing: three tiers — Starter $2K/mo, Growth $6K/mo, Enterprise custom; pricing by data volume
  current_acv: $58K
  win_rate_data: overall win rate 32%; on Enterprise tier 41%; Growth tier 19%; lose mostly on price at Growth, on integrations at Enterprise
  discounting_data: average 22% discount given; 40% of deals discounted >20%; CRO has open hand to discount
  customer_signals: "Growth tier feels like a tax on success — every time we grow, we pay more"; champions reporting they fight the bill internally each quarter
  competitor_pricing: Helio recently cut starter price 30%; Analytix Pro priced lower at entry, higher at enterprise; usage-based vendors gaining traction
  trigger: Growth tier is leaking — high churn, low expansion, lots of escalations
  constraints: 60+ multi-year contracts in flight that lock current pricing; sales comp restructure already in progress
exampleOutput: |
  ## The Diagnosis
  The Growth tier is doing what it was designed to do at the start of the pricing model — capture mid-market customers — but it is leaking on both ends. Customers feel punished for growth because data-volume pricing creates a quarterly fight, and our discounting habits are signaling that the list price is wrong. Enterprise pricing is healthier but is increasingly compared to bundled competitors.

  ## Where The Money Is Leaking
  1. **Discount erosion on Growth tier.** 40% of deals discount >20%. At ~$2.5M of Growth ARR, that's roughly $400K of annualized discount on this tier alone. The list price is functionally a fiction.
  2. **Negative expansion behavior.** Customers throttle data ingestion to manage their bill, which means we are losing the use cases that drive renewal stickiness. Estimated effect: ~5 percentage points of NRR drag, roughly $1.1M ARR/year.
  3. **Underpriced enterprise integrations.** Custom warehouse integrations are bundled into Enterprise pricing without a paid attach — a real services cost we are absorbing. Estimated leak: $600K–$900K/year.

  ## What The Pricing Is Telling Customers
  Today's pricing tells customers: "We are a volume-metered tool. Your bill goes up when you succeed. Negotiate hard at renewal." That is not how we want them to think about us — we want them to think about Vantage as a system of insight, not a meter.

  ## Three Adjustments To Consider

  ### Option A — The Tactical Fix (lowest ambition)
  - **What changes:** Eliminate the 22% average discount on Growth by lowering list price 12% and capping discount authority at 10% without VP sign-off.
  - **Why now:** Discount habit is set; resetting list aligns price with reality.
  - **Expected revenue impact:** +$150–$250K/year on a same-volume basis, mostly through reduced discount leakage.
  - **Risk:** Sales pushback; some deals won on heavy discount don't close. Magnitude: small.
  - **Implementation effort:** ~6 weeks, sales comp tweak, quoting system update.

  ### Option B — The Repositioning (medium ambition)
  - **What changes:** Replace data-volume pricing on Growth and Enterprise with seat- + outcome-based pricing (seats × value-modifier from active dashboards/use cases). Grandfather existing contracts.
  - **Why now:** Customer signals say data-volume pricing is the source of pain, and the market is shifting toward outcome-based models.
  - **Expected revenue impact:** +12–18% ACV expansion at renewal; reduced churn on high-volume customers. Roughly $2.4M ARR/year at scale.
  - **Risk:** Sales force needs retraining; finance forecasting is harder for two quarters. Magnitude: medium.
  - **Implementation effort:** 4–5 months, billing system rework, sales enablement, customer comms.

  ### Option C — The Reframe (highest ambition)
  - **What changes:** Move to a platform-fee + module pricing model. Core platform per-seat; AI compliance, custom integrations, and advanced reporting are paid attaches.
  - **Why now:** Aligns price with what customers value (modules) and creates clear expansion paths.
  - **Expected revenue impact:** +20–30% ACV uplift over 12 months; clearer expansion mechanics.
  - **Risk:** Bigger lift, requires repositioning, some sticker shock. Magnitude: meaningful.
  - **Implementation effort:** 7–9 months, full pricing redesign.

  ## What I Would Recommend
  Sequence A and B. Ship the tactical fix in the next 60 days to stop the discount bleed, then commit to the repositioning for the second half of the year. Defer Option C until we have proven the seat-based model works. The full reframe is the right destination but trying to do all three at once will break sales productivity.

  ## Communication & Migration Plan (Sketch)
  - Existing contracts: grandfathered until renewal; no surprise mid-term changes.
  - At renewal: customers see new pricing, with a "no worse than today" guarantee for the first year.
  - Sales: 2-week enablement, new pricing calculator, talk-track for the "why this is better for you" conversation.
  - Customer Success: proactive outreach on top 50 accounts in the 60 days before their renewal.
  - Finance: dual-track forecasting through one full quarter to validate.

  ## What We Should Not Change
  - Enterprise tier list price — it's holding and competitors are not pressuring it.
  - The dedicated onboarding inclusion — it's a structural advantage and a real reason customers choose us.
  - Multi-year discount structure — it's healthy and supports cash collection.
tips:
  - "Discounting data is the most underrated diagnostic. If average discount is over 15%, your list price is fiction and customers know it."
  - "Always include a 'what we should not change' section. Pricing reviews tend to over-correct."
  - "Sequence pricing changes — tactical fixes first, structural changes second. Doing both at once breaks the sales motion."
  - "Run any proposed change against three real deal scenarios before deciding. Spreadsheets lie; live deals don't."
  - "If you have customer signals, quote them in the memo. They are more persuasive than analyst data."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - competitive-analysis-strategic
  - capital-allocation-memo
  - business-model-canvas
  - exec-memo-leadership
tags:
  - pricing
  - revenue
  - strategy
  - monetization
  - leadership
---
