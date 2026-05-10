---
title: "SWOT with rigor — weighted, evidenced, decision-driving"
slug: swot-with-rigor
function: operations
role: ops-management
description: "Run a SWOT that is more than a bullet list — every entry is evidenced, weighted, and tied to a strategic move, with explicit cross-quadrant interactions."
useCase: "Use this when the team needs a real strategic snapshot, not a wall of generic bullets. The structure forces evidence per entry and surfaces the cross-quadrant moves (matching strengths to opportunities, defending weaknesses against threats) that the typical SWOT skips."
prompt: |
  You are running a SWOT analysis with rigor. A normal SWOT becomes a wall of platitudes; this version forces evidence, weighting, and cross-quadrant analysis so the output drives a decision.

  <context>
  Subject of the SWOT: {{subject}} (a company, a product line, a function, a project)
  Decision the SWOT will inform: {{decision}}
  Time horizon: {{horizon}}
  Available evidence (data, customer quotes, market signals): {{evidence}}
  </context>

  <task>
  Step 1 — Populate each quadrant.
  For each of Strengths, Weaknesses, Opportunities, Threats, list 3 to 6 specific entries.
  - Strengths and Weaknesses are internal — you control them
  - Opportunities and Threats are external — you do not
  Each entry must include:
  - The specific claim
  - Evidence (data, customer quote, market signal); cite from {{evidence}} or mark UNCONFIRMED
  - Magnitude (1 to 5, how much this matters at {{horizon}})
  - Confidence (1 to 5, how sure are you this is real)

  Step 2 — Sanity check internal vs. external.
  Misclassification is the #1 SWOT failure mode. For each entry, ask: "is this thing primarily under our control?" If yes, it is S/W. If no, it is O/T. Reclassify any that are wrong.

  Step 3 — Cross-quadrant matrix.
  Build a 2x2 of interactions:
  - SO (Strength × Opportunity): where we attack
  - ST (Strength × Threat): where we defend
  - WO (Weakness × Opportunity): where we invest to capture
  - WT (Weakness × Threat): where we are most exposed

  Identify the single most important interaction in each cell.

  Step 4 — Tie to {{decision}}.
  For each of the four cells, name the move it implies for {{decision}}. If a cell does not imply a move, say so.

  Step 5 — Honesty pass.
  List 1 to 2 entries you considered marking but cut for honesty (e.g., a "strength" that is actually parity with the market, an "opportunity" that is wishful). Briefly explain.
  </task>

  <output_format>
  ## SWOT table (with evidence, magnitude, confidence)
  ## Internal vs. external sanity check
  ## Cross-quadrant interactions (SO, ST, WO, WT)
  ## Implied moves for the decision
  ## Cuts on honesty grounds
  </output_format>

  <constraints>
  - Every entry has evidence or is marked UNCONFIRMED. No vibes.
  - Reject vague entries. "Strong brand" is not a strength; "47% of inbound leads name us first when surveyed" is. If you cannot make it specific, cut it.
  - Strengths must beat the market, not just exist. "We have a sales team" is not a strength. "Our enterprise win rate is 18% higher than the segment average" is.
  - Cross-quadrant analysis is the deliverable. The single quadrants are inputs to it.
  </constraints>
variables:
  - "{{subject}}"
  - "{{decision}}"
  - "{{horizon}}"
  - "{{evidence}}"
exampleInput: |
  subject: Our company's mid-market product line
  decision: Whether to invest 2x in mid-market or hold flat and double down on enterprise
  horizon: 12 months
  evidence: Net retention by segment; CAC by segment; competitor moves last 6 months; customer interview notes (n=20)
exampleOutput: |
  ## SWOT

  **Strengths**
  | Claim | Evidence | Magnitude | Confidence |
  |---|---|---|---|
  | Mid-market NPS 64, 18 points above enterprise | Q3 NPS report | 4 | 5 |
  | Self-serve onboarding works for mid-market (TTV 6 days) | Product analytics | 4 | 5 |
  | Inbound MQL volume from mid-market growing 25% QoQ | Marketing dashboard | 3 | 4 |

  **Weaknesses**
  | Claim | Evidence | Magnitude | Confidence |
  |---|---|---|---|
  | CAC payback 14 months, vs. enterprise 9 months | Finance | 5 | 5 |
  | Mid-market churn 11% annual; enterprise 4% | Cohort report | 5 | 5 |
  | No mid-market-specific CSM team; shared with enterprise | Org chart | 3 | 5 |

  **Opportunities**
  | Claim | Evidence | Magnitude | Confidence |
  |---|---|---|---|
  | Two competitors raised prices 30% in Q2; mid-market is fleeing | 5 customer interviews | 4 | 3 |
  | New compliance regulation in our space favors integrated platforms (us) over point tools | Industry report | 3 | 3 |

  **Threats**
  | Claim | Evidence | Magnitude | Confidence |
  |---|---|---|---|
  | Larger competitor adding mid-market SKU in Q4 | Press release | 5 | 4 |
  | Mid-market budget compression in 2 customer verticals | Customer interviews | 3 | 3 |

  ## Internal vs. external sanity check
  All internal claims are under our control; all external claims are market-driven. No reclassifications.

  ## Cross-quadrant interactions
  - **SO**: NPS + inbound growth × competitor price hikes → run a "switch from [competitor]" campaign now while customers are migrating
  - **ST**: Self-serve onboarding × competitor SKU launch → close the activation gap before they can; new customers are sticky
  - **WO**: CAC payback × compliance tailwind → invest in content/SEO to ride the regulatory inflection without paid spend
  - **WT**: Churn × competitor SKU → highest exposure; retention investments must come before any growth investment

  ## Implied moves for the decision
  - SO move: invest in mid-market — but the urgency is competitive timing, not just opportunity size.
  - WT move: retention work in mid-market is mandatory regardless of the invest decision; without it, growth investment compounds churn.
  - Net: invest 2x is correct ONLY if the first 30% of the investment goes to closing the churn gap. Pure growth investment without retention work amplifies the loss.

  ## Cuts on honesty grounds
  - Removed "strong product roadmap" from Strengths. Roadmap is plans, not fact.
  - Removed "AI-native architecture" from Strengths. Same as competitors at this point — parity, not advantage.
tips:
  - "The cross-quadrant interactions are what makes this stronger than the typical SWOT — without them, you have four lists and no strategy. SO/ST/WO/WT is where the analysis pays for itself."
  - "Force every entry to have evidence. Nothing kills a SWOT faster than 'strong brand' with no source. UNCONFIRMED is honest; vibes are not."
  - "The internal/external sanity check catches a remarkably common error. Things you can change and things you cannot are different categories of action."
  - "If the WT cell is the most important, your strategy needs to start there. Capturing opportunity while a threat-weakness combo is unaddressed is how companies lose."
  - "Pair with claude-pre-mortem on the implied moves. SWOT identifies the moves; pre-mortem stress-tests them."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - mece-breakdown
  - fishbone-analysis
  - claude-pre-mortem
  - what-would-the-best-version-of-this-be
tags:
  - framework
  - methodology
  - strategy
  - swot
  - planning
---
