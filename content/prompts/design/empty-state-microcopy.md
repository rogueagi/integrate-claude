---
title: "Generate empty-state copy for product surfaces"
slug: empty-state-microcopy
function: design
role: content-design
description: "Write empty-state copy that does three jobs: explains what the surface will look like when populated, gives the user a single concrete next step, and matches brand voice without being cute."
useCase: "Use this when a feature ships with empty states that say 'No items yet!' and a stock illustration. Empty states are some of the highest-leverage copy in a product — they're often the user's first activation moment. This prompt produces empty states that move users forward instead of staring at them."
prompt: |
  You are a content designer writing empty-state copy for a product. Each empty state should: explain what this surface is for, set expectation for what it'll look like populated, and give the user one concrete next step.

  Context:
  - Product: {{product}}
  - Brand voice notes: {{voice}}
  - Audience: {{audience}}
  - List of empty states needed (surface + when it appears): {{empty_states}}
  - Constraints (eg "max 100 chars on title, 200 on body"): {{constraints}}

  For each empty state, produce:

  1. Surface and trigger. (Quote from input.)
  2. Title (short, one line).
  3. Body (1–2 sentences).
  4. Primary CTA label (action-oriented verb phrase).
  5. Secondary action if relevant (eg "Use sample data," "See an example") — only when it adds value.
  6. Notes. One line on what you're doing differently than the obvious version.

  Rules:
  - Title: tell the user what's missing in their words, not yours. ("No invoices yet" beats "No data found.")
  - Body: lead with what populating this surface will let them do, not with how to populate it. The "how" is the CTA.
  - Always include a primary CTA. An empty state without one is a dead end.
  - Don't apologize for emptiness ("Looks like there's nothing here yet — that's ok!").
  - Avoid stock empty-state phrases: "Looks like...", "It's quiet here...", "Nothing to see..."
  - If the empty state is permanent (eg the user has no permission), don't suggest an action they can't take — point them to who can.

  After all empty states, write a 2-sentence summary: the dominant value the empty states should communicate, and any pattern of secondary actions you'd recommend the team use consistently.

  Output: numbered empty states with the structure above, then summary.
variables:
  - "{{product}}"
  - "{{voice}}"
  - "{{audience}}"
  - "{{empty_states}}"
  - "{{constraints}}"
exampleInput: |
  product: Helix Analytics — self-serve BI tool
  voice: Calm, capable, non-finance-jargon, slightly dry
  audience: Marketing analysts at SMBs evaluating self-serve BI
  empty_states: |
    - Dashboards page, no dashboards created yet (most users land here right after signup)
    - Charts list inside a dashboard, no charts added yet
    - Saved queries page, no queries saved
    - Alerts page, no alerts set up
    - Team activity feed, no recent team activity (likely a new team)
  constraints: Title max 60 chars, body max 180 chars
exampleOutput: |
  ## 1. Dashboards page — no dashboards yet
  Surface and trigger: First time on Dashboards after signup.
  Title: Build your first dashboard
  Body: Dashboards are where your charts live together — one per question you ask weekly. Start with the sample data if you haven't connected a source yet.
  Primary CTA: New dashboard
  Secondary: Use sample data
  Notes: Doesn't say "no dashboards yet" — assumes the user already knows that. Spends the body on what dashboards do, then offers the sample-data path so users without a connected source aren't stuck.

  ## 2. Charts list inside a dashboard — no charts yet
  Surface and trigger: User just created a dashboard, hasn't added a chart.
  Title: This dashboard is empty
  Body: Add a chart for each metric you want to see together. Most dashboards end up with three to six.
  Primary CTA: Add chart
  Notes: The "three to six" line gives users a benchmark — empty states without a sense of "what does done look like?" leave users guessing.

  ## 3. Saved queries — no queries saved
  Surface and trigger: User clicks Saved Queries; nothing yet.
  Title: Save your queries to reuse them
  Body: When you find a query you'll run again — weekly revenue, last week's signups — save it here. Saved queries can power multiple charts.
  Primary CTA: Write a query
  Secondary: See examples
  Notes: Frames saving as a behavior the user will want, not as a checkbox to complete. Examples link prevents the blank-page problem.

  ## 4. Alerts — no alerts set up
  Surface and trigger: User on Alerts page, none configured.
  Title: Get notified when numbers move
  Body: Set up an alert and we'll email or Slack you when a metric crosses a threshold — like "MRR drops below $40K" or "signups jump 20%."
  Primary CTA: Create alert
  Notes: Two concrete examples in the body do more activation work than any abstract pitch could. The examples are picked to be marketing-analyst relevant.

  ## 5. Team activity feed — no recent activity
  Surface and trigger: New team, no charts/dashboards/queries yet from teammates.
  Title: Nothing here yet — your team's edits will show up here
  Body: When teammates create or change dashboards, you'll see it here so you stay in sync without asking.
  Primary CTA: Invite teammates
  Notes: This is the one empty state where "nothing here yet" earns its place — because the surface is genuinely passive (it shows others' actions, not yours). The CTA invites teammates, which is what populates the feed.

  ## Summary
  The dominant value across these states is permission: most users in BI tools don't know what they're "supposed" to do, so the empty state's job is to make the next action feel obvious and small. I'd recommend the team standardize on a "primary CTA + optional sample/example secondary" pattern — the secondary action consistently helps users who aren't ready to commit to their own data yet.
tips:
  - "Lead with what populating this surface will let the user do, not with the action of populating it. The action is the CTA."
  - "When in doubt, give two CTAs: one for users ready to commit (their data) and one for users who aren't (sample / example)."
  - "Concrete example numbers and metrics in body copy ('MRR drops below $40K') beat abstract descriptions every time."
  - "Avoid the cute illustration + cute caption pattern. It's been done; users skim past it now."
  - "An empty state without a CTA is a bug. Treat it that way in design review."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - error-message-rewrite
  - onboarding-microcopy-flow
  - cta-variant-generator
tags:
  - content-design
  - microcopy
  - empty-state
  - ux-writing
  - activation
---
