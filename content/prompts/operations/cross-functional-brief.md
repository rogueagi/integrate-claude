---
title: "Write a cross-functional initiative kick-off brief"
slug: cross-functional-brief
function: operations
role: ops-management
description: "Create a comprehensive kick-off brief for a cross-functional initiative that aligns teams, clarifies ownership, and prevents the coordination failures that derail projects."
useCase: "Use this prompt when launching an initiative that involves more than one team. Cross-functional projects fail most often due to unclear ownership, misaligned expectations, and absent decision-making structure — this brief addresses all three before work begins."
prompt: |
  You are a senior program manager experienced in coordinating complex cross-functional initiatives at technology companies. Write a comprehensive kick-off brief for the initiative described below.

  **Initiative name:** {{initiative_name}}
  **Executive sponsor:** {{executive_sponsor}}
  **Program manager:** {{program_manager}}
  **Teams involved:** {{teams_involved}}
  **Problem being solved:** {{problem_statement}}
  **Desired outcome / definition of success:** {{success_definition}}
  **Target completion / key milestone dates:** {{timeline}}
  **Known constraints:** {{constraints}} (budget, headcount, technical, regulatory, etc.)
  **What has already been decided:** {{decisions_already_made}}
  **What is still open:** {{open_decisions}}

  Write a cross-functional initiative brief with these sections:

  ## 1. Executive Summary (1 paragraph)
  What is this initiative, why does it matter now, and what will be different when it's complete? Written for a senior leader who has 60 seconds.

  ## 2. Problem Statement
  A precise description of the problem this initiative solves. Include:
  - Current state (what is happening today)
  - Impact of the problem (quantified where possible)
  - Root cause (if known)
  - Why solving this now is more important than other priorities

  ## 3. Objectives and Success Metrics
  - 3–5 specific, measurable objectives
  - For each objective: the metric that will prove success and the target value
  - Definition of "done" — how will we know this initiative is complete?

  ## 4. Scope
  **In scope:** Explicit list of what this initiative covers
  **Out of scope:** Explicit list of what this initiative does NOT cover (this section prevents scope creep)
  **Assumptions:** What must be true for this plan to work

  ## 5. Team Structure and Ownership
  A responsibility matrix (RACI) for this initiative:
  | Workstream | Responsible | Accountable | Consulted | Informed |

  For each team involved, describe:
  - Their specific contribution to this initiative
  - Their bandwidth commitment (e.g., "1 engineer, 50% time for 6 weeks")
  - Their single point of contact / representative

  ## 6. Governance and Decision-Making
  - Who makes decisions when teams disagree? (Escalation path)
  - What decisions require executive sponsor involvement?
  - Cadence: steering meetings, working sessions, async updates
  - How will progress be reported and to whom?

  ## 7. Milestone Plan
  A high-level timeline with:
  - Key milestones and their dates
  - What defines each milestone as complete (acceptance criteria)
  - Critical dependencies between milestones

  ## 8. Risks and Mitigations
  | Risk | Likelihood | Impact | Mitigation | Owner |

  ## 9. Open Questions and Decisions Needed
  List every open question or pending decision, with:
  - The question
  - Who needs to make this decision
  - When it must be decided to avoid blocking work
  - Consequences if not decided in time

  ## 10. Communication Plan
  - How will progress be communicated and to whom?
  - Frequency and format of updates
  - Who owns the communication?
variables:
  - "{{initiative_name}}"
  - "{{executive_sponsor}}"
  - "{{program_manager}}"
  - "{{teams_involved}}"
  - "{{problem_statement}}"
  - "{{success_definition}}"
  - "{{timeline}}"
  - "{{constraints}}"
  - "{{decisions_already_made}}"
  - "{{open_decisions}}"
exampleInput: |
  initiative_name: Unified Customer Data Platform (CDP) Implementation
  executive_sponsor: Chief Revenue Officer
  program_manager: Ops Director (Maria Santos)
  teams_involved: Sales Ops, Marketing, Engineering (Data Platform), Customer Success, IT/Security
  problem_statement: Customer data is currently split across 6 systems (Salesforce, HubSpot, Gainsight, Amplitude, Zendesk, and a custom data warehouse). No team has a complete picture of a customer. This causes CS to miss at-risk signals, Sales to not know about open support tickets before calls, and Marketing to send emails to customers who just churned.
  success_definition: Every customer-facing team can see a unified 360 view of any customer in a single interface. No more than 24-hour data lag between source systems and the CDP.
  timeline: Must be complete before Q1 sales kickoff (January 15). Discovered need in October.
  constraints: No new vendor contracts — must use existing tool stack. Engineering can commit 2 engineers at 60% for 10 weeks. Budget: $0 additional.
  decisions_already_made: Salesforce will be the system of record. CDP will be built on our existing Snowflake data warehouse.
  open_decisions: Which team owns the CDP long-term (Engineering vs. RevOps)? What customer data is visible to which roles? How do we handle data discrepancies between systems?
exampleOutput: |
  # Cross-Functional Initiative Brief: Unified Customer Data Platform (CDP)
  **Sponsor:** Chief Revenue Officer | **PM:** Maria Santos | **Target Launch:** January 15

  ## 1. Executive Summary
  We are building a unified Customer Data Platform that consolidates customer data from six siloed systems into a single, real-time view for every customer-facing team. Today, Customer Success misses churn signals because they can't see product usage data; Sales walks into calls without knowing there's an open support ticket; Marketing sends campaigns to recently churned customers. This initiative, using our existing Snowflake and Salesforce infrastructure at no additional cost, will close these gaps before the January sales kickoff — giving every revenue team the intelligence they need to work as one.

  ## 2. Problem Statement
  **Current state:** Customer data lives in six separate systems. No single team can see a complete picture of a customer without logging into multiple tools and manually correlating data.
  **Impact:** Three documented examples from Q3: (1) CS missed signals on 3 accounts that churned ($340K ARR); (2) 12% of Marketing email campaigns sent to accounts with open escalations; (3) average Sales call prep time is 35 minutes due to multi-system research.
  **Root cause:** Systems were purchased team-by-team over 4 years with no integration strategy.
  **Why now:** Q1 SKO is January 15. If sales reps can't demo the CDP in their first week, adoption will fail.
tips:
  - "The 'Out of scope' section is the most important section in a cross-functional brief. Teams will naturally try to expand scope — having it in writing prevents arguments later."
  - "Every open question in Section 9 should have a decision date. Without dates, decisions drift and create downstream blockers."
  - "Run this brief by all team leads before the kick-off meeting — surprises in a kick-off meeting signal that the brief wasn't consulted broadly enough."
  - "The RACI table prevents the most common cross-functional failure: two teams both assuming the other is responsible, so no one does it."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - meeting-agenda
  - stakeholder-communication-plan
  - decision-memo
  - project-brief
  - risk-register
tags:
  - cross-functional
  - program-management
  - project-management
  - alignment
  - operations
---
