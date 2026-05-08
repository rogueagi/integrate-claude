---
title: "Risk-assess a third-party SaaS vendor"
slug: third-party-vendor-risk-assessment
function: it-security
role: security
description: "Conduct a structured third-party risk assessment of a SaaS vendor — security posture, data handling, contractual gaps, and recommendations."
useCase: "Use this prompt when a team requests a new SaaS tool, during annual vendor reviews, or when an existing vendor changes scope. The output is the doc procurement and security can act on — not a 60-page questionnaire that nobody reads."
prompt: |
  You are a third-party risk professional conducting a vendor risk assessment. Be specific. SOC 2 Type II is not a substitute for thinking about how this vendor will actually be used.

  Inputs:
  - Vendor name: {{vendor}}
  - Product/service we'd buy: {{product}}
  - Use case at our org: {{use_case}}
  - Data we'd send them: {{data_sent}}
  - Data they'd send us / access: {{data_access}}
  - Integration model: {{integration}} (SSO, API, file transfer, agent, browser-only)
  - Vendor-provided artifacts: {{artifacts}} (SOC 2, ISO, pen test, security questionnaire)
  - Spend / criticality: {{criticality}}
  - Alternatives considered: {{alternatives}}

  Produce:

  1. **Executive summary** (3 lines): recommendation (approve / approve with conditions / deny), top risks, top conditions

  2. **Scoping**: classify the vendor — Tier 1 (handles regulated data / high spend / critical to ops), Tier 2, Tier 3. Justify.

  3. **Security posture**: review SOC 2 / ISO / pen test artifacts; flag specific exceptions, qualified opinions, missing controls. Don't accept "they have SOC 2" as the answer.

  4. **Data handling**: where is data stored, who at the vendor can access it, encryption at rest and in transit, backup and retention, sub-processor list, data residency

  5. **Identity and access**: SSO support, SCIM, MFA enforcement options, API key model, audit log availability and export

  6. **Operational risk**: SLA, RTO/RPO, status page history, customer concentration, financial stability if known

  7. **Contractual/legal**: DPA terms, breach notification window, liability cap, termination data export, audit right

  8. **Specific risks identified** (3–7): each with description, likelihood, impact, recommended mitigation

  9. **Conditions for approval**: specific contract or technical requirements that would resolve key risks

  10. **Re-review trigger and cadence**

  Tone: skeptical, vendor-neutral. Vendors will tell you everything is fine; your job is to ask "what specifically?"
variables:
  - "{{vendor}}"
  - "{{product}}"
  - "{{use_case}}"
  - "{{data_sent}}"
  - "{{data_access}}"
  - "{{integration}}"
  - "{{artifacts}}"
  - "{{criticality}}"
  - "{{alternatives}}"
exampleInput: |
  vendor: AcmeAI Notetaker
  product: Meeting transcription and summary tool that joins Zoom/Google Meet via bot, transcribes, and posts summary to connected workspaces
  use_case: Sales team wants it for call recap; CS team wants it for support tickets; some PMs want it for user research transcripts
  data_sent: Audio of meetings (some include customer voice, NDA discussions, pre-release product details, occasional PII)
  data_access: They store transcripts and summaries; users can access via web app and API
  integration: Bot joins meetings via calendar integration; SSO available; webhook to Slack
  artifacts: SOC 2 Type II (2024 report), pen test summary (2025), security questionnaire (CAIQ Lite), no ISO 27001
  criticality: Tier 2 (handles customer voice and pre-release info, $48k/yr, used by 60+ users); not in critical path of customer service
  alternatives: Otter.ai (similar profile), Fireflies (similar), build something internal (not viable in 2026)
