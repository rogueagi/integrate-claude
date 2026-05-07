---
title: "Write the finance section of a board deck narrative"
slug: board-finance-update
function: finance
role: fpa
description: "Generate the written narrative for the finance section of a board deck, connecting financial performance to strategic context and forward outlook."
useCase: "Use this prompt to draft the finance narrative that accompanies your board deck's financial slides. Board members read the narrative to understand the story behind the numbers — this prompt ensures the narrative is strategic, honest, and action-oriented rather than a recitation of charts."
prompt: |
  You are a VP of Finance or CFO preparing the narrative for the finance section of a board of directors meeting.

  Context:
  - Company: {{company_name}}
  - Board meeting date: {{meeting_date}}
  - Period covered: {{period}}
  - Key financial metrics: {{key_metrics}} (ARR, revenue, gross margin, burn, cash, runway)
  - Performance vs. budget and prior period: {{performance_vs_plan}}
  - Key business events this period: {{business_events}}
  - Year-to-date performance: {{ytd_performance}}
  - Forward guidance or revised outlook: {{forward_outlook}}
  - Strategic financial decisions requiring board input: {{board_decisions}}

  Write a finance narrative with these sections:

  ## Period Performance Summary (1 paragraph)
  The essential financial story of the period — written for a board member who has already seen the charts and wants the synthesis. Lead with the most important fact, not the most positive one.

  ## Revenue and Growth (2–3 paragraphs)
  - ARR or revenue performance vs. plan and prior period
  - The drivers of growth or shortfall — specific and attributable
  - An honest assessment of whether the performance trajectory is improving, stable, or concerning

  ## Unit Economics and Efficiency (1–2 paragraphs)
  - Gross margin trend
  - Key efficiency metrics (CAC payback, NRR, LTV/CAC if relevant)
  - Whether the business is becoming more or less efficient as it scales

  ## Cash and Runway (1 paragraph)
  - Current cash position and burn rate
  - Runway at current burn
  - Any changes to the fundraising timeline or capital plan

  ## Risks and Uncertainties (bullet list)
  3–5 specific, honest financial risks the board should be aware of — with a brief note on how each is being managed.

  ## Board Discussion Items
  2–3 specific questions or decisions where board input is sought. Not rhetorical — actual decisions or guidance the management team needs.

  Tone: candid, strategic, and forward-looking. Board members can handle complexity and honesty — avoid softening language that obscures important information.
variables:
  - "{{company_name}}"
  - "{{meeting_date}}"
  - "{{period}}"
  - "{{key_metrics}}"
  - "{{performance_vs_plan}}"
  - "{{business_events}}"
  - "{{ytd_performance}}"
  - "{{forward_outlook}}"
  - "{{board_decisions}}"
exampleInput: |
  company_name: Anchor Analytics
  meeting_date: April 25, 2024
  period: Q1 2024
  key_metrics: ARR $1.75M, gross margin 74%, monthly burn $410K, cash $4.2M, runway 10.2 months
  performance_vs_plan: ARR 16.7% below Q1 budget; EBITDA $380K worse than budget YTD; new ARR 31% below plan
  business_events: Signal launched April 15; 3 new AEs hired in February; 2 enterprise deals slipped to Q2
  ytd_performance: Q1 ARR miss driven by AE ramp lag and enterprise deal slippage; cash lower than planned
  forward_outlook: Signal launch is positive early indicator; Q2 pipeline has confirmed enterprise closes; AE ramp on track
  board_decisions: whether to begin Series A conversations now vs. waiting for Q2 results; whether to accelerate or hold headcount adds
