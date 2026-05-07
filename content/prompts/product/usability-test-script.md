---
title: "Write a moderated usability test script"
slug: usability-test-script
function: product
role: user-research
description: "Generate a complete moderated usability test script with facilitator instructions, warm-up questions, tasks, probes, and debrief questions."
useCase: "Use this prompt when preparing to run a moderated usability test. A well-structured script ensures consistent facilitation across sessions, prevents leading questions, and produces data you can actually compare and synthesize."
prompt: |
  You are an expert UX researcher and usability test facilitator. Write a complete moderated usability test script for the study described below.

  **Product being tested:** {{product_name}}
  **Feature or flow being tested:** {{feature_flow}}
  **Key research questions:** {{research_questions}}
  **Participant type:** {{participant_type}}
  **Session duration:** {{session_duration}}
  **Session format:** {{session_format}} (in-person / remote Zoom / unmoderated)
  **Tasks to test:** {{tasks_to_test}}
  **What a successful task completion looks like:** {{success_criteria}}
  **Known areas of concern:** {{known_concerns}}

  Write a complete usability test script with these sections:

  ## 1. Facilitator Guide (Pre-Session)
  Instructions for the facilitator to follow before the participant joins:
  - Environment setup checklist
  - Tech check steps
  - What to have ready
  - Observer briefing notes (if observers are present)

  ## 2. Introduction Script
  Word-for-word introduction to read or paraphrase to the participant. Must include:
  - Welcome and thanks
  - Explanation of what you're testing (the product, not them)
  - Permission to record (and what the recording will be used for)
  - The "think aloud" instruction — explain this clearly with a brief practice example
  - Clarification that there are no wrong answers
  - Note that they can stop at any time
  - Encouragement to be critical — positive feedback doesn't help us improve

  **Sample practice think-aloud:** [Include a brief everyday example unrelated to the product]

  ## 3. Warm-Up Questions (5–8 minutes)
  Open-ended questions to:
  - Build rapport with the participant
  - Gather context about their role and relevant behavior
  - Learn about their current workflow (before seeing the product)
  - Surface assumptions and mental models

  For each question: the question text, and a facilitator note on what you're listening for.

  ## 4. Tasks
  For each task (typically 3–6 tasks in a 60-minute session):

  **Task [Number]: [Task name]**

  **Scenario (read aloud):** A naturalistic scenario that gives the participant a reason to complete the task. Scenarios should:
  - Be realistic and relevant to the participant's life
  - Not include product-specific jargon or terminology
  - Not hint at where to find the answer or what to click

  **Task instruction (read aloud):** The specific action you're asking them to complete.

  **Success criteria:** [For facilitator only — what counts as task completion]

  **Time limit:** [Recommended maximum time before prompting or moving on]

  **Facilitator prompts (if participant is stuck):**
  - Level 1 prompt (after 2 minutes): [Non-leading nudge]
  - Level 2 prompt (after 3 more minutes): [Slightly more directive]
  - Give up criteria: [When to abandon the task]

  **Probing questions (ask after each task):**
  - What were you expecting to find there?
  - What would you call that [element they struggled with]?
  - Is this what you expected?
  - How would you describe what just happened?
  - [Task-specific probe based on the known concern for this flow]

  **Observation notes template:**
  - Completed: Yes / No / With help
  - Time: ___
  - Error count: ___
  - Key observations:

  ## 5. Post-Task Questions (After All Tasks)
  Questions asked after all tasks are complete:
  - Overall impressions
  - Comparison to current tool/process
  - Any surprises
  - Anything they'd want changed

  ## 6. Debrief and Closing
  - SUS (System Usability Scale) or brief rating if applicable
  - Open floor for anything they want to share
  - Thank you and next steps (when they'll receive incentive)
  - Any questions for the team to consider (add team questions here before each session)

  ## 7. Session Notes Template
  A structured observation template for the note-taker (if one is present) to fill in during each task.
variables:
  - "{{product_name}}"
  - "{{feature_flow}}"
  - "{{research_questions}}"
  - "{{participant_type}}"
  - "{{session_duration}}"
  - "{{session_format}}"
  - "{{tasks_to_test}}"
  - "{{success_criteria}}"
  - "{{known_concerns}}"
exampleInput: |
  product_name: Beacon (employee engagement platform)
  feature_flow: New onboarding flow — from signup through first survey launch
  research_questions: What barriers prevent users from reaching their first survey launch? Where does confusion occur? What's missing from the current guidance?
  participant_type: HR managers at 100–500 person companies who have not used Beacon before
  session_duration: 55 minutes
  session_format: Remote Zoom with screen share
  tasks_to_test: |
    1. Create an account and complete initial setup
    2. Create and configure a pulse survey
    3. Add team members and set survey recipients
    4. Schedule and launch the survey
  success_criteria: |
    Task 1: User reaches the dashboard (account setup complete)
    Task 2: User configures a survey with at least 3 questions and a title
    Task 3: User adds at least 2 recipients
    Task 4: User successfully launches the survey (sees confirmation)
  known_concerns: Users may get confused by the "invite team members" step vs. "add survey recipients" — these are different but look similar. The survey template selection screen has too many options. The scheduling interface is not intuitive.
exampleOutput: |
  # Usability Test Script: Beacon Onboarding
  **Study:** Onboarding flow | **Duration:** 55 minutes | **Format:** Remote Zoom

  ## 1. Pre-Session Checklist
  - [ ] Test account created and confirmed working (email: test-participant-[N]@beacontest.com)
  - [ ] Zoom room open with recording enabled (with participant consent pending)
  - [ ] Backup test account ready in case of login issues
  - [ ] Note-taker briefed and observation template shared
  - [ ] Observers on mute, cameras off, instructed not to speak
  - [ ] Timer ready to track task times
  - [ ] Notepad for real-time observations

  ## 2. Introduction Script

  *[When participant joins]*

  "Hi [name], thank you so much for joining us today. My name is [facilitator name], and I'm a researcher on the product team. Joining me on the call is [note-taker name], who will be taking notes during our session — they won't be speaking, so you can direct everything to me.

  Before we start, I want to share a few things. First, we're testing the software today — not you. There are no wrong answers, and anything that seems confusing or broken is really helpful feedback for our team. The more honest you can be, the more you help us make things better.

  Second, I'd love for you to 'think aloud' during the session — this means saying what you're thinking, noticing, and feeling as you go. It might feel a little odd at first, but it's incredibly useful for us to hear your inner monologue.

  To practice, let's say you're about to make a cup of tea. You might think aloud like: 'Okay, I'm going to go to the kitchen... I'm looking for the kettle... I can't remember where I put the teabags last time...' Does that make sense? We want that kind of running commentary as you use the software.

  A few more things: you can stop at any time, take breaks, or tell me if something isn't working for you. And if you'd rather not answer a question, that's completely fine. [Pause]

  Do you have any questions before we start?

  With your permission, I'd like to record this session. The recording will only be used internally for research purposes — your name won't be shared. Is that okay? [Wait for verbal consent, then start recording]

  Great. Let's get started."

  ## 3. Warm-Up Questions

  **Q1: Can you tell me a little about your role? What does a typical day look like for you?**
  *Listen for: Company size, team structure, how much of their day is people-management vs. individual work*

  **Q2: How do you currently track how your team is feeling or what their morale is like?**
  *Listen for: Informal vs. formal methods, existing tools, frequency, pain points*

  **Q3: Have you ever run an employee survey or pulse check? What was that experience like?**
  *Listen for: Familiarity with surveys, past tools used, what went well or poorly — important baseline*

  **Q4: What tools do you currently use to manage your team or communicate internally?**
  *Listen for: Tech comfort, tool familiarity, potential mental model conflicts*

  ---

  ## 4. Tasks

  ### Task 1: Account Setup
  **Scenario (read aloud):** "Imagine you've just heard about Beacon from a colleague and decided to try it out for your team. I've given you a link to get started. Please go ahead and sign up and get set up — just do what feels natural."

  **Task instruction:** "Please go ahead and create your account using the link I'll share in the chat."

  **Success:** User reaches the main dashboard
  **Time limit:** 8 minutes

  **Prompts:**
  - Level 1 (2 min): "What are you looking for right now?"
  - Level 2 (3 more min): "Is there anything on the page that might help you move forward?"

  **Post-task probes:**
  - "How did that feel overall?"
  - "Was there anything you expected to see that you didn't find?"
  - "What would you call that first screen you saw after signing up?"

  *[Known concern: Watch for confusion on the "invite your team" step — are they inviting teammates as users or as survey recipients?]*

  ### Task 2: Create a Pulse Survey
  **Scenario (read aloud):** "Now that you're set up, you want to send a quick pulse survey to your team to check in on how they're doing after last month's reorg. Let's see how you'd go about creating that survey."

  **Task instruction:** "Please create a new survey for your team."

  **Success:** Survey has a title, at least 3 questions, and is in a state where it could be sent
  **Time limit:** 10 minutes

  **Prompts:**
  - Level 1 (3 min): "What are you trying to accomplish right now?"
  - Level 2 (3 more min): "Take a look around the page — is there anything that might help you create a survey?"
  - Give up: After 10 minutes regardless of completion

  **Post-task probes:**
  - "How did that compare to what you expected?"
  - "There were a lot of template options there — what was going through your mind when you saw them?"
  - "What would you have done differently if you were setting this up for real?"

  *[Known concern: Template selection screen — note which template they choose and whether they read descriptions or just look at titles]*

  ---

  ## 5. Post-Task Questions

  "Now that you've gone through the main parts of the product, I have a few broader questions."

  1. "If you had to describe Beacon to a colleague who hadn't seen it, what would you say it does?"
  2. "What was the most confusing moment for you today?"
  3. "Was there anything that surprised you — in a good or bad way?"
  4. "Is there anything you'd want to see before using this with your actual team?"

  ## 7. Session Notes Template

  | Task | Completed | Time | Error Count | Key Moments | Verbatim Quotes |
  |------|-----------|------|-------------|-------------|-----------------|
  | 1. Account setup | Y/N/partial | ___ | ___ | | |
  | 2. Create survey | Y/N/partial | ___ | ___ | | |
  | 3. Add recipients | Y/N/partial | ___ | ___ | | |
  | 4. Launch survey | Y/N/partial | ___ | ___ | | |
tips:
  - "The think-aloud instruction is the most important part of the introduction. Practice examples from everyday life (making tea, searching for a restaurant) work better than product examples."
  - "Write scenarios that give participants a realistic reason to complete the task — not just 'click the survey button.' Motivation changes behavior."
  - "Prepare Level 1 and Level 2 prompts for each task before the session. In the moment, it's easy to accidentally lead participants — having non-leading prompts ready prevents this."
  - "Pilot the script with one internal run-through before the first real session. You'll always find at least one task that's too long or a question that's confusing."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - research-plan
  - screener-survey
  - interview-synthesis
  - ux-research-report
tags:
  - usability-testing
  - user-research
  - ux-research
  - facilitation
  - product-design
---
