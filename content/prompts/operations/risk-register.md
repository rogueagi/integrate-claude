---
title: "Build a risk register for a project with mitigation strategies"
slug: risk-register
function: operations
role: project-management
description: "Generate a comprehensive risk register for a project, including risk identification, scoring, mitigation plans, and ownership assignments."
useCase: "Use this prompt at project kick-off or when a project is entering a high-uncertainty phase. A good risk register turns vague anxiety about what could go wrong into a structured, owned, actionable list — and gives project sponsors confidence that risks are being managed."
prompt: |
  You are an experienced project manager and risk management practitioner. Build a comprehensive risk register for the project described below.

  **Project name:** {{project_name}}
  **Project description:** {{project_description}}
  **Project timeline:** {{timeline}}
  **Teams and stakeholders involved:** {{teams_stakeholders}}
  **Key deliverables:** {{key_deliverables}}
  **Known concerns or worries:** {{known_concerns}}
  **External dependencies:** {{external_dependencies}}
  **Project type:** {{project_type}} (e.g., technology implementation, product launch, organizational change, vendor migration)

  Build a risk register using this structure:

  ## Risk Register Header
  - Project name, version, date, owner
  - Risk scoring methodology explanation
  - Legend: Likelihood (1–5), Impact (1–5), Risk Score = L × I

  ## Risk Identification
  Identify risks across these categories — generate at least 3–5 risks per relevant category:

  **Scope and Requirements Risks**
  - Unclear or changing requirements
  - Scope creep and out-of-scope requests
  - Missing stakeholder alignment

  **Schedule and Resource Risks**
  - Key person unavailability
  - Timeline compression from external pressure
  - Resource conflicts with other projects

  **Technical and Quality Risks**
  - Integration failures
  - Data migration issues
  - Performance or scalability problems

  **Vendor and Dependency Risks**
  - Third-party delays
  - Vendor quality issues
  - License or contract problems

  **Organizational and Change Risks**
  - Stakeholder resistance
  - Training and adoption gaps
  - Organizational change happening in parallel

  **External Risks**
  - Regulatory changes
  - Market or economic shifts
  - Security or compliance breaches

  ## Risk Register Table
  For each identified risk, create a row:
  | ID | Category | Risk Description | Likelihood (1–5) | Impact (1–5) | Score | Status | Mitigation Strategy | Contingency Plan | Owner | Due Date | Notes |

  Where:
  - Likelihood: 1=Rare, 2=Unlikely, 3=Possible, 4=Likely, 5=Almost Certain
  - Impact: 1=Negligible, 2=Minor, 3=Moderate, 4=Major, 5=Catastrophic
  - Status: Open / In Mitigation / Closed / Realized
  - Mitigation Strategy: Proactive action to reduce likelihood or impact
  - Contingency Plan: What we do IF the risk is realized (not the same as mitigation)

  ## Risk Heat Map Summary
  Group risks by score into quadrants:
  - Critical (Score 15–25): Require immediate mitigation plans and executive visibility
  - High (Score 9–14): Require active mitigation and regular monitoring
  - Medium (Score 4–8): Monitor and mitigate where practical
  - Low (Score 1–3): Accept and monitor

  ## Top 5 Risks Deep Dive
  For the 5 highest-scored risks, provide a more detailed analysis:
  - Risk narrative (what exactly could happen and how)
  - Early warning indicators (how will we know this risk is materializing before it's too late?)
  - Mitigation plan with specific actions, owners, and dates
  - Contingency plan with trigger criteria (at what point do we activate the contingency?)

  ## Risk Management Process
  - How often will the risk register be reviewed?
  - Who is responsible for updating it?
  - What score threshold triggers escalation to the project sponsor?
  - How will new risks be added during the project?
variables:
  - "{{project_name}}"
  - "{{project_description}}"
  - "{{timeline}}"
  - "{{teams_stakeholders}}"
  - "{{key_deliverables}}"
  - "{{known_concerns}}"
  - "{{external_dependencies}}"
  - "{{project_type}}"
exampleInput: |
  project_name: ERP Migration (Quickbooks to NetSuite)
  project_description: Migrating all financial operations from QuickBooks Desktop to NetSuite, including chart of accounts, open AP/AR, historical data, and integrations with Salesforce and Stripe.
  timeline: 6 months (January–June)
  teams_stakeholders: Finance team (5 people), IT, VP Finance (sponsor), external NetSuite implementation partner (Sererra), Salesforce Admin, CEO (final sign-off)
  key_deliverables: Configured NetSuite environment, migrated historical data (3 years), Salesforce integration live, team trained, QuickBooks retired, parallel close completed
  known_concerns: Finance team has never used NetSuite. Historical data in QuickBooks is messy. Implementation partner came highly recommended but is new to us. Month-end close cannot be missed regardless of migration status.
  external_dependencies: NetSuite license (purchased), Sererra implementation partner, Stripe integration (Stripe's API), Salesforce Admin (shared resource, also supporting 2 other projects)
  project_type: Technology implementation / ERP migration
exampleOutput: |
  # Risk Register: ERP Migration (QuickBooks to NetSuite)
  **Version:** 1.0 | **Date:** January 3, 2024 | **Owner:** VP Finance
  **Scoring:** Risk Score = Likelihood (1–5) × Impact (1–5) | Max score: 25

  ## Risk Register

  | ID | Category | Risk | L | I | Score | Mitigation | Contingency | Owner |
  |----|----------|------|---|---|-------|------------|-------------|-------|
  | R-01 | Technical | Historical QuickBooks data has quality issues that delay migration | 4 | 4 | 16 | Data audit in Week 1; dedicate 1 Finance resource to data cleanup | Extend parallel close period; delay cutover by 4 weeks | VP Finance |
  | R-02 | Schedule | Month-end close compromised during migration period | 3 | 5 | 15 | Schedule cutover outside close window; maintain QuickBooks access through June | Run parallel close in both systems for 2 months | VP Finance |
  | R-03 | Vendor | Sererra implementation partner delivers late or below quality | 3 | 5 | 15 | Weekly milestone check-ins; contract SLAs with penalties; weekly demo of deliverables | Engage backup NetSuite partner; consider go-live delay | IT Director |
  | R-04 | Resource | Salesforce Admin overcommitted — integration deprioritized | 4 | 3 | 12 | Formally reserve 30% Salesforce Admin time; escalate conflicts to COO | Use manual export/import process temporarily; hire contractor | IT Director |
  | R-05 | Change | Finance team resistance or slow adoption of NetSuite | 3 | 4 | 12 | Executive champion (VP Finance) visibly committed; training in Month 4; super-user program | Extend cutover timeline; bring in NetSuite power user as temporary support | VP Finance |

  ## Top Risk Deep Dive: R-02 — Month-End Close Compromised

  **Risk narrative:** If the migration timeline slips, there is a risk that the team is in an in-between state at month-end — QuickBooks is being retired but NetSuite is not fully operational. This would delay the close, create audit issues, and potentially impact financial reporting to the board.

  **Early warning indicators:** Migration is more than 2 weeks behind schedule by the end of Month 3; Sererra has not delivered configured chart of accounts by Week 6.

  **Mitigation plan:**
  - Schedule cutover date to avoid month-end (target: June 17, two weeks before June 30 close)
  - Maintain read-only QuickBooks access through August 31 for reference
  - Build a "close readiness checklist" with Sererra by Month 3

  **Contingency trigger:** If cutover cannot happen by June 17, activate parallel close protocol — run both systems for July and close in QuickBooks only.

  ## Risk Management Process
  - Register reviewed in every weekly project steering meeting
  - New risks added by any team member via the Risk Log form (linked in project channel)
  - Any risk with score ≥15 is flagged to VP Finance and CEO within 24 hours
  - Owner updates mitigation status weekly
tips:
  - "Separate mitigation (reducing likelihood/impact before it happens) from contingency (what you do after it happens). Most risk registers only have mitigation and leave teams scrambling when risks realize."
  - "The early warning indicators in the Top 5 deep dive are the most actionable part of the register. Review them at every status meeting — they give you time to react."
  - "A risk register no one reads is decoration. Integrate it into your weekly status meeting agenda: '5 minutes — any new risks? Any status changes?'"
  - "Score risks conservatively at first, then update as the project progresses. A risk that was Unlikely in Week 1 may be Likely by Week 8."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - project-brief
  - status-update
  - cross-functional-brief
  - vendor-evaluation-scorecard
tags:
  - risk-management
  - project-management
  - planning
  - operations
  - governance
---
