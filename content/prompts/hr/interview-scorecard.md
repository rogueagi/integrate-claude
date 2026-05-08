---
title: "Create an interview scorecard for a role"
slug: interview-scorecard
function: hr
role: recruiting
description: "Generate a structured interview scorecard with evaluation dimensions, rating criteria, and scoring guidance to make hiring decisions more consistent and defensible."
useCase: "Use this prompt to create a scorecard before the interview process begins — not after. Defining what 'good' looks like in advance reduces bias, enables calibration across interviewers, and creates a defensible record of why candidates were advanced or rejected. This prompt produces a scorecard customized for a specific role."
prompt: |
  You are a recruiting partner or People Ops lead building a structured interview scorecard for a specific role.

  Context:
  - Company: {{company_name}}
  - Role: {{role_title}}
  - Seniority: {{seniority}}
  - Key responsibilities of the role: {{key_responsibilities}}
  - What distinguishes high performers in this role: {{high_performer_profile}} (what behaviors, thinking patterns, and outputs define the best person for this job)
  - Interview panel: {{interview_panel}} (who is interviewing and what each person is assessing — no two people should assess the same dimension)
  - Dealbreakers: {{dealbreakers}} (specific attributes or behaviors that are automatic disqualifiers)
  - Culture and working style: {{culture_requirements}}

  Generate a complete scorecard including:

  ## Evaluation Dimensions (4–6 dimensions)
  For each dimension:
  - **Dimension name** — what it measures
  - **Why it matters** for this specific role (1 sentence)
  - **What you're looking for** — specific indicators of strength vs. weakness
  - **Rating scale** (1–4: 1 = does not meet bar, 2 = meets bar minimally, 3 = meets bar strongly, 4 = exceeds bar)
  - **Key questions** to assess this dimension (2–3 behavioral or situational questions)
  - **Green flags** — specific responses that indicate a strong candidate
  - **Red flags** — specific responses that indicate concern

  ## Interviewer Assignment Table
  Map each dimension to a specific interviewer (or interview stage) to avoid duplication and ensure coverage.

  ## Debrief Scoring Guide
  How to aggregate scores across interviewers into a hire/no-hire recommendation:
  - How to handle disagreement between interviewers
  - Minimum score threshold for advancement
  - How to weight dimensions differently if some are more critical than others

  ## Candidate Self-Assessment Prompt (optional)
  A brief set of questions to share with candidates before the interview to help them prepare — signals what you value and produces more substantive interviews.

  Tone: structured and specific. Scorecards that list "communication skills" as a dimension without defining what good communication looks like for this role are useless. Every element should be concrete enough to score consistently.
variables:
  - "{{company_name}}"
  - "{{role_title}}"
  - "{{seniority}}"
  - "{{key_responsibilities}}"
  - "{{high_performer_profile}}"
  - "{{interview_panel}}"
  - "{{dealbreakers}}"
  - "{{culture_requirements}}"
exampleInput: |
  company_name: Anchor Analytics
  role_title: Senior Account Executive
  seniority: 3–6 years AE experience (senior IC, not management)
  key_responsibilities: Full-cycle sales to VP+ buyers at SaaS companies; outbound prospecting; consultative demo and discovery; forecast accuracy; CS handoffs
  high_performer_profile: Self-sourcing capacity; structured thinker who can run complex discovery; honest about their pipeline; accelerates in competitive situations; coachable despite experience
  interview_panel: Recruiter (screen), VP Sales James Wu (sales skills + motion fit), AE Peer (culture + operational fit), CEO Marcus Chen (strategic thinking + founder alignment)
  dealbreakers: Can't demonstrate quota attainment with documentation; doesn't self-source; has never sold to VP+ buyers; poor Salesforce hygiene in past roles
  culture_requirements: Small team, high autonomy, no hand-holding; direct feedback culture; expected to contribute to process improvement, not just execute
