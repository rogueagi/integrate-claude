---
title: "Write a customer discovery interview discussion guide"
slug: customer-interview-guide
function: customer-service
role: cx-research
description: "Generate a structured discussion guide for a customer discovery interview, with questions designed to surface real behavior, motivations, and unmet needs."
useCase: "Use this prompt before conducting qualitative customer interviews for product research, persona development, or voice-of-customer programs. A good discussion guide keeps interviews productive without making them feel scripted."
prompt: |
  You are a UX researcher and customer insights specialist. Create a customer discovery interview discussion guide.

  Interview context:
  - Research objective: {{research_objective}} (e.g., understand how ops leaders evaluate new tools, learn what triggers a switch from spreadsheet-based reporting)
  - Target interviewee profile: {{interviewee_profile}} (role, company type, company size)
  - Product or topic being researched: {{product_or_topic}}
  - Interview duration: {{duration}} minutes
  - Interview format: {{format}} (e.g., video call, in-person, phone)
  - Key hypotheses to validate or invalidate: {{hypotheses}}

  Write a discussion guide with these sections:

  ## Introduction Script (2–3 minutes)
  How to open the call: purpose, recording consent, how to explain that there are no right or wrong answers, how to set the tone. Written as a natural script, not bullet points.

  ## Warm-Up Questions (5 minutes)
  2–3 light questions to get the interviewee talking about their role and context before going deeper. Purpose: build rapport, establish their frame of reference.

  ## Core Questions by Theme (bulk of the interview)
  Organized into 3–4 thematic areas based on {{research_objective}}. For each theme:
  - A primary question (open-ended, behavioral not hypothetical)
  - 2–3 follow-up probes if the interviewee gives a surface-level answer
  - A note on what you're listening for

  Rules for question writing:
  - All questions are behavioral ("Tell me about a time when...") not hypothetical ("How would you...")
  - No leading questions ("Would you say you're frustrated with X?")
  - No yes/no questions unless they're a gateway to "tell me more"
  - Follow-up probes start with: "Can you say more about that?" "What did you do?" "How did that feel?" "Why was that?" "What happened next?"

  ## Closing Questions (5 minutes)
  2–3 questions to wrap up: anything they wish they'd been asked, anyone else you should talk to, willingness to follow up.

  ## Post-Interview Notes Template
  A short form the interviewer fills in immediately after the call: key insights, memorable quotes, hypothesis validation status, follow-up actions.
variables:
  - "{{research_objective}}"
  - "{{interviewee_profile}}"
  - "{{product_or_topic}}"
  - "{{duration}}"
  - "{{format}}"
  - "{{hypotheses}}"
exampleInput: |
  research_objective: understand what triggers operations leaders to look for a new BI or analytics tool, and what makes them choose one over another
  interviewee_profile: operations directors and VPs at mid-market companies (100–500 employees) who have evaluated or implemented a BI tool in the last 18 months
  product_or_topic: business intelligence tools for operations teams
  duration: 45
  format: video call (Zoom)
  hypotheses: |
    1. The trigger for evaluation is usually a specific failure event (missed deadline, reporting error) rather than proactive improvement
    2. Ease of setup without IT involvement is the most important evaluation criterion
    3. Most tools fail in implementation rather than evaluation
exampleOutput: |
  ## Introduction Script
  "Thank you for taking the time today. I'm doing research to understand how operations leaders think about their data and reporting needs — I'm not selling anything, and there are genuinely no right or wrong answers.

  I'm going to ask you about your actual experiences — things that happened, decisions you made, situations you faced. I'm much more interested in the real story than in what you think I want to hear.

  One thing I'd like to do is record this conversation so I can focus on our discussion rather than taking notes. Is that okay? The recording stays internal and won't be shared outside the research team.

  We have about 45 minutes — I'll try to leave a few minutes at the end for any questions you have. Ready to get started?"

  ## Warm-Up Questions
  1. "Tell me a bit about your role — what does a typical week look like for you?"
  2. "What are the most important metrics you're responsible for in your current role?"
  3. "How does your team currently share performance data internally?"

  ## Core Questions by Theme

  **Theme 1: The Moment of Dissatisfaction**
  Primary: "Tell me about a specific moment when you realized your current reporting approach wasn't working anymore."
  Probes: "What was happening in the business at that time?" / "What was the impact of that moment?" / "What did you do next?"
  Listen for: a specific triggering event (failure, growth inflection, personnel change); whether it was reactive or proactive; emotional charge (frustration, embarrassment, fear)

  **Theme 2: The Evaluation Process**
  Primary: "Walk me through what happened after you decided to look for a solution."
  Probes: "Who else was involved in evaluating options?" / "What were the two or three things that mattered most to you?" / "What made you most nervous about choosing the wrong tool?"
  Listen for: who the real decision-maker was; what criteria mattered vs. what they said mattered; the role of IT vs. the ops team in the decision

  **Theme 3: Implementation Reality**
  Primary: "Tell me about what happened once you started implementing [tool they chose]."
  Probes: "What was harder than you expected?" / "What almost made you give up?" / "What would you do differently if you were starting over?"
  Listen for: where implementations fail (data connectivity, adoption, configuration); whether IT involvement was a help or hindrance; the gap between demo and reality

  **Theme 4: Ongoing Experience**
  Primary: "How has your relationship with that tool changed in the time since implementation?"
  Probes: "Is it delivering what you expected?" / "What do you wish it did that it doesn't?" / "Have there been moments where it let you down?"
  Listen for: unmet expectations; workarounds they've developed; features they've stopped using; whether they'd recommend it

  ## Closing Questions
  1. "Is there anything you wish I'd asked you that I didn't?"
  2. "Is there anyone else in an ops role you think I should talk to who might have a different perspective?"
  3. "Would you be open to a brief follow-up if I have a clarifying question after today?"

  ## Post-Interview Notes Template
  - Interviewee name and company:
  - Key insight (the one thing that surprised me or changed my thinking):
  - Best quote (verbatim):
  - Hypothesis 1 status (validate / invalidate / unclear):
  - Hypothesis 2 status:
  - Hypothesis 3 status:
  - Follow-up actions:
  - Who else to talk to:
tips:
  - "The most common interview mistake is asking hypothetical questions ('Would you pay for X?'). People are notoriously bad at predicting their own future behavior. Ask about what they've actually done."
  - "Silence is your most powerful tool. After an interviewee finishes speaking, wait 3–5 seconds before responding. Most people will fill the silence with the most honest thing they're thinking."
  - "Fill in the post-interview notes immediately — within 15 minutes. Memory degrades fast, and the nuance you remember at minute 14 will be gone by hour 3."
  - "Run this guide with a colleague before real interviews — they'll spot questions that are leading, confusing, or too compound."
  - "After 5–6 interviews, run the interview-synthesis prompt to identify themes before conducting more. You'll often find you've already heard everything you need."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - survey-question-set
  - interview-synthesis
  - churn-interview-guide
  - persona-profile
tags:
  - research
  - customer-interview
  - discovery
  - cx
  - qualitative
---
