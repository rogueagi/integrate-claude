---
title: "Write a monthly investor update for a SaaS metrics audience"
slug: investor-update-monthly-saas
function: finance
role: investor-relations
description: "Generate a monthly investor update tailored for a SaaS-literate audience that leads with the metrics investors care about: ARR, NRR, burn, runway, and pipeline."
useCase: "Use this prompt to draft the monthly investor update when your investor base is SaaS-literate (Series A and later) and expects a metrics-forward update. Generic 'wins, lessons, asks' templates underdeliver for these readers. This prompt produces an update that leads with the numbers, contextualizes them, and reserves narrative for the things the data does not show."
prompt: |
  You are the founder or CEO of {{company_name}} writing the monthly investor update for the {{period}} reporting period to a sophisticated SaaS investor audience.

  Inputs:
  - Reporting period: {{period}}
  - ARR snapshot (current ARR, net new ARR, components — new, expansion, contraction, churn): {{arr_data}}
  - Pipeline metrics (qualified pipeline, coverage ratio, win rate, average deal size, sales cycle): {{pipeline_data}}
  - Retention metrics (NRR trailing 12 months, gross logo retention, notable churn or expansion): {{retention_data}}
  - Cash and runway (cash balance, monthly burn, runway months, capital efficiency): {{cash_data}}
  - Hiring (headcount today, hires this month, open roles): {{hiring_data}}
  - Product and customer milestones: {{product_milestones}}
  - Risks and open questions: {{risks}}
  - Asks (specific intros, hires, or feedback): {{asks}}

  Produce the update with these sections in this order:

  ## TL;DR
  Three to five bullets. Each bullet should be a fact with a number, not a qualitative statement. The first bullet is the headline metric of the month.

  ## ARR
  ARR bridge in plain text (beginning + new + expansion - contraction - churn = ending). One paragraph of context: what drove the bridge, where the variance to plan came from, and what is interesting about the mix.

  ## Pipeline
  Coverage ratio, win rate, and average deal size with trend. One paragraph on the health of the next 90 days of new ARR generation.

  ## Retention and Expansion
  NRR figure with trend, notable expansion or churn events with attribution.

  ## Cash and Runway
  Cash, burn, runway, and burn multiple. One sentence on capital efficiency direction.

  ## Hiring
  Net headcount change, key hires made, key roles open.

  ## Product
  Two to four bullets on product or customer milestones that materially affect the business.

  ## Risks
  Two to three honest risks. Investors penalize updates that hide risk and reward updates that surface it with a plan.

  ## Asks
  Two to four specific asks. Each ask should name a target type (e.g., 'intros to VPs of People at 500 to 2000 person SaaS companies') or a clear question, not a generic 'let us know if you can help'.

  Tone: confident, specific, and unspun. Investors who have read 200 updates can spot vague language immediately. Cite numbers wherever possible. Keep the full update under 800 words.
variables:
  - "{{company_name}}"
  - "{{period}}"
  - "{{arr_data}}"
  - "{{pipeline_data}}"
  - "{{retention_data}}"
  - "{{cash_data}}"
  - "{{hiring_data}}"
  - "{{product_milestones}}"
  - "{{risks}}"
  - "{{asks}}"
exampleInput: |
  company_name: Tessellate Analytics
  period: April 2026
  arr_data: Beginning $8.4M; New $310K; Expansion $145K; Contraction $20K; Churn $65K; Ending $8.77M; Net new $370K (vs. $400K plan)
  pipeline_data: Qualified pipeline $4.2M (3.1x of $1.35M Q2 plan); win rate 22 percent trailing six months (up from 19 percent); average deal size $48K (up from $41K); sales cycle 71 days (down from 84 days)
  retention_data: NRR 116 percent trailing twelve months (115 percent prior month); gross logo retention 94 percent; one major expansion (Marrowstone Bank, $90K to $215K seat expansion); one churn (Hexley Group, $65K, citing internal pivot to in-house tooling)
  cash_data: Cash $19.4M; April burn $620K (March was $710K); runway 31 months at current burn; burn multiple 1.7 (improving from 2.0 last quarter)
  hiring_data: Headcount 38 (was 36); two hires in April (Sr. AE Marcus Pell and Eng Manager Dev Ramirez); open roles — Head of Marketing, Sr. Data Engineer, Customer Success Lead
  product_milestones: |
    - Tessellate Live (real-time mode) opened to all customers April 18; 22 customers activated in first two weeks
    - Snowflake-native deployment in private beta with three customers
    - SOC 2 Type II completed (was Type I)
    - First six-figure deal closed (Marrowstone Bank expansion)
  risks: |
    - Hexley churn was first loss to in-house tooling; second mention this quarter
    - Marketing leader gap is starting to show in pipeline diversity (60 percent of pipeline from outbound vs. 50 percent target)
    - Live mode infrastructure costs running 30 percent above forecast; engineering investigating
  asks: |
    - Intros to Heads of Marketing at 50 to 150 person B2B SaaS who would consider a Series B stage company
    - Customer references at midmarket banks or insurance companies for Snowflake-native pitch
    - Feedback from anyone who has navigated 'in-house tooling' competitive losses
