---
title: "Summarize affinity mapping results into themes"
slug: affinity-map-summary
function: product
role: user-research
description: "Transform raw affinity mapping output — clusters of notes, observations, and quotes — into a structured thematic summary with evidence and implications."
useCase: "Use this prompt after an affinity mapping session when you have clusters of sticky notes, observations, or data points and need to write up the themes clearly. Works for research synthesis, design sprint output, and retrospective findings."
prompt: |
  You are an expert UX researcher and qualitative analyst. Synthesize the affinity mapping output below into a structured thematic summary.

  **Research activity:** {{research_activity}} (e.g., user interviews, usability tests, diary study, contextual inquiry)
  **Number of data points clustered:** {{data_point_count}}
  **Number of participants:** {{participant_count}}
  **Research question:** {{research_question}}
  **Raw clusters and their contents:** {{cluster_data}}
  **Context:** {{context}}

  Produce a thematic summary with these sections:

  ## 1. Overview
  - Total data points, participants, clusters identified
  - Method of clustering (who participated, how long)
  - Confidence note (what sample size and method mean for confidence)

  ## 2. Themes
  For each theme identified in the affinity map:

  **Theme [Number]: [Theme Name — a declarative noun phrase, not a question]**
  - **Description:** 2–3 sentences explaining what this theme is about and what it reveals
  - **Frequency:** How many data points cluster here? How many participants contributed?
  - **Representative observations:** 3–5 specific quotes or observations from the data
  - **Subthemes (if applicable):** Distinct patterns within this theme
  - **Why it matters:** The implication for design, product, or business decisions
  - **Tension:** Any contradictory data within this theme

  ## 3. Cross-Theme Patterns
  What patterns appear across multiple themes?
  - Reinforcing patterns (two themes that point to the same underlying issue)
  - Contradictions (two themes that seem to conflict — and what this means)
  - Surprising connections (unexpected relationships between themes)

  ## 4. Outlier Observations
  Data points that didn't fit cleanly into any cluster — but may be important:
  - The observation
  - Why it didn't cluster
  - Whether it's worth investigating further

  ## 5. Key Findings (3–5 bullets)
  The most important things someone should know from this affinity map if they only have 2 minutes. Prioritized by impact and frequency.

  ## 6. Implications and Recommended Next Steps
  What should the team do with these findings?
  - Design implications
  - Product decisions these inform
  - Research gaps that need follow-up
  - Open questions surfaced by the themes
variables:
  - "{{research_activity}}"
  - "{{data_point_count}}"
  - "{{participant_count}}"
  - "{{research_question}}"
  - "{{cluster_data}}"
  - "{{context}}"
exampleInput: |
  research_activity: 8 moderated user interviews
  data_point_count: 96 observations on sticky notes
  participant_count: 8
  research_question: What prevents HR managers from actively using their employee survey results to take action?
  context: Beacon engagement platform — users run surveys but data shows <20% of users take any visible action after viewing results
  cluster_data: |
    Cluster A: "I don't know what to do with the numbers" / "The scores don't tell me the next step" / "I see 6.8/10 and I don't know if that's good or bad" / "I wish it told me what to focus on" / "What's the benchmark for this score?"
    Cluster B: "I shared the results with leadership but nothing happened" / "My CEO asked 'so what?' and I didn't have an answer" / "Without exec buy-in, I can't change anything" / "HR can't fix culture alone"
    Cluster C: "I'm worried employees will know I'm looking at their feedback" / "What if someone figures out who said what?" / "My team is small — it's not really anonymous" / "I tell people it's anonymous but I'm not 100% sure"
    Cluster D: "I want to share results with managers but I don't know how" / "Managers don't have access to the dashboard" / "I have to export to a CSV and email it — that's annoying" / "If managers could see their own team's scores, they'd act on it"
    Cluster E: "I run the survey then just... life gets busy" / "I check the results once and then forget" / "No one is reminding me to follow up" / "I meant to do something but three weeks passed"
