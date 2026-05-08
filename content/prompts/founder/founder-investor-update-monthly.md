---
title: "Write a monthly investor update post-round"
slug: founder-investor-update-monthly
function: founder
role: fundraising
description: "Draft a tight monthly update to existing investors after the round closes — highlight, lowlight, asks — that maintains trust and gets you real help between rounds."
useCase: "Use this on the same day every month after closing your round. Investors who feel informed pile in on the next round and pick up the phone for intros; investors who feel ignored quietly downgrade you. The monthly update is the cheapest, highest-leverage trust-building you can do. This prompt produces one that's candid, useful, and actually short enough to be read."
prompt: |
  You are a writing partner who has read hundreds of monthly investor updates. The best ones are short, candid, and end with specific asks. The worst ones are corporate, vague, and read like a press release.

  Help me draft this month's update to existing investors.

  Company: {{company_name}}
  Stage post-round: {{stage}}
  Last round closed: {{last_round}}
  Current month: {{month}}
  Audience: {{audience}} (existing investors only; advisors get a different update)

  This month's raw inputs:

  Top metrics (with last month's deltas):
  {{metrics}}

  Big wins:
  {{wins}}

  Lowlights / what didn't work:
  {{lowlights}}

  Hires made / lost:
  {{hires}}

  Customer movement (wins, churns, expansions):
  {{customers}}

  Product shipping highlights:
  {{product}}

  Cash and runway:
  {{runway}}

  Asks (specific):
  {{asks}}

  Anything for an "FYI" that doesn't fit:
  {{fyi}}

  Generate the update with this structure:

  - Subject line: month + a one-sentence headline that captures the actual story.
  - One-sentence TL;DR.
  - **Metrics** — 4-6 numbers with deltas, no commentary in this section.
  - **Highlights** — 3-5 bullets, named (real customer names, real hire names).
  - **Lowlights** — 2-3 bullets, candid, not melodramatic. Investors trust honesty more than spin.
  - **Cash + runway** — one or two lines, current burn and months remaining.
  - **Hires** — open roles, recent hires, recent departures.
  - **Asks** — numbered, specific. "Intros to enterprise customers" is bad. "Intros to anyone who runs ops at a 200-500 person logistics company" is good.
  - Sign-off.

  Hard rules:
  - Under 600 words.
  - No corporate hedging.
  - If a lowlight is just a setback, name it as a setback. If it's an existential issue, say that too.
  - If you're behind plan, say so. Investors will know if you smooth it over.
  - Asks must be specific enough that the reader can act in 5 minutes.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{last_round}}"
  - "{{month}}"
  - "{{audience}}"
  - "{{metrics}}"
  - "{{wins}}"
  - "{{lowlights}}"
  - "{{hires}}"
  - "{{customers}}"
  - "{{product}}"
  - "{{runway}}"
  - "{{asks}}"
  - "{{fyi}}"
exampleInput: |
  company_name: Linework
  stage: post-seed, 6 months post-close, 14 months in business
  last_round: $2M seed, closed November 2025
  month: April 2026
  audience: SeedLabs (lead), Vertical SaaS Capital, 4 angels
  metrics:
    - MRR: $48k (up from $40k)
    - New logos: 3 (one enterprise, two mid-market)
    - Net dollar retention: 112%
    - Burn: $62k/mo
    - Runway: 14 months
  wins:
    - Closed first 6-figure ACV deal (LogiCo, $108k)
    - SOC2 Type 1 achieved
    - Onboarding rebuild: activation in week 1 up from 41% to 67%
  lowlights:
    - Lost a key engineering candidate to a Series B competitor on comp
    - Sales cycle is creeping longer at the enterprise tier (45 → 62 days)
    - Two SMB churns (cohort issue we thought was fixed)
  hires:
    - Hired Priya as Senior Eng (started March)
    - First AE (Marcus) starts May 13
    - Lost candidate for Head of Product
  customers:
    - 3 new logos including LogiCo
    - 2 expansions (Patagonia +$18k ACV, MidSize Co +$6k)
    - 2 SMB churns
  product:
    - Shipped multi-site rollout features
    - Shipped SSO for enterprise
    - Onboarding redesign
  runway: $62k/mo burn, 14 months runway
  asks:
    - Intros to ops leaders at 500-1500 person logistics or apparel companies (we want 3 more enterprise like LogiCo)
    - Recommendations for fractional Head of Product (2 months while we keep searching)
    - Intros to senior product candidates who'd be excited about ops/vertical SaaS
  fyi: We're starting to map the Series A landscape — not raising for 6+ months, but pre-building relationships
