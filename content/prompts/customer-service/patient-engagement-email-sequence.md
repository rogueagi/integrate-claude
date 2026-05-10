---
title: "Build a multi-touch patient engagement email sequence"
slug: patient-engagement-email-sequence
function: customer-service
role: support
description: "Generate a multi-touch patient engagement email sequence focused on preventive care reminders, no-show reduction, and care plan adherence."
useCase: "Use this prompt for clinics, primary care groups, and digital health companies that need a patient engagement email cadence — for example, annual wellness visit reminders, prediabetes prevention engagement, or no-show reduction for specialty visits. Generic appointment reminders underperform. This prompt produces a behaviorally grounded sequence that respects the patient and is easy for compliance to review."
prompt: |
  You are a patient communications writer at {{practice_or_company}} building a multi-touch email sequence for the {{campaign_name}} campaign.

  Inputs:
  - Campaign goal (preventive care, no-show reduction, care plan adherence, screening uptake, post-discharge engagement, etc.): {{campaign_goal}}
  - Target patient population (demographic, clinical, and panel context): {{patient_population}}
  - Specific behavior we want the patient to take: {{desired_action}}
  - Sender (clinic, care team, specific clinician name if appropriate): {{sender}}
  - Tone preferences and brand voice: {{voice}}
  - Language and reading level target: {{reading_level}} (recommend 6th to 8th grade)
  - Compliance constraints (HIPAA, TCPA, state-specific): {{compliance_notes}}
  - Channels available (email only, email plus SMS, plus portal): {{channels}}
  - Number of touches: {{number_of_touches}}
  - Time window for the sequence: {{time_window}}

  Produce the sequence in this format:

  ## Sequence overview
  Two to three sentences describing the journey arc and the behavioral logic. Identify the primary friction the sequence is designed to overcome (information gap, motivation gap, scheduling friction, anxiety, etc.).

  ## Email-by-email content
  For each email in the sequence:
  - Touch number and timing (e.g., 'Day 0,' 'Day 7,' 'Day 21')
  - Trigger condition (sent if patient has not yet booked / completed / etc.)
  - Subject line (one) and an A/B alternative
  - Preheader (under 90 characters)
  - Sender display name
  - Body, plain language at the specified reading level, structured with:
    - Plain greeting
    - Clear primary message in 1 to 2 sentences
    - Specific value or benefit
    - Single primary CTA button copy
    - Optional one-line address of common objection or concern
    - Plain sign-off
    - Unsubscribe / preferences footer placeholder
  - Notes on what each touch is designed to do (information, social proof, ease, deadline)

  ## Suppression and exit rules
  - Suppress patient if action is taken, if patient unsubscribes, if patient is flagged in EHR with do-not-contact, or if relevant clinical alerts apply
  - Maximum touches per week
  - Quiet hours (do not send before 8 a.m. or after 8 p.m. patient local time)

  ## Compliance review checklist
  - PHI handling: do not include diagnosis, lab values, or specific clinical content in unencrypted email
  - HIPAA marketing rule considerations
  - State-specific rules (e.g., California, New York, Washington)
  - TCPA implications for SMS counterparts (if any)
  - Plain language and accessibility (alt text for images, plain HTML fallback)
  - Reading level check

  Constraints:
  - Address the patient by first name only (mail merge), use 'you' throughout
  - Do not use guilt, fear, or shame as motivators
  - Do not promise outcomes
  - Each email is under 150 words of body copy
  - One primary CTA per email
variables:
  - "{{practice_or_company}}"
  - "{{campaign_name}}"
  - "{{campaign_goal}}"
  - "{{patient_population}}"
  - "{{desired_action}}"
  - "{{sender}}"
  - "{{voice}}"
  - "{{reading_level}}"
  - "{{compliance_notes}}"
  - "{{channels}}"
  - "{{number_of_touches}}"
  - "{{time_window}}"
exampleInput: |
  practice_or_company: Riverbend Family Medicine
  campaign_name: 2026 Annual Wellness Visit Reactivation
  campaign_goal: increase annual wellness visit completion among adults 40 to 64 who are paneled to a Riverbend PCP and have not been seen in greater than 14 months
  patient_population: 4,200 paneled adults age 40 to 64; commercially insured majority; mix of urban and suburban; many have prediabetes, hypertension, or cholesterol risk based on prior labs
  desired_action: book an annual wellness visit through the patient portal or by calling the clinic
  sender: Care team at Riverbend Family Medicine; signed by 'Your Riverbend care team' (not a specific clinician)
  voice: warm, calm, respectful; not promotional; not alarmist
  reading_level: 7th grade
  compliance_notes: |
    - HIPAA: do not include specific diagnoses, lab values, or chart notes in email
    - Marketing rule: appointment reminders and treatment communications are permitted; promotional content requires authorization
    - Email is to known patients with prior relationship; do not include clinical detail in subject line or preheader
  channels: email only for this prompt; SMS counterpart will be built separately
  number_of_touches: 4
  time_window: 6 weeks
