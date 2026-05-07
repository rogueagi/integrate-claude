---
title: "Write a one-page product requirements document for a feature"
slug: prd-one-pager
function: product
role: product-management
description: "Generate a concise, structured one-page PRD that captures problem, scope, requirements, and success metrics — enough for engineering to begin planning."
useCase: "Use this prompt when you need to move quickly from idea to actionable spec. The one-page format forces clarity and prevents over-specification early in the process. Works best for well-scoped features; use for larger initiatives as a starting point before expanding into a full PRD."
prompt: |
  You are a senior product manager experienced at writing clear, actionable product requirements. Write a one-page PRD for the feature described below.

  **Feature name:** {{feature_name}}
  **Product/platform:** {{product_platform}}
  **Author and date:** {{author_date}}
  **Problem statement:** {{problem_statement}}
  **Target users:** {{target_users}}
  **Proposed solution:** {{proposed_solution}}
  **What's out of scope:** {{out_of_scope}}
  **Key constraints:** {{constraints}} (technical, design, regulatory, timeline)
  **Success metrics:** {{success_metrics}}

  Write a one-page PRD with these sections, keeping the full document to approximately 600–800 words:

  ## [Feature Name]
  **Author:** | **Date:** | **Status:** Draft / In Review / Approved
  **Epic/Initiative:** | **Target Release:** | **Engineering Lead:** | **Design Lead:**

  ## Problem
  2–3 sentences describing the specific problem this feature solves. Anchor it in user evidence or data. Avoid describing the solution here.
  Include: Who has this problem? How often? What's the impact of not solving it?

  ## Goal
  One sentence: what will be true after this feature ships that isn't true today?
  Format: "Enable [user] to [action] so that [outcome]."

  ## Background and Context
  Brief context (3–5 bullet points) a new team member would need to understand why this is the right thing to build now:
  - Relevant data or research
  - Related existing features or systems
  - Strategic connection
  - Prior attempts or related work

  ## User Stories (Top 3–5)
  Format: As a [user type], I want to [action] so that [outcome].
  Mark each: Must Have (MVP) / Should Have / Nice to Have

  ## Functional Requirements
  Numbered list of specific, testable requirements. Each requirement should:
  - Start with "The system shall..." or "Users must be able to..."
  - Be verifiable — can a QA engineer write a test for it?
  - Be marked: Must Have / Should Have / Nice to Have

  ## Non-Functional Requirements
  Performance, security, accessibility, and reliability requirements:
  - Performance: (e.g., "page loads in <2 seconds on 4G connection")
  - Accessibility: (e.g., "WCAG 2.1 AA compliant")
  - Security: any data handling requirements
  - Scalability: expected load/volume

  ## What's Out of Scope
  Explicit list of related things this PRD does NOT cover. This is essential for preventing scope creep.

  ## Success Metrics
  3–5 specific, measurable metrics to evaluate this feature. For each:
  - Metric name and definition
  - Baseline (current state)
  - Target (what success looks like)
  - How it will be measured

  ## Open Questions
  Unresolved questions that need answers before or during development. For each: the question, who needs to answer it, and by when.

  ## Dependencies
  What must be true, built, or decided before this feature can ship?

  ## Design Notes
  Link to mockups if available. Key UX decisions or constraints engineering should know.
variables:
  - "{{feature_name}}"
  - "{{product_platform}}"
  - "{{author_date}}"
  - "{{problem_statement}}"
  - "{{target_users}}"
  - "{{proposed_solution}}"
  - "{{out_of_scope}}"
  - "{{constraints}}"
  - "{{success_metrics}}"
exampleInput: |
  feature_name: Saved Filters in the Analytics Dashboard
  product_platform: Acme Analytics — web app for B2B SaaS companies
  author_date: Jamie Chen, November 2024
  problem_statement: Power users in our analytics dashboard rebuild the same complex filter combinations every session. Users with 5+ filters spend 3–5 minutes on setup every time they open the dashboard. Support data shows this is one of the top 3 UX complaints.
  target_users: Power users (users who apply 3+ filters per session) — approximately 30% of our user base, responsible for 60% of dashboard sessions
  proposed_solution: Allow users to save named filter combinations and recall them from a dropdown on the dashboard header. Saved filters are per-user and persist across sessions.
  out_of_scope: Shared/team filters, filter templates, exporting filters, mobile app
  constraints: Must use existing filter state management system. No new backend infrastructure for v1 — store in user preferences table. Ship in 6 weeks.
  success_metrics: Reduce avg time-to-first-insight for power users, increase dashboard session frequency for power users
