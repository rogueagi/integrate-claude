---
title: "Write a monthly investor update email"
slug: investor-update-monthly
function: executive
role: board-prep
description: "Draft a tight monthly investor update — metrics, narrative, asks — that keeps your investors close without burning a day to write it."
useCase: "Use this on the first week of every month, after you have your numbers but before your day fills up. Monthly investor updates are one of the highest-ROI activities a CEO can do — they keep investors aligned and warm, surface help requests early, and force the leadership team to articulate what just happened. This prompt makes them fast to produce."
prompt: |
  You are a former operator who has sent and received hundreds of monthly investor updates. Draft a monthly investor update email from {{ceo_name}} at {{company_name}} for {{month}}.

  Inputs:
  - CEO and company: {{ceo_name}}, {{company_name}}
  - Month covered: {{month}}
  - Investor list type — institutional only, angels, mixed: {{investor_audience}}
  - Headline metrics for the month (with prior-month comparison): {{metrics}}
  - Two biggest wins of the month: {{wins}}
  - One miss or hard moment: {{miss}}
  - The one strategic theme of the month: {{theme}}
  - Three specific asks of investors (intros, advice, hires, customer connections): {{asks}}
  - Anything sensitive that should be kept off-update: {{sensitivities}}

  Write the update. Structure:

  ## Subject Line
  `{{company_name}} — {{month}} Update`

  ## TL;DR (3 lines)
  - Headline metric vs. prior period
  - One-sentence theme
  - One-sentence ask

  ## Metrics
  Clean table or list of 4–6 metrics that matter, each with prior-month comparison and plan delta. Numbers, not adjectives.

  ## What Happened (The Theme)
  Two paragraphs. The theme of the month, illustrated with a specific moment, customer, or decision. This is the narrative section investors actually read.

  ## Wins
  3–5 bullets. Specific. Names of customers, hires, ships. No filler.

  ## What Didn't Work
  1–3 bullets. The honest miss, named directly. Investors trust founders who name misses before being asked.

  ## Asks
  3 specific asks. Each one is a sentence the investor can act on without follow-up. Examples:
  - "Looking for a warm intro to [named person] at [company]"
  - "Need a CMO candidate for B2B SaaS, $50M-$100M stage"
  - "Anyone who can pressure-test a healthcare-vertical pricing model — 30 minute call"

  ## Hires And Departures (If Any)
  Specific. Names. Roles.

  ## Looking Ahead
  Two or three sentences on what next month is about. The single thing the team is committed to.

  Style:
  - First-person singular. Conversational.
  - Short. The whole email should fit on one screen scroll.
  - No "incredibly proud," "amazing momentum," "the journey ahead."
  - Asks must be specific. "Any intros welcome" is not an ask.
  - If the company had a hard month, say so. Investors notice the pattern of all-positive updates and stop reading them carefully.
variables:
  - "{{ceo_name}}"
  - "{{company_name}}"
  - "{{month}}"
  - "{{investor_audience}}"
  - "{{metrics}}"
  - "{{wins}}"
  - "{{miss}}"
  - "{{theme}}"
  - "{{asks}}"
  - "{{sensitivities}}"
exampleInput: |
  ceo_name: Lila Hassan
  company_name: Vantage Systems
  month: April 2027
  investor_audience: institutional only
  metrics: ARR $31.6M (+$1.4M MoM, 105% of plan); New ARR $1.6M (102% of plan); Net ARR $1.4M (95% of plan due to one churn); Cash runway 27 months at current burn; Healthcare logos 47 (+6 MoM); AI module paying users 9 (target 18 by end Q2)
  wins: shipped AI compliance module GA on April 30 (on the day we said we would); signed two healthcare logos including a referenceable expansion of an existing account; Sandeep's CPO transition complete and team feedback strong
  miss: lost a $400K renewal at Greentree Medical — root cause was a procurement decision driven by their parent-company acquisition, not a product issue, but it cost us net ARR for the month
  theme: April was the month we proved we can ship the hard thing on the date we committed to
  asks: 1) warm intros to CMOs at healthcare-vertical SaaS companies — looking for someone who has built marketing for $30M to $100M-stage healthcare-focused brands; 2) anyone who knows the head of analytics at Mercy Health Network — strategic prospect, currently using a competitor; 3) feedback on whether to begin active M&A scouting now or wait one more quarter — happy to share the memo
  sensitivities: do not mention the names of the two churned customers from Q1 by name; do not specify the M&A targets we are watching
