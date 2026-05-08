---
title: "Write a GDPR readiness memo for leadership"
slug: gdpr-readiness-memo
function: legal
role: compliance
description: "Generate a leadership-ready memo that explains where the company stands on GDPR readiness, what the gaps are, and what to prioritize — in plain English, not regulator-speak."
useCase: "Use this when entering EU markets, when a customer's procurement team asks for a GDPR self-assessment, or when leadership needs a single document to brief the board. Translates GDPR's 99 articles into actionable priorities tied to your specific data flows."
prompt: |
  You are a privacy counsel with experience leading GDPR readiness programs at US-based SaaS companies. Write a leadership memo on the company's current GDPR readiness.

  Context:
  - Company: {{company}}
  - Product and data flows: {{product_data_flows}}
  - EU market posture: {{eu_posture}} (currently selling, planning to enter, expanding existing footprint)
  - Existing privacy program maturity: {{program_maturity}} (none / informal / formal but immature / mature)
  - Current state of: data inventory, privacy policy, DPA template, sub-processor list, breach response, DSR process, DPO appointment, transfer mechanisms: {{current_state}}
  - Audience for memo: {{audience}} (CEO and exec team / board / customer procurement)
  - Time horizon: {{time_horizon}} (e.g., 90 days, 6 months, 12 months to readiness target)

  Produce a memo with:

  1. **Executive summary (5 bullets)** — Where we stand, biggest gap, level of risk, what we're recommending, what it costs in money and time.

  2. **Why GDPR matters for {{company}} specifically** — In 2 paragraphs. Tie to actual business consequences: contract requirements, fines (4% global revenue or €20M), customer trust, ability to close EU deals.

  3. **Readiness scorecard** — 8–12 dimensions of GDPR compliance, each rated Red / Amber / Green, with one-line evidence. Cover at minimum: lawful basis, data inventory and ROPA, privacy policy, data subject rights process, DPA program, sub-processor management, international transfers (SCCs/UK Addendum), security and breach notification, vendor management, training, governance and DPO, marketing consent.

  4. **Top 5 prioritized gaps** — For each: what's missing, business risk, scope of work, owner, time and budget estimate.

  5. **What we're NOT recommending and why** — Things that look like GDPR work but aren't worth doing in this phase (e.g., appointing a formal DPO if not legally required).

  6. **90-day plan** (if time horizon is shorter) or **first 90 days of a longer plan** — Specific milestones with owners.

  7. **Risk and disclaimer** — Plain-English explanation that GDPR is interpreted differently across EU member states and that final compliance requires counsel in relevant jurisdictions.
variables:
  - "{{company}}"
  - "{{product_data_flows}}"
  - "{{eu_posture}}"
  - "{{program_maturity}}"
  - "{{current_state}}"
  - "{{audience}}"
  - "{{time_horizon}}"
exampleInput: |
  company: Cresta Insights, a 220-person Series C B2B analytics SaaS, US-based, expanding to EU
  product_data_flows: Analytics platform that processes customer end-user behavioral data (page views, clicks, anonymized user IDs). Some customers send PII (email, name) intentionally as a user property. Data hosted in AWS us-east-1 with no EU region today.
  eu_posture: Currently 8% of pipeline is EU prospects. Have signed 3 EU customers under existing US-only deployment with workarounds. Planning EU region launch in 6 months. Want to be deal-ready for €5M EU pipeline by end of year.
  program_maturity: Informal. Privacy policy exists, GDPR-aware DPA template exists, but no formal program ownership, no data inventory, no DSR runbook, no DPO.
  current_state: Privacy policy exists (last updated 14 months ago). DPA template exists with SCCs but not Addendum-updated. Sub-processor list maintained ad hoc on a wiki. Breach response handled by security team, no privacy-specific runbook. DSR (data subject rights) requests handled ad hoc by support — 6 in last year. No DPO. No formal data inventory. Marketing uses HubSpot with double opt-in for EU, but tracking pixel implementation has not been GDPR-reviewed.
  audience: CEO and exec team — for a 30-min agenda slot
  time_horizon: 6 months to "deal-ready" for EU pipeline
