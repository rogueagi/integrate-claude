---
title: "Run a redline-readiness checklist on an inbound MSA"
slug: master-services-agreement-checklist
function: legal
role: contracts
description: "Generate a checklist that flags every term in an inbound Master Services Agreement that deviates from your standard playbook, before you spend cycles redlining."
useCase: "Use this when a customer or vendor sends their MSA paper. Reading 30 pages of legalese without a structured checklist is how you miss a unilateral termination clause or an uncapped indemnity. This prompt produces a triage pass that tells you what to fight on, what to live with, and what's a dealbreaker — in 20 minutes instead of two hours."
prompt: |
  You are an experienced commercial counsel who has reviewed thousands of MSAs. Run a redline-readiness pass on an inbound Master Services Agreement.

  Context:
  - Direction: {{direction}} (we are the customer / we are the vendor)
  - Counterparty: {{counterparty}}
  - Deal size and term: {{deal_size_term}}
  - Our position on standard playbook: {{playbook_summary}} (or "use industry-standard mid-market SaaS positions")
  - Known business priorities or sensitivities: {{business_priorities}}
  - Time pressure: {{time_pressure}}

  The MSA text is below the divider. Produce:

  1. **Top-line summary (5 bullets)** — Who, what, term, value, and the 3 most important things this contract does to us.

  2. **Triage table** — For every clause that materially deviates from standard, output:
     | Clause | Section | Their position | Standard position | Risk (H/M/L) | Recommended action |

     Cover at minimum: term and termination, fees and payment, IP ownership, license grants, confidentiality, warranties, indemnification (mutual / one-way / cap), limitation of liability (cap and carve-outs), data protection / DPA, insurance, service levels and credits, audit rights, assignment, governing law, dispute resolution.

  3. **Dealbreakers (if any)** — Clauses that, if not changed, you'd recommend walking away over. Be specific about why.

  4. **Negotiation strategy** — Top 3 redlines to push hardest on, top 3 you can give as concessions, and the order to introduce them.

  5. **Open questions for business owner** — Anything you can't answer from contract text alone (e.g., "Are we okay with NY governing law given our team is in CA?").

  6. **Disclaimer** — Always end with a one-line disclaimer that this is preliminary review, not legal advice, and final positions require licensed counsel.

  ---
  CONTRACT TEXT:
  {{contract_text}}
variables:
  - "{{direction}}"
  - "{{counterparty}}"
  - "{{deal_size_term}}"
  - "{{playbook_summary}}"
  - "{{business_priorities}}"
  - "{{time_pressure}}"
  - "{{contract_text}}"
exampleInput: |
  direction: We are the customer (buying enterprise data tooling)
  counterparty: Northstar Data Inc. (Series C vendor)
  deal_size_term: $480K/yr, 3-year term, ~$1.44M TCV
  playbook_summary: We require: mutual indemnity capped at 12 months fees with carve-outs for IP, data breach, and gross negligence. LoL cap at 12 months fees with same carve-outs. We require DPA with SCCs. We do not accept auto-renewal. We require termination for convenience after year 1 with 60 days notice.
  business_priorities: Vendor lock-in is a real concern — we've been burned. Data portability on exit is critical. Procurement wants to close by end of quarter (3 weeks).
  time_pressure: Moderate — 3 weeks to signature, but we'd rather miss the quarter than sign a bad deal.
  contract_text: [30-page MSA pasted in — not reproduced here for example brevity]
