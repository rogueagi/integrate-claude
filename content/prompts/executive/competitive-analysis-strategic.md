---
title: "Strategic competitive analysis for the leadership team"
slug: competitive-analysis-strategic
function: executive
role: strategy
description: "Produce a strategic-level competitive analysis that goes beyond feature checklists to surface where competitors are actually winning, what their moves signal about the market, and how leadership should respond."
useCase: "Use this when the leadership team needs to make a real decision — invest in a category, change pricing, kill a product line — and a sales-team battle card isn't the right level of analysis. The output is meant for a CEO, CPO, and CRO sitting in a room, not for a rep on a call."
prompt: |
  You are a strategy consultant who has advised CEOs through competitive inflection points. Produce a strategic competitive analysis of {{competitor_name}} for the {{company_name}} leadership team.

  Inputs:
  - Your company and category: {{company_name}}, {{category}}
  - The competitor under analysis: {{competitor_name}}
  - What you know about their funding, headcount, and growth: {{competitor_facts}}
  - Their go-to-market motion and ICP: {{competitor_gtm}}
  - Recent moves they've made (last 12 months): {{recent_moves}}
  - Where you currently win against them: {{where_you_win}}
  - Where you currently lose to them: {{where_you_lose}}
  - The strategic question leadership needs answered: {{strategic_question}}

  Structure the analysis with these sections:

  ## The One-Sentence Read
  A single sentence stating what {{competitor_name}} actually is, stripped of their marketing.

  ## What They Are Trying To Become
  Their three-year ambition, inferred from their hiring, product, and capital moves. Be specific — not "become a platform" but "become the system of record for X buyer."

  ## Where They Are Strong (and Why)
  Three structural strengths. For each, distinguish between a real moat and a temporary lead.

  ## Where They Are Vulnerable
  Three structural weaknesses. Same test: structural, not cosmetic.

  ## The Move That Should Worry Us Most
  The single move they could make in the next 12 months that would change the competitive picture against us. Why it would work, and what would have to be true for them to do it.

  ## What This Means For {{company_name}}
  Direct answer to the strategic question: {{strategic_question}}. Take a position. Recommend.

  ## Two Decisions To Make This Quarter
  Two specific decisions {{company_name}} leadership should make in the next 90 days based on this analysis. Each decision is a binary choice, not a "consider exploring."

  Constraints:
  - No "they have great UX" or "their pricing is competitive." Be specific or stay quiet.
  - If a section requires data you don't have, name what would need to be researched rather than guessing.
  - Take a position in the recommendation. Hedging is unhelpful at this level.
variables:
  - "{{company_name}}"
  - "{{category}}"
  - "{{competitor_name}}"
  - "{{competitor_facts}}"
  - "{{competitor_gtm}}"
  - "{{recent_moves}}"
  - "{{where_you_win}}"
  - "{{where_you_lose}}"
  - "{{strategic_question}}"
exampleInput: |
  company_name: Northwind Analytics
  category: marketing analytics for B2B SaaS
  competitor_name: Helio
  competitor_facts: raised $120M Series C in March, ~280 employees, reported 2x YoY ARR growth
  competitor_gtm: PLG motion targeting marketing ops at Series A–C SaaS, freemium with conversion at 50+ seats
  recent_moves: launched AI attribution module in May; hired ex-HubSpot VP Sales; opened EMEA office; cut starter price 30%
  where_you_win: enterprise deals over $100K, accounts that need custom data warehouse integrations, regulated industries
  where_you_lose: sub-$25K deals, marketing-led buying processes, accounts where speed of setup matters more than depth
  strategic_question: should we move down-market to compete with Helio, hold the enterprise focus, or do both?
exampleOutput: |
  ## The One-Sentence Read
  Helio is a fast, marketing-friendly attribution tool that has chosen breadth over depth and is using cheap capital to grab the lower half of the market before incumbents respond.

  ## What They Are Trying To Become
  The default analytics layer in the early-stage SaaS marketing stack — installed before the company has a data team, sticky enough to survive the moment they hire one. The hire of an ex-HubSpot Sales VP signals they want to be acquired or to ride the same playbook to a category-defining IPO.

  ## Where They Are Strong (and Why)
  - **Time-to-value: structural.** Their product is genuinely faster to set up because they made the choice not to support custom warehouses. That choice is hard to reverse without breaking their core promise.
  - **Marketing-led GTM: structural.** They sell to marketing buyers in marketing language. Northwind sells to data and revops. These are different muscles and Helio's is built.
  - **Pricing entry point: temporary.** The 30% cut is funded by Series C capital and is not sustainable at scale. Watch for the price walk-back in 12–18 months.

  ## Where They Are Vulnerable
  - **Enterprise depth: structural gap.** No warehouse support, no SOC 2 Type II as of last check, no role-based access at the granularity enterprise buyers require. They cannot bolt this on without slowing their core motion.
  - **Renewal economics: unknown but likely soft.** PLG accounts that converted at 50 seats will churn or compress when the data team arrives and asks "why are we paying for this when we have Snowflake?" Worth researching their net revenue retention.
  - **Concentration risk in marketing-ops persona.** If marketing ops budgets compress in a downturn, they get cut first. Their TAM is more cyclical than they admit.

  ## The Move That Should Worry Us Most
  Helio launches a "warehouse-native" tier in late {{plan_year}} that lets enterprise buyers run their core platform on top of an existing Snowflake instance — stripping away our main technical moat. They have the engineering capacity post-Series C, the GTM motion to monetize it, and an obvious incentive to climb upmarket before their PLG growth math breaks. What would have to be true: they hire a head of enterprise product (watch their job board) and announce a Snowflake or Databricks partnership.

  ## What This Means For Northwind Analytics
  Do not chase Helio down-market. Their structural advantages there (speed, simplicity, marketing GTM) are real, and the unit economics of competing on price with VC-subsidized capital are bad for us.

  Instead, double the enterprise moat: ship warehouse-native by Q3, pursue SOC 2 Type II and FedRAMP-ready, and lock in the regulated-industry segments where Helio cannot follow. Do not "do both" — splitting focus is exactly what lets a faster competitor pick us apart.

  ## Two Decisions To Make This Quarter
  1. **Kill or commit on the SMB tier.** Either sunset our $15K starter SKU within 60 days and refocus the team, or 3x invest to make it actually competitive. The current half-measure is the worst option.
  2. **Approve the enterprise depth roadmap.** Lock the Q3 warehouse-native release, fund the compliance work, and reorient marketing toward "the analytics platform you can run on your own infrastructure." This becomes the wedge against Helio's structural ceiling.
tips:
  - "Run this against your three biggest competitors annually. Most leadership teams over-watch one and ignore the other two until it's too late."
  - "Force the 'one-sentence read.' If you can't say what a competitor actually is in a sentence, you don't understand them yet."
  - "The 'move that should worry us most' is the highest-value section. It's also the easiest one to write hand-wavingly. Make it concrete enough to set up an early-warning indicator."
  - "Pair this with a customer interview cycle. Win/loss data beats analyst reports."
  - "Re-read this analysis the day a competitor announces something — not after. The pre-mortem you wrote is more useful than the panic doc you'd write live."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - annual-strategic-plan-outline
  - swot-analysis
  - market-entry-analysis
  - pricing-strategy-review
tags:
  - competitive-analysis
  - strategy
  - leadership
  - market-intelligence
  - ceo
---
