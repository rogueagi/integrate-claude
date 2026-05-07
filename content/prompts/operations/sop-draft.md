---
title: "Write a Standard Operating Procedure for a business process"
slug: sop-draft
function: operations
role: ops-management
description: "Generate a structured, step-by-step SOP document for any repeatable business process, including roles, triggers, and exception handling."
useCase: "Use this prompt when you need to document a process so that anyone on your team can execute it consistently. Ideal for onboarding new hires, ensuring compliance, or capturing tribal knowledge before it walks out the door. Fill in the process description and any notes you have — the output will be a publication-ready SOP."
prompt: |
  You are an expert operations manager with deep experience writing clear, actionable Standard Operating Procedures (SOPs). Your task is to create a professional SOP document for the process described below.

  **Process to document:** {{process_name}}
  **Department/team:** {{department}}
  **Process description and context:** {{process_description}}
  **Key stakeholders or roles involved:** {{roles_involved}}
  **Any known edge cases or exceptions:** {{known_exceptions}}

  Write a complete SOP with the following sections:

  1. **Purpose** — One paragraph explaining why this process exists and what outcome it ensures.
  2. **Scope** — Who this SOP applies to, and what it does and does not cover.
  3. **Roles and Responsibilities** — A table listing each role involved and their specific responsibilities in this process.
  4. **Trigger / When to Use This SOP** — The specific event or condition that initiates this process.
  5. **Prerequisites** — What must be true, available, or completed before starting.
  6. **Step-by-Step Procedure** — Numbered steps in chronological order. Each step must include:
     - The action to take (imperative verb, e.g., "Log into...", "Send email to...")
     - Who is responsible for that step (role name)
     - Any decision points or conditional logic (use IF/THEN format)
     - Expected output or confirmation that the step is complete
  7. **Quality Checks** — Specific checkpoints or validations to ensure the process is being followed correctly.
  8. **Exception Handling** — What to do when something goes wrong or an edge case is encountered.
  9. **Related Documents** — Placeholder list for linked templates, forms, or related SOPs.
  10. **Revision History** — Table with columns: Version, Date, Author, Summary of Changes.

  Formatting requirements:
  - Use plain, direct language — write for someone doing this process for the first time
  - Avoid jargon unless it's defined
  - Keep steps atomic — one action per step
  - Use bold for role names the first time they appear in the procedure
  - Flag any steps that are time-sensitive with [TIME-SENSITIVE]
  - Flag any steps that carry compliance or legal risk with [COMPLIANCE]
variables:
  - "{{process_name}}"
  - "{{department}}"
  - "{{process_description}}"
  - "{{roles_involved}}"
  - "{{known_exceptions}}"
exampleInput: |
  process_name: Monthly vendor invoice reconciliation
  department: Finance / Accounts Payable
  process_description: At the end of each month, AP team reconciles all vendor invoices received against purchase orders in our ERP system (NetSuite). Any discrepancies must be flagged, investigated, and resolved before the books close. Currently this process takes 2–3 days and has too many manual errors.
  roles_involved: AP Specialist, AP Manager, Procurement Analyst, Controller
  known_exceptions: Some vendors submit consolidated invoices covering multiple POs. A few international vendors invoice in foreign currency. Invoices over $50K require Controller sign-off before payment.
