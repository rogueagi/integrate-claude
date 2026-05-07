---
title: "Write an expansion opportunity email to an existing customer"
slug: expansion-opportunity-email
function: sales
role: customer-success
description: "Generate a value-led email to an existing customer that opens an upsell or expansion conversation based on observed usage or a business trigger."
useCase: "Use this prompt when you've identified a genuine expansion opportunity with an existing customer — whether from usage signals, a new initiative they've mentioned, or a change in their business. Expansion emails that lead with customer value get 3x the response rate of product-led pitches."
prompt: |
  You are a senior customer success manager writing to an existing customer about an expansion opportunity. The email must feel like it's serving their interests, not selling them something.

  Customer context:
  - Customer company: {{customer_company}}
  - Contact name and title: {{contact_name}}, {{contact_title}}
  - Current product usage/tier: {{current_usage}}
  - What they're achieving with the current setup: {{current_results}}
  - The expansion opportunity: {{expansion_opportunity}} (e.g., additional seats, a new module, a higher tier, a new use case)
  - Why this expansion is relevant NOW: {{timing_reason}} (e.g., they're hiring, they've hit a usage limit, they mentioned a new initiative, their results justify the next step)
  - What the expansion would enable for them: {{expansion_outcome}}

  Write an email that:
  - Opens by referencing a specific result they've achieved (from {{current_results}}) — this validates the relationship before the ask
  - Connects the expansion to something they want to achieve or something that's changing in their business ({{timing_reason}})
  - Presents the expansion as a logical next step in THEIR story, not as a product upsell
  - Is direct about what you're suggesting, but frames it as a question, not a pitch
  - Is under 150 words
  - Invites a conversation, not a purchase decision

  Also write: a subject line and a brief internal note on why this expansion is well-timed.
variables:
  - "{{customer_company}}"
  - "{{contact_name}}"
  - "{{contact_title}}"
  - "{{current_usage}}"
  - "{{current_results}}"
  - "{{expansion_opportunity}}"
  - "{{timing_reason}}"
  - "{{expansion_outcome}}"
exampleInput: |
  customer_company: Harlow Retail Group
  contact_name: Josephine
  contact_title: VP of Ecommerce
  current_usage: web personalization plan — desktop and tablet only
  current_results: conversion rate up 11% in Q1 from personalization experiments on web
  expansion_opportunity: mobile personalization module
  timing_reason: Harlow's new mobile app launches in Q3; they're currently not running any personalization on mobile
  expansion_outcome: bring the same experiment velocity and conversion lift they've seen on web to their new mobile app from day one
exampleOutput: |
  Subject: Your Q3 mobile launch — a thought

  Josephine,

  The 11% conversion lift from Q1 is exactly what we were hoping for together. Nice work by your team on the checkout experiments.

  With the mobile app launching in Q3, I've been thinking about whether you'd want to replicate that same experimentation speed on mobile from day one — rather than starting from scratch after launch.

  We have a mobile personalization module that plugs into your existing setup. I'd love to show you what that looks like specifically for an app launch scenario.

  Worth a 20-minute look?

  — [Name]

  Internal note: The timing is ideal — the mobile launch is a forcing function that makes this a strategic conversation rather than a product pitch. Waiting until after the app launches means they'll need months to set up mobile testing, missing their best opportunity to optimize early.
tips:
  - "Never lead with the product name or the price. Lead with what they've already achieved and what comes next in their story."
  - "The 'timing_reason' field is the most important input. If you can't articulate a genuine reason why now is the right time, this email will read as a sales push — because that's what it is."
  - "The best expansion emails feel inevitable in retrospect. After you send it, read it again and ask: 'Would this make sense to the customer even if we didn't make money from it?'"
  - "Keep the CTA low-friction: 'Worth a 20-minute look?' is easier to say yes to than 'Would you like to schedule a call to discuss pricing?'"
  - "If the expansion conversation leads to a real business case, escalate to a formal proposal. This email is for opening the door, not closing the deal."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - churn-risk-email
  - qbr-deck-outline
  - success-plan-template
tags:
  - expansion
  - upsell
  - customer-success
  - email
  - revenue
---
