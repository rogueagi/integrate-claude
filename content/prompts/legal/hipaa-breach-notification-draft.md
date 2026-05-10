---
title: "Draft a HIPAA breach notification consistent with 45 CFR 164.404"
slug: hipaa-breach-notification-draft
function: legal
role: compliance
description: "Generate a HIPAA breach notification letter to affected individuals that meets the content requirements of the HHS Breach Notification Rule at 45 CFR 164.404."
useCase: "Use this prompt when a covered entity or business associate has confirmed a reportable breach of unsecured protected health information and needs to draft individual notifications. The HHS Breach Notification Rule prescribes specific content elements; missing any of them creates regulatory exposure. This prompt produces a draft that addresses each required element and is structured for legal and compliance review."
prompt: |
  You are a privacy and compliance specialist at {{covered_entity_name}} drafting individual breach notifications under the HHS Breach Notification Rule (45 CFR 164.400 to 164.414). The notification must be reviewed and approved by privacy counsel before issuance.

  Inputs:
  - Covered entity or business associate name: {{covered_entity_name}}
  - Date breach was discovered: {{discovery_date}}
  - Date of the breach (or window): {{breach_date}}
  - Brief description of what happened: {{incident_description}}
  - Types of unsecured PHI involved: {{phi_types}} (e.g., names, dates of birth, SSNs, diagnoses, treatment records, account numbers, etc.)
  - Number of individuals affected: {{individuals_affected}}
  - Steps the entity is taking to investigate, mitigate harm, and protect against further breaches: {{response_actions}}
  - Steps individuals should take to protect themselves: {{individual_actions}}
  - Contact information (toll free number, email, website, postal address): {{contact_info}}
  - Any law enforcement delay direction (yes or no, and details if yes): {{law_enforcement_delay}}

  Produce a draft notification with the following content elements required by 45 CFR 164.404(c)(1):

  ## Letter
  - Date and recipient block (placeholder for mail merge)
  - Salutation
  - **Paragraph 1 — A brief description of what happened.** Include the date of the breach and the date of discovery if known. Do not include speculative content.
  - **Paragraph 2 — Description of the types of unsecured PHI involved in the breach** (e.g., full name, date of birth, Social Security number, medical record number, diagnosis information). Be specific about types but do not include actual identifiers.
  - **Paragraph 3 — Steps individuals should take to protect themselves from potential harm** resulting from the breach. Where SSN or financial information was involved, include credit monitoring guidance and the right to a fraud alert and free credit report.
  - **Paragraph 4 — A brief description of what the covered entity is doing** to investigate the breach, mitigate harm to individuals, and protect against further breaches.
  - **Paragraph 5 — Contact procedures.** Include a toll free phone number, email address, website, or postal address for individuals to ask questions or learn additional information.
  - Closing
  - Signature block of a designated official

  Constraints:
  - Plain language at an 8th to 9th grade reading level
  - Avoid speculation about cause, attribution, or scope beyond what investigation has confirmed
  - Avoid promotional or defensive language
  - Do not waive or limit rights of affected individuals
  - Include the words 'protected health information' so the notice is identifiable to recipients and regulators

  After the letter, include:

  ## Distribution and timing reminders
  - Notice must be sent without unreasonable delay and in no case later than 60 days after discovery (45 CFR 164.404(b))
  - Substitute notice required if contact information is insufficient or out of date for 10 or more individuals (164.404(d)(2))
  - Media notice required if the breach affects more than 500 residents of a state or jurisdiction (164.406)
  - HHS Secretary notification (immediately if greater than 500 individuals; annually if fewer) (164.408)
  - Document the risk assessment and notification decisions in the breach log

  ## Items requiring counsel decision
  List specific items that require legal review before sending: facts that may be inaccurate, scope estimates that depend on ongoing investigation, state-law overlays (e.g., state breach notification statutes that impose stricter timelines or content), and any law enforcement delay determination.
variables:
  - "{{covered_entity_name}}"
  - "{{discovery_date}}"
  - "{{breach_date}}"
  - "{{incident_description}}"
  - "{{phi_types}}"
  - "{{individuals_affected}}"
  - "{{response_actions}}"
  - "{{individual_actions}}"
  - "{{contact_info}}"
  - "{{law_enforcement_delay}}"
exampleInput: |
  covered_entity_name: Pinecrest Behavioral Health
  discovery_date: April 8 2026
  breach_date: between March 12 and April 7 2026
  incident_description: An employee email account was accessed by an unauthorized third party after a successful phishing attempt. The mailbox contained patient correspondence including appointment confirmations, billing inquiries, and provider messages.
  phi_types: full name, date of birth, address, phone, appointment dates, provider name, treatment program type, and for some patients, the last four digits of the insurance ID
  individuals_affected: approximately 2,140 patients
  response_actions: |
    - Mailbox access terminated and credentials reset on April 7
    - Forensic investigation conducted by Maple Cyber Forensics
    - Mandatory phishing-resistant MFA rolled out organization-wide
    - Additional staff training on email security
    - Reported to FBI on April 10
  individual_actions: |
    - Be alert to suspicious calls or emails referencing your appointments or care
    - Review insurance Explanation of Benefits statements for unfamiliar charges
    - Place a free fraud alert with the credit bureaus
    - Request a free credit report at annualcreditreport.com
  contact_info: |
    Toll free: 1-800-555-0188 (Monday to Friday, 8 a.m. to 8 p.m. ET)
    Email: privacy@pinecresthealth.example
    Website: pinecresthealth.example/notice
    Mail: Privacy Officer, Pinecrest Behavioral Health, 220 Elm Lane, Asheville NC 28801
  law_enforcement_delay: No active law enforcement delay direction
