---
title: "Outline a complete board deck"
slug: board-deck-outline
function: executive
role: board-prep
description: "Generate a slide-by-slide outline for a quarterly board deck — with the headline, the supporting points, and the speaker note for each slide."
useCase: "Use this to scaffold a board deck before the design team or your operating partners build it out. Most board decks balloon to 60+ slides because no one had a structure to start from. This prompt produces a tight outline that gives every slide a job — and lets the deck stay under 30 slides without losing substance."
prompt: |
  You are a former CFO who has built more than 50 board decks. Outline a complete board deck for {{company_name}}'s {{meeting_type}} board meeting on {{meeting_date}}.

  Inputs:
  - Company and stage: {{company_name}}, {{stage}}
  - Meeting type and date: {{meeting_type}}, {{meeting_date}}
  - Period covered: {{period}}
  - Key narrative arc the CEO is telling: {{narrative_arc}}
  - Top 3 metrics that define the period: {{top_metrics}}
  - Major wins, misses, and decisions: {{wins_misses_decisions}}
  - Strategic discussions to advance during the meeting: {{strategic_discussions}}
  - Items requiring formal approval: {{approvals}}
  - Standard sections the board expects (financials, hiring, customer health, risks): {{standard_sections}}

  Produce a slide-by-slide outline. For each slide:
  - **Slide #:** number
  - **Section:** which part of the deck
  - **Headline:** the slide title — should state the takeaway, not the topic ("Healthcare segment NRR at 138%, well ahead of plan" — not "Customer Success Update")
  - **Body:** 2–4 bullet outline of what the slide contains
  - **Speaker note:** 1–2 sentences on what the presenter will say verbally that the slide does not say

  Sections, in order:

  ## 1. Cover & Agenda (2 slides)
  Title slide and agenda.

  ## 2. Executive Summary (1–2 slides)
  The takeaway slide. If a board member only reads one slide, this is it. Three to five bullets covering the period, the headline metrics, the strategic posture, and the asks.

  ## 3. Headline Metrics (3–4 slides)
  Top of the funnel: ARR, growth, NRR, gross margin, cash. Each slide is one metric or a tightly grouped set, with the headline stating the takeaway.

  ## 4. Strategic Discussions (3–6 slides per discussion)
  For each discussion in {{strategic_discussions}}: framing slide, supporting data slide(s), the question for the board.

  ## 5. Function Updates (1 slide each, only if not in pre-read)
  Tight summary per function. If function updates went in pre-read, replace with a single "function summary" slide.

  ## 6. Customer Voice (1–2 slides)
  One named win story; one churn or near-miss post-mortem. Real names, real numbers.

  ## 7. People (1–2 slides)
  Hires, departures, key open roles. Trends, not full org charts.

  ## 8. Financials & Cash (3–4 slides)
  Actuals vs. plan, full-year reforecast, scenario runway.

  ## 9. Risks (1 slide)
  Top 3–5 risks the board should know we are watching, with the early-warning signal for each.

  ## 10. Approvals (1 slide per item)
  Formal items.

  ## 11. Executive Session (1 slide)
  Placeholder, no content — board only.

  ## 12. Appendix
  Detail backup not for live presentation. Outline only.

  Constraints:
  - Total slides under 30 (excluding appendix). If your outline exceeds 30, cut.
  - Every slide headline must state the takeaway, not the topic.
  - No slide exists without a speaker note. If you cannot describe what the presenter will say verbally, the slide should be cut.
  - Strategic discussion slides should outnumber status slides 2-to-1.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{meeting_type}}"
  - "{{meeting_date}}"
  - "{{period}}"
  - "{{narrative_arc}}"
  - "{{top_metrics}}"
  - "{{wins_misses_decisions}}"
  - "{{strategic_discussions}}"
  - "{{approvals}}"
  - "{{standard_sections}}"
exampleInput: |
  company_name: Vantage Systems
  stage: Series B SaaS, post-Series-C, $31.6M ARR, 180 employees
  meeting_type: regular quarterly
  meeting_date: May 21, 2027
  period: Q1 2027
  narrative_arc: hit the number, slipped on AI module (now shipped April 30), closed SMB self-serve, landed Series C, healthcare segment compounding faster than modeled
  top_metrics: ARR $31.6M (105% of plan); Healthcare NRR 138% (vs. 124% blended); AI module GA shipped on date; cash runway 27 months
  wins_misses_decisions: Wins — Brookline $1.2M close; Series C $40M; AI module GA on April 30; Healthcare NRR ahead of plan. Misses — AI module slipped from March to April; lost Greentree renewal ($400K) to parent-co consolidation. Decisions — closed SMB self-serve and reassigned 12 of 14 affected.
  strategic_discussions: 1) AI compliance module commercial momentum — what's next; 2) 2028 plan shape (healthcare aggression vs. breakeven discipline); 3) M&A scouting in healthcare-adjacent analytics — start now or wait
  approvals: ratify Series C close terms; approve CRO equity grant; ratify CPO promotion (Sandeep)
  standard_sections: financials, hiring, customer health, risks
