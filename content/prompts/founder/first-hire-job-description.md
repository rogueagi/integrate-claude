---
title: "Write a JD for an early-stage hire that attracts mission-driven candidates"
slug: first-hire-job-description
function: founder
role: early-hiring
description: "Draft a job description for an early-stage role that filters for the right kind of candidate — clear on stage, scope, and tradeoffs, without the corporate boilerplate that scares off the best people."
useCase: "Use this when posting one of your first 10-15 hires. Most JDs at startups read like enterprise JDs with a few 'fast-paced environment' phrases — which is exactly what good early-stage candidates filter past. This prompt produces a JD that's honest about the messiness, specific about the work, and signals to the right people that this is for them."
prompt: |
  You are a hiring expert who has helped early-stage founders write JDs that consistently attract strong candidates. You know the corporate-style JD doesn't work at this stage. You write JDs that read like the founder is talking directly to the candidate.

  Role: {{role_title}}
  Company: {{company_name}}
  Company stage: {{stage}}
  Team size: {{team_size}}
  Hire number for this role: {{hire_number}} (e.g., first AE, first PM, third engineer)
  Why we're hiring this role now: {{why_now}}
  What this person will own in their first 90 days: {{first_90_days}}
  What this person will own in 6-12 months: {{first_year}}
  Comp range (cash + equity): {{comp}}
  Location / remote policy: {{location}}
  Must-have experience or skills: {{must_have}}
  Nice-to-have: {{nice_to_have}}
  What we're explicitly NOT looking for: {{not_looking}}
  The real tradeoffs of this role (e.g., "you will not have a manager who has done your job before"): {{tradeoffs}}
  The real upside (e.g., "you'll build the function from zero, this becomes a director-level role at Series A"): {{upside}}

  Write the JD with this structure:

  1. **Opening paragraph** — what the company does, what stage we're in, what makes this role exist. Honest, not aspirational.

  2. **What you'll do** — 5-7 specific bullets, written in the voice of the candidate's actual work. Not "drive impact" — say "you'll close 4-6 deals a quarter and build our first sales playbook from scratch."

  3. **Why this role is interesting** — 2-3 bullets on the real upside. Not equity vague-talk. Specific career trajectory, scope, and what they'll learn.

  4. **What we're looking for** — 3-5 must-haves, written as outcomes you've achieved before, not years-of-experience.

  5. **What we're NOT looking for** — 2-3 specific filters. This signals self-awareness and saves everyone's time.

  6. **The honest tradeoffs** — name 2-3 things that will be hard about this role at this stage. Candidates who can't handle the tradeoff self-select out, which is exactly what you want.

  7. **Comp + logistics** — specific cash + equity range, location/remote, start date target.

  8. **How to apply** — direct, low-friction. No 8-form gauntlet. Specifically what they should send.

  Tone: founder voice, conversational, specific. No buzzwords (synergy, rockstar, ninja, fast-paced, world-class). No "we're a family." Show, don't tell.

  Length: 400-600 words. Anything longer doesn't get read.
variables:
  - "{{role_title}}"
  - "{{company_name}}"
  - "{{stage}}"
  - "{{team_size}}"
  - "{{hire_number}}"
  - "{{why_now}}"
  - "{{first_90_days}}"
  - "{{first_year}}"
  - "{{comp}}"
  - "{{location}}"
  - "{{must_have}}"
  - "{{nice_to_have}}"
  - "{{not_looking}}"
  - "{{tradeoffs}}"
  - "{{upside}}"
