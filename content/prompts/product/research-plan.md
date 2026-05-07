---
title: "Write a research plan for a user research project"
slug: research-plan
function: product
role: user-research
description: "Generate a structured user research plan including research questions, methodology, participant criteria, timeline, and analysis approach."
useCase: "Use this prompt before starting any significant user research effort. A research plan ensures you're studying the right question, with the right people, using the right method — preventing the common mistake of running research that can't actually answer the question you care about."
prompt: |
  You are an experienced UX researcher. Write a comprehensive research plan for the project described below.

  **Research project name:** {{project_name}}
  **Business or product question driving this research:** {{business_question}}
  **What decisions will this research inform:** {{decisions_to_inform}}
  **Product or feature area:** {{product_area}}
  **Target users:** {{target_users}}
  **Research timeline:** {{timeline}}
  **Available resources:** {{resources}} (researcher time, budget, tools)
  **Known constraints:** {{constraints}}
  **What we think we already know:** {{existing_knowledge}}

  Write a research plan with these sections:

  ## 1. Research Background and Context
  - The product or business context
  - What triggered this research (problem, opportunity, or uncertainty)
  - What decisions depend on the findings
  - What we already know (to avoid re-learning what's known)

  ## 2. Research Questions
  **Primary research question:** The single most important question this study must answer. Must be:
  - Open-ended (not "do users like X?" but "how do users currently approach X?")
  - Answerable through research (not "will this feature increase revenue?")
  - Specific enough to guide study design

  **Secondary research questions (3–5):**
  Supporting questions that add depth but won't change the study design if unanswered.

  **Out of scope:** Questions this study will NOT answer (prevents scope creep in research).

  ## 3. Methodology
  **Recommended method and rationale:**
  - What research method(s) will be used (e.g., moderated usability testing, diary study, contextual inquiry, survey, card sort, tree test)?
  - Why this method is right for these questions (vs. alternatives)
  - Limitations of this method for these questions

  **If multiple methods:** sequencing and how they'll be combined.

  ## 4. Participant Criteria
  **Screener criteria:**
  - Must-have criteria (disqualify if not met)
  - Good-to-have criteria (prefer but not required)
  - Disqualification criteria (competitors, internal employees, recent research participants)
  - Demographic/role distribution if applicable

  **Sample size:**
  - Number of participants and rationale (5 for qualitative, 30+ for survey, etc.)
  - If A/B or comparative: sample per cell

  **Recruitment method:**
  - Where will participants come from?
  - Incentive structure

  ## 5. Study Design
  **For qualitative (interview/usability):**
  - Session format (moderated, unmoderated, in-person, remote)
  - Session duration
  - Activities or tasks to be completed
  - Key discussion topics in priority order
  - Protocol structure (warm-up, core activities, wrap-up)

  **For quantitative (survey, analytics):**
  - Survey structure and estimated completion time
  - Key questions and scales
  - Distribution method

  ## 6. Timeline
  | Phase | Activities | Duration | Owner |
  - Planning and screener
  - Recruitment
  - Pilot/test run
  - Data collection
  - Analysis
  - Readout/synthesis

  ## 7. Analysis Approach
  - How data will be captured (recordings, notes, survey data)
  - Analysis method (affinity mapping, thematic coding, statistical analysis)
  - Who will be involved in analysis
  - How findings will be validated

  ## 8. Deliverables
  What will be produced from this research and for whom?
  - Research report
  - Insight deck
  - Recordings and transcripts
  - Recommendations

  ## 9. Assumptions and Risks
  | Assumption/Risk | Mitigation |

  ## 10. Stakeholder Communication
  Who needs to be informed of research plans and findings, and how?
variables:
  - "{{project_name}}"
  - "{{business_question}}"
  - "{{decisions_to_inform}}"
  - "{{product_area}}"
  - "{{target_users}}"
  - "{{timeline}}"
  - "{{resources}}"
  - "{{constraints}}"
  - "{{existing_knowledge}}"
exampleInput: |
  project_name: Onboarding Experience Research
  business_question: Why do new users who complete signup not reach their first meaningful action within 7 days?
  decisions_to_inform: Onboarding redesign scope and priority — specifically whether to invest in guided tours, better empty states, or reducing setup requirements
  product_area: New user onboarding (signup through first 7 days)
  target_users: Users who signed up in the last 60 days; specifically those who signed up but never completed the "first value event" (creating and sharing their first project)
  timeline: 4 weeks total
  resources: 1 UX researcher (50% time), $500 participant incentive budget, Maze for unmoderated testing, Zoom for interviews
  constraints: Cannot contact users directly without Product approval. Must complete before Q1 roadmap lock (Dec 1).
  existing_knowledge: Analytics show 62% of signups never complete the first value event. Drop-off peaks at the "invite team members" step. Users who skip team invite have 40% lower 7-day retention.
exampleOutput: |
  # Research Plan: Onboarding Experience Research
  **Researcher:** [Name] | **Timeline:** Nov 1–28 | **Stakeholders:** VP Product, Head of Design, PM (Onboarding)

  ## 2. Research Questions

  **Primary:** What specific barriers or friction points prevent new users from completing their first meaningful action within 7 days of signup?

  **Secondary questions:**
  1. What is the user's mental model of what the product does when they first sign up?
  2. At the "invite team members" step, why do users skip or abandon? What would make them continue?
  3. What does a user who successfully completes onboarding do differently than one who doesn't?
  4. What is the emotional experience of a new user in the first session?
  5. What help or resources do users seek when they're stuck?

  **Out of scope:** Long-term retention (30+ day behavior), pricing page experience, mobile onboarding.

  ## 3. Methodology

  **Phase 1: Qualitative interviews (Week 1–2)**
  Moderated 1:1 interviews with 8 users who signed up but did not complete the first value event. Why: We need to understand the "why" behind drop-off — analytics tell us where, not why. Interviews allow us to probe motivations, barriers, and mental models.
  **Limitation:** Small sample; findings reflect the loudest voices, not statistical prevalence.

  **Phase 2: Unmoderated usability test (Week 3)**
  Unmoderated test with 15 participants recruited via Maze, watching them attempt onboarding from scratch. Why: Supplements interviews with observed behavior — what users do vs. what they say they do.

  ## 4. Participant Criteria

  **Must have:**
  - Signed up in last 60 days
  - Did not complete "first value event" (project created + shared)
  - English-speaking
  - Available for 45-minute Zoom call

  **Disqualify:**
  - Current paying customers
  - Internal employees or contractors
  - Participated in research in the last 3 months

  **Sample:** 8 interview participants + 15 usability test participants
  **Incentive:** $50 Amazon gift card for interview; $20 for usability test
  **Recruitment:** Product team exports user segment from analytics; researcher sends via Intercom (Product approval required)

  ## 6. Timeline

  | Phase | Activities | Dates | Owner |
  |-------|-----------|-------|-------|
  | Planning | Research plan approval, screener finalization | Nov 1–4 | Researcher |
  | Recruitment | Participant outreach, scheduling | Nov 4–8 | Researcher + PM |
  | Pilot | 1 pilot interview to test protocol | Nov 8 | Researcher |
  | Interviews | 8 moderated interviews | Nov 11–15 | Researcher |
  | Usability test | Maze study live (15 participants) | Nov 18–20 | Researcher |
  | Analysis | Affinity mapping, thematic coding | Nov 21–25 | Researcher |
  | Readout | Findings presentation to stakeholders | Nov 28 | Researcher |

  ## 7. Analysis Approach
  - Interviews recorded via Zoom; transcribed with Otter.ai
  - Researcher and PM conduct joint affinity mapping session (3 hours)
  - Themes synthesized into insight statements with supporting evidence counts
  - Usability test analyzed via Maze analytics + clip review for 3 most-failed tasks
  - Findings reviewed by second researcher for validity (if available)
tips:
  - "The primary research question is the hardest to write correctly. Test it: if the answer were 'users find it confusing,' does that tell you what to build? If not, it's not specific enough."
  - "Always run a pilot before your first real session. The pilot will reveal questions that don't make sense, activities that take too long, and screener gaps."
  - "Out of scope is as important as in scope for research. Research projects balloon in scope just like product projects — define the boundary early."
  - "Recruit more participants than you need. Research recruitment has ~30% no-show and drop-out rates. If you need 8 interviews, recruit 11."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - screener-survey
  - usability-test-script
  - interview-synthesis
  - product-hypothesis
tags:
  - user-research
  - ux-research
  - research-planning
  - product-management
  - qualitative-research
---
