---
title: "Write a quarterly all-hands narrative"
slug: all-hands-narrative
function: executive
role: comms
description: "Draft the spoken narrative for a quarterly all-hands — the through-line a CEO actually says out loud, not the slide bullets."
useCase: "Use this in the week before an all-hands, after the deck draft is largely done. Most all-hands fail not because of the data but because the narrative is missing. This prompt produces what the CEO is going to say between the slides — the connective tissue that makes the meeting feel like leadership instead of a status report."
prompt: |
  You are an executive communications coach who has written for CEOs at scaleups through good quarters and rough ones. Draft the narrative for {{company_name}}'s {{quarter}} all-hands.

  Inputs:
  - Company and stage: {{company_name}}, {{stage}}
  - Quarter under review: {{quarter}}
  - The story arc the CEO wants to tell (1–2 sentences): {{intended_arc}}
  - Three biggest wins of the quarter: {{wins}}
  - Two biggest misses or hard moments: {{misses}}
  - The single most important priority for next quarter: {{next_priority}}
  - The honest uncomfortable thing the CEO knows but isn't sure how to say: {{uncomfortable_truth}}
  - Tone — pick one: confident-and-energizing, honest-and-grounding, urgent-and-rallying: {{tone}}
  - Length: {{length_minutes}} minutes spoken (roughly 130 words per minute)

  Write the narrative as a script. Use second-person voice ("you, the team") more than first-person plural ("we"). Structure:

  ## Opening (60–90 seconds)
  A specific, concrete moment from the quarter — not a "thank you for joining." Earn attention by starting with a real story or a real number. Land on what the rest of the meeting is going to do.

  ## The Quarter In Three Acts
  Act 1: What we said we'd do.
  Act 2: What actually happened.
  Act 3: What it means.

  Walk through wins and misses honestly. Address {{misses}} directly — do not dance around them. The goal is for the team to leave thinking "leadership knows what's happening."

  ## The Uncomfortable Truth
  Address {{uncomfortable_truth}} explicitly. Not as a confession; as a leadership statement of what the company knows and is going to do about it.

  ## The Bet For Next Quarter
  State {{next_priority}} as a single, memorable line. Then explain why this priority and not the other ten things. Then state what it asks of the team.

  ## The Close (60–90 seconds)
  No "thanks for everything you do." Close with a specific image, a question the team should be holding, or a number that the next all-hands will measure against.

  Style constraints:
  - Sentences a person can actually say. Read it aloud as you write.
  - No "I'm incredibly proud," "we're crushing it," "the journey ahead."
  - Concrete over abstract. Names of people who shipped things, names of customers who renewed, names of the moments that mattered.
  - The word "team" sparingly; "you" and "us" more often.
  - Match the {{tone}} requested.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{quarter}}"
  - "{{intended_arc}}"
  - "{{wins}}"
  - "{{misses}}"
  - "{{next_priority}}"
  - "{{uncomfortable_truth}}"
  - "{{tone}}"
  - "{{length_minutes}}"
exampleInput: |
  company_name: Vantage Systems
  stage: Series B SaaS, 180 employees
  quarter: Q1 2027
  intended_arc: we hit our number, we missed a major milestone, and we are betting on healthcare for the year
  wins: closed largest-ever deal (Brookline Health, $1.2M); NRR hit 128%; engineering shipped data-warehouse-native ahead of plan
  misses: AI compliance module slipped from Q1 to Q2; lost two competitive deals to Helio
  next_priority: ship the AI compliance module by April 30 and put it in front of paying healthcare customers
  uncomfortable_truth: we cannot do everything; we are killing the SMB self-serve project and some of the team will be reassigned
  tone: honest-and-grounding
  length_minutes: 8
exampleOutput: |
  ## Opening
  Three weeks ago, on a Friday afternoon, the Brookline Health deal closed. $1.2 million. Largest contract in this company's history. Miguel and Priya were on the call. Brookline's CIO told us he picked Vantage because — and this is a direct quote — "you were the only company that took the compliance question seriously."

  I want to start there because that sentence is the whole quarter. We won where we took the hard work seriously. We did not win where we let the hard work slip. Both of those things are true at the same time, and the next eight minutes are about what we do with that.

  ## The Quarter In Three Acts
  At the start of Q1 we said three things. We said we would close $7M of new ARR. We said we would ship the AI compliance module by March. We said we would hold expansion at 125% NRR.

  Here's what actually happened. We closed $7.4M. NRR came in at 128 — the highest it has ever been. Engineering shipped data-warehouse-native ahead of plan. Sandeep and the platform team did that. It moved one of our biggest deals over the line.

  And we slipped on the AI compliance module. It was supposed to GA in March. It will GA in April. That is a real miss. Two deals went to Helio that we should have won, and Helio is going to keep showing up if we do not show up first.

  So what does it mean? It means we are still good at the things we have been good at — closing healthcare, expanding accounts, shipping the hard infrastructure work. And it means we are not yet good enough at protecting our own roadmap commitments. Both can be true. They are.

  ## The Uncomfortable Truth
  I want to talk about the SMB self-serve project. We started it eighteen months ago because we believed there was a path to a faster, lower-touch motion. We tried hard. The team that worked on it tried hard. The numbers did not come.

  We are going to stop. SMB self-serve closes at the end of next month. Some of you will be reassigned to healthcare and to the AI module — those are the highest-impact places this company has work to do. A small number of roles will not have a clean home, and we are going to handle those conversations directly and respectfully, person by person, this week. If you are wondering whether that is you, you will know by Wednesday. Nobody is going to find out from a Slack message at 6pm.

  I owe you that directness because the alternative — which is to keep the project alive and quietly starve it — is the worse choice. We are not going to do the worse choice.

  ## The Bet For Next Quarter
  Next quarter is one thing. Ship the AI compliance module by April 30, in production, with at least 18 paying healthcare customers using it. That is the bet.

  Why this and not five other things? Because compliance is the wedge that healthcare buyers cannot ignore. Helio cannot ship it on the timeline we can. Brookline already wants it. The next ten Brooklines need it to choose us. And the rest of 2027 — the breakeven plan, the next round if we choose to raise, the credibility of this company — bends on whether we deliver this thing on time.

  What it asks of you depends on where you sit. If you are on the AI module team, the next 60 days are real. If you are on customer success, you are going to be the people who put this in front of our top 50 accounts. If you are on go-to-market, healthcare is the entire year. If you are anywhere else, your job is to protect the people doing the shipping. That includes me.

  ## The Close
  When we get on this call again at the end of Q2, I want one number on the screen. Not ARR, not NRR. The number of paying healthcare customers running our AI compliance module in production.

  We said the goal is 18.

  See you in 90 days.
tips:
  - "Read it aloud before you deliver it. Sentences that look fine on the page often don't survive a human voice."
  - "The 'uncomfortable truth' section is the highest-leverage one. Teams notice when you skip it. They notice harder when you handle it well."
  - "Open and close with concrete moments — a person, a number, an image. Abstractions do not stick."
  - "Don't read the script word-for-word; use it as the spine. The CEO's voice has to come through in the delivery."
  - "After the all-hands, archive the script. Comparing this quarter's narrative to next quarter's is how you spot when the company has actually shifted."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - exec-memo-leadership
  - company-update-email
  - okr-framework-company
  - internal-restructure-announcement
tags:
  - all-hands
  - executive-comms
  - ceo
  - narrative
  - leadership
---
