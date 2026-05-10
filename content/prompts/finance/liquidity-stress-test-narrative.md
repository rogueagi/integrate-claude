---
title: "Write a liquidity stress test narrative for a CFO review"
slug: liquidity-stress-test-narrative
function: finance
role: treasury
description: "Generate a CFO-ready narrative for a liquidity stress test that explains scenarios, runway impact, covenants, and recommended actions."
useCase: "Use this prompt when treasury has run a liquidity stress test (base, downside, severe downside) and the CFO needs a memo before deciding on a credit facility draw, a hiring pause, or a board communication. The numbers alone are insufficient: the CFO needs scenarios contextualized, covenant headroom evaluated, and decision triggers articulated."
prompt: |
  You are the head of treasury at {{company_name}} preparing the liquidity stress test narrative for the CFO ahead of the {{review_meeting}}.

  Inputs:
  - As-of date: {{as_of_date}}
  - Current cash and equivalents: {{current_cash}}
  - Available revolver or credit facility capacity: {{credit_capacity}}
  - Monthly burn rate (current run rate): {{burn_rate}}
  - Forecast horizon: {{horizon}}
  - Scenario assumptions:
    - Base case: {{base_case}}
    - Downside case: {{downside_case}}
    - Severe downside case: {{severe_case}}
  - Covenant package (financial covenants and current cushion): {{covenants}}
  - Customer concentration and major receivable risk: {{ar_concentration}}
  - Capital availability — equity, debt, or other sources of funds: {{capital_options}}

  Produce the narrative with these sections:

  ## Liquidity Position Snapshot
  Two to three sentences stating cash, available facility, total liquidity, and current burn. Cite a clear runway number using the current burn rate.

  ## Scenario Walkthrough
  For each scenario (base, downside, severe downside):
  - Trigger conditions and revenue or cost assumptions
  - Month-by-month cash trajectory at quarter-end checkpoints
  - Trough cash month and minimum balance
  - Whether and when liquidity drops below operating minimum (one month of burn) or below covenant trigger
  - Whether the credit facility would need to be drawn and to what size

  ## Covenant Analysis
  For each covenant: current ratio, threshold, headroom under base, headroom under downside, headroom under severe downside. Identify the binding covenant in each scenario.

  ## Customer Concentration and AR Risk
  Quantify the impact if the largest customer or two delays payment by 60 to 90 days. Treat this as a fourth scenario layered on the downside case.

  ## Decision Triggers and Recommended Actions
  Provide a tiered action plan with explicit triggers:
  - Green (base case): no action; monitor monthly
  - Yellow (downside or AR delay materializes): specific actions, e.g., draw $X on revolver, defer Y in spend, accelerate collections
  - Red (severe downside): specific actions, e.g., hiring freeze, vendor payment terms renegotiation, equity raise process
  Each trigger must be defined as a measurable condition (e.g., "if cash drops below $20M before June 30").

  ## Recommendation to the CFO
  Two to four sentences. State the single most important decision the CFO should make in the next 30 days based on this analysis.

  Tone: precise, conservative, and decision-oriented. Treasury narratives are read under stress. Avoid hedging language. Be specific about numbers, dates, and actions.
variables:
  - "{{company_name}}"
  - "{{review_meeting}}"
  - "{{as_of_date}}"
  - "{{current_cash}}"
  - "{{credit_capacity}}"
  - "{{burn_rate}}"
  - "{{horizon}}"
  - "{{base_case}}"
  - "{{downside_case}}"
  - "{{severe_case}}"
  - "{{covenants}}"
  - "{{ar_concentration}}"
  - "{{capital_options}}"
exampleInput: |
  company_name: Aldridge Industrial Sensors
  review_meeting: CFO and audit committee chair check-in, May 14 2026
  as_of_date: April 30 2026
  current_cash: $42.0M cash and equivalents
  credit_capacity: $30M senior revolver, $0 drawn, $30M available; matures March 2028
  burn_rate: $3.8M per month operating burn (Q1 2026 average)
  horizon: 18 months through October 2027
  base_case: Revenue grows 22 percent year over year; gross margin holds at 58 percent; opex per plan; new logo bookings track plan; collections at 45 day DSO
  downside_case: Revenue grows 8 percent year over year; one large customer (Boreas Aerospace, 18 percent of ARR) delays renewal by two quarters; gross margin compresses 200bp due to mix shift; opex held but no further hiring
  severe_case: Revenue flat year over year; Boreas does not renew; one additional top 10 customer delays renewal; gross margin compresses 350bp; opex requires a 15 percent reduction by month 9 to maintain runway
  covenants: |
    - Minimum liquidity covenant: $15M unrestricted cash plus undrawn revolver, tested monthly
    - Maximum total leverage: 3.0x trailing twelve months EBITDA
    - Minimum fixed charge coverage: 1.25x trailing twelve months
  ar_concentration: Boreas Aerospace 18 percent of ARR, $4.5M outstanding AR at any time; Pelletier Defense 11 percent; top 10 customers 64 percent of ARR
  capital_options: |
    - $30M revolver fully available
    - Series D priced October 2024 at $480M post; next equity raise possible but not immediate
    - Asset based facility on inventory and AR could provide $8M to $12M incremental