exampleOutput: |
  # Senior Account Executive — Interview Scorecard
  **Anchor Analytics**

  ---

  ## Evaluation Dimensions

  ### Dimension 1: Sales Track Record and Quota Attainment
  **Why it matters:** At a pre-Series A company, each AE must carry real quota. We can't afford underperformers.

  **What we're looking for:** Consistent quota attainment (70%+ minimum, 90%+ preferred) with documentation. Pattern of improvement over time. Understanding of why they hit or missed in different quarters.

  | Rating | Description |
  |---|---|
  | 1 | Below 70% attainment or cannot document; explains misses vaguely |
  | 2 | 70–85% attainment; some documentation; misses attributed to external factors |
  | 3 | 85–100% attainment consistently; clear documentation; honest and specific about what drove performance |
  | 4 | 100%+ attainment in multiple roles; documentation available; understands own sales mechanics deeply |

  **Key questions:**
  - "Walk me through your quota attainment in each of your last 3 roles. What were you at?"
  - "Which quarter in the last 2 years are you least proud of from a performance standpoint, and why?"
  - "Can you provide W2s or commission statements from your most recent role?"

  **Green flags:** Specific numbers, honest about misses and their specific causes, shows pattern of improvement, offers documentation proactively.

  **Red flags:** Vague attainment claims, attributes all misses to bad territory/product/management, resistance to documentation, numbers that don't add up across roles.

  **Assigned to:** VP Sales (James Wu) — primary; Recruiter — initial screen for willingness to share documentation

  ---

  ### Dimension 2: Self-Sourcing and Outbound Capability
  **Why it matters:** This role has outbound expectations. An AE who has only handled inbound leads will struggle without SDR support.

  **What we're looking for:** Demonstrated experience generating their own pipeline — specific outbound sequences, research methodologies, prospect targeting. Not just "I do outbound" but how they do it.

  | Rating | Description |
  |---|---|
  | 1 | Little or no self-sourcing experience; relies primarily on inbound or SDR-generated leads |
  | 2 | Some outbound experience but limited; relies on tools without strategic thinking |
  | 3 | Active self-sourcer with specific methodologies; can describe their sequence logic and why it works |
  | 4 | Has built outbound programs from scratch; can teach others; has data on what works |

  **Key questions:**
  - "At your current role, what percentage of your closed deals came from opportunities you sourced vs. inbound or SDR-passed?"
  - "Walk me through how you'd approach building a target account list and outreach sequence for mid-market SaaS CFOs."
  - "What's an outbound message you've written that performed well, and why do you think it worked?"

  **Green flags:** Specific percentage of self-sourced pipeline, has a point of view on what makes outbound sequences work, can produce example messages or sequences.

  **Red flags:** "I don't really do outbound — we have SDRs," vague answers about their prospecting approach, no data on sequence performance.

  **Assigned to:** VP Sales (James Wu)

  ---

  ### Dimension 3: Discovery and Consultative Selling
  **Why it matters:** Anchor's buyers are VP+ data-savvy executives. Feature-led demos don't win — discovery-led conversations do.

  **What we're looking for:** Ability to run a structured discovery conversation, ask follow-up questions that surface real pain, and connect that pain to the product in a differentiated way. Not features, but outcomes.

  | Rating | Description |
  |---|---|
  | 1 | Demo-led selling; talks about features before understanding the customer's situation |
  | 2 | Does some discovery but moves to demo quickly; questions are surface-level |
  | 3 | Structured discovery; asks good follow-ups; connects product to specific pain points uncovered in discovery |
  | 4 | Masterful at discovery; gets buyers to articulate pain they haven't voiced elsewhere; demo is customized and highly relevant |

  **Key questions:**
  - "Walk me through how you run a first call with a new prospect — what do you cover and in what order?"
  - "Tell me about a deal you lost where the buyer chose a competitor. What questions did you ask that you later wished you'd asked differently?"
  - "Role-play: I'm the VP of Finance at a $40M ARR SaaS company. I just told you we're spending too much time on manual ARR reporting. What do you do next?"

  **Green flags:** Clear discovery framework, asks business questions before product questions, can articulate the specific insight that won a deal, handles the role-play with genuine curiosity rather than immediately pivoting to demo mode.

  **Red flags:** Goes straight to product features, "I usually demo first and then ask questions," can't articulate why a specific deal was won.

  **Assigned to:** VP Sales (James Wu) for framework; CEO (Marcus Chen) for role-play and strategic depth

  ---

  ### Dimension 4: Operational Discipline
  **Why it matters:** At a small company, bad CRM hygiene affects forecasting, handoffs, and leadership's ability to manage the business. We can't afford an AE who wings it.

  **What we're looking for:** Consistent Salesforce hygiene, accurate forecasting, clean handoffs to CS. Evidence of treating sales operations as a discipline, not a burden.

  | Rating | Description |
  |---|---|
  | 1 | Sees CRM as a management tax; poor or reactive Salesforce hygiene |
  | 2 | Adequate Salesforce hygiene but reactive; forecasts tend to be optimistic |
  | 3 | Disciplined CRM user; understands stage definitions; forecasts within 10–15% of actual |
  | 4 | Excellent Salesforce hygiene; forecast accuracy is a point of pride; has built or improved CRM processes at a prior company |

  **Key questions:**
  - "How many Salesforce fields do you update after a customer call, and when do you do it?"
  - "How accurate is your weekly forecast typically? Give me a specific example of a quarter where you called something wrong."
  - "How do you decide when a deal moves from 'commit' to 'best case' in your forecast?"

  **Green flags:** Can describe specific hygiene habits, has a forecast methodology they can explain, honest about past forecast misses.

  **Red flags:** "My manager updates the CRM," vague on forecast methodology, doesn't see forecasting accuracy as their responsibility.

  **Assigned to:** AE Peer (to assess realistically based on peer experience)

  ---

  ### Dimension 5: Coachability and Intellectual Honesty
  **Why it matters:** At a small company with a player-coach VP Sales, AEs who can't receive and act on feedback plateau quickly.

  **What we're looking for:** Evidence of integrating feedback into their approach, honest self-assessment of weaknesses, willingness to try new things even when they have their own established methods.

  | Rating | Description |
  |---|---|
  | 1 | Defensive about feedback; attributes performance to external factors; overly confident in their own methods |
  | 2 | Accepts feedback in conversation but doesn't integrate it; limited self-awareness about weaknesses |
  | 3 | Clear examples of incorporating feedback; can name a specific thing they changed and why; honest about development areas |
  | 4 | Actively seeks feedback; has specific examples of major methodology changes based on coaching; coaches others |

  **Key questions:**
  - "What's the most significant thing you've changed about how you sell in the last 2 years, and what prompted the change?"
  - "Tell me something you're not as good at as you'd like to be, and what you're doing about it."
  - "Describe a situation where your manager gave you feedback you disagreed with. What did you do?"

  **Green flags:** Specific examples of behavior change based on feedback, honest about weaknesses with a development plan, can describe disagreeing constructively.

  **Red flags:** Generic coachability claims without examples, defensive responses to hypothetical feedback, can't name a meaningful weakness.

  **Assigned to:** CEO (Marcus Chen)

  ---

  ## Interviewer Assignment Table

  | Dimension | Primary Interviewer | Interview Stage |
  |---|---|---|
  | Track record + documentation | Recruiter (screen) + VP Sales | Phone screen + VP interview |
  | Self-sourcing capability | VP Sales (James Wu) | VP interview |
  | Discovery and consultative selling | VP Sales + CEO | VP interview + founder interview |
  | Operational discipline | AE Peer | Peer interview |
  | Coachability and intellectual honesty | CEO (Marcus Chen) | Founder interview |

  ---

  ## Debrief Scoring Guide

  **Minimum bar to advance:** Average score of 2.5+ across all dimensions, with no dimension scoring 1.

  **Dealbreaker flags (automatic no-hire regardless of scores):**
  - Cannot produce quota documentation (W2s or commission statements)
  - Score of 1 on any dimension
  - Evidence of falsifying or inflating track record claims

  **Weighting guidance:**
  Sales track record and discovery skills are weighted 1.5x in the composite. These are the dimensions that most directly predict AE performance in a consultative, outbound-led motion.

  **Handling disagreement between interviewers:**
  If two interviewers score the same dimension more than 2 points apart, schedule a calibration conversation before the debrief. Write down specific evidence from your notes that supports your score before the conversation — don't change your score without a specific behavioral reason.

  **Hire recommendation thresholds:**
  - Weighted average 3.5+: Strong hire; proceed to offer
  - Weighted average 2.75–3.5: Hire with flagged area; ensure onboarding plan addresses flagged dimension
  - Weighted average below 2.75: No hire

  ---

  ## Candidate Self-Assessment Prompt

  *Optional — share with finalists 24 hours before final interview round:*

  "As you prepare for your interviews at Anchor Analytics, we're especially interested in hearing about:

  1. A specific deal — from first contact to close — that you're proud of, including what made your discovery process effective
  2. A quarter where you underperformed relative to plan, and what you learned from it
  3. How you build your own pipeline when there's no SDR support

  We're not looking for perfect answers — we're looking for honesty and self-awareness. These questions are meant to help you prepare for substantive conversations, not to trick you."
tips:
  - "Build the scorecard before the first interview, not after. Defining 'good' in advance eliminates the bias of tailoring criteria to match the candidate you liked."
  - "Assign each dimension to a specific interviewer. If two people assess the same dimension, you get redundant information and miss dimensions entirely — map coverage explicitly."
  - "Green flags and red flags are the most important part of the scorecard. Abstract criteria like 'strong communicator' are useless without concrete examples of what strong and weak look like in this specific role."
  - "The documentation requirement (W2s or commission statements for sales roles) should be stated in the JD and reinforced in the scorecard. It's a legitimate and common practice — candidates who refuse have something to hide."
  - "Calibrate interviewers before the process starts. Share the scorecard with the panel and discuss what a 3 vs. a 4 looks like on each dimension. Uncalibrated interviewers produce inconsistent scores that don't aggregate meaningfully."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - structured-interview-questions
  - job-description-sales
  - job-description-engineering
  - offer-letter-draft
tags:
  - recruiting
  - interview
  - scorecard
  - hiring
  - structured-hiring
---
