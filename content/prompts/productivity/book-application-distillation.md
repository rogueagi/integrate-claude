---
title: "Distill a book into 3 specific actions"
slug: book-application-distillation
function: productivity
role: learning
description: "Take a book you just finished and distill it into exactly 3 actions you'll take in the next 30 days — not a summary, not a takeaway list."
useCase: "Use this right after finishing a book to convert reading into change. Most books produce zero behavior change because the reader files vague takeaways instead of committing to specific actions."
prompt: |
  You are helping me convert a book into actual behavior change. Most books fail to change behavior because readers extract vague "takeaways" instead of committing to specific actions. I want exactly 3 actions, no more.

  Book: {{book_title_and_author}}
  Why I read it: {{why_read}}
  My current role / context: {{current_context}}
  My honest read on the book — was it great, mid, or hyped: {{my_honest_read}}

  My key takeaways and notes:
  ---
  {{my_takeaways}}
  ---

  Distill this into:

  1. ONE-LINE THESIS — the book's core claim, in plain language
  2. WHAT ALREADY MATCHES YOUR PRACTICE — flag concepts you already do, so we don't double-count them as "new actions"
  3. THE 3 ACTIONS — exactly three, no more. Each action must:
     - Be specific (a verb + an object + a frequency or trigger)
     - Be testable in 30 days (you'll know if you did it or not)
     - Connect to a real friction or goal in {{current_context}}
     - Pass the "would I bet $20 I'll do this?" test
  4. ANTI-ACTIONS — 1-2 things from the book I should NOT do, even though they sound good. Why they don't fit my context.
  5. 30-DAY CHECK — what I'll review at day 30 to know if these actions stuck and worked
  6. WHAT TO IGNORE — the parts of the book that aren't relevant to me right now (it's okay; you don't need to apply everything)

  Be ruthless. If my takeaways are vague platitudes, push back and ask me to be more specific before generating actions.
variables:
  - "{{book_title_and_author}}"
  - "{{why_read}}"
  - "{{current_context}}"
  - "{{my_honest_read}}"
  - "{{my_takeaways}}"
exampleInput: |
  book_title_and_author: "Deep Work" by Cal Newport
  why_read: I feel scattered. I work hard but the output of my deep work is shrinking. Wanted a framework.
  current_context: Senior PM at a 200-person SaaS, 30+ hours of meetings most weeks, three direct cross-functional partners, recently promoted with bigger ambiguity
  my_honest_read: Repetitive in places, but the core idea (deliberate scarcity of cognitive output) is true and I've been ignoring it.
  my_takeaways: |
    - Knowledge workers have less and less actual deep work; performative shallow work is increasing
    - Deep work is rare and valuable, becoming more so
    - You should schedule deep work blocks deliberately
    - Quit social media (or reduce drastically)
    - Embrace boredom — don't fill every moment with input
    - Drain the shallows — minimize shallow work, batch what's left
    - Have a shutdown ritual at end of day to mentally close work
    - "Productive meditation" — think about a hard problem during walks/runs
    - Become hard to reach
exampleOutput: |
  ONE-LINE THESIS
  Sustained focus is a scarce, valuable, and trainable skill — and most knowledge workers have lost it because they've systematically structured their lives to make it impossible.

  WHAT ALREADY MATCHES YOUR PRACTICE
  - You already schedule some focus blocks (per your context). Don't list "do focus blocks" as a new action — it's table stakes for you.
  - You're not on social media in a way that's eating your day. Skip the social media advice.

  THE 3 ACTIONS

  1. Block 8:30-10:30 AM Tue/Thu as "Deep work — [specific deliverable]" for the next 4 weeks, with Slack DND on, no exceptions.
  Specific: yes — exact times, specific days, specific behavior
  Testable: yes — at day 30 you can count how many of 8 blocks you protected
  Bet $20: yes — small enough not to lie about, big enough to matter

  2. Adopt a 5-minute end-of-day shutdown ritual at 5:25 PM daily: review tomorrow's calendar, capture open loops in a notes file, close laptop. No "one more email check."
  Specific: yes — exact time, exact behavior
  Testable: yes — daily yes/no
  Bet $20: yes — the failure mode (you skip when busy) is exactly the trigger this addresses

  3. Replace one 30-min commute or walk per week with "productive meditation" — pick one hard problem in advance and turn it over without phone or podcast. Capture insights in 5 min after.
  Specific: yes — frequency and pre-commitment
  Testable: yes — count weeks done
  Bet $20: yes — only weekly, hard to game

  ANTI-ACTIONS
  - "Become hard to reach" — bad fit for a senior PM with three cross-functional partners. The book's monastic ideal will damage your relationships in your role. Don't do this.
  - "Quit all social media" — not your problem. Don't optimize what isn't broken.

  30-DAY CHECK
  Review on day 30 with three questions:
  - Did I protect at least 6 of 8 deep work blocks? If not, what hijacked them?
  - Did the shutdown ritual reduce the "Sunday dread" feeling? Subjective but real.
  - Did productive meditation produce one actual usable insight?
  If yes to 2 of 3, keep going. If no to 2, the system needs adjusting — maybe deep work needs to be 90 min not 120, etc.

  WHAT TO IGNORE
  - The "drain the shallows" framework is too aggressive for your meeting-heavy role; partial application only
  - The Bill Gates think-week is not your stage of career; revisit in 5 years
  - The bimodal/rhythmic/journalistic taxonomy is interesting but not actionable for you right now
tips:
  - "Three actions, never more. Five actions = zero actions. The constraint is the value."
  - "Each action must pass the 'would I bet $20 I'll do this?' test. If you wouldn't bet, the action is too vague or too ambitious."
  - "Naming anti-actions is as important as naming actions. Books oversell their own framework — your job is to filter."
  - "Re-read this distillation at day 30. The 30-day check is the entire point — without it, the actions die quietly."
  - "Don't try to apply every book. Some books are 1 action, some are 0. A book that produces zero behavior change isn't a failure if you read it for entertainment."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - reading-notes-condense
  - learning-roadmap-create
  - weekly-review-template
tags:
  - learning
  - reading
  - habits
  - actions
  - synthesis
---
