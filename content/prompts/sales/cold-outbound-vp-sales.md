---
title: "Write a cold outbound email to a VP of Sales"
slug: cold-outbound-vp-sales
function: sales
role: sdr
description: "Generate a revenue-focused cold email to a sales leader that speaks their language: quota, pipeline, and rep productivity."
useCase: "Use this prompt when cold-emailing VPs of Sales or CROs at target accounts. Sales leaders get a lot of vendor outreach — this prompt generates an email that cuts through by referencing a business outcome they care about, not a product feature."
prompt: |
  You are an expert B2B sales copywriter who understands how sales leaders think. Write a cold outreach email to a VP of Sales at a {{industry}} company called {{company_name}}.

  Context:
  - Company size: {{company_size}} employees (estimate ~{{rep_count}} AEs or reps)
  - Recent signal or trigger: {{trigger}}
  - Core problem to address: {{pain_point}}
  - Your product/service: {{your_product}}
  - Outcome your product delivers: {{outcome}} (e.g., "reduces ramp time by 30%", "adds 2 hours of selling time per rep per week")

  Write a cold email that:
  - Opens by referencing the trigger or a known pressure point for sales leaders at their stage/size
  - Leads with business outcome ({{outcome}}), NOT with product features
  - Uses sales leader language: quota attainment, pipeline coverage, rep productivity, ramp time, win rate — pick the most relevant 1–2 terms
  - Makes a specific, time-bounded CTA: offer a 15-minute call this week or a benchmark report relevant to their segment
  - Is under 100 words
  - Has a punchy subject line that a busy VP will actually open

  Do not:
  - Use corporate buzzwords (synergy, holistic, best-in-class)
  - List features or integrations
  - Ask if they're "the right person to speak with"
  - Open with your company name or what your product does

  Output: subject line, then email body, then a brief note on the hook strategy used.
variables:
  - "{{industry}}"
  - "{{company_name}}"
  - "{{company_size}}"
  - "{{rep_count}}"
  - "{{trigger}}"
  - "{{pain_point}}"
  - "{{your_product}}"
  - "{{outcome}}"
exampleInput: |
  industry: enterprise software
  company_name: Vantage Systems
  company_size: 400
  rep_count: 35
  trigger: VP of Sales role posted on LinkedIn — they're hiring
  pain_point: new reps taking 9+ months to ramp to full productivity
  your_product: AI-powered sales coaching and call intelligence platform
  outcome: cuts rep ramp time from 9 months to 5 months
exampleOutput: |
  Subject: 35 reps, 9-month ramp — math I've seen before

  Hi Marcus,

  Saw Vantage is scaling the sales team. At 35+ reps, the ramp math gets painful fast — every extra month costs you real quota.

  We help teams like yours cut ramp time by 40% using call intelligence and automated coaching. Five months instead of nine adds up quickly at your scale.

  15 minutes this week to show you the numbers from a few similar teams?

  — [Name]

  Hook note: The job posting is a real-time signal that they're investing in growth — framing the ramp cost problem before they've even hired the reps makes the outreach feel prescient, not pushy.
tips:
  - "VP of Sales respond better to outcomes than features. Always anchor your email on a number: time saved, quota attained, pipeline generated."
  - "The job posting trigger is one of the most powerful for sales leaders — it signals investment and scale pain simultaneously."
  - "If you don't know their rep count, ask Claude to estimate it based on company size and industry before writing the email."
  - "Follow up with a version that leads with a benchmark: 'Top-performing teams at your stage average X — most teams we talk to are at Y.' Sales leaders are competitive."
  - "Run 2 variants: one leading with the cost of the problem, one leading with the outcome. Test both."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cold-outbound-cto-email
  - follow-up-email-sequence
  - objection-handler-timing
tags:
  - outbound
  - email
  - cold-outreach
  - vp-sales
  - sales-leader
---
