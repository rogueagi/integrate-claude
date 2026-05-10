---
title: "Synthesize a deal review prep narrative"
slug: deal-review-prep-narrative
function: sales
role: ae
description: "Generate a forecast-call-ready deal review narrative covering where the deal stands, what has been tested, what is at risk, and the specific ask from leadership."
useCase: "Use this before forecast calls or pipeline reviews when you need to walk leadership through a deal in 2 to 3 minutes without rambling. Most deal reviews fall apart because the AE narrates the deal chronologically. This prompt forces a structured narrative that ends with a clear ask, which is what leadership actually wants."
prompt: |
  You are a senior sales coach prepping an AE for a deal review with sales leadership. Synthesize a 2-to-3-minute spoken narrative the AE can use, plus a 1-page written summary.

  Deal context:
  - Company: {{company_name}}
  - Deal size: {{deal_size}}
  - Stage: {{stage}}
  - Forecast category: {{forecast_category}} (commit, best case, pipeline)
  - Original close date: {{original_close}}
  - Current close date: {{current_close}}
  - What has been tested or validated: {{tested}}
  - What has not been tested: {{untested}}
  - Stakeholders engaged: {{stakeholders_engaged}}
  - Stakeholders not yet engaged: {{stakeholders_missing}}
  - Known risks: {{risks}}
  - Specific ask from leadership: {{ask}}

  Output two artifacts:

  1. Spoken narrative (250 to 350 words) structured as:
     - Where the deal stands in 1 sentence
     - 2 to 3 sentences on what has been validated and how
     - 2 to 3 sentences on what is at risk and what would push the date
     - 1 to 2 sentences on the specific ask

  2. 1-page written summary in this format:
     - Header: company, size, stage, forecast category, close date (with slip flag if relevant)
     - Bullets: validated, unvalidated, engaged, missing, top 3 risks, the ask

  Rules:
  - No chronology. Never start with "we got introduced in March."
  - No hedging language ("things are looking pretty good"). Leadership wants probability and risk.
  - End with the ask. Always.
  - If the deal has slipped, name it explicitly in the first sentence.
variables:
  - "{{company_name}}"
  - "{{deal_size}}"
  - "{{stage}}"
  - "{{forecast_category}}"
  - "{{original_close}}"
  - "{{current_close}}"
  - "{{tested}}"
  - "{{untested}}"
  - "{{stakeholders_engaged}}"
  - "{{stakeholders_missing}}"
  - "{{risks}}"
  - "{{ask}}"
exampleInput: |
  company_name: Vantage Systems
  deal_size: $420K ARR
  stage: in procurement
  forecast_category: commit
  original_close: end of Q2
  current_close: mid-Q3
  tested: technical eval passed, security review approved, 2 reference calls completed
  untested: CFO has not signed off on multi-year vs annual term, legal redlines outstanding on data residency clause
  stakeholders_engaged: VP Operations (champion), CIO (sponsor), procurement lead
  stakeholders_missing: CFO has not been on a call with us yet
  risks: data residency clause, CFO timing, competing priorities at fiscal year end
  ask: VP Sales to do a 20-minute exec align with the CFO this week
exampleOutput: |
  Spoken narrative:

  Vantage is a $420K commit that has slipped from end of Q2 to mid-Q3, driven by procurement timing and a CFO we have not yet engaged. Technical eval passed clean — performance benchmarks landed above their threshold and the SE called it the smoothest eval he ran this quarter. Security review came back approved on the first pass, and we ran two reference calls with peers in their segment, both of which the champion described as decisive. So the value and the technical fit are not in question.

  Two things are at risk. The CFO has not been on a call with us, and we are now in a multi-year term discussion that needs his blessing. The legal team has flagged a data residency clause we need to negotiate, which historically adds 5 to 7 business days. If both slip together, we are looking at end of Q3, not mid-Q3.

  The ask: I need our VP Sales to do a 20-minute exec align with the CFO this week. The champion has offered the intro and is waiting on us. If we get that meeting on the calendar by Friday, the mid-Q3 commit holds. If we miss it, I am moving this to best case.

  Written summary:

  Vantage Systems — $420K ARR — Procurement — Commit — Close: mid-Q3 (slipped from end of Q2)

  Validated:
  - Technical eval passed
  - Security review approved
  - 2 reference calls completed

  Unvalidated:
  - CFO sign-off on term length
  - Legal redlines on data residency

  Engaged: VP Operations (champion), CIO (sponsor), procurement lead
  Missing: CFO

  Top 3 risks:
  1. CFO not yet engaged — biggest risk to current close date
  2. Data residency clause adds 5 to 7 days to legal cycle
  3. Fiscal year end competing priorities

  Ask: VP Sales to do a 20-minute exec align with the CFO this week. Champion has the intro ready.
tips:
  - "Forecast calls are not storytelling sessions. Lead with stage, size, category, close date — leadership orients on those four things."
  - "If the deal has slipped, name it in the first sentence. Trying to hide a slip is the fastest way to lose credibility with your manager."
  - "Always end with a specific ask. 'I need X person to do Y by Z.' Without it, the deal review was not actually a review."
  - "Validated vs unvalidated is the most useful frame for sales leaders. It maps directly to risk and to where they can help."
  - "Run this prompt the night before forecast call. Read the spoken version out loud once. If it feels long, cut the validated section first — leadership cares more about risk."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cold-outbound-vp-sales
  - mutual-action-plan-draft
  - renewal-conversation-prep
tags:
  - sales
  - deal-review
  - forecasting
  - pipeline
  - ae
---
