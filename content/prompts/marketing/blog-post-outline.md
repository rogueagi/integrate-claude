---
title: "Write an SEO-optimized blog post outline from a keyword"
slug: blog-post-outline
function: marketing
role: content
description: "Generate a full SEO blog post outline with H2/H3 structure, keyword placement guidance, and section briefs for a target keyword."
useCase: "Use this prompt before writing any long-form blog post to ensure the structure is optimized for search intent, covers the topic comprehensively, and guides the writer on what to cover in each section. A strong outline cuts writing time by 40% and improves SEO performance."
prompt: |
  You are an expert SEO content strategist. Create a comprehensive blog post outline for the following target keyword.

  Inputs:
  - Target keyword: {{target_keyword}}
  - Secondary keywords to incorporate: {{secondary_keywords}}
  - Target audience: {{target_audience}}
  - Content goal: {{content_goal}} (e.g., rank for keyword, generate leads, build topical authority, support a sales conversation)
  - Competitor URLs to differentiate from (if available): {{competitor_urls}}
  - Word count target: {{word_count}}
  - Tone: {{tone}} (e.g., authoritative and educational, conversational and practical, data-driven)

  Produce:

  ## 1. SEO Title Options (3 variants)
  Each under 60 characters, includes target keyword, compelling to click. Label which you recommend and why.

  ## 2. Meta Description
  Under 155 characters, includes target keyword, has a clear value proposition, ends with a soft CTA.

  ## 3. Search Intent Analysis
  What is the user actually trying to accomplish when searching {{target_keyword}}? (Informational, navigational, commercial, transactional) How does this shape what the article should do?

  ## 4. Full Outline with Section Briefs
  For each H2 section:
  - H2 heading (include secondary keyword where natural)
  - 2–3 sentence brief on what to cover
  - Suggested H3 subheadings (if needed)
  - Approximate word count for the section
  - SEO note: any specific terms, questions, or angles to hit

  Include: an introduction brief, 4–6 main body sections, and a conclusion/CTA brief.

  ## 5. Internal Linking Suggestions
  3–5 suggested internal links (topics/pages, not URLs) that would add value for readers and distribute page authority.

  ## 6. Featured Snippet Opportunity
  Identify the most likely featured snippet opportunity in this article and suggest the exact format (definition box, numbered list, table) and where to place it.
variables:
  - "{{target_keyword}}"
  - "{{secondary_keywords}}"
  - "{{target_audience}}"
  - "{{content_goal}}"
  - "{{competitor_urls}}"
  - "{{word_count}}"
  - "{{tone}}"
exampleInput: |
  target_keyword: sales pipeline management
  secondary_keywords: pipeline stages, CRM pipeline, how to manage a sales pipeline, sales forecasting
  target_audience: sales managers and sales ops leaders at B2B SaaS companies with 20–200 reps
  content_goal: rank for the keyword and capture demand from sales leaders evaluating pipeline tools
  competitor_urls: hubspot.com/pipeline-article, saleshacker.com/pipeline-guide
  word_count: 2000
  tone: authoritative and practical — no fluff, heavy on frameworks and specifics
exampleOutput: |
  ## 1. SEO Title Options
  1. "Sales Pipeline Management: The Framework That Actually Works" (59 chars) ✓ Recommended — implies a contrarian take; "actually works" triggers curiosity
  2. "How to Manage a Sales Pipeline: A Practical Guide" (50 chars) — safe, clear, but generic
  3. "Sales Pipeline Management Guide for B2B Teams" (47 chars) — good keyword fit, weak click appeal

  ## 2. Meta Description
  "Learn how to manage a sales pipeline that forecasts accurately and closes faster. Includes a deal scoring framework, stage definitions, and a weekly review structure." (166 chars — trim to fit)

  ## 3. Search Intent Analysis
  Mixed intent: primarily informational (how do I do this better?) with commercial undertones (what tools/frameworks exist?). Users are likely sales managers who have a pipeline but feel it's unreliable. The article should teach a framework, not sell a product. End with a soft commercial CTA only after delivering substantial value.

  ## 4. Full Outline

  **Introduction (150 words)**
  Brief: Open with the core problem — most pipelines lie. Establish that the issue isn't effort, it's the system. Preview: by the end of this article, the reader will have a framework for pipeline stages, a deal scoring method, and a weekly review structure.
  SEO note: Include "sales pipeline management" in first 100 words naturally.

  **H2: What Is a Sales Pipeline (and Why Yours Might Be Misleading You) — 300 words**
  Brief: Define pipeline vs. forecast. Explain the most common failure mode: deals that stay in pipeline stages too long without evidence of progression.
  H3: Pipeline vs. Forecast: The Difference That Matters
  H3: The 3 Signs Your Pipeline Data Is Unreliable
  SEO note: Answer "what is a sales pipeline" directly for featured snippet opportunity.

  **H2: How to Define Pipeline Stages That Mean Something — 400 words**
  Brief: Most stage definitions are activity-based ("demo completed") not outcome-based ("prospect confirmed problem"). Show how to shift to outcome-based stages with examples.
  H3: The Problem with Activity-Based Stage Definitions
  H3: A 5-Stage Framework with Exit Criteria
  SEO note: "pipeline stages" secondary keyword belongs here.

  [Continues for remaining sections...]

  ## 5. Internal Linking Suggestions
  - "Sales forecasting methods" — link from the forecasting accuracy section
  - "CRM pipeline setup guide" — link from the stage definitions section
  - "Weekly sales pipeline review template" — link from the review cadence section
  - "Sales quota attainment analysis" — link from the metrics section

  ## 6. Featured Snippet Opportunity
  Place a definition box under the H2 "What Is a Sales Pipeline" with this format:
  "A sales pipeline is a visual representation of where prospects are in the buying process, organized by stage from initial contact to closed deal. Unlike a sales forecast, a pipeline tracks activity; a forecast translates pipeline data into revenue projections."
  Format: definition paragraph, 40–50 words. Google favors this format for "what is" queries.
tips:
  - "Run the outline through Claude before sending to a writer — ask it to flag any sections where the brief is too vague to guide a writer without prior knowledge."
  - "The search intent analysis section will save you from writing the wrong article. A 'how to' article targeting an informational keyword that's actually commercial will rank for nothing."
  - "For competitive keywords, add 1–2 angles that competitors haven't covered based on your research — this is what earns topical authority."
  - "After the outline is approved, run the blog-post-intro prompt to write the introduction before handing off to a writer."
  - "The featured snippet format suggestion is worth testing — articles that format for featured snippets can jump position 1 without ranking changes."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - blog-post-intro
  - content-brief
  - meta-description
  - internal-linking-plan
tags:
  - seo
  - blog
  - content-strategy
  - outline
---