exampleOutput: |
  # Affinity Map Summary: Why HR Managers Don't Act on Survey Results
  **Data:** 96 observations | **Participants:** 8 HR managers | **Method:** Collaborative affinity mapping (2-hour session with PM + Design)

  ## 2. Themes

  **Theme 1: Results Without Context Feel Meaningless**
  *Frequency: ~22 data points | Participants: 7/8*

  HR managers see scores in the dashboard but lack the context to interpret them. A score of 6.8/10 doesn't tell them whether it's good, bad, concerning, or normal for their industry. Without benchmarks or explicit guidance, results feel like data — not insight. This leads to paralysis: if you don't know what to do with a number, you do nothing.

  Representative observations:
  - "I see 6.8/10 and I don't know if that's good or bad."
  - "The scores don't tell me the next step."
  - "I wish it told me what to focus on first."

  Why it matters: This is the most common theme and likely the primary driver of inaction. Adding benchmarks, context, and explicit "here's what to do" guidance may be the single highest-leverage product change.

  ---

  **Theme 2: HR Can't Act Without Executive Backing**
  *Frequency: ~18 data points | Participants: 6/8*

  Even when HR managers understand the results, they can't act unilaterally. Cultural and organizational changes require executive sponsorship. Several participants described sharing results with leadership and receiving either indifference or the dreaded "so what?" question without having a clear answer to give.

  Representative observations:
  - "My CEO asked 'so what?' and I didn't have an answer."
  - "Without exec buy-in, I can't change anything."
  - "HR can't fix culture alone."

  Why it matters: Beacon currently optimizes for the HR user's experience. But if HR can't get leadership support, survey results never translate to action regardless of how good the product is. An "executive summary" view designed for CEO/leadership consumption may unlock a critical blocker.

  ---

  **Theme 3: Anonymity Doubts Undermine Honest Responses**
  *Frequency: ~15 data points | Participants: 5/8*

  Participants expressed genuine uncertainty about whether their surveys are truly anonymous, especially at small companies where a team of 12 makes it easy to guess who said what. Several participants said they tell their employees the surveys are anonymous — but are personally uncertain this is true, which erodes trust in the data.

  Representative observations:
  - "My team is small — it's not really anonymous."
  - "I tell people it's anonymous but I'm not 100% sure."

  Why it matters: If HR managers don't trust that results are honest, they lose confidence in the data. And employees who don't believe the survey is anonymous give socially desirable responses that make the data useless.

  **Tension:** Two participants in larger companies (300+ employees) didn't raise this concern at all — this theme may be size-dependent.

  ---

  **Theme 4: Managers Are Excluded From Their Own Team's Data**
  *Frequency: ~24 data points | Participants: 6/8*

  HR managers want to share survey results with people managers — the people most able to act on team-level feedback. But the current product makes this hard: managers don't have dashboard access, and sharing requires manual CSV export and email. This friction means managers rarely see results, and so rarely act.

  Representative observations:
  - "If managers could see their own team's scores, they'd act on it."
  - "I have to export to a CSV and email it — that's annoying."

  Why it matters: The planned Manager Dashboard feature maps directly to this theme. This data provides strong validation for that roadmap item.

  ---

  **Theme 5: No System Keeps HR Accountable to Follow Through**
  *Frequency: ~17 data points | Participants: 5/8*

  After running a survey, HR managers check results once and then move on to other priorities. No reminders, no follow-up prompts, no accountability structure brings them back to the data. "Life gets busy" is a symptom of a product that doesn't help users build the follow-through habit.

  Representative observations:
  - "No one is reminding me to follow up."
  - "I meant to do something but three weeks passed."

  Why it matters: This suggests a product design pattern — proactive notifications, recommended actions, and accountability check-ins — could be high-value even if technically simple.

  ## 5. Key Findings
  1. Scores without benchmarks and guidance create inaction — 7/8 participants can't interpret their results without context
  2. Managers are the missing link between data and action — but have no product access today
  3. Executive alignment is a prerequisite for any organizational action — HR can't move culture alone
  4. Anonymity concerns are undermining data quality, especially at companies under 200 employees
  5. Without a follow-through system, good intentions evaporate within a week of survey close

  ## 6. Implications
  - **Highest priority:** Add benchmark context and explicit "what to do next" guidance to the results view (Theme 1)
  - **Confirms roadmap:** Manager Dashboard directly addresses Theme 4 — this research strengthens the case
  - **New consideration:** An "executive summary" view designed for leadership consumption may be needed to break the buy-in blocker (Theme 2)
  - **Follow-up research needed:** Anonymity perceptions need a dedicated study — the stakes (data integrity) are too high to act on 5 interviews
tips:
  - "Theme names should be declarative statements ('Results Without Context Feel Meaningless') not labels ('Context Problems'). Statements communicate the finding; labels require interpretation."
  - "Always include the frequency count (7/8 participants) with each theme. It prevents overweighting themes that only one participant raised."
  - "The 'Cross-Theme Patterns' section is where the most interesting insights often live — look for two themes that together reveal something neither says alone."
  - "Run affinity mapping collaboratively with at least one other person. Themes that emerge from group discussion are more robust than those a single researcher identifies alone."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - interview-synthesis
  - research-plan
  - ux-research-report
  - usability-test-script
tags:
  - affinity-mapping
  - qualitative-research
  - user-research
  - thematic-analysis
  - ux-research
---
