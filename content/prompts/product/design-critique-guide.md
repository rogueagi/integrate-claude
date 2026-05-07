---
title: "Create a structured design critique framework and questions"
slug: design-critique-guide
function: product
role: product-design
description: "Generate a structured design critique framework with specific evaluation questions, facilitation guidelines, and feedback principles for a productive design review session."
useCase: "Use this prompt when organizing a design critique session for a feature, flow, or design system component. Good critique frameworks prevent the twin failure modes of design reviews: vague praise that doesn't improve the work, and unstructured criticism that demoralizes the designer without producing actionable direction."
prompt: |
  You are a senior product designer and design critique facilitator. Create a structured design critique framework for the design being reviewed.

  **Design being critiqued:** {{design_description}}
  **Design stage:** {{design_stage}} (e.g., early concept, mid-fidelity wireframes, high-fidelity mockups, prototype, shipped feature)
  **Design goals:** {{design_goals}}
  **Target users:** {{target_users}}
  **Review participants:** {{participants}}
  **Session duration:** {{session_duration}}
  **Known design challenges:** {{known_challenges}}
  **Specific feedback areas requested:** {{feedback_areas}}

  Create a design critique guide with these components:

  ## 1. Pre-Critique Setup

  **Presenter brief (for the designer presenting):**
  - What to share before showing the design (context, goals, constraints)
  - What not to explain (let the design speak first for some elements)
  - How to frame the session goal (feedback, not approval)

  **Reviewer brief (for participants):**
  - The role of a design critic
  - The difference between feedback and opinion
  - How to give evidence-based feedback
  - What to leave out (personal preferences, out-of-scope concerns)

  ## 2. Structured Evaluation Dimensions
  Organize the critique into specific evaluation dimensions relevant to this design. For each dimension:
  - **Dimension name**
  - **The core question this dimension asks**
  - **3–5 specific sub-questions reviewers should consider**
  - **What good looks like** (brief benchmark)
  - **Common failure modes** (what to look out for)

  Dimensions to evaluate (adapt to design type):
  - **Clarity:** Can users understand what to do and what the interface means?
  - **Hierarchy:** Does the visual structure direct attention to the right elements?
  - **Consistency:** Does this design align with established patterns and the design system?
  - **Accessibility:** Does this meet accessibility requirements and serve users with different abilities?
  - **User goals:** Does the design support what users are trying to accomplish?
  - **Business goals:** Does the design support the intended business outcome?
  - **Feasibility:** Are there technical or implementation concerns with this design?
  - **Edge cases:** How does the design handle unexpected inputs, empty states, or error conditions?

  ## 3. Critique Session Agenda
  A time-boxed agenda for the session:
  - Presenter setup (context, goals, constraints) — 5–10 min
  - First look (silent observation) — 2–3 min
  - Clarifying questions (not feedback yet) — 5 min
  - Structured feedback by dimension — [bulk of session]
  - Synthesis (what's working, what needs work, open questions) — 10 min
  - Next steps — 5 min

  ## 4. Facilitation Guide
  - How to keep the session focused and productive
  - How to handle when feedback becomes a design session
  - How to handle strong opinions from senior stakeholders
  - How to ensure quieter voices are heard
  - When to call time on a topic

  ## 5. Feedback Templates
  Templates for giving effective critique:
  - Observation-based: "I notice [specific observation]. This might cause [potential impact] because [reasoning]."
  - Question-based: "I'm wondering how [user] would [action] if [scenario]."
  - Alternative suggestion: "What if we tried [alternative] — it might address [concern] while preserving [goal]."

  ## 6. Output Template
  What the session should produce:
  - Feedback organized by: What's working / What needs attention / Open questions
  - Action items with clear owners
  - Decision log (any decisions made during the session)
  - Next steps and timeline
variables:
  - "{{design_description}}"
  - "{{design_stage}}"
  - "{{design_goals}}"
  - "{{target_users}}"
  - "{{participants}}"
  - "{{session_duration}}"
  - "{{known_challenges}}"
  - "{{feedback_areas}}"
exampleInput: |
  design_description: High-fidelity mockups for the new onboarding flow — from account creation through first survey launch (6 screens)
  design_stage: High-fidelity mockups, pre-engineering handoff
  design_goals: Reduce time-to-first-survey from 42 days to 14 days; eliminate the "Invite team members" confusion identified in user research
  target_users: HR managers at 100–500 person companies, non-technical, first-time Beacon users
  participants: Lead designer (presenting), PM, Head of Engineering, UX researcher, VP Product
  session_duration: 60 minutes
  known_challenges: Engineering has flagged that the animated progress bar on screen 3 may be complex to implement. The "Add recipients" step has two different interaction models for small vs. large teams.
  feedback_areas: Clarity of the "Add recipients" vs. "Invite admin users" distinction, overall progress visibility, accessibility (WCAG AA compliance)
exampleOutput: |
  # Design Critique Guide: Beacon Onboarding Flow (v2)
  **Session:** 60 minutes | **Participants:** Designer, PM, Eng Lead, Researcher, VP Product
  **Design goal:** Reduce time-to-first-survey; fix "Invite team members" confusion

  ## 1. Pre-Critique Setup

  **For the presenting designer:**
  Before showing the design, share:
  - The research finding that drove this redesign (the "Invite team members" semantic confusion)
  - The two primary goals (time-to-value, clarity of admin users vs. recipients)
  - Any constraints you worked within (engineering feasibility of animation, two interaction models for small/large teams)

  Don't explain your design choices before participants have seen the screens — let them form initial impressions first.

  **For reviewers:**
  "We're here to make this design better, not to approve it. Your job is to notice what a new HR manager would notice, question what might confuse them, and surface concerns the designer hasn't seen. Personal taste ('I don't like blue') is not useful here. Evidence-based observations ('This button label doesn't match the action it performs') are exactly what we need.

  If you have a strong opinion, try converting it to a question: instead of 'This is wrong,' try 'I wonder how users will interpret this label — what do we expect them to read it as?'"

  ## 2. Evaluation Dimensions

  **1. Clarity: Does the user know what to do and why?**
  Core question: Would a first-time HR manager know what to do on each screen without reading instructions?
  - Sub-questions:
    1. Is the primary action on each screen immediately obvious?
    2. Does the copy explain what the action does (not just label it)?
    3. Is there any terminology that might be misunderstood by a non-technical user?
    4. Does the distinction between "Add admin users" and "Add recipients" read as two different things?
  - Good: User can state what the next action is without looking at the copy
  - Watch for: Labels that describe the UI element instead of the user's goal ("Click here" vs. "Add your team")

  **2. Progress Visibility: Does the user know where they are and how far they have to go?**
  Core question: At any point in the flow, can the user estimate how long this will take?
  - Sub-questions:
    1. Is the number of steps clear from the first screen?
    2. Can users see which step they're on and what comes next?
    3. If they leave and return, will they understand their progress?
    4. Is the animated progress bar adding clarity or complexity?
  - Engineering flag: Animated progress bar on Screen 3 may be expensive — is the animation necessary, or would a static indicator achieve the same goal?

  **3. Accessibility (WCAG AA)**
  Core question: Can users with visual impairments, motor disabilities, or cognitive differences use this flow?
  - Sub-questions:
    1. Is color contrast sufficient for all text and interactive elements? (4.5:1 minimum)
    2. Is every interactive element keyboard-navigable?
    3. Are form error messages associated with the relevant field?
    4. Is anything communicated only through color?

  ## 3. Session Agenda

  | Time | Activity | Facilitator |
  |------|----------|------------|
  | 0:00–0:08 | Designer context-setting | Designer |
  | 0:08–0:11 | Silent first look (all 6 screens) | All |
  | 0:11–0:16 | Clarifying questions only | Facilitator (PM) |
  | 0:16–0:36 | Dimension 1: Clarity (especially recipient vs. admin) | Facilitator |
  | 0:36–0:46 | Dimensions 2–3: Progress + Accessibility | Facilitator |
  | 0:46–0:53 | Synthesis — what's working, what needs work | All |
  | 0:53–1:00 | Action items, decisions, next steps | PM |

  ## 4. Facilitation Guide

  **When feedback becomes a design session:** Participants will sometimes start designing solutions instead of identifying problems. Redirect: "Let's capture that as an open question for the designer to explore — right now let's focus on identifying what the concern is."

  **When a senior voice dominates:** After the VP speaks, explicitly invite others: "Does anyone see it differently? [Researcher], from what you saw in the sessions, what would users likely experience here?"

  **When the session runs long on one topic:** "Let's capture this as a key open question and move on — we can resolve this in a follow-up."

  ## 5. Feedback Templates

  - "I notice the 'Add recipients' button uses the same visual weight as the 'Invite admin users' button. This might make users see them as equivalent actions — if we expect only one to be the main path, could we differentiate them visually?"
  - "I'm wondering how a first-time user would read 'Add admin users' — do we expect them to know what 'admin' means in this context?"
  - "What if the 'Add recipients' step came before the 'Invite admin users' step? That might match users' mental model of 'set up survey → send it → then manage who has access.'"

  ## 6. Output Template

  **What's working:**
  - [To be filled during session]

  **What needs attention:**
  - [To be filled during session]

  **Open questions:**
  - Is the animated progress bar on Screen 3 necessary, or would a static version work?
  - [Others to be identified]

  **Action items:**
  | Action | Owner | Due |
  |--------|-------|-----|
  | | | |

  **Decisions made:**
  - [To be filled during session]

  **Next steps:** Second round of critique? Engineering review? User testing?
tips:
  - "The silent first-look period (2–3 minutes of everyone looking without talking) consistently produces better feedback — first impressions are data, and they disappear when someone speaks first."
  - "Start critique with clarifying questions, not feedback. 'What's this button supposed to do?' is a clarifying question. 'This button is confusing' is feedback. Clarifying questions first."
  - "If you're the designer presenting, your job during the critique is to listen and capture, not to defend. Write down what you hear, not what you think about it."
  - "The distinction between 'this is wrong' and 'I wonder how users would interpret this' is everything. Train your team to convert opinions into questions."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - ux-copy-review
  - accessibility-audit-checklist
  - usability-test-script
  - design-system-documentation
tags:
  - design-critique
  - product-design
  - ux-design
  - facilitation
  - design-process
---
