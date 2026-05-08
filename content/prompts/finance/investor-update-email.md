---
title: "Write a monthly investor update email"
slug: investor-update-email
function: finance
role: investor-relations
description: "Generate a concise, structured monthly investor update email that keeps investors informed, builds trust, and maintains strong relationships between fundraising cycles."
useCase: "Use this prompt to write the monthly update email sent to current investors, angels, and board observers. Consistent, honest investor updates are one of the most underrated relationship management tools for founders — they build trust, surface helpful introductions, and create a record of your trajectory. Most founders stop sending them when things are hard — this prompt makes it easier to write them honestly in any environment."
prompt: |
  You are a founder or CEO writing a monthly investor update email.

  Context:
  - Company: {{company_name}}
  - Month/period: {{period}}
  - Audience: {{audience}} (e.g., seed investors, angels, board members, advisors)
  - Key metrics this month: {{key_metrics}} (ARR, revenue, users, growth rate — whatever is most relevant)
  - Wins this month: {{wins}} (product launches, customer closes, team additions, partnerships)
  - Challenges or misses: {{challenges}} (what didn't go as planned — be honest)
  - Asks: {{asks}} (what you need from investors: intros, candidates, customers, advice)
  - Forward outlook: {{forward_outlook}} (what you're focused on next month)
  - Tone: {{tone}} (formal or conversational — most founders use conversational)

  Write an investor update with these sections:

  ## Subject Line
  Specific and metric-driven. Not "Monthly Update" — something like "Anchor Analytics — April Update | $1.82M ARR, Signal launch, 10 months runway"

  ## Opening (1–2 sentences)
  The headline of the month: the single most important development. This is what investors will remember.

  ## Numbers (bullet format)
  4–6 key metrics with:
  - Current value
  - Change vs. prior month or period
  - Brief context (1 phrase, not a paragraph)

  ## Wins
  3–5 specific wins with one-line descriptions. Concrete and specific ("Closed Meridian Health at $45K ARR" not "had a great enterprise win").

  ## Challenges / What Didn't Go as Planned
  2–3 honest items. This is the section most founders skip and most investors value most. Investors who only hear about wins don't know when to trust the wins.

  ## Asks (critical section)
  2–3 specific, actionable asks. "Any introductions would be helpful" is not an ask — "Looking for a warm intro to CPOs at Series B SaaS companies for a Signal design partnership" is an ask.

  ## What We're Focused on Next Month
  2–3 priorities. Should connect to the challenges and asks.

  ## Closing (1 sentence)
  Brief and personal. A real sentence, not a boilerplate "please don't hesitate to reach out."

  Tone: honest, confident, and conversational. Investor updates are relationship documents, not press releases. Investors who trust you will refer candidates, make introductions, and give you the benefit of the doubt during hard periods. Trust is built through honesty.
variables:
  - "{{company_name}}"
  - "{{period}}"
  - "{{audience}}"
  - "{{key_metrics}}"
  - "{{wins}}"
  - "{{challenges}}"
  - "{{asks}}"
  - "{{forward_outlook}}"
  - "{{tone}}"
exampleInput: |
  company_name: Anchor Analytics
  period: April 2024
  audience: seed investors and angels (12 people)
  key_metrics: ARR $1.82M (+$70K MoM), 47 trials started (record high), trial-to-paid 18% (down from 22%), monthly burn $410K, cash $3.9M (9.5 months runway)
  wins: Signal launched April 15 and exceeded adoption targets (31% of eligible customers enabled it vs. 25% target); NPS improved to 42 (6-month high); closed Meridian Health at $45K ARR; hired Sarah Kim as Head of Marketing (starts May 1)
  challenges: Trial-to-paid conversion dropped from 22% to 18% — we think it's Signal launch traffic quality but haven't confirmed yet; enterprise close rate was 45% in Q1 vs. 65% plan — Q2 pipeline is stronger but we're watching it; AE ramp slower than planned (Q1 miss was mostly this)
  asks: Looking for introductions to enterprise buyers in healthcare analytics (following Meridian Health close); any referrals for a Series A lead — we'll be starting conversations in Q3; looking for a data engineer with Spark/Airflow experience
  forward_outlook: Diagnose and fix trial-to-paid conversion decline; close 2 enterprise deals in Q2 pipeline; onboard Sarah and launch first Signal marketing campaign
  tone: conversational
exampleOutput: |
  **Subject:** Anchor Analytics — April Update | $1.82M ARR, Signal launched, NPS at 6-month high

  ---

  Quick version: Signal launched April 15, exceeded our adoption target in 2 weeks, and NPS hit a 6-month high. Trial volume is at a record. The thing I'm watching closely is trial-to-paid conversion — it dropped 4 points and I want to understand why before declaring the Signal launch a full success.

  **Numbers**
  - ARR: $1.82M (+$70K MoM) — behind our $1.95M April target but improving
  - Monthly trials started: 47 (record; target was 35) — Signal launch drove the spike
  - Trial-to-paid conversion: 18% (down from 22%) — investigating
  - Monthly burn: $410K — on plan
  - Cash: $3.9M | 9.5 months runway

  **Wins**
  - Signal launched April 15. 31% of eligible Pro and Enterprise customers enabled it in the first 2 weeks (target: 25%). NPS for Signal users is 8 points higher than non-users.
  - NPS: 42 — highest in 6 months, improving for the third consecutive month
  - Closed Meridian Health at $45K ARR — our largest enterprise close to date and first healthcare customer
  - Hired Sarah Kim as Head of Marketing; she starts May 1. She comes from Segment (Series C) and brings exactly the enterprise narrative background we need for Signal and the Series A.
  - New trials at a weekly record — 47 this week vs. 31 last week and a 35-week target

  **Challenges / What Didn't Go as Planned**
  - Trial-to-paid conversion fell from 22% to 18%. We have two hypotheses: (1) the Signal-driven trial spike brought in higher-volume but lower-intent visitors, or (2) there's friction in the trial experience. We're running a cohort analysis this week. If it's hypothesis 1, no action needed — the rate will normalize. If hypothesis 2, the fix has real revenue implications. This is my #1 concern right now.
  - Enterprise close rate in Q1 was 45% vs. our 65% plan. The Q2 pipeline is stronger and has 3 committed timelines, but we're watching the close rate weekly. If it doesn't recover to 55%+ in Q2, we'll need to revisit the full-year ARR model.
  - AE ramp continues to lag plan. The 3 AEs hired in February are on track for the 6-month ramp curve, but Q1 was 31% below our new ARR target because of it. Q2 should show improvement — I'll report back on May 15.

  **Asks**
  1. We just closed our first healthcare customer (Meridian Health) and it surfaced strong interest in that vertical. If you know CPOs or analytics leads at health systems or health-tech companies, I'd love a warm intro.
  2. We're planning to start Series A conversations in Q3. If you have a thesis-aligned partner at a fund you'd want us to talk to first, now would be a great time to make that connection — ideally before we're formally in market.
  3. Hiring: looking for a senior data engineer with Spark and Airflow experience. Competitive-stage background (Amplitude, Mixpanel, Heap) is a plus. If you know anyone, please send them our way.

  **May Focus**
  - Diagnose the trial-to-paid conversion drop and fix it if it's a product problem
  - Close 2 enterprise deals in the current Q2 pipeline
  - Onboard Sarah and ship the first Signal campaign

  Thanks for being on this journey — grateful for all the intros, advice, and encouragement, especially during the messier months. Marcus
tips:
  - "The challenges section is the most important one you'll write. Investors who get honest updates about hard things become your allies when you need help. Investors who only hear good news become skeptical — they assume you're managing optics."
  - "Make your asks specific and actionable. 'Any introductions would be great' wastes the investor's social capital — they don't know who to introduce you to. 'I'm looking for a warm intro to the Head of Analytics at mid-size health systems in the Midwest' is a request they can act on."
  - "The subject line should contain at least one real metric. 'Monthly Update' is not a subject line — it tells the investor nothing and reduces open rates."
  - "Send it on the same day every month — consistency signals operational discipline. Investors notice when updates go from monthly to quarterly to never."
  - "Keep it under 500 words. Investors have portfolios of 20–50 companies. Your update is one of many — short, dense, and scannable is a feature, not a limitation."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - board-finance-update
  - board-meeting-agenda
  - fundraising-narrative
  - monthly-finance-commentary
tags:
  - investor-relations
  - fundraising
  - founder
  - communication
  - monthly-update
---
