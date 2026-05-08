---
title: "Create a learning path outline for a role or skill"
slug: learning-path-outline
function: hr
role: ld
description: "Generate a structured learning path that maps out the skills, resources, milestones, and timeline for developing competency in a specific role or domain."
useCase: "Use this prompt to design a learning path for a new hire onboarding, a promotion track, or an upskilling initiative. A well-structured learning path reduces time-to-productivity, gives employees a clear sense of what they're working toward, and signals that the company invests in development — which improves retention."
prompt: |
  You are an L&D manager or people leader designing a learning path for a specific role, skill, or career stage.

  Context:
  - Company: {{company_name}}
  - Learner role and level: {{learner_role}} (e.g., new SDR, mid-level engineer moving to senior, new manager)
  - Learning objective: {{learning_objective}} (what the learner should be able to do by the end of this path)
  - Current baseline: {{current_baseline}} (what skills or knowledge the learner is assumed to bring)
  - Timeline: {{timeline}} (30 days, 90 days, 6 months — be realistic about depth vs. speed)
  - Learning modalities available: {{modalities}} (self-paced courses, shadowing, mentorship, workshops, coaching, OJT)
  - Key skills to develop: {{skills_to_develop}} (list the 4–6 core competencies this path addresses)
  - Success metrics: {{success_metrics}} (how you'll know the learner has achieved the objective)
  - Company resources: {{company_resources}} (internal playbooks, documentation, product demo environments, etc.)

  Build a learning path with these sections:

  ## Learning Objective Statement
  One clear sentence: "By the end of this learning path, [learner] will be able to [observable behavior] at [standard]."

  ## Phase-by-Phase Curriculum
  Divide the path into logical phases (e.g., Foundation / Application / Independence). For each phase:
  - **Phase name and duration**
  - **Learning goals for this phase** (what the learner should know and be able to do by the end)
  - **Activities and resources** (specific — not "read documentation" but "read the Revenue Recognition Policy doc in Notion and summarize the key rules for SaaS contracts")
  - **Practice or application component** (how they apply what they're learning — shadow a call, complete a mock exercise, run a live process with a safety net)
  - **Milestone checkpoint** (what does a successful completion of this phase look like?)

  ## Resource Library
  Curated list of the specific resources this learner should consume, organized by type:
  - Internal documents, playbooks, or wikis
  - External courses or certifications
  - Books or articles (with specific titles, not generic "read about X")
  - People to shadow, meet, or learn from

  ## Mentorship and Support Plan
  Who supports the learner and how:
  - Primary mentor or manager (meeting frequency, what you review together)
  - Peer buddy (if applicable)
  - External coach or training resource

  ## Success Metrics and Assessment
  How you'll evaluate learning progress — specific, observable behaviors at each milestone, not just "can perform the role."

  Tone: practical and specific. Generic learning paths are ignored. Every element should be actionable enough that the learner can open it and know exactly what to do next.
variables:
  - "{{company_name}}"
  - "{{learner_role}}"
  - "{{learning_objective}}"
  - "{{current_baseline}}"
  - "{{timeline}}"
  - "{{modalities}}"
  - "{{skills_to_develop}}"
  - "{{success_metrics}}"
  - "{{company_resources}}"
exampleInput: |
  company_name: Anchor Analytics
  learner_role: New SDR (Sales Development Representative) — no prior SDR experience but has 1 year of customer-facing work
  learning_objective: Conduct confident, productive cold outreach and book qualified discovery calls independently
  current_baseline: Comfortable with written communication; has used Salesforce as a user; no outbound prospecting experience; understands basic SaaS concepts
  timeline: 60 days (30-day foundation + 30-day ramped independence)
  modalities: Shadowing, self-paced internal playbooks, 1:1 coaching with VP Sales, live call practice, peer buddy (senior SDR)
  skills_to_develop: Prospect research and qualification, cold email and LinkedIn outreach, cold calling and voicemail, objection handling, Salesforce hygiene, pipeline metric literacy
  success_metrics: Books 3+ qualified discovery calls in week 5 and 4; maintains Salesforce accuracy above 95%; sends 40+ targeted outreach sequences per week by day 30
  company_resources: SDR Playbook (Notion), ICP definition doc, Email sequence library, Salesforce training environment, Chorus call recordings, product demo library
exampleOutput: |
  ## Learning Objective Statement
  By the end of this 60-day learning path, the SDR will independently execute a full outbound prospecting motion — researching and qualifying target accounts, crafting and sending targeted outreach sequences, and booking 3+ qualified discovery calls per week — at a level that meets or exceeds the SDR team's performance bar.

  ---

  ## Phase 1: Foundation (Days 1–14)
  *"Understand the product, the buyer, and the motion before touching a prospect"*

  **Learning goals:**
  - Understand Anchor Analytics' product, ICP, and value proposition well enough to explain it confidently without the deck
  - Understand what a "qualified" discovery call looks like and why ICP criteria matter
  - Navigate Salesforce and the SDR toolstack (LinkedIn Sales Navigator, Outreach/Apollo)
  - Know the SDR Playbook's structure and the rationale behind each step

  **Activities and resources:**
  - Day 1–2: Complete Anchor product demo walkthrough (60 min recorded demo in Google Drive) and write a 200-word "what we do and why it matters" summary in your own words
  - Day 2–3: Read the ICP Definition doc in Notion (Anchor Analytics Internal > Sales > ICP). Categorize 10 example companies as ICP-fit, ICP-adjacent, or not ICP-fit, and review with VP Sales
  - Day 3–4: Read the SDR Playbook (Notion > Sales > SDR) cover to cover. Flag 5 questions and review them with your peer buddy
  - Day 4–5: Complete Salesforce 101 (Trailhead — "Salesforce for Sales" module, approximately 3 hours) and set up your Salesforce views
  - Day 5–7: Listen to 5 recorded discovery calls in Chorus — one strong close, one that lost, and 3 average. Write 1 paragraph on what differentiated the strong from the average
  - Day 7–10: Shadow 3 cold calls with VP Sales or senior SDR. No talking — just listening and taking notes
  - Day 10–14: Shadow 3 discovery calls. Write call notes immediately after each — share with your manager for feedback

  **Practice component:**
  Run 2 mock cold calls with your peer buddy. Peer buddy plays a skeptical VP of Finance. Record the calls and self-evaluate before reviewing together.

  **Milestone checkpoint:**
  By Day 14: Pass the "ICP Quiz" (10-question written exercise, graded by VP Sales), demonstrate functional Salesforce hygiene on 20 mock accounts, and receive a "ready to proceed" from peer buddy on mock calls.

  ---

  ## Phase 2: Supervised Practice (Days 15–30)
  *"Execute the motion with a safety net — every email and call gets reviewed before sending"*

  **Learning goals:**
  - Write effective cold outreach sequences (email + LinkedIn) that get responses
  - Make live cold calls with the structure and confidence to reach a decision-maker
  - Qualify discovery calls using Anchor's MEDDIC-light qualification criteria
  - Maintain Salesforce hygiene at 95%+ accuracy

  **Activities and resources:**
  - Draft 10 cold outreach sequences targeting accounts in the ICP list. Share all 10 with VP Sales before sending. Iterate based on feedback.
  - Read the 3 best-performing email sequences in the sequence library (Outreach > Library > Top Performers). Analyze the structure and subject lines
  - Send 20 outreach sequences per week (weeks 3–4) — all pre-approved by manager until Day 28
  - Make 20 cold calls per week (weeks 3–4) — submit call recordings weekly for review
  - Read "Fanatical Prospecting" by Jeb Blount — chapters 1–5, 10, and 12 (focus on mental framework, not advanced tactics yet)
  - Meet with VP Sales for a 30-minute sequence review weekly — bring specific sequences and ask why some performed better

  **Practice component:**
  Book your first real discovery call. This is the milestone — not the number, but doing it live with a real prospect.

  **Milestone checkpoint:**
  By Day 30: Sending 40+ outreach sequences per week independently; booking at least 1 qualified discovery call; Salesforce accuracy at 95%+; call recordings show consistent cold call structure (opener → relevance hook → ask).

  ---

  ## Phase 3: Ramped Independence (Days 31–60)
  *"Execute at full volume with weekly coaching — no pre-approval required"*

  **Learning goals:**
  - Consistently hit the 3-call-per-week target
  - Handle common objections without escalating
  - Contribute to sequence improvement and share what's working
  - Develop a personal prospecting system that's sustainable at full volume

  **Activities and resources:**
  - Execute the full outbound motion independently — 40+ sequences/week, 40+ calls/week
  - Complete the "Objection Handling" module from the SDR Playbook and role-play the 5 most common objections with peer buddy
  - Read the competitive battle cards in Notion (Anchor Analytics Internal > Sales > Competitive) — understand how to respond when a prospect mentions Amplitude or Tableau
  - Weekly 1:1 with VP Sales — bring your own call recordings and sequence data; drive the agenda
  - Mid-path review at Day 45: VP Sales reviews all metrics and provides feedback on what to continue vs. improve

  **Practice component:**
  Lead a "playbook contribution" — identify one improvement to the SDR playbook based on what you've learned, write it up, and share with the team.

  **Milestone checkpoint:**
  By Day 60: 3+ qualified discovery calls booked per week for 2 consecutive weeks; Salesforce accuracy 95%+; 40+ sequences per week; positive peer buddy assessment; VP Sales signs off on "independent" status.

  ---

  ## Resource Library

  **Internal (must-read):**
  - SDR Playbook (Notion > Sales > SDR) — primary reference
  - ICP Definition Document (Notion > Sales > ICP)
  - Email Sequence Library (Outreach > Library)
  - Competitive Battle Cards (Notion > Sales > Competitive)
  - Top 10 call recordings from Chorus — ask peer buddy for recommendations

  **External:**
  - *Fanatical Prospecting* by Jeb Blount (chapters 1–5, 10, 12 in phase 2; full book in phase 3)
  - Salesforce Trailhead: "Salesforce for Sales" module (Day 4–5)
  - LinkedIn Learning: "Cold Calling Mastery" (optional — if cold calls feel uncomfortable after phase 1)

  **People:**
  - Peer buddy: [Senior SDR] — weekly 30-min check-in, call recording review
  - Manager: [VP Sales James Wu] — weekly 1:1 plus ad hoc questions
  - Sales team: shadow discovery calls proactively; ask before joining

  ---

  ## Mentorship and Support Plan

  - **Daily (Days 1–14):** End-of-day 10-minute Slack check-in with peer buddy — share one thing learned, one question
  - **Weekly:** 30-minute 1:1 with VP Sales — bring your call recordings and outreach data; manager drives in weeks 1–2, SDR drives from week 3 onward
  - **Weekly:** 30-minute peer buddy session — review call recordings together
  - **Day 30:** Mid-path review with VP Sales — full metrics review and phase 3 readiness assessment
  - **Day 60:** Learning path completion review — VP Sales and SDR together

  ---

  ## Success Metrics and Assessment

  | Milestone | Timing | Metric |
  |---|---|---|
  | ICP Quiz pass | Day 14 | 8/10 correct |
  | First real discovery call booked | Day 28 | Completion |
  | Outreach volume | Day 30 | 40+ sequences/week |
  | Salesforce accuracy | Day 30 | 95%+ |
  | Discovery calls booked/week | Day 45 | 2+ per week |
  | Discovery calls booked/week | Day 60 | 3+ per week for 2 consecutive weeks |
  | Independent status | Day 60 | VP Sales sign-off |
tips:
  - "The biggest mistake in learning paths is passive consumption without active application. Every phase should include something the learner does, not just reads or watches."
  - "Phase 1 almost always takes longer than people plan for. Build in buffer — a new SDR who is rushed into live prospecting before they understand the ICP is going to generate bad pipeline."
  - "The peer buddy structure is often more valuable than manager coaching for new SDRs — peers can model exactly what 'good' looks like in the actual role. Invest in the buddy relationship explicitly."
  - "Specific resources are much more useful than generic guidance. 'Read chapter 1 of Fanatical Prospecting' is better than 'study prospecting techniques.' The learner should never have to guess what to do next."
  - "Success metrics that are observable and measurable (40+ sequences/week, 95%+ Salesforce accuracy) are much more useful than subjective assessments ('is doing well'). Build the measurement system before the learner starts."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - training-workshop-agenda
  - performance-review-self-assessment
  - onboarding-checklist
  - manager-feedback-summary
tags:
  - learning-development
  - onboarding
  - training
  - career-development
  - hr
---
