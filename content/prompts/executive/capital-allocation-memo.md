---
title: "Memo recommending capital allocation across initiatives"
slug: capital-allocation-memo
function: executive
role: board-prep
description: "Draft a capital allocation memo that recommends how to deploy a defined budget across competing initiatives, with the trade-offs made explicit and a clear recommendation."
useCase: "Use this when leadership has a fixed amount of capital to deploy — annual plan, post-fundraise, surplus from outperformance — and several initiatives are competing for it. Most allocation decisions get made in meetings without a written record of the trade-offs. This prompt forces a memo that holds up to scrutiny six months later, when the team is asking why a particular bet didn't get funded."
prompt: |
  You are a former operating CFO who has run capital allocation reviews at scaleups and PE-backed companies. Draft a capital allocation memo for {{company_name}}.

  Inputs:
  - Company and stage: {{company_name}}, {{stage}}
  - Total capital being allocated: {{total_capital}}
  - Allocation horizon: {{horizon}} (typically 12 or 18 months)
  - The strategic context driving this allocation: {{strategic_context}}
  - The initiatives competing for capital, with each one's ask, owner, and case: {{initiatives}}
  - Constraints — what we cannot underfund (e.g., compliance, key product commitments): {{constraints}}
  - The CEO's strategic priority bias: {{ceo_bias}}
  - The CFO's discipline frame (return threshold, payback expectation): {{cfo_frame}}

  Produce a memo with these sections:

  ## Recommendation (One Page)
  Allocation table with the dollar amount, owner, expected outcome, and rationale for each initiative funded. Total reconciles to {{total_capital}}.

  ## The Strategic Context
  Two paragraphs. Why this allocation conversation now, what the company is trying to achieve in {{horizon}}, and how this allocation maps to that.

  ## The Initiatives Considered
  For each initiative in {{initiatives}}:
  - **Ask:** the requested amount and the case
  - **Strategic fit:** how it serves the {{strategic_context}}
  - **Expected return:** ARR impact, payback timing, and the assumption strength (proven / plausible / hopeful)
  - **What happens if we underfund:** the realistic outcome at half the ask
  - **What happens if we don't fund:** the realistic outcome at zero
  - **The recommendation for this initiative:** fully fund / partially fund / defer / decline, with reasoning

  ## The Trade-Offs Made Explicit
  The two or three places where the recommendation chose one initiative over another. Name the loser. Explain the choice. Acknowledge the cost.

  ## What This Allocation Is Deliberately Not Doing
  Three things this allocation is choosing not to fund. The reasoning. The conditions under which we'd revisit.

  ## Risk On The Recommended Plan
  Three risks specific to this allocation, each with the early-warning indicator.

  ## What Triggers A Revision
  The events or thresholds that would prompt the leadership team to revisit this allocation before the {{horizon}} ends. Be specific — a metric, a competitive event, a market shift.

  ## Decision Asked
  The specific decision asked of leadership (or the board, if applicable), the date by which it needs to be approved, and the implementation start date if approved.

  Constraints:
  - Be skeptical of expected returns. Label each as proven / plausible / hopeful. Hopeful returns rarely arrive on schedule.
  - Take a position. Do not list options without a recommendation.
  - Force the trade-off section. Allocation that doesn't name a loser is not allocation, it's accounting.
  - Reconcile the total. Math errors here destroy credibility.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{total_capital}}"
  - "{{horizon}}"
  - "{{strategic_context}}"
  - "{{initiatives}}"
  - "{{constraints}}"
  - "{{ceo_bias}}"
  - "{{cfo_frame}}"
