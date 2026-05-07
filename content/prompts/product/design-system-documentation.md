---
title: "Write design system component documentation"
slug: design-system-documentation
function: product
role: product-design
description: "Generate comprehensive design system documentation for a UI component — covering usage guidelines, variants, states, accessibility, and code examples."
useCase: "Use this prompt when adding a new component to your design system or when existing component documentation is insufficient. Well-documented components reduce design inconsistency, speed up engineering implementation, and prevent misuse."
prompt: |
  You are a design systems expert with experience in both design and frontend engineering. Write comprehensive design system documentation for the component described below.

  **Component name:** {{component_name}}
  **Component description:** {{component_description}}
  **Product context:** {{product_context}}
  **Primary use cases:** {{use_cases}}
  **Variants and states:** {{variants_states}}
  **Design tokens it uses:** {{design_tokens}}
  **Related components:** {{related_components}}
  **Accessibility requirements:** {{accessibility_requirements}}
  **Code framework:** {{code_framework}} (e.g., React, Vue, Angular, or framework-agnostic)

  Write component documentation with these sections:

  ## Overview
  - Component name, version, status (Stable / Beta / Deprecated)
  - One-sentence description
  - When to use this component
  - When NOT to use this component (and what to use instead)

  ## Anatomy
  Describe the component's parts and their purpose:
  - List each distinct part with its name and function
  - Note which parts are optional vs. required
  - Reference how the parts are named in the code (props, slots, etc.)

  ## Variants
  For each variant (type/appearance variation):
  - Variant name
  - When to use this variant specifically
  - Visual description
  - Any restrictions on usage

  ## States
  For each interaction state:
  - State name (default, hover, focus, active, disabled, loading, error, empty, etc.)
  - When this state applies
  - Visual behavior
  - Any state-specific accessibility requirements

  ## Usage Guidelines

  ### Do
  4–6 specific "do" guidelines with brief rationale. Focus on correct usage patterns.

  ### Don't
  4–6 specific "don't" guidelines with brief rationale. Focus on common mistakes.

  ### Content Guidelines
  - Label/copy requirements and recommendations
  - Character limits (if applicable)
  - Tone and voice guidance for content within this component

  ## Accessibility

  ### Keyboard Interaction
  - Tab behavior
  - Enter/Space behavior
  - Arrow key navigation (if applicable)
  - Escape behavior (if applicable)
  - Expected focus behavior

  ### Screen Reader
  - ARIA roles and attributes used
  - How the component is announced
  - Dynamic state changes and live region requirements

  ### Color and Contrast
  - Minimum contrast requirements met by this component
  - How the component behaves in high-contrast mode

  ## Design Tokens
  List all design tokens this component consumes, grouped by category:
  | Token | Purpose | Default Value |

  ## Implementation

  ### Props/API
  | Prop | Type | Required | Default | Description |

  ### Code Examples
  - Basic usage example
  - Variant examples
  - With event handlers
  - Accessibility attributes example

  ### Integration Notes
  - Any implementation caveats
  - Performance considerations
  - Browser/platform compatibility notes

  ## Changelog
  | Version | Date | Change |
variables:
  - "{{component_name}}"
  - "{{component_description}}"
  - "{{product_context}}"
  - "{{use_cases}}"
  - "{{variants_states}}"
  - "{{design_tokens}}"
  - "{{related_components}}"
  - "{{accessibility_requirements}}"
  - "{{code_framework}}"
exampleInput: |
  component_name: Alert
  component_description: Inline notification that communicates important information, status updates, warnings, or errors in context
  product_context: Beacon — React web application
  use_cases: Form validation errors, success confirmations after actions, system warnings, informational notices
  variants_states: Variants — info (blue), success (green), warning (yellow), error (red). States — default (dismissible vs. persistent), with/without icon, with/without action link
  design_tokens: color.feedback.info, color.feedback.success, color.feedback.warning, color.feedback.error, spacing.md, borderRadius.sm, typography.body.sm
  related_components: Toast (for ephemeral notifications), Banner (for page-level alerts), InlineError (for field-level validation)
  accessibility_requirements: WCAG 2.1 AA; role="alert" for errors and warnings; role="status" for info and success; dismissible button must be keyboard-accessible
  code_framework: React (TypeScript)
