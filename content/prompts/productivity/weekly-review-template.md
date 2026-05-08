---
title: "Generate a weekly review for yourself"
slug: weekly-review-template
function: productivity
role: notes
description: "Produce a personal weekly review covering what worked, what didn't, learnings, and the 3 priorities for next week — from your own raw input."
useCase: "Use this on Friday afternoon or Sunday evening. Most weekly reviews fail because they're either too long or too generic. This one is calibrated to your actual week."
prompt: |
  You are helping me run a personal weekly review. Be a thoughtful coach, not a cheerleader. Push back on vague answers and surface patterns I might miss.

  Inputs from my week:

  - Wins / things that went well: {{wins}}
  - Things that didn't go well: {{didnt_go_well}}
  - Where I spent my time (rough breakdown by category or project): {{time_spent}}
  - Specific people or interactions worth noting: {{people_notes}}
  - Open loops still hanging from this week: {{open_loops}}
  - My current top 3 priorities for the next 90 days: {{quarterly_priorities}}

  Produce a weekly review with these sections:

  1. HEADLINE — one sentence summarizing the week (theme, tone, or shape)
  2. WHAT WORKED — wins reframed as repeatable patterns where possible
  3. WHAT DIDN'T — and the underlying cause, not just the symptom
  4. LEARNINGS — things to change, repeat, or stop doing
  5. ENERGY READ — am I drifting, energized, depleted, focused, scattered? Be honest.
  6. ALIGNMENT CHECK — did this week move the 90-day priorities forward? If not, why?
  7. NEXT WEEK'S 3 PRIORITIES — concrete, written as outcomes not tasks (e.g., "roadmap doc shipped" not "work on roadmap")
  8. ONE BRAVE THING — one uncomfortable thing I should do next week that I'd otherwise avoid

  Push back on me where appropriate. If my "wins" are all activity (meetings attended, emails sent) and not outcomes, call it out.
variables:
  - "{{wins}}"
  - "{{didnt_go_well}}"
  - "{{time_spent}}"
  - "{{people_notes}}"
  - "{{open_loops}}"
  - "{{quarterly_priorities}}"
exampleInput: |
  wins: shipped customer interview synthesis doc; got VP approval on Q1 scope; ran 3 customer interviews
  didnt_go_well: roadmap doc still in draft, scope expanded twice mid-week; missed the gym 4 of 5 days
  time_spent: ~40% meetings, ~25% email/Slack, ~15% interviews, ~15% roadmap doc, ~5% admin
  people_notes: Lena (VP) seems frustrated with pace; Raj (Eng) was unusually quiet in the roadmap meeting
  open_loops: AI feature DRI still not assigned; payments cut decision pending; need to schedule next month's customer interviews
  quarterly_priorities: |
    1. Ship Q1 roadmap and own execution on customer-facing portion
    2. Build a repeatable customer-research rhythm (3 interviews/week)
    3. Develop visible exec presence (recognized as a strategic PM, not just executor)
exampleOutput: |
  HEADLINE
  A productive week on the work that doesn't matter most, and a slow week on the work that does.

  WHAT WORKED
  - Customer interview synthesis shipped — repeatable pattern: synthesis the same week as interviews, not deferred
  - Customer interview cadence held (3 done) — proves the rhythm is achievable
  - VP scope approval — but worth asking: was that approval, or directional consent?

  WHAT DIDN'T
  - Roadmap doc still in draft despite being your #1 priority. Underlying cause is not "no time" — you spent 25% on email/Slack and 40% in meetings. The cause is that meetings + reactive work expanded to fit, and you didn't defend the doc time.
  - Scope crept twice mid-week — pattern: you say yes to expansion in real-time and feel the cost in your draft hours later. Worth a "I'll get back to you in 24 hours" default.
  - Gym slipped 4/5 — usually correlated with overflow workdays. Symptom of the bigger problem.

  LEARNINGS
  - Activity ≠ progress. Three of your "wins" were process wins. The output that mattered (roadmap) is still draft.
  - Real-time scope decisions cost you draft hours. Consider a 24-hour rule for any "can we add X" request.
  - Email/Slack at 25% is high for a senior PM. Worth a one-week experiment with hard 30-min email blocks.

  ENERGY READ
  Productive but scattered. The fact that the gym slipped tells me you ran on adrenaline by Wednesday. Worth slowing down before Monday.

  ALIGNMENT CHECK
  Priority 1 (roadmap): partial — drafted, not shipped. Behind.
  Priority 2 (research rhythm): on track.
  Priority 3 (exec presence): mixed — Lena's frustration is a signal worth investigating before it hardens.

  NEXT WEEK'S 3 PRIORITIES (as outcomes)
  1. Q1 roadmap doc shipped and approved Wednesday
  2. AI feature DRI confirmed and named in writing
  3. One direct conversation with Lena about her frustration (don't wait for it to compound)

  ONE BRAVE THING
  Have the conversation with Lena. You noticed she's frustrated; if you avoid it for another week it costs you 10x more. Bring one specific question, not a defense.
tips:
  - "Run this every Friday at the same time. Consistency beats depth — a 15-min weekly review beats a 90-min monthly one you skip."
  - "Push the model to be honest. If you only get cheerleading, your inputs were too vague — be specific about what didn't work."
  - "Write priorities as outcomes ('doc shipped'), not activities ('work on doc'). The difference is the entire game."
  - "The 'one brave thing' section is the highest-leverage part. Most weeks have one uncomfortable conversation or decision you're avoiding."
  - "Save these reviews — re-reading 3 months of them shows patterns no single week reveals."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - project-status-self-update
  - ideas-capture-organizer
  - focus-block-design
tags:
  - notes
  - reflection
  - review
  - planning
  - productivity
---
