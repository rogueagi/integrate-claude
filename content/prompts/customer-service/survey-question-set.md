---
title: "Write an NPS follow-up survey question set"
slug: survey-question-set
function: customer-service
role: cx-research
description: "Generate a targeted NPS follow-up survey question set that turns a score into actionable customer insight."
useCase: "Use this prompt to build the follow-up questions that appear after customers submit an NPS score. The NPS number alone tells you little — the follow-up questions are where the insight lives. This prompt generates questions tailored to score range (promoter, passive, detractor) that surface root causes and next actions."
prompt: |
  You are a customer experience researcher. Write a targeted NPS follow-up survey question set.

  Context:
  - Product/service: {{product_name}}
  - Customer segment: {{customer_segment}} (e.g., all customers, enterprise only, first 90 days, post-onboarding)
  - Key things you want to understand: {{research_priorities}} (e.g., what drives loyalty, what causes dissatisfaction, which features are most valued)
  - Survey platform: {{platform}} (e.g., Delighted, SurveyMonkey, Typeform, in-app)
  - Max questions per survey: {{max_questions}}

  Write three separate follow-up question sets — one for each score group:

  **Detractors (0–6): [Title your question set]**
  Goal: understand the source of dissatisfaction and open the door to recovery.
  Questions should:
  - Acknowledge the low score respectfully without being defensive
  - Ask specifically what led to the low rating
  - Ask whether they've tried to get help and what the experience was
  - Ask what would need to change for them to reconsider
  Max {{max_questions}} questions.

  **Passives (7–8): [Title your question set]**
  Goal: understand what's preventing them from being promoters, and what would tip them over.
  Questions should:
  - Acknowledge that things are okay but not great
  - Probe what's missing or could be improved
  - Identify which features or aspects are most/least valuable
  Max {{max_questions}} questions.

  **Promoters (9–10): [Title your question set]**
  Goal: understand what's driving loyalty and capture testimonial-quality insight.
  Questions should:
  - Thank them for their rating and ask what they love
  - Identify the specific moment when they became a strong advocate
  - Ask what they'd say to someone else considering the product
  - Gauge willingness to be a reference, case study, or G2 reviewer
  Max {{max_questions}} questions.

  For each question:
  - Write the question text as it would appear to the customer
  - Label the question type: open text, multiple choice, rating scale, or yes/no
  - Note the insight it's designed to surface (internal guidance)

  Also write: a brief analysis guide — how to use the survey results to prioritize actions.
variables:
  - "{{product_name}}"
  - "{{customer_segment}}"
  - "{{research_priorities}}"
  - "{{platform}}"
  - "{{max_questions}}"
exampleInput: |
  product_name: Anchor Analytics
  customer_segment: all paying customers, surveyed 90 days after first login
  research_priorities: understand which features drive loyalty, what caused dissatisfaction, what prevents passives from becoming promoters
  platform: Delighted
  max_questions: 4
exampleOutput: |
  **Detractors (0–6): Help Us Do Better**

  1. "What's the main reason for your rating?" (Open text)
  Insight: Identifies the primary source of dissatisfaction — categorize responses into: product (bugs/missing features), support (unresolved issues), value (price vs. perceived value), onboarding (never got set up properly)

  2. "Which part of Anchor hasn't worked the way you expected?" (Multiple choice: Connecting data sources / Dashboard setup / Anomaly alerts / Exports / Something else)
  Insight: Pinpoints the specific failure area for product and CS teams

  3. "Have you reached out to our support team about this?" (Yes/No — if yes, follow with) "How was that experience?"
  Insight: Surfaces unresolved support issues; also identifies detractors who didn't seek help (missed intervention opportunity)

  4. "What would need to change for you to give us a higher score?" (Open text)
  Insight: Direct recovery roadmap from the customer's perspective; often surfaces actionable, specific requests

  ---

  **Passives (7–8): Help Us Improve**

  1. "What's been the most valuable part of using Anchor so far?" (Open text)
  Insight: Identifies what IS working for passives — often reveals that they haven't discovered the features that drive promoter satisfaction

  2. "What would make you more likely to recommend Anchor to a colleague?" (Open text)
  Insight: The most direct answer to the promoter gap — often reveals missing features, price sensitivity, or onboarding gaps

  3. "Which of these would make Anchor more valuable to you?" (Multiple choice: Faster setup / More integrations / Better reporting / More customization / Lower price / Better support)
  Insight: Quantifies the most common improvement priorities among passives

  4. "How often does your team use Anchor for weekly reporting?" (Multiple choice: Daily / Weekly / Monthly / Rarely)
  Insight: Usage frequency is often the strongest passive-to-promoter predictor — low usage passives need engagement campaigns, not feature development

  ---

  **Promoters (9–10): Share Your Story**

  1. "What made you give us a 9 or 10?" (Open text)
  Insight: Testimonial-quality language; identify which features, moments, or outcomes drive promoter status

  2. "Was there a specific moment when you realized Anchor was really working for your team?" (Open text)
  Insight: The "aha moment" — feeds product onboarding optimization and marketing stories

  3. "If a colleague was considering Anchor, what would you tell them?" (Open text)
  Insight: Word-of-mouth language; use verbatim in marketing materials (with permission)

  4. "Would you be open to sharing your experience more broadly — as a G2 review, a case study, or a reference call?" (Multiple choice: Happy to do a G2 review / Open to a case study / Would do a reference call / Not interested right now)
  Insight: Populates your advocate pipeline without a separate ask

  ---

  Analysis Guide:
  - Detractor open text: run monthly and tag responses into 5–6 categories; top category = highest priority fix
  - Passive gap question: treat as a product wishlist; top answer each quarter = roadmap input
  - Promoter "aha moment": feed directly into onboarding design — if promoters cite a specific feature, make it impossible to miss in the first 30 days
  - Advocate pipeline: export promoters who said yes to G2/case study into a dedicated workflow the CS team owns
tips:
  - "Send NPS surveys at consistent moments in the customer lifecycle (90 days, 12 months, post-support resolution) — not randomly. Triggered surveys produce higher response rates and more comparable data."
  - "4 questions is the right maximum for post-NPS surveys. Response rate drops sharply after 4 questions — you'll lose respondents and the data quality will drop."
  - "Never send an NPS survey without following up on detractor responses. An NPS program that doesn't respond to detractors is data collection theater."
  - "The promoter 'aha moment' question is gold for product and marketing. Build a repository of these answers — they're better marketing copy than anything your team will write."
  - "Benchmark your NPS quarterly, not monthly. Monthly variance is noise; quarterly trends are signal."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - customer-interview-guide
  - interview-synthesis
  - churn-interview-guide
tags:
  - nps
  - survey
  - cx-research
  - customer-feedback
---
