---
title: "Conduct a structured competitor analysis from research notes"
slug: competitor-analysis
function: product
role: product-management
description: "Transform competitor research notes into a structured competitive analysis with positioning maps, capability gaps, and strategic implications for your product."
useCase: "Use this prompt when you've gathered raw competitor research — feature lists, pricing pages, sales call intel, review site data — and need to synthesize it into actionable strategic insights. Good competitive analysis informs positioning, roadmap, and sales enablement simultaneously."
prompt: |
  You are a senior product strategist with deep experience in competitive intelligence. Synthesize the competitor research below into a structured competitive analysis.

  **Our product:** {{our_product}}
  **Our target market:** {{target_market}}
  **Our current positioning:** {{our_positioning}}
  **Competitors to analyze:** {{competitors}}
  **Research notes and data gathered:** {{research_notes}}
  **Key questions this analysis should answer:** {{key_questions}}

  Write a competitive analysis with these sections:

  ## 1. Competitive Landscape Overview
  A high-level map of the competitive space:
  - How many real competitors are there, and how do they cluster?
  - What are the 2–3 axes on which competitors most meaningfully differ?
  - Where do we sit in this landscape today?

  ## 2. Competitor Profiles
  For each competitor, provide a structured profile:

  **[Competitor Name]**
  - **Company context:** Funding, size, growth stage, target customer
  - **Core product:** What it does, how it works, key differentiators
  - **Pricing:** Model and range (if known)
  - **Target customer:** Who they're going after (be specific — role, company size, industry)
  - **Key strengths:** Where they genuinely win
  - **Key weaknesses:** Where they consistently lose or fall short
  - **Recent moves:** New features, pricing changes, funding, partnerships, hiring signals
  - **How they position against us:** What their sales team says about us (from win/loss data or review sites)
  - **Win/loss signals:** Review site themes, G2/Capterra data, sales intelligence

  ## 3. Feature Comparison Matrix
  A structured comparison of capabilities across all competitors:
  | Capability | Our Product | Competitor A | Competitor B | Competitor C |

  Use: ✓ (has it) / ~ (partial/limited) / ✗ (doesn't have it) / ★ (market-leading)

  Group capabilities into meaningful categories (core functionality, integrations, analytics, support, etc.)

  ## 4. Positioning Map
  Describe (in text) a 2x2 positioning map using the two most strategically important dimensions. Where does each competitor sit, and where are the white spaces?

  ## 5. Competitive Strengths and Vulnerabilities
  **Where we win consistently:** Our genuine advantages and the reasons behind them.
  **Where we lose consistently:** Honest assessment of where competitors beat us and why.
  **Emerging threats:** Competitors who are closing gaps fast.
  **Defensible moats:** What we have that would take competitors significant time and investment to replicate.

  ## 6. Strategic Implications
  Based on the analysis, what are the 3–5 most important strategic implications for:
  - **Product roadmap:** What gaps must we close? What moats should we widen?
  - **Positioning:** How should we talk about ourselves vs. competitors?
  - **Sales enablement:** What do sales reps need to handle the top competitive objections?
  - **Target segments:** Are there segments we should own vs. cede?

  ## 7. Battlecards Summary
  For each major competitor, a 1-paragraph battlecard: when we see this competitor in a deal, what's the winning message and what questions should we ask to disqualify them?

  ## 8. Monitoring Plan
  What to watch, where to watch it, and how often to update this analysis.
variables:
  - "{{our_product}}"
  - "{{target_market}}"
  - "{{our_positioning}}"
  - "{{competitors}}"
  - "{{research_notes}}"
  - "{{key_questions}}"
exampleInput: |
  our_product: Beacon — employee engagement platform for mid-market HR teams
  target_market: HR Directors at companies with 200–2000 employees, primarily US
  our_positioning: The engagement platform that turns feedback into visible action
  competitors: Culture Amp, Lattice, Glint (SAP), Leapsome, Qualtrics EmployeeXM
  research_notes: |
    Culture Amp: 6,000 customers, enterprise-focused, very strong analytics and benchmarking (25M employee data points). Wins on data depth. Loses on price (expensive) and complexity (needs dedicated admin). G2 complaints: "too complex for small HR teams." Pricing: $5-8/employee/year. Recent: added AI summaries in Q3.
    Lattice: Started as performance management, added engagement. Confuses buyers who want just engagement. Wins on bundled platform. Strong in 500-2000 range. Loses when buyer wants specialist. Recent: IPO delayed.
    Glint (SAP): Enterprise only, $5K+ minimum. SAP integration is a differentiator for SAP shops. Wins on enterprise. Loses badly for companies <1,000 employees. Not competing with us directly.
    Leapsome: European origin, strong in Germany/UK, less known in US. Good performance + engagement combo. Cheaper. Wins on price. Loses on analytics depth and US references.
    Qualtrics: Very expensive ($15+/employee/year), research-grade. HR teams find it overwhelming. Competes at top of enterprise.
  key_questions: Are we winning or losing against Culture Amp? Where is our analytics gap hurting us most? Is Lattice a threat in our core segment?
exampleOutput: |
  ## 1. Competitive Landscape Overview
  The employee engagement market has two meaningful clusters: (1) enterprise platforms (Culture Amp, Glint, Qualtrics) with deep analytics and high price points, and (2) integrated performance + engagement suites (Lattice, Leapsome) that trade breadth for depth. Beacon sits between these clusters — more analytics-capable than pure-play simple tools, more accessible than enterprise platforms.

  The two most important competitive dimensions are **analytics depth** (basic scores vs. sophisticated insights) and **complexity/accessibility** (requires dedicated admin vs. works for a 2-person HR team). On these dimensions, Beacon's white space is: strong analytics that's still accessible to a small HR team.

  ## 2. Competitor Profiles (Sample)

  **Culture Amp**
  - Company: 1,200+ employees, Series F, $200M+ raised. Global, enterprise-focused.
  - Core product: Best-in-class engagement surveys + analytics benchmarked against 25M employee data points. Deep reporting. Science-backed.
  - Pricing: ~$5–8/employee/year; minimum contracts often $30K+
  - Target: HR teams at 500+ employee companies with budget and a dedicated People Analytics function
  - Strengths: Data depth, benchmarking, brand credibility with HR leaders
  - Weaknesses: Complex to administer, expensive, overkill for SMBs, requires HR expertise to get value
  - Recent: Added AI summaries in Q3 — directly competing on our planned roadmap
  - Against us: "Beacon is simpler but you'll outgrow it in 12 months"
  - Win/loss: We lose Culture Amp deals when buyers prioritize benchmarking depth. We win when they have small HR teams and tight budgets.

  ## 5. Competitive Strengths and Vulnerabilities

  **Where we win:** Small HR teams (1–3 people) who want enterprise-grade insights without enterprise complexity. Our NPS is higher than Culture Amp's for the SMB segment. CSMs cite "ease of use" in 70% of expansion conversations.

  **Where we lose:** Analytics-sophisticated buyers who want industry benchmarks and demographic cut views. This is the single biggest gap — and Culture Amp's recent AI move means we're about to lose on AI too unless we ship faster.

  **Emerging threats:** Culture Amp's AI summaries (launched Q3) are a direct threat to our differentiator if we don't ship before they refine it. Leapsome is growing US sales headcount — worth watching in 12 months.

  ## 7. Battlecards

  **vs. Culture Amp:** "Culture Amp is powerful — if you have a People Analytics team to operate it. For a 2-person HR team, 80% of its capability goes unused. Beacon gives you the insights you need without needing a data analyst to extract them. Ask them: who on your team will own the platform day-to-day?" Disqualify Culture Amp when: small HR team, tight budget, need for speed to value.

  **vs. Lattice:** "Lattice started as a performance tool and bolted engagement on. If engagement is your core need, you're buying a platform designed for something else. Ask them: what % of their roadmap investment goes to engagement specifically?" Disqualify Lattice when: buyer's primary need is engagement, not performance management.
tips:
  - "The battlecards section is what your sales team will actually use. Make them concrete and conversation-ready — don't make reps synthesize from a 20-page analysis."
  - "G2, Capterra, and Glassdoor are often better sources of honest competitive intelligence than the vendors' own marketing — negative reviews reveal real weaknesses."
  - "Update this analysis every quarter. The most dangerous competitive landscape is the one you think you understand but is actually 6 months out of date."
  - "Include 'recent moves' for each competitor — a competitor's recent hires, funding, or product launches are the leading indicators of where they're heading."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - product-roadmap-narrative
  - product-hypothesis
  - stakeholder-alignment-doc
  - swot-analysis
tags:
  - competitive-analysis
  - product-strategy
  - product-management
  - market-intelligence
  - positioning
---
