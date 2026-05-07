---
title: "Write an internal product launch brief"
slug: product-launch-brief
function: marketing
role: product-marketing
description: "Generate a comprehensive internal product launch brief covering positioning, messaging, audience, channel plan, and enablement needs."
useCase: "Use this prompt when planning the go-to-market for a new product, feature, or major update. The launch brief aligns marketing, sales, and product before anyone starts executing — preventing the fragmented, inconsistent launches that underperform."
prompt: |
  You are a senior product marketing manager. Write an internal product launch brief for a new product or feature.

  Launch details:
  - Product/feature name: {{product_name}}
  - What it does (technical description): {{technical_description}}
  - Launch date: {{launch_date}}
  - Launch tier: {{launch_tier}} (e.g., Tier 1 — major launch with PR, Tier 2 — significant feature, Tier 3 — minor update)
  - Target customer segment: {{target_segment}}
  - Primary buyer persona: {{primary_persona}}
  - The problem it solves: {{customer_problem}}
  - Key differentiators vs. alternatives: {{differentiators}}
  - Pricing and packaging: {{pricing}}
  - Launch goals (business metrics): {{launch_goals}}

  Write an internal launch brief with these sections:

  ## Launch Overview
  2–3 sentences: what we're launching, who it's for, and why it matters. The kind of summary a new employee could read to understand the launch.

  ## Positioning Statement
  Fill in this template: "For [target customer], [product name] is the [category] that [key benefit] because [reason to believe]. Unlike [alternative], [product name] [key differentiator]."

  ## Core Messaging Framework
  Three message levels:
  - Headline message (10 words max): the one-line story
  - Elevator pitch (30 seconds / 75 words): for sales reps, executives, events
  - Full message (key claims with supporting proof): for website, sales decks, collateral

  ## Target Audience and Use Cases
  - Primary persona: who they are, what they care about, what triggers their search
  - 2–3 primary use cases with one-sentence descriptions each

  ## Channel and Activation Plan
  For a {{launch_tier}} launch, recommend:
  - Which channels to activate (website, email, paid, social, PR, sales outreach, events)
  - What to create for each channel
  - Sequencing and timing relative to launch date

  ## Sales Enablement Requirements
  What sales and customer success need: updated decks, talk tracks, battle cards, objection guides, one-pagers.

  ## Launch Goals and Success Metrics
  Specific, measurable goals for 30/60/90 days post-launch.

  ## Open Questions / Risks
  2–3 things that need to be resolved before launch day.
variables:
  - "{{product_name}}"
  - "{{technical_description}}"
  - "{{launch_date}}"
  - "{{launch_tier}}"
  - "{{target_segment}}"
  - "{{primary_persona}}"
  - "{{customer_problem}}"
  - "{{differentiators}}"
  - "{{pricing}}"
  - "{{launch_goals}}"
exampleInput: |
  product_name: Signal (anomaly detection feature)
  technical_description: AI-powered feature that monitors 50+ operational KPIs in real time and sends alerts via Slack/email when metrics deviate from expected ranges by more than a configurable threshold
  launch_date: April 15
  launch_tier: Tier 2 — significant feature launch with customer email, website update, and press release
  target_segment: existing Anchor Analytics customers on Professional and Enterprise plans; new prospects in ops-heavy industries (logistics, retail, manufacturing)
  primary_persona: VP of Operations or Operations Director at a 100–500 person mid-market company
  customer_problem: ops teams find out about metric deviations hours or days after they happen — by then the problem has already impacted customers or costs
  differentiators: no SQL or data engineering required; monitors operational KPIs specifically (not generic metrics); configured in minutes; integrates directly with Slack
  pricing: included at no additional cost for Professional and Enterprise customers; not available on Starter
  launch_goals: 60% of eligible existing customers enable Signal within 30 days; 200 new trial signups in first 30 days attributable to Signal messaging
