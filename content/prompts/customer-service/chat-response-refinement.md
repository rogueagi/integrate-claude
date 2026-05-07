---
title: "Improve the tone and clarity of a draft chat response"
slug: chat-response-refinement
function: customer-service
role: support
description: "Refine a draft support chat response to improve empathy, clarity, and professionalism while preserving the rep's voice and intent."
useCase: "Use this prompt as a quality improvement tool for support teams — paste in a draft chat response and get back a refined version with specific suggestions. Useful for training new reps, QA review, or when a response feels off but you're not sure why."
prompt: |
  You are a customer experience expert and communication coach. Improve the following draft customer support chat response.

  Context:
  - Customer's message: {{customer_message}}
  - Support rep's draft response: {{draft_response}}
  - Issue type: {{issue_type}}
  - Correct resolution (if the draft is factually accurate): {{is_accurate}} (yes/no — and if no, what's correct)
  - Desired tone: {{desired_tone}} (e.g., warm and direct, professional and empathetic, casual but helpful)

  Review the draft and provide:

  ## 1. Issues Identified
  List any specific problems with the draft:
  - Tone issues (too cold, too formal, too casual, condescending, dismissive)
  - Clarity issues (confusing instructions, jargon, ambiguity)
  - Empathy gaps (fails to acknowledge customer's frustration or situation)
  - Factual errors (if {{is_accurate}} is no)
  - Missing elements (didn't answer the full question, no next step, etc.)
  - Length issues (too long for a chat context, or too brief to be helpful)

  ## 2. Improved Response
  A rewritten version of the draft that:
  - Fixes all identified issues
  - Preserves any parts of the draft that worked well
  - Maintains an appropriate length for chat (under 100 words unless complexity requires more)
  - Ends with a clear next step or invitation for follow-up

  ## 3. What Changed and Why
  A brief coaching note (3–5 bullet points) explaining the key changes and the principle behind each. This is for rep development, not just a fix.
variables:
  - "{{customer_message}}"
  - "{{draft_response}}"
  - "{{issue_type}}"
  - "{{is_accurate}}"
  - "{{desired_tone}}"
exampleInput: |
  customer_message: "I've been waiting 20 minutes on chat and I still can't figure out how to export my data. This is really frustrating."
  draft_response: "Hello! I'm sorry for the wait. To export your data, please navigate to the dashboard and click on the export button which will allow you to download your data in CSV or Excel format. Please let me know if you need further assistance."
  issue_type: how-to question combined with frustration about wait time
  is_accurate: yes, the instructions are correct
  desired_tone: warm, direct, and apologetic without being groveling
exampleOutput: |
  ## 1. Issues Identified
  - **Empathy gap:** The response acknowledges the wait but moves past it too quickly with a perfunctory "I'm sorry." A 20-minute wait and visible frustration deserve more genuine acknowledgment before jumping to instructions.
  - **Tone: too formal for chat:** "Please navigate to the dashboard" is unnecessarily formal for a live chat context. "Head to your dashboard" or "Go to your dashboard" is warmer and more natural.
  - **Closing is generic:** "Please let me know if you need further assistance" is the most overused closing in customer support. It adds nothing and signals the end of engagement.
  - **Length is appropriate** — instructions are clear and concise.

  ## 2. Improved Response
  Twenty minutes is a long time to wait — I'm sorry about that, and I want to get this resolved for you quickly.

  To export your data: go to your dashboard, and you'll see an **Export** button in the top right of any widget or on the full dashboard view. It'll download as CSV or Excel — your choice.

  Does that get you what you need, or is there a specific dataset you're trying to export? Happy to walk you through it.

  ## 3. What Changed and Why
  - **Extended the empathy before the instructions.** When a customer names their frustration, acknowledge it fully before moving to the solution. "I want to get this resolved for you quickly" bridges empathy and efficiency.
  - **Made the language more conversational.** "Go to your dashboard" instead of "please navigate" — chat is a conversational format; formal language creates unnecessary distance.
  - **Ended with a question instead of a closer.** "Does that get you what you need?" keeps the conversation open and signals you're present. This is especially important after a long wait — the customer may have follow-up frustrations.
  - **Bolded the UI element.** "**Export** button" makes it immediately scannable in a chat window.
  - **Cut "please let me know if you need further assistance."** This is a conversational dead-end. Replace it with a specific question or genuine offer.
tips:
  - "Use this prompt as a training tool for new support reps — have them draft a response first, then run it through this prompt and review the coaching notes together."
  - "For QA review, run your top 20 tickets from last month through this prompt to identify systematic patterns in your team's response style."
  - "The coaching notes section is the most valuable output for rep development. Don't just share the improved response — share the 'why' so reps internalize the principles."
  - "Chat and email require different tones. Chat should be more conversational and faster-paced. If you're importing email-style language into chat responses, this prompt will catch it."
  - "Ask Claude to rate the original draft on a 1–5 scale before suggesting improvements — this gives you a benchmark for tracking team improvement over time."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - ticket-response-draft
  - macro-response-set
  - de-escalation-response
tags:
  - chat
  - response-quality
  - coaching
  - support
  - tone
---
