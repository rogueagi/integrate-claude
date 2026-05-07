---
title: "Write a lead magnet outline for a gated eBook or guide"
slug: lead-magnet-outline
function: marketing
role: demand-gen
description: "Generate a detailed outline for a gated eBook or downloadable guide, with chapter structure, key points, and a recommended format for maximum conversion."
useCase: "Use this prompt before creating a gated content asset. A well-structured lead magnet outline ensures the content delivers genuine value (which drives downloads and word-of-mouth) while staying focused on your core positioning."
prompt: |
  You are a content strategist and demand generation expert. Design a detailed outline for a gated eBook or downloadable guide.

  Context:
  - Topic: {{topic}}
  - Target audience: {{target_audience}}
  - The specific problem this guide solves: {{problem}}
  - What readers will be able to do after reading: {{reader_outcome}}
  - Your company's product/service (for subtle positioning): {{your_product}}
  - Estimated length: {{length}} (e.g., 15 pages, 25 pages, 40 pages)
  - Competing guides on this topic (if you know of any): {{competitors}}

  Produce:

  ## 1. Title and Subtitle Options (3 variants)
  Each should:
  - Name the specific outcome or problem
  - Signal the guide is practical, not theoretical
  - Be compelling to the target audience
  Label which you recommend.

  ## 2. Reader Promise Statement
  One paragraph (50–75 words) that will appear on the landing page and inside the guide. Tells the reader exactly what they'll get and why it's worth an email address.

  ## 3. Chapter-by-Chapter Outline
  For each chapter:
  - Chapter number and title
  - 2–3 sentence summary of what the chapter covers
  - 3–5 bullet points of specific content to include
  - Suggested format elements (e.g., framework, checklist, example, case study, comparison table)
  - Approximate page count

  Include: an introduction, 4–6 main chapters, and a conclusion with next steps.

  ## 4. Key Frameworks or Tools to Include
  List 2–3 original frameworks, templates, or tools to create for this guide — things that make it distinctive and referenceable.

  ## 5. Chapter That Naturally Leads to Your Product
  Identify which chapter most naturally opens the door to mentioning your product — and how to do it without turning the guide into a sales pitch.
variables:
  - "{{topic}}"
  - "{{target_audience}}"
  - "{{problem}}"
  - "{{reader_outcome}}"
  - "{{your_product}}"
  - "{{length}}"
  - "{{competitors}}"
exampleInput: |
  topic: operational metrics and KPI tracking for mid-market operations teams
  target_audience: operations directors and VPs at companies with 50–500 employees
  problem: ops leaders don't know which metrics to track, track too many of the wrong ones, or track the right ones inconsistently
  reader_outcome: be able to design a lean operational KPI framework for their team, select 10–15 metrics worth tracking, and build a review cadence around them
  your_product: Anchor Analytics — BI platform for ops teams
  length: 25 pages
  competitors: generic "KPI guide" content from Klipfolio, Geckoboard blog posts
exampleOutput: |
  ## 1. Title Options
  1. "The Ops Leader's KPI Playbook: 15 Metrics Worth Tracking (and How to Review Them)" ← Recommended — specific number creates credibility; "worth tracking" implies curation, not a data dump
  2. "Stop Tracking the Wrong Metrics: A Practical KPI Framework for Operations Teams" — challenger angle, good for paid promotion
  3. "The Mid-Market Operations Dashboard: Which Metrics Actually Matter and Why" — audience-specific, clear promise

  ## 2. Reader Promise Statement
  Most operations leaders track too many metrics and make decisions from too few good ones. This guide cuts through the noise. In 25 pages, you'll get a practical framework for selecting the 10–15 operational KPIs that actually drive decisions, a weekly review cadence that keeps your team aligned without hour-long status meetings, and real examples from operations leaders who've built this system at companies like yours.

  ## 3. Chapter Outline

  **Introduction: The Metrics That Lie (3 pages)**
  Summary: Why most KPI dashboards create the appearance of visibility without the reality. The difference between tracking activity and tracking outcomes.
  Content: The most common KPI mistakes (tracking too many, tracking vanity metrics, tracking what's easy instead of what matters). One story of a team that had 40+ KPIs and couldn't answer basic operational questions.
  Format: Story-driven, 1 framework callout box

  **Chapter 1: The Three Categories of Operational Metrics (4 pages)**
  Summary: A framework for organizing all operational metrics into three buckets: leading indicators, lagging indicators, and health metrics.
  Content: Definitions with examples for each category. Why you need all three. How to diagnose which type you're currently over-indexing on. A self-assessment checklist.
  Format: 3-column framework visual, self-assessment checklist

  **Chapter 2: The 15 Metrics Worth Tracking for Most Mid-Market Ops Teams (6 pages)**
  Summary: A curated list of metrics organized by function — revenue operations, customer operations, and internal operations.
  Content: For each metric: definition, why it matters, how to calculate it, what "good" looks like at 100/250/500-person companies. Common pitfalls for each.
  Format: Reference table, benchmark ranges

  [Chapters 3–6 continue...]

  ## 4. Key Frameworks or Tools
  1. **The Ops KPI Filter** — A 5-question decision tree for evaluating whether a metric is worth tracking: Is it actionable? Is it leadable? Does it have a natural owner? Can it be measured consistently? Does it connect to a business goal?
  2. **The Weekly Ops Review Template** — A structured 45-minute meeting agenda built around the recommended KPIs, with a data pull checklist.
  3. **Benchmark Table** — KPI benchmarks by company stage (50/150/300/500 employees) for the 15 recommended metrics.

  ## 5. Natural Product Mention
  Chapter 4: "How to Make KPIs Visible Without a Full-Time Analyst" — This chapter covers BI tools and dashboards. The natural transition: "If you're building this system from scratch, here's what to look for in a tool — [criteria]. For ops teams without a data team, Anchor Analytics was designed specifically for this use case." One mention, in context, with the criteria framing making it feel like a recommendation rather than an ad.
tips:
  - "The frameworks and tools section is what earns word-of-mouth and backlinks. Generic guides get downloaded once; guides with original frameworks get cited and shared."
  - "Design the outline before you start writing — then share it with 3 people from your target audience and ask: 'Which chapter would you skip?' Cut or sharpen that chapter."
  - "The reader promise statement is also your landing page copy. Write it first, before the chapters — it tells you exactly what the guide needs to deliver."
  - "Don't make the guide a product brochure. The ratio should be 90% educational content, 10% or less product mention. If readers feel sold to, they don't share."
  - "After the guide is complete, ask Claude to extract the top 5 insights as a LinkedIn carousel and the top 3 as Twitter threads — each chapter of a good guide can fuel a week of social content."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - webinar-abstract
  - blog-post-outline
  - content-brief
tags:
  - lead-magnet
  - ebook
  - demand-gen
  - content-strategy
---
