---
title: "Draft an engagement letter from client intake notes"
slug: engagement-letter-from-intake
function: legal
role: contracts
description: "Convert raw client intake notes into a draft engagement letter that defines scope, fees, conflicts disclosures, and termination terms in clear plain English."
useCase: "Use this prompt right after a new-client intake call when you need to send an engagement letter the same day. Solo and small-firm attorneys often delay engagement letters because drafting from a template feels slow. This prompt produces a first draft from your intake notes that you can edit and send within 30 minutes."
prompt: |
  You are an experienced attorney drafting an engagement letter for a new client. Use the intake notes below to produce a complete first draft.

  Firm and matter inputs:
  - Firm name and address: {{firm_info}}
  - Responsible attorney: {{responsible_attorney}}
  - Client name and contact: {{client_info}}
  - Matter type and jurisdiction: {{matter_type}}
  - Fee structure (hourly, flat, contingency, hybrid): {{fee_structure}}
  - Retainer amount: {{retainer}}
  - Scope inclusions from intake: {{scope_in}}
  - Scope exclusions (work the client may expect but we are NOT covering): {{scope_out}}
  - Known potential conflicts surfaced during intake: {{conflicts}}
  - Intake notes (full): {{intake_notes}}

  Produce a complete engagement letter with these sections, in this order:

  1. Salutation and welcome paragraph
  2. Scope of representation: what we will do, in plain English. Use bullets where it clarifies.
  3. Scope exclusions: an explicit, bulleted list of what is NOT included. Pull from {{scope_out}} and from anything in the intake notes the client may misread as included.
  4. Fees and billing: rate or flat fee, retainer treatment, billing cycle, expense pass-throughs, late payment terms.
  5. Trust account and retainer handling, if applicable in {{matter_type}}'s jurisdiction.
  6. Client responsibilities: documents to produce, communication expectations, decision authority.
  7. Conflicts disclosure: address {{conflicts}} candidly and request informed consent if needed.
  8. File retention, withdrawal, and termination terms.
  9. Confidentiality and limited license to use anonymized matter info for marketing (opt-out option).
  10. Signature block.

  Style:
  - Plain English. Avoid Latin where a normal word works.
  - No defined terms in ALL CAPS unless the jurisdiction requires it.
  - Bracketed placeholders for anything the intake notes did not cover, so the attorney can fill in later.

  After the letter, append a short "Drafting notes" section flagging:
  - Anything in the intake notes that suggests a malpractice risk if accepted as worded.
  - Any conflict that requires written consent from another client before this letter goes out.
  - Any state-specific language the attorney should add (e.g., California Rule 1.5 disclosures).
variables:
  - "{{firm_info}}"
  - "{{responsible_attorney}}"
  - "{{client_info}}"
  - "{{matter_type}}"
  - "{{fee_structure}}"
  - "{{retainer}}"
  - "{{scope_in}}"
  - "{{scope_out}}"
  - "{{conflicts}}"
  - "{{intake_notes}}"
exampleInput: |
  firm_info: Halberd & Crane LLP, 1200 Market St, Suite 800, San Francisco, CA 94102
  responsible_attorney: Mireya Halberd, Partner
  client_info: Lighthouse Analytics, Inc.; CEO Adam Rourke; adam@lighthouse-analytics.com
  matter_type: Series A financing, Delaware C-corp, California operations
  fee_structure: hourly, $725 partner / $475 associate
  retainer: $25,000 evergreen
  scope_in: drafting Series A documents, negotiating with lead investor counsel, board consents and stockholder approvals, closing checklist
  scope_out: tax structuring advice, securities filings outside Form D and CA 25102(f), employment agreements for new hires post-close
  conflicts: Halberd & Crane represents Vantage Systems, a portfolio company of the proposed lead investor (Cedar Park Ventures); Vantage is not a competitor of Lighthouse.
  intake_notes: 30 minute call April 22, 2026. Adam wants to close in 6 weeks. Term sheet signed with Cedar Park, $14M at $60M pre. Two existing seed investors (Hayfield, angels) have pro rata rights. No prior 409A. Adam asked whether we can also help with hiring a VP Engineering — told him that is outside scope. Concerned about IP assignment gaps from a 2023 contractor.
