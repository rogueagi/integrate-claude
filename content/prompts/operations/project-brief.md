---
title: "Write a project brief from a vague idea or stakeholder request"
slug: project-brief
function: operations
role: project-management
description: "Transform an ambiguous stakeholder request or rough idea into a structured project brief with clear scope, objectives, and success criteria."
useCase: "Use this prompt when someone asks you to 'just run with it' on a new initiative, or when you need to create shared understanding before any work begins. A project brief prevents scope creep, misaligned expectations, and the expensive rework that comes from starting without clarity."
prompt: |
  You are a seasoned project manager who excels at bringing clarity to ambiguous situations. Write a project brief for the initiative described below.

  **Project name (working title):** {{project_name}}
  **Requested by / sponsor:** {{sponsor}}
  **Original request or idea (as stated):** {{original_request}}
  **Business context:** {{business_context}}
  **Rough timeline expectation:** {{timeline}}
  **Budget indication:** {{budget}}
  **Teams likely involved:** {{teams}}
  **What you already know about this project:** {{known_details}}
  **Key unknowns:** {{unknowns}}

  Write a project brief with these sections:

  ## Project Brief: [Project Name]
  **Version:** 1.0 (Draft for Review)
  **Author:** [Placeholder]
  **Date:** [Placeholder]
  **Status:** Draft — pending stakeholder review

  ## 1. Problem Statement (The "Why")
  In 2–3 sentences: what problem or opportunity is this project addressing? What is the cost of not doing this? Be specific about the pain being felt or the opportunity being missed.

  ## 2. Project Objective (The "What")
  One clear, concise statement of what this project will accomplish. Use the format: "By [date], we will [deliverable] so that [outcome]."

  ## 3. Success Criteria
  How will we know this project succeeded? List 3–5 specific, measurable success criteria. Each should be verifiable at project completion.

  ## 4. Scope

  ### In Scope
  Explicit list of what this project includes. Be specific — vague scope statements create ambiguity.

  ### Out of Scope
  Explicit list of related work this project will NOT address. This prevents scope creep.

  ### Assumptions
  List the assumptions this brief is based on. If any of these prove false, the scope, timeline, or budget will need to be revised.

  ## 5. Deliverables
  Concrete outputs this project will produce. For each deliverable:
  - Name and description
  - Format (document, tool, trained team, configured system, etc.)
  - Owner
  - Target completion date

  ## 6. Stakeholders
  | Stakeholder | Role | Interest in Project | Communication Needs |

  ## 7. Timeline and Milestones
  High-level milestone plan. Use phases if appropriate. For each milestone:
  - Milestone name
  - Target date
  - Definition of completion

  ## 8. Resources Required
  - **Team:** Roles needed and estimated time commitment
  - **Budget:** Estimated range (if known) broken down by category
  - **Tools/systems:** Any tools that need to be procured or configured
  - **External support:** Vendors, consultants, or agencies

  ## 9. Risks and Dependencies
  | Risk | Likelihood | Impact | Mitigation |
  | Dependency | Owner | Status |

  ## 10. Open Questions
  Questions that must be answered before work can fully begin. Include: who will answer each question, and what happens if it's not resolved.

  ## 11. Next Steps
  The first 3–5 actions required to move this project forward, with owners and dates.

  ## Appendix: Questions for Stakeholder Review
  Generate 5–8 questions for the sponsor or key stakeholders that would help refine this brief.
variables:
  - "{{project_name}}"
  - "{{sponsor}}"
  - "{{original_request}}"
  - "{{business_context}}"
  - "{{timeline}}"
  - "{{budget}}"
  - "{{teams}}"
  - "{{known_details}}"
  - "{{unknowns}}"
