---
title: "Draft a cease-and-desist letter"
slug: cease-and-desist-draft
function: legal
role: ip
description: "Generate a measured, legally defensible cease-and-desist letter that gets compliance without inviting a declaratory judgment counter-suit or creating PR blowback."
useCase: "Use this when an infringement, trade secret misuse, or contract violation requires a formal demand. Cease-and-desist letters are tactical instruments — too soft and they're ignored, too aggressive and they trigger declaratory judgment actions or social-media counterfire. This prompt produces a calibrated draft for counsel finalization."
prompt: |
  You are an experienced IP litigator who has sent and received hundreds of cease-and-desist letters. Draft a cease-and-desist letter.

  Context:
  - Sender: {{sender}} (company name, address, signing attorney/counsel)
  - Recipient: {{recipient}} (company or individual, address, role)
  - Subject of the violation: {{subject}} (e.g., trademark, copyright, trade secret, NDA, non-solicit)
  - Specific facts of the alleged violation: {{facts}}
  - Evidence sender holds: {{evidence}}
  - Tone calibration: {{tone}} (firm-but-cooperative / firm / aggressive — note that aggressive should be rare)
  - Desired outcome: {{outcome}} (cessation only / cessation + accounting / cessation + monetary / preservation of evidence for pending litigation)
  - Deadline for response: {{deadline}}
  - Counter-litigation risk: {{counter_risk}} (e.g., recipient is in jurisdiction friendly to declaratory judgment, recipient has resources to fight)

  Output:

  1. **Pre-letter strategic note (1 page)** — Audience for this note is the sender's GC or business owner. Cover:
     - What this letter is designed to accomplish AND not accomplish
     - Risks of sending it (declaratory judgment, public response, escalation)
     - Three alternatives considered (e.g., direct phone call, informal email, no letter)
     - Why a written cease-and-desist is the right tool here
     - What the next move is if recipient does not comply or responds with denial

  2. **The letter itself** — Drafted to be sent on counsel letterhead. Include:
     - Date, recipient address, certified mail / email reference
     - Subject line that doesn't overclaim
     - Identification of sender's rights with specificity (registration numbers, contract sections)
     - Statement of the conduct alleged to violate those rights, with specific facts
     - Demand: what must stop, what must be returned/destroyed, what accounting is required
     - Deadline for written response
     - Reservation of rights
     - Signed by counsel
     - Avoid: hyperbole, threats not legally available, claims unsupported by evidence

  3. **Likely responses and your second move** — Three response scenarios (compliance, denial, counter-claim) and how to respond to each.

  4. **PR contingency** — If the recipient publishes the letter (and they often do), is it defensible as written? Note the language elements that protect against bad press.

  5. **Disclaimer** — That this is a draft for counsel finalization and that cease-and-desist letters carry litigation and PR risk requiring attorney judgment.
variables:
  - "{{sender}}"
  - "{{recipient}}"
  - "{{subject}}"
  - "{{facts}}"
  - "{{evidence}}"
  - "{{tone}}"
  - "{{outcome}}"
  - "{{deadline}}"
  - "{{counter_risk}}"
exampleInput: |
  sender: Northstar Robotics, Inc. (Delaware C-corp); signed by Liam O'Connor, General Counsel
  recipient: Vector Dynamics LLC, a competitor recently launched by a former Northstar engineer (Daniel Reyes, who left Northstar 9 months ago)
  subject: Suspected trade secret misuse and breach of PIIA / non-solicit
  facts: Vector Dynamics launched a motion-control product in October that bears notable similarity to Northstar's proprietary algorithms. Daniel Reyes had access to those algorithms during his employment. In the past 60 days, two additional Northstar engineers from Reyes's former team have given notice and indicated they're joining Vector Dynamics. Reyes signed a PIIA on hire that includes a 12-month non-solicit of Northstar employees.
  evidence: Daniel Reyes's signed PIIA. Departure dates and team membership of the two solicited engineers. Public-facing technical specs of Vector's product (gathered from their website and a recent trade publication). LinkedIn posts from Reyes "recruiting top motion-control engineers" within the non-solicit window.
  tone: Firm-but-cooperative. Goal is to stop the solicitation and preserve evidence in case litigation becomes necessary, without prematurely escalating to suit.
  outcome: (1) Immediate cessation of solicitation of Northstar employees. (2) Preservation of all communications between Reyes/Vector and Northstar employees. (3) Written confirmation that no Northstar trade secrets are being used. (4) Reservation of rights for further action including potential litigation.
  deadline: 14 days from receipt for written response
  counter_risk: Vector is small (~12 people), funded but not deep-pocketed. Likely jurisdiction is California (where Reyes is based). California is generally hostile to non-compete enforcement; non-solicit enforcement is also weakened post-AB 1076. Trade secret claims under DTSA and CUTSA are available regardless of California's restrictive-covenant posture.
