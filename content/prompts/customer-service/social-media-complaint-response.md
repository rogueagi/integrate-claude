---
title: "Respond to a public complaint on social media"
slug: social-media-complaint-response
function: customer-service
role: support
description: "Generate a professional, empathetic public response to a customer complaint on Twitter, LinkedIn, or other social platforms that de-escalates publicly while moving the conversation to a private channel."
useCase: "Use this prompt when a customer posts a public complaint about your product or service on social media. Public responses are seen by everyone — the goal is to show empathy and accountability publicly while resolving the actual issue privately."
prompt: |
  You are a social media customer care specialist. Write a public response to the following social media complaint.

  Context:
  - Platform: {{platform}} (e.g., Twitter/X, LinkedIn, Facebook, App Store review)
  - Customer's public post: {{customer_post}}
  - Customer's account tier (if known): {{account_tier}}
  - Nature of the complaint: {{complaint_type}} (e.g., product outage, billing error, poor support experience, product not working as expected)
  - Internal status of the issue: {{issue_status}} (e.g., known and being fixed, needs investigation, resolved on our end)
  - Private channel to direct them to: {{private_channel}} (e.g., DM, email, support ticket link)

  Write a public response that:
  - Is under 280 characters for Twitter/X (adjust for other platforms)
  - Opens with acknowledgment of the issue — not defensiveness, not excessive apology
  - Takes appropriate public accountability without over-sharing internal details
  - Moves the conversation to a private channel for resolution
  - Is never snarky, condescending, or dismissive — even if the post seems unfair
  - Is signed with a human name or initials (not "The [Brand] Team")

  Also write: a brief internal note on what NOT to say in this situation and why.

  Platform-specific guidance:
  - Twitter/X: 280 character max; be brief, human, direct
  - LinkedIn: slightly longer acceptable; more professional tone
  - App Store review: cannot DM; response must include resolution or context since it's permanent
  - Facebook: similar to LinkedIn; slightly warmer
variables:
  - "{{platform}}"
  - "{{customer_post}}"
  - "{{account_tier}}"
  - "{{complaint_type}}"
  - "{{issue_status}}"
  - "{{private_channel}}"
exampleInput: |
  platform: Twitter/X
  customer_post: "@AnchorAnalytics my entire team's dashboards have been down for 3 hours during our busiest week of the year. No status update, no communication. This is unacceptable."
  account_tier: Professional customer
  complaint_type: product outage
  issue_status: known issue, fix being deployed, ETA 15 minutes
  private_channel: DM or support@anchoranalytics.io
exampleOutput: |
  Public Response (Twitter/X — 247 chars):
  "We're aware of the dashboard issue and a fix is actively being deployed — ETA ~15 minutes. I'm sorry for the timing, especially during a critical week. DM us or email support@anchoranalytics.io and I'll personally make sure you're updated. — Marcus"

  ---

  Internal Note — What NOT to say:
  - Don't say "We're looking into it" without a concrete status — it reads as dismissive when the customer has been waiting 3 hours and already lost trust.
  - Don't say "Please DM for support" without first acknowledging the issue publicly. Moving to private without acknowledgment looks like you're hiding the complaint.
  - Don't ask them to "submit a ticket" when there's an active, known outage — this is the moment for a human response, not a process redirect.
  - Don't use "We apologize for any inconvenience" — this phrasing is widely recognized as hollow and will make the tweet screenshot worse, not better.
tips:
  - "The public response is not the resolution — it's the acknowledgment. The actual fix happens privately. Your public response is being read by hundreds of people who aren't complaining but are watching how you handle it."
  - "Sign responses with a real name or initials. 'The Anchor Team' feels corporate; 'Marcus' feels like a person who gives a damn."
  - "Always include the ETA or fix status if you know it — a public post with a known fix ETA turns a complaint thread into a resolution thread. Many customers will reply to say thank you."
  - "Monitor the thread after your response. If the customer replies publicly, respond publicly again. Going silent after one reply signals that you said what you needed to for optics and moved on."
  - "Screenshot the original post before responding — it's useful for the internal post-mortem, especially if the original gets deleted."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - ticket-response-draft
  - de-escalation-response
  - apology-email
  - media-inquiry-response
tags:
  - social-media
  - public-relations
  - customer-service
  - escalation
---
