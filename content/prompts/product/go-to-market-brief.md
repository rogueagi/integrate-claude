---
title: "Write a GTM brief for a new feature or product launch"
slug: go-to-market-brief
function: product
role: product-management
description: "Generate a comprehensive go-to-market brief for a feature or product launch that aligns product, marketing, sales, and customer success on positioning, messaging, and launch execution."
useCase: "Use this prompt 4–6 weeks before a significant product launch. The GTM brief is the single source of truth that every team consults — it replaces the scattered Slack conversations, misaligned email threads, and last-minute scrambles that derail launches."
prompt: |
  You are a product marketing and launch strategy expert. Write a comprehensive go-to-market brief for the feature or product launch described below.

  **Feature/product name:** {{feature_name}}
  **Launch type:** {{launch_type}} (major product launch / feature release / beta launch / general availability)
  **Target launch date:** {{launch_date}}
  **What is being launched:** {{launch_description}}
  **Target customer segments:** {{target_segments}}
  **Primary use case:** {{primary_use_case}}
  **Core differentiators:** {{differentiators}}
  **Pricing changes (if any):** {{pricing}}
  **Teams involved:** {{teams_involved}}
  **Key constraints:** {{constraints}}

  Write a GTM brief with these sections:

  ## 1. Launch Overview
  - Product/feature name, launch date, launch type
  - One-sentence elevator pitch (the "what and why" in plain English)
  - Launch DRI (directly responsible individual)
  - Quick-reference: what each team is responsible for

  ## 2. What We're Launching
  **Product description (internal):** A precise technical/functional description of what's being built.
  **Product description (external):** How we'll describe it to customers — written in customer language, focusing on the problem it solves.
  **Key capabilities:** Bullet list of the 3–5 most important capabilities.

  ## 3. Target Audience
  For each target segment:
  - Segment description
  - Size (number of customers, % of base, or prospect pool)
  - Primary pain point this solves for them
  - How they will find out about this (discovery path)
  - Current behavior (what do they do today without this feature?)

  ## 4. Positioning and Messaging
  **Core positioning statement:**
  For [target customer], [product name] is the [category] that [key benefit] — unlike [alternative], which [key differentiator].

  **Key messages by audience:**
  Create 2–3 messages for each: existing customers, new prospects, and any secondary audiences.

  **Objection handling:**
  The top 3 objections we expect and how to address each.

  **Proof points:**
  Data, quotes, case studies, or beta results that support our claims.

  ## 5. Pricing and Packaging
  - Pricing for this feature/product
  - Tier availability (which pricing tiers include this?)
  - Upgrade path for existing customers
  - Any introductory pricing or limited-time offers

  ## 6. Launch Execution Plan
  Organized by team. For each team:
  - **Marketing:** Assets needed, campaign plan, timing
  - **Sales:** Enablement required, sales talk track, deal support
  - **Customer Success:** Communication to existing customers, training, FAQ
  - **Product/Engineering:** Beta / rollout plan, monitoring plan
  - **Support:** Documentation, training, escalation path for launch issues

  ## 7. Launch Checklist
  A phased checklist organized by: 4 weeks before / 2 weeks before / 1 week before / launch day / 1 week after.
  Each item should have an owner and a binary completion status.

  ## 8. Success Metrics
  How will we measure whether this launch was successful?
  - Launch metrics (measured in first 2 weeks): activation rate, trial starts, press coverage
  - Product metrics (measured at 30/60/90 days): adoption, retention, feature usage
  - Business metrics (measured at 90 days): revenue impact, churn impact, NPS change

  ## 9. Risks and Contingencies
  | Risk | Likelihood | Impact | Contingency |
  - Include: what if the launch needs to be delayed, what if there's a critical bug on launch day, what if adoption is much lower than expected

  ## 10. Communication Plan
  Who communicates what, to whom, and when — covering internal and external communications.
variables:
  - "{{feature_name}}"
  - "{{launch_type}}"
  - "{{launch_date}}"
  - "{{launch_description}}"
  - "{{target_segments}}"
  - "{{primary_use_case}}"
  - "{{differentiators}}"
  - "{{pricing}}"
  - "{{teams_involved}}"
  - "{{constraints}}"
