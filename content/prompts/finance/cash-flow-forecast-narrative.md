---
title: "Write a narrative explanation of a 13-week cash flow forecast"
slug: cash-flow-forecast-narrative
function: finance
role: fpa
description: "Generate a clear narrative explanation of a 13-week cash flow forecast that communicates cash timing, risk, and management actions to leadership."
useCase: "Use this prompt to translate a 13-week cash flow model into written narrative for executive review, board presentations, or lender reporting. The model alone rarely tells the full story — this prompt produces the written context that explains what the numbers mean and what actions management is taking."
prompt: |
  You are a senior FP&A or treasury analyst writing the narrative explanation for a 13-week cash flow forecast.

  Context:
  - Company: {{company_name}}
  - Forecast period: {{forecast_period}} (start date through end date, 13 weeks)
  - Opening cash balance: {{opening_cash}}
  - Projected ending cash balance: {{ending_cash}}
  - Weekly cash flow summary: {{weekly_summary}} (net cash flow by week, or key weeks with significant movements)
  - Operating cash inflows: {{operating_inflows}} (collections, recurring revenue, one-time receipts)
  - Operating cash outflows: {{operating_outflows}} (payroll, vendor payments, rent, subscriptions, one-time items)
  - Financing or investing cash flows: {{financing_flows}} (loan draws, equity proceeds, capex, debt service)
  - Key timing risks: {{timing_risks}} (customer payments that might be late, one-time payments with uncertain timing)
  - Minimum cash threshold: {{minimum_cash}} (floor below which action is required)
  - Current actions being taken to manage cash: {{cash_actions}}

  Write a narrative with these sections:

  ## 13-Week Forecast Summary (1 paragraph)
  The essential story: where cash starts, where it ends, and what happens in between. State clearly whether the forecast shows the company maintaining adequate liquidity or approaching a threshold that requires action.

  ## Week-by-Week Cash Flow Drivers
  Identify the 3–5 most significant cash events in the 13-week period. For each:
  - The week it occurs
  - The cash impact (inflow or outflow, amount)
  - Why it occurs and whether it is certain or estimated
  - Whether any management action can affect the timing or amount

  ## Collections and Inflow Assumptions
  Explain the assumptions underlying cash inflows:
  - Payment terms and collection timing for major customer categories
  - Any customers with payment delays or concentration risk
  - Confidence level in the collections forecast (high/medium/low) and basis for that assessment

  ## Disbursement Schedule
  Key outflows and their timing:
  - Fixed obligations (payroll, rent, debt service) — certain and immovable
  - Variable or controllable outflows — and what levers exist to defer or reduce
  - Any unusually large payments in the period and their nature

  ## Cash Floor and Risk Analysis
  - Minimum cash level projected in the period (which week, what amount)
  - How close this comes to the minimum operating threshold
  - The 2–3 scenarios most likely to cause a breach of the minimum cash floor

  ## Management Actions and Contingency Plan
  - What is already being done to manage cash (accelerating collections, deferring payments, credit line usage)
  - What additional actions would be triggered if cash approaches the floor
  - Recommended decisions or approvals needed from leadership

  Tone: precise and practical. Executives use this narrative to make decisions — prioritize clarity over completeness, and flag risk clearly rather than softening it.
variables:
  - "{{company_name}}"
  - "{{forecast_period}}"
  - "{{opening_cash}}"
  - "{{ending_cash}}"
  - "{{weekly_summary}}"
  - "{{operating_inflows}}"
  - "{{operating_outflows}}"
  - "{{financing_flows}}"
  - "{{timing_risks}}"
  - "{{minimum_cash}}"
  - "{{cash_actions}}"
exampleInput: |
  company_name: Anchor Analytics
  forecast_period: April 7 – June 29, 2024 (13 weeks)
  opening_cash: $4.2M
  ending_cash: $2.8M (projected)
  weekly_summary: Weeks 1–4 averaging -$90K/week; Week 5 large vendor payment (-$280K); Weeks 6–10 averaging -$95K/week; Weeks 11–13 slight improvement as Q2 enterprise deals close
  operating_inflows: Monthly recurring collections ~$145K/month (annual contracts collected monthly); Q2 enterprise close expected Week 11 ($185K); renewal billings Week 6 ($95K)
  operating_outflows: Payroll bi-weekly ($190K each cycle, 6 cycles in period); AWS/infrastructure ~$28K/month; rent $22K/month; annual cyber insurance premium $280K due Week 5
  financing_flows: No financing planned; $500K revolving credit facility available but undrawn
  timing_risks: Two mid-market customers on Net-45 terms (combined ~$95K) may request Net-60 extension; enterprise deal Week 11 is high-probability but not yet signed
  minimum_cash: $1.5M (3 months operating expenses)
  cash_actions: Switched two customers to auto-pay to accelerate collections; deferred non-critical vendor payments to Q3; reviewing whether cyber insurance can be split into two installments
