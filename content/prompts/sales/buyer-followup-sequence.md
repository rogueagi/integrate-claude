---
title: "Multi-touch buyer follow-up sequence after an open house"
slug: buyer-followup-sequence
function: sales
role: sdr
description: "Generate a five-touch follow-up sequence for buyers who attended an open house, calibrated to their stated timeline and price comfort."
useCase: "Use this prompt the evening of an open house to turn the sign-in sheet into personalized follow-up. It produces a sequence of texts and emails staggered across two weeks, with branching for buyers who engage and those who go cold."
prompt: |
  You are a buyer's agent with strong follow-through. Build a five-touch follow-up sequence for a prospect who attended an open house.

  Open house context:
  - Property: {{property_address}}
  - List price: {{list_price}}
  - Date attended: {{visit_date}}

  Buyer notes from sign-in and conversation:
  - Name: {{buyer_name}}
  - Stated timeline: {{timeline}}
  - Pre-approval status: {{preapproval}}
  - What they liked: {{liked}}
  - Concerns or hesitation: {{concerns}}
  - Working with another agent: {{other_agent}}

  Build five touches over 14 days. For each touch, output:
  - Day (relative to visit, e.g., Day 1, Day 4)
  - Channel (text or email — text for short, email when sending materials)
  - Subject line if email
  - Message body (short — text under 25 words, email under 90 words)
  - Branch logic: what to do if the buyer responds, and what to do if they go silent

  Sequence requirements:
  - Touch 1 (Day 1): same-day thank you, one specific thing you remembered from the conversation
  - Touch 2 (Day 3-4): send something useful tied to their concerns ({{concerns}}) — comparable listings, neighborhood data, or a specific resource
  - Touch 3 (Day 7): check-in only if no response, value-add only, no pressure
  - Touch 4 (Day 10): low-stakes invitation — new listing, market update, or open house in same area
  - Touch 5 (Day 14): break-up touch — clear, not guilt-inducing, leaves the door open

  Rules:
  - Never reference urgency the buyer did not express.
  - If they are working with another agent, respect that and adjust touches to be informational only.
  - No "just checking in" subject lines.
  - First name only, conversational tone.
variables:
  - "{{property_address}}"
  - "{{list_price}}"
  - "{{visit_date}}"
  - "{{buyer_name}}"
  - "{{timeline}}"
  - "{{preapproval}}"
  - "{{liked}}"
  - "{{concerns}}"
  - "{{other_agent}}"
exampleInput: |
  property_address: 88 Walnut St, Pasadena, CA
  list_price: $1,295,000
  visit_date: 2026-05-09
  buyer_name: Daniel Okafor
  timeline: 60-90 days, lease ends in July
  preapproval: pre-approved up to $1.1M with First Republic
  liked: backyard, primary suite, walking distance to Trader Joe's
  concerns: feels stretched on price, wants to see something with a similar yard under $1.15M
  other_agent: not currently working with anyone
exampleOutput: |
  Touch 1 — Day 1, text
  Hey Daniel, thanks for coming through 88 Walnut yesterday. Glad you got to see that backyard in the afternoon light. I'll dig up a few similar yards in your range and send tomorrow.
  Branch: if he replies, ask one clarifying question about must-haves. If silent, proceed to Touch 2 as planned.

  Touch 2 — Day 4, email
  Subject: Three Pasadena yards under $1.15M
  Daniel, you mentioned the yard at 88 Walnut was a real draw. I pulled three active listings in Pasadena and Altadena under $1.15M with comparable outdoor space. Two are 3 bed, one is a 4 bed with a smaller primary. Photos and links below. Happy to walk any of them with you next weekend if one stands out.
  Branch: if he picks one, schedule a private showing. If silent, hold for Day 7.

  Touch 3 — Day 7, text (only if no response)
  Quick one — saw a new listing on Garfield that fits what you're after. Sending the link, no rush.
  Branch: if engaged, move to active showing cadence. If silent, hold.

  Touch 4 — Day 10, email
  Subject: Pasadena market note for May
  Daniel, short update for the price range you're shopping. Inventory in Pasadena under $1.2M is up about 14% month over month, which means more room to negotiate than in March. Two homes in your range had price reductions this week. Worth a 10-minute call if you want to talk strategy before your lease decision.
  Branch: if he books, prep a buyer strategy session. If silent, proceed to Touch 5.

  Touch 5 — Day 14, text
  Daniel, I'll stop the regular updates so I'm not crowding your inbox. If anything changes on timing or you want a second look at 88 Walnut, you have my number.
  Branch: log as nurture, add to monthly market update list.
tips:
  - "The sign-in sheet is gold. Take 30 seconds after each conversation to jot one specific detail you can reference in Touch 1."
  - "Texts beat emails for the first touch. Open rates are higher and the tone is friendlier."
  - "If the buyer is working with another agent, do not try to convert them. Send useful info and build the relationship for their next purchase."
  - "Track which subject lines get opened. After 20 sequences you will know what your local buyers respond to."
  - "The break-up text is the most important. Done well, buyers come back. Done poorly, you sound bitter."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - listing-description-from-photos
  - landlord-tenant-renewal-letter
  - cold-outbound-vp-sales
tags:
  - real-estate
  - follow-up
  - buyer
  - email-sequence
  - sdr
---
