---
title: "Customer-facing communication about a data incident"
slug: data-incident-customer-comms
function: pr-comms
role: crisis-comms
description: "Notify customers about a data incident with the precision required by regulators and the directness required by trust."
useCase: "Use when notifying customers about a confirmed or suspected data incident — exposure, exfiltration, unauthorized access, or vendor compromise. Output meets the substantive requirements of GDPR Article 33/34 and US state breach laws while reading as written by humans, not by lawyers."
prompt: |
  You are a senior security communications director who has handled disclosure of data incidents at SaaS companies, financial institutions, and healthcare platforms. Draft a customer-facing notification for {{company_name}} about {{incident_summary}}.

  Inputs:
  - Incident facts (confirmed): {{confirmed_facts}}
  - Incident facts (suspected, not yet confirmed): {{suspected_facts}}
  - Categories of data involved: {{data_categories}} (PII, credentials, payment, health, support content, metadata)
  - Time window of incident: {{time_window}}
  - Detection time and detection method: {{detection_details}}
  - Containment status: {{containment_status}}
  - Regulatory triggers: {{regulatory_triggers}} (GDPR, US state laws, HIPAA, PCI, sectoral regulators)
  - Customer segment receiving this notice: {{customer_segment}}
  - What we want each customer to do: {{customer_actions}}
  - Support resources: {{support_resources}} (dedicated email, hotline, identity protection, third-party forensic resources)
  - Legal review status: {{legal_status}}
  - Audience: {{audience}} (technical buyer, end user, regulated industry contact)

  Structure:

  1. SUBJECT LINE
  Specific. "Notice of a data security incident affecting your Linden AI account" — not "An important update."

  2. WHAT HAPPENED
  Plain language. The incident, the time window, what was accessed or exposed, in three to five sentences.

  3. WHAT INFORMATION WAS INVOLVED
  A clear list. Specifically named categories. If certain categories were not involved, say so explicitly ("We have no indication that payment information was accessed").

  4. WHAT WE HAVE DONE
  The containment, the forensic engagement, the regulatory notifications submitted, the technical fix. Past tense. Concrete.

  5. WHAT YOU SHOULD DO
  A short, prioritized list of customer actions. If no action is needed, say so. Do not pad with generic security advice.

  6. WHAT WE WILL DO NEXT
  Future-tense commitments with timelines. The post-incident report, the third-party audit, the changes to prevent recurrence.

  7. WHO TO CONTACT
  A real human or a real team with a real email. Hours. Response time commitment. If the audience is regulated, the regulator-facing contact too.

  8. SIGN-OFF
  By a named individual — typically the CISO, CTO, or CEO depending on severity. Not "The Linden AI team."

  Voice and constraints:
  - Plain English. The reader has 90 seconds.
  - No "out of an abundance of caution" — overused and now reads as evasive.
  - Do not say "we have no evidence of misuse" if you also do not have logs to confirm misuse did not occur. Calibrate the assertion to the evidence.
  - If a regulatory deadline is binding (e.g., GDPR 72-hour), state internally what triggered the deadline so timing decisions are documented.
  - Provide the same factual content to all customer segments; tailor only the called-out actions and support resources.

  Output:
  1. The full notification (email-ready)
  2. A 3-bullet "internal coordination check" (legal sign-off needed, regulator submission status, customer-success talking points needed)
  3. A 2-bullet note on phrasing legal will most likely flag and the recommendation to hold or revise
variables:
  - "{{company_name}}"
  - "{{incident_summary}}"
  - "{{confirmed_facts}}"
  - "{{suspected_facts}}"
  - "{{data_categories}}"
  - "{{time_window}}"
  - "{{detection_details}}"
  - "{{containment_status}}"
  - "{{regulatory_triggers}}"
  - "{{customer_segment}}"
  - "{{customer_actions}}"
  - "{{support_resources}}"
  - "{{legal_status}}"
  - "{{audience}}"
exampleInput: |
  company_name: Linden AI
  incident_summary: A 75-minute multi-tenant routing error caused support conversations from 380 customer accounts to be visible to other Linden customers. No evidence of exfiltration but PII (end-user names, emails, conversation contents) was viewable cross-tenant.
  confirmed_facts: 75-minute window from 9:30am to 10:45am ET on April 22, 2026. 380 affected customer accounts. Cross-tenant visibility of support conversations confirmed via internal logs.
  suspected_facts: Whether any visible data was actually viewed by other customers (we see access patterns but not whether specific records were read).
  data_categories: End-user names, end-user emails, content of support conversations including any PII end users included in their messages. No payment, password, or authentication data involved.
  time_window: April 22, 2026, 9:30am ET to 10:45am ET (75 minutes).
  detection_details: Detected at 10:30am ET via internal anomaly monitoring on cross-tenant traffic patterns; confirmed and rolled back at 10:45am ET.
  containment_status: Fully contained. Deployment rolled back. Patch verified.
  regulatory_triggers: GDPR Article 33 supervisor authority notification submitted within 72 hours. Several US state breach laws may apply depending on resident geography of end users; state notifications are being prepared. No HIPAA or PCI exposure (no health or payment data in scope).
  customer_segment: All 380 affected customer accounts. Notification will be tailored slightly: top 50 by ARR get a separate email from the CEO offering a direct call.
  customer_actions: Review your end-user notification obligations to your own users. Use our incident page to download a per-account log of which conversations were exposed. Reach out to security@linden.ai with any questions.
  support_resources: security@linden.ai (24/7 during incident response, monitored hourly), CrowdStrike third-party forensic review, dedicated CSM outreach for top 50 accounts.
  legal_status: Outside counsel has reviewed and approved. They have flagged the "no evidence of exfiltration" phrasing and want it tightened.
  audience: Customer security and compliance contacts (technical), with copy to admin contacts.
