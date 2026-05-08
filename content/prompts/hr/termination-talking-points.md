---
title: "Prepare termination talking points"
slug: termination-talking-points
function: hr
role: people-ops
description: "Generate clear, structured talking points for a termination conversation that is honest, legally appropriate, and as respectful as possible."
useCase: "Use this prompt to prepare for a termination conversation. Termination meetings are among the hardest conversations managers have — and the ones most often handled poorly. This prompt structures the conversation so it is clear, brief, and leaves the employee with dignity."
prompt: |
  You are an HR business partner helping a manager prepare for a termination conversation.

  Context:
  - Employee name and role: {{employee_name_and_role}}
  - Manager: {{manager_name}}
  - Company: {{company_name}}
  - Termination type: {{termination_type}} (for cause / performance / layoff / restructuring)
  - Termination reason: {{reason}} (specific — what is the reason; do not include in the talking points themselves unless legally required)
  - Has a PIP been completed? {{pip_status}} (yes/no — affects what you say about the process)
  - Effective date: {{effective_date}}
  - Severance offered: {{severance}} (amount, terms, conditions — if applicable)
  - Benefits continuation: {{benefits}} (COBRA notice, last day of benefits, etc.)
  - Equipment return: {{equipment_return}} (what needs to be returned and how)
  - Reference policy: {{reference_policy}} (what the company will say if contacted)
  - Legal constraints: {{legal_constraints}} (any active litigation, NDA, non-solicit provisions, or state-specific requirements)
  - HR present: {{hr_present}} (will HR attend the termination meeting?)

  Write:

  ## Pre-Meeting Checklist
  What the manager and HR need to have ready before the meeting (paperwork, IT access revocation timing, etc.)

  ## Opening Statement (verbatim script)
  The first 2–3 sentences the manager says at the start of the meeting. Should state the purpose immediately — the employee should know this is a termination within the first 30 seconds.

  ## Core Message (talking points, not full script)
  The key points to cover:
  - The decision and its effective date
  - Brief reference to the reason (without opening a debate)
  - What happens with compensation and benefits
  - Next steps for the employee (paperwork, equipment, reference)

  ## What NOT to Say
  5 specific phrases or approaches to avoid — and why each is problematic (legally or humanly).

  ## Likely Employee Reactions and How to Respond
  3–4 common reactions (shock, anger, negotiation, breakdown) with guidance on how to respond with empathy and without reopening the decision.

  ## Closing (verbatim script)
  How to close the meeting and what happens next.

  ## Immediately After the Meeting
  What the manager and HR do in the next 60 minutes — IT access, team communication, HR documentation.

  Tone: factual and humane. The conversation should be brief (10–15 minutes), clear, and dignified. It is not a negotiation, a debate, or a performance review.

  Legal disclaimer: Include a reminder that this document is a preparation guide, not legal advice, and should be reviewed by employment counsel for jurisdictions with specific termination notice requirements.
variables:
  - "{{employee_name_and_role}}"
  - "{{manager_name}}"
  - "{{company_name}}"
  - "{{termination_type}}"
  - "{{reason}}"
  - "{{pip_status}}"
  - "{{effective_date}}"
  - "{{severance}}"
  - "{{benefits}}"
  - "{{equipment_return}}"
  - "{{reference_policy}}"
  - "{{legal_constraints}}"
  - "{{hr_present}}"
