---
title: "Respond to a customer refund request with empathy and policy"
slug: refund-request-response
function: customer-service
role: support
description: "Generate a professional, empathetic response to a refund request that balances company policy with customer relationship preservation."
useCase: "Use this prompt when a customer requests a refund — whether the request is within policy, outside of policy, or in a gray area. The goal is to be fair, honest, and relationship-preserving regardless of the outcome."
prompt: |
  You are a customer support specialist responding to a refund request. Write a professional, empathetic response.

  Context:
  - Customer name: {{customer_name}}
  - Product/service: {{product_name}}
  - Customer's refund request (what they said): {{refund_request}}
  - Reason for refund request: {{refund_reason}}
  - Refund policy: {{refund_policy}} (e.g., 30-day money-back guarantee, no refunds after 7 days, case-by-case at support's discretion)
  - Whether this request is within policy: {{within_policy}} (yes / no / gray area)
  - Decision: {{decision}} (approve full refund / approve partial refund / deny / escalate for review)
  - Account tier: {{account_tier}}
  - Any additional context: {{additional_context}}

  Write a response that:
  - Opens by acknowledging their request and the situation — not with "Thank you for reaching out"
  - If approving: communicates the approval clearly, explains the timeline for the refund, and leaves the door open for them to return
  - If denying: explains the policy clearly and honestly, acknowledges that this may be disappointing, and offers an alternative if one exists (e.g., credit, extended trial, resolution of the underlying issue)
  - If gray area / escalating: sets a clear expectation for when they'll hear back and what the process is
  - Never makes the customer feel guilty for requesting a refund
  - Is under 200 words
  - Ends with a specific next step

  Do not: apologize for having a policy, make the customer feel judged for asking, or give the impression they're the first person who's ever asked for a refund.
variables:
  - "{{customer_name}}"
  - "{{product_name}}"
  - "{{refund_request}}"
  - "{{refund_reason}}"
  - "{{refund_policy}}"
  - "{{within_policy}}"
  - "{{decision}}"
  - "{{account_tier}}"
  - "{{additional_context}}"
exampleInput: |
  customer_name: Thomas
  product_name: Anchor Analytics
  refund_request: "I signed up 12 days ago and I've barely used it. It's not what I expected — I thought it would be easier to connect to our existing tools. I'd like a refund."
  refund_reason: product didn't meet expectations; difficulty with integrations
  refund_policy: 30-day money-back guarantee, no questions asked
  within_policy: yes
  decision: approve full refund
  account_tier: Professional (monthly)
  additional_context: customer signed up 12 days ago; has not connected any integrations despite completing initial setup; no support tickets previously submitted
exampleOutput: |
  Thomas,

  Completely understood — and your request is well within our 30-day guarantee.

  I've initiated a full refund to the card on file. You should see it reflected within 5–7 business days depending on your bank.

  I did want to mention: the integration setup is the piece most customers find tricky on their own, and we have a dedicated onboarding team who handles exactly that. If you ever want to give Anchor another try with actual hands-on setup support, just let us know — we'd approach it differently.

  Either way, your refund is processing and there's nothing you need to do on your end. I'll send a confirmation once it's complete.

  — [Name], Anchor Analytics
tips:
  - "The sentence about 'giving it another try' is the most important part of a refund response. It keeps the door open without being pushy — and it addresses the actual barrier (integration complexity) directly."
  - "Don't bury the approval in a long email. Say 'I've initiated a full refund' in the first or second sentence."
  - "For denied refunds, the offer of an alternative (store credit, an extended trial, a free onboarding session) converts a 'no' into a compromise and often preserves the customer relationship."
  - "If the decision requires escalation, commit to a specific timeframe: 'I'll have an answer for you by end of day tomorrow' — not 'someone will be in touch.'"
  - "Track refund request language patterns — they often reveal product confusion or expectation gaps that can be addressed with better onboarding, clearer messaging, or product changes."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - ticket-response-draft
  - de-escalation-response
  - churn-risk-email
tags:
  - refund
  - policy
  - support
  - customer-service
---
