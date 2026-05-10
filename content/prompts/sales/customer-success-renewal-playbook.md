---
title: "Build a renewal playbook for an enterprise SaaS account"
slug: customer-success-renewal-playbook
function: sales
role: customer-success
description: "Generate a structured 90-day renewal playbook for an enterprise SaaS account, including risk signals, stakeholder map, value recap, and negotiation prep."
useCase: "Use this prompt 90 days before contract end on a strategic account. It pulls usage data, sentiment signals, and commercial context into a single working document that a CSM can take into a renewal motion with their AE and RevOps."
prompt: |
  You are a senior Customer Success leader with experience renewing seven-figure SaaS contracts. Build a renewal playbook for an enterprise account.

  Account context:
  - Customer: {{customer_name}}
  - Current ARR: {{current_arr}}
  - Renewal date: {{renewal_date}}
  - Product: {{product}}
  - Active seats / usage trend: {{usage_trend}}
  - Executive sponsor: {{sponsor_name}}, {{sponsor_title}}
  - Recent CSAT or NPS: {{csat_nps}}
  - Open support tickets or known issues: {{open_issues}}
  - Competitive pressure: {{competitive_threat}}

  Produce a playbook with these sections:

  1. Health snapshot — single paragraph stating renewal risk (low / medium / high) with the two strongest signals supporting that call.
  2. Stakeholder map — table with Name, Role, Relationship strength (1-5), What they care about, Last meaningful touch.
  3. Value recap — three to five quantified outcomes the customer received this term. If a number is missing, mark it [needs data] rather than inventing one.
  4. Risk register — list of three to five risks with mitigation owner and target date.
  5. Renewal motion — week-by-week plan for the 90 days leading to {{renewal_date}}, including QBR timing, executive alignment, and commercial proposal delivery.
  6. Commercial scenarios — three options (flat renewal, expansion, downgrade defense) with talking points for each.
  7. First call agenda — agenda for the kickoff renewal conversation with the economic buyer.

  Tone: internal working document. Direct, specific, no marketing language.
variables:
  - "{{customer_name}}"
  - "{{current_arr}}"
  - "{{renewal_date}}"
  - "{{product}}"
  - "{{usage_trend}}"
  - "{{sponsor_name}}"
  - "{{sponsor_title}}"
  - "{{csat_nps}}"
  - "{{open_issues}}"
  - "{{competitive_threat}}"
exampleInput: |
  customer_name: Northwind Logistics
  current_arr: $480,000
  renewal_date: 2026-08-15
  product: Fleet routing and dispatch suite
  usage_trend: weekly active dispatchers down 18% over last quarter
  sponsor_name: Priya Anand
  sponsor_title: VP of Operations
  csat_nps: NPS dropped from 42 to 19 last survey
  open_issues: two P2 tickets on mobile app sync, open 40+ days
  competitive_threat: rumored evaluation of Samsara
exampleOutput: |
  Health snapshot
  Renewal risk: HIGH. Two strongest signals: 18% drop in weekly active dispatchers and a 23-point NPS decline, both pointing to product friction reaching the daily user.

  Stakeholder map
  | Name | Role | Strength | Cares about | Last touch |
  | Priya Anand | VP Ops, sponsor | 4 | On-time delivery rate, driver retention | QBR, 6 weeks ago |
  | Marcus Bell | Director of Dispatch | 2 | Daily tool usability | Support ticket only |
  | Devon Reyes | CFO | 1 | TCO, contract terms | Never met |

  Value recap
  - On-time delivery improved from 82% to 91% in year one [verified]
  - Dispatcher overtime reduced 14% [needs data — confirm with Priya]
  - Two integrations live (SAP, Samsara ELD)

  Risk register
  - Mobile sync bugs eroding daily user trust — owner: Support lead Maya, target close: June 1
  - No CFO relationship — owner: AE, target: intro by July 1
  - Samsara evaluation — owner: CSM, target: competitive briefing by June 15

  Renewal motion (May 15 - Aug 15)
  Weeks 1-2: Site visit, ride-along with two dispatchers, document friction
  Weeks 3-4: Joint QBR with Priya and Marcus, present fix plan with named owners
  Weeks 5-8: Executive alignment meeting CFO + our VP CS, commercial draft to procurement
  Weeks 9-12: Final terms, signature, expansion conversation on driver app

  Commercial scenarios
  - Flat renewal at $480K: position as steady-state while we land mobile fixes
  - Expansion to $560K: add driver app module, contingent on hitting fix milestones
  - Downgrade defense: if seat count cut requested, offer 2-year term at current ARR with usage flexibility

  First call agenda (with Priya)
  1. What does success look like for Ops in the next 12 months
  2. Walk through health snapshot, own the misses
  3. Show fix plan with dates and owners
  4. Confirm renewal evaluation timeline and decision committee
tips:
  - "Always pull real usage data before running the prompt. A renewal playbook on stale numbers is worse than no playbook."
  - "If the executive sponsor has changed, treat the renewal as a fresh sale. The playbook should reflect a re-discovery motion."
  - "The risk register is the most useful section in your 1:1 with your manager. Keep it living and update weekly."
  - "Run the prompt twice: once with current data, once assuming the worst-case competitive scenario. Compare and pre-build objection responses."
  - "Share the value recap section with the customer before the QBR. Surprises in renewal conversations come from misaligned views of value delivered."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - cold-outbound-vp-sales
  - enterprise-rfi-response
  - api-pricing-page-copy
tags:
  - saas
  - renewal
  - customer-success
  - enterprise
  - retention
  - playbook
---