exampleOutput: |
  ## TL;DR
  - Closed April at $8.77M ARR, net new ARR of $370K (93 percent of $400K plan).
  - Pipeline coverage at 3.1x for Q2 plan; win rate up to 22 percent trailing six months.
  - NRR ticked up to 116 percent driven by Marrowstone Bank expansion ($90K to $215K).
  - Burn down to $620K with runway at 31 months; burn multiple improved to 1.7.
  - First competitive loss to in-house tooling (Hexley, $65K); flagging as a risk to monitor.

  ## ARR
  ARR bridge: $8.40M beginning + $310K new + $145K expansion - $20K contraction - $65K churn = $8.77M ending. Net new of $370K came in $30K below plan, driven by one deal slipping into May rather than a broader miss. The mix is the story: expansion was 32 percent of gross new ARR (vs. 24 percent in March and 18 percent a year ago). The Marrowstone seat expansion is the largest single expansion in the company's history and validates the upmarket motion.

  ## Pipeline
  Qualified Q2 pipeline is $4.2M against a $1.35M new ARR plan, 3.1x coverage. Trailing six month win rate moved up to 22 percent from 19 percent, and the sales cycle compressed from 84 to 71 days, both consistent with the playbook tightening that came out of the December sales offsite. Average deal size is $48K, up from $41K. The 90-day forward read is healthy on coverage but concentrated in outbound.

  ## Retention and Expansion
  NRR climbed to 116 percent trailing twelve months. Gross logo retention is 94 percent. Expansion was driven by Marrowstone Bank moving from a 12-seat pilot to a 30-seat enterprise contract; this is the first six-figure deal in the book. Churn was Hexley Group at $65K, who pivoted to an internally built tool. This is the second time we have heard 'we are building it ourselves' in the past quarter, both in midmarket data teams. We are diving into the win/loss pattern this month.

  ## Cash and Runway
  Cash $19.4M, April burn $620K (down from $710K in March), runway 31 months. Burn multiple improved to 1.7 from 2.0 last quarter, reflecting both the burn step-down and net new ARR. Capital efficiency is moving in the right direction without further fundraising pressure.

  ## Hiring
  Headcount 38, up two from March. Marcus Pell joined as Senior AE (from Looker), and Dev Ramirez joined as Engineering Manager (from Snowflake). Three roles open: Head of Marketing, Senior Data Engineer, Customer Success Lead. The Head of Marketing search is the priority — the gap is starting to show in pipeline source diversity.

  ## Product
  - Tessellate Live launched to general availability April 18; 22 customers activated in the first two weeks against a 15-customer plan.
  - Snowflake-native deployment in private beta with three midmarket banks and insurance customers.
  - SOC 2 Type II achieved (was Type I), unblocking three enterprise security reviews.
  - First six-figure ACV deal (Marrowstone, $215K) closed April 24.

  ## Risks
  - In-house tooling losses: two mentions this quarter (Hexley confirmed, one earlier deal lost). Acceptable level of noise but we are tracking whether this becomes a pattern in midmarket data teams. Plan: dedicated win/loss interview series, plus a positioning workstream led by the next marketing leader.
  - Marketing leader gap: 60 percent of pipeline from outbound vs. 50 percent target. This will become a problem in 60 to 90 days if not closed.
  - Live mode infrastructure costs are running 30 percent above forecast. Engineering is investigating; not material to runway but it is structurally a margin question we should resolve before the deal cohort scales.

  ## Asks
  - Warm intros to Heads of Marketing at 50 to 150 person B2B SaaS companies; we are at the Series B stage.
  - Customer references at midmarket banks or insurance for the Snowflake-native pitch (we have three; we want six).
  - Anyone who has navigated competitive losses to in-house tooling — would value 30 minutes to compare notes.
tips:
  - "Lead with the headline number. SaaS investors read updates fast; bury the lead and they miss it."
  - "Always include the ARR bridge in plain text. Investors compare ARR bridges across portfolio companies, and a bridge is the most efficient way to communicate the quarter."
  - "Cite the burn multiple. It is the single most-watched capital efficiency metric for Series A through C SaaS companies."
  - "Honest risks build credibility. Investors who get a clean update every month for six months and then a disaster lose trust faster than investors who got monthly small risks surfaced along the way."
  - "Asks should be specific enough that an investor can act in 60 seconds. 'Intros to VPs of People at 500 to 2000 person companies' is actionable; 'help with hiring' is not."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - investor-update-email
  - saas-metrics-commentary
  - arr-bridge-explanation
  - board-finance-update
tags:
  - finance
  - investor-relations
  - saas-metrics
  - investor-update
  - reporting
---
