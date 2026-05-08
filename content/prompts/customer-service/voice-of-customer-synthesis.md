---
title: "Synthesize Voice of Customer themes from open-text survey responses"
slug: voice-of-customer-synthesis
function: customer-service
role: cx-research
description: "Turn a pile of free-text survey responses into a ranked, evidence-backed set of VoC themes that a CX leader can act on."
useCase: "Use this when you have open-text NPS, CSAT, churn-survey, or onboarding-survey responses that nobody has time to read. The prompt produces a prioritized theme map with verbatims, segment cuts, and recommended next actions — ready to drop into a QBR or roadmap review."
prompt: |
  You are a senior customer research analyst supporting the VP of Customer Experience at {{company_name}}, a {{industry}} company. You will synthesize {{response_count}} open-text survey responses into an actionable Voice of Customer report.

  Source data:
  - Survey type: {{survey_type}} (e.g., post-onboarding NPS, churn exit, quarterly CSAT)
  - Time window: {{time_window}}
  - Segments captured per response: {{segments}} (e.g., plan tier, tenure, ICP fit, CSM owner)
  - Raw responses: {{raw_responses}}

  Produce a synthesis with:

  1. Theme map (5–9 themes). For each theme:
     - Short name and one-sentence definition
     - Volume: how many responses map to it (count and % of total)
     - Sentiment skew: positive / mixed / negative
     - Two to three verbatim quotes (verbatim — no paraphrasing) with respondent segment tag
     - Segment concentration: which segments over-index on this theme
  2. Cross-cuts: where the same theme shows up differently across plan tier, tenure, or persona.
  3. What changed vs. the previous period if {{prior_period_summary}} is provided — call out emerging and fading themes.
  4. Three recommended actions, each tied to a specific theme, with the team that owns it (Product, Support, Onboarding, Pricing, etc.) and a rough effort tag (S/M/L).
  5. Two questions the data cannot answer that warrant a follow-up interview round.

  Rules:
  - Do not invent quotes. If a quote is not in the source, do not include it.
  - Do not collapse contradictory signals into a single theme — surface the tension.
  - Prefer specific operational language ("ramp from trial to paid takes too long") over vague labels ("usability").
  - Order themes by a composite of volume and severity, not volume alone.
variables:
  - "{{company_name}}"
  - "{{industry}}"
  - "{{response_count}}"
  - "{{survey_type}}"
  - "{{time_window}}"
  - "{{segments}}"
  - "{{raw_responses}}"
  - "{{prior_period_summary}}"
exampleInput: |
  company_name: Lumen Analytics
  industry: B2B SaaS (revenue analytics)
  response_count: 184
  survey_type: post-onboarding NPS (day 30)
  time_window: Jan 1 – Mar 31
  segments: plan tier (Starter / Growth / Enterprise), CSM-led vs. self-serve, ICP fit score
  raw_responses: |
    "Setup docs were fine but the Salesforce sync silently failed for two weeks." — Growth, self-serve, ICP 4
    "Our CSM Priya was excellent — she rebuilt our dashboards in one call." — Enterprise, CSM-led, ICP 5
    "I still don't know what the difference is between a 'pipeline view' and a 'forecast view'." — Starter, self-serve, ICP 3
    "Pricing jumped when we added a third seat — felt like a bait and switch." — Growth, self-serve, ICP 4
    "Reports take 40+ seconds to load on our data volume." — Enterprise, CSM-led, ICP 5
    [... 179 more responses ...]
  prior_period_summary: Q4 top themes were (1) integrations breakage, (2) pricing surprise on seat expansion, (3) reporting performance.
exampleOutput: |
  # Lumen Analytics — Day-30 NPS Synthesis (Q1, n=184)

  ## Top themes

  1. **Silent integration failures** — 38 responses (21%), strongly negative.
     Sync jobs (Salesforce, HubSpot, Snowflake) fail without alerting the customer. Concentrated in self-serve Growth (28 of 38). Verbatim: "the Salesforce sync silently failed for two weeks." Verbatim: "found out our HubSpot pipe was stale only because a deal closed-lost in the wrong stage."
     Tension: Enterprise / CSM-led customers do not surface this — likely because the CSM catches it, not because the failure rate is lower.

  2. **Pricing surprise on seat expansion** — 31 responses (17%), negative.
     Same theme as Q4 — has not faded. Growth tier over-indexes (24 of 31). Verbatim: "Pricing jumped when we added a third seat — felt like a bait and switch."

  3. **Reporting performance at scale** — 22 responses (12%), mixed.
     Enterprise-only. Verbatim: "Reports take 40+ seconds to load on our data volume."

  4. **CSM as the product** — 19 responses (10%), strongly positive.
     Enterprise CSM-led only. Verbatim: "Our CSM Priya was excellent — she rebuilt our dashboards in one call."
     Cross-cut: this is great, but it means the self-serve path is failing the same job. See Theme 5.

  5. **Conceptual confusion in the core UI** — 17 responses (9%), negative.
     Starter / self-serve. Verbatim: "I still don't know what the difference is between a 'pipeline view' and a 'forecast view'."

  [Themes 6–8 omitted for brevity]

  ## What changed vs. Q4
  - Emerging: Conceptual UI confusion (new — was not a top theme in Q4).
  - Persistent: Pricing surprise and integration failures — not improving.
  - Fading: Onboarding scheduling complaints (down from 14% to 3%, likely from the new self-scheduling tool).

  ## Recommended actions
  - **Integration health alerts (Product, M)** — Targets Theme 1. Notify the customer in-app and via email when a sync has been stale > 24h.
  - **Seat-expansion pricing transparency (Pricing + PMM, S)** — Targets Theme 2. Show the projected MRR delta in-app before a seat is added.
  - **Self-serve "first dashboard" guided flow (Onboarding, M)** — Targets Themes 4 and 5. Replicate what CSMs do in their first call.

  ## Questions for follow-up interviews
  - For Theme 1: how long does a silent sync failure typically run before the customer notices, and what is the downstream revenue impact?
  - For Theme 4: which 3–4 things does a CSM do in onboarding that we could productize?
tips:
  - "Feed responses with their segment tags inline — segment cuts are where the real insight is, and Claude cannot infer them."
  - "Always include a prior-period summary if you have one. The 'what changed' section is usually the most valuable part of the report for a CX leader."
  - "If you have more than ~300 responses, batch by segment first (e.g., one synthesis per plan tier) and then ask Claude to synthesize the syntheses."
  - "Ban paraphrased quotes explicitly — synthesis prompts otherwise tend to hallucinate plausible-sounding verbatims."
  - "Pair this output with a 30-minute review with Support and CSM leads before sharing it broadly. They'll catch themes the survey missed."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - interview-synthesis
  - survey-question-set
  - jobs-to-be-done-analysis
  - customer-interview-guide
tags:
  - voice-of-customer
  - cx-research
  - survey-analysis
  - synthesis
  - nps
---
