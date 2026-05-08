---
title: "Write a performance improvement plan (PIP)"
slug: pip-documentation
function: hr
role: people-ops
description: "Generate a structured performance improvement plan that documents performance concerns, sets clear expectations, and gives the employee a genuine opportunity to succeed."
useCase: "Use this prompt to write a PIP when an employee's performance has fallen below acceptable standards and prior coaching has not produced the necessary improvement. A well-written PIP is both legally defensible and genuinely useful as a development tool — it makes expectations explicit and gives the employee a clear path to success."
prompt: |
  You are an HR business partner drafting a performance improvement plan with the employee's manager.

  Context:
  - Employee name and role: {{employee_name_and_role}}
  - Manager: {{manager_name}}
  - Company: {{company_name}}
  - PIP start date: {{start_date}}
  - PIP duration: {{duration}} (typically 30, 60, or 90 days)
  - Performance concerns: {{performance_concerns}} (specific, documented behaviors and outcomes — not personality descriptions)
  - Prior coaching or feedback given: {{prior_feedback}} (what has been communicated previously — dates and substance if possible)
  - Performance expectations not being met: {{expectations_not_met}} (what the role requires that isn't happening)
  - Specific measurable goals for the PIP: {{pip_goals}} (what success looks like — specific and observable)
  - Support being provided: {{support_offered}} (coaching, training, check-ins, resources)
  - Consequences of not meeting PIP: {{consequences}} (typically: continued employment contingent on meeting goals)

  Write a PIP document with these sections:

  ## Purpose
  Why this document exists — to provide the employee a structured path to meet performance expectations, with clear criteria for success.

  ## Performance Concerns
  Specific, factual description of the performance gaps:
  - Concrete behaviors or outcomes (not "attitude problems" or "not a team player")
  - Specific examples with dates where possible
  - How current performance compares to the expectation

  ## Prior Coaching and Feedback
  Documentation of previous conversations and feedback — dates, what was communicated, and the employee's response at the time.

  ## PIP Goals and Success Criteria
  For each performance area: the specific, measurable goal that constitutes success during the PIP period. Written so that success or failure is unambiguous.

  ## Action Plan
  What the employee will do — specific actions, by when, to address each performance concern.

  ## Support and Resources
  What the company will provide — coaching sessions, training, check-in frequency, documentation support.

  ## Check-In Schedule
  Specific dates for formal check-ins during the PIP period.

  ## Consequences
  Clear statement of what happens at the end of the PIP: if goals are met, continued employment; if goals are not met, employment may be terminated. Written matter-of-factly, not punitively.

  ## Signatures
  Space for employee, manager, and HR acknowledgment.

  Tone: factual, clear, and firm without being adversarial. A PIP is not a punishment — it's a documented process. The language should reflect that while being honest about the stakes.

  Important note: Include a reminder to have this document reviewed by an employment attorney or HR counsel before delivery in jurisdictions where PIPs have specific legal requirements.
variables:
  - "{{employee_name_and_role}}"
  - "{{manager_name}}"
  - "{{company_name}}"
  - "{{start_date}}"
  - "{{duration}}"
  - "{{performance_concerns}}"
  - "{{prior_feedback}}"
  - "{{expectations_not_met}}"
  - "{{pip_goals}}"
  - "{{support_offered}}"
  - "{{consequences}}"
exampleInput: |
  employee_name_and_role: Alex Thompson, Account Executive
  manager_name: James Wu, VP of Sales
  company_name: Anchor Analytics
  start_date: May 1, 2024
  duration: 60 days (ending June 30, 2024)
  performance_concerns: |
    1. Quota attainment: 28% attainment in Q1 ($165K vs. $600K annual target pro-rated to $150K Q1 target — actually 110% of Q1 but annual pace is at 28% of plan)
    Actually: Alex achieved $165K new ARR in Q1 against a $150K ramp target (110%) but Q2 is showing significant shortfall — Q2 MTD through week 6 is $45K against a $300K Q2 target
    Revise: The concern is Q2 performance — $45K of new ARR through week 6 of Q2 against a $300K quarterly target (15% of target with 6 weeks remaining); pipeline coverage is 0.8x vs. required 3x minimum; only 2 active opportunities in pipeline
    2. Pipeline generation: Alex has not added a new prospect to the pipeline in 4 weeks; outbound activity (emails and calls) has dropped significantly from expected levels (6 emails/day → averaging 1.2/day; 15 calls/day → averaging 3.1/day)
    3. Salesforce hygiene: Stage accuracy is 68% (below the 95% minimum); 7 open opportunities have had no activity logged in 14+ days
  prior_feedback: 1:1 on April 2 — James flagged pipeline activity decline; Alex committed to increase outreach volume. 1:1 on April 15 — volume remained below targets; James documented this verbally and via Slack message. April 22 — James and HR met with Alex to formally discuss the trajectory and notify that a PIP would follow if performance didn't improve. April 22–April 30: no meaningful change in pipeline activity or Salesforce hygiene
  expectations_not_met: Minimum 6 emails/day and 15 calls/day outbound activity; minimum 3x pipeline coverage; Salesforce stage accuracy >95%; minimum $300K new ARR in Q2
  pip_goals: By June 30 — (1) Close or have signed contracts for $200K+ new ARR in Q2; (2) Maintain 3x pipeline coverage for remainder of Q2; (3) Average daily outbound: 5+ emails and 12+ calls per day for duration of PIP; (4) Salesforce accuracy: 90%+ by May 15 and maintained through June 30
  support_offered: Weekly 1:1 with James (existing); outbound sequence review and coaching May 1–15; Chorus call recording review weekly; access to VP Sales for deal review on all active opportunities
  consequences: Continued employment contingent on meeting PIP goals; failure to meet PIP goals may result in termination
exampleOutput: |
  # Performance Improvement Plan
  **Anchor Analytics, Inc.**

  **Employee:** Alex Thompson, Account Executive
  **Manager:** James Wu, VP of Sales
  **HR:** Maya Chen, People Operations
  **PIP Period:** May 1, 2024 – June 30, 2024 (60 days)
  **Date Issued:** May 1, 2024

  *This document has been reviewed with HR and should be reviewed by employment counsel before delivery in your jurisdiction.*

  ---

  ## Purpose

  This Performance Improvement Plan (PIP) is intended to give Alex Thompson a structured opportunity to meet the performance expectations of the Account Executive role at Anchor Analytics. The purpose is not punitive — it is to make performance expectations explicit, provide specific goals and support to achieve them, and establish a clear timeline for assessment.

  ---

  ## Performance Concerns

  The following performance concerns have been identified through direct observation and data analysis:

  **1. Insufficient Q2 Pipeline Generation and Deal Activity**
  As of April 30, 2024 (Week 6 of Q2):
  - Q2 new ARR closed: $45,000 against a $300,000 quarterly target (15% of target with 6 weeks remaining)
  - Active pipeline: 2 opportunities; pipeline coverage 0.8x against a minimum required 3x coverage
  - No new prospects have been added to the pipeline since April 1, 2024 (4 weeks)

  A pipeline coverage ratio of 0.8x with 6 weeks remaining makes it mathematically very difficult to meet the Q2 target without immediate and significant pipeline development.

  **2. Outbound Activity Below Minimum Standards**
  Expected outbound activity per the AE performance standards:
  - Email outreach: 6+ per business day
  - Calls: 15+ per business day

  Actual average (April 1–30, 2024, per Outreach analytics):
  - Email outreach: 1.2 per day (80% below standard)
  - Calls: 3.1 per day (79% below standard)

  **3. Salesforce Hygiene Below Minimum Standards**
  Current Salesforce stage accuracy: 68% (minimum: 95%)
  Seven opportunities have no activity logged in 14+ days, despite being in active stages.

  ---

  ## Prior Coaching and Feedback

  The following feedback and coaching conversations preceded this PIP:

  | Date | Type | Content |
  |---|---|---|
  | April 2, 2024 | 1:1 (verbal) | James flagged declining pipeline activity; Alex committed to increase outreach volume |
  | April 15, 2024 | 1:1 (verbal + Slack message) | Activity had not improved; James documented the conversation and sent a written summary via Slack |
  | April 22, 2024 | Formal meeting with HR | James and Maya met with Alex to formally communicate that performance was not meeting expectations and that continued underperformance would result in a PIP; Alex acknowledged the conversation |
  | April 22–30, 2024 | Monitoring period | Outbound activity and Salesforce hygiene showed no meaningful improvement during the 8-day period between the April 22 meeting and the PIP start date |

  ---

  ## PIP Goals and Success Criteria

  The following specific, measurable goals must be met by June 30, 2024:

  | Goal | Success Criteria | Measurement Method |
  |---|---|---|
  | New ARR | $200,000+ closed in Q2 2024 | CRM closed-won records |
  | Pipeline coverage | Maintain 3x pipeline coverage ratio for all weeks of the PIP | Salesforce pipeline report, reviewed weekly |
  | Daily outbound (emails) | Average 5+ emails per business day for the PIP period | Outreach analytics, reviewed weekly |
  | Daily outbound (calls) | Average 12+ calls per business day for the PIP period | Outreach analytics, reviewed weekly |
  | Salesforce accuracy | 90%+ stage accuracy by May 15; maintained through June 30 | Weekly CRM audit by James |

  ---

  ## Action Plan

  Alex will take the following specific actions during the PIP period:

  **Week 1 (May 1–7):**
  - Complete Salesforce cleanup: update stage, next step, and close date for all open opportunities by May 3
  - Build a 30-day prospecting target account list (minimum 60 accounts); share with James by May 7
  - Review outbound sequences with James; select 2 sequences to run for the PIP period

  **Weeks 1–8 (ongoing):**
  - Execute minimum outbound targets daily (5+ emails, 12+ calls); log in Outreach
  - Update Salesforce immediately after every call or meeting (same-day logging)
  - Add minimum 2 new qualified prospects to pipeline per week
  - Bring all active opportunities to James's weekly deal review

  ---

  ## Support and Resources

  Anchor Analytics will provide the following support during the PIP period:

  - **Weekly 1:1 with James Wu:** Every Monday at 10:00 AM; agenda will include outbound data review, pipeline review, and deal coaching
  - **Outbound sequence coaching:** James will review and co-author outbound sequences during weeks 1 and 2
  - **Call recording review:** Weekly review of 2 Chorus call recordings per week; James will provide written feedback
  - **Deal review access:** Alex may bring any active opportunity to James for live coaching on the deal strategy at any time

  ---

  ## Check-In Schedule

  | Date | Type | Participants |
  |---|---|---|
  | May 8, 2024 | Week 1 check-in | Alex, James, Maya |
  | May 15, 2024 | Midpoint review (30 days) | Alex, James, Maya |
  | May 22, 2024 | Week 3 check-in | Alex, James |
  | June 5, 2024 | Week 5 check-in | Alex, James, Maya |
  | June 30, 2024 | PIP conclusion review | Alex, James, Maya |

  Check-ins will document progress against each goal and any changes to the action plan.

  ---

  ## Consequences

  At the conclusion of the PIP on June 30, 2024, Anchor Analytics will assess performance against the goals outlined above:

  - If goals are met: the PIP will be closed and Alex will continue in the Account Executive role. Performance will be monitored through the remainder of the year.
  - If goals are not met, or if performance deteriorates significantly during the PIP period: employment may be terminated.

  ---

  ## Acknowledgment

  By signing below, each party acknowledges that they have read and understand this document. Employee signature does not necessarily indicate agreement with the performance concerns — it indicates that the document has been reviewed.

  **Employee:** ___________________________ Date: ___________
  **Manager:** ___________________________ Date: ___________
  **HR Representative:** ___________________________ Date: ___________
tips:
  - "PIPs fail most often because the goals are too vague to evaluate. '$200K new ARR' is evaluable. 'Improved pipeline management' is not. Every goal must pass the 'could a reasonable person agree on whether this was met?' test."
  - "Performance concerns must be behavioral and factual, not character assessments. 'Alex's outbound call volume averaged 3.1 per day against a 15-call standard' is documentable. 'Alex lacks motivation' is not."
  - "Document prior coaching before writing the PIP. A PIP without documented prior feedback is legally weaker and ethically problematic — the employee should not be surprised by the performance concerns."
  - "Include genuine support in the PIP — not as a formality, but because it serves two purposes: it gives the employee a real shot at succeeding, and it demonstrates good faith. A PIP with no support offered is more legally vulnerable."
  - "Have employment counsel review the PIP before delivery, especially in California, New York, or other states with strong employment protections. The language in a PIP can become evidence in a wrongful termination claim — get it right."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - termination-talking-points
  - performance-review-self-assessment
  - manager-feedback-summary
  - employee-handbook-section
tags:
  - pip
  - performance-management
  - people-ops
  - hr
  - documentation
---
