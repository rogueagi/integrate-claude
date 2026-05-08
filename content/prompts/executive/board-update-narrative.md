---
title: "Write the narrative section of a board update"
slug: board-update-narrative
function: executive
role: board-prep
description: "Draft the CEO letter that opens a board update — the 1–2 page narrative that frames the quarter and tells the board what the data is actually saying."
useCase: "Use this when you're putting together a board pre-read and need the narrative section that goes at the front. The metrics dashboard tells the board what happened; the narrative tells them what to think about it. A good CEO letter shapes the meeting before it starts."
prompt: |
  You are a former operating CEO who now writes board narratives for portfolio companies. Draft the CEO letter section of {{company_name}}'s board update for {{period}}.

  Inputs:
  - Company and stage: {{company_name}}, {{stage}}
  - Period covered: {{period}}
  - The one-line story of the quarter: {{period_story}}
  - Three biggest wins: {{wins}}
  - Two biggest misses or disappointments: {{misses}}
  - The metric that surprised you most (positively or negatively): {{surprising_metric}}
  - The single hardest decision you made this quarter: {{hardest_decision}}
  - The two questions you most want the board to engage with: {{board_questions}}
  - The honest concern you'd share with a single board member at coffee: {{honest_concern}}
  - Length target: {{length}} (1 page, 2 pages, or 3 pages)

  Write a CEO letter that:

  ## Opens With A Specific Moment
  A scene, a number, or a customer quote — not "I'm pleased to share the results of Q1." Earn the board's attention by starting with something concrete.

  ## States The Story Of The Quarter
  In one or two sentences, what this quarter was. The board has a dashboard for the data; the letter gives them the frame.

  ## Walks Through Wins Honestly
  Two or three paragraphs covering {{wins}}. Numbers in context. Names of customers and people who delivered them. No "incredible team."

  ## Names The Misses Directly
  One or two paragraphs covering {{misses}}. State what happened, what we now know, what changes. Boards trust CEOs who name misses before being asked about them.

  ## Reflects On The Hardest Decision
  Devote a section to {{hardest_decision}}. Not a defense — a reflection. What was hard about it, what tipped it, what you'd want the board to know.

  ## Surfaces The Surprising Metric
  Spend two paragraphs on {{surprising_metric}}. The metric that surprised the CEO is often the most signal-rich part of the quarter; boards should know what's keeping leadership awake.

  ## Frames The Two Board Questions
  Lay out the two strategic questions in {{board_questions}} — what they are, what would tip them, and what kind of input the CEO is looking for at the meeting. This frames the meeting before it starts.

  ## The Honest Concern
  One paragraph on {{honest_concern}}. The willingness to share a real concern in writing is what builds the kind of board relationship where the meeting is a working session, not a performance.

  ## Closes With What's Next
  Two or three sentences. The single thing the next quarter is about. What the team is committing to.

  Style:
  - First-person singular. The CEO is writing, not the company.
  - Sentences a person would read in a quiet office at 7am, not a press release.
  - Specific over abstract. People, customers, numbers.
  - No "we are excited," "the journey continues," "amazing work by the team."
  - Match {{length}} as the target.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{period}}"
  - "{{period_story}}"
  - "{{wins}}"
  - "{{misses}}"
  - "{{surprising_metric}}"
  - "{{hardest_decision}}"
  - "{{board_questions}}"
  - "{{honest_concern}}"
  - "{{length}}"
exampleInput: |
  company_name: Vantage Systems
  stage: Series B SaaS, post-Series-C, $30M ARR, 180 employees
  period: Q1 2027
  period_story: hit the number, slipped on a key product milestone, made the call to close SMB self-serve
  wins: closed Brookline Health ($1.2M, largest deal ever); NRR hit 128%; Series C closed at strong terms
  misses: AI compliance module GA slipped from March to April; lost two key competitive deals to Helio
  surprising_metric: healthcare segment NRR came in at 138% (vs. 124% company-wide), well above modeled assumption
  hardest_decision: closing SMB self-serve and reassigning 12 people; affected 14 with three transitioned out
  board_questions: 1) should we begin active M&A scouting in healthcare-adjacent analytics in the next 90 days; 2) how aggressive should the 2028 plan be on healthcare expansion vs. holding for breakeven discipline
  honest_concern: I am worried the AI module GA in April lands but lands soft — that we ship it on time and customers don't immediately turn it into commercial momentum
  length: 2 pages
