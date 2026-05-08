---
title: "Test understanding with the Feynman technique"
slug: concept-feynman-explanation
function: productivity
role: learning
description: "Force yourself to explain a concept simply, then have Claude poke holes in your explanation to find what you don't actually understand."
useCase: "Use this after reading or learning something that 'made sense' but you suspect you don't fully grasp. The Feynman technique exposes the gaps you can't see yourself."
prompt: |
  You are running the Feynman technique with me. The point is to expose what I don't actually understand, not to validate me.

  Concept I'm trying to explain: {{concept}}
  Domain / context: {{domain}}
  My target audience for the explanation: {{audience}} (e.g., "a smart non-technical friend", "a junior engineer", "myself in 6 months")

  My explanation in my own words:
  ---
  {{my_explanation}}
  ---

  Run a Feynman critique:

  1. RESTATE — paraphrase my explanation back to me in 2-3 sentences. If your paraphrase is meaningfully different from what I wrote, that's signal #1 that I was unclear.
  2. CLARITY GAPS — flag any place I used jargon, hand-waved, or said "and then it just works." For each gap, write the question a curious 12-year-old would ask.
  3. LOGICAL GAPS — flag any place where my explanation skipped a step, assumed a fact, or had a non-sequitur.
  4. WHAT I PROBABLY DON'T ACTUALLY UNDERSTAND — based on my explanation, give me an honest read on the 2-3 things I likely don't fully grasp. Be direct. False confidence is the enemy.
  5. DRILL QUESTIONS — 3 specific questions that, if I can answer them in plain language, prove I understand. If I can't, I have more learning to do.
  6. ANALOGIES THAT MIGHT HELP — 1-2 analogies appropriate for my target audience. But say if my own analogy was already good.
  7. NEXT STEP — should I keep learning more, or am I ready to teach this to someone? Be honest.

  Don't soften the critique. The whole point is to find what I'm faking.
variables:
  - "{{concept}}"
  - "{{domain}}"
  - "{{audience}}"
  - "{{my_explanation}}"
exampleInput: |
  concept: How does TLS / HTTPS actually work — what does the handshake do
  domain: Web security, networking
  audience: a smart non-technical product manager (myself, basically)
  my_explanation: |
    When you visit an https website, your browser and the server do a handshake. They agree on a way to encrypt traffic so people in the middle can't read it. The browser checks the server's certificate to make sure it's legit — that's why you sometimes see warnings about "untrusted certificate". Then they exchange keys and use them to encrypt everything from there. It uses something called SSL/TLS. The certificate is signed by a certificate authority that the browser trusts.
exampleOutput: |
  RESTATE
  HTTPS uses a handshake where browser and server agree on encryption, the browser verifies the server's certificate against trusted authorities, and then they exchange keys to encrypt the rest of the conversation.

  My paraphrase is close to yours, but I notice you said "exchange keys and use them to encrypt" — your explanation merged two distinct steps that are different ideas. Signal.

  CLARITY GAPS
  - "agree on a way to encrypt" — what does "agree" mean? They negotiate a cipher suite; you didn't say that. A 12-year-old would ask: "How do they agree without already being able to talk privately?"
  - "exchange keys" — this is the heart of TLS and you skipped it. The 12-year-old asks: "If they don't have a shared key yet, and anyone can read what they say, how do they share a key without the bad guy stealing it?" That question is exactly what TLS solves.
  - "It uses something called SSL/TLS" — SSL is deprecated; TLS is the current protocol. Saying SSL/TLS as if interchangeable suggests you haven't fully separated them.

  LOGICAL GAPS
  - You said the browser checks the certificate but didn't say HOW. Certificates contain the server's public key signed by a CA's private key. Without explaining public-key cryptography, the certificate check sounds like magic.
  - You jumped from "exchange keys" to "encrypt everything" without distinguishing the asymmetric handshake (slow) from the symmetric session (fast). That's the whole reason the handshake exists.

  WHAT YOU PROBABLY DON'T ACTUALLY UNDERSTAND
  1. Public-key cryptography — your explanation works only if this is hand-waved. Specifically: how something encrypted with a public key can only be decrypted with the matching private key.
  2. Why there's a handshake at all — the answer is "to establish a shared symmetric key over an insecure channel," and you didn't articulate that problem.
  3. The certificate authority chain of trust — you mentioned CAs but didn't explain why your browser trusts a chain of signatures from a root CA.

  DRILL QUESTIONS
  1. If a man-in-the-middle is recording every byte of the handshake, why can't they decrypt the resulting session?
  2. What's the difference between asymmetric and symmetric encryption, and why does TLS use both?
  3. What does it mean to "trust" a certificate authority, and what happens to security if a root CA is compromised?

  ANALOGIES THAT MIGHT HELP
  - Public-key crypto: imagine a mailbox with a slot anyone can drop letters in (public key) but only one person has the key to open it (private key). Your "lock and key" intuition was directionally right but didn't separate the two keys.
  - Certificate authority: like a notary public — you don't trust the document, you trust the notary's stamp because society agreed they're trustworthy. Browsers ship with a list of "notaries" they accept.

  NEXT STEP
  Not ready to teach yet. Spend 30 minutes specifically on public-key cryptography — that's the load-bearing concept your explanation skipped. Once you can explain why encrypting with a public key produces something only the private key can decrypt, the rest of TLS becomes much easier to articulate. Then re-run this prompt.
tips:
  - "Pick the audience deliberately. Explaining to a 12-year-old vs. a peer engineer surfaces different gaps."
  - "Don't write the explanation looking at notes. The point is to test what you actually carry, not what you can copy-paste."
  - "If the model's restate is meaningfully different from your input, that's the most important signal. You weren't clear."
  - "Use this after reading something dense (TLS, RAG, financial concepts, etc.) before assuming you've internalized it."
  - "Re-run after addressing the gaps. The second pass is where you find out what you actually learned vs. what you memorized."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - learning-roadmap-create
  - book-application-distillation
  - mentor-question-prep
tags:
  - learning
  - feynman
  - understanding
  - critical-thinking
  - synthesis
---
