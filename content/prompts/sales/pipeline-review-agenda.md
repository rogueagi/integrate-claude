---
title: "Build a weekly pipeline review agenda and scoring framework"
slug: pipeline-review-agenda
function: sales
role: sales-ops
description: "Generate a structured pipeline review meeting agenda with a deal scoring framework that keeps reviews focused on risks and actions, not status theater."
useCase: "Use this prompt to design a repeatable weekly pipeline review process. Most pipeline reviews devolve into status recaps — this prompt creates a meeting structure and scoring framework that surfaces real risks and drives clear actions."
prompt: |
  You are a sales operations leader who believes pipeline reviews should be decision-making sessions, not status meetings. Design a weekly pipeline review agenda and deal scoring framework.

  Context:
  - Team size: {{team_size}} account executives
  - Average deal size: {{avg_deal_size}}
  - Average sales cycle: {{avg_sales_cycle}}
  - Current quarter close date: {{quarter_end}}
  - Pipeline review meeting duration: {{meeting_duration}} minutes
  - Primary CRM: {{crm_name}}
  - Current quarter goal: {{quarter_goal}}

  Produce:

  ## 1. Meeting Agenda (time-boxed)
  A structured agenda for a {{meeting_duration}}-minute pipeline review that:
  - Spends less than 10% of time on "status" updates
  - Focuses the majority of time on at-risk deals and blockers
  - Ends with 3–5 clear actions with owners and dates
  - Includes a "deal of the week" spotlight for a positive learning moment

  ## 2. Deal Scoring Framework
  A simple 5-factor scoring rubric that any rep can use to score their own deals (1–3 on each factor, max 15 points). Factors should test:
  - Buyer engagement and access (do we have the decision-maker?)
  - Problem clarity (have they articulated the cost of not solving?)
  - Timeline and urgency (is there a compelling event?)
  - Budget (is money identified, or is this a wish?)
  - Next step quality (is the next step specific, or just "follow up"?)

  For each factor, write the criteria for scoring 1 (weak), 2 (developing), and 3 (strong).

  ## 3. Deal Review Template
  A 5-question deal review template that reps fill out BEFORE the meeting for any deal they're presenting. Questions should surface risk, not justify optimism.

  ## 4. Manager Coaching Questions
  10 questions a sales manager can ask during the review to pressure-test deal quality without being adversarial.

  ## 5. Red Flags to Watch For
  5 signals that indicate a deal is less healthy than its CRM stage suggests.
variables:
  - "{{team_size}}"
  - "{{avg_deal_size}}"
  - "{{avg_sales_cycle}}"
  - "{{quarter_end}}"
  - "{{meeting_duration}}"
  - "{{crm_name}}"
  - "{{quarter_goal}}"
exampleInput: |
  team_size: 8
  avg_deal_size: $45,000
  avg_sales_cycle: 60 days
  quarter_end: March 31
  meeting_duration: 60
  crm_name: Salesforce
  quarter_goal: $2.1M