exampleOutput: |
  # SOP: Monthly Vendor Invoice Reconciliation
  **Version:** 1.0 | **Effective Date:** [Date] | **Owner:** AP Manager

  ## 1. Purpose
  This SOP ensures that all vendor invoices received in a given month are accurately matched to approved purchase orders in NetSuite before month-end close, minimizing payment errors, duplicate payments, and audit risk.

  ## 2. Scope
  Applies to all domestic and international vendor invoices processed by the Accounts Payable team. Does not cover employee expense reports or corporate card reconciliations, which follow separate procedures.

  ## 3. Roles and Responsibilities
  | Role | Responsibility |
  |------|---------------|
  | AP Specialist | Receives invoices, performs initial matching, flags discrepancies |
  | AP Manager | Reviews flagged items, approves resolutions, owns SOP compliance |
  | Procurement Analyst | Investigates PO discrepancies, confirms receipt of goods/services |
  | Controller | Approves invoices >$50K; signs off on month-end close |

  ## 4. Trigger
  Initiated on the 25th of each month (or the last business day before, if the 25th falls on a weekend or holiday).

  ## 5. Prerequisites
  - All vendor invoices for the month must be received and logged in NetSuite
  - Purchase orders for the month must be marked as received in NetSuite by Procurement
  - AP Specialist has access to the Invoice Reconciliation Tracker (Google Sheet)

  ## 6. Step-by-Step Procedure
  1. **AP Specialist** exports the open invoice report from NetSuite (Reports > AP > Open Invoices, date range: first–last day of month). Save as "YYYY-MM_Open_Invoices.xlsx".
  2. **AP Specialist** exports the received PO report from NetSuite (Reports > Procurement > POs Received, same date range).
  3. **AP Specialist** opens the Invoice Reconciliation Tracker and pastes both exports into the designated tabs.
  4. **AP Specialist** runs the VLOOKUP macro (button: "Run Match") to auto-match invoices to POs by PO number.
  5. **AP Specialist** reviews all rows flagged as "Unmatched" or "Amount Variance":
     - IF invoice has no matching PO → flag as "Missing PO" and email **Procurement Analyst** with invoice details within 4 hours. [TIME-SENSITIVE]
     - IF invoice amount differs from PO by ≤2% → flag as "Minor Variance," note in comments, and proceed to payment.
     - IF invoice amount differs by >2% → flag as "Major Variance" and escalate to **AP Manager** before proceeding.
  6. **AP Specialist** handles consolidated invoices: manually split line items in NetSuite to match individual POs, then re-run match.
  7. **AP Specialist** converts foreign currency invoices using the month-end exchange rate published by the Controller (emailed on the 24th). Log conversion rate used in the Tracker. [COMPLIANCE]
  8. **AP Manager** reviews all escalated variances within 24 hours. For each, either: approve as acceptable variance, request vendor credit memo, or hold invoice pending investigation.
  9. **Procurement Analyst** responds to Missing PO flags within 24 hours by either providing the correct PO number or initiating a retroactive PO. [TIME-SENSITIVE]
  10. **AP Specialist** marks all resolved items as "Cleared" in the Tracker.
  11. For any invoice ≥$50K: **AP Specialist** routes to **Controller** for approval via NetSuite workflow before scheduling payment. [COMPLIANCE]
  12. **AP Manager** reviews the completed Tracker and confirms all items are either Cleared or explicitly held.
  13. **AP Manager** emails the **Controller** the Reconciliation Summary (exported from Tracker) by end of business on the 28th. [TIME-SENSITIVE]
  14. **Controller** reviews summary and approves month-end close in NetSuite.

  ## 7. Quality Checks
  - Tracker must show 0 "Unmatched" rows before the Controller summary is sent
  - All foreign currency invoices must have the exchange rate logged
  - All invoices ≥$50K must show Controller approval in NetSuite before payment run

  ## 8. Exception Handling
  - **Vendor submits invoice after month-end:** Log in next month's reconciliation; notify AP Manager.
  - **NetSuite system outage:** Perform manual reconciliation in the Tracker; import to NetSuite when restored. Notify Controller of delay.
  - **Disputed invoice:** Place on payment hold in NetSuite, notify AP Manager and Procurement. Do not process until dispute is resolved in writing.

  ## 9. Related Documents
  - Invoice Reconciliation Tracker (Google Sheet)
  - NetSuite Report Guide
  - Vendor Payment Terms Reference
  - Escalation Matrix — AP

  ## 10. Revision History
  | Version | Date | Author | Changes |
  |---------|------|--------|---------|
  | 1.0 | [Date] | [Name] | Initial draft |
tips:
  - "Add a 'Common Mistakes' section at the end based on real errors your team has made — this is where SOPs actually prevent recurrence."
  - "Keep steps atomic: if a step requires more than one decision, split it into two steps. The goal is that a new hire can follow this without asking anyone a question."
  - "After generating the SOP, share it with the person who currently does the process and ask them to red-line anything that doesn't match reality — SOPs written without practitioner review often miss key steps."
  - "Use the [TIME-SENSITIVE] and [COMPLIANCE] flags to create a checklist view of the most critical steps for managers to monitor."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - process-audit
  - meeting-agenda
  - escalation-policy-draft
  - vendor-onboarding-checklist
tags:
  - sop
  - process-documentation
  - operations
  - compliance
  - knowledge-management
---
