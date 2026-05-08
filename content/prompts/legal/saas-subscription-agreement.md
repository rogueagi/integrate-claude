---
title: "Draft a SaaS subscription agreement from scratch"
slug: saas-subscription-agreement
function: legal
role: contracts
description: "Generate a defensible first draft of a SaaS subscription agreement tuned to your product, pricing model, and customer segment — ready for counsel review."
useCase: "Use this when launching a new product, entering a new segment (e.g., moving from SMB self-serve to mid-market), or replacing a vendor template that has accumulated tech debt. The output is a structured first draft, not a final contract — but it gets you to a 70% version that counsel can refine in hours instead of weeks."
prompt: |
  You are an experienced SaaS commercial counsel. Draft a SaaS Subscription Agreement.

  Context:
  - Vendor entity: {{vendor}}
  - Product description: {{product_description}}
  - Pricing model: {{pricing_model}} (e.g., per-seat, usage-based, hybrid, tiered)
  - Customer segment: {{customer_segment}} (SMB self-serve / mid-market / enterprise)
  - Deployment model: {{deployment}} (multi-tenant SaaS, single-tenant, hybrid)
  - Data sensitivity: {{data_sensitivity}} (e.g., handles PII, PHI, financial data, none)
  - Geographic markets: {{markets}}
  - Governing law preference: {{governing_law}}
  - Special requirements: {{special_requirements}} (e.g., HIPAA, SOC 2, FedRAMP, GDPR)

  Draft the agreement with these sections, in plain commercial style (not gratuitously legalistic):

  1. Definitions
  2. Subscription and access (license grant, restrictions, affiliates)
  3. Customer responsibilities and acceptable use
  4. Fees, payment, and taxes
  5. Term, renewal, and termination
  6. Confidentiality
  7. Intellectual property (vendor IP, customer data, feedback, usage data)
  8. Data protection (with reference to DPA exhibit if applicable)
  9. Warranties (limited mutual, with appropriate disclaimers)
  10. Indemnification (mutual, with IP carve-out structure)
  11. Limitation of liability (cap and carve-outs)
  12. Insurance
  13. Service levels (with reference to SLA exhibit if applicable)
  14. General (assignment, governing law, dispute resolution, notices, force majeure)

  For each section:
  - Write the actual contract language, not a summary
  - Use defined terms consistently and capitalize them
  - Match length and complexity to the customer segment (SMB = shorter, enterprise = more detail)
  - Flag with [BRACKETED NOTE] any place where the choice is business-dependent (e.g., specific liability cap multiple, term length default)

  At the end, output:
  - A list of accompanying documents/exhibits the agreement assumes (DPA, SLA, Order Form, AUP, etc.)
  - A list of 6–10 things counsel must review and tune before this is signature-ready
  - A one-line disclaimer that this is a draft, not legal advice
variables:
  - "{{vendor}}"
  - "{{product_description}}"
  - "{{pricing_model}}"
  - "{{customer_segment}}"
  - "{{deployment}}"
  - "{{data_sensitivity}}"
  - "{{markets}}"
  - "{{governing_law}}"
  - "{{special_requirements}}"
exampleInput: |
  vendor: Lighthouse Analytics, Inc. (Delaware C-corp)
  product_description: A web-based analytics platform that ingests product event data and provides dashboards, cohort analysis, and funnel reports.
  pricing_model: Hybrid — base subscription tier + usage component priced per million events
  customer_segment: Mid-market (200–2,000 employees), typical ACV $30K–$120K
  deployment: Multi-tenant SaaS hosted on AWS us-east-1 and eu-west-1
  data_sensitivity: Handles customer end-user behavioral data including IP addresses, device info, user IDs. Some customers send PII; we discourage but cannot prevent.
  markets: US and EU (UK and Germany primary EU markets)
  governing_law: Delaware (US contracts), Ireland (EU contracts via separate entity)
  special_requirements: SOC 2 Type II compliant; GDPR — must support DPA with SCCs; not currently HIPAA-compliant.
