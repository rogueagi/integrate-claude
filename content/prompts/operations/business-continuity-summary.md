---
title: "Write a business continuity plan summary for a function"
slug: business-continuity-summary
function: operations
role: ops-management
description: "Generate a concise business continuity plan (BCP) for a specific business function, covering disruption scenarios, recovery priorities, and response procedures."
useCase: "Use this prompt when a department or function needs a documented continuity plan but doesn't have the time or expertise to write one from scratch. Works well for audits, board requests, or any time a key person is about to go on leave and continuity risks become visible."
prompt: |
  You are a business continuity and operational resilience expert. Write a business continuity plan summary for the function described below.

  **Function/department:** {{function_name}}
  **Organization size/context:** {{org_context}}
  **Critical processes this function owns:** {{critical_processes}}
  **Key personnel and their roles:** {{key_personnel}}
  **Systems and tools this function depends on:** {{systems_dependencies}}
  **Known single points of failure:** {{known_spofs}}
  **Regulatory or compliance requirements:** {{compliance_requirements}}
  **Maximum tolerable downtime for this function:** {{max_downtime}}

  Write a BCP summary with these sections:

  ## 1. Function Overview and Criticality
  - What this function does and why it matters to the business
  - Criticality rating: Mission Critical / Business Critical / Important / Supporting
  - Impact of this function being unavailable for: 1 hour / 1 day / 1 week / 1 month

  ## 2. Disruption Scenarios
  Identify the top 5–7 disruption scenarios relevant to this function. For each:
  - Scenario name and description
  - Likelihood: High / Medium / Low
  - Impact: Catastrophic / Major / Moderate / Minor
  - Current preparedness: Prepared / Partially Prepared / Not Prepared

  ## 3. Critical Process Inventory
  For each critical process:
  | Process | Frequency | RTO (Recovery Time Objective) | RPO (Recovery Point Objective) | Backup Process | Backup Owner |

  Where:
  - RTO = Maximum acceptable time to restore the process after disruption
  - RPO = Maximum acceptable data loss measured in time (e.g., last backup was 4 hours ago)

  ## 4. Key Person Dependencies
  Identify and mitigate single-person dependencies:
  - Who are the key persons whose absence would impair function operations?
  - For each: what they uniquely own, the risk if they're unavailable, and the mitigation (backup person, documented process, etc.)
  - Cross-training gaps that must be addressed

  ## 5. System and Tool Failure Responses
  For each critical system:
  - Primary system and its function
  - Estimated impact of outage
  - Manual workaround (if any)
  - Alternative tool or vendor fallback
  - Recovery steps

  ## 6. Response Playbooks (Top 3 Scenarios)
  For the top 3 most likely high-impact scenarios, write a brief response playbook:
  - Trigger: How will we know this scenario is occurring?
  - Immediate actions (first 30 minutes)
  - Short-term actions (first 24 hours)
  - Communication responsibilities
  - Recovery criteria (how do we know we're back to normal?)

  ## 7. Continuity Gaps and Action Plan
  An honest assessment of gaps in current preparedness:
  | Gap | Risk Level | Recommended Action | Owner | Target Date |

  ## 8. Plan Maintenance
  - Who owns this plan
  - How often it will be reviewed and tested
  - How to report gaps or updates
variables:
  - "{{function_name}}"
  - "{{org_context}}"
  - "{{critical_processes}}"
  - "{{key_personnel}}"
  - "{{systems_dependencies}}"
  - "{{known_spofs}}"
  - "{{compliance_requirements}}"
  - "{{max_downtime}}"
exampleInput: |
  function_name: Accounts Payable
  org_context: 120-person B2B SaaS company, $25M ARR, Series B
  critical_processes: Invoice processing and payment runs (weekly), payroll (bi-weekly), expense reimbursements (monthly), contractor payments, vendor contract renewals
  key_personnel: AP Manager (Maria Chen) — only person who can approve payments >$10K and knows the payment system; AP Specialist (Tom K.) — handles all invoice processing; CFO — final approval on payments >$50K
  systems_dependencies: NetSuite (ERP), Bill.com (payments), Gusto (payroll), Expensify (expenses), Chase Business Online (banking)
  known_spofs: Maria Chen is the only person who knows the Bill.com payment workflow. Payroll runs on a specific laptop with 2FA tied to Maria's phone. No backup admin on NetSuite.
  compliance_requirements: Payroll must run on time (FLSA/state wage laws). Vendor payments must meet contractual terms. Financial records must be audit-ready.
  max_downtime: Payroll: 0 days. Vendor payments: 3 business days. Expense reimbursements: 5 days.
exampleOutput: |
  # Business Continuity Plan: Accounts Payable
  **Owner:** CFO | **Version:** 1.0 | **Last Reviewed:** [Date]

  ## 1. Function Overview and Criticality
  **Criticality: Mission Critical**
  Accounts Payable ensures all financial obligations are met on time — employees are paid, vendors are paid, and the company remains in good legal standing with all financial counterparties.

  | Unavailability Period | Business Impact |
  |----------------------|-----------------|
  | 1 hour | Minimal — no immediate obligations |
  | 1 day | Low — payment runs can wait one day |
  | 1 week | Critical — payroll and vendor payments will miss deadlines; legal and reputational risk |
  | 1 month | Catastrophic — employee relations crisis, vendor contract breaches, potential regulatory violations |

  ## 2. Disruption Scenarios

  | Scenario | Likelihood | Impact | Preparedness |
  |----------|------------|--------|--------------|
  | AP Manager unavailable (illness, emergency) | High | Catastrophic | Not Prepared |
  | NetSuite outage | Medium | Major | Partially Prepared |
  | Bill.com outage on payment day | Medium | Major | Not Prepared |
  | Ransomware / data breach | Low | Catastrophic | Partially Prepared |
  | Bank account frozen or compromised | Low | Catastrophic | Not Prepared |
  | AP Specialist unavailable | Medium | Moderate | Not Prepared |

  ## 4. Key Person Dependencies

  **Maria Chen — AP Manager**
  - Uniquely owns: Bill.com payment approval workflow, NetSuite admin, banking credentials, 2FA for payroll system
  - Risk if unavailable: Payroll cannot run; vendor payments cannot process; $10K+ approvals blocked
  - Mitigation required: (1) Add CFO as Bill.com backup approver this week; (2) Document payroll run process step-by-step; (3) Store backup 2FA codes in company password manager; (4) Cross-train Controller on NetSuite payment workflow

  ## 6. Response Playbook: AP Manager Unexpectedly Unavailable

  **Trigger:** Maria Chen is unreachable within 2 hours of a scheduled payment run, or provides notice she cannot work for 3+ business days.

  **First 30 Minutes:**
  1. CFO logs into Bill.com using backup admin credentials (stored in 1Password)
  2. CFO confirms next scheduled payment run and amounts
  3. Controller is notified and begins reviewing open invoices

  **First 24 Hours:**
  1. CFO or Controller takes over payment approval authority temporarily
  2. Payroll: Use documented runbook (see Appendix A) with backup 2FA codes stored in 1Password
  3. Notify any vendors with payments due within 3 days; request 2-day extension if needed
  4. Assess coverage duration and determine if temporary AP contractor is needed

  **Communications:**
  - Internal: CFO notifies CEO and HR (payroll impact)
  - External: Vendor notifications as needed (Controller sends)

  **Recovery Criteria:** Maria returns OR backup personnel are trained and operational

  ## 7. Continuity Gaps and Action Plan

  | Gap | Risk | Action | Owner | Target Date |
  |-----|------|--------|-------|-------------|
  | No Bill.com backup approver | Catastrophic | Add CFO as backup admin | CFO | This week |
  | Payroll 2FA on personal phone | Catastrophic | Store backup codes in 1Password | Maria + IT | 2 weeks |
  | No documented Bill.com payment runbook | High | Maria documents step-by-step | Maria | 30 days |
  | No NetSuite backup admin | High | Add Controller as NetSuite admin | IT | 30 days |
  | No AP backup for invoice processing | Moderate | Cross-train Office Manager on basic AP | Maria | 60 days |
tips:
  - "The key person dependency section is usually the most uncomfortable — lean into it. The goal is to eliminate single points of failure, not to embarrass anyone."
  - "RTO and RPO must be set by the business, not by IT or ops. Ask: 'How long can the business tolerate this process being down before it causes real damage?' The answer drives the recovery investment."
  - "After writing the plan, do a tabletop exercise: walk through one of your top scenarios step by step. You will find gaps that weren't in the plan within minutes."
  - "A BCP that isn't tested is just a document. Build a calendar reminder to run an annual test — even just reviewing the plan with the team counts."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - escalation-policy-draft
  - sop-draft
  - decision-memo
  - vendor-performance-review
tags:
  - business-continuity
  - risk-management
  - operations
  - resilience
  - compliance
---
