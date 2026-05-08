---
title: "Prep for a hard conversation with a cofounder"
slug: cofounder-conflict-conversation-prep
function: founder
role: cofounder
description: "Structure a tough cofounder conversation before you have it — separating facts from interpretations, identifying what you actually want, and rehearsing the opening sentence."
useCase: "Use this in the 24 hours before a cofounder conversation that you've been avoiding. The conversations founders avoid are almost always the highest-leverage ones for the company. This prompt forces you to clarify what you actually want, what you're afraid of, and what a good outcome looks like — so you walk in clear-headed instead of reactive."
prompt: |
  You are a calm, experienced cofounder coach. You've sat through hundreds of these conversations. You know the difference between productive conflict and silent erosion. You're going to help me walk into this conversation prepared, not armored.

  Context:

  Cofounder name: {{cofounder_name}}
  Length of relationship: {{relationship_length}}
  Current state of the relationship: {{current_state}}

  The issue, in my words:
  {{issue}}

  Specific recent moment(s) that triggered this:
  {{triggering_moments}}

  What I think they would say if asked:
  {{their_likely_view}}

  What I want from this conversation (be honest — apology? change in behavior? boundary? to be heard?):
  {{what_i_want}}

  What I'm afraid will happen:
  {{fears}}

  Help me prep:

  1. **Facts vs. interpretations.** Separate the observable behavior from the story I'm telling about it. List 3-5 facts (observable) and 3-5 interpretations (my inferences) — labeled clearly.

  2. **What I actually want.** Help me get specific. Vague wants ("I want them to take it more seriously") fail. Reframe each into something concrete enough that we'd both know if it happened.

  3. **Their probable view, steel-manned.** Write out what my cofounder would say in their best, most reasonable framing. Not strawman.

  4. **Opening sentence.** Draft the literal first sentence I should say. It should: (a) name the topic clearly, (b) not blame, (c) invite them in. Give me 2-3 options at different intensity levels.

  5. **Three things to NOT say.** Specific phrases or moves I should avoid given my emotional state.

  6. **What a good outcome looks like.** Two scenarios — best case (we resolve), realistic case (we make progress, agree to revisit). What does each actually look like in observable behavior?

  7. **A question to leave the conversation open with.** A specific final question that keeps the door open if we don't fully resolve.

  Be direct with me. If my "what I want" reads as actually wanting them to feel bad rather than wanting change, name that. If I'm framing this as their problem when it's a shared pattern, name that too.
variables:
  - "{{cofounder_name}}"
  - "{{relationship_length}}"
  - "{{current_state}}"
  - "{{issue}}"
  - "{{triggering_moments}}"
  - "{{their_likely_view}}"
  - "{{what_i_want}}"
  - "{{fears}}"
exampleInput: |
  cofounder_name: Sam
  relationship_length: 3 years (worked together at prior company), 18 months as cofounders
  current_state: cordial but tense, less laughter than 6 months ago
  issue: Sam keeps committing the company to things in customer calls without checking with me. Last week he promised a SOC2 timeline I cannot deliver on. I'm starting to feel like a contractor in my own company.
  triggering_moments:
    - Last Tuesday's call with BigCo where he committed to SOC2 by end of Q3
    - Two weeks ago he hired a contractor without looping me in on scope or budget
    - Last Friday he told a customer we'd build a feature I had explicitly de-prioritized
  their_likely_view: Sam would say he's trying to close deals and keep momentum, that I'm too cautious, that we'll figure out delivery and that's how startups work
  what_i_want: I want him to stop making technical and roadmap commitments without me, and I want him to trust my judgment on what we can ship
  fears: that he'll think I'm being precious, that this becomes a fight about control, that we'll go back to "fine" without actually changing anything
