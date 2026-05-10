---
title: "External communications draft for a government customer after a security incident"
slug: government-customer-comms-incident
function: pr-comms
role: crisis-comms
description: "Draft a clear, contractually appropriate notification to a government customer following a security incident, including scope, response actions, and required reporting commitments."
useCase: "Use this prompt when notifying a federal, state, or local government customer of a security incident affecting their data or service. It produces a draft that meets contractual notification expectations, communicates scope honestly, and sets a credible cadence for follow-up."
prompt: |
  You are the head of communications at a SaaS vendor that serves government customers. Draft an incident notification to a government customer.

  Customer and contract context:
  - Customer agency: {{agency}}
  - Contract or task order ID: {{contract_id}}
  - Authorization basis: {{authorization}} (e.g., FedRAMP-Moderate ATO, Agency ATO, state IT contract)
  - Notification clause and timeline in contract: {{notification_clause}} (e.g., "within 1 hour of confirmation under DFARS 252.204-7012", "within 24 hours under contract section X")
  - Recipient role: {{recipient_role}} (e.g., agency CIO, contracting officer, AOR)

  Incident facts (verified):
  - Date and time of incident detection: {{detection_time}}
  - Date and time of containment: {{containment_time}}
  - Nature of incident: {{nature}}
  - Systems affected: {{systems_affected}}
  - Data potentially impacted: {{data_impacted}} (categories only — no PII in this draft)
  - Scope determination status: {{scope_status}} (e.g., "scope confirmed", "scope under review")
  - Threat actor characterization: {{actor_characterization}} (only if known and confirmed)

  Response actions:
  - Containment steps taken: {{containment_actions}}
  - External parties engaged: {{external_parties}} (e.g., 3PAO, FBI, US-CERT/CISA)
  - Forensic posture: {{forensic_posture}}

  Forward commitments:
  - Next update timing: {{next_update}}
  - Designated point of contact for customer: {{poc_name}}, {{poc_title}}, {{poc_contact}}

  Produce a notification with:

  1. Subject line — clear, dated, references the contract and incident classification.
  2. Opening — one sentence stating the purpose of the notification and the contractual basis.
  3. What we know — facts only, no speculation, with detection and containment times.
  4. Scope determination — confirmed scope and what is still under review.
  5. Response actions — what we have done, what is in flight.
  6. External engagements — third parties involved, including any reports filed with US-CERT/CISA, FBI, or sector ISAC, if applicable.
  7. Customer impact and recommended actions — practical steps the customer's team should consider, if any.
  8. Next update — timing and channel.
  9. Designated POC — name, title, direct contact.

  Rules:
  - Lead with the contractual notification basis. Government recipients must see the regulatory hook in the first paragraph.
  - Do not speculate on threat actor identity or motive unless evidence is conclusive and cleared for sharing.
  - Distinguish "confirmed" from "under review" everywhere.
  - Avoid marketing language. No reassurances unsupported by facts ("we take security very seriously").
  - Do not include PII or specific account-level data in the body. Reference categories only.
  - Length: 350-550 words.

  Important: government incident notifications are governed by contractual terms (DFARS, FAR, FISMA, agency-specific clauses), federal reporting laws (e.g., CIRCIA), and in some cases state breach notification statutes. Always have qualified counsel and your contracting officer representative review the final notification before sending. Notification timing, mandatory reporting agencies (CISA, FBI, sector ISAC), and required content vary by contract and incident classification. This prompt produces a draft for review, not a compliant final notification.
variables:
  - "{{agency}}"
  - "{{contract_id}}"
  - "{{authorization}}"
  - "{{notification_clause}}"
  - "{{recipient_role}}"
  - "{{detection_time}}"
  - "{{containment_time}}"
  - "{{nature}}"
  - "{{systems_affected}}"
  - "{{data_impacted}}"
  - "{{scope_status}}"
  - "{{actor_characterization}}"
  - "{{containment_actions}}"
  - "{{external_parties}}"
  - "{{forensic_posture}}"
  - "{{next_update}}"
  - "{{poc_name}}"
  - "{{poc_title}}"
  - "{{poc_contact}}"
