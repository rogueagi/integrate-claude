---
title: "Write an executive summary of a UX research study"
slug: ux-research-report
function: product
role: user-research
description: "Generate a compelling, decision-ready executive summary of a UX research study that conveys key findings, evidence, and recommendations to non-researcher stakeholders."
useCase: "Use this prompt after completing a research study when you need to present findings to product leaders, executives, or cross-functional partners. The executive summary bridges the gap between researcher-mode analysis and business-mode decision-making."
prompt: |
  You are a senior UX researcher skilled at translating research findings into business impact. Write an executive summary of the research study described below.

  **Study name:** {{study_name}}
  **Study type:** {{study_type}}
  **Research question:** {{research_question}}
  **Participants:** {{participants}}
  **Method:** {{method}}
  **Date conducted:** {{date_conducted}}
  **Key findings:** {{key_findings}}
  **Supporting evidence:** {{supporting_evidence}}
  **Decisions this research should inform:** {{decisions}}
  **Audience for this report:** {{audience}}

  Write an executive summary with these sections:

  ## Executive Summary: [Study Name]

  ### At a Glance (1 page maximum)
  A one-page summary for executives who won't read further:
  - **What we studied:** 1 sentence
  - **How we studied it:** 1 sentence
  - **The most important thing we found:** 1–2 sentences
  - **What we recommend:** 3 bullets
  - **Confidence level:** High / Medium / Low and brief rationale

  ### Background and Research Questions
  - Why this research was conducted (the business or product need)
  - The primary research question
  - What decisions this research informs

  ### Methodology
  - Study type and brief rationale for choosing this method
  - Participant profile (who was included and excluded, and why)
  - Sample size and dates
  - Any methodological limitations to be aware of

  ### Key Findings
  Present 4–7 findings in order of importance. For each finding:
  - **Finding [#]: [A declarative statement of the finding]**
  - Confidence level and supporting evidence count
  - 1–2 direct quotes or observations that bring the finding to life
  - The "so what" — why this matters for the product or business

  ### Recommendations
  Translate findings into specific, prioritized recommendations. For each:
  - **Recommendation [#]:** [Clear action statement]
  - Priority: High / Medium / Low
  - Effort: Low (quick fix) / Medium / High (significant investment)
  - Finding it's based on
  - Expected impact if implemented

  Present recommendations in a 2×2 impact/effort matrix framework (Quick Wins, Big Bets, Fill-ins, Reconsider).

  ### What We Don't Know (Research Gaps)
  Important questions this study didn't answer, and whether follow-up research is recommended.

  ### Appendix
  - Full participant profiles
  - Complete methodology notes
  - Raw data / recordings (links)
  - Session notes
variables:
  - "{{study_name}}"
  - "{{study_type}}"
  - "{{research_question}}"
  - "{{participants}}"
  - "{{method}}"
  - "{{date_conducted}}"
  - "{{key_findings}}"
  - "{{supporting_evidence}}"
  - "{{decisions}}"
  - "{{audience}}"
exampleInput: |
  study_name: Beacon Onboarding Research — Why Users Don't Launch Their First Survey
  study_type: Moderated usability tests + user interviews (combined)
  research_question: What prevents new users from launching their first survey within 7 days of signup?
  participants: 8 HR managers at companies with 100–400 employees; all signed up within 60 days but never launched a survey
  method: 55-minute moderated Zoom sessions combining think-aloud usability testing with semi-structured interview
  date_conducted: November 11–15, 2024
  key_findings: |
    1. "Invite team members" is the most common abandonment point — users believe it means inviting survey recipients, not software admin users, and stop when they realize they need IT approval
    2. No clear "start here" pathway — users arrive at the dashboard and don't know what to do first
    3. Template overwhelm — 30+ templates with no guidance causes decision paralysis for 4/8 users
    4. Results don't tell users what to do — users can see scores but don't know how to interpret or act on them (discovered as a secondary finding)
    5. Email domain uncertainty — users don't know if surveys will send from their company domain
  supporting_evidence: Quotes from 8 sessions; screen recordings showing specific abandonment points; task completion data (see appendix)
  decisions: Whether to redesign onboarding, and which specific steps to prioritize in the redesign
  audience: VP Product, Head of Design, Head of Engineering, CEO (will be shared at product review)
exampleOutput: |
  # Executive Summary: Beacon Onboarding Research
  **Conducted:** November 2024 | **Researcher:** [Name] | **Participants:** 8 HR managers

  ---

  ## At a Glance

  **What we studied:** Why new users sign up for Beacon but don't launch their first survey within 7 days.

  **How we studied it:** 8 moderated usability sessions (55 minutes each) with HR managers who signed up but never launched a survey.

  **Most important finding:** The primary barrier is a labeling problem — "Invite team members" means something different to users (survey recipients) than it means in the product (software admin users). This single point of confusion stops most users in their tracks because adding software users requires IT approval they don't have.

  **We recommend:**
  - Rename and separate "Invite team members" from "Add survey recipients" immediately
  - Add a guided "Start here" wizard that directs users to their first survey before exploring anything else
  - Reduce visible templates from 30+ to 5–7 with a brief recommendation question

  **Confidence:** High for findings 1 and 2 (confirmed by 5+ of 8 participants with direct behavioral evidence). Medium for findings 3–5.

  ---

  ## Key Findings

  **Finding 1: "Invite team members" causes the most abandonment — and the reason is semantic, not technical**
  *Confidence: High | 5/8 participants abandoned here*

  Users encounter "Invite team members" and assume it means adding employees as survey recipients. In reality, it means adding admin users to the Beacon account. When users realize this is a software access grant (requiring IT approval), they stop. This is not a complex technical problem — it's a labeling problem with a low-effort fix.

  > "I don't have permission to add new software users — that goes through IT. So I just stopped." — P2
  > "I thought I was inviting people to take the survey. Those are very different things." — P5

  **So what:** This single point of confusion likely explains a significant portion of our 62% non-launch rate. The fix — renaming the step and separating the two workflows — should be fast and high-impact.

  ---

  **Finding 2: No "start here" signal — users wander**
  *Confidence: High | 6/8 participants*

  Users arrive at the dashboard after signup and don't know what to do first. The product presents multiple entry points (templates, settings, team management) but no clear first action. Most users clicked around for several minutes before asking for help or giving up.

  > "Nothing felt like the 'start here' button." — P1
  > "I spent an hour trying to read all the settings. I never actually sent anything." — P4

  **So what:** A guided onboarding wizard that surfaces "Create your first survey" as the obvious first action could unblock most new users with minimal engineering investment.

  ---

  **Finding 3: 30+ templates paralyzes decision-making**
  *Confidence: Medium | 4/8 participants*

  When presented with more than 30 survey templates, nearly half of participants froze. Without guidance on which template fits their situation, they worried about choosing wrong.

  > "There were like 30 templates and I didn't know which one was right. I ended up just closing the window." — P3

  ---

  ## Recommendations

  | Priority | Recommendation | Effort | Impact | Based On |
  |----------|---------------|--------|--------|---------|
  | 1 | Rename "Invite team members" to "Add admin users" and create a separate "Add survey recipients" flow | Low | High | Finding 1 |
  | 2 | Add a guided "Start here" wizard surfacing survey creation as step 1 | Medium | High | Finding 2 |
  | 3 | Reduce initial template display to 5–7 with a recommendation question | Low | Medium | Finding 3 |
  | 4 | Add email domain information to setup screen | Low | Low-medium | Finding 5 |
  | 5 | Add benchmark context and "what to do next" guidance to results view | High | High | Finding 4 |

  **Quick Wins (Low effort, High impact):** Recommendations 1 and 3
  **Big Bets (High effort, High impact):** Recommendations 2 and 5
  **Fill-ins:** Recommendation 4

  ## What We Don't Know
  - Whether these findings hold for different customer segments (enterprise vs. SMB, different industries)
  - Whether fixing Finding 1 alone is sufficient to unblock most users, or whether Finding 2 also needs to be fixed simultaneously
  - Long-term retention impact of fixing these barriers (would need post-launch measurement)

  **Recommended follow-up:** A/B test the "Invite team members" relabeling with the next 200 signups before committing to the full onboarding redesign.
tips:
  - "The 'At a Glance' section is the most important one — most executives will only read this. Make it a complete, standalone summary."
  - "Include direct quotes for every key finding. Quotes humanize the data and make findings memorable in a way that statistics don't."
  - "The 2x2 recommendations matrix (Quick Wins, Big Bets, Fill-ins, Reconsider) is the most actionable format for engineering and design prioritization."
  - "Always include a 'What We Don't Know' section. Acknowledging the limits of your research builds credibility — audiences trust researchers who know what their data can and can't say."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - interview-synthesis
  - affinity-map-summary
  - research-plan
  - success-metrics-framework
tags:
  - ux-research
  - user-research
  - research-reporting
  - executive-communication
  - product-management
---
