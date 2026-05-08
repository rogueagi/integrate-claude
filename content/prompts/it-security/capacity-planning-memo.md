---
title: "Write a capacity planning memo with growth assumptions"
slug: capacity-planning-memo
function: it-security
role: sre
description: "Produce a capacity planning memo that turns growth assumptions and current utilization into specific infrastructure asks and risks."
useCase: "Use this prompt at the start of a planning cycle, before a known traffic event (Black Friday, product launch), or when finance pushes back on cloud spend. The output names the assumptions, the math, and the explicit asks — so leadership can decide rather than negotiate."
prompt: |
  You are an SRE writing a capacity planning memo. Audience: engineering leadership and finance. Tone: numerate, opinionated, willing to name uncertainty.

  Inputs:
  - Service or system: {{system}}
  - Time horizon: {{horizon}} (e.g., next 12 months)
  - Current utilization metrics: {{current_metrics}}
  - Growth assumptions: {{growth_assumptions}}
  - Known events / launches in horizon: {{events}}
  - Current cost and infra footprint: {{current_cost}}
  - Constraints: {{constraints}} (region, vendor, contract)

  Produce:

  1. **TL;DR** (3–5 bullets): the ask, the cost, the headline risk
  2. **Current state**: utilization across the dimensions that matter (CPU, memory, connections, IOPS, throughput, $) — with current peak vs avg
  3. **Demand model**: how baseline traffic translates to resource needs (e.g., 1 RPS = X CPU-ms, Y DB connections). Show the unit economics.
  4. **Growth scenarios**: low / base / high. For each: assumed growth rate, derived peak demand, infra needed
  5. **Headroom and breakpoints**: where the system breaks under each scenario; explicit "we hit the wall at X RPS"
  6. **Recommended plan**: what to provision/scale, when, in what order. Pre-event vs steady-state.
  7. **Cost**: monthly delta and one-time, broken out by component
  8. **Risks and unknowns**: list the assumptions you're least confident in; what would change the recommendation
  9. **Decision needed**: a clear ask of the reader — approval, budget, sequencing

  Use tables. Show your arithmetic. Auditors and engineers should both find this credible.
variables:
  - "{{system}}"
  - "{{horizon}}"
  - "{{current_metrics}}"
  - "{{growth_assumptions}}"
  - "{{events}}"
  - "{{current_cost}}"
  - "{{constraints}}"
exampleInput: |
  system: search-api + OpenSearch cluster (4-node m6g.2xlarge)
  horizon: 12 months (FY26)
  current_metrics: |
    - search-api: 800 RPS peak, 200 avg; 60% CPU peak; 18 pods
    - OpenSearch: 70% heap peak, 55% CPU peak, 1.2TB indexed of 2TB cluster capacity
    - Postgres connections: 220/500 peak
  growth_assumptions: |
    - Product PM forecasts 40% YoY query growth (aggressive launch in Q3)
    - International expansion (EU launch) adds ~25% traffic in Q4
    - SKU catalog doubles by mid-year (impacts index size, not query volume)
  events: |
    - EU launch Sept 2026
    - Black Friday Nov 2026
    - New mobile app launch Q2 (expected 15% lift in queries)
  current_cost: |
    - search-api EKS: ~$3,200/mo
    - OpenSearch: ~$4,800/mo
    - data transfer + ancillary: ~$600/mo
    - total: ~$8,600/mo
  constraints: |
    - Single region today (us-east-1); EU launch will require eu-west-1 footprint
    - 3-year reserved instances on OpenSearch nodes purchased Q4 2025
    - Finance wants total infra delta capped at +35% YoY
