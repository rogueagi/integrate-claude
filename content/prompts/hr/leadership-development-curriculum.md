---
title: "Design a leadership development curriculum for new managers"
slug: leadership-development-curriculum
function: hr
role: ld
description: "Build a 6-month leadership development program for first-time managers, with sessions, between-session practice, and measurable outcomes — not just a content list."
useCase: "Use this when promoting a cohort of ICs into manager roles or when building a manager training program from scratch. Most leadership content fails because it's lecture-heavy and divorced from real work. This prompt produces a curriculum tied to actual manager moments and what good looks like in your specific company context."
prompt: |
  You are a senior L&D leader who has built manager-development programs at multiple high-growth companies. Design a 6-month leadership development curriculum for new managers.

  Context:
  - Cohort: {{cohort}} (size, function mix, tenure as managers)
  - Company stage and culture: {{company_context}}
  - Top 3 manager pain points based on engagement / 360 / exit data: {{pain_points}}
  - Existing tools or frameworks already in use: {{existing_frameworks}}
  - Format constraints: {{format}} (e.g., 90-min biweekly, fully remote, blend of in-person and async)
  - Budget posture: {{budget}} (lean, moderate, generous)

  Design a 6-month program with:

  1. **Program goals (3–4 measurable outcomes)** — What's specifically different about these managers in 6 months? Tie to engagement scores, retention, 360 feedback, or skill demonstrations. Avoid "they will feel more confident."

  2. **Curriculum overview** — A month-by-month or session-by-session map showing topic, learning objective, and how it ties to a real manager moment.

  3. **Detailed session design (3 sample sessions in depth)** — Pick the 3 most important sessions and design them fully:
     - Pre-work
     - In-session structure with timing
     - Active practice (role-play, case, peer coaching)
     - Between-session application
     - How success is measured

  4. **Cohort mechanics** — Peer learning groups, accountability partners, manager-of-manager involvement, skip-level visibility.

  5. **Measurement plan** — Pre/post assessment, mid-program check, end-of-program review. Specific instruments.

  6. **Common failure modes for L&D programs** — Where this program is likely to lose energy or fail to stick, and the 2–3 mitigations baked into the design.

  Tone: practical, anti-fluffy. Avoid generic leadership-book content. Build for managers who are already in the seat and need help next Tuesday, not a year from now.
variables:
  - "{{cohort}}"
  - "{{company_context}}"
  - "{{pain_points}}"
  - "{{existing_frameworks}}"
  - "{{format}}"
  - "{{budget}}"
exampleInput: |
  cohort: 22 first-time managers, mostly engineering (14) and product (5), some sales (3). Tenure as manager: 0–8 months. Most were strong ICs promoted in the last year.
  company_context: 600-person Series D B2B SaaS, hybrid (3 days in office), strong engineering culture, struggling with cross-functional alignment between PM and Eng.
  pain_points: (1) Engagement survey shows new managers' teams score lowest on "I get clear and actionable feedback." (2) 360 data: new managers under-deliver on giving direct feedback and over-deliver on shielding their teams from context. (3) Two recent regrettable departures cited "manager couldn't articulate growth path."
  existing_frameworks: Company uses a competency model with 6 levels per function, runs annual 360s, and has a "radical candor" cultural norm that's more aspirational than practiced.
  format: 90-minute biweekly sessions, hybrid (in-office attendance preferred but remote option available), 12 total sessions over 6 months.
  budget: Moderate. Can afford 1 external coach for 6 sessions, internal facilitators for the rest, simulations, and assessments. No multi-day offsite.
