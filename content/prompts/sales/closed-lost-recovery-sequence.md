---
title: "Build a closed-lost recovery sequence"
slug: closed-lost-recovery-sequence
function: sales
role: sdr
description: "Generate a multi-touch recovery sequence aimed at closed-lost prospects, triggered by time elapsed, role changes, or news events."
useCase: "Use this when reviving deals that died 6 to 18 months ago. Closed-lost is one of the most overlooked pipeline sources, but most teams either ghost the contact or send a generic check-in email. This prompt builds a sequence with real triggers, escalating value angles, and a response handling plan so reps know what to do when someone replies."
prompt: |
  You are a senior sales strategist who specializes in closed-lost recovery. Build a multi-touch recovery sequence for a prospect who went closed-lost {{time_since_lost}} ago.

  Deal context:
  - Company: {{company_name}}
  - Buyer role: {{buyer_role}}
  - Original loss reason: {{loss_reason}} (e.g., "went with competitor", "no budget", "internal build")
  - What has changed since: {{trigger_event}} (e.g., new VP, funding round, layoff, competitor outage, product launch on our side)
  - Our product: {{product}}
  - Outcome we deliver: {{outcome}}

  Build the following:

  1. Trigger conditions worth restarting outreach (list 4 to 6 specific signals to monitor — role changes on LinkedIn, funding events, competitor news, product gap announcements, etc.)

  2. A 4 to 5 email sequence spaced over 3 to 4 weeks. Each email should:
     - Use a distinct value angle (do not repeat the original pitch)
     - Reference what has changed since the loss
     - Be under 120 words
     - Have a punchy subject line

  3. Response handling guide: for the 3 most likely reply types (still not interested, interested but timing wrong, warm reopen), give a one-paragraph reply template and a clear next step.

  Do not pretend the prior loss did not happen. Acknowledge it directly in the first email. Closed-lost recovery only works when the rep sounds honest about why the timing might be different now.
variables:
  - "{{time_since_lost}}"
  - "{{company_name}}"
  - "{{buyer_role}}"
  - "{{loss_reason}}"
  - "{{trigger_event}}"
  - "{{product}}"
  - "{{outcome}}"
exampleInput: |
  time_since_lost: 14 months
  company_name: Northstar Robotics
  buyer_role: VP of Revenue Operations
  loss_reason: chose internal build over our platform
  trigger_event: original RevOps lead left, new VP joined from a customer of ours
  product: revenue forecasting and pipeline analytics platform
  outcome: 25% improvement in forecast accuracy, 6 hours of analyst time saved per week
exampleOutput: |
  Trigger conditions to monitor:
  1. RevOps or Sales Ops leadership change on LinkedIn
  2. Public commentary on forecast accuracy in earnings calls or interviews
  3. Job postings for Revenue Analyst or Forecasting roles
  4. Competitor pricing change or outage
  5. Funding event that increases scrutiny on revenue predictability
  6. Product launches that suggest broader GTM motion

  Email 1 (day 0) — Subject: "Wanted to reach back out, honestly"
  Hi Sarah, when we last spoke 14 months ago, your team chose to build internally rather than buy. That was a reasonable call at the time. I noticed you joined Northstar from Atlas, which has been a customer of ours for 2 years — so you have probably already seen how we handle forecast variance. Worth a 15-minute reset?

  Email 2 (day 5) — Subject: "The build vs buy math after 14 months"
  Most teams that chose to build forecasting in-house in 2024 are quietly revisiting that decision now. The maintenance load grows faster than the original feature set. If you are seeing any of that pattern, I have a 1-page comparison from 3 teams who made the switch back.

  Email 3 (day 12) — Subject: "Forecast accuracy benchmarks for $50M ARR teams"
  Sharing one stat: median forecast accuracy at your stage is 71%. Top quartile is 88%. The gap is almost always tooling, not talent. Happy to send the full benchmark.

  Email 4 (day 22) — Subject: "Last note on this"
  Sarah, I will stop here. If timing changes, my line is open. One thing I would flag: the new fiscal year is the cleanest moment to revisit a build vs buy call. Worth 15 minutes before then?

  Response handling:
  - Still not interested: Acknowledge, ask permission to check back in 6 months, send one piece of useful content. Next step: tag in CRM with revisit date.
  - Interested but timing wrong: Ask what would need to be true for it to be the right time, and listen. Next step: align on the specific trigger, schedule a check-in tied to it.
  - Warm reopen: Skip the demo pitch, ask what changed since the original decision, and let them lead. Next step: discovery call focused on what is different now.
tips:
  - "Closed-lost reopens almost always come from a personnel change. Set up LinkedIn alerts on the original buying committee and on related roles — that one signal is worth more than the rest combined."
  - "Acknowledge the prior loss in the first email. Pretending it did not happen is the fastest way to get ignored."
  - "Do not use the original pitch. The reason you lost is often the reason you will lose again unless the angle changes."
  - "Run this sequence in batches once a quarter against your closed-lost cohort. Treat it like a campaign, not a one-off."
  - "If the loss reason was price, the recovery angle is rarely a discount — it is usually a different package or a new use case."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cold-outbound-vp-sales
  - mutual-action-plan-draft
  - renewal-conversation-prep
tags:
  - sales
  - closed-lost
  - email-sequence
  - pipeline-recovery
  - sdr
---
