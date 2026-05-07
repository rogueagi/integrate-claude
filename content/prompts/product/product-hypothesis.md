---
title: "Write a product hypothesis statement for a new initiative"
slug: product-hypothesis
function: product
role: product-management
description: "Generate a structured product hypothesis that makes your assumptions explicit, defines the test conditions, and establishes the criteria for validation or invalidation."
useCase: "Use this prompt before committing engineering resources to a new initiative. A well-formed hypothesis forces clarity about what you believe, what you're testing, and what evidence would change your mind — preventing the expensive mistake of building something based on unstated assumptions."
prompt: |
  You are a product leader trained in hypothesis-driven product development and lean startup methodology. Write a structured product hypothesis for the initiative described below.

  **Initiative name:** {{initiative_name}}
  **Problem we believe exists:** {{problem_belief}}
  **Solution we're considering:** {{solution_idea}}
  **Target user:** {{target_user}}
  **Business goal:** {{business_goal}}
  **Supporting evidence (if any):** {{existing_evidence}}
  **What we're uncertain about:** {{uncertainties}}

  Write a complete hypothesis document with these sections:

  ## 1. Core Hypothesis Statement
  Write the hypothesis in this structured format:

  **We believe that** [specific user] **experiences** [specific problem or unmet need]
  **when** [specific context or trigger]
  **because** [root cause or underlying reason]

  **We believe that** [proposed solution or feature]
  **will** [measurable outcome for the user]
  **which will result in** [measurable business outcome]

  **We will know we are right when** [specific, measurable success signal] **within** [time period]
  **We will know we are wrong when** [specific signal that indicates the hypothesis is false]

  ## 2. Assumptions Inventory
  List every significant assumption embedded in this hypothesis. For each assumption:
  - **Assumption:** The belief we're relying on
  - **Type:** Problem assumption / Solution assumption / Market assumption / Technical assumption
  - **Confidence:** High (we have evidence) / Medium (we have indirect signal) / Low (we're guessing)
  - **Risk if wrong:** High (invalidates the whole initiative) / Medium (requires pivot) / Low (minor adjustment)
  - **How to test:** The fastest way to validate this assumption

  Sort assumptions by: Risk if wrong × Confidence (test high-risk, low-confidence assumptions first)

  ## 3. Prioritized Assumption to Test First
  Identify the single riskiest assumption — the one that, if wrong, would make the entire initiative pointless. Explain why this is the riskiest assumption.

  ## 4. Validation Plan
  Design the fastest, cheapest experiment to test the riskiest assumption:
  - **Experiment type:** (e.g., user interview, prototype, A/B test, fake door test, concierge MVP, landing page)
  - **What we'll do:** Step-by-step description
  - **What we'll measure:** Specific data to collect
  - **Success threshold:** The minimum result that counts as validation
  - **Failure threshold:** The result that clearly invalidates the assumption
  - **Timeline:** How long this experiment will take
  - **Resources required:** People, tools, budget
  - **What we'll do if validated:** Next step
  - **What we'll do if invalidated:** Pivot or kill decision

  ## 5. Learning Milestones
  A sequence of hypothesis tests ordered from fastest/cheapest to most expensive:
  | Milestone | Hypothesis Being Tested | Method | Timeline | Investment | Go/No-Go Criteria |

  ## 6. Risks and Unknowns
  What we know we don't know — and what we might not know we don't know.

  ## 7. Connection to Strategy
  How does this hypothesis connect to the company's strategic goals? What is the cost of being wrong (time, opportunity cost, money)?
variables:
  - "{{initiative_name}}"
  - "{{problem_belief}}"
  - "{{solution_idea}}"
  - "{{target_user}}"
  - "{{business_goal}}"
  - "{{existing_evidence}}"
  - "{{uncertainties}}"
exampleInput: |
  initiative_name: AI-Powered Candidate Screening for SMB Hiring Teams
  problem_belief: Small hiring teams (1–3 recruiters) spend too much time reading resumes for high-volume roles and often miss qualified candidates because they're inconsistent in what they look for
  solution_idea: An AI screening tool that reads resumes against a job description and produces a ranked shortlist with reasoning, so recruiters can focus on qualified candidates rather than initial screening
  target_user: SMB recruiters (1–5 person talent teams) at companies hiring 20–100 people per year
  business_goal: Drive expansion revenue from existing customers; attract new customers in the SMB hiring market
  existing_evidence: 3 customer interviews mentioned resume volume as frustrating. NPS survey: "saves time" is the #3 feature request. 2 competitors (Greenhouse, Lever) have enterprise versions of this.
  uncertainties: Whether SMB recruiters will trust AI ranking. Whether our current resume parsing quality is sufficient. Whether this actually saves meaningful time (vs. just shifting where time is spent). Whether customers will pay more for this.
exampleOutput: |
  # Product Hypothesis: AI-Powered Candidate Screening

  ## 1. Core Hypothesis Statement

  **We believe that** SMB recruiters (1–3 person talent teams) **experience** significant time waste and inconsistent quality in resume screening for high-volume roles **when** they receive more than 30 applications for a single position **because** they lack a systematic way to evaluate resumes against criteria, leading to inconsistent judgments and 2–4 hours lost per role to initial screening.

  **We believe that** an AI-powered screening tool that ranks and explains candidate shortlisting **will** reduce time spent on initial resume screening by at least 60% per role **which will result in** customers upgrading to a higher pricing tier, a measurable reduction in churn among high-volume hiring accounts, and new logo acquisition from prospects whose primary objection is resume volume.

  **We will know we are right when** 25% of customers who use AI screening for a live role upgrade their plan or report 2+ hours saved per role, within 60 days of feature availability.

  **We will know we are wrong when** fewer than 15% of beta users apply AI screening to a second role after trying it once (indicating the output is not trusted or not saving time).

  ## 2. Assumptions Inventory

  | Assumption | Type | Confidence | Risk if Wrong | How to Test |
  |-----------|------|-----------|--------------|-------------|
  | SMB recruiters spend 2+ hours on initial resume screening per high-volume role | Problem | Medium | High — whole value prop collapses | 5 user interviews with time diary |
  | Recruiters will trust AI rankings enough to act on them | Solution | Low | High — no adoption if not trusted | Prototype test with real resumes |
  | Our resume parsing quality is sufficient for accurate AI screening | Technical | Low | High — bad output → no trust | Technical spike on 100 real resumes |
  | SMB recruiters have high-volume roles (30+ applicants) regularly | Market | Medium | High — small sample size limits value | Product usage data analysis |
  | Customers will pay more for this feature | Business | Low | Medium — may still retain without upgrade | Pricing page fake door test |
  | AI screening reduces screening time by ≥60% | Solution | Low | Medium — still valuable at 40% | Time-tracked usability study |

  ## 3. Riskiest Assumption
  **"Recruiters will trust AI rankings enough to act on them"** is the riskiest assumption. If recruiters re-review every AI-ranked candidate anyway (to "check the AI's work"), the time savings evaporate and the product is just adding complexity. This assumption must be tested before we write a single line of production code. The second riskiest is resume parsing quality — if our extraction is poor, rankings will be poor, and trust will never form.

  ## 4. Validation Plan

  **Experiment: Wizard of Oz prototype test**
  - Type: Concierge / Wizard of Oz (human-operated fake AI)
  - What we'll do: Recruit 5 beta customers with active high-volume roles. Ask them to share 30 resumes + job description with us. A product team member manually screens and ranks them, presenting the output as "AI screening." Interview the recruiter after they receive and use the shortlist.
  - Measure: Did they use the shortlist directly, or did they re-review all 30 resumes? Time to first interview scheduled. Qualitative: do they trust the rankings?
  - Success threshold: 4 of 5 recruiters use the shortlist without re-reviewing all resumes. At least 3 schedule interviews from the shortlist.
  - Failure threshold: >3 of 5 recruiters review all resumes anyway.
  - Timeline: 2 weeks to recruit, 2 weeks to run
  - Resources: 1 PM, 20 hours, 0 engineering
  - If validated: Build lightweight prototype; expand to 20-customer beta
  - If invalidated: Explore alternative (transparency features, confidence scores) or kill initiative

  ## 5. Learning Milestones

  | Milestone | Hypothesis | Method | Timeline | Investment | Go/No-Go |
  |-----------|-----------|--------|----------|-----------|----------|
  | 1 | Recruiters trust AI shortlists | Wizard of Oz (5 users) | 4 weeks | PM time only | 4/5 use shortlist directly |
  | 2 | Our parser accuracy is sufficient | Technical spike on 100 resumes | 2 weeks | 1 engineer | >85% accurate extraction |
  | 3 | Meaningful time savings achieved | Timed usability test (10 users) | 3 weeks | Prototype built | ≥50% time reduction |
  | 4 | Customers will upgrade | Pricing page test + 20 beta conversations | 4 weeks | CS time | 20% express upgrade interest |
tips:
  - "The 'We will know we are wrong when' line is the most important line in the hypothesis. If you can't articulate what would prove you wrong, you don't have a hypothesis — you have a belief."
  - "Sort your assumptions by Risk × Confidence — test high-risk, low-confidence assumptions first, with the cheapest method possible. This is where most product decisions save or waste the most money."
  - "The Wizard of Oz method (a human pretending to be AI/automation) is one of the most powerful validation techniques. You can test user behavior and trust without building anything."
  - "After running the validation experiment, update this document with actual results — it becomes an invaluable artifact for the post-launch review and future planning."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - success-metrics-framework
  - research-plan
  - prd-one-pager
  - competitor-analysis
tags:
  - hypothesis-driven
  - product-management
  - lean-startup
  - validation
  - product-strategy
---