exampleOutput: |
  # LIGHTHOUSE ANALYTICS, INC.
  ## SUBSCRIPTION AGREEMENT

  This Subscription Agreement ("Agreement") is entered into as of the Effective Date set forth on the applicable Order Form between **Lighthouse Analytics, Inc.**, a Delaware corporation ("Lighthouse"), and the customer identified on the Order Form ("Customer").

  ### 1. Definitions

  "**Affiliate**" means any entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of more than 50% of voting equity.

  "**Authorized User**" means an employee or contractor of Customer or its Affiliates whom Customer has authorized to use the Service on its behalf and who has accepted the AUP.

  "**Customer Data**" means data submitted by or on behalf of Customer to the Service, including event data describing the behavior of Customer's end users.

  "**Documentation**" means Lighthouse's then-current product documentation made available at docs.lighthouse.example.

  "**Order Form**" means the ordering document executed by the parties referencing this Agreement.

  "**Service**" means the Lighthouse Analytics platform as identified on an Order Form.

  "**Subscription Term**" means the term identified on the Order Form, including any renewal terms.

  "**Usage Data**" means aggregated, de-identified data about the operation, performance, and usage of the Service that does not identify Customer or its end users.

  ### 2. Subscription and access

  **2.1 License grant.** Subject to the terms of this Agreement and Customer's payment of applicable fees, Lighthouse grants Customer a non-exclusive, non-transferable, worldwide right during the Subscription Term to access and use the Service through Authorized Users for Customer's internal business purposes.

  **2.2 Affiliates.** Customer's Affiliates may use the Service under this Agreement, provided Customer remains responsible for their compliance.

  **2.3 Restrictions.** Customer will not, and will not permit any Authorized User to: (a) reverse-engineer, decompile, or attempt to derive the source code of the Service; (b) resell, sublicense, or make the Service available to any third party except as expressly permitted; (c) use the Service to build a competing product; (d) circumvent usage limits or security controls; or (e) submit any data Customer is not authorized to submit.

  **2.4 Acceptable Use Policy.** Customer's use of the Service is subject to the AUP attached as Exhibit A. Lighthouse may suspend access for material violations after providing notice and a reasonable opportunity to cure, except where suspension is required to prevent imminent harm.

  ### 3. Customer responsibilities

  **3.1** Customer is responsible for: (a) the accuracy, quality, and legality of Customer Data; (b) obtaining all necessary rights and consents to submit Customer Data to the Service; (c) ensuring Authorized Users comply with this Agreement; and (d) maintaining the confidentiality of credentials.

  **3.2 Sensitive data.** Customer acknowledges the Service is not designed for, and Customer will not submit, any data classified as Protected Health Information under HIPAA, payment card data subject to PCI-DSS, or other special-category data unless the parties have entered into a written addendum addressing such data. [BRACKETED NOTE: HIPAA-readiness on roadmap — confirm current state before signing customers handling PHI.]

  ### 4. Fees, payment, and taxes

  **4.1 Fees.** Customer will pay the fees set forth on each Order Form, comprising (a) a Base Subscription Fee for the applicable tier and (b) Usage Fees calculated based on events processed in excess of the included allotment.

  **4.2 Invoicing and payment.** Lighthouse will invoice Base Subscription Fees annually in advance and Usage Fees monthly in arrears. Payment is due within 30 days of invoice date. Late amounts accrue interest at the lesser of 1% per month or the maximum permitted by law.

  **4.3 Taxes.** Fees are exclusive of taxes. Customer is responsible for all applicable taxes other than taxes on Lighthouse's net income.

  **4.4 Price changes.** Lighthouse may increase Fees at renewal by no more than the lesser of [BRACKETED NOTE: business decision — typical mid-market is CPI or 7%, whichever is lower] CPI or 7% per year, with at least 60 days written notice.

  ### 5. Term, renewal, and termination

  **5.1 Term.** The initial Subscription Term is set forth on the Order Form (default 12 months). [BRACKETED NOTE: confirm default — some segments expect multi-year.]

  **5.2 Renewal.** The Subscription Term automatically renews for successive 12-month periods unless either party gives written notice of non-renewal at least 30 days before the end of the then-current term.

  **5.3 Termination for cause.** Either party may terminate this Agreement on 30 days written notice for the other party's material breach if the breach remains uncured at the end of the notice period.

  **5.4 Termination for insolvency.** Either party may terminate immediately on written notice if the other becomes insolvent or makes an assignment for the benefit of creditors.

  **5.5 Effect of termination.** On termination: (a) Customer's access to the Service ends; (b) each party returns or destroys the other's Confidential Information except as required by law; and (c) Customer may export Customer Data via the Service's standard export tools for a period of 90 days post-termination, after which Lighthouse will delete Customer Data per its data retention policy.

  **5.6 Survival.** Sections 4 (for amounts owed), 6, 7, 8, 10, 11, and 14 survive termination.

  ### 6. Confidentiality

  **6.1** "**Confidential Information**" means non-public information disclosed by one party ("Discloser") to the other ("Recipient") that is identified as confidential or that a reasonable person would understand to be confidential. Customer Data is Customer's Confidential Information.

  **6.2** Recipient will (a) use Confidential Information only to exercise rights and perform obligations under this Agreement; (b) protect Confidential Information using at least the same care it uses for its own similar information, but no less than reasonable care; and (c) limit access to those personnel with a need to know.

  **6.3** Confidentiality obligations survive for 3 years post-disclosure, except that trade secrets remain protected for as long as they qualify as trade secrets under applicable law.

  ### 7. Intellectual property

  **7.1 Vendor IP.** Lighthouse retains all right, title, and interest in and to the Service, Documentation, and any improvements, including all related intellectual property rights.

  **7.2 Customer Data.** Customer retains all right, title, and interest in Customer Data. Customer grants Lighthouse a limited, worldwide, non-exclusive license to host, process, transmit, and display Customer Data solely as necessary to provide the Service.

  **7.3 Feedback.** If Customer provides suggestions or feedback, Lighthouse may use such feedback without restriction or obligation.

  **7.4 Usage Data.** Lighthouse may collect and use Usage Data to operate, secure, and improve the Service, provided Usage Data does not identify Customer or its end users.

  ### 8. Data protection

  **8.1** To the extent Lighthouse processes personal data on Customer's behalf, the Data Processing Addendum attached as Exhibit B applies and is incorporated by reference. The DPA includes Standard Contractual Clauses where required for international transfers.

  **8.2** Lighthouse maintains the security measures described in its Security Documentation, currently including SOC 2 Type II compliance.

  **8.3** Lighthouse will notify Customer without undue delay (and in any event within 72 hours) on becoming aware of a Personal Data Breach as defined in the DPA.

  ### 9. Warranties

  **9.1 Mutual warranties.** Each party represents that it has the authority to enter into this Agreement.

  **9.2 Vendor warranty.** Lighthouse warrants that the Service will perform materially in accordance with the Documentation. Customer's exclusive remedy for breach of this warranty is, at Lighthouse's option, repair, replacement, or termination with a pro-rata refund.

  **9.3 Disclaimer.** EXCEPT AS EXPRESSLY PROVIDED, THE SERVICE IS PROVIDED "AS IS." LIGHTHOUSE DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

  ### 10. Indemnification

  **10.1 By Lighthouse.** Lighthouse will defend Customer against any third-party claim that the Service infringes the third party's intellectual property rights and pay any damages awarded or settlement agreed to by Lighthouse.

  **10.2 By Customer.** Customer will defend Lighthouse against any third-party claim arising from (a) Customer Data, (b) Customer's violation of applicable law, or (c) Customer's breach of Section 2.3 (Restrictions).

  **10.3 Procedure.** The indemnified party will promptly notify the indemnifying party, allow the indemnifying party to control the defense, and reasonably cooperate.

  **10.4 IP exclusions.** Lighthouse has no obligation under Section 10.1 to the extent a claim arises from (a) Customer Data, (b) modifications not made by Lighthouse, or (c) use of the Service in combination with non-Lighthouse products where the combination causes the infringement.

  ### 11. Limitation of liability

  **11.1 Cap.** EXCEPT FOR EXCLUDED CLAIMS, EACH PARTY'S AGGREGATE LIABILITY UNDER THIS AGREEMENT WILL NOT EXCEED [BRACKETED NOTE: standard mid-market is 12 months fees] THE FEES PAID OR PAYABLE BY CUSTOMER IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.

  **11.2 Excluded damages.** EXCEPT FOR EXCLUDED CLAIMS, NEITHER PARTY WILL BE LIABLE FOR INDIRECT, CONSEQUENTIAL, INCIDENTAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS OR REVENUES.

  **11.3 Excluded Claims.** "Excluded Claims" means: (a) a party's indemnification obligations; (b) a party's breach of Section 6 (Confidentiality); (c) Customer's payment obligations; and (d) liability that cannot be limited under applicable law.

  ### 12. Insurance

  Lighthouse will maintain during the term commercial general liability insurance of at least $2 million per occurrence and cyber/professional liability of at least $5 million per occurrence. [BRACKETED NOTE: enterprise customers often request $10M cyber — increase if signing customers above $250K ACV.]

  ### 13. Service levels

  The Service Level Agreement attached as Exhibit C governs Service availability and remedies for downtime.

  ### 14. General

  **14.1 Assignment.** Neither party may assign this Agreement without the other's prior written consent, except that either party may assign on a change of control with prior written notice. Any attempted assignment in violation of this Section is void.

  **14.2 Governing law.** This Agreement is governed by the laws of the State of Delaware, without regard to conflict-of-laws principles. [BRACKETED NOTE: EU customers contracting with Lighthouse Ireland use Irish law — separate template required.]

  **14.3 Dispute resolution.** Any dispute will be resolved exclusively in the state and federal courts of Wilmington, Delaware. Each party waives the right to a jury trial.

  **14.4 Notices.** Notices must be in writing and sent to the addresses on the Order Form. Email is sufficient for routine notices but not for termination, breach, or indemnification claims.

  **14.5 Force majeure.** Neither party is liable for failure to perform due to events beyond its reasonable control, except for payment obligations.

  **14.6 Entire agreement.** This Agreement, together with all Order Forms and exhibits, constitutes the entire agreement between the parties and supersedes prior agreements on the subject matter.

  ---

  ### Accompanying documents

  - Order Form (per-deal)
  - Exhibit A: Acceptable Use Policy
  - Exhibit B: Data Processing Addendum (with SCCs for EU transfers)
  - Exhibit C: Service Level Agreement
  - Lighthouse Security Documentation (referenced, not attached)

  ### What counsel must review and tune

  1. Liability cap multiple (currently 12 months — confirm market standard for your segment)
  2. Carve-out scope for Excluded Claims — many enterprise customers will push for IP indemnity to be uncapped or capped at a higher multiple
  3. Auto-renewal default and notice period (currently 30 days; California and some EU states have specific notice requirements)
  4. Specific insurance limits, especially cyber liability
  5. SOC 2 representation language — confirm current attestation date and audit scope
  6. DPA language for EU/UK transfers — keep current as SCCs evolve
  7. Force majeure scope — confirm pandemic and government action coverage matches business expectations
  8. Acceptable Use Policy specifics
  9. Termination data retrieval window (currently 90 days — confirm operationally feasible)
  10. Whether HIPAA-related disclaimer in 3.2 should be stronger given roadmap

  ### Disclaimer

  This is a drafting starting point, not legal advice. Have licensed counsel familiar with your jurisdiction and business review every clause before signature.
tips:
  - "Always tune the liability cap and indemnification structure to your customer segment. SMB and self-serve can run lighter; enterprise and regulated industries require carve-outs and higher caps."
  - "Generated drafts are first drafts only — never signature-ready. The 'what counsel must review' list is the bridge from AI draft to enforceable contract."
  - "Maintain a single source-of-truth template, then have Claude generate segment-specific variants from it. Drift between templates is one of the most common preventable contract problems."
  - "Not legal advice. Use this prompt to accelerate counsel, not replace counsel. Final language must be reviewed by an attorney licensed in the relevant jurisdiction."
  - "Mark every business-dependent decision with a [BRACKETED NOTE]. The bracketed notes are the conversation between counsel and the business owner — preserving them is more valuable than removing them too early."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - master-services-agreement-checklist
  - data-processing-agreement
  - terms-of-service-review
tags:
  - saas
  - subscription-agreement
  - contract-drafting
  - commercial-contracts
  - vendor-paper
---