exampleOutput: |
  ## Liquidity Position Snapshot
  As of April 30 2026, Aldridge has $42.0M cash and an undrawn $30M revolver, total available liquidity of $72.0M. At the current $3.8M monthly operating burn, cash-only runway is 11.0 months. With the revolver fully drawn, total runway extends to 18.9 months — which clears the 18-month forecast horizon under base case assumptions.

  ## Scenario Walkthrough

  ### Base case
  Cash declines from $42.0M today to $28.5M at October 2026, $18.0M at April 2027, and $11.5M at October 2027. Trough month is October 2027 at $11.5M. The minimum liquidity covenant ($15M cash plus undrawn revolver) is satisfied throughout because the $30M revolver remains undrawn. No revolver draw needed in base case.

  ### Downside case
  Boreas renewal slip and revenue deceleration push burn to $4.6M monthly starting July. Cash declines to $25.0M at October 2026, $11.0M at April 2027, and $0.5M at October 2027 if no actions taken. The minimum liquidity covenant is breached in March 2027 if the revolver remains undrawn. Recommended bridge: draw $20M on revolver in February 2027, extending cash trough to August 2027 at approximately $9.0M with revolver drawn.

  ### Severe downside case
  Revenue flat, Boreas non-renewal, second customer slip, and gross margin compression drive monthly burn to $5.4M before mitigations. Without action, cash exhausts in May 2027. With the planned 15 percent opex reduction beginning month 9 (January 2027), monthly burn drops to $4.2M and cash trough is $4.5M at September 2027 with the full $30M revolver drawn. The minimum liquidity covenant is breached in November 2026 unless the revolver is drawn earlier.

  ## Covenant Analysis
  | Covenant | Threshold | Base case | Downside | Severe |
  | --- | --- | --- | --- | --- |
  | Minimum liquidity (cash + undrawn revolver) | $15M | $41.5M minimum | $9.0M trough — breach without revolver draw | $4.5M trough — breach without action |
  | Total leverage | 3.0x TTM EBITDA | 0.0x (no debt drawn) | 1.6x at $20M draw | 2.4x at $30M draw |
  | Fixed charge coverage | 1.25x | 3.4x | 1.4x | 0.95x — breach in severe |

  Binding covenant under downside is minimum liquidity. Binding covenant under severe is fixed charge coverage, which would be breached even after the opex reduction.

  ## Customer Concentration and AR Risk
  A 60 to 90 day AR delay from Boreas alone, layered on the downside case, accelerates the trough by approximately 60 days, pulling the covenant breach from March 2027 to January 2027. A combined Boreas plus Pelletier delay of 90 days each would consume $7M of additional liquidity within one quarter, requiring revolver activation by October 2026 in any scenario where that combination materializes.

  ## Decision Triggers and Recommended Actions

  ### Green — base case, monitor monthly
  No action required. Reaffirm at each monthly liquidity review.

  ### Yellow — trigger if any of:
  - Boreas renewal not signed by August 31 2026
  - Cash drops below $35M by August 2026
  - DSO extends beyond 60 days for two consecutive months
  Actions: draw $10M to $15M on revolver as a precautionary measure; pause net new hiring above the December 2026 plan; activate weekly AR collection reviews; engage existing investors on Series D extension optionality.

  ### Red — trigger if any of:
  - Cash drops below $25M
  - Boreas non-renewal confirmed and pipeline does not produce two replacement deals greater than $1.5M ACV within 90 days
  - Fixed charge coverage projected below 1.25x at any quarter-end
  Actions: full $30M revolver draw; implement the 15 percent opex reduction (severe case plan); negotiate covenant amendment with the lender; initiate a formal capital-raise process targeting close in 120 days; engage an asset-based lender on the $8M to $12M incremental facility as a backup.

  ## Recommendation to the CFO
  The single most important decision in the next 30 days is whether to convert the existing $30M revolver into an active borrowing relationship while the company is in covenant compliance and on a base case trajectory. Drawing $10M now at low cost preserves optionality and is materially easier than negotiating an amendment from a stressed position later. We recommend a $10M precautionary draw in May, paired with a written escalation plan that ties further draws and opex actions to the yellow and red triggers above.
tips:
  - "Always state cash, undrawn facility, total liquidity, and runway in three different forms (months at current burn, months at downside burn, months with full revolver drawn). The CFO will read whichever number is most relevant to their question."
  - "The binding covenant changes by scenario. Identify it explicitly so the CFO knows which lever to manage in each case."
  - "Customer concentration is the most underrated risk in liquidity narratives. Layer an AR delay scenario on top of the downside, not the base case."
  - "Decision triggers must be measurable and dated. 'If things get worse' is not a trigger. 'If cash drops below $25M before September 30' is."
  - "This is treasury analysis, not legal or audit advice. Covenant interpretation, default cures, and lender communication require qualified review by counsel and the CFO."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - cash-flow-forecast-narrative
  - cash-management-policy
  - scenario-planning-framework
  - foreign-exchange-exposure-summary
tags:
  - finance
  - treasury
  - liquidity
  - stress-test
  - cfo
---
