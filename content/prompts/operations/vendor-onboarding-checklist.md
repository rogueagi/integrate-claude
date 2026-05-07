---
title: "Create an onboarding checklist for a new vendor relationship"
slug: vendor-onboarding-checklist
function: operations
role: vendor-management
description: "Generate a comprehensive onboarding checklist for a new vendor that covers legal, technical, financial, and operational setup steps to ensure a smooth start to the relationship."
useCase: "Use this prompt immediately after signing a new vendor contract. Vendor onboarding failures — missed setup steps, unclear ownership, data security gaps — are common and expensive. This checklist gives you a structured playbook for getting the relationship started correctly."
prompt: |
  You are a vendor management and procurement expert. Create a comprehensive vendor onboarding checklist for the new vendor relationship described below.

  **Vendor name:** {{vendor_name}}
  **What they provide:** {{vendor_service}}
  **Contract signed:** {{contract_signed_date}}
  **Go-live target:** {{go_live_date}}
  **Internal owner of this vendor relationship:** {{internal_owner}}
  **Teams that will interact with this vendor:** {{teams_involved}}
  **Data or systems they will access:** {{data_systems_access}}
  **Compliance requirements:** {{compliance_requirements}}
  **Contract value:** {{contract_value}}
  **Vendor contact:** {{vendor_contact}}

  Create a vendor onboarding checklist organized into phases with clear owners, due dates (relative to go-live), and completion criteria.

  ## Phase 1: Legal and Compliance Setup (Days 1–5)
  All items required before the vendor accesses any systems or data. Include:
  - Contract execution and filing
  - NDA and data processing agreements
  - Background check or security review requirements
  - Compliance certifications verification
  - Insurance certificate collection
  - Vendor registration in internal systems (finance, legal)

  ## Phase 2: Financial and Administrative Setup (Days 1–7)
  Items needed to pay the vendor and manage the relationship operationally:
  - Vendor setup in AP/ERP system
  - Banking and payment information collection
  - W-9 / tax form collection
  - Invoice routing and approval workflow established
  - Budget coding and cost center assignment

  ## Phase 3: Technical and Security Setup (Days 3–14)
  All technical integration and access provisioning steps:
  - Security review completion (if required)
  - Access provisioning (which systems, which users, which permission levels)
  - SSO or identity provider integration
  - Data sharing agreement and data handling protocol
  - API keys, credentials, and secrets management
  - Test environment setup before production access
  - Network/firewall configuration if required

  ## Phase 4: Operational Integration (Days 7–21)
  Setting up the working relationship processes:
  - Kickoff meeting agenda and scheduling
  - Communication channels established (Slack, email, ticketing)
  - Escalation path documented (vendor side and internal side)
  - SLA monitoring process established
  - Recurring review cadence scheduled
  - Internal team training on the vendor's service
  - Documentation and runbooks

  ## Phase 5: Go-Live Validation (Go-Live Day)
  Final checks before full activation:
  - Acceptance criteria verified
  - Rollback plan confirmed
  - Stakeholder notifications sent
  - Support contacts verified and reachable

  ## Phase 6: Post-Launch Review (Day 30 and Day 90)
  Structured check-ins after go-live:
  - 30-day health check criteria
  - 90-day performance review items

  For each checklist item, provide:
  - **Task:** Clear, specific action
  - **Owner:** Internal role responsible (not a team — a specific role)
  - **Due:** Relative timing (e.g., "Day 3", "5 days before go-live")
  - **Completed:** [ ] checkbox
  - **Notes:** Any context or instructions for completing the task

  Also provide:
  - A **vendor information collection template** (all the info you need from the vendor on Day 1)
  - A **kickoff meeting agenda** template
  - A **30-day check-in** template
variables:
  - "{{vendor_name}}"
  - "{{vendor_service}}"
  - "{{contract_signed_date}}"
  - "{{go_live_date}}"
  - "{{internal_owner}}"
  - "{{teams_involved}}"
  - "{{data_systems_access}}"
  - "{{compliance_requirements}}"
  - "{{contract_value}}"
  - "{{vendor_contact}}"
exampleInput: |
  vendor_name: Workato
  vendor_service: Integration platform (iPaaS) — automating workflows between Salesforce, NetSuite, and Slack
  contract_signed_date: November 1
  go_live_date: December 1
  internal_owner: IT Director (Sam Chen)
  teams_involved: IT, Finance (NetSuite), Sales Ops (Salesforce), Operations
  data_systems_access: Salesforce (read/write), NetSuite (read/write), Slack (write only) — contains customer PII and financial data
  compliance_requirements: SOC 2 Type II required, DPA required (customer PII in Salesforce), not subject to HIPAA
  contract_value: $36,000/year
  vendor_contact: Jamie Torres, Customer Success Manager at Workato
