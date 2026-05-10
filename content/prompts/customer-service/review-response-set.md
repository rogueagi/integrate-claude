---
title: "Generate a set of review responses (positive, mixed, negative) in brand voice"
slug: review-response-set
function: customer-service
role: support
description: "Produce a set of review responses across sentiment tiers — positive, mixed, negative — that maintain a single brand voice and address each reviewer's specific points."
useCase: "Use this prompt when your support team is responding to product or store reviews at volume. It generates a coordinated set of responses across sentiment tiers so the brand voice stays consistent, common issues get owned, and reviewers feel heard rather than templated at."
prompt: |
  You are a customer experience lead who has trained support teams on review response. Generate a coordinated set of review responses.

  Brand context:
  - Brand name: {{brand_name}}
  - Category: {{category}}
  - Brand voice (adjectives): {{brand_voice}}
  - Signature sign-off (name, role, or just "the team"): {{signature}}
  - Public review platform: {{platform}} (e.g., Shopify reviews, Google, Yelp, Amazon)

  Review set (mix of sentiments):
  {{reviews}}

  Each review entry should include: reviewer name (or initial), star rating, review body, and any product or order specifics noted.

  For each review, output a response with:
  - Reviewer name in salutation (use first name only)
  - Specific reference to something they said — not generic acknowledgment
  - For negative or mixed: own the issue, name what we will do (or have done), offer a real recovery path with a private channel
  - For positive: thank them specifically, do not over-promise; reinforce one brand value
  - Sign-off using {{signature}}

  Rules:
  - Never copy-paste the same opener across responses. If you find yourself starting three responses with "Thanks for...", regenerate.
  - Negative responses must address the specific complaint. "We are sorry you had this experience" without details is worse than no response.
  - Do not promise refunds, replacements, or compensation publicly unless the user instructed you to. Direct the reviewer to a private channel for resolution.
  - Mixed reviews (3-4 stars with caveats) are the most valuable to respond to well. Spend the most care here.
  - Do not get defensive on negative reviews, even if the reviewer is wrong about a fact. Acknowledge their experience, offer to talk privately, and correct the public record only if it is materially misleading.
  - Length per response: 50-110 words. Punchy, not preachy.
  - If a review references something requiring escalation (legal threat, safety claim, accessibility, discrimination), flag it [escalate before responding] and do not draft a public reply.
variables:
  - "{{brand_name}}"
  - "{{category}}"
  - "{{brand_voice}}"
  - "{{signature}}"
  - "{{platform}}"
  - "{{reviews}}"
exampleInput: |
  brand_name: Switchback Coffee Roasters
  category: specialty coffee, online subscription and bagged retail
  brand_voice: warm, knowledgeable, slightly nerdy about coffee, never condescending
  signature: Devon, Customer Care Lead
  platform: Shopify reviews on product pages
  reviews:
  - Reviewer: Megan T. — 5 stars
    Review: "The Ethiopia Yirgacheffe is the best filter coffee I've had in a year. Bright, floral, blueberry on the finish. Will reorder."
    Specifics: Ethiopia Yirgacheffe, 12oz bag

  - Reviewer: Jared K. — 3 stars
    Review: "Coffee is great but the bag arrived with the gas valve crushed and I think some of the freshness was lost. Not blaming you guys but FYI."
    Specifics: Colombia Huila, 12oz bag, ordered last week

  - Reviewer: Priya R. — 1 star
    Review: "Ordered the espresso blend, got the filter blend instead. Customer service email I sent five days ago has not been answered. Frustrating."
    Specifics: ordered Espresso Roast, received Filter Roast, support email not yet replied

  - Reviewer: Tom S. — 4 stars
    Review: "Subscription has been good. Beans always fresh. Would love a way to skip a delivery without canceling and re-subscribing."
    Specifics: monthly subscription, feature request
exampleOutput: |
  Megan — 5 stars, Ethiopia Yirgacheffe

  Megan, the blueberry note on that Yirgacheffe is one of the reasons we kept it on the menu this season. The lot is from the Konga washing station and that finish is genuinely what they call it on the cup score. Glad it landed for you. We are reordering green right now and it should be on the site through July.

  Devon, Customer Care Lead

  Jared — 3 stars, Colombia Huila

  Jared, sorry about the crushed valve — that is a real shipping issue and worth knowing about. The valve is what keeps the bag from going stale, so if it was crushed in transit the freshness probably did take a hit. We are going to make this right. Could you email us at care@switchbackcoffee.com so we can replace the bag? Either way, thank you for telling us.

  Devon, Customer Care Lead

  Priya — 1 star, wrong roast received

  Priya, two things went wrong here and both are on us. The wrong roast in the box is a fulfillment error, and not hearing back in five days is a support failure I want to fix today. Could you email me directly at devon@switchbackcoffee.com? I will personally find your message, get the right bag in the mail tonight, and figure out what happened with the response time.

  Devon, Customer Care Lead

  Tom — 4 stars, subscription feature request

  Tom, the skip-a-delivery feature is something a lot of subscribers have asked for and it is the next thing on our subscription roadmap. We aim to have it live this summer. Until then, if you ever need to skip a month, email us at care@switchbackcoffee.com and we will pause your shipment without canceling — same effect, just on our side. Thanks for the steady support.

  Devon, Customer Care Lead
tips:
  - "Mixed reviews (3-4 stars) are the highest-leverage to respond to well. Future shoppers read them most carefully."
  - "Sign with a real person's name. Generic 'the team' sign-offs read as automated to most reviewers."
  - "Never offer compensation publicly. Move recovery to a private channel — it protects the brand and reduces gaming behavior."
  - "If a review touches safety, accessibility, discrimination, or legal threats, escalate before responding publicly. The prompt flags these as [escalate before responding]."
  - "Review your responses in batches. Voice consistency across a set is what readers feel, even if they cannot articulate it."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - return-policy-rewrite-friendly
  - guest-recovery-email
  - cart-abandonment-sequence
tags:
  - ecommerce
  - reviews
  - support
  - brand-voice
  - customer-service
---
