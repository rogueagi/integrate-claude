import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildMetadata } from "@/lib/metadata";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms of service governing your use of integrateclaude.com, the Claude prompt library, and services delivered by Integrate Claude.",
  keywords: [
    "Integrate Claude terms of service",
    "terms of service",
    "site terms",
    "prompt library license",
    "CC BY 4.0",
  ],
  alternates: { canonical: "/terms" },
});

const termsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/terms#webpage`,
  url: `${BASE_URL}/terms`,
  name: "Terms of Service",
  description:
    "Terms governing your use of integrateclaude.com, the Claude prompt library, and services from Integrate Claude.",
  inLanguage: "en-US",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  lastReviewed: "2026-05-01",
  about: { "@id": `${BASE_URL}/#organization` },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={termsPageSchema} />
      <SiteHeader />
      <main>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
          <article className="text-foreground">
            <div className="mb-8 rounded-md border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
              This is a placeholder Terms of Service. Please consult legal
              counsel before using this verbatim in production.
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: May 2026
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              By accessing or using integrateclaude.com (the
              &ldquo;Site&rdquo;), you agree to be bound by these Terms of
              Service. If you do not agree, please do not use the Site.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Use of Site
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              You may use the Site for personal and legitimate business
              purposes. You agree not to scrape, mirror, overload, or otherwise
              abuse the Site, and not to use it to violate applicable laws or
              the rights of others.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Prompt Library License
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Unless otherwise noted, prompts published in our prompt library
              are made available under the Creative Commons Attribution 4.0
              International license (CC BY 4.0). You are welcome to adapt and
              redistribute them; attribution to Integrate Claude is requested
              when you do.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Service Engagements
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Paid consulting, implementation, and other service engagements are
              governed by separate, signed agreements between Integrate Claude
              and the client. These Terms do not create or modify any such
              engagement.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Disclaimers
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Content on the Site is provided for informational purposes only.
              It is not legal, financial, tax, or other professional advice, and
              should not be relied on as such. The Site is provided &ldquo;as
              is&rdquo; without warranties of any kind.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              To the maximum extent permitted by law, Integrate Claude shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of the
              Site.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Changes to Terms
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We may update these Terms from time to time. The &ldquo;Last
              updated&rdquo; date above indicates the most recent revision. Your
              continued use of the Site after changes take effect constitutes
              acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Independence and Trademarks
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Integrate Claude is an independent consultancy. We are not
              affiliated with, endorsed by, or sponsored by Anthropic, PBC.
              &ldquo;Claude&rdquo; and the Claude logo are trademarks of
              Anthropic, PBC, used here in nominative reference to their
              product. Use of these trademarks does not imply any partnership or
              endorsement. All other trademarks belong to their respective
              owners.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Contact
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Questions about these Terms? Email{" "}
              <a
                href="mailto:hello@integrateclaude.com"
                className="text-foreground underline underline-offset-4 hover:text-[var(--accent)]"
              >
                hello@integrateclaude.com
              </a>
              .
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
