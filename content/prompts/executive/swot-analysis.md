---
title: "Run a structured SWOT analysis with strategic recommendations"
slug: swot-analysis
function: executive
role: strategy
description: "Generate a SWOT that goes beyond the four-box cliché — with prioritization, second-order implications, and concrete recommendations the leadership team can act on."
useCase: "Use this when the leadership team needs a fast strategic temperature check before a planning offsite, a board meeting, or a major decision. Most SWOTs end up as wallpaper. This prompt produces one that actually drives a discussion, by forcing each item to be specific, prioritized, and connected to a recommended action."
prompt: |
  You are a strategy advisor who runs SWOTs only when they will actually be used. Produce a structured SWOT analysis for {{company_name}}.

  Inputs:
  - Company and stage: {{company_name}}, {{stage}}
  - Current focus and offering: {{current_focus}}
  - Recent results — what's hit, what's missed: {{recent_results}}
  - Top three competitors: {{competitors}}
  - Key macro or market shifts: {{market_shifts}}
  - The decision or planning context this SWOT is feeding into: {{context}}

  Produce a SWOT in the following structure. Each item must be specific, not generic.

  ## Strengths (4–5)
  Internal advantages that are real and durable. For each:
  - Stated in one sharp sentence
  - **Evidence:** the measurable proof point
  - **Sustainability:** marked as **structural**, **earned**, or **fading**

  ## Weaknesses (4–5)
  Internal limitations that are costing us today. Same format. Honest.

  ## Opportunities (4–5)
  External market shifts we could exploit. Same format, with an additional **Window:** field — open now, opening, or closing.

  ## Threats (3–4)
  External shifts that could damage us. Same format, with a **Time horizon** — quarters, not years.

  ## The Three Pairings That Matter
  Pick the three most consequential intersections from the SWOT. For each:
  - **The pairing:** e.g., "Our enterprise customer base (Strength) + healthcare compliance shift (Opportunity)"
  - **The implication:** what this combination makes possible or threatens
  - **The action:** the move it suggests

  ## What This SWOT Is Telling Us
  One paragraph. The strategic posture this SWOT implies — defensive, expansive, repositioning, etc. — and why.

  ## Three Recommended Actions
  Concrete moves for the next 90 days, derived from the SWOT, in priority order. Each action has an owner and a measurable outcome.

  Constraints:
  - Ban "great team," "strong brand," and "growing market" unless backed by a number.
  - Force pairings — the value of a SWOT comes from the intersections, not the four boxes in isolation.
  - Take a position in the recommendations.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{current_focus}}"
  - "{{recent_results}}"
  - "{{competitors}}"
  - "{{market_shifts}}"
  - "{{context}}"
exampleInput: |
  company_name: Vantage Systems
  stage: Series B SaaS, $24M ARR, 180 employees
  current_focus: analytics platform for mid-market healthcare
  recent_results: 38% growth (missed plan of 65%); NRR 124%; AI roadmap slipped two quarters; healthcare logos accelerating
  competitors: Helio (well-funded PLG), Analytix Pro (incumbent, broad), Pulseboard (smaller, marketing-attribution)
  market_shifts: HIPAA AI guidance tightening; mid-market healthcare M&A wave; PLG buyer fatigue setting in
  context: setting 2027 strategic priorities; deciding whether to double down on healthcare or stay horizontal