exampleOutput: |
  ## Letter

  [Date]

  [Recipient Name]
  [Recipient Address]

  Dear [Recipient First Name]:

  We are writing to inform you of an event that may have involved your protected health information.

  **What happened.** Between March 12 and April 7 2026, an unauthorized third party gained access to a Pinecrest Behavioral Health employee email account after the employee responded to a phishing message. We discovered the unauthorized access on April 7 2026 and immediately terminated the access and began an investigation. The investigation is ongoing, but our review to date indicates that messages in this mailbox were potentially viewed.

  **What information was involved.** The email account contained correspondence relating to patient care and billing. The types of protected health information that may have been involved include full name, date of birth, address, phone number, appointment dates, the name of your provider, and the type of treatment program. For some patients, the last four digits of the insurance identification number were also present in messages. Social Security numbers, full insurance identification numbers, and clinical records held in our medical record system were not in this mailbox and were not affected.

  **What you can do to protect yourself.** Although we have no evidence of misuse of your information at this time, we recommend the following precautions:
  - Be alert to suspicious phone calls or emails that reference your appointments or care at Pinecrest Behavioral Health.
  - Review insurance Explanation of Benefits statements for charges you do not recognize.
  - You have the right to place a free fraud alert with the three nationwide credit bureaus (Equifax, Experian, TransUnion).
  - You are entitled to a free credit report from each bureau every 12 months. You can request one at annualcreditreport.com or by calling 1-877-322-8228.

  **What we are doing.** We have terminated the unauthorized access, reset the affected account, and engaged Maple Cyber Forensics to conduct a full forensic review. We have rolled out phishing-resistant multifactor authentication across the organization and provided additional staff training on email security. We have reported this incident to the Federal Bureau of Investigation and to applicable regulators as required.

  **For more information.** A dedicated assistance line is available to answer your questions:
  - Phone: 1-800-555-0188 (Monday to Friday, 8 a.m. to 8 p.m. Eastern)
  - Email: privacy@pinecresthealth.example
  - Website: pinecresthealth.example/notice
  - Mail: Privacy Officer, Pinecrest Behavioral Health, 220 Elm Lane, Asheville NC 28801

  We take the privacy of your information seriously and apologize for any concern this notice may cause.

  Sincerely,

  [Name]
  Privacy Officer
  Pinecrest Behavioral Health

  ## Distribution and timing reminders
  - Send without unreasonable delay and no later than 60 days after April 8 2026 (i.e., by June 7 2026) per 45 CFR 164.404(b).
  - Substitute notice (website posting plus media or toll-free number) is required if 10 or more individuals have insufficient or out-of-date contact information per 164.404(d)(2).
  - This breach affects more than 500 individuals; notice to prominent media outlets in the relevant state(s) is required per 164.406, and notice to the HHS Secretary is required contemporaneously per 164.408(b).
  - Log the incident, risk assessment, and notification decisions in the breach register and retain the documentation per 164.530(j).

  ## Items requiring counsel decision
  - Confirm the population of affected individuals after final forensic review; revise headcount references in the media notice and HHS notice if the number changes.
  - Confirm that the investigation has not identified other categories of PHI in the mailbox (e.g., free-text references to clinical content) that would require additional content elements in the notice.
  - State law overlays: North Carolina, and any other state where affected individuals reside, may impose stricter timing or content requirements; counsel to confirm by jurisdiction.
  - Determine whether credit monitoring is offered. The Rule does not require it, but state-law expectations and policy precedent vary; counsel to advise.
  - Confirm there is no active law enforcement delay direction in writing before issuance.
  - Substantive accuracy of factual statements about the incident, response, and forensic findings is the responsibility of counsel and the privacy officer.
tips:
  - "The HHS Breach Notification Rule lists five required content elements at 45 CFR 164.404(c)(1). Verify each is present before sending. Missing elements is the most common compliance gap."
  - "Avoid speculation. If forensics has not confirmed the scope of access, say so. Premature attribution or scope claims that prove wrong create new exposure."
  - "Plain language matters here. The Rule expects communication that affected individuals can understand. A letter written in legalese fails the spirit of the Rule even if it ticks every box."
  - "Check state law overlays. Many states impose stricter timelines, additional content, or attorney general notice requirements that layer on top of HIPAA."
  - "This prompt produces a draft. All HIPAA breach notifications must be reviewed and approved by qualified privacy counsel and the privacy officer before issuance. The Rule, related state laws, and any law enforcement delay direction are fact-specific."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - data-breach-response-plan
  - compliance-gap-analysis
  - gdpr-readiness-memo
tags:
  - healthcare
  - hipaa
  - compliance
  - breach-notification
  - privacy
---
