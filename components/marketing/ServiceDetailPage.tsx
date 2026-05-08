import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Service } from "@/lib/services";
import { JsonLd } from "@/components/shared/JsonLd";
import { ServiceFAQAccordion } from "./ServiceFAQAccordion";

interface Props {
  service: Service;
}

export function ServiceDetailPage({ service }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Integrate Claude",
      url: "https://integrateclaude.com",
    },
  };

  const faqSchema =
    service.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: {
              "@type": "Answer",
              text: a,
            },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={schema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Badge variant="secondary" className="mb-4">
            Service
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {service.tagline}
          </p>
          <p className="text-lg leading-relaxed">{service.description}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#book"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium transition-colors hover:bg-primary/90"
            >
              Book a discovery call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* What we deliver */}
        <section className="bg-muted/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
            <h2 className="text-2xl font-semibold mb-8">What we deliver</h2>
            <ul className="space-y-4">
              {service.whatWeDeliver.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who it's for */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-semibold mb-4">Who this is for</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {service.whoItsFor}
          </p>
        </section>

        {/* Outcomes */}
        <section className="bg-muted/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
            <h2 className="text-2xl font-semibold mb-8">
              What success looks like
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.outcomes.map((outcome, i) => (
                <div key={i} className="bg-background rounded-lg border p-4">
                  <p className="font-medium">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faq.length > 0 && (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
            <h2 className="text-2xl font-semibold mb-8">Common questions</h2>
            <ServiceFAQAccordion faq={service.faq} />
          </section>
        )}

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <div className="rounded-2xl bg-primary text-primary-foreground p-10 text-center">
            <h2 className="text-2xl font-semibold mb-3">
              Ready to get started?
            </h2>
            <p className="mb-6 opacity-80">
              Book a 30-minute discovery call. We'll tell you exactly what we'd
              recommend for your situation.
            </p>
            <Link
              href="/#book"
              className="inline-flex items-center gap-2 rounded-md bg-primary-foreground text-primary px-6 py-3 font-medium transition-opacity hover:opacity-90"
            >
              Book a discovery call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
