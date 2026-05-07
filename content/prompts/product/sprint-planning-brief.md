---
title: "Write a sprint planning brief and goal statement"
slug: sprint-planning-brief
function: product
role: product-management
description: "Generate a clear sprint planning brief with a focused sprint goal, scoped work items, capacity considerations, and a defined definition of done."
useCase: "Use this prompt before each sprint planning meeting to prepare a tight brief that helps the team commit to meaningful, achievable work. A good sprint brief reduces planning meeting time and gives the team a clear shared purpose for the two weeks ahead."
prompt: |
  You are an experienced agile product manager. Write a sprint planning brief for the sprint described below.

  **Team name:** {{team_name}}
  **Sprint number:** {{sprint_number}}
  **Sprint dates:** {{sprint_dates}}
  **Team capacity:** {{team_capacity}} (story points or engineer-days available this sprint)
  **Sprint context:** {{sprint_context}} (where are we in the quarter, what's happened recently)
  **Top priorities to pull from backlog:** {{backlog_priorities}}
  **Carryover from last sprint:** {{carryover}}
  **Upcoming dependencies or deadlines:** {{dependencies_deadlines}}
  **Team members and any capacity notes:** {{team_capacity_notes}}

  Write a sprint planning brief with these sections:

  ## Sprint [Number] Planning Brief
  **Team:** | **Dates:** | **Capacity:** | **PM:** | **EM:**

  ## Sprint Goal
  One crisp sentence that captures the theme and purpose of this sprint. The sprint goal should:
  - Describe the user or business value being delivered (not just "close tickets")
  - Be achievable if a subset of planned work ships
  - Give the team clarity on what to deprioritize if they hit a blocker
  - Be memorable enough to recite without looking it up

  Write 2–3 candidate sprint goal options, then recommend one with brief rationale.

  ## Context and Motivation (2–3 sentences)
  Why does this sprint matter? What happens after it? Connect the sprint to the broader quarter goal.

  ## Proposed Work Items
  List the stories/tickets proposed for this sprint, organized by priority:

  **Must Complete (committed work):**
  | Story ID | Title | Points | Owner | Notes/Dependencies |

  **Should Complete (if capacity allows):**
  | Story ID | Title | Points | Owner | Notes/Dependencies |

  **Stretch (pull in if ahead of pace):**
  | Story ID | Title | Points | Owner | Notes |

  **Not This Sprint (explicitly excluded):**
  List 2–3 things that might be expected but are being explicitly deprioritized this sprint, with brief rationale.

  ## Capacity Check
  - Total available capacity: [X] points/days
  - Committed work total: [Y] points/days
  - Buffer (recommended: 15–20%): [Z] points/days
  - Is the plan feasible? Assessment and any adjustments recommended.

  ## Key Risks This Sprint
  2–3 specific risks that could prevent the sprint goal from being achieved:
  - Risk, likelihood, mitigation

  ## Definition of Done
  The shared criteria that all stories must meet to be counted as complete:
  - Code reviewed and merged
  - Automated tests written and passing
  - Feature flagged if not fully ready for users
  - PM accepted
  - Deployed to staging
  - [Any additional criteria specific to this team]

  ## Dependencies and Blockers
  | Item | Depends On | Owner | Status | Risk to Sprint |

  ## Sprint Rituals Reminder
  - Daily standup: [time, format]
  - Mid-sprint check-in: [day, format]
  - Sprint review: [date, who's invited]
  - Retrospective: [date, facilitator]
variables:
  - "{{team_name}}"
  - "{{sprint_number}}"
  - "{{sprint_dates}}"
  - "{{team_capacity}}"
  - "{{sprint_context}}"
  - "{{backlog_priorities}}"
  - "{{carryover}}"
  - "{{dependencies_deadlines}}"
  - "{{team_capacity_notes}}"
exampleInput: |
  team_name: Core Product (4 engineers + 1 EM)
  sprint_number: 29
  sprint_dates: Oct 21 – Nov 1, 2024
  team_capacity: 40 story points (4 engineers × 10 points each; EM is 20% hands-on = 2 extra points)
  sprint_context: Week 5 of Q4. Shipped the analytics foundation in Sprint 28. AI Insights is the next big milestone, targeting Q1 launch. We need to complete the data aggregation pipeline and begin the AI integration work.
  backlog_priorities: |
    1. Weekly engagement summary aggregation job (backend) — 8pts
    2. AI prompt design and integration (GPT-4 API) — 13pts
    3. AI insights UI component — 5pts
    4. Fix: dashboard loading bug affecting 12% of sessions — 3pts
    5. Benchmark data ingestion pipeline — 8pts
    6. API rate limiting improvements — 3pts
  carryover: The benchmark data ingestion pipeline was started in Sprint 28 but not completed (~50% done, estimated 4pts remaining instead of 8pts).
  dependencies_deadlines: AI API key approved (done). Design specs for AI insights UI delivered Nov 1 (Design team committed). Q4 demo to investors Nov 15 — must have working AI demo.
  team_capacity_notes: Marcus is out Thursday Oct 24 (2pts less). Yuki is onboarding a new tool (1 day = 1pt less for ramp). Effective capacity closer to 37pts.
exampleOutput: |
  # Sprint 29 Planning Brief
  **Team:** Core Product | **Dates:** Oct 21 – Nov 1, 2024 | **Net Capacity:** 37pts | **PM:** Jamie | **EM:** Elena

  ## Sprint Goal Options
  **Option A:** "Complete the AI Insights data pipeline and deliver a working end-to-end demo by Nov 1."
  **Option B:** "Ship everything needed for the AI Insights beta — from data to demo."
  **Option C:** "Build the invisible half of AI Insights: the data and intelligence layer that makes the frontend possible."

  **Recommended: Option A.** It's specific, time-bound, and sets a clear visual milestone (working demo) that aligns with the Nov 15 investor demo deadline. Option C is evocative but not measurable.

  ## Context and Motivation
  Sprint 28 delivered the analytics foundation. Sprint 29 is where the data becomes intelligence. Completing the aggregation pipeline and AI integration this sprint puts us on track for a Nov 15 investor demo and a January AI Insights GA launch. This sprint is a critical path sprint — any significant slip cascades into Q4 milestones.

  ## Proposed Work Items

  **Must Complete (committed):**
  | Story | Title | Pts | Owner | Notes |
  |-------|-------|-----|-------|-------|
  | ENG-214 | Weekly engagement summary aggregation job | 8 | Marcus | Backend only; prerequisite for AI |
  | ENG-218 | AI prompt design + GPT-4 API integration | 13 | Yuki + Marcus | Pair on this given complexity |
  | ENG-201 | Dashboard loading bug fix | 3 | Priya | Affects 12% of sessions; quick win |
  | ENG-207 | Benchmark data ingestion (carryover) | 4 | Dev | ~50% complete from Sprint 28 |
  **Committed total: 28pts**

  **Should Complete:**
  | Story | Title | Pts | Owner | Notes |
  |-------|-------|-----|-------|-------|
  | ENG-219 | AI insights UI component | 5 | Priya | Design specs due Nov 1 — pull in if specs arrive early |
  **Running total with Should: 33pts**

  **Stretch:**
  | Story | Title | Pts | Owner | Notes |
  |-------|-------|-----|-------|-------|
  | ENG-222 | API rate limiting improvements | 3 | Dev | Low urgency; pull in if sprint is ahead |

  **Explicitly Not This Sprint:**
  - Mobile push notifications (Q2 work; not blocking anything in Q4)
  - Manager dashboard (blocked on design; no specs ready)

  ## Capacity Check
  - Net capacity: 37pts (after Marcus's day off and Yuki ramp)
  - Committed: 28pts (76% utilization)
  - With Should: 33pts (89% utilization — slightly high but manageable)
  - Buffer: 4pts
  - **Assessment:** Plan is aggressive but feasible. If the AI integration (ENG-218 at 13pts) hits unexpected complexity, we may need to slip the UI component to Sprint 30. Set a mid-sprint check-in trigger: if ENG-218 isn't 50% complete by Wednesday Oct 23, reassess scope.

  ## Key Risks
  1. **AI integration complexity (High likelihood):** 13pt AI story may have unknown complexity at the GPT-4 integration layer. Mitigation: Yuki and Marcus pair on Day 1; timebox exploration to 2 days before sizing re-assessment.
  2. **Design specs delayed (Medium):** If Design delivers AI insights specs late, Priya can't pull in ENG-219. Mitigation: Priya pulls API rate limiting instead.
  3. **Marcus day off compounds (Low):** If Marcus is sick additional days, the aggregation job (ENG-214) slips. Mitigation: Dev has context and can pick up if needed.

  ## Dependencies
  | Item | Depends On | Owner | Status | Risk |
  |------|-----------|-------|--------|------|
  | GPT-4 API integration | API key + approved budget | Product | Done | None |
  | AI insights UI (ENG-219) | Design specs | Design team | Due Nov 1 | Medium — could slip |
  | Investor demo Nov 15 | ENG-214 + ENG-218 complete | PM + EM | Tracking | High — critical path |
tips:
  - "The sprint goal is the most important thing in this document. If the team can't recite the sprint goal on Day 3, it's not clear enough."
  - "Always include a 15–20% capacity buffer. Teams that plan to 100% capacity every sprint burn out and consistently disappoint — planning to 80–85% delivers more reliably."
  - "The 'Explicitly Not This Sprint' section prevents the 'while you're in there' requests that creep in mid-sprint. Reference it when someone asks for additions."
  - "Set a mid-sprint trigger: if the highest-risk story isn't 50% done by the midpoint, you need to make a scope decision — don't wait until the last day."
complexity: beginner
modelRecommendation: claude-haiku
relatedSlugs:
  - user-story-set
  - retrospective-summary
  - feature-prioritization
  - prd-one-pager
tags:
  - sprint-planning
  - agile
  - product-management
  - team-management
  - project-management
---
