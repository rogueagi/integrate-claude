---
title: "Summarize a contract for non-legal stakeholders"
slug: contract-summary
function: legal
role: contracts
description: "Translate a contract into a clear, structured summary covering key obligations, rights, risks, and business terms — so non-lawyers can understand what they're agreeing to before signing."
useCase: "Use this prompt when a business stakeholder needs to understand a contract quickly, when legal needs to brief a non-lawyer executive on a deal, or when a vendor contract needs to be compared to your standard terms. Always have qualified legal counsel review before signing."
prompt: |
  You are a senior contracts attorney summarizing a contract for a business stakeholder who is not a lawyer. Your goal is to give them an accurate, plain-English understanding of what they would be agreeing to.

  **Contract type:** {{contract_type}} (e.g., SaaS subscription agreement, NDA, MSA, employment agreement, vendor agreement)
  **Parties:** {{parties}} (who is signing — our company's role and the counterparty's role)
  **Contract text or key provisions:**
  ```
  {{contract_text}}
  ```
  **Our company's position:** {{our_position}} (e.g., customer, vendor, licensor, employee)
  **Key business context:** {{business_context}} (what are we trying to accomplish with this contract?)
  **Any specific provisions we're concerned about:** {{concerns}}

  Provide a complete contract summary:

  ## Executive Summary
  3–5 sentences: What is this contract? What are we agreeing to do? What are the most important things the business needs to know before signing?

  ## Key Business Terms
  | Term | Detail |
  |---|---|
  | Contract term / duration | |
  | Auto-renewal | |
  | Pricing / payment | |
  | Termination rights | |

  ## Our Obligations
  What we are required to do under this contract:
  - [Specific obligation and when/how it must be performed]

  ## Their Obligations
  What the counterparty is required to do:
  - [Specific obligation]

  ## Rights Granted
  - What rights we receive
  - What rights we grant to them

  ## Limitations and Restrictions
  - Things we cannot do under this contract
  - Things they cannot do
  - Usage restrictions, geographic limits, exclusivity terms

  ## Risk Areas
  Provisions that could expose us to liability, limit our remedies, or create obligations we might not have anticipated:
  - **[Risk description]:** [Specific provision and why it matters]

  ## Liability and Indemnification
  - What we're liable for and any caps on that liability
  - What we've agreed to indemnify them for (and vice versa)
  - Any warranty disclaimers

  ## Data and Privacy
  - What data is shared and how it can be used
  - Any data processing agreements or privacy obligations
  - Data return or deletion on termination

  ## Missing or Unusual Provisions
  Things that are commonly included in this type of contract but absent here, or provisions that are unusual:
  - [Provision and why its absence or presence is notable]

  ## Red Flags
  Anything that should be negotiated or raised with legal counsel before signing.

  ## Recommended Questions for Counsel
  Specific questions a lawyer should answer before this contract is signed.
variables:
  - "{{contract_type}}"
  - "{{parties}}"
  - "{{contract_text}}"
  - "{{our_position}}"
  - "{{business_context}}"
  - "{{concerns}}"
exampleInput: |
  contract_type: SaaS Master Subscription Agreement
  parties: We are the Customer (Acme Corp). The counterparty is DataVault Inc. (the Vendor/Processor).
  contract_text: |
    Section 5.2 - Liability Cap: In no event shall either party's aggregate liability exceed the amounts paid by Customer in the three (3) months preceding the claim.

    Section 7.1 - Data Use: Vendor may use Customer Data to improve its products and services, including training of machine learning models.

    Section 8.3 - Auto-Renewal: This Agreement shall automatically renew for successive one-year terms unless either party provides written notice of non-renewal at least ninety (90) days prior to the end of the then-current term.

    Section 10.1 - Governing Law: This Agreement shall be governed by the laws of the State of Delaware.

    Section 11.2 - Indemnification: Customer shall indemnify, defend, and hold harmless Vendor from and against any claims arising out of Customer's use of the Service in violation of this Agreement or applicable law.

    Section 12.1 - Modifications: Vendor reserves the right to modify these terms at any time with thirty (30) days' notice.
  our_position: Customer
  business_context: We are evaluating DataVault Inc. for storing sensitive HR data including employee records, salary information, and performance reviews for 5,000 employees.
  concerns: |
    - Data use for AI training
    - Liability cap seems low
    - Auto-renewal notice window
