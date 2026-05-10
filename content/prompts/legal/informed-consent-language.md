---
title: "Generate informed consent language for a procedure or study"
slug: informed-consent-language
function: legal
role: contracts
description: "Draft plain-language informed consent text for a clinical procedure, treatment, or research study covering risks, benefits, alternatives, and the patient's right to refuse."
useCase: "Use this prompt when you need a starting draft of informed consent language for a clinical procedure, behavioral health treatment, or research study. Informed consent has a specific structure shaped by case law and the Common Rule (for research). Generic AI-generated consent text often misses required elements. This prompt produces a draft that organizes content for legal and IRB review and reads at the level patients can actually understand."
prompt: |
  You are a clinical and regulatory writer drafting informed consent language for {{procedure_or_study_name}}. The output is a draft for review by qualified medical, legal, and IRB or regulatory counsel before use.

  Inputs:
  - Type of consent: {{consent_type}} (clinical procedure, treatment, or research study)
  - Procedure or study name: {{procedure_or_study_name}}
  - Sponsor or provider organization: {{provider_or_sponsor}}
  - Description of the procedure or study activities (what will happen, where, when, by whom): {{description}}
  - Purpose: {{purpose}}
  - Reasonably foreseeable risks and discomforts: {{risks}}
  - Reasonably expected benefits: {{benefits}}
  - Alternatives to the procedure or study: {{alternatives}}
  - Confidentiality and data handling: {{confidentiality}}
  - For research: compensation, costs, contact info for the IRB and PI; statement that participation is voluntary: {{research_specific}}
  - Reading level target: {{reading_level}} (recommend 8th grade)

  Produce the consent draft with these sections, each labeled clearly:

  ## Title
  Plain-language title that names the procedure or study.

  ## Purpose
  Two to three sentences in plain language explaining why the procedure or study is being done.

  ## What will happen
  A numbered list of steps the patient or participant will go through. Include duration, location, who will perform each step, and any required follow-up.

  ## Risks and discomforts
  A bulleted list of reasonably foreseeable risks. Group by likelihood (common, less common, rare) where the source data supports it. Use plain-language equivalents of clinical terms. Include physical, psychological, and privacy risks where applicable.

  ## Possible benefits
  A bulleted list of reasonably expected benefits. Be honest about benefits that may not occur. For research, include the specific statement that participation may not directly benefit the participant.

  ## Alternatives
  A bulleted list of alternatives, including the option of no treatment or non-participation.

  ## Your rights
  - Right to ask questions before, during, and after
  - Right to refuse or withdraw at any time without penalty or loss of care
  - For research: voluntary participation; no impact on relationship with the provider; ability to withdraw without consequences
  - Right to a copy of the signed consent

  ## Confidentiality and data
  Explain how information will be collected, stored, used, and shared. Identify any required disclosures (e.g., to regulators, to law enforcement under specific conditions). Identify limits on confidentiality.

  ## Costs and compensation (for research)
  Costs to the participant, payment for participation if any, and what happens if the participant is injured.

  ## Questions and contacts
  Phone numbers and emails for the provider or PI, the institution's research office or IRB if applicable, and the patient relations or ombudsperson.

  ## Signatures
  Patient or participant name, signature, date. Witness signature where required. Person obtaining consent name, signature, and date.

  Constraints:
  - Plain language at the specified reading level
  - Use 'you' throughout
  - Translate clinical and statistical terms
  - Avoid 'fine print' density; use white space and lists
  - Do not promise outcomes
  - Do not draft language that waives the patient's or participant's rights
variables:
  - "{{consent_type}}"
  - "{{procedure_or_study_name}}"
  - "{{provider_or_sponsor}}"
  - "{{description}}"
  - "{{purpose}}"
  - "{{risks}}"
  - "{{benefits}}"
  - "{{alternatives}}"
  - "{{confidentiality}}"
  - "{{research_specific}}"
  - "{{reading_level}}"
exampleInput: |
  consent_type: research study (interventional, minimal risk)
  procedure_or_study_name: Behavioral Sleep Coaching Program for Adults with Insomnia (BeSC-1)
  provider_or_sponsor: Mountainside Health Research Institute, sponsored by an internal grant
  description: |
    - 8-week digital sleep coaching program with weekly 30-minute video sessions with a licensed sleep coach
    - Participants wear a study-provided sleep tracker each night for 12 weeks
    - Three online questionnaires: at start, week 8, and week 12
    - One in-person visit at week 12 to return tracker and conduct exit interview (45 minutes)
  purpose: To evaluate whether a structured digital coaching program improves sleep quality compared with usual care for adults with chronic insomnia.
  risks: |
    - Common: temporary frustration with sleep tracking; mild discomfort wearing wrist tracker
    - Less common: increased awareness of sleep difficulty during the program
    - Rare: skin irritation from the tracker band
    - Privacy: study data collected and stored by the research team; risk of unauthorized data access despite safeguards
  benefits: |
    - Possible improvement in sleep quality (not guaranteed)
    - Greater understanding of personal sleep patterns
    - Information from the study may help others with insomnia in the future
  alternatives: |
    - Continue current sleep care with your regular provider without joining the study
    - Seek standalone behavioral therapy for insomnia (CBT-I) outside the study
    - Discuss medication options with your provider
  confidentiality: |
    - Study data stored on encrypted servers with access limited to research team
    - Identifiable information separated from study data; replaced with a code
    - Aggregate results may be published in scientific journals; you will not be identified
    - Required disclosures: serious adverse events to the IRB; legally compelled disclosures (e.g., subpoena)
  research_specific: |
    - Compensation: $40 gift card at week 8, $40 gift card at week 12 (total up to $80)
    - No costs to participate beyond your time
    - Sleep tracker is provided at no cost; you keep it after the study
    - PI: Dr. Lillian Ortiz, PhD; IRB: Mountainside Health IRB; 24/7 PI contact line for adverse events
    - Participation voluntary; you may withdraw at any time without affecting your care or relationship with the institution
  reading_level: 8th grade
