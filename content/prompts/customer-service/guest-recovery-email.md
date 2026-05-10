---
title: "Write a guest recovery email after a service failure"
slug: guest-recovery-email
function: customer-service
role: escalations
description: "Draft a sincere recovery email to a guest after a hospitality service failure, with specific acknowledgment, ownership, and an appropriate gesture."
useCase: "Use this prompt within 24 hours of a guest complaint or escalation. It produces an email that names what went wrong specifically, owns it without legalese, and proposes a recovery gesture sized to the failure rather than a stock template."
prompt: |
  You are a director of guest relations at a hotel, restaurant, or hospitality group. Write a recovery email to a guest after a service failure.

  Property and guest:
  - Property: {{property}}
  - Guest name: {{guest_name}}
  - Email: {{guest_email}}
  - Date of stay or visit: {{visit_date}}
  - Loyalty status (if any): {{loyalty_status}}

  What happened:
  - Service failure (specific): {{failure}}
  - How the guest learned about or experienced it: {{experience}}
  - What we did at the time, if anything: {{onsite_response}}
  - Root cause as best we know it: {{root_cause}}

  Recovery proposal:
  - Gesture being offered: {{gesture}}
  - Who is signing: {{signer_name}}, {{signer_title}}

  Write a one-page email that:
  - Uses the guest's name in the salutation
  - Names the failure specifically — no vague "did not meet expectations" language
  - Owns the issue without blaming staff individually or making excuses
  - Acknowledges the impact on the guest's specific occasion (anniversary, business trip, family vacation) if relevant
  - Briefly explains what we found in our review, if it adds credibility
  - States what we have changed (or are changing) so it does not happen again
  - Offers the gesture clearly, with no strings or expiration tricks
  - Invites the guest to respond directly to the signer
  - Closes with a real direct line and email

  Rules:
  - No legalese. No "we apologize for any inconvenience".
  - Do not promise a financial remedy beyond the gesture authorized in the inputs.
  - If the failure involves a safety, health, or discrimination issue, recommend the user route to qualified counsel before sending and flag this in the output.
  - Length: 180-280 words.
  - Tone: warm, specific, professional, not groveling.
variables:
  - "{{property}}"
  - "{{guest_name}}"
  - "{{guest_email}}"
  - "{{visit_date}}"
  - "{{loyalty_status}}"
  - "{{failure}}"
  - "{{experience}}"
  - "{{onsite_response}}"
  - "{{root_cause}}"
  - "{{gesture}}"
  - "{{signer_name}}"
  - "{{signer_title}}"
exampleInput: |
  property: The Carriage House Hotel, Charleston SC
  guest_name: Eleanor Whitfield
  guest_email: eleanor.w@example.com
  visit_date: 2026-05-04 to 2026-05-06 (anniversary trip)
  loyalty_status: Gold member, 4 prior stays
  failure: room service breakfast was 75 minutes late on Sunday morning, the morning of their anniversary brunch reservation, which they ended up missing
  experience: guest called twice between 9:00 and 9:45am, was told it was on the way each time, breakfast arrived at 10:05am
  onsite_response: front desk waived the breakfast charge, did not address the missed reservation
  root_cause: kitchen was short two staff that morning due to a call-out, service tickets were not re-prioritized for in-room dining
  gesture: full refund of the room service charge already issued, plus a complimentary one-night stay valid for 18 months and a $200 dining credit at our property restaurant
  signer_name: Charles Banner
  signer_title: General Manager
exampleOutput: |
  Dear Eleanor,

  Thank you for staying with us May 4-6 for your anniversary, and I am sorry that Sunday morning did not go the way it should have.

  Your room service breakfast was 75 minutes late, and during that wait you called twice and were told each time that it was on the way. By the time it arrived at 10:05am, you had already missed your anniversary brunch reservation. That is a real loss, and not one a hotel should put a guest in the middle of, especially on an occasion you came here to celebrate.

  When I reviewed what happened, here is what we found. The kitchen was short two staff that morning due to a same-day call-out, and our team did not re-prioritize in-room dining tickets when the queue grew. We have changed our morning protocol so that on any short-staffed day, in-room dining tickets are flagged at the pass and routed first. I owe that fix to our team and to you.

  The room service charge has been refunded in full. I would also like to offer you a complimentary one-night stay at the Carriage House, valid through November 2027, along with a $200 dining credit at our restaurant. There are no blackout dates and no expiration tricks. If you can come back, we would like the chance to give you the visit we should have given you the first time.

  My direct line is below. If you would like to talk, or if there is anything else, I am the person to reach.

  With apologies,
  Charles Banner
  General Manager, The Carriage House Hotel
  charles.banner@carriagehouse.com
  (843) 555-0188
tips:
  - "Send within 24 hours. The half-life of a recovery offer drops fast — by 72 hours the same gesture lands as 'too little, too late'."
  - "Match the gesture to the failure. A free dessert does not recover a missed anniversary; a free room makes a missed conference flight feel disproportionate."
  - "Sign as the most senior person who can reasonably own the issue. A note from the General Manager carries weight a front desk apology cannot."
  - "If the failure involves any safety, health, accessibility, or discrimination issue, route through your legal team or qualified counsel before sending. This prompt is for service-quality recovery, not legal events."
  - "Track responses. Guests who reply and re-book at the recovered rate are your highest-loyalty cohort. The data justifies the program."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - kitchen-shift-handoff-summary
  - landlord-tenant-renewal-letter
  - review-response-set
tags:
  - hospitality
  - guest-recovery
  - escalations
  - customer-service
  - email
---
