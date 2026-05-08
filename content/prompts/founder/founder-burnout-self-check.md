---
title: "Run a founder burnout self-check"
slug: founder-burnout-self-check
function: founder
role: solo-founder
description: "A structured self-assessment that surfaces early signs of burnout before they become a crisis — and recommends specific, low-effort adjustments grounded in the founder's actual context."
useCase: "Use this when something feels off but you can't name it — sleep is bad, motivation is low, small problems feel big. Burnout creeps in before you notice. This prompt gives you a private, non-judgmental space to inventory the signals and pick one or two adjustments you'll actually make. It is not a substitute for a therapist or doctor, but it's a useful weekly or biweekly practice."
prompt: |
  You are a thoughtful, experienced founder coach. You've worked with hundreds of founders and you know burnout patterns well. You are not a therapist — you don't try to be one. Your job is to help me see clearly what's going on and pick small, realistic adjustments.

  Here is my honest input. Don't tell me I'm fine if I'm not.

  Sleep last 7 nights (rough hours, quality 1-10): {{sleep}}
  Energy level today (1-10): {{energy}}
  Last time I had a full day off: {{last_day_off}}
  Exercise frequency last 2 weeks: {{exercise}}
  Eating patterns (regular meals? skipping? caffeine load?): {{eating}}
  Things I've been avoiding (people, decisions, conversations): {{avoidance}}
  What's draining me most right now: {{drains}}
  What's energizing me right now (if anything): {{energizers}}
  Relationship with cofounder/team — tense or fine?: {{relationships}}
  Personal life context (partner, kids, family, finances): {{personal}}
  Anything I'm afraid to say out loud: {{fears}}

  Do this:
  1. Tell me where I am on a spectrum: fine / strained / approaching burnout / in burnout. Be honest, not alarmist. Cite the signals.
  2. Identify the 2-3 highest-signal warning signs in what I shared. Don't moralize.
  3. Recommend 2-3 adjustments I can make this week. They must be realistic for a founder — not "take a month off." Each adjustment should be something I can start in the next 48 hours.
  4. Identify one bigger structural change I should consider in the next 30 days (e.g., a hire, a process change, a hard conversation, time off).
  5. If anything I shared sounds like it warrants professional support (therapist, doctor), say so plainly. Don't be coy.

  Tone: direct, warm, no fluff. Don't pep-talk me. Don't catastrophize. Just see me clearly.
variables:
  - "{{sleep}}"
  - "{{energy}}"
  - "{{last_day_off}}"
  - "{{exercise}}"
  - "{{eating}}"
  - "{{avoidance}}"
  - "{{drains}}"
  - "{{energizers}}"
  - "{{relationships}}"
  - "{{personal}}"
  - "{{fears}}"
exampleInput: |
  sleep: 5-6 hours most nights, quality 4/10, woke up at 3am twice this week
  energy: 4/10
  last_day_off: 6 weeks ago, half-day
  exercise: walked twice, no real workouts
  eating: skipping lunch most days, 4 coffees a day, dinner often after 9pm
  avoidance: avoiding two hard customer conversations, avoiding calling my dad back
  drains: the lead investor is dragging out the term sheet, my cofounder and I disagreed on hiring and haven't talked about it, runway anxiety
  energizers: shipping the new onboarding flow felt great, one customer call this week was genuinely fun
  relationships: cofounder a bit tense — we haven't addressed the disagreement
  personal: partner has been picking up the slack on kid stuff, I haven't said thank you in a while
  fears: I'm worried I'm building something nobody actually wants, and I can't tell if I'm exhausted or wrong
exampleOutput: |
  Where you are: strained, leaning toward approaching burnout. Not there yet, but the runway is shorter than you think.

  Highest-signal warning signs:

  1. Sleep is broken. Six weeks of 5-6 hours with 3am wakeups is a body in stress response, not a body that's tired. The 3am wakeups in particular usually mean cortisol is high — that's the runway anxiety speaking.

  2. You're avoiding two customer conversations and an unresolved cofounder disagreement. Avoidance compounds. The cost of having those three conversations is much smaller than the cost of carrying them around for another two weeks.

  3. The fear at the end — "I can't tell if I'm exhausted or wrong" — is the signal that matters most. Exhausted founders can't evaluate their own conviction. You probably need to be rested before you decide whether the company is on the right track. Not the other way around.

  Adjustments this week (next 48 hours):

  1. Schedule the cofounder conversation by tomorrow. Not the conversation itself — the calendar block. Send it tonight: "Hey, I want to talk through the hiring thing this week, an hour somewhere Wed or Thu?" The act of scheduling drops the cognitive load by half.

  2. Eat lunch every day for 5 days. Set an alarm. The skipped lunches plus 4 coffees plus 9pm dinners is metabolic chaos and a major contributor to the 3am wakeups.

  3. Pick one of the two customer conversations and have it Tuesday. Not both. One. The point is to break the avoidance pattern, not to be a hero.

  Bigger structural change in 30 days:

  Take a real, full day off — phone in another room, no Slack, no email. Not a Saturday where you "try not to work." A planned, protected day. The fact that it's been 6 weeks and the last one was a half-day is the structural problem. If you can't see how to make that happen, that's the conversation to have with your cofounder and partner this week.

  And: thank your partner. Tonight. Out loud. Specifically. The emotional ledger matters and you know you've been drawing on it.

  Professional support note:

  Nothing you said requires emergency action. But six weeks of broken sleep plus 3am wakeups plus runway anxiety is exactly the situation where 4 sessions with a therapist who works with founders would be high-leverage. If you have one, message them tomorrow. If you don't, ask another founder you trust for a referral. This isn't "you're broken" — it's "you're carrying a lot and a trained outside ear is more efficient than journaling."

  One last thing: the question "am I building something nobody wants" is worth answering, but not from this state. Get two weeks of better sleep first, then re-ask it. The answer might be the same. It might not. Either way, you'll trust the answer more.
tips:
  - "Be honest in the inputs. The output is only as useful as the truthfulness of what you put in. Nobody else is reading this."
  - "Burnout signals show up in the body before the mind. Pay extra attention to sleep, eating patterns, and unexplained physical symptoms — those are leading indicators."
  - "Run this every 2 weeks during fundraising or any other intense stretch. The point is calibration over time, not a one-time check."
  - "If the output recommends professional support and you've been avoiding it, that avoidance is itself a signal. Many founders find a therapist who works with founders worth the cost."
  - "Don't share this output with anyone unless you want to. The privacy is part of why it works."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - solo-founder-weekly-priorities
  - founder-decision-journal-entry
  - cofounder-conflict-conversation-prep
tags:
  - mental-health
  - burnout
  - self-assessment
  - solo-founder
  - well-being
---
