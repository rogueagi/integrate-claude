---
title: "Draft or review a Data Processing Agreement (DPA)"
slug: data-processing-agreement
function: legal
role: compliance
description: "Draft a GDPR-compliant Data Processing Agreement between a controller and processor, or review an existing DPA for compliance gaps and missing required provisions under GDPR Article 28."
useCase: "Use this prompt when a customer or vendor requires a DPA before sharing personal data, when entering the EU market, or when a vendor you already use needs to be covered by a formal DPA. A missing or deficient DPA is one of the most common GDPR compliance failures."
prompt: |
  You are a GDPR specialist attorney drafting or reviewing a Data Processing Agreement.

  **Task:** {{task}} (draft a new DPA / review an existing DPA)
  **Parties:**
  - Controller: {{controller}} (company name and role — who determines the purpose of processing)
  - Processor: {{processor}} (company name and role — who processes data on controller's behalf)
  **Nature of processing:** {{processing_nature}} (what the processor will do with the data)
  **Purpose of processing:** {{processing_purpose}} (why the data is being processed)
  **Types of personal data:** {{data_types}} (categories of data involved)
  **Categories of data subjects:** {{data_subjects}} (whose data — employees, customers, users)
  **Duration of processing:** {{duration}}
  **Sub-processors:** {{sub_processors}} (any third parties the processor will engage)
  **Data transfer locations:** {{transfer_locations}} (countries where data will be processed or stored)
  **Existing DPA text (if reviewing):**
  ```
  {{existing_dpa}}
  ```

  For a **new DPA draft**, produce a complete GDPR Article 28-compliant DPA including all mandatory provisions.

  For a **DPA review**, assess:

  ## Article 28 Compliance Checklist

  Assess whether the DPA includes all mandatory Article 28(3) provisions:
  - [ ] Processing only on documented instructions from the controller
  - [ ] Confidentiality obligations on authorized personnel
  - [ ] Implementation of appropriate technical and organizational measures (Article 32)
  - [ ] Sub-processor restrictions and conditions
  - [ ] Data subject rights assistance obligation
  - [ ] Assistance with controller's compliance obligations (Articles 32–36)
  - [ ] Deletion or return of data at end of service
  - [ ] Cooperation and audit rights for controller

  ## Gap Analysis
  For each missing or deficient provision:
  - **Required provision:** What GDPR requires
  - **Current state:** What the DPA says (or doesn't say)
  - **Risk:** Consequence of the gap
  - **Suggested language:** Draft replacement or addition

  ## Sub-Processor Provisions
  - Are sub-processor requirements adequate?
  - Is advance notice required for new sub-processors?
  - Is the current list of sub-processors complete and accurate?

  ## Security Measures
  - Are the Article 32 security requirements sufficiently specified?
  - Are they appropriate for the data types and risk level?

  ## International Transfer Provisions
  - Are transfers to third countries covered?
  - Are appropriate transfer mechanisms specified (SCCs, DPF)?
  - Are SCCs the correct module for this controller-processor relationship?

  ## Recommended Additions
  Any provisions that, while not strictly required by Article 28, are strongly recommended for this relationship.
variables:
  - "{{task}}"
  - "{{controller}}"
  - "{{processor}}"
  - "{{processing_nature}}"
  - "{{processing_purpose}}"
  - "{{data_types}}"
  - "{{data_subjects}}"
  - "{{duration}}"
  - "{{sub_processors}}"
  - "{{transfer_locations}}"
  - "{{existing_dpa}}"
exampleInput: |
  task: draft a new DPA
  controller: Beacon HR, Inc. (B2B SaaS company — acts as data controller for its own employee data and as data processor for enterprise customer data, but in this DPA is the controller)
  processor: OpenAI, L.L.C. (AI model provider)
  processing_nature: Processing survey response text through OpenAI's API to generate plain-English summaries and recommendations
  processing_purpose: Providing the AI Insights feature to Beacon's enterprise customers, which analyzes employee survey responses to generate managerial insights
  data_types: Employee survey responses (text), employee identifiers (employee ID, manager relationship), job role and department
  data_subjects: Employees of Beacon's enterprise customers (EU and non-EU)
  duration: Duration of the subscription agreement between Beacon and its customers; data deleted within 30 days of termination
  sub_processors: OpenAI's API infrastructure providers (AWS, Azure — as used by OpenAI)
  transfer_locations: Data sent to OpenAI API endpoints (processed in US)
exampleOutput: |
  # DATA PROCESSING AGREEMENT

  **Between:**
  Beacon HR, Inc., a Delaware corporation ("Controller")
  and
  OpenAI, L.L.C., a Delaware limited liability company ("Processor")

  **Effective Date:** [Date of execution]

  ---

  ## 1. Definitions

  1.1 **"GDPR"** means Regulation (EU) 2016/679 of the European Parliament and of the Council.

  1.2 **"Personal Data"** has the meaning given in the GDPR and includes personal data of EU and UK data subjects.

  1.3 **"Processing"** has the meaning given in the GDPR.

  1.4 **"Standard Contractual Clauses" or "SCCs"** means the standard contractual clauses for the transfer of personal data to third countries adopted by the European Commission in its Implementing Decision (EU) 2021/914.

  1.5 **"Sub-Processor"** means any processor engaged by Processor to Process Personal Data on Processor's behalf.

  1.6 **"Data Subjects"** means the employees of Controller's enterprise customers whose survey response data is processed under this Agreement.

  ---

  ## 2. Scope and Nature of Processing

  2.1 **Subject matter:** Processor will process Personal Data for the purpose of enabling Controller's AI Insights feature — specifically, generating plain-English summaries and recommendations from employee survey responses provided via Controller's application.

  2.2 **Nature of processing:** Automated analysis and transformation of survey response text through large language model inference. No persistent storage of Personal Data beyond the duration of the API request unless specified in Annex I.

  2.3 **Purpose of processing:** Providing AI Insights functionality to Controller's enterprise customers. Processor may not use Personal Data for any other purpose, including training, fine-tuning, or improving Processor's AI models.

  2.4 **Types of Personal Data:** Survey response text; employee identifiers (internal ID, manager relationship identifiers); job role and department.

  2.5 **Categories of Data Subjects:** Employees of Controller's enterprise customers.

  2.6 **Duration:** For the duration of the applicable API services agreement between the parties. Processing ceases upon termination; any retained Personal Data is deleted within 30 days of termination.

  ---

  ## 3. Controller's Instructions

  3.1 Processor shall process Personal Data only on documented instructions from Controller as set forth in this Agreement and Controller's API requests. Processor shall not process Personal Data for any purpose other than those specified in Section 2.

  3.2 If Processor considers that an instruction infringes the GDPR or other applicable data protection law, Processor shall immediately inform Controller.

  3.3 Processor shall not make any disclosure of Personal Data to any government authority or law enforcement except as required by law. Processor shall provide Controller with prompt notice of any such required disclosure to the extent permitted by law.

  ---

  ## 4. Confidentiality

  4.1 Processor shall ensure that persons authorized to process Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.

  4.2 Processor shall limit access to Personal Data to those personnel who require access to perform the services under this Agreement.

  ---

  ## 5. Technical and Organizational Security Measures

  5.1 Processor shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of processing, including as appropriate:

  (a) Encryption of Personal Data in transit (TLS 1.2 or higher) and at rest;
  (b) Ability to ensure ongoing confidentiality, integrity, availability, and resilience of processing systems;
  (c) Ability to restore availability and access to Personal Data in a timely manner following an incident;
  (d) Process for regularly testing, assessing, and evaluating the effectiveness of security measures.

  5.2 In assessing the appropriate level of security, Processor shall take into account the risks presented by processing, in particular from accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Personal Data.

  5.3 Processor shall maintain a current, written description of its security measures as set out in Annex II.

  ---

  ## 6. Sub-Processors

  6.1 **General authorization:** Controller provides general authorization for Processor to engage Sub-Processors for the infrastructure and cloud services necessary to operate the API, subject to the conditions in this Section 6.

  6.2 **Current Sub-Processors:** Processor's current Sub-Processors are listed in Annex III. Processor shall update Annex III when Sub-Processors are added or replaced.

  6.3 **Notice of changes:** Processor shall provide Controller with at least thirty (30) days' prior written notice of any addition or replacement of Sub-Processors (sent to: privacy@beacon.io). Controller may reasonably object to any new Sub-Processor by written notice within 30 days of notification. If Controller objects and Processor cannot accommodate the objection, Controller may terminate the relevant services.

  6.4 **Sub-processor obligations:** Processor shall impose on each Sub-Processor data protection obligations equivalent to those in this Agreement. Processor remains liable to Controller for Sub-Processor compliance with those obligations.

  6.5 **Prohibited purposes:** Processor shall ensure that no Sub-Processor is authorized to use Personal Data to train, fine-tune, or improve AI or machine learning models.

  ---

  ## 7. Data Subject Rights

  7.1 Processor shall assist Controller, through appropriate technical and organizational measures, insofar as possible, to fulfill Controller's obligation to respond to requests by Data Subjects exercising their rights under the GDPR (including rights of access, rectification, erasure, restriction, portability, and objection).

  7.2 Processor shall not respond directly to Data Subject requests without Controller's prior consent, except where required by applicable law.

  7.3 Processor shall promptly notify Controller if it receives a request from a Data Subject directly.

  ---

  ## 8. Controller's Compliance Obligations

  8.1 Processor shall assist Controller in ensuring compliance with:
  (a) Security obligations under GDPR Article 32;
  (b) Data breach notification obligations under GDPR Articles 33 and 34;
  (c) Data protection impact assessment obligations under GDPR Article 35;
  (d) Prior consultation obligations under GDPR Article 36.

  8.2 **Breach notification:** Processor shall notify Controller without undue delay, and in any event within 48 hours, of becoming aware of a personal data breach affecting Personal Data processed under this Agreement. Notification shall include information specified in Article 33(3) to the extent available.

  ---

  ## 9. Return and Deletion of Personal Data

  9.1 Upon Controller's request, or at the end of the provision of services, Processor shall at Controller's election:
  (a) Delete all Personal Data and any copies from Processor's systems; or
  (b) Return all Personal Data to Controller in a commonly used, machine-readable format.

  9.2 Processor shall certify in writing to Controller the completion of deletion within 30 days.

  9.3 Processor may retain Personal Data to the extent required by applicable law, for the minimum period and subject to appropriate safeguards.

  ---

  ## 10. Audit and Inspection Rights

  10.1 Processor shall make available to Controller all information necessary to demonstrate compliance with this Agreement and shall allow for and contribute to audits, including inspections, conducted by Controller or an auditor mandated by Controller.

  10.2 Controller agrees to provide reasonable prior notice of any audit (not less than 30 days), conduct audits during normal business hours, and minimize disruption to Processor's operations.

  10.3 Processor may satisfy its audit obligations by providing a current SOC 2 Type II report or equivalent third-party audit report, where this adequately covers the scope of the audit.

  ---

  ## 11. International Data Transfers

  11.1 Personal Data processed under this Agreement may be transferred to and processed in the United States.

  11.2 The parties agree that this Agreement incorporates the Standard Contractual Clauses (Module 2: Controller to Processor) adopted by the European Commission in Decision 2021/914, with the following elections:
  - Clause 7 (Docking clause): Not included
  - Clause 9 (Sub-processors): Option 2 (general authorization with prior notice as set out in Section 6 above)
  - Clause 17 (Governing law): The law of Ireland
  - Clause 18 (Choice of forum): The courts of Ireland

  11.3 The SCCs take precedence over this Agreement to the extent of any conflict.

  11.4 For UK Data Subjects, the UK Addendum to the SCCs (as issued by the ICO) is incorporated by reference.

  ---

  ## ANNEX I — Description of Processing

  | | Details |
  |---|---|
  | Controller | Beacon HR, Inc. |
  | Processor | OpenAI, L.L.C. |
  | Nature of processing | LLM inference on survey response text |
  | Purpose | AI Insights feature — generating summaries and recommendations |
  | Personal data types | Survey response text; employee ID; role; department |
  | Data subjects | Employees of Controller's enterprise customers |
  | Duration | Duration of API services agreement |
  | No persistent storage | Personal Data not stored beyond API request duration |

  ---

  ## ANNEX II — Security Measures

  Processor implements the following technical and organizational security measures:
  - Encryption in transit: TLS 1.3
  - Encryption at rest: AES-256
  - Access controls: Role-based access; MFA required for system access
  - Penetration testing: Annual third-party assessment
  - Incident response: 24/7 security operations; documented incident response plan
  - [Insert current security certifications: SOC 2 Type II, ISO 27001, etc.]

  ---

  ## ANNEX III — Authorized Sub-Processors

  | Sub-Processor | Location | Processing Activity |
  |---|---|---|
  | [Cloud infrastructure provider] | US | Hosting and compute infrastructure |
  | [Content delivery network] | Global | API request routing |

  *Controller will be notified of any additions or changes per Section 6.3.*

  ---

  *This agreement is subject to attorney review before execution. The standard contractual clauses must be executed as an annex with signatures from authorized representatives of both parties to be legally effective.*
tips:
  - "The most commonly missed DPA provision is the prohibition on sub-processors using personal data to train AI models — this must be explicit, not implied."
  - "The 30-day sub-processor notice requirement is not just contractual best practice — it's what GDPR requires if the controller wants the ability to object. Draft it in from the start."
  - "SCCs for controller-to-processor transfers (Module 2) must be selected carefully — using the wrong module (e.g., controller-to-controller) is a compliance error even if the SCC is executed."
  - "This template is a starting point for legal professionals. GDPR requirements and SCCs have nuances that require qualified legal review before execution."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - privacy-policy-review
  - compliance-gap-analysis
  - legal-risk-memo
  - contract-redline
tags:
  - gdpr
  - dpa
  - privacy
  - compliance
  - legal
---
