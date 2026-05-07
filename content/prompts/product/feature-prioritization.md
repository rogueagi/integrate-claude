---
title: "Prioritize a feature backlog using a scoring framework"
slug: feature-prioritization
function: product
role: product-management
description: "Score and rank a feature backlog using a structured prioritization framework — balancing customer impact, business value, strategic fit, and implementation effort."
useCase: "Use this prompt when your backlog has grown too large and everything feels urgent. Structured scoring removes politics from prioritization, gives you a defensible rationale for what gets built next, and surfaces assumptions that need testing."
prompt: |
  You are a strategic product manager with expertise in product prioritization. Apply a structured scoring framework to the feature backlog below and produce a prioritized, ranked list with clear rationale.

  **Product name:** {{product_name}}
  **Team's stated priorities this quarter:** {{quarterly_priorities}}
  **Target customer segment:** {{target_segment}}
  **Features to prioritize:** {{feature_list}}
  **Available engineering capacity this quarter:** {{eng_capacity}}
  **Known constraints:** {{constraints}}
  **Strategic goals:** {{strategic_goals}}

  Apply a weighted scoring model with these dimensions. Adjust weights if different priorities are noted above:

  **1. Customer Impact (25%):** How significantly does this improve the experience for target customers?
  - 5: Solves a critical, high-frequency pain point for most customers
  - 4: Solves an important pain point for many customers
  - 3: Meaningful improvement for a subset of customers
  - 2: Nice-to-have for a few customers
  - 1: Minimal customer impact

  **2. Business Value (25%):** What is the revenue or retention impact?
  - 5: Direct revenue driver (new ARR, prevents churn of high-value accounts)
  - 4: Strong indirect revenue impact (improves conversion, reduces churn)
  - 3: Moderate business value (supports expansion, improves NPS)
  - 2: Low business value (operational efficiency, cost savings)
  - 1: No clear business value

  **3. Strategic Fit (20%):** How well does this align with the product strategy and company direction?
  - 5: Core to stated strategy; directly advances a company priority
  - 4: Clearly supports strategy
  - 3: Neutral — neither advances nor conflicts with strategy
  - 2: Tangential to strategy
  - 1: Conflicts with or distracts from strategy

  **4. Confidence (15%):** How well do we understand the problem and solution?
  - 5: Strong user research, validated solution, clear requirements
  - 4: Good understanding, some validation
  - 3: Moderate understanding, limited validation
  - 2: Low confidence — mostly assumption-driven
  - 1: Very early stage — high uncertainty

  **5. Implementation Effort — Inverse (15%):** Smaller effort = higher score.
  - 5: XS (< 1 week engineering)
  - 4: S (1–2 weeks)
  - 3: M (2–4 weeks)
  - 2: L (1–2 months)
  - 1: XL (>2 months)

  **Scoring output for each feature:**
  | Feature | Customer Impact | Business Value | Strategic Fit | Confidence | Effort (inv.) | Weighted Score | Priority Rank |

  **After the scoring table:**

  ## Analysis
  Provide a narrative analysis covering:
  1. **Top tier (build now):** Which features scored highest and why?
  2. **Mid tier (build next):** What's in the queue after the top tier?
  3. **Reconsider tier:** Features that scored low — should they stay in the backlog, be killed, or need more discovery?
  4. **Surprises:** Anything that scored differently than expected? Why?
  5. **Scoring tensions:** Where did features score high on some dimensions and low on others? What does this mean for the decision?

  ## Capacity Check
  Given the available engineering capacity, how many top-tier features can realistically be committed to this quarter?

  ## Assumptions to Validate
  List the top 5 assumptions embedded in these scores that, if wrong, would change the prioritization.

  ## Political or Stakeholder Considerations
  Note any features where the score may conflict with stakeholder expectations, and how to address this.
variables:
  - "{{product_name}}"
  - "{{quarterly_priorities}}"
  - "{{target_segment}}"
  - "{{feature_list}}"
  - "{{eng_capacity}}"
  - "{{constraints}}"
  - "{{strategic_goals}}"
