---
title: "Pitch a design partner program to a target customer"
slug: design-partner-pitch
function: founder
role: founder-sales
description: "Build a design-partner pitch that's honest about what you're asking and clear about what they get — for early-stage companies that need 5-10 anchor customers willing to build with you."
useCase: "Use this when you're pre-PMF or just past it and want to land 3-10 design partners — customers who get a discount, deep input on the product, and real founder access in exchange for committing real budget and giving real feedback. The worst founder mistake is pitching design partners as 'free or discounted access' — that signals weakness and attracts the wrong customers. This prompt produces a pitch that frames it as a real partnership."
prompt: |
  You are a founder who has run a successful design partner program. You know the difference between a real design partnership (mutual, structured, time-bounded) and a free pilot (one-sided, vague, attracts tire-kickers). You build the former.

  Context:

  Company: {{company_name}}
  Stage: {{stage}}
  Target design partner: {{target_partner}}
  Their persona / role: {{persona}}
  Why I'm targeting THIS specific partner: {{why_them}}
  What I want from the design partner: {{what_i_want}} (e.g., weekly feedback calls, beta usage, public reference)
  What I'm offering in exchange: {{what_i_offer}} (discount, equity, founder access, named partner status, custom features)
  Program duration: {{duration}}
  Number of design partners I'm aiming for total: {{partner_count}}
  Where I am in conversations with this specific partner: {{conversation_state}}

  Build me three things:

  1. **The pitch itself.** What I say in the meeting (or write in the email) when I propose the design partnership. It should:
     - Frame this as a partnership, not a discount
     - Be specific about what the partner gets
     - Be specific about what I'm asking from them — including time commitment
     - Acknowledge the risk to them
     - Have a clear time-bound structure with a defined endpoint
     - Be written in founder voice, not marketing copy

  2. **The 1-page design partner agreement.** A simple document we both sign — not a contract, a memo. Includes: program length, mutual commitments, success criteria, what happens at the end of the program (do they convert to a regular customer? at what price?).

  3. **The disqualifying questions.** 3 questions I should ask BEFORE accepting them as a design partner — to filter out the wrong-fit ones. Specifically: prospects who want the discount but won't actually engage, or prospects who are in too early a stage of buying to commit.

  Tone: founder-to-operator. Not "we're so excited to invite you." Direct, specific, mutual.
variables:
  - "{{company_name}}"
  - "{{stage}}"
  - "{{target_partner}}"
  - "{{persona}}"
  - "{{why_them}}"
  - "{{what_i_want}}"
  - "{{what_i_offer}}"
  - "{{duration}}"
  - "{{partner_count}}"
  - "{{conversation_state}}"
exampleInput: |
  company_name: Linework
  stage: pre-seed, $4k MRR, 8 customers, validated wedge but still rough product
  target_partner: Brookfield Logistics — 3PL, 850 employees, 4 DCs, growing 30%
  persona: Sarah Lin, Director of Operations
  why_them: Sarah is exactly our ICP, has explicitly asked for features we don't have yet, and operates at a scale (4 DCs) that would force us to harden the product. Plus she's well-respected in the apparel logistics community and would be a strong reference.
  what_i_want:
    - Use the product across all 4 DCs for 6 months
    - Weekly 30-min feedback call with me
    - Quarterly written feedback memo
    - Be a public reference and reference call willing to take 2-3 calls per quarter from prospects
    - Be willing to test new features in beta before general release
  what_i_offer:
    - 50% discount off our standard pricing during the 6-month program ($36k vs $72k for 4 sites)
    - Direct line to the founder (me) for any issue
    - Named "founding design partner" status
    - 3 custom features prioritized that they need (within reason)
    - Lock in the discounted rate for one year post-program if they convert
  duration: 6 months
  partner_count: 5 design partners total
  conversation_state: We had one good discovery call last week, she's interested but hasn't committed. I want to propose the design partner framing on the next call.
