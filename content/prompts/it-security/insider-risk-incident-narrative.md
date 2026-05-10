---
title: "Insider risk incident narrative for internal review"
slug: insider-risk-incident-narrative
function: it-security
role: security
description: "Draft a factual insider risk incident narrative for internal review, covering timeline, evidence, scope, and next-step recommendations without prejudging intent."
useCase: "Use this prompt when documenting a confirmed or suspected insider risk event for internal review by Security, Legal, and HR. It produces a narrative that captures the timeline and evidence rigorously while leaving determinations of intent and discipline to the appropriate reviewers."
prompt: |
  You are a senior insider risk analyst preparing a narrative for review by Security, Legal, and HR. Draft the incident narrative.

  Case context:
  - Case ID: {{case_id}}
  - Date opened: {{date_opened}}
  - Status: {{status}} (e.g., active, contained, closed)
  - Subject role and tenure: {{subject_role_tenure}} — describe role and tenure only, do not include name in the narrative
  - Detection source: {{detection_source}} (e.g., DLP rule, SIEM alert, manager report, customer report)
  - Systems involved: {{systems}}
  - Data classification potentially impacted: {{data_classification}}

  Evidence collected (raw, time-ordered):
  {{evidence}}

  Actions taken to date:
  {{actions_taken}}

  Open questions / unresolved items:
  {{open_questions}}

  Produce a narrative with these sections:

  1. Summary — three to five sentences. What was detected, when, what we know, what is still unknown. State scope at the highest confidence level the evidence supports.
  2. Timeline of events — chronological, with timestamps to the minute where evidence supports it. Each entry: timestamp, source, observation, confidence (high / medium / low). Do not interpret intent; describe behaviors.
  3. Scope of potential exposure — what data, systems, or people may have been affected. Distinguish confirmed exposure from possible exposure based on evidence collected.
  4. Containment and response actions — what has been done, by whom, and when.
  5. Evidence preservation status — chain of custody summary, where artifacts are stored, who has access.
  6. Open questions — what we still do not know and what would resolve each.
  7. Recommended next steps — operational, not punitive (e.g., interview, additional log pulls, scope expansion). Do not recommend disciplinary action; that is the joint Legal/HR call.

  Rules:
  - Use neutral, factual language. Do not use words like "malicious", "stole", "exfiltrated" unless evidence directly supports them; use "transferred", "accessed", "downloaded" instead.
  - Do not refer to the subject by name. Use "the subject" or "the user".
  - Do not include personally identifiable information beyond role and tenure.
  - Mark anything inferred but not directly evidenced as [inference — supporting evidence partial].
  - Tone: factual, dispassionate, audit-ready.

  Important: insider risk cases require coordination with Legal, HR, and Privacy from the earliest reasonable point. This narrative is an internal working document, not a determination. All decisions about discipline, termination, or referral to law enforcement must be made through your formal review process with qualified counsel. Local employment, privacy, and labor laws vary by jurisdiction; this prompt does not provide legal advice.
variables:
  - "{{case_id}}"
  - "{{date_opened}}"
  - "{{status}}"
  - "{{subject_role_tenure}}"
  - "{{detection_source}}"
  - "{{systems}}"
  - "{{data_classification}}"
  - "{{evidence}}"
  - "{{actions_taken}}"
  - "{{open_questions}}"
exampleInput: |
  case_id: IR-2026-0214
  date_opened: 2026-05-02
  status: contained, under review
  subject_role_tenure: senior software engineer, 4 years 7 months tenure, recently transferred from product team to platform team
  detection_source: DLP rule on cloud storage egress to personal email domain
  systems: GitHub Enterprise, AWS S3 (production-data bucket), Google Workspace (corporate email), personal Gmail account
  data_classification: source code (internal), customer data (restricted) — exposure status to be determined
  evidence:
  - 2026-04-28 14:12 UTC — DLP alert: 47 MB compressed archive sent from corporate Gmail to personal Gmail address; subject's account
  - 2026-04-28 13:55 UTC — GitHub Enterprise audit log: subject cloned 6 internal repos in a 12-minute window, two outside subject's normal scope
  - 2026-04-29 09:30 UTC — Manager reported subject mentioned interviewing externally
  - 2026-04-30 10:00 UTC — Forensic image of work laptop captured; chain of custody initiated
  - 2026-05-01 — S3 access logs reviewed; no unusual access to customer-data bucket in 30-day window
  - 2026-05-02 11:00 UTC — Account credentials rotated, GitHub access suspended pending review
  actions_taken:
  - Account access suspended for GitHub, AWS, internal SaaS
  - Forensic image of laptop preserved
  - DLP rule extended to additional egress channels
  - Manager and Legal notified within 4 hours of initial alert
  open_questions:
  - Did the archive sent to personal Gmail contain customer data, source code, or both?
  - Were any external collaborators (vendors, contractors) involved?
  - Are other accounts in the subject's team showing similar patterns?
