---
title: "Answer a vendor data security questionnaire"
slug: vendor-data-security-questionnaire
function: legal
role: compliance
description: "Generate accurate, defensible answers to a customer's data security questionnaire — without overcommitting on controls you don't have or burying real strengths in jargon."
useCase: "Use this when a customer's procurement or security team sends a 50–300 question security questionnaire (CAIQ, SIG, custom). Done well, this clears procurement faster and avoids contractual commitments you can't keep. Done poorly, it locks in promises that come back as audit findings."
prompt: |
  You are an experienced security and compliance lead who has answered hundreds of vendor questionnaires. Generate answers to a vendor security questionnaire.

  Context about your company (the vendor):
  - Company: {{company}}
  - Compliance certifications held: {{certifications}}
  - Hosting environment: {{hosting}}
  - Data types processed: {{data_types}}
  - Encryption posture: {{encryption_posture}} (at rest, in transit, key management)
  - Identity and access: {{access_management}}
  - Incident response and BCP: {{ir_bcp}}
  - Sub-processors: {{sub_processors}}
  - Known weaknesses or gaps: {{known_gaps}} (e.g., no FedRAMP, no HIPAA, no on-prem option)

  Customer context:
  - Customer name and industry: {{customer}}
  - Why customer is asking (regulatory driver if known): {{customer_driver}}
  - Deal size: {{deal_size}}

  The questionnaire is below the divider.

  For each question, output:
  - The verbatim question
  - **Answer:** Direct, factual response. Do not pad. If the answer is "yes," say yes. If "no," say no. If "partial" or "compensating control," say so honestly with a one-line explanation.
  - **Evidence:** What documentation supports this answer (SOC 2 control reference, policy name, attestation, screenshot — name it specifically, don't just say "available on request" unless that's the actual answer).
  - **Risk flag (if any):** If this answer is likely to cause a follow-up question, friction in the deal, or a contractual commitment we cannot keep at scale, flag it.

  At the end:
  1. **Summary of "no" or partial answers** that the deal team needs to be aware of
  2. **Suggested talking points** for the customer call to address the biggest concerns
  3. **Disclaimer** — Note that contractual or compliance commitments derived from these answers must be reviewed by counsel.

  ---
  QUESTIONNAIRE:
  {{questionnaire_text}}
variables:
  - "{{company}}"
  - "{{certifications}}"
  - "{{hosting}}"
  - "{{data_types}}"
  - "{{encryption_posture}}"
  - "{{access_management}}"
  - "{{ir_bcp}}"
  - "{{sub_processors}}"
  - "{{known_gaps}}"
  - "{{customer}}"
  - "{{customer_driver}}"
  - "{{deal_size}}"
  - "{{questionnaire_text}}"
exampleInput: |
  company: Lighthouse Analytics, Inc., 200-person Series C B2B SaaS
  certifications: SOC 2 Type II (current, last audit period 11 months ending Q3 last year), ISO 27001 in progress, no HIPAA, no FedRAMP
  hosting: AWS us-east-1 and eu-west-1, infrastructure as code via Terraform, no on-prem option
  data_types: Customer end-user behavioral data (events, page views), business contact info, optional PII (email/name) sent as user properties, no PHI, no PCI
  encryption_posture: TLS 1.2+ in transit; AES-256 at rest via AWS-managed keys (KMS); customer-managed keys (BYOK) on enterprise tier only
  access_management: Okta SSO required for all employees; SCIM provisioning; role-based access control; quarterly access reviews; MFA required
  ir_bcp: Documented incident response runbook, 24/7 on-call, 72-hour breach notification commitment in DPA; BCP tested annually with RTO 4h / RPO 1h for production systems
  sub_processors: AWS, Snowflake, Datadog, Stripe (billing only), Postmark (transactional email), HubSpot (sales CRM only — no production data)
  known_gaps: No FedRAMP, no HIPAA-eligible BAA, no air-gapped or on-prem deployment option, customer-managed keys only on enterprise tier
  customer: Veridian Health, mid-market healthcare adjacent (not direct PHI handler, but their customers are providers)
  customer_driver: Their downstream customers ask about subprocessor security; not a direct HIPAA requirement for them
  deal_size: $180K ARR, 2-year term
  questionnaire_text: [25-question subset shown for example]
