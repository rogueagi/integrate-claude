---
title: "Write a requirements document for a vendor RFP"
slug: rfp-requirements-doc
function: operations
role: vendor-management
description: "Generate a structured vendor requirements document that clearly communicates what you need, enabling vendors to submit accurate, comparable proposals."
useCase: "Use this prompt before issuing an RFP or RFQ to any vendor. A well-structured requirements document attracts better proposals, makes evaluation easier, and prevents the painful re-scoping that happens when vendors don't understand what you actually need."
prompt: |
  You are a procurement expert and technical writer. Write a comprehensive requirements document for the vendor RFP described below.

  **What is being procured:** {{procurement_category}}
  **Issuing organization:** {{organization_name}}
  **Business problem this solves:** {{business_problem}}
  **Current situation:** {{current_situation}}
  **Key functional requirements:** {{functional_requirements}}
  **Technical requirements:** {{technical_requirements}}
  **Volume and scale:** {{volume_scale}}
  **Integration requirements:** {{integration_requirements}}
  **Security and compliance requirements:** {{security_compliance}}
  **Budget range (if shareable):** {{budget_range}}
  **Timeline:** {{timeline}}
  **Evaluation criteria (high level):** {{evaluation_criteria}}

  Write an RFP requirements document with these sections:

  ## 1. RFP Overview
  - Issuing organization and brief description
  - Purpose of this RFP
  - Procurement timeline (questions due, proposals due, selection date, target go-live)
  - Point of contact for questions
  - Submission instructions

  ## 2. Organization Background
  - Company overview (size, industry, tech stack context)
  - Current state and why change is needed
  - Strategic context — why this matters to the business

  ## 3. Scope of Work
  A precise description of what the vendor will deliver:
  - What is in scope
  - What is explicitly out of scope
  - Implementation and onboarding expectations
  - Ongoing support and maintenance expectations

  ## 4. Requirements
  Organize requirements into clear categories. For each requirement, specify:
  - **ID:** REQ-XXX
  - **Requirement:** Clear, testable statement
  - **Priority:** Must Have (M) / Should Have (S) / Nice to Have (N)
  - **Rationale:** Why this requirement exists (helps vendors propose alternatives)

  Categories to cover:
  ### 4a. Functional Requirements
  ### 4b. Technical Requirements
  ### 4c. Integration Requirements
  ### 4d. Security and Compliance Requirements
  ### 4e. Performance and Reliability Requirements
  ### 4f. Support and Service Level Requirements
  ### 4g. Implementation Requirements

  ## 5. Vendor Qualification Criteria
  Minimum thresholds a vendor must meet to be considered:
  - Company age/stability
  - Reference customers (similar size/industry)
  - Certifications required
  - Financial requirements

  ## 6. Proposal Requirements
  What vendors must include in their response:
  - Required sections and format
  - Required supporting documents
  - Pricing structure (what to break out, what format)
  - Demo or proof-of-concept requirements

  ## 7. Evaluation Criteria
  How proposals will be scored (weights by category, without revealing exact scorecard):
  - Criteria and their relative importance
  - Process for shortlisting and final selection

  ## 8. Terms and Conditions
  - Confidentiality of RFP
  - Right to reject any proposal
  - No commitment to award
  - Costs of responding borne by vendor
  - IP and data handling during evaluation

  ## 9. Questions and Answers
  - Deadline for vendor questions
  - How Q&A will be distributed (all vendors receive all Q&A)
  - Contact method for questions
variables:
  - "{{procurement_category}}"
  - "{{organization_name}}"
  - "{{business_problem}}"
  - "{{current_situation}}"
  - "{{functional_requirements}}"
  - "{{technical_requirements}}"
  - "{{volume_scale}}"
  - "{{integration_requirements}}"
  - "{{security_compliance}}"
  - "{{budget_range}}"
  - "{{timeline}}"
  - "{{evaluation_criteria}}"
exampleInput: |
  procurement_category: Customer Data Platform (CDP)
  organization_name: Meridian Health, a regional healthcare network with 3,200 employees
  business_problem: Patient data is siloed across 6 systems. Marketing cannot identify patients who are due for preventive care without manual data pulls. Care coordinators cannot see a complete patient history.
  current_situation: Using Epic (EHR), Salesforce (CRM), Mailchimp (marketing), and three proprietary internal systems. No unified patient data layer. IT does manual monthly extracts.
  functional_requirements: Unified patient profile, segmentation for marketing campaigns, HIPAA-compliant data handling, real-time data refresh (<24hr latency), patient journey analytics
  technical_requirements: Cloud-based SaaS, REST API, supports FHIR HL7 integration standard, SOC 2 Type II certified
  volume_scale: 450,000 patient records, ~50,000 monthly active records, 8 data sources
  integration_requirements: Must integrate with Epic (EHR), Salesforce, and Mailchimp natively or via documented API
  security_compliance: HIPAA Business Associate Agreement required, SOC 2 Type II, data must remain in US
  budget_range: $80K–$200K annually
  timeline: Proposals due March 15; selection by April 15; go-live by July 1
  evaluation_criteria: Functional fit (35%), security/compliance (25%), implementation approach (20%), cost (20%)
