---
title: "Audit a business process and identify inefficiencies"
slug: process-audit
function: operations
role: ops-management
description: "Analyze a described business process to surface bottlenecks, waste, redundancy, and risk — with prioritized recommendations for improvement."
useCase: "Use this prompt when a process feels slow, broken, or error-prone but you can't pinpoint exactly why. Describe the current state as accurately as possible (even if messy) and get a structured diagnosis with specific, actionable fixes ranked by impact and effort."
prompt: |
  You are a seasoned process improvement consultant with expertise in operational efficiency, Lean methodology, and organizational design. Your task is to conduct a rigorous audit of the process described below and produce a prioritized improvement report.

  **Process name:** {{process_name}}
  **Department/team:** {{department}}
  **Process description (current state):** {{current_state_description}}
  **Known pain points or complaints:** {{known_pain_points}}
  **Approximate volume:** {{process_volume}} (e.g., "50 invoices/week", "200 support tickets/month")
  **Number of people involved:** {{headcount_involved}}
  **Tools/systems used:** {{tools_used}}
  **Goal of this audit:** {{audit_goal}}

  Conduct a structured process audit using the following framework:

  ## 1. Process Summary
  Restate the process in your own words to confirm understanding. Identify the process start trigger, end state, and primary customer (internal or external).

  ## 2. Process Map (Text-Based)
  Map the process as a linear flow with decision points. Use this notation:
  - [STEP] for actions
  - <DECISION> for decision points (Yes/No branches)
  - (HANDOFF) for role transitions
  - {WAIT} for delays or queues
  - [END] for termination points

  ## 3. Waste & Inefficiency Analysis
  Analyze the process against seven categories of waste (adapted from Lean):
  - **Overproduction:** Steps that generate output no one uses
  - **Waiting:** Queues, approval delays, dependencies causing idle time
  - **Motion:** Unnecessary movement of people or data between systems
  - **Defects:** Errors, rework, and quality failures
  - **Overprocessing:** Steps that add no value from the customer's perspective
  - **Inventory:** Work-in-progress buildup, backlogs, unprocessed items
  - **Underutilized talent:** Manual work that should be automated or delegated

  For each category, identify specific instances in this process and estimate their impact.

  ## 4. Risk Assessment
  Identify process risks in three categories:
  - **Single points of failure** (process breaks if one person is unavailable)
  - **Compliance/audit risks** (no paper trail, inconsistent execution, regulatory gaps)
  - **Data integrity risks** (manual entry, missing validation, inconsistent records)

  ## 5. Root Cause Analysis
  For the top 3 pain points identified, conduct a 5 Whys analysis to find root causes (not symptoms).

  ## 6. Improvement Recommendations
  List specific recommendations in a prioritized table:
  | Priority | Recommendation | Root Cause Addressed | Estimated Impact | Implementation Effort | Type |
  Where:
  - Priority: 1 (critical), 2 (high), 3 (medium)
  - Estimated Impact: High/Medium/Low (time saved, errors reduced, etc.)
  - Implementation Effort: Low (<1 week), Medium (1–4 weeks), High (>1 month)
  - Type: Quick Win / Process Change / Technology / Organizational

  ## 7. Quick Wins (Implement This Week)
  Call out 2–3 changes that require no budget, no new tools, and no approvals — just a decision to do things differently.

  ## 8. 30/60/90 Day Improvement Roadmap
  Sequence the recommendations into a realistic timeline.

  ## 9. Metrics to Track Progress
  Define 3–5 specific, measurable KPIs to monitor improvement after changes are implemented. Include current baseline estimate and target.
variables:
  - "{{process_name}}"
  - "{{department}}"
  - "{{current_state_description}}"
  - "{{known_pain_points}}"
  - "{{process_volume}}"
  - "{{headcount_involved}}"
  - "{{tools_used}}"
  - "{{audit_goal}}"
