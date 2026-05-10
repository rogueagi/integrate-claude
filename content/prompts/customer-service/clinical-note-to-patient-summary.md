---
title: "Convert a clinical note into a patient-facing summary"
slug: clinical-note-to-patient-summary
function: customer-service
role: support
description: "Translate a clinician's structured visit note into a clear, plain-language summary the patient can act on after the appointment."
useCase: "Use this prompt at clinics, primary care groups, and digital health companies that send post-visit summaries to patients. Clinical notes are written for clinicians and contain abbreviations, codes, and shorthand the patient cannot interpret. This prompt produces a faithful, plain-language summary that supports patient understanding without overstepping into medical advice."
prompt: |
  You are a patient-experience writer at {{practice_or_company}} converting a clinician's visit note into a patient-facing summary.

  Inputs:
  - Patient first name: {{patient_first_name}}
  - Visit type: {{visit_type}}
  - Clinician name and credentials: {{clinician}}
  - Date of visit: {{visit_date}}
  - Clinical note (SOAP or similar structure): {{clinical_note}}
  - Plan items the clinician wants the patient to follow: {{plan_items}}
  - Reading level target: {{reading_level}} (recommend 6th to 8th grade)

  Produce a summary with these sections:

  ## What we talked about
  Two to four sentences in plain language describing the reason for the visit and what the clinician observed. Translate every clinical abbreviation. Do not interpret or expand beyond what the note says.

  ## What this means
  Two to four sentences explaining the diagnosis, finding, or assessment in plain language. Where the note uses terms like 'hypertension,' 'osteoarthritis,' or specific lab values, give the plain-language equivalent and a one-sentence explanation. Do not introduce information that is not in the note.

  ## What to do next
  A numbered list of the patient's action items. For each, include:
  - What to do
  - When to do it
  - Why (one short reason)
  - How to do it or who to contact

  Cover medications, follow-up appointments, tests or labs ordered, lifestyle changes, and warning signs that warrant calling the clinic or seeking urgent care.

  ## When to call us
  A short list of symptoms or situations that should prompt the patient to call the clinic or seek urgent care. Pull these from the note; do not invent.

  ## Questions you might have
  Two to four anticipated questions a patient might have based on this visit, with one or two sentence answers grounded in the note. If the note does not support an answer, say 'your clinician will be the best source for that question.'

  Constraints:
  - Address the patient by first name and use 'you' throughout.
  - Use plain language at the specified reading level.
  - Do not add medical advice not present in the note.
  - Do not change dosages, frequencies, or instructions from the note.
  - Translate every abbreviation (BP, BMI, CBC, A1c, etc.).
  - Stay neutral in tone — warm but not effusive.
variables:
  - "{{practice_or_company}}"
  - "{{patient_first_name}}"
  - "{{visit_type}}"
  - "{{clinician}}"
  - "{{visit_date}}"
  - "{{clinical_note}}"
  - "{{plan_items}}"
  - "{{reading_level}}"
exampleInput: |
  practice_or_company: Riverbend Family Medicine
  patient_first_name: Marisol
  visit_type: annual physical
  clinician: Dr. Anjali Rao, MD
  visit_date: April 22 2026
  clinical_note: |
    S: 47 yo F here for AWV. Reports occasional HA, denies CP, SOB. Endorses 6/10 daytime fatigue x 3 mo. Diet: irregular, skips breakfast. Sleep: 5-6 hrs. Exercise: walks 2x/week. FMHx: father MI age 62, mother T2DM.
    O: BP 142/88 (recheck 138/86). HR 78. BMI 29.4. Heart RRR no m/r/g. Lungs CTA bilat.
    Labs (drawn 04/15): A1c 5.9 (prediabetic range), LDL 142, HDL 41, TG 168, TSH WNL, CBC unremarkable.
    A: 1) Stage 1 HTN. 2) Pre-DM. 3) Mixed dyslipidemia. 4) Fatigue, likely multifactorial.
    P: Initiate lifestyle modifications. DASH-style diet referral. Goal 150 min/wk moderate exercise. BP log at home BID x 2 wk. Recheck BP and labs in 12 wk. Consider statin if no LDL response. Sleep hygiene counseling provided. Return to clinic in 12 wk or sooner if BP greater than 160/100 or new symptoms.
  plan_items: |
    - Start home BP log twice daily for 2 weeks; bring log to next visit
    - Schedule recheck in 12 weeks (early August)
    - Lab redraw in 12 weeks before next visit
    - Schedule appointment with practice nutritionist for DASH guidance
    - Aim for 150 minutes per week of moderate exercise (e.g., brisk walking)
    - Sleep target 7 to 8 hours per night
  reading_level: 7th grade
