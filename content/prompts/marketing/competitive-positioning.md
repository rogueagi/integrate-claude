---
title: "Write competitive positioning statements and differentiators"
slug: competitive-positioning
function: marketing
role: product-marketing
description: "Generate clear, honest competitive positioning statements and a differentiator framework for use in website copy, sales decks, and conversations."
useCase: "Use this prompt when defining or refreshing your competitive positioning — especially before a product launch, a rebrand, or when a new competitor enters the market. Good competitive positioning is honest about where you win and helps prospects self-select."
prompt: |
  You are a product marketing strategist. Develop a competitive positioning framework for the following product.

  Context:
  - Your product: {{your_product}}
  - Your target customer: {{target_customer}}
  - Your strongest differentiators: {{your_differentiators}}
  - Your biggest weaknesses (be honest): {{your_weaknesses}}
  - Competitor 1: {{competitor_1}} — their strengths and typical positioning
  - Competitor 2: {{competitor_2}} — their strengths and typical positioning
  - Competitor 3 (if applicable): {{competitor_3}}
  - The "do nothing" / status quo option your prospects also consider: {{status_quo}}

  Produce:

  ## 1. Positioning Statement
  For external use (website, decks). Fill in this template precisely:
  "For [specific customer], [product] is the [category] that [primary benefit] — unlike [alternative], which [weakness of alternative]."

  Write 2 variants: one that positions against a named competitor, one that positions against the status quo.

  ## 2. Differentiation Matrix
  A table comparing your product against 2–3 competitors on 6–8 dimensions that matter to your target customer. Be honest — mark where competitors are equal or better. Dishonest matrices destroy credibility with sophisticated buyers.

  ## 3. "We Win When" Framework
  4–6 specific scenarios where you reliably win deals. Each scenario: a 2-sentence description of the prospect situation and why your product is the right fit.

  ## 4. "We Lose When" Framework
  3–4 honest scenarios where competitors or the status quo win — and what that tells you about ideal customer profile fit.

  ## 5. Category Definition (optional)
  If you're trying to define or own a new category, write the one-paragraph category definition that educates the market while positioning your product as the natural leader.

  ## 6. Key Messages by Competitive Scenario
  For each of your 2 main competitors: 2–3 talking points sales reps can use in competitive deals.
variables:
  - "{{your_product}}"
  - "{{target_customer}}"
  - "{{your_differentiators}}"
  - "{{your_weaknesses}}"
  - "{{competitor_1}}"
  - "{{competitor_2}}"
  - "{{competitor_3}}"
  - "{{status_quo}}"
exampleInput: |
  your_product: Anchor Analytics — BI platform built for ops teams without data staff
  target_customer: operations directors at 100–500 person mid-market companies
  your_differentiators: no SQL required, ops-specific KPIs pre-configured, dedicated onboarding team, real-time anomaly detection included
  your_weaknesses: limited to ~50 pre-built integrations (less than Tableau), no self-serve free tier, mobile app is basic
  competitor_1: Tableau — powerful, visual, huge ecosystem; requires data team to configure and maintain; expensive at scale
  competitor_2: Looker — sophisticated, developer-first; almost entirely SQL-based; requires analytics engineering resources
  competitor_3: Google Looker Studio — free, basic, good for simple visualizations; lacks real-time monitoring and ops-specific functionality
  status_quo: manual spreadsheet reporting, weekly Excel files built by the ops coordinator or manager
exampleOutput: |
  ## 1. Positioning Statements

  **vs. Competitors:**
  "For operations directors at mid-market companies, Anchor Analytics is the business intelligence platform that delivers real-time operational visibility without requiring a data team — unlike Tableau and Looker, which were built for analysts and require ongoing engineering support to maintain."

  **vs. Status Quo:**
  "For operations leaders still running their weekly review from Excel files, Anchor Analytics is the business intelligence platform that replaces the manual reporting cycle with live, self-updating dashboards that your team can actually act on — without building or maintaining a single spreadsheet."

  ## 2. Differentiation Matrix
  | Dimension | Anchor | Tableau | Looker | Looker Studio | Spreadsheets |
  |---|---|---|---|---|---|
  | Requires SQL / data team | No | Yes | Yes | No (limited) | No |
  | Ops-specific KPIs pre-built | Yes | No | No | No | No |
  | Real-time anomaly alerts | Yes | No | Yes (add-on) | No | No |
  | Dedicated onboarding support | Yes | Paid | Yes | No | N/A |
  | Data integration depth | Good (50+) | Excellent | Excellent | Good | N/A |
  | Mobile experience | Basic | Good | Good | Good | N/A |
  | Total cost of ownership | Medium | High | High | Low | Low |

  ## 3. We Win When
  1. The ops team has strong business knowledge but no SQL skills — they know what metrics they need but can't extract them from a database without help.
  2. The prospect has tried Tableau or Looker and the implementation stalled because IT didn't have capacity to maintain it.
  3. The company is scaling and the ops manager's spreadsheet-based reporting can no longer keep up with the complexity or data volume.
  4. The buyer cares more about time-to-value than ecosystem breadth — they want working dashboards in days, not a 6-month implementation.
  5. Real-time alerts are a stated priority — they've been burned by finding out about operational problems too late.

  ## 4. We Lose When
  1. The company has a dedicated data team — they have the resources to implement Tableau or Looker properly and want the ecosystem depth.
  2. The buyer needs a free trial or self-serve evaluation — our lack of a free tier is a barrier when budget approval requires proof first.
  3. The integration they depend on is one of the 20% of tools we don't yet support — a missing connector kills deals we'd otherwise win.
  4. The buying decision is made by IT, not the ops team — IT buyers prefer tools with developer-first architecture.

  ## 5. Key Messages by Competitor

  **vs. Tableau:**
  - "Tableau is a great tool if you have the data team to run it. Most of our customers switched from Tableau because implementation took 6+ months and maintenance required ongoing engineering resources. We're built for teams that don't have that capacity."
  - "Tableau's breadth is real — if you need 200 integrations and a data scientist to build custom models, it's probably the right choice. If you need operational visibility in your existing stack within a month, Anchor is."

  **vs. Spreadsheets:**
  - "The spreadsheet isn't the problem — it's a symptom. The problem is that someone has to build it, maintain it, and update it manually every week. Anchor replaces the manual work with a live, self-updating view of the same data."
  - "We often hear 'our spreadsheets are working fine.' The real cost shows up when the person who built the spreadsheet leaves, or when you're making decisions on data that was accurate 3 days ago."
tips:
  - "The differentiation matrix must be honest. An 8/8 matrix where you win on every dimension will not be trusted by anyone who's seen your competitors. Include at least 2 dimensions where competitors are equal or better."
  - "The 'we lose when' section is the most strategically valuable — it defines the boundary of your ICP and tells sales reps which deals to disqualify early."
  - "Share this document with your top 3 AEs and ask them to mark which 'we win when' scenarios they actually see in deals. If 3 of your 6 don't appear in real deals, your competitive positioning is theoretical."
  - "Update after every major competitive win or loss — capture what actually happened, not what you predicted. Real deal data beats strategic guesswork."
  - "The positioning statement will be pressure-tested in your first sales conversation that features a competitive mention. Practice it out loud before it goes live."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - competitive-battle-card
  - product-launch-brief
  - persona-profile
tags:
  - positioning
  - competitive
  - product-marketing
  - messaging
---
