---
title: "Document the rituals and rhythms for a design team"
slug: design-team-rituals-charter
function: design
role: design-ops
description: "Produce a charter that names every ritual on a design team — crit, review, all-hands, 1:1s — with cadence, attendees, format, and the specific outcome each ritual is supposed to produce."
useCase: "Use this when scaling a design team past 5–6 people, when meetings have multiplied with no agreed purpose, or when onboarding a new design hire who needs to know what shows up on their calendar and why. Best for design managers, design ops leads, and team leads doing an annual reset."
prompt: |
  You are a design ops lead writing a rituals charter for a design team. The charter should make every meeting's purpose explicit and prevent ritual creep.

  Context:
  - Team: {{team}}
  - Team size: {{team_size}}
  - Distribution (colocated / hybrid / fully remote): {{distribution}}
  - Time zones the team spans: {{time_zones}}
  - Current pain points around rituals: {{pain_points}}
  - Existing rituals (if any): {{existing_rituals}}
  - Constraints (eg "max 4 hrs/week of recurring meetings"): {{constraints}}

  Produce a charter with these sections:

  1. Principles (3–4). The rules the rituals follow as a system (eg "every recurring meeting has a written purpose statement," "any ritual without an outcome gets cut at quarterly review").
  2. Rituals. For each ritual, a structured entry:
     - Name and cadence (eg "Weekly crit, Tuesdays 90 min")
     - Purpose (1 sentence — what outcome this ritual produces that nothing else does)
     - Attendees and who facilitates
     - Format (agenda structure, async vs. sync portions)
     - Artifacts (what gets written down or shared after)
     - When to skip it (the explicit case for cancelling — most rituals never have one)
  3. Async patterns. What happens via writing/Slack/Loom instead of meetings — be specific about what kinds of decisions don't need a meeting.
  4. 1:1 patterns. How design managers run 1:1s with reports, and how peer 1:1s work if applicable.
  5. Onboarding ritual map. The first 30 days from a new hire's perspective — which rituals they should attend and which they should skip.
  6. Review and pruning. How rituals get reviewed quarterly: who runs the review, what gets cut by default, what the burden of proof is for adding a new ritual.

  Rules:
  - Every ritual must have a stated outcome that's distinct from every other ritual. If two rituals could produce the same outcome, merge or cut one.
  - "Sync up," "alignment," and "touchbase" are banned as purposes. State the actual outcome.
  - At least one ritual must have a clear "when to skip it" rule. Without one, rituals never get cancelled.
  - The total recurring meeting load on any team member must fit the constraint if specified.

  Output: the full charter.
variables:
  - "{{team}}"
  - "{{team_size}}"
  - "{{distribution}}"
  - "{{time_zones}}"
  - "{{pain_points}}"
  - "{{existing_rituals}}"
  - "{{constraints}}"
exampleInput: |
  team: Product Design team at Helix Analytics
  team_size: 9 designers (6 product, 2 brand, 1 design ops) plus 1 lead
  distribution: Hybrid — 5 in SF, 4 fully remote across PT/ET
  time_zones: PT and ET (8 designers in PT, 2 in ET)
  pain_points: "Weekly all-team meeting has become an update reading session; crit is sporadic and unstructured; new hires don't know what to attend"
  existing_rituals: "Weekly all-team (60 min Tuesdays), occasional crit (no fixed schedule), monthly 1:1 with lead, ad-hoc design reviews via Slack"
  constraints: Max 3 hours/week of recurring meetings per IC; lead can have 5
