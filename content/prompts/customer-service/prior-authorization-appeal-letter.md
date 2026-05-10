---
title: "Draft a prior authorization appeal letter to an insurer"
slug: prior-authorization-appeal-letter
function: customer-service
role: escalations
description: "Generate a structured appeal letter for a denied prior authorization that addresses medical necessity, plan criteria, and the specific denial reason."
useCase: "Use this prompt at clinics, specialty practices, and digital health companies that handle prior authorization (PA) appeals. PA denials often cite generic reasons that do not engage with the specific clinical situation. This prompt produces an appeal letter that responds to the denial reason directly, cites the clinical record, references plan-specific medical policy, and asks for a defined remedy."
prompt: |
  You are a patient advocate or PA specialist at {{practice_name}} drafting a first level appeal of a denied prior authorization to {{insurer_name}} on behalf of a patient.

  Inputs:
  - Patient name and date of birth: {{patient_name}}, {{patient_dob}}
  - Member ID and group: {{member_id}}, {{group_id}}
  - Date of denial letter: {{denial_date}}
  - Reference or claim number: {{reference_number}}
  - Service or treatment requested (procedure code, drug, equipment): {{service_requested}}
  - Diagnosis with ICD-10 codes: {{diagnosis_codes}}
  - Provider details (name, NPI, specialty, contact): {{provider_details}}
  - Reason for denial as stated by the insurer: {{denial_reason}}
  - Plan medical policy or coverage criteria cited by the insurer: {{cited_policy}}
  - Clinical history relevant to the request (treatments tried, response, contraindications, severity): {{clinical_history}}
  - Supporting documentation enclosed (records, peer-reviewed citations, guideline references): {{enclosures}}
  - Requested resolution (e.g., reverse the denial; approve specific code for specific duration): {{requested_resolution}}

  Produce the appeal letter with these sections:

  ## Header
  - Date
  - Insurer's appeals address
  - Re: line with patient name, DOB, member ID, reference number, denial date, requested service

  ## Salutation

  ## Opening paragraph
  State that this is a first level appeal of the prior authorization denial dated {{denial_date}} for the service requested. State the requested resolution explicitly in the first paragraph.

  ## Clinical summary
  Two to four short paragraphs describing the patient's diagnosis, severity, prior treatments tried with response and dates, contraindications or intolerances, and clinical rationale for the requested service. Cite specific dates, medications, dosages, and outcomes from the record.

  ## Response to the denial reason
  Quote the denial reason. Address each element directly. If the insurer cites failure to meet step therapy, document the steps that were tried. If the insurer cites lack of medical necessity, address the plan's published medical policy criterion by criterion. If the insurer cites a non-formulary status or experimental designation, cite peer-reviewed evidence or guideline support.

  ## Plan policy alignment
  Cite the insurer's medical policy, where it is publicly available, and align the patient's clinical situation with the policy's coverage criteria. Be specific. If the policy is not publicly available, request a copy.

  ## Supporting evidence
  List the enclosed documents and key citations. Include guideline references (NCCN, ACC, ADA, USPSTF, specialty society guidelines as relevant) where applicable.

  ## Requested resolution and timeline
  State the specific remedy requested. Reference the plan's published timelines for first-level appeals and request expedited review if clinically warranted (and if facts support it).

  ## Provider attestation block
  Provider name, NPI, signature line, and date.

  ## Closing and contact information
  Direct phone, fax, and email for the provider's office and the patient advocate.

  Constraints:
  - Professional and assertive tone
  - Cite the patient's record specifically (dates, medications, outcomes)
  - Engage with the denial reason; do not write a generic appeal
  - Do not include PHI beyond what is necessary
  - Do not promise that the appeal will succeed; do not waive any patient rights
variables:
  - "{{practice_name}}"
  - "{{insurer_name}}"
  - "{{patient_name}}"
  - "{{patient_dob}}"
  - "{{member_id}}"
  - "{{group_id}}"
  - "{{denial_date}}"
  - "{{reference_number}}"
  - "{{service_requested}}"
  - "{{diagnosis_codes}}"
  - "{{provider_details}}"
  - "{{denial_reason}}"
  - "{{cited_policy}}"
  - "{{clinical_history}}"
  - "{{enclosures}}"
  - "{{requested_resolution}}"
