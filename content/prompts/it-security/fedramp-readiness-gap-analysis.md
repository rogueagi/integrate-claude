---
title: "FedRAMP-Moderate readiness gap analysis"
slug: fedramp-readiness-gap-analysis
function: it-security
role: security
description: "Generate a structured gap analysis comparing your current security posture to the FedRAMP-Moderate baseline, with prioritized remediation plan."
useCase: "Use this prompt when scoping a FedRAMP-Moderate authorization effort. It takes your current control inventory and produces a gap analysis against the FedRAMP-Moderate baseline (NIST 800-53 Rev 5), with a remediation plan ranked by effort and authorization criticality."
prompt: |
  You are a FedRAMP advisory consultant who has guided commercial SaaS companies through 3PAO assessments. Produce a readiness gap analysis against the FedRAMP-Moderate baseline.

  Company context:
  - Company: {{company}}
  - Product / service in scope: {{product_scope}}
  - Hosting environment: {{hosting}} (e.g., AWS GovCloud, Azure Government)
  - Target authorization path: {{auth_path}} (Agency ATO, JAB P-ATO, or FedRAMP Tailored)
  - Target timeline: {{timeline}}

  Current state inputs:
  - Existing certifications: {{existing_certs}} (e.g., SOC 2 Type II, ISO 27001)
  - Current control framework documentation: {{current_framework_docs}}
  - Tools and platforms in security stack: {{security_stack}}
  - Headcount on dedicated compliance / security work: {{security_headcount}}
  - Known gaps the team has already self-identified: {{known_gaps}}

  Control areas to assess (FedRAMP-Moderate has ~325 controls — focus on the families flagged below):
  {{control_families}}

  Produce a gap analysis with these sections:

  1. Executive summary — three to five sentences. Estimated readiness percentage, biggest two structural gaps, realistic timeline view.
  2. Gap analysis by control family — for each control family in {{control_families}}, output:
     - Family name and ID (e.g., AC, AU, CM, IR)
     - Current state (one paragraph based on inputs)
     - Gaps against FedRAMP-Moderate (specific controls, with control IDs)
     - Effort to close (Small / Medium / Large) with reasoning
  3. Cross-cutting gaps — gaps that span multiple control families (e.g., FIPS 140-validated cryptography, US-person staffing, continuous monitoring tooling).
  4. Remediation plan — table with: gap, control IDs affected, effort, estimated duration, dependency, priority (P0 blocks authorization / P1 needed at SSP submission / P2 needed at continuous monitoring).
  5. Resource estimate — recommended dedicated FTEs, 3PAO engagement timing, advisory support.
  6. Honest readiness call — what timeline is realistic for {{auth_path}} given the current state.

  Rules:
  - Do not state that any control is "in place" unless the user provided supporting evidence.
  - Use FedRAMP terminology consistently (SSP, SAR, POA&M, 3PAO).
  - If the user did not provide enough information to assess a family, mark it [insufficient input — discovery required] rather than guessing.
  - Be honest about timelines. Most companies underestimate FedRAMP-Moderate readiness by 6-12 months.

  Important: this is an internal planning document. FedRAMP authorization requires engagement with an accredited 3PAO and an authorizing agency or the JAB. This prompt does not constitute a readiness attestation or replace qualified compliance and legal counsel. Do not represent its output as a 3PAO finding.
variables:
  - "{{company}}"
  - "{{product_scope}}"
  - "{{hosting}}"
  - "{{auth_path}}"
  - "{{timeline}}"
  - "{{existing_certs}}"
  - "{{current_framework_docs}}"
  - "{{security_stack}}"
  - "{{security_headcount}}"
  - "{{known_gaps}}"
  - "{{control_families}}"
exampleInput: |
  company: Meridian Data Platform
  product_scope: cloud-hosted analytics SaaS
  hosting: AWS GovCloud (US) East and West
  auth_path: Agency ATO via Department of Energy sponsor
  timeline: SSP submission by Q4 2026, target ATO by Q3 2027
  existing_certs: SOC 2 Type II (current), ISO 27001 (current), HIPAA-aligned (no formal attestation)
  current_framework_docs: SOC 2 control narratives, internal information security policy v4.1, incident response runbook, asset inventory in Vanta
  security_stack: Okta SSO, AWS IAM, CrowdStrike Falcon, Vanta, Datadog, AWS GuardDuty, AWS Config, AWS KMS (FIPS endpoints enabled in GovCloud), Wiz CSPM
  security_headcount: 1 Director of Security, 2 security engineers, 0 dedicated compliance hire
  known_gaps: no formal CMP (configuration management plan), no dedicated incident response tabletop history beyond SOC 2 sample, supply chain risk management process informal
  control_families: AC (Access Control), AU (Audit and Accountability), CM (Configuration Management), IR (Incident Response), SC (System and Communications Protection), SR (Supply Chain Risk Management)
