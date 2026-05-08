---
title: "Document the rationale behind a cofounder equity split"
slug: equity-split-rationale-memo
function: founder
role: cofounder
description: "Write a clear, durable memo explaining the reasoning behind your cofounder equity split — so the decision survives the inevitable moments years later when someone questions it."
useCase: "Use this immediately after agreeing on a cofounder equity split. The split itself is the easy part. The hard part is what happens 18 months later when one cofounder is working harder, or one had a much smaller stake originally, or the company is doing well and old resentments surface. A written rationale signed by both cofounders prevents most of those conversations from ever needing to happen — and resolves the rest faster."
prompt: |
  You are a thoughtful corporate counsel and founder coach hybrid. You've seen equity disputes destroy good companies. You know that the split itself matters less than the clarity of the reasoning behind it.

  Help me draft a cofounder equity rationale memo.

  Cofounders:
  {{cofounders}} (name, percentage, role)

  How long we've been working together pre-incorporation:
  {{pre_incorp_timeline}}

  What each person brought to the table that justified their split:
  {{contributions}}

  Specific factors we considered:
  {{factors_considered}} (e.g., founder commitment full-time vs. part-time, prior IP contribution, unique skills, capital invested, idea origination, network access, opportunity cost)

  Vesting structure:
  {{vesting}} (typically 4-year vest, 1-year cliff)

  What we explicitly did NOT factor in (that someone might bring up later):
  {{not_factored}}

  Anything we agreed to revisit later:
  {{revisit_items}}

  Generate a memo with:

  1. **Header** — date, cofounders, total fully-diluted ownership being allocated.

  2. **The split** — clear table: name, role, percentage, vesting terms.

  3. **Reasoning summary** — 2-3 paragraphs explaining how we got here. Honest about what was weighed.

  4. **What each cofounder brought** — short paragraph per person, specific.

  5. **Factors weighed** — bulleted list of the factors that informed the decision (e.g., commitment level, prior work, capital).

  6. **What we deliberately did not factor in** — important to name. Idea origination is the most common one to overweight or underweight.

  7. **Refresh / revisit clauses** — anything we agreed to revisit (e.g., if a cofounder's role changes meaningfully).

  8. **Acknowledgment** — both cofounders sign that the split feels fair as of the date below, and that future grumbling about the split won't be productive.

  Tone: direct, plain language, no legalese. This is a memo to ourselves, not a legal filing. The lawyer-drafted docs handle the legal side.
variables:
  - "{{cofounders}}"
  - "{{pre_incorp_timeline}}"
  - "{{contributions}}"
  - "{{factors_considered}}"
  - "{{vesting}}"
  - "{{not_factored}}"
  - "{{revisit_items}}"
exampleInput: |
  cofounders:
    - Maya Chen, CTO, 50%
    - Jordan Reyes, CEO, 50%
  pre_incorp_timeline: 4 months working nights and weekends together before incorporating; 2 months full-time before this memo
  contributions:
    - Maya: 8 years engineering, built v0 of the product alone, brought core technical IP, full-time since incorporation
    - Jordan: 6 years sales/PM, identified the customer problem and validated with 25 interviews, brought initial design partner conversations, full-time since incorporation
  factors_considered:
    - Both full-time at same start date
    - Both took comparable pay cuts (~70% from prior salaries)
    - Maya wrote the v0 code; Jordan ran the discovery
    - Neither put in meaningful capital
    - Comparable network value (different but balanced)
  vesting: 4-year vest, 1-year cliff, double-trigger acceleration on change of control
  not_factored:
    - Idea origination — Jordan first surfaced the problem area but Maya proposed the specific approach
    - Prior salary at last job (Maya was paid more) — irrelevant to this split
    - Age / experience — both have decided they want a peer relationship
  revisit_items:
    - If either of us decides to go part-time or take a 6+ week sabbatical in year 1, we agreed we'd discuss whether the split needs adjustment
    - The CEO title is Jordan's externally; we agreed to revisit if our roles materially change
exampleOutput: |
  COFOUNDER EQUITY RATIONALE MEMO

  Date: [date]
  Cofounders: Maya Chen (CTO), Jordan Reyes (CEO)
  Allocation: 100% of founder common stock as of incorporation, fully-diluted before any option pool or external investment.

  THE SPLIT

  | Name | Role | Percentage | Vesting |
  |---|---|---|---|
  | Maya Chen | CTO | 50% | 4-year vest, 1-year cliff, double-trigger CoC acceleration |
  | Jordan Reyes | CEO | 50% | 4-year vest, 1-year cliff, double-trigger CoC acceleration |

  REASONING

  We chose a 50/50 split deliberately, not by default. We weighed an unequal split and decided against it.

  The case for unequal: Maya wrote the v0 code alone over 4 months; that's real, valuable IP, and it predates Jordan's full involvement. The case against: Jordan ran the customer discovery (25 interviews) and identified the design partner conversations that made the v0 worth building, and we agreed that without that work the technical IP wouldn't have a market.

  We concluded that our contributions are different in kind but comparable in weight, that we both took the same pay cut and the same opportunity cost from the same start date, and that the cost of an unequal split — the constant low-grade question of whether the lesser cofounder is "really" a cofounder — outweighs any precision we'd gain from picking, say, 55/45.

  We're choosing 50/50 with eyes open to its risks: it requires a clear decision-rights document (which we're writing in parallel), and it requires us to agree that "I work harder than you" is not a productive future conversation between us.

  WHAT EACH COFOUNDER BROUGHT

  Maya brought 8 years of engineering depth and the v0 codebase. She built the technical foundation alone, in evenings and weekends, during the 4-month pre-incorporation period. She is full-time since incorporation. The product as it exists today is overwhelmingly her code.

  Jordan brought 6 years of sales and product management experience, the original problem framing, 25 customer discovery interviews that shaped the initial product, and the relationships that produced our first three design partner conversations. Jordan is full-time since incorporation and carries the external CEO title.

  FACTORS WEIGHED

  - Time commitment: equal (both full-time, same start date).
  - Pay cut: equal (~70% reduction from prior comp for both).
  - Pre-incorporation work: Maya more (the v0 code), but Jordan's discovery work directly informed it.
  - Capital: neither put in meaningful capital.
  - Network value: different, balanced (Maya: technical talent network; Jordan: customer/investor network).
  - Skill complementarity: high, no overlap.

  WHAT WE DELIBERATELY DID NOT FACTOR IN

  - Idea origination. Jordan first surfaced the problem area; Maya proposed the specific approach. Trying to allocate "credit for the idea" is a rabbit hole that doesn't survive contact with the next 18 months. We're treating the company as something we built together starting at the moment we both committed.
  - Prior salary. Maya earned more at her previous role. Not relevant.
  - Age, years of experience, gender, or any other personal factor.

  REFRESH / REVISIT CLAUSES

  - If either cofounder reduces commitment to less than full-time or takes a sabbatical longer than 6 weeks in year 1, we agreed to have a direct conversation about whether the split should be adjusted going forward. We are not pre-committing to an adjustment, but we are pre-committing to the conversation.
  - If our roles materially change (e.g., Maya takes the CEO title, or one of us steps into a non-cofounder operational role), we'll re-read this memo and update.
  - We will re-read this memo together every 12 months as part of our annual cofounder offsite.

  ACKNOWLEDGMENT

  We have both read this memo. We agreed to the split as of today's date based on the reasoning above. We agree that future disagreement about whether the split should have been different is not, by itself, a productive conversation between us — and that if real circumstances change (per the refresh clauses), we'll have that conversation directly rather than letting it sit.

  Maya Chen: ___________________ Date: __________

  Jordan Reyes: __________________ Date: __________
tips:
  - "Sign this. Print it. Keep a copy in your personal records, not just the company shared drive. Equity disputes 3 years from now don't usually start with bad faith — they start with people remembering the reasoning differently."
  - "Don't skip the 'what we did not factor in' section. The thing one cofounder is going to bring up in 18 months is almost always something one of you considered and chose not to weigh."
  - "If you can't actually agree on this memo, you don't have an equity split — you have a deferred argument. Better to have it now."
  - "Standard vesting (4-year, 1-year cliff) is standard for a reason. Don't skip vesting on each other to be 'nice' — vesting is what protects the company if one of you leaves early."
  - "If an investor enters and re-fractions equity, write a short addendum noting the change. Don't rewrite the original memo — keep the original reasoning visible over time."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - cofounder-roles-document
  - cofounder-conflict-conversation-prep
  - seed-pitch-narrative
tags:
  - equity
  - cofounder
  - governance
  - early-stage
  - documentation
---