exampleOutput: |
  # GDPR Readiness Memo — Cresta Insights
  **To:** CEO and Executive Team
  **From:** [Privacy Counsel]
  **Date:** [Date]
  **Re:** GDPR readiness — 6-month plan to deal-readiness for €5M EU pipeline

  ## Executive summary

  - We are **Amber overall** — not blocked, but not deal-ready for enterprise EU customers above $200K ACV. Three signed EU customers were closed with workarounds that won't scale.
  - The biggest gap is **operational, not policy.** The DPA exists; the data inventory, DSR runbook, sub-processor management, and EU data residency do not.
  - **Risk profile:** Low risk of regulatory enforcement at our scale; high risk of losing enterprise EU deals to procurement-driven security reviews. The €5M pipeline is the immediate business case.
  - **Recommendation:** A 6-month operational program led by a designated Privacy Lead (not a formal DPO — we are not legally required to appoint one). Estimated cost: ~$340K including 1 FTE Privacy Lead, $180K AWS EU region build-out, $40K external counsel and tooling.
  - **What we are NOT recommending:** Formal DPO appointment (not legally required given we don't conduct large-scale systematic monitoring or process special-category data at scale), or full EU subsidiary entity (not required for current footprint).

  ## Why GDPR matters for Cresta specifically

  Two reasons, ranked:

  **1. Sales velocity in EU pipeline.** Eight percent of pipeline is EU prospects, and the deal sizes skew larger. Procurement at EU-headquartered enterprises increasingly runs 20–40 question privacy questionnaires before contract. Three of our last five EU losses cited "unable to satisfy procurement security and privacy review" as a stated reason. Without a real program, we will continue to lose 6-figure deals to vendors who have one.

  **2. Customer trust and contractual exposure.** Several of our existing EU customer DPAs require us to support data subject rights requests within 30 days, maintain an updated sub-processor list with prior notice, and notify of breaches within 24 hours. We are technically out of compliance with several of these contractual commitments today even though we have not yet been called on them.

  Regulatory enforcement is a real but lower-probability risk. The realistic worst case at our scale is a customer audit failure or contract termination, not a fine.

  ## Readiness scorecard

  | Dimension | Status | Evidence |
  |---|---|---|
  | Lawful basis for processing | Amber | Documented in DPA but not in privacy policy in plain language |
  | Data inventory / ROPA | **Red** | None exists. We don't have a system-of-record list of personal data we process |
  | Privacy policy | Amber | 14 months stale; doesn't reflect current sub-processors or features |
  | Data subject rights (DSR) process | **Red** | Ad-hoc; 6 requests in last year, longest TAT 41 days (over 30-day SLA) |
  | DPA template | Green | Has SCCs, but not updated for UK Addendum |
  | Sub-processor management | Amber | List exists, but no advance-notice mechanism, ad-hoc updates |
  | International transfers | Amber | SCCs in place; transfer impact assessments not documented |
  | Security and breach notification | Amber | General incident response exists; no privacy-specific 72-hour runbook |
  | Vendor management | Amber | Privacy review of vendors inconsistent |
  | Training | **Red** | No GDPR-specific training program |
  | Governance / DPO | Amber | No designated Privacy Lead; not legally required to appoint formal DPO |
  | Marketing consent | Amber | Opt-in works in HubSpot; tracking pixel implementation needs review |

  ## Top 5 prioritized gaps

  1. **No data inventory (Red → Green)**
     - Missing: A documented Record of Processing Activities listing every system that touches personal data, the categories of data, lawful basis, retention period, and recipients.
     - Risk: Cannot answer procurement questions. Cannot respond to DSR requests reliably. Cannot scope incident response.
     - Scope: 6-week effort. Workshop with engineering, security, marketing, support, and product. Use a simple inventory tool (e.g., OneTrust DataMapping or even structured spreadsheet at our scale).
     - Owner: Privacy Lead with security and engineering.
     - Estimate: $30K external help + 0.5 FTE for 6 weeks.

  2. **No DSR runbook (Red → Green)**
     - Missing: A documented process for receiving, validating, fulfilling, and recording DSR requests within the 30-day SLA. Six requests last year, one missed SLA.
     - Risk: We are contractually committed to 30-day SLAs in EU customer DPAs.
     - Scope: 4-week effort. Build runbook, train support, instrument tooling for data export/deletion across systems.
     - Owner: Privacy Lead with support and engineering.
     - Estimate: $20K + 0.25 FTE.

  3. **EU data residency for new customers (Amber → Green)**
     - Missing: AWS EU region for customers requiring EU residency. Current workaround does not scale.
     - Risk: Largest enterprise EU deals ($300K+ ACV) require EU residency in procurement reviews.
     - Scope: Engineering project, 4–5 months. Already in roadmap; this memo is asking it be prioritized as a privacy-blocked initiative.
     - Owner: VP Eng.
     - Estimate: $180K (cloud + engineering capacity).

  4. **Privacy policy refresh (Amber → Green)**
     - Missing: Current, plain-English privacy policy reflecting actual data processing.
     - Risk: Stale policy is the most common procurement red flag.
     - Scope: 2-week effort with external counsel review.
     - Owner: Privacy Lead with marketing.
     - Estimate: $15K external counsel.

  5. **Sub-processor management with advance-notice mechanism (Amber → Green)**
     - Missing: A formal process to add sub-processors with 30-day advance notice to customers and a mechanism for customers to object.
     - Risk: Required by most enterprise DPAs.
     - Scope: 3-week effort, primarily process and tooling.
     - Owner: Privacy Lead.
     - Estimate: $5K.

  ## What we are NOT recommending

  - **Formal DPO appointment:** Article 37 GDPR mandates a DPO only for public authorities, large-scale systematic monitoring, or large-scale processing of special-category data. We do none of these. A designated Privacy Lead is sufficient and avoids legally locked-in independence requirements that complicate small-org governance.
  - **EU subsidiary entity:** Our footprint does not require an EU establishment. We can serve EU customers from US entities with appropriate transfer mechanisms.
  - **OneTrust enterprise platform:** At our scale, lighter tooling (a DSR-tracking tool, a data-mapping spreadsheet, and a sub-processor management page) is sufficient. Revisit at $50M ARR.
  - **Full ISO 27701 certification:** Useful eventually, not the marginal effort right now. SOC 2 Type II + GDPR readiness covers 80% of procurement reviews.

  ## First 90 days

  | Week | Milestone | Owner |
  |---|---|---|
  | 1 | Designate Privacy Lead (existing employee or new hire spec) | CEO |
  | 1–2 | Engage external privacy counsel for memo review and ongoing escalation | Privacy Lead |
  | 2–8 | Build data inventory / ROPA | Privacy Lead + Eng |
  | 4–8 | Build DSR runbook and tooling | Privacy Lead + Support |
  | 6–8 | Refresh privacy policy with counsel review | Privacy Lead + Marketing |
  | 8–10 | Update DPA with UK Addendum and finalize sub-processor process | Privacy Lead |
  | 10–12 | Run internal training session for sales, support, engineering | Privacy Lead |
  | 12 | Reassess readiness scorecard; report to exec team | Privacy Lead |

  Months 4–6 focus on EU data residency and customer-facing communications.

  ## Risk and disclaimer

  GDPR is interpreted differently across EU member states; some Data Protection Authorities (notably Germany and France) take more aggressive positions than others. The recommendations above are based on current published guidance and the realistic enforcement profile for a US-based B2B SaaS at our scale. This memo is a strategic plan; the specific policies, contractual language, and customer-facing artifacts must be reviewed by external privacy counsel before publication. This is not legal advice.
tips:
  - "Tie GDPR readiness to a specific business outcome — usually pipeline. 'We will lose €5M in EU deals without it' is more persuasive at the exec level than 'we should be compliant.'"
  - "Distinguish between 'compliant' and 'deal-ready.' Most enterprise GDPR work is closing procurement reviews, not avoiding regulator action — these have different priority orders."
  - "Be specific about what you are NOT doing. The most common failure mode in privacy programs is overscoping. Cutting OneTrust or DPO appointment in the first phase saves real money and time."
  - "Not legal advice. GDPR is interpreted differently across member states and changes regularly. Engage privacy counsel licensed in relevant EU jurisdictions before publishing customer-facing artifacts."
  - "Maintain the readiness scorecard as a living artifact. Quarterly updates with the same dimensions make progress visible and surface drift before it becomes a crisis."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - data-processing-agreement
  - privacy-policy-review
  - compliance-gap-analysis
tags:
  - gdpr
  - privacy
  - compliance
  - eu
  - readiness
---
