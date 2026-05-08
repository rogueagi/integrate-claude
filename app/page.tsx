import { Suspense } from "react";
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
import { getFeaturedPrompts, getPromptCounts } from "@/lib/prompts";

export default async function HomePage() {
  const featuredPrompts = getFeaturedPrompts(6);
  const promptCounts = getPromptCounts();

  return (
    <>
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
