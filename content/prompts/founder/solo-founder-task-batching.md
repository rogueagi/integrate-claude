---
title: "Batch a chaotic solo-founder to-do list into focus blocks"
slug: solo-founder-task-batching
function: founder
role: solo-founder
description: "Convert a messy task list into deep work, shallow work, and meeting blocks across the week — grouped by cognitive mode so you stop context-switching every 20 minutes."
useCase: "Use this when your task list looks fine on paper but you keep ending the day exhausted with little to show for it. The problem is rarely the volume of work — it's the constant context-switching. This prompt batches your tasks by cognitive mode so you can do 90 minutes of one kind of work before switching."
prompt: |
  You are a productivity strategist who specializes in deep work for founders. You know that context-switching is the silent killer of solo-founder productivity.

  Take this raw task list and batch it into focus blocks for the week.

  My week's tasks:
  {{task_list}}

  My typical energy curve:
  - Mornings: {{morning_energy}}
  - Afternoons: {{afternoon_energy}}
  - Evenings: {{evening_energy}}

  Calendar already committed:
  {{calendar}}

  My known context-switching cost (e.g., "I lose ~30 min after a call before I can code"): {{switching_cost}}

  Do this:

  1. Bucket every task into one of:
     - DEEP WORK (creative, requires uninterrupted thinking — writing, coding, deck design, strategy)
     - SHALLOW WORK (admin, simple decisions, replying, reviewing)
     - MEETINGS / CALLS (scheduled human interactions)
     - DECISIONS (require thinking but not building — pricing, hiring tradeoffs, prioritization)
     - DELEGATABLE (could be handed off, even if I don't have someone yet — flag for future hire)

  2. Build a 5-day schedule with:
     - 2 deep work blocks per day (90-120 min each), placed at peak energy times
     - Shallow work in 1-2 batched windows per day
     - Meetings clustered, not scattered
     - At least one fully unscheduled "buffer" block per day (don't fill it)

  3. Tell me which tasks I should not even attempt this week given the load.

  4. Flag tasks I keep on the list every week but never do — that's a signal to either schedule them seriously or kill them.

  5. End with one observation about my pattern (if you see one — e.g., "you have 4 'follow up' tasks, suggesting your CRM hygiene is the bottleneck").
variables:
  - "{{task_list}}"
  - "{{morning_energy}}"
  - "{{afternoon_energy}}"
  - "{{evening_energy}}"
  - "{{calendar}}"
  - "{{switching_cost}}"
exampleInput: |
  task_list:
    - finish v2 of the seed deck
    - reply to 30 unread emails
    - 3 sales calls (already scheduled)
    - design a new pricing page
    - call accountant about R&D credits
    - hire a freelance designer
    - write a blog post on positioning
    - run a customer interview (Wed)
    - review and merge 2 PRs
    - decide whether to fire a contractor underperforming
    - update the pitch deck appendix
    - reply to two angel investor emails
    - write Q2 OKRs
    - figure out office space situation
    - plan team offsite
    - file expense report
  morning_energy: high — best for deep thinking and writing, 7am-11am peak
  afternoon_energy: medium — fine for calls and shallow work, low for creative work
  evening_energy: low — only good for admin and reading
  calendar: 3 sales calls (Mon 2pm, Wed 10am, Thu 3pm), customer interview (Wed 4pm), kid pickup at 5pm every day
  switching_cost: ~30 min after any call before I can write or design
exampleOutput: |
  TASK BUCKETS

  DEEP WORK
  - Finish seed deck v2
  - Design pricing page
  - Write Q2 OKRs
  - Write positioning blog post
  - Update pitch deck appendix

  SHALLOW WORK
  - 30 unread emails
  - Reply to 2 angel emails (note: borderline — see below)
  - File expense report
  - Review/merge 2 PRs

  MEETINGS / CALLS
  - 3 sales calls (already scheduled)
  - Customer interview Wed 4pm
  - Call accountant re: R&D credits (schedule)

  DECISIONS
  - Decide on underperforming contractor
  - Reply to angel emails (these are decisions in disguise — what do I want from each angel?)
  - Hire freelance designer (decision: scope first, then post)

  DELEGATABLE (flag for future hire / contractor)
  - File expense report — get a bookkeeper, this should not be your job
  - Office space figuring — virtual EA territory
  - Team offsite planning — also EA territory

  WEEK SCHEDULE

  MONDAY
  7:00-9:00 — DEEP: seed deck v2 (peak energy, no meetings until 2pm)
  9:00-9:30 — Buffer / coffee / walk
  9:30-11:00 — DEEP: Q2 OKRs draft
  11:00-12:00 — SHALLOW BATCH: 30 emails + expense report
  12:00-1:00 — Lunch (actually leave the desk)
  1:30-2:00 — Sales call prep
  2:00-3:00 — Sales call
  3:00-4:00 — Decisions block: contractor decision + angel email replies (these need a calm head, not late afternoon)
  4:00-5:00 — Buffer / kid prep

  TUESDAY
  7:00-9:00 — DEEP: seed deck v2 finish
  9:00-10:30 — DEEP: pricing page design
  10:30-12:00 — Buffer + shallow (PR review)
  Afternoon: light — make this a true buffer day; you have a heavy Wednesday

  WEDNESDAY
  7:00-9:30 — DEEP: positioning blog post (this is the hardest creative task; protect it)
  9:30-10:00 — Sales call prep
  10:00-11:00 — Sales call
  11:00-12:00 — Buffer (recover from call)
  12:00-1:00 — Lunch
  1:00-3:00 — SHALLOW: pitch deck appendix + accountant call
  3:00-4:00 — Customer interview prep
  4:00-5:00 — Customer interview

  THURSDAY
  7:00-9:00 — DEEP: any remaining deck work, or buffer if Mon-Tue went well
  9:00-12:00 — Open block (use for what's slipped)
  1:30-3:00 — Sales call prep + sales call
  3:00-5:00 — Hiring: scope freelance designer role + post

  FRIDAY
  7:00-10:00 — DEEP: write the week's review + plan next week
  10:00-12:00 — SHALLOW: clean up emails, file admin
  Afternoon: protected. Do not schedule.

  TASKS YOU SHOULD NOT ATTEMPT THIS WEEK
  - Office space (low urgency, no deadline)
  - Team offsite planning (you're 1-2 people, this can wait 2-3 weeks)

  TASKS YOU KEEP ROLLING OVER (flagging the pattern)
  - "Write blog post" appears every week but you said it's still a task. Either commit (Wed morning, locked) or kill it.
  - "Update pitch deck appendix" — same. If it's been on the list for 3 weeks, it's not actually important.

  PATTERN OBSERVATION
  You have 4 administrative tasks (expenses, office, offsite, emails) that are eating your evening energy. Your real productivity unlock isn't more discipline — it's a part-time EA or virtual assistant. Even 5 hours a week would clear most of the shallow load and free a deep block.
tips:
  - "Protect your morning deep work block like a meeting with your most important customer. Don't book over it. Most founders give away their best 2 hours to email."
  - "Cluster meetings on 1-2 days a week. Two 'meeting days' and three 'maker days' is dramatically more productive than 5 days of mixed."
  - "If a task rolls over for 3+ weeks, it's either not actually important or you're avoiding it. Either way, address the pattern."
  - "Buffer blocks aren't slack — they're insurance. The week you don't have buffer is the week one fire eats everything else."
  - "Track your honest energy curve for two weeks before optimizing. Most founders think they're morning people but data says otherwise."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - solo-founder-weekly-priorities
  - founder-burnout-self-check
  - founder-decision-journal-entry
tags:
  - productivity
  - time-management
  - deep-work
  - solo-founder
  - focus-blocks
---
