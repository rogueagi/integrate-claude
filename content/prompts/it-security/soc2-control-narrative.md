---
title: "Write a SOC 2 control narrative for a specific control objective"
slug: soc2-control-narrative
function: it-security
role: security
description: "Generate a SOC 2 control narrative that maps a specific Trust Services Criterion to your actual implementation, evidence, and testing approach."
useCase: "Use this prompt during SOC 2 readiness, when responding to auditor information requests, or when documenting a new control. The output is a narrative your auditor can match against evidence — concrete, factual, and free of vague compliance language."
prompt: |
  You are a security/compliance engineer drafting a SOC 2 control narrative. The auditor needs concrete operational fact, not aspirational policy. Be precise about who, what, when, how, and what the evidence is.

  Inputs:
  - Trust Services Criterion: {{tsc}} (e.g., CC6.1, CC7.2, A1.2)
  - Control objective in plain English: {{objective}}
  - Our environment: {{environment}}
  - Existing tooling and controls: {{controls}}
  - Frequency of operation: {{frequency}}
  - Owners: {{owners}}
  - Known gaps or qualifications: {{known_gaps}}

  Produce a control narrative with:

  1. **Control ID and TSC mapping**: state the criterion and any sub-points; map to other frameworks (ISO 27001, NIST CSF) if relevant

  2. **Control description** (2–4 sentences): what the control is, in operational terms

  3. **Process narrative**: step-by-step how the control operates in practice. Name the systems, the actors, and the triggers. Avoid passive voice ("is reviewed" — say who reviews, on what cadence).

  4. **Evidence**: the artifacts an auditor would request to verify. For each: where it lives, who can pull it, retention period, format

  5. **Testing approach**: how an auditor (or internal control owner) would test operating effectiveness. Include sample size guidance.

  6. **Frequency and timing**: when does the control execute (continuous, daily, monthly, on-event)

  7. **Roles and responsibilities**: control owner, operator, reviewer, escalation. Real names not required; titles required.

  8. **Exceptions and remediation**: how exceptions are handled, where they're logged, who approves

  9. **Related controls and dependencies**: what else has to work for this control to be effective

  10. **Known gaps / planned improvements**: be honest. Auditors prefer "we acknowledge X, here is the remediation plan" over "everything is perfect."

  Tone: factual, specific, free of phrases like "robust framework" or "industry best practice." A senior auditor should read this and know exactly what to ask for.
variables:
  - "{{tsc}}"
  - "{{objective}}"
  - "{{environment}}"
  - "{{controls}}"
  - "{{frequency}}"
  - "{{owners}}"
  - "{{known_gaps}}"
exampleInput: |
  tsc: CC6.1 — Logical and Physical Access Controls — The entity implements logical access security software, infrastructure, and architectures over protected information assets to protect them from security events.
  objective: Production AWS access is granted on least-privilege basis, MFA is required, and access is reviewed quarterly.
  environment: AWS multi-account org (5 accounts: prod, staging, dev, security, audit-log). EKS clusters in prod. Identity managed in Okta + AWS IAM Identity Center (federated).
  controls: |
    - All human access to AWS goes through Okta SSO → IAM Identity Center → IAM role assumption (no IAM users)
    - MFA enforced at Okta (hardware key required for prod); no MFA bypass possible without IT helpdesk ticket
    - Permission sets aligned to roles (engineer-prod-readonly, engineer-prod-deploy, sre-prod-admin, etc.)
    - JIT prod access: engineers request 4-hour session via Slack /access bot; peer approval required
    - CloudTrail logs centralized in audit-log account, 1-year retention, S3 object lock
    - Quarterly access review: HR ownership feed → IT runs script → managers attest in tracking sheet → exceptions remediated within 5 business days
  frequency: |
    Continuous (preventive): SSO, MFA, role-based permissions
    On-event: JIT access requests, peer approval
    Quarterly: access review attestation
  owners: |
    Control owner: VP of Security
    Operator: IT (provisioning) and Security (review tooling)
    Reviewer: Manager of each access holder
  known_gaps: |
    - Service account access (machine identities) is reviewed annually rather than quarterly
    - Two legacy IAM users in dev account remain pending migration to IAM Identity Center; tracked in JIRA SEC-1841
