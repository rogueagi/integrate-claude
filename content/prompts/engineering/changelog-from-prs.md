---
title: "Generate a customer-facing changelog from merged PRs"
slug: changelog-from-prs
function: engineering
role: documentation
description: "Turn a list of merged pull requests into a clean, customer-readable changelog grouped by impact, with internal-only items filtered out."
useCase: "Use at the end of a release cycle or sprint when you need to ship a public changelog. Engineering teams generate dozens of merged PRs per week, most of which are noise to customers (refactors, dependency bumps, internal tooling). This prompt does the editorial work: filter, group, rewrite in customer language, and flag anything that needs human review."
prompt: |
  You are a senior technical writer who has shipped public changelogs for developer-first SaaS products. Generate a customer-facing changelog entry from the list of merged PRs below.

  Inputs:
  - Product: {{product_name}}
  - Release window: {{release_window}} (e.g., "May 1 to May 14, 2026" or "v3.4.0")
  - Audience: {{audience}} (e.g., backend engineers using our API, admins of our SaaS UI)
  - Merged PR list (title, author, optional description): {{pr_list}}
  - Recent breaking changes or deprecations to highlight: {{breaking_changes}}

  Process:
  1. Categorize each PR into one of: New, Improved, Fixed, Deprecated, Internal-only.
  2. Drop everything in Internal-only from the public changelog (refactors, CI changes, dependency bumps with no behavior change, test additions). List them in a separate "Filtered out" section so the engineering manager can sanity-check.
  3. For each remaining PR, rewrite the title in customer-facing language. Lead with the customer outcome, not the implementation. "Added a Redis-backed rate limiter" becomes "Higher request throughput for high-volume API keys."
  4. Group by category in this order: New, Improved, Fixed, Deprecated.
  5. For Deprecated items, include the removal date if available and a one-line migration pointer.
  6. Flag any PR where the customer impact is unclear from the title alone with [needs review] so a human writes the final copy.

  Output format:

  # {{product_name}} — {{release_window}}

  ## New
  - <one-line customer-facing description>

  ## Improved
  - <one-line customer-facing description>

  ## Fixed
  - <one-line customer-facing description>

  ## Deprecated
  - <one-line customer-facing description, with removal date and migration pointer>

  ---
  ## Filtered out (internal review only)
  - <original PR title> — reason filtered

  Do not invent details that are not in the PR list. If a PR title is ambiguous, mark it [needs review] rather than guessing the customer impact.
variables:
  - "{{product_name}}"
  - "{{release_window}}"
  - "{{audience}}"
  - "{{pr_list}}"
  - "{{breaking_changes}}"
exampleInput: |
  product_name: Vectorline
  release_window: May 1 to May 14, 2026
  audience: backend engineers using our REST API and Python SDK
  pr_list: |
    - "feat: add hybrid search reranking endpoint" (Priya)
    - "fix: NPE in /v1/query when filter is null" (Alex)
    - "chore: bump pydantic to 2.7" (Alex)
    - "feat: add region=eu-west-2 support" (Marcus)
    - "refactor: extract embedding cache to its own module" (Priya)
    - "deprecate: /v1/legacy-search endpoint, removal Sept 1" (Marcus)
    - "feat: SDK retries respect Retry-After header" (Alex)
    - "docs: fix broken links in quickstart" (Sam)
    - "perf: reduce p99 query latency by 40% via index warm-up" (Priya)
    - "ci: add nightly load test" (Sam)
  breaking_changes: /v1/legacy-search will be removed September 1, 2026
exampleOutput: |
  # Vectorline — May 1 to May 14, 2026

  ## New
  - Hybrid search reranking is now available via a dedicated endpoint, so you can combine dense and keyword scores without writing your own merge logic.
  - eu-west-2 is now a supported region for new indexes, with full feature parity to us-east-1.

  ## Improved
  - p99 query latency is roughly 40% lower thanks to index warm-up on cold instances.
  - The Python SDK now respects the Retry-After header on 429 responses, so client-side retries no longer pile on during a rate limit.

  ## Fixed
  - Calls to /v1/query with a null filter no longer return a 500. They now treat null as "no filter" and return the unfiltered top-k.

  ## Deprecated
  - /v1/legacy-search will be removed on September 1, 2026. Migrate to /v1/query with the equivalent filter syntax — the migration guide is linked from the deprecation notice in the API response headers.

  ---
  ## Filtered out (internal review only)
  - "chore: bump pydantic to 2.7" — dependency bump, no behavior change customers see
  - "refactor: extract embedding cache to its own module" — internal refactor
  - "docs: fix broken links in quickstart" — docs hygiene, not changelog material
  - "ci: add nightly load test" — internal tooling
tips:
  - "Pull the PR list directly from GitHub with `gh pr list --state merged --search 'merged:>YYYY-MM-DD'` and paste it in. Cleaner input means cleaner output."
  - "If you have PR descriptions or labels (`type:feat`, `type:fix`), include them in the input. Claude will use them and the categorization gets much more reliable."
  - "Always have an engineer scan the [needs review] items and the Filtered out list before publishing. The model is good but not infallible at customer-impact judgment calls."
  - "For developer audiences, lean into specifics (endpoint names, latency numbers, region codes). Generic language reads as marketing fluff and erodes trust."
  - "Keep a running file of customer-facing language patterns your team likes and feed it back as a style example for the next run."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - feature-announcement-email
  - product-launch-brief
  - meeting-notes-summary
tags:
  - saas
  - changelog
  - release-notes
  - documentation
  - engineering
---