exampleOutput: |
  Subject: Linework — April: first 6-figure deal (LogiCo), SOC2 done, Head of Product search hit a snag

  TL;DR: $48k MRR (+20%), first six-figure ACV closed, SOC2 Type 1 in hand. NDR 112%. Lost a Head of Product candidate; searching.

  Metrics
  - MRR: $48k → up from $40k (+20%)
  - New logos: 3 (LogiCo + 2 mid-market)
  - NDR: 112%
  - Burn: $62k/mo
  - Runway: 14 months

  Highlights
  - LogiCo signed at $108k ACV — our first six-figure deal and the proof point we needed that the wedge plays in enterprise. They're going live in 30 days; if it goes well it's a strong reference and likely expansion.
  - SOC2 Type 1 achieved. This unblocks 4 enterprise conversations that were sitting on it.
  - Onboarding rebuild paid off: week-1 activation went from 41% to 67%. The pre-rebuild SMB churns we mentioned in March should slow.
  - Patagonia expanded $18k ACV — they're rolling out to a second distribution center.

  Lowlights
  - Lost the Head of Product finalist to a Series B competitor on comp. They beat us by ~$60k base. We weren't going to compete on cash and the candidate was straightforward about it. We're back to searching; in the meantime we'd take a strong fractional rec.
  - Enterprise sales cycle has crept from 45 to 62 days. Some of this is real (procurement at LogiCo took longer than expected); some is us. We're investigating before drawing conclusions.
  - Two SMB churns this month from the pre-onboarding-rebuild cohort. We think the activation fix solves this going forward; watching the May cohort closely.

  Cash + runway
  $62k/mo burn, 14 months runway. On plan.

  Hires
  - Priya started in March (Senior Eng) — onboarded fast, already shipping core infra.
  - Marcus (first AE) starts May 13. Will be a meaningful test of whether founder-led sales can transition.
  - Open: Head of Product (full-time), Founding Designer, Senior Eng #2.

  Asks
  1. Warm intros to ops leaders at 500-1500 person logistics or apparel companies. LogiCo proved the wedge — we want 3 more like them this quarter.
  2. Recommendations for a fractional Head of Product (2-3 month engagement) while we continue searching for full-time. Looking specifically for someone who has run product at a vertical SaaS company in the seed-to-Series A range.
  3. Senior product candidates: please send anyone you'd vouch for who'd be excited about ops/vertical SaaS — we'd rather wait for the right person than rush to fill the seat.

  FYI
  We're starting to map the Series A landscape for late this year — not raising for 6+ months, but pre-building relationships. If you have specific Series A funds you'd recommend (or warn against) for vertical SaaS at our stage, send them.

  Thanks as always for the support. The intros from March's update produced 4 introductions and 1 closed deal (LogiCo). This list is consistently the highest-ROI channel we have.

  — [Founder]
tips:
  - "Send these on the same calendar day every month. Reliability is the trust signal — investors notice when an update is late even if they don't say it."
  - "Asks are the entire point. If you don't ask for anything specific, investors read the update, feel good, and don't help. Make it easy."
  - "Be candid about lowlights. Investors trust founders who name real problems more than ones who spin. Spin reads as 'they don't know it's a problem.'"
  - "If you're behind plan, say so explicitly. Investors find out anyway, and they'd rather hear it from you with a plan than figure it out themselves."
  - "Track which intros come from which investors over time. The 2-3 investors who actually open doors are worth disproportionate attention; the rest can stay on the list but get less personal time."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - monthly-founder-update-letter
  - fundraise-status-tracker
  - seed-pitch-narrative
tags:
  - investor-update
  - communication
  - post-round
  - monthly
  - investor-relations
---
