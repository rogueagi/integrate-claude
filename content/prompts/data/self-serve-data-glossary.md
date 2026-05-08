---
title: "Generate glossary entries for a self-serve data portal"
slug: self-serve-data-glossary
function: data
role: business-intelligence
description: "Produce concise, accurate glossary entries for metrics and terms that appear across dashboards — written for self-serve users who want to know what a number means before they cite it."
useCase: "Use this prompt when building or filling a data glossary, internal wiki, or BI tool's metric tooltip. Generates entries that are short, accurate, and disambiguate the most common confusions — the thing that prevents three teams from each citing 'active users' differently."
prompt: |
  You are a senior BI analyst writing entries for a company data glossary. The audience is anyone who might encounter the term in a dashboard, query, or report — analysts, PMs, sales ops, CS, finance. Entries are short by design.

  Inputs:
  - Term: {{term}}
  - Plain-language intent: {{intent}}
  - Source of truth model / metric: {{source_of_truth}}
  - Known confusions or competing definitions: {{competing_definitions}}
  - Where this term appears: {{appearance_locations}} (dashboards, reports, tools)
  - Owner team: {{owner}}

  Produce a glossary entry with this structure (compact, scannable):

  **{{term}}**

  > One-sentence plain-language definition. Suitable for a tooltip.

  - **Type:** what kind of thing this is — metric, dimension, segment, lifecycle stage, etc.
  - **Unit:** count of X, USD, percentage, etc. (omit if not applicable)
  - **Computed as:** plain-language formula. Pseudo-code or a sentence — not full SQL unless required for clarity.
  - **Source of truth:** the canonical model or metric definition.
  - **Includes / excludes:** the 3–5 most common edge cases, stated plainly.
  - **Often confused with:** 1–2 closely related terms and the difference. Link if relevant.
  - **Common misuse:** the most frequent way this term is cited incorrectly. State plainly.
  - **Owner:** team responsible for the definition.

  ## Example In Context (optional, 1 sentence)
  A short example showing the term used correctly. Skip if the definition is self-evident.

  Rules:
  - Keep the entry under 120 words.
  - Plain language; no jargon without immediate translation.
  - The "includes / excludes" section is the single most important — that's where most disagreements come from.
  - Be honest about ambiguity. If the term has two valid uses in the company, document both and indicate which is canonical.
  - If a term is being deprecated, say so explicitly.

  Tone: precise, short, useful. Glossary entries are read in 30 seconds; write for that.
variables:
  - "{{term}}"
  - "{{intent}}"
  - "{{source_of_truth}}"
  - "{{competing_definitions}}"
  - "{{appearance_locations}}"
  - "{{owner}}"
exampleInput: |
  term: Active Customer
  intent: A customer who is actively using the product. Used loosely across dashboards but means different things to different teams.
  source_of_truth: dim_customers.is_active flag (computed daily); definition documented in metrics layer
  competing_definitions: |
    Product team: customer with at least one session in the last 30 days
    CS team: customer whose subscription is in 'active' status (billing-based)
    Finance: customer who paid an invoice in the last 90 days
    Marketing: customer who hasn't been flagged as churned in our CRM
  appearance_locations: |
    "Customer Health Overview" dashboard (Looker)
    "MRR Bridge" report (finance)
    "Account 360" view in CRM
    Multiple Slack reports
  owner: Analytics engineering team owns the source of truth flag; product, CS, and finance each own their own derived view.
exampleOutput: |
  **Active Customer**

  > A customer with an active paid subscription AND at least one product session in the last 30 days.

  - **Type:** segment / lifecycle status
  - **Computed as:** `dim_customers.is_active = (subscription_status = 'active') AND (last_session_at_utc >= current_date - 30)`
  - **Source of truth:** `dim_customers.is_active`. Recomputed daily.
  - **Includes:** paying customers who have logged in within the last 30 days; multi-seat accounts where any seat has been active.
  - **Excludes:** customers in trial, paused subscriptions, churned customers, and paying customers who haven't logged in for 30+ days (the latter are paying-but-dormant — flagged separately as `is_paying_dormant`).
  - **Often confused with:**
    - **Paying Customer** — broader; includes dormant payers. Use this when the question is about revenue, not engagement.
    - **MAU (Monthly Active User)** — usage-only; ignores subscription status. Includes free / trial users.
  - **Common misuse:** citing "active customers" when the question is really about revenue contribution. Use Paying Customer for revenue cuts; Active Customer for engagement and health.
  - **Owner:** Analytics engineering owns the canonical flag. Each team consuming the metric must use the canonical version, not a redefined one.

  *Example:* "We had 4,210 active customers in March" means paid, active subscriptions with at least one session — not just paid count.

  ---

  *Note for entry maintenance:* the prior product-team and finance-team derived versions are deprecated; their dashboards have been re-pointed to the canonical flag as of April 2024. Any new dashboard citing "active customer" must source from `dim_customers.is_active`.
tips:
  - "Lead with a one-sentence definition that fits a tooltip. If the user doesn't read past line 1, that line should still be correct."
  - "The includes/excludes section is the load-bearing part. Most metric disagreements trace back to a single edge case the definition didn't pin down."
  - "Always document what a term is 'often confused with.' This is where you redirect the misuse before it produces a wrong dashboard."
  - "Be explicit about deprecated definitions. Silently changing a metric and hoping nobody notices is the surest path to broken trust in the data team."
  - "Keep entries short. A glossary that's hard to scan is a glossary nobody opens; the wiki version of a 4-page metric spec belongs in the metric spec, not the glossary."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - metric-definition-spec
  - semantic-layer-naming
  - dashboard-design-spec
tags:
  - data-glossary
  - documentation
  - self-serve
  - bi
  - business-intelligence
---
