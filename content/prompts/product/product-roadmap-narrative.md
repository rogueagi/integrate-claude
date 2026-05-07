---
title: "Write a narrative product roadmap for the next 2 quarters"
slug: product-roadmap-narrative
function: product
role: product-management
description: "Generate a compelling narrative roadmap document that communicates product direction, prioritized themes, and sequencing rationale to internal and external audiences."
useCase: "Use this prompt when you need to communicate your roadmap beyond a spreadsheet or slide deck. A narrative roadmap tells the story of where you're going and why — it's more persuasive for customers, investors, and internal stakeholders than a list of features and dates."
prompt: |
  You are a strategic product leader experienced at communicating product vision through compelling narrative. Write a two-quarter product roadmap narrative for the product described below.

  **Product name:** {{product_name}}
  **Company/product context:** {{product_context}}
  **Target customers:** {{target_customers}}
  **Current product state:** {{current_state}}
  **Q1 planned initiatives/themes:** {{q1_initiatives}}
  **Q2 planned initiatives/themes:** {{q2_initiatives}}
  **Strategic north star:** {{strategic_north_star}}
  **What's explicitly not on the roadmap:** {{not_on_roadmap}}
  **Audience for this document:** {{audience}} (internal team / customers / investors / all)

  Write a roadmap narrative with these sections:

  ## 1. Where We Are Today (Current State)
  An honest, specific description of the product's current strengths and gaps. Don't oversell. This grounds the roadmap in reality and makes the direction feel earned rather than aspirational.
  - What the product does well today
  - The most significant gaps relative to customer needs
  - The strategic starting point for the next 6 months

  ## 2. Where We're Going (Vision for the Next 6 Months)
  A 2–3 paragraph narrative describing the product experience customers will have at the end of this roadmap period. Write this in the present tense as if you're describing the future state:
  - What will customers be able to do that they can't do today?
  - How will the product feel different?
  - What problem will be fully solved?

  ## 3. Q1: [Quarter Label — give it a thematic name]
  **Theme:** [A 3–5 word theme that captures Q1's focus]

  Opening paragraph: Why this is the right focus for Q1. Connect to a specific customer problem or strategic imperative.

  Then for each major initiative:
  **Initiative name**
  - The problem it solves (customer-centric language)
  - What we're building / changing
  - Why now? (Why this quarter, not later?)
  - The outcome we expect (measurable if possible)

  Close the Q1 section with: how these initiatives connect to each other and to the overall theme.

  ## 4. Q2: [Quarter Label — give it a thematic name]
  Same structure as Q1. Show how Q2 builds on Q1 — the sequencing rationale should be evident.

  ## 5. What We're Not Building (And Why)
  The most honest and underrated section. List 3–5 significant things that are intentionally off the roadmap, with a brief explanation of why. This builds trust: stakeholders know you've considered and decided, not ignored.

  ## 6. How We'll Measure Success
  The metrics that will tell us whether this roadmap delivered its intended value. For each quarter:
  - 2–3 leading indicators (early signal of progress)
  - 2–3 lagging indicators (outcome measures at end of quarter)

  ## 7. Dependencies and Risks
  What could prevent this roadmap from being executed? 3–5 key risks with brief mitigation notes.

  ## Tone guidance:
  - Write in clear, direct language — avoid product jargon
  - Customer outcomes first, features second
  - Be specific: "reduce onboarding time from 45 minutes to under 10" beats "improve onboarding"
  - Acknowledge trade-offs rather than pretending everything is easy
  - If writing for customers: omit timelines, use "later this year" and "coming soon"
  - If writing for internal: include specific dates and owners
variables:
  - "{{product_name}}"
  - "{{product_context}}"
  - "{{target_customers}}"
  - "{{current_state}}"
  - "{{q1_initiatives}}"
  - "{{q2_initiatives}}"
  - "{{strategic_north_star}}"
  - "{{not_on_roadmap}}"
  - "{{audience}}"
exampleInput: |
  product_name: Beacon — employee engagement platform
  product_context: Beacon is a 4-year-old B2B SaaS product for HR teams at 200–2000 person companies. $12M ARR. Recently lost two large accounts to Culture Amp citing better analytics.
  target_customers: HR Directors and CHROs at mid-market companies who want to understand and improve employee engagement without a full People Analytics team
  current_state: Strong on pulse surveys and recognition features. Weak on analytics (limited reporting, no benchmarking, no AI insights). Mobile app exists but is rarely used. Onboarding takes 6+ weeks.
  q1_initiatives: Analytics overhaul (new dashboard, industry benchmarks, trend analysis). Onboarding redesign (target: first value in <2 weeks). Fix top 10 support issues.
  q2_initiatives: AI-powered insights ("here's what your data is telling you and what to do about it"). Manager dashboard (team-level engagement scores for people managers, not just HR). Mobile push for action items.
  strategic_north_star: Become the platform that turns employee feedback into visible action — so every employee can see that their feedback mattered.
  not_on_roadmap: Enterprise SSO (deprioritized vs. analytics), salary benchmarking, performance management module
  audience: Internal team and investor update
exampleOutput: |
  # Beacon Product Roadmap: H1 2025

  ## 1. Where We Are Today
  Beacon is genuinely good at two things: making it easy to run pulse surveys that employees actually complete (our average response rate is 74%, vs. a 40% industry benchmark), and driving peer recognition that sticks. These are real differentiators.

  Where we fall short is what happens after the data comes in. Our analytics are limited — HR teams can see scores, but they can't easily see trends, can't benchmark against their industry, and get no guidance on what to do with what they're seeing. This gap cost us two significant accounts in Q4 and is showing up in sales conversations as a consistent objection. The product collects signal but doesn't help HR teams turn that signal into action.

  We're also too slow to value. A 6-week onboarding process is not competitive when buyers have more options than ever.

  ## 2. Where We're Going
  By the end of Q2, an HR Director at a 500-person financial services company opens Beacon on Monday morning and sees — in plain English — what changed in employee sentiment last week, why it likely changed, and what three actions are most likely to move the needle. She shares that summary with her CHRO in one click. Her managers each see a team-level view showing where their people are struggling, with suggested conversation starters. She doesn't need to build a report. She doesn't need to export to Excel. The insight is waiting for her.

  The product will feel less like a survey tool and more like a thinking partner for the people who care most about their employees' experience.

  ## 3. Q1 2025: Fix the Foundation
  **Theme: Make the data worth having**

  Before we can build AI insights, the data experience has to be good. Q1 is about fixing the fundamentals that make Beacon hard to trust and slow to adopt.

  **Analytics Overhaul**
  HR teams today can't answer basic questions like "Is our engagement improving compared to last quarter?" or "How do we compare to other companies in our industry?" without exporting data and building their own analysis in Excel. This is unacceptable for a product that's supposed to help people understand their workforce.
  We're rebuilding the analytics dashboard from the ground up — adding trend visualizations, rolling averages, industry benchmarks (sourced from our 800-company dataset), and demographic cut views. Why now: this is the #1 reason we're losing deals and the #1 request from existing customers.
  Expected outcome: 30% increase in weekly analytics engagement; analytics objection removed from 80% of sales calls.

  **Onboarding Redesign**
  Six weeks to first value is a retention risk. New customers who don't see value in the first 30 days churn at 3x the rate of those who do. We're redesigning onboarding around a single milestone: first survey complete with results visible in under 14 days. This means a guided setup wizard, pre-built survey templates, and a simplified initial configuration.
  Expected outcome: Time-to-first-value from 42 days to under 14 days; 90-day churn rate reduction.

  ## 4. Q2 2025: Make the Data Work for You
  **Theme: Insight without effort**

  With a trustworthy data foundation from Q1, Q2 brings the intelligence layer that turns Beacon from a reporting tool into an advisor.

  **AI-Powered Insights**
  The Monday morning summary experience described above. Beacon will analyze survey results, identify statistically significant changes, cross-reference with prior periods and benchmarks, and surface 3–5 prioritized insights in plain English — with recommended actions linked to specific survey responses.
  Why now: Q1 analytics work makes this possible. AI capabilities are now mature enough to do this reliably.

  **Manager Dashboard**
  HR can't fix every team's engagement — they need managers to act. We're giving people managers a team-level view of their engagement scores, response rates, and top themes — visible only to them and their HR partner. This turns Beacon from an HR tool into a management tool.

  ## 5. What We're Not Building (And Why)
  - **Enterprise SSO:** 3 prospects are asking for it; it's not blocking any renewals and would take 6 weeks to build. We're deprioritizing in favor of analytics which affects all 800 customers.
  - **Salary benchmarking:** Real demand, but outside our core competency and would require a new data partnership. This is a Q4 2025 evaluation at earliest.
  - **Performance management:** Would require a full year of investment and would take us into a crowded, mature market (Lattice, Workday). We're doubling down on engagement, not expanding scope.

  ## 6. How We'll Measure Success

  **Q1 Metrics**
  - Leading: Analytics dashboard weekly active users (target: +40%); onboarding milestone completion rate (target: 85%)
  - Lagging: Time-to-first-value (target: <14 days); analytics-related churn saves (target: 2 accounts)

  **Q2 Metrics**
  - Leading: AI insights opened per week; manager dashboard activation rate (target: 60% of eligible managers)
  - Lagging: NPS improvement (target: +8 points); expansion ARR from analytics upsell
tips:
  - "Name your quarters thematically, not just 'Q1.' 'Fix the Foundation' communicates intent in a way '2025 Q1' never will."
  - "The 'What We're Not Building' section is the most trust-building section in any roadmap document. Customers and investors know you're making trade-offs — acknowledging them openly is more credible than pretending you'll do everything."
  - "Write outcomes, not features. 'HR teams can benchmark against 800 companies' is more compelling than 'new benchmarking dashboard.'"
  - "If writing for customers, remove all dates and use 'this quarter' and 'later this year.' Roadmaps shared externally that miss dates damage trust more than no dates at all."
complexity: intermediate
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - feature-prioritization
  - product-hypothesis
  - go-to-market-brief
  - stakeholder-alignment-doc
  - annual-priorities-memo
tags:
  - roadmap
  - product-strategy
  - product-management
  - communication
  - planning
---