exampleInput: |
  role_title: Founding Account Executive
  company_name: Linework
  stage: post-seed, $48k MRR, 14 months in
  team_size: 4 (2 cofounders, 2 engineers)
  hire_number: First AE — founders have been doing all sales to date
  why_now: We've crossed $40k MRR with founder-led sales and the founder is the bottleneck. Inbound is consistent (10-12 quality demos/mo) and we have a clear ICP that's converting.
  first_90_days: Take over the inbound demo flow, run 4-6 demos/wk, build the first sales playbook from your real call notes, close $50k+ in new ARR
  first_year: Own pipeline generation alongside marketing, hit $500k in new ARR contributed, hire your first SDR or AE #2
  comp: $90-110k base + $180-220k OTE + 0.25-0.5% equity
  location: Remote-friendly, US time zones; quarterly in-person team week
  must_have:
    - Closed deals at $20k+ ACV in B2B SaaS, ideally vertical or ops-adjacent
    - Comfortable being the only sales person, no playbook handed to you
    - Strong written communication; you'll be the customer-facing voice
  nice_to_have:
    - Prior experience selling to ops or operations leaders
    - Experience at a 5-30 person company
    - Has been an SDR before (knows how to source outbound)
  not_looking:
    - Pure enterprise sellers who need a 50-person SE/SDR/marketing org
    - People who want a polished tech stack — we are still on a Notion CRM
    - First-time AEs (this role isn't the right risk level)
  tradeoffs:
    - You'll build the playbook from scratch; it doesn't exist
    - You'll work directly with the founder, which is exciting but also intense
    - You'll do some work that feels below your level (CRM hygiene, basic marketing email writing) for the first 90 days
  upside:
    - Founding AE — you build the sales function and become Director of Sales at Series A
    - Real equity at the right strike price
    - Close real deals to interesting customers (Patagonia is one)
exampleOutput: |
  Founding Account Executive — Linework

  Linework builds the operating system for mid-market physical operations. We replace the spreadsheets, Slack threads, and three-tool stack that ops managers at 200-2000-person companies use to run their floors. Patagonia's ops team is a customer. We're 14 months in, 4 people, and post-seed. We've been doing all sales founder-led and we're at the point where it's working — and where the founder is the bottleneck. That's why this role exists.

  WHAT YOU'LL DO

  - Take over our inbound demo flow within your first 30 days — we run 10-12 quality demos a month from organic, and you'll own them.
  - Run 4-6 discovery and demo calls a week. Close at least $50k in new ARR in your first 90 days.
  - Build the first version of our sales playbook — discovery questions, objection responses, demo flow — from your actual call notes. There is no playbook to hand you. You make it.
  - Within a year, contribute $500k in new ARR and help hire your first SDR or AE #2.
  - Be the customer-facing voice in writing — follow-ups, proposals, post-call summaries. We're not big enough to have a "sales engineer" yet.

  WHY THIS ROLE IS INTERESTING

  - You build the sales function. You don't inherit one. At Series A, this role is Director of Sales and you'll have hired the team.
  - You'll close real deals to recognizable customers. Patagonia is the first; LogiCo (logistics) just signed at $108k. The product sells when you put it in front of the right buyer.
  - You'll work directly with the founder. Decisions get made in days, not quarters. If you have an idea about pricing or packaging or who to target, we'll try it next week.

  WHAT WE'RE LOOKING FOR

  - You've closed B2B SaaS deals at $20k+ ACV before — ideally in vertical SaaS, ops, or anything adjacent to physical operations.
  - You've worked somewhere without a playbook and built one. You write down what's working.
  - Strong written communication. We'll see this in your application.
  - You're comfortable being the only sales person on the team for the next 6-9 months.

  WHAT WE'RE NOT LOOKING FOR

  - Enterprise AEs who need an SE on every call and a 50-person GTM machine to function. We are not that.
  - First-time AEs. This is a high-trust role; we need someone who has closed before.
  - Anyone hoping for a polished tech stack. Our CRM is still partly Notion. You'll help fix that.

  HONEST TRADEOFFS

  - Some of the work is below your level — CRM hygiene, writing follow-up emails from scratch, helping with marketing copy. For the first 90 days, you do a bit of everything. If that bothers you, this isn't the role.
  - You'll work intensely with the founder. That's a feature for some people and a bug for others. Be honest with yourself.
  - The product still has rough edges. You'll lose deals because of features that don't exist yet. We'll fix them; you'll need patience.

  COMP + LOGISTICS
  - $90-110k base, $180-220k OTE, 0.25-0.5% equity (real strike price, real upside).
  - Remote-friendly, US time zones. We do one in-person team week per quarter (travel covered).
  - Target start date: within 6 weeks.

  HOW TO APPLY
  Email [founder]@linework.com with: (1) a 1-paragraph note on the most interesting deal you've closed and what made it interesting, (2) your resume or LinkedIn. Skip cover letters. We'll respond within 5 business days.
tips:
  - "Show real numbers. JDs that say '$20k+ ACV' or 'close $50k in 90 days' attract serious candidates and repel the wrong ones."
  - "The 'what we're not looking for' section is the most powerful filter you can write. Most candidates who self-select out are saving you 30 minutes each."
  - "Avoid every word that ends in -ist or -er when describing the role: 'ninja,' 'rockstar,' 'world-class.' These signal weak hiring."
  - "Post the comp range. If you don't, the strongest candidates assume the worst and skip. Posting it raises quality and quantity simultaneously."
  - "Keep the application step minimal. Every form field reduces the candidate pool. A simple email with two specific things asked beats a 40-question Greenhouse form for the first 5 hires."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - early-hire-trial-project
  - founder-led-recruiting-outreach
  - early-stage-comp-conversation
tags:
  - hiring
  - job-description
  - early-stage
  - recruiting
  - founder-voice
---
