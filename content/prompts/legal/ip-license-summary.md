---
title: "Summarize and assess an IP license agreement"
slug: ip-license-summary
function: legal
role: ip
description: "Analyze an intellectual property license agreement to clearly explain what rights are granted, what restrictions apply, what obligations exist, and what risks the licensee or licensor is taking on."
useCase: "Use this prompt when evaluating a software license, patent license, content license, or technology license — to understand what you're actually getting (or giving) before signing."
prompt: |
  You are an intellectual property attorney summarizing a license agreement for business stakeholders. Provide a clear, actionable analysis of the rights, restrictions, obligations, and risks in this license.

  **Type of license:** {{license_type}} (software, patent, trademark, content/copyright, technology, data)
  **Our role:** {{our_role}} (licensor — granting rights / licensee — receiving rights)
  **What is being licensed:** {{licensed_ip}} (description of the IP being licensed)
  **How we intend to use it:** {{intended_use}} (our specific planned use case)
  **License text:**
  ```
  {{license_text}}
  ```
  **Specific concerns:** {{concerns}}

  Provide:

  ## License Summary
  In plain English: What exactly are we allowed to do with this IP? What are we not allowed to do?

  ## Rights Granted
  - Scope of rights (make, use, sell, import, sublicense, etc.)
  - Geographic scope
  - Field of use limitations
  - Exclusivity (exclusive, non-exclusive, sole)
  - Term and duration

  ## Key Restrictions and Limitations
  List every restriction that limits how we can use the licensed IP:
  - Geographic limitations
  - Field of use limitations
  - Sublicensing restrictions
  - Modification rights
  - Distribution restrictions
  - Competitive use restrictions

  ## Our Obligations as Licensee (or Their Obligations as Licensee)
  - Payment obligations (royalties, fees, minimums)
  - Reporting obligations
  - Quality control obligations
  - Attribution and marking requirements
  - Audit rights

  ## Risk Analysis

  ### Termination Risk
  Under what conditions can the license be terminated? What happens to our products/services if the license is terminated?

  ### IP Validity Risk
  Is there any indication the underlying IP rights may be challenged or invalid?

  ### Third-Party IP Risk
  Does the licensor represent that the IP doesn't infringe third-party rights? What's the indemnification arrangement?

  ### Change of Control Risk
  What happens to the license if either party is acquired?

  ## Fit Assessment
  Does this license actually cover our intended use? Are there any gaps between what the license grants and what we need?

  ## Red Flags
  Any provisions that should be negotiated before signing.
variables:
  - "{{license_type}}"
  - "{{our_role}}"
  - "{{licensed_ip}}"
  - "{{intended_use}}"
  - "{{license_text}}"
  - "{{concerns}}"
exampleInput: |
  license_type: Technology / patent license
  our_role: Licensee (receiving rights)
  licensed_ip: A portfolio of 12 US patents covering methods for natural language processing and text sentiment analysis
  intended_use: We plan to incorporate these patented NLP methods into our AI Insights product feature, which analyzes employee survey responses and generates summaries for HR managers. We intend to offer this feature globally to our enterprise customers.
  license_text: |
    1. GRANT. Licensor grants Licensee a non-exclusive, non-transferable license to practice the Licensed Patents solely in the Field of Use, solely in the Territory.

    2. FIELD OF USE. "Field of Use" means: Natural language processing applications for human resources software, specifically excluding any use in recruitment, hiring, or talent acquisition software.

    3. TERRITORY. United States only.

    4. SUBLICENSING. Licensee may not sublicense any rights under this Agreement without Licensor's prior written consent.

    5. ROYALTIES. Licensee shall pay Licensor a running royalty of 8% of Net Revenue attributable to products incorporating the Licensed Patents.

    6. MINIMUM ROYALTIES. Licensee shall pay minimum annual royalties of $50,000, regardless of Net Revenue.

    7. TERMINATION. Licensor may terminate this Agreement immediately if Licensee challenges the validity of any Licensed Patent.

    8. REPRESENTATIONS. Licensor makes no representation regarding the validity or enforceability of the Licensed Patents or whether the Licensed Patents are infringed by Licensee's products without the license.

    9. INDEMNIFICATION. Licensor shall have no obligation to indemnify Licensee for any third-party claim of infringement.
  concerns: |
    - Territory is US-only but we sell globally
    - Field of use excludes recruitment but our HR platform has some recruiting features
    - 8% royalty seems high
    - The no-challenge clause (Section 7) is concerning
    - No indemnification from licensor
