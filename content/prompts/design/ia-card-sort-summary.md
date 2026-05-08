---
title: "Synthesize card-sort results into IA recommendations"
slug: ia-card-sort-summary
function: design
role: ux-design
description: "Turn raw card-sort data (open or closed) into a prioritized set of information architecture recommendations with confidence levels and the trade-offs you're choosing between."
useCase: "Use this after running a card sort on Optimal Workshop, Maze, or a paper exercise. The raw similarity matrices and dendrograms are useless to PMs — this prompt produces a write-up that drives an IA decision instead of triggering more analysis. Best for nav restructures, settings reorgs, and admin console redesigns."
prompt: |
  You are a senior UX researcher synthesizing card-sort findings into actionable IA recommendations. Read the data below and produce a recommendation memo, not a research report.

  Context:
  - Product: {{product}}
  - Sort type (open/closed/hybrid): {{sort_type}}
  - Number of participants: {{participant_count}}
  - Participant profile: {{participant_profile}}
  - Cards used: {{cards}}
  - Top groupings observed (with agreement %): {{groupings}}
  - Outlier behaviors or notable disagreements: {{outliers}}
  - Current IA being replaced: {{current_ia}}

  Produce a memo with these sections:

  1. Recommendation (3 sentences max). What IA structure to ship.
  2. Confidence (high / medium / low) with one sentence on why.
  3. Top-level categories. Name each, list child items, and explain the reasoning in one line per category.
  4. Trade-offs. For every meaningful disagreement in the data, name the two options and which one you're choosing and why.
  5. What we'd test next. One concrete follow-up (tree test, first-click test, live A/B).

  Rules:
  - Name categories the way participants named them, unless their language is clearly broken — then propose a tighter label and explain.
  - If agreement was below 60% on a grouping, say so. Don't fake conviction.
  - Reject the temptation to invent a "More" or "Other" bucket. Force a decision.

  Output: the memo, structured exactly as above.
variables:
  - "{{product}}"
  - "{{sort_type}}"
  - "{{participant_count}}"
  - "{{participant_profile}}"
  - "{{cards}}"
  - "{{groupings}}"
  - "{{outliers}}"
  - "{{current_ia}}"
exampleInput: |
  product: Northstar Robotics fleet management console (operator-facing)
  sort_type: open
  participant_count: 14
  participant_profile: Fleet operators, 2–8 years experience, managing 20–200 robots
  cards: 32 cards covering robot status, alerts, maintenance schedules, route planning, user roles, billing, integrations, audit logs
  groupings: "Live operations" (88%), "Maintenance" (76%), "Setup & access" (71%), "Reports" (54% — split between live ops and standalone)
  outliers: 4 of 14 grouped audit logs with billing rather than admin; 3 wanted "Alerts" as its own top-level instead of nested under live ops
  current_ia: Flat side nav with 11 items, no grouping
exampleOutput: |
  1. Recommendation
  Restructure the side nav into four top-level groups: Live Operations, Maintenance, Reports, and Admin. Promote Alerts to a persistent top-bar element rather than a nav item. Keep audit logs under Admin despite some pull toward Billing.

  2. Confidence: Medium-high. Three of four groups had >70% agreement; Reports placement is the soft spot.

  3. Top-level categories
  - Live Operations — robot map, current jobs, alerts panel, manual overrides. Operators consistently cluster anything "happening right now" together.
  - Maintenance — schedules, work orders, parts inventory, robot health history. Strong (76%) and clean.
  - Reports — utilization, downtime, SLA reporting. Lower confidence (54%); some operators wanted these inline with Live Ops. Splitting them out keeps Live Ops focused on real-time work.
  - Admin — users, roles, integrations, billing, audit logs. The catch-all, but participants used the word "settings" or "admin" without prompting.

  4. Trade-offs
  - Reports as standalone vs. nested under Live Ops. Chose standalone because the operators who wanted it inline were the most senior (8+ years) and worked across multiple fleets — they're the minority case. Standalone is easier for newer operators to find.
  - Audit logs under Admin vs. Billing. Chose Admin. The 4 participants who grouped logs with billing all worked at companies where finance audits robot usage — that's a workflow problem, not an IA one. Add cross-links instead.
  - Alerts as nav item vs. persistent UI. Promoting to top-bar because 3 participants surfaced this unprompted and alerts are time-critical — burying them one nav-click deep is wrong.

  5. What we'd test next
  Tree test on the proposed IA with 30+ operators, focused on three tasks: "find the maintenance schedule for robot R-204," "see this month's downtime by site," and "add a new operator with read-only access." Pass criterion: 80% direct success on each.
tips:
  - "Resist the urge to invent a 5th category for the leftovers. If 3 cards don't fit, they belong cross-linked, not in their own bucket."
  - "Always state confidence. PMs will treat the recommendation as gospel unless you flag the soft spots."
  - "If your participant count is under 10 for an open sort, call it 'directional' — the math gets noisy below that."
  - "Tree test the recommendation before shipping. Card sort tells you what makes sense to group; tree test tells you whether people can find things."
  - "When an outlier maps to a real persona segment (senior vs. junior, finance-adjacent vs. ops), call it out explicitly — that's how you avoid optimizing for the average user who doesn't exist."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - usability-test-rewrite
  - ux-research-discussion-guide
  - heuristic-evaluation
tags:
  - ux-research
  - information-architecture
  - card-sort
  - synthesis
  - navigation
---
