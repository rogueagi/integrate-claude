---
title: "SOC 2 control narrative aligned to federal contractor expectations"
slug: soc2-control-narrative-federal
function: it-security
role: security
description: "Draft a SOC 2 Type II control narrative section that maps cleanly to federal contractor expectations, including NIST 800-53 control crosswalk."
useCase: "Use this prompt when preparing SOC 2 documentation for a company pursuing federal work. It produces a control narrative that an auditor can map to Trust Services Criteria and a federal program office can read against NIST 800-53 controls."
prompt: |
  You are a senior compliance lead with experience operating SOC 2 audits for vendors that sell into federal civilian and DoD agencies. Draft a control narrative for a single SOC 2 Trust Services control area.

  Audit context:
  - Company: {{company}}
  - Reporting period: {{reporting_period}}
  - Trust Services Criterion (TSC) being narrated: {{tsc}} (e.g., CC6.1 Logical Access Controls, CC7.2 System Monitoring)
  - System / scope: {{system_scope}}

  Control environment inputs:
  - Tools and platforms in scope: {{tools}}
  - Owner of this control area: {{control_owner}}
  - Relevant policies: {{policies}}
  - Frequency of execution: {{frequency}}
  - Evidence sources available: {{evidence}}
  - Known gaps or compensating controls: {{gaps}}

  Federal alignment:
  - Target federal context: {{federal_context}} (e.g., FedRAMP-Moderate alignment, DoD CMMC Level 2, agency-specific authority to operate)
  - NIST 800-53 controls to crosswalk: {{nist_controls}}

  Produce a narrative with these sections:

  1. Control objective — one to two sentences stating what the control is designed to achieve, in language that matches the TSC.
  2. Control description — describe how the control operates day to day. Specific systems, owners, frequency, and triggering events.
  3. Policies and standards referenced — list the internal policies that govern the control.
  4. Evidence the auditor will sample — specific artifacts (screenshots, logs, ticket exports) and how often they are produced.
  5. Roles and responsibilities — who performs, who reviews, who approves.
  6. NIST 800-53 crosswalk — table mapping the TSC to specific NIST 800-53 controls and noting any partial coverage.
  7. Known limitations or compensating controls — honestly state where coverage is partial and what compensates.

  Rules:
  - Do not invent controls or evidence the user did not provide.
  - If a NIST control is mentioned but no supporting practice was provided, label the row as [practice to confirm] in the crosswalk rather than fabricating.
  - Tone: factual, audit-ready, no marketing claims.
  - Length: 350-550 words across the narrative sections plus the crosswalk table.

  Important: this is a draft narrative. Final SOC 2 attestations and federal authorization packages must be reviewed by qualified compliance counsel and your audit firm. Federal agency-specific requirements vary; do not represent this draft as agency-cleared documentation.
variables:
  - "{{company}}"
  - "{{reporting_period}}"
  - "{{tsc}}"
  - "{{system_scope}}"
  - "{{tools}}"
  - "{{control_owner}}"
  - "{{policies}}"
  - "{{frequency}}"
  - "{{evidence}}"
  - "{{gaps}}"
  - "{{federal_context}}"
  - "{{nist_controls}}"
exampleInput: |
  company: Brightline Analytics
  reporting_period: 2025-07-01 to 2026-06-30
  tsc: CC6.1 Logical Access Controls
  system_scope: Brightline production analytics platform hosted on AWS GovCloud (US)
  tools: Okta (SSO and MFA), AWS IAM, AWS GovCloud, Vanta (continuous monitoring), CrowdStrike Falcon
  control_owner: Director of Security Engineering, Priya Anand
  policies: Access Control Policy v3.2, Identity Lifecycle Policy v1.8, Privileged Access Standard v1.4
  frequency: continuous monitoring with quarterly user access reviews
  evidence: Okta access logs, AWS IAM audit trails, quarterly UAR exports, JIRA tickets for access provisioning and deprovisioning
  gaps: emergency break-glass account exists outside SSO; reviewed monthly with two-person sign-off
  federal_context: FedRAMP-Moderate alignment, no current ATO, pursuing JAB sponsorship
  nist_controls: AC-2, AC-3, AC-5, AC-6, IA-2, IA-5
exampleOutput: |
  Control objective
  Brightline restricts logical access to the production analytics platform such that only authorized personnel can access systems and data, and access is granted at the minimum level required to perform job functions. This control operates against TSC CC6.1.

  Control description
  All workforce access to the Brightline production environment in AWS GovCloud (US) is mediated through Okta single sign-on with multi-factor authentication enforced for every user, including administrative roles. AWS IAM enforces role-based access aligned to a least-privilege model maintained by the Security Engineering team. Production access is granted through ticketed requests in JIRA, requires manager approval and a security review, and is provisioned via Okta group assignment. Deprovisioning occurs within four business hours of a separation event, triggered by an HR system event and confirmed via Vanta continuous monitoring. CrowdStrike Falcon enforces endpoint posture as a precondition for production access. A documented emergency break-glass account exists outside SSO, stored in a sealed credential safe, used only with two-person sign-off and reviewed monthly.

  Policies and standards referenced
  - Access Control Policy v3.2
  - Identity Lifecycle Policy v1.8
  - Privileged Access Standard v1.4

  Evidence the auditor will sample
  - Okta access logs for the audit period
  - AWS IAM audit trail (CloudTrail)
  - Quarterly user access review exports, signed by data owners
  - JIRA tickets for a sample of provisioning, modification, and deprovisioning events
  - Monthly break-glass review log

  Roles and responsibilities
  - Performer: Security Engineering team
  - Reviewer: Director of Security Engineering, Priya Anand
  - Approver: VP Engineering for privileged role grants

  NIST 800-53 crosswalk
  | NIST control | Coverage | Notes |
  | AC-2 Account Management | Full | Joiner/mover/leaver via JIRA + Okta |
  | AC-3 Access Enforcement | Full | AWS IAM + Okta SSO |
  | AC-5 Separation of Duties | Partial | Documented in policy; technical separation enforced for production deploys [practice to confirm: full evidence on dev/prod role separation] |
  | AC-6 Least Privilege | Full | Role definitions reviewed quarterly |
  | IA-2 Identification and Authentication | Full | MFA enforced via Okta for all users |
  | IA-5 Authenticator Management | Full | Okta password and MFA standards aligned to NIST 800-63B |

  Known limitations or compensating controls
  The break-glass account is the only credential outside SSO. It is stored in a sealed safe under two-person control, used only when SSO is unavailable, and reviewed monthly. Use is logged and auditable. This compensating arrangement is documented in the Privileged Access Standard.
tips:
  - "Always run the narrative past your audit firm before circulating widely. Auditors phrase TSC mappings differently and small wording choices affect findings."
  - "When you flag a row as [practice to confirm], close it before the kickoff meeting. Auditors notice unresolved placeholders."
  - "If you are pursuing a federal ATO, your narrative should map cleanly to NIST 800-53. Do not bury the crosswalk in an appendix — auditors and program offices look for it first."
  - "All federal authorization packages must be reviewed by qualified compliance counsel and your accredited 3PAO. This prompt produces draft narrative copy, not an authorization."
  - "Do not represent agency-specific compliance posture without a current ATO letter or JAB authorization. Marketing language in narratives is what gets companies pulled from procurement lists."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - fedramp-readiness-gap-analysis
  - federal-rfp-capability-statement
  - insider-risk-incident-narrative
tags:
  - federal
  - soc2
  - compliance
  - nist
  - security
---
