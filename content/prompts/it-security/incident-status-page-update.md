---
title: "Draft a status page update during an active incident"
slug: incident-status-page-update
function: it-security
role: sre
description: "Write a calm, factual status page update during an active incident that tells customers what is broken, what you know, and when they will hear next, without over-promising."
useCase: "Use when an incident is underway and the on-call engineer needs to publish to the status page in under five minutes. Most status updates fail in one of two ways: too vague to be useful, or too specific and later contradicted. This prompt produces an update that holds up to a postmortem."
prompt: |
  You are a senior SRE who has run hundreds of incidents at companies with public status pages. Draft a status page update for an active incident.

  Incident context:
  - Service or surface affected: {{service}}
  - Customer-visible symptom: {{symptom}} (what they experience, not the cause)
  - Severity: {{severity}} (e.g., SEV1 full outage, SEV2 partial degradation)
  - Time incident detected: {{detected_at}}
  - Current incident phase: {{phase}} (Investigating, Identified, Monitoring, Resolved)
  - What we know about the cause (if anything): {{known_cause}}
  - What we have done so far: {{actions_taken}}
  - Next planned action and ETA: {{next_action}}
  - Time of next update commitment: {{next_update_time}}
  - Affected regions or customer segments (if known): {{affected_scope}}

  Write a status page update that:
  - Opens with a one-line description of the customer-visible symptom, not the technical cause
  - Names the affected service or surface using the same name customers see in their UI
  - States the current phase explicitly using the standard status page vocabulary (Investigating / Identified / Monitoring / Resolved)
  - Names the affected scope (regions, customer segments) if known, and explicitly says "scope is still being determined" if not
  - Says what action is in progress, in plain language an engineering manager at a customer can read in 10 seconds
  - Commits to a next update time that is realistic, not aspirational
  - Does not name root cause unless it has been confirmed by an engineer with eyes on the system
  - Does not apologize on behalf of the company beyond a brief acknowledgment — save the deeper apology for the postmortem
  - Does not blame a vendor by name unless leadership has signed off

  Output:
  1. A one-line headline (under 80 characters) suitable for the status page incident title
  2. The status update body (60 to 120 words)
  3. A 1-line internal note for the on-call channel flagging anything in the update that needs leadership review before publishing
variables:
  - "{{service}}"
  - "{{symptom}}"
  - "{{severity}}"
  - "{{detected_at}}"
  - "{{phase}}"
  - "{{known_cause}}"
  - "{{actions_taken}}"
  - "{{next_action}}"
  - "{{next_update_time}}"
  - "{{affected_scope}}"
exampleInput: |
  service: Vectorline Query API (us-east-1)
  symptom: elevated 5xx error rates and timeouts on /v1/query
  severity: SEV2 partial degradation
  detected_at: 14:08 UTC
  phase: Identified
  known_cause: a recent index warm-up job is saturating a shared cache, confirmed by SRE
  actions_taken: rolled back the warm-up job, scaling cache replicas
  next_action: monitor error rate, expect recovery within 20 minutes
  next_update_time: 15:00 UTC
  affected_scope: customers querying indexes in us-east-1; eu-west-2 unaffected
exampleOutput: |
  Headline: Elevated errors on Query API in us-east-1

  Update (Identified — 14:35 UTC):

  Customers using the Query API in us-east-1 are seeing elevated 5xx errors and slow responses on /v1/query. eu-west-2 is not affected.

  We have identified the cause as a recent internal job that was overloading a shared cache layer. We have rolled the job back and are scaling cache capacity now. Error rates are trending down.

  We expect full recovery within 20 minutes. The next update will be posted by 15:00 UTC, sooner if the situation changes.

  Thanks for your patience while we work through this.

  Internal note: confirms cause and rollback are real before publishing — current draft commits us to "identified" and "rolled back," which the on-call should verify in Datadog before pushing to status.io.
tips:
  - "Never publish 'identified' before an engineer has eyes on the system and a confirmed cause. Walking back from 'identified' to 'investigating' is worse than starting at 'investigating' for an extra 10 minutes."
  - "Always name the next update time. Customers can wait 30 minutes if they know they will get an update; they cannot wait 10 minutes in silence."
  - "Use the same service name customers see in your UI. 'Query API' not 'queryd-prod-east'."
  - "Keep a small library of canonical phrases for each phase and feed them back to Claude in the input. Consistency across incidents builds customer trust over time."
  - "After the incident, save the final published updates and run a retrospective prompt that compares them against the timeline. The gaps are where your incident comms playbook needs work."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - apology-email
  - escalation-decision-framework
  - retrospective-summary
tags:
  - saas
  - incident
  - status-page
  - sre
  - reliability
---
