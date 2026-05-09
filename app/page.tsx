import { Suspense } from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/marketing/HeroSection";
import { VerticalDoorway } from "@/components/marketing/VerticalDoorway";
import { SocialProofBar } from "@/components/marketing/SocialProofBar";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { AuditPromo } from "@/components/marketing/AuditPromo";
import { ServicesSection } from "@/components/marketing/ServicesSection";
import { PromptLibraryPreview } from "@/components/marketing/PromptLibraryPreview";
import { HowWeWorkSection } from "@/components/marketing/HowWeWorkSection";
import { WhyUsSection } from "@/components/marketing/WhyUsSection";
import { CaseStudiesSection } from "@/components/marketing/CaseStudiesSection";
import { LeadMagnetSection } from "@/components/marketing/LeadMagnetSection";
import { FAQSection } from "@/components/marketing/FAQSection";
import { FinalCTASection } from "@/components/marketing/FinalCTASection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/shared/JsonLd";
import { getFeaturedPrompts, getPromptCounts } from "@/lib/prompts";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

const HOMEPAGE_TITLE = "Integrate Claude — Claude AI Integration Consulting";
const HOMEPAGE_DESCRIPTION =
  "Independent Claude AI consultancy. Workflows redesigned, prompts hardened, custom software where it matters. Trusted across legal, finance, healthcare, and federal-scale operations.";

export const metadata: Metadata = {
  title: {
    absolute: HOMEPAGE_TITLE,
  },
  description: HOMEPAGE_DESCRIPTION,
  keywords: [
    "Claude AI consulting",
    "Claude integration",
    "Anthropic Claude consultant",
    "AI integration consultancy",
    "AI workflow design",
    "Claude prompt engineering",
    "AI security and governance",
    "custom Claude software",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Integrate Claude",
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    images: [`${BASE_URL}/opengraph-image`],
    creator: "@integrateclaude",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#service`,
  name: "Integrate Claude",
  description: "Claude AI integration consulting",
  url: BASE_URL,
  areaServed: "Worldwide",
  priceRange: "$$$",
  image: `${BASE_URL}/opengraph-image`,
  provider: { "@id": `${BASE_URL}/#organization` },
  serviceType: [
    "AI Integration Consulting",
    "Claude Prompt Engineering",
    "Custom AI Software Development",
    "AI Security and Governance",
    "AI Workflow Design",
  ],
};

const homepageWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: HOMEPAGE_TITLE,
  description: HOMEPAGE_DESCRIPTION,
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#service` },
  primaryImageOfPage: `${BASE_URL}/opengraph-image`,
};

export default async function HomePage() {
  const featuredPrompts = getFeaturedPrompts(6);
  const promptCounts = getPromptCounts();

  return (
    <>
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={homepageWebPageSchema} />
      <SiteHeader />
      <main>
        <HeroSection />
        <Suspense fallback={null}>
          <VerticalDoorway />
        </Suspense>
        <SocialProofBar />
        <ProblemSection />
        <AuditPromo />
        <ServicesSection />
        <HowWeWorkSection />
        <PromptLibraryPreview
          featuredPrompts={featuredPrompts}
          promptCounts={promptCounts}
        />
        <CaseStudiesSection />
        <WhyUsSection />
        <LeadMagnetSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