exampleOutput: |
  # Alert Component
  **Version:** 2.1.0 | **Status:** Stable | **Owner:** Design Systems Team

  ## Overview
  **Description:** Inline notifications that communicate important feedback, status updates, or warnings in context.

  **Use this component when:**
  - Communicating the result of a user action (form saved, survey launched)
  - Warning users about a condition that requires attention before proceeding
  - Displaying validation errors after form submission
  - Showing system status that directly affects the current task

  **Don't use this component when:**
  - The notification is temporary and should disappear automatically → use **Toast**
  - The notification applies to the entire page, not a specific section → use **Banner**
  - The error is for a single form field → use **InlineError** instead

  ## Anatomy
  | Part | Purpose | Required |
  |------|---------|----------|
  | Container | Background and border that visually groups the alert | Yes |
  | Icon | Reinforces the alert type (info, success, warning, error) | Recommended |
  | Title | Brief summary of the alert (bolded) | Optional |
  | Body | Detailed message content | Yes |
  | Action link | Optional text link to take a specific action | Optional |
  | Dismiss button | Closes the alert (only on dismissible variant) | Conditional |

  ## Variants
  | Variant | When to Use |
  |---------|------------|
  | Info (blue) | Helpful information; not a result of user action |
  | Success (green) | Confirms a successful action |
  | Warning (yellow) | Warns of a condition that may cause problems |
  | Error (red) | Reports a failure or required correction |

  ## States
  | State | When | Visual Behavior |
  |-------|------|-----------------|
  | Default (persistent) | Alert that must be acknowledged | Stays visible until user acts |
  | Dismissible | Alert that user can close | Shows X button; fades on dismiss |
  | With action | Alert requiring follow-up | Shows text link in alert body |

  ## Usage Guidelines

  ### Do
  - Use concise, specific language that tells users what happened and what to do
  - Match the variant to the severity — don't use "warning" for success states
  - Place the alert close to the content it describes (field, form, section)
  - Include an action link when there's a clear next step the user can take

  ### Don't
  - Don't use alerts for marketing messages or upsell prompts — use a different component
  - Don't use error variant for anything that isn't actually an error
  - Don't stack more than 2 alerts in the same view
  - Don't use placeholder text as the alert message

  ### Content Guidelines
  - Title: 5 words max; imperative or descriptive ("Survey sent" / "Check your email")
  - Body: State what happened, then what to do. Max 2 sentences.
  - Action link: Sentence case, verb-led ("View details" not "Click here")

  ## Accessibility

  ### ARIA Roles
  - Error and warning variants: `role="alert"` (announces immediately to screen readers)
  - Info and success variants: `role="status"` (announces when reader is idle)
  - Dismiss button: `aria-label="Dismiss alert"` (not just an icon without label)

  ### Keyboard Interaction
  | Key | Action |
  |-----|--------|
  | Tab | Moves focus to dismiss button (if dismissible) or action link |
  | Enter / Space | Activates focused button or link |
  | Escape | Dismisses alert (if dismissible) |

  ## Props / API
  | Prop | Type | Required | Default | Description |
  |------|------|----------|---------|-------------|
  | variant | 'info' \| 'success' \| 'warning' \| 'error' | Yes | — | Visual style and ARIA role |
  | title | string | No | — | Optional bold title |
  | children | ReactNode | Yes | — | Alert body content |
  | dismissible | boolean | No | false | Shows dismiss button if true |
  | onDismiss | function | No | — | Callback when dismissed |
  | action | { label: string; onClick: function } | No | — | Optional action link |
  | showIcon | boolean | No | true | Shows variant icon |

  ## Code Examples

  ```tsx
  // Basic error alert
  <Alert variant="error">
    We couldn't save your changes. Check your connection and try again.
  </Alert>

  // Success with dismiss
  <Alert variant="success" title="Survey sent" dismissible onDismiss={handleDismiss}>
    Your survey was sent to 48 recipients.
  </Alert>

  // Warning with action
  <Alert
    variant="warning"
    action={{ label: "Add recipients", onClick: handleAddRecipients }}
  >
    Your survey has no recipients. Add people before scheduling.
  </Alert>
  ```
tips:
  - "The 'Don't use when' section is the most frequently missing part of component docs — and the most useful. When should designers use Toast instead of Alert? Document that decision."
  - "ARIA role selection between `role='alert'` and `role='status'` is not obvious. Document which variants use which and why — this prevents accessibility bugs."
  - "Include real copy examples in Content Guidelines. 'Use concise language' is not actionable. 'Title: 5 words max; action verb first' is."
  - "Version the documentation alongside the component. Designers and engineers using stale docs cause more design system inconsistency than bad components."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - accessibility-audit-checklist
  - design-critique-guide
  - ux-copy-review
  - readme-draft
tags:
  - design-systems
  - product-design
  - documentation
  - components
  - accessibility
---
