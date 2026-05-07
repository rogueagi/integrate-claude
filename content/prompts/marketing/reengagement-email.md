---
title: "Write a re-engagement email for inactive users"
slug: reengagement-email
function: marketing
role: lifecycle
description: "Generate a direct, honest re-engagement email that wins back inactive users without desperate discounting or hollow urgency."
useCase: "Use this prompt for users who haven't logged in within a defined window (typically 30–90 days depending on your product). Re-engagement emails work best when they're honest about the gap, offer something real, and make the return frictionless."
prompt: |
  You are a lifecycle marketer who knows that re-engagement emails are most effective when they're honest and human, not desperate or promotional. Write a re-engagement email for inactive users.

  Context:
  - Product name: {{product_name}}
  - Inactivity window: {{inactivity_window}} (e.g., 45 days since last login)
  - What the product does: {{product_description}}
  - What this user signed up to achieve: {{signup_goal}} (if known; use general goal if not)
  - Something new or improved since they were last active: {{whats_new}}
  - One easy "return action" that delivers value quickly: {{return_action}}
  - What you'll do if they don't come back: {{sunset_plan}} (e.g., "we'll pause their account," "this is our last email") — only include if you have a genuine plan

  Write a re-engagement email that:
  - Opens by acknowledging the gap honestly — not accusatory, not groveling
  - Offers a genuine reason to come back ({{whats_new}} or the reminder of {{signup_goal}})
  - Makes the return action as simple as possible with a clear link
  - Is under 150 words
  - Does NOT offer a discount as the primary re-engagement hook (unless discount is relevant and genuine)
  - Does NOT use artificial urgency ("Your account will be deleted in 24 hours!")
  - Ends with an option to unsubscribe or opt out gracefully

  Write 2 variants:
  - Variant A: Re-engagement led by the "what's new" angle
  - Variant B: Re-engagement led by gentle accountability — reminding them of their own goal

  Also write the subject line for each.
variables:
  - "{{product_name}}"
  - "{{inactivity_window}}"
  - "{{product_description}}"
  - "{{signup_goal}}"
  - "{{whats_new}}"
  - "{{return_action}}"
  - "{{sunset_plan}}"
exampleInput: |
  product_name: Anchor Analytics
  inactivity_window: 45 days
  product_description: BI platform for operations teams
  signup_goal: get real-time visibility into operational metrics without depending on IT
  whats_new: launched Signal — automatic anomaly detection that alerts you when any operational metric deviates from normal
  return_action: log back in and enable Signal in one click from the dashboard
  sunset_plan: this is one of our last re-engagement emails before we move their account to a reduced plan
exampleOutput: |
  **Variant A: What's New**
  Subject: "45 days later — something new to show you"

  Hi [First Name],

  It's been about 45 days since you logged in. We've been building.

  The biggest addition: Signal — automatic anomaly detection that watches your operational metrics and alerts you when something goes sideways. No setup, no SQL. It turns Anchor from a dashboard you check into a system that comes to you.

  One click to enable it: [Log in and turn on Signal →]

  If this isn't the right time, no pressure — you can update your email preferences below.

  — Elena, Anchor Analytics

  ---

  **Variant B: Accountability**
  Subject: "The visibility problem you signed up to solve"

  Hi [First Name],

  You signed up for Anchor to get real-time operational visibility without depending on IT. I don't know if that's been solved for you — or if it's still sitting on the list.

  If you want to pick it back up: [Log in and get started →]. Takes 5 minutes to reconnect.

  If not, no hard feelings — you can unsubscribe below and we won't keep sending.

  — Elena, Anchor Analytics
tips:
  - "Variant B (accountability) is counterintuitive but often outperforms Variant A — it respects the user's intelligence and doesn't pretend the gap didn't happen."
  - "Giving users an easy out ('you can unsubscribe below') actually increases re-engagement rates — it removes the feeling of being trapped and earns trust."
  - "If you do have a sunset plan (moving to a reduced tier, pausing the account), mention it honestly. Fake urgency destroys trust; real consequences motivate action."
  - "Segment this email by what the user actually did before going inactive — someone who completed setup but never ran a report needs a different re-engagement than someone who never finished setup."
  - "Run re-engagement campaigns before the 90-day mark. After 90 days of inactivity, re-engagement rates drop significantly — the habit is well and truly broken."
complexity: intermediate
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - welcome-email
  - feature-announcement-email
  - churn-risk-email
tags:
  - lifecycle
  - email
  - reengagement
  - retention
  - saas
---
