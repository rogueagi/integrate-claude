---
title: "3-5 touch cart abandonment sequence with escalating offers"
slug: cart-abandonment-sequence
function: marketing
role: lifecycle
description: "Generate a 3-5 email cart abandonment sequence with timing, copy, subject lines, and an offer ladder calibrated to your brand and margin."
useCase: "Use this prompt when standing up or refreshing a cart abandonment program. It produces a complete sequence — timing, subject lines, body copy, and an offer ladder — that respects your margin and stays in brand voice instead of defaulting to discount-stacked templates."
prompt: |
  You are a lifecycle marketer who has built cart abandonment programs at DTC brands. Generate a complete sequence.

  Brand context:
  - Brand name: {{brand_name}}
  - Category: {{category}}
  - Average order value: {{aov}}
  - Gross margin: {{gross_margin}}
  - Brand voice (adjectives): {{brand_voice}}

  Customer signal:
  - Trigger: cart abandoned at checkout (items in cart, no purchase)
  - Items in cart placeholder: {{cart_items}}
  - Customer state: new vs returning — produce one sequence for each if both apply: {{customer_state}}

  Offer guidance (your margin tolerance):
  - Maximum discount allowed in sequence: {{max_discount}}
  - Free shipping threshold currently in market: {{free_shipping_threshold}}
  - Any items excluded from discount: {{discount_exclusions}}

  Sequence parameters:
  - Number of touches: {{touch_count}} (between 3 and 5)
  - Timing window: {{timing_window}} (e.g., 1 hour, 24 hours, 3 days, 7 days)
  - Channel mix: {{channels}} (email, SMS — note where each is used)

  Produce a sequence with for each touch:
  - Touch number, channel, send timing relative to abandonment
  - Subject line (or SMS preview)
  - Pre-header (email only)
  - Body copy
  - Offer (none / free shipping / discount %)
  - CTA copy and link target

  Rules:
  - Touch 1 should never include a discount. Lead with the cart and a small reminder of what made the brand worth choosing.
  - Discount, if used, escalates only across later touches. Do not repeat the same discount in two touches.
  - Never exceed {{max_discount}}.
  - If {{discount_exclusions}} items are in the cart, include a one-line note in any discount touch.
  - Brand voice consistent across the sequence. No "Hey friend!!" if your voice is reserved.
  - SMS copy under 160 characters including the link.
  - Output a final note: estimated revenue lift assumption based on industry benchmarks (15-25% recovery on abandoned carts is typical) — clearly mark as estimate, not promise.
variables:
  - "{{brand_name}}"
  - "{{category}}"
  - "{{aov}}"
  - "{{gross_margin}}"
  - "{{brand_voice}}"
  - "{{cart_items}}"
  - "{{customer_state}}"
  - "{{max_discount}}"
  - "{{free_shipping_threshold}}"
  - "{{discount_exclusions}}"
  - "{{touch_count}}"
  - "{{timing_window}}"
  - "{{channels}}"
exampleInput: |
  brand_name: Field & Form
  category: minimalist home goods (linens, dinnerware, small home objects)
  aov: $128
  gross_margin: 62%
  brand_voice: warm, considered, confident, never pushy
  cart_items: linen pillowcases set, ceramic dinner bowl, small teak tray
  customer_state: new
  max_discount: 12%
  free_shipping_threshold: $75 (already met for most carts including this one)
  discount_exclusions: ceramics from the studio collaboration line
  touch_count: 4
  timing_window: 1 hour, 24 hours, 3 days, 6 days
  channels: email for touches 1, 2, 4; SMS for touch 3 (only if customer opted in)
exampleOutput: |
  Touch 1 — Email, 1 hour after abandonment

  Subject: Your cart at Field & Form
  Pre-header: We saved it for you. No pressure.

  Hi there,

  You left a few things in your cart at Field & Form. Linen pillowcases, a ceramic bowl, a small teak tray — quiet pieces, the kind we make. We saved them for you.

  Free shipping is already on this order. If you have a question about anything in there — sizing, finish, lead times — just reply. A real person reads these.

  Offer: none
  CTA: Return to your cart → [link]

  Touch 2 — Email, 24 hours after abandonment

  Subject: A note on the linen pillowcases
  Pre-header: How they're made, and why we like them.

  Hi again,

  Quick note from the team. Our linen pillowcases are stonewashed twice and softened on the third pass — the reason they feel like they have been on your bed for a year on the first night. The ceramic bowl in your cart is from our studio kiln and finished by hand, which is why each one is slightly different.

  We thought you might want the context.

  Offer: none
  CTA: Pick up where you left off → [link]

  Touch 3 — SMS, 3 days after abandonment (only if opted in)

  Hey, it's Field & Form. Your cart is still here if you want it — 8% off the order if you're ready. Code: SOFT8. Note: studio ceramics excluded. → [link]

  (148 characters)

  Offer: 8% off
  CTA: link to cart with code applied

  Touch 4 — Email, 6 days after abandonment

  Subject: Last note on your cart
  Pre-header: One more thing, then we'll stop.

  Hi,

  Final note from us on this cart. Your linen, ceramic bowl, and teak tray are still saved, and we are extending one more thing — 12% off the order if you decide to come back this week. Code: WELCOME12. (Studio collaboration ceramics are excluded from the code; full price applies on those.)

  After this we will not nudge you again. If now is not the right time, we will be here when it is.

  Offer: 12% off
  CTA: Use code at checkout → [link]

  Estimated revenue lift (note: estimate based on industry benchmarks, not a guarantee)
  Recovery rates on abandoned carts typically run 15-25% with a well-designed sequence. For Field & Form's $128 AOV and 62% gross margin, the discount cost on the 8% and 12% touches should preserve margin above 50% on recovered orders. Actual lift depends on traffic quality, list size, and seasonality.
tips:
  - "Touch 1 with no discount is the most underrated email in the sequence. Many customers come back without ever needing an offer."
  - "Match the offer escalation to your margin. A 20% discount on a 25% margin product makes recovered orders worse than abandoned ones."
  - "SMS is high-leverage but only with explicit opt-in. Sending SMS to a list that did not consent erodes deliverability across your other channels."
  - "Always include exclusions for protected SKUs (collaborations, MAP-priced items, sale-already items). One mis-applied discount creates more support tickets than the recovery is worth."
  - "Track recovery rate by touch. If touch 4 carries the offer but touch 2 carries the recovery, your sequence is too back-loaded with discount."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - product-description-set-from-spec
  - return-policy-rewrite-friendly
  - review-response-set
tags:
  - ecommerce
  - lifecycle
  - email
  - cart-abandonment
  - retention
---
