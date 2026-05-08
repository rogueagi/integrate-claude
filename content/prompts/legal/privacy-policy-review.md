---
title: "Review and update a privacy policy"
slug: privacy-policy-review
function: legal
role: compliance
description: "Analyze an existing privacy policy against current regulatory requirements (GDPR, CCPA, and applicable state laws) to identify gaps, outdated provisions, and missing disclosures — with specific updates for each finding."
useCase: "Use this prompt when a privacy policy hasn't been updated in over a year, when new data processing activities have been added, when entering a new jurisdiction, or when preparing for a compliance audit. Privacy policies that don't reflect actual practices are a regulatory and reputational risk."
prompt: |
  You are a privacy attorney reviewing a company's privacy policy for regulatory compliance and accuracy. Assess the policy against current requirements and identify gaps, inaccuracies, and required updates.

  **Company type and industry:** {{company_type}}
  **Current data processing activities (what you actually do with data):**
  {{actual_practices}}
  **Applicable regulations:** {{regulations}} (e.g., GDPR, CCPA/CPRA, PIPEDA, state privacy laws)
  **Audience for this policy:** {{audience}} (consumers, business customers, employees, or mixed)
  **Current policy text:**
  ```
  {{policy_text}}
  ```
  **Known issues or recent changes:** {{known_issues}} (new vendors, new features, new geographies)

  Review the privacy policy for:

  ## Executive Summary
  Overall compliance rating and the top 3 most urgent issues to fix.

  ## Regulatory Requirements Checklist

  For each applicable regulation, assess whether the policy meets required disclosures:

  ### GDPR (if applicable)
  - [ ] Identity and contact details of the data controller
  - [ ] Contact details of the DPO (if applicable)
  - [ ] Purpose of processing for each category
  - [ ] Legal basis for each processing purpose
  - [ ] Categories of personal data processed
  - [ ] Recipients or categories of recipients
  - [ ] International data transfers and transfer mechanisms
  - [ ] Retention periods for each category
  - [ ] Data subject rights (access, rectification, erasure, portability, objection, restriction)
  - [ ] Right to lodge a complaint with a supervisory authority
  - [ ] Whether provision of data is a statutory or contractual requirement
  - [ ] Automated decision-making disclosure (if applicable)

  ### CCPA/CPRA (if applicable)
  - [ ] Categories of personal information collected
  - [ ] Purposes for collection
  - [ ] Categories of sources
  - [ ] Categories of third parties with whom data is shared
  - [ ] Whether personal information is sold or shared for cross-context behavioral advertising
  - [ ] Consumer rights (know, delete, opt-out of sale/sharing, correct, limit use of sensitive PI)
  - [ ] How to submit rights requests
  - [ ] Non-discrimination statement

  ## Gap Analysis

  For each gap identified:
  - **Required disclosure:** What the regulation requires
  - **Current policy:** What the policy currently says (or doesn't say)
  - **Issue:** The specific gap or inaccuracy
  - **Risk:** Regulatory and reputational risk of not fixing it
  - **Priority:** High / Medium / Low
  - **Suggested language:** Draft text to add or replace

  ## Accuracy Assessment
  Does the policy accurately describe what you actually do? Flag any discrepancies between stated practices and actual practices.

  ## Readability and User Comprehension
  Is the policy readable by the average user? Flag overly legalistic language that should be simplified.

  ## Recommended Full Policy Sections
  For the most significant gaps, provide complete replacement or addition language.

  ## Version Control and Update Process
  Recommendations for keeping the policy current going forward.
variables:
  - "{{company_type}}"
  - "{{actual_practices}}"
  - "{{regulations}}"
  - "{{audience}}"
  - "{{policy_text}}"
  - "{{known_issues}}"
exampleInput: |
  company_type: B2B SaaS HR platform, 150 employees, serves enterprise customers
  actual_practices: |
    - Collect enterprise customer contact data (email, name, job title) for sales/marketing
    - Process employee data on behalf of customers (survey responses, org hierarchy, role data) as data processor
    - Use Segment for analytics, Salesforce for CRM, Stripe for payments, OpenAI for AI feature (new)
    - Store all data in AWS us-east-1
    - Share data with Segment, Salesforce, Stripe, OpenAI (new), SendGrid
    - Do not sell personal data
    - Retain customer data for 7 years for accounting; survey response data deleted on customer request
    - EU customers, UK customers, California customers in scope
  regulations: GDPR, UK GDPR, CCPA/CPRA
  audience: Business customers and their employees (B2B); some consumer-facing for EU/California compliance
  policy_text: |
    Privacy Policy
    Last updated: January 2022

    We collect information you provide to us, such as name and email address. We use this information to provide our services. We may share information with service providers who help us deliver our services.

    We take reasonable measures to protect your information. You may contact us at privacy@beacon.io with questions.

    California residents have rights under California law, including the right to know what personal information we collect.

    For EU residents, we comply with GDPR.
  known_issues: |
    - OpenAI added as sub-processor in Q1 2025; not in policy
    - New AI Insights feature processes employee survey responses through OpenAI
    - Policy is 3 years old and extremely thin
    - No legal basis disclosed for GDPR purposes
    - No data subject rights described
    - No CCPA disclosure of categories or opt-out mechanism
exampleOutput: |
  ## Executive Summary

  **Compliance rating: Non-compliant** — this policy is materially deficient against GDPR, UK GDPR, and CCPA/CPRA. It is among the thinnest privacy policies that could still be called a policy. Three most urgent issues: (1) The GDPR section is a single sentence — it does not disclose any required information and would not survive regulatory scrutiny; (2) CCPA disclosures are incomplete and lack a rights exercise mechanism; (3) OpenAI is not disclosed as a recipient despite actively processing personal data. This policy needs a complete rewrite, not edits.

  ---

  ## Regulatory Requirements Checklist

  ### GDPR

  | Requirement | Status | Notes |
  |---|---|---|
  | Controller identity and contact | Missing | Not named in policy |
  | DPO contact details | Missing | Needs DPO determination first |
  | Processing purposes | Missing | No purposes disclosed |
  | Legal basis for each purpose | Missing | Single most critical GDPR gap |
  | Categories of data | Missing | |
  | Recipients / categories | Partial | "Service providers" — too vague; OpenAI not listed |
  | International transfers and mechanism | Missing | US storage not addressed |
  | Retention periods | Missing | |
  | Data subject rights | Missing | |
  | Right to lodge complaint | Missing | |
  | Automated decision-making | Missing | AI Insights feature not addressed |

  **GDPR compliance: 0 of 12 required elements adequately addressed.**

  ### CCPA/CPRA

  | Requirement | Status | Notes |
  |---|---|---|
  | Categories of PI collected | Missing | |
  | Purposes for collection | Missing | |
  | Categories of sources | Missing | |
  | Third parties sharing | Partial | Too vague |
  | Sale/sharing of PI | Partial | "We do not sell" not explicitly stated |
  | Consumer rights | Partial | Right to know mentioned; others missing |
  | How to submit rights requests | Missing | |
  | Non-discrimination | Missing | |

  **CCPA compliance: 2 of 8 elements adequately addressed.**

  ---

  ## Gap Analysis

  ### Gap 1 — Legal Basis for Processing (GDPR, Critical)

  **Required:** For each processing purpose, the legal basis under GDPR Article 6.
  **Current policy:** "We comply with GDPR." — no legal basis disclosed.
  **Risk:** GDPR enforcement finding; inability to defend processing in response to regulatory investigation.
  **Priority:** High

  **Suggested language (add to GDPR section):**
  > "We process personal data on the following legal bases:
  > - **Performance of contract (Article 6(1)(b)):** We process customer contact data to deliver our services, process payments, and fulfill contractual obligations.
  > - **Legitimate interests (Article 6(1)(f)):** We process data for fraud prevention, security, and improving our services, where our interests are not overridden by your rights.
  > - **Compliance with legal obligations (Article 6(1)(c)):** We retain certain data for tax and accounting purposes as required by law.
  > - **Processor role:** When processing employee data on behalf of our enterprise customers, we act as a data processor under the customer's instructions and lawful basis."

  ---

  ### Gap 2 — OpenAI as Data Recipient (GDPR + CCPA, Critical)

  **Required:** All recipients or categories of recipients must be disclosed; for CCPA, all third parties with whom data is shared must be listed.
  **Current policy:** "Service providers who help us deliver our services" — OpenAI not identified; the AI Insights feature is not mentioned.
  **Risk:** Regulatory violation for undisclosed third-party sharing; customer trust damage if discovered without disclosure; potential GDPR violation for unauthorized sub-processing.
  **Priority:** High

  **Suggested language (add to data sharing section):**
  > "**AI Processing:** When you or your employees use our AI-powered features (including AI Insights), response data may be processed by OpenAI, L.L.C. This processing is governed by OpenAI's API Data Processing Agreement and is used solely to generate insights within our platform. OpenAI does not use this data to train its models."

  ---

  ### Gap 3 — Data Subject Rights (GDPR, High)

  **Required:** Complete disclosure of all data subject rights under GDPR Articles 15–22.
  **Current policy:** No rights disclosed.
  **Risk:** Regulatory enforcement; inability to respond to rights requests without internal process.
  **Priority:** High

  **Suggested language (add as new section "Your Rights"):**
  > "**If you are in the European Economic Area or United Kingdom, you have the following rights:**
  > - **Access:** Request a copy of the personal data we hold about you.
  > - **Correction:** Request that we correct inaccurate or incomplete data.
  > - **Deletion:** Request that we delete your personal data, subject to certain exceptions.
  > - **Restriction:** Request that we restrict processing of your data in certain circumstances.
  > - **Portability:** Receive your data in a structured, machine-readable format.
  > - **Object:** Object to our processing based on legitimate interests.
  > - **Withdraw consent:** Where processing is based on consent, withdraw it at any time.
  >
  > To exercise these rights, contact us at privacy@beacon.io. We will respond within 30 days. You also have the right to lodge a complaint with your local supervisory authority (in the UK: ICO; in Germany: BfDI; in France: CNIL)."

  ---

  ### Gap 4 — CCPA Consumer Rights and Request Mechanism (CCPA, High)

  **Required:** All CCPA rights, how to exercise them, and a "Do Not Sell or Share My Personal Information" opt-out mechanism.
  **Current policy:** "Right to know what personal information we collect" — incomplete; no mechanism.
  **Priority:** High

  **Suggested language:**
  > "**California Residents — Your Privacy Rights**
  >
  > If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA/CPRA):
  > - **Right to Know:** Request disclosure of personal information we have collected about you, the categories of sources, the purposes for collection, and the categories of third parties with whom we share it.
  > - **Right to Delete:** Request deletion of your personal information, subject to exceptions.
  > - **Right to Correct:** Request correction of inaccurate personal information.
  > - **Right to Opt-Out of Sale/Sharing:** We do not sell your personal information. We do not share your personal information for cross-context behavioral advertising.
  > - **Right to Limit Use of Sensitive Personal Information:** [Assess if applicable for your data types]
  > - **Non-Discrimination:** We will not discriminate against you for exercising these rights.
  >
  > To submit a request: email privacy@beacon.io or complete the form at [link]. We will respond within 45 days."

  ---

  ### Gap 5 — International Data Transfers (GDPR, High)

  **Required:** Disclosure of transfers to third countries and the transfer mechanism used.
  **Current policy:** Not addressed.
  **Suggested language:**
  > "**International Data Transfers**
  >
  > We are based in the United States. If you are in the EU or UK, your personal data will be transferred to and processed in the US. We rely on the following transfer mechanisms:
  > - **EU-US Data Privacy Framework:** [Confirm enrollment status]
  > - **Standard Contractual Clauses:** We have executed SCCs with our processors, including OpenAI and AWS.
  >
  > For transfers to OpenAI, processing is governed by standard contractual clauses approved by the European Commission."

  ---

  ## Accuracy Assessment

  The current policy says "We take reasonable measures to protect your information" — this is accurate but legally insufficient. The policy says nothing inaccurate, but omits almost everything material about actual data practices.

  **Discrepancy:** The policy says "We may share information with service providers" — but doesn't list them. Given the AI Insights feature is live with OpenAI processing, the omission of OpenAI from disclosures is not merely incomplete — it is inaccurate against current facts.

  ---

  ## Readability Notes

  The current policy is readable by virtue of being extremely short — but this brevity is the source of the problem. The rewrite should aim for clear section headers, plain English, and a reading level appropriate for professional audiences. Avoid: "notwithstanding," "pursuant to," "shall be deemed." Prefer: "does not," "means," "you can."

  ---

  ## Version Control and Update Process

  After the rewrite:
  - Set a calendar reminder for annual review (each January)
  - Trigger an ad-hoc review whenever: a new sub-processor is added, a new data type is collected, a new geography is entered, or a new AI feature is launched
  - Maintain a changelog at the bottom of the policy (date and summary of changes)
  - For material changes: provide 30 days' advance notice to EU users per GDPR
tips:
  - "A privacy policy that doesn't reflect actual data practices is worse than no policy — it creates false representations to regulators and users. Audit actual practices before reviewing the policy."
  - "Legal basis disclosure is the single most important GDPR element. Without it, you cannot defend any data processing in an investigation. It should be the first addition to any GDPR-deficient policy."
  - "Privacy policies should be reviewed by someone who knows what the company actually does — not just by legal. Engineers and product managers often know about data flows that legal doesn't."
  - "This review identifies legal and compliance issues for qualified privacy counsel to address. The suggested language is illustrative — have a licensed attorney finalize any policy changes."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - compliance-gap-analysis
  - legal-risk-memo
  - data-processing-agreement
  - terms-of-service-review
tags:
  - privacy
  - gdpr
  - ccpa
  - compliance
  - legal
---
