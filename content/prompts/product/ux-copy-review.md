---
title: "Review and improve UX copy for a set of UI screens"
slug: ux-copy-review
function: product
role: product-design
description: "Audit and rewrite UI copy across a set of screens to improve clarity, tone consistency, and action completion — applying UX writing principles."
useCase: "Use this prompt when you've designed screens and need someone to audit the copy before shipping. Works best when you provide the screen copy in context (what's on each screen, what it does, what action it's asking for). Good UX copy is the highest-ROI design change most teams don't invest in."
prompt: |
  You are an expert UX writer with deep experience writing clear, effective interface copy. Review and improve the UI copy described below.

  **Product:** {{product_name}}
  **Brand voice:** {{brand_voice}} (e.g., "professional but warm, clear and direct, never jargon")
  **Target users:** {{target_users}}
  **Screen or flow being reviewed:** {{screen_flow}}
  **Copy to review:** {{copy_to_review}}
  **Known issues or concerns:** {{known_issues}}
  **Character or word limits (if any):** {{limits}}

  Review the copy across these dimensions, then provide rewrites:

  ## 1. Copy Audit

  Review each piece of copy and flag issues using these categories:

  **Clarity issues:**
  - Jargon or technical language users won't understand
  - Ambiguous labels (could mean two things)
  - Passive voice that obscures who's doing what
  - Vague descriptions that don't tell users what will happen

  **Tone issues:**
  - Copy that's too formal or too casual for the context
  - Error messages that blame the user
  - Empty marketing language that adds no information
  - Inconsistent voice across screens

  **Hierarchy and structure issues:**
  - Headlines that don't do work (just repeat the button label)
  - Body copy that could be shorter without losing meaning
  - CTAs that describe the interface instead of the user's goal

  **UX writing principles to apply:**
  - Headline: tell users what to do (imperative) or what value they get
  - Body: context, only if needed — cut ruthlessly
  - CTA: match the action to what clicking actually does ("Get started" vs. "Create account")
  - Error messages: state what happened, what to do next — never blame
  - Empty states: explain why empty, show what's possible, give the first action
  - Confirmation messages: confirm what happened, tell what's next

  ## 2. Annotated Review
  For each piece of copy:
  - **Original:** [Exact copy as written]
  - **Issues found:** [Specific problem]
  - **Rewrite:** [Improved version]
  - **Rationale:** [Why this is better]

  ## 3. Pattern-Level Observations
  After reviewing individual items, identify any patterns:
  - Systemic tone inconsistencies
  - Recurring structural problems
  - Terms that are used inconsistently (same thing called two different things)
  - Missing copy (places where users need guidance but none is provided)

  ## 4. Copywriting Style Guide Recommendations
  Based on the review, recommend 3–5 rules for this product's copy style that would prevent these issues from recurring. Each rule should be:
  - Specific and actionable (not "write clearly")
  - Illustrated with an example of what to do and what not to do
  - Rooted in the brand voice and user context

  ## 5. Priority Fixes
  Rank the most critical copy issues from highest to lowest impact on user success. Flag any copy that is likely causing task abandonment or user errors.
variables:
  - "{{product_name}}"
  - "{{brand_voice}}"
  - "{{target_users}}"
  - "{{screen_flow}}"
  - "{{copy_to_review}}"
  - "{{known_issues}}"
  - "{{limits}}"
