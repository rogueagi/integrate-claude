---
title: "Document layout rationale for engineering handoff"
slug: layout-rationale-doc
function: design
role: ui-design
description: "Write the 'why' behind a screen layout — grid choices, hierarchy decisions, responsive behavior, and the trade-offs you considered — so engineers don't have to guess during build."
useCase: "Use this for any non-trivial layout you're handing off, especially dashboards, settings pages, and anything with a complex grid. Engineers infer rationale from the Figma file when you don't write it down — and they often infer wrong. A 1-page rationale doc cuts handoff questions roughly in half."
prompt: |
  You are a senior UI designer writing a layout rationale doc for engineering. The doc should answer the questions an engineer will have at 11pm when they're 80% done with implementation and the design file is ambiguous.

  Context:
  - Screen / surface: {{screen}}
  - Layout type: {{layout_type}}
  - Primary user goal on this screen: {{user_goal}}
  - Key content blocks (in priority order): {{content_blocks}}
  - Grid system in use: {{grid_system}}
  - Breakpoints: {{breakpoints}}
  - Constraints (eg "must fit existing app shell"): {{constraints}}

  Produce a doc with these sections:

  1. Summary (3 sentences). What the layout is, what it prioritizes, and the one trade-off worth knowing about.
  2. Visual hierarchy. Numbered priority order of content blocks with one-line reasoning per block.
  3. Grid and spacing. Columns, gutters, container max-width, and the rule for when content spans full vs. constrained width.
  4. Responsive behavior. For each breakpoint, what changes (stack order, hidden elements, collapsed nav, padding adjustments). Specific.
  5. Density rules. When content overflows: scroll, paginate, truncate, or virtualize? Same question for empty states.
  6. Decisions and trade-offs. 2–4 decisions you made, the alternative you rejected, and why.
  7. What is intentionally NOT in this layout. 2–3 things that were considered and cut, with one-line reasoning.

  Rules:
  - "Center the content" is not a rationale. "Fixed 720px reading column at >1024px because line lengths above 90ch hurt scanning" is.
  - Reference tokens by name, not pixel values, when they exist.
  - Section 7 is mandatory. The things you didn't add tell engineers what to push back on.

  Output: the full doc.
variables:
  - "{{screen}}"
  - "{{layout_type}}"
  - "{{user_goal}}"
  - "{{content_blocks}}"
  - "{{grid_system}}"
  - "{{breakpoints}}"
  - "{{constraints}}"
exampleInput: |
  screen: Astra CRM — Account detail page
  layout_type: Two-column with sticky right rail
  user_goal: Quickly assess an account's health and find the next thing to do
  content_blocks: Account header (logo, name, owner, status), key metrics strip (ARR, renewal date, health score), activity timeline, contacts list, open tasks, recent notes, related deals
  grid_system: 12-col, 80px gutters at >=1280, 24px gutters at <1280
  breakpoints: 480 / 768 / 1024 / 1280
  constraints: Must work inside existing left nav (240px); cannot scroll horizontally on tablet
exampleOutput: |
  # Account Detail — Layout Rationale

  ## 1. Summary
  Two-column layout with a primary content stream on the left (8/12) and a sticky right rail (4/12) for next-action context. Prioritizes "what needs my attention" over "tell me everything about this account." Trade-off: the right rail's stickiness costs vertical space on smaller laptops, but eliminates the most common workflow complaint — "I lost track of the renewal date while scrolling."

  ## 2. Visual hierarchy
  1. Account header — anchors the page; users need to confirm they're on the right account in <1s.
  2. Key metrics strip (ARR, renewal date, health score) — these answer "is this account ok?" and are the second thing every CSM checks.
  3. Open tasks (right rail, top) — answers "what should I do next?", the highest-leverage question.
  4. Activity timeline — primary content stream; the longest-tail item but where users spend the most time when investigating.
  5. Contacts and related deals — secondary; available on this page so users don't have to navigate away.
  6. Recent notes — surface for context but not promoted; rare to be the answer to a primary question.

  ## 3. Grid and spacing
  - 12-col grid, 80px gutters at >=1280, 24px gutters at <1280.
  - Container max-width: 1440px (centered above that).
  - Account header spans 12 cols (full content width).
  - Below header: left content stream is 8 cols, right rail is 4 cols.
  - Vertical rhythm: spacing.lg (32px) between major blocks, spacing.md (16px) within blocks.

  ## 4. Responsive behavior
  - >=1280: Two-column layout as designed. Right rail sticky from top of viewport, padding-top spacing.lg.
  - 1024–1279: Same two-column layout, gutters tighten to 24px, right rail still sticky.
  - 768–1023 (tablet): Single column. Right rail content (Open tasks, then key metrics) hoists above the activity timeline. Sticky behavior off — taps on tablet don't tolerate sticky elements well.
  - <768 (mobile): Single column. Order: Account header → key metrics (horizontal scroll if >3) → Open tasks → activity timeline → contacts → notes → related deals. Account header collapses owner/status into a secondary line.

  ## 5. Density rules
  - Activity timeline: virtualize after 50 items; paginate at 200 with "Load older."
  - Contacts list: show first 5; "View all" expands inline (no modal).
  - Tasks rail: show 3; "+N more" link opens task list filtered to this account.
  - Empty states (no activity, no tasks): inline empty state with a single CTA, never a modal. Empty state height = 160px so the column doesn't collapse.

  ## 6. Decisions and trade-offs
  - Right rail vs. tabs. Considered tabs (Activity / Tasks / Notes / Deals). Rejected because the most common CSM workflow is "check tasks while reading activity" — tabs would force constant switching. Right rail keeps both visible.
  - Sticky right rail vs. static. Sticky wins because key metrics + tasks are reference info; users scroll the activity stream while glancing right. The cost is screen real estate on small laptops; mitigated by collapsing to single-column at <1024.
  - Account header height. Designed for 96px (compact). Considered 144px with logo + tags. Rejected — the page already pushes everything down 240px from app chrome; another 48px would push key metrics below the fold on a 13" laptop.

  ## 7. What is intentionally NOT in this layout
  - No breadcrumbs above the header. The left nav already shows "Accounts > [Name]"; breadcrumbs would be redundant.
  - No inline edit on the account header. Edits go to a side panel — keeps the read view fast and avoids accidental field changes.
  - No "Quick actions" floating button. Considered for mobile; cut because the Tasks rail already surfaces the most common next actions and a FAB would obscure timeline content.
tips:
  - "Section 7 (what's not here) does more political work than the other six sections combined. PMs will try to add things; this section is your evidence you already considered them."
  - "Reference tokens, not pixels. If a token doesn't exist for a value you used, you've found a missing token — flag it."
  - "Density rules separate good handoffs from great ones. Engineers always ask 'what happens with 500 items' — answer it before they ask."
  - "Read this doc as if you were the engineer at 11pm. If anything's ambiguous, a Slack message is coming."
  - "Keep it under 1 page printed. If it's longer, the layout is probably two layouts."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - component-spec-doc
  - responsive-breakpoint-strategy
  - design-token-naming
tags:
  - ui
  - layout
  - engineering-handoff
  - responsive
  - rationale
---
