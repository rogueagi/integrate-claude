---
title: "Build a stakeholder communication plan for a project"
slug: stakeholder-communication-plan
function: operations
role: project-management
description: "Create a structured stakeholder communication plan that maps audiences, communication needs, cadence, and channels for a project or initiative."
useCase: "Use this prompt at project kick-off to ensure no stakeholder is surprised, under-informed, or overwhelmed with irrelevant updates. A communication plan prevents the two most common project communication failures: over-communicating to executives and under-communicating to people who need to act."
prompt: |
  You are a seasoned project manager and communications strategist. Build a comprehensive stakeholder communication plan for the project described below.

  **Project name:** {{project_name}}
  **Project description:** {{project_description}}
  **Project duration:** {{project_duration}}
  **Project manager:** {{project_manager}}
  **Stakeholder groups:** {{stakeholder_groups}}
  **Communication goals:** {{communication_goals}}
  **Known communication challenges:** {{known_challenges}}
  **Available channels:** {{available_channels}}

  Build a stakeholder communication plan with these sections:

  ## 1. Stakeholder Analysis
  For each stakeholder group, assess:
  | Stakeholder Group | Interest Level (H/M/L) | Influence Level (H/M/L) | Current Sentiment | Communication Approach |

  Engagement strategy by quadrant:
  - High influence, High interest → Manage closely
  - High influence, Low interest → Keep satisfied
  - Low influence, High interest → Keep informed
  - Low influence, Low interest → Monitor

  ## 2. Communication Objectives
  What must each communication achieve? List 3–5 measurable communication objectives for the project (e.g., "100% of team members know the go-live date by Week 2").

  ## 3. Communication Matrix
  The core deliverable — a table showing every planned communication:
  | Communication | Audience | Purpose | Frequency | Format | Channel | Owner | Timing/Trigger |

  Include planned communications for:
  - Executive/sponsor updates
  - Core team working communications
  - Broader organizational awareness
  - External stakeholders (if applicable)
  - Launch/milestone announcements

  ## 4. Key Message Framework
  For each major stakeholder group, define the core messages:
  - **What they most need to know:** The 1–2 facts this group cares about most
  - **What they worry about:** Their primary concern related to this project
  - **How we address their concern:** The message that reassures them
  - **What we need from them:** The specific ask or action this group needs to take

  ## 5. Escalation Communication Protocol
  How will unexpected issues or bad news be communicated?
  - Trigger for unplanned communication (what warrants it?)
  - Notification sequence (who is told first, in what order, in what timeframe?)
  - Format for urgent communications
  - Who approves communications before they go out?

  ## 6. Communication Calendar
  A week-by-week view of planned communications for the first phase of the project. Show what goes out, to whom, and when.

  ## 7. Feedback Mechanism
  How will stakeholders be able to ask questions, raise concerns, or provide input?
  - Channels for inbound questions
  - Response time commitments
  - How feedback will be incorporated

  ## 8. Communication Plan Risks
  | Risk | Mitigation |
  - Over-communication → key messages get lost
  - Under-communication → stakeholders are blindsided
  - Inconsistent messages from different team members
  - Wrong channel for the audience
variables:
  - "{{project_name}}"
  - "{{project_description}}"
  - "{{project_duration}}"
  - "{{project_manager}}"
  - "{{stakeholder_groups}}"
  - "{{communication_goals}}"
  - "{{known_challenges}}"
  - "{{available_channels}}"
exampleInput: |
  project_name: Office Relocation — HQ Move to New Building
  project_description: The company is moving its headquarters from 2nd Ave to the new building on Market St, affecting all 120 employees. Move date is April 14. Includes desk assignment, IT setup, building access, and facilities changes.
  project_duration: 10 weeks
  project_manager: Operations Manager (Jordan Kim)
  stakeholder_groups: All employees (120), Executive team (8), IT team (5, heavy lift), Facilities/building manager (external), Department heads (10), Remote employees (15, unaffected)
  communication_goals: Every employee knows their desk assignment and move logistics 2 weeks before move day. Zero employees show up at the wrong building on April 14. Executive team is confident the business will be operational on April 15. IT team has clear task assignments and timeline.
  known_challenges: Employees are anxious about losing their favorite spots. Executive team is skeptical about the timeline. One department head (Sales) has been vocal about not wanting to move. Remote employees need to know what's changed for when they visit.
  available_channels: Slack (company-wide, department channels), Email (all-hands), Weekly all-hands meeting, Intranet/Notion, Physical notices in current office
