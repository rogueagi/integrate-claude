---
title: "Write a compelling blog post introduction"
slug: blog-post-intro
function: marketing
role: content
description: "Generate a strong, hook-first blog post introduction that earns the scroll and sets up the article's core argument."
useCase: "Use this prompt to write or rewrite a blog post introduction. The first 100 words determine whether a reader stays or bounces — this prompt generates an intro that hooks immediately, establishes stakes, and promises specific value."
prompt: |
  You are an expert B2B content writer. Write a compelling introduction for a blog post.

  Article details:
  - Target keyword: {{target_keyword}}
  - Article title: {{article_title}}
  - Target audience: {{target_audience}}
  - Core argument or thesis: {{core_argument}} (the main thing this article proves or teaches)
  - The problem it addresses: {{reader_problem}}
  - What the reader will know or be able to do after reading: {{reader_outcome}}
  - Tone: {{tone}}
  - Word count target for intro: {{intro_length}} words (typically 100–200)

  Write an introduction that:
  - Opens with a hook — a specific statistic, a provocative claim, a relatable scenario, or a counterintuitive statement. NOT "In today's fast-paced business environment..."
  - Establishes the reader's problem quickly and with empathy — they should feel understood in the first 3 sentences
  - Bridges from the problem to the promise: what will this article do for them?
  - Ends with a clear thesis or preview sentence that makes them want to read section 1
  - Includes the target keyword naturally within the first 100 words
  - Is under {{intro_length}} words

  Produce 2 intro variants with different hook styles:
  - Variant A: Data/statistic hook
  - Variant B: Scenario/relatable situation hook

  After each, note why the hook style works for this audience and topic.
variables:
  - "{{target_keyword}}"
  - "{{article_title}}"
  - "{{target_audience}}"
  - "{{core_argument}}"
  - "{{reader_problem}}"
  - "{{reader_outcome}}"
  - "{{tone}}"
  - "{{intro_length}}"
exampleInput: |
  target_keyword: sales pipeline management
  article_title: Sales Pipeline Management: The Framework That Actually Works
  target_audience: sales managers at B2B SaaS companies
  core_argument: most pipelines fail because stage definitions are activity-based, not outcome-based — switching to outcome-based stages with exit criteria fixes forecasting accuracy
  reader_problem: their pipeline shows a healthy number but deals keep slipping and forecasts are unreliable
  reader_outcome: they'll have a framework to rebuild their pipeline stages with exit criteria and a weekly review process that produces reliable forecasts
  tone: direct, authoritative, no filler
  intro_length: 150
exampleOutput: |
  **Variant A: Data hook**

  Most sales pipelines are optimistic fiction. Research from HubSpot found that over 60% of deals in "late stage" never close — they sit in pipeline until a rep quietly marks them lost. If your forecast feels less like a prediction and more like an educated guess every quarter, your pipeline isn't broken because of bad reps or bad leads. It's broken because of bad stage definitions.

  This guide will show you how to rebuild your sales pipeline stages around outcomes instead of activities — and give you a weekly review structure that makes your forecast something you can actually stand behind.

  *Why it works: The 60% stat is immediately credible and alarming to any sales manager who's felt this problem. Frames the issue as a systems problem, not a people problem — which is more actionable and less threatening.*

  ---

  **Variant B: Scenario hook**

  It's Tuesday morning, your CRO is asking about the quarter, and you're staring at a pipeline that looks fine on paper. Thirty-one deals in late stage. $4.2M in forecast. You've seen this story before — six weeks later, you close $2.1M and spend an afternoon explaining what happened to the other half.

  The problem usually isn't your reps or your leads. It's that your pipeline stages measure activity instead of progress. Here's how to fix that.

  *Why it works: The Tuesday morning scenario is viscerally relatable for any sales manager who has given an optimistic forecast and then underdelivered. Creates immediate emotional resonance before introducing any framework.*
tips:
  - "Test both variants with your team before publishing — often the scenario hook performs better in engagement metrics even when the data hook feels more credible."
  - "Never start with 'In this article, we will...' — that's a table of contents, not an introduction. The reader already knows what the article covers from the title."
  - "The best intros establish empathy (I understand your problem) before authority (here's how to fix it). Reverse this order and you sound like a vendor brochure."
  - "Read the intro out loud. If it doesn't sound like a human speaking, rewrite it."
  - "Ask Claude to write a third variant with a contrarian or myth-busting hook if the first two feel conventional for your topic."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - blog-post-outline
  - content-brief
  - linkedin-thought-leadership
tags:
  - blog
  - content
  - copywriting
  - seo
---
