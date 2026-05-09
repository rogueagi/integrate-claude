import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ServiceDetailPage } from "@/components/marketing/ServiceDetailPage";
import { JsonLd } from "@/components/shared/JsonLd";
import { services, getServiceBySlug } from "@/lib/services";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

interface Props {
  params: Promise<{ slug: string }>;
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const trimmed = text.slice(0, max - 1);
  const lastSpace = trimmed.lastIndexOf(" ");
  return `${(lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed).trim()}…`;
}

function buildServiceKeywords(slug: string, title: string): string[] {
  const base = [title, `Claude ${title}`, "Claude AI consulting"];
  const perSlug: Record<string, string[]> = {
    "ai-readiness-audit": [
      "Claude readiness assessment",
      "AI readiness audit",
      "AI integration audit",
      "AI opportunity assessment",
    ],
    "education-ai-fluency": [
      "Claude AI training",
      "AI fluency program",
      "Claude workshops",
      "enterprise AI education",
    ],
    "workflow-integration": [
      "Claude workflow integration",
      "AI workflow redesign",
      "AI process automation",
      "operations AI integration",
    ],
    "prompting-and-projects": [
      "Claude prompt engineering",
      "Claude Projects setup",
      "production prompt engineering",
      "system prompt design",
    ],
    "custom-web-apps": [
      "custom Claude apps",
      "Claude-powered SaaS",
      "Anthropic API development",
      "AI web app development",
    ],
    "data-analytics-intelligence": [
      "Claude data analytics",
      "AI narrative reporting",
      "Claude BI integration",
      "AI variance analysis",
    ],
    "ai-security-governance": [
      "AI security governance",
      "Claude AI policy",
      "AI vendor risk assessment",
      "NIST AI RMF",
      "AI compliance",
    ],
    "marketing-content-ops": [
      "AI marketing operations",
      "Claude content production",
      "AI brand voice",
      "AI content workflows",
    ],
    "ongoing-partnership": [
      "Claude AI advisor",
      "AI retainer",
      "AI partnership",
      "fractional AI lead",
    ],
  };
  return [...base, ...(perSlug[slug] ?? [])];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const description = truncate(service.description, 158);
  return buildMetadata({
    title: service.title,
    description,
    keywords: buildServiceKeywords(slug, service.title),
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/services/${slug}`,
      title: `${service.title} | Integrate Claude`,
      description,
    },
  });
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicesPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${BASE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${BASE_URL}/services/${slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />
      <main>
        <ServiceDetailPage service={service} />
      </main>
      <SiteFooter />
    </>
  );
}
