---
title: "Break a project into tasks with dependencies and owners"
slug: gantt-task-breakdown
function: operations
role: project-management
description: "Decompose a project into a structured task list with dependencies, duration estimates, owners, and sequencing — ready to import into a project management tool."
useCase: "Use this prompt when you have a project goal and need to build out the work breakdown structure. Works best at the start of a project or when onboarding a new PM who needs to build a plan quickly. Output is structured for easy import into Asana, Jira, ClickUp, or a Gantt chart tool."
prompt: |
  You are an expert project manager who excels at work breakdown structure and project sequencing. Decompose the project below into a complete, sequenced task list with dependencies and owners.

  **Project name:** {{project_name}}
  **Project objective:** {{project_objective}}
  **Total timeline:** {{total_timeline}}
  **Start date:** {{start_date}}
  **Team and roles available:** {{team_roles}}
  **Key deliverables required:** {{key_deliverables}}
  **Known constraints:** {{known_constraints}}
  **Project phases (if any):** {{phases}}

  Build a complete work breakdown structure (WBS) with this structure:

  ## 1. Project Summary
  - Total duration, start/end dates
  - Number of tasks
  - Critical path summary (which tasks have no slack and must not slip)
  - Assumptions behind the timeline

  ## 2. Phase and Task Breakdown
  Organize tasks into logical phases. For each task:

  **Task ID** | **Task Name** | **Phase** | **Owner Role** | **Duration** | **Dependencies (Task IDs)** | **Start (Week/Day)** | **End (Week/Day)** | **Deliverable/Output** | **Notes**

  Rules for task definition:
  - Tasks must be atomic: completable by one person or one role in one sitting or one time box
  - No task should exceed 5 days in duration — decompose longer tasks
  - Every task must produce a concrete output (a document, a decision, a configured system, a trained person)
  - Use dependency notation: FS (Finish-to-Start), SS (Start-to-Start), FF (Finish-to-Finish)
  - Flag tasks on the critical path with [CP]

  ## 3. Dependency Map
  A text-based representation of task dependencies, organized by phase. Show which tasks are blocked by which.

  ## 4. Role-Based Workload Summary
  For each role involved, show:
  - Total tasks owned
  - Total estimated effort (hours or days)
  - Peak load periods (which weeks are heaviest?)
  - Any overallocation risks

  ## 5. Critical Path Analysis
  Identify the critical path — the sequence of tasks where any delay pushes the project end date. List all critical path tasks in sequence and calculate total float for non-critical tasks.

  ## 6. Key Milestones
  Extract 4–8 key milestones from the task list. Each milestone should be:
  - A meaningful checkpoint (not just "phase ends")
  - Binary: either complete or not
  - Visible to stakeholders

  ## 7. Risk Flags in the Plan
  Based on the task breakdown, identify:
  - Any tasks with very uncertain duration estimates
  - Any single points of failure (one person owns a critical path task with no backup)
  - Any phases where multiple critical tasks land simultaneously
  - Any external dependencies that could introduce delay

  ## 8. Import-Ready Format
  Provide a clean CSV-style table of all tasks, formatted for easy copy-paste into a project management tool:
  Task ID, Task Name, Phase, Owner, Duration (days), Predecessor IDs, Start Week, End Week
variables:
  - "{{project_name}}"
  - "{{project_objective}}"
  - "{{total_timeline}}"
  - "{{start_date}}"
  - "{{team_roles}}"
  - "{{key_deliverables}}"
  - "{{known_constraints}}"
  - "{{phases}}"
exampleInput: |
  project_name: Company Rebrand + Website Relaunch
  project_objective: Rebrand the company (new name, logo, visual identity) and relaunch the website under the new brand before the annual user conference on June 10.
  total_timeline: 14 weeks
  start_date: March 3
  team_roles: Brand Designer (1, FT), Web Developer (1, 80%), Copywriter (1, 50%), Marketing Director (PM, 30%), Legal (part-time for trademark), CEO (decision authority)
  key_deliverables: New brand name approved, trademark cleared, logo + brand guidelines, new website live, all marketing assets updated (email templates, social, sales deck)
  known_constraints: CEO must approve brand name and logo. Trademark clearance takes 3–4 weeks. Website developer is also supporting a product launch in Week 6. Conference is a hard deadline.
  phases: Discovery & Naming, Visual Identity, Website Design & Build, Asset Rollout, Launch
