---
title: "Write a blameless postmortem from incident notes"
slug: postmortem-writeup
function: it-security
role: sre
description: "Convert raw incident notes into a structured blameless postmortem with timeline, contributing factors, and tracked action items."
useCase: "Use this prompt the day after a SEV1 or SEV2 incident, when you have a Slack channel full of timestamped messages and need to turn it into a document the team and leadership can review. The output is honest, blameless, and actionable — not a CYA narrative."
prompt: |
  You are an experienced SRE writing a blameless postmortem. Convert the incident notes below into a postmortem document. Be honest about what went wrong, blameless about who did what, and specific about action items.

  Incident:
  - Title: {{title}}
  - Severity: {{severity}}
  - Start / detection / resolution timestamps: {{timestamps}}
  - Service(s) impacted: {{services}}
  - Customer impact (qualitative + quantitative): {{customer_impact}}

  Raw notes / timeline source:
  ```
  {{notes}}
  ```

  Produce a postmortem with these sections:

  1. **Summary** (3 sentences): what happened, customer impact, why it ended
  2. **Impact**: numbers — duration, affected users, revenue, SLO budget consumed
  3. **Timeline**: chronological, UTC, with detection/declaration/mitigation/resolution markers; weave in what was happening for the user
  4. **Root cause**: technical sequence of events that produced the failure
  5. **Contributing factors**: organizational, tooling, design factors — separate from "the proximate cause." Use 5 Whys-style framing without rehashing 5 Whys explicitly.
  6. **What went well**: actually call out what worked — alerting, runbook, comms, fast mitigation
  7. **What went poorly**: blameless. Critique systems and decisions, never people.
  8. **Lessons**: 3–5 takeaways — generalizable, not just "we'll add a check"
  9. **Action items**: each with owner, priority (P0/P1/P2), due date, tracking link placeholder. Include preventive AND detective controls.
  10. **Open questions**: things still unknown

  Tone: blameless but not sanitized. Auditors and engineers should both find it useful. No "individual error" framing — find the system that allowed the error.
variables:
  - "{{title}}"
  - "{{severity}}"
  - "{{timestamps}}"
  - "{{services}}"
  - "{{customer_impact}}"
  - "{{notes}}"
exampleInput: |
  title: search-api outage from OpenSearch index corruption
  severity: SEV1
  timestamps: Started 2026-04-23 14:02 UTC, detected 14:11 UTC, resolved 15:47 UTC
  services: search-api, web checkout (degraded)
  customer_impact: ~1h45m. Estimated 31% of search queries returned empty results during the window. Approx 4,200 abandoned checkouts. No data loss.
  notes: |
    14:01 — Maria deployed change to update OpenSearch mapping (added new analyzer for product titles). PR #4421.
    14:02 — Reindex job kicked off. Job log shows "Mapping conflict on field title.raw — recreating index"
    14:09 — First customer complaint in #cs-tickets ("search broken")
    14:11 — Datadog monitor "search zero-result rate > 15%" fired
    14:11 — Page to search-oncall (Devon)
    14:14 — Devon ack'd. Started investigation
    14:18 — Devon: "I see zero-result rate spiking, looking at OpenSearch"
    14:22 — Devon: "Index search-products-v17 is in red state"
    14:25 — Maria joined channel: "I deployed the mapping change at 14:01, could be related"
    14:28 — IC declared (Devon). Comms lead: Priya
    14:30 — Statuspage updated: "Search degraded"
    14:35 — Decision: roll back to previous index search-products-v16 (still on disk)
    14:42 — Rollback CLI errored: alias didn't switch because v16 was missing one document (had been deleted between v16 build and v17 build)
    14:55 — Devon force-promoted v16 with --ignore-missing flag (manual)
    15:02 — Search starting to recover for ~70% of queries
    15:18 — Remaining 30% traced to cache poisoning — Redis still serving zero-result responses cached during outage
    15:25 — Cache flushed
    15:40 — All metrics back to baseline
    15:47 — IC declared resolved. Statuspage cleared.
    Notes: rollback procedure was not in runbook — Devon improvised. Cache TTL on zero-result responses was 60min, never reviewed.
