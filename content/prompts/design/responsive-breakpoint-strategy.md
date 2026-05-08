---
title: "Document a responsive breakpoint strategy"
slug: responsive-breakpoint-strategy
function: design
role: ui-design
description: "Define a responsive strategy that names breakpoints, explains why each exists, and specifies how core layout elements adapt — without spawning seven media queries per component."
useCase: "Use this when starting a new product, redesigning the main app shell, or untangling a CSS file that has accumulated 12 breakpoints over time. A clear strategy reduces engineering debate and prevents 'mystery breakpoints' added by individual contributors."
prompt: |
  You are a senior UI designer defining a responsive breakpoint strategy for an engineering team. The strategy must be opinionated and minimal.

  Context:
  - Product: {{product}}
  - Primary platforms (web/mobile-web/tablet/desktop-app): {{platforms}}
  - User mix (% mobile / tablet / desktop): {{user_mix}}
  - Existing breakpoints (if any): {{existing_breakpoints}}
  - Framework: {{framework}}
  - Known constraints (eg "must support 1024 wide tablets"): {{constraints}}

  Produce a strategy doc with these sections:

  1. Breakpoint set. 3–5 named breakpoints with min-width values. For each: what device class it represents, why it exists (tied to actual content/UX, not just devices), and what changes at this breakpoint.
  2. Layout shifts. For each major surface (app shell, content area, navigation, modals/sheets), describe how it adapts at each breakpoint.
  3. Container queries vs. media queries. Where to use each. Default to one or the other and explain why.
  4. Typography scaling. Whether type scales fluidly (clamp), step-changes at breakpoints, or both. Specific numbers.
  5. Touch and pointer adaptations. What changes for touch input (tap targets, hover-only interactions, density).
  6. Anti-patterns. 3–5 things engineers will be tempted to do that this strategy prohibits, and why.
  7. How to add a new breakpoint. The process and approval bar — make it harder than just dropping in a media query.

  Rules:
  - Fewer breakpoints is better. Every breakpoint costs design and engineering time forever.
  - Anchor breakpoints to content limits, not device widths. "Two-column layout breaks at 720px because the reading column drops below 45ch" is good. "Tablet starts at 768" is not.
  - Section 7 is the most important — without it, the breakpoint set will silently double in 18 months.

  Output: the full strategy doc.
variables:
  - "{{product}}"
  - "{{platforms}}"
  - "{{user_mix}}"
  - "{{existing_breakpoints}}"
  - "{{framework}}"
  - "{{constraints}}"
exampleInput: |
  product: Beacon Field Service — work order management for HVAC and plumbing techs
  platforms: web app (office staff) + mobile web (field techs)
  user_mix: 55% mobile (techs in the field), 5% tablet, 40% desktop (dispatch and admin)
  existing_breakpoints: Inherited Tailwind defaults (sm 640, md 768, lg 1024, xl 1280, 2xl 1536) plus three custom breakpoints added ad-hoc
  framework: Next.js + Tailwind, considering migrating to container queries
  constraints: Field techs use 5-year-old Android phones — performance matters; some still on 360px wide screens
exampleOutput: |
  # Beacon Field Service — Responsive Breakpoint Strategy

  ## 1. Breakpoint set
  Three named breakpoints. We are deleting the inherited custom breakpoints.

  | Name | Min-width | Device class | Why it exists | What changes |
  |---|---|---|---|---|
  | base | 0 | Phones (techs in field) | Default. Designed mobile-first. | Single column; bottom-tab nav; full-width inputs |
  | wide | 720px | Large phones landscape, tablets | Two-column layouts become viable; reading widths exceed 60ch | Two-column work order detail; side rail surfaces |
  | desk | 1100px | Laptops, desktops (dispatch) | Multi-pane dispatch board needs both list and map visible without scrolling | Three-pane shell; persistent left nav |

  No breakpoint above 1100. The dispatch UI is bounded at max-width 1440 with comfortable margins beyond that — anything wider doesn't earn a new layout.

  ## 2. Layout shifts
  - App shell — base: bottom tab bar (5 tabs). wide: bottom tabs persist (techs may rotate to landscape). desk: bottom tabs replaced with persistent left nav.
  - Work order list — base: stacked cards. wide: 2-column card grid. desk: list view with inline expand.
  - Work order detail — base: single column. wide: 8/4 split with right rail (customer info + history). desk: same as wide; no further shift.
  - Map + list (dispatcher) — base: tabs (Map | List). wide: tabs (Map | List). desk: side-by-side, list 40%, map 60%.
  - Modals — base: full-screen sheets, slide up from bottom. wide+: centered modal, max-width 560px.

  ## 3. Container queries vs. media queries
  - Default to container queries for component-level layout (cards, tables, panels).
  - Media queries reserved for the app shell and global layout shifts.
  - Reasoning: components appear in different containers (main column, right rail, modal) at the same viewport width. Container queries let one component adapt correctly in all of them; media queries don't.
  - Migrate components opportunistically — no big-bang.

  ## 4. Typography scaling
  - Body text: 16px from base to wide; 16px desk (no change). Large enough for field reading; not so large it breaks layouts.
  - Headings: clamp(1.5rem, 1.2rem + 1vw, 2rem) for display sizes. Step-change for h2/h3 at wide and desk.
  - Reasoning: fluid for hero/display gives smooth scaling without breakpoint math; step-change for hierarchy keeps the visual system predictable in code review.

  ## 5. Touch and pointer adaptations
  - Tap targets: 44x44 minimum at base and wide, 32x32 acceptable at desk (mouse + keyboard).
  - Hover-only interactions: not allowed at any breakpoint that includes touch (base, wide). Use long-press or explicit affordances instead.
  - Density: comfortable spacing tokens at base/wide; compact tokens optional at desk for power-user dispatch UI.

  ## 6. Anti-patterns
  - Don't add a breakpoint to fix one component. Use a container query.
  - Don't use breakpoints for showing/hiding marketing-style content. If content matters, it's responsive, not gated.
  - Don't write px-based media queries in components. Use the named tokens (`@bp wide`, `@bp desk`).
  - Don't design at exactly the breakpoint widths in Figma — design at base+1, wide+1 (eg 360, 800, 1200). The breakpoint is where layout changes, not where layouts live.
  - Don't reintroduce a "tablet" breakpoint. We tested — every "tablet" issue in the past 12 months was a container query problem in disguise.

  ## 7. How to add a new breakpoint
  - File an RFC. Yes, an RFC.
  - Document: which surface, what content/UX boundary the existing breakpoints fail to capture, what 3 alternatives you considered (eg container query, intrinsic sizing, redesigning the component).
  - Get sign-off from the design system lead AND a frontend lead.
  - Approval bar: a new breakpoint is justified only if (a) the same content failure happens on >2 surfaces and (b) container queries can't solve it. Otherwise the answer is no.
tips:
  - "Three breakpoints handles 95% of products. If you have five, you've usually got two container query problems in disguise."
  - "Anchor breakpoints to content (45ch reading width, 3-column threshold), not device names. Devices change; content rules don't."
  - "The 'how to add a breakpoint' section is the doc's whole point. Without it, the breakpoint count will creep up with every new feature."
  - "Migrate to container queries opportunistically. Don't ship a 'container query rewrite' project — refactor as components change."
  - "Audit your media query usage every 6 months. Most teams find 30%+ they no longer need."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - layout-rationale-doc
  - component-spec-doc
  - design-system-rfc
tags:
  - ui
  - responsive
  - breakpoints
  - layout
  - design-system
---