exampleOutput: |
  # Vendor Risk Assessment: AcmeAI Notetaker

  Author: Security + Procurement. Date: 2026-05-07. Status: Draft for CISO review.

  ## 1. Executive summary

  - **Recommendation**: Approve with conditions
  - **Top risks**: (1) recordings include customer voice and pre-release product info — significant content sensitivity; (2) sub-processor list includes a transcription model provider with weaker controls than the vendor itself; (3) no audit log export to our SIEM today
  - **Top conditions**: contract DPA with explicit breach notice ≤72h; admin opt-out at meeting level; admin-controlled retention ≤90 days; vendor commits to surface audit log via API within 6 months

  ## 2. Scoping

  Tier 2 vendor:
  - Spend: $48k/yr (below Tier 1 threshold of $100k)
  - Data: includes customer voice (PII via voice biometrics) and pre-release product information (confidential)
  - Operationally non-critical: tool failure does not block customer service
  - Tier 2 review applies — annual reassessment, contract DPA required, security questionnaire with technical follow-ups

  ## 3. Security posture

  **SOC 2 Type II (2024 report)**: clean opinion. Reviewed exceptions noted in Section 5 of the report — specifically:
  - One exception in CC6.1 around delayed deprovisioning (median 5 business days vs 1 day target). Vendor remediation plan claims fix Q2 2024; need to confirm in next report.
  - Period covered: Oct 2023–Sep 2024. We will request the bridging letter for Oct 2024–present.

  **Pen test (2025)**: high-level summary only; no findings disclosed publicly. Requesting redacted full report under NDA — necessary before final approval.

  **No ISO 27001**: not a deal-breaker for Tier 2 but worth tracking; vendor states ISO 27001 in progress for 2026.

  **CAIQ Lite**: 50% of full CAIQ; gaps in detailed answers around encryption key management and sub-processor controls. We will follow up via a targeted questionnaire.

  ## 4. Data handling

  | Item | Status | Note |
  |---|---|---|
  | Storage location | AWS us-east-1 + eu-west-1 | EU data residency available on Enterprise plan; we are on Enterprise |
  | Encryption at rest | AES-256 (AWS KMS) | OK |
  | Encryption in transit | TLS 1.2+ | OK |
  | Customer-managed keys | Not available | Risk — high-sensitivity content (pre-release product) cannot be kept under our key |
  | Sub-processors | AWS, OpenAI (transcription), Anthropic (summary), Stripe (billing), DataDog (their telemetry) | OpenAI sub-processor concerning — see §8 |
  | Retention | Admin-configurable, default 1 year | Configure to 90 days |
  | Backup retention | 30 days post-deletion | Acceptable |
  | Data residency for EU users | Yes (eu-west-1) | Good |
  | Vendor employee access to data | "Limited to support engineers under access controls" — need specifics | Pending — request access control documentation |

  ## 5. Identity and access

  - **SSO**: SAML supported (Okta, Azure AD)
  - **SCIM**: Available on Enterprise plan; we will enable
  - **MFA**: enforceable through SSO; vendor doesn't support MFA bypass
  - **API keys**: per-user and per-workspace; rotatable; granular scopes available
  - **Audit log**: visible in admin UI, 90-day retention; **no export to SIEM today** — vendor has API but no streaming integration. This is a real gap for Tier 2.
  - **Admin controls**: meeting-level opt-out (admin can configure "do not record"); per-team controls; retention configurable

  ## 6. Operational risk

  - **SLA**: 99.9% uptime, financial credit; reviewed last 12 months of status page — three incidents over 1 hour, longest 4h11m. Acceptable for non-critical use.
  - **Customer concentration**: vendor reports no single customer >5% of revenue; founded 2021; Series B closed 2024 ($55M). Financial runway adequate through next assessment cycle.
  - **Disaster recovery**: RTO 4h, RPO 1h. We do not have a hard dependency on the data; loss of summaries acceptable.

  ## 7. Contractual/legal

  Standard MSA + DPA; reviewed redlines:

  | Term | Vendor default | Our ask | Status |
  |---|---|---|---|
  | Breach notification | 7 days | ≤72h to align with GDPR | Vendor accepted |
  | Liability cap | 12 months fees | 24 months fees for breach involving PII | Negotiating; vendor offered 18 months |
  | Right to audit | Annual via SOC 2 | Add right to send a security questionnaire on incident | Accepted |
  | Termination data export | Self-serve via API | Confirmed available; export format documented | OK |
  | Sub-processor changes | 30-day notice | 30-day notice + opt-out where feasible | Vendor accepted notice; opt-out limited |
  | Training data use | "Aggregated and anonymized for model improvement" — opt-in | Confirm opt-out applies to all our content | Pending — need explicit contract language |

  ## 8. Risks identified

  | # | Risk | Likelihood | Impact | Mitigation |
  |---|---|---|---|---|
  | R-1 | OpenAI as transcription sub-processor — voice data leaves vendor's primary controls into a model provider whose data-handling for enterprise API is configurable but must be confirmed at each tier | M | M (customer voice in third-party model pipeline) | Confirm vendor uses OpenAI Enterprise endpoint with zero-data-retention; get this in writing as part of DPA addendum |
  | R-2 | Admin can't centrally enforce "do not record" for sensitive meeting types (e.g., legal review, board) — relies on user discipline | M | H if a board call is recorded | Tag sensitive calendar events with a marker the bot ignores; train Legal/Exec on opt-out; explore vendor feature request for keyword-based exclusion |
  | R-3 | No audit log export to SIEM | M | M (delayed detection of misuse) | Negotiate timeline commitment in MSA; in interim, IT runs weekly export script via API and ingests to Datadog |
  | R-4 | Pre-release product info in transcripts could leak via vendor breach; data is content-sensitive but not regulated | L (vendor has clean SOC 2) | H (competitive harm) | Set retention to 90 days; restrict access to PMs/Engineering team only; do not allow Sales bot in product roadmap meetings |
  | R-5 | Voice biometric data implications under BIPA (Illinois) and similar laws | L | M (regulatory) | Update employee notice and external recording disclaimer to cover biometric processing; confirm vendor doesn't retain biometric features beyond transcription |
  | R-6 | Vendor financial stability — Series B 2024, no profitability data; could pivot or be acquired | M | M (continuity) | Annual financial check; data export tested; do not become operationally dependent |
  | R-7 | Single point of compromise — bot has access to all calendars where invited; compromise of vendor = read access to many meetings | L | H | Restrict bot install to specific Google groups; quarterly review of which calendars have bot access |

  ## 9. Conditions for approval

  Required before contract signature:
  1. DPA addendum confirming OpenAI Enterprise zero-data-retention sub-processor configuration (R-1)
  2. Contractual training-data opt-out covering all our content (§7 row)
  3. 72-hour breach notification (already accepted)
  4. Bridging letter for SOC 2 period since Oct 2024
  5. Redacted pen test report under NDA

  Required within 90 days of go-live:
  6. Retention configured to 90 days at admin level
  7. Audit log API export pipeline to Datadog
  8. Employee policy update covering recording disclosure and biometric processing
  9. Bot calendar access restricted via Google group

  Required within 12 months:
  10. Vendor delivers SIEM streaming export (or trigger contract review)
  11. ISO 27001 certificate received

  ## 10. Re-review

  - Annual reassessment (next: 2027-05-07)
  - Triggered re-review on: change of sub-processor list, breach affecting our data, change of vendor ownership, expansion of use case to include regulated data
tips:
  - "Don't accept 'they have SOC 2' as the answer. Read the exceptions section of the report; that's where the actual risk is."
  - "Sub-processor lists are where the surprises live. Especially with AI vendors, the model provider behind the curtain often has a different control posture than the wrapper."
  - "Insist on contract terms, not vendor assurances. 'They told us they don't train on our data' is not a control; a contract clause that says it is."
  - "Match assessment depth to vendor tier. Tier 3 vendors (low spend, no sensitive data) get a lightweight 1-pager; Tier 1 gets the full treatment. Don't over-process low-risk procurement."
  - "AI assistance is not a replacement for security review by qualified professionals. Have your security lead, privacy counsel, and procurement validate the contract conditions and risk ratings — vendor risk is one of the most lawsuit-adjacent areas of security."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - threat-model-stride
  - soc2-control-narrative
  - vulnerability-triage-report
tags:
  - vendor-risk
  - tprm
  - security
  - procurement
  - compliance
---
