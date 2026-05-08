---
title: "Generate a month-end close checklist"
slug: month-end-checklist
function: finance
role: accounting
description: "Generate a comprehensive, customized month-end close checklist that assigns tasks, sets deadlines, and ensures no step is missed in the financial close process."
useCase: "Use this prompt to create or refresh your month-end close checklist at the start of each period. A well-structured close checklist reduces errors, shortens close timelines, and ensures consistent handoffs between team members. Customize it for your company's accounting systems, transaction volume, and reporting requirements."
prompt: |
  You are a Controller or senior accountant building a month-end close checklist for your finance team.

  Context:
  - Company: {{company_name}}
  - Accounting systems: {{accounting_systems}} (e.g., QuickBooks, NetSuite, Xero, Sage)
  - Company type: {{company_type}} (e.g., SaaS, e-commerce, services, manufacturing)
  - Team size: {{team_size}} (number of people involved in close)
  - Close deadline: {{close_deadline}} (target days after month end, e.g., business day 5)
  - Key transaction types: {{transaction_types}} (revenue recognition method, payroll frequency, major vendor categories)
  - Reporting deliverables: {{reporting_deliverables}} (what's produced at close: board pack, investor update, lender reporting)
  - Known pain points in current close: {{pain_points}} (optional — areas where errors or delays commonly occur)

  Generate a month-end close checklist organized by day and category:

  ## Pre-Close Preparation (Day -2 to Day 0)
  Tasks that should be completed before month-end or on the last day of the month to enable a fast close.

  ## Day 1–2: Transaction Processing and Sub-Ledger Close
  - Accounts receivable close tasks
  - Accounts payable close tasks
  - Payroll and compensation entries
  - Revenue recognition entries (with note on method: subscription, milestone, time-based)
  - Bank and credit card transaction coding

  ## Day 2–3: Reconciliations
  - Bank reconciliations (list each account)
  - Credit card reconciliations
  - AR aging review and bad debt assessment
  - AP aging review
  - Intercompany reconciliation (if applicable)
  - Deferred revenue reconciliation (for subscription companies)
  - Prepaid and accrued expenses

  ## Day 3–4: Journal Entries and Adjustments
  - Standard recurring journal entries
  - Accruals (payroll, benefits, rent, professional fees)
  - Depreciation and amortization
  - Stock-based compensation expense
  - Tax provisions or estimates

  ## Day 4–5: Review and Reporting
  - P&L flux analysis (explain significant variances vs. prior month and budget)
  - Balance sheet review
  - Financial statement tie-out
  - Management reporting package preparation
  - Final sign-off and close certification

  For each task, include:
  - Responsible party (role, not name)
  - System or tool used
  - Deadline (business day number)
  - Dependencies (what must be completed before this task)
  - Common error or risk note (optional)
variables:
  - "{{company_name}}"
  - "{{accounting_systems}}"
  - "{{company_type}}"
  - "{{team_size}}"
  - "{{close_deadline}}"
  - "{{transaction_types}}"
  - "{{reporting_deliverables}}"
  - "{{pain_points}}"
exampleInput: |
  company_name: Anchor Analytics
  accounting_systems: QuickBooks Online, Stripe (billing), Rippling (payroll), Expensify (expenses)
  company_type: SaaS (subscription revenue, monthly and annual contracts)
  team_size: 3 (Controller, Senior Accountant, AP/AR Specialist)
  close_deadline: Business Day 5
  transaction_types: Subscription revenue (monthly and annual, ASC 606 straight-line recognition), semi-monthly payroll, SaaS vendor subscriptions, one-time professional services invoices
  reporting_deliverables: Monthly finance package (P&L, balance sheet, cash flow, KPI dashboard) for executive team; quarterly board packet
  pain_points: Deferred revenue reconciliation takes longer than expected; expense report approvals from managers are frequently late
exampleOutput: |
  ## Pre-Close Preparation (Day -2 to Day 0)

  | Task | Owner | System | Deadline | Dependency | Risk Note |
  |---|---|---|---|---|---|
  | Send expense report submission reminder to all employees | AP/AR Specialist | Expensify / Rippling | Day -2 | None | Late submissions are the #1 cause of close delays — send reminder early |
  | Pull Stripe monthly billing report and reconcile to QuickBooks invoices | Senior Accountant | Stripe + QBO | Day 0 (last day of month) | Stripe report available | Timing differences in Stripe payouts can create AR reconciliation errors |
  | Verify all open purchase orders have been received or accrued | AP/AR Specialist | QuickBooks | Day 0 | Vendor confirmations | Unaccrued POs are a common source of expense understatement |
  | Confirm payroll data for semi-monthly cycle is finalized | Controller | Rippling | Day 0 (if payroll falls in month) | Rippling payroll close | Payroll corrections after close require journal entry reversal |

  ## Day 1–2: Transaction Processing and Sub-Ledger Close

  **Accounts Receivable**
  | Task | Owner | System | Deadline | Dependency | Risk Note |
  |---|---|---|---|---|---|
  | Post all customer invoices generated in the month | AP/AR Specialist | Stripe / QBO | BD1 | Stripe billing report | Ensure annual contract invoices are posted in full even if recognized ratably |
  | Apply all payments received to open invoices | AP/AR Specialist | QBO | BD1 | Bank feed current | Unapplied payments distort AR aging |
  | Calculate deferred revenue for annual contracts | Senior Accountant | QBO / spreadsheet | BD2 | Invoice posting complete | Most error-prone step — verify each annual contract's recognized vs. deferred split |

  **Accounts Payable**
  | Task | Owner | System | Deadline | Dependency |
  |---|---|---|---|---|
  | Process all approved expense reports | AP/AR Specialist | Expensify / QBO | BD1 | Manager approvals received |
  | Code and post all vendor invoices received through month-end | AP/AR Specialist | QBO | BD1 | Invoices collected |
  | Accrue for invoices not yet received (known outstanding amounts) | Senior Accountant | QBO | BD2 | AP coding complete |

  **Payroll and Compensation**
  | Task | Owner | System | Deadline | Dependency |
  |---|---|---|---|---|
  | Import Rippling payroll journal entry into QuickBooks | Senior Accountant | Rippling / QBO | BD1 | Rippling payroll finalized |
  | Accrue for unpaid payroll days (if payroll period crosses month-end) | Senior Accountant | QBO | BD2 | Payroll schedule confirmed |
  | Post employer benefits and payroll tax accruals | Senior Accountant | QBO | BD2 | Payroll JE posted |

  **Revenue Recognition**
  | Task | Owner | System | Deadline | Dependency |
  |---|---|---|---|---|
  | Run deferred revenue waterfall model for all active annual contracts | Senior Accountant | Spreadsheet | BD2 | Invoice list current |
  | Post monthly revenue recognition journal entry (deferred → recognized) | Senior Accountant | QBO | BD2 | Waterfall model complete |
  | Verify monthly subscription revenue matches Stripe MRR report | Controller | Stripe / QBO | BD2 | Stripe report pulled |

  ## Day 2–3: Reconciliations

  | Reconciliation | Owner | System | Deadline | Risk Note |
  |---|---|---|---|---|
  | Bank reconciliation — operating account | Senior Accountant | QBO | BD3 | Clear all timing differences; escalate any items >$1K unresolved |
  | Bank reconciliation — payroll account | Senior Accountant | QBO + Rippling | BD3 | Verify payroll funding transfers tie |
  | Credit card reconciliation (all cards) | AP/AR Specialist | Expensify / QBO | BD3 | Require manager approval on any uncoded transactions before posting |
  | Deferred revenue reconciliation | Senior Accountant | QBO vs. spreadsheet | BD3 | This is the highest-risk reconciliation — Controller review required |
  | AR aging review — flag accounts >60 days | AP/AR Specialist | QBO | BD3 | Confirm bad debt reserve calculation |
  | Prepaid expenses schedule | Senior Accountant | Spreadsheet | BD3 | Ensure new prepaid items are added to schedule |

  ## Day 3–4: Journal Entries and Adjustments

  | Journal Entry | Owner | System | Deadline |
  |---|---|---|---|
  | Depreciation and amortization (fixed asset schedule) | Senior Accountant | QBO | BD4 |
  | Stock-based compensation expense (from cap table model) | Controller | Spreadsheet / QBO | BD4 |
  | Rent straight-line adjustment (if applicable) | Senior Accountant | QBO | BD4 |
  | Professional fees accrual (legal, audit, consultants not yet invoiced) | Controller | QBO | BD4 |
  | Software subscriptions accrual (estimated if not invoiced) | AP/AR Specialist | QBO | BD4 |

  ## Day 4–5: Review and Reporting

  | Task | Owner | Deadline |
  |---|---|---|
  | P&L flux analysis: explain all variances >$10K vs. prior month | Controller | BD4 |
  | Balance sheet review: verify all accounts have explanations | Controller | BD4 |
  | Financial statement tie-out (P&L, BS, cash flow statement agree) | Controller | BD5 |
  | Prepare monthly finance package (P&L, BS, cash flow, KPIs) | Senior Accountant | BD5 |
  | Controller sign-off and close declaration | Controller | BD5 |
  | Distribute finance package to executive team | Controller | BD5 |
tips:
  - "The deferred revenue reconciliation is the highest-risk step for SaaS companies — it touches every active contract and is manually intensive. Build a contract-by-contract waterfall model rather than a top-down estimate to catch errors."
  - "Assign ownership by role, not name. When someone is out, the checklist should still be executable by their backup without having to figure out who does what."
  - "The expense report timing problem is universal — the fix is a hard cutoff communicated two days before month-end, with a clear policy that late submissions are processed in the following month. One painful cycle usually changes behavior."
  - "The flux analysis (explain variances vs. prior month) is a quality gate, not a reporting requirement. Any P&L line that moves more than 10% or $10K and can't be explained in one sentence is a sign something was posted incorrectly."
  - "Track your close timeline each month: what was the actual close day vs. target? A close that's consistently 1–2 days late tells you where to look for process inefficiency."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - monthly-finance-commentary
  - budget-variance-analysis
  - revenue-recognition-summary
tags:
  - month-end-close
  - accounting
  - checklist
  - controller
  - process
---
