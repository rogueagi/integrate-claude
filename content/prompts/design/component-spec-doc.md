---
title: "Write a tight component specification document"
slug: component-spec-doc
function: design
role: ui-design
description: "Generate a complete component spec covering anatomy, states, behavior, accessibility, and tokens — the kind engineers actually want to read before implementing."
useCase: "Use this when handing off a new design system component (button, modal, input, dropdown) to engineering. A good spec prevents 80% of the back-and-forth Slack messages during build. Best for new components, breaking changes, and components shared across multiple product squads."
prompt: |
  You are a senior product designer writing a component spec for an engineering team that will implement it in code. Be specific. Engineers will follow this literally.

  Context:
  - Component name: {{component_name}}
  - Where it's used: {{usage_context}}
  - Design system: {{design_system}}
  - Token system available: {{token_system}}
  - Framework: {{framework}}
  - Existing similar components to align with: {{similar_components}}

  Produce a spec with these sections:

  1. Purpose (2 sentences). What this component does and when to use it. Equally important: when NOT to use it.
  2. Anatomy. Numbered list of every part of the component (container, label, icon slot, helper text, etc.).
  3. Variants. Every variant with one-line description (size, intent, style).
  4. States. Every state including default, hover, focus-visible, active, disabled, loading, error, success — only those that apply.
  5. Behavior. What happens on interaction: keyboard, mouse, touch, and what triggers state changes. Cover edge cases: empty input, long content, error recovery.
  6. Tokens. Map every styleable property to a token name from the system (use {{token_system}} naming).
  7. Accessibility. ARIA roles, keyboard support, focus management, contrast requirements, screen reader announcements. Be specific.
  8. Do / Don't. 3 do's and 3 don'ts with one-line rationale each.

  Rules:
  - No vague words: "appropriate spacing" is wrong; "spacing.md (12px)" is right.
  - If a state doesn't exist (eg "loading" doesn't apply to this component), say "N/A — this component is not async."
  - Accessibility section must include keyboard, ARIA, and at least one screen reader announcement string.

  Output: the full spec in markdown.
variables:
  - "{{component_name}}"
  - "{{usage_context}}"
  - "{{design_system}}"
  - "{{token_system}}"
  - "{{framework}}"
  - "{{similar_components}}"
exampleInput: |
  component_name: Toast notification
  usage_context: System feedback after async actions (save, delete, undo). Surfaces in bottom-right on desktop, bottom-center on mobile. Auto-dismisses except for error variant.
  design_system: Helix DS v3
  token_system: Helix tokens — color.intent.{success,warning,danger,info}, spacing.{xs,sm,md,lg}, radius.{sm,md,lg}, shadow.{1,2,3}, motion.{fast,base,slow}
  framework: React + Tailwind, headless component pattern
  similar_components: Banner (inline), Modal (blocking), Tooltip (transient hover)
exampleOutput: |
  # Toast Notification

  ## 1. Purpose
  A non-blocking, time-limited message that confirms the result of an async action or surfaces a system event. Use Toast for transient feedback like "Invoice saved" or "Connection lost — retrying." Do NOT use Toast for content that requires user action; use Modal or Banner instead. Do NOT use it for validation errors on a specific field; use inline error states.

  ## 2. Anatomy
  1. Container (rounded surface with shadow)
  2. Leading icon (intent-colored)
  3. Title (one line, required)
  4. Description (optional, max 2 lines)
  5. Action button (optional, eg "Undo")
  6. Dismiss button (X, top-right)

  ## 3. Variants
  - Info — neutral system events (default)
  - Success — completed actions
  - Warning — non-blocking issues that may need user attention
  - Danger — failures and errors that the user should see

  ## 4. States
  - Default — visible, animated in
  - Hover — pauses auto-dismiss timer; subtle elevation increase
  - Focus-visible — 2px focus ring on dismiss/action buttons; container itself is not focusable
  - Dismissing — animated out
  - Loading — N/A (Toasts are not async)
  - Error — N/A (the Danger variant covers this)

  ## 5. Behavior
  - Appears with a 200ms slide-and-fade animation from bottom edge.
  - Auto-dismisses after 5s for Info/Success/Warning. Danger variant requires manual dismissal.
  - Hovering the toast pauses the dismiss timer; mouseleave resumes it.
  - Stack: max 3 visible simultaneously. Newest on top. 4th and beyond queue.
  - Dismiss button (X) is keyboard accessible via Tab; Esc dismisses the most recent toast.
  - Optional Action button fires its callback and dismisses the toast unless callback returns false.
  - If a toast with identical title fires within 2s of an existing one, increment a counter badge instead of stacking a duplicate.

  ## 6. Tokens
  - Container background: color.surface.elevated
  - Container border-radius: radius.md
  - Container shadow: shadow.3
  - Container padding: spacing.md (16px)
  - Inter-element gap: spacing.sm (8px)
  - Title typography: text.body.md.semibold
  - Description typography: text.body.sm
  - Icon color (Info): color.intent.info
  - Icon color (Success): color.intent.success
  - Icon color (Warning): color.intent.warning
  - Icon color (Danger): color.intent.danger
  - Animation duration: motion.base (200ms)

  ## 7. Accessibility
  - Container role: status for Info/Success/Warning; role: alert for Danger.
  - aria-live: polite (Info/Success/Warning) or assertive (Danger).
  - Dismiss button: aria-label="Dismiss notification".
  - Action button uses standard <button> semantics.
  - Container itself is NOT in the tab order. Tab moves to action and dismiss buttons only.
  - Esc dismisses the most-recently-shown toast and returns focus to the previously focused element.
  - Screen reader announcement on appear: "{{title}}. {{description}}. {{action_label or 'Press Escape to dismiss.'}}"
  - Reduced motion (prefers-reduced-motion: reduce): replace slide-and-fade with instant appear/disappear.
  - Contrast: title and description meet WCAG AA (4.5:1) on the elevated surface.

  ## 8. Do / Don't
  Do:
  - Pair Success toasts with an Undo action when the action is reversible — turns a notification into a safety net.
  - Keep titles under 50 characters. Toasts are scanned, not read.
  - Use Danger variant for irreversible failures (network errors, save failed) so users can't miss them.

  Don't:
  - Don't put critical information only in a Toast — they're transient and a user may miss them.
  - Don't stack more than 3. Beyond that, use a Notification Center.
  - Don't fire a Toast for input validation — use inline field errors.
tips:
  - "Specs that read like contracts ship faster than specs that read like prose. Tables and bullets, not paragraphs."
  - "The 'Don't use this when' clause prevents misuse far better than usage guidelines do."
  - "If you can't name a token for a property, that's a missing token, not a design decision. Flag it."
  - "Always include a screen reader announcement string. Engineers will copy-paste it; without one they'll guess."
  - "Pair the spec with a working Storybook entry, not just a Figma file. Specs go stale; live components don't."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - design-token-naming
  - layout-rationale-doc
  - design-system-rfc
tags:
  - ui
  - design-system
  - component-spec
  - engineering-handoff
  - accessibility
---
