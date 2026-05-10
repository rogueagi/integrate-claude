---
title: "Stress-test a strategic narrative against likely questions"
slug: strategic-narrative-test
function: executive
role: comms
description: "Pressure-test a strategic narrative against the actual questions investors, board members, and employees would ask, then identify which questions the narrative cannot answer cleanly."
useCase: "Use this before a board update, fundraise, or all-hands. The structure simulates the three audiences with different priors and surfaces the questions the narrative cannot answer — which is where it will break in the real meeting."
prompt: |
  You are stress-testing a strategic narrative. The goal is to find the questions that would expose its weak points BEFORE the audience does. Three audiences ask different questions; the narrative has to hold up to all three.

  <context>
  The narrative (or pitch) being tested:
  <<<
  {{narrative}}
  >>>

  Audience 1 (investor or board): {{investor_context}}
  Audience 2 (employees or team): {{employee_context}}
  Audience 3 (skeptical outsider — analyst, journalist, or a competitor's friend): {{skeptic_context}}
  Stage of the company: {{stage}}
  </context>

  <task>
  Step 1 — Read the narrative back.
  In 3 to 5 sentences, state what the narrative is actually claiming. Separate the claims from the framing.

  Step 2 — Generate questions per audience.
  For each of the three audiences, generate 5 to 7 questions they would ask. Each question should be specific and uncomfortable. Lazy generic questions ("what's your biggest risk?") do not count. Tie each question to a specific claim or omission in the narrative.

  Step 3 — Score the narrative's answer.
  For every question, rate how well the current narrative answers it (1 = no answer / dodges, 5 = answers cleanly with evidence). Note where the answer is in the narrative, or note that the narrative does not address it.

  Step 4 — Identify the weak points.
  List the 3 to 5 questions that scored 1 or 2 across any audience. These are the holes that will get exposed.

  Step 5 — Propose narrative repairs.
  For each weak point, propose a specific edit to the narrative — either an added sentence, a reframing, or an honest acknowledgment with a plan. Repairs must not invent facts; if the underlying answer requires data the user does not have, name what data is needed.

  Step 6 — Audience-specific framing notes.
  Note 1 to 2 places where the same fact should be framed differently for different audiences (without contradicting itself).
  </task>

  <output_format>
  ## Narrative claims, separated from framing
  ## Investor / board questions (with score)
  ## Employee questions (with score)
  ## Skeptic questions (with score)
  ## Weakest answers (the questions that will hurt)
  ## Proposed narrative repairs
  ## Audience framing notes
  </output_format>

  <constraints>
  - Questions must be specific. "What's your moat?" is generic; "Your moat claim rests on 18 months of data; what changed in the market in month 6 that the data doesn't capture?" is real.
  - Do not invent answers. If a repair requires a number you do not have, say "needs: revenue retention by cohort 2023-2024" and stop.
  - Score honestly. If half the answers are 4s and 5s, you are channeling a generous audience. Make the skeptic harder.
  - Do not let the three audiences ask similar questions. If they do, you are writing one audience three times.
  </constraints>
variables:
  - "{{narrative}}"
  - "{{investor_context}}"
  - "{{employee_context}}"
  - "{{skeptic_context}}"
  - "{{stage}}"
exampleInput: |
  narrative: "We're the AI-native CRM for sales teams who hate Salesforce. We've grown to $4M ARR in 18 months, our customers see 3x faster pipeline velocity, and we're raising to expand to mid-market."
  investor_context: Series A round, lead is enterprise SaaS focused, has portfolio companies adjacent to the space
  employee_context: 22 people, half hired in last 6 months, equity heavy comp
  skeptic_context: Analyst who covers CRM and has seen 6 "Salesforce killers" fail
  stage: Series A in progress, post product-market fit
exampleOutput: |
  ## Narrative claims, separated from framing
  Claims: $4M ARR; 18-month timeline; "3x pipeline velocity" outcome; mid-market expansion as next step. Framing: "AI-native," "hate Salesforce."

  ## Investor questions (with score)
  - "$4M ARR in 18 months — what's the breakdown by ICP, and what's net retention by cohort?" → 1, narrative says nothing
  - "3x pipeline velocity is a customer claim — how do you measure it, and on what sample size?" → 2, no methodology stated
  - "Mid-market is a different motion than your current customers — what proof points do you have that this expands?" → 1, asserted, not shown
  - "Salesforce has 1500 engineers building AI features — what's defensible about your 22-person version 24 months from now?" → 1, hand-waves
  - "What's your gross margin and CAC payback?" → 1, absent
  ...

  ## Employee questions (with score)
  - "We hired half the team for the SMB motion — does mid-market expansion mean that work was wasted?" → 2, narrative is silent
  - "Equity grants assume a much higher exit; what's the path to a real outcome at this market position?" → 1
  - "If we lose, it'll be because Salesforce caught up. What's the plan if they do?" → 1
  ...

  ## Skeptic questions (with score)
  - "Six AI-native CRMs have raised money in the last 24 months. What makes you the one that doesn't end up as a feature inside HubSpot?" → 1
  - "'AI-native' is a positioning, not a moat. What's the actual moat?" → 1
  - "3x velocity vs. what baseline — Salesforce, manual, no system?" → 2
  ...

  ## Weakest answers
  1. Methodology behind the 3x velocity number
  2. Defensibility against Salesforce + HubSpot adding AI
  3. Net retention by cohort (or any unit economics signal)
  4. Why mid-market is the next move and not deeper SMB or vertical SaaS

  ## Proposed narrative repairs
  - 3x velocity: replace with "across 47 customers, median pipeline-to-close time dropped from 38 to 22 days; methodology and sample available." Needs: confirm the methodology actually holds across customers.
  - Defensibility: add explicit "our edge is data structure, not model access — every customer's CRM gets a labeled outcome trail Salesforce cannot generate retroactively." Needs: confirm this claim is technically real.
  - Mid-market choice: add "we hit a feature ceiling for SMB at ~$50k ACV; mid-market is our existing customers growing into us, not a new motion."
  - Net retention: include the number, broken out by cohort, even if it is mixed. Hiding it loses more credibility than showing it.

  ## Audience framing notes
  - The "Salesforce killer" framing plays well to investors ("big TAM") but cuts the wrong way with employees ("we lose if they catch up"). For the all-hands, lead with "our customers, our data" framing instead.
  - Net retention numbers go in the deck for investors and skeptics; for employees, the relevant cut is "we are growing customers we already have" — same fact, different framing.
tips:
  - "The three-audience structure is what makes this stronger than the typical 'rehearse the pitch' prompt — without it, you over-prepare for one audience and get caught by another. Each audience has different priors and asks different questions."
  - "If the skeptic's questions are not uncomfortable, you have not made the skeptic skeptical enough. Add specific context about what they have seen go wrong."
  - "Score honestly. A narrative full of 4s and 5s is one you have not actually stress-tested. If your gut says the meeting will be hard, the scores should reflect that."
  - "The 'needs: data' notes are the actual deliverable. They tell you what to go gather before the meeting, which is more valuable than rehearsing answers."
  - "Pair with devils-advocate on the strategy itself. Strategic narrative test makes the story durable; devil's advocate makes the strategy durable."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - devils-advocate
  - executive-summary-from-doc
  - claude-as-skeptical-vc
  - trusted-board-simulation
tags:
  - framework
  - methodology
  - communications
  - strategy
  - storytelling
---