exampleOutput: |
  ## Period Performance Summary
  Anchor closed Q1 at $1.75M ARR, $350K (16.7%) below our $2.1M plan. The miss is concentrated in new ARR, where we landed 31% below budget due to two factors: three new AEs hired in February who remain in ramp, and two enterprise deals that moved to confirmed Q2 commitments. Gross margin of 74% was in line with plan; expense management was solid. The post-quarter launch of Signal on April 15 is an important forward-looking development and will be discussed in the product section.

  ## Revenue and Growth
  Q1 new ARR of $290K ran $130K below the $420K budget. Two identifiable causes: AE ramp timing (three new hires contributed $40K collectively vs. $120K budgeted, reflecting standard 90-day ramp curves) and two enterprise deals that slipped — both remain in the pipeline with committed Q2 close dates. Expansion ARR of $165K was $15K below budget; churn of $95K ran $15K above budget, representing three accounts, all of which have been post-mortemed.

  The trajectory question: the AE ramp miss is expected to correct in Q2–Q3 as reps reach productivity. The enterprise close rate performance is the more critical variable — if Q1's 45% close rate (vs. 65% plan) persists in Q2, the full-year ARR target will require revision. The Q2 pipeline is stronger than Q1 was at this point; we are tracking it weekly and will provide an update at the May board call.

  ## Unit Economics and Efficiency
  Gross margin held at 74% against a 76% target — the 2-point gap reflects Signal launch engineering costs and slightly elevated infrastructure costs tied to increased trial volume. We expect gross margin to recover to 75–76% in Q2 as launch costs normalize.

  CAC for Q1 was $28,000 per new customer, above our $20,000 target — reflecting the full cost of three new AEs in ramp against low new customer volume. CAC payback on a 12-month basis is approximately 18 months at current ARR per customer. This is the metric we are most focused on improving in H1 through AE productivity improvement.

  ## Cash and Runway
  Cash ended Q1 at $4.2M against a $4.8M plan, with the difference primarily attributable to the $350K ARR miss flowing through to lower collections. At current burn ($410K/month), we have 10.2 months of runway. The five proposed headcount additions under discussion would reduce runway to approximately 8.9 months. We are monitoring the Q2 close rate and Signal adoption data as inputs to a Q3 fundraise decision.

  ## Risks and Uncertainties
  - **Enterprise close rate:** If the Q1 45% close rate persists into Q2, full-year ARR will miss by 15–20%. Managing through focused sales management and pipeline qualification discipline.
  - **AE ramp:** Three reps must reach 70%+ quota attainment by Q3 for the annual plan to be achievable. Milestone tracking established; weekly visibility for VP Sales.
  - **Cash runway:** At current burn, runway falls below 6 months in October without a financing event or material improvement in ARR. Fundraise process needs to begin no later than July to ensure adequate runway cushion.
  - **Signal adoption:** Signal upsell is a meaningful H2 opportunity but is not yet in baseline assumptions. If adoption lags the 25% Q2 target, H2 revenue assumptions will need revision.
  - **Churn trend:** Three accounts churned in Q1 vs. a 2-account budget. Not yet a pattern, but requires monitoring — one more quarter of elevated churn warrants a CS team intervention and retrospective.

  ## Board Discussion Items
  1. **Fundraise timing:** Given the 10.2-month runway and the need for adequate process time, should we begin Series A conversations in Q3 (contingent on Q2 data) or Q4? The board's guidance on investor relationships and timing preferences would be valuable.
  2. **Headcount: approve modified plan or full plan?** Finance recommends approving 3 of the 5 proposed roles (Senior AE, Marketing Manager, CSM) and deferring the second AE and data engineer. The board's perspective on the risk/reward tradeoff is sought before we finalize the plan.
  3. **Enterprise strategy:** The Q1 enterprise close rate of 45% may reflect market softness, AE capability, or competitive dynamics. The board's perspective on enterprise focus vs. SMB diversification would be useful context for our Q2 planning.
tips:
  - "Lead with the most important fact, not the most flattering one. Board members who sense you're burying the lead lose confidence in the management team's candor."
  - "The 'Board Discussion Items' section is where finance turns from reporting into governance. If you don't have genuine questions for the board, you're using the meeting as a presentation, not as a resource."
  - "Keep cash and runway front and center. Even experienced board members need runway context — it should appear in every finance section of every board deck."
  - "The risks section must be honest. Listing only minor risks signals that you're either managing optics or not thinking hard enough about the downside."
  - "After writing the narrative, read it as a first-time board member who doesn't know the company well. Does it make sense? Does it give them what they need to be helpful?"
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - budget-variance-analysis
  - monthly-finance-commentary
  - board-meeting-agenda
  - investor-update-email
tags:
  - board
  - finance
  - investor-relations
  - fpa
  - governance
---
