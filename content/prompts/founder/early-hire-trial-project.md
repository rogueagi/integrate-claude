---
title: "Design a paid trial project for a finalist candidate"
slug: early-hire-trial-project
function: founder
role: early-hiring
description: "Build a paid 1-2 week trial project for a finalist that produces real signal — and is fair to the candidate, scoped tightly, and respectful of their time."
useCase: "Use this for any early-stage hire where the cost of a wrong hire is high (your first AE, your first PM, a senior engineer). Interviews are weak signal. A scoped paid trial gives you 5x the data and lets the candidate try the team. This prompt produces a trial brief that's specific, fair, and signals to the candidate that you take their time seriously."
prompt: |
  You are a hiring expert who designs paid trials for early-stage startups. You know the difference between a real trial (paid, scoped, respectful) and an exploitative "homework" (unpaid, vague, time-wasting). You design the former.

  The role: {{role}}
  The candidate: {{candidate_name}} — {{candidate_background}}
  Why we're doing a trial (vs. just hiring): {{trial_rationale}}
  Trial budget (cash to candidate): {{trial_budget}}
  Trial duration (calendar time): {{trial_duration}}
  Expected hours of work: {{expected_hours}}
  What we want to learn from the trial: {{learning_goals}}
  Real work we have on our plate that fits this trial: {{real_work}}
  How they'll be supported during the trial: {{support}}

  Build the trial brief with this structure:

  1. **Frame.** A short paragraph to the candidate explaining why we do trials, what we'll pay, what we'll learn, and what they'll get from it. Honest tone.

  2. **The project.** A specific, scoped piece of real work. Not a hypothetical. Not a take-home test. Real work that, if they join, ships.

  3. **Deliverables.** What they'll produce by end of trial. Specific artifacts.

  4. **What success looks like.** 3-4 observable signals we'll be evaluating. Be transparent — this isn't a trick test.

  5. **What we'll provide.** Access, intros, context, weekly check-in cadence, who their primary contact is.

  6. **Logistics.** Pay (clearly stated), timing, whether they can keep working their current job (yes), IP and confidentiality terms (mutual, simple).

  7. **What happens after.** Two outcomes — offer or no-offer — and how we communicate each. Specifically: yes-or-no within X days of trial end, with feedback either way.

  8. **What you're committing to.** A short note on what we expect from them during the trial — hours, communication, honest feedback.

  Tone: candid, respectful, specific. This is a contract between two adults who are evaluating each other.

  At the end, generate a 2-paragraph "kill criteria" memo for me (the hiring manager only): the specific behaviors during the trial that would tell me this is not the right hire, even if the deliverable looks fine.
variables:
  - "{{role}}"
  - "{{candidate_name}}"
  - "{{candidate_background}}"
  - "{{trial_rationale}}"
  - "{{trial_budget}}"
  - "{{trial_duration}}"
  - "{{expected_hours}}"
  - "{{learning_goals}}"
  - "{{real_work}}"
  - "{{support}}"
exampleInput: |
  role: Founding Account Executive
  candidate_name: Marcus Reed
  candidate_background: 5 years AE experience — 3 years at HubSpot mid-market, 2 years at a 40-person vertical SaaS company. Closed $1.2M last year at $25k average ACV.
  trial_rationale: Marcus is the strongest of 4 finalists, but first-AE hires fail half the time. We want real signal on how he handles a live demo flow with no playbook, and how he writes to customers.
  trial_budget: $5,000 for 2 weeks
  trial_duration: 2 weeks
  expected_hours: 20-25 hours total over the 2 weeks; he'll keep his current job
  learning_goals:
    - Can he handle 2 live demos with our product (with founder coaching)?
    - Can he write a follow-up sequence we'd actually send?
    - Does he ask the right questions about the business — or just execute?
    - Does he get along with the team?
  real_work:
    - 2 actual inbound demos that the founder would otherwise run (real prospects, scheduled in week 2)
    - Draft a 4-email follow-up sequence for inbound that didn't book a demo (we don't have one)
    - Write a 1-page memo on what he'd change about our discovery process based on watching 3 of our recorded calls
  support:
    - Daily 15-min Slack check-in with the founder
    - Access to recorded calls, customer emails, and current pipeline
    - Open invitation to ask anything
