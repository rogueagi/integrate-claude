---
title: "Audit open source license compliance in a codebase"
slug: open-source-license-audit
function: legal
role: ip
description: "Review the open source software components used in a product and assess license compliance obligations, copyleft risks, and attribution requirements — with a prioritized remediation plan."
useCase: "Use this prompt before a product launch, funding round, or acquisition where IP due diligence is required, or when adding a new component that could have viral license implications for your proprietary code."
prompt: |
  You are an IP attorney specializing in open source license compliance. Analyze the open source components and licenses in the project described below and produce a compliance assessment.

  **Product:** {{product}} (what the product is and how it's distributed)
  **Distribution model:** {{distribution}} (SaaS/cloud, on-premise software, mobile app, open source library, embedded device)
  **List of open source components and their licenses:**
  ```
  {{components_list}}
  ```
  **Proprietary code that interacts with these components:** {{proprietary_code}} (brief description — does it link to, modify, or distribute these components?)
  **Target jurisdictions:** {{jurisdictions}}
  **Specific concerns:** {{concerns}}

  Provide:

  ## Compliance Summary
  Overall compliance posture: Clean / Minor issues / Moderate issues / Critical issues
  What's the most significant risk, and what must be addressed before the product ships or is due-diligenced?

  ## Component-by-Component Analysis

  For each component:
  - **Component and version**
  - **License type** (Permissive / Weak copyleft / Strong copyleft / Custom)
  - **License name** (MIT, Apache 2.0, GPL v2, LGPL, AGPL, etc.)
  - **Obligations triggered by this license:**
    - Attribution required?
    - License text must be distributed?
    - Source code disclosure required? (If yes: when, under what conditions)
    - Patent grant?
    - Modification restrictions?
    - "Same license" requirements?
  - **Compliance status:** Compliant / Needs action / Risk
  - **Required action:** Specific steps to achieve compliance

  ## Copyleft Risk Assessment

  **For any GPL, LGPL, AGPL, or EUPL components:**
  - What is the copyleft "trigger"? (distribution, linking, network use)
  - Does the proprietary code trigger the copyleft obligation?
  - What's the worst-case scenario if this copyleft obligation applies?
  - What's the risk level of the interpretation that copyleft applies?

  ## Attribution Requirements
  A complete list of attribution notices required. Format these as the actual attribution notice that must appear in the product:

  ## Compliance Checklist
  Actionable steps to achieve full compliance:
  - [ ] [Specific action]

  ## Recommendations for Future Component Evaluation
  A policy for evaluating future open source component additions to prevent recurrence.
variables:
  - "{{product}}"
  - "{{distribution}}"
  - "{{components_list}}"
  - "{{proprietary_code}}"
  - "{{jurisdictions}}"
  - "{{concerns}}"
exampleInput: |
  product: Beacon AI Insights — a feature of our SaaS HR platform that analyzes employee survey responses using NLP and generates management summaries
  distribution: SaaS/cloud — users access via web browser; no software distributed to users
  components_list: |
    transformers (Hugging Face) — Apache 2.0
    torch (PyTorch) — BSD 3-Clause (with some components under Modified BSD and Apache 2.0)
    numpy — BSD 3-Clause
    scikit-learn — BSD 3-Clause
    spaCy — MIT
    flask — BSD 3-Clause
    SQLAlchemy — MIT
    celery — BSD 3-Clause
    redis-py — MIT
    llama-cpp-python — MIT (wrapper) + LLaMA 2 Community License (model weights)
    sentence-transformers — Apache 2.0
    NLTK — Apache 2.0
  proprietary_code: |
    Our proprietary Python code imports and uses these libraries as dependencies. We do not modify the open source code itself. We run inference on models using transformers and llama-cpp-python. We do not distribute any of these libraries to customers — they run entirely in our cloud infrastructure.
  jurisdictions: US, EU
  concerns: |
    - LLaMA 2 Community License is not a standard OSI-approved license — what does it allow?
    - Are we obligated to release our proprietary code under any copyleft license?
    - Do we need to display attribution notices to our customers?
exampleOutput: |
  ## Compliance Summary

  **Overall compliance posture: Moderate issues — one non-standard license requiring careful review**

  The open source stack is predominantly permissive-licensed (Apache 2.0, MIT, BSD) with no viral copyleft components. For a SaaS deployment, these licenses create minimal obligations — you don't distribute the software, so most source disclosure requirements are not triggered.

  The one significant issue is the LLaMA 2 Community License. This is not a standard OSI-approved open source license — it is a proprietary license from Meta with specific use restrictions. At current scale, the license permits commercial use, but it contains restrictions that matter as you grow: a commercial use exemption applies only if your company has fewer than 700 million monthly active users (not an issue), and you cannot use LLaMA 2 outputs to train competing foundation models. The key restriction to verify: the license requires that derivative products built on LLaMA 2 must include "Llama 2" in their name if they have more than 700M MAUs — not applicable at your scale, but worth noting.

  **Most significant risk:** Confirming that your use of LLaMA 2 weights complies with the Community License's use restrictions, particularly the prohibition on training competing models. If your AI Insights feature uses LLaMA 2 outputs as training data for other models, that triggers a restriction.

  ---

  ## Component-by-Component Analysis

  ### transformers (Hugging Face) — Apache 2.0

  - **License type:** Permissive
  - **Obligations:**
    - Attribution: Yes — include Apache 2.0 license notice in your NOTICE file
    - License text distribution: Yes — include with any distribution (not required for SaaS internal use, but include in a NOTICES file as best practice)
    - Source disclosure: Not required for SaaS
    - Patent grant: Yes — Apache 2.0 includes a patent grant from contributors
    - Modification restrictions: No — modifications permitted
  - **Compliance status:** Compliant (SaaS deployment)
  - **Required action:** Add Hugging Face transformers to NOTICES file

  ---

  ### torch (PyTorch) — BSD 3-Clause (primarily)

  - **License type:** Permissive (BSD 3-Clause)
  - **Key provision:** BSD 3-Clause prohibits use of the project name (PyTorch) to endorse or promote products without permission — do not claim "Powered by PyTorch" in marketing without verification
  - **Obligations:** Attribution; no endorsement without permission
  - **Compliance status:** Compliant for SaaS use
  - **Required action:** Add PyTorch to NOTICES file; do not use "PyTorch" name in marketing

  ---

  ### numpy, scikit-learn, flask, celery — BSD 3-Clause

  - **License type:** Permissive
  - **Analysis:** Same as PyTorch above. BSD 3-Clause is one of the most permissive licenses. No source disclosure required for SaaS.
  - **Compliance status:** Compliant
  - **Required action:** Add to NOTICES file

  ---

  ### spaCy, redis-py, SQLAlchemy — MIT

  - **License type:** Permissive (most permissive common license)
  - **Obligations:** Attribution (include copyright notice)
  - **Compliance status:** Compliant
  - **Required action:** Add to NOTICES file

  ---

  ### sentence-transformers, NLTK — Apache 2.0

  - **License type:** Permissive
  - **Same analysis as transformers above**
  - **Compliance status:** Compliant
  - **Required action:** Add to NOTICES file

  ---

  ### llama-cpp-python (wrapper) — MIT

  - **License type:** Permissive (the Python wrapper itself)
  - **Compliance status:** Compliant for the wrapper code
  - **Required action:** Separate analysis required for underlying LLaMA 2 model weights (see below)

  ---

  ### LLaMA 2 Model Weights — Meta LLaMA 2 Community License

  - **License type:** Proprietary (NOT open source — not OSI-approved)
  - **This is the most important component to analyze**

  **What the License Permits:**
  - Commercial use: Yes, if your company has fewer than 700 million monthly active users (Beacon is clearly under this threshold)
  - Research and development: Yes
  - Creating derivative works (fine-tuning): Yes, subject to restrictions

  **Key Restrictions:**
  1. **No training competing models:** "You will not use Llama 2 or Llama 2 outputs to create, train, fine-tune, or otherwise improve a large language model, other than Llama 2 itself." — **Critical: This means you cannot use LLaMA 2-generated outputs (including AI Insights outputs) as training data for any other LLM, including your own proprietary models.**

  2. **Naming requirement (>700M MAU threshold):** If you ever exceed 700M MAU, any LLaMA 2-based product must include "Llama 2" in its name. Not applicable at current scale.

  3. **Use policy compliance:** Must comply with Meta's Acceptable Use Policy, which prohibits: generation of content designed to harass individuals, generation of malware, and uses that violate applicable laws.

  4. **Derivative model licensing:** If you release a fine-tuned model, it must also be licensed under the LLaMA 2 Community License.

  **Risk Assessment:**
  - **Using LLaMA 2 for inference to generate AI Insights summaries:** Permitted — no issues
  - **Using AI Insights outputs as training data for other models:** Prohibited — if this is in your roadmap, reconsider
  - **Fine-tuning LLaMA 2 on your survey data:** Permitted, but the fine-tuned model must be released under LLaMA 2 Community License if distributed

  - **Compliance status:** Review required — confirm with product team whether LLaMA 2 outputs are used as training data for other models
  - **Required action:** Confirm use case aligns with Community License; document compliance; add to NOTICES file with LLaMA 2 Community License notice

  ---

  ## Copyleft Risk Assessment

  **No GPL, LGPL, or AGPL components are present in the listed stack.** This is the correct choice for a proprietary SaaS product.

  **AGPL risk note:** If anyone on the team adds an AGPL-licensed component in the future, be aware: AGPL's copyleft trigger includes network use (not just distribution). Providing a SaaS service that uses AGPL-licensed software may require releasing your proprietary source code. This is the most common open source compliance trap for SaaS companies. Establish a policy against AGPL components.

  ---

  ## Attribution Requirements

  For your NOTICES file (to be included in your product's legal/license documentation, typically accessible via a "Legal" or "Open Source Licenses" link):

  ```
  OPEN SOURCE NOTICES — Beacon AI Insights

  This product incorporates the following open source software:

  TRANSFORMERS (Hugging Face)
  Copyright 2018- The HuggingFace team. All rights reserved.
  Licensed under the Apache License, Version 2.0.
  https://github.com/huggingface/transformers

  PYTORCH
  Copyright (c) 2016- Facebook, Inc. All rights reserved.
  Licensed under the BSD 3-Clause License.
  https://github.com/pytorch/pytorch

  NUMPY
  Copyright (c) 2005-2023, NumPy Developers. All rights reserved.
  Licensed under the BSD 3-Clause License.

  [Continue for all components — use the specific copyright notice from each component's LICENSE file]

  LLAMA 2
  This product uses the Llama 2 model from Meta Platforms, Inc.
  Licensed under the LLAMA 2 COMMUNITY LICENSE AGREEMENT.
  https://ai.meta.com/llama/license/
  ```

  **For LLaMA 2 specifically:** The Community License requires that any use of the model include the notice above. Confirm with your product team where to surface this (likely in a Legal/Attributions page in the app, not in the UI itself).

  ---

  ## Compliance Checklist

  - [ ] Create a NOTICES file in the product repository listing all open source components with their copyright notices and licenses
  - [ ] Add a "Legal / Open Source Licenses" page accessible from the product UI or help documentation
  - [ ] Confirm with product team: are LLaMA 2 outputs used as training data for any other model? (If yes, consult IP counsel — this may be prohibited)
  - [ ] Document that Beacon does not use "PyTorch" or other component names in marketing/promotional materials without permission
  - [ ] Establish a policy requiring legal review before adding any new open source component (specifically prohibiting AGPL and flagging GPL/LGPL for review)
  - [ ] Update NOTICES file whenever a new component is added

  ---

  ## Policy for Future Component Evaluation

  Before adding any new open source component:

  | License Category | Action Required |
  |---|---|
  | MIT, BSD 2/3, ISC | Add to NOTICES — proceed |
  | Apache 2.0 | Add to NOTICES — proceed |
  | LGPL | Legal review required — copyleft may apply depending on linking |
  | GPL v2/v3 | Legal review required — copyleft triggers on distribution |
  | AGPL | **Do not add without explicit legal approval** — network use triggers copyleft |
  | Proprietary (like LLaMA 2 Community License) | Legal review required for each |
  | Creative Commons (for content/data) | Varies significantly by license version — legal review |

  Implement a Software Composition Analysis (SCA) tool (Black Duck, FOSSA, Snyk) in the CI pipeline to automatically flag new components and their license categories.
tips:
  - "The LLaMA 2 Community License is not open source — it's a proprietary license with restrictions. Any product using LLaMA 2 weights needs to read and comply with that license, not just treat it like Apache 2.0."
  - "For SaaS products, copyleft licenses (GPL, LGPL) are generally manageable because you're not distributing software. But AGPL is different — it explicitly covers network use. Never add AGPL to a SaaS codebase without legal approval."
  - "An SBOM (Software Bill of Materials) is increasingly required by customers and regulators. Implement a SCA tool in CI from day one — it's much easier than auditing retroactively before a due diligence."
  - "This analysis covers license compliance obligations, not freedom from third-party patent infringement. A full IP clearance for a product also requires a patent FTO analysis."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - ip-assignment-review
  - ip-license-summary
  - legal-risk-memo
  - compliance-gap-analysis
tags:
  - open-source
  - ip
  - compliance
  - legal
  - software-licensing
---
