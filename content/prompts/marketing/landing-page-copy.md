---
title: "Write above-the-fold landing page copy"
slug: landing-page-copy
function: marketing
role: performance
description: "Generate high-converting above-the-fold landing page copy including H1, subheadline, benefit bullets, and primary CTA."
useCase: "Use this prompt to write or refresh the hero section of a landing page for a product, campaign, or lead generation page. The above-the-fold section determines whether a visitor scrolls or bounces — this prompt focuses all energy on that critical moment."
prompt: |
  You are a conversion copywriter specializing in B2B landing pages. Write the above-the-fold copy for the following landing page.

  Page details:
  - Product/service: {{product}}
  - Target audience: {{target_audience}}
  - Traffic source (where visitors are coming from): {{traffic_source}} (e.g., Google search for "sales pipeline software," LinkedIn ad for ops directors, retargeting campaign)
  - Visitor's intent when they land: {{visitor_intent}} (what they were looking for or thinking about when they clicked)
  - Core value proposition: {{value_prop}}
  - Primary CTA: {{primary_cta}} (button label + what happens when clicked)
  - Secondary CTA (if any): {{secondary_cta}}
  - Key benefit 1: {{benefit_1}}
  - Key benefit 2: {{benefit_2}}
  - Key benefit 3: {{benefit_3}}
  - Social proof elements available: {{social_proof}} (logos, numbers, quotes)

  Write 2 above-the-fold variants, each with:

  **H1 (headline):**
  - Under 10 words
  - States the primary value or outcome — not the feature
  - Should work even if the visitor reads nothing else

  **Subheadline (supporting copy):**
  - 1–2 sentences, 20–35 words
  - Explains who it's for and what it does with one more layer of specificity
  - Should address the next natural question after reading the H1

  **Benefit bullets (3 bullets):**
  - Each one sentence, starting with an action verb or specific outcome
  - No feature names — translate features into outcomes
  - Specific enough to be credible, not generic enough to be forgettable

  **Primary CTA button text:**
  - 3–5 words
  - Action verb + clear value (not just "Submit" or "Learn More")

  **Social proof line (below CTA):**
  - One line of trust-building copy using {{social_proof}}
  - Under 15 words

  After both variants: write a brief A/B test rationale explaining which hypothesis each tests.
variables:
  - "{{product}}"
  - "{{target_audience}}"
  - "{{traffic_source}}"
  - "{{visitor_intent}}"
  - "{{value_prop}}"
  - "{{primary_cta}}"
  - "{{secondary_cta}}"
  - "{{benefit_1}}"
  - "{{benefit_2}}"
  - "{{benefit_3}}"
  - "{{social_proof}}"
exampleInput: |
  product: Anchor Analytics
  target_audience: operations directors and VPs at mid-market companies
  traffic_source: Google search for "business intelligence for operations teams"
  visitor_intent: looking for a BI tool that doesn't require a data team to set up and maintain
  value_prop: operational clarity without needing a data engineer
  primary_cta: Book a demo — takes them to a Calendly booking page
  secondary_cta: See a 3-minute product tour — plays an inline video
  benefit_1: connect your existing tools in minutes, no code or SQL required
  benefit_2: monitor your key operational metrics in one place, with automatic anomaly alerts
  benefit_3: run your weekly ops review from live data, not a spreadsheet someone built last Tuesday
  social_proof: 400+ customers, rated 4.8/5 on G2, logos from Crestwood, Vantage, Harlow Retail
exampleOutput: |
  **Variant A: Outcome-led H1**

  H1: "See your operations clearly, finally."

  Subheadline: Anchor connects your tools and surfaces the metrics that drive your business — no data team, no SQL, no waiting.

  Benefits:
  - Connect your CRM, ERP, and ops tools in minutes — no engineering required
  - Monitor 50+ KPIs in real time, with automatic alerts when something goes sideways
  - Walk into every ops review with live data instead of a spreadsheet someone built last week

  CTA: "Book My Demo"
  Secondary CTA: "See it in 3 minutes →"
  Social proof: Trusted by 400+ operations teams. Rated 4.8/5 on G2.

  ---

  **Variant B: Audience-specific H1**

  H1: "The BI tool built for operators, not data scientists."

  Subheadline: Anchor gives operations leaders real-time visibility into what's working and what isn't — without depending on a data team to get it.

  Benefits:
  - Start seeing your operational KPIs in minutes, not months
  - Catch issues before they become customer problems with AI-powered anomaly detection
  - Replace your weekly spreadsheet review with a live dashboard your whole team can trust

  CTA: "See Anchor in Action"
  Secondary CTA: "Watch a 3-minute tour"
  Social proof: Crestwood, Vantage, Harlow Retail, and 400+ more. 4.8/5 on G2.

  ---

  A/B Test Rationale:
  Variant A tests whether "outcome language" (see your operations clearly) outperforms audience-identity language. Variant B tests whether naming who the product is NOT for (data scientists) resonates more with an audience who has felt burned by tools that required technical expertise. Both hypotheses are worth testing for this traffic source.
tips:
  - "Read the H1 in isolation — does it communicate value even if the visitor reads nothing else? If it requires the subheadline to make sense, rewrite it."
  - "Message match is critical: the language in the H1 should echo the language in the ad or search query that brought the visitor here. Disconnect here is the #1 cause of landing page bounce."
  - "The benefit bullets should be outcome-first, feature-second. 'Monitor 50+ KPIs' is a feature. 'Catch issues before they become customer problems' is an outcome. Lead with the outcome."
  - "Never use 'world-class,' 'industry-leading,' or 'powerful' in landing page copy. These words are invisible to readers because they appear on every competitor's page."
  - "After choosing a winning variant, run the losing H1 as a secondary test element (e.g., as the first body section header) to see if the angle has value below the fold."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - ad-copy-variants
  - tagline-variations
  - webinar-abstract
tags:
  - landing-page
  - conversion
  - copywriting
  - performance-marketing
---