exampleOutput: |
  ## Strengths
  1. **Healthcare vertical depth.** 41 healthcare logos and a $400K average ACV, with the highest NRR (138%) of any segment.
     - Evidence: healthcare share of new ARR rose from 18% to 35% in 18 months.
     - Sustainability: structural — built on integrations and compliance work that take years to replicate.

  2. **Net revenue retention of 124% across the book.**
     - Evidence: company-wide NRR; expansion ratio 1.4x.
     - Sustainability: earned — depends on continued product investment.

  3. **Onboarding and CS motion.**
     - Evidence: time-to-value of 4.2 weeks vs. industry typical of 9+; CSAT on onboarding 4.7/5.
     - Sustainability: structural — operational muscle, hard to copy quickly.

  4. **Profitable enterprise unit economics.**
     - Evidence: enterprise tier 78% gross margin, 0.9 CAC payback ratio.
     - Sustainability: earned — requires we don't break it with discounting.

  ## Weaknesses
  1. **AI module roadmap behind.**
     - Evidence: GA slipped from Q4 last year to Q2 this year; competitors have shipped equivalents.
     - Sustainability of weakness: fading — Q2 GA closes the gap if hit.

  2. **SMB self-serve experiment cost $4M with no traction.**
     - Evidence: 0.4% conversion from free to paid; sub-$500 average ACV.
     - Sustainability: not yet decided to kill; $400K+/month in ongoing carrying cost.

  3. **Two failed exec hires in last 12 months.**
     - Evidence: VP Marketing and VP Product Marketing both exited inside 9 months.
     - Sustainability: cultural pattern; needs explicit attention to break.

  4. **Engineering capacity is flat year-over-year.**
     - Evidence: headcount unchanged; roadmap commitments unchanged.
     - Sustainability: structural for at least 12 months given cash plan.

  ## Opportunities
  1. **HIPAA AI compliance tightening.**
     - Evidence: HHS guidance updates; healthcare buyer urgency rising.
     - Window: open now, narrowing — first credible product wins the category.

  2. **Mid-market healthcare M&A wave.**
     - Evidence: 14 mid-market healthcare M&A announcements in last 6 months.
     - Window: opening — consolidation creates platform-replacement moments.

  3. **PLG buyer fatigue.**
     - Evidence: customer interviews report "tool sprawl" frustration; consolidation buying showing up.
     - Window: opening — favors platform plays over point solutions.

  4. **Helio's stretched valuation creating pressure to climb upmarket.**
     - Evidence: Helio's hires, cuts, and recent moves — they will eventually invade enterprise on a fixed timeline.
     - Window: 12–18 months of relative quiet before they show up directly.

  ## Threats
  1. **Helio launches warehouse-native enterprise tier.**
     - Evidence: Series C size, ex-HubSpot VP Sales hire.
     - Time horizon: 4–6 quarters.

  2. **Healthcare compliance changes that we cannot keep up with.**
     - Evidence: HHS pace of guidance; engineering capacity flat.
     - Time horizon: 2–3 quarters.

  3. **A consolidation deal where one of our top healthcare customers gets acquired by a bigger player on a competing platform.**
     - Evidence: M&A activity in the customer base.
     - Time horizon: 1–4 quarters.

  ## The Three Pairings That Matter
  1. **Healthcare depth (S) × HIPAA AI guidance (O).** This is the single most important pairing in the company today. The compliance shift turns our integration work into a moat. *Action: ship the AI compliance module on schedule and brand the company around it for the year.*
  2. **Engineering capacity flat (W) × Helio's enterprise climb (T).** We will not out-build Helio at parity capacity; we have to out-focus them. *Action: kill SMB self-serve, redirect the freed engineering and design time entirely to healthcare and AI compliance.*
  3. **NRR 124% (S) × PLG buyer fatigue (O).** Our existing customers are the cheapest acquisition channel for ARR; the market is shifting toward consolidation. *Action: lead with expansion offers and bundled tiering; budget at least 30% of revenue plan from expansion.*

  ## What This SWOT Is Telling Us
  Vantage is at the moment where general-purpose ambition becomes a liability. The strengths and opportunities both point toward concentrated focus on healthcare; the weaknesses and threats both punish anyone who tries to fight on multiple fronts with flat capacity. The strategic posture for 2027 should be focused-defensive on the core, aggressive on healthcare and AI compliance — not horizontal.

  ## Three Recommended Actions
  1. **Kill SMB self-serve in the next 30 days.** Owner: CEO. Outcome: $400K/month operating cost recovered; 12% of engineering capacity redirected.
  2. **Commit publicly to the AI compliance module GA by end of Q2.** Owner: CPO. Outcome: shipped GA, 18 paying healthcare customers using it in production by end of Q2.
  3. **Launch a healthcare expansion playbook for the top 30 accounts in the book.** Owner: CRO. Outcome: $4M of incremental ARR from expansion in next two quarters.
tips:
  - "The pairings section is what makes a SWOT useful. A SWOT that stops at the four boxes is a worksheet, not a strategy artifact."
  - "Force evidence on every item. If you cannot put a number or a proof point, you are guessing — and a guess in a SWOT becomes a fact in three meetings."
  - "Mark sustainability honestly. Most 'strengths' are earned and reversible — calling them structural makes the team complacent."
  - "Re-run this against the same inputs every 6 months. Watching the items move between boxes is how you spot trend lines."
  - "Use the recommended actions to set 90-day OKRs. A SWOT that doesn't generate action is wallpaper."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - annual-strategic-plan-outline
  - competitive-analysis-strategic
  - okr-framework-company
  - market-entry-analysis
tags:
  - swot
  - strategy
  - planning
  - leadership
  - assessment
---