exampleOutput: |
  # MSA Triage — Northstar Data Inc.

  ## 1. Top-line summary

  - **What:** Enterprise data platform subscription, $480K ARR, 3-year term, ~$1.44M TCV
  - **Term and renewal:** 3-year initial, **auto-renews for 3-year terms** unless terminated with 90 days notice — non-standard and material concern
  - **Termination:** Vendor can terminate for convenience with 30 days notice; we cannot. **Asymmetric.**
  - **Liability cap:** 6 months fees, no carve-outs for IP or data breach. Below market.
  - **Data on exit:** 30-day post-termination retrieval window in CSV only. No SQL export, no API access — operational risk if we leave.

  ## 2. Triage table

  | Clause | Section | Their position | Standard position | Risk | Recommended action |
  |---|---|---|---|---|---|
  | Term | 2.1 | 3 yr initial, auto-renews 3 yr | 1 yr renewal max | H | Redline to 1-year auto-renew with 60-day opt-out notice |
  | Termination for convenience (customer) | 2.3 | None | After year 1, 60 days notice | H | Add. Non-negotiable per playbook. |
  | Termination for convenience (vendor) | 2.4 | 30 days notice | Mutual or none | M | Either remove or make mutual at 90 days |
  | Fees and price increase | 4.2 | Vendor may increase fees up to 7%/yr at renewal | Cap at lesser of CPI or 5% | M | Redline to CPI cap, max 5% |
  | Late payment interest | 4.5 | 1.5%/month (18% APR) | 1%/month | L | Live with |
  | IP ownership | 6.1 | Vendor owns all IP including Customer Data derivatives | Vendor owns Service IP; Customer owns Customer Data and outputs | H | Redline. Customer Data and outputs derived from it must remain ours. |
  | License grant | 6.2 | Limited, non-transferable, no affiliates | Affiliates included | M | Add affiliate language |
  | Confidentiality | 7 | 3-year survival post-term | 5 years for trade secrets, 3 years general | L | Acceptable as drafted |
  | Indemnification | 9 | Vendor indemnifies for IP infringement only; no customer indemnity required | Mutual indemnity with carve-outs | M | Add mutual structure with carve-outs |
  | Limitation of liability | 10 | 6 months fees cap; no carve-outs | 12 months fees with carve-outs (IP, data breach, gross negligence, confidentiality, indemnification obligations) | **H** | Redline. Below-market and dangerous given data scope. |
  | Data protection / DPA | 11 | Reference to DPA "to be agreed" | Executed DPA at signature with SCCs | H | Require DPA executed concurrent with MSA |
  | Sub-processors | 11.4 | Vendor may add sub-processors with no notice | 30 days notice + right to object | M | Redline notice and objection right |
  | Data return on exit | 12.3 | 30 days, CSV only | 90 days, in machine-readable format incl. SQL export or API access | **H** | Critical given lock-in priority. Push hard. |
  | Insurance | 13 | $2M general, $5M cyber | $5M general, $10M cyber for data scope | M | Push to $10M cyber given data sensitivity |
  | SLA / service credits | Exhibit B | 99.5% uptime, max credit 10% monthly fee | 99.9% uptime, no max on credit, opt-out termination after 3 missed months | M | Push 99.9%; remove cap on credit |
  | Audit rights | 14 | None for customer | Annual SOC 2 + right to audit on reasonable cause | M | Add SOC 2 delivery; audit rights are nice-to-have |
  | Assignment | 16.1 | Either party may assign on change of control with notice | Consent required (not unreasonably withheld) | L | Live with their language if needed for closing |
  | Governing law / venue | 16.4 | Delaware / Delaware courts | Delaware acceptable | L | Live with |
  | Dispute resolution | 16.5 | Mandatory binding arbitration, JAMS, no class action | Litigation OR arbitration with carve-outs for IP and injunctive relief | M | Add carve-outs |
  | Publicity | 17 | Vendor may use customer name and logo | Mutual approval required | L | Add approval requirement |

  ## 3. Dealbreakers

  Two clauses we should not sign as drafted:

  1. **Liability cap at 6 months with no carve-outs (Section 10).** With $1.44M TCV and access to our data, a 6-month cap (~$240K) is far below market and exposes us if there's a breach or IP issue. **Must move to 12 months with carve-outs.** If they refuse, walk.

  2. **Data return at 30 days, CSV only (Section 12.3).** Given our explicit lock-in concern, this is a structural problem — not a legal nit. **Must move to 90 days with machine-readable export.** If they refuse, this vendor doesn't fit our requirements.

  Auto-renew at 3-year intervals is also borderline-dealbreaker; combined with the asymmetric termination, it's the kind of clause that creates a 6-year contract by accident.

  ## 4. Negotiation strategy

  **Push hardest (in this order):**
  1. Liability cap to 12 months with carve-outs (legal-necessary)
  2. Data export rights at 90 days, machine-readable (lock-in-priority)
  3. Termination for convenience after year 1 (playbook-required)

  **Concede if needed (in this order):**
  1. Insurance levels — accept their $2M/$5M if they hold firm
  2. Audit rights — settle for SOC 2 delivery without audit clause
  3. Affiliate language in license grant — settle for naming specific affiliates

  **Sequencing:** Lead with the dealbreakers in the first redline pass to surface walk-away signals. Don't reveal concession list early. Ask for everything in round 1 so the trade space is visible.

  ## 5. Open questions for business owner

  - Are we comfortable with Delaware governing law given our team is in California? (Standard practice — likely yes — but confirm.)
  - What's our actual realistic exit volume of data? CSV-only at 30 days is a different problem at 1TB vs. 100GB.
  - Is procurement willing to slip the quarter if Northstar refuses on liability cap? Need this answer before round 1.
  - Are there affiliates we expect to use this service that we should name explicitly?
  - Do we have a parallel vendor we could pivot to if this falls through? (Affects negotiating leverage.)

  ## 6. Disclaimer

  This is a preliminary contract triage, not legal advice. Final positions and signature require review by licensed counsel familiar with your jurisdiction and business context.
tips:
  - "Always run the triage table before opening Word for redlines. The discipline of mapping every clause to a risk rating prevents both over-engineering low-risk clauses and missing buried high-risk ones."
  - "Identify dealbreakers explicitly and surface them in round 1. Burying a walk-away issue in round 3 destroys trust and your leverage."
  - "Distinguish between legal risk and business risk. A 30-day data return window is a business risk, not a legal one — frame it that way to procurement and the business owner."
  - "Not legal advice. This is a triage tool. Final contract positions must be reviewed by licensed counsel familiar with your jurisdiction and the deal context."
  - "Save your firm's playbook positions in a structured doc so you can paste them into the prompt every time. Consistency across deals is more valuable than any one redline."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - contract-redline
  - contract-summary
  - vendor-contract-playbook
tags:
  - msa
  - contracts
  - redline
  - commercial-contracts
  - negotiation
---
