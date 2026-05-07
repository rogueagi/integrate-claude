---
title: "Write a cold outbound email to an enterprise CTO"
slug: cold-outbound-cto-email
function: sales
role: sdr
description: "Generate a concise, insight-led cold email to a technical decision-maker that earns a reply."
useCase: "Use this prompt when reaching out cold to CTOs or VPs of Engineering at enterprise accounts. It produces a short, high-specificity email that references a relevant business problem — not a feature list. Works best when you have a specific account in mind and can fill in the context variables."
prompt: |
  You are an expert B2B sales copywriter specializing in technical executive outreach. Write a cold outreach email to a CTO at a {{industry}} company called {{company_name}}.

  Context about the prospect:
  - Company size: {{company_size}} employees
  - Recent signal or trigger: {{trigger}} (e.g., recent funding, new product launch, job posting)
  - Pain point to address: {{pain_point}}
  - Your product/service: {{your_product}}

  Write a cold email that:
  - Opens with a specific, non-generic observation about their company or role (use the trigger)
  - Names one concrete problem they likely have (related to {{pain_point}})
  - Positions {{your_product}} as a relevant solution in one sentence — no feature lists
  - Closes with a low-friction CTA (offer a 15-minute call or a useful resource)
  - Is under 120 words total
  - Has a subject line that doesn't sound like a sales email
  - Reads like it came from a curious, knowledgeable human — not a template

  Formatting rules:
  - No bullet points in the email body
  - No generic openers ("I hope this email finds you well," "My name is," "I wanted to reach out")
  - No buzzwords: synergy, leverage, best-in-class, robust, scalable (unless quoting their own words)
  - Sign off with just [Your Name], no title or company in the signature block

  Output the subject line first, then the email body, then a one-line note on the specific hook you used and why it's likely to land.
variables:
  - "{{industry}}"
  - "{{company_name}}"
  - "{{company_size}}"
  - "{{trigger}}"
  - "{{pain_point}}"
  - "{{your_product}}"
exampleInput: |
  industry: B2B SaaS
  company_name: Meridian Analytics
  company_size: 180
  trigger: Series B funding announced last week
  pain_point: manual data pipeline maintenance eating engineering time
  your_product: automated data pipeline orchestration platform
exampleOutput: |
  Subject: Your Series B — congrats, and a question

  Hi Sarah,

  Saw the Meridian Series B news — impressive traction. One thing I see at companies your stage: the data pipelines that got you here tend to become the bottleneck to scaling the next analytics layer.

  We help engineering teams automate the fragile parts of that stack so your people are building product, not babysitting ETL.

  Worth a 15-minute call to see if it's relevant? Happy to keep it tight.

  — [Name]

  Hook note: The Series B is a credible, timely trigger that signals growth pressure — it naturally opens the "you're scaling, here's what breaks" conversation without being presumptuous.
tips:
  - "Fill in {{trigger}} with something genuinely specific — a funding round, a job posting for a role you solve for, a product launch, or a public statement. Generic triggers like 'I saw your company online' will kill response rates."
  - "Keep {{pain_point}} concrete and operational, not abstract. 'Manual reporting' beats 'data challenges.' 'On-call alerts at 2am' beats 'reliability issues.'"
  - "If you don't have a specific trigger, ask Claude to suggest 3 plausible triggers for a company of that type and size before running this prompt."
  - "Run the prompt once, then follow up with: 'Make the opening more specific and the CTA softer' for a second variant to A/B test."
  - "Test subject lines separately: ask Claude to generate 5 subject line options for the same email, ranging from direct to curiosity-driven."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cold-outbound-vp-sales
  - follow-up-email-sequence
  - sales-discovery-call-prep
tags:
  - outbound
  - email
  - cold-outreach
  - enterprise
  - cto
---
