---
title: "Draft sensitive layoff communication"
slug: layoff-communication
function: executive
role: comms
description: "Draft the package of communications required for a layoff: the all-hands script, the affected-employee email, the staying-employee email, and the external statement — written with care and clarity."
useCase: "Use this when you have made the hard call to do a layoff and you need to communicate it well — directly, respectfully, and without the corporate distance that makes things worse. This prompt is a starting point, not a final draft. Pair it with HR review and legal review before sending anything. The goal is to give the affected people clarity and dignity, and the remaining team honesty."
prompt: |
  You are an executive communications and HR-partner advisor who has helped CEOs handle layoffs at scaleups. Draft a layoff communication package for {{company_name}}. The output is a starting draft — assume HR and legal will review and adjust before anything is sent.

  Inputs:
  - Company and stage: {{company_name}}, {{stage}}
  - CEO name: {{ceo_name}}
  - Number of people affected: {{affected_count}} (out of {{total_headcount}} total)
  - Functions or teams affected: {{functions_affected}}
  - The honest reason for the decision: {{reason}}
  - Severance and support being offered: {{severance_package}}
  - Date of notification: {{notification_date}}
  - Date affected employees' employment ends: {{end_date}}
  - The one thing the CEO wants every employee — leaving and staying — to know: {{key_message}}

  Produce four pieces, in this order:

  ## 1. The All-Hands Opening (CEO speaks first, then HR/legal logistics)
  ~3 minutes spoken. The CEO addresses the company live before any individual notifications go out (or immediately after, depending on the chosen sequence — flag the choice). Direct. Honest. Owns the decision. Names the reason without hiding behind macros. Does not say "this is the hardest thing I've ever had to do" — leaders should not center their own feelings.

  ## 2. The Email To Affected Employees
  Sent immediately after notification meetings. Concise. Confirms what was said in the meeting in writing. Includes:
  - Confirmation of the decision and last day
  - The severance and benefits package
  - Logistics (equipment, transition, references)
  - A direct line to HR for questions
  - A note from the CEO that is human, not legal
  Tone: respectful, factual, no corporate distance.

  ## 3. The Email To Remaining Employees
  Sent within an hour of notifications being complete. Includes:
  - What just happened and why
  - Confirmation that the action is complete (no further reductions planned in the immediate term — only state if true)
  - What changes for the remaining team
  - Acknowledgment of the colleagues who are leaving
  - When and where leadership will be available for questions

  ## 4. The External Statement (Press / Customer-Facing)
  Short. Honest. No spin. Confirms the action, the size, the reason. Avoids "right-sizing," "realignment," or "best-in-class talent." Includes the company's stance on supporting affected employees.

  Constraints:
  - The drafts must reflect the actual reason in {{reason}}. Do not paper over it with macroeconomic euphemisms unless macros are in fact the reason.
  - The CEO must own the decision. No "leadership has decided." It is "I have decided."
  - Affected employees are addressed with full respect. No "right-sizing" language anywhere.
  - Flag any section that requires legal review (severance specifics, benefits language, references policy) for HR and legal sign-off.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{ceo_name}}"
  - "{{affected_count}}"
  - "{{total_headcount}}"
  - "{{functions_affected}}"
  - "{{reason}}"
  - "{{severance_package}}"
  - "{{notification_date}}"
  - "{{end_date}}"
  - "{{key_message}}"
exampleInput: |
  company_name: Vantage Systems
  stage: Series B SaaS, 180 employees
  ceo_name: Lila Hassan
  affected_count: 14
  total_headcount: 180
  functions_affected: SMB self-serve product, growth, and partial CS
  reason: we are closing the SMB self-serve product line — the experiment did not produce the conversion economics required, and continuing it is a worse choice than ending it
  severance_package: 3 months base salary + accelerated equity vesting through end date + 6 months of healthcare continuation + outplacement services + retention of company laptop
  notification_date: Tuesday, March 25, 2027
  end_date: Friday, May 9, 2027
  key_message: this decision is about a product bet that did not work, not the people who worked on it; the people on this team did real work, and we are going to send them off with dignity and real support
