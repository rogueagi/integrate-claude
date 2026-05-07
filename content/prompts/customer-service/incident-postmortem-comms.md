---
title: "Write a customer-facing incident postmortem"
slug: incident-postmortem-comms
function: customer-service
role: escalations
description: "Generate a clear, honest customer-facing incident postmortem that explains what happened, what was done, and what's changing — in plain language."
useCase: "Use this prompt to write the customer-facing version of an incident postmortem after a significant service outage or failure. A well-written postmortem is a trust-building document — customers who receive clear, accountable explanations are more forgiving than those who receive vague non-answers."
prompt: |
  You are a technical communications specialist. Write a customer-facing incident postmortem for the following service incident.

  Incident details:
  - Product/service: {{product_name}}
  - Incident date and duration: {{incident_date}}, {{incident_duration}}
  - Who was affected: {{affected_scope}}
  - What customers experienced: {{customer_experience}}
  - Root cause (technical, written accessibly): {{root_cause}}
  - Detection: how and when you became aware {{detection}}
  - Response timeline: {{response_timeline}} (key events: when detected, when first action taken, when resolved)
  - Remediation: what you did to fix it {{remediation}}
  - Prevention steps: what you're doing so this doesn't happen again {{prevention}}
  - Known data or security impact (if any): {{data_impact}}

  Write a customer-facing postmortem with this structure:

  ## Summary
  3–5 sentences: what happened, who was affected, when it was resolved. Written in plain English, accessible to a non-technical reader.

  ## What Happened (Timeline)
  A timeline of key events in chronological order:
  - [Time]: [Event]
  Keep this factual and specific. Don't editorialize.

  ## Why It Happened
  A plain-language explanation of the root cause. Avoid blaming individuals. Explain the technical root cause in accessible terms — "A routine software update introduced a configuration error that prevented our servers from routing requests correctly" not "A null pointer exception in the load balancer's configuration management subsystem."

  ## How We Responded
  What your team did and in what order. Shows that you acted quickly and systematically.

  ## What We're Changing
  Concrete, specific prevention measures. Not "we'll improve our processes" — name the specific thing being added, changed, or removed.

  ## Apology and Commitment
  2–3 sentences. Genuine, not performative. Includes a commitment statement.

  Tone: transparent, technical enough to be credible, accessible enough for any customer to understand.
variables:
  - "{{product_name}}"
  - "{{incident_date}}"
  - "{{incident_duration}}"
  - "{{affected_scope}}"
  - "{{customer_experience}}"
  - "{{root_cause}}"
  - "{{detection}}"
  - "{{response_timeline}}"
  - "{{remediation}}"
  - "{{prevention}}"
  - "{{data_impact}}"
exampleInput: |
  product_name: Anchor Analytics
  incident_date: April 15, 2024
  incident_duration: 2 hours 33 minutes (9:14am – 11:47am ET)
  affected_scope: all Professional and Enterprise customers (approximately 200 accounts)
  customer_experience: dashboards showed a loading error or displayed data from the previous day rather than live data; exports and API were unaffected
  root_cause: a routine cache deployment failed silently — the cache layer started serving data from the previous day's snapshot instead of routing to the live database, and our monitoring system did not detect the divergence because it was checking cache health, not cache accuracy
  detection: detected at 9:42am via a customer-submitted support ticket (not our own monitoring — this is a gap we're addressing)
  response_timeline: |
    9:14am: Cache deployment completed (failure mode not yet detected)
    9:42am: First customer support ticket received reporting stale data
    9:47am: Engineering alerted and investigation begins
    10:15am: Root cause identified (cache serving stale data)
    10:22am: Cache rollback initiated
    11:47am: All dashboards restored to live data; incident resolved
  remediation: rolled back cache deployment and rebuilt cache layer from live database
  prevention: adding automated cache accuracy validation to deployment pipeline; implementing divergence alerting that checks data timestamps across cache and live database every 5 minutes; improving customer notification speed with a 30-minute incident communication SLA
  data_impact: no data was lost or corrupted; customers saw delayed data (previous day's), not incorrect data
exampleOutput: |
  ## Summary
  On April 15, 2024, Anchor Analytics experienced a 2-hour 33-minute service incident affecting all Professional and Enterprise customers. Dashboards displayed data from the previous day rather than live data. Exports and API access were unaffected throughout. The incident was fully resolved at 11:47am ET, and no data was lost or corrupted.

  ## What Happened (Timeline)
  - **9:14am ET:** A routine cache update was deployed
  - **9:42am ET:** Customer support ticket received reporting stale dashboard data — this was our first signal of the incident
  - **9:47am ET:** Engineering team notified and investigation begins
  - **10:15am ET:** Root cause identified
  - **10:22am ET:** Cache rollback initiated
  - **11:47am ET:** All dashboards restored to live data; incident resolved

  ## Why It Happened
  Our system uses a cache layer that stores a recent copy of your data to make dashboards load quickly. During a routine update to this cache system, a failure occurred that caused the cache to stop updating — and to serve data from the previous day's snapshot instead.

  The deeper problem: our monitoring was checking whether the cache was running (it was), but not whether the data inside the cache was current. As a result, we didn't detect the stale data ourselves — we found out when a customer told us.

  ## How We Responded
  When the first support ticket arrived at 9:42am, our on-call engineer was alerted within 5 minutes. Within 33 minutes, we had identified the root cause. We rolled back the cache deployment and rebuilt the cache from our live database — a process that took approximately 90 minutes to propagate fully across all customer accounts.

  ## What We're Changing
  Three specific changes are being made:

  1. **Cache accuracy validation:** Every deployment to our cache system will now include an automated check that compares data timestamps between the cache and live database. A divergence of more than 15 minutes will block deployment automatically.

  2. **Divergence alerting:** We're adding a continuous monitor that checks cache vs. live database timestamp alignment every 5 minutes. Any divergence triggers an immediate engineering alert — without waiting for a customer report.

  3. **Faster incident communication:** We've established a 30-minute internal SLA to post a customer-facing status update when any degradation is detected. You should hear from us before you notice something is wrong.

  ## Apology and Commitment
  We're sorry for the impact this caused — especially for customers who had important meetings or reporting cycles that morning. Finding out through a customer support ticket, rather than our own monitoring, is a gap that should not have existed.

  We're committed to being the first to know when something isn't working, and to communicating with you faster than we did this time.
tips:
  - "The most trust-building sentence in a postmortem is often the honest admission of a monitoring gap: 'We found out because a customer told us.' Owning this builds more credibility than any amount of technical explanation."
  - "The timeline should include when the first customer reported the issue — this is often the most uncomfortable line to include, but it demonstrates honesty about detection gaps."
  - "The 'What We're Changing' section must be specific. 'We're improving our monitoring' is not a change — 'we're adding a cache accuracy check to every deployment' is."
  - "Send this document to all affected customers within 48 hours of resolution, linked from a status page entry. Customers who've experienced an outage and received a thorough postmortem have higher retention than those who haven't."
  - "Share the internal (engineering) postmortem with your engineering team separately — the customer-facing version should omit internal blame language, specific engineer names, and implementation details that would create liability."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - apology-email
  - executive-escalation-email
  - de-escalation-response
tags:
  - postmortem
  - incident
  - transparency
  - customer-communications
  - trust
---
