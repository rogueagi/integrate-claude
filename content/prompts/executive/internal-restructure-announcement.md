---
title: "Announce an org restructure to the company"
slug: internal-restructure-announcement
function: executive
role: comms
description: "Draft the internal announcement for an org restructure — new leadership, new reporting lines, new team boundaries — that explains why, what changes, and what doesn't."
useCase: "Use this when leadership has decided on an org change and you need to land it well internally. Restructures fail in the announcement when employees can't tell what's actually different, why it's happening, or whether it's a prelude to something worse. This prompt produces an announcement that gives people the information they need to do their jobs Monday."
prompt: |
  You are an executive communications and people-team partner who has helped companies announce restructures cleanly. Draft an internal restructure announcement for {{company_name}}.

  Inputs:
  - Company and stage: {{company_name}}, {{stage}}
  - CEO name: {{ceo_name}}
  - The high-level change in plain language: {{change_summary}}
  - The reason for the change: {{reason}}
  - Specific changes (new teams, new leaders, reporting changes, sunset teams): {{specific_changes}}
  - What is NOT changing (compensation, location policy, team identity, etc.): {{not_changing}}
  - Effective date: {{effective_date}}
  - Whether headcount reductions are involved (yes/no — and if yes, scope): {{headcount_change}}
  - The single message you want every employee to walk away with: {{key_message}}

  Produce two artifacts:

  ## 1. The All-Hands Announcement (CEO speaks)
  ~5 minutes spoken. Live announcement to the company. Structure:

  **Opening:** Lead with the change, not the build-up. Employees who are panicking by sentence three are not listening to sentence eight.

  **Why:** The honest reason. Not "to better serve our customers." The actual operational logic.

  **What changes:** Walk through {{specific_changes}} concretely. Names of leaders. Reporting lines. Team boundaries. Which decisions move where.

  **What does not change:** Be explicit on {{not_changing}}. The questions employees are most likely to be silently asking are the ones about compensation, location, and whether their job is at risk.

  **The headcount question:** Address {{headcount_change}} directly. If no reductions are involved, say so plainly. If they are, name the scope and that affected individuals will be told individually first (handle this in coordination with the layoff comms package).

  **What this is not:** Address the rumor or fear that is most likely circulating. ("This is not a prelude to a sale." / "This is not a budget cut.") Only state what is genuinely true.

  **Where to ask questions:** Office hours, dedicated channel, direct lines.

  ## 2. The Followup Email (Sent Within 30 Minutes Of The All-Hands)
  300–500 words. Confirms in writing what was said live. Includes:
  - A simple before/after diagram described in words (or a link to the org chart)
  - The list of new managers and the people whose manager has changed
  - The dates: when does the change take effect, when do new 1:1s start, when is the next leadership Q&A
  - A clear note on what employees should do this week (continue current work, attend a specific kickoff, etc.)
  - A direct contact for questions

  Style:
  - Plain. The goal is clarity, not inspiration. Inspiration comes from the change going well, not the announcement.
  - Names of people, not "the new leader of platform engineering."
  - No buzzwords. No "unleashing potential." No "next chapter."
  - Address what is unsaid. The thing employees are afraid to ask is the thing the announcement most needs to answer.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{ceo_name}}"
  - "{{change_summary}}"
  - "{{reason}}"
  - "{{specific_changes}}"
  - "{{not_changing}}"
  - "{{effective_date}}"
  - "{{headcount_change}}"
  - "{{key_message}}"
exampleInput: |
  company_name: Vantage Systems
  stage: Series B SaaS, 180 employees
  ceo_name: Lila Hassan
  change_summary: combining product and engineering under a single CPO, splitting customer success into healthcare-only and general-segment pods, promoting Priya Ramani to VP Customer Success
  reason: the AI compliance module slip exposed the cost of having product and engineering operate as parallel orgs; healthcare requires dedicated CS depth; this aligns the company around the bets we have already made
  specific_changes: 1) Sandeep Kumar promoted to CPO, takes ownership of product and engineering; current VP Product (Jenna Liu) moves to head of healthcare-product as a senior IC role she requested; 2) CS splits — Priya leads healthcare CS pod (40% of CS team), Marcus leads general-segment CS; 3) growth team folds under marketing
  not_changing: compensation, equity, location/remote policy, performance review timing, the company's long-term strategy
  effective_date: April 1, 2027
  headcount_change: no reductions; this is a structural change only
  key_message: this is about aligning the org to the bets we already made — healthcare and the AI module — not a budget action and not a prelude to anything else
