---
title: "Spec a new dashboard with audience and layout"
slug: dashboard-design-spec
function: data
role: business-intelligence
description: "Produce a dashboard design spec — audience, decisions, metrics, layout, and what to leave out — before any tile is built."
useCase: "Use this prompt when scoping a new dashboard request from a stakeholder. Forces the audience-and-decisions framing that prevents the standard 30-tile dashboard nobody opens."
prompt: |
  You are a senior BI developer scoping a new dashboard. The stakeholder is asking for "a dashboard for X" — your job is to translate that into a specific, decision-driven spec before opening the BI tool.

  Inputs:
  - Stakeholder request (verbatim): {{stakeholder_request}}
  - Stakeholder role and context: {{stakeholder_role}}
  - Decisions or actions the dashboard should support: {{decisions}}
  - Cadence of those decisions: {{cadence}} (daily, weekly, monthly, ad-hoc)
  - Source of truth tables / models available: {{source_tables}}
  - BI tool: {{bi_tool}}
  - Existing dashboards that overlap: {{existing_dashboards}}
  - Constraints: {{constraints}} (refresh latency, access permissions, cost)

  Produce a dashboard spec with these sections:

  ## Audience and Decisions (the framing)
  - **Primary audience:** who opens this every {{cadence}}
  - **Decisions:** the 2–4 specific decisions or actions this dashboard should support. Be concrete: "Decide which 3 channels to reallocate spend to next week," not "Understand marketing performance."
  - **What this dashboard is not for:** out-of-scope uses that should redirect to other dashboards or ad-hoc analysis.

  ## Top-Level KPIs (the headline tiles)
  3–5 metrics that go at the top of the dashboard, with for each:
  - The metric, with a clean definition
  - Comparison frame (vs. last period, vs. target, vs. baseline)
  - Source model / measure name in {{bi_tool}}
  - Why this is in the headline (which decision does it support)

  ## Detail Sections
  Group the remaining content into 2–4 sections, each with a clear question it answers. For each section:
  - The question (e.g., "Where is conversion dropping?")
  - The 3–6 charts that answer it
  - For each chart: chart type, dimensions, metric, default time range
  - Any filter controls

  ## Layout
  Describe the layout in plain text — top row, second row, etc. Keep the dashboard to one screen for the headline; details below the fold.

  ## What to Leave Out
  Three to five things that are tempting but should not be on this dashboard:
  - Tiles that don't tie to a decision
  - Tiles that overlap with another canonical dashboard
  - Tiles that require manual interpretation the audience won't do
  - Vanity metrics

  ## Filters and Drilldowns
  - Global filters (date range, segment, geo)
  - In-tile drilldown behavior
  - Saved-view requirements (e.g., per-region default views)

  ## Performance and Maintenance
  - Expected query cost / refresh latency
  - Owner team for maintenance
  - Review cadence (when this dashboard gets revisited)

  ## Open Questions
  Two to four things you need from the stakeholder before building.

  Tone: opinionated, decision-driven, willing to push back on requests that don't tie to action. The best dashboard spec eliminates 60% of the original request.
variables:
  - "{{stakeholder_request}}"
  - "{{stakeholder_role}}"
  - "{{decisions}}"
  - "{{cadence}}"
  - "{{source_tables}}"
  - "{{bi_tool}}"
  - "{{existing_dashboards}}"
  - "{{constraints}}"
