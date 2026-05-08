---
title: "Draft a one-page annual strategic plan"
slug: annual-strategic-plan-outline
function: executive
role: strategy
description: "Turn raw inputs about the business into a sharp, one-page annual strategic plan that the leadership team can actually rally around."
useCase: "Use this at the start of the planning cycle when you have a draft of priorities, financial targets, and constraints but need a forcing function to compress it into a single page. Long strategy decks rarely get re-read; a one-pager does. This prompt produces something a CEO can show the board on Monday and the company on Friday."
prompt: |
  You are a former McKinsey partner turned operating CEO. Draft a one-page annual strategic plan for {{company_name}} for {{plan_year}}.

  Inputs:
  - Company stage and size: {{stage_and_size}}
  - Last year's revenue and growth rate: {{last_year_results}}
  - Target revenue and growth for {{plan_year}}: {{target_results}}
  - Top 3 things that worked last year: {{what_worked}}
  - Top 3 things that did not work: {{what_did_not_work}}
  - Market or competitive shifts to plan against: {{market_shifts}}
  - Known constraints (cash, headcount, tech debt): {{constraints}}
  - The CEO's gut on the single most important bet: {{ceo_bet}}

  Produce a one-page plan with exactly these sections, in this order:

  ## Where We Are
  Three sentences. Honest assessment of the starting position — not a victory lap, not a doom narrative.

  ## Where We Are Going
  One sentence stating the destination for {{plan_year}}. Concrete, measurable, and ambitious enough to require trade-offs.

  ## The Three Bets
  Exactly three strategic bets for the year. Each bet has:
  - A name (3–5 words)
  - One sentence on what it is
  - One sentence on why it matters now
  - The single owner accountable for it

  ## What We Are Not Doing
  Three to five things we are explicitly de-prioritizing. This is the section most plans skip and the one that creates the most clarity.

  ## How We Will Know It Worked
  Five metrics, with the {{plan_year}} target for each. Mix of leading and lagging.

  ## The Risks We Are Watching
  Three risks, each with the early-warning signal we will track.

  Constraints:
  - The full output fits on a single printed page. Be ruthless.
  - No buzzwords. No "world-class." No "best-in-class."
  - Every sentence must survive the question "would I bet money on this?"
variables:
  - "{{company_name}}"
  - "{{plan_year}}"
  - "{{stage_and_size}}"
  - "{{last_year_results}}"
  - "{{target_results}}"
  - "{{what_worked}}"
  - "{{what_did_not_work}}"
  - "{{market_shifts}}"
  - "{{constraints}}"
  - "{{ceo_bet}}"
exampleInput: |
  company_name: Vantage Systems
  plan_year: 2027
  stage_and_size: Series B SaaS, 180 employees, $24M ARR
  last_year_results: $24M ARR, grew 38%, missed plan of $28M
  target_results: $42M ARR, 75% growth, breakeven by Q4
  what_worked: enterprise upmarket motion, partner channel for healthcare vertical, customer expansion (NRR 124%)
  what_did_not_work: SMB self-serve experiment burned $4M with no traction, two failed exec hires, AI roadmap slipped two quarters
  market_shifts: two competitors raised mega-rounds; healthcare AI compliance rules tightening; macro buyer scrutiny
  constraints: $18M cash, board wants breakeven plan, eng capacity flat YoY
  ceo_bet: double down on healthcare vertical and ship the AI compliance module
exampleOutput: |
  # Vantage Systems — 2027 Plan

  ## Where We Are
  We hit $24M ARR on 38% growth — short of plan, but the enterprise and healthcare motions are working. SMB self-serve was a costly distraction and the AI roadmap is behind. We have $18M of cash and a board that expects breakeven by year-end.

  ## Where We Are Going
  $42M ARR and breakeven in Q4 2027, won by becoming the default analytics platform for mid-market healthcare.

  ## The Three Bets

  **Bet 1: Own Mid-Market Healthcare**
  Concentrate sales, marketing, and partnerships on healthcare ($5M–$50M revenue providers and payers). It matters now because two competitors just raised mega-rounds and will fragment the general market — depth wins where breadth cannot.
  *Owner: CRO*

  **Bet 2: Ship the AI Compliance Module**
  Deliver the HIPAA/HITRUST-aware AI module by end of Q2. It matters now because tightening compliance rules turn a feature gap into a buying blocker for our exact ICP.
  *Owner: CPO*

  **Bet 3: Get to Default-Alive**
  Drive to breakeven by Q4 through gross margin expansion and disciplined hiring (net +18 heads, not +60). It matters now because the next round, if we choose to raise, should be from strength, not need.
  *Owner: CFO*

  ## What We Are Not Doing
  - No further investment in SMB self-serve. The experiment is closed.
  - No new vertical expansion (financial services, retail) until healthcare is undisputed.
  - No platform/marketplace work in 2027.
  - No more than two new exec hires this year.
  - No international expansion.

  ## How We Will Know It Worked
  - ARR: $42M (from $24M)
  - Healthcare share of new ARR: 60%+ (from 35%)
  - Gross margin: 78% (from 71%)
  - NRR: 130% (from 124%)
  - Cash burn: breakeven by Q4

  ## The Risks We Are Watching
  - Competitor mega-round fallout — signal: pricing pressure on renewals over $100K
  - AI module slippage — signal: any miss on the April internal beta milestone
  - Healthcare compliance rule changes — signal: HHS guidance updates, tracked monthly
tips:
  - "Run this prompt twice — once with the CEO's draft inputs, once with the COO's. Compare. The differences are where the leadership team isn't actually aligned."
  - "The 'What We Are Not Doing' section is the highest-leverage one. If yours is empty, your plan is a wish list, not a strategy."
  - "Pressure-test by asking Claude to argue the opposite case for each of the three bets. If a bet survives the counter-argument, it is real."
  - "Avoid putting more than three bets on the page. Five bets means zero focus."
  - "Date the document and version it. The plan you wrote in October is not the plan the team will be executing in March."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - okr-framework-company
  - swot-analysis
  - board-update-narrative
  - competitive-analysis-strategic
tags:
  - strategy
  - annual-planning
  - ceo
  - leadership
  - one-pager
---
