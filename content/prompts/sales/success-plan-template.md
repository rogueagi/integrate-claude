---
title: "Write a 90-day customer success plan"
slug: success-plan-template
function: sales
role: customer-success
description: "Generate a structured 90-day success plan for a new customer that defines goals, milestones, owners, and success metrics."
useCase: "Use this prompt during customer onboarding to create a formal success plan that aligns your team and the customer on what success looks like in the first 90 days. A signed success plan dramatically reduces churn in months 4–12."
prompt: |
  You are a senior customer success manager building a 90-day success plan for a newly onboarded customer. This document will be co-owned by the CSM and the customer — it's not an internal document, it's a shared commitment.

  Customer details:
  - Customer company: {{customer_company}}
  - Key customer contacts: {{customer_contacts}} (name, title, and role — e.g., day-to-day admin, executive sponsor)
  - CSM name: {{csm_name}}
  - Product/service: {{product}}
  - Customer's stated business goals: {{business_goals}}
  - Success metrics they care about: {{success_metrics}} (what they'll use to evaluate whether this was worth the investment)
  - Known risks or concerns coming in: {{known_risks}}
  - Current baseline (before your product): {{baseline}}
  - Contract start date: {{start_date}}

  Build a 90-day success plan with these sections:

  ## Partnership Overview
  2–3 sentences: who we are, what we're trying to achieve together, and the spirit of this plan.

  ## Shared Goals (30/60/90 Day Milestones)
  For each milestone period, define:
  - The primary goal (one clear statement)
  - 2–3 specific activities or deliverables to achieve it
  - The success measure (how we'll know we hit it)
  - Who is responsible (customer team or CSM/vendor team)

  ## Key Contacts and Roles
  A simple table: name, title, role in the partnership, preferred contact method.

  ## Success Metrics Baseline
  A table showing the starting point for each key metric — so progress is measurable.

  ## Known Risks and Mitigation Plan
  For each known risk: the risk, likelihood, and what we'll do if it materializes.

  ## Regular Cadence
  Proposed meeting schedule for the 90 days: weekly check-ins, monthly reviews, etc.

  ## What "Day 90" Looks Like
  A clear, specific description of what success looks like at the end of 90 days. Concrete enough that both sides can agree on whether it was achieved.
variables:
  - "{{customer_company}}"
  - "{{customer_contacts}}"
  - "{{csm_name}}"
  - "{{product}}"
  - "{{business_goals}}"
  - "{{success_metrics}}"
  - "{{known_risks}}"
  - "{{baseline}}"
  - "{{start_date}}"
exampleInput: |
  customer_company: Vertex Financial Services
  customer_contacts: Marcus Lim (Operations Manager, day-to-day), Sandra Okafor (CFO, executive sponsor)
  csm_name: Alicia Chen
  product: automated compliance reporting platform
  business_goals: reduce time spent on monthly compliance reports from 40 hours to under 10 hours; eliminate manual reconciliation errors that caused 2 audit findings last year
  success_metrics: hours per monthly compliance cycle, number of manual errors caught vs. introduced, time to report delivery (currently D+5 after month end, goal D+2)
  known_risks: Marcus's team is understaffed during onboarding; their legacy system has non-standard data exports that may require custom mapping
  baseline: 40 hours/month on compliance, 2 audit findings from manual errors last year, reports delivered D+5
  start_date: April 1, 2024
exampleOutput: |
  ## Partnership Overview
  This 90-day plan is the shared roadmap for Vertex Financial Services and Alicia Chen (CSM) to make automated compliance reporting a sustainable, measurable improvement for the Vertex operations team. The goal isn't just implementation — it's getting Marcus's team to a point where the first live reporting cycle is faster, cleaner, and less stressful than anything they've run before.

  ## Shared Goals

  **Days 1–30: Foundation**
  - Goal: Complete platform configuration and data integration with legacy system
  - Activities: (1) Map legacy data exports to platform schema, (2) Configure report templates for Vertex's 4 compliance frameworks, (3) Run first parallel test cycle
  - Success measure: Platform configured and producing test reports that match manual output
  - Primary owner: Alicia Chen (CSM) + Marcus Lim (Ops)

  **Days 31–60: First Live Cycle**
  - Goal: Complete first live compliance reporting cycle using the platform
  - Activities: (1) Run May reporting cycle live, (2) Document any manual adjustments needed and eliminate them, (3) First 30-day review call with Sandra Okafor
  - Success measure: May reports delivered by D+3 (vs. current D+5); cycle takes under 20 hours (vs. current 40)
  - Primary owner: Marcus Lim (Ops), supported by Alicia Chen

  **Days 61–90: Optimization and Independence**
  - Goal: Marcus's team runs the June cycle independently with minimal CSM involvement
  - Activities: (1) Marcus's team runs June cycle solo, (2) Post-cycle debrief to capture lessons, (3) 90-day review with Sandra and Marcus
  - Success measure: June cycle completed in under 10 hours; team requires no assistance from CSM; zero manual errors introduced
  - Primary owner: Marcus Lim (Ops)

  ## Key Contacts and Roles
  | Name | Title | Role | Contact |
  |---|---|---|---|
  | Marcus Lim | Operations Manager | Day-to-day owner, implementation lead | Email + Slack |
  | Sandra Okafor | CFO | Executive sponsor, 30/90-day reviews | Email |
  | Alicia Chen | CSM (Vendor) | Primary support, implementation guide | Email + Slack |

  ## Success Metrics Baseline
  | Metric | Current (Baseline) | 90-Day Target |
  |---|---|---|
  | Hours per compliance cycle | 40 hours | Under 10 hours |
  | Report delivery timing | D+5 after month end | D+2 |
  | Manual errors per cycle | 2 per year (audit findings) | 0 |

  ## Known Risks and Mitigation Plan
  1. **Marcus's team is understaffed during onboarding.** Risk: configuration tasks get deprioritized. Mitigation: Alicia's team will handle initial configuration, reducing Marcus's time commitment to review and approval only.
  2. **Legacy system has non-standard data exports.** Risk: mapping takes longer than planned, delaying first live cycle. Mitigation: Alicia will complete data mapping assessment by Day 5 — if custom work is required, we'll escalate to engineering immediately and adjust the Day 30 milestone.

  ## Regular Cadence
  - Weekly: 30-minute check-in (Alicia + Marcus) — Tuesdays at 2pm
  - Day 30: Monthly review (Alicia + Marcus + Sandra) — 45 minutes
  - Day 90: 90-day review (Alicia + Marcus + Sandra) — 60 minutes

  ## What "Day 90" Looks Like
  On Day 90, Marcus's team has completed two live compliance cycles using the platform. The June cycle took under 10 hours total. Reports were delivered by D+2. No manual errors were introduced. Marcus can describe the process to a new hire without CSM support. Sandra has seen data from two cycles showing measurable time savings. Both teams consider the implementation a success.
tips:
  - "Present this plan in your first week-2 call and ask the customer to co-sign it — not legally, but conceptually. 'Does this match your expectation of success?' turns it from a vendor document into a shared commitment."
  - "The 'Day 90 looks like' section is the most important part. If you can't write it specifically, you don't have clarity on what success means — and neither does the customer."
  - "Revisit this plan at each monthly review. Mark what's been achieved, flag what's at risk. A static success plan is just a onboarding document; a living one is a retention tool."
  - "If known risks materialize, address them in the review cadence before they become surprises. The plan gives you a natural framework for hard conversations."
  - "Use this plan as the input for your QBR deck at the end of Q1 — it tells the story of what you set out to do and what you achieved."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - qbr-deck-outline
  - churn-risk-email
  - expansion-opportunity-email
tags:
  - customer-success
  - onboarding
  - success-plan
  - retention
---
