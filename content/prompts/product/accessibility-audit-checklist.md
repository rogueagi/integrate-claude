---
title: "Create an accessibility audit checklist for a product feature"
slug: accessibility-audit-checklist
function: product
role: product-design
description: "Generate a comprehensive WCAG-based accessibility audit checklist tailored to a specific product feature or screen, ready for design and engineering review."
useCase: "Use this prompt when preparing to ship a new feature and need to verify it meets accessibility standards. Works for both design reviews (pre-engineering) and QA (pre-ship). Produces a checklist specific to your feature type rather than a generic WCAG reference."
prompt: |
  You are an accessibility specialist and UX designer. Create a detailed accessibility audit checklist for the feature described below.

  **Feature or screen being audited:** {{feature_name}}
  **Product type:** {{product_type}} (web app, mobile app, native desktop, etc.)
  **Key UI components in this feature:** {{ui_components}} (e.g., forms, modals, tables, navigation, media)
  **Target compliance level:** {{compliance_level}} (WCAG 2.1 AA is standard; AAA is enhanced)
  **Known accessibility concerns:** {{known_concerns}}
  **Testing tools available:** {{testing_tools}}
  **Who will conduct the audit:** {{auditors}} (designer, developer, dedicated QA, external auditor)

  Generate a feature-specific accessibility audit checklist organized by category. For each item:
  - **Item ID:** AC-XXX
  - **Requirement:** What must be true
  - **WCAG criterion:** The specific WCAG success criterion (e.g., 1.4.3 Contrast Minimum)
  - **Level:** A / AA / AAA
  - **How to test:** Specific testing method (automated tool, manual check, screen reader test, etc.)
  - **Pass criteria:** What counts as passing this check
  - **Fail examples:** Common failure modes to look for
  - **Status:** [ ] Not tested / [ ] Pass / [ ] Fail / [ ] N/A

  ## Categories (adapt based on UI components present):

  ### 1. Perceivable
  **1a. Visual — Color and Contrast**
  - Text contrast ratios
  - Non-text contrast (UI components, graphics)
  - Color not used as the only visual indicator

  **1b. Visual — Text and Images**
  - Text alternatives for non-text content
  - No text in images (or alt text captures content)
  - Text resize to 200% without loss of functionality

  **1c. Forms and Input Labels**
  - All inputs have visible, programmatic labels
  - Error messages are specific and identify the field
  - Required fields identified before error
  - Instructions provided where needed

  **1d. Multimedia (if applicable)**
  - Captions for video
  - Transcripts for audio-only
  - Audio descriptions for video

  ### 2. Operable
  **2a. Keyboard Navigation**
  - All interactive elements keyboard-accessible
  - Logical, predictable tab order
  - No keyboard traps
  - Focus is visible at all times

  **2b. Modals, Dialogs, and Overlays (if applicable)**
  - Focus moves to modal when opened
  - Focus confined within open modal
  - Focus returns to trigger element when closed
  - Modal dismissible via Escape key

  **2c. Timing and Interruptions**
  - Users can extend or disable time limits
  - Auto-updating content can be paused
  - No content flashes more than 3 times per second

  ### 3. Understandable
  **3a. Labels and Instructions**
  - Labels clearly identify the purpose of inputs
  - Error messages tell users what to do (not just what went wrong)
  - Page language is set correctly in HTML

  **3b. Predictability**
  - Focus change doesn't trigger unexpected context change
  - Consistent navigation and labeling across the feature

  ### 4. Robust
  **4a. Semantic HTML and ARIA**
  - Proper use of HTML semantic elements
  - ARIA roles, properties, and states used correctly (or not at all)
  - No ARIA that conflicts with native HTML semantics
  - Interactive components communicate state changes to assistive technology

  **4b. Screen Reader Compatibility**
  - Content is readable and navigable with a screen reader
  - Dynamic content changes are announced appropriately
  - Custom components have appropriate accessible names

  ### 5. Testing Summary
  - Automated scan results (axe, Lighthouse, WAVE)
  - Manual keyboard test results
  - Screen reader test results (specify which SR + browser combination)
  - Issues found with severity: Critical / High / Medium / Low

  ### 6. Remediation Priority
  Group issues by:
  - Must fix before launch (Critical/High)
  - Should fix soon (Medium)
  - Nice to fix (Low / AAA aspirational)