exampleInput: |
  stakeholder_request: "Hey can you build us a marketing dashboard? We need to see all our channels and how they're performing — spend, CAC, conversion, the funnel. Should be everything."
  stakeholder_role: VP of Marketing at a B2B SaaS company; she runs a weekly Friday review with her team leads (paid, content, lifecycle).
  decisions: |
    1. Decide which paid channels to reallocate spend across next week
    2. Decide which content / SEO topics are working enough to invest more in
    3. Identify when CAC has broken from its trend so we can investigate
  cadence: Weekly Friday review; some tiles glanced at daily by the paid team
  source_tables: |
    fct_marketing_spend, fct_marketing_clicks, fct_signups, fct_trials, fct_subscriptions
    dim_channels, dim_campaigns, dim_content, dim_dates
  bi_tool: Looker
  existing_dashboards: |
    "Acquisition Overview" (high-level CAC and signups, exec-facing) — overlaps but at less granular cuts
    "Paid Channels Deep Dive" (paid team's daily ops dashboard) — overlaps for paid-only views
  constraints: |
    Looker dashboards above ~30 tiles slow to load badly
    Weekly cadence on most data; daily on paid spend
    No PII; no individual-customer detail (use existing CRM tooling for that)
exampleOutput: |
  ## Audience and Decisions
  - **Primary audience:** VP Marketing and her three team leads (paid, content, lifecycle), in the Friday weekly review. Loaded once a week, scanned in 15 minutes.
  - **Decisions this dashboard supports:**
    1. Reallocate paid spend across channels for next week.
    2. Identify content and SEO topics worth doubling down on.
    3. Spot CAC anomalies that warrant investigation.
  - **Not for:** daily paid ops (use the existing Paid Channels Deep Dive); exec-facing CAC narrative (use Acquisition Overview); individual lead pursuit (use CRM); attribution debates (use a separate attribution review dashboard, not yet built).

  ## Top-Level KPIs (headline tiles, top of dashboard)
  1. **Blended CAC, this week vs. trailing 4-week average vs. target.** From `fct_marketing_spend` ÷ `fct_subscriptions.new_paid` over matched windows. Triggers decision 3.
  2. **Total marketing-attributed paid customers, this week vs. last week vs. plan.** From `fct_subscriptions` filtered to marketing-source. Volume read.
  3. **Total marketing spend, this week vs. last week vs. plan.** From `fct_marketing_spend`. Spend pacing.
  4. **Marketing-sourced ARR added this week.** Quality companion to the volume metric.

  ## Detail Sections

  ### Section 1: Where Is Spend Going and What Is It Producing? (decision 1)
  - **Spend by channel, last 4 weeks** — stacked bar by channel × week. From `fct_marketing_spend`.
  - **CAC by channel, last 4 weeks** — line chart, one line per top-5 channel. Channels with too few signups are suppressed (min 20 signups/week to display).
  - **Cost per qualified opportunity by channel** — table sortable by CAC and trend.
  - **Channel mix shift** — heatmap of (channel × week) with spend share, last 8 weeks. Helps see whether spend has been quietly shifting.

  Filter: date range (default last 4 weeks); channel multi-select.

  ### Section 2: Content and SEO Performance (decision 2)
  - **Top 20 content pieces by signups, last 90 days.** Table with: content title, channel (organic/paid), signups, CAC.
  - **SEO trended sessions and signups, last 12 weeks.** Line chart, two axes (sessions left, signups right).
  - **New-content signup trajectory** — content published in the last 90 days, with weeks-since-publish on x-axis and cumulative signups on y. Identifies which new content is compounding.

  Filter: content topic; channel.

  ### Section 3: CAC Trend and Anomaly Watch (decision 3)
  - **Blended CAC trended weekly, last 26 weeks** — line chart with shaded ±1σ band based on 26-week rolling. CAC outside the band is a flag.
  - **CAC by acquisition channel, last 13 weeks** — small multiples, one panel per channel.
  - **Spend × volume × CAC table** — current week vs. 4-week avg by channel, with deltas highlighted.

  ## Layout
  - **Row 1 (above the fold):** the four headline KPI tiles, each with a sparkline below.
  - **Row 2 (Section 1):** 4 tiles in a 2×2 grid.
  - **Row 3 (Section 2):** 3 tiles, full width for the table.
  - **Row 4 (Section 3):** 3 tiles. The CAC trend with band is full width, the rest in a 2-column.

  Total: 14 tiles. Well below the 30-tile slowness threshold. Decision-anchored.

  ## What to Leave Out
  - **Email open rates and per-send metrics.** Lifecycle's existing dashboard handles this; including it here invites debate over an attribution model that doesn't tie to weekly decisions.
  - **Per-customer revenue or retention.** Out of scope — different dashboard, different team.
  - **Multi-touch attribution charts.** Attribution is a separate conversation; including it here turns every weekly review into an attribution debate.
  - **Funnel-by-funnel drilldown for every channel.** Tempting but each becomes a separate sub-dashboard. Build the parent dashboard first; spawn channel-specific drilldowns only if the team uses the parent for 4+ weeks.
  - **Brand search vs. non-brand split.** Important for SEO but should live in the SEO team's dashboard, not the leadership review.

  ## Filters and Drilldowns
  - **Global filters:** date range (default last 4 weeks; presets for 7/30/90 days); channel multi-select.
  - **Drilldowns:** every channel-aggregated tile drills to per-campaign breakdown; every content tile drills to a single-content view.
  - **Saved views:** "Last week" (default for Friday review), "Last 4 weeks," "Last quarter."

  ## Performance and Maintenance
  - Expected refresh: nightly for most; paid spend tiles refresh every 4h.
  - Owner: BI team.
  - Review cadence: re-evaluate the dashboard's tiles every 6 months. Tiles not viewed in 60 days are candidates for removal.

  ## Open Questions
  1. **Is "marketing-attributed" first-touch, last-touch, or a model?** Need a single answer before building CAC tiles, since the existing Acquisition Overview uses last-touch.
  2. **Are paid social and paid search bundled or separated as channels?** Affects channel mix tiles.
  3. **Is there a target CAC per channel, or only a blended target?** Affects the comparison frame.
  4. **Confirm spend data is loaded daily by 9am UTC.** If later, the Friday review may see stale data.
tips:
  - "Always start with the decisions. A dashboard that doesn't enable a specific decision is a dashboard nobody opens twice."
  - "The headline tiles must answer 'are we okay?' in 30 seconds. If the audience has to scroll to find a target comparison, the dashboard isn't doing its job."
  - "Aggressively cut tiles. Every tile has a maintenance cost; tiles that don't drive a decision still cost the BI team time when something changes upstream."
  - "Spec what the dashboard is NOT for. Out-of-scope uses redirect to other dashboards and prevent your dashboard from accumulating every passing request."
  - "Always include a review cadence. Dashboards rot — without a scheduled review, you'll be debugging tiles built for someone who left 18 months ago."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - data-storytelling-deck-outline
  - dashboard-deprecation-comms
  - exec-dashboard-narrative
tags:
  - dashboard
  - bi
  - design-spec
  - looker
  - business-intelligence
---
