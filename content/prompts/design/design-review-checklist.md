---
title: "Create a design review checklist for a new feature"
slug: design-review-checklist
function: design
role: design-ops
description: "Generate a tailored design review checklist that covers visual, interaction, accessibility, content, and edge-case considerations for a specific feature — not a generic template."
useCase: "Use this when prepping for design review or reviewing a teammate's work. Generic checklists miss feature-specific risk; this prompt produces a checklist that names the things this particular feature is most likely to get wrong. Best for senior designers running review and tech leads checking design before kickoff."
prompt: |
  You are a senior design reviewer producing a tailored review checklist for a specific feature. The checklist should focus on the things this feature is most likely to get wrong, not boilerplate items.

  Context:
  - Feature: {{feature}}
  - Product context: {{product_context}}
  - Design system in use: {{design_system}}
  - Feature complexity (simple / medium / complex): {{complexity}}
  - Known risk areas the team has flagged: {{risk_areas}}
  - Reviewer role and depth (eg "lead designer, 30 min review"): {{review_role}}

  Produce a checklist organized in these sections:

  1. Use case and scope. 3–5 questions verifying the design solves the right problem at the right scope. (eg "Does this serve the primary user job, or has it expanded to handle edge cases that should be a separate pattern?")
  2. Visual and layout. 4–6 items specific to this feature — not generic ("uses tokens") but specific ("the metrics strip should pin to top on scroll because users glance at it constantly").
  3. Interaction and behavior. 4–6 items — what happens on hover, focus, error, slow network, empty state, loading, edge cases like very long content or multi-line names.
  4. Accessibility. 4–6 items specific to this feature, not a generic WCAG list. Include keyboard support, screen reader announcements, contrast where it's at risk.
  5. Content and copy. 3–5 items — error messages, empty states, button labels, microcopy density.
  6. Edge cases and failure modes. 4–6 items the design could fail at. Be specific: what if no data? What if 1000 items? What if user has no permissions? What about RTL? Slow networks?
  7. Design system alignment. 3–4 items — what is or isn't following the system, what new tokens or components were created, whether anything should be promoted to the system.
  8. Cross-functional handoff. 2–3 items confirming engineering, content, and any other partners have what they need.

  Rules:
  - Items must be specific to the feature. If an item could apply to literally any feature, replace it with something this feature uniquely needs.
  - Phrase items as questions or "verify that..." statements. "Looks good" is not a checklist item.
  - For each section, prioritize items by likelihood-of-being-wrong, not alphabetically.
  - End with one "if you only check three things" callout — the three highest-risk items across the whole checklist.

  Output: the checklist, then the top-3 callout.
variables:
  - "{{feature}}"
  - "{{product_context}}"
  - "{{design_system}}"
  - "{{complexity}}"
  - "{{risk_areas}}"
  - "{{review_role}}"
exampleInput: |
  feature: Bulk approval flow for purchase orders
  product_context: Vantage Procurement — B2B SaaS used by ops managers and finance teams; bulk approval lets a finance approver process 50+ POs at once
  design_system: Vantage DS v2 (mature, well-adopted)
  complexity: complex
  risk_areas: Mistaken bulk approvals (irreversible), accessibility on tables with checkboxes, performance with large selections
  review_role: Lead designer, 45-minute review of a draft Figma file
