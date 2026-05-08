---
title: "Run a pre-mortem on a planned decision"
slug: pre-mortem-prompt
function: productivity
role: decision-making
description: "Imagine the decision failed catastrophically 12 months from now and work backward to identify the failure modes you can prevent today."
useCase: "Use this before committing to any decision with real downside — a hire, a product bet, a job change, a big purchase. Pre-mortems surface failures that post-mortems would have caught after it was too late."
prompt: |
  You are running a pre-mortem on a decision I'm about to make. The frame: it's 12 months from today, the decision was a clear failure, and we're doing the post-mortem early — while I can still change something.

  Decision I'm planning to make: {{decision}}
  My reasoning for choosing this: {{reasoning}}
  Timeline: {{timeline}}
  Key assumptions baked into my reasoning: {{key_assumptions}}
  My confidence level (gut check, 1-10): {{confidence}}

  Run the pre-mortem in this structure:

  1. FAILURE SCENARIO — write a 3-4 sentence narrative as if it's 12 months later and the decision failed. Be specific about what went wrong, not generic.

  2. TOP 5 FAILURE MODES — distinct ways this could fail. For each:
     - The failure (specific)
     - Probability (low / medium / high) — be honest, don't soft-pedal
     - Early warning signal you'd see in the first 30-60 days
     - Mitigation you could put in place NOW

  3. ASSUMPTION CHECK — for each of {{key_assumptions}}, mark:
     - Confidence (1-10)
     - What evidence you have for it
     - What would change your mind
     The weakest assumption is often the failure point.

  4. THE BLINDSPOT QUESTION — what's a failure mode that doesn't appear in your reasoning at all? Surface it explicitly. (This is where pre-mortems earn their keep.)

  5. KILL CRITERIA — name 2-3 specific events that, if they happen, mean you should reverse the decision. Without kill criteria, sunk cost will trap you.

  6. GO / NO-GO REASSESSMENT — given the pre-mortem, what's your confidence now (1-10), and what should change before committing?

  Don't be reassuring. The point of a pre-mortem is to find the failure modes a confident decision-maker is blind to.
variables:
  - "{{decision}}"
  - "{{reasoning}}"
  - "{{timeline}}"
  - "{{key_assumptions}}"
  - "{{confidence}}"
exampleInput: |
  decision: Hire a head of growth as our first growth-focused leader at our 25-person Series A SaaS
  reasoning: Self-serve signups have been flat for 6 months; founder-led growth has hit a ceiling; we have budget for one senior hire; investors keep asking
  timeline: Hire in next 60 days, expect impact in months 6-12
  key_assumptions: |
    1. Our growth ceiling is execution-limited, not product-limited
    2. A senior growth leader will join a 25-person company
    3. Founders will trust this person to run experiments without re-approving each one
    4. We have the data infrastructure to support a growth leader
    5. The right candidate exists in our budget range ($180-220k base + equity)
  confidence: 7
