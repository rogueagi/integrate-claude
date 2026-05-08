---
title: "Build a data breach response plan and runbook"
slug: data-breach-response-plan
function: legal
role: compliance
description: "Generate a clear, role-mapped data breach response plan that the security, legal, and comms teams can actually execute under pressure — not a 40-page binder no one reads."
useCase: "Use this when standing up an incident response program, after a near-miss has exposed gaps, or when a customer's procurement review asks for the runbook. The plan output is structured around what people actually do in the first 4, 24, and 72 hours — including the legally critical 72-hour GDPR notification window."
prompt: |
  You are an experienced privacy and security counsel who has led incident response at SaaS companies. Build a data breach response plan and runbook.

  Context:
  - Company size and stage: {{company_size_stage}}
  - Industry and regulatory profile: {{industry_regulatory}} (e.g., B2B SaaS, healthcare, financial services, EU exposure, US-only)
  - Data types processed: {{data_types}} (e.g., business contact info, behavioral data, financial data, PHI, biometric)
  - Existing IR program maturity: {{existing_program}} (none / informal / formal)
  - Key stakeholders by name and role: {{stakeholders}}
  - Notification regimes the company is subject to: {{notification_regimes}} (e.g., GDPR 72-hour, US state laws, CCPA, sector-specific)

  Output:

  1. **Plan summary (1 page)** — Purpose, scope, when this plan activates (and when it doesn't — distinguish from generic security incidents).

  2. **Severity classification** — Tiers (Sev 1, 2, 3) with concrete examples of each. Avoid ambiguity.

  3. **Roles and responsibilities (RACI)** — For: Incident Commander, Privacy Lead, Security Lead, Comms Lead, Legal, Engineering on-call, Customer Success Lead, CEO/exec sponsor. State who is primary, secondary, and what they actually do in hour 1, hour 24, hour 72.

  4. **First-4-hour runbook** — Numbered checklist. Triage, containment, evidence preservation, initial scope assessment, stakeholder notification (internal).

  5. **First-24-hour runbook** — Forensic scoping, customer impact assessment, draft customer communication, regulator notification readiness, executive briefing cadence.

  6. **First-72-hour runbook** — Regulator notifications (GDPR Art. 33, applicable state laws), customer notifications, public communication if applicable, ongoing investigation cadence.

  7. **Notification decision tree** — When to notify regulators, customers, end users, the public. Include thresholds.

  8. **Communication templates** — Templates for: internal Sev 1 notification, customer notification (general), regulator notification (GDPR), public statement (if applicable).

  9. **Post-incident review** — Structure for blameless post-mortem within 30 days.

  10. **What to drill** — Tabletop exercise scenarios and frequency.

  11. **Disclaimer** — Plain-English note that breach notification laws are jurisdictional and counsel review is required.
variables:
  - "{{company_size_stage}}"
  - "{{industry_regulatory}}"
  - "{{data_types}}"
  - "{{existing_program}}"
  - "{{stakeholders}}"
  - "{{notification_regimes}}"
exampleInput: |
  company_size_stage: 350-person Series C B2B SaaS
  industry_regulatory: B2B analytics; selling in US and EU; subject to GDPR, CCPA, state breach notification laws (50 states), and contractual SLAs in customer DPAs
  data_types: Customer end-user behavioral data, business contact info, some PII (email/name) sent as user properties, no PHI, no payment card data
  existing_program: Informal — security has incident response for security events; no privacy-specific runbook for breach notification flow
  stakeholders: CEO Asha Patel; CTO Marcus Lin; VP Eng Devon Park; Privacy Lead (newly designated) Sara Cohen; Security Lead Ahmed Rashid; VP Marketing/Comms Jenna Wu; General Counsel (fractional) Liam O'Connor; CS Lead Priya Shah
  notification_regimes: GDPR Article 33 (72-hour regulator notification), CCPA (significant California user impact), all US state breach notification laws (some require notification to AG; thresholds vary), customer DPA notification windows (most are 24–48 hours)
exampleOutput: |
  # Data Breach Response Plan and Runbook
  ## Cresta Insights — v1.0

  ## 1. Plan summary

  This plan governs the company's response to a confirmed or suspected unauthorized access, acquisition, disclosure, or loss of Personal Data — what GDPR calls a "Personal Data Breach." It is distinct from the broader Security Incident Response Plan: every Personal Data Breach is a security incident, but not every security incident triggers this plan.

  **Activation:** Triggered the moment Security Lead or Privacy Lead has a reasonable belief that personal data has been (or may have been) accessed, acquired, disclosed, or lost without authorization. Activation does NOT require certainty. Err on the side of activation.

  **Scope:** All systems and processes that handle Customer Data, end-user data, employee data, or contact data of business contacts.

  ## 2. Severity classification

  | Sev | Definition | Examples |
  |---|---|---|
  | **Sev 1** | Confirmed unauthorized access to personal data of >100 affected individuals OR any access to special-category data OR any incident likely to require regulator notification | Database exfiltration; misconfigured S3 bucket exposing customer event data; insider data theft |
  | **Sev 2** | Suspected or contained unauthorized access; <100 affected individuals; no clear regulator notification trigger | Phishing of single employee with limited data access; brief misconfiguration caught within minutes |
  | **Sev 3** | Privacy near-miss with no confirmed unauthorized access | Unauthorized access attempt blocked by access controls; lost device with encryption confirmed |

  ## 3. Roles and responsibilities (RACI)

  | Role | Person (default) | Primary in hour 1 | Hour 24 | Hour 72 |
  |---|---|---|---|---|
  | **Incident Commander** | Sara Cohen (Privacy Lead) — for Sev 1; Ahmed Rashid (Security Lead) — for security-only incidents that escalate | Owns the bridge, decisions, sequencing | Owns customer + regulator notification sequencing | Owns post-incident review kickoff |
  | **Privacy Lead** | Sara Cohen | Notification regime triage, GDPR clock starts | Drafts regulator and customer notifications | Files notifications with counsel sign-off |
  | **Security Lead** | Ahmed Rashid | Containment, evidence preservation, scope assessment | Forensic scoping, root cause | Containment confirmation, monitoring |
  | **Engineering on-call** | Devon Park's team rotation | Containment actions, system isolation | Forensic support, log preservation | Remediation engineering |
  | **Comms Lead** | Jenna Wu | Internal comms only (no external in hour 1) | Drafts customer comms with Privacy Lead | Public statement if scoped |
  | **CS Lead** | Priya Shah | Briefed but not engaged externally | Owns customer outreach for affected accounts | Manages ongoing customer dialogue |
  | **Legal (GC)** | Liam O'Connor | Notified for Sev 1; on-call for review | Reviews regulator notification draft | Signs off on regulator filings |
  | **Executive sponsor** | Asha Patel (CEO), Marcus Lin (CTO) | Notified within 1 hour for Sev 1 | Daily brief at 9am PT | Public statement decision authority |

  Bridge for Sev 1 opens within 30 minutes of activation. Conducted in #ir-sev1 Slack channel + Zoom bridge; running notes in shared incident doc.

  ## 4. First-4-hour runbook

  1. **First responder** (Security on-call or Privacy Lead) declares severity tentatively. When in doubt, classify high.
  2. **Open incident channel** in #ir-sev1 (Sev 1) or #ir-sev2 (Sev 2). Page on-call: Security Lead, Privacy Lead, Incident Commander.
  3. **Start incident timeline doc** (template linked in #ir). Capture: detection time, detection source, affected systems, affected data categories, suspected scope, containment actions taken.
  4. **Preserve evidence.** Snapshot affected systems before remediation. Preserve logs (CloudTrail, application logs, access logs). Do not modify or delete.
  5. **Containment.** Cut access. Rotate credentials. Disable affected accounts. Document each action with timestamp.
  6. **Initial scope assessment.** What data? How many individuals? What jurisdictions? Which customers? Use rough estimates; precision comes later.
  7. **Internal escalation.** CTO and CEO notified within 1 hour for Sev 1. GC and external counsel within 2 hours for Sev 1.
  8. **Notification clock starts.** GDPR Article 33 72-hour clock begins at the moment of becoming "aware" — document this moment carefully. (Awareness ≠ certainty; reasonable belief of breach starts the clock.)
  9. **No external communication** in the first 4 hours unless an active customer is detecting the issue concurrently.

  ## 5. First-24-hour runbook

  1. **Forensic scoping** (Security Lead with engineering and external forensics if engaged). Output: confirmed affected data categories, confirmed individual count by jurisdiction, time window of unauthorized access.
  2. **Customer impact assessment** (Privacy Lead with CS). For each affected customer: which of their end users impacted? Which DPAs apply? What notification window does each DPA require?
  3. **Regulator notification readiness** (Privacy Lead with GC). Identify applicable regulators: GDPR Lead Supervisory Authority (if cross-border in EU), state AGs in US (per state law thresholds), sector regulators if applicable.
  4. **Draft customer notification** (Privacy Lead and Comms Lead). Use Template B below. Do not send yet.
  5. **Daily executive brief.** 9am PT calendar. Status, actions in 24h, decisions needed.
  6. **Decision: when to notify customers.** Default: within the contractual SLA in each DPA, typically 24–48 hours from awareness. Earlier if scope is confirmed; later only if law-enforcement or counsel-advised hold.

  ## 6. First-72-hour runbook

  1. **Regulator notification.** GDPR Article 33 requires notification to the lead supervisory authority within 72 hours of awareness, unless the breach is "unlikely to result in a risk to the rights and freedoms of natural persons." Counsel signs off on this determination. Use Template C.
  2. **Customer notification.** All affected customers notified per their DPA contractual windows. Template B, customized per customer's data exposure.
  3. **End-user notification.** If risk is high, end users may need to be notified directly. Coordinate with customer (controller) — typically the customer notifies their end users; the company supports.
  4. **Public statement.** Determined by Sev 1 sponsor (CEO) with counsel and Comms Lead. Default: public statement if more than [TBD threshold — recommend 10,000 individuals or any special-category data] affected. Otherwise, customer-only.
  5. **State AG notifications.** Per state statutes (varies by state — 47 require AG notification at thresholds ranging from 250 to 1,000 affected residents). Counsel handles filings.
  6. **Ongoing investigation cadence.** Daily standup at 9am PT for the first 7 days, then twice-weekly until closure.

  ## 7. Notification decision tree

  - **Confirmed unauthorized access to personal data?** Yes → continue. No → likely Sev 3, document and close.
  - **Risk to rights and freedoms of individuals?** Yes → GDPR notification within 72 hours. No → document the reasoned determination, with GC sign-off.
  - **Customer DPA in scope?** Yes → notify per DPA window (typically 24–48 hours). Always.
  - **State law threshold met?** Yes → notify state AGs and individuals per state statute. (Most states: notification "without unreasonable delay" + AG threshold.)
  - **High risk (sensitive data, large scope, identifiable harm)?** Consider direct end-user notification through controller, public statement, credit monitoring offer.

  ## 8. Communication templates

  ### Template A — Internal Sev 1 notification
  > **[Sev 1] Incident declared at [time PT]**
  > Affected: [systems / data category]. Estimated scope: [N] individuals. Containment status: [in progress / contained]. Bridge: [Slack channel + Zoom]. Incident Commander: [name]. Next exec brief: [time]. Do not discuss outside #ir-sev1 until further notice.

  ### Template B — Customer notification (24–48h after awareness)
  > Subject: Important security update regarding your Cresta Insights account
  >
  > [Customer name],
  >
  > On [date and time], Cresta detected unauthorized access to a system that processes data associated with your account. Below is what we know, what we've done, and what we're doing next.
  >
  > **What happened:** [Plain-English description.]
  > **Data affected:** [Categories. Be specific. If end-user behavioral data with email IDs, say so.]
  > **What we have done:** [Containment actions, with timestamps.]
  > **What we are doing:** [Forensic investigation, remediation, regulator notification status.]
  > **What you should consider doing:** [Specific actions for the customer to take, including end-user notification if applicable. Refer to their DPA obligations.]
  > **Contact:** [Named privacy contact + escalation path.]
  >
  > We will provide a written update within 7 days and a final post-incident report within 30 days. We deeply regret this incident and recognize the trust you have placed in us.

  ### Template C — Regulator notification (GDPR Article 33)
  > [Use the supervisory authority's prescribed form when available. Cover: nature of breach, categories and approximate number of data subjects, categories and approximate number of records, contact point, likely consequences, measures taken or proposed. Counsel finalizes language.]

  ### Template D — Public statement
  > [Drafted by Comms Lead with Privacy Lead and counsel. Acknowledges incident, summarizes scope and remediation, names contact for affected individuals. Approved by CEO before release.]

  ## 9. Post-incident review

  Within 30 days of incident closure:
  - Blameless post-mortem facilitated by someone outside the IR team
  - Timeline reconstruction
  - What worked, what didn't
  - Root cause and contributing factors
  - 5–10 corrective actions with owners and dates
  - Plan update if necessary

  Output is shared with the exec team and (in summary form) with affected customers.

  ## 10. What to drill

  Quarterly tabletop exercises rotating across:
  - **Q1 — External breach via vendor:** A sub-processor reports a breach exposing our customer data
  - **Q2 — Insider exfiltration:** Departing employee took customer data
  - **Q3 — Cross-border GDPR scenario:** EU customer data exposed; lead supervisory authority identification
  - **Q4 — Public statement scenario:** Large-scope incident requiring public communication

  Annual full-scale exercise involving exec team and external counsel.

  ## 11. Disclaimer

  Breach notification laws vary across US states, EU member states, and other jurisdictions, and they change regularly. This plan provides a framework, not legal advice. Each actual incident requires real-time consultation with privacy counsel familiar with the applicable jurisdictions. The 72-hour GDPR clock and the patchwork of US state laws have created real fines for companies that delayed notification while seeking certainty — when in doubt, escalate to counsel immediately.
tips:
  - "The GDPR 72-hour clock starts at 'awareness,' not 'certainty.' Document the moment of reasonable belief precisely; counsel can argue scope and risk later, but missing the clock has no defense."
  - "Distinguish this plan from your generic security incident response. Most security incidents are not personal data breaches — but treating every breach as just another security incident is the most common compliance failure."
  - "Test the plan with tabletop exercises quarterly. Plans no one has run cold are decorative documents under real pressure."
  - "Not legal advice. Breach notification regimes vary by jurisdiction and change frequently. Engage privacy counsel for any actual incident — this plan is the framework that lets counsel work fast, not a substitute for counsel."
  - "Maintain a pre-engaged outside counsel and forensics partner before you need them. Vetting under pressure adds days to the response."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - gdpr-readiness-memo
  - data-processing-agreement
  - compliance-gap-analysis
tags:
  - incident-response
  - data-breach
  - gdpr
  - privacy
  - runbook
---