exampleOutput: |
  ## 13-Week Forecast Summary
  Anchor enters the 13-week period with $4.2M in cash and is projected to exit at $2.8M — a net decrease of $1.4M driven by ongoing operating burn and a $280K one-time cyber insurance premium in Week 5. Cash remains comfortably above the $1.5M minimum operating threshold throughout the period, with the lowest projected balance of $2.6M occurring in Week 10. The forecast is sensitive to the timing of the Week 11 enterprise deal close — a slip into Q3 would reduce the ending balance to approximately $2.3M, still above threshold but meaningfully tighter.

  ## Week-by-Week Cash Flow Drivers

  **Week 5 — Cyber insurance premium ($280K outflow):** The annual cyber liability premium is due May 5. This is a fixed, non-negotiable obligation. Finance is in conversation with the broker about a two-installment option (60/40 split); if approved, $112K would shift to Q3, improving Week 5 net cash flow materially. Confirmation expected by April 12.

  **Week 6 — Annual renewal billing cycle ($95K inflow):** Five mid-market accounts renew in early June. Collections typically lag billing by 15–20 days on Net-30 terms, meaning most collections land in Week 8. This is a high-confidence inflow — all five accounts are current and have confirmed renewal intent.

  **Weeks 4 and 10 — Bi-weekly payroll cycles ($190K each):** Six payroll cycles occur in the period, with the two largest landing in Weeks 4 and 10 (month-end cycles with variable compensation true-ups). These are fixed and immovable.

  **Week 11 — Enterprise deal close ($185K inflow):** One enterprise opportunity (Meridian Health) is projected to close and collect in Week 11 based on current procurement timeline. This deal accounts for approximately $40K of the projected improvement in Weeks 11–13. High-probability but unsigned — the forecast treats this as 80% likely; the 20% scenario is modeled in the risk section.

  **Weeks 1–13 — AWS infrastructure ($28K/month):** Infrastructure costs have increased 12% quarter-over-quarter due to Signal launch traffic. Engineering is reviewing reserved instance pricing that would reduce monthly cost to approximately $21K beginning in Q3.

  ## Collections and Inflow Assumptions
  Monthly recurring collections of approximately $145K/month reflect the current ARR base of $1.82M collected on monthly ACH cycles. Two customers representing $95K of the period's collections are on Net-45 terms and have historically requested Net-60 extensions at quarter-end. Finance has flagged these accounts and initiated early communication — if both request extensions, up to $95K of inflows would shift from Week 8 to Week 11, temporarily depressing the cash balance during that stretch.

  The enterprise deal close in Week 11 is the forecast's highest-variance item: if it closes and collects as projected, the ending balance is $2.8M; if it slips to Q3, the ending balance is $2.3M. The VP of Sales has provided a weekly update commitment on this deal. Confidence in the remaining inflow forecast is high.

  ## Disbursement Schedule
  Fixed disbursements total approximately $1.27M over the period: six payroll cycles ($1.14M combined), rent ($66K, three monthly payments), and AWS infrastructure ($84K). These are not controllable within the period.

  Variable or deferrable outflows total approximately $420K, including the cyber insurance premium (partially deferrable if broker approves installment), $65K in professional services invoices, and $40K in discretionary software renewals. Finance has identified $85K of disbursements that can be deferred to Q3 without penalty if needed.

  ## Cash Floor and Risk Analysis
  The minimum projected cash balance is $2.6M, occurring in Week 10 — $1.1M above the $1.5M operating floor. Two scenarios would materially erode this cushion:

  - **Net-60 extension requests + enterprise slip:** Combined effect reduces Week 10 low to approximately $2.0M and the ending balance to $2.0M — still above floor, but with limited buffer.
  - **Cyber insurance full payment + AE misses:** If the insurance installment option is denied and AE productivity continues at Q1 levels through the period, ending balance approaches $2.2M. Not a breach, but warrants monitoring.

  A concurrent occurrence of both scenarios would reduce the ending balance to approximately $1.8M — $300K above threshold.

  ## Management Actions and Contingency Plan
  Actions already underway: two customers moved to auto-pay (eliminates $40K of late-payment risk), three non-critical vendor invoices deferred to Q3, broker conversation on insurance installment in progress.

  If cash approaches $2.0M at any point during the period, the following actions would be triggered without additional approval: defer all remaining deferrable disbursements ($85K), draw $250K on the revolving credit facility. These actions would extend the floor by an estimated 3 weeks and allow time for the enterprise close or additional collection acceleration.

  Leadership decision requested: authorization to draw on the credit facility if cash falls below $2.0M, without requiring a board vote — this would allow a same-day draw if needed.
tips:
  - "The 13-week cash flow narrative is most useful when it explicitly states the minimum cash balance and what week it occurs. Executives need to know the lowest point, not just the ending balance."
  - "Distinguish between fixed and variable outflows clearly — it tells leadership where they have agency and where they don't. Variable outflows without a note on deferral options are underanalyzed."
  - "Always state confidence level on the inflow forecast. A $200K inflow with a signed contract and Net-30 terms is different from a $200K deal that 'should close' — make that clear in the narrative."
  - "The contingency section should describe specific, pre-authorized actions. 'We will take action if needed' is not a plan. 'We will draw $250K on the revolver if cash falls below $2M' is a plan."
  - "Update the 13-week model weekly and roll it forward. A model that's 4 weeks old is not a 13-week forecast — it's a 9-week forecast with stale assumptions."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - board-finance-update
  - scenario-planning-framework
  - monthly-finance-commentary
  - budget-variance-analysis
tags:
  - cash-flow
  - treasury
  - fpa
  - forecasting
  - liquidity
---
