---
title: "Generate reference check questions for a specific role"
slug: reference-check-questions
function: hr
role: recruiting
description: "Generate a structured set of reference check questions tailored to a specific role that go beyond confirming employment dates and surface real information about how a candidate performs."
useCase: "Use this prompt before calling a reference for a finalist candidate. Generic reference checks ('would you rehire them?') produce generic answers. This prompt generates questions that are specific to the role, reveal meaningful patterns in the candidate's work style, and help you identify the management approach that will help them succeed."
prompt: |
  You are a recruiter or hiring manager preparing for a reference check call for a finalist candidate.

  Context:
  - Candidate name: {{candidate_name}}
  - Role they're being considered for: {{role_title}}
  - Key responsibilities of the role: {{role_responsibilities}}
  - Reference type: {{reference_type}} (former manager, former peer, former direct report — different questions for each)
  - Specific strengths observed in interviews: {{interview_strengths}} (what you observed — reference should confirm or contextualize)
  - Specific concerns from interviews: {{interview_concerns}} (what you want to probe — ask about these without telegraphing the answer)
  - Dealbreakers you're checking for: {{dealbreakers}}

  Generate a reference check script with:

  ## Opening and Relationship Confirmation
  How to open the call, confirm the relationship, and set the context.

  ## Performance and Impact Questions (4–5 questions)
  Questions about what the candidate accomplished in their role — specific, evidence-seeking questions, not "were they good at their job?"

  ## Working Style and Collaboration Questions (3–4 questions)
  How did they operate? How did they work with others? What's their default communication style under pressure?

  ## Development and Growth Questions (2–3 questions)
  What did they improve at? What feedback did they receive? What would they still be working on if they stayed?

  ## Role-Specific Competency Questions (2–3 questions)
  Questions tied specifically to the role they're being hired for — not generic reference questions.

  ## Management Approach Questions (for managers hiring the candidate)
  What management style works best for them? What doesn't work?

  ## Rehire and Closing Questions
  The rehire question, plus one open-ended question that often surfaces the most useful information.

  Include guidance on how to probe for more specific answers when a reference gives a vague or overly positive response.
variables:
  - "{{candidate_name}}"
  - "{{role_title}}"
  - "{{role_responsibilities}}"
  - "{{reference_type}}"
  - "{{interview_strengths}}"
  - "{{interview_concerns}}"
  - "{{dealbreakers}}"
exampleInput: |
  candidate_name: Jordan Rivera
  role_title: Senior Account Executive
  role_responsibilities: Full-cycle sales, outbound prospecting, VP+ buyer relationships, forecast accuracy, CS handoffs
  reference_type: Former manager
  interview_strengths: Strong discovery skills, very organized pipeline management, excellent communicator, demonstrated enterprise close experience
  interview_concerns: Struggled to give specific numbers on quota attainment for one role (attributed to "bad territory"); said they prefer inbound to outbound but acknowledge outbound is required here
  dealbreakers: History of misrepresenting quota attainment; unwillingness to self-source; poor Salesforce hygiene