exampleInput: |
  project_name: Customer Knowledge Base
  sponsor: VP Customer Success (Linda Park)
  original_request: "We need a self-serve knowledge base so customers can find answers without contacting support. Can you get this done by end of Q1?"
  business_context: Support tickets have increased 60% this year alongside customer growth. 35% of tickets are answered with the same 10 responses. CS team is overwhelmed. We have no self-serve documentation today.
  timeline: End of Q1 (12 weeks)
  budget: Not specified — needs discussion
  teams: Customer Success, Marketing (content), Engineering (integration), IT (tool procurement)
  known_details: Other teams have evaluated Intercom and Notion as potential platforms. Intercom is already used for chat.
  unknowns: Who writes and maintains the content long-term? Does this integrate with our product UI? What languages do we need to support? Is there an SEO goal?
exampleOutput: |
  # Project Brief: Customer Self-Serve Knowledge Base
  **Version:** 1.0 (Draft for Review) | **Author:** [PM] | **Date:** [Date] | **Status:** Draft

  ## 1. Problem Statement
  35% of our support tickets are answered with the same 10 responses — work that doesn't require a human. Without self-serve documentation, customers wait for answers that should be instantly available, and the CS team spends significant time on preventable tickets. A 60% ticket increase this year has made this unsustainable.

  ## 2. Project Objective
  By March 31, we will launch a publicly accessible customer knowledge base covering the top 50 support topics so that customers can self-serve answers, reducing preventable ticket volume by 25% within 60 days of launch.

  ## 3. Success Criteria
  1. Knowledge base is live and publicly accessible by March 31
  2. Minimum 50 articles published at launch, covering the top 50 support ticket categories
  3. 25% reduction in tickets tagged as "already documented" within 60 days post-launch
  4. Article satisfaction rating ≥70% (thumbs up/down) within first 30 days
  5. CS team reports <2 hours/week of ongoing maintenance burden

  ## 4. Scope
  ### In Scope
  - Selection and procurement of knowledge base platform
  - Creation of 50+ help articles covering top ticket categories
  - Integration with existing Intercom chat widget (article suggestions)
  - Basic SEO setup for article discoverability
  - Internal handoff process so CS team can create/update articles

  ### Out of Scope
  - In-product help tooltips or contextual help (separate Engineering project)
  - Multilingual content (English-only for v1)
  - Video tutorials or interactive walkthroughs
  - Customer community forum

  ### Assumptions
  - Intercom's built-in knowledge base feature is sufficient (no additional tool procurement needed)
  - CS team can dedicate 1 person at 50% for 8 weeks to write content
  - Marketing reviews and approves all content before publish

  ## 10. Open Questions
  1. Who owns ongoing content maintenance after launch? (Must decide before kick-off)
  2. Is there an SEO goal that changes the platform choice? (Linda to answer by Week 1)
  3. Will this integrate into the product UI, or is it external-only? (Engineering input needed)
  4. What is the approved budget for tool procurement? (CFO approval needed if >$5K/year)

  ## Appendix: Questions for Sponsor Review
  1. What does success look like to you in 90 days?
  2. Who is accountable for content quality and accuracy long-term?
  3. Are there any content topics that are off-limits or require legal review?
  4. Do we have any customer research showing what topics they most want self-serve answers on?
  5. Is there a budget ceiling for the tool selection?
tips:
  - "The 'Out of Scope' section is your most important tool against scope creep. Be ruthless — anything not explicitly in scope will eventually be assumed to be in scope."
  - "Share the brief with all stakeholders before the kick-off meeting, not during it. The meeting should validate and refine, not read the brief aloud."
  - "The 'Appendix: Questions for Stakeholder Review' is genuinely useful — use the questions as your agenda for the sponsor alignment conversation."
  - "Write the Success Criteria before you write the Timeline. If you don't know what done looks like, you can't estimate how long it will take."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cross-functional-brief
  - risk-register
  - gantt-task-breakdown
  - stakeholder-communication-plan
  - prd-one-pager
tags:
  - project-management
  - planning
  - scope
  - stakeholder-alignment
  - operations
---
