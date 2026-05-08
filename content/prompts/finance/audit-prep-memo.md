---
title: "Write an internal audit preparation memo"
slug: audit-prep-memo
function: finance
role: accounting
description: "Generate an internal memo that prepares the finance team and key stakeholders for an upcoming external audit — covering timeline, document requests, and team responsibilities."
useCase: "Use this prompt when an external audit is approaching and you need to align the finance team, department heads, and executive leadership on what to expect, what to prepare, and who is responsible. A well-prepared team reduces audit exceptions and shortens the audit timeline."
prompt: |
  You are a Controller or VP of Finance preparing the organization for an upcoming external audit.

  Context:
  - Company: {{company_name}}
  - Audit type: {{audit_type}} (e.g., annual financial statement audit, SOC 2, 409A valuation, tax, lender due diligence)
  - Audit firm: {{audit_firm}}
  - Audit period: {{audit_period}} (fiscal year or period being audited)
  - Audit start date: {{audit_start_date}}
  - Expected completion: {{audit_completion}}
  - Primary contact at audit firm: {{auditor_contact}}
  - Internal audit team lead: {{internal_lead}}
  - Departments or individuals who will be involved: {{involved_parties}}
  - Known audit focus areas or prior year findings: {{focus_areas}}
  - Key documents that need to be prepared: {{document_list}}

  Write an internal audit preparation memo with these sections:

  ## Purpose and Scope (1 paragraph)
  Why this memo is being sent, what audit is happening, and what the goal is. Should set a tone of organized preparation, not anxiety.

  ## Audit Timeline
  A clear timeline table showing:
  - Key milestones (PBC list delivery, fieldwork start, fieldwork end, draft financials, final sign-off)
  - Date for each milestone
  - Internal owner

  ## What Auditors Will Review
  A plain-language explanation of what the audit covers — written for non-finance stakeholders who may not be familiar with audit procedures. What accounts, processes, and transactions will receive scrutiny? What does "testing" mean in practice?

  ## Prepared By Client (PBC) List
  The initial document request list — organized by category (financial statements, revenue, expenses, equity, HR/payroll, etc.). For each item:
  - Document name
  - What it is (one-line description)
  - Who at the company is responsible for preparing it
  - Deadline for delivery to audit team

  ## Department Responsibilities
  What each department outside finance needs to do — and what they should NOT do (e.g., don't delete files, don't change document dates). Written for a non-finance audience.

  ## Common Audit Questions to Expect
  5–7 types of questions the audit team typically asks during fieldwork, with guidance on how the internal team should respond (accurately, with documentation, escalate to finance if uncertain).

  ## What Happens After the Audit
  Brief explanation of the process from fieldwork through final financial statements and management letter.

  Tone: organized, clear, and confidence-inspiring. Audits feel stressful — this memo should make the team feel prepared, not panicked.
variables:
  - "{{company_name}}"
  - "{{audit_type}}"
  - "{{audit_firm}}"
  - "{{audit_period}}"
  - "{{audit_start_date}}"
  - "{{audit_completion}}"
  - "{{auditor_contact}}"
  - "{{internal_lead}}"
  - "{{involved_parties}}"
  - "{{focus_areas}}"
  - "{{document_list}}"
exampleInput: |
  company_name: Anchor Analytics
  audit_type: Annual financial statement audit (GAAP)
  audit_firm: Grant Thornton
  audit_period: Fiscal Year 2023 (January 1 – December 31, 2023)
  audit_start_date: February 5, 2024
  audit_completion: March 15, 2024 (target)
  auditor_contact: Jennifer Hale, Senior Manager, jhale@gt.com
  internal_lead: Controller (Maya Chen)
  involved_parties: Finance team (3 people), HR/People Ops (payroll records), Sales Ops (contract documentation), Engineering (AWS cost records)
  focus_areas: Revenue recognition (new SaaS contracts with complex terms), stock-based compensation (first year of option grants), R&D capitalization (evaluating software development costs)
  document_list: Trial balance, general ledger detail, bank statements (all accounts), customer contracts (sample), revenue recognition workpapers, equity/cap table, payroll records, fixed asset schedule, board minutes