exampleOutput: |
  # Saved Filters in the Analytics Dashboard
  **Author:** Jamie Chen | **Date:** November 2024 | **Status:** Draft
  **Target Release:** Q1 2025 | **Engineering Lead:** TBD | **Design Lead:** TBD

  ## Problem
  Power users (those applying 3+ filters per session) spend 3–5 minutes rebuilding identical filter combinations every time they open the dashboard. This repetitive setup is cited in the top 3 UX complaints in support tickets and reduces dashboard value for our highest-engagement users. Approximately 30% of users are affected, representing 60% of all dashboard sessions.

  ## Goal
  Enable power users to save and recall named filter combinations so that they reach meaningful insights in under 30 seconds instead of 3–5 minutes.

  ## Background and Context
  - Support ticket analysis: "rebuild filters" mentioned in 47 tickets in Q3; rated top-3 UX pain point in last NPS survey
  - Dashboard sessions average 12 minutes; filter setup consumes 25–40% of that time for power users
  - Competitor A (Mixpanel) and Competitor B (Amplitude) both offer saved filter/segment functionality
  - Filter state is already serializable as a URL parameter — a strong technical foundation for persistence

  ## User Stories
  - As a power user, I want to save my current filter state with a custom name so I don't have to rebuild it each session. **[Must Have]**
  - As a power user, I want to select a saved filter from a dropdown on the dashboard header so I can apply it in one click. **[Must Have]**
  - As a power user, I want to delete saved filters I no longer use so my list stays organized. **[Must Have]**
  - As a power user, I want to see the filter components of a saved filter before applying it so I know what I'm selecting. **[Should Have]**
  - As a new user, I want to see example saved filters so I understand what's possible. **[Nice to Have]**

  ## Functional Requirements
  1. Users must be able to save the current active filter state with a user-defined name (max 50 characters). **[Must Have]**
  2. Saved filters must persist across browser sessions and devices for the same user. **[Must Have]**
  3. The dashboard header must display a "Saved Filters" dropdown showing all saved filters for the current user. **[Must Have]**
  4. Users must be able to apply a saved filter in one click, replacing all active filters. **[Must Have]**
  5. Users must be able to delete saved filters via the dropdown. **[Must Have]**
  6. Each user may save up to 20 filters per account. **[Must Have]**
  7. Hovering over a saved filter name must display its filter components. **[Should Have]**

  ## Non-Functional Requirements
  - Performance: Saved filters dropdown must load in <300ms
  - Accessibility: WCAG 2.1 AA compliant; keyboard navigable
  - Security: Saved filters are private per user; no cross-user access
  - Storage: Stored in existing user_preferences table; no new infrastructure

  ## What's Out of Scope
  - Shared or team-level saved filters
  - Filter templates or defaults
  - Mobile app implementation
  - Exporting or importing filter configurations

  ## Success Metrics
  | Metric | Baseline | Target | Measurement |
  |--------|----------|--------|-------------|
  | Avg time-to-first-insight (power users) | 4.2 min | <90 sec | Mixpanel event timing |
  | % power users who save ≥1 filter | 0% | 40% within 30 days | Feature usage event |
  | Dashboard session frequency (power users) | 4.1 sessions/week | 5.0 sessions/week | Mixpanel |
  | Filter-related support tickets | 15/month | <5/month | Zendesk tag |

  ## Open Questions
  1. Should saved filters be accessible across all dashboard views, or only the view where they were saved? (Jamie to decide by Nov 15)
  2. What happens to saved filters if a filter dimension is deprecated? (Engineering to assess)

  ## Dependencies
  - Design mockups for filter dropdown UI (Design, Week 1)
  - Schema addition to user_preferences table (Engineering, Day 1)
tips:
  - "Write the Success Metrics before you write the requirements — it forces you to stay honest about what you're actually trying to achieve."
  - "The 'Out of Scope' section will be challenged constantly. Stand firm on it during development. If new scope is justified, update the PRD with a version note."
  - "Every requirement must be testable. If a QA engineer can't write a test for it, rewrite it until they can."
  - "Share the PRD with a skeptical engineer before finalizing it. They will immediately find the requirements that are ambiguous or technically impossible."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - user-story-set
  - feature-prioritization
  - success-metrics-framework
  - launch-checklist
tags:
  - product-management
  - requirements
  - prd
  - product-planning
  - engineering-handoff
---
