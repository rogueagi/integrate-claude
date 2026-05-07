---
title: "Summarize a retrospective meeting into action items and themes"
slug: retrospective-summary
function: operations
role: project-management
description: "Transform raw retrospective notes into a structured summary with synthesized themes, prioritized action items, and carry-forward commitments."
useCase: "Use this prompt after any retrospective — sprint retro, project post-mortem, or quarterly review — to turn a messy collection of sticky notes and comments into a clear document the team can act on. The output should make the next cycle better, not just document the last one."
prompt: |
  You are an experienced agile coach and facilitator. Synthesize the retrospective notes below into a structured, actionable summary.

  **Team:** {{team_name}}
  **Retrospective type:** {{retro_type}} (e.g., sprint retrospective, project retrospective, quarterly retro, post-incident retro)
  **Period covered:** {{period_covered}}
  **Facilitator:** {{facilitator}}
  **Number of participants:** {{participant_count}}
  **Raw retrospective notes:** {{raw_notes}}
  **Format used:** {{retro_format}} (e.g., Start/Stop/Continue, 4Ls, Mad/Sad/Glad, Plus/Delta, sailboat)
  **Team context:** {{team_context}} (any relevant background about the team's situation)

  Write a retrospective summary with these sections:

  ## Retrospective Summary: [Team] — [Period]
  **Date:** [Date] | **Facilitator:** [Name] | **Participants:** [Count]

  ## 1. Executive Summary (3–5 sentences)
  What was the overall tone and energy of this retrospective? What were the 2–3 most significant themes? What is the single most important commitment coming out of this session?

  ## 2. What Went Well
  Synthesize the positive feedback into 3–5 themes (not a raw list of comments). For each theme:
  - Theme name
  - What specifically happened (concrete examples from the notes)
  - Why this matters to preserve

  ## 3. What Needs Improvement
  Synthesize improvement areas into 3–5 themes. For each:
  - Theme name
  - Root cause analysis (what's actually driving this — don't just describe the symptom)
  - Pattern: Is this a recurring issue or new this period?
  - Priority: High / Medium / Low

  ## 4. Action Items
  Extract every specific action item discussed or proposed. Present as a table:
  | # | Action | Owner | Due Date | Success Metric | Priority |

  Rules:
  - Every action must have a named owner (a person, not a team)
  - Every action must be specific and verifiable — "improve communication" is not an action item
  - Include the success metric: how will we know this action worked?
  - Flag any action that depends on someone not in the room with [EXTERNAL DEPENDENCY]

  ## 5. Decisions Made
  Any decisions made during the retrospective (process changes, tool changes, team agreements).

  ## 6. Carry-Forward from Last Retro
  If any previous action items were mentioned: which were completed, which are still open, and which should be closed/deprioritized?

  ## 7. Mood and Team Health
  Based on the tone and content of the notes:
  - Overall team energy: Energized / Stable / Fatigued / Frustrated / Uncertain
  - Areas of strength in team health: [collaboration, communication, clarity, trust, workload]
  - Areas of concern: [same dimensions]
  - Any signals that require manager attention (without attributing to specific individuals)?

  ## 8. What to Focus On Next Period
  Based on the full analysis, what are the 1–3 most important things this team should focus on improving in the next cycle? This is your editorial recommendation — not just a list of everything.
variables:
  - "{{team_name}}"
  - "{{retro_type}}"
  - "{{period_covered}}"
  - "{{facilitator}}"
  - "{{participant_count}}"
  - "{{raw_notes}}"
  - "{{retro_format}}"
  - "{{team_context}}"
exampleInput: |
  team_name: Growth Engineering
  retro_type: Sprint retrospective (Sprint 28)
  period_covered: October 7–18, 2024 (2-week sprint)
  facilitator: Elena Vasquez (EM)
  participant_count: 7
  retro_format: Start/Stop/Continue
  team_context: Team recently grew from 4 to 7 engineers. Two new engineers joined mid-sprint. Product-engineering relationship has been strained since a missed Q3 deadline.
  raw_notes: |
    START:
    - daily standup with video on, not just chat
    - pairing on complex tickets before starting
    - sharing blockers earlier - people sit on them too long
    - asking for help sooner
    - more realistic sprint planning (we keep over-committing)
    - writing better ticket descriptions before sprint starts

    STOP:
    - late-breaking scope changes from product mid-sprint
    - emergency Slack pings outside work hours
    - scope creep - "while I'm in there" mentality
    - overloading the sprint with tech debt AND feature work

    CONTINUE:
    - Thursday team lunches (people really like them)
    - async design review process
    - being honest in standups about what's blocked
    - celebrating small wins more
    - knowledge sharing sessions (first one was great)
exampleOutput: |
  # Retrospective Summary: Growth Engineering — Sprint 28
  **Date:** October 18, 2024 | **Facilitator:** Elena Vasquez | **Participants:** 7

  ## 1. Executive Summary
  This retrospective had an honest, constructive tone — the team is willing to name what's not working, which is a healthy sign. The dominant themes were sprint planning accuracy and mid-sprint disruption from scope changes. The most significant commitment is to establish a scope-freeze policy with Product before next sprint begins. Two new team members contributed meaningfully, suggesting good initial integration.

  ## 2. What Went Well

  **Team culture and psychological safety**
  Engineers are being honest in standups about blockers and appreciate the space to do so. Thursday lunches and the first knowledge-sharing session both received strong positive mentions — the team values connection.

  **Async collaboration tools**
  The async design review process is working well and worth protecting as the team scales.

  **Openness to change**
  The team is actively generating improvement ideas, not just complaints — this is a positive signal.

  ## 3. What Needs Improvement

  **Sprint planning realism** [Priority: High] [Recurring]
  The team consistently over-commits to sprint capacity. Root cause: estimates don't account for onboarding, context-switching, and the hidden cost of mixing tech debt with feature work. This pattern likely worsened with the team's recent growth from 4 to 7.

  **Mid-sprint scope changes from Product** [Priority: High] [Recurring]
  Scope changes arriving mid-sprint are disrupting flow and contributing to missed commitments. Root cause: insufficient upfront alignment on sprint goals between Product and Engineering before the sprint begins. This is likely connected to the strained product-engineering relationship.

  **Slow escalation of blockers** [Priority: Medium] [New]
  Engineers are sitting on blockers too long before surfacing them. Root cause: unclear expectation about when to ask for help; new team members may be hesitant to appear stuck.

  **Out-of-hours communication** [Priority: Medium] [New]
  Emergency Slack pings outside work hours are creating stress. Root cause: no defined on-call policy or escalation expectation has been set.

  ## 4. Action Items

  | # | Action | Owner | Due Date | Success Metric | Priority |
  |---|--------|-------|----------|----------------|----------|
  | 1 | Define and document a sprint scope-freeze policy (no scope changes after Day 2 without EM approval) | Elena Vasquez | Sprint 29 planning | Zero mid-sprint scope changes in Sprint 29 | High |
  | 2 | Introduce ticket description template in Jira (required fields before sprint planning) | Dev lead (Marcus) | Oct 25 | 100% of tickets have description before sprint start | High |
  | 3 | Facilitate sprint planning with Product PM present to align on goals before sprint begins | Elena Vasquez | Sprint 29 | PM signs off on sprint goal at planning meeting | High |
  | 4 | Establish explicit "blocker escalation" norm: if blocked >2 hours, post in #team-blocked | Elena Vasquez | Oct 22 (team announcement) | No blocker sits >2 hours without visibility | Medium |
  | 5 | Set team policy on off-hours Slack: only ping for P0 incidents | Elena Vasquez | Oct 22 | No off-hours pings in Sprint 29 except P0s | Medium |
  | 6 | Continue Thursday team lunches — schedule through end of year | Team coordinator | Oct 25 | Lunches scheduled on calendar | Low |

  ## 7. Mood and Team Health
  - **Overall energy:** Stable, leaning toward cautious optimism
  - **Strengths:** Honesty in communication, team connection, willingness to surface issues
  - **Concerns:** Workload (mixing tech debt + features), clarity on expectations (blocker escalation, off-hours)
  - **Manager attention signal:** The strained product-engineering dynamic was implicit in multiple comments. A direct 1:1 or tripartite conversation between Elena, the PM, and leadership may be warranted before Sprint 29.

  ## 8. Focus for Next Sprint
  1. **Scope discipline:** The sprint scope-freeze policy is the single highest-leverage change. Test it for one sprint before adding complexity.
  2. **Onboarding integration:** With two new engineers, invest in pairing and knowledge sharing early — this is the right time to set cultural norms.
  3. **Product relationship:** Address the mid-sprint scope change dynamic directly with Product leadership — this will keep recurring until there's explicit agreement.
tips:
  - "The 'What to Focus On' section requires editorial judgment — resist the urge to list everything. The team can only genuinely focus on 1–3 things. If you try to fix 12 things at once, you fix nothing."
  - "Action items without owners and due dates are wishes, not commitments. Every single action must have a named human responsible."
  - "If the same themes appear in multiple consecutive retrospectives, flag this explicitly — recurring issues need structural solutions, not incremental tweaks."
  - "Share the summary with the full team within 24 hours of the retro while the energy is still present. Delayed distribution kills momentum."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - meeting-notes-summary
  - meeting-agenda
  - status-update
  - post-launch-review
tags:
  - retrospective
  - agile
  - team-management
  - continuous-improvement
  - project-management
---
