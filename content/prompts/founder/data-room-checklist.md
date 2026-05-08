---
title: "Build a data room checklist tailored to round size and stage"
slug: data-room-checklist
function: founder
role: fundraising
description: "Generate the right-sized data room for your specific round — not the kitchen-sink version that takes 3 weeks to build, and not so light that diligence stalls."
useCase: "Use this when you're prepping a fundraise. Founders waste enormous time either over-building a Series B-grade data room for a seed round or under-prepping and looking sloppy when an investor asks for the basics. This prompt produces a stage-appropriate checklist with priorities so you build what you need."
prompt: |
  You are a fundraising operator who has run dozens of rounds. You know the difference between what investors actually look at vs. what founders waste time on. Be ruthless.

  Round details:

  Round type and size: {{round_type}} (e.g., $2M seed, $8M Series A)
  Company stage: {{stage}}
  Industry / category: {{industry}}
  Lead investor profile: {{lead_profile}} (e.g., generalist seed, vertical specialist, strategic)
  How many investors do I expect to share the data room with: {{investor_count}}
  Specific things I know investors at this stage care about most for my category: {{category_specific_concerns}}

  Generate a data room checklist organized into:

  1. **Tier 1: must-have before first investor meeting.** The minimum to not look unprepared.

  2. **Tier 2: must-have before term sheet conversation.** What you need ready when an investor signals they're going to LP/partnership.

  3. **Tier 3: must-have before close.** What confirmatory diligence will dig into.

  For each item:
  - What it is (specific document or data)
  - Why investors look at it (1 sentence)
  - Effort to produce (low / medium / high)
  - Common mistakes founders make on this item

  Then generate:

  - **What NOT to include** (5-7 items founders waste time on at this stage that nobody actually reads).
  - **The 3 documents that disproportionately matter** for this specific round size and category.
  - **A suggested folder structure** (so you don't dump 60 files in one folder).
  - **Access protocol recommendation** (how to share, watermarking, what to share before vs. after term sheet).

  Be specific to the inputs. A $2M seed checklist looks very different from an $8M Series A checklist; don't give generic advice.
variables:
  - "{{round_type}}"
  - "{{stage}}"
  - "{{industry}}"
  - "{{lead_profile}}"
  - "{{investor_count}}"
  - "{{category_specific_concerns}}"
exampleInput: |
  round_type: $2M seed
  stage: pre-seed → seed, 8 months in, $32k MRR
  industry: vertical SaaS for mid-market apparel/logistics ops
  lead_profile: generalist seed funds with vertical SaaS portfolios; one strategic-adjacent angel
  investor_count: ~25-30 investor conversations expected, narrowing to 6-8 deep dives
  category_specific_concerns:
    - Net dollar retention and expansion data
    - ACV trend and discounting discipline
    - Sales cycle and CAC payback
    - SOC2 readiness (we don't have it)
exampleOutput: |
  DATA ROOM CHECKLIST — $2M seed, vertical SaaS

  TIER 1: BEFORE FIRST INVESTOR MEETING

  1. Pitch deck (final, dated, watermarked PDF)
  Why: investors share decks internally before the next meeting; make sure yours is the version you want them to share.
  Effort: medium.
  Mistake: sending a deck with a "DRAFT" watermark or a Google Slides link they can't share.

  2. Two-page company summary (problem, wedge, traction, team, ask)
  Why: when a partner forwards your deal to others, they often forward this instead of the deck.
  Effort: low.
  Mistake: making this a deck-in-Word-doc form. It should read like a memo.

  3. Top-line metrics dashboard (1 page)
  Why: investors want to see MRR, customers, NDR, burn, runway at a glance.
  Effort: low.
  Mistake: using vanity metrics (signups, page views) instead of revenue and retention.

  4. Customer list with logo, ACV, start date, current ARR
  Why: investors will look at concentration, ACV trend, and recency.
  Effort: low.
  Mistake: anonymizing customers when you don't need to. Real names build credibility.

  5. Cap table (clean, current)
  Why: "send your cap table" is one of the first 5 questions. Not having it ready signals disorganization.
  Effort: low (use Carta export).
  Mistake: stale cap table that doesn't reflect last advisor grant.

  TIER 2: BEFORE TERM SHEET CONVERSATION

  6. Cohort retention analysis (logo and revenue retention by quarter)
  Why: NDR is the single most-scrutinized metric for vertical SaaS at seed. Lead with this.
  Effort: medium.
  Mistake: showing only logo retention; serious investors want both.

  7. Sales pipeline (real, current, with stages and weighted forecast)
  Why: tells investors whether your traction is a fluke or a system.
  Effort: low (export from CRM).
  Mistake: showing a fake pipeline. Investors talk to your customers and detect inflation.

  8. CAC payback and unit economics summary
  Why: at seed, investors don't expect mature unit economics, but they expect you to know yours.
  Effort: medium.
  Mistake: showing CAC payback without showing how you calculated it. Show the math.

  9. Hiring plan tied to the round
  Why: confirms you've thought through what $2M actually does.
  Effort: low.
  Mistake: padding the plan. Investors discount aggressive hiring at seed.

  10. Financial model (operating model + cash flow, 24 months)
  Why: not for the numbers — for the assumptions. Investors look at how you think.
  Effort: medium-high.
  Mistake: over-modeling. A simple spreadsheet with clearly named assumptions beats a 10-tab masterpiece.

  11. Customer reference list (3-5, with permission to call)
  Why: lead investors will reference customers. Pre-warming them is your job, not theirs.
  Effort: medium.
  Mistake: not warming the references. Tell each customer who's calling and why.

  12. Cofounder background and reference list
  Why: investors call backchannel references. Provide a list so you control the framing.
  Effort: low.
  Mistake: giving only friendly references. Investors will find people you didn't list anyway.

  TIER 3: BEFORE CLOSE

  13. Customer contracts (sample MSA, ToS, sample executed contract)
  Why: legal diligence on contract structure.
  Effort: low.

  14. Cap table with all underlying agreements (SAFEs, advisor grants)
  Why: confirmatory diligence.
  Effort: low.

  15. Corporate documents (incorporation, bylaws, founder agreements, IP assignments)
  Why: legal diligence basics.
  Effort: low — but make sure IP is fully assigned. This is the most common founder mistake.

  16. Bank statements (last 6 months)
  Why: confirms what you said about burn.
  Effort: low.

  17. SOC2 status / security questionnaire response template
  Why: you flagged this as a concern. Even if you don't have SOC2, a written plan with timeline is what investors want to see.
  Effort: low to write the plan.

  WHAT NOT TO INCLUDE

  - Detailed competitor matrix. (Investors do their own; yours looks self-serving.)
  - Marketing materials, brochures, launch plans.
  - Detailed product roadmap (12+ months out).
  - Patent / IP strategy memos at seed.
  - Press hits older than 6 months.
  - "About us" / team values document.
  - Customer testimonial videos (if you wouldn't show your mom, don't include them).

  THE 3 DOCUMENTS THAT MATTER MOST FOR THIS ROUND

  1. Cohort retention analysis (item 6). For vertical SaaS at seed, NDR is the single highest-signal metric. If yours is good, lead with it. If it's mixed, show it anyway and have the explanation ready.

  2. Customer list with ACV trend (items 4 + 8). The Patagonia signing + 4 expansions in 60 days is your strongest narrative; the list lets investors verify it without asking you 3 more times.

  3. SOC2 plan (item 17). You named compliance as a concern. A written plan with vendor and timeline turns "they don't have SOC2" into "they have a plan and are executing." That difference closes deals.

  SUGGESTED FOLDER STRUCTURE

  /00 Top of Funnel (Tier 1 only)
    /Deck (latest dated PDF)
    /Two-pager
    /Top metrics dashboard
  /01 Diligence
    /Customers (list, cohort, retention)
    /Financials (model, dashboard, bank summary)
    /Sales (pipeline, ACV trend)
    /Hiring plan
  /02 Confirmatory
    /Corporate (incorp, bylaws, cap table, agreements)
    /Customer contracts
    /Compliance (SOC2 plan)
    /References (customer + founder)
  /03 Misc (anything investor-specific)

  ACCESS PROTOCOL

  - Tier 1 only: open access via DocSend or watermarked PDFs.
  - Tier 2: gated — investor signs a simple NDA or you grant individual access. Watermarked.
  - Tier 3: shared after term sheet, individual access tracked.
  - For all stages: use DocSend or similar to track who's actually opening what. Investors who don't open the deck twice are not actually interested. Save your time accordingly.
tips:
  - "Build the data room before you start meeting investors, not during. The 'I'll send that over' delays are momentum killers."
  - "Use DocSend or a similar tool to see who's actually engaging. Investors who 'love it' but never open the deck are passing politely."
  - "IP assignment is the single most common diligence trip-up. Make sure every cofounder, contractor, and early employee has signed an IP assignment before you start raising."
  - "If you don't have SOC2 (or any compliance), don't pretend it's not relevant. Have a one-pager: status, plan, vendor, timeline. That converts 'concern' into 'manageable risk' instantly."
  - "Don't over-watermark Tier 1 documents. Heavy watermarks signal paranoia and slow sharing. Watermark Tier 2+ where it actually matters."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - seed-pitch-narrative
  - investor-objection-rebuttal
  - fundraise-status-tracker
tags:
  - fundraising
  - data-room
  - diligence
  - seed
  - operations
---