exampleInput: |
  company_name: Vantage Systems
  stage: Series B SaaS, post-Series-C, $31.6M ARR, 180 employees
  total_capital: $24M of incremental investment capital available for the next 18 months (above committed baseline)
  horizon: 18 months (Q2 2027 through end of 2028)
  strategic_context: post-Series-C, the company is committing to healthcare-vertical leadership in the US, with breakeven targeted by Q4 2027 and 2028 as the year of category dominance
  initiatives: 1) Healthcare GTM expansion ($10M ask, CRO owner) — sales reps, CS pod, partnerships, vertical marketing; expected $14M new ARR in 18mo. 2) AI module roadmap acceleration ($6M ask, CPO owner) — clinical workflow and payer-side modules; expected $5M ARR + retention improvement. 3) EU healthcare entry ($8M ask, VP International owner) — UK + Germany pilot, country managers, compliance setup; expected $3M ARR by end of horizon, foothold for 2029. 4) Platform infrastructure ($4M ask, CPO owner) — multi-tenancy redesign, data warehouse-native scaling, security investments; no direct ARR but unblocks enterprise expansion. 5) Engineering hiring above flat plan ($5M ask, CPO owner) — 12 senior engineers across product, AI, infra; supports all of the above. 6) Brand and category marketing ($3M ask, VP Marketing owner) — vertical thought leadership, conferences, analyst relations; long-cycle return.
  constraints: must hold breakeven by Q4 2027; AI module commercial momentum is non-negotiable; security/compliance investments cannot be cut; key engineering retention investment (~$1.5M of the engineering hiring ask redirects to retention if any senior engineer departs)
  ceo_bias: CEO believes US healthcare focus is the highest-leverage place to put dollars and EU should wait
  cfo_frame: 18-month payback on go-to-market spend; 36-month payback on platform; require explicit downside scenarios on every bucket