exampleOutput: |
  ## Vantage Systems — Q1 2027 Board Deck Outline

  ### 1. Cover & Agenda
  **Slide 1 — Cover**
  - Headline: "Vantage Systems — Q1 2027 Board Meeting, May 21"
  - Body: Logo, date, "Pre-read distributed May 16"
  - Speaker note: Welcome, time-box reminder, intro of any board guests.

  **Slide 2 — Agenda**
  - Headline: "Three discussions, three approvals, one ask"
  - Body: Time-boxed agenda
  - Speaker note: Quick walkthrough; flag the executive session at the end.

  ### 2. Executive Summary
  **Slide 3 — Q1 in one slide**
  - Headline: "Hit ARR plan; shipped the AI module on date; closed Series C; healthcare compounding faster than modeled"
  - Body:
    - ARR $31.6M, 105% of plan
    - AI compliance module GA shipped April 30 — 9 paying users in first week
    - Series C closed at $40M, Northgate lead
    - Healthcare segment NRR at 138%, well above 124% blended
    - One miss: lost Greentree renewal ($400K) to parent-co consolidation
  - Speaker note: This is the slide if you only read one. Walk through narratively in 90 seconds.

  ### 3. Headline Metrics
  **Slide 4 — ARR & growth**
  - Headline: "ARR $31.6M, 105% of plan, growth re-accelerating into Q2"
  - Body: ARR trend chart Q1 2026–Q1 2027; YoY growth; Q1 actuals vs. plan
  - Speaker note: Note the Q4 2026 dip from the AI slip; recovery is visible.

  **Slide 5 — Net revenue retention**
  - Headline: "Healthcare NRR at 138%, blended at 128% — segment mix shifting"
  - Body: NRR by segment (healthcare, mid-market general, enterprise general); cohort heatmap
  - Speaker note: This is the metric that surprised me most this quarter — material implications for 2028 plan.

  **Slide 6 — Cash & runway**
  - Headline: "27 months of runway post-Series C; default-alive trajectory intact"
  - Body: Monthly burn; runway under three scenarios; cash on hand
  - Speaker note: Flag that runway is calculated at current burn — Q2 burn will tick up with hiring, but not through plan.

  ### 4. Strategic Discussion 1: AI Compliance Module Commercial Momentum
  **Slide 7 — The bet, the ship, the question**
  - Headline: "AI module shipped on date — the question is conversion to ARR"
  - Body: Timeline of slip and recovery; 9 paying users in first week; commercial conversion plan for Q2
  - Speaker note: I want to spend 50 minutes here. Set up the question: how aggressive should we be on the module-led pricing and bundling decision?

  **Slide 8 — Customer signal data**
  - Headline: "Top 50 healthcare accounts: 31 expressed module interest, 9 already converted"
  - Body: Funnel from interest → demo → trial → paid; expected curve through end Q2
  - Speaker note: CPO walks through what's working and what's slowing the conversion curve.

  **Slide 9 — The pricing question**
  - Headline: "Should the module be premium-tier paid attach or embedded in healthcare tier?"
  - Body: Two pricing scenarios with revenue impact and adoption assumptions
  - Speaker note: This is a decision the board can help shape. We have a recommendation; we want their pressure-test.

  ### 5. Strategic Discussion 2: 2028 Plan Shape
  **Slide 10 — The choice**
  - Headline: "Healthcare aggression vs. breakeven discipline — pick the right point on the curve"
  - Body: Three scenario shapes: hold (breakeven Q2 2028), push (breakeven Q4 2028), accelerate (breakeven 2029); ARR and burn implications
  - Speaker note: Frame the trade-off; reference the segment NRR data; ask each board member's gut on the right scenario.

  **Slide 11 — What changes by scenario**
  - Headline: "Hiring, GTM, and product mix shift meaningfully across scenarios"
  - Body: Side-by-side of hires, GTM spend, product roadmap commitments
  - Speaker note: Walk the differences slowly; this is the sub-decision that matters.

  ### 6. Strategic Discussion 3: M&A Scouting
  **Slide 12 — The CEO's ask**
  - Headline: "Begin structured M&A scouting in healthcare-adjacent analytics now, or wait one quarter?"
  - Body: Why now arguments; why wait arguments; what scouting actually means at this stage
  - Speaker note: Open question to the board; aim is not consensus today, just to hear each member's view.

  **Slide 13 — The landscape (high-level)**
  - Headline: "5 categories of adjacent assets, ranging from $5M to $50M ARR"
  - Body: Anonymized landscape; not a target list, just shape of the space
  - Speaker note: Names redacted intentionally; will share targets with the M&A subcommittee if formed.

  ### 7. Function Summary
  **Slide 14 — Function status (pre-read recap)**
  - Headline: "Function pre-reads: 4 green, 1 yellow (marketing leadership transition)"
  - Body: One-line status per function; flag where deeper discussion is warranted
  - Speaker note: 5 minutes max; full detail in pre-read.

  ### 8. Customer Voice
  **Slide 15 — The win**
  - Headline: "Brookline Health: $1.2M, 5-year, won on compliance"
  - Body: Customer profile; deal arc; CIO quote; expansion runway
  - Speaker note: VP CS tells the story in 3 minutes — including what we almost got wrong.

  **Slide 16 — The loss**
  - Headline: "Greentree Medical: $400K renewal lost to parent-co procurement consolidation"
  - Body: Timeline; what we tried; what we learned about acquired-customer risk
  - Speaker note: We saw this 60 days out and had no good play. This is a learning, not a panic.

  ### 9. People
  **Slide 17 — Hiring & departures**
  - Headline: "Net +5 in Q1; 2 critical roles still open (CMO, healthcare-specialist AE Lead)"
  - Body: Hires by function; departures; open roles with timeline
  - Speaker note: Flag the CMO search status; ask for board introductions.

  ### 10. Financials
  **Slide 18 — Q1 actuals vs. plan**
  - Headline: "Revenue 105% of plan, gross margin 73% (target 75%), opex on plan"
  - Body: P&L summary table
  - Speaker note: Margin gap is the AI module ramp; will recover through Q2.

  **Slide 19 — Full-year reforecast**
  - Headline: "Reforecast: $48M ARR (vs. $42M plan), breakeven Q4 still in reach"
  - Body: Reforecast table; deltas to plan; assumption changes
  - Speaker note: Conservative reforecast; the upside case is more aggressive.

  **Slide 20 — Cash scenarios**
  - Headline: "Three scenarios — all default-alive through end of 2028"
  - Body: Hold, push, accelerate scenarios with cash trajectories
  - Speaker note: Maps to the 2028 plan-shape discussion.

  ### 11. Risks
  **Slide 21 — Top risks we are watching**
  - Headline: "Five risks, each with the early-warning signal"
  - Body:
    - Helio enterprise climb (signal: their hiring page)
    - Healthcare compliance changes (signal: HHS guidance)
    - Customer-base M&A (signal: deal news in top-50 accounts)
    - Engineering retention (signal: monthly retention scorecard)
    - AI module commercial soft-landing (signal: Q2 paying-user trajectory)
  - Speaker note: Walk through quickly; flag any board has heard signal on.

  ### 12. Approvals
  **Slide 22 — Series C ratification**
  - Headline: "Ratify Series C close terms"
  - Body: Round size, lead, terms summary, board representation changes
  - Speaker note: Formal vote.

  **Slide 23 — CRO equity grant**
  - Headline: "Approve equity grant: Mateo Ferreira, CRO"
  - Body: Grant amount, vesting, comparator data
  - Speaker note: Compensation committee recommendation; formal vote.

  **Slide 24 — CPO ratification**
  - Headline: "Ratify Sandeep Kumar's promotion to CPO"
  - Body: Scope, comp adjustment, board notification
  - Speaker note: Already announced internally April 1; formal ratification.

  ### 13. Executive Session
  **Slide 25 — Executive Session**
  - Headline: "Executive Session — Board Only"
  - Body: (Blank)
  - Speaker note: Management departs; independent chair leads.

  ### 14. Appendix
  **Slide 26+ — Appendix**
  - Detailed financials by month
  - Cohort retention tables
  - Sales pipeline by segment
  - Engineering velocity metrics
  - Customer health scorecard
  - Hiring funnel data

  Total: 25 main slides + appendix. Within the 30-slide cap.
tips:
  - "Headlines must state the takeaway, not the topic. 'Customer Update' is wrong; 'Healthcare NRR at 138%' is right."
  - "Strategic discussion slides should outnumber status slides 2-to-1. Boards have a dashboard for status."
  - "If you can't write a speaker note for a slide, the slide should be cut. Slides without spoken context just get screenshot."
  - "Build the appendix with detail backup — boards will ask, and a clean appendix saves an unprepared moment."
  - "Send the deck 72 hours before the meeting, not 12 hours. The deck that arrives Sunday for a Wednesday meeting is the one that gets read."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - board-meeting-agenda
  - board-update-narrative
  - board-q-and-a-prep
  - investor-update-monthly
tags:
  - board
  - deck
  - presentation
  - meeting-prep
  - leadership
---
