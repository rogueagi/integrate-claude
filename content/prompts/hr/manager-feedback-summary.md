---
title: "Summarize multi-source feedback for a manager review"
slug: manager-feedback-summary
function: hr
role: ld
description: "Synthesize feedback from multiple sources (peers, direct reports, self-assessment, manager observations) into a coherent, actionable performance summary for a manager review conversation."
useCase: "Use this prompt when preparing for a performance review conversation with a manager or when conducting a 360 review. Raw multi-source feedback is hard to act on — this prompt synthesizes themes, identifies patterns, and produces actionable development priorities that make the review conversation productive rather than defensive."
prompt: |
  You are an HR business partner, L&D lead, or manager synthesizing multi-source feedback for a performance review.

  Context:
  - Employee name and role: {{employee_name_and_role}}
  - Review period: {{review_period}}
  - Company: {{company_name}}
  - Feedback sources: {{feedback_sources}} (self-assessment, manager observations, peer feedback, direct report feedback)
  - Raw feedback data: {{raw_feedback}} (paste all feedback verbatim or as summaries — attributed if possible)
  - Performance against goals: {{performance_vs_goals}} (how the employee performed against stated goals this period)
  - Developmental stage: {{developmental_stage}} (what the employee is working toward — promotion, performance improvement, steady state)

  Synthesize the feedback into:

  ## Performance Summary (1–2 paragraphs)
  The overall narrative of the period — what the employee's impact was, where they showed up strongly, and what was harder. Written for the manager to use as an opening frame in the review conversation.

  ## Strengths: What to Continue
  3–4 specific, evidence-backed strengths — where multiple sources agree the employee is adding exceptional value. For each:
  - The strength (specific behavior or capability)
  - Evidence from multiple sources
  - Why it matters for this role and the company

  ## Development Areas: What to Work On
  2–3 specific development areas with evidence. For each:
  - The development area (specific behavior — not a trait)
  - Evidence from feedback (anonymous if appropriate)
  - Suggested development action (concrete, not vague)

  ## Feedback Themes and Patterns
  Where do multiple sources agree? Where is there meaningful disagreement? Disagreement across feedback sources is often the most important signal — flag it explicitly.

  ## Recommended Conversation Focus
  What are the 1–2 most important things to cover in the review conversation? Not everything in the feedback — the most important, actionable items.

  ## Development Plan Recommendations
  3–5 specific actions for the next review period, with a suggested owner (employee, manager, or both) and timeline.

  Tone: honest and action-oriented. The goal of synthesized feedback is to produce clarity, not consensus — sometimes the honest synthesis is "multiple people noticed X, and that matters even if the employee disagrees."
variables:
  - "{{employee_name_and_role}}"
  - "{{review_period}}"
  - "{{company_name}}"
  - "{{feedback_sources}}"
  - "{{raw_feedback}}"
  - "{{performance_vs_goals}}"
  - "{{developmental_stage}}"
exampleInput: |
  employee_name_and_role: Maya Chen, Controller
  review_period: H1 2024
  company_name: Anchor Analytics
  feedback_sources: CEO (Marcus Chen), CFO (role is vacant — CEO acting as manager), self-assessment, 2 peer inputs (Senior Accountant, AP/AR Specialist)
  raw_feedback: |
    CEO (Marcus): Maya has been a critical anchor through the pre-Series A period. The month-end close is consistently on time and her board package is the clearest financial communication I've seen from a Controller at this stage. Two areas: (1) I've had to ask for the cash position report twice because she didn't flag when cash dropped faster than expected — I want her to proactively surface risks before I ask. (2) Her technical depth on ASC 606 is excellent but she hasn't yet built the documentation that would allow someone to run the close without her.
    Self-assessment: Maya describes herself as strong at month-end accuracy and proactive on the external audit. She identifies "documentation and process build-out" as a development area she's been slow to address. Does not mention the proactive risk-flagging gap.
    Senior Accountant: "Maya is an excellent manager of the process — always knows the state of every account. I learn from working with her. Sometimes I don't know what she needs from me until the day something is due — better communication on what's coming would help me prepare."
    AP/AR Specialist: "Maya is very responsive and helpful. I wish we had more 1:1 time. I don't always know what my growth path looks like."
  performance_vs_goals: Month-end close on time for all 6 months (goal met); Q1 audit preparation completed (goal met); Series A financial documentation — in progress but not complete (goal partially met); hire/develop team (ongoing — no new hire yet, but team retention is 100%)
  developmental_stage: Strong performer, being evaluated for promotion to VP Finance pending Series A close and CFO hire resolution
