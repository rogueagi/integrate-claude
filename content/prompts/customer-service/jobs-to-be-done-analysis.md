---
title: "Identify jobs-to-be-done from customer interview notes"
slug: jobs-to-be-done-analysis
function: customer-service
role: cx-research
description: "Analyze customer interview notes to identify the jobs-to-be-done (JTBD) customers are hiring your product to do — and the functional, emotional, and social dimensions of each job."
useCase: "Use this prompt after customer interviews to surface the JTBD framework from your research. JTBD analysis produces better product decisions, more resonant marketing, and clearer positioning than demographic segmentation alone."
prompt: |
  You are a product strategist trained in the Jobs to Be Done framework developed by Clayton Christensen and Bob Moesta. Analyze the following customer interview notes and identify the core jobs customers are hiring this product to do.

  Context:
  - Product/service: {{product_name}}
  - Customer segment interviewed: {{customer_segment}}
  - Interview notes or transcripts: {{interview_content}}
  - Current positioning (how you describe the product): {{current_positioning}}

  Analyze the notes and produce:

  ## 1. Jobs Identified (3–5 distinct jobs)
  For each job:

  **Job Name:** (a verb phrase describing what the customer is trying to accomplish — not a product feature)

  **Job Statement:** "When [situation], I want to [motivation], so I can [desired outcome]."

  **Functional dimension:** The practical, task-oriented aspect of the job (what they're literally trying to do)

  **Emotional dimension:** How the customer wants to feel while doing the job or after completing it (e.g., confident, in control, not embarrassed, not stressed)

  **Social dimension:** How completing the job affects how others perceive them or how they feel in their professional relationships (e.g., "I want my CEO to see me as data-driven," "I don't want to look unprepared in the meeting")

  **Evidence from interviews:** 1–2 quotes or observations that support this job being real and important

  **Competing alternatives:** What customers do now to get this job done (before your product, or instead of it)

  ## 2. The Primary Job
  Which of the identified jobs is most central to why customers buy this product? Why?

  ## 3. Gap Between Current Positioning and JTBD Reality
  Where does your current positioning miss or underserve the actual jobs customers are hiring you to do? Be specific.

  ## 4. Positioning and Messaging Implications
  2–3 specific changes to messaging, marketing, or product positioning that would better align with the jobs identified.
variables:
  - "{{product_name}}"
  - "{{customer_segment}}"
  - "{{interview_content}}"
  - "{{current_positioning}}"
exampleInput: |
  product_name: Anchor Analytics
  customer_segment: operations directors at mid-market companies
  interview_content: |
    "I need to know what's happening before someone comes to tell me it's a problem."
    "Every Monday I spend 2 hours pulling data from 3 places and putting together a summary. By the time I send it, the data is already out of date."
    "When the COO asks me a question I can't answer, it's embarrassing. I want to walk into that meeting knowing I have the numbers."
    "I don't need to be a data scientist. I just need to see what's going on."
    "My team loses trust in me if I'm the last to know about a problem."
    "I want to feel in control of the operation, not chasing it."
    "The goal isn't better data. The goal is better Monday meetings."
  current_positioning: "Business intelligence platform for operations teams — connect your data, monitor your KPIs, make better decisions."
exampleOutput: |
  ## 1. Jobs Identified

  **Job 1: Know About Problems Before Others Do**
  Job statement: "When I'm responsible for operational performance, I want to be alerted to deviations before customers or leadership notice them, so I can address problems proactively rather than reactively."
  Functional: Monitor metrics continuously without manual checking
  Emotional: Feel in control, feel competent, avoid the anxiety of being caught off guard
  Social: Maintain credibility with leadership; avoid the embarrassment of being the last to know
  Evidence: "I need to know what's happening before someone comes to tell me it's a problem." / "My team loses trust in me if I'm the last to know about a problem."
  Competing alternatives: Manual checks, alerts from team members, customer complaints

  **Job 2: Walk Into Meetings With Confidence**
  Job statement: "When I have a meeting with the COO or executive team, I want to have accurate, current data ready to answer any question, so I can demonstrate that I have my operation under control."
  Functional: Prepare for executive meetings with live data, not stale spreadsheets
  Emotional: Feel prepared and confident; avoid embarrassment
  Social: Be perceived as data-driven and on top of the business by senior leadership
  Evidence: "When the COO asks me a question I can't answer, it's embarrassing." / "The goal isn't better data. The goal is better Monday meetings."
  Competing alternatives: Manually assembled PowerPoints, requesting data from analysts before meetings

  **Job 3: Reclaim Time from Manual Reporting**
  Job statement: "When I'm spending hours every week pulling and formatting data, I want to automate that process, so I can focus on the work that actually requires my judgment."
  Functional: Automate data collection, formatting, and report distribution
  Emotional: Feel less burdened; feel like the job is manageable
  Social: Not be seen as a report-builder; be seen as a strategic contributor
  Evidence: "Every Monday I spend 2 hours pulling data from 3 places." / "By the time I send it, the data is already out of date."
  Competing alternatives: Spreadsheets, junior staff manual reporting

  ## 2. Primary Job
  Job 1 (Know About Problems Before Others Do) is the primary job. It carries the highest emotional and social charge — the fear of not knowing is more visceral than the frustration of manual work. This is the job that triggers evaluation, drives the decision to buy, and determines long-term retention.

  ## 3. Gap Between Positioning and JTBD Reality
  Current positioning ("connect your data, monitor your KPIs, make better decisions") describes the functional mechanism of the product, not the job it's hired to do. The gap:
  - "Make better decisions" doesn't capture the emotional driver: the fear of being caught off-guard or embarrassed
  - "Monitor your KPIs" doesn't capture the social driver: being perceived as in control by leadership
  - Nothing in the current positioning speaks to the Monday meeting — which is the single most concrete moment customers describe

  ## 4. Messaging Implications
  1. Lead with the social/emotional job: "Know about problems before your customers do" addresses Job 1's emotional core more directly than "monitor your KPIs."
  2. Name the Monday meeting: "Built for the Monday ops review" or "Dashboards for Monday, not for data scientists" speaks to the single most concrete use case customers described.
  3. Address the embarrassment fear: Marketing language that acknowledges "no more walking into a meeting empty-handed" resonates with the emotional dimension of Job 2.
tips:
  - "JTBD is most powerful when it surfaces jobs you weren't expecting. If your analysis only confirms what you already believed, you probably didn't go deep enough in the interviews."
  - "The emotional and social dimensions are where differentiation lives — most products do the functional job adequately. The product that best addresses the emotional job wins."
  - "Share this analysis with your marketing team and ask them to rewrite the homepage hero copy through a JTBD lens. Compare the two versions — the difference is usually striking."
  - "JTBD analysis ages — run it again after each major product change or customer segment expansion. Jobs evolve as products and markets mature."
  - "The best test of a JTBD analysis: show it to 3 customers from the segment and ask 'does this sound like you?' If 2 of 3 say yes immediately, the job is real."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - interview-synthesis
  - customer-interview-guide
  - persona-profile
tags:
  - jtbd
  - jobs-to-be-done
  - customer-research
  - product-strategy
  - cx
---