exampleInput: |
  process_name: New employee IT onboarding
  department: IT / HR
  current_state_description: When a new hire starts, HR sends an email to IT with the new hire's name and start date. IT manually creates accounts in Active Directory, M365, Slack, Salesforce, and any other tools requested by the hiring manager. The hiring manager sends a separate email listing tool access. Sometimes IT gets the email from HR and nothing from the manager, or vice versa. Accounts are sometimes ready on day 1, sometimes not until day 3. IT also ships the laptop via FedEx, which sometimes arrives late. There is no tracking system — IT manages it in a shared inbox with color-coded flags.
  known_pain_points: New hires can't do their job on day 1 because accounts aren't ready. IT is constantly interrupted by Slack messages asking for status. Hiring managers forget to send tool lists. No consistent off-boarding either.
  process_volume: ~8 new hires/month
  headcount_involved: 3 (IT admin, HR coordinator, hiring manager)
  tools_used: Email, Active Directory, M365 Admin, Slack, Salesforce, FedEx Ship Manager
  audit_goal: Ensure every new hire has full access on their first morning, reduce IT burden, and create an auditable trail.
exampleOutput: |
  ## 1. Process Summary
  The IT onboarding process begins when a new hire's start date is confirmed and ends when the new hire has access to all required systems on day 1. The primary customers are the new hire (who needs to be productive immediately) and the hiring manager (who needs their team member operational). Currently, the process is fragmented across two uncoordinated input streams (HR and hiring manager) and managed via an informal shared inbox system.

  ## 2. Process Map
  [HR confirms hire] → (HANDOFF to IT) → {WAIT: hiring manager sends tool list} → <DECISION: both inputs received?>
    - Yes → [IT creates AD account] → [IT provisions M365] → [IT provisions Slack] → [IT provisions Salesforce] → [IT ships laptop] → {WAIT: FedEx delivery} → [END: new hire starts]
    - No → {WAIT: chase missing input} → loop back

  ## 3. Waste Analysis
  - **Waiting:** Average 1.5 days lost waiting for hiring manager tool list. Laptop shipping adds 1–3 day uncertainty.
  - **Motion:** IT switches between 5 separate admin consoles with no automation. Each hire requires ~12 manual logins.
  - **Defects:** ~30% of hires have at least one missing access on day 1. Rework averages 2 hours per incident.
  - **Overprocessing:** IT manually tracks status in a color-coded inbox — this is a manual KPI system that should be automated.
  - **Underutilized talent:** Senior IT admin performing repetitive account creation that could be templated or scripted.

  ## 5. Root Cause Analysis (Top Pain Points)
  **Pain point: New hire doesn't have access on day 1**
  - Why? IT doesn't have the tool list in time.
  - Why? Hiring manager sends it separately with no deadline.
  - Why? There's no structured intake form or deadline requirement.
  - Why? IT never formalized the request process with HR.
  - **Root cause:** No single structured intake process that captures all required information before provisioning begins.

  ## 6. Improvement Recommendations
  | Priority | Recommendation | Impact | Effort | Type |
  |----------|---------------|--------|--------|------|
  | 1 | Create a unified IT onboarding intake form (Google Form or Jira ticket) triggered by HR at offer acceptance | High | Low | Process Change |
  | 1 | Set SLA: form must be submitted 10 business days before start date | High | Low | Process Change |
  | 2 | Build provisioning checklist in Jira with role-based templates | High | Medium | Technology |
  | 2 | Script AD + M365 account creation from intake form data | High | High | Technology |
  | 3 | Switch to same-day laptop shipping (pre-stage common configs) | Medium | Medium | Process Change |

  ## 7. Quick Wins (This Week)
  1. Create a shared Google Form for intake and email the link to all hiring managers today.
  2. Add a calendar reminder to IT: check for upcoming starts every Monday morning.
  3. Build a simple Google Sheet tracker visible to IT, HR, and hiring managers so anyone can check status without pinging IT.
tips:
  - "Be as specific as possible about the current state — vague descriptions produce vague recommendations. If you have volume numbers, error rates, or time estimates, include them."
  - "After generating the audit, share it in a working session with the people who actually do the process — they'll immediately tell you which recommendations are realistic and which miss the mark."
  - "Focus implementation energy on Priority 1 items first. Teams that try to fix everything at once fix nothing."
  - "Use the metrics section to create a before/after measurement plan — without baselines, you can't prove improvement."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - sop-draft
  - capacity-planning-analysis
  - decision-memo
  - retrospective-summary
tags:
  - process-improvement
  - lean
  - operations
  - efficiency
  - audit
---
