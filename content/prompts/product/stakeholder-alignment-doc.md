---
title: "Write a stakeholder alignment document for a contentious product decision"
slug: stakeholder-alignment-doc
function: product
role: product-management
description: "Generate a structured alignment document that clearly frames a contentious product decision, presents stakeholder perspectives, and builds toward a shared path forward."
useCase: "Use this prompt when a product decision has meaningful disagreement across stakeholders — engineering, design, business, and leadership all see it differently. An alignment document externalizes the tension, acknowledges each perspective fairly, and creates a framework for resolution without requiring a marathon meeting."
prompt: |
  You are a senior product leader skilled at navigating organizational complexity and building alignment without sacrificing quality. Write a stakeholder alignment document for the contentious decision described below.

  **Decision topic:** {{decision_topic}}
  **Context:** {{decision_context}}
  **Stakeholders involved:** {{stakeholders}}
  **Current state of disagreement:** {{disagreement_description}}
  **Constraints:** {{constraints}}
  **Decision timeline:** {{decision_timeline}}
  **What you know about each stakeholder's position:** {{stakeholder_positions}}

  Write an alignment document with these sections:

  ## 1. Purpose of This Document
  Why this document exists, what it's trying to achieve, and what it's NOT trying to do (e.g., it's not a pre-written conclusion seeking approval).

  ## 2. Decision Statement
  The precise decision to be made, stated as a neutral question. Good decision statements:
  - Are specific (not "what should we build?" but "should we build X or Y?")
  - Are binary or have clearly bounded options
  - Include the constraints and success criteria that bound the decision

  ## 3. Why This Decision Is Hard
  An honest statement of why reasonable people disagree. What values, priorities, or information asymmetries create the tension? This section must be written fairly — if it reads like one side is obviously right, it's not doing its job.

  ## 4. Stakeholder Perspectives
  For each stakeholder group, write their perspective in the most charitable, accurate way possible:
  **[Stakeholder/Team Name]**
  - Their core concern or priority
  - The specific outcome they're optimizing for
  - Their strongest argument
  - What they worry about if the decision goes against them
  - What they'd need to see to be comfortable with a decision they didn't prefer

  ## 5. Options on the Table
  Present each real option clearly. For each:
  - Option name and description
  - Who this option primarily favors
  - What it gets right
  - What it gives up or risks
  - What conditions would make this the right choice

  ## 6. Common Ground
  What do all stakeholders actually agree on? (There's always more than it feels like.) Finding shared values or shared goals helps close the distance between positions.

  ## 7. Recommended Path Forward
  The PM's clear recommendation — not a wishy-washy "it depends." State:
  - The recommendation
  - The 3 most important reasons for it
  - The strongest objection to the recommendation and why you've weighed it and proceeded anyway
  - What you'd need to see to revisit this decision

  ## 8. What Needs to Be True for This to Work
  The conditions and commitments that must be honored for the recommended path to succeed. If any stakeholder made commitments to get aligned, make them explicit here.

  ## 9. Decision Log
  - Decision: [Once made — fill in after review]
  - Decided by: [Names/roles]
  - Date:
  - Dissenting views on record:
  - Revisit criteria: [Under what circumstances should this decision be revisited?]
variables:
  - "{{decision_topic}}"
  - "{{decision_context}}"
  - "{{stakeholders}}"
  - "{{disagreement_description}}"
  - "{{constraints}}"
  - "{{decision_timeline}}"
  - "{{stakeholder_positions}}"
exampleInput: |
  decision_topic: Whether to build the Gantt chart feature in Q4
  decision_context: Gantt is the most-requested feature (1,200 upvotes). However, building it requires significant engineering investment (L/XL effort) and would push back two other features: guest access and recurring tasks, which scored higher in our prioritization framework.
  stakeholders: Head of Sales (Maya), Head of Engineering (Dev), VP Product (Jamie), Head of Customer Success (Linda), CFO (Robert)
  disagreement_description: Sales insists Gantt is blocking 4 enterprise deals worth $380K ARR. Engineering says it's a 3-month build that will hurt the team if rushed. CS says recurring tasks affect more customers. CFO is focused on closing the enterprise pipeline. VP Product ran a prioritization framework that ranked Gantt #6.
  constraints: Engineering has capacity for 2–3 medium features or 1 large feature in Q4. Gantt is a large feature. Guest access and recurring tasks are medium features.
  decision_timeline: Must decide by Oct 25 to hit December release if Gantt is chosen.
  stakeholder_positions: |
    Maya (Sales): Gantt is the only thing stopping 4 deals. $380K ARR is real. She's frustrated the framework doesn't weigh pipeline impact enough.
    Dev (Engineering): The estimate is 10–12 weeks minimum. Team is already stretched. Rushing it creates technical debt and morale risk.
    Linda (CS): Recurring tasks affects 40% of her accounts. Gantt is a niche need for PM-heavy teams. Data doesn't support Gantt as the broader priority.
    Robert (CFO): $380K is material. We should find a way.
    Jamie (VP Product): Ran the framework honestly. Gantt scores lower than guest access and recurring tasks on customer impact. But acknowledges the pipeline argument is real.
exampleOutput: |
  # Stakeholder Alignment Document: Gantt Chart Feature — Q4 Decision
  **Author:** Jamie Chen, VP Product | **Date:** October 20, 2024 | **Decision needed by:** October 25

  ## 1. Purpose of This Document
  This document is intended to surface the key perspectives on the Gantt chart decision, create shared understanding of the trade-offs, and get to a clear decision with everyone's input heard. It is not a conclusion in search of approval — the recommendation section reflects the PM's view, but the final decision will be made with stakeholder input at the October 25 meeting.

  ## 2. Decision Statement
  **Should we build the Gantt chart feature in Q4, which means deferring guest access and recurring tasks to Q1?**

  Constraints: Engineering has capacity for 1 large feature OR 2–3 medium features in Q4. Gantt is a large feature (10–12 weeks). Guest access and recurring tasks are medium features (3–4 weeks each). We cannot build all three.

  ## 3. Why This Decision Is Hard
  Both sides of this argument are right about something important. Pipeline is real — $380K ARR is not theoretical. And the prioritization framework is also right — Gantt serves a specific subset of customers while recurring tasks and guest access serve a broader base. The tension is between concentrated near-term revenue (enterprise pipeline) and distributed longer-term value (product quality and breadth). Neither priority is wrong. The disagreement is about which matters more this quarter.

  ## 4. Stakeholder Perspectives

  **Maya Chen — Head of Sales**
  - Core concern: Closing Q4 pipeline. Four deals worth $380K are at risk.
  - Optimizing for: Short-term revenue attainment
  - Strongest argument: Real money from real prospects. The framework doesn't capture pipeline impact.
  - Worry if Gantt doesn't ship: Lose 4 deals; be seen as unable to build what enterprise wants.
  - What she'd need: Either build Gantt, or have an alternative to hold deals open.

  **Dev Anand — Head of Engineering**
  - Core concern: Team health and build quality. The estimate is 10–12 weeks, not 6.
  - Optimizing for: Sustainable delivery and technical quality
  - Strongest argument: A rushed Gantt creates technical debt and may not ship well anyway. Team morale after a brutal Q4 affects Q1 delivery.
  - Worry if overruled: Team commits to something that's set up to fail or harm retention.
  - What he'd need: Honest timeline and no pressure to cut corners.

  **Linda Park — Head of Customer Success**
  - Core concern: Her 800 existing accounts. Recurring tasks affects 40% of them.
  - Optimizing for: Retention and NPS among the broader customer base
  - Strongest argument: The data. Gantt is not broadly requested by SMB accounts.
  - Worry: Optimization for enterprise pipeline at the expense of existing customer needs.

  ## 5. Options on the Table

  **Option A: Build Gantt in Q4**
  - Favors: Sales, CFO
  - Gets right: Closes pipeline, shows enterprise ambition
  - Gives up: Guest access and recurring tasks ship in Q1; broader customer base waits; engineering team stretched
  - Right if: All 4 deals actually close with Gantt as the deciding factor

  **Option B: Build Guest Access + Recurring Tasks in Q4**
  - Favors: CS, Engineering, broad customer base
  - Gets right: Higher customer impact by the framework; sustainable delivery pace
  - Gives up: $380K pipeline at risk; Sales frustrated
  - Right if: The 4 deals can be held until Q1 with Gantt on a committed roadmap

  **Option C: Build a Lightweight Gantt (Scoped Down) in Q4**
  - Favors: Sales + Engineering (partial)
  - Gets right: Addresses the visual need without full complexity
  - Gives up: May not fully satisfy enterprise prospects; still takes 6–7 weeks
  - Right if: Engineering can scope to a v1 that satisfies the 4 deals

  ## 6. Common Ground
  Everyone agrees: (1) Q4 revenue matters; (2) engineering sustainability matters; (3) the prioritization framework should be respected; (4) we cannot do all three features in Q4. The disagreement is about how to weigh near-term pipeline vs. broader customer impact.

  ## 7. Recommended Path Forward
  **Recommendation: Option B (Guest Access + Recurring Tasks), with an active Q1 Gantt commitment.**

  Reasons:
  1. The $380K pipeline assumes all 4 deals are actually blocked by Gantt. Sales should validate this with each prospect this week — anecdotal pipeline claims often don't survive direct conversations.
  2. Engineering's 10–12 week estimate means a rushed Q4 Gantt arrives in December at best, potentially impacting quality. A Q1 Gantt with full engineering capacity ships better.
  3. Guest access and recurring tasks help the 800 accounts we already have. Losing any of those to churn costs as much as winning a new deal.

  **Strongest objection:** If the 4 deals are genuinely at risk and Gantt is truly the blocker, the math may favor Gantt. **Counter:** We don't know this yet. Maya should have direct conversations with each prospect before October 25.

  ## 8. What Needs to Be True
  - Sales will validate with each of the 4 prospects whether Gantt is actually the blocker or just a stated preference (by October 23)
  - If 3+ deals confirm Gantt as hard blocker, we reconvene and revisit
  - If we proceed with Option B, VP Product commits to a Q1 Gantt start with firm Q2 release date, communicated formally to the 4 prospects
  - Engineering commits to the Q4 plan without scope creep from other requests
tips:
  - "Writing stakeholder perspectives charitably is the hardest and most important part. If Sales reads their section and says 'that's not what I mean,' rewrite it until they nod."
  - "The 'Common Ground' section is often surprisingly long once you articulate it. Disagreements feel bigger than the actual gap — naming the shared values narrows the distance."
  - "Always include a clear PM recommendation. Wishy-washy 'it depends' conclusions defer rather than resolve disagreement."
  - "Send this document to all stakeholders 48 hours before the alignment meeting — not during it. People who read it in advance argue less and decide faster."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - decision-memo
  - feature-prioritization
  - product-roadmap-narrative
  - board-questions-prep
tags:
  - stakeholder-alignment
  - product-management
  - decision-making
  - leadership
  - conflict-resolution
---
