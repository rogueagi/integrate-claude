---
title: "Review an NDA for key risks and missing protections"
slug: nda-review
function: legal
role: contracts
description: "Analyze a non-disclosure agreement to identify provisions that expose sensitive information, unfairly limit remedies, or create obligations beyond what the business relationship requires — with suggested revisions."
useCase: "Use this prompt before signing any NDA, whether you're sharing or receiving confidential information. NDAs are often treated as routine — but a poorly drafted NDA can limit your remedies after a breach or expose more information than you intended."
prompt: |
  You are a senior contracts attorney reviewing a non-disclosure agreement. Analyze this NDA and identify risks, missing protections, and provisions that should be negotiated.

  **Our role:** {{our_role}} (disclosing party, receiving party, or mutual — disclosing and receiving)
  **Purpose of the NDA:** {{purpose}} (e.g., vendor evaluation, M&A due diligence, partnership discussion, employment)
  **What information we'll be sharing:** {{our_information}} (types of information — financial projections, source code, customer lists, trade secrets, etc.)
  **What information we'll be receiving:** {{their_information}} (types of information we'll have access to)
  **Counterparty type:** {{counterparty}} (competitor, potential customer, vendor, investor, employee, potential acquirer)
  **NDA text:**
  ```
  {{nda_text}}
  ```
  **Any specific concerns:** {{concerns}}

  Review the NDA for:

  ## Overall Assessment
  Is this NDA appropriate for the purpose described? What's the overall risk to us as-written? What's the single most important change needed?

  ## Definition of Confidential Information
  - Is the definition appropriate — neither too narrow (misses things we need protected) nor too broad (creates obligations to protect information we can't realistically manage)?
  - Does it cover all the types of information we'll be sharing or receiving?
  - How are oral disclosures handled?

  ## Obligations Review
  For each obligation placed on the receiving party:
  - Is the obligation reasonable?
  - Are the required safeguards achievable in practice?
  - Any obligations that could conflict with our business operations?

  ## Exclusions from Confidentiality
  - Are the standard exclusions present? (public domain, independently developed, received from third party, required by law)
  - Any exclusions that are too broad and could swallow protections we need?

  ## Term and Duration
  - How long does the NDA last?
  - How long do obligations survive termination?
  - Are these appropriate for the type of information being shared?

  ## Remedies and Enforcement
  - Is injunctive relief (not just monetary damages) available?
  - Are there any limitations on remedies that would make breach effectively unpunishable?
  - Is governing law and jurisdiction favorable?

  ## Special Provisions to Watch For
  - Non-solicitation of employees or customers
  - Non-compete obligations (especially for employment NDAs)
  - Rights to use the information for anything beyond the stated purpose
  - Residual knowledge clauses (allow recipient to use information retained in memory)

  ## Missing Provisions
  Protections that should be in this NDA but aren't.

  ## Suggested Redlines
  For each significant issue, a suggested revision.
variables:
  - "{{our_role}}"
  - "{{purpose}}"
  - "{{our_information}}"
  - "{{their_information}}"
  - "{{counterparty}}"
  - "{{nda_text}}"
  - "{{concerns}}"
exampleInput: |
  our_role: Primarily disclosing (we're sharing our technology; they'll share minimal information about their infrastructure)
  purpose: Vendor evaluation — we're considering a third-party AI vendor to process our customer data. We need to share our data model, anonymized customer behavior data, and technical architecture to get a meaningful evaluation.
  our_information: Data model/schema, anonymized customer behavioral data, technical architecture documents, roadmap
  their_information: Their API documentation and pricing (largely public)
  counterparty: AI technology vendor — not a direct competitor but operates in adjacent space
  nda_text: |
    1. Definition. "Confidential Information" means any information disclosed by either party that is marked "Confidential" or that a reasonable person would understand to be confidential given the nature of the information and circumstances of disclosure.

    2. Obligations. The receiving party agrees to: (a) hold Confidential Information in confidence using at least the same care it uses for its own confidential information; (b) not disclose to third parties without prior written consent; (c) use only for purposes of evaluating the potential business relationship.

    3. Exclusions. Confidential Information does not include information that: (a) is or becomes publicly available without breach; (b) was known prior to disclosure; (c) is independently developed; (d) is disclosed pursuant to legal requirement.

    4. Term. This Agreement shall remain in effect for one (1) year from the date of execution. Obligations of confidentiality shall survive for two (2) years following termination.

    5. Residual Knowledge. Nothing in this Agreement shall restrict either party from using Residual Knowledge. "Residual Knowledge" means any information retained in the unaided memories of individuals who had access to Confidential Information.

    6. Governing Law. This Agreement shall be governed by the laws of the State of California.
  concerns: |
    - The residual knowledge clause worries me — our AI models are in people's heads, not just documents
    - One year term seems short for M&A discussions but may be okay for vendor eval
    - Not sure if "same care as own confidential information" is enough for our trade secrets
exampleOutput: |
  ## Overall Assessment

  This NDA has one provision that is potentially deal-ending for your use case: the Residual Knowledge clause (Section 5). This clause allows their employees to use anything they "retain in unaided memory" after the engagement — including your data model, architectural decisions, and key technical insights from your codebase. For an AI vendor that employs engineers who will study your system, this is a significant loophole. Everything else is fixable or acceptable.

  **Priority changes:** Delete or narrow Section 5 (Residual Knowledge). Extend confidentiality survival to 5 years. Add purpose limitation.

  ## Definition of Confidential Information

  **Section 1 as written:** "marked Confidential or that a reasonable person would understand to be confidential."

  **Risk:** The "reasonable person" standard for unmarked information is good — it captures information we forget to label. However, when sharing data models, architectural documents, and anonymized behavioral data, we should also explicitly label everything in writing. Verbal disclosures are not addressed — add a requirement to confirm oral disclosures in writing within 5 business days.

  **Suggested revision:**
  > Add to Section 1: "Oral disclosures shall be confirmed in writing within five (5) business days of disclosure, identifying the general subject matter of the disclosed information. Failure to confirm shall not affect the confidential nature of information a reasonable person would understand to be confidential."

  **Coverage assessment:** The definition adequately covers the types of information you'll be sharing (data models, architecture, roadmap). No change needed to the core definition.

  ## Obligations Review

  **Section 2(a) — "Same care as own confidential information":** This is the minimum standard. For vendors that handle many clients' data, their internal care standard may not match what your trade secrets require.

  **Suggested revision:**
  > "(a) hold Confidential Information in confidence using at least the same care it uses for its own confidential information, **but in no event less than reasonable care**;"

  **Section 2(c) — Use limitation:** "Evaluating the potential business relationship" is appropriate. Confirm this is narrow enough to prevent them from using your data model insights to build a competing feature. It should be. No change needed.

  ## Exclusions from Confidentiality

  **Section 3 as written:** All four standard exclusions are present. No issues.

  **Section 3(d) — Legal requirement disclosure:** Standard language. Consider adding a notice requirement:
  > "(d) is disclosed pursuant to legal requirement, **provided that the receiving party provides reasonable advance notice to the disclosing party prior to disclosure to permit the disclosing party to seek a protective order**;"

  ## Term and Duration

  **Section 4:** 1-year term, 2-year survival of confidentiality obligations.

  **Risk:** For a vendor evaluation involving trade secrets (data model, architecture), a 2-year obligation survival is short. If the evaluation ends without a deal, they retain your architectural knowledge and can use it freely after 2 years. This is particularly risky for information like your data model that has long-term competitive value.

  **Suggested revision:**
  > "Obligations of confidentiality shall survive for ~~two (2)~~ **five (5)** years following termination."

  **Assessment:** The 1-year agreement term is fine for a vendor evaluation that should conclude in months. The survival period is the issue.

  ## Remedies and Enforcement

  **Assessment:** The NDA does not include an injunctive relief provision. This is a significant omission. If they breach the NDA, you may need to seek emergency injunctive relief to stop ongoing misuse — without an explicit clause, you'd need to argue for it rather than pointing to a contractual right.

  **Missing provision to add:**
  > "The parties acknowledge that any breach of this Agreement would cause irreparable harm to the disclosing party for which monetary damages would be an inadequate remedy, and that the disclosing party shall be entitled to seek equitable relief, including injunction, without the requirement of posting bond."

  **Governing law — California:** Favorable for the disclosing party. California trade secret law (CUTSA) provides strong protections and is well-developed. No change recommended.

  ## Special Provisions to Watch For

  **Section 5 — Residual Knowledge (Critical Issue)**

  This clause permits either party's employees to use "any information retained in the unaided memories" of anyone who had access to Confidential Information. For you, this means:

  - Engineers who study your data model can build from that knowledge after the engagement ends
  - Architects who review your technical design can apply those insights to their own or other clients' systems
  - This is not a theoretical risk — this clause was designed precisely for AI/ML companies whose employees study clients' systems

  **This clause should be deleted.** If the counterparty insists on retaining some form, negotiate to this position:
  > **Fallback:** "Nothing in this Agreement shall restrict individuals from using knowledge or skills of a general professional nature developed during the evaluation, provided such use does not constitute the disclosure or use of specific Confidential Information."

  This fallback protects general professional development while prohibiting use of your specific proprietary information.

  **No non-solicitation provision:** Given this is a vendor evaluation, the absence of mutual non-solicitation of employees is acceptable. If the engagement is longer or involves close collaboration, consider adding it.

  ## Missing Provisions

  **Return or destruction of information:** No provision requires the vendor to return or destroy your Confidential Information if the deal doesn't proceed. Add:
  > "Upon written request of the disclosing party or upon termination of this Agreement, the receiving party shall promptly return or certifiably destroy all Confidential Information and any copies thereof, and certify such destruction in writing within ten (10) business days."

  **No publicity clause:** The NDA doesn't restrict either party from disclosing that discussions are occurring. For a sensitive vendor evaluation, add:
  > "Neither party shall disclose the existence of discussions under this Agreement without the other party's prior written consent."

  **Purpose limitation for data:** You are sharing anonymized behavioral data. Add explicit prohibition on using that data to build, train, or improve AI models:
  > "Notwithstanding Section 2(c), Receiving Party shall not use any Customer Data provided pursuant to this Agreement to train, test, or improve any machine learning or artificial intelligence model."

  ## Suggested Redlines Summary

  | Section | Issue | Priority |
  |---|---|---|
  | 5 (Residual Knowledge) | Delete — permits use of retained knowledge of your data model and architecture | Must-change |
  | 4 (Survival) | Extend from 2 to 5 years | Must-change |
  | Missing | Add injunctive relief provision | Must-change |
  | Missing | Add return/destroy provision | Should-change |
  | 3(d) | Add notice before compelled disclosure | Should-change |
  | 2(a) | Add "not less than reasonable care" floor | Nice-to-have |
  | Missing | Add no-publicity clause | Nice-to-have |
  | Missing | Add data-for-AI-training prohibition | Nice-to-have |
tips:
  - "The Residual Knowledge clause is the NDA provision most consistently abused by sophisticated counterparties — always look for it and understand its implications before signing."
  - "The survival period after termination is more important than the NDA term itself. A 1-year NDA that survives 2 years is weaker protection than a 1-year NDA surviving 5 years."
  - "Always add a return-or-destroy provision. Without it, the counterparty holds your information forever even if the deal doesn't proceed."
  - "This review is not legal advice. Have qualified legal counsel in your jurisdiction review any NDA before signing."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - contract-summary
  - contract-redline
  - vendor-contract-playbook
  - ip-assignment-review
tags:
  - nda
  - contracts
  - legal
  - confidentiality
  - risk
---
