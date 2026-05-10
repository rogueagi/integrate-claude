---
title: "Outline a content pillar with topic clusters and supporting articles"
slug: content-pillar-outline
function: marketing
role: seo
description: "Build a full content pillar structure: one pillar page, 5-8 cluster topics, and 3-5 supporting articles per cluster, mapped to search intent and internal linking."
useCase: "Use this prompt when planning a quarter or more of SEO content around a strategic topic. Most pillar plans are a list of keywords. This one returns a real architecture: pillar topic, cluster pages, supporting articles, search intent for each, and the internal linking map. Hand the output to writers and they can execute."
prompt: |
  You are a senior SEO strategist who builds topical authority through pillar and cluster content models. Build a full pillar architecture for the topic below.

  Topic: {{pillar_topic}}
  Brand context: {{brand_context}}
  Target audience: {{audience}}
  Current domain authority and existing coverage: {{existing_coverage}}
  Business goal this pillar should serve: {{business_goal}}

  Output:

  1. Pillar page
     - Working title (search-intent appropriate, not clickbait)
     - Primary keyword and 2-3 secondary keywords with rough monthly search volume estimates (mark estimates as estimates)
     - Search intent classification (informational, commercial investigation, transactional)
     - Why this pillar is winnable for this brand given existing coverage and authority

  2. Cluster topics (5-8 of them)
     For each cluster:
     - Cluster theme
     - Why it belongs under this pillar (do not include clusters that are weakly related)
     - Primary keyword and intent
     - 3-5 supporting article titles under it, each with intent type

  3. Internal linking map
     - Pillar links down to all clusters
     - Cluster pages link laterally to 2 sibling clusters where there's real topical adjacency (not all of them)
     - Supporting articles link up to their cluster page and to one sibling supporting article

  4. Risks and gaps
     - Where the brand likely lacks credibility or first-party data to rank
     - Which 2-3 articles need original research, interviews, or product data to be defensible

  Constraints:
  - Do not invent search volume figures. Use rough bands (low / medium / high) if you do not have data, and mark them as such.
  - Do not pad cluster count. Five strong clusters beats eight weak ones.
exampleInput: |
  pillar_topic: equity compensation for early-stage startup employees
  brand_context: Carta-adjacent fintech offering equity tracking and tax planning for employees, not employers. Brand voice is plain-English, anti-jargon, sympathetic to the employee perspective.
  audience: software engineers and PMs at Series A to C startups, ages 25-40, first or second startup job
  existing_coverage: 30 articles on equity basics, no first-party research, DR 38
  business_goal: drive sign-ups for the personal equity tracker tool, paid tier $15/mo
exampleOutput: |
  Pillar page: "The startup employee's guide to equity compensation"
  Primary keyword: startup equity for employees (medium volume, informational)
  Why winnable: existing content gives topical breadth; this consolidates and adds an opinionated frame the incumbents (Carta, Pulley) cannot publish because their customer is the employer.

  Clusters:
  1. RSUs vs ISOs vs NSOs for employees
     Why: highest-intent commercial investigation; supports the tax planning feature
     Supporting articles: ISO early exercise math, AMT explained for engineers, 83(b) decision flowchart, etc.
  2. Equity at offer time (negotiation)
     ...
  (4 more clusters)

  Internal linking map: pillar -> all clusters; cluster 1 <-> cluster 4 (both tax-heavy); supporting articles link up to cluster and to one sibling.

  Risks: brand has no first-party data on dilution outcomes. Articles on "how much equity is normal at Series A" need interview-sourced data or they will not outrank AngelList and Carta. Flag two articles for original research before publishing.
variables:
  - "{{pillar_topic}}"
  - "{{brand_context}}"
  - "{{audience}}"
  - "{{existing_coverage}}"
  - "{{business_goal}}"
tips:
  - "Feed Claude your current site coverage if you have it. The 'why this pillar is winnable' answer changes a lot based on what you already rank for."
  - "Mark search volume bands honestly. Made-up specific numbers in this output mislead the writers downstream."
  - "Five strong clusters beats eight weak ones. Trim ruthlessly before handing off."
  - "Pair with a writer brief prompt to turn each supporting article title into a full outline."
  - "Re-audit the pillar every two quarters. Search intent for the same query shifts faster than most teams update."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - icp-tailored-landing-page
  - brand-voice-style-guide
  - lifecycle-email-cadence
tags:
  - marketing
  - seo
  - content-strategy
  - pillar-content
  - topical-authority
---
