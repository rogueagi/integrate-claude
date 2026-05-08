---
title: "Design a training workshop agenda"
slug: training-workshop-agenda
function: hr
role: ld
description: "Generate a structured training workshop agenda with objectives, activities, timing, and facilitation notes for an in-person or virtual session."
useCase: "Use this prompt to design a focused training workshop for a team or cross-functional group. Generic team trainings fail because they lack structure and clear learning objectives. This prompt produces a session agenda with specific activities, timed components, and facilitation guidance that makes the time spent actually productive."
prompt: |
  You are an L&D lead or facilitator designing a training workshop.

  Context:
  - Company: {{company_name}}
  - Workshop topic: {{workshop_topic}} (e.g., discovery call training, manager fundamentals, difficult conversations, new product training)
  - Audience: {{audience}} (who's attending and what they already know)
  - Workshop duration: {{duration}} (e.g., 2 hours, half-day, full day)
  - Format: {{format}} (in-person, virtual via Zoom/Teams, hybrid)
  - Desired outcomes: {{outcomes}} (what participants should know, believe, or be able to do after the session)
  - Resources available: {{resources}} (facilitator(s), guest speakers, materials, tools)
  - Constraints: {{constraints}} (timezone differences, experience diversity, engagement history with training)

  Design a workshop agenda with:

  ## Workshop Overview
  - Title (specific — not "Sales Training" but "Discovery Call Mastery: Moving Buyers from Interest to Commitment")
  - Audience, date/duration, format
  - 3 learning objectives (observable, specific, measurable)
  - Pre-work required (if any — reading, survey, self-assessment)

  ## Detailed Agenda
  For each segment:
  - **Time block** (HH:MM format)
  - **Segment title**
  - **Duration**
  - **Activity type** (lecture, discussion, role-play, small group, demo, quiz)
  - **Content / what happens**
  - **Facilitation notes** (specific guidance for the facilitator — not general tips, but what to do in this specific moment)
  - **Materials needed**

  Include:
  - An opening that isn't just housekeeping — get participants engaged in the topic within the first 5 minutes
  - At least 2 active learning components (role-play, group exercise, discussion with share-back) — no pure lecture sessions
  - A reflection or synthesis activity before closing
  - A concrete follow-through commitment at the end

  ## Post-Workshop Reinforcement
  What happens after the workshop to reinforce the learning:
  - 24-hour follow-up action
  - 30-day reinforcement activity
  - Manager role in supporting application

  ## Evaluation
  How you'll measure whether the workshop worked.

  Tone: practical and facilitation-ready. A facilitator should be able to run this workshop directly from the agenda document with minimal additional planning.
variables:
  - "{{company_name}}"
  - "{{workshop_topic}}"
  - "{{audience}}"
  - "{{duration}}"
  - "{{format}}"
  - "{{outcomes}}"
  - "{{resources}}"
  - "{{constraints}}"
exampleInput: |
  company_name: Anchor Analytics
  workshop_topic: Discovery call excellence — running consultative first calls with VP-level buyers
  audience: All 5 AEs (mix of experience levels: 1 is new, 3 are mid-level, 1 is senior); VP Sales will co-facilitate
  duration: 3 hours
  format: In-person (quarterly team week)
  outcomes: (1) All AEs can articulate a discovery framework and use it consistently; (2) All AEs can demonstrate an effective open-ended discovery question vs. a leading question; (3) Each AE commits to one specific change they'll make to their first calls
  resources: VP Sales as facilitator, 3 recorded real calls from top AEs (with permission), Zoom for recording role-plays, whiteboard
  constraints: Wide experience range (new to senior AE); some AEs may feel defensive about being "trained" on discovery; 45-minute time box before it starts feeling like school
exampleOutput: |
  # Discovery Call Mastery: Moving VP Buyers from Interest to Commitment
  **Anchor Analytics | Q2 Team Week | All AEs + VP Sales**
  **Duration:** 3 hours | **Format:** In-person

  ---

  ## Workshop Overview

  **Learning Objectives:**
  1. Articulate and apply a 4-stage discovery framework (Situation → Challenge → Impact → Required Outcome) consistently across first calls
  2. Distinguish between leading questions (that signal the answer) and open questions (that surface real pain) — and practice the difference
  3. Identify and commit to one specific change in their own discovery call approach

  **Pre-work (due the night before):**
  Each AE reviews one of their own recent first-call recordings and brings answers to:
  - What's one question you asked that worked really well?
  - What's one moment where you wish you had asked differently?

  *Facilitation note: The pre-work is low-effort but creates personal investment — participants who have already reflected on their own calls are more receptive to feedback than those coming in cold.*

  ---

  ## Detailed Agenda

  ### 9:00–9:10 | Opening: "Rate Your Last Discovery Call" (10 min)
  **Type:** Individual reflection + rapid poll

  **What happens:**
  Ask everyone to take 60 seconds and mentally rate their last 5 discovery calls on a scale of 1–10. Write the number on a sticky note. Then share — go around the room. Notice the range.

  Then ask: "What would need to change about how you run discovery to move that number up by 2 points?"

  Let 2–3 people answer briefly. Don't correct or comment yet.

  **Facilitation notes:** This opener creates personal stakes before any instruction begins. The goal is to activate their own standard before introducing a framework. Don't use a slide — just ask the question verbally. Write their "change" ideas on the whiteboard and return to them at the end.

  **Materials:** Sticky notes, markers, whiteboard

  ---

  ### 9:10–9:30 | The Discovery Framework: 4 Stages in 20 Minutes (20 min)
  **Type:** Brief instruction + immediate application

  **What happens:**
  Present the SCIR framework (Situation → Challenge → Impact → Required Outcome):
  - Situation: What's their current setup? (Keep brief — resist the urge to gather information that's in public sources)
  - Challenge: What's not working? What's causing friction?
  - Impact: What happens to their business if this challenge isn't solved?
  - Required Outcome: What does success look like to them personally and organizationally?

  After each stage, VP Sales gives one example question from a real Anchor call.

  **Facilitation notes:** The instruction portion should be 12 minutes max. If it runs long, cut the Required Outcome example — it's the easiest one for AEs to generate on their own. The framework is a container, not a script.

  **Materials:** 1-page SCIR framework handout (laminated, one per person — they keep it)

  ---

  ### 9:30–9:50 | Call Analysis: What Good Sounds Like (20 min)
  **Type:** Group listening + discussion

  **What happens:**
  Play 4-minute excerpt from one of the top-AE recorded calls (pre-selected by VP Sales for a strong discovery moment). After listening, ask the group:
  - What stage of the SCIR framework did you just hear?
  - What was the question that opened up the most information? Why did it work?
  - What could have been asked differently?

  Small group discussion (2 minutes), then share-out.

  **Facilitation notes:** Choose the recording that has at least one strong open question and one moment where the AE could have gone deeper. Perfect recordings aren't useful — calls with a strong moment AND a missed opportunity teach more. Get permission from the AE on the recording in advance.

  **Materials:** Laptop/speaker for audio playback; whiteboard for capturing group observations

  ---

  ### 9:50–10:00 | Break (10 min)

  ---

  ### 10:00–10:40 | Role-Play Practice (40 min)
  **Type:** Active practice in pairs

  **Structure:**
  - Pairs of 2 (VP Sales pairs with the newest AE)
  - Each person runs a 7-minute discovery call as the AE, with their partner playing a VP of Finance at a SaaS company (scenario card provided)
  - After 7 minutes: 3-minute peer debrief — use the feedback card (one specific strength, one specific improvement)
  - Switch roles (7 min + 3 min)

  **Scenario card for the "VP of Finance" player:**
  "You're the VP of Finance at a $30M ARR SaaS company. You run ARR and board reporting in Excel and spend 8–10 hours per month on it. You've looked at a few analytics tools but found them too complex. You're on this call because a colleague referred you. You haven't decided this is a priority yet."

  **Facilitation notes:** Brief the VP of Finance player to be realistic but not adversarial — they're not trying to stump the AE, they're playing a real buyer. The goal is realistic practice, not a stress test. Walk the room and listen to pairs — note 1–2 moments to share in the debrief.

  **Materials:** Scenario cards (one per pair), feedback cards, timer

  ---

  ### 10:40–11:00 | Group Debrief (20 min)
  **Type:** Facilitated discussion with specific examples

  **What happens:**
  VP Sales shares 1–2 specific moments they observed during role-plays — one strong, one developmental. Then open to the group: "What was the hardest moment in your role-play and how did you handle it?"

  Return to the whiteboard with the opening ideas ("what would need to change to move your score up 2 points"). Ask: did today change anyone's answer?

  **Facilitation notes:** Do not summarize what AEs "should" do — ask questions that help them articulate it themselves. "What made the question you asked at [moment] more effective than the alternative?" is better than "a good question is open-ended."

  ---

  ### 11:00–11:10 | Individual Commitment (10 min)
  **Type:** Individual writing + share

  **What happens:**
  Each AE writes down one specific thing they're going to do differently on their next first call. Not a principle — a specific, observable behavior. ("I'm going to ask 'what's the cost of this problem not being solved?' before moving to product discussion" is specific. "I'm going to ask better questions" is not.)

  Share commitments around the table — 1 sentence each.

  **Facilitation notes:** These commitments are the most important output of the session. Photograph the whiteboard or collect them — they'll be referenced in the 30-day follow-up.

  ---

  ### 11:10–11:15 | Closing and Next Steps (5 min)
  VP Sales closes: "We're not doing this because your discovery calls are bad — we're doing this because the best sales teams I've seen invest in this specifically, and I think we can move our close rate from 45% to 65% this year if we get this right."

  Reference the follow-up actions.

  ---

  ## Post-Workshop Reinforcement

  **24 hours after:** VP Sales sends a 1-paragraph email to the team recapping the one commitment each person made. Named by person.

  **7 days after:** Each AE submits a recording of a first call they ran post-workshop (can be 3 minutes, doesn't have to be the whole call). VP Sales gives written feedback on the specific commitment they made.

  **30 days after:** At the next pipeline review, each AE reports: "I committed to X. Here's one call where I tried it and what happened."

  **Manager role:** VP Sales reviews calls with the commitment in mind for 4 weeks after the workshop. Reinforces the specific behavior, not just general feedback.

  ---

  ## Evaluation

  - **Immediately (end of session):** Quick poll — "On a 1–5 scale, how likely are you to use something specific from today in your next call?" Target: 4.2+
  - **7-day:** % of AEs who submit a recording as requested (target: 80%+)
  - **30-day:** VP Sales tracks close rate and discovery-to-commit conversion rate in CRM for the 4 weeks following the workshop vs. the 4 weeks prior
tips:
  - "The pre-work step is often skipped — don't skip it. Participants who arrive having reflected on their own calls are 40% more engaged (anecdotally) than those who haven't. Keep pre-work under 20 minutes."
  - "Role-play is the most uncomfortable and most valuable activity in sales training. Make the scenario card realistic but not adversarial — the goal is real practice, not a gotcha test."
  - "Specific commitments at the end of a workshop are the bridge between learning and application. 'I'm going to ask better questions' is not a commitment — help participants get to observable, specific behaviors."
  - "The 7-day follow-up recording submission is what separates trainings that change behavior from ones that don't. If there's no accountability mechanism, the insights evaporate within a week."
  - "For mixed-experience groups, pair new reps with senior reps during role-play. The senior rep gets value from articulating what good looks like; the new rep gets a model to observe."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - learning-path-outline
  - performance-review-self-assessment
  - manager-feedback-summary
tags:
  - learning-development
  - training
  - workshop
  - facilitation
  - hr
---