exampleOutput: |
  ## 1. Project Summary
  - **Duration:** 14 weeks (March 3 – June 6)
  - **Total tasks:** 38
  - **Hard deadline:** June 10 (user conference) — website must be live by June 6 for 4-day buffer
  - **Critical path:** Naming → Legal review → Trademark filing → Logo design → Website design → Website build → QA → Launch
  - **Key assumption:** Trademark clearance takes exactly 3 weeks; any delay compresses website build

  ## 2. Phase and Task Breakdown (Sample)

  | ID | Task | Phase | Owner | Days | Dependencies | Start | End | Output |
  |----|------|-------|-------|------|-------------|-------|-----|--------|
  | T-01 | Brand audit — document current brand assets | Discovery | Designer | 2 | — | W1 | W1 | Asset inventory |
  | T-02 | Competitive naming research | Discovery | Marketing Dir. | 3 | — | W1 | W1 | Competitor name map |
  | T-03 | Generate 20+ name candidates | Discovery | Marketing Dir. | 2 | T-02 | W2 | W2 | Name longlist |
  | T-04 | Internal name shortlist review | Discovery | Marketing Dir. + CEO | 1 | T-03 | W2 | W2 | Shortlist of 5 names |
  | T-05 [CP] | Legal preliminary name clearance check | Discovery | Legal | 5 | T-04 | W3 | W3 | 5-name clearance memo |
  | T-06 [CP] | CEO selects final brand name | Discovery | CEO | 1 | T-05 | W4 | W4 | Approved name |
  | T-07 [CP] | File trademark application | Legal | Legal | 2 | T-06 | W4 | W4 | Application filed |
  | T-08 [CP] | Trademark clearance period | Legal | Legal | 15 | T-07 | W4 | W7 | Trademark clear |
  | T-09 | Logo concept exploration (3 directions) | Visual Identity | Designer | 5 | T-06 | W4 | W5 | 3 logo concepts |
  | T-10 | CEO logo review and selection | Visual Identity | CEO | 1 | T-09 | W5 | W5 | Approved direction |
  | T-11 | Logo refinement and finalization | Visual Identity | Designer | 4 | T-10 | W6 | W6 | Final logo files |
  | T-12 | Brand guidelines document | Visual Identity | Designer | 3 | T-11 | W7 | W7 | Brand guidelines PDF |

  ## 4. Role-Based Workload Summary

  | Role | Total Tasks | Total Effort | Peak Period | Overallocation Risk |
  |------|------------|-------------|-------------|---------------------|
  | Brand Designer | 14 | 42 days | Weeks 4–8 | Medium — logo + web design overlap |
  | Web Developer | 8 | 18 days | Weeks 8–12 | High — product launch conflict in Week 6 |
  | Copywriter | 6 | 9 days | Weeks 7–9 | Low |
  | Marketing Director | 10 | 12 days | Weeks 1–4 | Low |
  | CEO | 4 | 3 days | Weeks 4, 6, 10 | Low — spot decisions only |

  ## 5. Critical Path
  T-03 → T-04 → T-05 → T-06 → T-07 → T-08 → [T-09 runs in parallel] → T-12 → T-13 (website design) → T-20 (web build) → T-28 (QA) → T-35 (launch)

  Total float on non-critical tasks: up to 8 days before impacting launch date.

  ## 7. Risk Flags
  - **Trademark delay:** If clearance takes 4 weeks instead of 3, website build is compressed from 4 weeks to 3. Mitigation: begin website wireframes before trademark is cleared.
  - **Developer conflict in Week 6:** Developer is supporting product launch AND brand website simultaneously. Mitigation: schedule product launch tasks for Mon–Wed; brand tasks Thu–Fri.
  - **CEO approval bottlenecks:** CEO has 4 approval gates. Any gate taking >2 days pushes the critical path. Mitigation: schedule CEO reviews as recurring 30-min Friday slots.
tips:
  - "No task should be 'TBD' on owner — ambiguous ownership is the most common cause of tasks that slip through the cracks."
  - "After generating the breakdown, have the actual task owners review their estimates. PMs who estimate without the doer consistently underestimate by 30–50%."
  - "The critical path section is what you monitor weekly — if a CP task slips one day, the launch date slips one day. Everything else has float."
  - "Build in a 'buffer week' before your hard deadline if at all possible. Projects that plan to the exact deadline always miss it."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - project-brief
  - risk-register
  - status-update
  - capacity-planning-analysis
tags:
  - project-management
  - planning
  - work-breakdown
  - gantt
  - operations
---