exampleOutput: |
  # Stakeholder Communication Plan: HQ Office Relocation
  **PM:** Jordan Kim | **Move Date:** April 14 | **Plan Version:** 1.0

  ## 1. Stakeholder Analysis

  | Group | Interest | Influence | Sentiment | Strategy |
  |-------|----------|-----------|-----------|----------|
  | Executive team | High | High | Skeptical | Manage closely — weekly 1:1 updates, proactive risk sharing |
  | All employees | High | Medium | Anxious | Keep informed — frequent, reassuring, specific updates |
  | Department heads | High | High | Mixed (Sales resistant) | Manage closely — early desk assignment input, address concerns |
  | IT team | High | Medium | Engaged | Manage closely — detailed task plan, weekly working sessions |
  | Remote employees | Low | Low | Neutral | Monitor — single targeted update on what changes for them |
  | Facilities/landlord | Medium | High | Professional | Keep satisfied — formal weekly update, escalation contact |

  ## 3. Communication Matrix

  | Communication | Audience | Purpose | Frequency | Format | Channel | Owner | Trigger |
  |--------------|----------|---------|-----------|--------|---------|-------|---------|
  | Executive steering update | Exec team | Progress, risks, decisions | Weekly (Fridays) | 1-page memo | Email | Jordan Kim | Every Friday |
  | Employee move newsletter | All employees | Awareness, logistics, FAQs | Bi-weekly | Email + Slack post | Email + #announcements | Jordan Kim | Weeks 2, 4, 6, 8 |
  | Desk assignment notice | All employees | Specific desk location | One-time | Email | Email | Jordan Kim | Week 8 (3 weeks before) |
  | Dept head briefing | Department heads | Input on desk layouts, dept needs | Bi-weekly | 30-min meeting | Zoom | Jordan Kim | Weeks 1, 3, 5, 7 |
  | IT task assignments | IT team | Detailed moving tasks + timeline | Kick-off + weekly | Notion + Slack | #it-move-project | IT Lead | Week 1 kick-off, then weekly |
  | Move-day logistics guide | All employees | Day-of instructions | One-time | Email + Notion | Email + intranet | Jordan Kim | April 7 (1 week before) |
  | Remote employee update | Remote employees | What changes for office visits | One-time | Email | Email | Jordan Kim | Week 8 |
  | All-hands update | All company | High-level milestone progress | Monthly slot | 5-min verbal | All-hands meeting | CEO + Jordan | Months 1, 2 |

  ## 4. Key Message Framework

  **All Employees**
  - Need to know: When they're moving, where their desk is, and what they need to do before move day
  - Worry: Losing their spot, longer commute, chaotic move day
  - Our message: "Your desk assignment was made with input from your department head. Move day will be organized — you just need to pack your personal items into a labeled box."
  - Ask: Pack personal items by April 11; attend the optional building tour on April 8

  **Executive Team**
  - Need to know: We will be fully operational on April 15
  - Worry: Business disruption, IT downtime, employees distracted during a busy quarter
  - Our message: "IT infrastructure will be live-tested the weekend of April 12–13. We've built a 2-day buffer before the official close date."
  - Ask: Approve desk layout decisions by March 25

  **Sales Department Head (Resistant)**
  - Need to know: Their team's workspace preferences were heard and incorporated where possible
  - Worry: Team morale, losing proximity to other departments they collaborate with
  - Our message: "Sales is being seated near the Revenue team they work most closely with, with a dedicated team area."
  - Ask: Provide final workspace preferences by March 20

  ## 5. Escalation Protocol
  - Trigger: Any issue that could delay move date or affect business continuity on April 15
  - Sequence: Jordan Kim → COO (within 1 hour) → CEO (within 2 hours if needed)
  - Format: Situation + impact + recommended action (1 paragraph max)
  - Approval: All company-wide communications require COO sign-off
tips:
  - "Map your stakeholders to a 2x2 grid (influence vs. interest) first — this instantly tells you who gets white-glove communication vs. a monthly newsletter."
  - "The Key Message Framework is the most useful section in practice. Before sending any communication, check: does this message address what this audience worries about?"
  - "Centralize all project communications in one place (a Notion page, a #project-channel). Stakeholders who miss an email can always find the latest status."
  - "The resistant stakeholder is the most important one to communicate with early and often — their concerns, if not addressed, become the loudest voice in the room."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cross-functional-brief
  - project-brief
  - status-update
  - team-update-email
tags:
  - communication
  - stakeholder-management
  - project-management
  - planning
  - operations
---