exampleInput: |
  practice_name: Brookline Endocrinology Associates
  insurer_name: Atlas Health of the Northeast
  patient_name: Daniel Reyes
  patient_dob: 06/14/1979
  member_id: AHN-447882-01
  group_id: 90112
  denial_date: April 18 2026
  reference_number: PA-2026-441002
  service_requested: tirzepatide (Mounjaro) 2.5 mg weekly with titration to 5 mg, HCPCS J3490 / NDC supplied; for treatment of type 2 diabetes
  diagnosis_codes: E11.65 (Type 2 diabetes mellitus with hyperglycemia); E66.01 (Morbid obesity, BMI 41.2)
  provider_details: Dr. Anika Patel, MD, Endocrinologist, NPI 1234567890, 555-200-4400
  denial_reason: |
    "Step therapy not met. Member has not had a documented trial and failure of two preferred GLP-1 agents (semaglutide injection and dulaglutide) at maximum tolerated doses for at least 12 weeks each prior to consideration of tirzepatide."
  cited_policy: Atlas Health Medical Policy 2026-DM-014, Step Therapy for GLP-1 and GIP/GLP-1 Receptor Agonists in Type 2 Diabetes
  clinical_history: |
    - Diagnosed T2DM 2018; A1c 9.4 at intake August 2024
    - Trial 1: semaglutide injection (Ozempic), titrated to 1.0 mg weekly, October 2024 to February 2025 (16 weeks). A1c improved from 9.4 to 8.6. Discontinued for severe persistent nausea and 6.4 kg weight loss accompanied by inadequate caloric intake; documented in note 02/22/2025.
    - Trial 2: dulaglutide (Trulicity) 1.5 mg weekly, March 2025 to July 2025 (16 weeks). A1c 8.7 at end of trial. Discontinued due to recurrent injection site reactions and pancreatitis-like symptoms requiring ER visit on 06/30/2025; lipase elevated at 2.1x ULN. Symptoms resolved with discontinuation.
    - Current status: A1c 9.1 (April 2026 lab); BMI 41.2; metformin 2,000 mg daily; ongoing insulin glargine 28 units nightly with poor glycemic control.
  enclosures: |
    - Office notes 08/15/2024, 02/22/2025, 07/10/2025, 04/05/2026
    - Lab results 04/05/2026
    - ED record 06/30/2025 (Trulicity-associated event)
    - American Diabetes Association Standards of Care 2026, section 9 (Pharmacologic Approaches)
  requested_resolution: Reverse the denial and approve tirzepatide (Mounjaro) 2.5 mg weekly with titration to 5 mg, for 12 months