exampleOutput: |
  TRIAL BRIEF — Marcus, Founding AE at Linework

  FRAME
  Hi Marcus — we want to do a 2-week paid trial before extending an offer. We do this because the first AE hire is one of the highest-stakes hires we'll make, and we'd rather both of us know more than less. We pay $5,000 for the 2 weeks regardless of outcome, you keep your current job, and at the end we either send an offer or we send candid feedback. The trial is real work on real prospects, not a homework assignment.

  THE PROJECT
  Three pieces of work, all real:

  1. Run two live discovery calls with actual inbound prospects (scheduled for week 2). I'll be on the calls in observer mode for the first one and silent for the second. You run them.

  2. Draft a 4-email follow-up sequence for inbound demos that didn't book — we don't have one and we need it. You'll see our 12 most recent unbooked inbounds and write what you'd send them.

  3. Watch 3 of our recorded discovery calls (I'll send links) and write a 1-page memo on what you'd change about our discovery process. Specific, opinionated. Not "here's what was good" — what's broken.

  DELIVERABLES (end of week 2)
  - 2 discovery calls completed, plus your post-call notes for each.
  - 4-email follow-up sequence, ready to send (subject lines + bodies).
  - 1-page discovery memo with specific recommendations.

  WHAT SUCCESS LOOKS LIKE
  We'll be evaluating:
  - **The discovery calls.** Did you ask the right questions? Did the prospect feel heard? Did you advance or kill the deal honestly?
  - **The follow-up sequence.** Does it sound like a human who understands the buyer? Would you send it to someone you respect?
  - **The discovery memo.** Did you see the actual problems in our process, or did you generalize? Specificity is what we're looking for.
  - **How you operate.** Do you ask great questions? Do you push back when something's off? Do you do what you said by when you said?

  WHAT WE'LL PROVIDE
  - Daily 15-min Slack check-in (or skip if there's nothing to discuss).
  - Access to: recorded calls, our CRM, customer email threads, current pipeline.
  - Intros to anyone on the team you want to talk to.
  - Honest answers to anything you ask. If you want to know about runway, ask. If you want to know what's hard about working here, ask.
  - Primary contact: [founder] for everything.

  LOGISTICS
  - Pay: $5,000 flat, paid via 1099 within 7 days of trial end. Same regardless of outcome.
  - Hours: ~20-25 over the 2 weeks, mostly evenings/weekends to fit your current job.
  - You keep working your current role. We don't ask you to quit anything.
  - Confidentiality: mutual NDA (simple 1-pager). You don't share what you see; we don't share what you write.
  - IP: anything you produce during the trial belongs to Linework if we hire you, or stays with you if we don't (with mutual confidentiality).

  WHAT HAPPENS AFTER
  Within 5 business days of trial end, you'll get one of two emails from me:
  - "Here's an offer" — full offer, with comp, equity, and start date.
  - "Here's our feedback and why this isn't the right fit" — specific, candid, useful for your next move.

  Either way, we follow up with a 30-min call to talk through it.

  WHAT WE'RE ASKING FROM YOU
  - Show up to the daily check-ins (or skip explicitly).
  - Tell us if anything is unclear or unfair as it comes up.
  - Be honest with us about what you're seeing — including what worries you about us.
  - Hit the deliverables on time. If you can't, tell us early.

  Looking forward to working with you for these two weeks.

  — [Founder]

  ---

  KILL CRITERIA (for me, not Marcus)

  Behaviors during the trial that would tell me this isn't the hire, even if the deliverables look fine:

  1. He doesn't ask hard questions about the business in week 1. A real Founding AE pokes at runway, ICP, sales cycle data, churn — they have to. If Marcus only executes the brief and never pushes on the business, he won't have the founder energy this role needs. Watch for this Wednesday-Friday week 1.

  2. He misses a deadline without flagging it early, or his discovery memo is vague ("here's what's good and what could be better"). Both signal he won't be the kind of operator who tells me hard truths. The discovery memo is the most important artifact for evaluating him, more than the calls themselves — the calls are skill, the memo is judgment.

  3. He doesn't push back on me about anything during the 2 weeks. If I'm always right in his eyes during the trial, he'll be too deferential to do the role. The first AE has to be willing to tell me my CRM is bad, my pricing is mispositioned, my discovery is broken. If I get pure agreeableness for 2 weeks, that's a no.
tips:
  - "Always pay for trials. Unpaid 'homework' selects against the best candidates and signals you don't value time. The cost is far lower than the cost of a bad hire."
  - "Use real work, not hypothetical exercises. Real work tells you 5x more about how someone operates and gives you something usable either way."
  - "Tell the candidate exactly what you're evaluating. Hidden criteria don't make you smarter; they just produce noisy data."
  - "Set a clear yes/no decision date and hold yourself to it. Dragging out a trial outcome is the worst signal you can send to a strong candidate."
  - "Write the kill criteria privately before the trial starts — based on the role, not the candidate. It keeps you honest if you start liking them and want to overlook signals."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - first-hire-job-description
  - founder-led-recruiting-outreach
  - early-stage-comp-conversation
tags:
  - hiring
  - paid-trial
  - early-stage
  - candidate-evaluation
  - recruiting
---