exampleOutput: |
  THE PITCH (what to say on the next call)

  "Sarah — I want to propose something a little different from a normal customer relationship. I'm looking for 5 companies to be founding design partners for Linework, and based on our last call, you're at the top of my list.

  Here's what I'm proposing. For 6 months, you'd run Linework across all 4 DCs at half price — $36k for the 6 months instead of the $72k full rate. In exchange, three things from you: a weekly 30-min call with me where you tell me what's broken, a written quarterly memo from you on what's working and what isn't, and a willingness to take 2-3 reference calls per quarter from prospective customers who are evaluating us.

  In exchange, you get four things in addition to the discount: direct access to me when anything breaks, three custom features that you need that we'll build into the roadmap, founding design partner status which I think is real (we'll feature you as one of the 5 founding companies that shaped this product), and a guaranteed lock-in of the discounted rate for a year if you convert at the end.

  I want to be honest about what I'm asking. This is a real commitment from your end — not a discounted pilot. I'm asking for your time and your input, and I'm offering significant skin in the game on price plus my direct attention. I'm asking 5 companies, not 50. After the 6 months, you can convert to a regular customer or walk; either way you've shaped a product and gotten value.

  The reason I'm asking you specifically: 4 DCs is the scale where we need to be tested. Apparel logistics is the segment we're committed to. And honestly, you're the kind of operator who'd push us hard, which is what we need.

  Want to see the 1-page agreement? Take a few days, talk to whoever you need to internally, and we can sign or pass."

  THE 1-PAGE DESIGN PARTNER AGREEMENT

  LINEWORK FOUNDING DESIGN PARTNER AGREEMENT
  Brookfield Logistics × Linework
  6 months: [start date] – [end date]

  WHAT BROOKFIELD COMMITS TO
  - Deploy Linework across all 4 DCs for the 6-month program.
  - Pay $36k total for the 6 months ($6k/month, prepaid quarterly).
  - One 30-minute weekly feedback call with the Linework founder.
  - One written quarterly feedback memo (1-2 pages, no fixed format).
  - Willingness to take up to 3 reference calls per quarter from prospective Linework customers.
  - Willingness to be named publicly as a "Founding Design Partner."

  WHAT LINEWORK COMMITS TO
  - Direct founder access (Slack channel + email + scheduled weekly call).
  - 3 custom features prioritized into the roadmap, defined together within the first 30 days, shipped by month 5.
  - "Founding Design Partner" status — featured publicly, with their permission, on the Linework site and in materials.
  - Lock-in of the $6k/month rate for 12 months post-program if they convert.
  - 30-day exit option: if at any point in the first 30 days Brookfield decides this isn't working, they exit with a refund of unused fees.

  AT THE END OF 6 MONTHS
  Brookfield decides:
  (a) Convert to regular customer at $6k/month locked for 12 months;
  (b) Convert at standard pricing if they prefer different terms;
  (c) Walk away — no penalty, no clawback, mutual goodwill.

  SUCCESS CRITERIA WE AGREE TO BY END OF MONTH 1
  - 3 specific outcome metrics Brookfield wants Linework to deliver (e.g., handoff time reduction, incident reporting compliance, manager NPS).
  - Reviewed jointly at month 3 and month 6.

  Signed:
  Sarah Lin, Brookfield Logistics: __________ Date: __________
  Jordan Reyes, Linework: __________ Date: __________

  THREE DISQUALIFYING QUESTIONS

  1. "If I asked you to do a 30-min weekly call with me for 6 months, would your calendar realistically support that, or would it slip after the first month?" → Tests whether they'll actually engage. The right answer is honest. If they hesitate, the program won't work.

  2. "What's the biggest specific change you'd want to see in our product in the next 90 days, that would make this worth your time even if everything else stayed the same?" → Tests whether they have a real point of view. If they say "I'd have to think about it," they're a passive partner — wrong for design.

  3. "Who else internally would need to approve this, and what's their typical timeline?" → Tests whether the Director can actually commit, or whether this gets stuck in procurement. If procurement is a 6-month process, the design partner framing won't survive contact with their org.
tips:
  - "Don't pitch design partnership as 'free' or 'beta.' Both signals weakness. Charge real money — even discounted — and require real commitment. The customers who balk at this are the ones who would have wasted your time anyway."
  - "Cap the program at 5-10 partners. More than that and you can't actually use their feedback. Fewer than 3 and you're not getting enough signal."
  - "The 1-page agreement is the highest-leverage artifact. Verbal design partnerships drift; written ones hold."
  - "Time-bound the program. 'Forever' design partnerships become discounted customers who feel entitled to special treatment. 6 months is right; renew explicitly if it's working."
  - "Pre-screen with the disqualifying questions on a real call. Founders accept anyone who says yes to design partnership; the best founders filter."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - founder-led-sales-call-prep
  - founder-sales-discovery-script
  - lost-deal-postmortem-founder
tags:
  - sales
  - design-partners
  - early-stage
  - founder-led-sales
  - customer-development
---
