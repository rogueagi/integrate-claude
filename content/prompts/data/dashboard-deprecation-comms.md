---
title: "Comms plan for deprecating a legacy dashboard"
slug: dashboard-deprecation-comms
function: data
role: business-intelligence
description: "Produce a deprecation comms plan for a legacy dashboard — audience map, replacement, timeline, and the messages that prevent angry Slack threads."
useCase: "Use this prompt when retiring or replacing a dashboard that has real users. Generates the audience analysis, replacement mapping, and the actual messages — announcement, reminder, end-of-life — that make the change land without breaking trust."
prompt: |
  You are a senior BI analyst planning the deprecation of an existing dashboard. The dashboard is being retired or replaced; your job is to manage the change so consumers don't experience it as a breakage.

  Inputs:
  - Dashboard being deprecated: {{old_dashboard}} (name, what it shows, when it was built)
  - Reason for deprecation: {{reason}} (replaced by a newer dashboard, metric definition changed, no longer needed, source data going away)
  - Replacement (if any): {{replacement}} (link, what's different)
  - Active users and how they use it: {{users}} (count, segments, frequency)
  - Embedded uses: {{embedded_uses}} (slides, slack reports, scheduled emails, automations)
  - Timeline available: {{timeline}}
  - Constraints: {{constraints}} (board reporting cycles, finance close, exec dependencies)

  Produce a deprecation plan with these sections:

  ## Audience Map
  Who uses the old dashboard, in segments. For each:
  - The segment (e.g., "exec team," "regional CS leads," "ad-hoc consumers")
  - How they use it
  - What the right replacement is for them — same dashboard, different view, different tool, or "stop using"
  - Their likely reaction to the change

  ## Replacement Mapping
  For each tile, view, or saved query in the old dashboard, the replacement:
  - Tile / view in the old → tile / view in the new (or "intentionally not replaced — see notes")
  - Any metric definitions that changed and the rationale
  - Any users for whom no replacement exists yet (and how that's being handled)

  ## Timeline
  Three phases:
  - **Announcement → soft launch:** users see both dashboards, encouraged to migrate
  - **Sunset warning:** old dashboard banner-flagged, links updated, embedded uses migrated
  - **End of life:** old dashboard deleted or archived, queries return a redirect

  Specify dates, dependent on {{timeline}} and {{constraints}}. Build around quarter-end / board cycles, not into them.

  ## The Messages (drafts)
  Write three messages:

  ### 1. Announcement (Slack post + email)
  - 2 paragraphs
  - What's changing, when, why, and what to do
  - Link to the replacement
  - Where to ask questions

  ### 2. Mid-window reminder (Slack)
  - 1 paragraph
  - Includes the date the old dashboard goes away
  - Names anyone or any embedded use that hasn't migrated yet (privately, ideally — but flag publicly if needed)

  ### 3. End-of-life note (Slack + dashboard banner)
  - 1 paragraph
  - The old dashboard is now archived
  - Where to go for the same information

  ## Embedded Use Migration Plan
  For each embedded use in {{embedded_uses}}:
  - Owner of the embed
  - Migration action and deadline
  - Who follows up if it's not done

  ## Risks and Watchouts
  - Users who'll be upset and how to handle them
  - Metric definition changes that could create discrepancies in trailing reports — call these out specifically
  - Board / exec materials in flight — make sure deprecation doesn't land mid-cycle

  ## Post-Deprecation Cleanup
  - Old dashboard archived vs. deleted
  - Underlying queries / Looks tagged or removed
  - The 30-day "did anyone notice" check

  Tone: respectful of users, honest about the why, practical about timing. Bad deprecations damage trust in the data team for a long time.
variables:
  - "{{old_dashboard}}"
  - "{{reason}}"
  - "{{replacement}}"
  - "{{users}}"
  - "{{embedded_uses}}"
  - "{{timeline}}"
  - "{{constraints}}"
exampleInput: |
  old_dashboard: "Revenue Operations v2" Looker dashboard, built 2021, ~30 tiles, mix of bookings/billings/MRR
  reason: Metric definitions have drifted from finance's source of truth; the dashboard mixes bookings and revenue in confusing ways; the new "RevOps Canonical" dashboard uses the metrics layer.
  replacement: "RevOps Canonical" Looker dashboard, built on the metrics layer, with parallel tiles for the most-used views.
  users: |
    ~45 weekly viewers. Segments:
    - 8 sales ops users (heavy daily users)
    - 12 finance users (use it monthly during close)
    - 5 execs (glance at it weekly)
    - 20 ad-hoc viewers across CS and product
  embedded_uses: |
    - Bookings tile auto-screenshot into the Monday CRO update Slack
    - "Pipeline coverage" tile embedded in a Notion exec page
    - Two scheduled email subscriptions to finance
    - One automated Sheet pull that powers a board chart
  timeline: 8 weeks
  constraints: Q1 board meeting falls in week 5; finance close runs the first week of every month; we cannot deprecate during a close
exampleOutput: |
  ## Audience Map
  - **Sales ops (8 users, daily):** they live in this dashboard. Their use case maps cleanly to the new RevOps Canonical dashboard's "Daily Sales Ops" view. Likely reaction: friction at first; they have muscle memory for tile locations. Mitigation: side-by-side tile-mapping doc and a 30-minute walkthrough session in week 1.
  - **Finance (12 users, monthly during close):** the bookings/MRR confusion is exactly what they want resolved. Their replacement is the new dashboard's "Finance Tie-Out" view with metrics-layer-backed numbers. Likely reaction: positive once the trailing-period reconciliation is shown. Mitigation: schedule a 15-minute reconciliation walkthrough before close week.
  - **Execs (5 users, weekly glance):** they use ~3 tiles. Replacement: the new dashboard's "Exec Summary" view, which we're rebuilding to match their existing flow. Likely reaction: indifferent if the tiles look similar; sharp if numbers shift. Mitigation: pre-brief CRO and CFO on the metric-definition changes.
  - **Ad-hoc viewers (20 users):** mostly link-followers from Slack. Replacement: redirect at the URL level once the old is archived; most won't notice. Likely reaction: a handful of "where did X go" questions.

  ## Replacement Mapping
  - Most tiles map 1:1 to RevOps Canonical, with metric values aligned to the metrics-layer source of truth.
  - **Definition changes that shift the number:**
    - "Bookings" in v2 included add-on services revenue; new dashboard excludes services per finance's definition. Trailing-period numbers will differ by 4–7%. Call this out.
    - "MRR" in v2 included paid trials; new dashboard excludes them. Trailing-period MRR is ~7% lower in the canonical view. Call this out.
  - **Tiles intentionally not replaced:**
    - "Lead-to-Close Latency" — superseded by the dedicated Funnel Velocity dashboard; redirect viewers there.
    - "Top 10 Reps Leaderboard" — moved to the Sales Performance dashboard.
  - **No replacement yet:** the "Win Rate by Source" tile is being rebuilt for v2 of RevOps Canonical (planned for next quarter). Interim: provide a saved Look that approximates it.

  ## Timeline (8 weeks, anchored around the Q1 board in week 5)
  - **Week 1 (now):** announce. Both dashboards live. New dashboard has a "preferred" badge; old has an info banner pointing to the new.
  - **Weeks 2–3:** office hours and the walkthrough sessions. Migrate embedded uses (Slack, Notion, scheduled emails).
  - **Week 4:** mid-window reminder. Old dashboard banner shifts from "preferred" to "deprecating in 4 weeks."
  - **Week 5:** Q1 board meeting. **No deprecation actions during this week.** Hold all messaging.
  - **Week 6:** post-board, send the "two weeks until end of life" reminder.
  - **Week 7:** finance close (first week of next month). Hold deprecation actions until close completes.
  - **Week 8:** end-of-life. Old dashboard archived (not deleted) and a redirect note posted. Underlying Looks tagged `deprecated_2024_q1`.

  ## The Messages

  ### 1. Announcement (#data, #revops, email to active users)
  > Heads up: we're replacing the "Revenue Operations v2" dashboard with a new dashboard called **RevOps Canonical** over the next 8 weeks. The new dashboard is built on our metrics layer, which means the bookings, MRR, and pipeline numbers reconcile cleanly with finance's source of truth — that's the main reason for the change. Most tiles map 1:1; a few are improvements; one or two have moved to other dashboards.
  >
  > Two metric definitions are different (Bookings now excludes services; MRR now excludes paid trials), so trailing-period numbers will shift slightly — we'll walk through the reconciliation in the office hours below. Both dashboards will be live for the next 6 weeks; the old will be archived in week 8.
  >
  > **What to do:** start using RevOps Canonical for new analyses. Office hours: [time] for sales ops, [time] for finance. Questions: #data or DM [BI lead].

  ### 2. Mid-window reminder (week 4, #data)
  > Reminder: "Revenue Operations v2" is being deprecated in 4 weeks (week of [date]). All scheduled emails and embedded uses have migrated except the Notion exec page (owner: [name], action by week 6) and the board-chart Sheet pull (owner: [name], migrating during board prep). If you're still landing on the old dashboard from a saved link, please update — link-redirects will be added in week 8 but it's better not to depend on them.

  ### 3. End-of-life note (week 8, dashboard banner + #data)
  > "Revenue Operations v2" is now archived. The replacement is **RevOps Canonical**: [link]. Saved links to the old dashboard now redirect to the equivalent view in the new one. The underlying Looks have been tagged `deprecated_2024_q1` and will be removed from the explore in 30 days. Questions: #data.

  ## Embedded Use Migration Plan
  - **Bookings tile auto-screenshot in Monday CRO update.** Owner: RevOps lead. Action: switch the screenshot source to the new tile by week 3. Follow-up: BI checks in week 4.
  - **"Pipeline coverage" in Notion exec page.** Owner: Chief of Staff. Action: replace embed by week 6.
  - **Two scheduled emails to finance.** Owner: BI team. Action: re-point to new dashboard by week 3.
  - **Automated Sheet pull powering a board chart.** Owner: Finance analyst. Action: migrate during board prep (weeks 4–5). Coordinate so the Q1 board chart uses the new source — this is the highest-stakes embed.

  ## Risks and Watchouts
  - **The two metric-definition changes will produce numbers that don't match the previous board materials** for trailing periods. Brief CRO and CFO before the Q1 board meeting; include a one-slide reconciliation in the board materials.
  - **Sales ops will feel friction** at first. Schedule the walkthrough early; offer 1:1 desk-side time if needed.
  - **Do not deprecate during week 5 (board) or week 7 (close).** This is the single most important rule — a board chart that breaks because of a deprecation is a months-long trust problem.

  ## Post-Deprecation Cleanup
  - Archive (don't delete) the old dashboard for 90 days in case anyone needs to reference it.
  - Tag underlying Looks `deprecated_2024_q1` and remove from explore navigation after 30 days.
  - Run the "did anyone notice" check at +30 days: review the data-team Slack and ticket queue for any references to the old dashboard. Document the lessons in the deprecation log.
tips:
  - "Anchor the timeline around board cycles and finance close, never into them. A deprecation that lands during close is a deprecation that gets reverted."
  - "Always call out metric definition changes explicitly. Silent definition shifts are the single fastest way to lose data-team credibility with finance."
  - "Migrate embedded uses before the dashboard goes away, not after. Slack screenshots and scheduled emails are easy to forget and disproportionately visible when they break."
  - "Archive, don't delete, for at least 90 days. Someone always needs to reference the old version once."
  - "Run a +30-day check after end-of-life. Capture lessons and update the deprecation playbook — most teams improve their deprecation skill three deprecations in a row, then forget."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - dashboard-design-spec
  - self-serve-data-glossary
  - data-request-triage
tags:
  - dashboard
  - deprecation
  - communications
  - bi
  - business-intelligence
---