exampleOutput: |
  # Vendor Security Questionnaire — Veridian Health
  **Vendor:** Lighthouse Analytics
  **Deal:** $180K ARR, 2-year

  ---

  **Q1. Do you have a SOC 2 Type II report?**
  **Answer:** Yes.
  **Evidence:** Current SOC 2 Type II report covering audit period ending Q3 [year]. Report available under NDA via security.lighthouse/trust.
  **Risk flag:** None.

  **Q2. Do you have ISO 27001 certification?**
  **Answer:** No, in progress (target Q4 next year). We can share Statement of Applicability and gap-assessment summary under NDA.
  **Risk flag:** Low. If Veridian requires ISO as a hard gate, escalate.

  **Q3. Do you have HIPAA / are you HIPAA-eligible (sign a BAA)?**
  **Answer:** No. Lighthouse does not currently sign BAAs and is not HIPAA-eligible.
  **Evidence:** N/A.
  **Risk flag:** **Medium.** Veridian is healthcare-adjacent. Confirm with deal team that no PHI will be transmitted to Lighthouse. If their downstream is asking and they intend to send PHI, this is a deal-block. Suggested talking point below.

  **Q4. Where is data hosted?**
  **Answer:** AWS us-east-1 (US data) and eu-west-1 (EU data). No on-prem option.
  **Evidence:** Hosting documentation in trust portal.
  **Risk flag:** None.

  **Q5. Is data encrypted at rest? Specify algorithm.**
  **Answer:** Yes. AES-256, AWS KMS-managed keys by default; customer-managed keys (BYOK) available on enterprise tier.
  **Evidence:** SOC 2 control CC6.7; encryption policy.
  **Risk flag:** Low. If customer asks about BYOK at this deal size, mention it's an enterprise-tier feature; we can discuss as part of contract.

  **Q6. Is data encrypted in transit? Specify protocol.**
  **Answer:** Yes. TLS 1.2 minimum, TLS 1.3 preferred. SSL Labs A+ rating.
  **Evidence:** SSL Labs scan results in trust portal.
  **Risk flag:** None.

  **Q7. Do you require multi-factor authentication for employee access to production?**
  **Answer:** Yes. All employee access to production requires SSO (Okta) + MFA. Direct password access to production is not permitted.
  **Evidence:** SOC 2 control CC6.1.
  **Risk flag:** None.

  **Q8. How often are access reviews performed?**
  **Answer:** Quarterly access reviews of all production access.
  **Evidence:** SOC 2 control CC6.3; access review records in trust portal.
  **Risk flag:** None.

  **Q9. Do you have a documented incident response plan?**
  **Answer:** Yes. Maintained, tested annually via tabletop exercise, with 24/7 on-call.
  **Evidence:** IR plan summary in trust portal; full plan under NDA.
  **Risk flag:** None.

  **Q10. What is your breach notification commitment?**
  **Answer:** 72 hours from awareness for personal data breaches per our standard DPA. Some customer DPAs negotiate to 24 hours.
  **Evidence:** DPA template, Section 8.
  **Risk flag:** Medium if Veridian asks for 24 hours — manageable but should be a deliberate contract decision.

  **Q11. Have you experienced a security incident in the last 24 months?**
  **Answer:** No reportable Personal Data Breach in the last 24 months. We have experienced standard security events (phishing attempts, vulnerability disclosures) which were addressed without unauthorized access to customer data.
  **Evidence:** Available for discussion under NDA.
  **Risk flag:** None.

  **Q12. Do you maintain a list of sub-processors and provide notice of changes?**
  **Answer:** Yes. Current sub-processors: AWS (hosting), Snowflake (data warehouse), Datadog (observability), Stripe (billing), Postmark (transactional email), HubSpot (sales CRM, no production data). 30-day advance notice provided to customers for additions; customers may object per DPA.
  **Evidence:** Sub-processor page in trust portal; DPA Section 7.
  **Risk flag:** None.

  **Q13. Do all sub-processors hold equivalent or stronger security certifications?**
  **Answer:** Yes. AWS (SOC 2, ISO 27001, FedRAMP), Snowflake (SOC 2, ISO 27001), Datadog (SOC 2), Stripe (PCI DSS L1), Postmark (SOC 2), HubSpot (SOC 2).
  **Evidence:** Sub-processor certification list.
  **Risk flag:** None.

  **Q14. Do you have a vulnerability management program with documented SLAs?**
  **Answer:** Yes. Critical: 7-day remediation. High: 30-day. Medium: 90-day. Quarterly external pen test by [redacted vendor].
  **Evidence:** Vulnerability management policy.
  **Risk flag:** None.

  **Q15. Do you offer customer-managed encryption keys (BYOK)?**
  **Answer:** Yes, on enterprise tier.
  **Evidence:** Enterprise tier documentation.
  **Risk flag:** Medium. Veridian deal is below enterprise tier ($180K). Either upsell or note this is a tier feature; do not commit to BYOK in contract at this tier.

  **Q16. Do you allow customer audits of your environment?**
  **Answer:** No on-site customer audits. We provide SOC 2 Type II report and respond to security questionnaires (this one). Customers with regulatory audit obligations may have audit-rights language reviewed in DPA negotiation.
  **Evidence:** N/A.
  **Risk flag:** Medium if Veridian's downstream customer demands a right of audit. Counsel typically lands on "audit rights via SOC 2 plus reasonable cause" — escalate to legal if pushed.

  **Q17. Do you maintain cyber liability insurance?**
  **Answer:** Yes. $5M cyber liability per occurrence; $5M aggregate.
  **Evidence:** Certificate of insurance available on request.
  **Risk flag:** Low. Some enterprise customers ask for $10M+ — at this deal size, $5M should be sufficient.

  **Q18. Do you have a Business Continuity / Disaster Recovery plan?**
  **Answer:** Yes. Annual BCP test. RTO 4 hours, RPO 1 hour for production systems.
  **Evidence:** BCP summary in trust portal.
  **Risk flag:** None.

  **Q19. Do you have data deletion / retention policies?**
  **Answer:** Yes. Customer Data deleted within 30 days of contract termination by default; 90-day extension available on request. Documented retention policy.
  **Evidence:** Data retention policy; DPA Section 11.
  **Risk flag:** None.

  **Q20. Do you process Protected Health Information (PHI)?**
  **Answer:** No. Our DPA explicitly excludes PHI from the scope of permitted data.
  **Evidence:** DPA Section 3.2.
  **Risk flag:** **High** if Veridian's actual use case requires sending PHI. See talking point #1.

  **Q21. Do you support GDPR Standard Contractual Clauses?**
  **Answer:** Yes. Current SCC version 2021/914, with UK Addendum.
  **Evidence:** DPA Annex.
  **Risk flag:** None for this US-based customer; relevant if they have EU subsidiaries.

  **Q22. Do you have a designated security officer / DPO?**
  **Answer:** Designated Security Lead and Privacy Lead. We are not legally required to appoint a formal DPO under GDPR Article 37.
  **Evidence:** Internal designation; org chart.
  **Risk flag:** None.

  **Q23. Are employees background-checked?**
  **Answer:** Yes, for all employees with production access. Includes criminal history (where lawful) and employment verification.
  **Evidence:** HR policy under NDA.
  **Risk flag:** None.

  **Q24. Do you have a security training program?**
  **Answer:** Yes. Annual security awareness training required for all employees; specialized training for engineering and customer-facing roles.
  **Evidence:** Training records.
  **Risk flag:** None.

  **Q25. Do you respond to security/compliance reviews on at least an annual basis?**
  **Answer:** Yes. Annual SOC 2 audit; customer questionnaires answered as needed; trust portal updated quarterly.
  **Evidence:** Trust portal cadence.
  **Risk flag:** None.

  ---

  ## Summary of "no" or partial answers

  - **No HIPAA / no BAA (Q3, Q20).** Most material item — confirm Veridian use case excludes PHI before signature.
  - **No ISO 27001 (Q2).** In progress; share gap-assessment summary if needed.
  - **No on-site customer audit (Q16).** Standard for our segment but may need contract negotiation.
  - **BYOK not at this tier (Q15).** Don't contractually commit to BYOK in this deal.
  - **No FedRAMP.** Not asked but worth mentioning if relevant downstream.

  ## Talking points for customer call

  1. "On HIPAA — Lighthouse is not HIPAA-eligible and does not sign BAAs. Most healthcare-adjacent customers (like Veridian) use us for non-PHI analytics, and our DPA explicitly excludes PHI. Can we confirm that's your intended use? If your downstream customers ever require PHI processing, we'd recommend a different vendor for that workflow."
  2. "On audit rights — we provide SOC 2 Type II under NDA, which is what most customers in your segment use to satisfy their downstream review obligations. If your customers require audit-rights language in their contracts with you, we can scope DPA language that flows through."
  3. "On ISO 27001 — we're targeting Q4 next year. We can share our Statement of Applicability and gap assessment under NDA so you can validate the controls today."
  4. "On encryption — at your tier we use AWS KMS-managed keys, which meets the security profile of >95% of our customers. BYOK is available on enterprise tier — happy to walk through pricing if it becomes important."

  ## Disclaimer

  Answers above are factual based on current company posture as described. Any answer that becomes a contractual commitment in the resulting agreement must be reviewed by counsel. Specifically, the breach notification window, sub-processor notice period, audit rights language, and any deviation from our standard DPA must go through legal review before signature.
tips:
  - "Never overcommit. The most common deal-pain comes from saying 'yes' to a control you don't have at scale and discovering it 6 months later in audit. 'Compensating control' or 'partial' is a real answer."
  - "Maintain a single source-of-truth answer library. Variability in answers across customers creates a discoverable contradiction problem in litigation or audit."
  - "Always summarize the 'no' answers separately so the deal team can prepare. Customers don't object to capable vendors who have known limits — they object to vendors who hide them and surface them later."
  - "Not legal advice. Answers that become contractual commitments must be reviewed by counsel. SOC 2, HIPAA, FedRAMP, and similar attestations have specific scope limits that can be misrepresented in casual answers."
  - "Update your master answer library after every audit and certification renewal. Stale answers are the most common discoverable inaccuracy."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - vendor-contract-playbook
  - compliance-gap-analysis
  - data-processing-agreement
tags:
  - vendor-questionnaire
  - security-review
  - compliance
  - procurement
  - soc-2
---
