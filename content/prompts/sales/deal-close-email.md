---
title: "Write a deal-close email before quarter end"
slug: deal-close-email
function: sales
role: ae
description: "Generate a professional, non-desperate close email that creates genuine urgency and makes signing easy."
useCase: "Use this prompt in the final days before a quarter closes when a deal is stalled at verbal agreement or late-stage. The goal is to give the prospect a reason to move now without sounding like you're just trying to hit a number."
prompt: |
  You are a senior account executive writing a closing email to a prospect who has verbally agreed to move forward but hasn't signed yet. Quarter end is approaching.

  Deal context:
  - Prospect name: {{prospect_name}}
  - Prospect title: {{prospect_title}}
  - Company: {{company_name}}
  - Deal amount: {{deal_amount}}
  - Current status: {{current_status}} (e.g., contract sent, legal review, waiting on signature, verbal yes)
  - Days until quarter end: {{days_remaining}}
  - Genuine reason to close now (NOT just "my quota"): {{real_urgency}} (e.g., implementation team availability, pricing that changes next quarter, a product deadline they care about)
  - What's left to do to close: {{remaining_steps}}
  - Internal champion name (if applicable): {{champion_name}}

  Write a closing email that:
  - Is direct and confident — not apologetic, not pressuring
  - Opens by referencing where you left off, not with "I'm following up"
  - Leads with a reason to act now that is real and relevant to THEM (not your quota)
  - Makes the path to signature as simple as possible — names the exact next step
  - Is under 150 words
  - Ends with a specific date and a soft ask

  Also write:
  - A subject line that will get opened (not "Following up on our proposal")
  - A one-line "if no reply in 24 hours" follow-up text message (optional, for if you have their number)

  Tone: peer-to-peer, confident, human. This is a collegial push, not a pressure tactic.
variables:
  - "{{prospect_name}}"
  - "{{prospect_title}}"
  - "{{company_name}}"
  - "{{deal_amount}}"
  - "{{current_status}}"
  - "{{days_remaining}}"
  - "{{real_urgency}}"
  - "{{remaining_steps}}"
  - "{{champion_name}}"
exampleInput: |
  prospect_name: Melissa
  prospect_title: VP of People
  company_name: Redwood Staffing Solutions
  deal_amount: $62,000
  current_status: contract sent last Tuesday, waiting on signature from Melissa and their legal team
  days_remaining: 6
  real_urgency: our implementation team has slots available in July but they fill up fast; if they sign in Q2 they get a July start date guaranteed vs. likely September
  remaining_steps: legal needs to sign off on one data processing clause; then Melissa signs
  champion_name: James (HR Ops lead)
exampleOutput: |
  Subject: July implementation slot — 6 days to lock it in

  Melissa,

  Quick update from my end: our July implementation cohort has two spots left, and I've been holding one for Redwood. Once those fill, the next available start is likely September.

  I know legal is reviewing the DPA clause — James mentioned it should be straightforward. If there's anything I can do to accelerate that review (a call with our legal team, revised language), I'm available today and tomorrow.

  If we can get signatures by end of day Friday, I can confirm your July slot immediately.

  Worth a 10-minute call today to clear the path?

  — [Name]

  ---
  24-hour text follow-up: "Melissa — [Name] here. Sent you an email about the July slot — didn't want it to get buried. Let me know if there's anything on the contract I can help move. Happy to jump on a quick call."
tips:
  - "The urgency in this email must be real. If 'implementation team slots' isn't genuinely true, don't say it — prospects remember, and it destroys trust if they find out later."
  - "Name the exact remaining steps. 'We're so close' is vague. 'Legal needs to clear one clause, then you sign' is actionable."
  - "Include the internal champion whenever possible — mentioning James by name signals you're plugged in and takes some pressure off Melissa to be the only one driving."
  - "If you have no genuine reason for them to close this quarter (it's purely about your number), be honest with yourself and don't manufacture urgency. A weak reason is worse than no reason."
  - "Follow up with a call, not just another email. The last mile of a deal often requires voice, not text."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - objection-handler-price
  - objection-handler-timing
  - proposal-executive-summary
tags:
  - close
  - quarter-end
  - ae
  - deal-management
  - email
---
