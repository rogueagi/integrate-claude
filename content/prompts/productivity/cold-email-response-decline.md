---
title: "Decline a cold pitch politely with optional referral"
slug: cold-email-response-decline
function: productivity
role: email
description: "Generate a short, kind decline to a vendor or recruiter cold email — with an optional referral if appropriate, and zero guilt or hedge."
useCase: "Use this when a cold email deserves a real reply (warm intro, decent product, polite sender) but you're not buying. Sending a graceful 30-second decline beats both ghosting and a 5-paragraph apology."
prompt: |
  You are drafting a polite decline to a cold pitch on my behalf. The reply should be:

  - Short (under 60 words)
  - Warm but not apologetic — I have nothing to apologize for
  - Specific about WHY it's not a fit so they don't follow up forever
  - Optionally include a referral if I provide one

  Inbound cold email:
  ---
  {{cold_email}}
  ---

  Reason for the decline (be honest with me, but I'll soften for the email): {{decline_reason}}
  Should I offer a referral? {{include_referral}} (yes / no)
  Referral context if yes: {{referral_context}}
  My closing style preference: {{closing_style}} (e.g., "warm but brief", "professional and clipped")

  Output:
  - DRAFT REPLY (ready to send)
  - WHAT I'M SIGNALING (one line on what this reply is doing — closing the loop, leaving the door open, hard no, etc.)
variables:
  - "{{cold_email}}"
  - "{{decline_reason}}"
  - "{{include_referral}}"
  - "{{referral_context}}"
  - "{{closing_style}}"
exampleInput: |
  cold_email: |
    Hi [Name] —

    I lead growth at Beacon, a customer onboarding platform. We've helped teams like Linear and Vercel cut new-user time-to-value in half. Saw you're hiring on the product side — usually a sign the onboarding flow is on someone's mind. Worth a 15-min chat next week?

    — Casey, Beacon
  decline_reason: We just signed Userpilot 4 months ago; not switching for at least a year, but Casey seems sharp and the product is legit
  include_referral: yes
  referral_context: My friend Dana at Helix is actively rebuilding their onboarding and mentioned tooling last month
  closing_style: warm but brief
exampleOutput: |
  DRAFT REPLY
  Hey Casey —

  Appreciate the thoughtful note. We signed Userpilot earlier this year so we're locked in for at least the next 12 months — not the right time on our side.

  One thought: my friend Dana at Helix mentioned they're rebuilding onboarding and looking at tools. Happy to make an intro if you'd like — let me know and I'll loop her in.

  Good luck with the rest of the quarter.

  — [Name]

  WHAT I'M SIGNALING
  Closing the loop with a clear "no for 12 months" so they don't follow up monthly, but leaving the relationship warm via the referral. The specific timeframe ("12 months") is the key — vague declines invite vague follow-ups.
tips:
  - "Always give a specific reason or timeframe. 'Not a fit right now' invites a follow-up next quarter; 'we just signed a 2-year deal' doesn't."
  - "Only offer a referral if it's actually warm. A cold 'try Dana' isn't useful for them and burns your social capital."
  - "Don't apologize. You owe them a reply, not contrition. Apology language ('so sorry', 'wish we could') reads as soft and invites pushback."
  - "If the pitch is bad (mass-blasted, no personalization), just archive. This prompt is for the ones that actually deserve a reply."
  - "Save your three favorite outputs as personal templates. 80% of cold-email declines fit one of three shapes."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - email-reply-draft
  - email-triage-batch
  - meeting-decline-template
tags:
  - email
  - decline
  - cold-outreach
  - templates
  - boundaries
---
