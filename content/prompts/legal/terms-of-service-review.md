---
title: "Review Terms of Service for key risks and gaps"
slug: terms-of-service-review
function: legal
role: compliance
description: "Review a Terms of Service agreement to identify provisions that create legal risk, fail to adequately protect the business, or expose users to unfair terms — with specific improvements for each finding."
useCase: "Use this prompt before launching a new product, when updating existing ToS, when adding a new feature that changes how user data is used, or when legal counsel needs a first-pass review before their detailed analysis."
prompt: |
  You are a technology attorney reviewing a Terms of Service agreement. Analyze the ToS from both the company's perspective (legal protection) and the user's perspective (fairness and compliance).

  **Product/service:** {{product}} (what the product does)
  **Business model:** {{business_model}} (subscription, marketplace, freemium, advertising, etc.)
  **User types:** {{user_types}} (consumers, businesses, or both; any regulated user types like minors, healthcare)
  **Key features relevant to ToS:** {{features}} (any features that involve user content, payments, data, AI, etc.)
  **Applicable jurisdictions:** {{jurisdictions}}
  **ToS text:**
  ```
  {{tos_text}}
  ```
  **Specific concerns:** {{concerns}}

  Review the ToS for:

  ## Executive Summary
  Overall assessment of the ToS's adequacy. What are the top 3 risks to the business? What are the top 3 issues for users?

  ## Business Protection Assessment

  ### Limitation of Liability
  - Is the liability limitation enforceable in the target jurisdictions?
  - Does it adequately protect the business from high-value claims?
  - Any scenarios where it might not apply?

  ### Intellectual Property
  - Who owns user-generated content?
  - Is the license grant from users sufficient for the business model?
  - Are the company's IP rights adequately protected?

  ### Acceptable Use
  - Are prohibited uses clearly defined?
  - Is the enforcement mechanism (suspension/termination) clearly established?
  - Any gaps that could be exploited?

  ### Account Termination
  - Does the company have adequate discretion to terminate accounts?
  - Is there a dispute process?
  - What happens to user data on termination?

  ### Dispute Resolution
  - Is there an arbitration clause? Is it enforceable?
  - Class action waiver?
  - Governing law and jurisdiction?

  ## User Fairness and Regulatory Compliance

  ### Transparency
  - Are material terms clearly communicated?
  - Any buried or misleading provisions?

  ### Consumer Protection
  - Do any provisions violate consumer protection laws in target jurisdictions?
  - Are there any unfair commercial practices?
  - EU: Do provisions comply with the Unfair Commercial Practices Directive and Consumer Rights Directive?

  ### GDPR/Privacy Integration
  - Is the ToS consistent with the privacy policy?
  - Does the ToS create obligations not addressed in the privacy policy (or vice versa)?

  ### Minor Users
  - Are there adequate provisions for users who may be minors?
  - COPPA compliance (if applicable)?

  ## Missing Provisions
  Standard provisions that are absent and should be added.

  ## Provisions to Modify
  Provisions that are present but require strengthening or narrowing.

  ## Red Flags
  Provisions that create immediate legal risk or would be immediately challenged in litigation.
variables:
  - "{{product}}"
  - "{{business_model}}"
  - "{{user_types}}"
  - "{{features}}"
  - "{{jurisdictions}}"
  - "{{tos_text}}"
  - "{{concerns}}"
exampleInput: |
  product: Beacon HR — survey and engagement analytics platform
  business_model: B2B SaaS subscription; enterprise customers pay Beacon; customers' employees are end users
  user_types: Primarily business customers (enterprise HR teams) and their employees. Some customers in regulated industries (healthcare, financial services).
  features: |
    - Survey creation and distribution
    - Employee response collection (not anonymous — managers see responses)
    - AI-powered analysis of responses (new feature)
    - Manager dashboards with employee-level data
  jurisdictions: US (primarily), EU, UK, Canada
  tos_text: |
    TERMS OF SERVICE

    By using Beacon, you agree to these Terms. If you do not agree, do not use Beacon.

    1. SERVICE. Beacon provides HR survey software. We may change the Service at any time.

    2. YOUR CONTENT. You own your content. By submitting content to Beacon, you grant us a worldwide license to use, reproduce, and distribute your content for any purpose.

    3. ACCEPTABLE USE. You may not use Beacon illegally or to harass others.

    4. TERMINATION. We may terminate your account at any time for any reason.

    5. LIABILITY. TO THE MAXIMUM EXTENT PERMITTED BY LAW, BEACON IS NOT LIABLE FOR ANY DAMAGES. OUR LIABILITY IS LIMITED TO $100.

    6. DISPUTES. These Terms are governed by Delaware law. Disputes shall be resolved in courts in Delaware.

    7. CHANGES. We may change these Terms at any time. Continued use means you accept the changes.
  concerns: |
    - Section 2 grants us a license to use employee content "for any purpose" — this seems too broad given AI feature
    - Section 5 caps liability at $100 but enterprise deals are $100K+/year
    - No arbitration clause — we want one
    - Section 7 allows changes without notice — this may not be enforceable in EU
    - No mention of AI use of data — new feature
