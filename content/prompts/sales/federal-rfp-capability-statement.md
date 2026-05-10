---
title: "Capability statement section for a federal RFP response"
slug: federal-rfp-capability-statement
function: sales
role: sales-enablement
description: "Draft a capability statement section for a federal RFP response with past performance, NAICS codes, certifications, and differentiators that align to the solicitation."
useCase: "Use this prompt when responding to a federal RFP and needing the capability statement section that opens the technical volume. It pulls past performance, certifications, and contract vehicles into a concise, evaluator-friendly section that aligns to the PWS or SOW."
prompt: |
  You are a federal capture manager with experience writing winning RFP responses for civilian and DoD contracts. Draft the capability statement section.

  Solicitation context:
  - Solicitation number: {{solicitation_number}}
  - Issuing agency: {{agency}}
  - Solicitation type: {{solicitation_type}} (e.g., 8(a) set-aside, full and open, IDIQ task order)
  - NAICS code: {{naics}}
  - Period of performance: {{period_of_performance}}
  - Estimated value: {{estimated_value}}
  - Key requirements (top 3-5 from the PWS/SOW): {{key_requirements}}

  Company context:
  - Legal name and DBA: {{company_name}}
  - SAM UEI: {{sam_uei}}
  - CAGE code: {{cage_code}}
  - Size standard / status: {{size_status}} (e.g., small business, 8(a), WOSB, SDVOSB)
  - Relevant NAICS codes: {{company_naics}}
  - Contract vehicles: {{contract_vehicles}} (e.g., GSA MAS, CIO-SP3, SEWP V)
  - Clearances held: {{clearances}} (facility and personnel)
  - Relevant certifications: {{certifications}} (e.g., CMMI, ISO 9001, FedRAMP, CMMC)

  Past performance (most relevant 3-5 contracts):
  {{past_performance}}

  Differentiators (real, not generic):
  {{differentiators}}

  Produce a capability statement with these sections:

  1. Corporate snapshot — single paragraph (60-90 words) covering legal entity, size status, UEI, CAGE, primary NAICS.
  2. Core capabilities aligned to PWS — sub-headed by each {{key_requirements}} item. For each, 60-100 words describing how we deliver the capability with specific past performance citations.
  3. Past performance summary — table: contract name, agency, value, period, role (prime/sub), brief outcome. Pull from {{past_performance}} only.
  4. Contract vehicles and certifications — vehicles available for award and certifications held.
  5. Differentiators — three to five bullets, each grounded in evidence, no marketing claims.
  6. Points of contact — placeholders for capture lead, contracting POC, technical POC.

  Rules:
  - All past performance must come from the inputs. Do not invent contracts, agencies, or values.
  - Avoid superlatives ("world-class", "industry-leading"). Federal evaluators down-score them.
  - Use active voice. Lead with verbs that match the PWS language (deliver, sustain, integrate, secure).
  - If a requirement was listed but no relevant past performance was provided, write [past performance to be added] in that sub-section rather than fabricating.
  - Tone: factual, dense, evaluator-friendly, no buzzwords.

  Important: federal proposals are governed by FAR, agency-specific supplements, and the solicitation's instructions to offerors. Always have a qualified federal contracting officer or proposal attorney review before submission. This prompt produces draft content for one section only and does not constitute legal or compliance review.
variables:
  - "{{solicitation_number}}"
  - "{{agency}}"
  - "{{solicitation_type}}"
  - "{{naics}}"
  - "{{period_of_performance}}"
  - "{{estimated_value}}"
  - "{{key_requirements}}"
  - "{{company_name}}"
  - "{{sam_uei}}"
  - "{{cage_code}}"
  - "{{size_status}}"
  - "{{company_naics}}"
  - "{{contract_vehicles}}"
  - "{{clearances}}"
  - "{{certifications}}"
  - "{{past_performance}}"
  - "{{differentiators}}"
exampleInput: |
  solicitation_number: 36C77624R0091
  agency: Department of Veterans Affairs, Office of Information & Technology
  solicitation_type: SDVOSB set-aside, IDIQ
  naics: 541512
  period_of_performance: 5-year base + 5 option years
  estimated_value: $48M ceiling
  key_requirements:
  1. Cloud migration and modernization of legacy clinical systems
  2. FedRAMP-Moderate hosting and ATO sustainment
  3. Section 508 accessibility compliance
  company_name: Beacon Federal Solutions, LLC
  sam_uei: ABC123XYZ987
  cage_code: 8H7K9
  size_status: SDVOSB, small business under NAICS 541512
  company_naics: 541512 (primary), 541511, 541519
  contract_vehicles: GSA MAS IT Schedule 70, VA T4NG (subcontractor), CIO-SP3 SB
  clearances: facility clearance Secret, 4 cleared personnel (3 Secret, 1 TS)
  certifications: CMMI Level 3 Dev, ISO 9001:2015, ISO 27001, FedRAMP-Moderate inheritance through AWS GovCloud
  past_performance:
  - Contract: VA OIT Cloud Migration Wave 3, agency: VA, value: $7.2M, period: 2023-2026, role: prime, outcome: migrated 14 legacy clinical apps to AWS GovCloud, zero unplanned downtime in cutover
  - Contract: HHS CMS Beneficiary Portal Modernization, agency: HHS/CMS, value: $4.8M, period: 2022-2025, role: subcontractor to Booz Allen, outcome: 508-compliant rebuild, AA WCAG 2.1
  - Contract: DOE NNSA Cloud Sustainment, agency: DOE, value: $3.1M, period: 2024-current, role: prime, outcome: ATO sustainment, 99.97% availability
  differentiators:
  - 80% of staff hold active clearances eligible to TS or above
  - Average tenure on VA work 6+ years per delivery lead
  - In-house Section 508 accessibility lab with two certified Trusted Testers