exampleOutput: |
  # New Manager Curriculum — 6 Months, 22 Managers

  ## 1. Program goals

  By month 6:
  1. **Feedback frequency:** Direct reports report receiving specific, actionable feedback at least biweekly (measured via pulse survey, baseline + month 6).
  2. **Growth conversations:** 100% of direct reports have a documented growth plan with named next-level competencies (audit at month 6).
  3. **Engagement lift:** Cohort's teams show 10+ point lift on the "clear and actionable feedback" engagement question.
  4. **Skill demonstration:** Each manager passes a recorded role-play assessment on giving difficult feedback (rated by external coach + peer).

  Note what's NOT a goal: "managers feel more confident." Confidence is downstream of skill and practice. We measure skill.

  ## 2. Curriculum overview

  | # | Session | Tied to manager moment |
  |---|---|---|
  | 1 | Why managers exist (and how this team measures success) | First all-hands as a manager |
  | 2 | The 1:1 that actually moves work | Tomorrow's 1:1 |
  | 3 | Giving feedback — the daily kind | Week-of feedback you've been avoiding |
  | 4 | Giving feedback — the hard kind | Performance concerns, missed deadlines |
  | 5 | Receiving feedback (and not getting defensive) | Your skip-level just told you something hard |
  | 6 | Mid-program 360 micro-pulse + peer coaching | Calibration moment |
  | 7 | Coaching vs. directing — knowing the difference | When your IC is stuck |
  | 8 | Managing through ambiguity and reorgs | The next strategy shift |
  | 9 | Cross-functional conflict — PM/Eng edition | The disagreement you've been avoiding |
  | 10 | Growth conversations and articulating a path | The "where am I going" 1:1 |
  | 11 | Performance: when coaching isn't enough | The conversation before the PIP |
  | 12 | Capstone: case + 360 retake + commitments | What's different in 6 months |

  ## 3. Detailed sessions (3 deep dives)

  ---

  ### Session 3 — Giving feedback, the daily kind

  **Why this is critical:** Engagement data names this as the #1 gap. Most managers think feedback = annual review; we're rewiring to feedback = weekly habit.

  **Pre-work (30 min, day before):**
  - Read 3-page "SBI feedback" primer (Situation–Behavior–Impact)
  - Identify ONE piece of feedback you've been avoiding giving in the last two weeks. Write it as draft SBI in a private doc.
  - Watch 6-min video: "Two managers give the same feedback — what's different"

  **In-session (90 min):**

  - **0:00–0:10** — Open with data: "Your teams score lowest on this. Here's the actual quote from a recent skip-level: [anonymized]." No PowerPoint; just the data on screen.
  - **0:10–0:25** — Frame: SBI structure, what counts as actionable, the difference between observation and interpretation. Coach delivers in interactive Q&A, not lecture.
  - **0:25–0:55** — Triad role-play. Groups of 3 (manager, recipient, observer). Each manager runs the feedback they brought as pre-work. Observer uses a checklist. Rotate roles. Coach floats.
  - **0:55–1:15** — Group debrief. Pull 2 managers to redo their role-play in front of the group with coach feedback. Vulnerable but the highest-leverage 20 minutes of the program.
  - **1:15–1:30** — Commitment: each manager names the specific 1:1 they will give this feedback in, by date. Posted to cohort Slack channel.

  **Between-session application:**
  - Give the feedback in the named 1:1 within 7 days
  - Post a 3-line reflection in cohort Slack: what you said, how it landed, what you'd do differently
  - Manager-of-manager checks in at next 1:1

  **Measurement:**
  - 100% commitment posts within 10 days (cohort accountability)
  - Direct report pulse question 3 weeks later: "In the last two weeks, did your manager give you feedback specific enough to act on?"

  ---

  ### Session 4 — Giving feedback, the hard kind

  **Pre-work:** Bring a real situation in your team where you have a performance concern you haven't named. (If you don't have one, you're either lying or not paying attention — bring one anyway from a past role.)

  **In-session:**
  - **0:00–0:15** — External coach opens with a story of a time they got it wrong. Vulnerability sets the room.
  - **0:15–0:35** — Framework: separating performance from person, naming the gap, owning the manager's part, defining what good looks like, agreeing on next steps and timeline.
  - **0:35–1:10** — Live role-play, but harder than session 3. Coach plays a defensive direct report. Each manager gets 6 minutes. Group watches; coach pauses for redirection. Two volunteers go in front of the full cohort.
  - **1:10–1:25** — When this conversation needs to escalate: signs the conversation is heading toward a PIP, when to loop in HRBP, what to document and when.
  - **1:25–1:30** — Commitment + assigned peer accountability partner for the next 2 weeks.

  **Between-session:** Schedule the conversation. Loop in your manager-of-manager before, not after. Debrief with peer accountability partner within 48 hours of the conversation.

  **Measurement:** Manager-of-manager confirms the conversation happened (yes/no, no detail required) at month-end check-in.

  ---

  ### Session 10 — Growth conversations and articulating a path

  **Why this is critical:** Two regrettable departures cited "couldn't articulate growth path." This is fixable in 90 minutes if we tie it to the existing competency model.

  **Pre-work:**
  - For ONE direct report, fill out the competency model rubric for their current level and the next level
  - Identify the 2 biggest gaps and one specific project that would close one of them
  - Bring the partially completed growth plan to session

  **In-session:**
  - **0:00–0:10** — Open with: "Two people quit last quarter and named this as a reason. We're going to fix it for our teams in the next 90 minutes."
  - **0:10–0:30** — How to use the competency model in a growth conversation: not as a checklist but as a shared map. Demo with a recorded conversation between a senior leader and an IC.
  - **0:30–1:00** — Pair work: each manager runs a 10-minute growth conversation using their pre-work, with their pair playing the direct report. Switch. Coach floats.
  - **1:00–1:20** — Hardest cases: "What if their next level isn't open?" "What if they want a different track?" "What if they're not ready and don't know it?" Group works through 3 real scenarios.
  - **1:20–1:30** — Commit: complete and share growth plans with all direct reports within 21 days.

  **Between-session:** Real growth conversations with all direct reports. Plans documented in the existing HR system.

  **Measurement:** HR audit of growth-plan completion rate at day 30 post-session. Goal: 100%.

  ## 4. Cohort mechanics

  - **Peer triads:** 22 managers in 7 triads (one mixed-function triad per group). Triads meet for 30 min between sessions to debrief practice.
  - **Accountability partners:** Reassigned every 2 sessions to broaden network.
  - **Manager-of-manager involvement:** Skip-levels brief their managers' managers on cohort goals and check in at monthly 1:1s.
  - **Skip-level visibility:** Two open invitations for VPs to attend sessions 3 and 11 (the highest-stakes ones) as observers, not participants.
  - **Slack channel:** #ndp-2026-cohort. Used for commitments, 3-line reflections, and case sharing.

  ## 5. Measurement plan

  - **Baseline (week 0):** Direct report pulse on 5 questions (feedback, growth, clarity, support, autonomy). Manager 360 (truncated, 8 questions). Engagement scores for cohort's teams.
  - **Mid-program (month 3):** Same direct-report pulse. Cohort survey on session usefulness and behavior change.
  - **End of program (month 6):** Full 360 retake. Engagement scores. Skill assessment via recorded role-play scored by coach + peer using rubric.
  - **Lagging (month 9):** Voluntary regrettable attrition on cohort's teams vs. comparable non-cohort teams.

  ## 6. Common failure modes and mitigations

  - **Failure mode 1: Energy dies after session 4.** Most leadership programs front-load and lose engagement. *Mitigation:* The hardest, most useful session (10 — growth conversations) is in the back half, not the front, to keep stakes high throughout.
  - **Failure mode 2: Managers attend but don't apply between sessions.** *Mitigation:* Every session ends with a named, dated commitment posted to the cohort Slack. Peer accountability is structural, not optional.
  - **Failure mode 3: The org sees this as "training" disconnected from real work.** *Mitigation:* Every session is tied to a specific manager moment. Manager-of-manager involvement makes it visible to leadership. Capstone presents to skip-levels.
  - **Failure mode 4: The "radical candor" cultural norm gets parroted without practice.** *Mitigation:* Sessions 3 and 4 don't reference the company language at all — we teach the skill, then connect it to the cultural norm in session 5. Practice before vocabulary.
tips:
  - "Tie every session to a specific manager moment ('your next 1:1', 'the feedback you've been avoiding'). Generic leadership content gets generic engagement."
  - "Build commitments into every session and make them public to the cohort. The behavior-change literature is unambiguous: public commitment + peer accountability beats content quality every time."
  - "Measure outcomes on the team, not the manager. Manager confidence is a vanity metric; direct-report pulse on feedback specificity is the real one."
  - "Front-load the hardest session, not the most theoretical. Most programs build up to difficult-feedback in session 8; we put it in session 4 because that's what managers actually need next week."
  - "Get manager-of-managers involved structurally, not optionally. Programs without skip-level involvement fade after the cohort ends."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - learning-path-outline
  - training-workshop-agenda
  - manager-feedback-summary
tags:
  - leadership-development
  - learning-and-development
  - management-training
  - new-managers
  - curriculum
---
