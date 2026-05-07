---
title: "Write an onboarding welcome email for a new SaaS customer"
slug: welcome-email
function: marketing
role: lifecycle
description: "Generate a warm, action-oriented welcome email that sets new SaaS customers up for early success and reduces first-week churn."
useCase: "Use this prompt to write the first email a new customer receives after signup. The welcome email is the highest-opened email in any lifecycle sequence — this prompt ensures it delivers immediate value and a clear first action rather than wasting that attention on logistics."
prompt: |
  You are a lifecycle marketing specialist who knows that the welcome email is the most important email you'll ever send a customer. Write an onboarding welcome email.

  Product details:
  - Product name: {{product_name}}
  - What the product does: {{product_description}}
  - Target customer: {{target_customer}}
  - The #1 action that predicts long-term retention (the "activation event"): {{activation_event}} (e.g., connecting their first data source, completing their first report, inviting a teammate)
  - Time it takes to complete the activation event: {{activation_time}}
  - One piece of value the customer can get immediately (within 10 minutes of signup): {{quick_win}}
  - Support channel: {{support_channel}}
  - Sender name (who this comes from): {{sender_name}}

  Write a welcome email that:
  - Opens with a brief, genuine welcome — 1–2 sentences max. Not "Welcome to [product]! We're so excited to have you on board." — that's performative, not human.
  - Immediately focuses on the customer's goal, not the product's features
  - Gives one clear, specific first action (the activation event or the path to it)
  - Names the time commitment: "This takes about [X] minutes"
  - Includes a secondary "if you get stuck" option — a resource or support link
  - Is under 200 words total
  - Ends with the sender's name (not "The [Product] Team")

  Subject line: Write 2 options — one functional, one warm/personal.

  Tone: conversational and human. This email should feel like it came from a person who wants you to succeed, not an automated drip sequence.
variables:
  - "{{product_name}}"
  - "{{product_description}}"
  - "{{target_customer}}"
  - "{{activation_event}}"
  - "{{activation_time}}"
  - "{{quick_win}}"
  - "{{support_channel}}"
  - "{{sender_name}}"
exampleInput: |
  product_name: Anchor Analytics
  product_description: business intelligence platform for ops teams
  target_customer: operations directors at mid-market companies
  activation_event: connecting their first data source (CRM, ERP, or spreadsheet)
  activation_time: 5 minutes
  quick_win: a pre-built operations dashboard that populates the moment they connect a data source
  support_channel: live chat in the bottom-right of the app, or email support@anchoranalytics.io
  sender_name: Elena (CEO, Anchor Analytics)
exampleOutput: |
  Subject options:
  1. "Your first dashboard is 5 minutes away" (functional)
  2. "The goal you signed up for — let's start there" (warm/personal) ← Recommended

  ---

  Hi [First Name],

  You're in. Let's get you something useful in the next 5 minutes.

  The fastest way to see Anchor working for your team: connect your first data source. It takes about 5 minutes, and the moment you do, you'll see a pre-built operations dashboard populate with your actual data — not sample data, not a demo environment. Yours.

  → Start here: Connect your first source [link]

  If you run into anything, hit the chat button in the bottom-right of the app. We're real people and we respond fast.

  One thing I'll say: most teams get their first useful insight within 20 minutes of connecting. That's what I want for you.

  Talk soon,
  Elena
  CEO, Anchor Analytics
tips:
  - "The activation event is the most important concept in onboarding. Identify it by looking at what your retained customers did in their first week that churned customers didn't."
  - "Never give 5 actions in a welcome email. One action, clearly stated, dramatically outperforms a list of 'Getting Started' items."
  - "Test sending this email from a founder or executive name vs. a generic sender. Personal sender names routinely improve open and click rates by 20–30%."
  - "Include the time estimate ('5 minutes') — it removes the perceived activation barrier. Customers delay first actions because they assume it'll take longer than it does."
  - "After the welcome email, plan a Day 3 check-in for anyone who didn't complete the activation event — that's your highest-risk new customer segment."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - reengagement-email
  - feature-announcement-email
  - success-plan-template
tags:
  - lifecycle
  - onboarding
  - email
  - saas
  - retention
---
