---
title: "Conduct a compliance gap analysis"
slug: compliance-gap-analysis
function: legal
role: compliance
description: "Identify gaps between an organization's current practices and a specific regulatory or compliance framework — prioritized by risk, with specific remediation steps for each gap."
useCase: "Use this prompt before a compliance audit, when entering a new market with regulatory requirements, when a new regulation takes effect, or when preparing for a security certification like SOC 2 or ISO 27001."
prompt: |
  You are a compliance attorney and advisor conducting a gap analysis. Assess the organization's current state against the applicable regulatory framework.

  **Organization:** {{organization}} (type of business, size, industry)
  **Compliance framework(s) to assess against:** {{framework}} (e.g., GDPR, HIPAA, SOC 2 Type II, ISO 27001, CCPA, PCI-DSS, FINRA)
  **Current practices and policies (describe what exists today):**
  {{current_practices}}
  **Data and systems in scope:** {{data_in_scope}} (what data is processed, what systems hold it)
  **Geographic scope:** {{geography}} (where you operate and where your customers/users are)
  **Known issues:** {{known_issues}} (compliance problems already identified)
  **Target date:** {{target_date}} (when do you need to be compliant — audit date, customer requirement deadline, etc.)

  Conduct a gap analysis with:

  ## Executive Summary
  Overall compliance posture (Substantial gaps / Moderate gaps / Minor gaps) and the most critical finding that needs immediate attention.

  ## Framework Overview
  Brief summary of the applicable framework and what it requires at a high level. Focus on requirements relevant to this organization.

  ## Gap Analysis

  For each requirement area, assess:
  - **Requirement:** What the framework requires
  - **Current state:** What the organization currently does
  - **Gap:** What's missing or insufficient
  - **Risk:** What could happen if this gap isn't closed (regulatory penalty, audit finding, data breach, etc.)
  - **Priority:** Critical (close before audit/deadline) / High (close within 30 days) / Medium (close within 90 days) / Low (close within year)
  - **Remediation steps:** Specific, actionable steps to close the gap
  - **Estimated effort:** T-shirt size (S/M/L/XL) — not a precise estimate, but directional

  ## Prioritized Remediation Roadmap

  A phased plan for closing all gaps:
  - **Phase 1 (Immediate — 0–30 days):** Critical and high-priority gaps
  - **Phase 2 (Near-term — 30–90 days):** Medium-priority gaps
  - **Phase 3 (Long-term — 90+ days):** Low-priority gaps and continuous improvement

  ## Evidence Requirements
  For audit readiness: what documentation and evidence needs to be collected to demonstrate compliance for each requirement.

  ## Ongoing Compliance Program Elements
  Beyond closing current gaps, what processes need to be established to maintain compliance over time.
variables:
  - "{{organization}}"
  - "{{framework}}"
  - "{{current_practices}}"
  - "{{data_in_scope}}"
  - "{{geography}}"
  - "{{known_issues}}"
  - "{{target_date}}"
exampleInput: |
  organization: Beacon HR — B2B SaaS company, 150 employees, sells HR engagement survey software to enterprises
  framework: GDPR
  current_practices: |
    - Privacy policy exists on website (last updated 2022)
    - Standard DPA template available but not always used with EU customers
    - Data stored in AWS us-east-1 (US only)
    - Employee data subject requests handled ad hoc by HR
    - No formal data inventory or record of processing activities (RoPA)
    - Incident response plan exists for security incidents but doesn't address GDPR breach notification
    - Third-party vendors used: OpenAI (recently added, no DPA executed), Stripe, Segment, Salesforce (all have DPAs)
    - No designated DPO (Data Protection Officer)
    - No regular privacy training for employees
  data_in_scope: |
    - EU employee data processed on behalf of enterprise customers (as data processor)
    - Limited EU marketing contact data (potential customers — as data controller)
    - Internal EU employee data (Beacon employees in UK and Germany — 3 employees)
  geography: US-based company; customers in US, EU, UK, Canada; 3 employees in EU (UK, Germany)
  known_issues: |
    - OpenAI added as sub-processor without DPA or customer notification
    - Data breach notification procedure doesn't address 72-hour GDPR requirement
    - Not sure if our storage in US-only AWS is compliant for EU data
  target_date: Enterprise customer audit in 90 days; ongoing compliance thereafter