exampleInput: |
  feature_name: Beacon AI Insights
  launch_type: Major feature release (General Availability)
  launch_date: March 15, 2025
  launch_description: AI-powered weekly summary that analyzes employee survey data and surfaces the top 3–5 engagement insights with plain-English explanations and recommended actions. Available in all paid tiers.
  target_segments: Existing HR Director customers (800 accounts); new prospects evaluating Beacon vs. Culture Amp
  primary_use_case: HR Director opens app Monday morning and immediately sees what changed in engagement last week and what to do about it — no manual analysis required
  differentiators: Actionable insights (not just scores), connected to specific survey verbatims, industry-specific recommendations, plain English (no analytics expertise required)
  pricing: No additional cost — included in all paid plans. Positioned as a value add for retention.
  teams_involved: Product, Marketing, Customer Success, Sales, Support
  constraints: Must not overpromise AI accuracy — legal reviewed messaging. No customer data used for model training. Launch must include clear AI disclaimer.
exampleOutput: |
  # GTM Brief: Beacon AI Insights
  **Launch Date:** March 15, 2025 | **Type:** General Availability | **DRI:** VP Product (Jamie Chen)

  ## 1. Launch Overview
  **Elevator pitch:** Beacon AI Insights reads your engagement data every week and tells you in plain English what's changed, why it might be happening, and what to do about it — no data expertise required.

  **Team responsibilities at a glance:**
  - Marketing: Campaign, blog post, customer email, press outreach
  - CS: Customer communications, training, in-app announcement
  - Sales: Talk track update, demo script, competitive positioning
  - Product: Rollout monitoring, feedback collection
  - Support: FAQ doc, escalation path for AI-related complaints

  ## 4. Positioning and Messaging

  **Core positioning:**
  For HR Directors at mid-market companies, Beacon AI Insights is the engagement intelligence tool that turns survey data into specific, actionable recommendations — unlike traditional analytics tools, which show you scores but leave you figuring out what to do next.

  **Messages for existing customers:**
  1. "You've been collecting great data. Now Beacon will tell you what it means."
  2. "Your Monday just got better. AI Insights is available in your account today — no setup required."
  3. "Share the AI summary with your leadership team in one click."

  **Messages for new prospects:**
  1. "Stop spending your Sunday exporting data and building pivot tables. Beacon AI does the analysis so you can focus on the people."
  2. "We don't just show you scores — we tell you what's driving them and what to do."

  **Top objections:**
  - "Is this just ChatGPT?" → No. Our model is trained on engagement-specific patterns and industry benchmarks from 800 companies. It understands the context of employee data.
  - "Is my employee data being used to train your AI?" → No. We use your data only to generate insights for your account. No data leaves your account for model training.
  - "How accurate is it?" → AI Insights surfaces correlations and patterns with confidence scoring. We always show the source data behind every insight so you can validate.

  ## 7. Launch Checklist (Sample)

  **4 Weeks Before (Feb 15)**
  - [ ] Marketing: Draft blog post + customer email — Marketing Lead
  - [ ] CS: Identify 10 beta customers for advance access + testimonials — CS Manager
  - [ ] Support: Draft AI Insights FAQ (20 questions minimum) — Support Lead
  - [ ] Legal: Final review of all AI messaging — Legal

  **Launch Day (March 15)**
  - [ ] Product: Feature flag enabled for all accounts at 9am ET — Engineering
  - [ ] Marketing: Blog post published + social posted — Marketing
  - [ ] CS: In-app announcement live — CS Ops
  - [ ] Support: War room active 9am–6pm ET — Support Lead

  ## 8. Success Metrics
  | Metric | Target | Measured |
  |--------|--------|----------|
  | % accounts that open AI Insights in week 1 | 40% | Week 1 |
  | AI Insights weekly active usage at 30 days | 35% of accounts | Day 30 |
  | NPS change among AI Insights users | +6 points | Day 90 |
  | Renewal rate for accounts using AI Insights | 5pp higher than non-users | Day 90 |
  | Competitive wins citing AI Insights | 10+ | Day 90 |
tips:
  - "The positioning statement (Section 4) is the hardest thing to write and the most important. Write it first, before anything else, and get it agreed on before writing the rest of the brief."
  - "The DRI (Directly Responsible Individual) for a launch should be one person, not a team. If everyone owns it, no one owns it."
  - "Share the brief in a launch kick-off meeting 4–6 weeks before launch — not 1 week before. Teams that get the brief late consistently miss deadlines."
  - "Build the legal and compliance review into the checklist 4 weeks out, not 2 days before launch. AI messaging especially requires careful review."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - product-roadmap-narrative
  - launch-checklist
  - post-launch-review
  - success-metrics-framework
  - stakeholder-alignment-doc
tags:
  - go-to-market
  - product-launch
  - product-management
  - marketing
  - product-strategy
---