exampleOutput: |
  ## 1. The All-Hands Announcement

  **(CEO speaks)**

  Good morning. Effective April 1, we are making three structural changes to how the company is organized. I want to walk through them now, before we do anything else, so the rest of this all-hands isn't filled with people texting each other "do you know what's happening."

  Change one. Sandeep Kumar is taking over product and engineering as Chief Product Officer. Both functions report into him. The reason is direct — the AI module slip last quarter showed me that running product and engineering as parallel orgs at our stage is costing us shipping velocity. One person, one org, one accountability line.

  Jenna Liu, who has built our product organization for two years, will move to head of healthcare-product as a senior IC role. This is a change Jenna asked for and one I'm grateful she's willing to take. Healthcare-product is the most important charter in this company right now and Jenna is the right person to own it directly.

  Change two. Customer Success is splitting into two pods. Priya Ramani is being promoted to VP Customer Success and will lead a healthcare-only pod — about 40% of CS — that goes deep on the segment we've committed to. Marcus continues leading the general-segment pod with the rest of the team. The reason is that healthcare CS is a different muscle than general CS, and we have been asking a single team to do both.

  Change three. The growth team is folding into marketing under Devon. The historical separation made sense when we were running multiple parallel motions. We're not anymore.

  What is not changing. Compensation is not changing. Equity is not changing. Our remote and location policy is not changing. Performance review timing is not changing. The company's long-term strategy — healthcare focus, AI compliance, default-alive by Q4 — is not changing.

  This is not a layoff. There are no headcount reductions associated with this restructure. This is a structural change to align the org with the bets we have already made. I want to say that twice because I know it's the question some of you are silently asking. There are no headcount reductions in this announcement.

  This is also not a prelude to a sale, an acquisition, or any other corporate event. It is what it says it is — getting the org shape right for the work we have to do.

  Effective date is April 1. Sandeep, Jenna, Priya, Marcus, and Devon are all going to be on this call to take questions in the next 20 minutes. I'll send a written followup with all the reporting changes inside the hour. My office hours Wednesday and Thursday afternoon are open for any of you who want to talk one-on-one.

  ## 2. The Followup Email

  **Subject: April 1 org changes — written summary**

  Team,

  Confirming in writing what we shared at the all-hands this morning. Effective Tuesday April 1:

  **Product & Engineering:**
  Sandeep Kumar is promoted to Chief Product Officer. Both product and engineering will report into Sandeep. Jenna Liu transitions to head of healthcare-product as a senior IC role focused on the AI compliance module and the broader healthcare roadmap. Engineering managers continue reporting through their current chain — only the top of the org changes.

  **Customer Success:**
  Priya Ramani is promoted to VP Customer Success. Customer Success is splitting into two pods:
  - **Healthcare CS Pod (~40% of team):** Priya leads. Pod is dedicated to the healthcare segment.
  - **General CS Pod:** Marcus continues leading.

  Each CSM will be told individually this week which pod they're in. The split is being made based on existing account assignments — most CSMs will not change which accounts they own; only the org line and pod identity will be different.

  **Growth & Marketing:**
  The growth team is folding into marketing under Devon. Existing growth team members keep their current accounts and projects; reporting line changes effective April 1.

  **What's not changing:**
  Compensation. Equity. Remote/location policy. Performance review cycle. The 2027 strategy.

  **Your week:**
  Continue current work as planned. Sandeep, Priya, Marcus, and Devon will host kickoff sessions for their groups in the week of April 7. Your manager will let you know your kickoff time by end of day Friday. New 1:1 cadences begin the week of April 14.

  **Questions:**
  - All-hands Q&A recording is posted in #company-news.
  - Lila's office hours: Wednesday 2–4pm and Thursday 1–3pm.
  - For questions about your specific reporting line: your current manager is the first stop, and Maya in HR is the backup.
  - For anything about benefits, comp, or HR logistics: people@vantagesystems.com.

  This is the structural change we needed to support the work the company has already committed to. Thank you for the focus this week.

  — Lila
tips:
  - "Lead with the change, not the lead-up. The first 30 seconds determine whether employees hear the rest."
  - "If there are no headcount reductions, say so explicitly and twice. Silence on this question creates worse outcomes than information."
  - "Name the people. 'New CPO' lands worse than 'Sandeep' — employees want to know who they'll work with."
  - "The followup email matters more than the live announcement. People re-read it; they don't replay the meeting."
  - "If there's a reduction associated with the restructure, this prompt does not handle that — pair with the layoff communication prompt and sequence carefully."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - all-hands-narrative
  - company-update-email
  - exec-memo-leadership
  - layoff-communication
tags:
  - restructure
  - reorg
  - executive-comms
  - internal-comms
  - leadership
---
