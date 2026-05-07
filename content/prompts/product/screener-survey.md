---
title: "Write a participant screener survey for usability testing"
slug: screener-survey
function: product
role: user-research
description: "Generate a precise participant screener survey that identifies qualified research participants while filtering out those who would skew your findings."
useCase: "Use this prompt when recruiting participants for usability tests, user interviews, or focus groups. A well-designed screener is the difference between research with the right people and research that misleads you with the wrong ones."
prompt: |
  You are an experienced UX researcher. Write a participant screener survey for the research described below.

  **Research type:** {{research_type}} (e.g., moderated usability test, user interviews, diary study, focus group)
  **Product or feature being tested:** {{product_feature}}
  **Target participant profile:** {{target_profile}}
  **Ideal participant characteristics:** {{ideal_characteristics}}
  **Disqualifying characteristics:** {{disqualifying_characteristics}}
  **Number of participants needed:** {{participant_count}}
  **Session format and duration:** {{session_format}}
  **Incentive offered:** {{incentive}}
  **Recruitment channel:** {{recruitment_channel}}

  Write a participant screener survey with these components:

  ## 1. Screener Introduction
  A brief, honest description of the study that:
  - States what type of study it is without revealing the specific hypothesis or focus
  - Mentions the time commitment clearly
  - States the incentive
  - Sets expectations about the selection process (not everyone who applies will be selected)
  - Includes any necessary privacy disclosure

  ## 2. Screener Questions
  Write 8–15 screener questions that together identify whether someone is the right participant. For each question:
  - **Q[Number]: [Question text]**
  - Type: Multiple choice / Single select / Short text / Likert / Yes/No
  - Options (if applicable)
  - Routing logic: [Qualify / Disqualify / Continue] based on each answer
  - Why this question matters (annotation for the researcher)

  Question categories to cover (adapt to the research context):
  - **Demographic and role questions** — job role, industry, company size, experience level
  - **Product usage questions** — do they use the product? How often? What for?
  - **Relevant behavior questions** — do they have the experience needed to participate meaningfully?
  - **Tech comfort questions** — can they participate in the session format (Zoom, screen share, etc.)?
  - **Conflict of interest questions** — are they employees, competitors, or recent research participants?
  - **Availability and logistics** — can they attend in the required window?
  - **Diversity and inclusion** — at least one question to enable diverse participant selection (if appropriate)

  **Screener design rules:**
  - Never reveal the "right" answer — don't hint at what you're looking for
  - Use neutral language — avoid leading questions that prompt "correct" answers
  - Put disqualifying questions early to save disqualified participants' time
  - Include at least one attention-check question for unmoderated formats
  - Mix question types — all multiple choice screeners are easy to game

  ## 3. Qualification Logic Summary
  A table showing which answers qualify, disqualify, or are neutral for each key question:
  | Question | Qualify | Disqualify | Notes |

  ## 4. Confirmation and Thank-You Messages
  - **Qualified participant message:** What to say when inviting someone to participate
  - **Disqualified participant message:** A polite rejection that doesn't reveal why they were screened out
  - **Waitlist message:** If you're collecting extras as backup

  ## 5. Recruitment Brief
  A short paragraph the recruiter or platform can use to attract the right participants — written from the perspective of the potential participant (what's in it for them, why it's interesting).
variables:
  - "{{research_type}}"
  - "{{product_feature}}"
  - "{{target_profile}}"
  - "{{ideal_characteristics}}"
  - "{{disqualifying_characteristics}}"
  - "{{participant_count}}"
  - "{{session_format}}"
  - "{{incentive}}"
  - "{{recruitment_channel}}"
exampleInput: |
  research_type: Moderated usability test
  product_feature: New onboarding flow for a project management SaaS tool
  target_profile: Mid-level knowledge workers at companies with 50–500 employees who manage projects but are not dedicated project managers
  ideal_characteristics: Uses at least one work tool regularly (Slack, Notion, Asana, etc.), manages at least 2 people or coordinates work across teams, has set up a new work tool in the last 12 months, not a dedicated PM or ops professional
  disqualifying_characteristics: Works at a competitor (Asana, Monday, ClickUp, Jira), works in our company, participated in a research study in the last 30 days, is a dedicated project manager by job title
  participant_count: 8 participants (recruiting 11 for buffer)
  session_format: 50-minute moderated Zoom session with screen share; sessions available Nov 11–15, 10am–4pm ET
  incentive: $60 Amazon gift card
  recruitment_channel: UserTesting panel + our own customer email list