exampleOutput: |
  Halberd & Crane LLP
  1200 Market St, Suite 800
  San Francisco, CA 94102

  April 22, 2026

  Adam Rourke
  Chief Executive Officer
  Lighthouse Analytics, Inc.
  [Address]

  Re: Series A Financing — Engagement Letter

  Dear Adam,

  Thank you for choosing Halberd & Crane LLP to represent Lighthouse Analytics, Inc. ("Lighthouse" or "you") in connection with your Series A financing. This letter sets out the terms of our engagement.

  1. Scope of representation
  We will represent Lighthouse in the Series A financing led by Cedar Park Ventures, including:
  - Drafting and negotiating the stock purchase agreement, amended and restated certificate of incorporation, investors' rights agreement, voting agreement, and right of first refusal and co-sale agreement
  - Coordinating with lead investor counsel and counsel for participating seed investors (Hayfield and existing angels)
  - Preparing board and stockholder consents, including pro rata waivers as needed
  - Preparing the closing checklist and managing closing logistics
  - Filing Form D with the SEC and a California Section 25102(f) notice

  2. What is NOT included
  This engagement does NOT cover:
  - Tax structuring advice (we recommend you retain separate tax counsel; we are happy to refer)
  - Securities filings outside Form D and CA 25102(f)
  - Employment agreements, offer letters, or equity grants for post-closing hires (including the VP Engineering role you mentioned)
  - 409A valuation work
  - Cleanup of historical IP assignment gaps from prior contractors (see paragraph 7 below)
  - Litigation, dispute resolution, or regulatory inquiries

  3. Fees and billing
  We bill hourly. Mireya Halberd's rate is $725; associate rates are $475. We will provide an estimate after diligence; Series A financings of this size typically range $[insert estimate]. Invoices are issued monthly and are due within 30 days. Out of pocket expenses (filing fees, courier, etc.) are passed through at cost.

  4. Retainer and trust account
  An evergreen retainer of $25,000 is required to begin work. We will hold the retainer in our IOLTA trust account at [Bank] and apply it against fees and expenses as incurred. You will replenish the retainer to $25,000 within 10 days of any draw down.

  5. Your responsibilities
  You will (a) provide complete and accurate information, (b) make available a single point of contact for documents and decisions, and (c) make timely decisions on negotiation points. We will assume Adam Rourke has authority to bind Lighthouse unless you tell us otherwise in writing.

  6. Conflicts disclosure and consent
  Halberd & Crane represents Vantage Systems, Inc., a portfolio company of Cedar Park Ventures. Vantage is not a competitor of Lighthouse and is not a party to this transaction. We do not believe this representation is materially limiting, but Rule 1.7 of the California Rules of Professional Conduct requires that we disclose it and obtain your informed written consent. By countersigning, you confirm that consent.

  7. IP assignment gap from 2023 contractor
  You disclosed during intake that a 2023 contractor may not have signed an IP assignment agreement. We strongly recommend addressing this before closing because investor counsel will diligence it. We can scope this as a separate matter or advise you on a do-it-yourself approach. Either way, please flag this to us in writing within 5 business days.

  8. File retention, withdrawal, termination
  We will retain matter files for 7 years after closing. Either party may terminate this engagement on written notice. If we withdraw, we will take reasonable steps to protect your interests.

  9. Confidentiality and marketing
  All client information is confidential. With your permission, we may list Lighthouse as a representative client and use anonymized deal data (size, stage, sector) for marketing. Check the box below if you opt out.

  [ ] Lighthouse opts out of marketing use.

  10. Signatures

  Halberd & Crane LLP
  By: ____________________ Mireya Halberd, Partner
  Date: __________________

  Lighthouse Analytics, Inc.
  By: ____________________ Adam Rourke, CEO
  Date: __________________

  ---

  Drafting notes
  - Conflict with Vantage Systems requires informed written consent from BOTH Lighthouse and Vantage before this letter is finalized. Confirm Vantage's consent is on file before sending.
  - California Rule 1.5 requires a written fee agreement when fees will exceed $1,000; this letter satisfies that.
  - The 2023 contractor IP assignment gap is a real diligence risk; do not let it slide. Consider conditioning effectiveness of this engagement on a separate IP cleanup engagement.
  - Adam asked about VP Engineering hiring during intake. We declined that scope here; if he pushes, send a separate engagement letter rather than expanding this one.
tips:
  - "An engagement letter is a binding contract. Have a qualified attorney review the draft against your jurisdiction's professional responsibility rules before sending."
  - "Paste your full intake notes verbatim. Claude catches scope creep risks (like the VP Engineering ask) only when it sees what the client actually said."
  - "Use the scope exclusions section aggressively. Most malpractice claims arise from work the client thought you were doing."
  - "If your jurisdiction has specific fee disclosure rules (CA Rule 1.5, NY Part 1215, etc.), add them to the prompt as a constraint."
  - "Generate a plain-language client-facing summary alongside the formal letter so non-lawyer clients can confirm they understand what they are signing."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - contract-redline
  - nda-review
  - vendor-contract-playbook
tags:
  - legal
  - engagement-letter
  - client-intake
  - solo-practice
  - law-firm
---
