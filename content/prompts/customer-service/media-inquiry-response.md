---
title: "Respond to a journalist asking about a customer issue"
slug: media-inquiry-response
function: customer-service
role: escalations
description: "Generate a professional, measured response to a media inquiry about a customer complaint or service issue, with guidance on what to say and what to avoid."
useCase: "Use this prompt when a journalist contacts your company asking for comment on a customer complaint, service outage, or negative review. Media responses require a different approach than customer responses — precision and defensibility matter as much as empathy."
prompt: |
  You are a PR professional helping a company respond to a media inquiry about a customer issue. Write a measured, professional statement.

  IMPORTANT: This prompt produces a draft for review. All media responses should be reviewed by leadership and PR counsel before sending.

  Inquiry details:
  - Publication/journalist: {{journalist_info}}
  - Inquiry content (what they asked): {{inquiry_content}}
  - Deadline they gave you: {{deadline}}
  - The customer issue being asked about: {{customer_issue}}
  - What actually happened (factual account): {{factual_account}}
  - Your company's current position: {{company_position}}
  - Any genuine errors acknowledged: {{acknowledged_errors}}
  - Resolution status: {{resolution_status}}

  Write:

  ## 1. Holding Statement (for use while you prepare a full response)
  2–3 sentences. Acknowledges receipt, confirms you're looking into it, gives a timeline for a fuller response. Used within the first hour when you're not ready to comment substantively.

  ## 2. Full Media Statement (under 150 words)
  - Acknowledges the situation factually
  - States your company's position clearly without being defensive
  - Acknowledges any genuine errors without over-admitting
  - Focuses on resolution and what's being done
  - Does NOT argue with the customer's characterization in the press
  - Does NOT reveal confidential customer account details
  - Ends with a forward-looking statement

  ## 3. On-Background Context (for the journalist only, not for publication)
  Facts and context you're willing to share with the journalist to help them write a more accurate story — but not for direct attribution. This is optional and must be cleared by legal/PR before sharing.

  ## 4. 5 Things Not to Say
  Specific phrases or framings to avoid in this specific situation and why.
variables:
  - "{{journalist_info}}"
  - "{{inquiry_content}}"
  - "{{deadline}}"
  - "{{customer_issue}}"
  - "{{factual_account}}"
  - "{{company_position}}"
  - "{{acknowledged_errors}}"
  - "{{resolution_status}}"
exampleInput: |
  journalist_info: Sara Reyes, TechCrunch, covering enterprise software failures
  inquiry_content: "I'm writing about a service outage at Anchor Analytics on April 15 that affected enterprise customers during a critical business period. One customer told me they lost a major contract as a result. I'd like your comment by 5pm today."
  deadline: 5pm today
  customer_issue: 2.5-hour platform outage on April 15 affecting all Professional and Enterprise customers; one customer has claimed consequential damages
  factual_account: outage was real (9:14am-11:47am ET); affected ~200 accounts; root cause was a cache deployment failure; no data was lost; customer notification took approximately 2 hours (longer than our SLA)
  company_position: we take the outage seriously; we've provided service credits per our SLA; consequential damages claims are outside our contractual scope but we're in active discussions with affected customers
  acknowledged_errors: our customer notification was slower than our SLA commitment
  resolution_status: outage resolved; service credits applied; incident postmortem sent; in discussions with specific customers who reported significant business impact
exampleOutput: |
  ## 1. Holding Statement (to send immediately)
  Thank you for reaching out. We're aware of the April 15 service incident and are gathering the relevant information to provide you with an accurate and complete response. We'll be in touch before your 5pm deadline.

  —

  ## 2. Full Media Statement

  On April 15, Anchor Analytics experienced a service disruption affecting dashboard access for approximately 2.5 hours (9:14am–11:47am ET) due to a cache system failure. API access and data exports were unaffected throughout the incident, and no customer data was lost or corrupted.

  We acknowledge that our customer notification process took longer than our service level commitment on this occasion. Affected customers have received service credits per our SLA, and we've published a detailed incident postmortem explaining the root cause and the specific changes we're making to our systems and notification processes.

  We take incidents like this seriously and are in direct contact with customers who reported significant business impact. We remain committed to being a reliable platform for our customers.

  —

  ## 3. On-Background Context (to share with journalist if cleared by PR)
  - We've served 200+ customers for multiple years with a historical uptime of >99.8%
  - This specific outage lasted 2.5 hours; we've had 2 incidents of over 1 hour in the past 18 months
  - The customer who reported a lost contract: we've reached out directly; we're not able to confirm or deny specific customer claims, but we take all reported business impacts seriously

  ## 4. Five Things Not to Say
  1. "The customer misunderstood our SLA." — Never argue the customer's characterization in the press; it looks defensive and gives the journalist a combative angle to write.
  2. "Outages happen to everyone." — True but dismissive; it signals you're not taking responsibility.
  3. "We can't comment on individual customer situations." — This will read as evasive given the specificity of the inquiry; acknowledge generally while declining specifics.
  4. "Our 99.8% uptime record speaks for itself." — Sounds defensive; let the record speak for itself without saying it.
  5. "The customer's claim of a lost contract has not been verified." — Even if true, this sounds like you're doubting the customer publicly; it's best addressed privately.
tips:
  - "Always respond before the deadline, even if it's just the holding statement. 'No comment' in a tech publication story is almost always worse than a measured response."
  - "Never argue with a customer's characterization of events in the press. Respond to the facts, acknowledge what you can, and let the story tell itself."
  - "Ask the journalist what specifically they want to verify. Often they have one or two factual questions and your statement can answer those directly."
  - "Coordinate with legal before sharing any on-background context — especially anything related to a customer who is threatening legal action."
  - "Follow up after the story publishes: read it carefully, note any inaccuracies, and determine whether a correction request is warranted (rare but sometimes appropriate)."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - incident-postmortem-comms
  - legal-threat-response
  - apology-email
  - press-release
tags:
  - media
  - pr
  - crisis-communications
  - escalation
---
