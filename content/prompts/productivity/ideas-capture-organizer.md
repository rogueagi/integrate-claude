---
title: "Organize a chaotic ideas dump into themes"
slug: ideas-capture-organizer
function: productivity
role: notes
description: "Take a messy stream of ideas, fragments, and half-thoughts and group them into themes with suggested next steps for each."
useCase: "Use this when you have a notes app full of half-formed ideas and no clear sense of what to do with them. The model spots themes you don't see because you're too close to your own thinking."
prompt: |
  You are organizing a messy ideas dump for me. The input will be a stream-of-consciousness list — short fragments, half-sentences, related and unrelated thoughts mixed together.

  Ideas dump:
  ---
  {{ideas_dump}}
  ---

  My current focus area or domain: {{focus_area}}
  Things I'm explicitly NOT working on: {{out_of_scope}}

  Process the dump in this order:

  1. CLUSTER — group ideas into 3-7 themes. Name each theme with a noun phrase.
  2. PRUNE — flag any ideas that are stale, duplicates, or clearly out of scope based on {{out_of_scope}}
  3. STRUCTURE EACH THEME — for each theme:
     - Theme name + one-line description
     - 2-5 ideas that belong to it (lightly cleaned up, not paraphrased away)
     - PATTERN you notice across these ideas (a deeper insight)
     - SUGGESTED NEXT STEP (one concrete action, not "explore further")
  4. ORPHANS — list any ideas that don't fit a theme. Don't force them.
  5. OBSERVATIONS — what does the overall dump suggest about where my attention is going? Be honest — this is often more useful than the ideas themselves.

  Don't paraphrase ideas into corporate speak. Preserve my voice.
variables:
  - "{{ideas_dump}}"
  - "{{focus_area}}"
  - "{{out_of_scope}}"
exampleInput: |
  ideas_dump: |
    - what if onboarding split by use case not by role
    - the empty-state problem keeps coming up in interviews
    - aaron mentioned activation rate stuck at 38% three times
    - check whether competitor X has a setup wizard
    - first 10 min experience is broken
    - need a metric for "activation depth" not just activation
    - product-led growth playbook by lenny
    - we should rebuild the welcome email
    - integration step is where most people drop
    - i keep saying "people drop on integration step" but is that actually true in the data
    - what if we let people skip integration entirely first session
    - hire a growth designer
    - growth designer vs full-stack PM hire — which one
    - linear's onboarding is so good
    - kill the welcome video, no one watches it
    - "time to first value" is the lever
    - read inspired again
  focus_area: improving onboarding/activation for our B2B SaaS product
  out_of_scope: pricing, sales motion, enterprise tier
exampleOutput: |
  CLUSTER

  THEME 1: Activation metric is wrong or shallow
  - Aaron mentioned activation stuck at 38% three times
  - Need a metric for "activation depth" not just activation
  - "Time to first value" is the lever
  Pattern: You don't trust the current activation metric and suspect it's hiding the real problem. The repeated mention from Aaron suggests this is a known issue people aren't acting on.
  Next step: Spend 90 minutes pulling the activation funnel by step and segment. Confirm or kill the "integration step is where people drop" hypothesis before any redesign.

  THEME 2: Integration is the suspected drop-off point
  - Integration step is where most people drop
  - I keep saying "people drop on integration" but is that actually true in the data
  - What if we let people skip integration entirely first session
  Pattern: You have a strong intuition but you're catching yourself making it without proof. The "skip entirely first session" idea is the real bet — that's a structural change.
  Next step: Pull integration-step funnel data this week, then prototype a "skip integration" path on a feature flag for new signups.

  THEME 3: First-session experience needs an overhaul
  - First 10 min experience is broken
  - Empty-state problem keeps coming up in interviews
  - Rebuild the welcome email
  - Kill the welcome video, no one watches it
  - What if onboarding split by use case not by role
  Pattern: Multiple symptoms point to the same disease — the first session doesn't deliver value. The "by use case" reframe is the most interesting single idea here.
  Next step: Sketch what a use-case-first onboarding flow would look like for your top 3 use cases, then pressure-test with 3 customer interviews.

  THEME 4: External research / inspiration
  - Check competitor X setup wizard
  - PLG playbook by Lenny
  - Linear's onboarding is so good
  - Read Inspired again
  Pattern: You're seeking external validation but haven't extracted specific patterns from any of them yet.
  Next step: Pick ONE — Linear's onboarding — and write a one-pager on what they do well. Skip the rest until that's done.

  THEME 5: Hiring / capacity
  - Hire a growth designer
  - Growth designer vs full-stack PM hire
  Pattern: You sense capacity is the blocker, but the role question is unresolved. This is a different kind of decision than the others — strategic, not tactical.
  Next step: This is downstream of solving the metric/funnel question. Don't hire until you know what role would do what specifically.

  ORPHANS
  (none)

  OBSERVATIONS
  Your attention is heavily on diagnosing — three themes are about understanding the problem, only one is about an actual change. That's the right mode for the moment, but watch out: in two weeks you should be in build mode, not still diagnosing. The "skip integration entirely first session" idea is the one that has the most potential energy and is closest to a testable bet. Start there.
tips:
  - "Capture chaos first, then organize. Don't try to organize as you capture — it kills idea generation."
  - "The 'pattern' callout in each theme is where the value is. Anyone can group ideas; spotting the pattern is the unlock."
  - "Re-run this monthly on your accumulated notes. The themes shift over time and reveal what your subconscious is working on."
  - "If a theme's next step is 'explore further,' the model didn't push hard enough. Run again or rewrite the next step yourself."
  - "Save the OBSERVATIONS section. It's a journal of where your attention has been — useful for your own pattern recognition."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - weekly-review-template
  - reading-notes-condense
  - learning-roadmap-create
tags:
  - notes
  - synthesis
  - thinking
  - organization
  - ideation
---