exampleOutput: |
  # Pre-letter strategic note

  **To:** [GC / Business owner]
  **Re:** Proposed cease-and-desist to Vector Dynamics LLC

  ### What this letter is designed to accomplish

  - **Stop the active employee solicitation immediately.** This is the most concrete, time-sensitive harm. Two engineers in active recruitment can be stopped; engineers already departed cannot be reversed.
  - **Preserve evidence.** A formal preservation notice creates spoliation exposure for Vector if they delete communications. This is critical because future litigation (if any) will turn on whether trade secrets were taken and used.
  - **Position for potential trade secret litigation** without filing it. Filing a DTSA case is a major decision; a cease-and-desist that reserves rights gives us 30–60 days to investigate further before committing.

  ### What this letter is NOT designed to accomplish

  - We are not asserting infringement of specific trade secrets in this letter. We do not have direct evidence of misappropriation, only inference from the product's similarity. Asserting misappropriation without that evidence weakens future litigation and invites a defamation or declaratory judgment counter-claim.
  - We are not claiming the non-compete is enforceable in California. It likely is not. We are anchoring on the non-solicit and the trade secret duties, which survive regardless.

  ### Risks of sending this letter

  1. **Declaratory judgment counter-suit.** A well-drafted C&D in California can trigger a DJ action by Vector. The letter is designed to minimize this by avoiding overclaim and by phrasing demands in cooperative terms. Risk: low-medium.
  2. **Public disclosure.** Vector or Reyes may post the letter on social media to position Northstar as a bully. The letter language is calibrated to defend well in that scenario. Risk: medium.
  3. **Escalation.** A formal letter often hardens positions. Risk: medium, but the alternative (no letter) loses the preservation benefit and signals lack of seriousness.

  ### Three alternatives considered

  1. **Direct phone call from CEO to Vector founder.** Faster, less escalatory, but creates no preservation duty and no written record. Considered but rejected because of the active solicitation and spoliation risk.
  2. **Informal email from counsel.** Lighter weight, possibly preserves the relationship for negotiation. Rejected because it does not create a preservation obligation as cleanly.
  3. **No letter; investigate quietly.** Rejected because solicitation is ongoing and our window to stop it is closing.

  ### Why a written C&D is the right tool

  The combination of active ongoing harm (employee solicitation) and the need for a preservation order makes a formal letter the right instrument. The cooperative tone and limited assertions are designed to extract compliance without inviting suit.

  ### Next move if recipient does not comply or denies

  - **If Vector complies:** Confirm in writing, monitor for 90 days, decide whether to pursue a formal information request or trade secret discovery.
  - **If Vector denies and continues:** Within 7 days of the deadline, decide whether to file. If we file, expect to seek a TRO and expedited discovery.
  - **If Vector counter-claims (DJ):** Defend on the cooperative, evidence-supported tone of the letter; produce evidence in discovery.

  ---

  # The letter

  **[Northstar Robotics letterhead]**

  [Date]

  **VIA CERTIFIED MAIL AND EMAIL**

  Vector Dynamics LLC
  Attn: [Founder name]
  [Address]
  [Email]

  cc: Daniel Reyes
  [Email if known]

  **Re: Demand to Cease Solicitation of Northstar Employees and Preserve Evidence**

  Dear Vector Dynamics:

  I write on behalf of Northstar Robotics, Inc. ("Northstar") regarding the conduct of Vector Dynamics LLC ("Vector") and its founder Daniel Reyes, a former Northstar employee whose employment ended on [date].

  ### 1. Northstar's rights

  During his employment, Mr. Reyes signed a Proprietary Information and Inventions Assignment Agreement (the "PIIA") in which he agreed, among other things, that for a period of twelve (12) months following the end of his employment with Northstar, he would not directly or indirectly solicit, induce, or attempt to induce any Northstar employee to leave Northstar's employ. Section [X] of the PIIA. The non-solicit obligation remains in effect through [date], approximately [N] months from now.

  Mr. Reyes also continues to be bound by ongoing duties to Northstar concerning Northstar's confidential information and trade secrets, both under the PIIA and under applicable state and federal law including the Defend Trade Secrets Act, 18 U.S.C. § 1836 et seq., and the California Uniform Trade Secrets Act.

  ### 2. The conduct of concern

  Northstar has become aware that during the past sixty (60) days, two Northstar engineers from Mr. Reyes's former team at Northstar have given notice of resignation, and have stated that they are joining Vector. Public statements posted by Mr. Reyes on LinkedIn within the non-solicit period appear directed at recruiting motion-control engineers, a category that closely tracks his former Northstar team.

  Northstar takes no position in this letter as to whether any specific Northstar trade secrets have been disclosed to Vector. Northstar does, however, note that Vector's recently announced motion-control product appears to operate in technical territory closely overlapping work to which Mr. Reyes had material access while at Northstar.

  ### 3. Demand

  Northstar requests Vector's written confirmation, within fourteen (14) days of receipt of this letter, of the following:

  (a) That neither Vector nor Mr. Reyes will, for the remainder of the non-solicit period, directly or indirectly solicit any Northstar employee;
  (b) That neither Vector nor Mr. Reyes is using or will use any Northstar confidential information or trade secrets in Vector's products, operations, or recruiting;
  (c) That Vector and Mr. Reyes will preserve all documents, communications, and electronically stored information relating to (i) the recruitment or hiring of any Northstar employee, and (ii) the development of Vector's motion-control product, pending Northstar's further inquiry.

  Northstar is prepared to discuss these matters cooperatively and would welcome a written response addressing the above. If a written response is not received within the fourteen-day period, or if the response does not adequately address Northstar's concerns, Northstar will consider all of its rights and remedies, including without limitation injunctive relief and damages under DTSA, CUTSA, and applicable contract law.

  Nothing in this letter waives any of Northstar's rights, all of which are expressly reserved.

  Sincerely,

  Liam O'Connor
  General Counsel
  Northstar Robotics, Inc.
  [Email] | [Phone]

  ---

  # Likely responses and second moves

  ### Scenario A — Compliance and written confirmation
  **Likelihood:** Moderate. Vector is small and may want to avoid distraction.
  **Second move:** Confirm in writing. Continue independent investigation. Monitor for 90 days. If no further indications of misappropriation, close the file. If indications surface, escalate via discovery vehicle (subpoena, deposition under preservation order, or filed action with expedited discovery).

  ### Scenario B — Denial / partial response
  **Likelihood:** Likely. Vector may deny solicitation and trade secret use without committing to specific preservation.
  **Second move:** Reply within 7 days seeking specific preservation commitments. If still inadequate, file a complaint and seek a TRO + expedited discovery. The preservation request in this letter, if ignored, is the foundation for a strong spoliation argument.

  ### Scenario C — Counter-attack / declaratory judgment
  **Likelihood:** Lower but not negligible (12-person company, limited resources to fight DJ proactively).
  **Second move:** Defend on the measured tone and limited assertions of the letter; produce the evidence (LinkedIn posts, departure dates, PIIA) in discovery. The cooperative framing of this letter should make a tortious-interference or unfair-competition counter-claim weak.

  ---

  # PR contingency

  If Vector publishes this letter, the language is defensible:
  - The letter does not allege misappropriation of trade secrets, only requests preservation
  - The letter explicitly says Northstar takes no position on whether trade secrets have been disclosed
  - The letter is cooperative in tone ("welcome a written response," "discuss these matters cooperatively")
  - The non-solicit demand is grounded in a signed contract, not a non-compete
  - No threats of criminal referral, no overclaiming damages

  If published, the company can credibly say: "We sent a measured letter to Vector reminding them of contractual obligations a former employee signed and asking them to preserve evidence. We continue to take our employees' obligations to Northstar seriously."

  Avoid responding to public framing on social media; route any media inquiries to GC and CEO.

  ---

  # Disclaimer

  This is a draft cease-and-desist letter and strategy memo for finalization by counsel. Cease-and-desist letters carry significant litigation and PR risk and should not be sent without attorney review of the specific facts, jurisdiction, and recipient context. The legal authorities cited (PIIA enforceability, DTSA, CUTSA, California restrictive covenant law) require fact-specific analysis. This document is not legal advice.
tips:
  - "Calibrate tone to the goal. The most common drafting error is overclaim — asserting misappropriation when you only have inference. Overclaiming weakens later litigation and invites declaratory judgment actions."
  - "Always include a preservation request even when you're not yet litigating. The duty to preserve attaches when litigation is reasonably anticipated, and your letter is the moment that becomes documentable."
  - "Assume the recipient will publish the letter. Draft for the audience of (a) the recipient's counsel, and (b) a potential reader on Twitter / LinkedIn. Both should find the letter measured and credible."
  - "Not legal advice. Cease-and-desist letters can trigger litigation, regulatory complaints, or PR responses. The decision to send and the final language must be made by licensed litigation counsel familiar with the jurisdiction and facts."
  - "If the recipient is in California and your case rests on a non-compete, the letter strategy needs to shift entirely. California's restrictive-covenant rules require anchoring on contract obligations that survive (non-solicit, confidentiality) and trade secret duties — not on the non-compete itself."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - trade-secret-protection-policy
  - ip-assignment-review
  - legal-risk-memo
tags:
  - cease-and-desist
  - trade-secret
  - litigation
  - non-solicit
  - ip-enforcement
---
