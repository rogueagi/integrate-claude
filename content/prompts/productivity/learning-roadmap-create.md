---
title: "Build a 30/60/90 learning roadmap for a new domain"
slug: learning-roadmap-create
function: productivity
role: learning
description: "Create a structured 30/60/90-day roadmap for learning a new domain or skill — with concrete resources, projects, and checkpoints."
useCase: "Use this when you're starting from scratch on something (new technical area, a domain you've never touched, a discipline you need to pick up). Beats the trap of reading 30 articles and feeling no closer to competent."
prompt: |
  You are designing a learning roadmap for me. Be concrete and ruthless about scope. Most learning roadmaps fail because they're too broad and have no project component.

  What I want to learn: {{learning_target}}
  Why I'm learning it (specific outcome): {{why_learning}}
  My current level (be honest): {{current_level}}
  Time I can realistically commit per week: {{weekly_hours}}
  My existing skills that transfer: {{transferable_skills}}
  How I learn best (reading, video, building, teaching, etc.): {{learning_style}}

  Design a 30/60/90 day roadmap structured as:

  DAYS 1-30: FOUNDATION
  - Goal — what I should be able to do by day 30 (concrete, demonstrable)
  - Core resources — 2-3 max, named specifically (book title, course, paper). No "explore the internet."
  - One small project — something I'll have built or done, not just read
  - Self-check — how I'll know I actually learned this and can move on

  DAYS 31-60: APPLICATION
  - Goal
  - Resources (2-3 max)
  - One mid-sized project
  - Self-check
  - One person to talk to (real practitioner, even if cold-outreach)

  DAYS 61-90: INTEGRATION
  - Goal
  - Resources
  - One real-world project tied to {{why_learning}}
  - Self-check — what does "competent" look like
  - How I'd teach this to someone else (the Feynman test)

  Then output:
  - WHAT TO SKIP — common rabbit holes I'll be tempted by but should avoid
  - HARD TRUTH — one honest thing about this learning journey most people don't acknowledge
  - WEEK 1 ACTION — the literal first thing I should do tomorrow morning

  Constraint: only suggest resources that exist and you're confident about. If you're not sure, say "find a current intro [topic] book" rather than inventing a title.
variables:
  - "{{learning_target}}"
  - "{{why_learning}}"
  - "{{current_level}}"
  - "{{weekly_hours}}"
  - "{{transferable_skills}}"
  - "{{learning_style}}"
exampleInput: |
  learning_target: SQL — enough to do my own data pulls without bothering the data team
  why_learning: I'm a PM and I lose 1-2 days per week waiting on simple data pulls; I want to self-serve for funnel and cohort questions
  current_level: I can read SQL when it's in front of me; can't write a JOIN from scratch
  weekly_hours: 4 hours
  transferable_skills: Strong with spreadsheets, comfortable with logic and data structures, used to dashboards
  learning_style: I learn best by building real things on real data, not toy examples
exampleOutput: |
  DAYS 1-30: FOUNDATION
  Goal: Write a query from scratch with two JOINs and a GROUP BY against your real production data warehouse, get the right answer.
  Core resources:
  - "SQL for Data Analysis" by Cathy Tanimura (book, ~250 pages, written for analysts not engineers)
  - SQLBolt (free interactive tutorial; do all lessons)
  - Your company's actual data warehouse — get read access in week 1
  Project: Pick one funnel question you've been bothering the data team about and write the query yourself. Compare your answer to theirs.
  Self-check: Can you explain JOIN types (inner/left/right) without checking? Can you write GROUP BY + aggregate from scratch?

  DAYS 31-60: APPLICATION
  Goal: Build 3 real reports the data team currently maintains for you, on your own. Match their numbers.
  Core resources:
  - "Mode Analytics SQL Tutorial" (free, intermediate sections)
  - Your company's existing query library — read 20 queries other people wrote
  - Window functions chapter of any modern SQL book — this is the unlock for cohort analysis
  Project: Build a self-serve cohort retention chart for your product area. Validate against the data team's number.
  Self-check: Can you write a window function for "user's nth event"? Can you debug a query that returns the wrong row count?
  Person to talk to: Buy a data analyst at your company a coffee. Ask them what bad SQL they see PMs write and why.

  DAYS 61-90: INTEGRATION
  Goal: SQL is no longer the bottleneck. You self-serve every funnel and cohort question and only escalate genuine modeling questions.
  Resources:
  - Advanced topics: CTEs, recursive queries (skim only what you need)
  - Read your data warehouse's docs on dialect-specific functions (Snowflake/BigQuery/Postgres differ)
  Project: For your current PM project ({{why_learning}} mentions onboarding — build the activation funnel dashboard yourself in your BI tool, owned by you).
  Self-check: A peer PM asks you a data question — you don't punt to the analyst. You answer.
  Teach: Explain to another PM what a window function does and when to use one. If you can't, you don't really know it.

  WHAT TO SKIP
  - Stored procedures, triggers, indexing internals — engineering territory, not yours
  - Full database administration — not your job
  - SQL performance optimization beyond "don't SELECT * on huge tables" — let the analyst review when needed

  HARD TRUTH
  Most PMs who "learn SQL" stop at JOIN + GROUP BY and never reach window functions. That's where the actual leverage is. The first 30 days will feel productive and addictive; the 31-60 stretch is where most people quit. Push through.

  WEEK 1 ACTION
  Tomorrow morning: request read-only access to your data warehouse and create one bookmark in SQLBolt. That's it. Don't read three books — open the tool.
tips:
  - "Skip resources you can't find or remember the name of. The model will sometimes invent course titles — verify before committing."
  - "Pick a project that ties to a real work problem (your why_learning input). Toy projects don't survive your busy weeks."
  - "Build the 'person to talk to' step into the plan. Conversations compress weeks of learning into hours."
  - "If your roadmap doesn't have a teach-it-back milestone, add one. The Feynman test is the cheapest validation of real understanding."
  - "Re-run this prompt at day 30 with what you actually did. Roadmaps need recalibration; the original is a guess."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - concept-feynman-explanation
  - book-application-distillation
  - mentor-question-prep
tags:
  - learning
  - skill-development
  - planning
  - growth
  - roadmap
---