exampleOutput: |
  # Participant Screener: Onboarding Usability Study

  ## 1. Introduction
  "We're looking for people to participate in a 50-minute online study about work tools and collaboration. You'll be asked to try out a software product and share your thoughts. No experience with this product is required — we want to hear from people approaching it fresh.

  Selected participants will receive a $60 Amazon gift card after the session. Sessions are available November 11–15 via Zoom. We'll need you to share your screen during the session.

  Not everyone who applies will be selected — we're looking for a specific range of experiences. We'll follow up within 2 business days."

  ## 2. Screener Questions

  **Q1: Which of the following best describes your current role? (Single select)**
  - Marketing or communications
  - Operations or project coordination
  - Engineering or technical
  - Sales or business development
  - Design or creative
  - HR, finance, or legal
  - Executive or senior leadership
  - Other (please specify): ___
  *Routing: "Project Manager" or "Scrum Master" → Disqualify (too specialist). All others → Continue.*
  *Why: We need generalist workers who manage projects as part of a broader role, not dedicated PMs.*

  **Q2: How many people do you currently manage or coordinate work with regularly? (Single select)**
  - I work independently — I don't coordinate work with others regularly
  - 1–2 people
  - 3–10 people
  - 11+ people
  *Routing: "Work independently" → Disqualify. All others → Continue.*
  *Why: Participants must have actual coordination experience to make their feedback meaningful.*

  **Q3: Which of the following tools do you use regularly for work? Select all that apply. (Multi-select)**
  - Slack
  - Microsoft Teams
  - Notion
  - Asana
  - Monday.com
  - Jira
  - ClickUp
  - Trello
  - None of the above
  *Routing: Monday.com, ClickUp, Jira selected → Disqualify (competitor users). "None of the above" only → Disqualify (need baseline digital tool comfort).*
  *Why: Competitor users have specific workflow habits that skew results. Pure non-users lack baseline.*

  **Q4: Have you set up or adopted a new work software tool (for yourself or your team) in the last 12 months? (Single select)**
  - Yes
  - No
  *Routing: No → Disqualify (need recent onboarding experience).*

  **Q5: What best describes the size of the company you currently work for? (Single select)**
  - Fewer than 50 employees
  - 50–500 employees
  - 501–2,000 employees
  - More than 2,000 employees
  - I'm self-employed or a freelancer
  *Routing: "Fewer than 50" or "I'm self-employed" → Disqualify. "More than 2,000" → Borderline; use judgment.*
  *Why: Target profile is mid-market — too small or too large changes the usage context.*

  **Q6: Do you or does anyone in your immediate household work for any of the following types of companies? (Multi-select)**
  - Project management software company (Asana, Monday.com, ClickUp, Jira, etc.)
  - UX or market research firm
  - I work at [Company Name]
  - None of the above
  *Routing: Any answer other than "None of the above" → Disqualify.*
  *Why: Conflict of interest; insider knowledge skews results.*

  **Q7: Roughly how often do you use a computer for work? (Single select)**
  - Less than 2 hours per day
  - 2–5 hours per day
  - More than 5 hours per day
  *Routing: "Less than 2 hours" → Disqualify.*

  **Q8: Have you participated in a paid research study or user interview in the last 30 days? (Single select)**
  - Yes
  - No
  *Routing: Yes → Disqualify.*

  **Q9: [Attention check] This question is to confirm you're reading carefully. Please select "Somewhat agree" from the options below. (Single select — Likert)**
  - Strongly disagree / Disagree / Somewhat disagree / Neutral / Somewhat agree / Agree / Strongly agree
  *Routing: Any answer except "Somewhat agree" → Disqualify (for unmoderated) or flag (for moderated).*

  **Q10: Are you available for a 50-minute Zoom call (with screen share) during any of the following windows? (Multi-select)**
  - Monday Nov 11, 10am–4pm ET
  - Tuesday Nov 12, 10am–4pm ET
  - Wednesday Nov 13, 10am–4pm ET
  - Thursday Nov 14, 10am–4pm ET
  - Friday Nov 15, 10am–4pm ET
  - None of these work for me
  *Routing: "None of these" → Disqualify.*

  **Q11: Any additional information you'd like to share? (Open text, optional)**
  *Why: Gives participants a voice; sometimes surfaces important context.*

  ## 3. Qualification Logic Summary
  | Question | Qualify | Disqualify |
  |----------|---------|------------|
  | Q1 Role | Non-PM knowledge worker | Dedicated PM/Scrum Master |
  | Q2 Coordination | Coordinates with 2+ people | Works independently |
  | Q3 Tools | Uses at least 1 non-competitor tool | Uses Monday/ClickUp/Jira; uses no tools |
  | Q4 New tool adoption | Yes | No |
  | Q5 Company size | 50–2000 employees | <50, self-employed |
  | Q6 Conflict | None of the above | Competitor or research firm |
  | Q8 Recent research | No | Yes (last 30 days) |
  | Q9 Attention | Selects "Somewhat agree" | Any other answer |
  | Q10 Availability | At least one slot available | None available |

  ## 4. Messages

  **Qualified:** "Thank you for your interest! Based on your responses, you're a great fit for our study. We'd like to invite you to a 50-minute Zoom session. Please use this link to book your preferred time: [scheduling link]. You'll receive a $60 Amazon gift card after the session."

  **Disqualified:** "Thank you for your interest in our research study. Unfortunately, we're not able to include you in this particular study based on the profile we're looking for. We hope to have opportunities that fit your profile in the future."
tips:
  - "Never ask 'Do you use project management tools?' if you're testing a project management tool — this signals the right answer. Ask about work tools broadly."
  - "The attention-check question (Q9) is essential for unmoderated studies and useful for moderated ones. Remove anyone who fails it — they're not engaged enough to give reliable feedback."
  - "Recruit 30–40% more participants than you need. Research has consistent no-show rates, especially for unpaid or lightly incentivized studies."
  - "Review screener responses qualitatively before auto-qualifying. Open text fields (Q11) sometimes reveal disqualifying information the structured questions missed."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - research-plan
  - usability-test-script
  - interview-synthesis
tags:
  - user-research
  - recruiting
  - ux-research
  - usability-testing
  - screener
---