exampleOutput: |
  ## Title
  Consent to Participate in the Behavioral Sleep Coaching Program for Adults with Insomnia (BeSC-1) Research Study

  ## Purpose
  We are inviting you to take part in a research study at Mountainside Health Research Institute. The purpose of the study is to learn whether a structured digital sleep coaching program helps adults who have trouble sleeping (chronic insomnia) sleep better than usual care.

  ## What will happen
  If you agree to take part, you will:
  1. Meet with a licensed sleep coach by video for about 30 minutes each week for 8 weeks.
  2. Wear a study-provided wristband sleep tracker every night for 12 weeks. You can take it off when needed (showering, exercise) and put it back on.
  3. Complete three online questionnaires: when you start, at week 8, and at week 12. Each takes about 15 minutes.
  4. Visit the research office once at week 12 for a 45-minute exit interview and to return the tracker (you may keep it).

  Total time commitment is about 12 weeks.

  ## Risks and discomforts
  - Common: feeling frustrated by tracking your sleep; mild discomfort from wearing the wristband.
  - Less common: becoming more aware of sleep problems during the program, which can briefly feel worse before it feels better.
  - Rare: skin irritation where the wristband is worn.
  - Privacy: even with strong protections, there is always a small risk that someone could access study data without permission.

  ## Possible benefits
  - You may sleep better. We cannot guarantee this.
  - You may learn more about your own sleep patterns.
  - What we learn from this study may help other people with insomnia in the future. There may be no direct benefit to you.

  ## Alternatives
  You do not have to take part in this study. Other options include:
  - Continue your current sleep care with your regular provider without joining the study.
  - Get cognitive behavioral therapy for insomnia (CBT-I) outside the study, which is a recommended treatment.
  - Talk to your provider about medication options.

  Choosing not to participate will not affect your care at Mountainside Health.

  ## Your rights
  - You can ask questions before, during, and after the study.
  - You can refuse to take part. You can also stop at any time without giving a reason.
  - Stopping will not affect your medical care or your relationship with Mountainside Health.
  - You will receive a copy of this signed consent form.

  ## Confidentiality and data
  - Your study data is stored on encrypted servers. Only the research team has access.
  - Your name and other identifying information are kept separate from your study data and replaced with a code.
  - When we publish or present results, we will not identify you.
  - In some situations, we may have to share information: serious safety events must be reported to the Institutional Review Board (IRB), and we may be required to share information if a court orders us to.

  ## Costs and compensation
  - There is no cost to take part beyond your time.
  - You will receive a $40 gift card after the week 8 questionnaire and a $40 gift card after the week 12 visit, for a total of up to $80.
  - The sleep tracker is yours to keep at the end of the study.
  - If you are injured because of taking part in the study, contact the research team. The institution will provide reasonable medical care for study-related injuries; payment terms are explained on a separate sheet.

  ## Questions and contacts
  If you have questions about the study, contact the principal investigator:
  - Dr. Lillian Ortiz, PhD, BeSC-1 Study, Mountainside Health Research Institute
  - 24/7 study line for adverse events or urgent questions: [phone]
  - Email: besc1@mountainside.example

  If you have questions about your rights as a research participant or concerns about the study, contact:
  - Mountainside Health IRB: [phone] / [email]

  ## Signatures
  By signing below, I confirm that I have read this consent form, had time to ask questions, and agree to take part in the study.

  Participant name (printed): __________________________
  Participant signature: __________________________
  Date: __________

  Person obtaining consent (printed): __________________________
  Signature: __________________________
  Date: __________
tips:
  - "Match the consent type to the framework. Research consent must address Common Rule elements (45 CFR 46.116); clinical consent must address procedure-specific risks and alternatives. Mixing the two creates gaps."
  - "Plain language is a substantive requirement, not a stylistic preference. Test the draft at the target reading level before submitting to IRB or counsel."
  - "Do not draft any language that waives or appears to waive the patient's or participant's rights. The Common Rule prohibits this for research consent."
  - "Be honest about benefits. Overpromising benefits is one of the most common reasons IRBs require consent revisions."
  - "This is a draft. All informed consent documents must be reviewed by qualified medical, legal, and IRB or regulatory counsel before use with patients or participants."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - hipaa-breach-notification-draft
  - compliance-gap-analysis
  - clinical-note-to-patient-summary
tags:
  - healthcare
  - informed-consent
  - irb
  - compliance
  - research
---