exampleInput_continued: ""
exampleOutput: |
  # Capital Allocation Memo — $24M Incremental Investment, Q2 2027 through End of 2028

  *Author: CFO, with CEO endorsement. For leadership team and board awareness.*

  ## Recommendation

  | Initiative | Allocation | Owner | Expected Outcome (18mo) |
  |---|---|---|---|
  | Healthcare GTM expansion | $9.5M | CRO | $13M new ARR; 47 → 130 healthcare logos |
  | AI module roadmap acceleration | $6M | CPO | $5M ARR + 4pp NRR uplift |
  | Engineering hiring above flat | $4M | CPO | 9 senior hires (vs. 12 asked); supports above |
  | Platform infrastructure | $3M | CPO | enterprise-readiness; unblocks $4–6M expansion |
  | Brand & category marketing | $1.5M | VP Marketing | category positioning; pipeline lift |
  | EU healthcare entry | $0 (deferred) | — | revisit Q1 2028 |
  | **Total** | **$24M** | | |

  ## The Strategic Context

  Vantage closed a $40M Series C in May with the explicit thesis that the company would lead mid-market healthcare in the US. The 18-month window through end of 2028 is when the category shape locks: HIPAA AI guidance is forcing every healthcare CIO to re-evaluate their analytics stack, the horizontal incumbents are distracted by their own competitive battles, and mid-market healthcare M&A is consolidating buyers into accounts that will buy at scale. The companies that lead healthcare in 2028 will lead it in 2032.

  The $24M of incremental capital this memo allocates is the part of the Series C that is above committed baseline — the dollars where the choice is real. The allocation has to do three things at once: drive the healthcare wedge harder, ship the modules that make the platform thesis real, and hold breakeven by Q4 2027 because the next round, if we choose to raise, must be from strength.

  ## The Initiatives Considered

  ### 1. Healthcare GTM Expansion
  - **Ask:** $10M. CRO requesting reps, CS pod expansion, partnership investment, and vertical marketing.
  - **Strategic fit:** Direct line to the central thesis. This is where capital becomes ARR.
  - **Expected return:** $14M new ARR over 18 months at current ACV trajectory; 47 → 130 healthcare logos. **Plausible** — math relies on existing close rates and a hire-and-ramp curve we have demonstrated, but the 130-logo number assumes the AI module produces tailwind that is not yet proven.
  - **Underfund (50%):** ARR contribution drops to ~$8M; logo count to ~85; the velocity gap between us and a future Helio response narrows.
  - **Don't fund:** logo growth flatlines; segment NRR alone holds revenue but the category-leadership thesis is at risk.
  - **Recommendation:** Fund $9.5M (95% of ask). Trim $500K from the partnerships budget where ROI is least proven; protect the rep and CS investment which is the highest-confidence line.

  ### 2. AI Module Roadmap Acceleration
  - **Ask:** $6M. CPO requesting clinical workflow and payer-side module work.
  - **Strategic fit:** Directly funds the platform thesis. The compliance module is the wedge; clinical workflow and payer-side are the deepening that makes the platform unbreakable.
  - **Expected return:** $5M direct ARR over 18 months; 4 percentage points of NRR uplift across healthcare segment. **Plausible to proven** — based on customer signal data from the existing module rollout.
  - **Underfund:** clinical workflow ships 2 quarters late; payer-side does not ship; we hold one moat instead of three.
  - **Don't fund:** the platform thesis remains a single-product story.
  - **Recommendation:** Fund the full $6M. This is the line where every dollar compounds with every other initiative.

  ### 3. EU Healthcare Entry
  - **Ask:** $8M. VP International requesting UK + Germany pilot, country managers, compliance setup.
  - **Strategic fit:** EU healthcare is consolidating along the same lines as US, ~12 months later. Entry in 2028 is plausible; entry in 2027 is early.
  - **Expected return:** $3M ARR by end of horizon; foothold for 2029. **Hopeful** — based on US-comparable assumptions that have not been validated for EU buyers.
  - **Underfund:** half-built EU presence is worse than no EU presence.
  - **Don't fund:** EU window does not close inside this horizon; we revisit cleanly in 2028.
  - **Recommendation:** Defer fully. Revisit Q1 2028 with US 130-logo milestone in hand. CEO endorsement on this defer is explicit.

  ### 4. Platform Infrastructure
  - **Ask:** $4M. CPO requesting multi-tenancy redesign, data warehouse-native scaling, security investments.
  - **Strategic fit:** Indirect but required. Without this work, healthcare enterprise expansion (six- and seven-figure logos) hits technical limits.
  - **Expected return:** No direct ARR; estimated to unblock $4–6M of expansion ARR by enabling deals that we cannot close on current platform. **Plausible** — based on three specific deals lost in last 6 months for platform reasons.
  - **Underfund:** enterprise expansion stalls; we hit a logo-quality ceiling around Q2 2028.
  - **Don't fund:** same as underfund, accelerated.
  - **Recommendation:** Fund $3M (75% of ask). Trim the multi-tenancy redesign to a phased rollout; protect the data warehouse and security work which is on critical path.

  ### 5. Engineering Hiring Above Flat
  - **Ask:** $5M. CPO requesting 12 senior engineers across product, AI, infrastructure.
  - **Strategic fit:** Supports every other line. Without engineering capacity, the AI module roadmap and platform work do not ship.
  - **Expected return:** Indirect. Required for $11M+ ARR across modules and platform-unblocked expansion. **Plausible** — capacity math is well-understood; risk is hiring market and retention.
  - **Underfund:** roadmap commitments slip; the AI module Q2 lesson repeats.
  - **Don't fund:** same as underfund, more severe.
  - **Recommendation:** Fund $4M (80% of ask). Hire 9 of 12 senior engineers, prioritize AI and infrastructure roles, defer 3 product engineering hires to Q4 2027 contingent on velocity. Per stated constraint, $1.5M of this budget redirects to retention if any senior engineer departs.

  ### 6. Brand & Category Marketing
  - **Ask:** $3M. VP Marketing requesting vertical thought leadership, conferences, analyst relations.
  - **Strategic fit:** Supports category-leadership narrative. Long-cycle return.
  - **Expected return:** Difficult to attribute directly. Estimated 10–15% pipeline lift over 18 months. **Hopeful** — attribution is weak and the activities are easy to absorb without measurable result.
  - **Underfund:** category positioning slower; pipeline lift smaller.
  - **Don't fund:** category narrative remains primarily product-led, which has worked but does not scale.
  - **Recommendation:** Fund $1.5M (50% of ask). Concentrate on three high-conviction vehicles (top 2 healthcare conferences and analyst relations); defer broader brand spend until VP Marketing is in seat 90 days.

  ## The Trade-Offs Made Explicit

  - **EU deferred to fund US healthcare GTM and AI modules.** EU is real but early. The US window is closing now and the dollars compound where we have proof. The cost: if EU consolidation accelerates, we revisit in Q1 2028 from a position of less-natural pricing power than we'd have today.
  - **Platform infrastructure trimmed 25% to fully fund the AI module roadmap.** Multi-tenancy work goes phased instead of redesign. The cost: a small number of mid-market deals will hit platform limits that a full redesign would have avoided. Acceptable given the AI module return profile.
  - **Engineering hiring trimmed by 3 product roles to fund platform infrastructure.** The cost: product velocity tightens for 6 months; we accept this in exchange for the platform work that unblocks higher-ACV deals.

  ## What This Allocation Is Deliberately Not Doing
  - **Not entering EU.** Revisit Q1 2028.
  - **Not investing in non-healthcare segment growth.** The book holds high-NRR enterprise general accounts but we are not adding new ones.
  - **Not investing in M&A capacity.** If the board greenlights active scouting, we will revisit allocation. As of this memo, scouting is exploratory and budget-neutral.

  ## Risk On The Recommended Plan
  - **AI module commercial momentum slips.** Early-warning: paying-user trajectory through end of Q2 2027. If <12 paying users by end of June (vs. 18 plan), revisit module roadmap pacing.
  - **Engineering hiring market tightens.** Early-warning: time-to-fill exceeds 90 days on senior roles. Mitigation: contractor bridge for critical roles, retention bonuses pre-emptively for top quartile.
  - **Healthcare GTM ramp slower than modeled.** Early-warning: monthly new logo run-rate by end of Q3 2027. If <5 healthcare logos/month by then, the 130-logo target is at risk and we re-baseline.

  ## What Triggers A Revision
  - **Helio launches an explicit healthcare initiative** (announcement or material hire). Triggers a re-look at the GTM aggression line.
  - **AI module paying users below 12 by end of June.** Triggers a re-look at the module roadmap and pricing.
  - **Mid-market healthcare M&A deal involving a top-50 customer of ours.** Triggers an allocation conversation about defensive investment in that account.
  - **EU healthcare consolidation event** (e.g., a UK/Germany regulatory shift) that meaningfully changes the entry calculus.
  - **Material variance from the breakeven Q4 2027 trajectory.** Triggers a re-look at the entire memo — if breakeven is at risk, capital allocation tightens.

  ## Decision Asked
  Approve the allocation as recommended, with the deferral of EU and the trims to platform, brand, and engineering hiring as specified. Decision needed by end of next week to allow Q3 2027 budgets to be finalized on time. Implementation begins July 1, 2027. Quarterly checkpoint reviews built into the cadence.
tips:
  - "Force the trade-off section. Allocation memos that don't name a loser aren't allocation memos."
  - "Label every expected return as proven, plausible, or hopeful. The pattern of hopeful returns is the early signal that the allocation is being talked into rather than reasoned into."
  - "Include the 'what triggers a revision' section. Without it, the memo becomes a once-a-year ritual instead of a working document."
  - "Have the CFO and CEO co-sign before sending to the broader leadership team. The signal of joint ownership matters more than the prose."
  - "Six months into the horizon, run the actuals against this memo. The discipline of checking your own math is what makes the next allocation sharper."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - annual-strategic-plan-outline
  - okr-framework-company
  - acquisition-target-evaluation
  - board-update-narrative
tags:
  - capital-allocation
  - finance
  - cfo
  - planning
  - leadership
---