exampleOutput: |
  Brookline Endocrinology Associates
  220 Beacon Avenue, Brookline MA 02446
  Phone 555-200-4400 | Fax 555-200-4401

  May 8 2026

  Atlas Health of the Northeast
  Pharmacy Appeals Department
  P.O. Box 9001
  Albany NY 12201

  Re: First level appeal of prior authorization denial
  Patient: Daniel Reyes, DOB 06/14/1979
  Member ID: AHN-447882-01, Group: 90112
  Reference: PA-2026-441002
  Denial date: April 18 2026
  Service: tirzepatide (Mounjaro) 2.5 mg weekly, titration to 5 mg

  Dear Appeals Reviewer:

  This is a formal first level appeal of the prior authorization denial issued April 18 2026 for tirzepatide (Mounjaro) for our patient, Daniel Reyes. We respectfully request that the denial be reversed and that tirzepatide 2.5 mg weekly with titration to 5 mg be approved for a 12 month period.

  ### Clinical summary
  Mr. Reyes is a 46-year-old man with type 2 diabetes mellitus (E11.65) diagnosed in 2018 and class III obesity (E66.01, BMI 41.2). At intake to our practice in August 2024, his A1c was 9.4. His current medications include metformin 2,000 mg daily and insulin glargine 28 units nightly. Despite these therapies, his most recent A1c on April 5 2026 was 9.1, which is well above the ADA recommended individualized target.

  Mr. Reyes has trialed two preferred GLP-1 agents at clinically meaningful doses with documented response and tolerability outcomes. The clinical course is summarized below and supported by enclosed records.

  ### Response to the denial reason
  The denial states: 'Step therapy not met. Member has not had a documented trial and failure of two preferred GLP-1 agents (semaglutide injection and dulaglutide) at maximum tolerated doses for at least 12 weeks each prior to consideration of tirzepatide.'

  We respectfully disagree. The patient has completed both required trials. The relevant facts:

  Trial 1 — Semaglutide (Ozempic): Initiated October 2024, titrated to 1.0 mg weekly. Continued through February 2025, a duration of 16 weeks at the maximum tolerated dose. A1c response was 9.4 to 8.6, insufficient for control. Discontinued for severe persistent nausea and 6.4 kg unintended weight loss with documented inadequate caloric intake. Office note dated 02/22/2025 (enclosed) documents the rationale for discontinuation.

  Trial 2 — Dulaglutide (Trulicity): Initiated March 2025 at 0.75 mg weekly, titrated to 1.5 mg weekly. Continued through July 2025, a duration of 16 weeks. A1c response was 8.6 to 8.7, indicating non-response. The patient experienced recurrent injection site reactions and a pancreatitis-like episode requiring an emergency department visit on 06/30/2025 with lipase elevated at 2.1x upper limit of normal. The ED record (enclosed) documents resolution after discontinuation. Restarting dulaglutide is not clinically appropriate given the GI and pancreatic adverse event history.

  Both trials therefore meet the policy's criteria of (a) two preferred agents, (b) at least 12 weeks of duration each, and (c) maximum tolerated doses. The records also document failure of efficacy and clinically significant adverse events.

  ### Plan policy alignment
  Atlas Health Medical Policy 2026-DM-014 establishes step therapy requirements for GLP-1 and GIP/GLP-1 receptor agonists. The patient's documented course satisfies the policy's criteria as set out above. To the extent the policy includes additional documentation requirements not addressed in this letter, please specify and we will provide.

  ### Supporting evidence
  Enclosed:
  - Office notes dated 08/15/2024, 02/22/2025, 07/10/2025, and 04/05/2026
  - Lab results dated 04/05/2026 (A1c 9.1, lipid panel, metabolic panel)
  - Emergency department record dated 06/30/2025 documenting the dulaglutide-associated event
  - American Diabetes Association Standards of Care 2026, Section 9 (Pharmacologic Approaches), which lists GIP/GLP-1 dual receptor agonists as a recommended option for patients with type 2 diabetes and obesity

  ### Requested resolution
  We request reversal of the denial and approval of tirzepatide (Mounjaro) 2.5 mg weekly with titration to 5 mg, for a 12 month period. The clinical urgency is significant: the patient's A1c has remained above 9.0 for an extended period, increasing the risk of diabetic complications. We respectfully request review within the standard first level appeal timeframe.

  ### Provider attestation
  I have personally reviewed Mr. Reyes's clinical course, the enclosed records, and the relevant Atlas Health medical policy. The information provided is accurate to the best of my knowledge. I am available to discuss the clinical case directly.

  Sincerely,

  Anika Patel, MD
  Endocrinologist, NPI 1234567890
  Brookline Endocrinology Associates
  Direct: 555-200-4400 | Fax: 555-200-4401 | apatel@brookline-endo.example

  cc: Patient Daniel Reyes
tips:
  - "Always engage the denial reason directly. Quote it in the letter and respond point by point. Generic appeals fail more often than they succeed."
  - "Cite the patient's record specifically. 'Patient failed prior therapy' is weak. 'Patient discontinued semaglutide on 02/22/2025 after 16 weeks at 1.0 mg with persistent grade 2 nausea, documented in note dated...' is strong."
  - "Look up the insurer's medical policy. Most major insurers publish them. Aligning the appeal with the actual policy criteria is the single highest-leverage move."
  - "Request a specific remedy with a specific duration. Vague asks invite vague responses."
  - "This prompt produces a draft appeal. All medical-necessity statements and clinical attestations require the prescribing clinician's review and signature. Practice policies, insurer rules, and applicable state and federal laws govern appeal handling and require qualified review."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - executive-escalation-email
  - escalation-decision-framework
  - de-escalation-response
tags:
  - healthcare
  - prior-authorization
  - appeals
  - escalations
  - patient-advocacy
---
