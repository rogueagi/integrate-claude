---
title: "Write a new SDR onboarding email series"
slug: onboarding-email-sequence
function: sales
role: sales-enablement
description: "Generate a 5-email onboarding sequence for new SDR hires that builds skills progressively and sets them up for early success."
useCase: "Use this prompt to build a structured email drip series for new sales development reps during their first 4 weeks. Each email delivers one key concept, one practical exercise, and one resource — keeping new reps engaged without overwhelming them."
prompt: |
  You are a sales enablement leader building a 5-email onboarding sequence for a new SDR hire. The sequence spans their first 4 weeks on the job.

  Context:
  - Company name: {{company_name}}
  - Product/service they're selling: {{product_description}}
  - Target customers: {{target_customer}} (e.g., VPs of Engineering at Series B SaaS companies)
  - Primary outbound motion: {{outbound_motion}} (e.g., email + LinkedIn, cold calling, mixed)
  - Sales manager or enablement contact name: {{manager_name}}
  - New rep name: {{rep_name}}

  Write a 5-email sequence with these topics and timing:

  Email 1 (Day 1 — Welcome):
  - Warm welcome that sets the tone and expectations
  - One thing they should do today to set themselves up
  - One thing they should know about the customer before anything else
  - Introduces {{manager_name}} as their go-to

  Email 2 (Week 1 — The Customer):
  - Deep dive on who {{target_customer}} is: what they care about, how they think, what their day looks like
  - One exercise: find 3 real prospects on LinkedIn that fit the profile and write one thing interesting about each
  - One resource to read or watch

  Email 3 (Week 2 — The Problem):
  - The specific problems {{company_name}}'s product solves — written from the customer's perspective, not the feature list
  - One exercise: write a 2-sentence "problem statement" in the customer's voice without mentioning the product
  - Coaching note on the most common messaging mistake new reps make

  Email 4 (Week 3 — The Outreach):
  - Practical guidance on writing the first cold email or making the first call
  - One framework: the anatomy of a good cold email or call opener
  - One exercise: draft a cold email to a real prospect and share it with {{manager_name}} for feedback before sending

  Email 5 (Week 4 — The Mindset):
  - Honest talk about the hard parts of SDR work: rejection, inconsistency, long feedback loops
  - 3 mindset principles that separate high performers from average performers
  - Encouragement that's earned, not generic ("great job everyone!")
  - Clear next milestone to work toward

  Each email should be: 200–300 words, warm but professional, practical over motivational, and end with one specific action item.
variables:
  - "{{company_name}}"
  - "{{product_description}}"
  - "{{target_customer}}"
  - "{{outbound_motion}}"
  - "{{manager_name}}"
  - "{{rep_name}}"
exampleInput: |
  company_name: Fenix Revenue
  product_description: AI-powered sales coaching platform that analyzes call recordings and gives reps real-time improvement feedback
  target_customer: VP of Sales and Sales Enablement leaders at B2B SaaS companies with 50–500 employees
  outbound_motion: email + LinkedIn
  manager_name: Jordan Hayes
  rep_name: Marcus
exampleOutput: |
  Email 1 — Day 1 | Subject: Welcome to Fenix, Marcus — three things for today

  Marcus,

  Welcome to the team. You're starting at an interesting time — we're in a market where sales leaders are under real pressure to develop their reps faster and prove that coaching actually moves the needle. That's exactly the problem Fenix was built to solve.

  Here are three things for today:

  1. Read the "Who We Sell To" doc in the shared drive. Spend 20 minutes on it.
  2. Set up a 1:1 with Jordan Hayes (jordan@fenixrevenue.com) for this week — she's your primary resource for questions, feedback, and support.
  3. Shadow one call recording in our platform before the week is out. Not to learn the product — to hear how a real sales leader talks about the coaching problem.

  The most important thing to know before anything else: our buyers are sales leaders who are skeptical by nature. They've seen a lot of tools that promised to fix their reps. Your job isn't to sell them a product — it's to show them you understand their world better than most vendors do.

  More soon. Have a good first day.

  Jordan & the Fenix team

  [Emails 2–5 would follow the same structure for weeks 1–4]
tips:
  - "Customize Email 3 heavily — the 'problem statement' section is the most important skill a new SDR will build, and the most common mistakes are company-specific."
  - "Use real examples in the exercise prompts — don't ask reps to practice on fictional companies. Real stakes build real skills."
  - "Email 5 is the one most enablement leaders get wrong. Don't soften the reality of SDR work — reps who understand the difficulty early are more resilient than those who are surprised by it."
  - "After running this prompt, ask Claude to write the actual 'Who We Sell To' one-pager that Email 1 references — it should be written from the customer's perspective, not as a product sheet."
  - "Schedule this sequence to send automatically from the manager's email address, not a generic training inbox — the personal sender dramatically increases open rates."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - product-pitch-script
  - case-study-template
  - structured-interview-questions
tags:
  - onboarding
  - sdr
  - sales-enablement
  - training
  - email-sequence
---
