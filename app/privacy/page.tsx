import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildMetadata } from "@/lib/metadata";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Integrate Claude collects, uses, shares, and protects personal information. GDPR, CCPA, and international data transfer practices for our consultancy.",
  keywords: [
    "Integrate Claude privacy policy",
    "privacy policy",
    "GDPR",
    "CCPA",
    "data protection",
    "personal information",
  ],
  alternates: { canonical: "/privacy" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
});

const privacyPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/privacy#webpage`,
  url: `${BASE_URL}/privacy`,
  name: "Privacy Policy",
  description:
    "How Integrate Claude collects, uses, shares, and protects personal information.",
  inLanguage: "en-US",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  lastReviewed: "2026-05-01",
  about: { "@id": `${BASE_URL}/#organization` },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={privacyPageSchema} />
      <SiteHeader />
      <main>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
          <article className="text-foreground">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: May 2026
            </p>

            <p className="text-base leading-relaxed text-muted-foreground mb-10">
              Integrate Claude (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) is an independent consultancy that helps
              businesses adopt and integrate Claude across their workflows. This
              Privacy Policy explains what personal information we collect when
              you visit integrateclaude.com or interact with us, how we use that
              information, who we share it with, and the choices you have.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Who We Are
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Integrate Claude is operated as an independent consultancy. For
              privacy purposes, we are the data controller of personal
              information collected through this site and our consulting
              engagements. You can reach us at{" "}
              <a
                href="mailto:hello@integrateclaude.com"
                className="text-foreground underline underline-offset-4 hover:text-[var(--accent)]"
              >
                hello@integrateclaude.com
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Information We Collect
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We collect three categories of information.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">
                Information you provide directly.
              </span>{" "}
              When you book a discovery call, submit a contact form, send us an
              email, or download a gated resource, we collect the details you
              share. This typically includes your name, work email, company,
              role, company size, and the substance of what you tell us about
              your business or AI usage. If you proceed to a paid engagement, we
              collect the additional information needed to deliver that
              engagement, governed by the agreement signed with the client.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">
                Information collected automatically.
              </span>{" "}
              When you visit the site, we use Vercel Analytics and Vercel Speed
              Insights to gather aggregated, anonymized data about how the site
              is used. This includes page views, referring sites, approximate
              region (derived from IP), device type, and basic performance
              metrics. This data is not linked to your identity and we do not
              use it to track you across other websites.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">
                Information from booking and form providers.
              </span>{" "}
              When you book a discovery call, our scheduling provider (Cal.com)
              collects the information needed to schedule the meeting. We
              receive that booking information directly from Cal.com.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-base leading-relaxed text-muted-foreground mb-4 list-disc pl-6 space-y-2">
              <li>
                Respond to inquiries and schedule discovery calls or other
                meetings.
              </li>
              <li>
                Prepare for, deliver, and follow up on consulting engagements
                you have requested or contracted.
              </li>
              <li>
                Send transactional emails (booking confirmations, follow-ups,
                engagement updates) related to interactions you have already
                started.
              </li>
              <li>
                Send occasional newsletters or research updates, but only if you
                have explicitly opted in. Every newsletter includes an
                unsubscribe link, and we honor opt-outs immediately.
              </li>
              <li>
                Understand which content is useful, identify navigation
                problems, and improve site performance.
              </li>
              <li>
                Comply with legal obligations, enforce our agreements, and
                protect our rights and the rights of others.
              </li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We do not use your information to make automated decisions with
              legal or similarly significant effects, and we do not sell or rent
              your personal information.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Legal Basis for Processing
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              For visitors and prospects in the European Economic Area, the
              United Kingdom, and other jurisdictions where applicable, we
              process personal information on the following legal bases:
            </p>
            <ul className="text-base leading-relaxed text-muted-foreground mb-4 list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold text-foreground">
                  Performance of a contract or pre-contract steps,
                </span>{" "}
                when you ask us about an engagement, book a call, or are already
                a client.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Legitimate interests,
                </span>{" "}
                including running and improving the site and responding to
                inbound inquiries from people who have engaged with us.
              </li>
              <li>
                <span className="font-semibold text-foreground">Consent,</span>{" "}
                for marketing emails and any other processing where consent is
                required.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Legal obligation,
                </span>{" "}
                where we are required to retain or disclose information by
                applicable law.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Sharing With Third Parties
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We do not sell, rent, or trade your personal information. We do
              share information with a small set of trusted service providers
              that help us operate the site and deliver our services. These
              include:
            </p>
            <ul className="text-base leading-relaxed text-muted-foreground mb-4 list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold text-foreground">Vercel,</span>{" "}
                for hosting, analytics, and speed monitoring.
              </li>
              <li>
                <span className="font-semibold text-foreground">Cal.com,</span>{" "}
                for booking and scheduling discovery calls.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Email service providers,
                </span>{" "}
                for sending booking confirmations, transactional emails, and
                opted-in newsletters.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Productivity and CRM tools,
                </span>{" "}
                used internally to track inbound leads, prospect conversations,
                and engagement work. These tools see only what is required to do
                their job.
              </li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We may also disclose personal information where required by law,
              in connection with a corporate transaction (such as a merger or
              sale), or to protect the rights, property, or safety of Integrate
              Claude, our clients, or others.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              International Transfers
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We are based in the United States, and our service providers may
              process information in the United States or other countries. Where
              personal information is transferred from the EEA, the UK, or
              Switzerland, we rely on appropriate safeguards such as the
              European Commission&rsquo;s Standard Contractual Clauses or
              equivalent mechanisms made available by our providers.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Data Retention
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We retain personal information only as long as we need it for the
              purposes described above, plus a reasonable archival period.
              Inquiries that don&rsquo;t lead to an engagement are typically
              retained for up to 24 months. Records related to active or
              completed engagements are retained for the longer of the duration
              of our relationship and any period required by applicable tax,
              contract, or legal recordkeeping obligations. Aggregated and
              anonymized analytics may be retained indefinitely.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Cookies and Similar Technologies
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We use a small number of functional cookies and local storage
              entries to keep the site working (such as remembering simple
              preferences). We use Vercel Analytics and Speed Insights, which
              are designed to be privacy-friendly and do not set cross-site
              tracking cookies or build user profiles. We do not run advertising
              cookies, retargeting pixels, or third-party social trackers on
              this site.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Your Rights and Choices
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Depending on where you live, you may have the right to:
            </p>
            <ul className="text-base leading-relaxed text-muted-foreground mb-4 list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Correct information that is inaccurate or incomplete.</li>
              <li>
                Request deletion of personal information, subject to legal or
                contractual retention obligations.
              </li>
              <li>
                Object to or restrict certain processing, including marketing
                communications.
              </li>
              <li>
                Receive a portable copy of your data in a commonly used format.
              </li>
              <li>
                Withdraw consent where we are processing on the basis of
                consent.
              </li>
              <li>
                Lodge a complaint with your local data protection authority.
              </li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              To exercise any of these rights, email{" "}
              <a
                href="mailto:hello@integrateclaude.com"
                className="text-foreground underline underline-offset-4 hover:text-[var(--accent)]"
              >
                hello@integrateclaude.com
              </a>
              . We will respond within a reasonable time and at most within the
              statutory window that applies to your jurisdiction (typically 30
              to 45 days). California residents may exercise the rights granted
              by the California Consumer Privacy Act, including the right to
              know, delete, and opt out of any &ldquo;sale&rdquo; or
              &ldquo;sharing&rdquo; of personal information. We do not sell or
              share personal information as those terms are defined under
              California law.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Security
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We use commercially reasonable administrative, technical, and
              physical measures to protect personal information against
              unauthorized access, disclosure, alteration, and destruction.
              Cybersecurity is part of how we work, including for our own data.
              No method of transmission or storage is perfectly secure; if we
              ever experience a security incident affecting your personal
              information, we will notify affected individuals consistent with
              applicable law.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Children&rsquo;s Privacy
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              The site and our services are intended for businesses and adults.
              We do not knowingly collect personal information from children
              under 16. If you believe a child has submitted personal
              information to us, contact us and we will delete it.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Independence and Trademarks
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Integrate Claude is an independent consultancy. We are not
              affiliated with, endorsed by, or sponsored by Anthropic, PBC.
              &ldquo;Claude&rdquo; and the Claude logo are trademarks of
              Anthropic, PBC, used here in nominative reference to their
              product. All other trademarks belong to their respective owners.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time. The
              &ldquo;Last updated&rdquo; date at the top of this page indicates
              the most recent revision. If we make material changes, we will
              take reasonable steps to notify affected users, such as posting a
              prominent notice on the site or emailing active clients. Continued
              use of the site after a change becomes effective constitutes
              acceptance of the revised policy.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
              Contact
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              For privacy questions, requests, or concerns, reach out at{" "}
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