exampleOutput: |
  ## Launch Overview
  On April 15, Anchor Analytics launches Signal — an AI-powered anomaly detection feature that monitors operational KPIs in real time and alerts teams when something goes wrong, before it becomes a customer problem. Signal is available immediately to all Professional and Enterprise customers at no additional cost. For ops teams used to finding out about issues through customer complaints or morning reports, Signal represents a fundamentally different kind of visibility.

  ## Positioning Statement
  For operations leaders at mid-market companies, Signal is the anomaly detection layer that catches metric deviations the moment they happen — not hours or days later — because it monitors your actual operational KPIs continuously without requiring SQL or engineering support. Unlike generic monitoring tools, Signal is pre-configured for operations workflows and connects to your existing Anchor dashboard in minutes.

  ## Core Messaging Framework

  Headline: "Know about problems before your customers do."

  Elevator pitch: "Signal is Anchor's new real-time anomaly detection feature. It watches your key operational metrics around the clock and alerts you the moment something goes sideways — via Slack or email. No setup, no SQL, no data team required. Beta teams cut their alert-to-action time from 48 hours to under 2. It's included on your plan starting April 15."

  Full messaging: [See attached messaging matrix with claims, proof points, and channel-specific variations]

  ## Target Audience

  Primary persona: VP of Operations, 100–500 person company, responsible for team performance metrics but without dedicated data staff. Trigger: recently experienced an issue they found out about too late, or is scaling into new geographies/products and worried about visibility gaps.

  Use cases:
  - Fulfillment error detection: catch order processing anomalies before they affect customer deliveries
  - Revenue anomaly alerts: flag unexpected drops in conversion rate or revenue metrics in real time
  - Ops team capacity monitoring: detect when ticket volume or queue length spikes beyond normal range

  ## Channel and Activation Plan

  T-7 days: Internal enablement — sales team trained, battle card updated, email preview sent to CS team
  T-3 days: Existing customer teaser email ("Something new is coming to your dashboard")
  T-0 (April 15): Website homepage update + feature page live; press release distributed; customer announcement email sent; LinkedIn/Twitter announcement from company account
  T+7 days: Blog post: "How Signal Works: The Technology Behind Real-Time Ops Alerts"
  T+14 days: Customer case study email featuring beta customer (Crestwood Distribution)
  T+30 days: Review performance, decision on paid promotion based on organic traction

  ## Sales Enablement Requirements
  - Updated one-pager for Signal (1 page, customer-facing)
  - Demo script for Signal — standalone and integrated into full Anchor demo
  - Updated battle card: how Signal differentiates from generic monitoring tools
  - Email template for CS team to proactively reach out to customers who haven't enabled Signal

  ## Launch Goals
  - 30 days: 60% of Professional/Enterprise customers have enabled Signal; 200 new trials with Signal as a stated reason; press coverage in 2+ relevant publications
  - 60 days: Customer case study published; Signal mentioned in 25%+ of new deals' evaluation criteria
  - 90 days: Measure Signal's impact on churn reduction among Professional customers (hypothesis: customers who use Signal churn at lower rate)

  ## Open Questions / Risks
  1. Notification volume risk: if Signal sends too many alerts, customers may disable it. Need a clear tuning guide and recommended threshold defaults before launch.
  2. Slack integration approval: confirm Slack app approval process won't delay launch.
  3. CS team readiness: confirm CS team can field support questions about Signal configuration on April 15 — current training is scheduled for April 12.
tips:
  - "Share this brief with product, sales, and engineering leads for sign-off before any external materials are created. Alignment on the positioning statement specifically prevents inconsistency downstream."
  - "The positioning statement is the hardest and most valuable sentence in the brief. Don't shortcut it — a weak positioning statement produces a fragmented launch."
  - "The 'open questions' section is where launches typically die. Raise risks here explicitly and assign owners before they become surprises on launch day."
  - "Tier your launches honestly. Not every feature is a Tier 1 event — spending Tier 1 resources on Tier 3 features creates organizational fatigue and dilutes the impact of your real Tier 1 moments."
  - "After the launch, run a post-mortem at Day 30: what did we ship vs. plan, what worked, what didn't. The brief becomes the evaluation standard."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - competitive-positioning
  - persona-profile
  - press-release
tags:
  - product-launch
  - product-marketing
  - go-to-market
  - brief
---