exampleOutput: |
  ## Sequence overview
  This 4-email sequence over 6 weeks reactivates paneled adults who are overdue for an annual wellness visit. The primary friction is not motivation but ease — many patients intend to book and forget. Touches 1 and 2 reduce friction with one-click scheduling. Touches 3 and 4 add a soft sense of timing and a single light note about why the visit matters at this life stage. The arc moves from invitation to ease to relevance to gentle deadline.

  ## Email-by-email content

  ### Touch 1 — Day 0
  Trigger: enrolled in the campaign (no AWV completed in 14+ months)
  Subject A: Time for your yearly check-in at Riverbend
  Subject B: A friendly nudge from your Riverbend team
  Preheader: We have appointments open and a quick way to book.
  Sender: Riverbend Family Medicine

  Hi [First Name],

  It has been a little while since you came in for a yearly visit. We would love to see you for your annual wellness visit this spring.

  Your annual visit is a chance to check in, update what is going on with your health, and plan for the year. Most visits last about 30 to 45 minutes.

  [Book my visit]

  If a different time works better, you can also call us at 555-100-2200.

  Talk soon,
  Your Riverbend care team

  Notes: Pure invitation. One CTA. No clinical content.

  ### Touch 2 — Day 7
  Trigger: no AWV booked, no unsubscribe
  Subject A: Two minutes to book your Riverbend visit
  Subject B: Reply with a time that works for you
  Preheader: We have evening and Saturday slots open.
  Sender: Riverbend Family Medicine

  Hi [First Name],

  Following up in case our last note got buried. We have evening and Saturday appointments open through May, and the patient portal will show every available time at a glance.

  [See open times]

  If you would rather just reply to this email with a few times that work, we will book it for you.

  Your Riverbend care team

  Notes: Lower friction. Adds Saturday and evening as a scheduling unlock. Offers reply-and-we-book as an alternative path.

  ### Touch 3 — Day 21
  Trigger: no AWV booked, no unsubscribe
  Subject A: A few reasons people come in for their yearly visit
  Subject B: What to expect at your annual visit
  Preheader: A quick overview of what happens during the appointment.
  Sender: Riverbend Family Medicine

  Hi [First Name],

  A lot of people are not sure what an annual visit is for. Here is what we usually cover:
  - A quick check-in on how you are feeling
  - A review of any medicines you take
  - Routine screenings appropriate for your age
  - A short conversation about sleep, stress, and energy

  Most visits run 30 to 45 minutes and are typically covered as preventive care by your insurance.

  [Book my visit]

  Your Riverbend care team

  Notes: Information touch. Reduces 'is this worth it' uncertainty. No clinical specifics about the patient.

  ### Touch 4 — Day 42
  Trigger: no AWV booked, no unsubscribe
  Subject A: Last reminder from your Riverbend team
  Subject B: Reach out anytime — we are here when you are ready
  Preheader: We will pause these reminders after this note.
  Sender: Riverbend Family Medicine

  Hi [First Name],

  This is the last reminder we will send for the spring outreach. We will pause these messages after today.

  When you are ready to come in, we are here. Booking is a few clicks in the portal, or you can call us at 555-100-2200.

  [Book my visit]

  Take good care,
  Your Riverbend care team

  Notes: Defines the end of the sequence so the patient knows the cadence will stop. Maintains a warm, respectful exit.

  ## Suppression and exit rules
  - Exit if AWV is scheduled in the EHR
  - Exit if patient unsubscribes from preventive reminders or all emails
  - Exit if patient is flagged in the EHR for do-not-contact or hospice
  - Maximum two preventive emails per calendar week
  - Send window 9 a.m. to 6 p.m. patient local time

  ## Compliance review checklist
  - PHI: no diagnoses, labs, or specific clinical content in subject, preheader, or body
  - HIPAA marketing rule: this is a treatment communication (appointment reminder for established patients), not marketing
  - State overlays: California (CCPA opt-out language in footer), New York (general health communications guidance), Washington (My Health My Data Act review for any future sensitive-data references)
  - Accessibility: 7th grade reading level confirmed; alt text on logo image; plain HTML fallback
  - Unsubscribe and preference center linked in every email
tips:
  - "Frame each email around a single behavioral friction. The first touch is invitation; the second reduces effort; the third adds relevance; the fourth resolves the cadence. Mixing them weakens each."
  - "Avoid fear and guilt. They produce short-term opens and long-term opt-outs. Calm and respect outperform over a 6 to 12 month panel."
  - "Treat the unsubscribe path as a feature. The fourth email defining the end of the sequence improves trust and reduces unsubscribes from the next campaign."
  - "Keep PHI out of email subjects, preheaders, and body. Even appointment reminders should not include diagnoses, lab values, or specific clinical content."
  - "This is a marketing and patient-engagement prompt. Patient communications must be reviewed for HIPAA, state law, and clinical appropriateness by qualified privacy and compliance counsel before deployment."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - clinical-note-to-patient-summary
  - macro-response-set
  - reengagement-email
  - lifecycle-email-cadence
tags:
  - healthcare
  - patient-engagement
  - email-sequence
  - preventive-care
  - support
---
