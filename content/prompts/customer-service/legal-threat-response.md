---
title: "Write a professional first response to a customer legal threat"
slug: legal-threat-response
function: customer-service
role: escalations
description: "Generate a calm, professional first response to a customer who has threatened legal action, that acknowledges their concern without making admissions or escalating the situation."
useCase: "Use this prompt when a customer threatens legal action, references their lawyer, or demands compensation in legal terms. The first response is critical — the wrong response can escalate to actual legal action; the right response often de-escalates and resolves the underlying issue."
prompt: |
  You are a senior customer success manager working with your legal and leadership team to respond to a customer who has made a legal threat. Write a professional first response.

  IMPORTANT: This prompt produces a first-response draft for human review. It must be reviewed by a manager and, for significant legal threats, by legal counsel before sending.

  Situation:
  - Customer name: {{customer_name}}
  - Account tier: {{account_tier}}
  - What the customer said (verbatim if possible): {{customer_threat}}
  - The underlying issue: {{underlying_issue}}
  - Your company's position on the issue: {{company_position}}
  - Any genuine errors or mistakes your company made: {{company_errors}}
  - What your company can offer (if anything): {{resolution_options}}

  Write a first response that:
  - Acknowledges receipt of their message and takes their concern seriously
  - Does NOT make any admission of liability or wrongdoing
  - Does NOT argue the legal merits of their claim
  - Does NOT promise any specific outcome or timeline
  - Does NOT threaten or counter-threaten
  - Acknowledges the underlying issue directly and shows that it's being taken seriously
  - Escalates internally — the response should indicate that the message has been forwarded to leadership and/or legal
  - Keeps the door open for resolution without making commitments
  - Is professional, calm, and brief — under 150 words

  Also: flag 3 specific things the reviewer should check before sending this response.
variables:
  - "{{customer_name}}"
  - "{{account_tier}}"
  - "{{customer_threat}}"
  - "{{underlying_issue}}"
  - "{{company_position}}"
  - "{{company_errors}}"
  - "{{resolution_options}}"
exampleInput: |
  customer_name: Gerald Hutchins
  account_tier: Enterprise
  customer_threat: "This is unacceptable. Your platform failure cost my company $40,000 in a missed contract. I will be consulting with our attorney about our legal options unless I hear from someone in leadership today with a path to compensation."
  underlying_issue: platform outage during a high-stakes client presentation; customer claims they lost a deal as a direct result
  company_position: our SLA covers service credits but not consequential damages (lost business); this is in our terms of service; however, we did have a real outage and our customer notification was slow
  company_errors: outage was real; customer notification took 2 hours — longer than our committed SLA for notification
  resolution_options: can offer service credit under SLA; leadership call to understand the full situation; may consider additional goodwill gesture depending on the circumstances
exampleOutput: |
  Gerald,

  I've received your message and I want to make sure it gets the right attention immediately.

  I'm forwarding this directly to our leadership team today. The outage you experienced was real, and I understand the timing caused significant problems for your business. I'm not able to make commitments about outcomes or next steps on behalf of the company, but I can confirm this is being treated with urgency at the highest level.

  You should expect to hear from someone in our leadership directly today. In the meantime, please don't hesitate to respond to this email with any additional context you'd like us to have.

  — [Name]

  ---

  Reviewer checklist before sending:
  1. Has legal counsel been notified? For a $40K claim, this response should be reviewed by your legal team before sending — even though this draft contains no admissions.
  2. Has the leadership recipient been briefed? Don't promise a leadership call that hasn't been arranged.
  3. Does "directly today" match your actual response capacity? Only commit to a timeframe you can meet.
tips:
  - "The goal of the first response to a legal threat is to de-escalate and buy time for a proper response — not to resolve the issue. Keep the first response brief and commit only to what you know you can deliver."
  - "Never argue the merits of a legal claim in writing — anything you write becomes a potential exhibit. Route legal threats to legal counsel immediately."
  - "A leadership call is often the most effective de-escalation tool for a legal threat. Customers who feel heard at the executive level frequently do not pursue legal action."
  - "If your company made a genuine error (like a slow notification), don't hide from it — but also don't admit liability. 'The outage you experienced was real' acknowledges the fact without admitting negligence."
  - "Document everything from this point forward: all communications, timestamps, resolutions offered. If this does proceed legally, you'll want a clear record."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - de-escalation-response
  - executive-escalation-email
  - apology-email
tags:
  - legal
  - escalation
  - customer-service
  - risk
---