exampleOutput: |
  **Subject: Vantage Systems — April 2027 Update**

  Hi all,

  **TL;DR:** ARR $31.6M, +$1.4M MoM, 105% of plan; AI compliance module shipped GA on the date we committed; biggest ask is a warm intro to a CMO who has scaled healthcare-vertical SaaS marketing.

  ## Metrics

  | Metric | April | March | vs. Plan |
  |---|---|---|---|
  | ARR | $31.6M | $30.2M | 105% |
  | New ARR | $1.6M | $1.4M | 102% |
  | Net ARR | $1.4M | $1.4M | 95% |
  | Cash runway | 27 mo | 28 mo | on plan |
  | Healthcare logos | 47 | 41 | +6 MoM |
  | AI module paying users | 9 | 0 | 50% to Q2 target |

  ## What Happened

  April was the month we proved we can ship the hard thing on the date we committed to. The AI compliance module went GA on April 30 — the exact date I committed to in our Q1 board letter and to several of you over coffee. Nine paying customers turned it on in the first week of GA, including two who signed amendments at a higher tier specifically because of the module. Brookline's compliance officer wrote me a one-line email after their team ran the module against a live audit case: "This is what we wanted." The remaining 9 customers we need to hit the 18 paying-user target by end of Q2 are sequenced through May.

  The shipping discipline mattered beyond the product. Q1's slip cost us competitive deals and credibility. The April 30 ship reset that — internally with the team, externally with the customers who were watching, and frankly with myself. We will not be loose on commitments again.

  ## Wins
  - **AI compliance module GA shipped on date.** Nine paying customers using it in production within the first week.
  - **Two healthcare logos signed:** an expansion of an existing account at Brookline (+$300K) and a new logo at Lakeside Provider Network ($240K, referenceable in 90 days).
  - **CPO transition complete.** Sandeep is in seat across product and engineering. Team feedback (via skip-level survey) is strong; two senior engineers who had been on the fence have confirmed they're staying.
  - **Series C wires fully landed.** Cash position is the strongest the company has had.

  ## What Didn't Work
  - **Lost a $400K renewal at Greentree Medical.** Root cause was their parent company's acquisition driving a procurement consolidation, not a product or service issue. We saw it coming for 60 days but had no good play. Net ARR for the month came in at 95% of plan because of this one event.

  ## Asks
  1. **Warm intros to CMOs at healthcare-vertical SaaS companies.** Looking for someone who has built marketing for $30M-$100M-stage healthcare-focused brands. We will hire either as VP Marketing or fractional initially.
  2. **Anyone who knows the head of analytics at Mercy Health Network.** Strategic prospect, currently using a competitor we'd love to displace. Even a name would help.
  3. **Pressure-test on M&A timing.** I'm weighing whether to begin active scouting in healthcare-adjacent analytics this quarter or wait one. Happy to share the memo with anyone willing to spend 30 minutes pushing back on the framing.

  ## Hires
  - **Devon Park** joined as VP Marketing on April 14. Previously led demand at a competitor of ours; we got lucky with timing.
  - One senior engineer departure on April 22 — voluntary, family relocation, supportive transition.

  ## Looking Ahead
  May is about turning the AI module into commercial momentum. The 9 paying users need to become 18 by end of June. Two healthcare conferences this month where we'll have the module front-and-center. The 2028 plan and M&A direction will be the focus of the May board meeting on the 21st.

  Thanks, as always, for the help and the hard questions.

  — Lila
tips:
  - "Send on the same day each month. Investors anchor on cadence — a slipped update reads worse than a hard month honestly named."
  - "Three specific asks beat ten vague ones. The asks section is where investors most often help — make it easy."
  - "If you had a bad month, say so plainly. Investors trust founders who name misses, and stop reading updates from founders who never have one."
  - "Keep it on one screen scroll. If it's longer, you're padding."
  - "Track which asks investors actually act on each month. The pattern tells you which investors are operationally engaged versus passively watching."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - board-update-narrative
  - board-meeting-agenda
  - fundraising-narrative
  - exec-memo-leadership
tags:
  - investor-update
  - monthly-update
  - investor-relations
  - ceo-comms
  - board
---