exampleOutput: |
  # Capacity Plan: search-api + OpenSearch — FY26

  Author: SRE. Reviewers: Eng leadership, Finance, Search PM. Date: 2026-05-07.

  ## TL;DR

  - **Asking for**: $4,200/mo additional steady-state by Q3, $1,800/mo one-time pre-Black-Friday burst capacity, plus eu-west-1 footprint of $5,800/mo from Sept (offset $0 today)
  - **Total FY26 ask**: ~$11,800/mo by year-end vs $8,600/mo today (+37% YoY) — slightly above the 35% Finance cap; case for the overage below
  - **Headline risk**: SKU catalog doubling will outgrow current OpenSearch storage by Q3 regardless of traffic growth — this is a non-negotiable scale-up
  - **Plan**: scale OpenSearch to 6 nodes by August, add eu-west-1 cluster in September, +50% search-api replicas for Black Friday week
  - **Decision needed**: approve OpenSearch scale-up by July 1 (4-week procurement lead time on reserved capacity)

  ## Current state

  | Metric | Avg | Peak | Capacity | Headroom |
  |---|---|---|---|---|
  | search-api RPS | 200 | 800 | ~1,400 (replica-bound) | 75% |
  | search-api CPU | 22% | 60% | 100% | 40% |
  | OpenSearch CPU | 30% | 55% | 100% | 45% |
  | OpenSearch heap | 50% | 70% | 85% (safe ceiling) | 15% |
  | OpenSearch storage | n/a | 1.2 TB | 2.0 TB | 40% |
  | Postgres connections | 120 | 220 | 500 | 56% |

  Tightest current constraint: OpenSearch heap (15% headroom).

  ## Demand model

  Empirical from production:
  - 1 RPS query traffic ≈ 0.014 OpenSearch CPU-cores at current index size
  - 1 RPS ≈ 0.27 Postgres connection-equivalent (transient)
  - Index size scales linearly with SKU catalog
  - Heap usage scales sublinearly with index size — ~0.6× factor in our use pattern
  - Cross-region adds ~30ms latency that we'll absorb in budget; doesn't change CPU model

  ## Growth scenarios

  Three scenarios for combined query growth (PM + mobile + EU):

  | Scenario | YoY growth | Q4 peak RPS | OpenSearch CPU at peak | Headroom |
  |---|---|---|---|---|
  | Low (only PM) | 40% | 1,120 | 77% | 23% |
  | Base (PM + mobile + half EU) | 60% | 1,280 | 88% | 12% — over safe |
  | High (PM + mobile + full EU + BF surge 1.6×) | 100% | 2,050 | 144% — failure | negative |

  Base case puts us above safe heap and CPU ceilings without scale-up. High case is a guaranteed outage at current capacity.

  ## Headroom and breakpoints

  At current 4-node OpenSearch:
  - **Heap wall**: 1.6 TB index size (catalog double = ~Q3) — heap pressure begins regardless of traffic
  - **CPU wall**: ~1,200 RPS sustained — base scenario hits this in Q4
  - **search-api wall**: ~1,400 RPS at current 18-pod cap; raising replica count is cheap if EKS node group has room (it does, today)

  Black Friday compounds: 1.6× surge over baseline puts even Low scenario near the wall.

  ## Recommended plan

  | When | Action | Why | Cost delta |
  |---|---|---|---|
  | July | Scale OpenSearch to 6 nodes (m6g.2xlarge → 6× same) | Catalog doubling drives index past safe heap | +$2,400/mo |
  | August | Raise search-api HPA max from 18 → 30 pods | Pre-position for EU launch | +$800/mo (only paid when scaled) |
  | September | Stand up eu-west-1 OpenSearch (3 nodes) + search-api EKS footprint | EU launch, latency requirement | +$5,800/mo |
  | Mid-November | Pre-Black-Friday burst: temporarily upsize OpenSearch nodes to m6g.4xlarge for 3 weeks | Surge headroom for Black Friday week | +$1,800 one-time |
  | January | Reassess — likely keep eu-west-1 at steady state, drop BF burst | Steady state | (return to plan) |

  Sequencing constraint: OpenSearch scale-up requires 4 weeks procurement lead time on reserved capacity — approval needed by July 1.

  ## Cost summary

  | Item | Today | Year-end FY26 | Delta |
  |---|---|---|---|
  | search-api EKS (us-east) | $3,200 | $4,000 | +$800 |
  | search-api EKS (eu-west) | $0 | $1,200 | +$1,200 |
  | OpenSearch (us-east) | $4,800 | $7,200 | +$2,400 |
  | OpenSearch (eu-west) | $0 | $4,600 | +$4,600 |
  | Data transfer + ancillary | $600 | $1,000 | +$400 |
  | **Steady-state total** | **$8,600** | **$18,000** | **+$9,400 (+109%)** |
  | One-time BF burst | — | $1,800 | $1,800 |

  Caveat: the +109% reflects EU footprint, which is a launch decision, not capacity drift. Excluding EU, US-only delta is +$3,600/mo (+42%). The 35% cap is technically breached; case for overage is "EU launch is approved separately and adds revenue, not just cost."

  ## Risks and unknowns

  - **PM growth forecast confidence: medium-low.** 40% YoY assumes mobile launch hits its target; if mobile slips to 2027, base scenario looks like low scenario.
  - **Catalog size assumption is firm** — already in flight; will happen regardless of traffic.
  - **EU launch traffic mix uncertain**: assuming similar query patterns to US. If EU users have longer-tail queries, OpenSearch CPU per RPS could be 1.2–1.4×. Watching closely once first 1% of traffic ships.
  - **Reserved capacity decision**: scaling OpenSearch nodes inside the existing 3-year reservation is fine; adding eu-west-1 is on-demand year 1 (committed pricing once stable).

  ## Decision needed

  By **July 1, 2026**:
  - Approve OpenSearch us-east-1 scale-up (+$2,400/mo)
  - Approve eu-west-1 footprint contingent on EU launch go/no-go decision (+$5,800/mo)
  - Approve Black Friday burst budget ($1,800 one-time)

  By **September 1**:
  - Reconfirm growth model with 60-day actuals from mobile launch and recalibrate
tips:
  - "Show your unit economics. 'We need more capacity' is hard to argue with; '0.014 OpenSearch CPU-cores per RPS' invites a real conversation."
  - "Always present low/base/high scenarios. A single number gets argued; three options get a decision."
  - "Name the breakpoints. 'We hit the wall at 1,200 RPS' is more useful than 'capacity is constrained.' Specifics force action."
  - "Note your assumption confidence. 'Medium-low' on a growth forecast is honest and helps the reader weight your conclusion."
  - "AI assistance is not a replacement for security review by qualified professionals. Have a senior SRE and your finance partner review the unit-economics math and reservation/commitment math before submitting."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - slo-definition-doc
  - deployment-strategy-doc
  - incident-response-playbook
tags:
  - capacity-planning
  - sre
  - infrastructure
  - cost
  - planning
---