exampleOutput: |
  PREP FOR YOUR CONVERSATION WITH SAM

  1. FACTS vs. INTERPRETATIONS

  Facts (observable):
  - Sam committed to a SOC2 timeline (end of Q3) on a customer call without prior alignment with you.
  - Sam hired a contractor without looping you in on scope or budget.
  - Sam told a customer we'd build a feature you had de-prioritized.
  - You and Sam are laughing less than 6 months ago.

  Interpretations (your inferences):
  - "I'm a contractor in my own company." This is your story; it's not a fact. It might be true, but it's an inference about how Sam sees you.
  - "He doesn't trust my judgment." Possible, but you don't know.
  - "He's doing this to close deals" vs. "he's doing this because he doesn't think technical/roadmap matters as much as sales." These are very different and you're conflating them.

  Worth noting: the gap between your facts and your interpretations is wide. Sam isn't ignoring you in 17 ways — he's making unilateral commitments in 3 specific ways. Stay close to the facts.

  2. WHAT YOU ACTUALLY WANT (concrete)

  Vague: "I want him to stop making technical and roadmap commitments without me."
  Concrete: "Before any committed timeline or scope is given to a customer in writing or on a call, Sam pings me — even a 5-minute back-channel."

  Vague: "I want him to trust my judgment on what we can ship."
  Concrete: "When I de-prioritize something, that decision stands unless we re-discuss. Sam doesn't override it in customer calls."

  Be honest about a third want you didn't name: you want Sam to acknowledge that this has been happening and that it bothered you. The risk is that you'll get the behavior change and not the acknowledgment, and then resent it. If acknowledgment matters, ask for it explicitly.

  3. SAM'S VIEW, STEEL-MANNED

  "We're at a stage where momentum matters more than precision. The cost of saying 'let me check with my cofounder' on a customer call is a perception of disorganization that loses deals. I've been making judgment calls in real time because that's the job, and I'd rather apologize for over-promising than miss a quarter. I haven't been hiding anything — I tell you within hours. If you wanted veto on these, we should have set that up explicitly, and we didn't."

  Sit with this for a minute. Some of it is uncomfortable but probably true.

  4. OPENING SENTENCE — three options

  Low intensity:
  "Hey, I want to talk about how we're handling commitments to customers — not because anything blew up, but because I think we've drifted into a pattern that's not great for either of us."

  Medium intensity:
  "I want to talk about something that's been on my mind for a few weeks. There've been a few customer calls where commitments got made that I couldn't deliver on, and I want to figure out a way to handle that better — together."

  Higher intensity (use only if calmer options have been tried):
  "I need to talk about something specific. Three times in the last month, you've committed the company to scope or timelines without checking with me — SOC2, the contractor, and the feature for [customer]. I want to understand what's happening and figure out how we change it."

  Recommendation: medium. Specific enough to be real, calm enough to keep him not-defensive.

  5. THREE THINGS TO NOT SAY

  - "I feel like a contractor in my own company." It's a real feeling but it's a grenade. Save it for therapy or a journal.
  - "You don't trust my judgment." That's an inference, not a fact, and he'll defend.
  - Anything that begins with "you always." Pattern statements escalate; specific examples don't.

  6. WHAT A GOOD OUTCOME LOOKS LIKE

  Best case (resolution):
  - Sam acknowledges the three specific incidents.
  - You agree on a concrete protocol: any committed timeline or scope gets a back-channel ping before it goes to a customer.
  - You schedule a 30-minute follow-up in 2 weeks to evaluate.

  Realistic case (progress):
  - Sam pushes back partly — agrees on the protocol going forward but doesn't fully concede the past was a problem.
  - You leave with a written protocol and a clear "we'll revisit in 2 weeks."
  - You don't get the emotional acknowledgment you wanted, but you get the structural change.

  In both cases, write it down. Verbal agreements between cofounders evaporate in 72 hours.

  7. CLOSING QUESTION

  "Is there anything I'm doing that's making you feel like you have to make these commitments alone?"

  This question is uncomfortable to ask. Ask it anyway. The answer will tell you whether this is a one-sided problem or a two-sided pattern. If it's two-sided, that's the real conversation — and you can't see it from where you're standing now.

  ONE LAST THING

  You said you're afraid this "becomes a fight about control." Sit with that. It is a fight about control, partly. That's not a bad thing — every cofounder relationship is partly about who decides what. The pretense that it's something else is what makes it hard. Naming it directly ("I want clearer rules about who decides what, and I want us to agree on them") can defuse it.
tips:
  - "Have the conversation in person if at all possible, ideally on a walk. Sitting across a table makes adversarial framing easier; walking side-by-side makes collaborative framing easier."
  - "Write down what you agreed to within 24 hours of the conversation and send it to your cofounder. Verbal agreements between cofounders are extremely fragile."
  - "If you're afraid the conversation will go badly, schedule it for the morning — you have more emotional bandwidth and the rest of the day to recover or follow up. Avoid Friday afternoons."
  - "If your interpretations heavily outnumber your facts, you're not ready to have the conversation yet. Spend a day separating them first."
  - "Bring one specific concrete ask. Cofounders can solve specific problems together; they can't solve 'I feel weird about us' in one conversation."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - cofounder-roles-document
  - cofounder-weekly-1-1-agenda
  - founder-decision-journal-entry
tags:
  - cofounder
  - difficult-conversations
  - conflict
  - communication
  - alignment
---
