---
title: "Define success metrics for a feature or product area"
slug: success-metrics-framework
function: product
role: product-management
description: "Generate a structured success metrics framework for a product feature or area — including north star, leading/lagging indicators, guardrail metrics, and measurement methodology."
useCase: "Use this prompt before a feature ships, not after. Defining metrics before launch forces you to clarify what success means, prevents post-hoc rationalization, and creates a shared definition the team can rally around."
prompt: |
  You are a product analytics expert who helps teams define rigorous, meaningful metrics. Create a success metrics framework for the feature or product area described below.

  **Feature or product area:** {{feature_name}}
  **What it does:** {{feature_description}}
  **Business objective it serves:** {{business_objective}}
  **Target user:** {{target_user}}
  **Launch timeline:** {{launch_timeline}}
  **Available analytics tools:** {{analytics_tools}}
  **Current baseline metrics (if any):** {{baseline_metrics}}

  Build a metrics framework with these components:

  ## 1. Metrics Hierarchy

  **North Star Metric**
  The single most important measure of whether this feature is achieving its purpose. Must be:
  - Directly tied to user value (not a vanity metric)
  - Measurable and unambiguous
  - Influenceable by product decisions (not purely external)

  State: North star metric name, definition, unit, and why it was chosen over alternatives.

  **Primary Metrics (3–5)**
  The key metrics that together tell the story of feature health. Each must:
  - Measure a distinct dimension of success (adoption, engagement, satisfaction, business impact)
  - Have a clear definition and formula
  - Have a target and timeline

  **Secondary Metrics (3–5)**
  Supporting metrics for deeper diagnosis — useful when a primary metric moves, to understand why.

  **Guardrail Metrics (2–4)**
  Metrics that must not deteriorate. These protect against optimization that wins on your primary metrics while harming the broader product or user experience. Flag these as: "If these go red, stop regardless of primary metric performance."

  ## 2. Metrics Definitions
  For each metric:
  - **Name:** Clear, descriptive
  - **Definition:** Precise formula or counting rule
  - **Why this metric:** Why it matters for this feature specifically
  - **How measured:** The exact events, queries, or data sources
  - **Baseline:** Current value (or N/A if new feature)
  - **Target:** Success threshold at 30/60/90 days
  - **Failure threshold:** The value that would trigger a response
  - **Traps:** Common ways this metric can look good while hiding problems

  ## 3. Anti-Metrics
  List 3–5 metrics that might seem relevant but would be misleading for this feature. Explain why each is a trap:
  - What they measure
  - Why they look appealing
  - What problem they hide

  ## 4. Measurement Plan
  - What events need to be instrumented before launch?
  - How will data be collected and stored?
  - What dashboard or report will be used to monitor?
  - Who reviews metrics, how often, and what triggers an action?

  ## 5. Experiment Design (if applicable)
  If A/B testing is appropriate for this feature:
  - What would be tested?
  - Sample size required for statistical significance
  - Test duration
  - Primary and secondary success metrics for the experiment
  - Guardrail metrics that would end the experiment early

  ## 6. 30/60/90-Day Review Plan
  What will you assess at each checkpoint, and what decisions could result?
  | Checkpoint | Questions to Answer | Possible Decisions |

  ## 7. Reporting Template
  A weekly/monthly reporting template showing how metrics will be communicated to stakeholders.
variables:
  - "{{feature_name}}"
  - "{{feature_description}}"
  - "{{business_objective}}"
  - "{{target_user}}"
  - "{{launch_timeline}}"
  - "{{analytics_tools}}"
  - "{{baseline_metrics}}"
exampleInput: |
  feature_name: Saved Filters in Analytics Dashboard
  feature_description: Users can save named filter combinations and apply them in one click, persisting across sessions
  business_objective: Increase analytics dashboard engagement and reduce time-to-insight for power users; reduce filter-related support tickets
  target_user: Power users (users who apply 3+ filters per session)
  launch_timeline: Launching January 15, 2025
  analytics_tools: Mixpanel, Zendesk, Intercom
  baseline_metrics: |
    - Dashboard DAU: 1,240
    - Power user weekly sessions: 4.1 sessions/week avg
    - Avg session time: 12.3 minutes
    - Time to first filter applied: 3.8 minutes avg for power users
    - Filter-related support tickets: 15/month
