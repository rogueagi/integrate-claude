---
title: "Draft a response to an auditor's PBC list"
slug: audit-pbc-list-response
function: finance
role: accounting
description: "Generate a structured response to an external auditor's Provided By Client request list with status, owner, and target date for each item."
useCase: "Use this prompt at the start of an audit cycle when the audit firm sends the PBC (Provided By Client) request list and you need to triage it before the kickoff call. The list is long, vague in spots, and mixes simple data pulls with complex memos. This prompt converts the raw list into a tracker the controller can use to assign work and push back on items that are out of scope."
prompt: |
  You are the controller at {{company_name}} preparing the response to the external auditor's PBC list for the {{audit_type}} audit covering {{period_under_audit}}.

  Inputs:
  - Audit firm: {{audit_firm}}
  - Audit type and period: {{audit_type}}, {{period_under_audit}}
  - PBC list (raw, as received): {{pbc_list}}
  - Internal accounting team and owners: {{team_owners}}
  - Known historical pain points or scope disputes: {{historical_context}}
  - Target audit completion date: {{target_completion}}

  Produce the response with these sections:

  ## PBC Tracker
  Reformat every PBC item as a row with these columns:
  - PBC item number and short description
  - Status (ready, in progress, not started, blocked, out of scope)
  - Owner (specific person)
  - Source system or document
  - Target delivery date
  - Notes (assumptions, scope clarifications, or pushback)

  Group items into these categories:
  1. General ledger and trial balance
  2. Cash and bank
  3. Accounts receivable and revenue
  4. Accounts payable and accrued expenses
  5. Fixed assets and depreciation
  6. Equity and stock-based compensation
  7. Income tax
  8. Memos, agreements, and supporting documents
  9. Other

  ## Items Requiring Clarification
  List items that are ambiguous, duplicative, or potentially out of scope. For each, draft the specific question to ask the audit senior on the kickoff call.

  ## Items Recommended for Pushback
  List items where the request is broader than the audit standards require or where the cost to produce exceeds the audit value. For each, draft a one-sentence proposed alternative.

  ## Suggested Kickoff Call Agenda
  Five to seven bullets framing the kickoff conversation: scope confirmation, materiality, timeline, system access, and the clarifications and pushbacks above.

  Tone: organized, professional, and slightly assertive. The PBC response sets the tone for the audit. A sloppy response invites scope creep; a tight response signals that the close is in good shape.
variables:
  - "{{company_name}}"
  - "{{audit_firm}}"
  - "{{audit_type}}"
  - "{{period_under_audit}}"
  - "{{pbc_list}}"
  - "{{team_owners}}"
  - "{{historical_context}}"
  - "{{target_completion}}"
exampleInput: |
  company_name: Sentry Logistics Inc.
  audit_firm: Bracewell Hodge LLP
  audit_type: financial statement audit (first year audit, not a re-audit)
  period_under_audit: fiscal year ending December 31 2025
  pbc_list: |
    1. Detailed general ledger for FY 2025 in Excel
    2. Trial balance at December 31 2025 and prior year
    3. Bank reconciliations for all accounts, every month
    4. Bank statements for all accounts, every month
    5. AR aging at December 31 2025 with subsequent collections through audit fieldwork
    6. Sales register full detail FY 2025
    7. Top 25 customers by revenue with contracts
    8. Revenue recognition memo by significant contract type
    9. AP aging at December 31 2025
    10. Search for unrecorded liabilities through audit fieldwork
    11. Fixed asset rollforward, additions, disposals, depreciation calc
    12. All lease agreements active at any point in 2025
    13. ASC 842 lease calculations and journal entries
    14. Stock option grants in 2025 with board approvals
    15. 409A valuation report
    16. Stock-based compensation expense calculation by quarter
    17. Tax provision and supporting workpapers
    18. Federal and state tax returns prior year
    19. Board minutes for FY 2025 and through audit fieldwork
    20. All material contracts signed in 2025 (greater than $100K commitment)
    21. Going concern memo
    22. Subsequent events memo through audit report date
    23. Internal control narratives for revenue, payroll, and procurement
    24. Cybersecurity assessment for FY 2025
    25. Related party transactions list
  team_owners: |
    Controller: Priya Shah
    Senior accountant: Marcus Bell
    AR lead: Diana Ortiz
    AP lead: Tom Riggs
    Tax (outsourced): Cole and Yarrow CPAs
    HR / equity: Nora Linn
  historical_context: First year audit; prior years were unaudited. No 409A on file for the May 2025 grant — outstanding. Lease accounting was implemented mid-year and the calculations need a second review.
  target_completion: audit report issued by April 15 2026
