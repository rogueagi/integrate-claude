---
title: "Review an IP assignment or work-for-hire clause"
slug: ip-assignment-review
function: legal
role: ip
description: "Analyze an IP assignment agreement or work-for-hire clause to ensure the company owns what it needs to own — identifying gaps, carve-outs, and missing provisions that could leave IP in the hands of contractors or former employees."
useCase: "Use this prompt when onboarding a contractor or employee who will be creating IP, when conducting IP due diligence before a funding round or acquisition, or when reviewing an assignment clause in an existing employment or services agreement."
prompt: |
  You are an intellectual property attorney reviewing IP ownership and assignment provisions. Analyze the clause or agreement provided and identify any risks that the company may not fully own the IP it needs to own.

  **Context:** {{context}} (e.g., employee onboarding, contractor agreement, acquisition due diligence, license agreement)
  **What IP will be created:** {{ip_created}} (software code, product design, written content, inventions, algorithms, training data, etc.)
  **The party creating IP:** {{creator}} (employee, contractor, co-founder, vendor)
  **Company jurisdiction:** {{company_jurisdiction}} (state/country where company is incorporated)
  **Creator's jurisdiction:** {{creator_jurisdiction}} (where the creator is located)
  **Clause or agreement text:**
  ```
  {{clause_text}}
  ```
  **Specific concerns:** {{concerns}}

  Review the IP assignment for:

  ## Overall Assessment
  Does this clause/agreement give the company clear, unencumbered ownership of the IP it needs? What's the biggest gap?

  ## Coverage Analysis
  - What types of IP are covered (and what's excluded)?
  - Does coverage match the IP that will actually be created?
  - Are works-in-progress covered, or only completed works?

  ## Assignment Completeness
  - Is this a present-tense assignment ("hereby assigns") or a future obligation to assign?
  - Are moral rights addressed (important for EU creators)?
  - Is a "further assurances" clause included for perfecting the assignment?

  ## Work-Made-For-Hire Analysis
  - Does the work qualify as work-made-for-hire under applicable law (US: 17 USC 101)?
  - If contractor: Work-made-for-hire is limited under US copyright law — assignment is usually the safer approach
  - Are there jurisdiction-specific variations?

  ## Carve-Outs and Exclusions
  - What IP is excluded from assignment? (typically: prior inventions, personal projects)
  - Are the exclusions reasonable and specific enough to avoid disputes?
  - Is there a prior inventions disclosure process?

  ## Consideration
  - Is there adequate consideration for the assignment?
  - For employees: is employment itself sufficient consideration? (varies by jurisdiction)
  - For contractors: are payment terms clear and tied to assignment?

  ## Jurisdiction-Specific Issues
  - Does the clause comply with applicable state/country laws?
  - Any employee-protective IP laws that limit what can be assigned? (California Labor Code 2870, etc.)

  ## Gaps and Recommended Additions
  Specific provisions that are missing and should be added.

  ## Red Flags for Due Diligence
  Issues that would concern an acquirer or investor reviewing this IP.
variables:
  - "{{context}}"
  - "{{ip_created}}"
  - "{{creator}}"
  - "{{company_jurisdiction}}"
  - "{{creator_jurisdiction}}"
  - "{{clause_text}}"
  - "{{concerns}}"
exampleInput: |
  context: We are onboarding a contractor to build the core ML model for our AI Insights feature. This contractor will be the primary developer of the model architecture, training code, and the resulting trained model weights.
  ip_created: Machine learning model architecture (Python/PyTorch code), training pipeline code, trained model weights, documentation
  creator: Independent contractor (not an employee)
  company_jurisdiction: Delaware (incorporated)
  creator_jurisdiction: California (where the contractor lives)
  clause_text: |
    IP OWNERSHIP

    All work product, inventions, and deliverables created by Contractor for the Company in connection with this Agreement shall be deemed work made for hire. To the extent any work product is not deemed work made for hire, Contractor hereby assigns all right, title, and interest in such work product to the Company.

    Contractor represents that the work product will not incorporate any third-party code or open source software without the Company's prior written consent.
  concerns: |
    - Is the "work made for hire" designation valid for this type of work done by a contractor?
    - Does California law affect what can be assigned?
    - The model will be trained on data that existed before this engagement — who owns the resulting model weights?
    - No mention of moral rights — does that matter?
exampleOutput: |
  ## Overall Assessment

  This clause is inadequate for the IP being created. It has three critical gaps: (1) "work made for hire" almost certainly does not apply to this contractor's work under US copyright law, meaning the clause is partially ineffective; (2) the trained model weights — your most valuable asset — may not be clearly covered if they're argued to derive from pre-existing data or pre-existing model components; and (3) there is no assignment of prior inventions the contractor brings to the project, no California-compliant carve-out language, and no "further assurances" obligation to execute documents that perfect the assignment. The company should also conduct an open source audit before this model ships to production.

  ---

  ## Coverage Analysis

  **What is covered:** "Work product, inventions, and deliverables created for the Company" — broad language that should cover:
  - Training pipeline code (Python/PyTorch)
  - Model architecture code
  - Documentation
  - Inventions (patentable methods)

  **What may not be clearly covered:**
  - **Trained model weights:** Model weights are a product of training code applied to training data. If the contractor argues the weights derive substantially from pre-existing data or a pre-existing open-source model foundation, they may claim partial ownership or argue the assignment doesn't clearly reach the weights. Add explicit language: "including all model weights, checkpoints, and artifacts resulting from training processes conducted under this Agreement."
  - **Improvements to existing models:** If the contractor will adapt a pre-trained model (e.g., fine-tuning GPT or Llama), the improvements and fine-tuned weights need explicit assignment language separate from the base model.
  - **Prior inventions brought to the project:** The contractor's pre-existing methods, libraries, or frameworks are not assigned. If they use their own library in building your model, you may not own the full stack.

  ---

  ## Work-Made-For-Hire Analysis

  **US Copyright Law — 17 USC 101:** Works made for hire by non-employees are limited to nine specific categories. For a work to qualify as WMFH by a contractor, it must: (1) be specially ordered or commissioned; AND (2) fall into one of the nine statutory categories (which include: contribution to collective work, motion picture, translation, supplementary work, compilation, instructional text, test, answer material for test, atlas).

  **Does ML model code qualify?** Almost certainly not. Software code, ML model architecture, and trained model weights don't fall into any of the nine WMFH categories for contractors. The "work made for hire" designation in the clause is legally ineffective for this type of work when created by a contractor.

  **Consequence:** The company's ownership must rest entirely on the assignment clause. The WMFH language is harmless boilerplate — but it creates a false sense of security. The assignment is what matters.

  **Good news:** The assignment clause ("Contractor hereby assigns...") is a present-tense assignment ("hereby assigns") rather than a future obligation, which is stronger. This means the assignment is self-executing and the IP transferred at the time each work is created.

  ---

  ## Assignment Completeness

  **Present-tense vs. future obligation:** "Contractor hereby assigns" — this is correct. A present-tense assignment is stronger than "Contractor agrees to assign" because it doesn't require a separate assignment document to be effective.

  **Moral rights:** Not addressed. Moral rights (right of attribution, right of integrity) exist in EU countries and some others. A California-based contractor doesn't have significant US moral rights in software, so this is lower risk here. However, if the contractor is ever based in an EU country, or if the agreement is used as a template internationally, add: "Contractor waives any moral rights in the work product to the fullest extent permitted by applicable law."

  **Further assurances:** Not present. A further assurances clause is important for completing IP registrations (patent applications, copyright registrations) after the contractor's engagement ends. Add:
  > "Contractor shall execute any documents and take any actions reasonably necessary to perfect, register, and enforce the Company's rights in the work product, including signing patent applications and copyright assignments."

  ---

  ## California-Specific Issues

  **California Labor Code Section 2870:** California limits what can be assigned in contractor and employee agreements. An assignment cannot extend to inventions that:
  - The contractor developed entirely on their own time
  - Without using Company equipment, supplies, facilities, or trade secret information
  - That do not relate to the Company's business or research and development
  - That do not result from work performed for the Company

  **Implication:** The current clause does not include a California-compliant carve-out. While California's protections are stronger for employees than contractors, California courts have applied similar analysis to independent contractors. The clause should include a prior inventions schedule and carve-out to avoid disputes:
  > "This assignment does not extend to any invention that Contractor can prove (a) was developed entirely on Contractor's own time without using Company equipment, supplies, facilities, or trade secret information, and (b) does not relate to the Company's actual or demonstrably anticipated business or research and development."

  **Prior inventions schedule:** The contractor should be required to disclose (and the company should document) any prior inventions they are bringing to the engagement that they are not assigning. If the contractor has a relevant prior patent or owns a library they plan to use, this needs to be disclosed, licensed, or the scope of work adjusted.

  ---

  ## Open Source Risk (Third-Party Representation)

  The clause includes: "Contractor represents that the work product will not incorporate any third-party code or open source software without the Company's prior written consent."

  **Analysis:** This representation is important for ML work — open source ML frameworks (PyTorch, Hugging Face, Llama) are ubiquitous, and many have licenses (GPL, AGPL) that impose obligations on derivative works. The clause requires the contractor to get consent before using open source, which is good.

  **Gap:** The clause doesn't specify what licenses are acceptable. PyTorch (BSD license) and Apache 2.0 are generally permissive; AGPL is a viral license that could require your model code to be open sourced. The clause should specify: "Open source software used in work product shall be licensed under permissive licenses (MIT, BSD, Apache 2.0) and shall not include software licensed under viral open source licenses (AGPL, GPL, SSPL) without prior written approval."

  ---

  ## Recommended Additions

  **1. Explicit trained model weight assignment:**
  > "For clarity, 'work product' includes all model weights, model checkpoints, fine-tuned models, embeddings, and other artifacts resulting from training processes conducted under this Agreement."

  **2. Prior inventions disclosure and schedule:**
  > "Contractor shall disclose and describe in Schedule A any inventions, software, or creative works made prior to this Agreement that Contractor intends to use in performing services under this Agreement. All items not listed in Schedule A are included in the assignment above."

  **3. Further assurances:**
  > "Contractor shall execute any documents and take all actions reasonably necessary to perfect, register, and enforce Company's rights in the work product."

  **4. California carve-out (required for California contractors):**
  > "This assignment does not apply to any invention that qualifies under California Labor Code Section 2870 [verbatim of statute]."

  **5. Moral rights waiver:**
  > "To the extent permitted by law, Contractor waives any moral rights in the work product."

  ---

  ## Red Flags for Due Diligence

  An acquirer reviewing this clause would flag:
  - **No prior inventions schedule** — no record of what the contractor excluded from assignment
  - **Open source compliance unclear** — no audit of what open source is embedded in the model
  - **Model weights not explicitly covered** — acquirer's counsel will argue the assignment's scope is ambiguous
  - **No further assurances clause** — if contractor is unavailable post-acquisition, there's no contractual right to compel them to sign IP transfer documents

  Recommend: conduct an IP audit before any funding round or M&A conversation that includes (a) a prior inventions schedule from this contractor, (b) a software composition analysis (SCA) of all open source in the model stack, and (c) an amended agreement adding the missing provisions above.
tips:
  - "For contractors creating software, 'work made for hire' almost never applies — the assignment clause is what matters. Make sure it's a present-tense assignment, not a future promise."
  - "Trained ML model weights are a new category of valuable IP that many standard forms don't explicitly address. Always add explicit language covering weights, checkpoints, and embeddings."
  - "Require a prior inventions disclosure schedule before work begins, not after. Once the contractor has shipped, it's much harder to get a clean disclosure."
  - "This review is illustrative — IP law varies significantly by jurisdiction and the specific facts of each engagement. Have a licensed IP attorney review before relying on these conclusions."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - nda-review
  - contract-summary
  - legal-risk-memo
  - ip-license-summary
tags:
  - ip
  - intellectual-property
  - contracts
  - legal
  - due-diligence
---
