---
title: "Write a Series A or B fundraising narrative"
slug: fundraising-narrative
function: finance
role: investor-relations
description: "Generate a compelling fundraising narrative for a Series A or B that articulates the company's thesis, traction, market opportunity, and use of funds for investor conversations."
useCase: "Use this prompt to draft the narrative sections of a Series A or B pitch — the written story that accompanies the financial model and slide deck. The numbers tell investors what happened; the narrative tells them why the company wins. This prompt produces the strategic argument that great investors respond to."
prompt: |
  You are a founder or CFO developing the fundraising narrative for a Series A or B round.

  Context:
  - Company: {{company_name}}
  - Fundraise stage: {{stage}} (Series A or B, and round size)
  - Current revenue/ARR: {{current_revenue}}
  - Key traction metrics: {{traction_metrics}} (growth rate, NRR, customer count, logo quality)
  - Market opportunity: {{market_opportunity}} (TAM/SAM, market dynamics, why now)
  - Product differentiation: {{differentiation}} (what makes the product hard to replicate)
  - Business model: {{business_model}} (how the company makes money and why it scales)
  - Team: {{team}} (key roles and relevant backgrounds — keep brief)
  - Use of funds: {{use_of_funds}} (what the round will fund, what milestones it enables)
  - Competitive landscape: {{competitive_landscape}} (who else is in the market and how you're positioned)
  - Key risks investors will raise: {{investor_risks}} (what the hard questions are — better to address than avoid)
  - Target Series B metrics: {{series_b_targets}} (what ARR/metrics this round enables you to reach)

  Write a fundraising narrative with these sections:

  ## The Pitch in One Paragraph
  The company's story compressed into 150 words. If an investor reads only this, what do they need to know? Lead with the market problem and the company's unique position to solve it.

  ## The Problem (The Market Thesis)
  2–3 paragraphs on the problem being solved:
  - What is the status quo and why is it broken?
  - Who suffers from this problem and how much?
  - Why hasn't this been solved already — what has changed to make now the right time?

  ## The Solution and Why It Wins
  2–3 paragraphs:
  - What is the product and how does it solve the problem?
  - Why is this approach differentiated from what exists?
  - What creates durability or defensibility — data network effects, switching costs, platform lock-in?

  ## Traction: What the Numbers Say
  Present the most compelling metrics in narrative form:
  - Revenue trajectory and growth rate
  - Customer quality and expansion behavior (NRR, logo retention)
  - The metric that proves product-market fit most directly
  - Honest framing of where the business is in its development

  ## Market Opportunity
  Why this is a large and growing market — with specific numbers and a logical case for how the company captures a meaningful share.

  ## The Use of Funds and Series B Bridge
  - What specifically will the Series A fund?
  - What milestones will it enable?
  - What does this company look like at the beginning of a Series B process — and why is that a fundable company at a meaningfully higher valuation?

  ## The Ask
  Round size, structure (equity, preferred terms if relevant), and timeline.

  Tone: confident and substantive. The best fundraising narratives read like a conversation between equals — not a sales pitch, not a humble brag. The investor should feel like they're being let in on something real, not sold something.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{current_revenue}}"
  - "{{traction_metrics}}"
  - "{{market_opportunity}}"
  - "{{differentiation}}"
  - "{{business_model}}"
  - "{{team}}"
  - "{{use_of_funds}}"
  - "{{competitive_landscape}}"
  - "{{investor_risks}}"
  - "{{series_b_targets}}"
exampleInput: |
  company_name: Anchor Analytics
  stage: Series A, $12M
  current_revenue: $1.82M ARR (April 2024); growing at ~85% year-over-year
  traction_metrics: NRR 102%, logo retention 95%, 42 customers (mix of SMB and enterprise), 3 enterprise logos > $45K ARR, Signal product launched April 2024 with 31% adoption in 2 weeks
  market_opportunity: B2B analytics for mid-market SaaS companies ($15B TAM); dominated by enterprise players (Tableau, Looker) that are too expensive and complex for $5M–$100M ARR companies; market growing 18% annually as SaaS proliferates and data-driven operations become table stakes
  differentiation: Product-market focused analytics (not generic BI) built specifically for SaaS operations; Signal product uses AI to surface insights automatically rather than requiring BI expertise; implementation in <1 day vs. weeks for competitors
  business_model: SaaS subscription ($18K–$75K/year ACV); expansion revenue via Signal and additional seat licenses; NRR >100% target
  team: Marcus Chen (CEO, former Product at Segment); Priya Patel (CTO, ML background from Palantir); 28 employees
  use_of_funds: Sales team expansion (4 AEs), Signal platform scale, marketing for enterprise motion, 18 months runway to reach $4.5M ARR
  competitive_landscape: Chartio (acquired by Atlassian), Amplitude (public, enterprise-focused), Mixpanel (product analytics only), Looker (enterprise BI, expensive, complex), Mode (data team focused, requires SQL)
  investor_risks: Why won't Amplitude or Mixpanel move down-market? Is $15B TAM achievable or a VC-math TAM? Can you win enterprise without a longer sales cycle and professional services?
  series_b_targets: $4.5M ARR, 85+ customers, NRR 107%, enterprise segment at 50% of revenue
exampleOutput: |
  ## The Pitch in One Paragraph
  Anchor Analytics makes analytics work for the 50,000 SaaS companies that are too big to ignore their data and too small to build a data team. These companies are spending $2–5M per year on decisions driven by spreadsheets and gut instinct because every enterprise analytics product — Looker, Tableau, Amplitude — was built for companies with dedicated BI engineers. Anchor's platform connects in under a day, surfaces insights automatically via our Signal AI layer, and costs a tenth of enterprise alternatives. We're at $1.82M ARR, growing 85% year-over-year, with an NRR that shows customers are expanding their usage. We're raising a $12M Series A to add go-to-market capacity and extend Signal into a category-defining analytics platform for the mid-market.

  ## The Problem

  Every SaaS company is now a data company — even a $10M ARR business is generating millions of events per day across its product, sales, and customer success systems. The companies that can interpret this data make better decisions: faster product iteration, more efficient sales motions, earlier churn detection. The companies that can't are making their most important business decisions on instinct and quarterly reviews.

  The problem is that the analytics tools that work — Looker, Tableau, Amplitude — were designed for companies with data engineers, BI analysts, and six-figure implementation budgets. The median $20M ARR SaaS company has none of these. It has a VP of Sales managing pipeline in Salesforce, a VP of Product tracking feature adoption in a spreadsheet, and a CFO doing ARR analysis in Excel. Enterprise analytics products require you to build a data infrastructure before they're useful — and mid-market companies don't have the resources to do this.

  The timing is right because this problem has gotten worse, not better, as SaaS has proliferated. Five years ago, most mid-market SaaS companies could get by with basic reporting. Today, they're competing against best-in-class operators who use data as a competitive weapon. The "we'll deal with analytics later" strategy no longer works — and mid-market companies know it. What they don't have is a product built for them.

  ## The Solution and Why It Wins

  Anchor is analytics infrastructure for SaaS operations — connecting in under a day, surfacing insights automatically, and requiring no data team to maintain. The core product works because it's opinionated: instead of a blank-slate BI tool, Anchor understands the SaaS business model natively. It knows what ARR, churn, NRR, and CAC mean — and it surfaces the metrics that matter without requiring the customer to define them.

  Our Signal product, launched April 2024, takes this further. Signal uses machine learning to analyze changes in the underlying data and surface actionable insights automatically — the equivalent of a data analyst reviewing your metrics every week and flagging what changed and why. Signal adoption hit 31% of eligible customers within two weeks of launch. NPS among Signal users is 8 points higher than non-users.

  The competitive durability comes from the data flywheel: the more customers run their operations on Anchor, the more our models understand what "good" looks like for SaaS businesses at different stages. This creates a benchmarking capability — "how does your churn compare to companies like you?" — that a generic BI tool can't replicate and that becomes more powerful as the customer base grows. Switching costs deepen as customers build their operational workflows on Anchor's dashboards and as Signal becomes embedded in their weekly review cadence.

  ## Traction: What the Numbers Say

  Anchor closed April at $1.82M ARR, growing at approximately 85% year-over-year. Net Revenue Retention is 102%, which means the existing customer base grows without new sales — a proof point that customers are getting enough value to expand their usage. Logo retention is 95%.

  The 42 customers in the base include a mix of SMB ($18–30K ACV) and enterprise ($45–75K ACV). Three enterprise logos closed in the last two quarters — including Meridian Health, our first healthcare customer at $45K ARR. Enterprise deals take longer to close but retain at higher rates and expand faster. The Signal launch is the first product feature specifically designed to drive enterprise expansion revenue.

  To be direct: we've had quarters where we missed plan. Q1 2024 ARR came in 16.7% below budget, driven primarily by AE ramp timing and two enterprise deals that moved to Q2 with committed timelines. Both deals closed. We're sharing this because the investors we want to work with are the ones who can assess the difference between a structural problem and an execution timing issue — and because honest fundraising narratives build better long-term relationships than curated ones.

  ## Market Opportunity

  The market for SaaS-specific analytics is a segment of the broader $50B+ analytics and BI market, but the relevant segment — mid-market SaaS companies, $5M–$200M ARR — is approximately 50,000 companies globally. At an average contract value of $30K/year, this represents a $1.5B addressable market in recurring revenue. We believe the market grows to $2.5B+ as the mid-market SaaS segment itself grows and as analytics spend per company increases.

  The market is being vacated by the incumbents: Chartio was acquired by Atlassian and shut down; Looker moved up-market post-Google acquisition; Amplitude and Mixpanel have explicitly repositioned as enterprise products. The mid-market analytics segment has no category leader — yet. We intend to be it.

  ## Use of Funds and Series B Bridge

  The $12M Series A funds 18 months of operations and three primary bets:

  - **Sales team expansion ($3.5M):** Grow from 5 AEs to 9, including 2 enterprise-focused AEs. The pipeline exists — we're constrained by closing capacity, not leads.
  - **Signal platform scale ($4.5M):** Expand Signal from insights surfacing to recommendations and automated actions. The product roadmap positions Signal as the AI operations layer for SaaS companies.
  - **Marketing and brand ($2M):** Build the inbound engine to support enterprise sales. Currently 80% outbound — inverting this ratio to 50/50 is the efficiency unlock.
  - **Operations and G&A ($2M):** CFO hire, audit, legal infrastructure for Series B readiness.

  At the beginning of a Series B process (approximately Q1 2026), we project: $4.5M ARR, 85+ customers, NRR 107%, and Signal as a material (>25%) contributor to ARR. That is a company growing at 60–70% year-over-year with expanding unit economics and a category-defining product. It's fundable at a $30–45M pre-money valuation by any metrics-based model.

  ## The Ask

  We are raising $12M at a $24M pre-money valuation (2x ARR multiple, conservative relative to SaaS comps for companies growing 85%+). We are targeting a lead investor who brings a SaaS portfolio with enterprise go-to-market expertise and has relevant LP relationships in the enterprise software buying community. We're scheduling first meetings in June and expect to close in August. Board seats available for the lead investor; pro-rata rights for participating existing investors.
tips:
  - "Lead with the market thesis, not the company description. Investors who believe in the market problem will evaluate the company — investors who don't understand the problem will pass before looking at traction."
  - "Address the hard questions proactively. Every investor narrative has 3–4 'yeah but' objections. Raising them yourself and answering them credibly is more compelling than hoping investors don't ask."
  - "The 'Series B bridge' section is what closes Series A investors. They want to know not just what the company is today, but what it looks like when they want to raise a Series B — and whether it's a fundable company at that stage."
  - "Be specific about use of funds. 'We'll use the capital to grow' is not a use of funds. '$3.5M for 4 AEs over 18 months, targeting $1.2M in incremental ARR from those hires' is a use of funds."
  - "Fundraising narratives that acknowledge real challenges build more investor trust than ones that curate only the best data. Sophisticated investors will find the challenges anyway — acknowledging them first signals intellectual honesty."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - board-finance-update
  - investor-update-email
  - scenario-planning-framework
  - board-meeting-agenda
tags:
  - fundraising
  - investor-relations
  - series-a
  - pitch
  - founder
---