exampleOutput: |
  ## What we talked about
  Hi Marisol — thank you for coming in for your annual checkup on April 22. We talked about how you have been feeling tired during the day for the past few months, and we went over the lab results from your blood draw on April 15. Dr. Rao also checked your blood pressure, height, and weight.

  ## What this means
  Your visit showed three things to pay attention to:
  - Stage 1 high blood pressure. Your blood pressure was 142 over 88, which is a little above the healthy range. Stage 1 means it is early and lifestyle changes can often bring it back down.
  - Prediabetes. Your A1c (a 3-month blood sugar average) was 5.9. That is just above normal. It does not mean you have diabetes. It means your sugar is on the higher side and small changes now can keep it from becoming diabetes.
  - Cholesterol mix that needs improvement. Your LDL (the kind we want lower) was 142, and your HDL (the kind we want higher) was 41. We would like to improve both with diet and exercise first.

  Your tiredness is most likely a combination of less sleep than your body needs (5 to 6 hours), irregular meals, and the items above.

  ## What to do next
  1. Track your blood pressure at home. Take it twice a day for the next 2 weeks. Why: so we can see your real average, not just one number from the office. How: use a home cuff and a notebook or phone app. Bring the log to your next visit.
  2. Schedule a follow-up visit for early August (about 12 weeks from now). Why: to recheck your blood pressure and see how lifestyle changes are going. How: call the clinic or use the patient portal.
  3. Get labs redrawn before that visit. Why: so we can see your A1c and cholesterol again and decide if we need a medicine. How: the front desk can give you the lab order at checkout.
  4. Schedule a visit with our nutritionist. Why: to learn the DASH eating plan, which lowers blood pressure and helps cholesterol. How: ask the front desk for the referral.
  5. Aim for 150 minutes of moderate exercise per week. Why: to help blood pressure, blood sugar, and energy. How: 30 minutes of brisk walking 5 days a week is a good target.
  6. Aim for 7 to 8 hours of sleep most nights. Why: short sleep is one of the reasons for your daytime tiredness.

  ## When to call us
  Call the clinic or seek urgent care if:
  - Your blood pressure goes above 160 over 100
  - You have new chest pain, shortness of breath, or unusual headaches
  - You have any new symptoms that worry you

  ## Questions you might have
  - Do I need to start a medicine right now? Not at this visit. Dr. Rao wants to see how lifestyle changes work over the next 12 weeks. If your numbers do not improve, a cholesterol medicine called a statin is one option to discuss.
  - Is prediabetes serious? It is a warning, not a diagnosis of diabetes. Many people reverse it with the same diet, exercise, and sleep changes we discussed.
  - Why am I so tired? Most likely a combination of short sleep, irregular meals, and the early blood pressure and sugar changes. The plan above should help. If your energy does not improve over the next month, call us.
  - What if I cannot get to 150 minutes of exercise right away? That is fine — start where you are. Even 10 minutes a day is a good start. Your clinician will be the best source for adjusting the goal.
tips:
  - "Mirror the structure of the clinical note. Do not introduce diagnoses, dosages, or recommendations the clinician did not document."
  - "Translate every abbreviation. BP, BMI, A1c, LDL, HDL, TSH, CBC, RRR — patients should never see acronyms in their summary."
  - "Use the patient's first name once at the top, then use 'you' throughout. Avoid clinical voice ('the patient was advised...')."
  - "Read the output at the target grade level by checking sentence length and word complexity. Plain language fails when sentences exceed 20 words or use clinical jargon."
  - "This is a patient-experience writing prompt, not a substitute for clinician review. Every output must be reviewed by a qualified clinician before sending to the patient."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - knowledge-base-article
  - macro-response-set
  - patient-engagement-email-sequence
tags:
  - healthcare
  - patient-experience
  - clinical-summary
  - plain-language
  - support
---
