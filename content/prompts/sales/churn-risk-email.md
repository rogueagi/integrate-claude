---
title: "Write a proactive churn-risk email to a struggling customer"
slug: churn-risk-email
function: sales
role: customer-success
description: "Generate a candid, empathetic email to a customer showing churn signals that reopens the relationship before it's too late."
useCase: "Use this prompt when you notice warning signs of a customer at risk of churning: declining usage, unresponsive contacts, missed check-ins, or support complaints. Proactive outreach at this stage is 10x more effective than retention conversations after cancellation."
prompt: |
  You are a senior customer success manager writing to a customer who is showing signs of churn risk. The goal is to acknowledge the situation honestly, re-establish the relationship, and create an opening to help — without sounding desperate or salesy.

  Customer context:
  - Customer company: {{customer_company}}
  - Contact name and title: {{contact_name}}, {{contact_title}}
  - Product/service: {{product}}
  - Churn signals observed: {{churn_signals}} (e.g., usage dropped 60% last month, no response to last 3 check-ins, opened a support ticket expressing frustration, reduced their seat count)
  - What you know about their situation: {{situation_context}}
  - Their original goals with the product: {{original_goals}}
  - Renewal timeline: {{renewal_date}}

  Write an email that:
  - Opens by acknowledging a real, observable fact — not "I noticed you haven't been using the platform" but something specific
  - Is honest without being accusatory ("I want to make sure we're adding value" > "I noticed you might be canceling")
  - Asks one open, genuine question about how things are going for them — not a yes/no question
  - Does NOT pitch additional features or upsells
  - Does NOT include a "just checking in" energy
  - Is under 150 words
  - Sounds like it came from a person who genuinely cares about their success, not a CSM trying to save ARR

  Also write: a subject line that will get opened, and a note on what success looks like for this email (it's not a sale — it's a conversation).
variables:
  - "{{customer_company}}"
  - "{{contact_name}}"
  - "{{contact_title}}"
  - "{{product}}"
  - "{{churn_signals}}"
  - "{{situation_context}}"
  - "{{original_goals}}"
  - "{{renewal_date}}"
exampleInput: |
  customer_company: Sable Creative Agency
  contact_name: Renata
  contact_title: Head of Operations
  product: project management and client reporting platform
  churn_signals: platform usage dropped 70% over the past 6 weeks; last login was 5 weeks ago; no response to two check-in emails
  situation_context: Sable went through a leadership change 8 weeks ago — new CEO came in, there may have been team restructuring
  original_goals: reduce time spent on client reporting from 8 hours/week to under 2 hours
  renewal_date: in 4 months
exampleOutput: |
  Subject: Checking on Sable — not in a check-in way

  Renata,

  I know you've been heads-down through a significant transition. I've noticed the activity on your account has been quiet, and I've been thinking about whether we're actually helping Sable through that, or whether we fell to the back burner.

  You came to us to get your team out of 8-hour reporting weeks. I'd like to understand whether that's still happening, or whether things have changed in a way that makes that harder.

  Would you be open to a 20-minute call this week? No agenda — I just want to understand where things stand.

  — [Name]

  Subject line works because: "not in a check-in way" signals self-awareness and earns a read from someone tired of performative check-ins.

  Success for this email: A reply. Any reply. Even "now isn't a good time" is a win because it reopens the channel. The goal is not to save the account in one email — it's to get a conversation.
tips:
  - "The worst churn-risk email leads with product value: 'We have a new feature that might help.' At this stage, the customer doesn't trust that you understand their problem — prove you do first."
  - "Reference the leadership change if you know about it. Acknowledging their reality shows you're paying attention to their business, not just their login data."
  - "Send this email from the CSM, not from a generic account. Automated churn campaigns are easily ignored; a personal email from someone they know gets read."
  - "If there's been no response to 3+ emails, consider a direct call or a handwritten note for high-value accounts. Sometimes breaking the channel pattern is what it takes."
  - "After sending, give it 5 business days before a follow-up. Chasing too fast signals desperation and confirms their instinct to disengage."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - qbr-deck-outline
  - expansion-opportunity-email
  - de-escalation-response
tags:
  - churn
  - customer-success
  - retention
  - email
---