exampleOutput: |
  ## License Summary

  Under this license, you can use these 12 NLP/sentiment analysis patents inside HR management software — but only in the United States, and the field of use explicitly excludes any recruitment or hiring use. This means:
  - **Allowed:** AI Insights feature analyzing survey responses for existing employees in the US
  - **Not allowed:** Using the same methods outside the US (you'd need a separate license)
  - **Gray area:** Any features of your platform that touch recruiting may be outside the field of use

  Before proceeding, you need to resolve two deal-breaking gaps: the US-only territory doesn't cover your global customer base, and the exclusion of "recruitment, hiring, or talent acquisition software" may sweep in existing parts of your product.

  ---

  ## Rights Granted

  | Dimension | What's Granted |
  |---|---|
  | Type | Non-exclusive (Licensor can license others) |
  | Rights | Practice (make, use, sell) the Licensed Patents |
  | Geography | United States only |
  | Field | HR software — excludes recruitment/hiring |
  | Sublicensing | Not permitted without written consent |
  | Term | Not stated — indefinite unless terminated |
  | Transferability | Non-transferable (cannot be assigned in acquisition) |

  ---

  ## Key Restrictions and Limitations

  **1. US-Only Territory — Critical Gap**
  You sell globally. EU, UK, and Canadian customers cannot be served using these patents without separate licenses (if parallel patents exist in those countries) or without risk of infringement. If you deploy the AI Insights feature globally, you're using methods protected by these patents internationally without a license.

  **Impact:** Either negotiate an expanded territory or accept that AI Insights is US-only until additional licenses are obtained.

  **2. Field of Use — Potential Overlap**
  "Natural language processing for human resources software, specifically excluding any use in recruitment, hiring, or talent acquisition software." If your platform has any features used in recruiting contexts (job description analysis, candidate communication, onboarding surveys that touch hiring), those uses may fall outside the field of use.

  **Key question:** Do any of your existing or planned features touch recruiting? If yes, that portion of use is not licensed and creates infringement risk.

  **3. No Sublicensing Without Consent**
  You cannot sublicense the patents to your customers (most SaaS vendors implicitly sublicense to customers). Get written confirmation that providing the AI Insights feature to your customers as a SaaS service constitutes "practicing" the patent (the licensor), not "sublicensing." This is a common ambiguity in software patent licenses.

  ---

  ## Our Obligations as Licensee

  **Royalties — 8% of Net Revenue (Section 5)**
  8% is a high royalty rate for a running royalty on a patent license in software. Industry range for software-related patents is typically 2–5%. At 8%, if AI Insights generates $1M in revenue, you owe $80,000 in royalties annually — in addition to the $50K minimum.

  **What is "Net Revenue"?** Not defined in the provided text. This is a critical omission — does it include the full subscription price? Only the portion of the subscription attributable to AI Insights? Gross revenue? Revenue after credits and refunds? This must be defined precisely before signing.

  **Minimum Royalties — $50,000/year (Section 6)**
  You owe $50,000/year regardless of whether AI Insights generates any revenue. This creates fixed cost exposure from day one and represents significant risk if the feature takes time to generate revenue or is delayed. Negotiate to eliminate or phase in the minimum.

  ---

  ## Risk Analysis

  ### Termination Risk (Section 7) — Critical Issue

  **No-Challenge Clause:** "Licensor may terminate this Agreement immediately if Licensee challenges the validity of any Licensed Patent."

  This clause prevents you from ever challenging whether these patents are valid. Patents are presumed valid in the US but can be challenged at the USPTO (inter partes review) or in court. The no-challenge clause means:
  - If you later discover one of these patents is invalid (prior art exists, etc.), you can't challenge it or your license terminates
  - If a third party challenges the patents and they're found invalid, your license terminates (you'd no longer need it, but it creates uncertainty)
  - This is a significant surrender of rights — no-challenge clauses are valid in the US but uncommon and disfavored

  **Negotiate:** Request that the no-challenge clause be removed, or at minimum that it not apply to validity challenges brought defensively in response to a licensor lawsuit.

  **No specified term:** The license has no stated expiration date but can be terminated immediately for any patent challenge. This creates an indefinite commitment with a one-sided exit right.

  ### No Representations on Patent Validity (Section 8)

  Licensor explicitly does NOT represent that the patents are valid or infringed without the license. This means:
  - You may be paying for patents that are already invalid
  - You may not even need the license (your products may not infringe)
  - Licensor has no skin in the game if the patents are challenged

  **Recommend:** Before signing, have an FTO (Freedom to Operate) analysis conducted by a patent attorney to determine whether your AI Insights feature actually needs this license and whether the patents appear valid.

  ### No Indemnification (Section 9)

  Licensor will not indemnify you against third-party infringement claims. If a third party claims your use of the AI Insights feature infringes their patents (separate from the Licensed Patents), you're on your own. This is not unusual for patent licenses, but in the NLP/AI space where patent thickets exist, it increases risk.

  ### Change of Control Risk

  The license is non-transferable (Section 1). If you are acquired, the acquirer does not automatically receive this license — it terminates. This is a significant issue for M&A:
  - Acquirers will discount the value of AI Insights if it depends on a non-transferable license
  - You'd need licensor consent to assign the license on acquisition
  - Negotiate: "Licensee may assign this Agreement without consent to a successor in connection with a merger, acquisition, or sale of substantially all assets."

  ---

  ## Fit Assessment

  **Does this license cover your intended use?** Partially:
  - US AI Insights feature for existing employee management: Covered (if field of use analysis confirms no recruiting overlap)
  - Non-US AI Insights: Not covered — critical gap
  - SaaS delivery to enterprise customers: Ambiguous — clarify "sublicensing" vs. "service delivery"
  - Any recruiting-adjacent features: Not covered — potential infringement risk

  **Verdict:** This license does not cover your full intended use as currently described. The US-only territory alone is a deal-breaker unless you're prepared to limit AI Insights to US customers only.

  ---

  ## Red Flags

  | Provision | Issue | Priority |
  |---|---|---|
  | US-only territory | Doesn't cover global customers | Deal-breaker — negotiate or withdraw |
  | No-challenge clause | Prevents you from challenging invalid patents | Must negotiate |
  | 8% royalty + $50K minimum | Above-market; minimum creates fixed cost before any revenue | Negotiate down |
  | "Net Revenue" undefined | Could mean anything; royalty calculation is disputed before it starts | Must be defined |
  | Non-transferable | License terminates on acquisition | Must add M&A carve-out |
  | No licensor indemnification | Standard for patent licenses but increases risk | Understand and accept or negotiate limited indemnification |

  **Bottom line:** This license needs substantial negotiation before signing. Conduct an FTO analysis first — it may reveal you don't need this license at all.
tips:
  - "Always conduct a Freedom to Operate (FTO) analysis before paying for a patent license. You may not infringe the patents, or the patents may be invalid — either way, the license may be unnecessary."
  - "No-challenge clauses are significant surrenders of rights. Patent invalidity is a defense to infringement — giving it up means accepting the licensor's claim that the patents are valid without verification."
  - "Royalty base definition ('Net Revenue,' 'Net Sales,' etc.) is as important as the royalty rate. An undefined royalty base will lead to disputes. Define it precisely before signing."
  - "This summary is for business orientation. Have a licensed patent attorney in the applicable jurisdiction review before signing any patent license."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - ip-assignment-review
  - contract-summary
  - contract-redline
  - legal-risk-memo
tags:
  - ip
  - patents
  - licensing
  - legal
  - technology
---