exampleOutput: |
  ## Executive Summary

  This ToS is dangerously inadequate for an enterprise B2B SaaS company processing sensitive employee data for large customers. It has three critical business protection failures: the $100 liability cap is almost certainly unenforceable in B2B enterprise contracts and, if it fails in court, leaves Beacon with unlimited liability; the user content license grants Beacon rights to use employee responses "for any purpose" — a scope that exceeds what GDPR and customer expectations permit; and the change-of-terms provision allows unilateral changes without notice, which is unenforceable against EU users and likely unenforceable in the US against enterprise customers with negotiated contracts. This needs a complete rewrite, not incremental fixes.

  **Top 3 business risks:**
  1. The $100 liability cap will not protect Beacon in enterprise contract disputes
  2. The "any purpose" content license creates GDPR violations and customer relationship risk
  3. Absence of arbitration clause exposes Beacon to class action litigation

  **Top 3 user issues:**
  1. No meaningful description of what employees' data is used for
  2. Termination without cause with no notice period violates EU consumer protections
  3. "Continued use = acceptance" for material changes is deceptive and unenforceable in EU

  ---

  ## Business Protection Assessment

  ### Limitation of Liability (Section 5)

  **Issue 1 — $100 cap is commercially absurd:** The $100 absolute cap will not hold up in commercial litigation against enterprise customers paying $100K–$500K/year. Courts routinely void liability caps that are grossly disproportionate to the contract value, particularly in B2B relationships where the parties have bargaining power. Even where the cap is technically enforceable, it creates friction in enterprise sales.

  **Recommended approach:** The correct enterprise SaaS liability cap is a multiple of fees paid — typically 3–12 months of annual contract value. This is commercially defensible and protects against catastrophic unlimited liability while being realistic.

  **Issue 2 — No exclusion of consequential damages:** The "not liable for any damages" language should more specifically disclaim indirect, incidental, special, and consequential damages, with specific carve-outs:
  - Remove carve-outs for death/personal injury
  - EU mandatory consumer protections (not applicable here — B2B)
  - Company fraud or willful misconduct (you cannot disclaim liability for your own intentional acts)

  ### Intellectual Property (Section 2)

  **Critical issue — "For any purpose" license:** The license grant from users ("worldwide license to use, reproduce, and distribute your content for any purpose") is dangerously overbroad:

  1. **GDPR incompatibility:** GDPR requires that personal data (which employee survey responses are) be processed only for specified, explicit, and legitimate purposes. A license "for any purpose" is incompatible with this requirement. This clause creates a GDPR violation.

  2. **AI feature incompatibility:** The AI Insights feature uses employee responses to generate insights. The "any purpose" license might seem to cover this — but it doesn't adequately address whether employee responses can be used to train AI models (which you've told customers they can't be). The ToS and your actual practices are misaligned.

  3. **Enterprise customer expectations:** Enterprise customers will expect that their employees' responses are used only to provide the service to them. A "for any purpose" license contradicts what enterprise sales teams are telling customers.

  **Recommended replacement:**
  > "You retain ownership of content you submit to Beacon. By submitting content, you grant Beacon a limited, worldwide, royalty-free license to process, store, and use that content solely to provide and improve the Service to you. Beacon does not use your content to train AI or machine learning models. This license terminates when your account is terminated or your content is deleted."

  ### Acceptable Use (Section 3)

  The current acceptable use policy ("not illegally or to harass others") is too vague to be enforceable and doesn't address the actual risks of misuse on an HR platform:
  - What happens if a manager uses Beacon data to discriminate in employment decisions?
  - What happens if a customer violates their own employment laws in how they use response data?
  - What obligations do customers have to their employees about data collection?

  **Add to AUP:**
  > "You are responsible for ensuring that your use of Beacon complies with all applicable employment, privacy, and anti-discrimination laws. You may not use Beacon data to make employment decisions based on protected characteristics. You represent that you have the authority to collect and process employee data using Beacon in the manner described in your agreement with employees."

  ### Account Termination (Section 4)

  "At any time for any reason" is appropriate for consumer products but creates legal and commercial risk for enterprise B2B:
  - Enterprise customers have negotiated contracts with specific termination provisions — the ToS cannot override a negotiated MSA
  - Immediate termination without notice may violate implied covenant of good faith in some US states
  - EU B2B Directive (in some EU countries) requires notice for commercial contract termination

  **Recommended approach:** For enterprise customers, termination provisions in the MSA should govern. The ToS should clarify: "These Terms apply except where you have a separate Master Subscription Agreement with Beacon, in which case the MSA governs."

  ### Dispute Resolution (Section 6)

  **Missing arbitration clause:** No arbitration clause means Beacon can be sued in any competent court. Without a class action waiver, class actions are possible for data breaches affecting multiple customers' employees.

  **Recommended addition:**
  > "ARBITRATION AGREEMENT. YOU AND BEACON AGREE TO RESOLVE DISPUTES THROUGH BINDING INDIVIDUAL ARBITRATION RATHER THAN IN COURT, EXCEPT THAT EITHER PARTY MAY SEEK RELIEF IN COURT FOR IP INFRINGEMENT OR INJUNCTIVE RELIEF. CLASS ACTIONS ARE NOT PERMITTED. Arbitration will be conducted under the AAA Commercial Rules in Delaware."

  **Note:** Arbitration clauses have varying enforceability across jurisdictions. EU courts generally do not enforce mandatory arbitration for consumer disputes. For B2B, enforceability is stronger. Have jurisdiction-specific counsel review.

  ---

  ## User Fairness and Regulatory Compliance

  ### Transparency (Section 7 — Unilateral Changes)

  "We may change these Terms at any time. Continued use means you accept the changes." This is:
  - Unenforceable against EU users — the Consumer Rights Directive requires reasonable notice and true assent
  - Potentially unenforceable against enterprise customers with negotiated contracts — "continued use" is not meaningful assent for a company with 500 employees using the platform
  - A pattern courts increasingly refuse to enforce even in the US

  **Recommended replacement:**
  > "We may modify these Terms. For material changes, we will provide at least 30 days' notice by email or in-app notification. For minor changes, we will update the 'Last Updated' date. Your continued use after the notice period constitutes acceptance. If you do not accept material changes, you may terminate your account before the changes take effect."

  ### AI Feature Disclosure

  **Critical gap:** The ToS makes no mention of AI processing of user content. The AI Insights feature uses employee survey responses through an LLM. This must be disclosed:
  - GDPR Article 22 requires disclosure of automated decision-making and profiling
  - Users (both customers and employees) have a right to know their data is processed by AI
  - The absence of disclosure makes the AI feature a surprise that violates GDPR's transparency principle

  **Add new section:**
  > "AI-POWERED FEATURES. Beacon offers optional AI-powered features, including AI Insights, which analyze survey response data using artificial intelligence to generate summaries and recommendations. When you use these features, response data is processed by our AI systems. This processing is governed by our Privacy Policy. AI-generated insights are not autonomous decisions — they are provided to assist human managers. Beacon does not use your survey response data to train AI models."

  ---

  ## Missing Provisions

  1. **Force Majeure:** No provision addressing inability to perform due to events beyond Beacon's control.
  2. **SLA reference:** For enterprise customers, the ToS should reference any uptime SLA.
  3. **Export control:** No clause restricting use in sanctioned countries.
  4. **Assignment:** Can Beacon assign the agreement in an acquisition? Must be addressed.
  5. **Entire agreement / integration clause:** Without this, prior representations could be treated as part of the contract.

  ## Red Flags

  - **$100 liability cap + enterprise pricing = class action exposure:** If the cap is void (likely), Beacon has no liability protection. Fix this before signing another enterprise deal.
  - **"For any purpose" content license + GDPR = active violation:** This is not a future risk — if EU employee data is processed under this license, there is a current GDPR violation.
  - **Unilateral change provision + EU users = unenforceable Terms:** Beacon cannot rely on these Terms for EU users as written.
tips:
  - "The two most important provisions in any ToS are the liability cap and the content license — get both right before worrying about anything else."
  - "Enterprise B2B ToS and consumer ToS serve different purposes. A consumer ToS designed to protect against class actions needs very different provisions than an enterprise ToS designed to allocate risk in commercial relationships."
  - "If your ToS says one thing and your sales team is telling customers something different, the ToS controls — and both create liability. Align them."
  - "This review identifies legal issues for qualified counsel. Any revised Terms of Service should be reviewed by a licensed attorney in the applicable jurisdictions before publication."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - privacy-policy-review
  - legal-risk-memo
  - compliance-gap-analysis
  - contract-summary
tags:
  - terms-of-service
  - legal
  - compliance
  - product
  - risk
---
