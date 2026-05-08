---
title: "Generate a structured fundraise status tracker update"
slug: fundraise-status-tracker
function: founder
role: fundraising
description: "Build a clear weekly fundraise tracker that shows where every investor sits in the process, what's stalled, and what to do next — so you stop guessing how the round is actually going."
useCase: "Use this weekly during an active raise. Founders frequently lose rounds because momentum decays invisibly — three investors went quiet last week and you didn't notice. A weekly tracker turns the qualitative 'how's the raise going?' into something you can actually act on. This prompt produces both the tracker and the actions for the week."
prompt: |
  You are a fundraising operator helping me run a clean process. You know that fundraise momentum decays in days, not weeks, and that the founder's job during a raise is to manage a sales pipeline.

  Round details:
  Target: {{target_amount}} at {{target_terms}}
  Stage: {{round_stage}} (early conversations / mid-funnel / closing)
  Soft circles + commitments to date: {{soft_circles}}

  Investor list — for each investor, give me: name/firm, partner name, status, last touch date, what's needed next.

  {{investor_list}}

  Anything specific I'm worried about:
  {{concerns}}

  Do this:

  1. Build a clean tracker table organized by stage:
     - **Hot** (term sheet conversations / closing / committed)
     - **Active** (multiple meetings, real diligence in progress)
     - **Mid-funnel** (1-2 meetings, interest unclear)
     - **Top of funnel** (initial meeting only or scheduled)
     - **Stalled** (no response in 10+ days)
     - **Pass / dead** (with reason if known)

  2. For each investor, show: firm, partner, status, last touch, days since last touch, what's needed next, my confidence (high/med/low).

  3. **Stalled column action plan.** For every stalled investor, recommend: re-engage, let go, or formal close. Don't let stalled deals pile up.

  4. **The math.** Compare current soft circles + likely closes to round target. Tell me if I'm short, on track, or over-subscribed and what that means tactically (e.g., "you're 60% subscribed — time to push the actives, not add new top-of-funnel").

  5. **This week's top 3 actions.** Not a long list. The 3 things that move the round most this week.

  6. **Process risks.** Specific risks I should be tracking (e.g., "if Acme Capital doesn't engage by Friday, the round timing slips and other investors notice").

  Be direct. If a "soft circle" sounds soft to you, say so.
variables:
  - "{{target_amount}}"
  - "{{target_terms}}"
  - "{{round_stage}}"
  - "{{soft_circles}}"
  - "{{investor_list}}"
  - "{{concerns}}"
exampleInput: |
  target_amount: $2M
  target_terms: SAFE, $12M post-money cap
  round_stage: mid-funnel — pitching for 4 weeks
  soft_circles: $400k from existing angels confirmed; $250k verbally from one new fund
  investor_list:
    - Acme Capital — Sarah Chen, partner, met 2x, sent data room 5 days ago, no follow-up since
    - Northstar Ventures — David Park, met 1x, asked for cohort data, sent 3 days ago, said "this week"
    - SeedLabs — Priya Mehta, met 3x, in partner meeting Friday
    - Vertical SaaS Capital — Tom Lin, met 2x, asked for 3 customer references, references called this week, no response since
    - Foundry Fund — Maya Rodriguez, intro call, said "let's reconnect in 2 weeks", 11 days ago
    - GreenLight — Alex Kim, partner meeting last Thursday, no follow-up
    - Series One — first call yesterday, very engaged, asked for follow-up
    - Two angels confirmed at $100k each (already in soft circles)
    - Strategic-adjacent angel (former CRO at HubSpot) — 1 call, said yes verbally to $250k, signing this week
  concerns: I feel like the actives are slowing down and I don't know if it's normal or a problem
