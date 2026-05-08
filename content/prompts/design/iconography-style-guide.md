---
title: "Define an iconography style guide"
slug: iconography-style-guide
function: design
role: ui-design
description: "Generate an iconography style guide covering grid, weight, corner treatment, fill behavior, and how to evaluate whether a candidate icon belongs in the set."
useCase: "Use this when starting an icon library, evaluating a third-party set (Lucide, Phosphor, Tabler, custom), or auditing existing icons for consistency drift. The guide doubles as a brief for an illustrator and a checklist for design system review."
prompt: |
  You are a senior product designer specifying an iconography system. Produce a style guide that an illustrator could draw to and a reviewer could enforce against.

  Context:
  - Brand: {{brand}}
  - Product surface: {{surface}}
  - Brand voice (a few words): {{brand_voice}}
  - Target sizes (px): {{sizes}}
  - Existing UI density (compact / comfortable / spacious): {{density}}
  - Reference icon sets you like and why: {{reference_sets}}
  - Constraints: {{constraints}}

  Produce a guide with these sections:

  1. Personality (3 sentences). What this icon set should feel like — anchored to brand voice. Reference one or two sets you're emulating and one you're explicitly rejecting.
  2. Grid and keyline shapes. Pixel grid, padding from edge, and the keyline shapes (square, circle, vertical, horizontal rectangle) that all icons should fit.
  3. Stroke and fill. Stroke weight at base size. How stroke scales with size. Outlined vs. filled approach. Mixed system rules (eg outlined default, filled for active states).
  4. Corner treatment. Radius for outer and inner corners. Sharp vs. rounded.
  5. Joinery and terminations. How lines meet (rounded caps, miter joins). End caps (rounded, flat).
  6. Optical balance. Adjustments for circular vs. rectangular shapes that look balanced even when their pixel dimensions differ.
  7. Color application. Single-color rule, when accent color is allowed, intent color mapping (success/warning/danger/info).
  8. Naming and metadata. File naming convention (kebab-case verbs/nouns), required metadata (size variants, semantic tags).
  9. Inclusion criteria. The 5-question test for whether a candidate icon belongs in the set.
  10. Examples — for/against. List 4 example icons (eg "search," "settings," "alert-triangle," "user") and write one line on what your style choices look like applied to each.

  Rules:
  - Be specific with numbers. "2px stroke at 24px" not "thin strokes."
  - The "5-question inclusion test" should be answerable yes/no, not subjective.
  - Avoid descriptors that don't translate to drawing rules ("modern," "clean," "approachable" — replace with concrete shape language).

  Output: the full guide.
variables:
  - "{{brand}}"
  - "{{surface}}"
  - "{{brand_voice}}"
  - "{{sizes}}"
  - "{{density}}"
  - "{{reference_sets}}"
  - "{{constraints}}"
exampleInput: |
  brand: Heron Health
  surface: Clinician-facing EHR companion app (web + iPad)
  brand_voice: Calm, precise, never alarming
  sizes: 16, 20, 24, 32 px
  density: comfortable
  reference_sets: Phosphor (geometry), Lucide (consistency); rejecting Material (too utilitarian) and Heroicons (too playful for clinical context)
  constraints: Must legible at 16px on iPad in clinical lighting; no fine ornamentation
exampleOutput: |
  # Heron Health — Iconography Style Guide

  ## 1. Personality
  The icon set should feel calm and unambiguous — closer to instrument labels than to product marketing. Geometry is grounded in Phosphor's regular weight; consistency rules borrow from Lucide. We are explicitly not drawing in the style of Material (visually loud, fill-heavy) or Heroicons (rounded and friendly in a way that reads as informal in clinical context).

  ## 2. Grid and keyline shapes
  - Base pixel grid: 24x24 with 2px outer padding (drawing area: 20x20).
  - 16px size uses a 16x16 grid with 1px padding (drawing area: 14x14) and is hand-tuned, not a scaled 24px.
  - Keyline shapes for visual consistency: 18x18 square, 18x18 circle, 18x14 horizontal rect, 14x18 vertical rect. All icons should fit one of these.

  ## 3. Stroke and fill
  - Outlined by default. 2px stroke at 24px. 1.5px at 20px. 1.25px at 16px (hand-tuned).
  - Filled variant exists only for active/selected states (eg tab bar). Filled icons use the outline silhouette filled with currentColor — no internal stroke detail.
  - No mixed-weight strokes within a single icon.

  ## 4. Corner treatment
  - Outer corners: 2px radius at 24px. Sharp 90° corners are not used.
  - Inner corners: 1px radius at 24px.
  - Reasoning: subtle rounding reads as precise rather than playful; sharp corners alias badly at 16px on iPad screens in clinical lighting.

  ## 5. Joinery and terminations
  - Line caps: round.
  - Line joins: round.
  - This is non-negotiable — flat caps look surgical-instrument harsh in this context.

  ## 6. Optical balance
  - Circular icons (eg "info") may extend up to 1px beyond the keyline rectangle to appear visually equal in size to square icons.
  - Asymmetric icons (eg "send") align to the optical center, not the bounding-box center.
  - At 16px, optical adjustments matter more than grid fidelity. Hand-tune.

  ## 7. Color application
  - Single-color: icons inherit currentColor by default.
  - Accent color (Heron Teal) only on active/selected states.
  - Intent color mapping when icons appear in alerts:
    - Success: color.intent.success
    - Warning: color.intent.warning
    - Danger: color.intent.danger
    - Info: color.intent.info
  - Never use multi-color icons in inline text.

  ## 8. Naming and metadata
  - File naming: kebab-case, noun-led for objects (patient, vitals, chart), verb-led for actions (search, send, archive).
  - Variants suffixed: search-filled.svg, search-16.svg.
  - Required metadata in Figma component: keywords (synonyms for search), recommended size, intent variant if applicable.

  ## 9. Inclusion criteria — the 5-question test
  1. Does it answer a real label need that text alone can't? (If text suffices, don't add an icon.)
  2. Is its meaning unambiguous in clinical context? (Avoid metaphors that require cultural decoding.)
  3. Does it fit one of the four keyline shapes without distortion?
  4. Does it read at 16px in iPad clinical lighting? (Test on device, not just at zoom.)
  5. Is there an existing icon in the set that overlaps in meaning by >70%? (Merge or pick one.)

  ## 10. Examples — for/against
  - search: 18x18 keyline circle (the lens) + 6px handle at 45°. Round joinery between handle and circle. Clean and recognizable.
  - settings: rejected the gear (too many small features at 16px). Use three sliders (vertical bars + adjusters) instead — reads at 16px and matches the calm tone.
  - alert-triangle: equilateral triangle, rounded outer corners, vertical exclamation centered. Uses warning intent color when surfaced inline.
  - user: simple head + shoulders silhouette, no facial features, head as 8px circle, shoulders as rounded trapezoid below. No earlobes, no hair detail — too noisy at 16px.
tips:
  - "The 5-question inclusion test is more valuable than the rest of the doc combined. It prevents library bloat better than any review process."
  - "Hand-tune your 16px versions. Auto-scaled 24px icons are illegible in dense product UIs."
  - "If you're rejecting an icon style, name it explicitly. 'Not Material' is more useful than 'modern.'"
  - "Pair the guide with 5 fully-drawn 'reference icons' that an illustrator can match. Words alone don't transfer style."
  - "Audit the icon set quarterly against the 5 questions. Most sets bloat by 20% per year without one."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - design-token-naming
  - component-spec-doc
  - design-system-rfc
tags:
  - ui
  - iconography
  - design-system
  - style-guide
  - visual-design
---
