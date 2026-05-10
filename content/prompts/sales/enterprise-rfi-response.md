---
title: "Draft a response to an enterprise RFI or security questionnaire"
slug: enterprise-rfi-response
function: sales
role: sales-enablement
description: "Generate clear, defensible responses to RFI and security questionnaire items with citations to your security and architecture documentation."
useCase: "Use when a deal lands a 200-question security or vendor questionnaire. Sales engineers and security teams burn days on these. This prompt produces first-draft answers grounded in your existing docs that a human reviews and tightens, instead of writing from a blank page."
prompt: |
  You are a senior sales engineer who has filled out hundreds of enterprise security and vendor questionnaires. Draft responses to the questionnaire items below.

  Inputs:
  - Vendor: {{vendor_name}} (your company)
  - Customer: {{customer_name}}
  - Product or service in scope: {{product_in_scope}}
  - Hosting and deployment model: {{deployment_model}} (e.g., multi-tenant SaaS on AWS us-east-1, single-tenant VPC, on-prem)
  - Compliance posture: {{compliance_posture}} (e.g., SOC 2 Type II, ISO 27001, HIPAA-ready, FedRAMP-Moderate in process)
  - Source materials: {{source_docs}} (security whitepaper, DPA, SOC 2 report, architecture overview)
  - Questionnaire items: {{questions}} (paste the list)

  For each question:
  1. Write a direct first-line answer (Yes / No / Partial / Not applicable) before any explanation. Buyers scan these.
  2. Add 1 to 4 sentences of supporting detail in plain English.
  3. Cite the source document and section where reviewers can verify the claim, e.g., "See Security Whitepaper §4.2."
  4. If you do not have the information in the source materials, output [needs SME input — <function>] and name the function (Security, Legal, IR, Engineering) that should answer. Do not invent compliance claims.
  5. If a question presupposes something that is not true for our product (e.g., "Describe how your on-prem agent updates" when we are SaaS-only), say so plainly and offer the SaaS-equivalent answer.

  Output format:

  ### Q<n>: <verbatim question>
  **Answer:** Yes / No / Partial / N/A
  <1 to 4 sentence explanation>
  *Source:* <doc, section>

  Do not use marketing language. Do not claim certifications you do not have. Do not bury a "no" in three paragraphs of context — lead with it and explain.
variables:
  - "{{vendor_name}}"
  - "{{customer_name}}"
  - "{{product_in_scope}}"
  - "{{deployment_model}}"
  - "{{compliance_posture}}"
  - "{{source_docs}}"
  - "{{questions}}"
exampleInput: |
  vendor_name: Vectorline
  customer_name: Northwind Bank
  product_in_scope: Vectorline managed vector database, Team plan
  deployment_model: multi-tenant SaaS on AWS us-east-1 and eu-west-2; single-tenant VPC available on Enterprise
  compliance_posture: SOC 2 Type II (current report dated Jan 2026), ISO 27001 in audit, no HIPAA
  source_docs: Security Whitepaper v3, DPA v2, Architecture Overview v2, SOC 2 report 2026
  questions: |
    1. Do you encrypt customer data at rest?
    2. Do you support customer-managed encryption keys (CMEK)?
    3. Are you HIPAA compliant?
    4. Describe your incident response process and notification SLA.
    5. Do you store customer data outside the region the customer selects?
exampleOutput: |
  ### Q1: Do you encrypt customer data at rest?
  **Answer:** Yes
  All customer vector data and metadata are encrypted at rest using AES-256. Encryption is enabled by default on every index, with no customer configuration required. Backups are encrypted with the same standard.
  *Source:* Security Whitepaper v3, §3.1 (Data at Rest)

  ### Q2: Do you support customer-managed encryption keys (CMEK)?
  **Answer:** Partial
  CMEK using AWS KMS is available on the Enterprise plan with single-tenant VPC deployments. It is not available on multi-tenant Team plans. The product in scope for this evaluation is the Team plan, which uses Vectorline-managed keys.
  *Source:* Security Whitepaper v3, §3.2 (Key Management); Architecture Overview v2, §5

  ### Q3: Are you HIPAA compliant?
  **Answer:** No
  Vectorline is not currently HIPAA compliant and does not sign BAAs. Customers should not store PHI in Vectorline indexes. Our compliance roadmap does not include HIPAA in the next 12 months.
  *Source:* Security Whitepaper v3, §2 (Compliance Scope)

  ### Q4: Describe your incident response process and notification SLA.
  **Answer:** Yes (process documented; SLA varies by plan)
  We operate a 24x7 on-call rotation with documented severity definitions and runbooks. For confirmed security incidents affecting customer data, the contractual notification SLA is 72 hours from confirmation on the Team plan and 24 hours on Enterprise. Internally, we target initial customer notification within the first 4 hours of confirmation.
  *Source:* Security Whitepaper v3, §6 (Incident Response); DPA v2, §8

  ### Q5: Do you store customer data outside the region the customer selects?
  **Answer:** Partial
  Primary index data and queries stay within the region selected at index creation (us-east-1 or eu-west-2). Operational metadata (account, billing, usage logs) is centralized in us-east-1. We do not currently offer a fully region-isolated control plane on the Team plan; this is available on Enterprise.
  [needs SME input — Engineering] please confirm the current list of operational metadata categories before sending.
  *Source:* Architecture Overview v2, §4 (Data Residency)
tips:
  - "Always paste the full source documents into the conversation context (use a project or file uploads). Citation quality drops sharply when Claude has to guess what is in your whitepaper."
  - "Have your security lead review every [needs SME input] flag before sending. Those are the answers that turn into liabilities later."
  - "Lead with Yes / No / Partial / N/A. Buyers run questionnaires through scoring rubrics that reward leading clarity and punish prose."
  - "Save accepted answers in a structured library (Notion, Airtable) and feed them back into the next questionnaire. Your second response should take half the time of your first."
  - "If a question is genuinely ambiguous, draft both interpretations and ask the customer to clarify. That is faster than guessing wrong and getting flagged in their review."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - proposal-executive-summary
  - competitive-battle-card
  - decision-memo
tags:
  - saas
  - rfi
  - security-questionnaire
  - sales-enablement
  - enterprise
---
