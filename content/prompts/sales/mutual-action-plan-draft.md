---
title: "Draft a mutual action plan for a live deal"
slug: mutual-action-plan-draft
function: sales
role: ae
description: "Draft a mutual action plan (MAP) tailored to deal stage with milestones, owners on both sides, dates, dependencies, and a clear path to signature."
useCase: "Use this when a deal has progressed past discovery and you need to align with the buyer on what it takes to get to signature. A real MAP is one of the highest-leverage tools an AE has for forecast accuracy and stalled-deal prevention. This prompt produces something you can paste into a shared doc and edit with the buyer in the next call."
prompt: |
  You are a senior enterprise account executive who has run hundreds of mutual action plans. Draft a MAP for the following live deal.

  Deal context:
  - Company: {{company_name}}
  - Deal size: {{deal_size}}
  - Current stage: {{current_stage}} (e.g., post-demo, in technical eval, in procurement)
  - Target close date: {{target_close}}
  - Decision criteria: {{decision_criteria}}
  - Known stakeholders: {{stakeholders}} (list with role)
  - Known risks or unknowns: {{risks}}
  - Our side resources available: {{our_resources}} (e.g., SE, security team, exec sponsor)

  Build a MAP with the following structure:

  1. Shared goal statement (one sentence both sides will agree to)

  2. Milestone table with columns: milestone, their owner, our owner, target date, dependency, status. Cover the path from current stage to signed contract. Typical milestones include: technical validation, security review, reference calls, business case approval, legal review, procurement, signature.

  3. Risks and how each is being mitigated (3 to 5 items, specific not generic)

  4. Decision criteria checklist tied to specific milestones — make it easy for the buyer to see what evidence each criterion needs

  5. A "what would cause us to slip" section — be honest about the 2 or 3 things most likely to push the date

  6. Suggested cadence for reviewing the MAP together

  Tone: collaborative, not pushy. The buyer is co-author, not a target. If a milestone needs information you do not have, mark it [TBD with buyer] rather than inventing a date.
variables:
  - "{{company_name}}"
  - "{{deal_size}}"
  - "{{current_stage}}"
  - "{{target_close}}"
  - "{{decision_criteria}}"
  - "{{stakeholders}}"
  - "{{risks}}"
  - "{{our_resources}}"
exampleInput: |
  company_name: Helix Analytics
  deal_size: $180K ARR, 2-year term
  current_stage: post-demo, moving into technical eval
  target_close: end of Q2 (June 30)
  decision_criteria: integration with Snowflake and dbt, SOC 2 Type II, sub-200ms query latency on their data volumes
  stakeholders: Priya Shah (VP Data, economic buyer), Tomas Reyes (Lead Data Engineer, technical champion), Karen Liu (Procurement), CFO (final sign-off)
  risks: CFO has not been engaged yet, security review queue is 4 weeks, they have a competing internal project that could pull resources
  our_resources: 1 SE for technical eval, security team for SOC 2 packet, VP Sales as exec sponsor
exampleOutput: |
  Shared goal: Validate that our platform meets Helix's performance, integration, and security requirements and execute a 2-year contract by June 30 to align with their fiscal Q3 launch.

  Milestone plan:

  | Milestone | Their owner | Our owner | Target date | Dependency | Status |
  |---|---|---|---|---|---|
  | Technical eval scoping call | Tomas | SE (Mark) | May 15 | Sample data and use case shared | Open |
  | Performance benchmark on Helix data volumes | Tomas | SE | May 29 | Eval environment provisioned | Open |
  | Snowflake + dbt integration validation | Tomas | SE | June 5 | Eval extends to prod-like data | Open |
  | Security packet review (SOC 2 Type II, DPA) | Helix infosec | Our security lead | June 12 | Packet sent week of May 19 | Open |
  | Reference calls (2 customers in similar stage) | Priya | AE | June 5 | References aligned and intro'd | Open |
  | Business case + ROI summary to CFO | Priya | AE + Exec sponsor | June 15 | Eval results + reference notes | [TBD with buyer] |
  | Procurement and legal review | Karen | Our legal | June 22 | Redlines back within 5 business days | Open |
  | Signature | CFO | VP Sales | June 30 | All above complete | Open |

  Risks and mitigations:
  1. CFO not yet engaged — schedule a 20-minute exec align between our VP Sales and CFO by May 22, framed around business case, not product.
  2. Security review queue is 4 weeks — send packet by May 19 and request expedited review tied to fiscal Q3 launch.
  3. Competing internal project — explicitly ask Priya in next call whether resourcing is at risk, and document her answer in the MAP.
  4. Performance benchmark on real data volumes is the highest technical risk — front-load this milestone, not procurement.

  Decision criteria checklist:
  - Snowflake + dbt integration → validated by June 5 milestone
  - SOC 2 Type II + sub-200ms latency → validated by performance benchmark and security packet
  - Total cost of ownership → covered in business case before CFO call

  What would cause us to slip:
  1. Security review takes 6 weeks instead of 4 — push close to mid-July
  2. CFO not engaged until late June — same risk, no time to handle objections
  3. Performance benchmark fails on first pass — adds 2 to 3 weeks for tuning

  Cadence: 20-minute MAP review every Friday between AE and Tomas. Priya joins every other week. Update doc live during call.
tips:
  - "A MAP works only if the buyer co-edits it. If they will not engage, that is a forecast signal — surface it in your next deal review."
  - "Always include a 'what would cause us to slip' section. Buyers respect honesty about risk, and it gives you cover when something does slip."
  - "Tie procurement and legal milestones to specific business dates (fiscal Q3 launch, board meeting), not vague targets."
  - "If a stakeholder is not yet engaged, name them in the MAP anyway with [TBD] dates. Visibility forces the conversation."
  - "Review the MAP every week with the champion. If the champion stops engaging with it, the deal is at risk regardless of what they say."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - cold-outbound-vp-sales
  - deal-review-prep-narrative
  - renewal-conversation-prep
tags:
  - sales
  - mutual-action-plan
  - deal-management
  - enterprise-sales
  - ae
---
