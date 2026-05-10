---
title: "Write API pricing page copy with tier positioning"
slug: api-pricing-page-copy
function: marketing
role: product-marketing
description: "Generate pricing page copy for an API product across free, team, and enterprise tiers, with explicit positioning rationale for each tier."
useCase: "Use when launching or repricing a developer API product. Pricing page copy is one of the highest-leverage surfaces a SaaS company owns, and most teams ship vague tier names with feature lists that do not actually help a buyer self-select. This prompt forces clarity on who each tier is for and why the price is what it is."
prompt: |
  You are a senior product marketer who has shipped pricing pages for developer-first SaaS products. Write pricing page copy for an API product with three tiers: Free, Team, and Enterprise.

  Product context:
  - Product: {{product_name}} ({{product_description}})
  - Primary user: {{primary_user}} (e.g., backend engineer, ML engineer, platform team)
  - Core unit of value: {{value_unit}} (e.g., API calls, tokens processed, documents indexed)
  - Pricing model: {{pricing_model}} (e.g., usage-based, seat plus usage, flat tiers)
  - Free tier limit: {{free_limit}}
  - Team tier price and limit: {{team_price}} / {{team_limit}}
  - Enterprise: {{enterprise_anchor}} (e.g., starts at $X, custom)
  - Key competitor pricing reference: {{competitor_pricing}}

  For each tier, output:
  1. Tier name (keep the name {{free_tier_name}} / Team / Enterprise unless a stronger name is obvious)
  2. One-line positioning that names who the tier is for ("for solo developers shipping their first integration", not "for individuals")
  3. Headline price with the unit ("$0", "$99 / month + usage", "Custom")
  4. Three to five included items, each phrased as a concrete capability the buyer cares about, not a feature name
  5. The single CTA verb that fits the tier (Start free, Start a trial, Talk to sales)

  After the three tiers, output a "Positioning rationale" section (under 200 words) explaining:
  - Who you expect to land in each tier and why
  - Where the natural upgrade triggers are between tiers
  - Which tier is the volume tier vs. the margin tier
  - One thing you would test first and why

  Do not use the words: best-in-class, enterprise-grade, world-class, robust, seamless. Do not pad feature lists to make tiers look fuller — better to ship a short tier than a fake-looking one.
variables:
  - "{{product_name}}"
  - "{{product_description}}"
  - "{{primary_user}}"
  - "{{value_unit}}"
  - "{{pricing_model}}"
  - "{{free_limit}}"
  - "{{team_price}}"
  - "{{team_limit}}"
  - "{{enterprise_anchor}}"
  - "{{competitor_pricing}}"
  - "{{free_tier_name}}"
exampleInput: |
  product_name: Vectorline
  product_description: managed vector database with hybrid search
  primary_user: ML and backend engineers building RAG applications
  value_unit: vectors stored and queries per month
  pricing_model: usage-based with a fixed platform fee on Team and up
  free_limit: 1M vectors stored, 100K queries / month
  team_price: $99 / month + $0.20 per additional 100K queries
  team_limit: 25M vectors, 5M queries / month included
  enterprise_anchor: starts at $30K / year, includes SSO, VPC peering, SLA
  competitor_pricing: Pinecone Standard at $70/mo + usage; Weaviate self-hosted free
  free_tier_name: Developer
exampleOutput: |
  ## Developer — $0

  For solo engineers prototyping a RAG app on a side project or a hackathon weekend.

  - 1M vectors stored
  - 100K queries per month
  - Hybrid search (dense + keyword) on every index
  - Community Slack support
  - One project, one region

  CTA: Start free

  ## Team — $99 / month + usage

  For product teams shipping RAG to real users and starting to feel free-tier limits.

  - 25M vectors and 5M queries included
  - $0.20 per additional 100K queries, no overage surprises
  - Multi-region indexes and team roles
  - 99.9% uptime target, email support with a 1-business-day SLA
  - Usage dashboards your finance team will actually accept

  CTA: Start a trial

  ## Enterprise — Custom, starts at $30K / year

  For platform teams running RAG in production with security and procurement reviews ahead.

  - SSO, SCIM, and audit log export
  - VPC peering and customer-managed encryption keys
  - Contractual SLA with credits and a named solutions engineer
  - DPA, SOC 2 Type II report, and security questionnaire support
  - Custom data residency

  CTA: Talk to sales

  ## Positioning rationale

  Developer is the acquisition tier. The 1M / 100K limits are deliberately generous so a real prototype fits without a credit card, which is the only way to win against self-hosted Weaviate. Team is the volume tier — most accounts will live here for 12 to 24 months, and the $99 base anchors against Pinecone Standard while making the per-query overage feel honest. Enterprise is the margin tier, gated on procurement features (SSO, VPC, SLA) rather than usage, because the actual willingness to pay correlates with security posture, not vector count. The natural upgrade trigger from Team to Enterprise is the security review, not the bill, so Team intentionally lacks SSO and VPC. First test: move SSO from Enterprise-only to a $499 add-on on Team and watch whether it cannibalizes Enterprise or pulls forward Team upgrades. My bet is the latter, but I would not ship that change without two months of data.
tips:
  - "Tier names matter less than the one-line positioning. Pin the buyer to a specific situation, not a persona."
  - "Usage-based pricing pages should always show the overage rate explicitly. Hiding it makes finance teams nervous and kills procurement deals."
  - "Run the page past three engineers in your ICP before publishing. If they cannot tell you which tier they would pick in 30 seconds, it is not done."
  - "Resist the temptation to put SSO behind Enterprise as a procurement gate without measuring impact. For some products it is the right call, for others it blocks Team-tier expansion."
  - "Ask Claude for a second variant where the middle tier is annual-only. Compare the two and pick deliberately."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - landing-page-copy
  - competitive-positioning
  - product-launch-brief
tags:
  - saas
  - pricing
  - api
  - product-marketing
  - developer-marketing
---
