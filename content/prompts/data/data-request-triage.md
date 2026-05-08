---
title: "Triage and respond to ad-hoc data requests"
slug: data-request-triage
function: data
role: business-intelligence
description: "Triage an incoming ad-hoc data request: clarify what's being asked, scope, prioritize, and respond — turning a vague Slack ping into a tractable piece of work or a redirected ask."
useCase: "Use this prompt when an ad-hoc data request lands in your queue and you need to decide whether to do it, how to scope it, what to ask the requester, and how to respond. Forces the triage discipline that prevents the BI team from doing 200 hours of low-leverage work a quarter."
prompt: |
  You are a senior BI analyst triaging an ad-hoc data request. Your team's queue is finite; not every request gets done, and the ones that do get done need scoping before any SQL is written.

  Inputs:
  - The request (verbatim): {{request}}
  - Requester role and context: {{requester}}
  - The decision or use the data is for: {{stated_use}}
  - Existing dashboards or analyses that might already answer this: {{existing_assets}}
  - Available systems and effort: {{systems}}
  - Team queue and capacity: {{queue_capacity}}

  Produce:

  ## Restated Request (1–2 sentences)
  Restate the request in your own words, surfacing what is and isn't clear. Do not pretend ambiguity is clarity.

  ## What's the Underlying Decision?
  Pull the actual decision out of the request. Most requests are phrased as "can you pull X" but the decision is "should we do Y." Naming the decision changes the deliverable.

  ## Triage Verdict
  Pick one:
  - **Already answered** — point requester to an existing asset.
  - **Self-serve** — it's possible in an existing tool with a small amount of guidance; provide the guidance.
  - **Quick pull (< 1 hour)** — accept and scope.
  - **Substantial work (1–4 hours)** — accept with scope and timeline; clarify the decision before starting.
  - **Project-scale (>4 hours, or recurring)** — escalate or restructure as a project; do not silently add to the queue.
  - **Decline / redirect** — the request is the wrong shape (decision is unclear, the data won't actually answer it, or the requester needs a different team).

  Justify the verdict in 1–2 sentences.

  ## Clarifying Questions (if needed)
  Two to four questions to send back to the requester before starting work. The questions should distinguish between competing valid interpretations of the request, not just ask for the same thing in more words.

  ## Scope (if accepting)
  - The deliverable (table, chart, written summary, dashboard tile)
  - The metrics, dimensions, and time range
  - What is explicitly out of scope (and what would be a separate request)
  - Estimated effort and proposed delivery

  ## Response Draft
  A reply to send to the requester (Slack or email). Match the requester's tone but be direct. Includes:
  - Acknowledgement
  - Clarifying questions or restated scope
  - What they'll get and when
  - If declining/redirecting: a clear redirect, not a brush-off

  ## What This Suggests for the Queue
  One sentence on whether this is a one-off, a recurring need (build a dashboard tile or metric instead), or a sign of a missing data product the team should consider.

  Tone: helpful, scoped, and willing to redirect or decline. The most valuable BI team output is a smaller queue of higher-leverage work, not a faster turnaround on every ping.
variables:
  - "{{request}}"
  - "{{requester}}"
  - "{{stated_use}}"
  - "{{existing_assets}}"
  - "{{systems}}"
  - "{{queue_capacity}}"
exampleInput: |
  request: "Hey can you pull all customers who signed up in Q1 and tell me how they're doing? Need it by Friday for the QBR."
  requester: Senior CS Manager (Priya), runs the mid-market CS team's QBR
  stated_use: QBR slide on Q1 cohort health
  existing_assets: |
    "Customer Health Overview" Looker dashboard has cohort-level retention and health scores
    "Mid-Market QBR" template (last quarter's deck) had three cohort tiles
    Metrics layer has signup_cohort and a `customer_health_score` metric
  systems: Looker, Snowflake, dbt metrics layer; access to all customer and usage data
  queue_capacity: Two analysts on the BI team; queue is currently 12 deep with 4 substantial-work items
exampleOutput: |
  ## Restated Request
  Priya wants a Q1 cohort analysis for the mid-market CS QBR — likely a cohort-level health summary, not a per-customer list. The verbatim request says "all customers" which would be unmanageable for a QBR slide; the underlying intent is a summarized view.

  ## What's the Underlying Decision?
  The QBR uses cohort health to (a) show CS leadership how Q1 customers are tracking, (b) identify if any cohort segment needs intervention, and (c) compare to prior cohorts. The deliverable is a slide-ready summary, not a customer-by-customer list.

  ## Triage Verdict
  **Self-serve, with guidance.** The Customer Health Overview dashboard already has cohort-level retention and health for Q1 mid-market. Priya likely doesn't know it exists in the form she needs, or wants a packaged version. Estimated effort if BI does it: 30–45 minutes to package the existing dashboard view into 3–4 slide-ready charts. Estimated time saved if Priya self-serves with guidance: same outcome, queue stays clear.

  Compromise: point Priya to the dashboard view, offer to package it if the dashboard doesn't quite cover what she needs, and use the conversation to find out whether anything is genuinely missing.

  ## Clarifying Questions
  1. Is this for the cohort overall, or for specific segments (region, plan tier, ARR band)?
  2. The Customer Health Overview dashboard already shows Q1 cohort retention and health — is that view what you need, or are you looking for something different?
  3. Comparison to prior quarter cohort: is that helpful, or just Q1 standalone?
  4. Is "how they're doing" retention, health score, expansion, support volume, or some combination? Different choices lead to different slides.

  ## Scope (if accepting after clarification)
  Likely deliverable if BI ends up doing it:
  - Three slide-ready charts: Q1 cohort retention curve through current week; Q1 cohort health-score distribution; Q1 vs. Q4 cohort comparison.
  - Mid-market filter applied throughout.
  - Out of scope: per-customer deep dives (CS team has their own tooling for this); a Q1 cohort dashboard (separate request, build only if recurring).
  - Effort: 45 minutes if needed; delivery by EOD Wednesday so Priya has time to integrate.

  ## Response Draft
  > Hey Priya — happy to help. Quick question first: have you seen the Customer Health Overview dashboard? It has Q1 mid-market cohort retention and health-score views that might be exactly what you need for the QBR — link: [Customer Health Overview]. Give it a 5-minute look and let me know:
  >
  > - Is that view enough, or are you missing something?
  > - Are you looking for the cohort overall, or specific segments (region, plan tier, ARR band)?
  > - Do you want a Q4-vs-Q1 cohort comparison, or just Q1?
  >
  > If the existing view covers it, I'll send you a quick screenshot pack you can drop into the deck (~30 min). If not, I'll scope a custom pull and have it ready by EOD Wednesday so you have time before Friday. Either way, I'd avoid pulling all customers — for a QBR slide you want cohort-level summary, not a per-customer list.

  ## What This Suggests for the Queue
  This is a recurring quarterly need (every QBR season, every CS leader). Worth proposing a saved "QBR Cohort Pack" view in the Customer Health Overview dashboard so the next 4 of these requests are self-serve. One-time investment of ~2 hours; saves ~6 hours of BI time per QBR cycle.
tips:
  - "Most data requests are phrased as 'pull X' but contain 'should we do Y.' Surface the underlying decision; the deliverable changes when you do."
  - "Always check existing assets first. Re-pulling data that already exists in a dashboard is the BI team's most common form of low-leverage work."
  - "Clarifying questions are a feature, not friction. Two to four targeted questions before starting saves hours of rework."
  - "Don't silently absorb project-scale work into the queue. Anything over 4 hours or recurring needs a real intake conversation, not a Slack-thread agreement."
  - "Use recurring requests as a signal. If you've answered a similar question 4 times, the deliverable is a dashboard tile or saved view, not another one-off pull."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - dashboard-design-spec
  - self-serve-data-glossary
  - dashboard-deprecation-comms
tags:
  - data-request
  - triage
  - bi
  - operations
  - business-intelligence
---
