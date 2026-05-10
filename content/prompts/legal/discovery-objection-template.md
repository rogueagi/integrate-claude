---
title: "Draft objections to interrogatories with specific basis citations"
slug: discovery-objection-template
function: legal
role: contracts
description: "Generate a clean set of objections to a propounded set of interrogatories, each tied to a specific rule and a one-sentence reason an opposing party would have to address."
useCase: "Use this prompt when you receive a set of interrogatories and need a first-pass objection draft that flags overbreadth, vagueness, privilege, work product, scope, and proportionality issues. Litigation associates can produce a defensible response in a fraction of the time, with the partner spotting only the close calls."
prompt: |
  You are a litigation associate drafting objections to a propounded set of interrogatories. Produce a numbered objection set that is specific, rule-cited, and does not rely on boilerplate.

  Case context:
  - Court and jurisdiction: {{court_jurisdiction}}
  - Applicable rules of civil procedure: {{procedure_rules}} (e.g., FRCP 26, 33; or state equivalents)
  - Matter and parties: {{matter}}
  - Stage of case (early, post motion to dismiss, post class cert, etc.): {{case_stage}}
  - Operative complaint claims: {{operative_claims}}
  - Existing protective order or ESI protocol: {{protective_order}}
  - Privilege issues we are protecting (attorney-client, work product, common interest, trade secret): {{privilege_issues}}

  Interrogatories propounded (number and full text each):
  {{interrogatories}}

  For each interrogatory, output:

  - Interrogatory number and short paraphrase
  - Specific objections, each preceded by a verb phrase ("Objects to", "Further objects to") and followed by:
    a) the rule cite (e.g., FRCP 26(b)(1)),
    b) the specific defect (vague as to the term "X"; not proportional given the dollar exposure of $Y; calls for a legal conclusion; seeks information protected by attorney-client privilege; assumes facts not in evidence; etc.),
    c) one sentence the propounding party would have to address to cure the objection.
  - Subject to and without waiving the foregoing objections, propose either: (i) a substantive response, (ii) a meet-and-confer ask, or (iii) a refusal to respond with citation.

  Do not use blanket objections. Each objection must be specific to the language of the interrogatory.

  At the end, include:
  - Meet-and-confer summary: a 5 to 8 bullet list of the questions to raise with opposing counsel before formal response, prioritized by which objections will not survive without negotiation.
  - Privilege log preview: any documents or categories you anticipate logging based on the interrogatories.
variables:
  - "{{court_jurisdiction}}"
  - "{{procedure_rules}}"
  - "{{matter}}"
  - "{{case_stage}}"
  - "{{operative_claims}}"
  - "{{protective_order}}"
  - "{{privilege_issues}}"
  - "{{interrogatories}}"
exampleInput: |
  court_jurisdiction: U.S. District Court for the Northern District of California
  procedure_rules: FRCP 26, 33, 34; N.D. Cal. Local Rules; Judge Chen's standing order
  matter: Halberd Industries v. Northbrook Logistics, Case No. 25-cv-04421-EJC
  case_stage: post motion to dismiss; class cert motion expected in 9 months
  operative_claims: breach of warranty, fraudulent concealment, UCL § 17200
  protective_order: stipulated protective order entered Feb 2026 with AEO designation; ESI protocol still under negotiation
  privilege_issues: attorney-client privilege, work product, common interest with co-defendant Cedar Park Components
  interrogatories: |
    Interrogatory No. 1: Identify each PERSON who, between 2020 and the present, had any KNOWLEDGE of the load capacity ratings of the trailers manufactured by Northbrook Logistics.
    Interrogatory No. 2: Describe in complete detail all COMMUNICATIONS between Northbrook Logistics and any other entity regarding the load capacity ratings.
    Interrogatory No. 3: State the legal basis for Northbrook Logistics's contention that no warranty was breached.
