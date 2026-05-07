---
title: "Analyze team capacity against upcoming demand"
slug: capacity-planning-analysis
function: operations
role: ops-management
description: "Assess whether a team has sufficient capacity to handle projected workload — and produce a clear recommendation for how to close any gap."
useCase: "Use this prompt at the start of a planning cycle, before committing to a roadmap, or when a team leader raises concerns about bandwidth. Provide the team's current capacity and upcoming demand, and get a structured analysis with options for closing gaps."
prompt: |
  You are a senior operations and workforce planning expert. Conduct a capacity planning analysis for the team described below and produce a clear, actionable recommendation.

  **Team:** {{team_name}}
  **Planning horizon:** {{planning_horizon}} (e.g., "Q4 2024", "next 6 months", "calendar year 2025")
  **Team composition:** {{team_composition}} (headcount by role, including any contractors or part-time staff)
  **Current team utilization:** {{current_utilization}} (approximate % of time currently committed to active work)
  **Planned projects and initiatives:** {{planned_work}} (with estimated effort per project)
  **Recurring operational work (BAU):** {{bau_work}} (approximate % of team time)
  **Known capacity constraints:** {{constraints}} (planned leaves, hiring gaps, tool limitations, etc.)
  **Business context:** {{business_context}} (growth rate, strategic priorities, budget situation)

  Conduct a structured capacity analysis with these sections:

  ## 1. Current State Capacity Summary
  Calculate total available capacity in the planning horizon:
  - Raw available hours or story points (team size × working days × utilization ceiling)
  - Deduct: BAU/operational work
  - Deduct: meetings, overhead (standard assumption: 20% unless otherwise specified)
  - **Net available capacity for project work**

  Present this as a simple table showing the math clearly.

  ## 2. Demand Analysis
  List all planned work and their estimated capacity requirements:
  | Project/Initiative | Priority | Effort Estimate | Duration | Owner Role | Confidence in Estimate |

  Calculate total demand. Flag estimates where confidence is low.

  ## 3. Gap Analysis
  - Total available capacity vs. total demand
  - Surplus (if demand < capacity) or deficit (if demand > capacity)
  - **Capacity utilization rate** (demand / available capacity × 100%)
  - Risk assessment: what happens if estimates are 20% too optimistic?

  ## 4. Bottleneck Identification
  Are there specific roles, skills, or people who are disproportionately overloaded? A team-level surplus can mask role-level constraints.
  - Identify any individual or role that is >100% utilized
  - Identify any single points of failure (only one person can do a critical task)
  - Identify any skill gaps (work is planned but the team lacks the expertise)

  ## 5. Scenario Analysis
  Model three scenarios:
  - **Base case:** Current plan as-is
  - **Risk case:** All estimates 20% over-run; one unexpected project added
  - **Optimistic case:** 10% productivity improvement from tooling or process changes

  ## 6. Options to Close the Gap (or Right-Size a Surplus)
  For each option, provide: description, capacity impact, cost/effort, timeline to impact, and trade-offs.
  Consider: hiring, contractors, deprioritization, scope reduction, timeline extension, automation, reallocation from other teams.

  ## 7. Recommendation
  State a clear recommendation:
  - What is the right capacity strategy for this planning horizon?
  - Which projects should be committed, deferred, or descoped?
  - What decisions need to be made, and by whom, and by when?

  ## 8. Assumptions and Caveats
  List the key assumptions underlying this analysis. Note which ones, if wrong, would materially change the recommendation.
variables:
  - "{{team_name}}"
  - "{{planning_horizon}}"
  - "{{team_composition}}"
  - "{{current_utilization}}"
  - "{{planned_work}}"
  - "{{bau_work}}"
  - "{{constraints}}"
  - "{{business_context}}"
