import { HeroSection } from "@/components/marketing/HeroSection";
import { SocialProofBar } from "@/components/marketing/SocialProofBar";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { ServicesSection } from "@/components/marketing/ServicesSection";
import { PromptLibraryPreview } from "@/components/marketing/PromptLibraryPreview";
import { HowWeWorkSection } from "@/components/marketing/HowWeWorkSection";
import { WhyUsSection } from "@/components/marketing/WhyUsSection";
import { CaseStudiesSection } from "@/components/marketing/CaseStudiesSection";
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
        <SocialProofBar />
        <ProblemSection />
        <ServicesSection />
        <PromptLibraryPreview
          featuredPrompts={featuredPrompts}
          promptCounts={promptCounts}
        />
        <HowWeWorkSection />
        <WhyUsSection />
        <CaseStudiesSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
