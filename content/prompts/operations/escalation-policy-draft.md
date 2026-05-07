---
title: "Draft an internal escalation policy document"
slug: escalation-policy-draft
function: operations
role: ops-management
description: "Create a clear, structured internal escalation policy that defines when and how issues should be escalated, preventing both under-escalation and noise."
useCase: "Use this prompt when your team lacks a shared understanding of when to escalate, who to escalate to, and how. Good escalation policies reduce anxiety for frontline staff (they know what to do in a crisis) and protect leaders from being pulled into issues they shouldn't own."
prompt: |
  You are an operations leader experienced in building organizational systems that scale. Draft a comprehensive internal escalation policy for the function described below.

  **Function/team this policy covers:** {{function_team}}
  **Types of issues this policy addresses:** {{issue_types}} (e.g., customer escalations, system incidents, compliance breaches, operational failures)
  **Team structure:** {{team_structure}} (roles and reporting relationships)
  **Current escalation problem:** {{current_problem}} (what's going wrong now — over-escalation, under-escalation, unclear ownership, etc.)
  **Stakeholders this policy must satisfy:** {{stakeholders}}
  **Any existing policies or frameworks to align with:** {{existing_frameworks}}

  Write an escalation policy document with these sections:

  ## 1. Purpose and Scope
  - Why this policy exists (specific problem it solves)
  - Who it applies to
  - What types of issues it covers and explicitly does not cover

  ## 2. Escalation Philosophy (1–2 paragraphs)
  The principles that guide escalation decisions. This is the "spirit" of the policy — it should help people make good judgment calls in situations not explicitly covered. Include:
  - When to escalate vs. resolve independently
  - The cost of over-escalation (noise, dependency) vs. under-escalation (risk, surprise)
  - The expectation that escalation comes with context, not just a problem

  ## 3. Escalation Tiers
  Define 3–4 escalation tiers appropriate for the context. For each tier:
  - **Tier name and number**
  - **Trigger criteria:** Specific, objective conditions that place an issue at this tier (not vague, not judgment-heavy)
  - **Response time expectation:** How quickly the next level must be looped in
  - **Who receives the escalation:** Named roles (not individuals — policies outlast people)
  - **Communication method:** How to escalate (Slack channel, email, phone call, pager, etc.)
  - **What the escalating party must provide:** The minimum information package required to escalate (e.g., issue description, impact, steps taken, recommendation)
  - **Who owns the issue at this tier:** After escalation, who is accountable for driving to resolution?

  ## 4. Issue Classification Guide
  A reference table helping people classify an issue quickly:
  | Scenario | Tier | Rationale |

  Include 8–12 realistic examples specific to the function.

  ## 5. Escalation Process (Step-by-Step)
  Walk through the exact steps from issue detection to resolution, including:
  - How to assess severity
  - Who to contact and in what order
  - What to communicate and when
  - How to hand off ownership
  - When to de-escalate (close an open escalation)

  ## 6. Communication Templates
  Brief templates for:
  - Initial escalation message (Tier 2+)
  - Status update during an active escalation
  - Resolution / de-escalation message

  ## 7. Escalation Anti-Patterns (What Not to Do)
  List 4–5 specific behaviors this policy aims to prevent, with brief explanation of why each is harmful.

  ## 8. Policy Exceptions and Edge Cases
  How to handle situations this policy doesn't clearly address.

  ## 9. Review and Ownership
  Who owns this policy, how often it will be reviewed, and how to suggest updates.
variables:
  - "{{function_team}}"
  - "{{issue_types}}"
  - "{{team_structure}}"
  - "{{current_problem}}"
  - "{{stakeholders}}"
  - "{{existing_frameworks}}"
exampleInput: |
  function_team: Customer Success (35 CSMs, 4 CSM Managers, 1 VP CS)
  issue_types: Customer escalations (at-risk accounts, executive escalations, contract disputes), internal process failures, data issues
  team_structure: CSM → CSM Manager (4 managers, ~8 CSMs each) → VP CS → COO
  current_problem: CSMs don't know when to bring in their manager vs. handling themselves. Some CSMs escalate every difficult customer conversation; others sit on serious problems until the customer is already leaving. Also no standard for when to loop in executive team.
  stakeholders: CSMs (need clarity on what they own), CSM Managers (drowning in avoidable escalations), VP CS (needs to know about at-risk executive relationships before they blow up), Sales (often looped in too late on renewal risk)
  existing_frameworks: Company uses a Red/Yellow/Green account health framework in Gainsight. SLA commitments are in customer contracts.
exampleOutput: |
  # Customer Success Escalation Policy

  ## 1. Purpose and Scope
  This policy defines when and how CSMs escalate customer issues, ensuring that serious problems reach the right people quickly while routine customer interactions remain at the CSM level. It applies to all Customer Success Managers and CSM Managers. It covers: customer at-risk signals, executive escalations, contract disputes, SLA breaches, and data/tooling issues affecting account management. It does not cover: new business opportunities (Sales-owned), billing disputes (Finance-owned), or technical product bugs (Support-owned).

  ## 2. Escalation Philosophy
  Escalation is not a failure — it is a professional judgment that a situation exceeds the current owner's authority, expertise, or capacity to resolve. The goal is to surface the right issue to the right person at the right time, with enough context to act.

  The cost of under-escalation is high: customers churn, executives are blindsided, and trust is eroded. The cost of over-escalation is real but lower: manager time is wasted, and CSMs develop a dependency on escalation rather than judgment. When in doubt, err on the side of looping in — but always bring a clear situation summary and a recommended action, not just a problem.

  ## 3. Escalation Tiers

  **Tier 1 — CSM Handles Independently**
  - Trigger: Routine customer requests, questions, minor complaints resolvable within CSM authority
  - Response time: Same business day
  - Owner: CSM
  - Communication: Normal account management channels
  - Required info: Logged in Gainsight activity log

  **Tier 2 — CSM Manager Looped In (Within 24 Hours)**
  - Trigger: Account health turns Red in Gainsight; customer requests to speak with a manager; CSM has taken 2+ actions without resolution; potential SLA breach; customer mentions competitor or cancellation
  - Response time: CSM notifies Manager within 4 business hours of trigger
  - Communication: Slack DM to Manager + Gainsight note
  - Required info: Account name, ARR, health score, issue description, what CSM has already tried, recommended next action
  - Owner: CSM Manager (drives strategy); CSM (owns execution)

  **Tier 3 — VP CS Engaged (Within 2 Hours)**
  - Trigger: Customer executive (C-level or VP) requests leadership involvement; renewal risk on accounts >$50K ARR; formal complaint or legal threat; customer has gone silent after Red flag; CSM Manager cannot resolve within 48 hours
  - Response time: CSM Manager notifies VP CS within 2 hours of trigger
  - Communication: Slack DM to VP CS + email summary
  - Required info: Full account brief, renewal date and ARR, executive contacts, timeline of events, current status, recommended escalation approach
  - Owner: VP CS (owns relationship); CSM Manager (coordinates internally)

  **Tier 4 — COO/Executive Team (Immediate)**
  - Trigger: Customer churn >$100K ARR imminent; legal action threatened in writing; regulatory or compliance breach involving customer data; public escalation (social media, press)
  - Response time: VP CS notifies COO immediately (same day, regardless of time)
  - Communication: Phone call + follow-up email
  - Required info: One-paragraph situation brief, recommended response, draft communications if applicable
  - Owner: COO designates executive lead; VP CS coordinates

  ## 6. Communication Templates

  **Initial Escalation (Tier 2+):**
  > ESCALATION: [Account Name] | [Tier Level]
  > ARR: $[X] | Renewal: [Date] | Health: [Red/Yellow]
  > Issue: [2–3 sentence description]
  > What I've tried: [Actions taken]
  > Recommended next step: [CSM's recommendation]
  > Urgency: [Reason for timing]

  ## 7. Anti-Patterns to Avoid
  1. **Escalating without context:** "Customer is unhappy" is not an escalation. Include what happened, what you tried, and what you recommend.
  2. **Waiting too long:** If you've been managing a Red account for a week with no improvement, you needed Tier 2 on day 1.
  3. **Cc-escalating:** Adding your manager to an email thread without a direct notification is not an escalation.
  4. **Escalating to skip the process:** Don't go directly to VP CS because your manager is in a meeting. Call the manager.
  5. **Forgetting to de-escalate:** Once an issue is resolved, close the loop with everyone who was looped in.
tips:
  - "The classification guide (Section 4) is what people actually use day-to-day — make the scenarios as realistic and specific as possible."
  - "Test your policy with a real past incident: walk through what the right tier would have been and whether your trigger criteria would have caught it at the right level."
  - "Every escalation should come with a recommendation, not just a problem. Train your team on this — it changes the dynamic from 'I'm handing this to you' to 'I'm asking for your support on my plan.'"
  - "Review this policy every 6 months with input from the people using it. Escalation policies decay as teams and products evolve."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - sop-draft
  - decision-memo
  - business-continuity-summary
  - vendor-performance-review
tags:
  - escalation
  - policy
  - operations
  - customer-success
  - team-management
---