exampleOutput: |
  # Vendor Onboarding Checklist: Workato Integration Platform
  **Internal Owner:** Sam Chen (IT Director) | **Go-Live:** December 1 | **Contract Value:** $36K/year

  ## Phase 1: Legal and Compliance Setup (Days 1–5)

  | # | Task | Owner | Due | Done | Notes |
  |---|------|-------|-----|------|-------|
  | 1.1 | File executed contract in legal repository (Google Drive/Legal folder) | Sam Chen | Day 1 | [ ] | Contract signed Nov 1; file under /Vendors/Workato/ |
  | 1.2 | Request and receive current SOC 2 Type II report from Workato | Sam Chen | Day 2 | [ ] | Email Jamie Torres; report must be dated within 12 months |
  | 1.3 | Legal review and execute Data Processing Agreement (DPA) | Legal / Sam Chen | Day 3 | [ ] | DPA required due to Salesforce PII — use company standard template or review Workato's |
  | 1.4 | Confirm Workato's cyber insurance certificate ($1M minimum) | Sam Chen | Day 3 | [ ] | Request certificate of insurance from Jamie |
  | 1.5 | Register Workato as approved vendor in compliance tracker | Sam Chen | Day 5 | [ ] | Update vendor registry in Notion |

  ## Phase 2: Financial and Administrative Setup (Days 1–7)

  | # | Task | Owner | Due | Done | Notes |
  |---|------|-------|-----|------|-------|
  | 2.1 | Create Workato vendor record in NetSuite | AP Coordinator | Day 3 | [ ] | Need W-9 and banking info from vendor first |
  | 2.2 | Collect W-9 from Workato | Sam Chen | Day 2 | [ ] | Request from Jamie Torres |
  | 2.3 | Collect ACH banking information (for payment) | Sam Chen | Day 2 | [ ] | Use secure collection method — do NOT send via email |
  | 2.4 | Set up invoice approval workflow in NetSuite | AP Coordinator | Day 5 | [ ] | Invoices >$5K require IT Director + CFO approval |
  | 2.5 | Assign budget code and cost center | Sam Chen + Finance | Day 3 | [ ] | Cost center: IT Infrastructure |

  ## Phase 3: Technical and Security Setup (Days 3–14)

  | # | Task | Owner | Due | Done | Notes |
  |---|------|-------|-----|------|-------|
  | 3.1 | Complete internal security review of Workato's data handling | IT Security | Day 5 | [ ] | Use standard vendor security questionnaire |
  | 3.2 | Create dedicated Workato integration user accounts in Salesforce (read/write) | Salesforce Admin | Day 7 | [ ] | Do not use personal accounts — create service accounts |
  | 3.3 | Create dedicated Workato integration user accounts in NetSuite (read/write) | NetSuite Admin | Day 7 | [ ] | Minimum permissions principle — only grant what's needed |
  | 3.4 | Provision Slack bot account for Workato (write only, designated channels only) | IT | Day 7 | [ ] | List which channels Workato can post to |
  | 3.5 | Store all API keys and credentials in 1Password (IT vault) | Sam Chen | Day 8 | [ ] | Never store credentials in Workato UI notes or spreadsheets |
  | 3.6 | Configure and test sandbox/test environment before production | Sam Chen + Workato | Day 14 | [ ] | All recipe testing must occur in sandbox first |

  ## Vendor Information Collection Template (Request Day 1)
  Send to Jamie Torres on Day 1:
  - Company legal name and registered address
  - W-9 form
  - ACH banking information (for payment) — provide secure link for submission
  - Current SOC 2 Type II report
  - Certificate of insurance (cyber liability, general liability)
  - Primary support contact and escalation contact
  - Customer success contact (Jamie confirmed)
  - Support ticketing system URL and how to create tickets
  - Emergency/after-hours contact for P0 incidents

  ## Kickoff Meeting Agenda (Schedule for Day 5–7)
  1. Introductions and roles (10 min)
  2. Review project scope and integration requirements (15 min)
  3. Technical environment review — what Workato needs from us (15 min)
  4. Implementation timeline and milestones (10 min)
  5. Communication and escalation protocol (5 min)
  6. Q&A and next steps (5 min)

  ## 30-Day Check-In Template
  - Are all integrations running as expected?
  - Any incidents or unexpected behavior in the first 30 days?
  - Are Workato SLAs being met? (uptime, support response time)
  - Team satisfaction with support quality (1–5 rating)
  - Any unresolved open items from onboarding?
  - Changes needed to scope or access permissions?
tips:
  - "Send the vendor information collection template on Day 1 — don't wait until you need the W-9 to ask for it. Missing tax forms delay first payments."
  - "Never use personal user accounts for vendor API integrations. Always create dedicated service accounts with minimum necessary permissions. When someone leaves, you want to be able to rotate credentials without affecting individual users."
  - "The 30-day and 90-day check-ins are where most vendor relationships either get healthy or get toxic. Put them on the calendar at kickoff — don't schedule them reactively."
  - "Collect the SOC 2 report before you give them any system access — not after. Most vendors will share it readily; any hesitation is a red flag."
complexity: beginner
modelRecommendation: claude-haiku
relatedSlugs:
  - vendor-evaluation-scorecard
  - vendor-performance-review
  - sop-draft
  - vendor-contract-checklist
tags:
  - vendor-management
  - onboarding
  - procurement
  - security
  - operations
---