exampleOutput: |
  Corporate snapshot
  Beacon Federal Solutions, LLC (UEI ABC123XYZ987, CAGE 8H7K9) is an SDVOSB small business under NAICS 541512, headquartered in Reston, VA. Beacon delivers cloud migration, FedRAMP-Moderate sustainment, and Section 508-compliant modernization to civilian and DoD agencies. The company holds facility clearance at Secret, four cleared personnel (three Secret, one TS), and operates under CMMI Level 3 Dev and ISO 9001:2015 / 27001 management systems.

  Core capabilities aligned to PWS

  Cloud migration and modernization of legacy clinical systems
  Beacon has migrated legacy clinical and beneficiary applications to AWS GovCloud as the prime on VA OIT Cloud Migration Wave 3 ($7.2M, 2023-2026), moving 14 applications without an unplanned cutover outage. Our migration approach uses a published runbook with rollback gates, a dedicated cutover war room, and a clinical user acceptance protocol developed jointly with VA program staff. Pattern reuse from Wave 3 shortens new application migration from 14 weeks to under 9 weeks.

  FedRAMP-Moderate hosting and ATO sustainment
  Beacon hosts and sustains workloads on AWS GovCloud (US) with FedRAMP-Moderate inheritance, including continuous monitoring, monthly POA&M reporting, and quarterly vulnerability scan submission in agency-required formats. On the DOE NNSA Cloud Sustainment contract ($3.1M, 2024-current), we have maintained 99.97% availability and zero ATO findings closed late.

  Section 508 accessibility compliance
  Beacon delivered the HHS CMS Beneficiary Portal Modernization (subcontractor to Booz Allen, $4.8M, 2022-2025) to AA WCAG 2.1 conformance with VPAT documentation accepted on first submission. Our in-house accessibility lab includes two certified Trusted Testers and applies a published 508 acceptance gate before each release.

  Past performance summary
  | Contract | Agency | Value | Period | Role | Outcome |
  | VA OIT Cloud Migration Wave 3 | VA | $7.2M | 2023-2026 | Prime | 14 apps to AWS GovCloud, zero unplanned downtime |
  | HHS CMS Beneficiary Portal Modernization | HHS/CMS | $4.8M | 2022-2025 | Sub to Booz Allen | 508 AA conformance, VPAT accepted first submission |
  | DOE NNSA Cloud Sustainment | DOE | $3.1M | 2024-current | Prime | 99.97% availability, ATO sustainment |

  Contract vehicles and certifications
  - Vehicles: GSA MAS IT Schedule 70, VA T4NG (subcontractor), CIO-SP3 Small Business
  - Certifications: CMMI Level 3 Dev, ISO 9001:2015, ISO 27001, FedRAMP-Moderate inheritance via AWS GovCloud
  - Clearances: Facility Secret, 4 cleared personnel

  Differentiators
  - 80% of delivery staff hold active clearances eligible at Secret or higher
  - Average tenure on VA programs of 6+ years per delivery lead — institutional knowledge across two prior modernization waves
  - In-house Section 508 accessibility lab staffed by two certified Trusted Testers, applied as a release gate
  - Published cloud migration runbook with cutover gates, validated across 14 application moves

  Points of contact
  - Capture lead: [name, title, email, phone]
  - Contracting POC: [name, title, email, phone]
  - Technical POC: [name, title, email, phone]
tips:
  - "Mirror the PWS language in your capability sub-headings. Evaluators score on alignment, not creativity."
  - "Past performance with the same agency carries the most weight. If you have a strong VA history, lead with it on a VA solicitation."
  - "Differentiators must be evidence-backed. 'World-class team' is invisible to evaluators; 'average 6 years on VA programs per delivery lead' is not."
  - "Federal proposals are governed by FAR and agency-specific supplements. Always have a qualified federal contracting officer or proposal attorney review before submission. This prompt produces draft content for review, not submission."
  - "Validate every past performance citation against your CPARS record before submitting. Discrepancies between proposal and CPARS are frequently flagged."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - soc2-control-narrative-federal
  - fedramp-readiness-gap-analysis
  - government-customer-comms-incident
tags:
  - federal
  - rfp
  - capability-statement
  - past-performance
  - sales-enablement
---