exampleOutput: |
  Executive summary
  Meridian is approximately 55-65% ready against FedRAMP-Moderate today. The existing SOC 2 + ISO 27001 posture, GovCloud hosting, and Vanta tooling cover much of AC, AU, and SC. The two structural gaps that drive timeline are the absence of a documented configuration management plan and an under-resourced compliance function. A Q4 2026 SSP submission is achievable with one additional compliance hire and a 3PAO engagement initiated by Q2 2026; the Q3 2027 ATO target is plausible but tight.

  Gap analysis by control family

  AC — Access Control
  Current state: Okta SSO, MFA universal, AWS IAM least-privilege roles, quarterly user access reviews, ticketed provisioning. Strong baseline.
  Gaps: AC-2(1) automated account management evidence is partial; AC-6(7) review of privileged user access events needs documented frequency; AC-17(2) cryptographic protection for remote access — confirm FIPS 140-validated.
  Effort: Small.

  AU — Audit and Accountability
  Current state: Datadog and AWS CloudTrail centralize logs, GuardDuty for security events, retention policies in Vanta.
  Gaps: AU-6 audit review process needs documented playbook with reviewer roles; AU-9(4) protection of audit information from unauthorized modification — verify immutability of CloudTrail and Datadog archive.
  Effort: Small.

  CM — Configuration Management
  Current state: AWS Config for drift detection, Wiz for posture, no formal CMP document.
  Gaps: CM-2 baseline configurations documented for each component class; CM-3 configuration change control process formalized in writing; CM-7 least functionality justified; CM-8 component inventory coverage validated. No documented CMP is the largest single gap.
  Effort: Large.

  IR — Incident Response
  Current state: Internal IR runbook, on-call rotation, GuardDuty integrations.
  Gaps: IR-3 IR testing — annual tabletop with documented findings required; IR-4 IR handling steps need to map to NIST 800-61; IR-6 reporting to US-CERT and authorizing official process documented and rehearsed.
  Effort: Medium.

  SC — System and Communications Protection
  Current state: KMS with FIPS endpoints in GovCloud, TLS 1.2+, network segmentation in VPC, WAF.
  Gaps: SC-13 cryptographic protection — full cryptographic inventory needed mapping each component to FIPS 140-2/3 validated module; SC-7 boundary protection diagram needs to match SSP authorization boundary exactly.
  Effort: Medium.

  SR — Supply Chain Risk Management
  Current state: Informal vendor review, no documented SCRM plan.
  Gaps: SR-3 SCRM plan documented; SR-5 acquisition strategies and procurements documented; SR-11 component authenticity verification.
  Effort: Large.

  Cross-cutting gaps
  - FIPS 140-validated cryptography: confirm full inventory, particularly any libraries used in container builds
  - Continuous monitoring tooling: Vanta covers SOC 2/ISO well; FedRAMP ConMon requires monthly POA&M and vulnerability scan submissions in specific formats — confirm tool support
  - Personnel screening (PS family) was not in scope but will need US-person staffing posture documented for the system support team
  - One dedicated compliance hire is required; current 1 + 2 + 0 staffing is insufficient for FedRAMP cadence

  Remediation plan
  | Gap | Controls | Effort | Duration | Dependency | Priority |
  | Document CMP | CM-2 through CM-9 | Large | 8-12 weeks | Compliance hire | P0 |
  | Document SCRM plan | SR-3, SR-5, SR-11 | Large | 6-10 weeks | Compliance hire | P0 |
  | Annual IR tabletop | IR-3 | Medium | 4 weeks | None | P1 |
  | Cryptographic inventory | SC-13 | Medium | 4 weeks | Engineering | P0 |
  | Authorization boundary diagram | SC-7, CM-2 | Medium | 3 weeks | Architecture | P0 |
  | Privileged access event review | AC-6(7) | Small | 2 weeks | None | P1 |
  | Audit immutability verification | AU-9(4) | Small | 2 weeks | None | P1 |

  Resource estimate
  - 1 additional dedicated compliance hire (start by Q2 2026)
  - 3PAO engagement initiated Q2 2026, full readiness assessment Q3 2026
  - FedRAMP advisory support 0.25-0.5 FTE through SSP submission

  Honest readiness call
  An Agency ATO via DOE by Q3 2027 is plausible, not guaranteed. Two failure modes most likely: (1) CMP and SCRM documentation slips past Q2 2026 and pushes 3PAO assessment back, or (2) ConMon tooling proves heavier than current stack supports. A realistic conservative target is Q4 2027.
tips:
  - "FedRAMP timelines slip on documentation, not on technology. The CMP and SCRM gaps in the example are common — start there."
  - "Do not run a 3PAO assessment until your readiness percentage is in the high 80s. Failed assessments cost more than the delay."
  - "An Agency ATO is faster than a JAB P-ATO if you have a sponsor. Confirm sponsorship before committing to a timeline."
  - "All federal authorization packages must be reviewed by qualified compliance counsel and your accredited 3PAO. This prompt produces planning documentation, not a readiness attestation."
  - "Do not represent gap analysis output as a 3PAO finding or as agency-cleared. The distinction matters in procurement conversations."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - soc2-control-narrative-federal
  - federal-rfp-capability-statement
  - insider-risk-incident-narrative
tags:
  - federal
  - fedramp
  - nist
  - compliance
  - security
---