exampleInput: |
  agency: Department of Health and Human Services, Centers for Medicare & Medicaid Services
  contract_id: HHSM-500-2024-00021T, Task Order 04
  authorization: FedRAMP-Moderate Agency ATO
  notification_clause: incident notification within 24 hours per task order section H.6
  recipient_role: Contracting Officer's Representative (COR)
  detection_time: 2026-05-08 02:14 UTC
  containment_time: 2026-05-08 04:47 UTC
  nature: unauthorized access attempt against an administrative interface; one administrative session token re-used from a third-party stolen-credential dataset
  systems_affected: customer admin portal authentication path; no application data tier access observed
  data_impacted: no customer beneficiary data confirmed accessed; session metadata only
  scope_status: scope confirmed for application data; under review for adjacent shared services
  actor_characterization: not yet attributed
  containment_actions: rotated all admin session tokens; forced re-authentication for all admin accounts; deployed additional WAF rule; expanded SIEM correlation
  external_parties: US-CERT/CISA notified per CIRCIA; 3PAO notified for monitoring; no FBI engagement at this time
  forensic_posture: full forensic preservation in place, external IR firm engaged
  next_update: within 24 hours, by 2026-05-09 12:00 UTC
  poc_name: Marcus Bell
  poc_title: VP Security, Beacon Federal Solutions
  poc_contact: marcus.bell@beaconfedsolutions.com, (703) 555-0144 direct
exampleOutput: |
  Subject: Incident Notification — Contract HHSM-500-2024-00021T TO 04 — 2026-05-08

  Dear COR,

  Per task order section H.6, this notification is being issued within the 24-hour window following our confirmation of a security incident affecting systems supporting your contract. This is our initial notification; a follow-up will be provided within 24 hours.

  What we know
  - 2026-05-08 02:14 UTC: an unauthorized access attempt was detected against the administrative authentication path of the customer admin portal. The attempt re-used an administrative session token correlated with a third-party stolen-credential dataset.
  - 2026-05-08 04:47 UTC: the incident was contained.
  - Detection was via SIEM correlation rule; the anomalous session was terminated and access path closed within 2 hours and 33 minutes of detection.

  Scope determination
  - Confirmed: no access to application data tiers, including customer beneficiary records; session metadata only.
  - Under review: adjacent shared services within our authorization boundary; additional log review in progress.

  Response actions
  - Rotated all administrative session tokens
  - Forced re-authentication for all administrative accounts
  - Deployed an additional WAF rule blocking the attack vector
  - Expanded SIEM correlation rules
  - Full forensic preservation in place; external incident response firm engaged

  External engagements
  - US-CERT/CISA notified per CIRCIA reporting requirements
  - Our 3PAO has been notified for continuous monitoring oversight
  - No FBI engagement at this time; we will reassess based on forensic findings
  - Threat actor not yet attributed

  Customer impact and recommended actions
  No customer-side action is required at this time. We do not have evidence of data exfiltration. As a precaution, we recommend that any agency administrative users with our portal verify their MFA enrollment status; instructions are available in the admin user guide section 4.

  Next update
  We will provide our next written update by 2026-05-09 12:00 UTC. If we identify a material change in scope or impact before that time, we will notify you within one hour of confirmation.

  Designated point of contact
  Marcus Bell, VP Security, Beacon Federal Solutions
  marcus.bell@beaconfedsolutions.com
  (703) 555-0144 (direct)

  Sincerely,
  Marcus Bell
  VP Security
tips:
  - "Lead the first paragraph with the contractual basis. The COR or CIO needs to see the regulatory hook before reading anything else."
  - "Distinguish 'confirmed' from 'under review' on every line. Government readers will return to that distinction repeatedly."
  - "Never speculate on attribution. 'Not yet attributed' is a stronger statement than a guess."
  - "Federal incident notification timing and required content are governed by FAR, DFARS, FISMA, CIRCIA, and contract-specific clauses. Always have qualified counsel and your contracting officer representative review before sending."
  - "If your customer is also subject to state breach notification statutes (e.g., a state agency or covered entity), your draft may need to satisfy multiple regimes. This prompt produces a draft for review, not a compliant final notification."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - insider-risk-incident-narrative
  - federal-rfp-capability-statement
  - soc2-control-narrative-federal
tags:
  - federal
  - incident-response
  - crisis-comms
  - government
  - notification
---