exampleOutput: |
  Defendant Northbrook Logistics, Inc.'s Objections and Responses to Plaintiff's First Set of Interrogatories

  General Objections (incorporated by reference into each response below):
  G1. Objects to the extent the interrogatories purport to impose obligations beyond those of FRCP 26 and 33 and Judge Chen's standing order.
  G2. Objects to definitions and instructions that conflict with the stipulated protective order entered February 2026.

  Interrogatory No. 1: Identify every person with knowledge of load capacity ratings, 2020 to present.

  Objections:
  - Objects under FRCP 26(b)(1) as not proportional. The interrogatory seeks identification of "each PERSON" with "any KNOWLEDGE" over a 6-year window across a manufacturing organization with thousands of employees. Cure: limit to persons who participated in setting, testing, auditing, or approving the ratings.
  - Objects as overbroad and vague as to "KNOWLEDGE." The defined term sweeps in passing awareness. Cure: substitute "non-public information regarding the methodology or accuracy of the ratings."
  - Objects to the temporal scope. The trailers at issue were manufactured beginning Q1 2021. 2020 information is not relevant to any claim in the operative complaint. Cure: revise to Q1 2021 to present.
  - Objects to the extent the interrogatory seeks information protected by attorney-client privilege and the work product doctrine, and information shared under common interest with Cedar Park Components.

  Subject to and without waiving the foregoing, after meet and confer Northbrook will identify, by name, title, and dates of employment, the members of the safety committee, the engineering team responsible for the rating methodology, and the QA leads from Q1 2021 through the recall in Q1 2023.

  Interrogatory No. 2: Describe all communications regarding load capacity ratings.

  Objections:
  - Objects as overbroad and unduly burdensome under FRCP 26(b)(1) and 33(d). The request seeks "complete detail" of "all communications" without temporal, custodial, or topical limitation. Cure: limit to written communications among the safety committee or with Cedar Park Components, Q1 2021 to Q1 2023.
  - Objects under FRCP 33(d). To the extent responsive information may be derived from business records, Northbrook will identify the records by Bates range once the ESI protocol is finalized.
  - Objects to the extent the interrogatory seeks attorney-client communications, work product, or common interest material.
  - Objects to the term "any other entity" as vague. Cure: list the categories (customers, suppliers, regulators, insurers).

  Subject to and without waiving, Northbrook will produce communications responsive to a narrowed scope after meet and confer and pursuant to the ESI protocol, with privileged communications logged.

  Interrogatory No. 3: State the legal basis for the no-breach contention.

  Objections:
  - Objects as a contention interrogatory served before the close of fact discovery. Under N.D. Cal. practice, contention interrogatories are typically deferred. Cure: defer response under FRCP 33(a)(2) until 30 days before the close of fact discovery.
  - Objects to the extent it calls for the disclosure of attorney work product and mental impressions.

  Subject to and without waiving, Northbrook will respond consistent with FRCP 33(a)(2) once fact discovery is substantially complete.

  Meet-and-confer summary
  - Interrog. 1: agree on a defined population (safety committee, engineering, QA leads) and a Q1 2021 start date.
  - Interrog. 1: confirm scope of "knowledge" excludes passing awareness.
  - Interrog. 2: confirm reliance on FRCP 33(d) is acceptable once ESI protocol is signed.
  - Interrog. 2: agree on custodian list and search terms before any production.
  - Interrog. 2: confirm common interest privilege with Cedar Park Components is recognized for joint defense communications.
  - Interrog. 3: stipulate to deferral of contention interrogatories until 30 days before fact discovery cutoff.
  - All interrogatories: confirm AEO designations under the protective order will apply to internal pricing and methodology data.

  Privilege log preview
  - Internal counsel emails to and from the safety committee, June 2022 to recall date.
  - Joint defense communications with Cedar Park Components and its counsel.
  - Outside counsel memoranda regarding rating methodology and recall analysis.
  - Insurer reservation-of-rights correspondence.
tips:
  - "Have a qualified attorney review every objection before serving. Boilerplate that does not match the actual interrogatory text is sanctionable in many jurisdictions."
  - "Always paste the operative complaint claims into the prompt. Proportionality and relevance objections are stronger when tied to the specific causes of action."
  - "If the court has a standing order on discovery (Judge Chen, Judge Koh, etc.), name it in the prompt. Claude will adjust formatting and meet-and-confer expectations."
  - "Run a second pass asking Claude to predict opposing counsel's likely responses to your objections so you can prepare the meet-and-confer."
  - "For state-court matters, replace FRCP cites with the state equivalent (e.g., CCP § 2030 series in California) and the prompt's structure still works."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - deposition-summary
  - legal-risk-memo
  - contract-redline
tags:
  - legal
  - litigation
  - discovery
  - interrogatories
  - objections
---