exampleOutput: |
  ## PBC Tracker

  ### General ledger and trial balance
  | # | Item | Status | Owner | Source | Target | Notes |
  | --- | --- | --- | --- | --- | --- | --- |
  | 1 | FY 2025 detailed GL in Excel | Ready | Marcus Bell | NetSuite export | Feb 1 | Will deliver in two files (H1 and H2) due to row count |
  | 2 | Trial balance Dec 31 2025 and prior year | Ready | Marcus Bell | NetSuite | Feb 1 | Prior year is unaudited |

  ### Cash and bank
  | # | Item | Status | Owner | Source | Target | Notes |
  | --- | --- | --- | --- | --- | --- | --- |
  | 3 | Bank reconciliations all accounts every month | Ready | Marcus Bell | NetSuite | Feb 5 | 7 accounts, 12 months each |
  | 4 | Bank statements all accounts every month | Ready | Marcus Bell | Bank portals | Feb 5 | Will provide auditor with view-only access in lieu of PDFs |

  ### Accounts receivable and revenue
  | # | Item | Status | Owner | Source | Target | Notes |
  | --- | --- | --- | --- | --- | --- | --- |
  | 5 | AR aging Dec 31 2025 plus subsequent collections | In progress | Diana Ortiz | NetSuite + Stripe | Feb 12, then weekly updates through fieldwork | Subsequent collections file refreshed weekly |
  | 6 | FY 2025 sales register | Ready | Diana Ortiz | NetSuite | Feb 1 | |
  | 7 | Top 25 customers with contracts | In progress | Priya Shah | DocuSign + CRM | Feb 12 | Two contracts not in DocuSign; pulling from email archive |
  | 8 | Revenue recognition memo by contract type | Not started | Priya Shah | Drafting | Feb 26 | Three contract types: SaaS subscription, implementation services, transactional billing |

  ### Accounts payable and accrued expenses
  | # | Item | Status | Owner | Source | Target | Notes |
  | --- | --- | --- | --- | --- | --- | --- |
  | 9 | AP aging Dec 31 2025 | Ready | Tom Riggs | NetSuite | Feb 1 | |
  | 10 | Search for unrecorded liabilities | In progress | Tom Riggs | Manual review | Feb 26, refresh through fieldwork | Will provide cutoff testing log |

  ### Fixed assets and depreciation
  | # | Item | Status | Owner | Source | Target | Notes |
  | --- | --- | --- | --- | --- | --- | --- |
  | 11 | Fixed asset rollforward | Ready | Marcus Bell | NetSuite FA module | Feb 8 | |

  ### Leases
  | # | Item | Status | Owner | Source | Target | Notes |
  | --- | --- | --- | --- | --- | --- | --- |
  | 12 | All 2025 lease agreements | Ready | Priya Shah | Contract repository | Feb 5 | 4 leases (3 office, 1 vehicle) |
  | 13 | ASC 842 calculations and entries | In progress | Priya Shah | Excel model | Feb 19 | Calculations were implemented mid-year; recommend auditor review of methodology before fieldwork |

  ### Equity and stock-based compensation
  | # | Item | Status | Owner | Source | Target | Notes |
  | --- | --- | --- | --- | --- | --- | --- |
  | 14 | 2025 stock option grants with approvals | Ready | Nora Linn | Carta + board minutes | Feb 8 | |
  | 15 | 409A valuation report | Blocked | Nora Linn | External valuation firm | Refresh in progress, expected Feb 19 | May 2025 grant priced against expired 409A; refresh in flight |
  | 16 | Stock-based comp expense by quarter | Ready | Nora Linn | Carta export | Feb 12 | |

  ### Income tax
  | # | Item | Status | Owner | Source | Target | Notes |
  | --- | --- | --- | --- | --- | --- | --- |
  | 17 | Tax provision and workpapers | In progress | Cole and Yarrow CPAs | External | Mar 5 | Provision deliverable in their normal cycle |
  | 18 | Prior year federal and state returns | Ready | Priya Shah | Tax provider portal | Feb 1 | |

  ### Memos, agreements, and supporting documents
  | # | Item | Status | Owner | Source | Target | Notes |
  | --- | --- | --- | --- | --- | --- | --- |
  | 19 | Board minutes FY 2025 and through fieldwork | Ready | Priya Shah | Board portal | Feb 1, refresh as held | |
  | 20 | Material contracts greater than $100K | Ready | Priya Shah | Contract repository | Feb 5 | |
  | 21 | Going concern memo | Not started | Priya Shah | Drafting | Mar 12 | |
  | 22 | Subsequent events memo | Not started | Priya Shah | Drafting | Issued at audit report date | |
  | 25 | Related party transactions list | Ready | Priya Shah | GL plus officer survey | Feb 12 | |

  ### Other
  | # | Item | Status | Owner | Source | Target | Notes |
  | --- | --- | --- | --- | --- | --- | --- |
  | 23 | Internal control narratives | Out of scope | Priya Shah | n/a | n/a | Non-issuer audit; controls testing not required. See pushback section. |
  | 24 | Cybersecurity assessment FY 2025 | Out of scope | Priya Shah | n/a | n/a | Not a financial statement audit requirement. See pushback section. |

  ## Items Requiring Clarification
  - Item 5 (subsequent collections through fieldwork): confirm exact cutoff date for collection testing.
  - Item 10 (search for unrecorded liabilities): confirm the dollar threshold for inclusion in the cutoff log.
  - Item 20 (material contracts greater than $100K): confirm whether this is annual contract value or total contract value.

  ## Items Recommended for Pushback
  - Item 23 (internal control narratives): for a non-issuer audit under AICPA standards, controls walkthroughs are at the auditor's discretion as part of risk assessment. We propose providing the revenue and payroll process narratives and deferring the procurement narrative unless specifically requested in writing.
  - Item 24 (cybersecurity assessment): not a financial statement audit deliverable. Propose removing from PBC; available separately if relevant.

  ## Suggested Kickoff Call Agenda
  - Confirm scope and objective of the audit
  - Confirm planning materiality and tolerable misstatement
  - Review timeline and target April 15 audit report date
  - Walk through the PBC tracker, status, and owners
  - Discuss the four clarifications above
  - Discuss the two pushback items above
  - Confirm system access protocol and auditor read-only logins to NetSuite, Carta, and the bank portals
tips:
  - "Push back early. Scope creep happens at the start of the audit, not during fieldwork. The PBC response is your one structured chance to set the boundary."
  - "Always assign a specific person, not a team. 'Accounting' as an owner is functionally unowned."
  - "Group requests by audit area. The auditors think in those buckets and your tracker is easier for them to consume when it matches."
  - "For first year audits, expect the PBC list to include items that are not strictly required (controls narratives, cyber assessments). Treat them as optional unless cited to a standard."
  - "Have qualified audit and tax counsel or your CPA firm review the response before sending if there are scope, GAAP, or tax positions in dispute. This prompt produces a triage tracker, not legal or audit advice."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - audit-prep-memo
  - month-end-checklist
  - revenue-recognition-summary
tags:
  - finance
  - audit
  - accounting
  - controller
  - pbc
---
