---
title: "Generate consistent design token names from a brand palette"
slug: design-token-naming
function: design
role: ui-design
description: "Take a raw brand palette and produce a structured, layered token system (primitive → semantic → component) with names that survive a rebrand and scale across light/dark modes."
useCase: "Use this when bootstrapping a design system or untangling a token mess. The naming layer is where most token systems fail — too literal and you can't rebrand, too abstract and engineers can't find anything. This prompt produces a layered system that handles both."
prompt: |
  You are a design system architect with strong opinions about token naming. Take the raw inputs below and produce a layered token system.

  Context:
  - Brand name: {{brand}}
  - Primary brand colors with hex: {{primary_colors}}
  - Neutrals (grays) with hex: {{neutrals}}
  - Intent colors needed (success, warning, danger, info): {{intent_colors}}
  - Modes to support (light, dark, both): {{modes}}
  - Token format: {{token_format}}
  - Existing naming conventions to align with: {{existing_conventions}}

  Produce three layered token tiers:

  Tier 1 — Primitives. Raw color values. Naming pattern: color.{hue}.{step}, where step is a numeric scale (50, 100, 200... 900). One scale per hue. No semantic meaning at this layer.

  Tier 2 — Semantic. Maps primitives to intent and surface. Naming pattern: color.{role}.{variant}. Examples: color.text.primary, color.surface.elevated, color.border.subtle, color.intent.success.bg, color.intent.success.fg. These are what designers and engineers reference daily.

  Tier 3 — Component. Only when a component-specific override is justified. Naming pattern: color.{component}.{part}.{state}. Use sparingly — every entry here is a future maintenance cost.

  For each layer, output a table with: token name | value (or reference) | usage notes (one line).

  At the bottom, write:
  - 3 naming rules you applied (and would enforce in code review).
  - 2 anti-patterns you deliberately avoided.
  - Mode handling: how light/dark are expressed in this system (semantic layer remaps; primitives stay constant).

  Rules:
  - Primitives never reference other primitives.
  - Semantic tokens reference primitives. Component tokens reference semantic.
  - Never use brand color names ("color.midnight-blue.500") in semantic or component layers — that's how rebrands break everything.
  - Numeric scale must be perceptually consistent (don't jump from 100 → 800 with no middle).

  Output: the three tables, then rules section.
variables:
  - "{{brand}}"
  - "{{primary_colors}}"
  - "{{neutrals}}"
  - "{{intent_colors}}"
  - "{{modes}}"
  - "{{token_format}}"
  - "{{existing_conventions}}"
exampleInput: |
  brand: Lattice Logistics
  primary_colors: Lattice Blue #1F4FE0 (primary), Signal Orange #FF6B2C (accent)
  neutrals: cool grays from #F7F8FA (lightest) to #0E1116 (darkest)
  intent_colors: success #1F8A4C, warning #C68C00, danger #C8331F, info #2E73D6
  modes: both light and dark
  token_format: Style Dictionary JSON, dot-delimited names
  existing_conventions: None — greenfield system
exampleOutput: |
  ## Tier 1 — Primitives

  | Token | Value | Notes |
  |---|---|---|
  | color.blue.50 | #EEF3FF | Lightest tint of primary |
  | color.blue.100 | #D6E1FB | |
  | color.blue.300 | #7E9EF1 | |
  | color.blue.500 | #1F4FE0 | Lattice Blue (anchor) |
  | color.blue.700 | #173BAD | |
  | color.blue.900 | #0C2370 | Darkest |
  | color.orange.500 | #FF6B2C | Signal Orange (anchor) |
  | color.orange.300 | #FFA37C | |
  | color.orange.700 | #C44C13 | |
  | color.gray.50 | #F7F8FA | App background light |
  | color.gray.100 | #EDEFF3 | |
  | color.gray.300 | #C7CDD7 | |
  | color.gray.500 | #7F8895 | |
  | color.gray.700 | #3F4754 | |
  | color.gray.900 | #0E1116 | App background dark |
  | color.green.500 | #1F8A4C | Success anchor |
  | color.amber.500 | #C68C00 | Warning anchor |
  | color.red.500 | #C8331F | Danger anchor |
  | color.sky.500 | #2E73D6 | Info anchor |

  ## Tier 2 — Semantic (light mode shown; dark mode inverts where noted)

  | Token | Value (light) | Value (dark) | Notes |
  |---|---|---|---|
  | color.surface.app | color.gray.50 | color.gray.900 | Page background |
  | color.surface.raised | #FFFFFF | color.gray.700 | Cards, modals |
  | color.surface.elevated | #FFFFFF | color.gray.500 | Toasts, popovers (more elevation than raised) |
  | color.text.primary | color.gray.900 | color.gray.50 | Default body text |
  | color.text.secondary | color.gray.700 | color.gray.300 | De-emphasized text |
  | color.text.disabled | color.gray.500 | color.gray.500 | |
  | color.border.subtle | color.gray.100 | color.gray.700 | Default dividers |
  | color.border.default | color.gray.300 | color.gray.500 | Input borders |
  | color.action.primary.bg | color.blue.500 | color.blue.500 | Primary button |
  | color.action.primary.bg-hover | color.blue.700 | color.blue.300 | |
  | color.action.primary.fg | #FFFFFF | #FFFFFF | |
  | color.action.accent.bg | color.orange.500 | color.orange.500 | Accent CTAs (use rarely) |
  | color.intent.success.bg | color.green.500 | color.green.500 | |
  | color.intent.success.fg | #FFFFFF | #FFFFFF | |
  | color.intent.warning.bg | color.amber.500 | color.amber.500 | |
  | color.intent.danger.bg | color.red.500 | color.red.500 | |
  | color.intent.info.bg | color.sky.500 | color.sky.500 | |
  | color.focus.ring | color.blue.500 | color.blue.300 | Focus indicator |

  ## Tier 3 — Component (use sparingly; only listed when justified)

  | Token | Reference | Notes |
  |---|---|---|
  | color.toast.danger.bg | color.intent.danger.bg | Justified — toast danger needs full saturation, not the subtle banner variant |
  | color.code.bg | color.gray.100 (light) / color.gray.700 (dark) | Code blocks need a subtler background than surface.raised |

  ## Rules applied
  1. Primitives are color names + numeric steps only (color.blue.500), never brand names. Survives a rebrand: change blue.500 once, everything updates.
  2. Semantic layer never mentions hues. color.action.primary.bg, never color.blue-action.bg. Engineers and designers reason in roles, not pigments.
  3. Component layer requires justification. Every entry has a one-line note — if you can't write it, the component should use semantic tokens.

  ## Anti-patterns avoided
  - No "midnight" / "ocean" / brand-poetry primitive names. They become lies on the next rebrand.
  - No primitive-only references in components (skipping the semantic layer). That's how dark mode breaks at scale.

  ## Mode handling
  Primitives are mode-agnostic — color.blue.500 is the same hex in both modes. The semantic layer is where remapping happens: color.surface.app → color.gray.50 in light, color.gray.900 in dark. Component tokens reference semantic, so they automatically inherit mode behavior. Engineers should never write mode conditionals at the component level.
tips:
  - "If a designer asks for a new component-layer token, ask 'why won't a semantic token work?' first. The answer is illuminating about 80% of the time."
  - "Numeric steps (50–900) read better than t-shirt sizes for color. Keep t-shirt sizes for spacing and radius."
  - "A token system without a documented anti-pattern list will accumulate them anyway. Write the list."
  - "Audit your component tokens quarterly — most can be merged back into semantic with a small refactor."
  - "Get an engineer to review the naming before you ship. They'll catch IDE autocomplete pain you won't see."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - component-spec-doc
  - design-system-rfc
  - layout-rationale-doc
tags:
  - design-system
  - design-tokens
  - naming
  - color
  - architecture
---