exampleOutput: |
  # Design Review Checklist — Bulk approval flow for POs

  ## 1. Use case and scope
  - Does the flow serve the primary use case (finance approver processing 50+ POs at end of month) or has it expanded to handle every approval type?
  - Is bulk approval scoped to "approve" only, or is "reject" also bulk? (Different cognitive load — verify intent.)
  - Does the design address the partial-approval case (approver wants to approve 47 of 50 with the same comment)?
  - Is there a clear rule for which POs are bulk-approvable vs. which require individual review (eg amount thresholds, missing fields)?

  ## 2. Visual and layout
  - Is the selected count persistently visible during scroll? At 50+ selections, users lose track without persistent reinforcement.
  - Does the bulk action bar appear at the bottom (sticky) or top? Bottom is better — closer to the thumb on touch and easier to scan against.
  - Are individual rows visually distinguishable when selected vs. unselected at quick scan? With 50 selected, this matters more than usual.
  - Does the table layout hold up at 7+ columns and 100+ rows on the smallest supported screen?
  - Is the approver's avatar or name shown in the action bar so they confirm who they're acting as?

  ## 3. Interaction and behavior
  - Hover state on rows shouldn't toggle selection (easy to misimplement; major bulk-approval bug source).
  - Shift-click range selection — verified to work and visually feedback?
  - "Select all" — does it select visible rows only, all matching the filter, or all in the table? This must be unambiguous.
  - Confirmation step: is there a final "approve 50 POs" modal that summarizes total $ amount and highlights any unusually large items?
  - Undo: is there a window? If irreversible, is the warning in the confirmation modal stark enough?
  - What happens if the network drops mid-bulk-approve? Does the UI know which items succeeded vs. failed?

  ## 4. Accessibility
  - Checkboxes have proper labels associated to row content (not just "checkbox") for screen readers.
  - "Select all" announces the count of items selected, eg "50 of 142 selected."
  - Bulk action bar has role="region" and an aria-label so screen readers announce when it appears.
  - Keyboard: can a keyboard-only user select a range? (Shift+arrow + Space pattern documented?)
  - Focus management after bulk approve: where does focus go? (Should land on a confirmation summary, not back at top of table.)
  - Confirmation modal has trap focus and Esc cancels.

  ## 5. Content and copy
  - Confirmation modal copy names the action specifically: "Approve 50 POs totaling $247,300?" — not "Are you sure?"
  - Success state copy: "Approved 50. 2 failed — see details" with specific recovery, not generic "Done."
  - Empty state when filter excludes all items: tells the user the filter is the cause, not "no POs."
  - Bulk action button label is verb-led and specific: "Approve selected" not "Submit."
  - Tooltip on disabled bulk action explains why (eg "Select POs to enable").

  ## 6. Edge cases and failure modes
  - 1 item selected — does the bulk flow gracefully degrade or force the user into single-item flow?
  - 500+ items selected — performance? Pagination? Does the UI freeze?
  - User has permission for some POs in selection but not others — clear messaging?
  - PO data changes mid-selection (another approver acts) — does the UI stay consistent or error gracefully?
  - User navigates away with selections active — saved or lost? (Either is fine, but it must be clear.)
  - Failure during bulk approve: which items succeeded? Can the user retry just the failures?

  ## 7. Design system alignment
  - Bulk action bar — is this a new pattern or does it use the existing toolbar component?
  - Confirmation modal uses the standard destructive-action variant (this is a high-stakes action; should look like one).
  - If new tokens or components were created (eg sticky bulk-action-bar), are they candidates for promotion to the system?
  - Table selection states match existing data-table component or diverge — flag any divergence.

  ## 8. Cross-functional handoff
  - Engineering knows which interactions need backend confirmation (eg total amount calc) vs. client-side.
  - Content design has reviewed all error and confirmation strings.
  - Has the team that owns the audit log been told what events to expect (50 individual approvals vs. one bulk event)?

  ## If you only check three things
  1. **Confirmation modal specificity.** "Approve 50 POs totaling $247,300?" with the largest item flagged. Most bulk-approval disasters happen because the modal said "Are you sure?" and the user clicked through.
  2. **Failure recovery.** What happens when 3 of 50 fail mid-bulk? The user must know which ones, why, and be able to retry. Generic "something went wrong" is unacceptable here.
  3. **"Select all" semantics.** Visible rows? Filtered set? Entire table? This must be unambiguous in copy and behavior — the same word means different things in different table libraries.
tips:
  - "Tailored checklists catch 3–5x more real issues than generic ones. The 30 minutes to write one saves 2 hours of design review."
  - "Sort items by likelihood-of-being-wrong, not by category logic. The reviewer should hit the highest-risk items first."
  - "The 'if you only check three things' callout is the part senior reviewers actually read. Spend disproportionate time on it."
  - "Items phrased as questions are more useful than declarative statements — they invite the reviewer to actually look."
  - "Run this prompt twice with different reviewer roles (lead designer vs. PM vs. engineer). The checklists shift, and that's what reviews need."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - heuristic-evaluation
  - component-spec-doc
  - design-team-rituals-charter
tags:
  - design-ops
  - design-review
  - checklist
  - quality
  - process
---
