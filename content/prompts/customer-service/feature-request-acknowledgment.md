---
title: "Acknowledge a feature request professionally"
slug: feature-request-acknowledgment
function: customer-service
role: support
description: "Generate a genuine, honest response to a customer feature request that acknowledges their need, sets realistic expectations, and keeps them engaged."
useCase: "Use this prompt when a customer submits a feature request. The worst responses either over-promise ('we'll add that soon!') or dismiss ('we'll pass it along to the team'). This prompt generates a response that's honest, appreciates the customer's perspective, and gives them a realistic picture."
prompt: |
  You are a customer support specialist responding to a feature request. Write a professional, honest acknowledgment.

  Context:
  - Customer name: {{customer_name}}
  - Product/service: {{product_name}}
  - Feature requested: {{feature_request}}
  - The business problem this feature would solve (as the customer described it): {{customer_problem}}
  - Current status of this request internally: {{internal_status}} (e.g., on the roadmap, under consideration, not planned, already being built, duplicate of existing request)
  - What the customer can do in the meantime (workaround, if any): {{workaround}}
  - Whether customers can vote for or track feature requests: {{feature_voting}} (e.g., "yes — link to our public roadmap" or "no")

  Write a response that:
  - Genuinely acknowledges the request and the problem behind it — not just "Thanks for the feedback!"
  - Is honest about the current status without over-promising or being dismissive
  - Offers a workaround if one exists — or acknowledges there isn't one
  - Tells them what happens next with their request (how it gets considered, if there's a voting/tracking mechanism)
  - Is under 150 words
  - Does NOT say "I'll pass this along to the team" (this phrase is universally perceived as dismissive)
  - Does NOT promise a timeline unless one is confirmed

  If the feature is not planned: be honest without sounding like you don't care. "This isn't on our current roadmap" is better than vague non-answers.
variables:
  - "{{customer_name}}"
  - "{{product_name}}"
  - "{{feature_request}}"
  - "{{customer_problem}}"
  - "{{internal_status}}"
  - "{{workaround}}"
  - "{{feature_voting}}"
exampleInput: |
  customer_name: Priya
  product_name: Anchor Analytics
  feature_request: ability to schedule dashboard exports to be emailed automatically on a recurring schedule
  customer_problem: she currently has to manually export and email dashboards every Monday morning for her leadership team review — wants this automated
  internal_status: on the roadmap for Q3, not yet confirmed for release
  workaround: she can use the API to automate exports with a script, or bookmark the live dashboard link to share instead
  feature_voting: yes — public roadmap at anchor.io/roadmap
exampleOutput: |
  Priya,

  Manually exporting and emailing dashboards every Monday is exactly the kind of thing that should be automated — I completely understand the ask.

  Scheduled email exports is something we're actively working on. I don't have a confirmed release date I can commit to yet, but it's on our roadmap for later this year.

  In the meantime, two options: you can share a live dashboard link that your leadership team can bookmark (no export needed), or if your team has engineering resources, our API supports automated exports with a script.

  You can also track and upvote scheduled exports on our public roadmap at anchor.io/roadmap — that visibility helps us prioritize.

  I'll flag your request internally as another customer data point for this feature.

  — [Name]
tips:
  - "The phrase 'I don't have a confirmed release date I can commit to' is more honest than 'coming soon' and less damaging than setting a specific expectation you can't meet."
  - "If the feature is genuinely not planned, say so: 'This isn't on our current roadmap, and I don't want to mislead you about that.' Honesty is remembered; vague promises are resented when they don't materialize."
  - "Always name the underlying problem the customer is trying to solve. This proves you understood the request and also seeds your product team's thinking ('customers want to automate their Monday morning reporting')."
  - "Public roadmaps with voting are underused as churn-reduction tools. Customers who can see their request gaining votes stay engaged and feel heard even when there's a long wait."
  - "Log every feature request to your product team with the customer's exact words. Aggregated customer language is the best product insight you have."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - ticket-response-draft
  - macro-response-set
  - knowledge-base-article
tags:
  - feature-request
  - support
  - product-feedback
  - customer-service
---