exampleInput: |
  team_name: Data Engineering
  planning_horizon: Q1 2025 (13 weeks)
  team_composition: 4 senior data engineers, 1 data engineering manager (50% hands-on), 1 contractor (ends Dec 31)
  current_utilization: 85% committed to active projects; contractor is 100%
  planned_work: |
    - CDP implementation (cross-functional, required): 3 engineers × 6 weeks
    - Analytics dashboard rebuild (high priority): 1.5 engineers × 8 weeks
    - Data quality framework (medium priority): 1 engineer × 4 weeks
    - Security audit remediation (compliance, required): 0.5 engineer × 3 weeks
    - 2 ad-hoc stakeholder requests (low estimate): 2 engineer-weeks total
  bau_work: 25% (pipeline monitoring, incident response, stakeholder data pulls)
  constraints: Contractor leaving Dec 31. One senior engineer on parental leave Feb 1–March 31. No approved headcount for Q1 hiring.
  business_context: Company growing 40% YoY. Data team is a bottleneck cited in 3 recent executive conversations. Budget is tight — no new headcount approved but contractor extensions are possible.
exampleOutput: |
  ## 1. Current State Capacity Summary

  | Component | Calculation | Result |
  |-----------|-------------|--------|
  | Raw headcount | 4 senior + 0.5 manager = 4.5 FTEs in Q1 (contractor ends Dec 31) | 4.5 FTEs |
  | Parental leave deduction | 1 senior engineer out Feb 1–Mar 31 = 0.5 FTE equivalent for 13 weeks | -0.5 FTE |
  | Effective headcount | | 4.0 FTEs |
  | Available engineer-weeks (13 weeks) | 4.0 × 13 | 52 engineer-weeks |
  | BAU deduction (25%) | 52 × 0.25 | -13 engineer-weeks |
  | Overhead/meetings (20%) | 52 × 0.20 | -10 engineer-weeks |
  | **Net available for project work** | | **29 engineer-weeks** |

  ## 2. Demand Analysis

  | Project | Priority | Effort | Confidence |
  |---------|----------|--------|------------|
  | CDP implementation | Required | 18 engineer-weeks | Medium |
  | Analytics dashboard | High | 12 engineer-weeks | Low |
  | Data quality framework | Medium | 4 engineer-weeks | High |
  | Security audit | Required | 1.5 engineer-weeks | High |
  | Ad-hoc requests | Low | 2 engineer-weeks | Low |
  | **Total demand** | | **37.5 engineer-weeks** | |

  ## 3. Gap Analysis
  - **Available:** 29 engineer-weeks
  - **Demanded:** 37.5 engineer-weeks
  - **Deficit:** 8.5 engineer-weeks (29% over capacity)
  - Utilization rate: 129% — unsustainable
  - **Risk case** (20% overruns): deficit grows to 16 engineer-weeks — 55% over capacity

  ## 6. Options to Close the Gap
  | Option | Capacity Gain | Cost | Timeline | Trade-off |
  |--------|--------------|------|----------|-----------|
  | Extend contractor 1 month | +8 engineer-weeks | ~$24K | Immediate | Solves most of the gap if approved |
  | Defer analytics dashboard to Q2 | +12 engineer-weeks | $0 | Immediate | Disappoints stakeholders; delays planned metrics |
  | Reduce CDP commitment to 2 engineers | +6 engineer-weeks | $0 | Immediate | Extends CDP timeline by 3 weeks |

  ## 7. Recommendation
  Extend the contractor through March 31 (cost: ~$24K) AND defer the analytics dashboard to Q2. This combination brings utilization to ~95% — manageable, with buffer for the inevitable unplanned work. The dashboard deferral requires stakeholder alignment; the COO should communicate this proactively. A Q1 headcount request should be prepared for Q2 planning regardless of the contractor decision.
tips:
  - "Always include a 'risk case' scenario — plans built on best-case estimates consistently disappoint. Adding 20% to all estimates reveals the true capacity picture."
  - "Role-level bottlenecks hide in team-level analyses. A 75% utilized team can have one person at 150% — always check by role."
  - "Include BAU work explicitly — teams habitually undercount the operational load and then wonder why projects slip."
  - "The recommendation must include which projects get cut or deferred — a capacity analysis that doesn't result in a prioritization decision isn't finished."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - okr-draft
  - process-audit
  - decision-memo
  - gantt-task-breakdown
tags:
  - capacity-planning
  - workforce-planning
  - resource-management
  - operations
  - planning
---