exampleOutput: |
  # Success Metrics Framework: Saved Filters

  ## 1. Metrics Hierarchy

  **North Star Metric: Power User Time-to-First-Insight**
  Definition: Median time from dashboard load to first filter applied, for users who have ≥1 saved filter.
  Why: This directly measures the core value proposition — saved filters exist to eliminate setup time and get users to insights faster. A power user who saves filters should be in their data in under 60 seconds, not 4 minutes.
  Alternative considered: "Number of saved filters created" — rejected because creating a filter doesn't prove it was useful.

  **Primary Metrics:**
  1. **Saved Filter Adoption Rate** — % of power users (3+ filter sessions) who create ≥1 saved filter within 30 days of feature launch
  2. **Saved Filter Usage Rate** — % of qualifying sessions where user applies a saved filter (vs. manually building filters)
  3. **Power User Session Frequency** — Weekly sessions per power user (proxy for engagement value)
  4. **Filter-Related Support Tickets** — Monthly support tickets tagged "filters" in Zendesk

  **Guardrail Metrics:**
  - **Overall Dashboard DAU** — must not decrease >5% from baseline (1,178 floor)
  - **Dashboard Load Time** — must remain <2 seconds (saved filter dropdown must not add latency)
  - **Error Rate on Filter Operations** — must remain <0.1%

  ## 2. Metrics Definitions (Sample)

  **Saved Filter Adoption Rate**
  - Definition: (# power users with ≥1 saved filter created) / (total power users) in the 30-day post-launch window
  - Baseline: 0% (feature doesn't exist)
  - Target 30 days: 35%
  - Failure threshold: <15% at 30 days → feature may be too buried or value not clear
  - Trap: Counting all filter saves including immediate deletes. Only count filters that persist >24 hours.

  **Filter-Related Support Tickets**
  - Definition: Monthly count of Zendesk tickets tagged "filters" by support team
  - Baseline: 15/month (last 3 months avg)
  - Target 60 days: <6/month
  - Failure threshold: No change at 60 days suggests the feature isn't solving the user problem
  - Trap: Support volume can drop because customers give up, not because the feature works. Pair with CSAT data.

  ## 3. Anti-Metrics (Don't Use These)
  - **Total filters created (raw count):** Looks good when users create filters, then delete them because they're not useful. Use adoption rate instead.
  - **Page views of the filter dropdown:** Measures curiosity, not value. A user can open the dropdown 20 times and never create a filter.
  - **Average session length:** Could increase because users are confused and spending more time — not because they're finding more value.

  ## 5. A/B Test Design
  Recommended: Run a 50/50 A/B test for the first 4 weeks.
  - Control: Current dashboard (no saved filters)
  - Treatment: Dashboard with saved filters feature visible
  - Primary metric: Power User session frequency at day 28
  - Sample size: 400 power users per arm (80% power, α=0.05)
  - Duration: 4 weeks (sufficient for 2+ session cycles)
  - Guardrail: End test early if dashboard load time increases >200ms in treatment

  ## 6. 30/60/90-Day Review Plan
  | Checkpoint | Key Questions | Possible Decisions |
  |-----------|--------------|-------------------|
  | Day 30 | Is adoption at ≥35%? Is time-to-insight improving? | If <15% adoption: invest in in-app discovery; If on track: proceed to 60-day review |
  | Day 60 | Is usage rate growing? Are support tickets down? | If support tickets unchanged: investigate root cause; If both positive: declare success for v1 |
  | Day 90 | Is session frequency up for power users? | If yes: build shared/team filters for v2; If no: deeper user research on value perceived |
tips:
  - "Define your metrics before launch, never after. Post-hoc metric selection is how teams cherry-pick good news and miss real problems."
  - "The guardrail metrics section is often skipped but critically important. An engagement feature that degrades page load time is not a success — you need to protect the baseline."
  - "Anti-metrics (what NOT to measure) are as important as what you do measure. Walk through each proposed metric and ask: 'How could this metric look good while the feature is actually failing?'"
  - "If you can't measure your north star metric with existing tools, that's a launch blocker — add instrumentation to the definition of done for the feature."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - product-hypothesis
  - prd-one-pager
  - post-launch-review
  - go-to-market-brief
tags:
  - metrics
  - product-analytics
  - product-management
  - measurement
  - kpis
---