exampleInput: |
  product_name: Beacon (employee engagement platform)
  brand_voice: Professional but warm; plain language; never condescending; avoid HR jargon; direct and supportive
  target_users: HR managers at 100–500 person companies, non-technical
  screen_flow: Onboarding — account setup through first survey launch (6 screens)
  copy_to_review: |
    Screen 1 (Welcome):
      Headline: "Welcome to Beacon"
      Body: "Beacon is an employee engagement platform that enables organizations to leverage actionable insights derived from employee sentiment data."
      CTA: "Get Started"

    Screen 2 (Team Setup):
      Headline: "Configure Your Team Settings"
      Body: "Please enter the relevant information pertaining to your organizational unit."
      CTA: "Continue"

    Screen 3 (Survey Creation):
      Headline: "Create Survey"
      Body: "Select a template to begin your survey creation process."
      Error: "An error has occurred. Please try again."

    Screen 4 (Add Recipients):
      Headline: "Add Recipients"
      Body: "Utilize the search functionality to locate and add survey recipients."
      CTA: "Add Members"
      Empty state: "No recipients added."

    Screen 5 (Schedule):
      Headline: "Schedule Survey"
      Body: "Determine the delivery parameters for your survey."
      CTA: "Continue"

    Screen 6 (Confirmation):
      Headline: "Survey Scheduled"
      Body: "Your survey has been successfully processed and will be sent in accordance with the specified delivery parameters."
      CTA: "Go to Dashboard"
  known_issues: Body copy is too formal and jargon-heavy. "Add Members" CTA was flagged in user research as confusing (users think they're adding admin users, not survey recipients).
exampleOutput: |
  ## 1. Copy Audit Summary

  **Critical issues found:**
  - Pervasive formal/corporate tone inconsistent with brand voice
  - Screen 1 body copy is marketing language that explains nothing useful
  - "Add Members" CTA (Screen 4) directly confirmed as causing user confusion in research
  - Error message (Screen 3) gives zero actionable information
  - "Configure Your Team Settings" and "Configure" used to mean setup, not configuration — confusing
  - Passive voice throughout ("has been successfully processed")

  ## 2. Annotated Review

  **Screen 1 — Welcome**

  Original headline: "Welcome to Beacon"
  Issues: Filler copy — adds no information
  Rewrite: "Let's get your team set up"
  Rationale: Tells users what's about to happen; sets expectation that setup is the next step

  Original body: "Beacon is an employee engagement platform that enables organizations to leverage actionable insights derived from employee sentiment data."
  Issues: Dense jargon; "leverage," "actionable insights," "employee sentiment data" — none of these resonate with HR managers; reads like a press release, not a product
  Rewrite: "You'll run surveys, see how your team is doing, and know what to focus on. Takes about 5 minutes to set up."
  Rationale: Describes what users will actually do; sets a concrete time expectation that reduces friction

  Original CTA: "Get Started"
  Issues: Generic; every product says "Get Started"
  Rewrite: "Set up my account"
  Rationale: Specific to the action about to happen; "my" creates ownership

  ---

  **Screen 3 — Survey Creation Error**

  Original error: "An error has occurred. Please try again."
  Issues: Tells the user nothing — what happened? Why? What should they actually do? Provides zero diagnostic or recovery information
  Rewrite: "We couldn't load your templates right now. Check your internet connection and refresh the page — or [contact support] if this keeps happening."
  Rationale: States what happened, provides two specific recovery actions, offers escalation path; doesn't blame the user

  ---

  **Screen 4 — Add Recipients**

  Original CTA: "Add Members"
  Issues: Confirmed in research to cause confusion — users believe this adds admin users (a permission-sensitive action), not survey recipients
  Rewrite: "Add people to this survey"
  Rationale: Explicitly scopes the action to "this survey" — makes clear these people are receiving the survey, not joining Beacon as users

  Original empty state: "No recipients added."
  Issues: States a fact but gives no guidance on what to do or why it matters
  Rewrite: "Your survey won't go anywhere until you add recipients. Search by name or email to add your team."
  Rationale: Explains the consequence (without recipients, the survey can't send), then gives the specific action

  Original body: "Utilize the search functionality to locate and add survey recipients."
  Issues: "Utilize" is formal; "locate and add" is wordy; "search functionality" is technical
  Rewrite: "Search by name or email to add the people who'll take this survey."
  Rationale: Plain language; confirms what "recipient" means (person taking the survey, not admin)

  ---

  **Screen 6 — Confirmation**

  Original body: "Your survey has been successfully processed and will be sent in accordance with the specified delivery parameters."
  Issues: Passive voice ("has been processed"); jargon ("delivery parameters"); no warmth; doesn't tell users what to expect next
  Rewrite: "Your survey is scheduled and on its way. We'll send it on [date] at [time]. Check your dashboard to see responses as they come in."
  Rationale: Active voice; uses actual schedule details (not "delivery parameters"); tells users exactly what to expect and where to go next

  ## 4. Style Guide Recommendations

  **Rule 1: Write buttons as "[verb] [the thing]"**
  - Do: "Create your first survey" / "Add people to this survey" / "Set up my account"
  - Don't: "Continue" / "Get Started" / "Submit"

  **Rule 2: Never use these words:** leverage, utilize, optimal, actionable, facilitate, parameters, sentiment. Replace with plain English.
  - Do: "Use" / "Make the most of" / "Work"
  - Don't: "Leverage" / "Utilize" / "Facilitate"

  **Rule 3: Error messages must include what happened AND what to do**
  - Do: "We couldn't save that. Check your internet connection and try again."
  - Don't: "An error has occurred."

  **Rule 4: Empty states explain why empty, then give the first action**
  - Do: "No surveys yet. Create your first survey to start understanding how your team is doing."
  - Don't: "No surveys found."

  **Rule 5: Confirmation messages state what happened and what's next**
  - Do: "Your survey is live. We'll notify you when responses come in."
  - Don't: "Survey successfully submitted."

  ## 5. Priority Fixes (by impact)
  1. **Screen 4 "Add Members" CTA → "Add people to this survey"** (CRITICAL — directly causing task abandonment per research)
  2. **Screen 3 error message** (HIGH — zero recovery information; causes abandonment)
  3. **Screen 1 body copy** (HIGH — first impression; currently reads like marketing jargon)
  4. **All "Continue" CTAs** (MEDIUM — generic; replace with action-specific labels)
  5. **Screen 6 confirmation** (MEDIUM — passive and jargon-heavy; easy fix)
tips:
  - "The CTA is the most important piece of copy on any screen — it's what users click. Every CTA should describe what clicking it does, not just label the interface."
  - "Error messages are the most neglected UX copy. Good error messages have three parts: what happened, why it happened (if relevant), and exactly what to do next."
  - "Audit your copy by reading it aloud. Anything that sounds like it was written by a lawyer rather than a person needs to be rewritten."
  - "The 'empty state' is your second chance at onboarding. Don't just show a blank screen — explain what's missing, why it matters, and what to do first."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - design-critique-guide
  - accessibility-audit-checklist
  - prd-one-pager
tags:
  - ux-writing
  - product-design
  - copy
  - ux-design
  - content-design
---
