---
title: "Write a full SEO content brief from a target keyword"
slug: content-brief
function: marketing
role: seo
description: "Generate a comprehensive SEO content brief that a writer can use to produce a ranking article without additional research or direction."
useCase: "Use this prompt to create content briefs for external writers, internal contributors, or your own writing process. A thorough brief reduces revision cycles and ensures articles are built for both search intent and reader value from the first draft."
prompt: |
  You are a senior SEO content strategist. Create a comprehensive content brief for the following target keyword.

  Inputs:
  - Target keyword: {{target_keyword}}
  - Secondary / related keywords: {{secondary_keywords}}
  - Target audience: {{target_audience}}
  - Writer's background (so they know what to assume): {{writer_background}} (e.g., subject matter expert, generalist writer with research time, junior writer)
  - Competing articles to beat: {{competitor_urls}} (paste 2–3 URLs or describe them)
  - Word count: {{word_count}}
  - Internal links to include: {{internal_links}}
  - CTA or conversion goal for this article: {{conversion_goal}}

  Write a content brief with these sections:

  ## Article Brief Header
  - Target keyword, secondary keywords, word count, target publish date (blank for writer to fill)
  - Recommended author type: subject matter expert, generalist, or either

  ## Search Intent Analysis
  What is the user trying to accomplish? What stage of the buying journey are they in? What format do they expect to find (list, guide, comparison, tutorial)?

  ## Unique Angle
  What will make this article better than the top results? Name 1–2 specific things to include that competitors miss.

  ## Outline with Section Briefs
  For each H2:
  - Heading text
  - What to cover (3–5 bullet points of specific content)
  - Suggested format (paragraph, table, numbered list, callout box)
  - Any specific data points, examples, or frameworks to include

  ## Style and Tone Guidelines
  - Reading level target
  - Sentence length guidance
  - What to avoid (jargon, buzzwords, passive voice tendencies, etc.)
  - Voice (first, second, or third person; formal vs. conversational)

  ## On-Page SEO Checklist
  Specific guidance: where to place the target keyword, how many times to use it, what to include in the intro, image alt text guidance, URL slug suggestion.

  ## CTA and Conversion Integration
  Where and how to include the conversion element without disrupting the reading experience.
variables:
  - "{{target_keyword}}"
  - "{{secondary_keywords}}"
  - "{{target_audience}}"
  - "{{writer_background}}"
  - "{{competitor_urls}}"
  - "{{word_count}}"
  - "{{internal_links}}"
  - "{{conversion_goal}}"
exampleInput: |
  target_keyword: operations KPI dashboard
  secondary_keywords: operations metrics, KPI tracking, operations dashboard examples, key performance indicators for operations
  target_audience: operations directors at mid-market companies who manage teams without data staff
  writer_background: generalist writer with 2 hours of research time; not a technical expert
  competitor_urls: generic Klipfolio and Geckoboard blog posts on KPI dashboards — very broad, not operations-specific
  word_count: 1800
  internal_links: Anchor Analytics product page, blog post on "15 operations metrics to track," Signal feature page
  conversion_goal: demo request via inline CTA and end-of-article CTA
exampleOutput: |
  ## Article Brief Header
  Target keyword: operations KPI dashboard
  Secondary keywords: operations metrics, KPI tracking, operations dashboard examples, key performance indicators for operations
  Word count: 1,800 words
  Recommended author: Generalist writer with research time; or ops subject matter expert for extra credibility

  ## Search Intent Analysis
  Users searching "operations KPI dashboard" are likely ops managers or directors who either (a) want to see examples of what an ops dashboard looks like, or (b) are planning to build or improve their own. Primarily informational intent, with commercial investigation undertones. Expected format: visual-friendly, example-rich guide with some practical framework elements.

  ## Unique Angle
  Competitors' articles are generic (applicable to any function, any industry). This article should be specifically for operations teams — not marketing dashboards, not finance dashboards. Include:
  1. An ops-specific metric list (logistics, fulfillment, team productivity — not generic "revenue" metrics)
  2. A real example of a mid-market ops dashboard layout with which metrics go where and why

  ## Outline

  **Intro (150 words)**
  Cover: the problem with most ops dashboards (tracking too much of the wrong stuff); what this article will help them build. Include "operations KPI dashboard" in first 100 words.

  **H2: What Should an Operations KPI Dashboard Include? (400 words)**
  Cover: the 3 categories of operational metrics (leading, lagging, health); which category belongs on a dashboard vs. in a weekly report; why less is more.
  Format: short paragraphs + a 2-column "Include vs. Skip" table
  Data: include benchmark of 5–8 metrics being the optimal dashboard range

  **H2: 12 Operational KPIs Worth Tracking (600 words)**
  Cover: specific, named KPIs organized by function (fulfillment, customer ops, team productivity). For each: what it measures, why it matters, how to calculate it.
  Format: numbered list with definition + formula + benchmark for each
  Include internal link to "15 operations metrics" article

  **H2: Operations Dashboard Examples (300 words)**
  Cover: describe 2 example dashboard layouts for different types of ops teams (logistics vs. professional services). Note: writer should request 2 screenshot examples from the Anchor team or use described mockup language.
  Format: visual + description

  **H2: How to Build an Operations KPI Dashboard (300 words)**
  Cover: the practical steps — choose metrics, connect data sources, set review cadence. Note where Anchor Analytics fits naturally as a tool option (not a hard sell — mention as one approach).
  Include link to Signal feature page.

  **Conclusion + CTA (150 words)**
  Summarize key principles; include demo CTA ("See how Anchor Analytics builds this for ops teams — book a 30-minute demo").

  ## Style Guidelines
  - Reading level: 8th grade (short sentences, active voice, no jargon)
  - Avoid: "leverage," "utilize," "holistic," "best-in-class"
  - Voice: second person ("you," "your team") — conversational but authoritative
  - Sentence length: vary between short punchy sentences and medium-length explanations; avoid sentences over 25 words

  ## On-Page SEO Checklist
  - Include "operations KPI dashboard" in H1, intro paragraph, one H2, and once in body
  - Secondary keywords: sprinkle naturally — don't force more than 1-2 per section
  - URL slug suggestion: /blog/operations-kpi-dashboard
  - Image alt text: use descriptive language (e.g., "example operations KPI dashboard showing fulfillment metrics")
  - Internal links: 3 minimum — Anchor product page, 15 metrics blog post, Signal feature page

  ## CTA Integration
  Mid-article: after the "12 KPIs" section — inline text CTA: "Want to see these KPIs live in a dashboard built for ops teams? [See how Anchor works →]"
  End of article: full-width CTA box: "Book a 30-minute demo → See your operational metrics live, without a data team."
tips:
  - "A brief is only as good as the writer who follows it. Walk your writer through it before they start — 15 minutes saves 2 revision cycles."
  - "The 'unique angle' section is where most briefs are weak. Generic guidance ('write better content') is useless. Specific differentiation ('include a side-by-side dashboard comparison with examples') is actionable."
  - "After the article is written, run it through the brief and check: did the writer cover every H2 section? Did they include the internal links? Did the intro include the target keyword? These are mechanical checks that save editing time."
  - "Ask Claude to generate a list of 'People Also Ask' questions for the target keyword after writing the brief — often the best H2s come from actual SERP questions."
  - "If you have access to search console data, paste the top 5 actual queries that landed on your site for this keyword — sometimes the real intent differs from the head keyword."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - blog-post-outline
  - meta-description
  - internal-linking-plan
  - faq-content
tags:
  - seo
  - content-brief
  - content-strategy
  - writing
---
