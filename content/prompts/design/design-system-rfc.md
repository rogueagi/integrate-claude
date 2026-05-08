---
title: "Draft an RFC proposing a change to the design system"
slug: design-system-rfc
function: design
role: design-ops
description: "Generate a Request for Comments document proposing a substantive change to the design system — new component, breaking change, deprecation, naming convention — with the structure that gets actual decisions made."
useCase: "Use this when proposing anything non-trivial to a design system: a new pattern, a token rename, a deprecation, an architectural shift. Slack-driven design system changes don't ship; RFCs do. This prompt produces an RFC that names the trade-offs and forces a yes/no/with-conditions decision."
prompt: |
  You are a design system contributor drafting an RFC. The audience is the design system working group — designers, engineers, sometimes a PM. The goal is a decision, not a discussion.

  Context:
  - Design system: {{design_system}}
  - Proposal title: {{proposal_title}}
  - Proposal type (new component / breaking change / deprecation / convention change / architecture): {{proposal_type}}
  - Problem this solves (3 sentences): {{problem}}
  - Proposed solution summary: {{solution_summary}}
  - Stakeholders impacted: {{stakeholders}}
  - Estimated effort and timeline: {{effort_timeline}}

  Produce the RFC with these sections:

  1. Summary (2 sentences). What's being proposed and what changes.
  2. Motivation. The problem in detail, with at least one piece of concrete evidence (eg "this pattern is reimplemented in 7 product surfaces with 3 different names").
  3. Proposal. The solution at the right level of detail — no Figma frames, but enough specifics that a reader can imagine the result.
  4. Alternatives considered. 2–3 real alternatives, each with one line on why it was rejected.
  5. Migration plan. If this changes existing patterns: what teams need to do, on what timeline, and who's responsible. If it's a new addition: what teams need to know.
  6. Risks. 2–3 things that could go wrong with this change, and how we'd know early.
  7. Open questions. 2–4 things the RFC explicitly doesn't decide and is asking the group to weigh in on.
  8. Decision sought. The specific yes/no/with-conditions decision being asked for.

  Rules:
  - Sections 4 (alternatives) and 7 (open questions) are mandatory. RFCs without them get rubber-stamped or rejected on a vibe.
  - "Effort: M" without a who is not a plan. Migration steps must name teams or roles.
  - Section 8 must be a decision the group can actually make in one meeting. If it's too big, split the RFC.
  - Tone: declarative, opinionated, not corporate. RFCs are written with a point of view.

  Output: the RFC in markdown, structured as above.
variables:
  - "{{design_system}}"
  - "{{proposal_title}}"
  - "{{proposal_type}}"
  - "{{problem}}"
  - "{{solution_summary}}"
  - "{{stakeholders}}"
  - "{{effort_timeline}}"
exampleInput: |
  design_system: Helix DS v3
  proposal_title: Replace mixed-case token names with kebab-case
  proposal_type: convention change (with breaking-change implications for token consumers)
  problem: |
    Helix tokens currently mix camelCase (color.brandPrimary) and dot.case (color.brand.primary) inconsistently across the codebase. Engineers report finding tokens by IDE autocomplete fails because they can't predict the casing. We've grown to 340+ tokens and the inconsistency now produces real bugs (duplicate tokens with different casing).
  solution_summary: Standardize on dot.case with kebab-case leaf names (color.brand.primary, spacing.size-md). Provide a codemod and a deprecation period.
  stakeholders: Design system team (owners), all product engineering teams (consumers), PMs (visibility into migration timing)
  effort_timeline: 6 weeks. Week 1–2 codemod + new tokens. Week 3–6 migration with weekly product team check-ins. Week 7+ remove old tokens.