exampleOutput: |
  # Control Narrative: AWS Production Logical Access (CC6.1.A)

  Control ID: SEC-CC6.1.A
  Effective: 2026-01-01. Last updated: 2026-05-07. Owner: VP of Security.

  ## 1. TSC mapping

  - SOC 2 TSC: CC6.1 (primary), CC6.2 (user provisioning/deprovisioning), CC6.3 (least privilege)
  - ISO 27001 Annex A: A.5.15, A.5.16, A.5.18, A.8.3
  - NIST CSF: PR.AC-1, PR.AC-3, PR.AC-4

  ## 2. Control description

  Human access to AWS production resources requires Okta SSO authentication with phishing-resistant MFA, federates into IAM Identity Center, and grants only the AWS IAM role corresponding to the user's job function. Privileged production access (write/admin) is just-in-time with peer approval, time-bounded to 4 hours, and logged. Quarterly access reviews confirm continued business need; CloudTrail provides immutable audit logs.

  ## 3. Process narrative

  **Provisioning (CC6.2)**: When HR creates a new hire record in BambooHR, an automated SCIM connection provisions the user in Okta with default group membership based on department. Engineering managers add new hires to the appropriate AWS permission set group (e.g., `engineer-prod-readonly`) within 1 business day; this is logged in Okta and visible in the Okta admin audit log.

  **Authentication and authorization (CC6.1)**: Users authenticate to Okta with username + hardware-key MFA (YubiKey or Touch ID where attested). Okta SAML asserts to AWS IAM Identity Center, which assumes the IAM role mapped to the user's permission set group. There are no AWS IAM users with console password access for human use; legacy exceptions are tracked (see §10).

  **Just-in-time prod write/admin access**: Engineers needing prod write access run `/access prod` in Slack. The bot requires (a) a Linear ticket reference, (b) peer approval from another engineer in the same domain, (c) a reason free-text. On approval, the bot grants a 4-hour session against the `engineer-prod-deploy` permission set; expiry is enforced by IAM Identity Center session duration. All requests log to the security data lake.

  **Deprovisioning (CC6.2)**: When HR closes the employment record in BambooHR, Okta deprovisioning runs within 1 hour. Okta deprovisioning revokes IAM Identity Center sessions, which terminates active AWS sessions on next API call. IT runs a daily reconciliation between HR and Okta to catch any drift; mismatches page IT-on-call.

  **Quarterly access review (CC6.3)**: On the first business day of each quarter, the Security team runs `scripts/access_review.py`, which exports a manager-by-direct-report view of AWS permission set assignments. The output goes to a tracking sheet in `<sheet:quarterly-access-review-Q[N]>`. Each manager has 10 business days to attest by marking each row "approved", "remove", or "exception". Removals are executed by IT within 5 business days of the attestation date; exceptions require VP-level approval and re-review next quarter.

  ## 4. Evidence

  | Artifact | Location | Retention | Owner |
  |---|---|---|---|
  | Okta admin audit log | Okta tenant; replicated to S3 | 7 years | IT |
  | IAM Identity Center assignment history | AWS Audit Manager + CloudTrail in audit-log account | 1 year (CloudTrail), 7 years (Audit Manager export) | Security |
  | JIT access request log | Datadog logs index `app:access-bot` | 1 year | Security |
  | Quarterly access review sheet (signed/dated) | Google Drive `Security/Audit/Quarterly Access Reviews/` | 7 years | Security |
  | HR-to-Okta reconciliation report | Datadog dashboard + daily ticket if drift | 1 year | IT |
  | CloudTrail logs | S3 with object lock in audit-log account | 1 year online + 7 years archive | Security |

  ## 5. Testing approach

  An auditor would test:

  - **Design**: review this narrative, the access bot source, the access review script, the Okta SCIM configuration. Confirm no IAM users with console access (sample CloudTrail for `ConsoleLogin` events).
  - **Operating effectiveness — provisioning**: select a sample of N=25 new hires from the audit period; trace each from BambooHR record → Okta provisioning → first AWS access. Confirm timing within 1 business day.
  - **Operating effectiveness — deprovisioning**: select N=15 terminations from the audit period; confirm Okta deprovisioning within 1 hour, AWS session termination on next API call.
  - **Operating effectiveness — JIT access**: select N=25 prod write sessions; verify ticket reference, peer approval, and session duration ≤4 hours.
  - **Operating effectiveness — quarterly review**: review all 4 quarterly review packets in the audit period; confirm 100% manager attestation, removals executed within 5 business days, exceptions properly approved.
  - **MFA**: confirm Okta policy enforces hardware MFA for production permission sets; sample N=10 successful logins to confirm MFA factor used.

  ## 6. Frequency and timing

  - **Continuous (preventive)**: SSO + MFA + role-based authorization on every authentication
  - **On-event**: JIT requests within minutes of need; provisioning within 1 business day; deprovisioning within 1 hour
  - **Daily**: HR-Okta reconciliation
  - **Quarterly**: access review attestation cycle (10 business days for managers + 5 business days for remediation)

  ## 7. Roles and responsibilities

  - **Control owner**: VP of Security — accountable for design and effectiveness
  - **Operators**: IT Manager (provisioning, deprovisioning, daily reconciliation), Security Engineer (access bot, audit log integrity)
  - **Approvers**: Engineering managers (provisioning), peers (JIT), VP of Security (exceptions)
  - **Reviewers**: Direct managers (quarterly access review), VP of Security (quarterly summary)

  ## 8. Exceptions and remediation

  Exceptions are logged in `<linear:SEC project>` with label `access-exception`. Each exception has: justification, mitigating control, expiry date (max 90 days), VP of Security approval. Expired exceptions auto-revert to default deny; the ticket reopens. Quarterly access review surfaces all open exceptions for re-attestation.

  ## 9. Related controls and dependencies

  - **CC6.6**: Network segmentation — VPC, security groups, NetworkPolicy on EKS
  - **CC6.7**: Encryption in transit — TLS to all AWS APIs, mTLS in service mesh
  - **CC7.2**: Detection of unauthorized changes — CloudTrail with anomaly detection alerts
  - **Dependencies**: Okta tenant availability; SCIM connector; CloudTrail delivery; the access bot service

  Failure modes the control depends on: Okta outage degrades AWS login (mitigation: emergency break-glass IAM user with hardware MFA in physical safe, use logged); CloudTrail delivery interruption masks audit data (monitored by GuardDuty `Stealth:IAMUser/CloudTrailLoggingDisabled`).

  ## 10. Known gaps and planned improvements

  - **Service account quarterly review**: Machine-identity access (IAM roles for services) is currently reviewed annually rather than quarterly. Plan: align to quarterly cadence by Q3 2026; tracked in `<linear:SEC-1842>`.
  - **Legacy IAM users in dev account**: Two IAM users remain in the dev account from a 2023 tooling integration. Migration to IAM Identity Center planned by 2026-07-01; tracked in `<linear:SEC-1841>`. These users have no production access and are MFA-enforced via IAM policy.
  - **Break-glass account testing**: Documented but tested annually; will move to semiannual testing in 2026-Q3.
tips:
  - "Auditors prefer specific over impressive. 'Quarterly within 10 business days, tracked in <sheet>' beats 'a robust periodic review process.'"
  - "Name the systems and the artifacts. 'Logged in CloudTrail' is good; 'Logged in CloudTrail in the audit-log account, 1-year retention with S3 object lock' is what gets you a clean opinion."
  - "Acknowledge gaps. Auditors trust narratives that include known limitations more than ones that claim perfection. The 'planned improvements' section is your friend."
  - "Use active voice. 'Managers attest' tells the auditor who; 'Access is attested' invites a follow-up question about who exactly."
  - "AI assistance is not a replacement for security review by qualified professionals. Have your compliance lead or external auditor preview the narrative before submission — control wording has audit consequences."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - secrets-management-policy
  - third-party-vendor-risk-assessment
  - security-policy-acceptable-use
tags:
  - soc2
  - compliance
  - control-narrative
  - security
  - audit
---