exampleOutput: |
  # Reference Check Guide — Jordan Rivera
  **Role: Senior Account Executive | Reference: Former Manager**

  ---

  ## Opening and Relationship Confirmation

  *"Hi [Reference Name], thank you for taking the time to speak with me. I'm [Your Name] from Anchor Analytics — we're in the final stages of a hiring process with Jordan Rivera for a Senior Account Executive role.

  Before we dive in, can you confirm the nature of your relationship with Jordan — your role, Jordan's role, and the timeframe you worked together?*

  [Listen for confirmation of the role relationship — particularly whether this was a direct reporting relationship or a more distant management relationship. More direct = more useful signal.]

  *"I have about 20 minutes of questions — is this still a good time?"*

  ---

  ## Performance and Impact Questions

  **Q1: "How did Jordan perform relative to quota during the time you worked together? Can you give me specific numbers if you have them?"**

  *What you're listening for:* Specific percentages and dollar amounts. Vague answers ("Jordan was a solid performer") from a direct manager are a yellow flag — managers know their reps' numbers.

  *If the answer is vague:* "I understand there may be confidentiality constraints, but can you tell me whether Jordan was in the top third, middle third, or bottom third of your AE team?"

  *Connection to interview:* Jordan was unable to provide specific numbers for one role — this is the check.

  ---

  **Q2: "What were Jordan's most significant wins during your time together — specific deals or accounts that stand out?"**

  *What you're listening for:* Named accounts, approximate sizes, and the reference's recollection of what Jordan specifically did to win them. Details signal that the reference actually worked closely with Jordan.

  *If the answer is generic:* "Can you walk me through one specific deal — who the buyer was, what the challenge was, and what Jordan did that made the difference?"

  ---

  **Q3: "How did Jordan approach building pipeline? What percentage of their book came from self-sourced deals vs. inbound or SDR-passed opportunities?"**

  *What you're listening for:* This is the key check on Jordan's outbound concern. A manager who worked closely with Jordan will know this breakdown — or will at least have a directional sense. A vague answer here is meaningful.

  *If vague:* "Did you ever have a concern about Jordan's ability to self-source? Did you have conversations about pipeline generation?"

  ---

  **Q4: "What was Jordan's forecast accuracy like? Did their pipeline represent what actually closed?"**

  *What you're listening for:* Whether the reference can recall specific patterns — consistent overforecast, sandbagging, or reliable accuracy. Consistent overforecast from a manager reference is a dealbreaker signal.

  *If positive:* "Can you give me an example of a quarter where Jordan's forecast was particularly accurate or particularly off? What drove that?"

  ---

  ## Working Style and Collaboration Questions

  **Q5: "How would you describe Jordan's communication style with customers — specifically at the VP or executive level?"**

  *What you're listening for:* Specific examples of Jordan's approach with executive buyers. Do they rise to the level of the conversation, or do they default to feature demos?

  ---

  **Q6: "How did Jordan handle pressure — particularly toward the end of a quarter when deals weren't closing as expected?"**

  *What you're listening for:* Self-management under stress. Some AEs get sloppy, some get desperate, some get disciplined. You want the last one.

  *If the answer is overly positive:* "Can you think of a specific situation where a quarter looked like it wasn't going to close — what did Jordan do?"

  ---

  **Q7: "What was Jordan's working relationship like with the customer success or account management team after a deal closed?"**

  *What you're listening for:* Whether Jordan treated handoffs as important or as "not my problem anymore." CS handoff quality is a dealbreaker indicator.

  ---

  ## Development and Growth Questions

  **Q8: "What feedback did you give Jordan regularly? What were the areas where they were working to improve?"**

  *What you're listening for:* A specific, real development area from the manager's perspective. References who claim the candidate had no development areas are either covering or not credible.

  *If the answer is vague:* "Even high performers have areas they work on. What was the one piece of feedback you returned to most often with Jordan?"

  ---

  **Q9: "How did Jordan respond to feedback when you gave it?"**

  *What you're listening for:* Specific behavioral response — did they implement it, push back constructively, or get defensive? Ask for an example.

  ---

  ## Role-Specific Competency Questions

  **Q10: "This role involves a significant amount of outbound prospecting — the AE is expected to build a meaningful portion of their own pipeline. How comfortable do you think Jordan would be in that environment, and do you have direct observations of their outbound capability?"**

  *What you're listening for:* Direct confirmation or concern about the outbound flag from interviews. A strong reference will either validate the concern or provide specific counter-evidence.

  ---

  **Q11: "Jordan will be selling to VP of Finance and VP of Operations buyers at SaaS companies — often in complex, multi-stakeholder deals. Based on your experience with Jordan, how well do you think they navigate that kind of buyer complexity?"**

  *What you're listening for:* Specific examples of Jordan selling to similar buyers, or a reference's assessment of how they handle executive-level complexity.

  ---

  ## Management Approach Questions

  **Q12: "What management style works best for Jordan? What does she need from a manager to do her best work?"**

  *What you're listening for:* Specific preferences — weekly 1:1s, written feedback, autonomy, structured coaching. This helps you manage Jordan effectively from day one.

  *Follow-up:* "And what management approach would NOT work well for Jordan?"

  ---

  ## Rehire and Closing Questions

  **Q13: "If you had an open AE role on your team today, would you hire Jordan back? Is there any reason you wouldn't?"**

  *What you're listening for:* Enthusiasm level and any hesitation. A manager who genuinely wants to rehire will say so immediately. Hesitation, qualifications, or "we're a very different company now" are yellow flags.

  *If hesitation is present:* "It sounds like you might have some reservations — can you help me understand what those are?"

  ---

  **Q14: "Is there anything I haven't asked about that you think would be important for us to know as we make this decision?"**

  *What you're listening for:* This is often where the most important information surfaces. Don't skip it. Wait through the silence if there is one.

  ---

  ## Guidance on Probing Vague Answers

  When a reference gives a positive but vague answer ("Jordan is a fantastic communicator"), use these follow-ups:
  - "Can you give me a specific example of a situation where that showed up?"
  - "How did that compare to other AEs on your team?"
  - "Was there ever a situation where Jordan's communication style created a challenge?"

  The goal is to move from adjectives to behaviors. "Excellent communicator" is an assessment; "Jordan restructured the enterprise discovery call format and our win rates on enterprise went up 15%" is evidence.
tips:
  - "Always ask for specific examples when a reference gives you an adjective. 'Jordan is a great closer' tells you nothing. 'Jordan closed 4 enterprise deals in Q4 that were all late-stage' tells you something."
  - "The rehire question is the single most predictive reference question. Listen for the energy, not just the words. A reference who wants to rehire Jordan will sound excited — a reference who has reservations will sound careful."
  - "The final open question ('anything I haven't asked?') surfaces the most useful information about 30% of the time. Don't skip it, and don't rush it."
  - "When a reference is overly positive about everything, probe for development areas. References who claim a candidate had no weaknesses are either not credible or are being coached — either way, it reduces the value of the reference."
  - "Confirm who your candidate listed as references — and consider asking for references they didn't list. 'Do you know anyone else from Jordan's time at [Company] who I could speak with?' sometimes produces more candid perspectives."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - structured-interview-questions
  - interview-scorecard
  - offer-letter-draft
  - candidate-rejection-email
tags:
  - recruiting
  - reference-check
  - hiring
  - hr
  - interview
---