exampleOutput: |
  ## 1. The All-Hands Opening

  *(Sequence note: notifications happen first thing Tuesday morning in scheduled 1:1s; this all-hands is held at 11am, after every affected person has been told.)*

  Good morning. Before anything else, I want to be direct about why we are here.

  This morning, fourteen of our colleagues were notified that their roles are ending. Their last day will be May 9. Most of them work on the SMB self-serve product, with a small number on the growth and customer-success teams that supported it.

  Eighteen months ago we made a bet that we could build a faster, lower-touch motion for small-business customers. We invested four million dollars and the work of a strong team. The conversion economics did not come together. We ran six pricing tests, two repositioning attempts, and a full GTM redesign. The latest test moved the number — and the number is still well short of what we'd need to make the business work. I made the decision to end it.

  This is a decision I own. It is not a market decision and it is not a "we're realigning the org." It is a single product bet that did not produce, and the cost of carrying it any further is a cost paid by the work we are not doing on healthcare and on the AI compliance module. I made the call. It is mine.

  The people who worked on this team did real work and they did it well. I am asking each of you, in the next two weeks, to make space for the people who are leaving — to write a real reference, to make an introduction, to be a person, not a corporation. They earned that.

  Here is what is true and what is not. There are no other reductions planned. This is not the start of a wave. The company's cash position is strong, the rest of the business is healthy, and the board is fully aligned. I will tell you if that ever changes — and I am telling you now that it has not.

  Maya, Devon, and the People team are going to walk through the support package, the next two weeks, and how the work transitions. I will be back at the end to take any question on any topic, and my office hours this Wednesday and Thursday afternoon are open to anyone who wants to talk one-on-one.

  *(— Hand off to HR for severance, transitions, logistics —)*

  ## 2. Email To Affected Employees

  **Subject: Your role at Vantage — written confirmation**

  *(Sent immediately after each 1:1 notification meeting.)*

  [First name],

  This email confirms the conversation we had this morning. Your role at Vantage is ending on May 9, 2027. I'm writing this so you have everything in one place.

  **Your support package:**
  - Three months of base salary as severance, paid on the regular schedule.
  - Accelerated equity vesting through your end date.
  - Six months of continued healthcare coverage at the same employer-paid level you have today.
  - Outplacement services through [provider], starting whenever you're ready.
  - Your laptop is yours to keep.
  - We will provide direct reference support — Maya in HR can walk through what that looks like.

  **The next two weeks:**
  Devon from the People team will be your point of contact. He'll send a separate note today with calendar holds for transition planning and the steps for finalizing benefits and severance documents. There is no rush — we'll work on your timeline.

  **From me, personally:**
  The decision to close the SMB self-serve project is not a comment on you. The work you did on this team was real and visible to all of us. I'm going to write a reference for anyone who wants one, and I mean that — please ask.

  If you want to talk, my calendar is open this week. Joelle will get you on it.

  — Lila

  *(Note for legal review: confirm severance language, references policy phrasing, and benefits continuation specifics before send.)*

  ## 3. Email To Remaining Employees

  **Subject: What we shared this morning, and what's next**

  Hi everyone,

  This morning we held an all-hands to share that we are closing the SMB self-serve product line. Fourteen of our colleagues were notified earlier today that their roles are ending, with a final day of May 9.

  I want to be direct about a few things in writing.

  First, the decision: this is about a product bet that did not produce the economics we'd need, not about the people who worked on it. They did the work. We are sending them off with three months of severance, six months of healthcare continuation, accelerated vesting, and active outplacement support. They keep their laptops. Many of you will be asked for references and introductions in the coming weeks. Please make time for them.

  Second, what this is not. There are no other reductions planned. The company's cash position is strong. The rest of the business is healthy. If anything ever changes there, I will tell you directly — and I am telling you now that it has not.

  Third, what changes for the remaining team. The engineering and design capacity that was on SMB self-serve will join the AI compliance module. The CS team will fold the remaining SMB customer commitments into a 90-day wind-down handled by a small named pod. Maya is going to publish the team-by-team transition plan before end of day Friday.

  I will be in office hours Wednesday and Thursday afternoon. If you want to talk before then, my calendar is open. The full all-hands recording will be posted by 2pm today.

  This is a hard day for the people leaving. It's also a real day for those of us staying — to handle this with care, to do right by the colleagues who are going, and to keep building the company we said we'd build.

  — Lila

  ## 4. External Statement

  Vantage Systems today announced the closure of its SMB self-serve product line, affecting 14 of the company's 180 employees. The decision reflects a focused reallocation of company resources to its enterprise and healthcare segments, where Vantage's growth has been concentrated.

  "This is a single product decision, not a comment on the people who worked on it," said Lila Hassan, CEO. "We are providing each affected colleague with three months of severance, six months of continued healthcare, accelerated equity vesting, and outplacement support. We're committed to helping them land their next role."

  Vantage continues to operate from a strong cash position and is on track to meet its 2027 plan. The company is hiring across its healthcare go-to-market, AI compliance, and platform engineering teams.

  *(Note for legal review: confirm severance disclosure permissions, employee count disclosure, and forward-looking language before publication.)*
tips:
  - "Run all four drafts past HR and legal before any of them go out. The prompt produces a starting point, not a final."
  - "Notify individuals before the all-hands. People should not learn their role is ending from a group meeting."
  - "Do not say 'this is the hardest decision I've ever had to make.' The hard part belongs to the people losing their jobs, not the leader making the call."
  - "Be honest about the reason. 'We did not get the economics' is more respectful than 'we are realigning around our mission.'"
  - "If there will be no further reductions in the immediate term, say so explicitly. Silence creates a worse outcome than information."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - exec-memo-leadership
  - all-hands-narrative
  - internal-restructure-announcement
  - press-statement
tags:
  - layoff
  - sensitive-comms
  - executive-comms
  - hr
  - leadership
---
