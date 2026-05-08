---
title: "Design focus blocks around your existing calendar"
slug: focus-block-design
function: productivity
role: calendar
description: "Place protected focus blocks into a real calendar based on your energy peaks, deliverables, and existing meeting load — not generic 'block 2 hours daily' advice."
useCase: "Use this when you keep saying 'I have no time for deep work' but haven't actually engineered your week to make space. This designs blocks that fit your real life, not a productivity book's."
prompt: |
  You are designing protected focus blocks in my calendar for the upcoming week. The blocks must respect my actual constraints, not idealized ones.

  My current week's calendar (meetings already booked):
  ---
  {{calendar}}
  ---

  My deliverables this week, in priority order: {{deliverables}}
  My energy pattern (when I'm sharpest, when I crash): {{energy_pattern}}
  Hard constraints (school pickup, gym, recurring 1:1s I won't move): {{hard_constraints}}
  How long I can focus before needing a break: {{focus_duration}}
  My biggest distraction risk: {{distraction_risk}}

  Design my focus blocks for the week. For each block specify:

  - DAY + TIME (specific)
  - DURATION
  - DELIVERABLE / OUTCOME — what I should walk out of this block having done
  - WHY THIS SLOT — why this time is the right time given my calendar and energy
  - PROTECTION RULE — what I'll do if a meeting tries to land on this block (decline, move, etc.)

  Then output:
  - A weekly heat map (Mon-Fri × hours) showing where focus blocks land
  - The single most important block of the week
  - The block most likely to get hijacked, and how to defend it
variables:
  - "{{calendar}}"
  - "{{deliverables}}"
  - "{{energy_pattern}}"
  - "{{hard_constraints}}"
  - "{{focus_duration}}"
  - "{{distraction_risk}}"
exampleInput: |
  calendar: |
    Mon: 9 AM standup, 10 AM 1:1 with VP, 1 PM customer call, 3 PM weekly all-hands
    Tue: 8:30 AM industry call, 11 AM 1:1, 2 PM customer interview
    Wed: 9 AM standup, 11 AM design review, 2 PM cross-team sync
    Thu: 9 AM standup, 10 AM strategy prep, 1 PM 1:1 with VP, 4 PM ops update
    Fri: 9 AM standup, 10 AM design review, 2 PM retro, 3 PM peer 1:1
  deliverables: |
    1. Q1 roadmap doc draft (high effort, ~6 hours total)
    2. Customer interview synthesis (3 interviews to digest, ~3 hours)
    3. Spec for one specific feature (~2 hours)
  energy_pattern: Strong 8-11 AM, post-lunch crash 1-2:30 PM, second wind 3:30-5 PM, dead after 5
  hard_constraints: 5:30 PM kid pickup, no early-morning calls before 8 AM, Wed 7-8 AM workout
  focus_duration: 90 min before I need to move/break
  distraction_risk: Slack DMs from a chatty PM peer; I check Slack reflexively when stuck
exampleOutput: |
  FOCUS BLOCKS

  MON 8:00-9:00 AM (60 min)
  Deliverable: Roadmap doc — outline + section 1
  Why: Only pre-meeting peak slot Monday; ride morning energy
  Protection: Block titled "Roadmap — do not book"; if invited, propose later in week

  TUE 9:00-11:00 AM (90 min)
  Deliverable: Roadmap doc — sections 2 and 3
  Why: Tuesday is the cleanest peak-energy block all week
  Protection: Decline anything except VP requests; offer Tue afternoon instead

  WED 8:00-9:00 AM (60 min, post-workout)
  Deliverable: Customer interview synthesis — first interview
  Why: Synthesis is medium-cognitive; doesn't need top peak slot. Workout primes you.
  Protection: This one's safest — early hour, low collision risk

  THU 8:00-10:00 AM (120 min, with a 10 min break)
  Deliverable: Roadmap doc — final draft
  Why: This is your highest-priority deliverable; protect the longest unbroken slot
  Protection: Hold this one with your life. Decline any meeting on this slot, even from VP — offer 10 AM instead.

  FRI 11:00 AM-12:30 PM (90 min)
  Deliverable: Feature spec
  Why: Friday late morning, lower-stakes deliverable, fits between meetings
  Protection: Auto-decline meetings post-Wednesday for this week

  WEEKLY HEAT MAP (focus blocks marked X)
            8AM  9AM 10AM 11AM 12PM  1PM  2PM  3PM  4PM
  Mon        X    .    .    .    .    .    .    .    .
  Tue        .    X    X    .    .    .    .    .    .
  Wed        X    .    .    .    .    .    .    .    .
  Thu        X    X    .    .    .    .    .    .    .
  Fri        .    .    .    X    .    .    .    .    .

  MOST IMPORTANT BLOCK
  Thu 8:00-10:00 AM — your only 2-hour unbroken stretch all week, on your highest-priority deliverable.

  MOST LIKELY HIJACKED + DEFENSE
  Tue 9-11 AM. It's prime time and people will try to grab it. Defense: title it specifically ("Roadmap doc — finishing sections 2-3"), set Slack to DND, and pre-bake your decline language: "Locked in on the roadmap draft until 11 — can do 11:15 or anytime tomorrow."
tips:
  - "Block specific deliverables, not generic 'focus time'. 'Roadmap doc — section 2' protects better than 'deep work'."
  - "Use your peak hours for your hardest deliverable. Stop using prime time for easy work just because it feels good."
  - "Pre-write your decline language for the most-likely hijack. The friction of writing it in the moment is what kills focus blocks."
  - "Set Slack/Teams to DND during blocks. If you can't bear that, the work probably isn't actually focus work."
  - "Audit weekly. If three focus blocks got moved last week, the system needs adjusting — don't just try harder."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - weekly-calendar-audit
  - meeting-decline-template
  - weekly-review-template
tags:
  - focus
  - calendar
  - deep-work
  - productivity
  - time-management
---