exampleOutput: |
  # Performance Feedback Summary — H1 2024
  **Maya Chen, Controller | Anchor Analytics**

  ---

  ## Performance Summary

  Maya had a strong first half — all month-end close targets were met, the Q1 audit was completed on time and without significant findings, and the board finance package has become one of the most consistently praised deliverables at the leadership level. The feedback from Marcus reflects genuine appreciation for the technical quality and reliability Maya brings to the finance function, and the peer feedback confirms she's a strong day-to-day manager of the close process.

  The development themes that emerge consistently across sources are: proactive risk flagging (Maya responds well to questions but doesn't always surface risk before being asked), knowledge transfer and process documentation (Maya is the single point of failure on several close processes), and team development communication (direct reports report uncertainty about what's expected of them and where they're headed). None of these are performance problems — they are the specific growth edges that will determine whether Maya is ready for a VP Finance role.

  ---

  ## Strengths: What to Continue

  **1. Technical execution and close reliability**
  Maya has delivered a clean, on-time close every month in H1 — a 6-for-6 record that is the foundation of the finance function's credibility. Marcus notes the board package is "the clearest financial communication I've seen from a Controller at this stage." The Senior Accountant confirms the process is excellent and that she learns from Maya's approach. This is the core of Maya's value and should be explicitly acknowledged.

  **2. Audit preparation and technical accounting**
  The Q1 audit was Maya's first full-year audit at Anchor, and it completed without material adjustments. Marcus confirms that her ASC 606 knowledge is excellent — the revenue recognition documentation was audit-ready. This is a significant accomplishment for a Controller without a CFO providing oversight.

  **3. Team retention and operational management**
  100% team retention in H1 in a difficult hiring market reflects something real about how Maya manages the team. The AP/AR Specialist describes her as "very responsive and helpful." These are foundational management qualities that are easy to overlook when assessing growth readiness.

  ---

  ## Development Areas: What to Work On

  **1. Proactive risk flagging (behavior, not trait)**
  Marcus specifically raised this: he has had to ask twice for the cash position report when cash moved faster than expected. Maya's self-assessment does not mention this gap — she did not identify risk communication as a development area. This disconnect matters: Marcus is using proactive risk flagging as a key criterion for VP Finance readiness, and Maya doesn't appear to have fully internalized it as a gap.

  *Suggested development action:* Implement a "threshold alert" protocol by July 31 — specific cash or burn thresholds at which Maya proactively escalates to Marcus without waiting to be asked. Practice this for 30 days, then review whether the behavior feels instinctive or still requires effort.

  **2. Documentation and process transfer (behavior)**
  Marcus noted that the close process is not documented well enough to run without Maya. Maya acknowledges this in her self-assessment but hasn't moved it beyond "something I'm working on." This is a risk to the company (key-person dependency) and a risk to Maya's growth path (a VP Finance must be able to build systems, not just run them).

  *Suggested development action:* Owner: Maya. Deadline: September 30. Deliverable: 3 core close processes documented to the point where the Senior Accountant could run them independently. Review at the H2 review.

  **3. Team development communication (behavior)**
  Both team members noted uncertainty about what's expected of them and where they're going. The AP/AR Specialist specifically asked for more 1:1 time. This is a manager behavior gap — Maya is strong at process management but may be less consistent at proactive career conversations.

  *Suggested development action:* Establish bi-weekly 1:1s with both direct reports (if not already). At the next 1:1, share explicit 6-month development goals for each person. At the H2 review, ask both team members to assess whether this improved.

  ---

  ## Feedback Themes and Patterns

  **Where sources agree:**
  - Technical quality and close reliability: universal positive
  - Proactive communication and risk flagging: gap acknowledged by Marcus and implicitly confirmed by the Senior Accountant's note about not knowing what's coming until the day it's due

  **Notable disagreement:**
  Maya's self-assessment does not identify the risk-flagging gap — the one Marcus named most specifically. This is the most important item to discuss directly in the review conversation. Maya may not perceive this as a gap because she's been responsive when asked; the distinction is between reactive responsiveness and proactive escalation. Closing this perception gap is a priority for the review conversation.

  ---

  ## Recommended Conversation Focus

  1. **Proactive risk flagging:** Have a direct conversation about what Marcus means by "proactive" — with a specific example (the cash position report situation). Maya needs to understand this is a named VP Finance readiness criterion, not a minor process note.

  2. **VP Finance path and what it requires:** Maya is being evaluated for this promotion. The review is an opportunity to make the criteria explicit: what specific behaviors, at what demonstrated frequency, over what period, would lead to the promotion decision? Clarity here is a gift to Maya and to the company.

  ---

  ## Development Plan Recommendations

  | Action | Owner | Timeline |
  |---|---|---|
  | Implement cash/burn threshold alert protocol | Maya | July 31 |
  | Document 3 core close processes to independence level | Maya | September 30 |
  | Establish bi-weekly 1:1s with both direct reports | Maya | July 15 |
  | Share explicit 6-month development plan with each direct report | Maya | August 15 |
  | Marcus provides monthly feedback on risk-flagging behavior (was it proactive or reactive this month?) | Marcus | Ongoing — monthly |
tips:
  - "The feedback disagreement section is often where the most important signal lives. If the employee's self-assessment disagrees with multiple peer or manager data points, that disagreement itself is the insight — it signals a blind spot."
  - "Development areas should describe behaviors, not traits. 'Maya doesn't communicate proactively' is a trait diagnosis. 'Maya hasn't implemented a proactive escalation protocol for cash threshold events' is a behavior description. Behaviors can be changed; traits feel like identity attacks."
  - "The recommended conversation focus is for the manager's benefit — they shouldn't go into a review trying to cover every piece of feedback. Two or three priorities, discussed well, are more valuable than seven items covered superficially."
  - "When synthesizing 360 feedback, weight direct manager observations more heavily for performance decisions and direct report observations more heavily for management quality assessment. Peer feedback is often the most candid but also the most influenced by interpersonal dynamics."
  - "For employees being evaluated for promotion, the synthesis should explicitly address the promotion criteria — not just general performance. 'Is Maya ready for VP Finance?' should have a directional answer in the synthesis."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - performance-review-self-assessment
  - pip-documentation
  - learning-path-outline
  - manager-feedback-summary
tags:
  - performance-review
  - feedback
  - hr
  - ld
  - manager-development
---
