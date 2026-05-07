---
title: "Build a competitive battle card"
slug: competitive-battle-card
function: sales
role: ae
description: "Generate a one-page competitive battle card comparing your solution against a named competitor, with win themes, landmines, and handling guides."
useCase: "Use this prompt when you're in a deal where a specific competitor has been named. A good battle card gives reps the language to position confidently without sounding defensive or attacking the competitor directly."
prompt: |
  You are a product marketing and sales enablement expert. Build a competitive battle card for use by account executives in live deals.

  Inputs:
  - Your product/company: {{your_product}}
  - Your key strengths: {{your_strengths}}
  - Competitor name: {{competitor_name}}
  - What you know about the competitor's product: {{competitor_strengths}}
  - Known competitor weaknesses or limitations: {{competitor_weaknesses}}
  - The prospect's stated priorities: {{prospect_priorities}}
  - Deals you've won against this competitor and why: {{win_reasons}}
  - Deals you've lost against this competitor and why: {{loss_reasons}}

  Build a battle card with these sections:

  ## Competitor Snapshot (3–5 bullets)
  Who they are, what they're good at, how they position themselves. Be accurate — never underestimate them.

  ## Why We Win (3–4 themes)
  The specific scenarios and use cases where we outperform. Each theme should be:
  - Named (e.g., "Enterprise-grade compliance")
  - Explained in 1–2 sentences
  - Backed by a customer proof point or metric if possible

  ## Their Best Arguments Against Us (and How to Handle Them)
  3–4 objections the competitor's champion will raise, with a 1–2 sentence response for each. Responses should be honest — don't claim we do something we don't.

  ## Landmines to Plant (questions to ask that highlight their weaknesses)
  3–4 discovery questions you can ask prospects that naturally surface the competitor's limitations — without naming the competitor directly.

  ## Traps to Avoid
  2–3 things NOT to say or do when competing against them (e.g., "Don't get into a feature checklist comparison," "Don't attack their pricing model directly").

  ## One-Line Positioning Statement
  A single sentence that captures why we're the better choice for the right customer — honest enough to be credible, confident enough to land.
variables:
  - "{{your_product}}"
  - "{{your_strengths}}"
  - "{{competitor_name}}"
  - "{{competitor_strengths}}"
  - "{{competitor_weaknesses}}"
  - "{{prospect_priorities}}"
  - "{{win_reasons}}"
  - "{{loss_reasons}}"
exampleInput: |
  your_product: DataStream (real-time analytics platform for e-commerce)
  your_strengths: sub-second query performance, native Shopify/Magento integrations, dedicated onboarding team, unlimited data retention
  competitor_name: Analytix Pro
  competitor_strengths: lower starting price, strong brand recognition, large library of pre-built dashboards
  competitor_weaknesses: slow query times on large datasets, 12-month data retention cap, self-serve onboarding only, no native e-commerce integrations (requires middleware)
  prospect_priorities: fast time-to-value, integration with existing Shopify stack, ability to analyze 3+ years of historical data
  win_reasons: won deals where prospects tried Analytix and hit the data retention wall, or where their IT team didn't want to manage middleware
  loss_reasons: lost deals where prospect prioritized low initial price over long-term fit, or where pre-built dashboards matched their exact use case
exampleOutput: |
  ## Competitor Snapshot
  - Analytix Pro is a well-established BI platform with strong brand recognition and a large template library
  - Priced aggressively at the low end — good for simple, self-serve analytics use cases
  - Positions on ease of setup and breadth of pre-built dashboards
  - Known weakness: built for general-purpose BI, not e-commerce-native workflows
  - Key constraint: 12-month data retention cap and no native e-commerce integrations

  ## Why We Win

  **1. E-commerce-native integrations**
  DataStream connects directly to Shopify and Magento without middleware — no IT lift, no data lag. Analytix requires third-party connectors that add cost and complexity.
  *Proof: Mosaic Apparel cut their data pipeline setup from 6 weeks to 4 days switching from Analytix.*

  **2. Historical data that doesn't expire**
  Our unlimited data retention means you can analyze 3, 5, or 10 years of customer behavior. Analytix caps at 12 months — which means you lose your year-over-year comparisons every time a new year starts.

  **3. Speed at scale**
  Our query engine is built for high-volume transactional data. Analytix customers consistently report slow queries when datasets grow past 50M rows — a threshold most mid-market e-commerce brands hit within 18 months.

  **4. Onboarding that actually works**
  We provide a dedicated onboarding engineer for every implementation. Analytix is self-serve — great if you have a data team, frustrating if you don't.

  ## Their Best Arguments Against Us (and How to Handle Them)

  "Analytix is cheaper."
  "It is at the entry price point. But once you factor in the middleware cost for Shopify integration and the IT time to maintain it, most of our customers find the total cost of ownership is comparable — and they get unlimited retention and dedicated support included."

  "Analytix has more pre-built dashboards."
  "They do, and if their dashboards match your exact reporting needs, that's a real advantage. The question is whether those templates are built for e-commerce or general BI — because most of our customers found they were customizing Analytix dashboards heavily anyway."

  "We've heard DataStream is harder to set up."
  "We have a full onboarding team — you don't set it up yourself. The reason people say this is they're comparing our implementation to Analytix's self-serve trial, which is apples to oranges. What matters is time to your first real insight."

  ## Landmines to Plant
  1. "How much historical data do you need access to — and how far back will your reporting go in three years?"
  2. "How is your team thinking about the integration between your analytics layer and Shopify? Who manages that connection today?"
  3. "As your transaction volume grows, how important is query speed — are you running real-time reports during peak sales events?"
  4. "What's your onboarding model preference — self-serve, or do you want a dedicated resource to configure things for you?"

  ## Traps to Avoid
  - Don't get pulled into a dashboard feature checklist. Analytix will win that comparison on volume; we win on depth and fit.
  - Don't attack their price directly. Acknowledge it's lower and pivot to total cost of ownership.
  - Don't oversell speed if the prospect's dataset is small — the performance advantage only becomes relevant at scale.

  ## One-Line Positioning Statement
  "DataStream is built for e-commerce teams that have outgrown general-purpose BI — deeper integrations, unlimited history, and a real onboarding team."
tips:
  - "Update this battle card every quarter. Competitors ship new features and change their messaging — a stale battle card is worse than none."
  - "Share this only internally. Battle cards that get forwarded to prospects look petty and undermine credibility."
  - "The 'landmine' questions are the most powerful part — they surface competitor weaknesses through the prospect's own discovery, not through you attacking."
  - "Be honest about where you lose. A battle card that claims you always win is not credible to reps who've lost deals."
  - "Ask Claude to generate an updated version whenever you have a notable win or loss against this competitor — capture the reason while it's fresh."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - proposal-executive-summary
  - objection-handler-price
  - product-pitch-script
tags:
  - competitive
  - battle-card
  - positioning
  - ae
  - sales-enablement
---
