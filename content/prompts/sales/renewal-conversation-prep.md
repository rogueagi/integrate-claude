---
title: "Prep a renewal conversation with risk and expansion signals"
slug: renewal-conversation-prep
function: sales
role: customer-success
description: "Prep a renewal conversation using usage data, sentiment signals, and an expansion hypothesis, with risk flagging and a proposed agenda."
useCase: "Use this before a renewal conversation when you have usage data and meeting notes but need a sharp read on health, risk, and expansion path. Most CSMs walk into renewal calls without a clear hypothesis on whether the account is at risk or ready to expand. This prompt forces both reads and gives you an agenda that earns the meeting."
prompt: |
  You are a senior customer success leader prepping an account team for a renewal conversation. Synthesize the inputs below into a renewal prep brief.

  Account context:
  - Company: {{company_name}}
  - Current ARR: {{current_arr}}
  - Renewal date: {{renewal_date}}
  - Original use case: {{original_use_case}}
  - Usage data summary: {{usage_data}} (active users, feature adoption, trend over last 90 days)
  - Recent sentiment signals: {{sentiment_signals}} (support tickets, NPS, executive comments, exec changes)
  - Last 3 meeting notes summary: {{meeting_notes}}
  - Known competitive presence: {{competitive_presence}}
  - Expansion hypothesis we are exploring: {{expansion_hypothesis}}

  Output the brief in this structure:

  1. Health read — single grade (green, yellow, red) with 2 to 3 sentences justifying it. Be honest. If signals conflict, say so.

  2. Top 3 risk flags — what would cause this renewal to fail or downgrade. For each, name the signal and the mitigation move available before the call.

  3. Expansion hypothesis test — restate the expansion idea and list the 2 to 3 specific things we need to learn in this call to validate or kill it.

  4. Stakeholder map — who is on the call, what do we know about each, what is their likely posture (advocate, neutral, skeptic, blocker).

  5. Proposed agenda — 30 to 45 minutes. Lead with their priorities, not ours. Reserve the last 10 minutes for the renewal and expansion conversation.

  6. The 3 questions we most need to ask, with the reasoning for each.

  Rules:
  - Do not assume green health unless usage and sentiment both support it
  - If usage is declining, name it in the health read — do not bury it
  - Expansion talk does not belong in the first 20 minutes of a renewal call
  - If you are missing data, mark [unknown] rather than guessing
variables:
  - "{{company_name}}"
  - "{{current_arr}}"
  - "{{renewal_date}}"
  - "{{original_use_case}}"
  - "{{usage_data}}"
  - "{{sentiment_signals}}"
  - "{{meeting_notes}}"
  - "{{competitive_presence}}"
  - "{{expansion_hypothesis}}"
exampleInput: |
  company_name: Northstar Robotics
  current_arr: $240K
  renewal_date: 6 weeks out
  original_use_case: warehouse fleet monitoring for 3 facilities
  usage_data: weekly active users up 18% over 90 days, but feature adoption flat — only 2 of 6 modules in active use, 1 facility went dark 30 days ago
  sentiment_signals: NPS dropped from 9 to 6 last quarter, 2 P1 tickets in last 60 days both resolved, original champion was promoted away from the team
  meeting_notes: new operations lead has not been on a call yet, finance flagged budget pressure for next fiscal year, ops team mentioned considering a competitor for the next 2 facilities planned
  competitive_presence: Helix Analytics in active conversation for the 2 new facilities
  expansion_hypothesis: expand from 3 facilities to 5 with multi-site dashboard module
exampleOutput: |
  Health: Yellow. Active usage is up but feature adoption is shallow, the original champion is gone, and one facility has been dark for 30 days. Sentiment dropped (NPS 9 to 6) and a competitor is in conversation for the planned facilities. Renewal will likely close, but at risk of downgrade or flat — not expansion — unless we re-anchor on value with the new operations lead.

  Top 3 risk flags:
  1. Champion change — the new operations lead has not been on a call. Mitigation: ask the account contact to broker a 30-minute intro call before the renewal conversation.
  2. Facility dark for 30 days — usage signal that could become a billing dispute. Mitigation: pull the access logs, identify the cause, have a clear answer before the call.
  3. Competitor in conversation for new facilities — they are in market, we are not yet positioned. Mitigation: prepare a multi-site comparison anchored on what they already have working.

  Expansion hypothesis test:
  Hypothesis: expand from 3 facilities to 5 with the multi-site dashboard module.
  We need to learn:
  - Is the new operations lead the decision maker for the 2 new facilities, or is it shared with finance?
  - What is the timing on the 2 new facilities going live?
  - What is Helix's pitch and where are they ahead or behind us?

  Stakeholder map:
  - New operations lead (unknown posture): likely neutral, needs re-onboarding to value story
  - Finance contact (likely skeptic): flagged budget pressure, needs ROI framing
  - Original champion's replacement on the ops team (likely advocate but limited authority): keep close, use as internal informant
  - [unknown] whether procurement will be on this call

  Proposed agenda (45 min):
  - 0-5: their priorities for the next 12 months, in their words
  - 5-20: where we are delivering value today, anchored on the 2 active modules and the 18% usage growth
  - 20-30: what is not working — the dark facility, the modules they are not using, anything else
  - 30-40: the 2 new facilities — listen, do not pitch
  - 40-45: renewal mechanics and the multi-site expansion idea, framed as exploration not ask

  Top 3 questions:
  1. "What does success in the next 12 months look like for your team?" — establishes the new lead's priorities, which we do not know.
  2. "The 2 new facilities — how are you thinking about the tooling decision, and what timeline?" — directly tests the competitive risk.
  3. "Of the 6 modules in your contract, which 2 are pulling the most weight, and what would you change about the others?" — surfaces the shallow adoption issue and lets them lead.
tips:
  - "Renewal call agendas should always lead with the customer's priorities, not your renewal ask. The renewal closes more reliably when they feel heard first."
  - "Champion change is the single biggest renewal risk signal. Treat any champion change as yellow until proven otherwise."
  - "If usage is declining, you cannot pitch expansion. Stabilize first."
  - "A dark facility, low feature adoption, and dropping NPS are the trio that predicts downgrade. If you see all three, expect a hard renewal."
  - "Always have an answer ready for 'why is one of our facilities not using this' before the call. Walking into that question cold is the worst place to be."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cold-outbound-vp-sales
  - mutual-action-plan-draft
  - deal-review-prep-narrative
tags:
  - sales
  - renewal
  - customer-success
  - account-management
  - expansion
---