variables:
  - "{{feature_name}}"
  - "{{product_type}}"
  - "{{ui_components}}"
  - "{{compliance_level}}"
  - "{{known_concerns}}"
  - "{{testing_tools}}"
  - "{{auditors}}"
exampleInput: |
  feature_name: Survey creation and scheduling flow (6-screen onboarding wizard)
  product_type: Web application (React)
  ui_components: Multi-step wizard with progress indicator, text inputs, radio buttons, dropdown selects, date/time picker, search with autocomplete, modal confirmation dialog
  compliance_level: WCAG 2.1 AA
  known_concerns: The date/time picker is a custom component and may not be keyboard-accessible. The autocomplete search hasn't been tested with screen readers. Progress indicator uses color to show completion.
  testing_tools: axe DevTools (browser extension), NVDA + Chrome (Windows), VoiceOver + Safari (Mac), keyboard-only testing
  auditors: Front-end developer + UX designer (joint audit before QA handoff)
exampleOutput: |
  # Accessibility Audit Checklist: Survey Creation Flow
  **Feature:** Survey creation and scheduling | **Standard:** WCAG 2.1 AA | **Auditors:** Dev + Designer

  ## 1. Perceivable

  ### 1a. Color and Contrast

  | ID | Requirement | WCAG | Level | How to Test | Pass Criteria | Status |
  |----|-------------|------|-------|-------------|---------------|--------|
  | AC-001 | Normal text (< 18pt) has 4.5:1 contrast ratio against background | 1.4.3 | AA | Colour Contrast Analyser on all text colors | Ratio ≥ 4.5:1 | [ ] |
  | AC-002 | Large text (≥ 18pt or 14pt bold) has 3:1 contrast ratio | 1.4.3 | AA | Colour Contrast Analyser | Ratio ≥ 3:1 | [ ] |
  | AC-003 | Progress indicator step completion not conveyed by color alone | 1.4.1 | A | Remove color (grayscale browser filter): is completion still communicated? | Completion status visible without color (icon, text, shape) | [ ] |
  | AC-004 | Form input borders have 3:1 contrast against background | 1.4.11 | AA | Test inactive input borders | All input borders ≥ 3:1 ratio | [ ] |

  *Known concern: Progress indicator uses color — AC-003 is high priority. Check whether completed steps have a checkmark or text label in addition to color change.*

  ### 1b. Forms and Input Labels

  | ID | Requirement | WCAG | Level | How to Test | Pass Criteria | Status |
  |----|-------------|------|-------|-------------|---------------|--------|
  | AC-010 | Every form input has a programmatic label | 1.3.1, 4.1.2 | A | Inspect DOM: each input has associated `<label>` or `aria-label` | No unlabeled inputs in DOM | [ ] |
  | AC-011 | Placeholder text is not the only label | 1.3.1 | A | Remove all placeholder text: are all inputs still labeled? | Visible label present even when input has content | [ ] |
  | AC-012 | Required fields are identified before submission | 3.3.2 | AA | Check for asterisk + legend or "required" in label | Required indicator present; asterisk meaning explained | [ ] |
  | AC-013 | Error messages identify the specific field and describe how to fix | 3.3.1, 3.3.3 | A/AA | Submit form with errors; read error messages | Error text includes field name and corrective instruction | [ ] |

  ## 2. Operable

  ### 2a. Keyboard Navigation

  | ID | Requirement | WCAG | Level | How to Test | Pass Criteria | Status |
  |----|-------------|------|-------|-------------|---------------|--------|
  | AC-020 | All interactive elements reachable by keyboard Tab key | 2.1.1 | A | Tab through entire flow without mouse | Every button, input, link, select reached | [ ] |
  | AC-021 | Tab order is logical and follows visual reading order | 1.3.2 | A | Tab through; check order matches visual layout | Tab sequence top-to-bottom, left-to-right matches design | [ ] |
  | AC-022 | Focus indicator is visible at all times | 2.4.7 | AA | Tab through flow; verify focus ring always visible | Visible focus ring on every focused element (not just browser default removed) | [ ] |
  | AC-023 | Custom date/time picker is fully keyboard-operable | 2.1.1 | A | Open picker with keyboard, navigate days, select date | All date picker actions completable without mouse | [ ] |

  *Known concern: AC-023 is flagged as high risk. Test the date picker first. If it fails, it may need to be replaced with a native `<input type="date">` or a more accessible component library.*

  ### 2b. Modal Confirmation Dialog

  | ID | Requirement | WCAG | Level | How to Test | Pass Criteria | Status |
  |----|-------------|------|-------|-------------|---------------|--------|
  | AC-030 | Focus moves to modal when it opens | 2.4.3 | A | Open modal via keyboard; check focus location | Focus lands inside modal (on heading or first interactive element) | [ ] |
  | AC-031 | Focus is trapped within the modal while open | 2.1.2 | A | Tab through modal; verify Tab doesn't escape | Tab cycles only through modal elements | [ ] |
  | AC-032 | Modal can be closed with Escape key | 2.1.1 | A | Press Escape while modal is open | Modal closes | [ ] |
  | AC-033 | Focus returns to triggering element when modal closes | 2.4.3 | A | Close modal; check focus location | Focus returns to button that opened modal | [ ] |

  ## 4. Screen Reader

  | ID | Requirement | WCAG | Level | How to Test | Pass Criteria | Status |
  |----|-------------|------|-------|-------------|---------------|--------|
  | AC-050 | Autocomplete search suggestions are announced as they appear | 4.1.3 | AA | Use NVDA + Chrome; type in search field | Screen reader announces "X results available" or each option | [ ] |
  | AC-051 | Step progression is announced when moving between wizard steps | 4.1.3 | AA | Use VoiceOver; move through wizard steps | SR announces which step user is on (e.g., "Step 3 of 6: Add recipients") | [ ] |
  | AC-052 | Error messages are announced without requiring user to move focus | 4.1.3 | AA | Submit form with errors; listen | Errors announced immediately after failed submit | [ ] |

  ## 5. Testing Summary Template

  | Tool | Test Date | Issues Found | Critical | High | Medium | Low |
  |------|-----------|-------------|----------|------|--------|-----|
  | axe DevTools | | | | | | |
  | Keyboard-only | | | | | | |
  | NVDA + Chrome | | | | | | |
  | VoiceOver + Safari | | | | | | |

  ## 6. Remediation Priority

  **Must fix before launch:**
  - Any AC-0XX items rated A (WCAG Level A failures are blocking)
  - AC-003 (progress indicator color-only) — confirmed as a known concern
  - AC-023 (date picker keyboard access) — flagged as high risk

  **Should fix soon:**
  - Any remaining AA failures not blocking launch

  **Nice to fix:**
  - Enhancements beyond WCAG 2.1 AA (AAA criteria)
tips:
  - "Run the automated tool (axe, Lighthouse) first — it catches 30–40% of issues in minutes. Manual testing catches what automation misses, especially keyboard navigation and screen reader experience."
  - "The date/time picker is the most common accessibility landmine in web apps. Test it keyboard-only first, before investing time in other checks."
  - "WCAG Level A failures are blocking — they mean some users literally cannot use the feature. Level AA failures are serious. Never ship with Level A failures."
  - "Test with at least two screen reader / browser combinations. NVDA + Chrome and VoiceOver + Safari reveal different issues. What passes one often fails the other."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - design-critique-guide
  - ux-copy-review
  - design-system-documentation
  - prd-one-pager
tags:
  - accessibility
  - wcag
  - product-design
  - ux-design
  - quality-assurance
---
