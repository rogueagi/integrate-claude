---
title: "Rewrite a return policy in friendly brand-voice tone"
slug: return-policy-rewrite-friendly
function: customer-service
role: support
description: "Rewrite a return policy from legalese into brand-voice copy that customers can understand, while keeping every legally meaningful term intact."
useCase: "Use this prompt when your return policy reads like a contract and your support team is fielding the same five questions a week. It produces a friendly, scannable rewrite that preserves the legal terms — return window, condition, refund method, exclusions — without losing precision."
prompt: |
  You are an e-commerce content lead with a background in support operations. Rewrite a return policy in the brand voice while preserving every legally meaningful term.

  Brand context:
  - Brand name: {{brand_name}}
  - Brand voice (adjectives): {{brand_voice}}
  - Audience: {{audience}}
  - Where the policy lives: {{location}} (e.g., footer link, post-purchase email, packaging insert)

  Original return policy (legal/dense version):
  {{original_policy}}

  Constraints to preserve exactly:
  - Return window in days: {{return_window}}
  - Condition required for return: {{condition_required}} (e.g., unworn, original packaging)
  - Refund method: {{refund_method}}
  - Who pays return shipping: {{return_shipping}}
  - Restocking fees if any: {{restocking_fees}}
  - Categorical exclusions: {{exclusions}}
  - International or sale-item differences: {{international_or_sale}}

  Produce three deliverables:

  1. Plain-language rewrite (300-450 words) — full policy, organized in sections customers actually use:
     - The short version (3-4 sentences at the top, the core terms)
     - How to start a return
     - What we can take back
     - What we can't take back (the exclusions section, friendly but clear)
     - Refunds and timing
     - Damaged or wrong items
     - International orders (if {{international_or_sale}} contains specifics)
     - Questions, with a real channel to reach support
  2. FAQ extract — five short questions customers actually ask, each with a 1-2 sentence answer pulled directly from the policy.
  3. Diff note — list every term from the constraints section above and confirm it is preserved in the rewrite. If any constraint was unclear, flag it [legal review].

  Rules:
  - Do not change return window, exclusions, refund method, or any other constraint listed.
  - Replace legalese with plain language. "Defective merchandise must be reported within 14 calendar days" becomes "If something arrives damaged, let us know within 14 days."
  - Keep "we" and "you" voice. No third-person "the customer".
  - Avoid: "kindly", "be advised", "shall", "hereby".
  - Tone matches {{brand_voice}}. Friendly does not mean unprofessional.

  Important: this prompt produces customer-facing copy, not legal review. Have qualified counsel review final policy language before publishing, especially for jurisdictions with statutory consumer protection rules (e.g., EU consumer rights directive, certain US states). Statutory rights you cannot waive must remain intact regardless of policy phrasing.
variables:
  - "{{brand_name}}"
  - "{{brand_voice}}"
  - "{{audience}}"
  - "{{location}}"
  - "{{original_policy}}"
  - "{{return_window}}"
  - "{{condition_required}}"
  - "{{refund_method}}"
  - "{{return_shipping}}"
  - "{{restocking_fees}}"
  - "{{exclusions}}"
  - "{{international_or_sale}}"
exampleInput: |
  brand_name: Northbeam Apparel
  brand_voice: warm, plain-spoken, confident, slightly understated
  audience: outdoor and travel apparel customers, broad age range
  location: footer link and post-purchase email
  original_policy: "Northbeam Apparel will accept returns of merchandise within thirty (30) calendar days of the original ship date provided that such merchandise is in its original, unworn condition with all original tags attached and accompanied by proof of purchase. Final sale items, undergarments, and items marked 'last chance' are not eligible for return. Refunds will be issued to the original method of payment within ten (10) business days of receipt and inspection. Customer is responsible for return shipping costs unless the return is the result of a manufacturing defect or a fulfillment error by Northbeam. International orders are subject to customs duties which are non-refundable."
  return_window: 30 calendar days from original ship date
  condition_required: original, unworn, tags attached
  refund_method: original method of payment, within 10 business days of receipt and inspection
  return_shipping: customer pays unless defect or our error
  restocking_fees: none
  exclusions: final sale items, undergarments, last chance items
  international_or_sale: international orders subject to non-refundable customs duties
exampleOutput: |
  Plain-language rewrite

  Returns at Northbeam Apparel

  The short version
  You have 30 days from when your order shipped to send something back. We need it unworn, with tags on, and with proof of purchase. We refund to your original payment method within 10 business days after we receive and inspect it. You cover return shipping unless it was our mistake.

  How to start a return
  Email returns@northbeamapparel.com or use the link in your shipping confirmation. We will send you a return label and instructions. You do not need to call us first.

  What we can take back
  Anything still in original, unworn condition with tags attached, sent back within 30 days of the ship date.

  What we can't take back
  - Final sale items
  - Undergarments
  - Anything marked "last chance"
  These are clearly labeled at checkout.

  Refunds and timing
  We refund to the same card or payment method you used. After your return shows up, we inspect it and send the refund within 10 business days. Your bank may take another few days to show it.

  Damaged or wrong items
  If your order arrives damaged or we sent the wrong thing, that is on us. Email us within 14 days, send a photo, and we will send a replacement and a prepaid label, no return shipping cost to you.

  International orders
  Customs duties paid at checkout are not refundable, even if you return the item — that money goes to your country, not us. We cannot recover it.

  Questions?
  We read every email. returns@northbeamapparel.com, or chat from any product page, weekdays 9-5 PT.

  FAQ extract

  How long do I have to return something?
  30 days from the ship date. The clock starts when it leaves us, not when it arrives.

  Do I have to pay for return shipping?
  Yes, unless we sent the wrong item or it arrived damaged.

  When will I see my refund?
  Within 10 business days after we receive your return. Your bank may take a few extra days to post it.

  Can I return a final sale item?
  No. Final sale, undergarments, and "last chance" items can't be returned.

  What about international orders?
  You can still return them under the same 30-day policy, but customs duties paid at checkout are not refundable.

  Diff note (constraints preserved)
  - Return window: 30 calendar days from original ship date — preserved
  - Condition: original, unworn, tags attached, proof of purchase — preserved
  - Refund method: original payment method, 10 business days after receipt and inspection — preserved
  - Return shipping: customer pays except for our error or defect — preserved
  - Restocking fees: none — n/a, no fee was in original
  - Exclusions: final sale, undergarments, last chance — preserved
  - International: customs duties non-refundable — preserved
  - [legal review] proof of purchase requirement — confirm whether order number alone qualifies as "proof of purchase" for plain-language replacement
tips:
  - "The diff note is the most useful part of the output. It is your checklist for legal review."
  - "Always preserve the exact return window, exclusions, and refund timing. Plain language is about phrasing, not changing terms."
  - "If your policy varies by region (EU, UK, California), produce one rewrite per region. Single-policy global pages create more support tickets than they save."
  - "Run the rewritten policy past your support team before publishing. They know which questions the old version generated, which is the test of whether the new one is clearer."
  - "Statutory consumer protections (e.g., EU consumer rights directive, certain US state laws) cannot be waived by policy phrasing. Always have qualified counsel review the final policy before publishing."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cart-abandonment-sequence
  - review-response-set
  - guest-recovery-email
tags:
  - ecommerce
  - return-policy
  - support
  - copywriting
  - customer-service
---
