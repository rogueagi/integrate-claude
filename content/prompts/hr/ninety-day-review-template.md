---
title: "Build a 90-day review template for a new hire"
slug: ninety-day-review-template
function: hr
role: people-ops
description: "Generate a structured 90-day review template that surfaces ramp problems early, when they're still fixable, instead of waiting for the first formal review cycle."
useCase: "Use this when a new hire approaches their 90-day mark. Most companies skip this and discover problems at month 6 or 9 — too late. This prompt produces a manager-led review that takes 60 minutes and catches ramp issues, manager-mismatch, and scope confusion while there's still time to course-correct."
prompt: |
  You are a People Ops leader who has overseen onboarding for thousands of new hires. Build a 90-day review template for a new hire.

  Context:
  - Role and level: {{role_level}}
  - Manager: {{manager}}
  - Original 90-day plan goals: {{original_goals}}
  - Anything you already know is going well or poorly: {{known_signals}}
  - Team and company size context: {{team_context}}

  Output:

  1. **Pre-work for the new hire (sent 5 days before the review)**
     - 6–8 self-reflection questions
     - A simple ramp self-assessment (e.g., 1–5 scale across 4–6 dimensions)
     - One open question: what would have made the first 90 days better?

  2. **Pre-work for the manager (filled in independently before the meeting)**
     - Manager's assessment of where the new hire is on their ramp curve
     - Goals from the original plan: hit / partial / missed, with one-line reason
     - Three observations: one strength, one growth area, one surprise
     - A go / mostly-go / concerned rating with notes

  3. **The 90-day conversation agenda (60 min)**
     - Structured agenda with time blocks
     - Specific questions the manager should ask
     - How to surface and discuss any disagreement between the two pre-work documents
     - Forward-looking section: goals for next 90 days

  4. **Decision framework**
     - When does this conversation result in: continued ramp, accelerated scope, course-correction conversation, or PIP-warning?
     - Concrete signals for each path
     - What gets documented and where

  5. **People Ops follow-up**
     - What gets escalated to People Ops vs. handled by manager alone
     - Any artifacts to capture (e.g., updated growth plan, scope adjustment, role definition)

  Tone: this is not a performance review. It's a calibration. Frame it as such throughout.
variables:
  - "{{role_level}}"
  - "{{manager}}"
  - "{{original_goals}}"
  - "{{known_signals}}"
  - "{{team_context}}"
exampleInput: |
  role_level: Account Executive (mid-market, $80K–$120K ACV deals)
  manager: Devon Park, Director of Mid-Market Sales
  original_goals: (1) Complete sales onboarding bootcamp by day 30. (2) Carry 50% of full quota by day 60. (3) Source and close first deal by day 90. (4) Build pipeline to 3x quota by day 90.
  known_signals: Bootcamp completed on time. First deal closed at day 78 (ahead of schedule). Pipeline coverage is only 1.7x — concerning. Devon mentioned in passing that the AE's discovery calls run long and miss multi-threading.
  team_context: 14-person mid-market team, 4 new AEs in this cohort. Strong enablement, but Devon manages 8 directly — limited 1:1 time per AE.