exampleOutput: |
  ## 1. Meeting Agenda (60 minutes)

  0:00–0:05 | Snapshot (5 min)
  Manager presents: current quarter commit vs. goal, pipeline coverage ratio, days remaining. No discussion — just the scoreboard.

  0:05–0:20 | Commit Deals — Risk Review (15 min)
  Review all deals in "Commit" stage closing this quarter. For each: Is the close date real? What's the last substantive buyer action? What's the one thing that could kill it?
  Rule: If a deal hasn't had buyer-initiated contact in 10+ days, it moves off commit.

  0:20–0:45 | At-Risk and Best-Case Deals (25 min)
  Focus on 3–5 deals that could make or break the quarter. Manager asks coaching questions. Rep presents blockers, not status. Team weighs in.

  0:45–0:55 | Deal of the Week (10 min)
  One rep shares a deal they're proud of this week — what worked, what they learned, what others can steal.

  0:55–1:00 | Actions (5 min)
  3–5 clear actions documented: owner, action, date. No "I'll follow up" — every action has a specific output and deadline.

  ---

  ## 2. Deal Scoring Framework (max 15 points)

  **Factor 1: Decision-Maker Access**
  - 1 (Weak): Only talking to an individual contributor; no path to the buyer
  - 2 (Developing): Have met the decision-maker once; not yet engaged in the process
  - 3 (Strong): Decision-maker is actively engaged and championing internally

  **Factor 2: Problem Clarity**
  - 1 (Weak): Prospect expressed general interest but hasn't named a specific problem
  - 2 (Developing): Problem identified but impact not quantified
  - 3 (Strong): Prospect has articulated the cost of the problem in their own words, with numbers

  **Factor 3: Timeline and Urgency**
  - 1 (Weak): No stated timeline; "sometime this year" or "when the time is right"
  - 2 (Developing): General timeline exists but no compelling event driving it
  - 3 (Strong): Specific compelling event (budget cycle, project deadline, contract expiry) creates real urgency

  **Factor 4: Budget**
  - 1 (Weak): Budget not discussed; no indication funds are available
  - 2 (Developing): Budget exists in principle but not allocated or confirmed for this purchase
  - 3 (Strong): Budget is confirmed, allocated, and in the right cycle

  **Factor 5: Next Step Quality**
  - 1 (Weak): Next step is "send information" or "follow up next week"
  - 2 (Developing): Next step is scheduled but outcome is vague
  - 3 (Strong): Next step is a specific meeting with a defined output (e.g., "technical review with IT lead to clear security requirements by March 5")

  Score interpretation: 12–15 = Commit | 8–11 = Best Case | Below 8 = Pipeline only

  ---

  ## 3. Pre-Meeting Deal Review Template (rep completes before meeting)
  1. What is the specific reason this deal will close this quarter? (Not "they're interested" — what's the forcing function?)
  2. Who is the economic decision-maker, and what is their current level of engagement? When did we last hear from them?
  3. What is the one thing most likely to prevent this deal from closing, and what are you doing about it?
  4. What has the prospect done in the last 14 days to advance this deal? (Buyer actions only — not your actions.)
  5. What is your next committed step, with whom, and by what date?

  ---

  ## 4. Manager Coaching Questions
  1. "Walk me through the last thing the prospect did — not you — to move this deal forward."
  2. "If they went dark tomorrow, what's your read on why?"
  3. "Have you spoken to anyone other than your primary contact? Who else is involved in this decision?"
  4. "What's the compelling event that makes March 31 the right close date for them?"
  5. "What does their status quo cost them? Can they articulate it in dollars or hours?"
  6. "What's the specific objection you're most worried about, and how are you planning to handle it?"
  7. "If this deal slips to Q2, what's the first thing you'd do differently?"
  8. "Who else on our team or leadership should be involved to advance this deal?"
  9. "What have you promised them, and have you delivered it?"
  10. "On a scale of 1–10, how confident are you this closes this quarter — and what would make it a 10?"

  ---

  ## 5. Red Flags to Watch For
  1. **Last activity is your email, not their response.** If the last touch in CRM is a rep sending information and there's been no buyer reply in 10+ days, the deal is stalling.
  2. **Close date keeps sliding without a clear reason.** One push is understandable; two or more is a signal the deal isn't real.
  3. **"They're really interested" with no next step.** Interest without commitment is not a pipeline deal.
  4. **Champion can't get a meeting with their own decision-maker.** If your contact can't get the buyer on a call, they may not have the internal influence you think.
  5. **Deal size keeps shrinking.** Scope reduction under pricing pressure is a sign of either low urgency or a weak value case — not a path to a good deal.
tips:
  - "Run this meeting consistently — same day, same time, same format every week. Inconsistency kills the discipline."
  - "Enforce the pre-meeting template. Deals that aren't submitted don't get airtime. This creates accountability without confrontation."
  - "The deal scoring framework should live in Salesforce as a custom scoring field — automate what you can."
  - "Rotate the 'Deal of the Week' ownership so every rep gets a turn. It builds culture and gives quieter reps visibility."
  - "Use the coaching questions as a rotation, not a checklist. Pick the 3–4 most relevant ones for each deal, not all 10."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - crm-note-summary
  - quota-attainment-analysis
  - qbr-deck-outline
tags:
  - pipeline-review
  - sales-ops
  - deal-scoring
  - forecasting
  - management
---