exampleOutput: |
  **TO:** Anchor Analytics Finance Team, HR/People Ops, Sales Ops, Engineering
  **FROM:** Maya Chen, Controller
  **RE:** FY2023 Annual Audit Preparation
  **DATE:** January 22, 2024

  ## Purpose and Scope
  This memo prepares the Anchor Analytics team for our FY2023 annual financial statement audit, conducted by Grant Thornton beginning February 5. This is our first audit as a company, and our goal is a clean, efficient process that produces audited financial statements by March 15. Audited financials are required for our Series A fundraise and will be expected by future investors and lenders. This memo explains what to expect, what you need to prepare, and who to contact if you have questions.

  ## Audit Timeline

  | Milestone | Target Date | Internal Owner |
  |---|---|---|
  | PBC documents delivered to Grant Thornton | January 31 | Maya Chen (Controller) |
  | Fieldwork begins (Grant Thornton on-site / virtual) | February 5 | Maya Chen |
  | Interim questions and testing period | February 5–23 | Finance team |
  | Fieldwork complete | February 23 | Maya Chen |
  | Draft financial statements received from GT | March 1 | Maya Chen |
  | Management review and response to draft | March 8 | Maya Chen + CFO |
  | Final financial statements signed | March 15 | CFO |

  ## What Auditors Will Review
  Grant Thornton will review Anchor's financial statements for FY2023 — our income statement, balance sheet, and cash flow statement — and verify that they accurately represent the company's financial position. In practice, this means they will:

  - Sample customer contracts and verify that revenue was recorded at the right time and in the right amount
  - Test expense transactions to ensure they are real, properly categorized, and recorded in the correct period
  - Verify that our cash balances match bank statements
  - Review our equity structure, including stock option grants and their valuation
  - Assess whether any significant accounting estimates (like bad debt reserves) are reasonable

  "Testing" means the audit team will pull a sample of transactions — typically 25–40 items from large account balances — and trace each one back to source documentation (contracts, invoices, receipts, bank records). They're not looking for fraud; they're verifying that our accounting records are accurate.

  Three areas will receive focused attention this year: (1) how we recognized revenue on contracts with non-standard terms, (2) our stock option accounting (this is our first year with a formal option plan), and (3) whether any of our software development costs qualify for capitalization under ASC 350-40.

  ## Prepared By Client (PBC) Document List

  **Financial Records — Due January 31 (Finance team)**
  | Document | Description | Owner |
  |---|---|---|
  | Trial balance (12/31/23) | Final, closed trial balance by account | Maya Chen |
  | General ledger detail | All transactions by account for FY2023 | Maya Chen |
  | Bank statements (all accounts, Jan–Dec 2023) | Monthly statements for operating and payroll accounts | Senior Accountant |
  | Bank reconciliations (all months) | Completed reconciliations for each account | Senior Accountant |
  | Credit card statements and reconciliations | All company card statements | AP/AR Specialist |

  **Revenue and Contracts — Due January 31 (Finance + Sales Ops)**
  | Document | Description | Owner |
  |---|---|---|
  | Customer contract list | All active and churned contracts with start date, ARR, and terms | Sales Ops |
  | Sample customer contracts (GT will select) | Executed contracts for auditor-selected accounts | Sales Ops |
  | Revenue recognition workpapers | Deferred revenue waterfall and monthly recognition schedule | Maya Chen |
  | Invoices for sampled customers | Stripe invoices for accounts selected for testing | AP/AR Specialist |

  **Payroll and HR — Due January 31 (HR/People Ops)**
  | Document | Description | Owner |
  |---|---|---|
  | Payroll registers (all 2023 pay periods) | Rippling payroll reports by pay period | HR |
  | Employee roster (12/31/23) | Active employees, titles, start dates, compensation | HR |
  | Offer letters for new hires in 2023 | To verify compensation recorded matches offers | HR |
  | Option grant agreements | All 2023 option grants with grant date, strike price, vesting schedule | HR + CFO |

  **Equity and Corporate — Due January 31 (Finance + CFO)**
  | Document | Description | Owner |
  |---|---|---|
  | Cap table (Carta export, 12/31/23) | Full capitalization table | CFO |
  | Board minutes (all 2023 board meetings) | Official board meeting minutes | CFO |
  | 409A valuation report | Most recent valuation report (required for option accounting) | CFO |
  | Operating agreement or certificate of incorporation | Corporate formation documents | CFO |

  ## Department Responsibilities

  **HR/People Ops:** Provide payroll registers, offer letters, and option grant documents listed above by January 31. If auditors ask you questions about compensation directly, answer factually and direct any accounting questions to Maya Chen.

  **Sales Ops:** Provide the customer contract list and execute contracts upon request. Auditors may ask for contracts by customer name — please keep the contract repository organized and accessible through February 23.

  **Engineering:** Grant Thornton may ask about software development activities — specifically, whether engineers spent time building new software features vs. maintaining existing ones. Maya will send a brief survey to capture this information. Please respond within 2 business days.

  **All teams:** Do not delete or modify any documents dated in 2023 or earlier during the audit period. Do not send any Anchor financial information to external parties unless Maya Chen has authorized it.

  ## Common Audit Questions to Expect
  Auditors may reach out to team members directly with questions. Here's guidance on how to handle them:

  1. **"Can you explain this transaction?"** — Describe what the transaction was and provide the supporting documentation (invoice, contract, receipt). If you're not sure, say so and direct them to Maya.
  2. **"How does this process work?"** — Describe the actual process as it happens, not how it's supposed to happen in theory. Auditors appreciate accuracy over optimism.
  3. **"Who approves this?"** — Describe the approval chain accurately. Don't describe controls that don't exist.
  4. **"Do you have a contract for this customer?"** — Yes or no, and if yes, provide it. If it's in Salesforce or a shared drive, indicate where.
  5. **"Why was this expense categorized this way?"** — Explain the business reason. If you're unsure about the accounting treatment, direct the question to finance.
  6. **"Were there any unusual transactions or events in 2023?"** — Be honest. If something unusual happened (a large one-time expense, a customer dispute, a contract amendment), describe it and let finance handle the accounting discussion.
  7. **"Can you sign a representation letter?"** — Only CFO-level executives sign representation letters. Redirect this request to Maya immediately.

  ## What Happens After the Audit
  After fieldwork ends, Grant Thornton will prepare a draft of the audited financial statements. Finance will review the draft for accuracy and respond to any open questions or proposed adjustments. Once both parties agree on the final numbers, the CFO signs the financial statements and Grant Thornton issues their audit opinion. GT will also issue a "management letter" noting any internal control observations — these are improvement recommendations, not findings of wrongdoing. We'll review the management letter as a team and incorporate any process improvements into Q1 operations.

  Questions? Contact Maya Chen at maya@anchor.com or Slack #finance.
tips:
  - "Send this memo at least 2 weeks before the PBC list is due. Teams that get 3 days' notice to gather a year's worth of documents create avoidable errors and delays."
  - "The 'what auditors will review' section is the most valuable for non-finance stakeholders — demystifying the process reduces anxiety and increases cooperation."
  - "For first-year audits specifically, be explicit that auditors are not looking for fraud. The word 'audit' triggers anxiety in people who've never been through one — normalizing the process improves team behavior."
  - "The PBC list should be as specific as possible — 'financial records' is too vague. Name the exact document, who has it, and when it's due."
  - "After the audit, hold a brief debrief: what took longer than expected, what document requests were unclear, what could be pre-built next year to reduce preparation time. The best teams get faster at audits each cycle."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - month-end-checklist
  - revenue-recognition-summary
  - board-finance-update
tags:
  - audit
  - accounting
  - compliance
  - controller
  - internal-memo
---