exampleOutput: |
  # Postmortem: search-api outage from OpenSearch index corruption (PG-2026-04-23)

  **Severity**: SEV1
  **Date**: 2026-04-23
  **Authors**: Devon (IC), Priya (Comms), Maria (deploy author). Reviewer: SRE lead.
  **Status**: Draft for review

  ## 1. Summary

  At 14:02 UTC on April 23, a deploy that updated an OpenSearch field analyzer triggered a mapping conflict that left the new search index in a red state, causing ~31% of search queries to return zero results for 1 hour 45 minutes. Recovery required a manual rollback to a prior index, complicated by a missing-document edge case that wasn't anticipated by the rollback tooling. A 60-minute cache TTL on zero-result responses extended user-visible impact beyond the index recovery.

  ## 2. Impact

  - Duration of customer impact: 14:02–15:47 UTC (1h 45m)
  - Search queries with zero results during window: ~31% (vs ~5% baseline)
  - Abandoned checkouts directly attributable: ~4,200
  - SLO budget consumed: ~85% of monthly availability budget for search-api
  - No data loss; no security impact

  ## 3. Timeline (UTC)

  - **14:01** — Maria deploys PR #4421 (analyzer change). Reindex job starts.
  - **14:02** — *Incident start*. Reindex hits mapping conflict on `title.raw`; index goes red.
  - **14:09** — First customer report in `#cs-tickets`.
  - **14:11** — *Detection*. Datadog monitor "zero-result rate > 15%" fires; Devon paged.
  - **14:14** — Devon acks page.
  - **14:22** — Devon identifies red index `search-products-v17`.
  - **14:25** — Maria joins channel, links the deploy.
  - **14:28** — *Incident declared*. IC: Devon. Comms: Priya.
  - **14:30** — Statuspage: "Search degraded".
  - **14:35** — Decision to roll back to `search-products-v16`.
  - **14:42** — Rollback fails — v16 missing a document deleted between v16 and v17 builds; alias-switch tooling refuses inconsistent state.
  - **14:55** — *Mitigation*. Devon manually force-promotes v16 with `--ignore-missing`.
  - **15:02** — Recovery starts; ~70% of queries succeed.
  - **15:18** — Remaining 30% traced to Redis serving cached zero-result responses (60-min TTL).
  - **15:25** — *Mitigation 2*. Redis cache flushed for search namespace.
  - **15:40** — Metrics back to baseline.
  - **15:47** — *Resolution declared*. Statuspage cleared.

  ## 4. Root cause

  The deploy added an analyzer to the `title` field. The reindex job recreates the index when there's a mapping conflict. During the recreate, the new index entered red state because the analyzer change was incompatible with an existing custom analyzer dependency in the template — a configuration in `index_template_v3.json` that the deploy author didn't know existed. The cluster did not roll back the index automatically; it left v17 in red and the alias still pointing at v17.

  ## 5. Contributing factors

  - **Index template ownership unclear**: `index_template_v3.json` was modified by a different team six months ago. There was no warning that an analyzer change in this PR would conflict with that template.
  - **Reindex job has no pre-flight validation**: the job runs the change against prod; there is no staging or shadow-index dry run that would have caught the mapping conflict.
  - **Rollback tooling assumes consistency**: the alias-switch tool refuses to switch aliases when the target index is missing documents present in the live one. This is correct as a default, but the tool has no documented escape hatch — Devon improvised the `--ignore-missing` flag from reading the source code.
  - **Cache TTL on zero-result responses was never reviewed**: 60 minutes is twice the typical TTL for this service; it amplified the user-visible duration well past the actual fix.
  - **Runbook gap**: the runbook covers "OpenSearch slow" but not "OpenSearch red". Devon was navigating without explicit guidance.

  ## 6. What went well

  - Datadog monitor fired within 9 minutes of impact start — well under our 15-minute detection target.
  - Comms cadence was on time and clear; CS team had talking points by 14:35.
  - Maria proactively joined the incident channel and surfaced the deploy correlation, which cut investigation time.
  - The decision to roll back was made within 25 minutes of detection, before debate consumed time.

  ## 7. What went poorly

  - Pre-deploy validation didn't exist for index mapping changes — these are exactly the changes that benefit from staging.
  - The rollback procedure required undocumented improvisation. Devon's read of the tool's source code added ~10 minutes to recovery.
  - Cache TTL extended the incident by ~15 minutes after the underlying fix.
  - Detection threshold (15% zero-result rate) is too lenient; baseline is 5–6% so a sustained >10% would have detected sooner.

  ## 8. Lessons

  1. **Mapping changes are deploys, not configuration tweaks** — they need the same staging discipline as code.
  2. **Rollback tools should fail loudly, but with a documented override path** — refusing inconsistent state is correct; making the override require source-reading is not.
  3. **Cache TTL is part of incident duration** — every cache layer needs a documented flush procedure and is implicitly part of any related runbook.
  4. **Index ownership is a real thing** — shared OpenSearch templates need explicit owners and a contract for changes.
  5. **Detection thresholds drift from reality** — a 15% threshold made sense when baseline was 12%; we're at 5% now and need to recalibrate.

  ## 9. Action items

  | # | Item | Owner | Priority | Due | Tracking |
  |---|---|---|---|---|---|
  | 1 | Add pre-flight mapping validation step in reindex job (run against shadow index, fail deploy on red) | Maria | P0 | 2026-05-07 | `<linear:SE-2104>` |
  | 2 | Document `--ignore-missing` rollback procedure in search runbook | Devon | P0 | 2026-04-30 | `<linear:SE-2105>` |
  | 3 | Reduce zero-result cache TTL from 60 min to 5 min; flush procedure documented | Maria | P1 | 2026-05-14 | `<linear:SE-2106>` |
  | 4 | Recalibrate Datadog zero-result alert threshold to 10% (from 15%) and add a 25% page-immediately tier | Devon | P1 | 2026-05-07 | `<linear:SE-2107>` |
  | 5 | Document ownership and change protocol for shared `index_template_*.json` files | Search team lead | P1 | 2026-05-21 | `<linear:SE-2108>` |
  | 6 | Add tabletop exercise for "OpenSearch red index" scenario to next on-call drill | SRE | P2 | 2026-06-15 | `<linear:SRE-880>` |

  ## 10. Open questions

  - Are there other shared OpenSearch templates with the same ownership ambiguity? Audit needed.
  - Should we pursue a blue-green index strategy (deploy to v17 alongside v16, switch alias only after green) versus today's in-place re-create?
  - Would a synthetic search-quality monitor (run a known query, expect non-zero results) have caught this faster than the rate-based alert? Worth piloting.
tips:
  - "Blameless does not mean sanitized. Critique systems, decisions, and tools sharply. Never name an individual as the cause — they responded to the system you gave them."
  - "Action items without owners and dates are decoration. Every item gets a name and a date or it doesn't go in the doc."
  - "Lessons should generalize. 'We will add a validation step' is an action item. 'Configuration changes are deploys' is a lesson — it applies beyond this incident."
  - "Write the timeline in past tense, anchored in UTC. Time-zone confusion in postmortems is its own contributing factor at distributed companies."
  - "AI assistance is not a replacement for security review by qualified professionals. Postmortems involving security or data exposure should be reviewed by your security lead before publication."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - incident-response-playbook
  - runbook-from-alert
  - slo-definition-doc
tags:
  - postmortem
  - sre
  - incident-response
  - blameless
  - reliability
---
