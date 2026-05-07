---
title: "Draft a response to a customer support ticket"
slug: ticket-response-draft
function: customer-service
role: support
description: "Generate a polite, helpful, and complete first-response draft to a customer support ticket, tailored to the issue type and customer tone."
useCase: "Use this prompt to draft responses to inbound support tickets faster and more consistently. Works across issue types — technical bugs, billing questions, how-to requests, and complaints. Reduces handle time while improving response quality."
prompt: |
  You are an expert customer support specialist. Draft a professional, empathetic response to the following support ticket.

  Context:
  - Customer name: {{customer_name}}
  - Product/service: {{product_name}}
  - Ticket subject: {{ticket_subject}}
  - Ticket content (what the customer wrote): {{ticket_content}}
  - Issue type: {{issue_type}} (e.g., bug report, billing question, feature question, complaint, how-to request)
  - Resolution or answer: {{resolution}} (what actually solves the issue, or "investigate further" if unknown)
  - Account status: {{account_status}} (e.g., free trial, paid customer, churned, enterprise)
  - Company tone: {{company_tone}} (e.g., warm and friendly, professional and direct, casual)

  Write a response that:
  - Opens by acknowledging what the customer is experiencing — not with "Thank you for reaching out" as the first sentence
  - Addresses their specific issue directly — no generic filler
  - Provides the resolution or next steps in clear, jargon-free language
  - If the issue can't be immediately resolved: explains what's being done and sets a realistic expectation for follow-up
  - Closes with a specific invitation for follow-up, not "let me know if you have any other questions"
  - Is appropriately concise — doesn't pad with unnecessary sentences
  - Matches the customer's emotional register: if they're frustrated, acknowledge it; if they're matter-of-fact, stay professional; if they're distressed, lead with empathy

  Also include: a suggested subject line for the reply.

  Do not include: apologies for things that aren't your fault, promises you can't keep, or information the customer didn't ask for.
variables:
  - "{{customer_name}}"
  - "{{product_name}}"
  - "{{ticket_subject}}"
  - "{{ticket_content}}"
  - "{{issue_type}}"
  - "{{resolution}}"
  - "{{account_status}}"
  - "{{company_tone}}"
exampleInput: |
  customer_name: Marcus
  product_name: Anchor Analytics
  ticket_subject: Dashboard not loading — been down for 2 hours
  ticket_content: "My dashboard has been spinning for 2 hours and I can't get anything to load. I have a call with my CEO in 30 minutes and I need this working. Very frustrated right now."
  issue_type: bug report (service degradation)
  resolution: our engineering team identified a caching issue affecting 12% of users; fix is being deployed now, ETA 15 minutes; customer can also try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R) as a workaround
  account_status: paid customer (Professional plan)
  company_tone: warm and direct
exampleOutput: |
  Subject: Dashboard issue — fix deploying now, workaround available

  Marcus,

  I can see exactly what you're dealing with, and the timing couldn't be worse.

  Here's where things stand: our engineering team identified a caching issue affecting a subset of customers this morning and a fix is actively being deployed right now — we're estimating it fully resolves within the next 15 minutes.

  In the meantime, a hard refresh may get your dashboard working immediately: press Ctrl+Shift+R on Windows (or Cmd+Shift+R on Mac). Several customers have gotten back up and running this way while the fix finishes deploying.

  I'll send you a follow-up confirmation the moment the fix is fully live. If you're still seeing the issue after your call or the hard refresh doesn't work, reply directly to this email and I'll escalate to our engineering team immediately.

  I'm sorry this happened at the worst possible moment.

  — [Name], Anchor Analytics Support
tips:
  - "Match urgency to urgency. Marcus is heading into a CEO call — the response leads with the workaround, not an explanation of what caused the issue."
  - "If you don't have a resolution yet, say so directly and tell the customer when they'll hear back: 'I'm escalating this to our engineering team now and will update you within 2 hours.'"
  - "The close should be specific: 'reply directly to this email' is actionable; 'let me know if you have any questions' is a throwaway line."
  - "After running this prompt, check the response for any promises you can't keep — these are the most damaging sentences in a support response."
  - "Use this prompt as a drafting starting point, not a final product. Always review for accuracy before sending."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - apology-email
  - chat-response-refinement
  - internal-handoff-summary
tags:
  - support
  - ticket
  - response
  - customer-service
---