exampleOutput: |
  Subject: Notice of a data security incident affecting your Linden AI account

  This message contains time-sensitive information about a data security incident affecting your Linden AI account. We are writing to give you the facts and the actions we recommend.

  WHAT HAPPENED
  On April 22, 2026, between 9:30am and 10:45am Eastern Time, a deployment to our customer support platform caused a multi-tenant routing error. During this 75-minute window, support conversations from your account were visible to other Linden customers using the platform. Our anomaly monitoring detected the unusual cross-tenant traffic pattern at 10:30am ET, and we rolled back the deployment at 10:45am ET. The incident has been fully contained.

  WHAT INFORMATION WAS INVOLVED
  The data that was visible cross-tenant included:
  - End-user names and email addresses present in your support conversations
  - The content of those conversations, including any personal information your end users included in their messages

  The following categories of data were not involved:
  - Payment information (Linden does not store payment information)
  - Account passwords or authentication credentials
  - Administrative settings or audit logs

  Our forensic logs show cross-tenant access patterns but do not confirm that specific records were read by other customers. We are not able to assert that no record was viewed; we can only confirm what the logs show.

  WHAT WE HAVE DONE
  - Rolled back the deployment and verified the patch in production.
  - Engaged CrowdStrike to conduct an independent forensic review.
  - Submitted notification to the relevant supervisory authority under GDPR Article 33 within the 72-hour window.
  - Prepared US state-level notifications for affected end-user residents and are submitting them on a state-by-state basis.
  - Notified affected customer accounts directly within 24 hours of containment.

  WHAT YOU SHOULD DO
  1. Review your obligations to notify your own end users. The list of conversations from your account that were involved is available at linden.ai/incident/[your-account-id]; this page is access-controlled to your admin contacts.
  2. If your end users include EU residents, your own GDPR Article 34 obligations may apply.
  3. Consider whether any sensitive content was present in the affected conversations and assess whether additional outreach to your end users is warranted.

  WHAT WE WILL DO NEXT
  - The CrowdStrike forensic report will be made available, with sensitive technical details redacted, by June 21, 2026.
  - A public post-incident report will be published on our blog within 14 days.
  - We have implemented a mandatory two-reviewer policy and canary deployment requirement for any change touching tenant isolation, effective immediately.

  WHO TO CONTACT
  - Security and incident questions: security@linden.ai (response within 4 business hours)
  - Regulator-facing questions: privacy@linden.ai
  - For our top 50 customers by usage, your customer success contact has scheduled a call this week. CEO Maya Okafor is also available for direct conversation.

  We are accountable for what happened, and we will continue to keep you informed as the forensic review concludes.

  — Aisha Devereaux, Chief Information Security Officer, Linden AI

  INTERNAL COORDINATION CHECK
  - Confirm outside counsel has signed off on the final language regarding GDPR Article 33 timing and the per-account incident page being access-controlled rather than email-attached.
  - Confirm with regulatory team that all US state submissions are queued and will fire on the same day as customer notification (or document why a phased schedule was chosen).
  - Customer success team needs talking points for the top-50 calls before this email goes out — including a one-pager of facts, the most likely customer questions, and an escalation path to security/CISO for technical questions.

  LEGAL FLAG
  - "Our forensic logs show cross-tenant access patterns but do not confirm that specific records were read" — counsel will likely push for "we have no evidence of unauthorized access." Hold the longer version: it accurately reflects the limits of the logs and is more defensible if the forensic report later reveals access was greater than initially scoped.
  - The June 21 CrowdStrike report date is a binding public commitment. Confirm CrowdStrike's engagement letter supports that delivery date in writing before this email goes out.
tips:
  - "Calibrate every assertion to the evidence you have. 'No evidence of exfiltration' is not the same as 'no exfiltration occurred.' Plain-English precision protects you in regulator review."
  - "Send the customer notification on a known cadence: top-tier customers first via direct call, then segmented email to the rest within hours. Customers finding out via Twitter is the worst case."
  - "Avoid 'as a result of an abundance of caution.' Regulators have heard it too many times and it now reads as boilerplate."
  - "Have the post-incident report date in writing before promising it publicly. Missing the second deadline turns a recoverable incident into a credibility loss."
  - "If the customer's end users may need to be notified, give the customer everything they need to do that — log of affected conversations, sample notification language, recommended timing. Help them be a good actor; it pays back."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - crisis-holding-statement
  - apology-statement-public
  - cofounder-letter-customer
tags:
  - data-incident
  - breach-notification
  - crisis
  - security-comms
  - regulatory
---
