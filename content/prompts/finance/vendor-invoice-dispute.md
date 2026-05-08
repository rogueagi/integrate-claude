---
title: "Write a vendor invoice dispute response"
slug: vendor-invoice-dispute
function: finance
role: accounting
description: "Generate a professional, factual dispute letter for a vendor invoice that contains errors, overcharges, or charges for undelivered services."
useCase: "Use this prompt when a vendor invoice doesn't match your purchase order, contract terms, or service delivery records. A well-written dispute letter protects your payment terms, creates a paper trail, and sets a professional tone for resolution — without unnecessarily damaging the vendor relationship."
prompt: |
  You are a Controller or finance manager writing a vendor invoice dispute response.

  Context:
  - Company: {{company_name}}
  - Vendor name: {{vendor_name}}
  - Invoice number: {{invoice_number}}
  - Invoice date: {{invoice_date}}
  - Invoice amount: {{invoice_amount}}
  - Amount you believe is correct: {{correct_amount}}
  - Dispute reason: {{dispute_reason}} (e.g., quantity mismatch, rate differs from contract, services not delivered, duplicate invoice, early termination charge not authorized)
  - Supporting documentation you have: {{supporting_docs}} (PO number, contract terms, delivery confirmation, prior invoices for comparison)
  - Vendor contact: {{vendor_contact}}
  - Relationship importance: {{relationship_importance}} (critical vendor, standard vendor, or vendor you're considering replacing)
  - Desired resolution: {{desired_resolution}} (credit memo, revised invoice, partial payment, payment hold pending resolution)

  Write a dispute response letter with:

  ## Opening — State the Dispute Clearly
  Reference the invoice number and state that you are placing it in dispute. Be specific about the amount in question and the reason — in the first paragraph.

  ## Factual Basis for the Dispute
  Present the facts clearly and specifically:
  - What the invoice says
  - What your records show
  - The specific discrepancy and its source (rate, quantity, dates, scope)
  - Reference to the contract, PO, or prior agreement that establishes the correct terms

  ## Supporting Documentation Referenced
  List the documents that support your position and offer to provide copies.

  ## Requested Resolution
  Be clear about what you're asking for:
  - A revised invoice (specify the correct amount)
  - A credit memo
  - Payment of the undisputed portion while the balance is resolved
  - A timeline for resolution

  ## Next Steps
  State your preferred timeline for vendor response and what you'll do if you don't hear back. Keep the tone professional and solution-oriented.

  Tone: professional, factual, and firm without being adversarial. The goal is resolution, not escalation. Avoid emotional language or accusations.
variables:
  - "{{company_name}}"
  - "{{vendor_name}}"
  - "{{invoice_number}}"
  - "{{invoice_date}}"
  - "{{invoice_amount}}"
  - "{{correct_amount}}"
  - "{{dispute_reason}}"
  - "{{supporting_docs}}"
  - "{{vendor_contact}}"
  - "{{relationship_importance}}"
  - "{{desired_resolution}}"
exampleInput: |
  company_name: Anchor Analytics
  vendor_name: Meridian Cloud Services
  invoice_number: MCS-2024-0847
  invoice_date: March 31, 2024
  invoice_amount: $18,400
  correct_amount: $14,200
  dispute_reason: Invoice includes a $4,200 "premium support" charge for Q1 2024 that was not included in our contract (MSA dated January 15, 2024) and was never requested or authorized. Our contract specifies standard support at no additional charge.
  supporting_docs: Master Services Agreement (January 15, 2024), Section 4.2 (support terms); Purchase Order #PO-2024-0012; prior invoices from Q4 2023 which did not include this charge
  vendor_contact: billing@meridiancloud.com, cc: Sarah Torres (Account Manager) storres@meridiancloud.com
  relationship_importance: standard vendor, contract up for renewal in June
  desired_resolution: Revised invoice for $14,200 (base infrastructure services only); payment to be processed within standard Net-30 terms once revised invoice is received
exampleOutput: |
  **Date:** April 5, 2024
  **To:** billing@meridiancloud.com
  **CC:** Sarah Torres, Account Manager (storres@meridiancloud.com)
  **From:** Maya Chen, Controller, Anchor Analytics
  **Re:** Invoice Dispute — Invoice MCS-2024-0847 ($18,400)

  ---

  We are writing to formally dispute Invoice MCS-2024-0847, dated March 31, 2024, in the amount of $18,400. Specifically, we are disputing $4,200 in "premium support" charges, which we believe were invoiced in error. The undisputed portion of the invoice ($14,200) will be processed for payment upon receipt of a corrected invoice.

  **Basis for Dispute**

  Invoice MCS-2024-0847 includes a line item of $4,200 labeled "Q1 2024 Premium Support Tier." Our records show that Anchor Analytics has not requested, authorized, or agreed to premium support services under our current agreement with Meridian Cloud Services.

  Our Master Services Agreement (executed January 15, 2024, Reference: MSA-ANCHOR-2024-001) specifies standard support at no additional charge under Section 4.2 ("Support Services"). There is no addendum, statement of work, or order form authorizing a premium support upgrade. This charge did not appear on any invoice from Q4 2023, when we operated under comparable service terms.

  **Supporting Documentation**

  The following documents support our position:
  - Master Services Agreement dated January 15, 2024 (Section 4.2 — Standard Support, no additional cost)
  - Purchase Order PO-2024-0012, which does not include premium support
  - Invoices MCS-2023-0791, MCS-2023-0828, and MCS-2023-0869 (Q4 2023), none of which included a premium support charge

  We are happy to provide copies of any of the above upon request.

  **Requested Resolution**

  We request that Meridian Cloud Services issue a revised invoice for $14,200, reflecting the infrastructure services outlined in our MSA and purchase order, with the premium support charge removed. Upon receipt of the revised invoice, we will process payment within our standard Net-30 terms.

  If there has been a support tier upgrade that we are not aware of, we would appreciate documentation showing the authorization — including who at Anchor Analytics requested or approved it and on what date.

  **Next Steps**

  Please respond to this dispute by April 12, 2024 (5 business days). We would appreciate either a revised invoice or a written explanation of the basis for the premium support charge. If we have not heard from you by that date, we will process payment of the undisputed amount ($14,200) and hold the balance pending resolution.

  We value our relationship with Meridian Cloud Services and want to resolve this quickly and amicably. Please don't hesitate to contact me directly at maya@anchor.com or (415) 555-0192 if it would be helpful to discuss.

  Sincerely,
  Maya Chen
  Controller, Anchor Analytics
tips:
  - "State the dispute amount in the very first sentence. Vendors need to know immediately whether this is a small discrepancy or a significant payment hold — burying it wastes everyone's time."
  - "Reference specific contract sections, PO numbers, and prior invoice numbers. Disputes resolved with documentation are resolved faster than disputes that rely on verbal agreements."
  - "Always separate the undisputed amount from the disputed amount and commit to paying the undisputed portion on schedule. This maintains goodwill and avoids late payment penalties on amounts you agree you owe."
  - "Give a specific response deadline. 'Please respond at your earliest convenience' is not a deadline — 'please respond by April 12' creates accountability."
  - "For critical vendors, consider calling before sending the letter. A 5-minute phone call can resolve billing errors that would otherwise take 3 email exchanges. Send the letter as documentation of what was agreed."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - month-end-checklist
  - expense-policy-summary
  - audit-prep-memo
tags:
  - vendor-management
  - accounts-payable
  - accounting
  - dispute
  - finance-ops
---
