---
title: "Write a feature announcement email to existing customers"
slug: feature-announcement-email
function: marketing
role: lifecycle
description: "Generate a customer-centric feature announcement email that connects new capabilities to customer outcomes, not product specs."
useCase: "Use this prompt when announcing a new feature to your existing customer base. The most common mistake in feature announcement emails is leading with the feature — this prompt ensures you lead with the customer's problem and position the feature as the answer."
prompt: |
  You are a lifecycle marketer who knows that feature announcement emails are most effective when they speak to what the customer gets, not what the product can do. Write a feature announcement email.

  Feature details:
  - Product name: {{product_name}}
  - Feature name: {{feature_name}}
  - What the feature does (technical): {{feature_description}}
  - The customer problem it solves: {{customer_problem}}
  - Who it's most relevant to: {{primary_audience}}
  - Key outcome or benefit: {{key_benefit}}
  - One early result or customer proof point: {{proof_point}}
  - How to access or enable the feature: {{how_to_access}}
  - Link to learn more or watch a demo: {{more_info_link}}

  Write a feature announcement email that:
  - Subject line: benefit-focused, not feature-name-focused (avoid "[Feature Name] is now live!")
  - Opens with the customer's problem ({{customer_problem}}), not the feature
  - Transitions to the feature as the solution in 1–2 sentences
  - States the specific benefit in concrete terms
  - Includes one proof point or early result to build credibility
  - Gives a clear, simple next step with one link
  - Is under 200 words

  Produce 2 variants:
  - Variant A: Narrative/story-led — opens with a customer scenario
  - Variant B: Direct and concise — leads with the benefit in the first sentence

  Label which performs better for product-led SaaS audiences and why.
variables:
  - "{{product_name}}"
  - "{{feature_name}}"
  - "{{feature_description}}"
  - "{{customer_problem}}"
  - "{{primary_audience}}"
  - "{{key_benefit}}"
  - "{{proof_point}}"
  - "{{how_to_access}}"
  - "{{more_info_link}}"
exampleInput: |
  product_name: Anchor Analytics
  feature_name: Signal
  feature_description: AI-powered anomaly detection that monitors 50+ operational KPIs in real time and sends Slack/email alerts when metrics deviate beyond a configurable threshold
  customer_problem: ops teams find out about metric anomalies hours or days after they happen, usually through customer complaints
  primary_audience: operations directors and VPs using Anchor on Professional and Enterprise plans
  key_benefit: catch operational issues before customers do
  proof_point: beta customers cut their alert-to-action time from 48 hours to under 2 hours
  how_to_access: click "Enable Signal" from your Anchor dashboard — takes 2 minutes to configure
  more_info_link: https://anchoranalytics.io/signal
exampleOutput: |
  **Variant A: Narrative-led**
  Subject: "Know about problems before your customers do"

  Hi [First Name],

  Most operational issues don't announce themselves. They show up quietly in the data — and you find out about them when a customer complains or when you pull the Monday report.

  We built Signal to fix that.

  Signal monitors your operational KPIs in real time and alerts you — via Slack or email — the moment a metric deviates from what's normal. No SQL, no setup beyond 2 minutes of configuration. Beta customers cut their alert-to-action time from 48 hours to under 2.

  It's available on your plan today. Enable it here → [link]

  — Elena, Anchor Analytics

  ---

  **Variant B: Direct**
  Subject: "Signal: catch metric anomalies before customers notice"

  Hi [First Name],

  Signal is live — and it's on your plan.

  It monitors 50+ operational KPIs in real time and sends a Slack or email alert when something deviates from normal. Beta customers went from finding out about issues 48 hours later to under 2 hours.

  Two minutes to enable → [link]

  — Elena

  ---

  Recommended for product-led SaaS: **Variant B**. Product-led audiences already trust the product and often prefer direct, low-friction communication. Variant A works better for sales-led motion where trust is still being built. For an existing customer base on a professional plan, directness signals respect for their time.
tips:
  - "The subject line test: could this subject line appear in an email from a competitor? If yes, make it more specific to your product or your customer's situation."
  - "Never lead with the feature name in the subject line unless the feature has significant brand equity. 'Signal is now live!' is less compelling than 'Know about problems before your customers do.'"
  - "Segment this email: customers who've experienced the problem the feature solves should get Variant A; power users who want to try new things first should get Variant B."
  - "The proof point is your most credible sentence. If you don't have one yet, get 2–3 beta users to share a result before sending this to your full customer base."
  - "Follow up 7 days later with a short 'have you tried it?' email only for customers who didn't click. Keep it to 3 sentences."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - welcome-email
  - reengagement-email
  - product-launch-brief
tags:
  - lifecycle
  - feature-announcement
  - email
  - saas
  - product-marketing
---
