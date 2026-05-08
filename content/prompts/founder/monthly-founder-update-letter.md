---
title: "Draft a monthly founder update to advisors and friends-of-the-company"
slug: monthly-founder-update-letter
function: founder
role: solo-founder
description: "Generate a candid, useful monthly update for advisors, angels, and helpful friends — short enough to read, specific enough to act on, with clear asks."
useCase: "Use this on the last day of every month. The friends-of-the-company list (advisors, angel investors, alumni who care) is one of the most underused assets in early-stage companies. People want to help — they just need a clear handle. This prompt produces an update that's honest about lowlights, specific about wins, and actionable in the asks."
prompt: |
  You are a writing partner who has read hundreds of great founder updates. The best ones are short, candid, and end with specific asks. The worst ones are corporate, vague, and full of hedging.

  Help me draft this month's update.

  Company: {{company_name}}
  Stage: {{stage}}
  Month: {{month}}
  Audience: {{audience}} (advisors, angels, prior investors, founder friends)
  Tone preference: {{tone}}

  This month's raw inputs:

  Top metrics (with last month's comparison):
  {{metrics}}

  Big wins:
  {{wins}}

  Real lowlights or things that didn't work:
  {{lowlights}}

  Key decisions made or coming up:
  {{decisions}}

  Specific asks (intros, advice, hires, customers):
  {{asks}}

  Anything else worth flagging:
  {{other}}

  Write the update with this structure:

  - Subject line: month + one-sentence headline that captures the actual story of the month (not "Monthly update" — something a reader actually wants to open)
  - One-sentence TL;DR at the top
  - Metrics in a tight bulleted block (3-5 numbers, with deltas)
  - Wins (3-5 bullets, specific — names of customers, named hires)
  - What didn't work / lowlights (2-3 bullets, candid, not melodramatic)
  - Asks (numbered, each one a specific person, role, or named target the reader can act on)
  - Sign-off

  Hard rules:
  - Under 500 words total
  - No corporate hedging ("we're excited to share..."). Cut it.
  - If a lowlight is just a setback, name it as a setback. If it's an existential issue, name that too.
  - Asks must be specific. "Intros to enterprise customers" is bad. "Intros to anyone who runs ops at a 200-500-person manufacturing company" is good.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{month}}"
  - "{{audience}}"
  - "{{tone}}"
  - "{{metrics}}"
  - "{{wins}}"
  - "{{lowlights}}"
  - "{{decisions}}"
  - "{{asks}}"
  - "{{other}}"
exampleInput: |
  company_name: Linework
  stage: seed, 8 months in, $32k MRR
  month: April 2026
  audience: 24 advisors, angels, and founder friends who got the prior 7 updates
  tone: candid and slightly self-deprecating, not corporate
  metrics:
    - MRR: $32k (up from $26k)
    - New logos: 4 (Patagonia ops team, MidSize Co, two SMBs)
    - Net dollar retention: 108%
    - Burn: $48k/month
    - Runway: 11 months
  wins:
    - Closed Patagonia ops team — first recognizable logo
    - Hired our first non-founder engineer (Priya, ex-Stripe)
    - Onboarding NPS jumped from 32 to 58 after we rebuilt the first-week flow
  lowlights:
    - Lost a deal we expected to close (LargeCo procurement) — they bought a competitor with better SSO/SOC2 story
    - Cofounder and I had a hard week navigating territorial disagreement on roadmap — resolved but bumpy
    - Two churns in a row from SMBs that never really activated
  decisions:
    - Going to invest 6 weeks in security/compliance to unblock enterprise
    - Probably hiring a head of CS in Q3
  asks:
    - Warm intros to anyone who runs ops at a 200-500-person logistics or apparel company
    - Advice on prioritizing SOC2 vs HIPAA for our segment
    - Names of fractional security leads anyone has worked with
  other: We're starting to think about Series A timing — not raising now, but want to start advisor conversations
exampleOutput: |
  Subject: Linework — April: first real logo, first lost enterprise deal, and what we're doing about it

  TL;DR: $32k MRR (+23%), Patagonia closed, lost a deal we wanted because of compliance gaps. Spending the next 6 weeks closing that gap.

  Metrics
  - MRR: $32k → up from $26k
  - New logos: 4 (Patagonia ops, MidSize Co, two SMBs)
  - NDR: 108%
  - Burn: $48k/mo, 11 months runway

  Wins
  - Patagonia ops team signed. First logo people recognize at dinner parties. They're already expanding usage in week 3.
  - Priya (ex-Stripe) joined as our first non-founder engineer. We're 4 people now.
  - Onboarding NPS: 32 → 58 after rebuilding the first-week flow. Activation rate up meaningfully and the SMB churns we saw earlier in the quarter should slow.

  What didn't work
  - LargeCo went with a competitor. Procurement told us straight: their SOC2 + SSO story was tighter. Fair. Hurt to lose, useful to learn.
  - Two SMB churns in a row from accounts that never fully activated. Pre-rebuild cohort. We think it's solved but watching closely.
  - My cofounder and I had a rough week disagreeing about Q3 roadmap. Worked it out, but it was a real one. We're scheduling a quarterly offsite for the two of us.

  What we're doing next
  - 6 weeks heads-down on SOC2 + SSO + the compliance basics so we stop losing enterprise deals on procurement.
  - Probably hiring a head of CS in Q3. If you know someone great, send them.
  - Starting Series A conversations with friendly investors — not raising, just pre-building relationships for fall.

  Asks
  1. Warm intros to ops leads at 200-500-person logistics or apparel companies. Patagonia is our wedge and we want 3 more like them this quarter.
  2. Strong opinions on SOC2 vs HIPAA prioritization for our segment — we're leaning SOC2 first but open to being talked out of it.
  3. Names of fractional security/compliance leads you've actually worked with. Not LinkedIn searches — names.

  Thanks as always. The intros from last month's update closed two of the four logos this month. This list is the most useful asset we have.

  — [Founder name]
tips:
  - "Send these on a consistent day every month. Reliability is part of the trust contract with your supporters."
  - "Asks at the end are the whole point. If you don't ask for anything specific, people read the update and feel good but don't help. Make it easy to act."
  - "Naming customers (with their permission) is a small thing that signals momentum. Generic 'a Fortune 500 customer' reads like spin."
  - "Don't dress up lowlights. Investors and advisors have seen worse. Spin reads as weakness; honesty reads as competence."
  - "If you're considering a Series A in 4-9 months, start including a 'we're pre-building Series A relationships' note 3-6 months before. Don't surprise the friendly investors."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - founder-investor-update-monthly
  - fundraise-status-tracker
  - seed-pitch-narrative
tags:
  - investor-update
  - communication
  - solo-founder
  - advisors
  - monthly-update
---