exampleOutput: |
  FAILURE SCENARIO
  It's December next year. The growth leader you hired in February quit in October, frustrated. They came in with a 90-day plan, blew through it, hit a wall when half their experiments needed engineering work the eng team wouldn't prioritize. Founders re-approved most experiments, slowing them down. Data infrastructure was worse than anticipated — they spent 3 months fixing tracking before they could run real tests. Self-serve signups are flat. You're back where you started, minus $200k and your hiring slot.

  TOP 5 FAILURE MODES

  1. ENGINEERING DEPENDENCY UNRESOLVED
  Probability: HIGH. Growth leaders are blocked when eng prioritization isn't aligned. You haven't mentioned any eng partnership plan.
  Early signal (first 60 days): Their first 3 experiments require eng work that doesn't get scheduled.
  Mitigation NOW: Before hiring, get explicit eng head commitment to a "growth pod" — even 1 dedicated engineer 50%.

  2. PRODUCT IS THE ACTUAL LIMITER, NOT GROWTH
  Probability: MEDIUM-HIGH. Flat self-serve signups for 6 months at Series A often means product-market fit hasn't hardened, not that distribution is broken.
  Early signal: Growth leader's first user-research insights point to value-prop or activation issues, not acquisition.
  Mitigation: Run a 2-week customer-research sprint BEFORE hiring. If the answer is "product issue," delay the hire and invest there.

  3. FOUNDERS DON'T ACTUALLY DELEGATE
  Probability: MEDIUM-HIGH. Your reasoning includes "founders will trust this person to run experiments without re-approving" — that's an aspiration, not a track record.
  Early signal: First 30 days, growth leader's experiment proposals get edited or delayed by founder review.
  Mitigation: Define decision rights IN WRITING before hiring. What can they ship without approval? What's the budget threshold?

  4. WRONG SENIORITY LEVEL
  Probability: MEDIUM. At 25 people, a senior growth leader may be over-leveled — they're used to teams; they'll be doing the work themselves.
  Early signal: Candidate asks about their team in interviews more than about the work.
  Mitigation: Consider a senior IC growth hire (slightly lower comp, expects to execute) instead of a "head of growth."

  5. DATA INFRASTRUCTURE BLOCKS EVERYTHING
  Probability: MEDIUM. You assumed data infra is sufficient. At 25 people, that's almost never true.
  Early signal: First experiments stall on "we can't measure that yet."
  Mitigation: Audit your tracking and analytics infra in the next 2 weeks. Fix any gaps before hire starts.

  ASSUMPTION CHECK
  1. Growth ceiling is execution-limited not product-limited — Confidence 5/10. You haven't run the customer-research test. Strongest counter-evidence: 6 flat months despite founder effort = product hypothesis stronger than you're acknowledging.
  2. Senior growth leader will join a 25-person company — Confidence 7/10. Doable but narrows the pool; the ones who join early-stage are a specific archetype.
  3. Founders will trust this person — Confidence 4/10. WEAKEST. No track record of founder delegation in your reasoning.
  4. Data infrastructure supports a growth leader — Confidence 5/10. Untested.
  5. Right candidate exists in budget — Confidence 6/10. Possible, but not the bottleneck.

  THE BLINDSPOT QUESTION
  What's missing from your reasoning: how the existing team will react. A senior growth hire often disrupts existing PM, marketing, or design relationships. If your existing team thinks "wait, what was wrong with what we were doing?" — you'll have political drag for 6 months. Address how this hire is positioned to the team BEFORE the hire is made.

  KILL CRITERIA
  1. If after 60 days the growth leader is blocked on eng for >50% of their planned experiments and eng prioritization can't be unblocked, reassess.
  2. If after 90 days customer research surfaces that the issue is product-market fit not growth execution, redirect the budget — don't keep this person doing the wrong job.
  3. If founders find themselves re-approving more than 30% of growth experiments after 60 days, the delegation assumption is broken — fix it explicitly or accept the relationship will end.

  GO / NO-GO REASSESSMENT
  Original confidence: 7/10. Post-pre-mortem: 5/10.
  What should change before committing:
  - Customer research sprint to test the product-vs-growth hypothesis (2 weeks)
  - Written decision rights document with founder buy-in (1 week)
  - Eng partnership commitment for a growth pod (1 week)
  - Data infra audit (2 weeks)
  Don't kill the hire — fix the conditions for it. Three weeks of prep transforms this from a 5/10 bet to an 8/10 bet.
tips:
  - "Run the pre-mortem before any decision with material downside. The exercise routinely changes confidence by 1-2 points."
  - "The 'blindspot question' is the highest-leverage output. Force the model to name a failure mode that's not in your reasoning."
  - "Always set kill criteria. Decisions without kill criteria become sunk-cost traps."
  - "Be honest about probability — 'low' for everything is a sign you're not really pre-morteming."
  - "Re-read the pre-mortem at day 30 and day 60. Past-you saw failure modes future-you is now living through; let past-you help."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - reversible-vs-irreversible-decision
  - decision-options-expansion
  - trusted-advisor-simulation
tags:
  - decision-making
  - pre-mortem
  - risk
  - frameworks
  - strategy
---
