---
title: "Draft a cash management policy"
slug: cash-management-policy
function: finance
role: treasury
description: "Generate a formal cash management policy that governs how company cash is held, invested, transferred, and protected — appropriate for board approval or lender review."
useCase: "Use this prompt when your company needs a written cash management policy for board approval, audit documentation, or as part of a fundraise or debt financing diligence process. A documented policy protects the company from unauthorized transactions and demonstrates financial governance maturity to investors and lenders."
prompt: |
  You are a VP of Finance or CFO drafting a formal cash management policy for your company.

  Context:
  - Company: {{company_name}}
  - Company stage: {{company_stage}} (e.g., early-stage startup, growth-stage, pre-IPO)
  - Current cash balance: {{cash_balance}}
  - Banking institutions: {{banking_institutions}} (list primary banks and any investment accounts)
  - Authorized signatories: {{authorized_signatories}} (who can move money and at what thresholds)
  - Permissible investment types: {{investment_types}} (e.g., FDIC-insured accounts, money market funds, T-bills)
  - Approval thresholds: {{approval_thresholds}} (who approves transfers at various dollar amounts)
  - Reporting requirements: {{reporting_requirements}} (how often cash position is reported to leadership/board)
  - Specific risks to address: {{risk_factors}} (e.g., fraud risk, concentration risk, foreign currency)

  Write a policy document with these sections:

  ## 1. Purpose and Scope
  What this policy governs, who it applies to, and why it exists.

  ## 2. Cash Custodianship and Authorized Accounts
  - Which financial institutions hold company cash
  - Who can open or close accounts (and what approval is required)
  - Permitted account types

  ## 3. Authorized Signatories and Transaction Limits
  A clear table showing:
  - Who can authorize cash transactions
  - At what dollar thresholds each level of authority applies
  - Dual-control requirements (requiring two approvers) above specified thresholds

  ## 4. Permissible Cash Investments
  What the company may and may not invest idle cash in:
  - Permitted instruments (FDIC-insured deposits, money market funds, short-term treasuries)
  - Prohibited instruments (equities, long-duration bonds, crypto, derivatives)
  - Concentration limits (maximum at any single institution)

  ## 5. Cash Transfer Procedures
  - How wire transfers and ACH payments are initiated and approved
  - Verification requirements for new payee setup
  - Fraud prevention controls (callback verification, dual approval)

  ## 6. Cash Reporting
  - How frequently cash position is reported internally
  - What the report includes (balance by institution, available liquidity, upcoming obligations)
  - Who receives the report

  ## 7. Policy Exceptions and Amendments
  Who can approve exceptions to this policy and the process for amending it.

  ## 8. Policy Effective Date and Review Schedule

  Tone: formal and clear. This is a governance document — it should be precise about thresholds and procedures, unambiguous about who has authority, and written to withstand auditor or board scrutiny.
variables:
  - "{{company_name}}"
  - "{{company_stage}}"
  - "{{cash_balance}}"
  - "{{banking_institutions}}"
  - "{{authorized_signatories}}"
  - "{{investment_types}}"
  - "{{approval_thresholds}}"
  - "{{reporting_requirements}}"
  - "{{risk_factors}}"
exampleInput: |
  company_name: Anchor Analytics, Inc.
  company_stage: Growth-stage startup ($4.2M cash, pre-Series A)
  cash_balance: $4.2M
  banking_institutions: Silicon Valley Bank (primary operating), JPMorgan Chase (secondary / backup), Schwab Money Market Fund (idle cash investment)
  authorized_signatories: CEO (Marcus Chen), CFO (open — role being hired), Controller (Maya Chen — VP-level authorization pending CFO hire)
  investment_types: FDIC/SIPC-insured accounts, money market funds (government), T-bills under 90 days
  approval_thresholds: Under $10K — Controller; $10K–$100K — CFO or CEO; over $100K — CFO + CEO dual approval; over $500K — CFO + CEO + Board notification
  reporting_requirements: Weekly cash position report to CEO and Controller; monthly report to board in finance package
  risk_factors: Bank concentration (previously single-bank), fraud risk from vendor payment changes, limited treasury staff
