---
title: "Write a project status update for stakeholders in RAG format"
slug: status-update
function: operations
role: project-management
description: "Generate a clear, concise project status update using Red/Amber/Green (RAG) status indicators, giving stakeholders an honest picture of project health and what's needed from them."
useCase: "Use this prompt weekly or bi-weekly to keep stakeholders informed without scheduling a meeting. Good status updates are honest, specific, and action-oriented — they tell people what's going well, what's at risk, and exactly what decisions or unblocking is needed."
prompt: |
  You are a skilled project manager who writes status updates that stakeholders actually read and act on. Write a project status update based on the information below.

  **Project name:** {{project_name}}
  **Reporting period:** {{reporting_period}}
  **Project phase:** {{project_phase}} (e.g., planning, in progress, testing, launch prep, post-launch)
  **Overall RAG status:** {{rag_status}} (Red / Amber / Green)
  **What was accomplished this period:** {{accomplishments}}
  **What's currently at risk or blocked:** {{risks_blockers}}
  **What's planned for next period:** {{next_period_plan}}
  **Decisions or support needed from stakeholders:** {{asks}}
  **Key metrics or progress indicators:** {{metrics}}
  **Audience:** {{audience}} (e.g., "executive leadership team", "project steering committee", "department heads")

  Write a project status update with this structure:

  ## [Project Name] — Status Update
  **Period:** [Reporting period] | **Date:** [Date] | **PM:** [Name placeholder]

  ### Overall Status: [🔴 RED / 🟡 AMBER / 🟢 GREEN]
  **One-sentence summary:** A single sentence explaining the overall status rating. Why is it Red, Amber, or Green?

  ### Status by Dimension
  Rate each dimension with RAG and a 1–2 sentence explanation:
  | Dimension | Status | Summary |
  |-----------|--------|---------|
  | Schedule | 🔴/🟡/🟢 | [On track / N days behind / at risk because...] |
  | Scope | 🔴/🟡/🟢 | [Scope is stable / scope change requested / creep identified] |
  | Budget | 🔴/🟡/🟢 | [On budget / X% over / underspending due to...] |
  | Resources | 🔴/🟡/🟢 | [Fully staffed / gap in X role / key person at risk] |
  | Quality | 🔴/🟡/🟢 | [On track / defects found / testing revealed...] |
  | Stakeholders | 🔴/🟡/🟢 | [Aligned / concern from X / decision pending] |

  ### Accomplishments This Period
  Bullet list of 3–6 specific, completed items. Use past tense. Be concrete — "Completed user acceptance testing with 8 participants" not "Made progress on testing."

  ### Risks and Issues
  For each active risk or issue:
  - **[Risk/Issue name]** [Status: New / Escalating / Stable / Resolved]
    - What: Brief description
    - Impact: If not addressed, what happens?
    - Action: What is being done?
    - Owner: [Name]
    - Due: [Date]

  ### Next Period Plan
  What will be accomplished in the next reporting period. Be specific and commitments-based, not aspirational.

  ### Decisions and Asks
  The most important section for stakeholders. Be explicit:
  - **[DECISION NEEDED]:** [What decision, what the options are, by when it's needed, and what happens if it's not made]
  - **[UNBLOCKING NEEDED]:** [What is blocked, who needs to act, and the downstream impact]
  - **[FYI ONLY]:** [Information that stakeholders should be aware of but don't need to act on]

  ### Key Metrics
  | Metric | Last Period | This Period | Target | Trend |

  **Tone guidance based on RAG:**
  - Green: Confident and factual. Avoid over-celebrating — just report.
  - Amber: Honest about what's at risk. Don't minimize. Show that you have a plan.
  - Red: Direct and serious. No hedging. Lead with the problem and the recovery plan. Don't bury bad news in the middle.
variables:
  - "{{project_name}}"
  - "{{reporting_period}}"
  - "{{project_phase}}"
  - "{{rag_status}}"
  - "{{accomplishments}}"
  - "{{risks_blockers}}"
  - "{{next_period_plan}}"
  - "{{asks}}"
  - "{{metrics}}"
  - "{{audience}}"
exampleInput: |
  project_name: NetSuite ERP Migration
  reporting_period: Week of January 22, 2024
  project_phase: In progress — data migration phase
  rag_status: Amber
  accomplishments: Completed chart of accounts configuration in NetSuite (approved by VP Finance). All open AR invoices migrated and validated. NetSuite training for AP team completed (all 5 team members attended).
  risks_blockers: Historical data quality issue found — 18% of pre-2022 transactions have missing cost center codes. Cleaning will take 2 extra weeks. Salesforce Admin is still not allocated (competing priority from Sales Ops project). Without Salesforce integration, cutover cannot happen.
  next_period_plan: Begin AP historical data migration. Finalize integration spec with Sererra. Escalate Salesforce Admin allocation to COO.
  asks: Need COO to resolve Salesforce Admin allocation conflict by January 26. Need VP Finance to approve revised cutover date (June 24 instead of June 17).
  metrics: "Milestones complete: 4/12 (33%). Data records migrated: 1,240 of 8,500 (15%). Budget spent: $42K of $150K (28%). Days to cutover: 145."
  audience: Executive leadership team (CEO, CFO, COO, VP Finance)
exampleOutput: |
  ## NetSuite ERP Migration — Status Update
  **Period:** Week of January 22, 2024 | **PM:** [Name]

  ### Overall Status: 🟡 AMBER
  **Summary:** The project is progressing but two issues — a data quality problem and an unresolved resource conflict — threaten the June cutover date if not addressed this week.

  ### Status by Dimension
  | Dimension | Status | Summary |
  |-----------|--------|---------|
  | Schedule | 🟡 | 7 days behind due to data quality remediation; cutover date shift requested |
  | Scope | 🟢 | Scope is stable; no changes requested |
  | Budget | 🟢 | 28% of budget spent, tracking to plan |
  | Resources | 🔴 | Salesforce Admin not allocated — blocks integration milestone |
  | Quality | 🟡 | 18% of pre-2022 transactions have data quality issues requiring remediation |
  | Stakeholders | 🟢 | Executive team aligned; VP Finance engaged and responsive |

  ### Accomplishments This Period
  - Chart of accounts configuration completed and approved by VP Finance
  - All open AR invoices (1,240 records) migrated to NetSuite and validated against source
  - Finance team NetSuite training completed — all 5 team members attended
  - Sererra delivered integration architecture document on schedule

  ### Risks and Issues

  **Data quality — missing cost center codes** [Status: New]
  - What: 18% of pre-2022 transactions (estimated 1,300 records) have missing cost center codes, which will cause reporting errors in NetSuite
  - Impact: If unresolved, historical reporting will be inaccurate and audit-trail will have gaps
  - Action: Finance Analyst (Jin Park) is remediating manually; Sererra is building a bulk-correction tool (ready Week 5)
  - Owner: VP Finance
  - Due: February 16

  **Salesforce Admin not allocated** [Status: Escalating]
  - What: The Salesforce Admin needed for the Stripe/Salesforce integration is still supporting a competing Sales Ops project
  - Impact: Integration spec cannot be finalized; cutover is blocked without this integration
  - Action: COO decision needed to resolve resource conflict
  - Owner: COO
  - Due: January 26 — critical

  ### Next Period Plan
  - Begin AP historical data migration (target: 2,000 records migrated by Jan 29)
  - Finalize integration spec with Sererra (pending Salesforce Admin allocation)
  - Submit revised cutover date for VP Finance approval

  ### Decisions and Asks

  - **[DECISION NEEDED — January 26]:** COO to resolve Salesforce Admin allocation conflict. Options: (A) Pause Sales Ops project for 3 weeks; (B) hire contractor Salesforce Admin ($8K); (C) delay ERP cutover by 4 weeks. If not resolved by Jan 26, recommend Option B to protect go-live date.

  - **[DECISION NEEDED — January 29]:** VP Finance to approve revised cutover date of June 24 (shifted 7 days from original June 17). No downstream impact on month-end close.

  - **[FYI ONLY]:** Data remediation is adding approximately 2 weeks to the migration phase but is fully within the buffer built into the schedule. We do not anticipate further slippage from this issue.

  ### Key Metrics
  | Metric | Last Week | This Week | Target | Trend |
  |--------|-----------|-----------|--------|-------|
  | Milestones complete | 2/12 | 4/12 | 12/12 by June 24 | ↑ |
  | Records migrated | 0 | 1,240 | 8,500 | ↑ |
  | Budget spent | $28K | $42K | $150K | On track |
  | Days to cutover | 152 | 145 | 0 | On track |
tips:
  - "The 'Decisions and Asks' section is the reason busy executives read status updates. Lead with what you need, not what happened."
  - "Amber status requires more explanation than Red or Green. Be specific: what is the risk, what is the plan, and what would make this turn Red?"
  - "Never bury bad news in a sub-bullet. If the project is at serious risk, that must be the first thing a stakeholder reads."
  - "Status updates should be sent on a predictable schedule. Stakeholders who get them irregularly assume something is wrong when they stop coming."
complexity: beginner
modelRecommendation: claude-haiku
relatedSlugs:
  - risk-register
  - project-brief
  - stakeholder-communication-plan
  - meeting-notes-summary
tags:
  - project-management
  - communication
  - status-reporting
  - stakeholder-management
  - operations
---