exampleOutput: |
  Summary
  On 2026-04-28, a DLP rule detected a 47 MB compressed archive transferred from the subject's corporate Gmail account to a personal Gmail address. Audit logs from the same day show the subject cloned six internal GitHub repositories in a 12-minute window, two of which fall outside the subject's normal work scope. The subject is a senior software engineer with 4 years 7 months of tenure, recently transferred to the platform team. Customer-data S3 access logs over the prior 30 days do not show unusual access. Containment actions have been taken; scope of the transferred archive contents is still under review.

  Timeline of events
  | Timestamp (UTC) | Source | Observation | Confidence |
  | 2026-04-28 13:55 | GitHub Enterprise audit log | Subject cloned six internal repositories in 12 minutes; two repositories are outside the subject's normal team scope | High |
  | 2026-04-28 14:12 | DLP egress alert | 47 MB compressed archive transferred from corporate Gmail to a personal Gmail address associated with the subject | High |
  | 2026-04-29 09:30 | Manager report | Manager reported the subject had mentioned interviewing externally; date and detail of interviews unspecified | Medium |
  | 2026-04-30 10:00 | Forensics team | Forensic image of subject's work laptop captured; chain of custody initiated | High |
  | 2026-05-01 | AWS CloudTrail | S3 access logs reviewed for the production customer-data bucket over a 30-day window; no anomalous access pattern identified | High |
  | 2026-05-02 11:00 | IT operations | Subject's account credentials rotated; GitHub access suspended pending review | High |

  Scope of potential exposure
  - Confirmed: 47 MB archive transferred outside the corporate boundary [contents under review]
  - Confirmed: six repositories cloned, two outside normal scope; cloned repository contents are internal code, no customer data resides in those repos based on classification metadata
  - Possible: archive contents could include source code, internal documents, or other categories — pending forensic analysis of the archive
  - Not indicated by current evidence: customer-data S3 bucket access; cross-account collaborator activity [inference — supporting evidence partial, additional log review pending]

  Containment and response actions
  - 2026-05-02: All subject account access suspended (GitHub, AWS, SaaS)
  - 2026-04-30: Forensic image preserved with documented chain of custody
  - 2026-04-28: DLP rule extended to additional egress channels (Slack, Box, personal cloud storage)
  - 2026-04-28: Manager and Legal notified within four hours of initial alert
  - Privacy team consulted regarding subject monitoring scope; review limited to systems and time windows authorized under company acceptable use policy

  Evidence preservation status
  Forensic image, GitHub audit exports, DLP alert payload, and CloudTrail exports are stored in the case evidence vault under access control limited to the assigned analyst, the security director, and Legal. Chain of custody log initiated 2026-04-30 10:00 UTC.

  Open questions
  - Archive contents — pending offline forensic analysis (estimated complete within 5 business days)
  - External collaborators — repository fork and clone audit pending across the subject's broader access scope
  - Team-level patterns — comparable behavior review for the platform team will be performed under Privacy team scoping

  Recommended next steps (operational)
  1. Complete forensic analysis of the transferred archive and document categorized contents
  2. Conduct an interview of the subject jointly with HR and Legal once forensic scope is known
  3. Expand audit window for the subject's GitHub and SaaS activity from 30 to 90 days
  4. Brief executive sponsor and Legal on scope before any communications outside the review group
  5. Convene formal review with Legal, HR, and Privacy to determine next-phase decisions
tips:
  - "Insider risk cases live or die on neutral language. Use 'transferred' not 'exfiltrated'; 'accessed' not 'stole'. The narrative may end up as evidence."
  - "Loop in Legal, HR, and Privacy at the first credible signal, not after the fact. The most common procedural error is delayed notification."
  - "Always use confidence levels (high/medium/low) on timeline entries. Mixed confidence is normal and admitting it improves the credibility of the high-confidence findings."
  - "Do not recommend discipline in the narrative. The reviewer panel makes that call. Limit your recommendations to operational next steps."
  - "Local employment, privacy, and labor laws vary widely. This prompt produces an internal working document, not a determination. All discipline, termination, and law enforcement decisions require qualified counsel."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - soc2-control-narrative-federal
  - fedramp-readiness-gap-analysis
  - government-customer-comms-incident
tags:
  - federal
  - insider-risk
  - incident-response
  - security
  - investigation
---