exampleOutput: |
  # 90-Day Review Template — Mid-Market AE

  > **Frame:** This is a calibration, not a performance review. The goal is to surface what's working, what isn't, and what we change for the next 90 days — together.

  ## 1. New hire pre-work (sent 5 days ahead)

  Please complete and share with your manager 24 hours before the meeting.

  **Self-reflection (write 2–3 sentences each):**

  1. What's the one thing from your first 90 days you're most proud of?
  2. What's the one thing you wish you had done differently?
  3. Where do you feel fully ramped, and where do you still feel like a new hire?
  4. What part of the role is harder than you expected?
  5. What part is easier?
  6. Who has been most helpful in your ramp, and what made them helpful? (We use this to improve onboarding for the next cohort.)
  7. If you had a magic wand, what's one process, tool, or piece of context you'd change about how this team works?

  **Self-rating (1 = still learning, 5 = fully ramped):**

  | Dimension | Rating |
  |---|---|
  | Discovery and qualification | __ |
  | Product knowledge and demo confidence | __ |
  | Pipeline generation | __ |
  | Deal management and forecasting | __ |
  | Cross-functional collaboration (SE, CS, marketing) | __ |
  | Tooling and process (CRM hygiene, sequences) | __ |

  **Open question:**
  What would have made your first 90 days better — even by 10%?

  ## 2. Manager pre-work (Devon, fill in independently)

  **Ramp curve assessment:**

  Where is this AE on the typical mid-market ramp curve relative to the cohort?
  - Ahead / On track / Slightly behind / Concerned

  **Goal review:**

  | Goal | Hit / Partial / Missed | One-line note |
  |---|---|---|
  | Bootcamp by day 30 | | |
  | 50% quota by day 60 | | |
  | First deal closed by day 90 | | |
  | 3x pipeline coverage by day 90 | | |

  **Three observations:**

  - **One strength:** Be specific — what does this AE do better than the cohort average?
  - **One growth area:** What's the highest-leverage thing they need to improve in the next 90 days? Tie it to a specific behavior, not a trait.
  - **One surprise:** What did you not expect — good or bad?

  **Overall rating:**

  - **Go:** Performing at or above expectations; ready for accelerated scope or stretch.
  - **Mostly go:** On track but with one or two specific gaps that need a defined next-90-day plan.
  - **Concerned:** Pattern of missed milestones or behaviors that won't self-correct without intervention.

  > Pre-work tip for Devon: with this AE, the data is mixed. First deal closed early (a clear win) but pipeline coverage at 1.7x against a 3x goal and the discovery-call observation. This is a "mostly go" with a specific next-90 conversation about pipeline generation discipline and multi-threading.

  ## 3. The 90-day conversation (60 min)

  ### 0:00–0:05 — Set the frame
  "This is a calibration, not a review. We're going to compare notes, agree on what's working, surface anything that isn't, and set the next 90 days together. There are no formal stakes attached to today."

  ### 0:05–0:20 — New hire shares first
  Walk through their pre-work. Manager listens, takes notes, doesn't react yet. Specific manager questions:
  - "You rated yourself a 3 on pipeline generation — what's behind that number?"
  - "What's the part that's harder than you expected? Walk me through a specific moment."
  - "Who's been most helpful, and why?"

  ### 0:20–0:35 — Manager shares their view
  Devon walks through goals, observations, and rating. Speak to specific moments:
  - "Closing your first deal at day 78 was real. Walk me through what worked there."
  - "On pipeline — coverage is 1.7x against a 3x goal. What's your read on what's holding it back?"
  - "I've noticed your discovery calls run long. Tell me what you think is going on."

  ### 0:35–0:45 — Reconcile the gap
  Where do the two pre-works disagree? Disagreement is the most useful information in this meeting.
  - "I rated you stronger than you rated yourself on X. What am I not seeing?"
  - "You rated yourself stronger on Y than I would. Tell me about that."

  ### 0:45–0:55 — Next 90 days
  Define 3 goals. For this AE, likely:
  1. Pipeline coverage to 3x by day 180 — including specific weekly prospecting cadence
  2. Multi-threading on every $80K+ deal (3+ stakeholders before stage 3)
  3. Discovery call discipline — keep to 30 min, with a specific qualification framework

  Manager assigns a peer mentor for the multi-threading skill (someone in the cohort already doing it well).

  ### 0:55–1:00 — Forward look
  - "Anything you need from me that you're not getting?"
  - "What's the support that would have the biggest impact?"

  ## 4. Decision framework

  | Path | Signals | Documentation |
  |---|---|---|
  | **Continued ramp** | On-track on most goals, no concerning behavioral patterns | Updated 180-day goals in HRIS; no escalation |
  | **Accelerated scope** | Hit all 90-day goals, demonstrating skills above level | Conversation with skip-level about stretch assignment; documented in growth plan |
  | **Course-correction** | Mixed signals like this AE — wins plus a specific gap | Written 90-day-forward plan with measurable goals; 30-day check-in scheduled; copy to People Ops for visibility |
  | **PIP warning** | Multiple missed milestones or behavior that won't self-correct | Loop in HRBP before the meeting; do not initiate a PIP at the 90-day review itself unless pre-aligned with HRBP |

  This AE is a **course-correction**, not a PIP. The first deal proves the underlying capability; the gaps are skill-specific and addressable.

  ## 5. People Ops follow-up

  - Manager files the updated 90-day-forward plan in HRIS within 5 business days
  - People Ops reviews any "course-correction" or "PIP warning" outcomes weekly with managers in the new-hire cohort
  - Aggregate the "what would have made the first 90 days better" answers across the cohort and review with enablement quarterly
  - For "Concerned" ratings: HRBP joins the 30-day follow-up
tips:
  - "Have the new hire and the manager fill in pre-work independently and exchange documents 24 hours before the meeting. The disagreements between them are where the real learning is."
  - "Always frame this as a calibration, not a review. The moment it feels like a performance review, defensive answers replace honest ones — and you lose the early-warning value."
  - "If a 90-day review surfaces serious problems, do not turn the conversation into a PIP on the spot. Pre-brief HR, document the gaps, and have the PIP conversation as a separate, deliberate meeting within 7 days."
  - "Aggregate the 'what would have made onboarding better' answers across cohorts and feed them into your enablement program. This is the single highest-ROI input most companies ignore."
  - "If the manager and new hire ratings disagree by 2+ points on any dimension, that's a signal to schedule a 30-day check-in regardless of the overall outcome."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - onboarding-checklist
  - performance-review-self-assessment
  - manager-feedback-summary
tags:
  - onboarding
  - performance
  - new-hire
  - ramp
  - people-ops
---
