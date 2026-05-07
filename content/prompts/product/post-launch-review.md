---
title: "Write a post-launch review for a product feature"
slug: post-launch-review
function: product
role: product-management
description: "Generate a structured post-launch review that evaluates what went well, what didn't, and what the team learned — to improve future launches and document impact."
useCase: "Use this prompt 30–60 days after a feature launch to assess performance against targets and extract learnings. Post-launch reviews are often skipped when launches go well and rushed when they go poorly — both are mistakes. Consistent reviews build the institutional knowledge that makes every subsequent launch better."
prompt: |
  You are a senior product manager conducting a thorough post-launch review. Write a post-launch review for the feature described below.

  **Feature name:** {{feature_name}}
  **Launch date:** {{launch_date}}
  **Review date:** {{review_date}}
  **Original launch goals:** {{launch_goals}}
  **Original success metrics and targets:** {{success_metrics_targets}}
  **Actual metrics achieved:** {{actual_metrics}}
  **What went well:** {{went_well}}
  **What went wrong or disappointed:** {{went_wrong}}
  **Customer feedback received:** {{customer_feedback}}
  **Team feedback:** {{team_feedback}}
  **Any incidents or issues during launch:** {{incidents}}

  Write a post-launch review with these sections:

  ## 1. Executive Summary (1 paragraph)
  The most important things to know about this launch: Did it succeed? What was the most significant outcome (positive or negative)? What's the single most important lesson?

  ## 2. Goals and Metrics Performance
  | Metric | Target | Actual | Assessment |

  For each metric, provide:
  - Whether it was met, exceeded, or missed
  - The likely reasons behind the result (don't just report — analyze)
  - Whether the target was well-calibrated in hindsight (was it too easy? too ambitious?)

  Overall launch rating: Exceeded / Met / Partially Met / Did Not Meet — with 1–2 sentences explaining the rating.

  ## 3. What Went Well (and Why)
  3–5 specific things that contributed to launch success. For each:
  - What happened
  - Why it worked
  - What can be replicated in future launches

  ## 4. What Didn't Go as Expected
  3–5 things that underperformed, went wrong, or were harder than anticipated. For each:
  - What happened
  - Root cause (not just what went wrong — why it went wrong)
  - Impact on the launch
  - What we'd do differently

  ## 5. Customer Insights from the Launch
  What did you learn about customers from how they responded to this feature?
  - Unexpected usage patterns
  - Feedback themes (positive and negative)
  - Segments that responded differently than expected
  - Anything that changes your understanding of the customer problem

  ## 6. Team Process Learnings
  What did you learn about how the team operates?
  - Communication that worked or didn't
  - Cross-functional coordination wins or failures
  - Process changes to make for next time
  - Any individual contributions worth recognizing

  ## 7. Product Decisions Validated or Invalidated
  Which product bets or assumptions did this launch confirm or challenge?
  - Hypotheses that were proven right
  - Hypotheses that were disproven
  - New questions raised by the data

  ## 8. Next Steps and Follow-On Work
  What decisions or actions does this review drive?
  - Feature improvements planned (with priority)
  - Features that should be built next based on learnings
  - Metrics to continue monitoring
  - Experiments to run

  ## 9. Institutional Knowledge to Document
  What should be captured so future teams benefit from this launch?
  - Technical decisions and trade-offs made
  - Vendor or tooling learnings
  - Customer segment insights
  - Process improvements to add to the launch checklist
variables:
  - "{{feature_name}}"
  - "{{launch_date}}"
  - "{{review_date}}"
  - "{{launch_goals}}"
  - "{{success_metrics_targets}}"
  - "{{actual_metrics}}"
  - "{{went_well}}"
  - "{{went_wrong}}"
  - "{{customer_feedback}}"
  - "{{team_feedback}}"
  - "{{incidents}}"
exampleInput: |
  feature_name: AI Insights (weekly engagement summary)
  launch_date: March 15, 2025
  review_date: April 20, 2025
  launch_goals: Increase analytics engagement, reduce time-to-insight for HR teams, differentiate against Culture Amp in competitive deals
  success_metrics_targets: |
    - Week 1 open rate: 40% of accounts open AI Insights
    - 30-day weekly active usage: 35% of accounts
    - NPS improvement: +6 points among AI Insights users
    - Competitive wins citing AI: 10 in 30 days
  actual_metrics: |
    - Week 1 open rate: 52% (exceeded)
    - 30-day weekly active usage: 28% (missed)
    - NPS improvement: +4 points (partially met)
    - Competitive wins citing AI: 4 in 30 days (missed)
    - Token cost: $6,200/month at 70% rollout (on track, within budget)
  went_well: Week 1 excitement was strong; CS team proactively used it in customer conversations; no major technical incidents; Legal approval process smoother than expected
  went_wrong: Retention of weekly usage dropped after week 3; AI accuracy complaints from 7 accounts about incorrect data attribution; phased rollout expansion was delayed 1 week due to a bug found at 50% threshold
  customer_feedback: |
    Positive: "Finally something that tells me what to do with my data" — multiple accounts
    Negative: 7 accounts flagged AI insights attributing positive trends to the wrong department. 3 accounts said insights felt generic, not specific to their company.
    Unexpected: Several customers shared AI summaries directly with their CEOs — usage pattern we hadn't planned for but loved
  team_feedback: Engineering felt pressure during the 50% expansion bug — communication wasn't clear about who owned the go/no-go decision. CS loved the feature but didn't have enough time to train before launch.
  incidents: Minor bug at 50% threshold — wrong department attribution in 12% of accounts. Fixed in 48 hours. No P0 incidents.
exampleOutput: |
  # Post-Launch Review: AI Insights
  **Launch:** March 15, 2025 | **Review:** April 20, 2025 | **Author:** VP Product

  ## 1. Executive Summary
  AI Insights launched successfully with strong initial engagement (52% Week 1 open rate, exceeding our 40% target) but retention softened by Week 3, suggesting users are excited but not yet converted to a weekly habit. The most significant issue was an AI accuracy bug at the 50% expansion threshold — resolved in 48 hours — but it produced 7 customer escalations and eroded trust with early adopters. The most important lesson: accuracy must be verified at each rollout stage before expansion, not assumed to carry from the previous stage.

  ## 2. Metrics Performance

  | Metric | Target | Actual | Assessment |
  |--------|--------|--------|------------|
  | Week 1 open rate | 40% | 52% | Exceeded — strong launch curiosity |
  | 30-day weekly active usage | 35% | 28% | Missed — retention problem, not interest |
  | NPS improvement | +6 pts | +4 pts | Partially met |
  | Competitive wins citing AI | 10 | 4 | Missed — too short a window for sales cycle |
  | Token cost | <$8K/month | $6.2K | On track |

  **Overall rating: Partially Met**
  Strong initial adoption exceeded targets, but weekly habit formation fell short. The competitive impact metric was almost certainly a bad target for a 30-day window given our typical sales cycle.

  ## 3. What Went Well

  **1. Launch communications were timely and effective**
  The CS team proactively used AI Insights in customer conversations the week before launch, generating organic buzz. Several customers were already asking about it before the in-app announcement went out. Replication: brief CS with feature demo 2 weeks before launch (not 3 days before).

  **2. Legal review was faster than expected**
  Starting legal review 5 weeks before launch (vs. our previous 3-week habit) meant we had approved language 2 weeks early. This gave Marketing time to refine copy. Keep this timing in future launches.

  **3. No P0 incidents on launch day**
  Feature flag infrastructure worked perfectly. The circuit breaker for token costs performed as designed. Engineering's monitoring setup was thorough.

  ## 4. What Didn't Go as Expected

  **1. Weekly habit formation didn't stick after Week 3 [Root cause: no re-engagement mechanism]**
  Users opened Insights with curiosity in Week 1, but 24% of those weekly users dropped off by Week 3. Analysis suggests users opened it, found it interesting, but had no prompt to return the following week. There's no notification, no email, no reminder. The "open rate" success masked this retention gap. Fix: Add a weekly email digest or in-app prompt.

  **2. AI accuracy bug at 50% expansion [Root cause: insufficient data validation at scale]**
  When we expanded to 50% of accounts, 12% showed incorrect department attribution. The bug was present at 20% but didn't surface because our QA sample didn't include the affected account profile. Fixed in 48 hours, but the 7 customer escalations damaged trust. Fix: Expand QA sample size at each rollout stage; add automated accuracy checks against ground truth.

  **3. CS team undertrained at launch [Root cause: training scheduled too late]**
  CS received training 3 days before launch. Several CSMs hadn't fully absorbed the feature and were caught off guard by customer questions about AI accuracy. Fix: CS training must be complete 2 weeks before launch — add to checklist.

  ## 5. Customer Insights

  **Unexpected usage pattern: CEO sharing**
  Multiple customers told us they copied AI summaries to share with their CEO or leadership team. This is a use case we hadn't designed for. Implication: there may be a native "share with leadership" feature worth building — it could also drive awareness among executive sponsors.

  **Accuracy = trust**
  The 7 accounts that escalated inaccuracy issues represent a small % of users but a disproportionate signal. HR managers are professionally accountable for what they tell leadership — AI that gets it wrong embarrasses them. Accuracy confidence is the gate to habit formation.

  **"Generic" complaint from 3 accounts**
  Three larger accounts felt insights weren't specific enough to their company culture. Their response rate was >85%, giving us rich data — but the insights were still general. Implication: we may need a more sophisticated model for high-data accounts.

  ## 7. Product Decisions Validated or Invalidated

  | Hypothesis | Verdict | Evidence |
  |-----------|---------|----------|
  | HR managers want to know "what to do" not just "what the score is" | Confirmed | "Finally something that tells me what to do" — repeated verbatim by 8+ users |
  | Users will build a weekly habit from a new feature alone | Invalidated | Week 3 drop-off; no habit-forming mechanism exists today |
  | Competitive impact will be measurable in 30 days | Invalidated | Sales cycle is 60–120 days; 30-day window was too short |
  | Token costs will be manageable at scale | Confirmed | $6.2K at 70% — on track for $8.5K at 100%, within budget |

  ## 8. Next Steps

  **Priority improvements:**
  1. Weekly email digest or in-app prompt (retention fix) — Engineer + Design — 3 weeks
  2. Accuracy validation pipeline at each rollout stage — Engineering — 4 weeks
  3. "Share with leadership" native export — PM + Engineering — evaluate for Q2

  **Metrics to monitor:**
  - Weekly habit rate (users who open 3+ weeks in a row)
  - AI accuracy escalation rate (target: <0.5%)
  - Department attribution accuracy (add to monitoring dashboard)

  ## 9. Institutional Knowledge

  **Add to standard launch checklist:**
  - CS training must be complete 2 weeks before launch (not 3 days)
  - AI accuracy QA sample must include the account profile edge cases at each rollout stage
  - For AI features: verify accuracy independently at 20%, 50%, and 100% — don't assume the 20% accuracy holds at scale

  **For the sales team:**
  Don't set a 30-day competitive impact target for features that affect a 90-day sales cycle. Use pipeline entry rate instead.
tips:
  - "Write the post-launch review even when the launch is a clear success. The best launches still have learnings, and they're easier to surface in a good mood than in a crisis."
  - "The root cause analysis in 'What Didn't Go as Expected' is the most valuable section. Surface the systemic cause, not just the symptom — this is where process improvement lives."
  - "Distribute the review broadly — not just to the core team. Learnings locked inside a team document help no one. Share at the company level if the feature was significant."
  - "Turn the learnings into changes to your standard launch checklist before the next launch. A post-launch review that produces no process change is just documentation."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - launch-checklist
  - go-to-market-brief
  - success-metrics-framework
  - retrospective-summary
tags:
  - post-launch
  - product-management
  - retrospective
  - learning
  - product-analytics
---
