---
title: "Decide whether and how to escalate a support ticket"
slug: escalation-decision-framework
function: customer-service
role: support
description: "Evaluate a support ticket against a structured escalation framework and generate a recommended action with rationale."
useCase: "Use this prompt when a support ticket feels like it might need escalation but you're not sure. Consistent escalation decisions reduce both under-escalation (letting serious issues fester) and over-escalation (overwhelming engineering and leadership with routine requests)."
prompt: |
  You are a senior support manager helping a rep decide whether to escalate a support ticket. Analyze the following ticket and provide a clear escalation recommendation.

  Ticket details:
  - Customer name: {{customer_name}}
  - Account tier: {{account_tier}} (e.g., free, professional, enterprise)
  - Issue description: {{issue_description}}
  - How long the issue has been unresolved: {{time_unresolved}}
  - Customer's expressed urgency or frustration level: {{customer_sentiment}}
  - What the rep has already tried: {{attempted_solutions}}
  - Any business impact the customer has mentioned: {{business_impact}}
  - Renewal date or account health notes: {{account_health}}

  Evaluate this ticket against these escalation criteria and provide a recommendation:

  ## 1. Escalation Assessment

  Rate each dimension on a scale (High / Medium / Low):
  - **Technical complexity:** Is this beyond tier-1 support capability?
  - **Customer impact:** How significantly is this affecting the customer's work?
  - **Account risk:** Is there churn risk, renewal risk, or strategic account concern?
  - **Time sensitivity:** Is there a hard deadline or compounding urgency?
  - **Attempted resolution:** Has the rep reasonably exhausted tier-1 options?

  ## 2. Escalation Recommendation
  - **Recommended action:** (one of: Handle at tier-1, Escalate to engineering, Escalate to senior support, Escalate to customer success / account management, Escalate to leadership)
  - **Rationale:** 2–3 sentences explaining the recommendation
  - **Priority level:** P1 (respond in 1 hour), P2 (respond in 4 hours), P3 (respond next business day)

  ## 3. Internal Escalation Note
  A brief, structured note the rep can send with the escalation — summarizing the issue, what's been tried, and what's needed. Under 100 words.

  ## 4. Customer Communication During Escalation
  A brief message to send the customer while the issue is being escalated — sets expectations without over-promising.
variables:
  - "{{customer_name}}"
  - "{{account_tier}}"
  - "{{issue_description}}"
  - "{{time_unresolved}}"
  - "{{customer_sentiment}}"
  - "{{attempted_solutions}}"
  - "{{business_impact}}"
  - "{{account_health}}"
exampleInput: |
  customer_name: Harlow Retail Group (account: Josephine)
  account_tier: Enterprise
  issue_description: Signal anomaly detection has been sending false positive alerts for 3 days — getting alerts every 15 minutes on a metric that's performing normally; the team has started ignoring all alerts
  time_unresolved: 3 days
  customer_sentiment: very frustrated; mentioned that the team has disabled alerts entirely because of the false positives, which defeats the purpose of the feature
  attempted_solutions: adjusted alert sensitivity threshold — didn't fix it; cleared cache — no change; confirmed data source is updating normally
  business_impact: team has disabled Signal entirely, so they now have no anomaly detection coverage — the key value driver for their Enterprise upgrade
  account_health: Enterprise customer, renews in 4 months, had expansion conversation 2 weeks ago
exampleOutput: |
  ## 1. Escalation Assessment
  - Technical complexity: **High** — false positive alert behavior after config changes suggests a backend logic or data pipeline issue beyond tier-1 scope
  - Customer impact: **High** — the customer has disabled the core feature they upgraded for
  - Account risk: **High** — Enterprise account, renewing in 4 months, expansion conversation recently; this is a direct churn signal
  - Time sensitivity: **High** — every day they have Signal disabled, they're experiencing zero value from the feature and building a negative narrative around it
  - Attempted resolution: **High** — standard tier-1 remediation steps have been exhausted

  ## 2. Escalation Recommendation
  - **Recommended action:** Escalate to engineering (immediate) + loop in customer success / account management
  - **Rationale:** The technical issue is beyond tier-1 scope and requires engineering investigation of the Signal alert logic for this specific account. The account risk warrants CSM involvement to manage the relationship through the fix — especially given the renewal timeline and recent expansion conversation. Treating this as engineering-only misses the relationship dimension.
  - **Priority:** P1 — respond within 1 hour

  ## 3. Internal Escalation Note
  Escalating Signal false positive issue for Harlow Retail Group (Enterprise, renewing in 4 months). Customer has received false positive alerts every 15 minutes for 3 days on a normally-performing metric. Standard remediation (sensitivity adjustment, cache clear) has not resolved it. Customer has disabled Signal entirely. This is the primary value driver for their Enterprise plan — needs engineering investigation of alert logic for this account. CSM should be looped in immediately.

  ## 4. Customer Communication
  Josephine — I'm escalating this to our engineering team right now, marked as urgent. The false positive behavior you're seeing requires investigation at a level our support team can't access, and I want to make sure the right people are looking at it today.

  I'll have an update for you within 2 hours — either a fix or a clear explanation of what's happening and a timeline. You shouldn't have to wait days for this.
tips:
  - "The account health field is the most commonly omitted but most critical input. A P3 technical issue becomes a P1 relationship issue when the account renews in 6 weeks."
  - "Over-escalation is a real cost — it overwhelms engineering and trains customer-facing teams not to solve problems independently. Only escalate after tier-1 options are genuinely exhausted."
  - "The internal escalation note format should be standardized across your team. Ambiguous escalation notes that don't include 'what's been tried' waste engineering time."
  - "When in doubt about escalation, the safest move is to loop in a senior support rep for a second opinion rather than escalating all the way to engineering."
  - "After the issue is resolved, run a post-mortem on the escalation: should this have been caught by a tier-1 fix? If yes, update the knowledge base to prevent recurrence."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - ticket-response-draft
  - de-escalation-response
  - internal-handoff-summary
  - executive-escalation-email
tags:
  - escalation
  - support-process
  - triage
  - customer-service
---
