---
title: "Write a sales job description"
slug: job-description-sales
function: hr
role: recruiting
description: "Generate a compelling, honest sales job description that attracts high-performing candidates while accurately representing the role, comp structure, and expectations."
useCase: "Use this prompt to write a job description for a sales role — SDR, AE, or Sales Manager — that attracts the right candidates without overpromising or underselling. Sales JDs often fail in one of two directions: they're either so vague that any rep applies, or so specific that strong generalists self-select out. This prompt produces descriptions that attract high performers."
prompt: |
  You are a recruiting partner or sales leader writing a job description for a sales role.

  Context:
  - Company: {{company_name}}
  - Role: {{role_title}} (e.g., Account Executive, SDR, Sales Manager, Enterprise AE)
  - Sales motion: {{sales_motion}} (inbound/outbound, SMB/mid-market/enterprise, product-led/sales-led)
  - Territory or segment: {{territory}} (e.g., US West, enterprise accounts >1K employees, specific verticals)
  - Quota: {{quota}} (annual quota or quota range — be honest)
  - Compensation structure: {{comp_structure}} (base + OTE, commission structure, accelerators)
  - Product and deal context: {{product_context}} (what they're selling, ACV range, typical sales cycle, how complex the deal is)
  - Primary responsibilities: {{responsibilities}}
  - What success looks like in year 1: {{year_one_success}}
  - What the best candidates have done before: {{ideal_background}}
  - Company stage and sales culture: {{sales_culture}}
  - Work location: {{work_location}}

  Write a job description with these sections:

  ## Role Overview (3–4 sentences)
  Specific about the sales motion, what you're selling, and who you're selling to. Not generic.

  ## What You'll Own
  5–7 specific responsibilities. Include the parts of the job that are hard — AEs who don't know the job involves heavy outbound before interviews start are surprised and unhappy.

  ## What We're Looking For
  - Required: Honest minimum bar
  - Nice to have: Real preferences
  - What success looks like at 6 and 12 months

  ## The Opportunity (Why This Role)
  3–4 sentences on why a high-performing rep would choose this role over others. Be specific: what is the commission potential, what is the product's market position, what is the company trajectory?

  ## Compensation (be specific)
  Base, OTE, commission structure, equity, and key benefits. Sales candidates evaluate comp packages carefully — vague comp descriptions attract lower-quality applicants and waste interview time.

  Tone: direct and honest. The best sales hires are sophisticated evaluators — they read JDs skeptically. Every claim should be specific and defensible.
variables:
  - "{{company_name}}"
  - "{{role_title}}"
  - "{{sales_motion}}"
  - "{{territory}}"
  - "{{quota}}"
  - "{{comp_structure}}"
  - "{{product_context}}"
  - "{{responsibilities}}"
  - "{{year_one_success}}"
  - "{{ideal_background}}"
  - "{{sales_culture}}"
  - "{{work_location}}"
exampleInput: |
  company_name: Anchor Analytics
  role_title: Account Executive (Mid-Market)
  sales_motion: Outbound-led, mid-market SaaS companies ($10M–$150M ARR); deals range from $18K–$75K ACV; average sales cycle 45–75 days; product-led assist (free trial available)
  territory: US (no geographic restriction currently; will specialize as team grows)
  quota: $600K annual new ARR (approximately $50K/month)
  comp_structure: $90K base + $90K OTE (at 100% quota); accelerators above 100% (1.5x); quarterly payout; draws for first 90 days during ramp
  product_context: Selling Anchor Analytics platform + Signal (AI insights layer) to VPs of Finance, RevOps, and operations leaders at SaaS companies; buyers are data-savvy but not engineers; demos are consultative; high win rates in competitive situations where we get to a demo
  responsibilities: Manage full sales cycle from outbound prospecting to close; run product demos with VP+ buyers; maintain Salesforce hygiene; work with CS on handoffs; contribute pipeline forecast weekly; iterate on outbound sequences with SDR partner
  year_one_success: $450K+ closed new ARR in year 1 (accounting for 90-day ramp); 12+ active accounts in pipeline; quota attainment above 75% by Q4
  ideal_background: 2–4 years AE experience at B2B SaaS company; experience selling to finance or operations buyers; self-sourcing capability; track record of quota attainment (provide documentation)
  sales_culture: Small team (5 AEs total after this hire); high autonomy; no SDR support initially — self-sourcing expected; VP Sales is player-coach; direct access to founders; product is genuinely differentiated
  work_location: Remote (US)
exampleOutput: |
  # Account Executive — Mid-Market
  **Anchor Analytics | Remote (US) | $90K base / $180K OTE**

  ## Role Overview
  You'll own the full sales cycle for mid-market SaaS companies — from the first outbound email to signed contract. You're selling Anchor Analytics and Signal to VPs of Finance, RevOps leaders, and operations executives at B2B SaaS companies ($10M–$150M ARR). These buyers are sophisticated, data-driven, and evaluating multiple tools. You win with a consultative demo that connects their specific data pain to our product — not feature lists. Average deals are $30–50K ACV with a 45–75 day sales cycle.

  ## What You'll Own
  - Build and manage a pipeline from outbound prospecting through close — this role has self-sourcing expectations; you'll own your top-of-funnel
  - Run consultative product demos with VP+ buyers; understand their data and reporting challenges deeply before presenting the product
  - Manage 15–25 active opportunities simultaneously across different stages of a 45–75 day sales cycle
  - Maintain disciplined Salesforce hygiene — stage definitions are clear and enforced; your forecast accuracy matters
  - Partner with a CS counterpart on account handoffs to protect relationships you've built during the sales process
  - Contribute to weekly pipeline forecasts with deal-level accuracy
  - Work with the VP of Sales and product team to surface recurring objections and competitive intelligence

  ## What We're Looking For

  **Required:**
  - 2–4 years of full-cycle B2B SaaS AE experience with a documented quota attainment track record (we'll ask for W2s or commission statements)
  - Experience self-sourcing pipeline — this isn't a purely inbound or SDR-supported role
  - Comfort with consultative selling to VP+ buyers; you've had discovery conversations that take an hour and you know why
  - Strong written communication — outbound sequences are a meaningful part of the funnel

  **Nice to have:**
  - Experience selling to finance, RevOps, or operations buyers at SaaS companies
  - Familiarity with Salesforce as a seller (not as an admin)
  - Experience at a pre-Series A or Series A company — you know how to operate without unlimited resources

  **What success looks like:**
  - Month 3: First deal closed; 10+ active opportunities; outbound pipeline contributing meaningfully
  - Month 6: On-pace for $450K annual quota; demo-to-close rate above 35%
  - Month 12: $450K+ closed new ARR; top half of AE team in quota attainment

  ## The Opportunity

  Anchor's product wins in competitive evaluations — our demo-to-close rate when we get in front of qualified buyers is above 50%. The market gap is real: $10M–$150M ARR SaaS companies have serious analytics needs and no products built for them. The pipeline we've built outpaces the team's closing capacity, which is why we're hiring.

  This is a Series A-track company. The equity offered to AEs at this stage is meaningfully more valuable than what post-Series A AEs receive, and the OTE accelerators above quota are real (1.5x on everything above 100%). If you build a $700K book by year 2, you're earning over $200K.

  ## Compensation

  - **Base salary:** $90,000
  - **OTE at 100% quota:** $180,000 ($90K variable)
  - **Quota:** $600,000 new ARR annually
  - **Commission structure:** 15% of new ARR on first $600K; 22.5% on ARR above quota (1.5x accelerator); quarterly payout
  - **Ramp:** 90-day draw period; reduced quota in months 1–3 (33%/66%/100%)
  - **Equity:** 0.05–0.10% options (4-year vest)
  - **Benefits:** Full medical/dental/vision; $1,000/year professional development; home office stipend
tips:
  - "Publish the OTE, not just the base. Sales candidates evaluate OTE — posting only the base salary is a common tactic that wastes time for everyone."
  - "If the role requires self-sourcing, say it clearly in the responsibilities section. AEs who expect SDR support and discover they don't have it in week 2 are unhappy and leave."
  - "Asking for W2s or commission statements is common in sales recruiting and filters out candidates who inflate their track record. Mention it in the JD — it signals rigor."
  - "The accelerator structure is a significant recruiting differentiator. If your 1.5x accelerator kicks in above 100% quota, state it clearly — it's the reason high performers prefer early-stage companies."
  - "Be specific about demo-to-close rates and pipeline quality if they're genuinely strong. 'Our product wins when we get in front of the right buyer' with supporting data is far more compelling than generic 'great product' claims."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - job-description-engineering
  - structured-interview-questions
  - interview-scorecard
  - offer-letter-draft
  - outbound-sourcing-message
tags:
  - recruiting
  - job-description
  - sales
  - hiring
  - hr
---
