---
title: "Turn a customer win into a shareable case study"
slug: case-study-template
function: sales
role: sales-enablement
description: "Transform raw customer win details into a polished, sales-ready case study with before/after metrics and a compelling narrative."
useCase: "Use this prompt when you've closed a strong customer win and want to document it as a reusable case study. A well-written case study is one of the highest-leverage sales assets you can create — this prompt turns raw notes into a publication-ready story."
prompt: |
  You are a B2B content writer and sales enablement expert. Transform raw customer win information into a compelling, sales-ready case study.

  Raw customer win details:
  - Customer company: {{customer_company}}
  - Customer industry: {{industry}}
  - Customer size: {{company_size}} employees
  - Customer contact/champion name and title: {{champion_name}}, {{champion_title}}
  - The problem they had before your product: {{before_problem}}
  - What they tried before (if anything): {{previous_attempts}}
  - Your product/solution they implemented: {{your_solution}}
  - How long implementation took: {{implementation_time}}
  - Key metrics before implementation: {{before_metrics}}
  - Key metrics after implementation: {{after_metrics}}
  - A direct quote from the customer (if available): {{customer_quote}}
  - Any unexpected benefits they mentioned: {{unexpected_benefits}}

  Write a case study with these sections:

  ## Headline
  One line that leads with the outcome achieved — not the product name. Format: "[Customer] [achieved outcome] in [timeframe]."

  ## The Challenge (100–150 words)
  Tell the customer's story before your product existed. Make it feel real — describe their world, the friction they lived with, and why previous attempts failed. Write in third person, past tense.

  ## The Solution (75–100 words)
  Describe what they implemented and why they chose it — from the customer's perspective, not a product description. Keep it brief; the results section carries the weight.

  ## The Results (100–150 words)
  Lead with the biggest number. Walk through each key metric improvement. Include at least one qualitative outcome (team morale, strategic impact, customer satisfaction) alongside the hard numbers.

  ## In Their Words
  Format the customer quote cleanly. If no quote was provided, write a placeholder in brackets.

  ## Why It Worked (50–75 words)
  A brief closing insight about what made this implementation successful — useful for prospects evaluating whether they'd get similar results.

  Output as clean, publication-ready prose. No bullet points except in the results section if the metrics warrant it.
variables:
  - "{{customer_company}}"
  - "{{industry}}"
  - "{{company_size}}"
  - "{{champion_name}}"
  - "{{champion_title}}"
  - "{{before_problem}}"
  - "{{previous_attempts}}"
  - "{{your_solution}}"
  - "{{implementation_time}}"
  - "{{before_metrics}}"
  - "{{after_metrics}}"
  - "{{customer_quote}}"
  - "{{unexpected_benefits}}"
exampleInput: |
  customer_company: Beacon Property Management
  industry: real estate / property management
  company_size: 120
  champion_name: Dara Hutchins
  champion_title: Director of Operations
  before_problem: maintenance request tracking was done in spreadsheets and email; requests fell through the cracks, response times averaged 6 days, and residents were filing complaints
  previous_attempts: tried a generic ticketing tool that wasn't built for property management; abandoned it after 3 months
  your_solution: WorkOrderPro maintenance management platform
  implementation_time: 3 weeks
  before_metrics: 6-day average response time, 34% resident satisfaction score, 2 FTEs dedicated to manual coordination
  after_metrics: 1.2-day average response time, 87% resident satisfaction score, same headcount handling 40% more units
  customer_quote: "We went from residents threatening to break leases to actually renewing them because they felt taken care of. That's the number I care about."
  unexpected_benefits: maintenance vendors started showing up faster because they got clearer job details upfront
exampleOutput: |
  ## Beacon Property Management Went from 6-Day Response Times to 1.2 Days — Without Adding Headcount

  ### The Challenge

  When Dara Hutchins joined Beacon Property Management as Director of Operations, she inherited a maintenance coordination process that ran almost entirely on spreadsheets and email threads. Requests arrived from multiple channels, got manually entered by coordinators, and were tracked in a shared document that nobody fully trusted. The result: a six-day average response time that residents noticed, a 34% satisfaction score that reflected it, and two full-time employees spending most of their day chasing status updates rather than resolving issues.

  Beacon had tried a generic help desk tool the previous year, but it wasn't built for property management workflows — the vendor categorization, unit-level tracking, and vendor dispatch features simply weren't there. The team abandoned it after three months and went back to email.

  ### The Solution

  Beacon implemented WorkOrderPro across all 14 of its managed properties in three weeks. For Hutchins, the deciding factor wasn't the feature list — it was that the platform was built specifically for property operations, with workflows that matched how her team already worked rather than requiring them to adapt to a new system.

  ### The Results

  Within 60 days of go-live, Beacon's maintenance metrics had shifted fundamentally:

  - Average response time dropped from 6 days to 1.2 days (80% improvement)
  - Resident satisfaction jumped from 34% to 87%
  - The same two-person coordination team now handles 40% more units without additional hires
  - Vendor response quality improved as a side effect — clearer job details upfront meant fewer callbacks and rework cycles

  ### In Their Words

  "We went from residents threatening to break leases to actually renewing them because they felt taken care of. That's the number I care about."
  — Dara Hutchins, Director of Operations, Beacon Property Management

  ### Why It Worked

  Beacon's success came from a team that was motivated to change and a platform that didn't require them to change everything at once. The three-week implementation was possible because WorkOrderPro's property management-specific defaults eliminated most of the configuration work that derails generic tool deployments.
tips:
  - "Always lead the headline with an outcome number, not a product name. 'How Beacon Cut Maintenance Response Time by 80%' outperforms 'Beacon Uses WorkOrderPro' every time."
  - "If the customer won't provide a quote, ask them to approve a placeholder you've drafted based on what they said in a call. Most people will edit and approve rather than write from scratch."
  - "After running this prompt, ask Claude to write a 3-bullet 'quick wins' version for use in sales decks and one-pagers — same story, compressed to fit a slide."
  - "Get the customer's approval on the case study before publishing — route it through your champion and budget at least one revision cycle."
  - "The 'unexpected benefits' field often contains the most compelling story. Vendors showing up faster because of better job details is a more memorable proof point than the satisfaction score."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - product-pitch-script
  - competitive-battle-card
  - qbr-deck-outline
tags:
  - case-study
  - customer-story
  - sales-enablement
  - content
---
