"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What size companies do you work with?",
    a: "We work with everyone from solo operators and small firms to enterprise teams. What matters isn't headcount; it's whether you're serious about making AI a real part of how work gets done. We've built for bootstrapped startups and multi-hundred-person organizations, and the core approach scales either way.",
  },
  {
    q: "Do we need technical staff to work with you?",
    a: "No. Most of our work is designed for operators and business leaders. We bring the technical depth; you bring the domain knowledge. Many of our best engagements are with teams where the decision-maker has never written a line of code.",
  },
  {
    q: "How is this different from hiring a prompt engineer?",
    a: "A prompt engineer writes prompts. We redesign how your business operates around AI: training, workflow redesign, prompts, and software as a coordinated system. The prompts are one component of a much larger change management effort.",
  },
  {
    q: "How long does an engagement typically take?",
    a: "Scoped projects run 4 to 12 weeks depending on complexity. Retained partnerships are ongoing. Most clients see meaningful ROI within the first 30 days, often within the first week of implementation.",
  },
  {
    q: "Do you only work with Claude?",
    a: "We specialise in Claude because it's the best model for most business use cases today. We're not model-agnostic consultants hedging across every provider. We're Claude specialists who go deep on what that platform can actually do.",
  },
  {
    q: "What does a discovery call look like?",
    a: "30 minutes. We learn about your business, your current AI usage, and your biggest operational bottlenecks. At the end, you'll have a clear picture of where the leverage is and what we'd recommend, whether or not you decide to work with us.",
  },
  {
    q: "How much does it cost?",
    a: "Scoped projects typically run $8K to $200K+ depending on the service. The AI Readiness Audit starts at $8K. Workflow Integration runs $25K to $150K. Custom builds run $40K to $200K+. Retained partnerships are priced monthly from $5K to $25K. Each service page lists its own range, and a 30-minute discovery call gives you an exact quote.",
  },
  {
    q: "Can you build custom Claude-powered software?",
    a: "Yes. We build internal tools, client-facing applications, and SaaS features powered by the Anthropic API. Typical build cycles are 6–14 weeks from spec to deployment. We stay involved post-launch to iterate as your needs evolve.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Questions we hear often
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion>
            {faqs.map(({ q, a }) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger className="text-sm font-medium text-foreground py-4">
                  {q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