exampleOutput: |
  Board,

  On a Friday afternoon at the end of March, Brookline Health's CIO sent me a one-line email: "Contract is signed — you were the only company that took the compliance question seriously." It was the largest deal in the company's history, the validation of an 18-month strategic bet, and a reminder of exactly what we are good at when we stay focused.

  Q1 was a quarter of three things: we hit the number, we slipped on the milestone that matters most, and I made a hard call I had been putting off.

  **The wins.** We closed Q1 at $30.2M ARR, $200K above plan. Brookline is the headline, but the more durable story is healthcare NRR — which I'll come back to. We also closed the Series C at terms I'm proud of: $40M, Northgate leading, existing investors participating in size, valuation at a level that gives us room without setting an unrealistic bar for the next round. Sandeep's data-warehouse-native release shipped ahead of plan and was the technical reason we passed Brookline's bar. Priya's healthcare CS pod, which we hadn't even formally created yet at the start of the quarter, drove the 138% segment NRR I want to discuss in detail at the meeting.

  **The misses.** Two real ones. The AI compliance module slipped from a March GA to an April GA — a three-week slip we now have a clean read on. The cause was scope creep on the healthcare audit-trail feature plus a single critical-path engineering hire who joined six weeks late. Both are addressed: scope is locked, hire is in seat, GA is committed for April 30. The second miss: we lost two competitive deals to Helio in mid-market healthcare adjacencies. The post-mortems are clear — both were lost on speed-of-implementation, not on capability. We have an addressable response, and CRO will walk through it at the meeting.

  **The hardest decision.** I closed the SMB self-serve product line in March. Eighteen months, $4M, fourteen colleagues affected — nine reassigned to healthcare and AI module work, three transitioned out with three months of severance and active references, two voluntarily took roles at portfolio companies of one of our investors. The decision was not financial — the carrying cost was real but bearable. The decision was honest. Six pricing tests in, free-to-paid was at 0.4% against a 3%+ floor. The expensive thing was not the experiment; it was the months I spent telling myself one more test would unlock it. I should have made the call two quarters earlier. I won't do that again.

  **The metric that surprised me.** Healthcare segment NRR came in at 138%, against a modeled 124%. That gap matters. It tells us that when we land a healthcare customer, we are expanding inside that account at a meaningfully higher rate than our company-wide assumption. It is the strongest single piece of evidence we have that the vertical strategy is not just working but compounding. The implication for 2028 — and for the M&A question I'm raising below — is significant. We should plan as if 138% is the right number for healthcare and 115–120% is the right blended company number, with the segment mix shifting toward healthcare. CFO and I have a memo on this in the pre-read.

  **The two questions for the meeting.** First: should we begin a structured M&A scouting program in healthcare-adjacent analytics in the next 90 days? The Series C close, the operational state of the company, and the segment NRR data all push in the same direction. I have an open mind on this and want to hear each of your views. Second: how aggressive should 2028 be on healthcare expansion versus holding the breakeven discipline we committed to last year? My current thinking is somewhere in the middle — push healthcare hard, hold the rest flat — but I want to test that against the room.

  **The honest concern.** My worry going into Q2 is not whether we ship the AI module on April 30. We will. My worry is whether we ship it on April 30 and it lands soft — that the commercial momentum we have been forecasting takes a quarter longer to convert because customers need time to validate, procurement cycles re-engage, and our sales motion is a beat slow on activating the module as a wedge. The mitigation is in motion: the top 50 healthcare accounts have CSM-led module readiness conversations starting next week, and we are sequencing the GA with three named launch customers who have already committed to public references. But I want the board to know that the module's hard part may not be shipping it. It may be turning it into ARR.

  **What's next.** Q2 is one thing: ship the AI compliance module by April 30 and have at least 18 paying healthcare customers using it in production by quarter end. Everything else flows from that. We will see you on May 21.

  — Lila
tips:
  - "Open with a specific moment. 'I'm pleased to share' is the worst possible opening because boards skip it."
  - "Name misses before the board does. Trust is built in the section where you describe what didn't work."
  - "The 'hardest decision' section is the highest-leverage one. Boards remember CEOs who reflect, not CEOs who report."
  - "Send the letter 72 hours before the meeting. The board reads on Sunday night for a Wednesday meeting."
  - "Re-read your last four letters together. The compounding narrative is more visible than any single one — and it tells you whether the company is actually moving."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - board-meeting-agenda
  - board-deck-outline
  - investor-update-monthly
  - board-q-and-a-prep
tags:
  - board
  - ceo-letter
  - narrative
  - investor-comms
  - leadership
---