exampleOutput: |
  # Helix Product Design — Rituals Charter

  ## 1. Principles
  1. **Every ritual has a written purpose statement and a stated outcome.** If we can't write either, we cut the ritual.
  2. **Async is the default; sync is for the work async can't do.** Status, FYI, and information sharing don't earn a meeting.
  3. **Rituals expire on a quarterly review.** Every recurring meeting must justify itself or be cut.
  4. **Time zone respect.** No recurring ritual happens before 9am ET or after 4pm PT. Async is how we cover the gap.

  ## 2. Rituals

  ### Weekly Design Crit — Tuesdays 11am PT / 2pm ET, 60 min
  - **Purpose:** Stress-test in-progress work and produce concrete next steps for the presenter.
  - **Attendees:** All product designers + brand. Design ops attends monthly. Lead facilitates rotation.
  - **Format:**
    - 5 min: presenter posts context in Figma comment thread 1 hour before (async pre-read).
    - 10 min: presenter walks the work (no slides; live in Figma).
    - 35 min: focused critique — one person facilitating, prompts like "what did you struggle with?" before "what should be different?"
    - 10 min: presenter restates the 2–3 changes they're going to make.
  - **Artifacts:** Crit notes doc — sections per presenter, captured in real time by a rotating notetaker.
  - **When to skip:** No one signed up to present 24 hours in advance. Cancel; don't fill with a rerun of last week.

  ### Weekly Design Review — Thursdays 11am PT / 2pm ET, 30 min
  - **Purpose:** Decide whether work-in-progress is ready for engineering handoff. Produces a yes/needs-changes/no decision per item.
  - **Attendees:** Lead + presenting designer + 1 product designer rotation + engineer partner (optional).
  - **Format:**
    - Items submitted async by Wednesday 5pm with a specific "decision sought" line.
    - Live: 5 min per item — presenter states decision sought; reviewers ask clarifying questions; lead calls the decision.
  - **Artifacts:** Decision log with item, decision, owner, deadline.
  - **When to skip:** No items submitted by Wednesday cutoff. Cancelled by Wednesday 6pm Slack message.

  ### Monthly Design Show-and-Tell — First Friday, 60 min
  - **Purpose:** Share what shipped + a single research/inspiration find from each designer. Builds team taste and surfaces learnings.
  - **Attendees:** Whole design team + invited PMs.
  - **Format:** 5-min slots; each designer shares one shipped thing or one find. Lightning style.
  - **Artifacts:** Recorded for those who can't attend; "finds" archived in a shared Notion page.
  - **When to skip:** Holiday week (December last week, July week of 4th).

  ### Lead 1:1s — Weekly 30 min per IC, scheduled by IC
  - **Purpose:** Career growth, project unblocking, two-way feedback. Not status updates.
  - **Attendees:** Lead + IC.
  - **Format:** IC owns the agenda in a shared doc; lead reviews 24 hours ahead and adds items. Status-only weeks default to async (cancel and write).
  - **Artifacts:** Shared running doc with notes per session.
  - **When to skip:** Either party has nothing to discuss; agenda is empty 24 hours ahead. Cancel and write a Slack message.

  ### Quarterly Design Retro — Last Tuesday of quarter, 90 min
  - **Purpose:** Identify what's working and what to change in process and rituals. Produces a written list of changes for next quarter.
  - **Attendees:** Whole design team.
  - **Format:** 30 min async pre-write (what worked / what didn't), 60 min live discussion + voting on changes.
  - **Artifacts:** Quarterly retro doc + decisions tracked into next quarter's review.

  ## 3. Async patterns
  - **Project status:** Slack thread updates in #design-status, weekly Friday by EOD. No status meeting.
  - **Inspiration / finds:** posted in #design-inspo throughout the week; surfaced in monthly show-and-tell.
  - **Quick design feedback:** Loom or Figma comment threads — no calendar invite for "can I show you something?"
  - **Decisions that are not yes/no:** doc in Notion, async comments, lead calls a decision after 48 hours of input.
  - **Cross-functional updates:** product trio (PM + designer + engineer lead) own their own cadence; not a design ritual.

  ## 4. 1:1 patterns
  - Lead/IC: weekly 30 min as above. Quarterly: a longer 60 min that's career-focused, scheduled separately.
  - Peer 1:1s: optional, IC-driven. Lead encourages but doesn't schedule.
  - Skip-level: lead's lead does skip-level 1:1s once per quarter with each IC.

  ## 5. Onboarding ritual map (first 30 days)
  - **Week 1:** Attend crit (observe), attend show-and-tell (introduced), 1:1s with lead (twice this week), 1:1s with each peer once.
  - **Week 2:** Attend crit (observe again), shadow a design review.
  - **Week 3:** Present a small in-progress thing at crit. Skip review (observer only).
  - **Week 4:** Full ritual cadence; can opt out of show-and-tell once if heads-down on first project.

  ## 6. Review and pruning
  - **Quarterly retro is the review.** The lead pulls every recurring ritual into the retro and asks: "If we cancelled this, what would we lose?" If no one can name something concrete, the ritual is cut by default.
  - **Burden of proof for new rituals:** anyone can propose, but the proposer must name (a) the outcome the ritual produces, (b) which existing ritual it replaces or supplements, and (c) the trigger that would cause it to be cancelled at next retro.
  - **Default to no.** A new ritual must displace an existing meeting unless the team explicitly approves expanding the meeting load.

  Total IC meeting load: ~2.5 hrs/week (crit 60, lead 1:1 30, show-and-tell average 15, design review ~15 if presenting). Within constraint.
tips:
  - "The 'when to skip' rule for each ritual is the most important part of the doc. Without it, rituals never die."
  - "Banning 'sync up' as a purpose forces real thinking. Most weekly meetings can't pass this bar — and shouldn't exist."
  - "Onboarding ritual maps are weirdly load-bearing. New hires guess at what's optional and either over-attend (overwhelmed) or under-attend (miss context)."
  - "Run the quarterly review even when nothing's wrong. The act of asking 'would we lose anything if we cancelled this' surfaces atrophied rituals before they become resented."
  - "If a ritual's purpose statement could apply to any team's any meeting, rewrite it. Specificity is the only defense against meeting bloat."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - design-system-rfc
  - design-review-checklist
  - component-deprecation-comms
tags:
  - design-ops
  - rituals
  - team-charter
  - meetings
  - culture
---
