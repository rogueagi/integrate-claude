---
title: "Build an internal linking plan from a content list"
slug: internal-linking-plan
function: marketing
role: seo
description: "Analyze a list of existing content and generate an internal linking plan that builds topical authority and distributes page authority strategically."
useCase: "Use this prompt when auditing your content library to improve SEO through internal linking. Internal linking is one of the highest-ROI, lowest-cost SEO activities — this prompt turns a content inventory into a structured linking action plan."
prompt: |
  You are an SEO specialist who understands that internal linking is a structural SEO strategy, not an afterthought. Build an internal linking plan from the following content inventory.

  Inputs:
  - Your site's primary topic cluster or domain: {{primary_topic}}
  - Target audience: {{target_audience}}
  - Content inventory (list of pages with title, URL slug, and primary keyword): {{content_inventory}}
  - Your highest-priority commercial pages (to funnel authority to): {{priority_pages}}
  - Any known high-traffic or high-authority pages in the inventory: {{high_authority_pages}}

  Produce:

  ## 1. Topic Cluster Map
  Organize the content into 2–4 topic clusters. For each cluster:
  - Cluster name
  - Pillar page (the most comprehensive piece on this topic)
  - Supporting cluster pages
  - How the cluster supports your commercial pages

  ## 2. Priority Links to Add
  A prioritized list of internal links to add, organized as:
  - Source page (where to add the link)
  - Target page (where to link to)
  - Suggested anchor text
  - Why this link matters (authority flow, topical relevance, user journey)
  - Where in the source page to add it (intro, body, conclusion, sidebar)

  Prioritize: links from high-authority pages to commercial pages, then links that strengthen topic cluster coherence, then links that reduce orphaned pages.

  ## 3. Orphaned Pages
  List any pages in the inventory that have fewer than 2 inbound internal links — these are "orphaned" and likely underperforming. For each: suggest 2 pages that should link to it and the appropriate anchor text.

  ## 4. Anchor Text Diversity Check
  Review the anchor texts in your linking plan and flag any over-used phrases. Recommend diversity in anchor text (exact match, partial match, contextual/descriptive).

  ## 5. Implementation Priority
  Rank the 10 highest-impact links to add first, with a one-line rationale for each.
variables:
  - "{{primary_topic}}"
  - "{{target_audience}}"
  - "{{content_inventory}}"
  - "{{priority_pages}}"
  - "{{high_authority_pages}}"
exampleInput: |
  primary_topic: business intelligence and analytics for operations teams
  target_audience: operations directors at mid-market companies
  content_inventory: |
    1. Blog: "Sales Pipeline Management Guide" | /blog/sales-pipeline-management | sales pipeline management
    2. Blog: "What Is a KPI Dashboard?" | /blog/kpi-dashboard | KPI dashboard
    3. Blog: "15 Operations Metrics to Track" | /blog/operations-metrics | operations metrics
    4. Blog: "Operations KPI Dashboard Guide" | /blog/operations-kpi-dashboard | operations KPI dashboard
    5. Blog: "How to Build a Weekly Ops Review" | /blog/weekly-ops-review | weekly ops review
    6. Feature page: Signal Anomaly Detection | /signal | operations anomaly detection
    7. Product page: Anchor Analytics | /product | business intelligence for operations
    8. Pricing page: Plans | /pricing | business intelligence pricing
    9. Blog: "BI Tools for Small Business Comparison" | /blog/bi-tools-comparison | best BI tools small business
    10. Blog: "Business Intelligence Without a Data Team" | /blog/bi-without-data-team | BI without data team
  priority_pages: /product, /pricing, /signal
  high_authority_pages: /blog/bi-tools-comparison (high search volume), /blog/operations-metrics (linked from 3 external sites)
exampleOutput: |
  ## 1. Topic Cluster Map

  **Cluster 1: Operations Metrics & Dashboards (pillar: /blog/operations-kpi-dashboard)**
  Supporting: /blog/operations-metrics, /blog/kpi-dashboard, /blog/weekly-ops-review
  Links to commercial: all 3 supporting pages should link to /signal and /product

  **Cluster 2: BI Tools & No-Code Analytics (pillar: /blog/bi-without-data-team)**
  Supporting: /blog/bi-tools-comparison
  Links to commercial: both should link to /pricing and /product with comparison-intent anchor text

  **Cluster 3: Sales & Pipeline Operations (standalone: /blog/sales-pipeline-management)**
  Note: this page doesn't fit cleanly into either cluster. Assess whether it supports your ops-team ICP or serves a different audience. If the latter, consider whether it belongs in this content strategy.

  ## 2. Priority Links to Add

  | Source Page | Target Page | Anchor Text | Rationale | Placement |
  |---|---|---|---|---|
  | /blog/bi-tools-comparison | /product | "Anchor Analytics" | High-authority page → key commercial page | In comparison table + conclusion |
  | /blog/operations-metrics | /signal | "real-time anomaly detection" | Topical match — ops metrics → anomaly alerts | End of section on monitoring metrics |
  | /blog/bi-tools-comparison | /pricing | "view pricing" | Commercial intent page → pricing; user is evaluating | After comparison table |
  | /blog/operations-kpi-dashboard | /signal | "automatically monitor your KPIs" | Pillar → product feature; strong topical fit | In "how to build" section |
  | /blog/bi-without-data-team | /product | "see how it works" | Pillar → product; perfect user journey match | Conclusion CTA |

  [5 more priority links follow...]

  ## 3. Orphaned Pages
  - /blog/sales-pipeline-management — 0 inbound internal links. Link from: /blog/operations-metrics (anchor: "pipeline performance metrics"), /blog/weekly-ops-review (anchor: "sales pipeline review")
  - /blog/weekly-ops-review — 1 inbound link. Add from: /blog/operations-kpi-dashboard (anchor: "run your weekly ops review")

  ## 5. Top 10 Implementation Priority
  1. /blog/bi-tools-comparison → /product (highest authority page to highest commercial page)
  2. /blog/operations-metrics → /signal (external links to this page; can funnel to Signal)
  3. /blog/bi-tools-comparison → /pricing (comparison intent → pricing is the natural next step)
  [7 more ranked links...]
tips:
  - "Audit your current internal links first using a free tool like Screaming Frog or Ahrefs — your current state might be different from your inventory assumptions."
  - "Anchor text diversity matters for large sites but is less critical for smaller sites. Focus on natural, descriptive anchor text over keyword-optimized anchor text."
  - "Add internal links in batches and measure the impact after 4–6 weeks. Start with the highest-priority 10 before implementing the full plan."
  - "The orphaned page analysis is often the fastest win — pages with no inbound internal links are essentially invisible to Google's internal crawl priority."
  - "When adding links in existing posts, don't add them in the first paragraph unless it's a very natural fit. Google can interpret first-paragraph links as ad-like or manipulative."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - content-brief
  - blog-post-outline
  - meta-description
  - faq-content
tags:
  - seo
  - internal-linking
  - content-audit
  - topical-authority
---