exampleOutput: |
  # RFC: Replace mixed-case token names with kebab-case

  Status: Draft, requesting decision by [date]
  Author: [name]
  Type: Convention change (breaking)

  ## 1. Summary
  Standardize Helix design tokens on dot.case with kebab-case leaf names (`color.brand.primary`, `spacing.size-md`), replacing the current mix of camelCase, dot.case, and concatenated names. We'll ship a codemod and run a 6-week deprecation period before removing the old names.

  ## 2. Motivation
  Helix has accumulated 340+ tokens across three naming styles: camelCase (`color.brandPrimary`, ~40% of tokens), dot.case (`color.brand.primary`, ~50%), and concatenated (`colorBrandPrimary`, ~10%). The inconsistency causes three measurable problems:
  - **Discoverability fails.** In a sample audit, engineers found the right token via IDE autocomplete on the first try only 62% of the time. They give up and add inline values.
  - **Duplicate tokens.** We've identified 17 pairs of duplicate tokens (eg `color.brandPrimary` and `color.brand.primary`) where the same value exists under two casing conventions. At least 4 of these have drifted to different hex values.
  - **Onboarding cost.** New designers and engineers need to learn the casing inconsistency before they can contribute confidently. Every new hire raises this in their first month.

  ## 3. Proposal
  Adopt this convention for all tokens going forward:
  - Hierarchy in dots: `color.intent.success.bg`
  - Multi-word leaf names in kebab-case: `spacing.size-md`, `motion.duration-fast`
  - All lowercase (no camelCase, no PascalCase)

  Examples of renames:
  - `color.brandPrimary` → `color.brand.primary`
  - `colorIntentSuccess` → `color.intent.success`
  - `spacing.lg` → `spacing.size-lg` (kebab-case applied to multi-word leaves; this also opens space for `spacing.size-md`, `spacing.size-xl` in a consistent set)

  Tooling:
  - Codemod for JSON, CSS, JS/TS, and Figma token files. Ships before deprecation begins.
  - Linter rule that warns on old-style usage post-migration.
  - Token docs site updated with redirects from old names for 6 weeks.

  ## 4. Alternatives considered
  - **Keep mixed casing, document the rules.** Rejected — we've tried; consistency keeps drifting back. The tooling cost of disambiguation never goes away.
  - **Move to fully camelCase.** Rejected — dot.case better expresses hierarchy, and our themer/Style Dictionary tooling is already optimized for it.
  - **Defer until v4 (next year).** Rejected — every token added in the meantime extends the migration scope. Cheaper to do it now at 340 tokens than later at 500+.

  ## 5. Migration plan
  - **Week 1–2 (DS team):** Ship new tokens alongside old; codemod published; linter warning rule added.
  - **Week 3–6 (product teams):** Each product team runs the codemod against their codebase. DS team holds office hours twice weekly. Migration tracked in a public spreadsheet — product engineering leads are accountable for their team's status.
  - **Week 7 (DS team):** Old tokens marked `@deprecated` in JSDoc; CI warning becomes CI error for new code only.
  - **Week 12 (DS team):** Old tokens removed. Repos that haven't migrated are flagged to engineering leadership at week 10 with one final reminder.

  ## 6. Risks
  - **Codemod misses edge cases.** Mitigation: dry-run the codemod against the three largest product repos before publishing; document known limitations and provide manual-fix examples.
  - **Migration stalls past week 6.** Mitigation: weekly status spreadsheet visible to all engineering leads; the social pressure of being the only red row resolves most lag.
  - **A theming consumer (eg the marketing site) breaks silently.** Mitigation: include the marketing site repo in the dry-run audit; ship a versioned token bundle so they can pin until ready.

  ## 7. Open questions
  - Should `spacing.lg` become `spacing.size-lg` or stay as `spacing.lg`? Adding `size-` is more explicit but more verbose. Working group should pick.
  - Do we need a separate convention for component-level tokens (`button.primary.bg`) or do they follow the same rule? My recommendation is yes (same rule), but worth a 5-minute discussion.
  - Linter rule: warn or error during the deprecation period? My recommendation: warn until week 7, then error for new code only.
  - Does the marketing site team need a longer migration window? They typically lag the product on DS adoption.

  ## 8. Decision sought
  Approve this proposal as-is, approve with conditions (eg pick a different leaf-name convention), or reject.

  Working group meeting: [date]. If approved, week 1 begins the following Monday.
tips:
  - "An RFC without a 'decision sought' section becomes a discussion. Always end with the specific yes/no the group is being asked for."
  - "The alternatives section is where most RFCs are won or lost. If you can't name 2 real alternatives, you haven't thought hard enough."
  - "Quantify the problem. '17 pairs of duplicate tokens' is more persuasive than 'tokens are inconsistent.'"
  - "Migration plans need named accountability. 'Product teams will migrate' is wishful; 'Engineering leads accountable, status in [spreadsheet]' is a plan."
  - "Send the RFC at least 48 hours before the decision meeting. RFCs read in real-time get rubber-stamped or shouted down — neither is what you want."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - design-token-naming
  - component-spec-doc
  - component-deprecation-comms
tags:
  - design-ops
  - design-system
  - rfc
  - governance
  - architecture
---