exampleOutput: |
  # Cash Management Policy
  **Anchor Analytics, Inc.**
  **Effective Date:** April 1, 2024
  **Approved By:** Board of Directors
  **Next Review:** April 1, 2025

  ---

  ## 1. Purpose and Scope

  This Cash Management Policy establishes the framework for how Anchor Analytics, Inc. ("the Company") holds, invests, transfers, and controls its cash and liquid assets. This policy applies to all employees, officers, and agents who handle or authorize cash transactions on behalf of the Company.

  The objectives of this policy are to: (i) preserve capital and ensure the Company maintains sufficient liquidity to meet operating obligations; (ii) establish clear authorization controls to prevent fraud and unauthorized transactions; (iii) define permissible uses of idle cash; and (iv) ensure appropriate oversight and reporting to leadership and the Board.

  ## 2. Cash Custodianship and Authorized Accounts

  **Authorized Institutions**
  The Company maintains cash accounts at the following authorized financial institutions:
  - Silicon Valley Bank — Primary operating account (checking, payroll)
  - JPMorgan Chase — Secondary operating account (backup / contingency liquidity)
  - Charles Schwab — Money market fund account (idle cash investment)

  **Account Opening and Closing**
  No new deposit accounts, investment accounts, or banking relationships may be opened or closed without approval from the CFO (or Controller in the absence of a hired CFO) and CEO. Any new financial institution relationship must be presented to the Board at the next scheduled meeting.

  **Prohibited Account Types**
  The Company shall not hold cash in uninsured brokerage accounts, margin accounts, cryptocurrency exchanges, or any account that does not provide FDIC or SIPC protection on balances up to applicable limits.

  **Concentration Limit**
  No more than $3.0M (or 80% of total cash, whichever is lower) may be held at a single financial institution at any time, to limit counterparty concentration risk. Balances exceeding this threshold must be distributed across authorized institutions within 5 business days of identification.

  ## 3. Authorized Signatories and Transaction Limits

  | Transaction Amount | Authorization Required | Additional Requirements |
  |---|---|---|
  | Under $10,000 | Controller | Standard AP approval process |
  | $10,000 – $100,000 | CFO or CEO | Invoice/PO documentation required |
  | $100,001 – $500,000 | CFO AND CEO (dual approval) | Both must approve in writing or via authorized banking portal |
  | Over $500,000 | CFO AND CEO (dual approval) + Board notification | Board chair or Finance Committee chair notified within 24 hours |

  During the period prior to the CFO hire, Controller-level approvals are delegated as follows: under $10K — Controller; $10K–$50K — Controller with CEO co-approval; over $50K — CEO only, pending CFO hire.

  Signatory authority is non-delegable. No individual may authorize transactions on behalf of another authorized signatory without express written authorization from the CFO and CEO.

  ## 4. Permissible Cash Investments

  The Company's primary objective is capital preservation. Return on idle cash is a secondary objective. The following investment guidelines apply:

  **Permitted Instruments**
  - FDIC-insured deposit accounts (checking, savings, money market deposit accounts) at authorized institutions
  - Government money market funds (fund portfolio limited to U.S. government securities)
  - U.S. Treasury bills with maturities of 90 days or less
  - FDIC-insured certificates of deposit with maturities of 6 months or less

  **Prohibited Instruments**
  The following investments are prohibited:
  - Common or preferred equity securities
  - Corporate bonds or notes of any duration
  - Cryptocurrency or digital assets
  - Derivatives (options, futures, swaps)
  - Treasury securities with maturities exceeding 1 year
  - Any investment vehicle not explicitly listed as permitted above

  **Liquidity Requirement**
  At all times, the Company must maintain a minimum of 60% of total cash in instruments accessible within 2 business days without penalty (operating accounts, money market funds).

  ## 5. Cash Transfer Procedures

  **Wire Transfers**
  All outgoing wire transfers must be initiated through the authorized banking portal and approved according to the authorization table in Section 3. For wire transfers to new payees (not previously used in the past 12 months), the following controls apply:
  - New payee banking information must be obtained directly from the payee via a known, verified contact (not solely from an emailed invoice or PDF)
  - A callback verification to a previously confirmed phone number for the payee is required before any wire transfer over $25,000 to a new payee
  - The Controller must document the verification in the payment file

  **Vendor Payment Changes**
  Any request to change an existing vendor's banking information (account number, routing number, or wire instructions) must be verified by phone call to a known contact at the vendor — regardless of the amount. Email-only requests to change banking information shall never be acted upon without independent phone verification.

  **ACH Payments**
  Recurring ACH payments (payroll, benefits, recurring vendor payments) may be processed by the Controller within approved budget parameters without transaction-level approval. New ACH payee setups require Controller authorization and documentation.

  **Fraud Prevention**
  The Company shall maintain dual-factor authentication on all banking portals. Passwords for banking systems shall be stored in the Company's password manager and not shared via email or messaging applications.

  ## 6. Cash Reporting

  **Weekly Cash Position Report**
  The Controller shall prepare and distribute a weekly cash position report every Monday morning to the CEO. The report shall include:
  - Cash balance by institution as of the prior Friday
  - Net cash change week-over-week
  - Significant upcoming disbursements in the next 14 days
  - Current runway estimate at the trailing 4-week average burn rate

  **Monthly Board Reporting**
  Cash position, burn rate, and runway shall be included in the monthly finance package distributed to the Board. The report shall include the ending cash balance, month-over-month change, and a 13-week cash flow forecast or summary.

  **Threshold Alert**
  If total cash falls below $2.0M, the Controller shall notify the CEO and Board chair immediately and no later than the next business day.

  ## 7. Policy Exceptions and Amendments

  Exceptions to this policy require written approval from the CFO and CEO, with documentation of the business reason. Exceptions shall be reported to the Board at the next scheduled meeting.

  This policy may be amended by a vote of the Board of Directors. The CFO or Controller may propose amendments; the Board Finance Committee (or full Board) must approve any changes.

  ## 8. Effective Date and Review Schedule

  This policy is effective April 1, 2024, and shall be reviewed annually. The review shall be conducted by the CFO (or Controller in the absence of a hired CFO) and presented to the Board for reaffirmation or amendment.

  ---
  *Approved by the Board of Directors of Anchor Analytics, Inc.*
  *Date of Approval: [Board approval date]*
tips:
  - "The dual-control requirement for large transfers is the most important fraud prevention control in this policy. The 2023 wave of 'CEO fraud' wire transfer scams targeted companies without dual-approval requirements."
  - "The new-payee callback verification requirement is the single highest-impact fraud prevention control for small finance teams. Implement it before any other control."
  - "Concentration risk is real — the 2023 Silicon Valley Bank situation demonstrated that even large, established institutions can fail. A policy requiring distribution across institutions protects the company."
  - "The $2M cash floor alert is not optional — it's the early warning system that triggers the fundraise conversation. Without a defined floor, companies often discover they have a problem too late to fix it."
  - "Present this policy to the Board annually. A policy that the Board has never seen is not a governance document — it's a piece of paper. Board review creates accountability and ensures the policy stays current."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cash-flow-forecast-narrative
  - board-finance-update
  - audit-prep-memo
  - banking-rfp-template
tags:
  - treasury
  - cash-management
  - policy
  - governance
  - fraud-prevention
---
