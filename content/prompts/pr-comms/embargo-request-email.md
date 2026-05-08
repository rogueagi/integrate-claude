---
title: "Request an embargo on a story with rationale and terms"
slug: embargo-request-email
function: pr-comms
role: media-relations
description: "Draft a precise embargo request email that gives a journalist clear terms, a real reason, and an easy yes."
useCase: "Use when offering exclusive or embargoed access to a story. The output is short, defines terms unambiguously (what's embargoed, until when, in which timezone), explains the rationale, and avoids the begging tone that makes embargo offers easy to decline."
prompt: |
  You are a senior PR director who has placed embargoed stories at TechCrunch, Reuters, Axios, and The Information. Draft an embargo request email to {{journalist_name}} at {{publication}} for {{story_subject}}.

  Inputs:
  - Embargo lift time and timezone: {{lift_time}}
  - What is included under embargo: {{covered_assets}} (release, executive interviews, customer references, data, demo)
  - Why we're offering this exclusively or with embargo: {{rationale}}
  - What we're asking the journalist to commit to: {{terms}}
  - Risk if declined: {{fallback}} (e.g., "we'll go open release Friday")
  - Existing relationship context: {{relationship}}

  The email should:
  - Have a subject line that signals "embargo" without sounding desperate
  - Open with one sentence stating the offer (what + when)
  - Include a clearly bulleted "embargo terms" block: lift time, what's covered, what's not, who else has it
  - Explain the rationale in one paragraph (why this journalist, why now)
  - State a deadline for them to respond yes/no
  - Be under 200 words

  Hard rules:
  - Do not use "thrilled," "exciting," or "groundbreaking."
  - Do not say "we wanted to make sure you saw this first" if it isn't true.
  - Be specific about the timezone (no "Tuesday morning" — write "Tuesday April 14, 8:00am ET").
  - If you're offering a true exclusive, say so. If it's an embargo to a select group, say that instead. Do not blur the two.
  - Include a one-line clause stating that if they decline, the offer goes to the next publication on the list. This is standard and signals a real process.

  Output: subject line, then email, then a 2-bullet note on what to do if they ask to negotiate the terms.
variables:
  - "{{journalist_name}}"
  - "{{publication}}"
  - "{{story_subject}}"
  - "{{lift_time}}"
  - "{{covered_assets}}"
  - "{{rationale}}"
  - "{{terms}}"
  - "{{fallback}}"
  - "{{relationship}}"
exampleInput: |
  journalist_name: Kate Clark
  publication: The Information
  story_subject: Linden AI's $42M Series B and competitor-churn customer wins
  lift_time: Tuesday April 14, 8:00am ET
  covered_assets: Press release, 30-min interview with CEO Maya Okafor, 20-min interview with Bessemer partner Talia Roth, on-the-record customer interview with Brightpath, and exclusive deflection benchmark dataset
  rationale: She published a piece last week on consolidation in the AI support category. Our story is the winning side of that thesis with named customer churn data.
  terms: True exclusive (no other outlet has the round details). Other Tier 2 publications get a 24-hour embargo starting at lift.
  fallback: If declined by EOD Wednesday April 9, the exclusive goes to Ron Miller at TechCrunch.
  relationship: We've never placed with Kate before. Comms lead has read her last 12 pieces and our CEO has cited her work publicly.
exampleOutput: |
  Subject: Exclusive embargo offer — Series B + customer-churn data, lifts April 14 8am ET

  Kate,

  Offering The Information an exclusive on Linden AI's $42M Series B, with embargo lifting Tuesday April 14, 8:00am ET.

  Embargo terms
  - Lift: Tuesday April 14, 8:00am ET
  - Covered: round details, lead investor (Bessemer), customer wins from competitor churn, exclusive deflection benchmark dataset
  - Exclusive until lift: yes, no other outlet has the round details before then
  - Post-lift: 24-hour embargo extends to a small Tier 2 list

  This builds directly on your piece last week on consolidation in the AI support category. We can give you the named churn data behind that thesis: three Q1 customers who left Ada or Forethought for us, two of whom we can put on the record. Plus a 30-minute interview with Maya Okafor (CEO), 20 minutes with Talia Roth at Bessemer on the investment thesis, and a customer interview with Brightpath.

  If you're in, I can have the full briefing materials over by EOD Friday. We'd need a yes or no by EOD Wednesday April 9 — if it's not the right fit, we'll take the exclusive to TechCrunch.

  — Sara, Linden AI

  If she negotiates:
  - Most common ask is to extend the exclusive window post-lift. Acceptable up to 6 hours; beyond that, the Tier 2 list loses interest.
  - Do not move the lift time to accommodate her print cycle. Other comms hold a 24-hour clock from this lift; moving it cascades.
tips:
  - "Embargo emails are won or lost on specificity. 'Tuesday morning' is not a time. '8:00am ET' is."
  - "Always state a fallback. Journalists know there's a list; pretending otherwise reads as inexperienced."
  - "Never offer 'an exclusive' if you've already shopped it. Trade press communities are small and the betrayal cost is high."
  - "If the journalist asks to negotiate the lift time to fit their publication cycle, be willing to flex by hours, not days. Other comms are ticking from the same clock."
  - "Embargo breaks happen. Have a plan for the day-of in case another outlet publishes early — it usually means accelerating the broader release rather than scolding."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - journalist-outreach-pitch
  - press-release-draft
  - media-pitch-list-builder
tags:
  - embargo
  - media-relations
  - press
  - exclusives
  - email
---
