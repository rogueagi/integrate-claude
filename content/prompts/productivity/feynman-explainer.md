---
title: "Feynman explainer — explain a complex concept to an intelligent novice"
slug: feynman-explainer
function: productivity
role: learning
description: "Explain something complex by stripping it down to plain language, then surfacing the spots where the explanation gets thin so the learner can dig deeper."
useCase: "Use this to learn or teach a concept where most explanations are either too jargony or too dumbed down. The structure forces Claude to be honest about which parts are intuitive versus which are sleight-of-hand, which is the part of the technique most prompts skip."
prompt: |
  You are explaining a concept the way a great teacher does: in plain language, with concrete examples, while being honest about where the explanation gets shaky.

  <context>
  Concept to explain: {{concept}}
  Learner background: {{learner_background}}
  Why they want to understand it: {{motivation}}
  Depth target: {{depth}} (one of: working intuition, can apply, can teach back)
  </context>

  <task>
  Step 1 — One paragraph in plain language.
  Explain {{concept}} in 100 to 150 words using no jargon a smart 14-year-old would not know. If you must use a term of art, define it inline in 6 words or fewer.

  Step 2 — Concrete example.
  Give one specific, vivid example that demonstrates the concept in action. Not a metaphor — an actual instance.

  Step 3 — One analogy.
  Now give one analogy that captures the essential structure. State the limit of the analogy in one sentence (every analogy breaks somewhere — name where).

  Step 4 — Honesty pass.
  List the 2 to 4 places in your explanation where you smoothed something over, used a placeholder, or relied on the reader's trust. For each, name what you would need to say to be precise instead.

  Step 5 — Test.
  Write 3 questions the learner could answer if they actually understand. Ordered easy to hard. The hardest should require connecting two parts of the explanation.
  </task>

  <output_format>
  ## Plain-language paragraph
  ## Concrete example
  ## Analogy (with its limit)
  ## Where this explanation cheats
  ## 3 test questions
  </output_format>

  <constraints>
  - In step 1, if you find yourself using the term you are trying to explain inside its own definition, restart.
  - In step 4, do not be polite. The "where this cheats" section is the whole point — it tells the learner where to read next.
  - Match the depth target. "Working intuition" should not list every edge case; "can teach back" should not skip any.
  </constraints>
variables:
  - "{{concept}}"
  - "{{learner_background}}"
  - "{{motivation}}"
  - "{{depth}}"
exampleInput: |
  concept: How does prompt caching work in LLM APIs?
  learner_background: Software engineer comfortable with HTTP APIs, no LLM internals
  motivation: Trying to cut my Claude API bill by 70% on a long-context agent
  depth: can apply
exampleOutput: |
  ## Plain-language paragraph
  When you call an LLM, the model has to read everything you send and turn it into a giant pile of numbers (the "context") before it can answer. That conversion costs time and money and is most of what you pay for on long prompts. Prompt caching is the provider keeping that pile of numbers around for a few minutes after your first call, so when you send the same beginning of the prompt again, they skip the conversion and start from where the new part begins. You ask for it by marking which prefix of your prompt is stable. Same prefix = cache hit = roughly 90% cheaper on that part.

  ## Concrete example
  An agent reads a 40-page contract on every turn. Without caching: the contract is re-tokenized on every call, ~30k input tokens at full price each turn. With caching marked on the contract: the first call writes it to cache; the next 50 calls read it for ~10% of the input price. On 50 turns, the bill drops by roughly two-thirds.

  ## Analogy
  Like a chef prepping mise en place. The first dish takes 20 minutes because the onions need dicing; the next 9 dishes take 3 minutes each because the onions are already there. Limit: caches expire after a short window of inactivity, so if the kitchen sits idle, the prep is thrown out.

  ## Where this explanation cheats
  - "Pile of numbers" — the actual structure is a KV cache of attention states, not raw tokens. Matters if you ever debug why two structurally identical prompts miss the cache.
  - "Mark which prefix is stable" — the API-level mechanism is a cache_control field, and only certain block boundaries are valid cache breakpoints. Read the SDK docs before relying on it.
  - "90% cheaper" — actual discount and minimum cacheable size vary by provider and model.

  ## Test questions
  1. Why does cache only help for tokens at the start of the prompt and not at the end?
  2. If the user changes a single character in the cached prefix, what happens?
  3. You have a tool-using agent that calls in bursts of 8 then idles for 10 minutes between bursts. Does caching pay off, and how would you decide?
tips:
  - "The 'where this cheats' section is what separates this from the typical Feynman prompt — without it, the explanation feels clean but the learner cannot tell where the real depth lives."
  - "If Claude refuses to admit any cheating in step 4, the explanation is probably skipping something. Ask: 'name the term you used in step 1 that you would have to define if a senior expert read this.'"
  - "The hardest test question should not be answerable from the analogy alone. If it is, the learner has not gotten beyond the surface."
  - "For very technical concepts, set depth to 'working intuition' first, run the prompt, then re-run at 'can teach back' with the prior output as context. Two passes beats one long one."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - socratic-tutor
  - first-principles-decomposition
  - hemingway-rewrite
tags:
  - framework
  - methodology
  - learning
  - explanation
  - teaching
---