exampleInput: |
  product_name: Acme Project Management (B2B SaaS, SMB market)
  quarterly_priorities: Reduce churn, grow mid-market revenue, improve NPS
  target_segment: SMB teams (10–200 employees), primarily knowledge workers
  feature_list: |
    1. Saved views/filters (users must re-create filters every session)
    2. AI task summarization (summarize project status from tasks)
    3. Bulk task editing (can only edit tasks one at a time today)
    4. Gantt chart view (most requested feature, PM teams specifically)
    5. Two-way Slack integration (notify and create tasks from Slack)
    6. Advanced reporting dashboard (custom reports and exports)
    7. White-label/custom branding (requested by 2 enterprise prospects)
    8. Guest/external collaborator access (can't share projects with contractors)
    9. Recurring tasks (must manually duplicate tasks for recurring work)
    10. API for developers (many integration requests from power users)
  eng_capacity: 3 full-stack engineers for 12 weeks = ~36 engineer-weeks
  constraints: No new infrastructure. Must be compatible with mobile app. AI features require external API (budget approved for GPT-4 calls up to $5K/month).
  strategic_goals: Stay competitive in SMB, land larger mid-market deals, build AI-differentiated features
exampleOutput: |
  ## Feature Scoring

  | Feature | Cust. Impact | Biz Value | Strategic | Confidence | Effort Inv. | Weighted Score | Rank |
  |---------|-------------|-----------|-----------|-----------|------------|----------------|------|
  | Recurring tasks | 5 | 4 | 4 | 4 | 4 | **4.25** | 1 |
  | Bulk task editing | 5 | 3 | 3 | 5 | 4 | **3.90** | 2 |
  | Guest/external collaborator access | 4 | 5 | 4 | 3 | 3 | **3.85** | 3 |
  | Saved views/filters | 4 | 3 | 3 | 5 | 4 | **3.75** | 4 |
  | Two-way Slack integration | 4 | 4 | 4 | 3 | 3 | **3.70** | 5 |
  | Gantt chart view | 3 | 4 | 3 | 4 | 2 | **3.10** | 6 |
  | AI task summarization | 3 | 3 | 5 | 2 | 3 | **3.10** | 7 |
  | Advanced reporting | 3 | 3 | 3 | 3 | 2 | **2.80** | 8 |
  | Developer API | 2 | 3 | 3 | 3 | 1 | **2.45** | 9 |
  | White-label branding | 1 | 3 | 2 | 3 | 2 | **2.20** | 10 |

  ## Analysis

  **Top tier (build this quarter):** Recurring tasks (#1), bulk task editing (#2), and guest access (#3) are the clear leaders. Recurring tasks addresses a high-frequency pain point with high confidence and moderate effort — the ROI is excellent. Bulk editing is likely underestimated by stakeholders because it's unglamorous, but the effort score and confidence are both high. Guest access is the biggest revenue-driver of the top tier: it unblocks deals where customers need to collaborate with contractors.

  **Mid tier:** Saved filters and Slack integration are both strong and likely in the same sprint cycle if capacity allows.

  **Reconsider tier:** White-label branding scored last. Two prospects requesting it is not sufficient signal for SMB product investment. Recommend: park until 5+ qualified pipeline deals require it. Developer API is a long-term strategic investment but doesn't score well on near-term value — consider as Q2 commitment.

  **Surprise:** The Gantt chart is the most requested feature, but scored #6 because the implementation effort is high (L) and it primarily serves PM power users, not the broader SMB base. The score reflects a real trade-off worth naming in stakeholder conversations.

  ## Capacity Check
  Top 5 features total approximately 22–26 engineer-weeks. With 36 available, there's room for the top 6 features or top 5 + one mid-tier. Recommend committing to top 5 with explicit buffer for unknowns.

  ## Key Assumptions to Validate
  1. Guest access is not technically complex — no new auth infrastructure needed (confidence score assumption)
  2. Recurring tasks can be built without redesigning the task data model (effort assumption)
  3. Gantt chart demand is concentrated in a PM-specific segment, not broadly SMB (customer impact assumption)
  4. AI task summarization quality is high enough with GPT-4 to be useful without hallucinations (confidence assumption)
  5. White-label is not a blocker for the pipeline deals currently in evaluation (business value assumption)
tips:
  - "Score before you discuss. Have each stakeholder fill out the scoring independently, then compare — the divergences tell you where the real disagreements are."
  - "The 'Effort (Inverse)' column should be estimated by engineering, not the PM. It's the most frequently wrong score when PMs estimate alone."
  - "Surfacing the assumptions in writing is the most valuable output for your planning conversations. It forces the team to be explicit about what they're betting on."
  - "If a stakeholder pushes back on the ranking, ask: 'Which score would you change, and why?' This focuses the conversation on evidence, not preference."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - product-roadmap-narrative
  - prd-one-pager
  - sprint-planning-brief
  - stakeholder-alignment-doc
tags:
  - prioritization
  - product-management
  - roadmap
  - backlog
  - decision-making
---
