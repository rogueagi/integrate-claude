---
title: "Write a one-page decision memo for a significant operational choice"
slug: decision-memo
function: operations
role: ops-management
description: "Generate a concise decision memo that frames a key operational choice, presents options with trade-offs, and recommends a path forward with clear rationale."
useCase: "Use this prompt when you need to bring a significant decision to leadership or stakeholders. A good decision memo replaces a 30-minute meeting and forces crisp thinking. Best for decisions involving trade-offs between cost, speed, risk, and capability."
prompt: |
  You are a senior operations executive with a talent for clear thinking and concise writing. Write a one-page decision memo for the decision described below.

  **Decision to be made:** {{decision_description}}
  **Decision-maker(s):** {{decision_makers}}
  **Decision needed by:** {{decision_deadline}}
  **Background context:** {{background_context}}
  **Options being considered:** {{options}}
  **Key constraints:** {{constraints}}
  **Your recommendation (if you have one):** {{recommendation}}
  **What happens if we don't decide:** {{cost_of_inaction}}

  Write a decision memo with these sections, keeping the entire document to one page (approximately 500–600 words):

  ## DECISION MEMO
  **To:** [Decision-maker names/roles]
  **From:** [Author placeholder]
  **Date:** [Date placeholder]
  **Re:** [Decision title — 10 words max]
  **Decision needed by:** [Date]

  ## Situation (2–3 sentences)
  The context that makes this decision necessary right now. Why is this on the table today? What changed?

  ## What We're Deciding (1–2 sentences)
  State the precise decision to be made. Be binary or give clear options — don't be vague.

  ## Options Considered
  For each option (typically 2–3 options; never just one):
  **Option [A/B/C]: [Name]**
  - Description: What this option actually means operationally
  - Pros: 2–3 specific benefits
  - Cons: 2–3 specific drawbacks or risks
  - Cost/resource implication: Budget, headcount, or time required
  - Reversibility: Easy to undo / Difficult to undo / Irreversible

  ## Recommendation
  State the recommendation clearly and directly: "We recommend [Option X] because..."
  Provide 3 specific reasons for the recommendation, ordered by importance.
  Acknowledge the strongest argument against the recommendation and explain why you've discounted it.

  ## If We Do Nothing
  Specifically describe what happens if this decision is not made by the deadline. Quantify the cost of inaction where possible.

  ## Next Steps (if recommendation is approved)
  3–5 bullet points showing the immediate actions following approval, with owners and dates.

  ## Appendix / Supporting Data
  Briefly note any supporting analysis, data sources, or documents that back up the recommendation (links or references — don't reproduce the data in the memo itself).

  **Formatting rules:**
  - Write in direct, declarative sentences — no hedging
  - Lead with conclusions, not background
  - Every claim should be specific (avoid "significant," "some," "many")
  - The recommendation must be unambiguous — if you're genuinely neutral, say so explicitly and explain what information would resolve the tie
variables:
  - "{{decision_description}}"
  - "{{decision_makers}}"
  - "{{decision_deadline}}"
  - "{{background_context}}"
  - "{{options}}"
  - "{{constraints}}"
  - "{{recommendation}}"
  - "{{cost_of_inaction}}"
exampleInput: |
  decision_description: Whether to build our customer support ticketing system in-house or migrate to Zendesk
  decision_makers: COO, VP Customer Success, VP Engineering
  decision_deadline: November 15 (to hit Q1 implementation)
  background_context: Our current support tool is a homegrown Jira-based system built 3 years ago. It has no SLA tracking, no CSAT surveys, and no reporting. CS team spends 4 hours/week manually exporting data to build reports. We're growing from 200 to 400 customers in the next 12 months and the current tool won't scale.
  options: Option A — Migrate to Zendesk ($3,600/month, 8-week implementation, standard features); Option B — Rebuild the internal tool ($80K engineering cost, 16 weeks, customizable); Option C — Stay with current tool and build workarounds ($20K, 6 weeks, minimal improvement)
  constraints: Engineering is at capacity — any significant build requires deprioritizing roadmap items. Q1 is peak customer growth period. Budget is approved up to $50K one-time.
  recommendation: Migrate to Zendesk — we shouldn't be in the support tooling business
  cost_of_inaction: CS team continues losing 4 hrs/week to manual work, we cannot track SLAs, and the tool breaks under higher volume. Risk of CS team attrition from tool frustration.
exampleOutput: |
  ## DECISION MEMO
  **To:** COO, VP Customer Success, VP Engineering
  **From:** [Operations]
  **Date:** November 1, 2024
  **Re:** Build vs. Buy: Customer Support Ticketing System
  **Decision needed by:** November 15, 2024

  ## Situation
  Our current Jira-based support tool lacks SLA tracking, CSAT measurement, and usable reporting — costing the CS team 4 hours per week in manual workarounds. We are growing from 200 to 400 customers in the next 12 months. The current tool will not scale, and the window to implement a replacement before peak growth closes in early Q1.

  ## What We're Deciding
  Whether to migrate to Zendesk, rebuild the internal support tool, or extend the current tool with workarounds.

  ## Options Considered

  **Option A: Migrate to Zendesk** — $3,600/month ($43,200/year), 8-week implementation
  - Pros: Purpose-built for support; SLA tracking, CSAT, and reporting included; CS team can self-administer; proven at our scale
  - Cons: Recurring cost; some workflow customization limits; requires data migration
  - Reversibility: Moderate (switching tools in 12+ months is possible but painful)

  **Option B: Rebuild Internal Tool** — $80K engineering cost, 16 weeks
  - Pros: Fully customizable; no vendor dependency; can match our exact workflows
  - Cons: $80K exceeds approved budget; takes 2 engineers off roadmap for 4 months; 16-week timeline misses Q1 growth window; we own all maintenance
  - Reversibility: High, but sunk cost is significant

  **Option C: Extend Current Tool** — $20K, 6 weeks
  - Pros: Lowest short-term cost; no migration risk
  - Cons: Doesn't solve the fundamental scaling problem; $20K buys workarounds, not solutions; CS team continues losing 4 hrs/week; likely revisits this decision in 6 months
  - Reversibility: High

  ## Recommendation
  **Migrate to Zendesk (Option A).**
  1. It solves the actual problem: SLA tracking, CSAT, and reporting are available day one without custom development.
  2. The $43,200 annual cost is recovered in under 8 months by eliminating 4 hours/week of manual CS work ($50K+ in fully-loaded labor annually).
  3. Engineering bandwidth is our scarcest resource — a 16-week rebuild (Option B) would require deprioritizing product roadmap features that directly drive revenue.

  The strongest argument against Zendesk is vendor lock-in. We accept this risk because support tooling is not a competitive differentiator — being good at support is, and that requires the right tool.

  ## If We Do Nothing
  CS team loses 200+ hours annually to manual reporting. We cannot track or enforce SLAs. Ticket volume increases 2x in Q1 and the current tool degrades. Estimated CS team attrition risk increases as frustration compounds.

  ## Next Steps (if approved)
  1. VP CS signs Zendesk contract by Nov 18 — Maria Santos
  2. Data migration plan drafted by Nov 25 — IT + CS Ops
  3. CS team training scheduled for January — CS Manager
  4. Go-live target: January 20 — before Q1 growth ramp
tips:
  - "Lead with the recommendation — busy decision-makers shouldn't have to read to the bottom to find out what you want them to do."
  - "Always include a 'do nothing' option in your options list, even if you'd never recommend it. It forces honest comparison of status quo costs."
  - "The reversibility row for each option is underrated — high-impact, irreversible decisions need a higher bar of evidence."
  - "If you don't have a recommendation, say so explicitly and list exactly what information you would need to make one. A wishy-washy memo wastes everyone's time."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - process-audit
  - cross-functional-brief
  - strategic-decision-brief
  - business-continuity-summary
tags:
  - decision-making
  - communication
  - leadership
  - memo
  - operations
---
