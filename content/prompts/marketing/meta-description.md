---
title: "Write meta descriptions for a list of pages"
slug: meta-description
function: marketing
role: seo
description: "Generate click-optimized meta descriptions for multiple pages at once, each tailored to the page's search intent and target keyword."
useCase: "Use this prompt when you need to write or audit meta descriptions at scale — for a site migration, a content refresh, or a new content batch. Meta descriptions don't affect rankings directly, but they drive click-through rate from search results, which does."
prompt: |
  You are an SEO copywriter who understands that meta descriptions are ads for your pages — they determine whether someone clicks your result or the one below it. Write meta descriptions for the following pages.

  For each page, I'll provide:
  - Page title / topic
  - Target keyword
  - Page type (e.g., blog post, product page, landing page, category page)
  - Primary search intent (informational, commercial, transactional)

  Pages to write meta descriptions for:
  {{page_list}}

  For each page, write:
  1. A primary meta description (under 155 characters)
  2. A backup option if the first is too long to test

  Each meta description should:
  - Include the target keyword naturally (ideally near the start)
  - Match the search intent: informational pages → describe the value of reading; commercial pages → highlight differentiators; transactional pages → include a CTA
  - Be specific enough to stand out from generic SERP competitors
  - End with a benefit or soft call to action where appropriate
  - NOT start with the company name or the page title (these are already in the title tag)

  After all descriptions, flag any pages where the search intent seems misaligned with the page type — this is often a bigger issue than the description itself.
variables:
  - "{{page_list}}"
exampleInput: |
  page_list: |
    Page 1:
    - Title/topic: "Sales Pipeline Management Guide"
    - Target keyword: sales pipeline management
    - Page type: blog post
    - Search intent: informational

    Page 2:
    - Title/topic: Anchor Analytics pricing page
    - Target keyword: business intelligence pricing
    - Page type: pricing/product page
    - Search intent: commercial

    Page 3:
    - Title/topic: "What is a KPI dashboard?" explainer
    - Target keyword: KPI dashboard
    - Page type: blog post
    - Search intent: informational

    Page 4:
    - Title/topic: Free BI tool comparison guide
    - Target keyword: best BI tools for small business
    - Page type: landing page / comparison
    - Search intent: commercial
exampleOutput: |
  Page 1 — Sales Pipeline Management Guide
  Primary: "Learn how to manage a sales pipeline that actually forecasts accurately. Includes a deal scoring framework, stage definitions, and a weekly review structure." (156 chars — trim 1 word)
  Backup: "A practical framework for sales pipeline management: deal scoring, stage exit criteria, and a weekly review process that produces reliable forecasts." (149 chars ✓)

  Page 2 — Anchor Analytics Pricing
  Primary: "Anchor Analytics pricing for ops teams: Professional and Enterprise plans with unlimited data retention and dedicated onboarding. No data team required." (152 chars ✓)
  Backup: "Compare Anchor Analytics plans. Business intelligence for operations teams — no SQL, no data team, starting at [price]. See what's included." (141 chars ✓)

  Page 3 — What Is a KPI Dashboard?
  Primary: "A KPI dashboard is a real-time view of the metrics that drive your business. Learn what to include, what to avoid, and how to build one your team actually uses." (161 chars — trim)
  Backup: "KPI dashboards explained: what to include, how to choose the right metrics, and why most dashboards fail — with examples for operations teams." (142 chars ✓)

  Page 4 — Best BI Tools for Small Business
  Primary: "Comparing BI tools for small and mid-size businesses? See how Anchor, Tableau, Looker, and Google Looker Studio compare on cost, ease of setup, and support." (157 chars — trim 2)
  Backup: "The honest comparison of BI tools for teams without a data engineer. We cover cost, setup time, integrations, and who each tool is actually built for." (151 chars ✓)

  Search intent flags:
  - Page 4: The landing page appears to be set up as a comparison guide (commercial intent), which is correct for "best BI tools" queries. However, confirm that the page actually compares alternatives honestly — pages that only praise one tool in a "comparison" format tend to rank poorly and have high bounce rates from this query.
tips:
  - "Write the meta description after you've written the page, not before — the best meta descriptions summarize what the page actually delivers, not what you hope it covers."
  - "Check your top 10 SERP competitors' meta descriptions before writing. Your description needs to stand out from that specific list, not generic expectations."
  - "Use parentheses strategically — '(With Examples)' or '(Free Template)' at the end of a meta description can boost CTR measurably."
  - "Avoid keyword stuffing: a meta description that sounds like a keyword list will be ignored. Write for humans, include keywords naturally."
  - "Google rewrites meta descriptions roughly 60% of the time. This doesn't mean you shouldn't write them — when Google uses yours, it's because it was the best option available."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - content-brief
  - blog-post-outline
  - internal-linking-plan
tags:
  - seo
  - meta-description
  - on-page
  - ctr
---
