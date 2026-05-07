---
title: "Write a sincere apology email for a product outage or error"
slug: apology-email
function: customer-service
role: support
description: "Generate a professional, accountable apology email for a product outage, data error, or service failure that rebuilds trust without being defensive."
useCase: "Use this prompt when you need to communicate a service failure to affected customers. A well-crafted apology email reduces churn after incidents — customers forgive mistakes faster when the company owns them clearly and explains what's being done differently."
prompt: |
  You are a customer communications expert. Write a sincere, professional apology email for a service failure.

  Incident details:
  - Company name: {{company_name}}
  - Product/service: {{product_name}}
  - What happened (the incident): {{incident_description}}
  - When it started and when it was resolved: {{incident_timeline}}
  - Who was affected: {{affected_customers}} (e.g., all customers, customers in a specific tier, customers in a region)
  - Impact on customers: {{customer_impact}} (what they couldn't do, what data was affected, etc.)
  - Root cause (if known and appropriate to share): {{root_cause}}
  - What you did to fix it: {{fix_description}}
  - What you're doing to prevent it from happening again: {{prevention_steps}}
  - Any compensation or goodwill gesture being offered: {{compensation}}
  - Sender name and title: {{sender_name}}, {{sender_title}}

  Write an apology email that:
  - Subject line: clear and honest — not evasive. "We had an outage" not "Important service update."
  - Opens with a direct acknowledgment of what happened — no preamble, no "hope this finds you well"
  - Takes clear accountability — uses "we" not "the system" or passive voice excuses
  - Explains the impact briefly and honestly
  - Shares the root cause if appropriate (transparency builds trust)
  - Describes what was done to fix it and what's being changed to prevent recurrence
  - Includes any compensation or gesture
  - Closes with a genuine commitment, not a platitude
  - Is under 300 words
  - Is signed by a specific person, not "The [Product] Team"

  Do not include: over-apologizing (saying "sorry" more than twice), promises that are not realistic, marketing language, or minimizing language ("minor inconvenience").
variables:
  - "{{company_name}}"
  - "{{product_name}}"
  - "{{incident_description}}"
  - "{{incident_timeline}}"
  - "{{affected_customers}}"
  - "{{customer_impact}}"
  - "{{root_cause}}"
  - "{{fix_description}}"
  - "{{prevention_steps}}"
  - "{{compensation}}"
  - "{{sender_name}}"
  - "{{sender_title}}"
exampleInput: |
  company_name: Anchor Analytics
  product_name: Anchor Analytics platform
  incident_description: a database caching failure caused dashboards to be unavailable or return stale data
  incident_timeline: started at 9:14am ET on April 15, resolved at 11:47am ET — approximately 2.5 hours
  affected_customers: all Professional and Enterprise customers (approximately 200 accounts)
  customer_impact: dashboards showed either a loading error or data from the previous day rather than live data; exports and API access were unaffected
  root_cause: a routine cache deployment failed silently, causing the cache layer to serve stale data instead of routing to the live database
  fix_description: engineering team identified the failure at 9:42am, rolled back the deployment, and rebuilt the cache layer from the live database
  prevention_steps: adding automated cache validation checks to our deployment pipeline and implementing alerting that catches silent cache failures within 5 minutes
  compensation: 5 days of service credit applied to affected accounts
  sender_name: Elena Vasquez
  sender_title: CEO, Anchor Analytics
exampleOutput: |
  Subject: This morning's outage — what happened and what we're changing

  On Tuesday morning between 9:14am and 11:47am ET, Anchor Analytics dashboards were unavailable or showing stale data for Professional and Enterprise customers. I want to be direct with you about what happened.

  **What happened:** A routine cache deployment failed silently. Instead of catching the failure and alerting us, our system continued serving data from the previous day's cache rather than routing to our live database. Exports and API access worked normally throughout — but dashboards, which is how most teams use Anchor, did not.

  **How we fixed it:** Our engineering team identified the failure at 9:42am and rolled back the deployment. By 11:47am, all dashboards were restored to live data.

  **What we're changing:** We're adding automated cache validation to our deployment pipeline so a failure like this triggers an immediate alert rather than going undetected. We're also setting a 5-minute detection threshold for any cache discrepancy going forward.

  **A gesture:** We've applied 5 days of service credit to your account. You'll see this reflected in your next billing cycle without needing to do anything.

  I'm sorry this happened during business hours, during what was for many of you a critical part of the workday. We'll do better.

  If you have questions or were impacted in a way I haven't addressed, reply to this email and I'll respond personally.

  Elena Vasquez
  CEO, Anchor Analytics
tips:
  - "Send the apology within 24 hours of resolution. The longer you wait, the more the silence compounds the damage."
  - "The 'what we're changing' section is the most trust-building part of the email. Vague promises ('we're improving our systems') are worse than no promise. Be specific."
  - "Don't say sorry more than once or twice — it begins to sound performative. One genuine acknowledgment carries more weight than three apologies."
  - "Never use passive voice to describe the incident ('an error occurred,' 'data was impacted'). Passive voice signals that you're avoiding accountability."
  - "If you have a status page, link to the incident postmortem. Customers who want more detail will find it; others will appreciate the transparency."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - ticket-response-draft
  - incident-postmortem-comms
  - de-escalation-response
tags:
  - apology
  - outage
  - customer-service
  - trust
  - communications
---