exampleOutput: |
  FUNDRAISE TRACKER — $2M target

  HOT (term sheet / committed)
  | Investor | Partner | Status | Last touch | Days | Confidence |
  |---|---|---|---|---|---|
  | 2 angels | — | Confirmed $100k each | Closed | — | High |
  | Strategic-adjacent angel | Ex-CRO HubSpot | Verbally yes $250k, signing this week | 3 days ago | 3 | High |

  Hot total: $450k confirmed/signing.

  ACTIVE (real engagement, in diligence)
  | Investor | Partner | Status | Last touch | Days | Next | Confidence |
  |---|---|---|---|---|---|---|
  | SeedLabs | Priya Mehta | Partner meeting Friday | 2 days ago | 2 | Their decision next Mon | High |
  | Series One | TBD | Engaged, asked for follow-up | 1 day ago | 1 | Send follow-up materials, schedule next | Med (too early) |
  | Vertical SaaS Capital | Tom Lin | Customer refs called, no response | 6 days ago | 6 | Re-engage by Wed | Med |

  MID-FUNNEL (1-2 meetings, interest unclear)
  | Investor | Partner | Status | Last touch | Days | Next | Confidence |
  |---|---|---|---|---|---|---|
  | Acme Capital | Sarah Chen | Sent data room | 5 days ago | 5 | Re-engage Mon | Med |
  | Northstar | David Park | Sent cohort data, said "this week" | 3 days ago | 3 | Wait until Fri, then re-engage | Med |
  | GreenLight | Alex Kim | Partner meeting last Thu, silence | 6 days ago | 6 | Re-engage Mon | Low |

  TOP OF FUNNEL
  | Foundry | Maya Rodriguez | "Reconnect in 2 weeks" | 11 days ago | 11 | Reach out tomorrow | Low |

  STALLED
  None over 10 days yet — but Foundry is at 11 days and trending stalled.

  PASS / DEAD
  None confirmed.

  STALLED COLUMN ACTION PLAN

  GreenLight is the most concerning. Partner meeting was last Thursday and silence since. Re-engage Monday with a specific question ("any feedback from the partnership we can address?"). If still no response by Wed, treat as soft pass and stop investing energy.

  Vertical SaaS Capital is borderline. References called this week — that's a strong signal — but no follow-up. Re-engage Wednesday. The pattern of asking for refs and going quiet usually means partner-level enthusiasm wasn't enough; they may be circling.

  Foundry: re-engage tomorrow with a "quick update on traction" hook. If no response in 5 days, deprioritize.

  THE MATH

  Hot: $450k confirmed/signing.
  High-confidence active: SeedLabs (~80% probability of $400-600k allocation if they're in) → expected $400k.
  Medium-confidence active + mid-funnel: 5 investors at 30-40% probability, average $300-400k allocation if any close → expected $400-500k.

  Honest reading: if SeedLabs and 2 of the 5 medium-confidence investors close, you're at $1.5-1.7M. That's short of $2M.

  This means: you need 1-2 more high-quality top-of-funnel meetings AND you need the actives to stop slipping. Both need attention. The instinct will be to add more top-of-funnel; the bigger leverage is to close out the actives faster.

  THIS WEEK'S TOP 3 ACTIONS

  1. Get the strategic-adjacent angel signed. $250k locked is real momentum and helps in conversations with Acme/SeedLabs ("we have $700k+ committed including [angel name]"). Don't let this drift past Friday.

  2. Re-engage Acme, GreenLight, and Vertical SaaS Capital on Monday. Same email pattern: short note, one new piece of traction data they didn't have, specific ask ("would a 20-minute call this week help move you forward, or should I take this off your plate?"). The ask matters — it forces yes/no.

  3. Use the SeedLabs partner meeting Friday as a forcing function for the rest of the field. Once SeedLabs is in or out, you can either name a lead in conversations with the others (compresses cycles) or pivot the messaging.

  PROCESS RISKS

  - You're 4 weeks into a raise that should ideally close in 6-8. Past 8 weeks, momentum decays sharply and "still raising" becomes a yellow flag for new investors.
  - Three of your mid-funnel investors are at 5-6 days since last touch. That's the danger zone — past 10 days, they're stalled. This week is the cleanup window.
  - You said the actives feel like they're slowing. They are. The cure isn't more meetings — it's faster closes on the warmest 2-3.
  - The "soft circle" of $250k from a new fund: how soft? If it's "we're interested, send us more," that's not a soft circle — that's mid-funnel. Recheck and adjust.
tips:
  - "Run this tracker every Monday, not weekly-when-you-remember. Drift is the enemy. Same time, same template, every week the round is open."
  - "10 days of silence is the danger threshold. Past that, an investor is either passing or you've fallen down their priority list. Either way, you need to know."
  - "Don't over-add to top-of-funnel mid-raise. Most rounds are won by closing the actives, not by adding more partial conversations."
  - "A 'soft circle' that hasn't seen the data room is not a soft circle — it's a polite indication of interest. Recheck definitions weekly."
  - "If you're past week 8 of an active raise and still well short of target, something specific is wrong (price, market timing, story). Diagnose explicitly rather than continuing to grind."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - seed-pitch-narrative
  - investor-objection-rebuttal
  - data-room-checklist
tags:
  - fundraising
  - pipeline
  - tracker
  - process
  - seed
---
