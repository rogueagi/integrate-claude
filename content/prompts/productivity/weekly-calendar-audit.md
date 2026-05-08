---
title: "Audit a week's calendar for time leaks"
slug: weekly-calendar-audit
function: productivity
role: calendar
description: "Review your past or upcoming week's calendar and surface time leaks — meetings that should be async, recurring blocks losing value, and missing focus time."
useCase: "Use this on a Friday looking back, or a Sunday looking forward. Most calendar bloat is invisible until someone names it. This prompt names it."
prompt: |
  You are a ruthless calendar auditor. I'll paste my calendar for a week (meeting titles, attendees, durations, and recurrence if known). Audit it against the principles of focused knowledge work.

  Calendar week of: {{week_of}}
  My role and primary deliverables this week: {{role_and_deliverables}}
  My energy peak hours (when I do my best deep work): {{peak_hours}}

  Calendar:
  ---
  {{calendar_block}}
  ---

  For each meeting, classify into one of:
  - KEEP — high value, well-placed, right attendees
  - SHORTEN — could be 25 min instead of 60, or 15 instead of 30
  - ASYNC — should be a doc, Loom, or Slack thread instead
  - DECLINE — you don't need to be there; suggest decline language
  - RESCHEDULE — wrong time of day for this kind of work

  Then output:

  1. PER-MEETING TABLE — title | classification | one-line reason
  2. WEEK-LEVEL FINDINGS — total meeting hours, longest unbroken focus block, count of context switches per day
  3. TOP 3 CHANGES with the highest leverage (time recovered) — be specific and prescriptive
  4. ONE THING that I should add to the calendar but currently isn't there
variables:
  - "{{week_of}}"
  - "{{role_and_deliverables}}"
  - "{{peak_hours}}"
  - "{{calendar_block}}"
exampleInput: |
  week_of: Nov 11
  role_and_deliverables: Senior PM; main deliverables this week are Q1 roadmap doc and a customer interview synthesis
  peak_hours: 8:30 AM - 11:30 AM (deep work prime time)
  calendar_block: |
    Mon: 9 AM team standup (30m, recurring), 10 AM 1:1 with VP (30m), 11 AM design review (60m), 1 PM customer call (45m), 3 PM "PM weekly" (60m, 8 attendees)
    Tue: 8:30 AM industry webinar (60m), 10 AM eng sync (30m), 11 AM 1:1 with designer (30m), 2 PM customer interview (45m), 3 PM "growth check-in" (30m, 6 attendees)
    Wed: 9 AM team standup (30m), 10:30 AM customer interview (45m), 1 PM all-hands (60m), 2:30 PM cross-team sync (60m, 12 attendees)
    Thu: 9 AM team standup (30m), 10 AM strategy offsite prep (90m), 1 PM 1:1 with VP (30m), 3 PM "ops update" (30m, 9 attendees, recurring)
    Fri: 9 AM team standup (30m), 10 AM design review (60m), 11 AM customer interview (45m), 2 PM "weekly retro" (45m), 3 PM 1:1 with PM peer (30m)
exampleOutput: |
  PER-MEETING TABLE
  Mon 9 standup | KEEP | Daily team rhythm, brief
  Mon 10 1:1 VP | KEEP | Career-critical
  Mon 11 design review | KEEP | Real decisions
  Mon 1 customer call | RESCHEDULE | Push to afternoon next week to protect 8:30-11:30 prime time (this one is fine)
  Mon 3 PM weekly | SHORTEN | 8 attendees rarely justifies 60m; cut to 30m or split agenda
  Tue 8:30 webinar | DECLINE or async | Eats peak hours; watch the recording at 1.5x
  Tue 10 eng sync | ASYNC | Standing 30m with no agenda → Slack update
  Tue 2 customer interview | KEEP | Direct deliverable input
  Tue 3 growth check-in | DECLINE | 6 attendees, you're not the DRI
  Wed 9 standup | KEEP
  Wed 10:30 interview | KEEP
  Wed 1 all-hands | KEEP | Cultural; show up
  Wed 2:30 cross-team sync | SHORTEN to 30m or DECLINE | 12 attendees = info-share, ask for notes
  Thu 9 standup | KEEP
  Thu 10 strategy prep | KEEP — this is your highest-value block
  Thu 1 1:1 VP | KEEP
  Thu 3 ops update | DECLINE | 9 attendees, recurring, no agenda visible — ask to be removed from recurrence
  Fri 9 standup | KEEP
  Fri 10 design review | KEEP
  Fri 11 customer interview | KEEP
  Fri 2 retro | KEEP
  Fri 3 PM peer 1:1 | KEEP

  WEEK-LEVEL FINDINGS
  Total meeting hours: ~17.5h
  Longest unbroken focus block: 90m (Thu 10-11:30, strategy prep) — only block in your peak hours all week
  Context switches per day: Mon 5, Tue 5, Wed 4, Thu 4, Fri 5 — death by ping-pong

  TOP 3 CHANGES
  1. Decline the Tue 8:30 webinar and the Thu 3 PM ops update. Recovers 90 min including peak hours.
  2. Convert Tue 10 eng sync to async standing thread. Recovers 30 min weekly + reduces context switches.
  3. Move the Mon 11 design review to Wed afternoons starting next week. Frees up 3 hours of peak-hours focus on Mondays.

  ONE THING TO ADD
  Two 90-min focus blocks at 8:30-10 AM Mon and Wed, labeled "Roadmap doc — do not book." This is the single biggest deliverable this week and currently has zero protected time.
tips:
  - "Run this every Friday for the upcoming week. By Monday it's too late to negotiate out of meetings."
  - "Recurring meetings rot. Audit each one quarterly — most lose value within 3 months of being scheduled."
  - "If you can't decline, ask for the decision to be made async with you commenting in the doc. 80% of meetings can become docs."
  - "Protect your peak hours like a lawyer protects billable time. One 90-min focus block beats five 30-min slots."
  - "Count context switches per day — over 4 and your real output drops sharply, regardless of total meeting hours."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - meeting-decline-template
  - focus-block-design
  - meeting-prep-brief
tags:
  - calendar
  - audit
  - meetings
  - focus
  - time-management
---
