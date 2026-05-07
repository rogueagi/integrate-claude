---
title: "Build a quarterly business review deck outline"
slug: qbr-deck-outline
function: sales
role: customer-success
description: "Generate a structured QBR deck outline with talking points that demonstrates value, addresses risks, and sets up the next quarter."
useCase: "Use this prompt to build the outline and talking points for a quarterly business review with a key customer. A great QBR focuses on business outcomes achieved, not product features — this prompt ensures you walk in as a strategic partner, not a vendor."
prompt: |
  You are a senior customer success manager preparing for a quarterly business review. Build a QBR deck outline with talking points.

  Customer context:
  - Customer company: {{customer_company}}
  - Primary stakeholders attending: {{stakeholders}}
  - Contract value and tier: {{contract_details}}
  - Product/service they use: {{product_used}}
  - The business goals they stated at the start of the relationship: {{original_goals}}
  - Key metrics / results from this quarter: {{quarter_metrics}}
  - Challenges or issues this quarter: {{quarter_challenges}}
  - Upcoming renewal date: {{renewal_date}}
  - Expansion opportunities identified: {{expansion_opportunities}}
  - Next quarter priorities they've mentioned: {{next_quarter_goals}}

  Build a QBR deck outline with these slides and talking points:

  **Slide 1: Agenda**
  List the meeting agenda (bullet list). Keep it outcome-focused — no "product updates" section unless there's something genuinely strategic to share.

  **Slide 2: Your Goals, Our Commitment**
  Restate the goals they came in with. This shows you listened and have been working toward their outcomes, not just managing the account.

  **Slide 3: This Quarter's Results**
  Present the key metrics with context — not just numbers, but what they mean for the customer's business. Frame improvements as progress toward their stated goals.

  **Slide 4: What Went Well**
  2–3 wins from the quarter — specific and attributable. Include what your team did, what their team did, and the result.

  **Slide 5: What We're Working On Together**
  Address challenges honestly. For each issue: what happened, what was done, current status. Do not hide problems — owning them builds trust.

  **Slide 6: Looking Ahead — Your Priorities Next Quarter**
  Their agenda, not yours. What are they focused on next quarter? How will your partnership support that?

  **Slide 7: Recommended Next Steps**
  2–4 specific recommendations for deepening the value they get — this is where expansion conversations naturally belong.

  **Slide 8: Q&A and Open Discussion**
  Suggested questions to ask the stakeholder group to drive strategic conversation.

  For each slide: write the talking points as full sentences the CSM can reference. Tone: peer-level, business-focused, honest.
variables:
  - "{{customer_company}}"
  - "{{stakeholders}}"
  - "{{contract_details}}"
  - "{{product_used}}"
  - "{{original_goals}}"
  - "{{quarter_metrics}}"
  - "{{quarter_challenges}}"
  - "{{renewal_date}}"
  - "{{expansion_opportunities}}"
  - "{{next_quarter_goals}}"
exampleInput: |
  customer_company: Harlow Retail Group
  stakeholders: VP of Ecommerce (sponsor), Director of Digital Marketing, IT Manager
  contract_details: $95K/year, mid-tier plan, renewing in 5 months
  product_used: personalization and A/B testing platform
  original_goals: increase conversion rate by 15%, reduce time to launch new experiments from 3 weeks to 3 days
  quarter_metrics: conversion rate up 11% (goal: 15%), experiment launch time reduced from 3 weeks to 4 days (goal: 3 days), 23 experiments run this quarter vs. 6 same quarter last year
  quarter_challenges: two scheduled experiments had to be delayed due to a platform outage on Feb 12; customer expressed frustration; resolved within 4 hours but affected a campaign launch
  renewal_date: August 1
  expansion_opportunities: their new mobile app launches in Q3 — they don't currently use mobile personalization features; could add $30K in ARR
  next_quarter_goals: they want to personalize the checkout experience; mentioned wanting to test pricing display variations
exampleOutput: |
  **Slide 1: Agenda**
  - Results from Q1: what we achieved together (15 min)
  - Honest look at this quarter: wins and what we're improving (10 min)
  - Your priorities for Q2 and how we support them (15 min)
  - Recommendations and next steps (10 min)
  - Open discussion (10 min)

  **Slide 2: Your Goals, Our Commitment**
  Talking points: "At the start of our partnership, you told us two things mattered most: getting to 15% conversion lift and getting new experiments out faster. Everything we've done this quarter has been organized around those two goals — and I want to show you where we are against both of them."

  **Slide 3: This Quarter's Results**
  Talking points: "On conversion: you're at +11% — ahead of where you started, and tracking toward your 15% goal. We'd expect to reach that threshold in Q2 as the high-traffic personalization rules mature. On experiment velocity: you launched 23 experiments this quarter versus 6 this time last year. Launch time is down to 4 days — one day from your goal. That speed is letting you test faster and learn faster, which compounds over time."

  **Slide 4: What Went Well**
  1. "The checkout abandonment experiment in February — your team identified the hypothesis, our team built it in 2 days, and it's now running as a permanent rule. That's the collaboration we want to replicate."
  2. "Your digital marketing team has gone from needing IT support to running experiments independently. That capability transfer was intentional and it's real."
  3. "23 experiments in a quarter is 4x your pace from a year ago. That's not a coincidence — it's a direct result of the work your team has put in."

  **Slide 5: What We're Working On Together**
  Talking points: "I want to address the February 12 outage directly. We had a 4-hour platform issue that delayed your Valentine's Day campaign launch. That's not acceptable, and I'm not going to minimize it. Here's what happened [brief explanation], here's what we've done to prevent recurrence [specific fix], and here's the status today. If you have questions about this, I want to answer them here."

  **Slide 6: Looking Ahead**
  Talking points: "You've told me two things are on your radar for Q2: personalizing the checkout experience, and testing pricing display. Both of these are exactly where your current plan has the most room to grow. Let me walk you through what success looks like for each, and how we'd structure the experimentation approach."

  **Slide 7: Recommended Next Steps**
  1. "Launch checkout personalization experiments by mid-April — we'll scope this together before end of month."
  2. "Explore mobile personalization ahead of your Q3 app launch — there's a meaningful opportunity to bring the same testing velocity to mobile that you've built on web."
  3. "Schedule a mid-quarter check-in in May so we're not waiting until the next QBR to course-correct."

  **Slide 8: Discussion Questions**
  - "Are we measuring the right things? Are there outcomes you care about that we're not tracking?"
  - "What's the internal conversation been like about the platform investment — are stakeholders seeing the value?"
  - "What's one thing we could do differently that would make you more confident in the partnership?"
tips:
  - "Send the deck (or at least the agenda and results slides) 24 hours in advance. Executives who've seen the results feel better prepared and meetings go deeper."
  - "The 'What We're Working On Together' slide is where most CSMs fail by omission. Hiding the February outage in this case would destroy trust the moment the VP mentions it. Own it first."
  - "The discussion questions on Slide 8 are gold. 'What's one thing we could do differently' is the question that surfaces churn risk before it becomes a cancellation."
  - "Don't show product updates unless they directly answer a question the customer has raised. A new feature they don't care about wastes QBR time."
  - "After the QBR, run the expansion-opportunity-email prompt to follow up on the mobile personalization conversation while it's fresh."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - churn-risk-email
  - expansion-opportunity-email
  - success-plan-template
tags:
  - qbr
  - customer-success
  - renewal
  - executive-presentation
---
