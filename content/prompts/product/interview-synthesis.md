---
title: "Synthesize user interview transcripts into insights"
slug: interview-synthesis
function: product
role: user-research
description: "Transform raw user interview notes or transcripts into structured, evidence-backed insights with patterns, themes, and actionable recommendations."
useCase: "Use this prompt after completing a round of user interviews when you have notes or transcripts and need to make sense of them. Synthesizing interviews is time-consuming and cognitively demanding — this prompt accelerates the process and helps surface patterns that are easy to miss when reading transcripts serially."
prompt: |
  You are a senior UX researcher experienced in qualitative analysis and insight synthesis. Analyze the user interview data below and produce a structured insight report.

  **Research question:** {{research_question}}
  **Interview context:** {{interview_context}} (number of interviews, participant types, product area)
  **Interview notes or transcripts:** {{interview_data}}
  **Known hypotheses we were testing:** {{hypotheses}}
  **Decisions these insights should inform:** {{decisions}}

  Synthesize the interview data using this analytical framework:

  ## 1. Research Summary
  - Number of interviews conducted
  - Participant overview (roles, demographics, key characteristics)
  - Key themes that emerged (list in order of frequency/strength before developing them)
  - Notable surprises — what was different from what you expected to find?

  ## 2. Insight Development
  For each major insight (aim for 4–8 insights, depending on data volume):

  **Insight [Number]: [Insight title — a declarative statement, not a question]**
  - **Insight statement:** 2–3 sentences stating what you found, written as a clear, actionable observation
  - **Strength:** Strong (4–5 participants) / Moderate (2–3 participants) / Weak (1 participant, but notable)
  - **Evidence:** 2–4 direct quotes or paraphrased observations that support this insight (with participant reference, e.g., P3, P7)
  - **Why it matters:** The implication for the product or business
  - **Tension (if any):** Any contradictory evidence or participant who felt differently
  - **Related hypotheses:** Which of our going-in hypotheses does this confirm, challenge, or complicate?

  Rules for good insight statements:
  - State what IS, not just what users said (synthesize, don't summarize)
  - Reveal something non-obvious — not "users find it confusing" but "users confuse X with Y because they expect Z"
  - Be specific enough to inform a design or product decision
  - Avoid adjectives without anchors ("many," "often," "mostly" — say "5 of 8 participants")

  ## 3. Patterns and Contradictions
  - Patterns that appeared across multiple participants (even if they expressed them differently)
  - Unexpected consistencies (where you expected variation but found agreement)
  - Real contradictions (where participants genuinely disagreed — and what might explain the difference)
  - Outlier observations (only one person but potentially important)

  ## 4. User Needs Uncovered
  Reframe the insights as user needs using the format:
  "[User type] needs to [achieve goal] because [motivation/constraint] — but currently [barrier they face]."

  ## 5. Hypotheses Evaluation
  For each hypothesis that was tested:
  - **Hypothesis:** [State it]
  - **Verdict:** Confirmed / Partially confirmed / Not confirmed / Complicated by
  - **Evidence:** What you found

  ## 6. Recommendations
  Based on the insights, 3–5 specific recommendations for the product or design team. Each recommendation should:
  - Link directly to at least one insight
  - Be specific enough to be actionable
  - Include a rationale (not just what to do, but why based on the research)

  ## 7. Gaps and Follow-Up Research
  What questions weren't answered by this research? What follow-up studies would be most valuable?

  ## 8. Research Confidence
  An honest assessment of the confidence level in these findings:
  - Sample size and diversity limitations
  - Methodological limitations
  - Findings that would require more research to act on confidently
variables:
  - "{{research_question}}"
  - "{{interview_context}}"
  - "{{interview_data}}"
  - "{{hypotheses}}"
  - "{{decisions}}"
exampleInput: |
  research_question: What barriers prevent new Beacon users from launching their first survey within 7 days of signup?
  interview_context: 8 moderated interviews with HR managers at 100–500 person companies who signed up but never launched a survey (identified via product analytics)
  hypotheses: |
    H1: Users don't know how to set up a survey
    H2: Users get confused by the "invite team members" step
    H3: Users are blocked by needing IT/admin approval for email integration
    H4: Users are deterred by the volume of survey templates
  decisions: Whether to redesign the onboarding flow, and if so, which specific steps to prioritize
  interview_data: |
    P1 (HR Manager, 200 employees): "I signed up and then kind of got lost. I didn't know what I was supposed to do next. I kept clicking things but nothing felt like it was the 'start here' button."
    P2 (HR Director, 350 employees): "I wanted to send a quick survey but then it asked me to invite my whole team as 'users' and I panicked. I don't have permission to add new software users — that goes through IT. So I just stopped."
    P3 (People Ops Manager, 150 employees): "The templates were overwhelming. There were like 30 of them and I didn't know which one was right. I ended up just closing the window."
    P4 (HR Manager, 400 employees): "I thought I needed to set everything up perfectly before I could send anything. So I spent like an hour trying to read all the settings. I never actually got to sending."
    P5 (HR Director, 120 employees): "The 'invite team' thing confused me. I thought I was inviting people to take the survey, but actually it was inviting them to use the software. Those are very different things."
    P6 (People Ops, 250 employees): "I started the survey setup and then couldn't figure out how to add my employees as recipients. I thought I had to import a CSV and I didn't have that file handy."
    P7 (HR Manager, 300 employees): "Honestly, I ran out of time. I meant to go back to it but then the week got busy. I keep meaning to."
    P8 (HR Director, 175 employees): "I set up my account but then couldn't figure out if it was connected to my email system. I need to know emails are going from our company domain, not some random Beacon email address."
exampleOutput: |
  # Interview Synthesis: Beacon Onboarding Research
  **Research question:** What prevents new users from launching their first survey within 7 days?
  **Sample:** 8 interviews with HR managers (non-launchers), company size 120–400

  ## 1. Research Summary
  **Themes (in order of frequency):**
  1. Disorientation — no clear "start here" signal in the product (6/8)
  2. "Invite team members" confusion — users conflate adding users with adding survey recipients (5/8)
  3. Template overwhelm — too many options without guidance (4/8)
  4. Perfectionism paralysis — users feel they need to configure everything before sending (3/8)
  5. Email integration uncertainty — unsure if surveys will send from company domain (2/8)
  6. Life happened — time pressure caused disengagement with intent to return (2/8)

  **Surprise:** Zero participants mentioned IT approval as a barrier (H3 not confirmed). The biggest barrier is cognitive and navigational, not technical.

  ## 2. Insights

  **Insight 1: Users can't find the starting line**
  *Strength: Strong (6/8 participants)*

  New users arrive at the dashboard and don't know what action to take first. The product offers multiple entry points (templates, settings, team management) but no clear "do this first" signal. Users feel like they're wandering.

  Evidence:
  - P1: "Nothing felt like the 'start here' button."
  - P4: "I spent an hour reading settings. I never actually got to sending."
  - P6: "I started the survey setup and then couldn't figure out where to go next."

  Why it matters: Users who don't find the starting line within the first session often don't return. This is the highest-priority finding.

  Related hypothesis: Confirms H1 ("users don't know how to set up a survey") but reveals the problem is earlier — it's not setup complexity, it's not knowing setup is the next step.

  ---

  **Insight 2: "Invite team members" creates a false blocker by conflating two different actions**
  *Strength: Strong (5/8 participants)*

  Users believe "invite team members" means adding survey recipients. In reality, it means adding admin users to the Beacon account — a different, permission-sensitive action. This semantic confusion stops 5 participants cold because adding software users requires IT approval they don't have.

  Evidence:
  - P2: "I don't have permission to add new software users — that goes through IT. So I just stopped."
  - P5: "I thought I was inviting people to take the survey. Those are very different things."

  Why it matters: The fix is likely a labeling and flow change, not a feature build. This is a high-impact, potentially low-effort fix.

  Related hypothesis: Directly confirms H2.

  ---

  **Insight 3: Too many templates without guidance creates decision paralysis**
  *Strength: Moderate (4/8 participants)*

  Presented with 30+ survey templates, users freeze. Without guidance on which template is right for their situation, they feel they might choose wrong and delay starting.

  Evidence:
  - P3: "There were like 30 templates and I didn't know which one was right. I ended up just closing the window."

  Why it matters: Template selection is a classic paradox of choice problem. Reducing visible templates or adding a recommendation layer could unblock a significant proportion of new users.

  ## 4. User Needs Uncovered
  - HR Managers need to get a survey in front of their team within 30 minutes of signing up because their time is fragmented — but currently they can't find where to start.
  - HR Directors need to add employees as survey recipients without adding them as software platform users — because inviting people to software requires IT approval they don't control.
  - People Ops Managers need confident template guidance because they worry about choosing the wrong survey format and want reassurance they're starting correctly.

  ## 5. Hypotheses Evaluation
  | Hypothesis | Verdict | Evidence |
  |-----------|---------|----------|
  | H1: Users don't know how to set up a survey | Partially confirmed — the problem is earlier (finding the starting line) not later (setup complexity) | 6/8 participants disoriented at dashboard |
  | H2: "Invite team members" step confuses users | Confirmed | 5/8 participants stopped at this step |
  | H3: IT/admin approval blocks users | Not confirmed | 0 participants mentioned this as a barrier |
  | H4: Template volume deters users | Confirmed | 4/8 participants mentioned template overwhelm |

  ## 6. Recommendations
  1. **Add a prominent "Start here" guide or wizard** that directs new users to create their first survey before exploring anything else. (Insight 1)
  2. **Rename and separate "Invite team members" (admin users) from "Add survey recipients."** These are different actions with different permission implications and must not share a label or flow. (Insight 2 — highest priority)
  3. **Reduce initial template exposure to 5–7 top templates** with a "see all" option. Add a brief recommendation question ("What are you trying to learn?") to guide selection. (Insight 3)
  4. **Add email domain transparency** — show users on the setup screen which email address surveys will be sent from. (Insight 5)
tips:
  - "Insights are not summaries. 'Users found it confusing' is a summary. 'Users conflate survey recipients with platform users because they share a label' is an insight."
  - "Always include participant evidence counts (5/8, 3/8) — it prevents the research consumer from thinking one vocal person represents everyone."
  - "The 'Hypotheses Evaluation' section is the most important for product teams. They went in with beliefs — tell them which ones were right and wrong."
  - "Do the synthesis collaboratively with at least one other person. Affinity mapping with a PM or designer produces better insights than solo analysis and builds shared ownership of the findings."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - research-plan
  - usability-test-script
  - affinity-map-summary
  - ux-research-report
tags:
  - user-research
  - qualitative-analysis
  - insight-synthesis
  - ux-research
  - product-management
---
