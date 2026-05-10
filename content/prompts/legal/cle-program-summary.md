---
title: "Convert a CLE program description into an internal compliance summary"
slug: cle-program-summary
function: legal
role: compliance
description: "Turn a CLE program description and agenda into a structured internal summary your compliance team can use to track credit, content relevance, and attorney attendance."
useCase: "Use this prompt when an attorney attends an outside CLE and the compliance or knowledge management team needs a clean summary for tracking purposes. The output captures jurisdictional credit info, substantive takeaways, and any policy or training implications for the firm."
prompt: |
  You are a legal knowledge management lead at a law firm. An attorney just attended a CLE program. Convert the program description, agenda, and any session notes into a structured internal summary that the compliance team will store and that practice group leaders will scan.

  Inputs:
  - Attorney name and bar admissions: {{attorney_info}}
  - Practice group: {{practice_group}}
  - Program title and provider: {{program_title}}
  - Date(s) and location/format: {{program_date_format}}
  - Total CLE credits claimed and breakdown (general, ethics, technology, DEI, etc.) by jurisdiction: {{credit_breakdown}}
  - Program description and agenda: {{program_description}}
  - Attorney's session notes (if any): {{session_notes}}

  Produce the following sections:

  1. Header: attorney, jurisdictions, practice group, program, dates.

  2. Credit summary table: jurisdiction | total hours | general | ethics | other category | substantiation document on file (yes/no/[verify]).

  3. Substantive takeaways (5 to 8 bullets): the new authority, regulatory development, practice tip, or technology that matters for the firm. Each bullet ends with a one-line "why this matters for {{practice_group}}".

  4. Action items for the firm: training to update, memo to circulate, policy to revisit, form to revise. Be concrete; assign each item to a role (not a person).

  5. Compliance flags: anything that affects the firm's ethical or regulatory posture (e.g., new advertising rules, AI disclosure obligations, conflict screening updates).

  6. Citation list: cases, statutes, rules, or regulations referenced. Cite in standard format. If a cite is given in the source but you cannot verify it, mark [verify cite].

  Rules:
  - Do not invent cites. If the source did not name the authority, write "[citation not in source]".
  - Keep the summary under 600 words excluding the citation list.
  - Plain English; no marketing tone from the CLE provider.
variables:
  - "{{attorney_info}}"
  - "{{practice_group}}"
  - "{{program_title}}"
  - "{{program_date_format}}"
  - "{{credit_breakdown}}"
  - "{{program_description}}"
  - "{{session_notes}}"
exampleInput: |
  attorney_info: Priya Mahadevan; admitted CA, NY, DC
  practice_group: Privacy & Data Security
  program_title: "AI Governance for In-House and Outside Counsel: 2026 Update"
  program_date_format: April 30 - May 1, 2026; live virtual via PLI
  credit_breakdown: CA 8.0 total (1.0 ethics, 1.0 technology, 6.0 general); NY 8.0 total (1.0 ethics, 7.0 areas of professional practice); DC 8.0 general
  program_description: Two-day program covering EU AI Act enforcement updates, Colorado AI Act effective February 2026, NIST AI RMF 1.1, FTC guidance on AI claims, model risk management for regulated entities, and ethics of attorney AI use including ABA Formal Opinion 512.
  session_notes: Highlights — Colorado AG announced first enforcement action against an HR vendor under the Colorado AI Act; FTC settlement with a generative AI company over deceptive claims (no consumer harm required); ABA 512 confirms duty of competence covers AI tools and that fee bills should reflect actual time, not AI-shortened time billed at full rate.
exampleOutput: |
  CLE Program Summary

  Attorney: Priya Mahadevan (CA, NY, DC)
  Practice group: Privacy & Data Security
  Program: AI Governance for In-House and Outside Counsel: 2026 Update (PLI)
  Dates: April 30 - May 1, 2026 (live virtual)

  Credit summary

  | Jurisdiction | Total | General | Ethics | Other | Substantiation |
  |---|---|---|---|---|---|
  | California | 8.0 | 6.0 | 1.0 | Technology 1.0 | [verify - PLI certificate pending] |
  | New York | 8.0 | 7.0 (Areas of Prof. Practice) | 1.0 | - | [verify] |
  | DC | 8.0 | 8.0 | - | - | [verify] |

  Substantive takeaways
  - Colorado AI Act took effect February 2026. The Colorado AG announced its first enforcement action against an HR-screening vendor. Why this matters: clients deploying employment AI in Colorado are now in active enforcement territory; expect diligence questions in M&A and vendor reviews.
  - FTC settlement with a generative AI provider over "deceptive claims" did not require proof of consumer harm. Why this matters: marketing-language review for AI-product clients should now treat deception risk as standalone, not contingent on harm.
  - EU AI Act enforcement: the AI Office has published interpretive guidance on general-purpose AI obligations. Why this matters: clients with EU users need to confirm GPAI documentation status by Q3 2026.
  - NIST AI RMF 1.1 is the de facto baseline for "reasonable governance" in U.S. enforcement actions. Why this matters: privacy team should reference RMF 1.1 in client AI policy templates.
  - ABA Formal Opinion 512 confirms duty of competence covers AI tools and warns against billing AI-accelerated time at unaccelerated rates. Why this matters: direct implication for our internal AI billing policy.
  - Model risk management (SR 11-7) framework is being borrowed wholesale by non-bank regulators. Why this matters: non-bank regulated clients (insurers, broker-dealers) are being held to bank-style model governance.

  Action items
  - Internal training: Privacy & Data Security PG to circulate a 30-minute briefing on Colorado AI Act enforcement to all litigation and corporate associates within 30 days. Owner: PG knowledge lead.
  - Form revision: update AI vendor due diligence checklist to include Colorado AI Act compliance attestation. Owner: contracts team lead.
  - Policy revisit: firm AI billing policy needs an update consistent with ABA 512. Owner: General Counsel.
  - Client alert: draft a 1-page client alert on the FTC settlement and Colorado AG action. Owner: marketing in coordination with PG.
  - Conflict screening: add "AI-screening vendor" as a conflict-relevant industry tag in our intake system. Owner: conflicts team.

  Compliance flags
  - ABA 512 affects our own billing practices, not just client advice. Confirm fee statement language is updated.
  - Several jurisdictions (NJ, FL) are considering AI-disclosure rules in attorney advertising. Monitor.
  - The Colorado AI Act has notice obligations that may apply to our HR screening, not just client work. Refer to firm HR.

  Citations
  - Colorado AI Act, Colo. Rev. Stat. § 6-1-1701 et seq.
  - FTC Settlement with [citation not in source] (April 2026)
  - ABA Formal Opinion 512 (2024)
  - NIST AI Risk Management Framework 1.1 (2025)
  - EU AI Act, Regulation (EU) 2024/1689
tips:
  - "Have a qualified attorney or compliance lead review credit allocations against the actual provider certificate before logging in your CLE tracking system. Self-reported jurisdictions and categories can be wrong."
  - "Paste the program agenda and the attorney's notes separately. Notes capture the things that actually mattered in the room; the agenda alone is provider marketing copy."
  - "Use this prompt the same week as the program. The substantive takeaways degrade fast as memory fades."
  - "Attach the output to your CLE compliance record so the credit substantiation lives next to the substantive value the firm got."
  - "Run a second pass asking Claude to identify which existing client matters touch the topics covered. That turns a CLE record into a marketing and risk asset."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - compliance-gap-analysis
  - legal-risk-memo
  - gdpr-readiness-memo
tags:
  - legal
  - compliance
  - cle
  - knowledge-management
  - law-firm
---
