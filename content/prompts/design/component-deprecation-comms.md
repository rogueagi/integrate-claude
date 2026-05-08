---
title: "Write a comms plan for deprecating a design system component"
slug: component-deprecation-comms
function: design
role: design-ops
description: "Produce a complete communications plan for deprecating a design system component — announcement message, migration guide, timeline, and the friendly-but-firm Slack templates that move teams off the old pattern."
useCase: "Use this when a design system component is being replaced or removed. Most deprecations stall because the comms are vague — 'eventually we'll remove this.' This prompt produces a plan with hard dates, clear migration paths, and the messages that nudge teams without burning goodwill."
prompt: |
  You are a design ops lead writing a comms plan for deprecating a design system component. The plan must move consumers off the component on a real timeline without surprising them.

  Context:
  - Design system: {{design_system}}
  - Component being deprecated: {{component}}
  - Reason for deprecation: {{reason}}
  - Replacement (if any) and how it differs: {{replacement}}
  - Number of teams or surfaces using it: {{usage_scope}}
  - Migration complexity (simple find-and-replace / requires rework / requires redesign): {{migration_complexity}}
  - Total deprecation timeline (weeks from announce to removal): {{timeline}}

  Produce a comms plan with these sections:

  1. Timeline. A dated list of milestones from announce to removal, with the comms each milestone triggers.
  2. Announcement post. The message announcing the deprecation, posted in the main design system channel and any cross-functional comms surface. Should include: what's deprecated, why, what to use instead, when removal happens, where to ask questions.
  3. Migration guide outline. Section headers and key content for the migration doc — not the full doc, but enough that a writer can fill it in.
  4. Slack reminder templates. 3 reminders at different stages: T-half (halfway through the deprecation), T-2 weeks, T-1 week. Friendly but increasingly direct.
  5. The "still using it after deadline" message. The post-deadline message to teams that haven't migrated, naming them specifically (in a private message, not public). Polite, firm, with escalation path.
  6. FAQ. 5–7 questions consumers will actually ask, with one-paragraph answers. Include the awkward ones ("we already shipped this; do we have to migrate?").
  7. Internal escalation plan. What happens if a team misses the deadline — who gets pinged, what's the escalation, how do we avoid making it political.

  Rules:
  - Hard dates, not vague timelines. "Removed in v4" without a date doesn't work.
  - Replacement must be ready and documented before announcement. If it isn't, push the announcement.
  - Tone across the messages should be helpful first, firm second. Never sneering, never whiny.
  - The FAQ must include the awkward questions, not just the easy ones.

  Output: the plan, structured as above.
variables:
  - "{{design_system}}"
  - "{{component}}"
  - "{{reason}}"
  - "{{replacement}}"
  - "{{usage_scope}}"
  - "{{migration_complexity}}"
  - "{{timeline}}"
exampleInput: |
  design_system: Helix DS v3
  component: <LegacyModal /> — original modal pattern from v1
  reason: Doesn't support focus management correctly (accessibility audit found 3 critical bugs); doesn't theme correctly in dark mode; size variants don't match the new spacing scale
  replacement: <Modal /> — new component shipped 2 months ago. Different prop API; replaces "title" with "heading", removes "showClose" (always shown now), splits "children" into "body" and "footer" slots
  usage_scope: 14 product surfaces across 6 teams
  migration_complexity: Requires rework (prop names change; slot structure changes)
  timeline: 8 weeks
