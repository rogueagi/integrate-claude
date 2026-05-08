import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Integrate Claude collects, uses, and protects your data.",
  alternates: { canonical: "/privacy" },
});

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <article className="max-w-3xl mx-auto text-foreground">
            <div className="mb-8 rounded-md border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
              This is a placeholder Privacy Policy. Please consult legal counsel
              before using this verbatim in production.
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: May 2026
            </p>

            <p className="text-base leading-relaxed text-muted-foreground mb-10">
              Integrate Claude is a marketing site and consultancy that helps
              teams adopt Claude across their workflows. This policy explains
              what we collect when you visit integrateclaude.com or contact us,
              and how we handle that information.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Information We Collect
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              When you submit a contact form or book a discovery call, we
              collect the details you provide directly: your name, work email,
              and (optionally) your company. We use Vercel Analytics to gather
              anonymous, aggregated traffic data such as page views, referrers,
              and approximate region. We use functional cookies only — for
              things like remembering your theme preference. We do not use
              advertising or cross-site tracking cookies.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We use the information you share to respond to inquiries, schedule
              discovery calls, and follow up on engagements you have asked
              about. If you opt in, we may send occasional newsletters about new
              prompts, services, or research. We use anonymous analytics to
              understand which content is useful and to improve site
              performance.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Data Sharing
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We do not sell your personal information, and we do not share it
              with third parties for their own marketing. We do rely on a small
              number of trusted service providers that process data on our
              behalf, including Vercel (hosting and analytics), Cal.com (call
              booking), and our email provider for transactional and opt-in
              messages.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Your Rights
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              You can request access to the personal information we hold about
              you, ask us to correct inaccuracies, or request that we delete it.
              Email{" "}
              <a
                href="mailto:hello@integrateclaude.com"
                className="text-foreground underline underline-offset-4 hover:text-[var(--accent)]"
              >
                hello@integrateclaude.com
              </a>{" "}
              and we will respond within a reasonable time.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Contact
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              For any privacy questions, reach out at{" "}
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