exampleOutput: |
  # Request for Proposal: Customer Data Platform
  **Issuing Organization:** Meridian Health
  **Issue Date:** February 15, 2024
  **Proposals Due:** March 15, 2024, 5:00 PM ET
  **Point of Contact:** procurement@meridianhealth.org (questions only; all Q&A distributed to all vendors)

  ## 2. Organization Background
  Meridian Health is a regional healthcare network serving 450,000 patients across 12 facilities. We employ 3,200 staff including 800 clinical personnel. Our current technology stack includes Epic (EHR), Salesforce (CRM), Mailchimp (email marketing), and three proprietary internal systems for scheduling, billing, and care coordination.

  Patient data is currently siloed across these systems with no unified record. Marketing cannot identify patients due for preventive screenings without a 3-day manual data extraction process. Care coordinators see incomplete patient histories. This RFP seeks a Customer Data Platform to unify our patient data layer.

  ## 4. Requirements

  ### 4a. Functional Requirements

  | ID | Requirement | Priority | Rationale |
  |----|-------------|----------|-----------|
  | REQ-F01 | System must create and maintain a unified patient profile aggregating data from all configured sources | M | Core use case |
  | REQ-F02 | Support patient segmentation by at least 20 attributes including demographics, visit history, care gaps, and engagement | M | Required for marketing and care coordination use cases |
  | REQ-F03 | Data refresh latency must be ≤24 hours for all source systems | M | Care coordinators need near-real-time data |
  | REQ-F04 | Provide pre-built audience builder accessible to non-technical marketing users | M | Marketing team has no SQL capability |
  | REQ-F05 | Patient journey analytics and visualization | S | Useful but not blocking |
  | REQ-F06 | Predictive scoring (e.g., churn risk, appointment no-show likelihood) | N | Future capability |

  ### 4d. Security and Compliance Requirements

  | ID | Requirement | Priority | Rationale |
  |----|-------------|----------|-----------|
  | REQ-S01 | Vendor must sign a HIPAA Business Associate Agreement (BAA) | M | Legal requirement — no exceptions |
  | REQ-S02 | SOC 2 Type II certification (current, within 12 months) | M | Organizational security policy |
  | REQ-S03 | All patient data must be stored and processed within the United States | M | Regulatory requirement |
  | REQ-S04 | Role-based access controls with audit logging | M | HIPAA access controls |
  | REQ-S05 | Data encryption at rest (AES-256) and in transit (TLS 1.2+) | M | Security baseline |

  ## 6. Proposal Requirements
  Proposals must include:
  1. Executive summary (maximum 2 pages)
  2. Company overview: years in operation, current customer count, healthcare customer references (minimum 3)
  3. Solution overview addressing each Must Have requirement (use REQ IDs)
  4. Integration approach for Epic, Salesforce, and Mailchimp with technical documentation
  5. Implementation plan with timeline, milestones, and resource requirements from Meridian
  6. Pricing broken down by: platform license, implementation, training, Year 2–3 projections
  7. BAA willingness confirmation and current SOC 2 Type II report (or executive summary)
  8. Three customer references in healthcare organizations of comparable size
tips:
  - "Share the budget range in the RFP — vendors who cannot meet it will self-select out, saving everyone time. Use a range, not a ceiling."
  - "Write requirements as outcomes, not solutions: 'data refresh latency ≤24 hours' not 'must use real-time streaming.' This invites vendors to propose their best approach."
  - "The Must Have / Should Have / Nice to Have priority system is the most useful thing in a requirements doc. It tells vendors where to invest their response effort."
  - "Distribute all Q&A to all vendors — this keeps the process fair and often produces better proposals because a good question from one vendor helps all of them."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - vendor-evaluation-scorecard
  - vendor-negotiation-prep
  - vendor-contract-checklist
  - vendor-onboarding-checklist
tags:
  - vendor-management
  - procurement
  - rfp
  - requirements
  - operations
---
