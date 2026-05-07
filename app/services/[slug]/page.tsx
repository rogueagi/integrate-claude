import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ServiceDetailPage } from "@/components/marketing/ServiceDetailPage";
import { services, getServiceBySlug } from "@/lib/services";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.tagline,
    alternates: { canonical: `/services/${slug}` },
  });
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicesPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <ServiceDetailPage service={service} />
      </main>
      <SiteFooter />
    </>
  );
}