exampleOutput: |
  # Deprecation Comms Plan — `<LegacyModal />`

  ## 1. Timeline

  | Week | Milestone | Comms |
  |---|---|---|
  | W0 (Mon Mar 3) | Announcement | #design-system + #engineering all-hands post; email to team leads |
  | W0–W2 | Office hours | DS team holds 30-min office hours twice weekly for migration questions |
  | W2 (Mar 17) | Migration guide finalized | Linked in DS docs; shared in #design-system |
  | W4 (Mar 31) | Halftime reminder | Slack post in #design-system + targeted DM to teams not yet migrated |
  | W6 (Apr 14) | T-2 weeks | Public Slack post; @-mention team leads of remaining teams |
  | W7 (Apr 21) | T-1 week | Public Slack post; @-mention specific surfaces still using it |
  | W8 (Apr 28) | Removal | `<LegacyModal />` removed from main; CI breaks any new usage |
  | W9+ | Post-deadline | Private DMs to teams still using; escalation per plan below |

  ## 2. Announcement post

  > **Deprecating `<LegacyModal />` — replace by April 28**
  >
  > We're removing the original `<LegacyModal />` component on **April 28** (8 weeks from today). It has accessibility issues we can't patch (focus management, screen reader announcements) and doesn't theme correctly in dark mode. It's been replaced by `<Modal />`, which has been live for two months.
  >
  > **What you need to do:** migrate from `<LegacyModal />` to `<Modal />`. The prop API changed — full migration guide here: [link]. Most usages take 5–15 minutes per surface; teams with custom layouts inside the modal may need longer.
  >
  > **We'll help.** DS team is holding office hours twice a week for the next 2 weeks (Tue/Thu, 10am PT, [calendar link]). Drop a Slack message in #design-system or DM [DS lead] anytime.
  >
  > **What happens on April 28:** the component is removed from the package. Any code still using it will break the build. We'd rather not surprise anyone — that's what the next 8 weeks of reminders are for.

  ## 3. Migration guide outline
  - **Why this is changing** (accessibility findings + dark mode + spacing alignment, with links to the audit)
  - **API differences at a glance** (table: legacy prop → new prop, with notes)
  - **Step-by-step migration** (rename props, restructure children into body/footer, remove showClose)
  - **Common patterns**
    - Confirmation modal (before/after code)
    - Form modal (before/after code)
    - Long content with scroll (before/after code)
    - Modal with custom footer actions (before/after code)
  - **Things that won't work the same** (custom close handlers, manual focus refs)
  - **Codemod** (we ship one for the prop rename — handles ~70% of cases automatically)
  - **FAQ + office hours info**

  ## 4. Slack reminder templates

  ### T-half (Week 4 — Mar 31)
  > Halfway to the `<LegacyModal />` removal date (April 28). 9 of 14 surfaces are migrated — nice work to those teams. If you haven't started, the migration guide is here: [link]. We're at 4 weeks; most surfaces take under 30 minutes.

  ### T-2 weeks (Week 6 — Apr 14)
  > Heads up: `<LegacyModal />` is removed in 2 weeks (Apr 28). Remaining usages: [list of surfaces].
  > @[team lead 1], @[team lead 2] — your teams have surfaces in this list. Migration guide: [link]. Office hours Tuesday and Thursday this week, 10am PT.

  ### T-1 week (Week 7 — Apr 21)
  > One week left. `<LegacyModal />` is removed Monday Apr 28.
  > Still on the old component: [specific surfaces named]. If you're stuck or need help, DM me today — we'd rather pair on it than break your build next week.

  ## 5. Post-deadline message (private DM, never public)

  > Hi [name] — quick heads up that `<LegacyModal />` was removed in main yesterday and your team's [specific surface] is still using it. The build is currently failing on that branch.
  >
  > Two paths: (1) we can pair on the migration today (will take ~30 min based on what I see in the code), or (2) if you need an extension, let me know what's blocking and we can talk about a temporary local fork.
  >
  > Easier to handle this directly than as a fire drill — what works?

  ## 6. FAQ

  **Q: We just shipped a feature using `<LegacyModal />`. Do we still have to migrate?**
  A: Yes. We coordinated the new component's release with this deprecation announcement so anyone shipping after Feb 1 had time to choose `<Modal />`. We're not retroactively grandfathering — that's how dead code accumulates. Migration of a single modal usually takes 15–30 min.

  **Q: The new component doesn't support [specific use case]. What do we do?**
  A: Tell us in #design-system or DM the DS lead before April 14 (T-2 weeks). If it's a real gap, we'll fix it before deprecation. If it's an edge case, we may extend your timeline specifically while we figure it out — but we won't extend the global deadline.

  **Q: Can we just suppress the deprecation warning and ship?**
  A: For now, yes — the warning is a console message. After April 28, the component is removed, not just warned. A suppression flag won't survive that.

  **Q: We're mid-migration on April 28. Will our build break?**
  A: Likely yes if you haven't merged. DM us before April 25 if you're close — we'll help you finish the migration in the last week. We'd rather pair than ship a broken build.

  **Q: Why is the prop API different? Couldn't we have kept compat?**
  A: We considered it. The new component splits `children` into `body` and `footer` because the old single-children pattern made it impossible to position footer actions correctly without consumers re-implementing layout each time. Keeping a compat prop would have preserved the original problem. The codemod handles the easy renames automatically; the body/footer split is the only manual piece.

  **Q: Will there be a `<LegacyModal />` v2 in the future?**
  A: No. The new `<Modal />` is the modal pattern going forward. If you need a different surface (sheet, drawer, popover), there are dedicated components — talk to us about which fits.

  **Q: What if my team can't prioritize this in 8 weeks?**
  A: DM us by April 14 with the specific blocker and we'll work it out. We've done extensions before — what we can't do is extend silently. If you don't tell us, we'll assume the deadline holds.

  ## 7. Internal escalation plan
  - **Day after deadline (Apr 29):** private DM to team lead per the template above. Offer to pair.
  - **Week after (May 5):** if still not resolved, DS lead pings the team's engineering manager directly with a status. Frame as a build-health issue, not a compliance one.
  - **Two weeks after (May 12):** escalation to engineering leadership only if a team has gone silent for 2 weeks and a critical surface is broken. This should almost never happen if the comms above worked.
  - **Tone everywhere:** helpful first, firm second. Never make a team feel ambushed. Most missed deadlines are about prioritization, not negligence — treat them that way.
tips:
  - "Hard dates beat vague timelines every time. 'Removed April 28' moves teams; 'removed in v4' doesn't."
  - "Send the post-deadline DM privately, not publicly. Public shaming kills design system goodwill faster than any technical debt."
  - "Always offer to pair in the last-week and post-deadline messages. The teams that miss deadlines are usually stuck, not lazy."
  - "Codemods are worth the engineering time on any deprecation that touches more than 3 surfaces. They turn a political ask into a mechanical one."
  - "The FAQ section is where deprecations live or die. Include the awkward questions; users ask them anyway, and answering preemptively shows you've thought it through."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - design-system-rfc
  - component-spec-doc
  - design-team-rituals-charter
tags:
  - design-ops
  - design-system
  - deprecation
  - communications
  - migration
---