exampleOutput: |
  ## Executive Summary

  **Compliance posture: Substantial gaps** — Beacon has foundational GDPR elements in place (privacy policy, DPA template, some vendor DPAs) but has critical gaps in three areas that must be resolved immediately: (1) OpenAI is processing EU data without a DPA and without customer notification — this is an active violation; (2) the data breach response process does not meet the 72-hour notification requirement; and (3) the RoPA (Record of Processing Activities) doesn't exist. The 90-day customer audit timeline is achievable if work begins immediately and is resourced appropriately.

  ---

  ## Framework Overview (GDPR Applicability)

  GDPR applies to Beacon in two roles:
  - **Data Processor:** When processing EU employee data on behalf of enterprise customers. Customers are the controllers; Beacon must comply with controller instructions, implement technical safeguards, assist with data subject rights, and notify of breaches.
  - **Data Controller:** For Beacon's own EU employee data (3 staff in UK/Germany) and any EU marketing/prospect data.

  **Extraterritorial reach:** Even though Beacon is US-based, GDPR applies because Beacon processes personal data of EU residents. Key obligations: lawful basis for processing, data subject rights, breach notification, DPAs with sub-processors, data transfer mechanisms for non-EU transfers.

  ---

  ## Gap Analysis

  ### 1. Sub-Processor Management (OpenAI)

  **Requirement:** GDPR Article 28 — processors must enter into DPAs with sub-processors; controllers must be notified before adding new sub-processors (most DPAs require 30-day advance notice).

  **Current state:** OpenAI recently added as sub-processor; no DPA executed with OpenAI; no customer notification provided.

  **Gap:** Active violation — EU employee data is being processed by an unauthorized sub-processor. This is the most significant current issue.

  **Risk:** Customer contract breach (most DPAs prohibit unauthorized sub-processing); GDPR regulatory penalty; customer termination rights may be triggered under their DPA.

  **Priority:** Critical — resolve within 1 week

  **Remediation steps:**
  1. Pause sending EU customer data to OpenAI immediately (or implement technical controls to filter EU data) until remediated
  2. Execute OpenAI's Data Processing Addendum (available on their website)
  3. Confirm Standard Contractual Clauses (SCCs) are included in OpenAI DPA for US data transfer
  4. Draft sub-processor update notification for all EU customers (template below)
  5. Send notification to EU customers and begin 30-day notice period
  6. Update sub-processor list in privacy policy

  **Estimated effort:** M (1–2 weeks with legal support)

  ---

  ### 2. Data Breach Notification Procedure

  **Requirement:** GDPR Article 33 — notify supervisory authority within 72 hours of becoming aware of a breach likely to result in risk to individuals; Article 34 — notify affected individuals without undue delay if high risk.

  **Current state:** Incident response plan exists for security incidents but doesn't address GDPR-specific breach notification, timeline, or supervisory authority notification.

  **Gap:** No 72-hour clock process; no designated person to make breach notification decisions; no process to identify when a breach must be reported vs. not; no template for supervisory authority notification.

  **Risk:** GDPR penalty for late or missing breach notification (Article 33 violations have resulted in significant fines across EU); reputational harm from mismanaging a breach.

  **Priority:** Critical — resolve within 2 weeks

  **Remediation steps:**
  1. Appoint a breach response owner (likely Head of Engineering or Legal) with 24/7 contact information
  2. Add GDPR-specific section to incident response plan: 72-hour assessment and notification trigger; supervisory authority notification template; affected individual notification template
  3. Define breach assessment criteria: what constitutes a reportable breach vs. low-risk incident
  4. Conduct tabletop exercise with response team before audit
  5. Identify the correct supervisory authority for each EU country where customers are located (can be the Lead Supervisory Authority under GDPR's one-stop-shop)

  **Estimated effort:** M (1–2 weeks)

  ---

  ### 3. Record of Processing Activities (RoPA)

  **Requirement:** GDPR Article 30 — organizations processing data at scale must maintain a record of processing activities.

  **Current state:** No RoPA exists.

  **Gap:** Complete absence of a required document.

  **Risk:** Regulatory audit finding; inability to demonstrate compliance; difficulty responding to data subject requests accurately.

  **Priority:** High — complete within 30 days

  **Remediation steps:**
  1. Inventory all data processing activities (purpose, legal basis, categories of data, recipients, retention periods, international transfers)
  2. Create RoPA document covering both controller activities (marketing, HR) and processor activities (customer survey data)
  3. Assign ownership for keeping RoPA current (recommend: Legal or Privacy function, reviewed quarterly)
  4. Template structure: Purpose | Legal Basis | Data Categories | Data Subjects | Recipients | Retention | Transfer Mechanisms

  **Estimated effort:** L (3–4 weeks; requires input from all business functions)

  ---

  ### 4. Data Transfer Mechanism (US Storage of EU Data)

  **Requirement:** GDPR Chapter V — transfers of EU personal data to third countries (including the US) require a lawful transfer mechanism: Standard Contractual Clauses (SCCs), Binding Corporate Rules, or adequacy decision (EU-US Data Privacy Framework as of 2023).

  **Current state:** EU customer data stored in AWS us-east-1 (US). Unclear if SCCs or DPF enrollment covers this transfer.

  **Gap:** May be no valid transfer mechanism for EU data flowing to US storage.

  **Risk:** GDPR violation for unlawful data transfer; regulatory enforcement; customer contract breach if DPAs specify EU storage.

  **Priority:** High — assess within 30 days

  **Remediation steps:**
  1. Determine if any EU customer DPAs specify EU-only data storage (review all EU DPA contracts)
  2. Assess whether to enroll in EU-US Data Privacy Framework or rely on SCCs with AWS
  3. If SCCs: confirm AWS SCC module is executed (AWS offers this as part of their DPA)
  4. If DPAs specify EU storage: evaluate adding an EU AWS region or document exceptions with customer consent
  5. Add transfer mechanism documentation to RoPA (step 3 above)

  **Estimated effort:** M (2–3 weeks)

  ---

  ### 5. Privacy Policy Update

  **Requirement:** GDPR Articles 13 and 14 — privacy notices must disclose: identity and contact of controller; purpose and legal basis; recipients; transfers; retention periods; data subject rights; right to complain.

  **Current state:** Privacy policy exists but was last updated in 2022 and predates current data processing activities (OpenAI, new product features).

  **Gap:** Privacy policy does not reflect current processing activities; likely missing required disclosures.

  **Priority:** High — update within 30 days

  **Remediation steps:**
  1. Conduct gap review of current policy against Articles 13/14 requirements
  2. Update to reflect current sub-processors, retention periods, and transfer mechanisms
  3. Add separate section for EU residents' rights (access, rectification, erasure, portability, objection)
  4. Add DPO contact (or explain DPO exemption — see gap below)
  5. Publish updated policy and document the date of update

  **Estimated effort:** S–M (1–2 weeks)

  ---

  ### 6. Data Protection Officer (DPO)

  **Requirement:** GDPR Article 37 — DPO required if: public authority; large-scale systematic monitoring; large-scale processing of special categories of data.

  **Current state:** No DPO designated.

  **Gap:** Assessment needed to determine if DPO is required.

  **Analysis:** As an HR data processor at scale (potentially processing data of millions of employees), Beacon may meet the threshold for DPO requirement. HR data doesn't clearly fall into GDPR "special categories" (health, race, religion, etc.) unless surveys include related questions. Recommend legal assessment.

  **Priority:** Medium — assess within 60 days

  **Remediation steps:**
  1. Have legal determine DPO applicability for Beacon's scale and data types
  2. If required: designate internal DPO or engage external DPO service
  3. Register DPO with relevant supervisory authorities
  4. If not required: document the exemption assessment

  **Estimated effort:** S (assessment); L if DPO required

  ---

  ## Prioritized Remediation Roadmap

  **Phase 1 — Immediate (0–30 days):**
  - [ ] Pause EU data to OpenAI until DPA executed (Day 1)
  - [ ] Execute OpenAI DPA with SCCs (Days 1–5)
  - [ ] Send sub-processor notification to EU customers (Days 5–10)
  - [ ] Update incident response plan with 72-hour GDPR breach process (Days 1–14)
  - [ ] Begin RoPA data inventory (Days 1–30)
  - [ ] Update privacy policy (Days 1–30)

  **Phase 2 — Near-term (30–90 days):**
  - [ ] Complete RoPA (Days 30–60)
  - [ ] Resolve data transfer mechanism for US storage (Days 30–60)
  - [ ] DPO determination and action (Days 30–90)
  - [ ] Employee privacy training (Days 30–90)
  - [ ] Breach response tabletop exercise (before audit)

  **Phase 3 — Ongoing:**
  - [ ] Quarterly RoPA review
  - [ ] Annual privacy policy review
  - [ ] Sub-processor review before adding any new third-party vendors
  - [ ] Annual employee privacy training

  ---

  ## Evidence Requirements for Audit

  For the 90-day customer audit, prepare:
  - [ ] Executed DPA with OpenAI including SCCs
  - [ ] Sub-processor notification log (date sent, customer list)
  - [ ] Updated sub-processor list
  - [ ] RoPA (completed)
  - [ ] Updated privacy policy (published with date)
  - [ ] Incident response plan with GDPR breach procedure
  - [ ] Data transfer mechanism documentation (SCCs with AWS)
  - [ ] Employee privacy training records
tips:
  - "A gap analysis is most valuable when it's actionable — focus on specific remediation steps with owners and timelines, not just identifying what's missing."
  - "Prioritize by actual risk, not alphabetical order by regulation section. A missing DPA with an active sub-processor is more urgent than a slightly out-of-date privacy policy."
  - "Regulatory frameworks change. Build in an annual review cycle for your compliance program — a gap analysis that's 2 years old is worse than no gap analysis, because it creates false confidence."
  - "This analysis is a framework for legal and compliance professionals. The legal conclusions must be validated by qualified attorneys with current knowledge of applicable law."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - legal-risk-memo
  - privacy-policy-review
  - vendor-contract-playbook
  - data-processing-agreement
tags:
  - compliance
  - gdpr
  - legal
  - privacy
  - audit
---