exampleOutput: |
  ## Executive Summary

  This is a SaaS agreement where Acme Corp would subscribe to DataVault's service. Before signing, there are three provisions that require immediate attention: Section 7.1 permits DataVault to use our employee data — including salaries and performance reviews — to train their machine learning models, which almost certainly violates our employee privacy obligations and should be removed. The liability cap (Section 5.2) limits DataVault's maximum liability to three months of fees paid, which for a $10K/month contract means they're capped at $30K for any breach — including a breach affecting 5,000 employees' sensitive HR data. This cap is far too low for the risk profile of the data being processed and must be negotiated up significantly.

  ## Key Business Terms

  | Term | Detail |
  |---|---|
  | Contract term / duration | Not specified in provided provisions — requires clarification |
  | Auto-renewal | Automatically renews annually. Must provide 90-day written notice to cancel — this is a longer-than-standard notice window |
  | Pricing / payment | Not shown in provided provisions |
  | Termination rights | Not shown in provided provisions |

  ## Our Obligations

  - Comply with the terms of the agreement when using the service (standard)
  - Provide 90 days' written notice before each annual renewal anniversary to avoid auto-renewing (Section 8.3)
  - Indemnify DataVault for claims arising from our use of the service in violation of the agreement or law (Section 11.2)

  ## Their Obligations

  - Provide the SaaS service
  - Provide 30 days' notice before modifying the terms (Section 12.1)

  ## Rights Granted

  - **We receive:** The right to use the DataVault service
  - **We grant to them:** The right to use our Customer Data to improve their products and services, including training machine learning models (Section 7.1 — see Red Flags)

  ## Limitations and Restrictions

  - Our aggregate liability is capped at three months of fees (applies to us as well as to them — Section 5.2)
  - DataVault can unilaterally modify the agreement with 30 days' notice (Section 12.1) — if we continue using the service after receiving notice, we are deemed to have accepted the changes

  ## Risk Areas

  **AI Training on Employee Data (Section 7.1):** DataVault may use our customer data — which includes salary, performance reviews, and other sensitive HR data for 5,000 employees — to train their machine learning models. This creates several risks:
  - Likely violates applicable privacy laws (GDPR, CCPA, and potentially state-specific HR data protection laws) — we may not have authority to grant this right
  - Creates risk that our confidential data (compensation structures, performance ratings) could influence a shared model that competitors also use
  - May violate our employee privacy obligations and representations in our employment agreements
  - **This provision must be deleted or narrowed to prohibit use of our data for training**

  **Low Liability Cap (Section 5.2):** The mutual liability cap is three months of fees. At $10K/month, that's $30,000 maximum recovery for a data breach affecting 5,000 employees. A data breach of this scale could expose Acme to notification costs, regulatory fines, and employee lawsuits orders of magnitude larger. **This cap must be raised significantly, and data breaches should be excluded from the cap or subject to a separate, higher cap.**

  **Unilateral Modification Right (Section 12.1):** DataVault can change the terms of the agreement at any time with 30 days' notice. If we continue using the service, we are bound by the new terms. This is common in consumer SaaS but unusual and problematic in an enterprise B2B contract. **This should require mutual written amendment for material changes.**

  **Indemnification Scope (Section 11.2):** We indemnify DataVault for claims arising from our use of the service "in violation of applicable law." Given the data processing risks above, if regulators find our data sharing arrangement was unlawful, DataVault could seek indemnification from us for their own regulatory fines. **The scope of this indemnification should be narrowed.**

  ## Liability and Indemnification

  - **Liability cap (mutual):** Three months of fees — applies to both parties' total liability
  - **What we indemnify:** Claims arising from our use of the service in violation of the agreement or applicable law
  - **Their indemnification of us:** Not shown in provided provisions — this is a notable absence

  ## Data and Privacy

  - **Data use:** DataVault may use our data to improve their products AND train machine learning models (Section 7.1) — this is not a standard limitation; most enterprise vendors are prohibited from using customer data for model training
  - **Data processing agreement:** Not shown — for 5,000 employee records, a separate DPA is required under GDPR if any employees are in the EU, and is best practice regardless
  - **Data return/deletion on termination:** Not addressed in provided provisions — must be negotiated explicitly

  ## Missing or Unusual Provisions

  - **No DPA:** For sensitive HR data at this scale, a Data Processing Agreement (DPA) is typically a separate attachment. Its absence suggests this contract may not have been designed for enterprise HR data.
  - **No security exhibit:** Enterprise data contracts typically include a Security Exhibit specifying minimum security standards, audit rights, and breach notification obligations. Not present.
  - **No data return on termination:** What happens to our 5,000 employee records when the contract ends? The contract is silent.
  - **No uptime SLA:** No service level agreement for availability. For business-critical HR data, this should be specified.
  - **No vendor indemnification:** Standard MSAs include mutual indemnification; only our indemnification of them is shown.

  ## Red Flags

  1. **AI training clause (Section 7.1)** — Must be removed or rewritten. Do not proceed without legal counsel reviewing this.
  2. **Liability cap at 3 months** — Must be substantially increased for a contract involving sensitive HR data of 5,000 people.
  3. **Unilateral modification right** — Unusual for enterprise B2B; should require mutual agreement on material changes.
  4. **No DPA** — Required for GDPR compliance if any employees are in the EU; should be added as an exhibit regardless.

  ## Recommended Questions for Counsel

  1. Does Section 7.1 violate our privacy obligations to employees? What employee consent, if any, would be required?
  2. What liability cap would be appropriate for a contract involving this type and volume of employee data?
  3. Is the indemnification in Section 11.2 standard or unusually broad? What is the practical risk if regulators find our data sharing unlawful?
  4. Can we request a DPA and Security Exhibit as conditions of signing?
  5. Is the 90-day auto-renewal notice window acceptable, and can it be reduced to 30 or 60 days?

  ---

  *This summary is for business orientation purposes only and does not constitute legal advice. Have qualified legal counsel review the complete contract before signing.*
tips:
  - "Always caveat that this is a business summary, not legal advice — and that counsel should review before signing. This protects you and sets appropriate expectations."
  - "Paste the full contract text when possible — summaries of specific sections miss the interplay between provisions. The liability cap means nothing without knowing what's excluded from it."
  - "Ask specifically about provisions you're concerned about. 'Explain the data use section' gets a better answer than asking Claude to review a 50-page contract generally."
  - "Identify your position (customer vs. vendor, licensor vs. licensee) — a provision that's routine for one party is onerous for the other."
complexity: intermediate
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - contract-redline
  - nda-review
  - vendor-contract-playbook
  - compliance-gap-analysis
tags:
  - contracts
  - legal
  - risk
  - negotiation
  - business-review
---
