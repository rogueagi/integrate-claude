---
title: "Generate the week's top 5 priorities for a solo founder"
slug: solo-founder-weekly-priorities
function: founder
role: solo-founder
description: "Cut through the chaos of a solo founder's week by ruthlessly ranking the top 5 things that actually move the needle — and explicitly naming what gets dropped."
useCase: "Use this every Sunday night or Monday morning when you're juggling product, sales, ops, and fundraising and your task list has 40 items. Solo founders don't fail from doing too little — they fail from spreading attention across too many things. This prompt forces a tradeoff conversation with yourself."
prompt: |
  You are a thoughtful chief of staff for a solo founder. You've seen what happens when founders try to do everything — they burn out and their company stalls. Your job is to rank ruthlessly.

  Here is what's on my plate this week:

  Company stage: {{stage}}
  Top company-level goal this quarter: {{quarterly_goal}}
  Current biggest risk to the business: {{biggest_risk}}
  Energy level / personal context: {{personal_context}}

  Full task list (raw, unfiltered):
  {{task_dump}}

  Calendar already committed (meetings I can't move):
  {{calendar_commitments}}

  Do this:
  1. Identify the 5 priorities for the week, ranked. For each, state: (a) the priority in one sentence, (b) why it's a top-5 this week (tie it to {{quarterly_goal}} or {{biggest_risk}}), (c) the concrete output by Friday EOD, (d) rough hours required.
  2. List 3-5 things from my task list that I should explicitly NOT do this week, and why deferring is safe.
  3. Flag any priority that is actually two priorities in disguise and should be split.
  4. Suggest one priority I probably should have on the list but didn't mention — based on the stage and biggest risk you see.
  5. Tell me honestly if the week is overloaded. If yes, what gets cut?

  Be direct. Don't soften the tradeoffs. Solo founders need someone to call the shot, not list options.
variables:
  - "{{stage}}"
  - "{{quarterly_goal}}"
  - "{{biggest_risk}}"
  - "{{personal_context}}"
  - "{{task_dump}}"
  - "{{calendar_commitments}}"
exampleInput: |
  stage: pre-seed, 14 paying customers, $4k MRR
  quarterly_goal: get to $10k MRR and close pre-seed round ($800k target)
  biggest_risk: I'm the only person doing sales and the pipeline is thin
  personal_context: slept poorly last week, partner is traveling, kid home sick Tuesday
  task_dump:
    - finalize seed deck
    - 3 customer onboarding calls scheduled
    - fix the SSO bug that's blocking BigCo trial
    - write blog post about our positioning
    - hire a contractor for design work
    - submit Y Combinator application (deadline Friday)
    - meet with two angels (Tues, Thurs)
    - reply to 40 unread customer emails
    - update pricing page
    - explore Webflow vs Framer for new site
    - run payroll
    - file Delaware franchise tax
    - QBR with our biggest customer
    - reply to journalist inquiry
    - record onboarding video walkthrough
  calendar_commitments: 2 angel meetings, 3 customer onboarding calls, kid pickup Tuesday 2pm
exampleOutput: |
  Week is overloaded. Below is the cut.

  TOP 5 PRIORITIES (ranked):

  1. Close the SSO bug for BigCo.
  Why: BigCo is your largest pipeline opportunity and the bug is the single thing blocking the trial. If they convert, that's a step-change toward $10k MRR. Everything else is secondary if this one stalls.
  Output by Friday: SSO works in BigCo's environment, confirmed by their IT lead in writing.
  Hours: 6-10 (could blow up; budget for it).

  2. Run the 2 angel meetings well + 1 follow-up cycle each.
  Why: You're raising. Angels move on momentum. Two meetings well-prepared > five rushed.
  Output: warm followups within 24h with the specific data slice each asked for, plus an "are you in or out" close attempt within 7 days.
  Hours: 4 (2 meetings + prep + followups).

  3. Submit YC application Friday.
  Why: Hard deadline, optionality is huge, the cost of submitting is one focused evening. Not submitting because you were "too busy" is the kind of decision you'll regret.
  Output: submitted application, video recorded.
  Hours: 4 (do it Thursday night, not Friday).

  4. The 3 customer onboarding calls + reply to top 10 customer emails.
  Why: Churn risk at $4k MRR is existential. New customer activation in week 1 is the highest-leverage thing for retention.
  Output: 3 customers activated, top 10 emails answered.
  Hours: 5.

  5. QBR with your biggest customer.
  Why: They're a reference, an expansion opportunity, and a logo for the deck. Don't reschedule.
  Output: clear next-quarter expansion ask landed.
  Hours: 2.

  EXPLICITLY NOT DOING:
  - Blog post about positioning. Defer 2 weeks. Nobody is reading the blog yet.
  - Webflow vs Framer exploration. This is procrastination dressed up as work. Defer indefinitely until the current site is the actual bottleneck.
  - Pricing page update. Won't move MRR this week. Defer.
  - Onboarding video walkthrough. Useful but not urgent. Defer.
  - Hiring a design contractor. You don't have time to manage them this week. Defer 1-2 weeks.

  HIDDEN DOUBLES:
  "Finalize seed deck" is two things: (a) update narrative for the angel meetings this week, (b) full deck rewrite. Only do (a). Block 90 minutes Monday.

  MISSING PRIORITY (that should be on the list):
  Sleep. You said you slept poorly last week. A solo founder who burns out misses the YC interview. Protect 7+ hours/night this week. This is a priority, not a luxury.

  CUTS GIVEN OVERLOAD:
  Drop the 40-email reply target — answer the top 10 only. Drop blog, design contractor, video, pricing, site exploration. Run payroll and file DE franchise tax in 30 minutes Friday afternoon (these are not strategic, just don't miss them).

  Call: this is doable but tight. The SSO bug is the wild card. If by Wednesday it's still unresolved, push the YC application to Thursday and reschedule one angel meeting.
tips:
  - "Run this prompt on Sunday night, not Monday morning. You want to walk into Monday with a plan, not build one."
  - "If Claude says the week is overloaded and you disagree, that's usually a signal you're underestimating something. Push back, but take the warning seriously."
  - "The 'explicitly not doing' list is the most valuable output. Solo founders rarely write down what they're choosing to skip — that's why everything bleeds into everything."
  - "Pair this prompt with a Friday EOD review: did you ship the 5? If you missed one, was it because the priority was wrong or the estimate was wrong? Calibrate."
  - "If you're fundraising, fundraising should be in the top 3 every week until the round is closed. Investor momentum decays fast."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - solo-founder-task-batching
  - founder-decision-journal-entry
  - founder-burnout-self-check
tags:
  - prioritization
  - solo-founder
  - weekly-planning
  - tradeoffs
  - focus
---