exampleInput: |
  employee_name_and_role: Alex Thompson, Account Executive
  manager_name: James Wu, VP of Sales
  company_name: Anchor Analytics
  termination_type: For cause — performance (following failed PIP)
  reason: Failed to meet PIP goals; outbound activity remained below standard, Q2 ARR was $62K vs. $200K PIP target, Salesforce accuracy improved but pipeline coverage remained below 3x
  pip_status: Yes — PIP completed June 30, goals not met
  effective_date: July 3, 2024 (Wednesday, first business day after July 4 weekend)
  severance: 4 weeks base salary ($6,923), contingent on signing a separation agreement with a release of claims; payment within 10 business days of signed agreement
  benefits: Health insurance ends July 31, 2024; COBRA notice will be sent by HR within 14 days; 401K remains intact
  equipment_return: Laptop must be returned within 5 business days via prepaid shipping label (HR will send); company credit card if applicable — confirm with Alex
  reference_policy: Anchor will confirm dates of employment and title only; manager should not provide personal references
  legal_constraints: California employment — 21-day review period for release of claims if over 40; final paycheck must be provided on last day of employment per California law; no non-compete is enforceable in California
  hr_present: Yes — Maya Chen (People Ops) will be present
exampleOutput: |
  # Termination Preparation — Alex Thompson
  **Anchor Analytics | July 3, 2024**

  *This is a preparation guide, not legal advice. Review with employment counsel before the meeting, particularly for California-specific requirements (final paycheck timing, COBRA, release period).*

  ---

  ## Pre-Meeting Checklist

  **Before 9:00 AM on July 3:**
  - [ ] IT: Alex's email, Salesforce, and Slack access should be revoked at 9:30 AM (immediately after the meeting ends) — coordinate with Engineering/IT the day before
  - [ ] Prepare separation agreement (drafted by counsel); do not give to Alex during the meeting — mail or DocuSign within 24 hours of the meeting
  - [ ] Prepare final paycheck (California law requires same-day payment on date of termination — verify this is ready and deliverable at or after the meeting)
  - [ ] Prepare COBRA notice (must be sent within 14 days)
  - [ ] Prepare prepaid return shipping label for laptop
  - [ ] James and Maya meet 15 minutes before the meeting to confirm roles — James delivers the message; Maya handles HR logistics and documentation
  - [ ] Book a private room; do not invite others; keep the meeting off the shared team calendar

  **Role during meeting:**
  - James: delivers the termination message
  - Maya: present as HR witness; manages paperwork and logistics questions
  - Neither: debate the decision or respond to performance arguments

  ---

  ## Opening Statement (verbatim)

  *James speaks:*

  "Alex, thank you for coming in. I want to get to the point directly — this isn't an easy conversation, but I want to be clear. We've concluded the performance improvement plan, and unfortunately the goals weren't met. We're ending your employment with Anchor Analytics. Today, July 3rd, is your last day."

  *Pause. Let Alex respond before continuing.*

  ---

  ## Core Message (talking points)

  **The decision:**
  - The PIP period ended June 30. The goals were clear and the performance did not meet them. This decision has been made and is final.
  - Do not summarize the performance details — the PIP document covers this. If Alex asks for specifics, reference the PIP.

  **Effective date and final pay:**
  - Your last day is today, July 3.
  - Your final paycheck — covering all earned wages through today — is available today. [Hand to Alex or confirm how they'll receive it.]
  - You'll also receive payment for any accrued, unused PTO. [Confirm amount with Maya before the meeting.]

  **Severance:**
  - Anchor is offering a severance package of 4 weeks of base pay ($6,923), contingent on signing a separation agreement.
  - You'll receive the agreement within 24 hours. Under California law, you have 21 days to review it and 7 days to revoke after signing. Maya will explain the details.
  - Payment will be issued within 10 business days of a signed agreement.

  **Benefits:**
  - Your health insurance continues through July 31. COBRA information will arrive within 14 days.
  - Your 401K remains intact — you'll receive information about options from [provider].

  **Equipment:**
  - Please return the Anchor laptop within 5 business days. A prepaid shipping label will be emailed to your personal address within 24 hours.
  - If you have a company credit card, please return it today. [Maya handles this.]

  **References:**
  - If anyone contacts Anchor for a reference, we will confirm your dates of employment and title only.

  ---

  ## What NOT to Say

  1. **"This was a really hard decision."** This sounds empathetic but is actually invalidating — of course it was hard. What Alex needs is clarity, not sympathy about how hard it was for the people making the decision.

  2. **"Maybe in the future things could work out."** This is false hope and legally problematic — it implies the decision might be revisited. It isn't. Don't say it.

  3. **"I want you to know this isn't personal."** Everything about your employment is personal. This phrase dismisses the reality of the moment.

  4. **"If you had just [done X differently]..."** Don't open a performance conversation in the termination meeting. The PIP documented the concerns. This meeting is not a post-mortem.

  5. **"We're letting you go."** This is vague and often confusing — some people hear "you've been laid off" not "you've been terminated for performance." Be specific: "We're ending your employment" or "Today is your last day."

  ---

  ## Likely Employee Reactions

  **Shock / silence:**
  "I know this is a lot to take in. Take a moment if you need it. I want to make sure you have all the information you need about next steps."

  **Anger ("This isn't fair / the PIP was unreasonable"):**
  "I understand you see it differently. This was a difficult process and I know it feels unfair. The decision has been made and isn't something we're going to revisit today — but I do want to make sure you have everything you need going forward."

  Do not defend the PIP, the performance standards, or the process. The meeting is not a debate. Acknowledge the feeling; don't engage the argument.

  **Negotiation ("Can I have more time / Can we revise the terms"):**
  "The terms of the separation are set. The severance offer and the timeline aren't things I can change in this conversation. If you have questions about the agreement, Maya is the right person to contact."

  **Breakdown / distress:**
  Offer a moment. "Take as much time as you need. There's no rush." Have tissues in the room. Do not rush the employee out. But also do not extend the meeting into a long discussion — when they're ready, provide the next steps and close.

  ---

  ## Closing (verbatim)

  *James speaks:*

  "I know this isn't the outcome either of us hoped for. Maya has all the details on next steps — the final check, the separation agreement, and the equipment return. If you have questions in the coming days, the right contact is Maya at people@anchor.com. I do wish you well."

  *Stand. Offer to shake hands if appropriate.* If Alex is ready to leave, walk them out or have Maya escort them to collect their belongings (if they have any personal items at the office — less likely for a remote employee).

  ---

  ## Immediately After the Meeting

  **Within 30 minutes:**
  - [ ] IT revokes Slack, email, and Salesforce access
  - [ ] James sends a brief Slack message to the AE team: "I wanted to let you know that Alex is no longer with Anchor Analytics. I'm happy to talk through this 1:1 if anyone wants to connect. We'll share more about next steps on the team shortly." — do not share the reason; do not announce before the meeting concludes
  - [ ] Maya documents the termination in Rippling and prepares COBRA paperwork
  - [ ] Maya sends separation agreement and shipping label to Alex's personal email within 24 hours

  **Same day:**
  - James and Maya debrief briefly — anything from the meeting that needs to be documented?
  - Confirm that Alex's Salesforce records are assigned to another AE; update all open opportunities
  - Update headcount in company systems
tips:
  - "The opening statement should state the termination within 30 seconds. Managers who delay — spending 5 minutes on context before getting to the news — create a more painful experience, not a gentler one."
  - "Keep the meeting to 10–15 minutes. Longer termination meetings are worse for the employee, not better. Once the decision, the effective date, and the next steps are communicated, the meeting is over."
  - "Don't explain the decision in detail during the termination meeting. The PIP, the performance conversations, and the documentation have already done this work. The termination meeting is for the what and the what-happens-next, not the why (again)."
  - "In California and several other states, specific legal requirements apply — final paycheck timing, COBRA notice, the 21-day review period for releases. Know your jurisdiction. This is not a DIY process."
  - "IT access revocation timing matters — you want access revoked immediately after the meeting, not before (which would tip off the employee) and not hours later (which creates a security gap). Coordinate in advance."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - pip-documentation
  - layoff-communication
  - employee-handbook-section
tags:
  - termination
  - people-ops
  - hr
  - performance-management
  - difficult-conversations
---
