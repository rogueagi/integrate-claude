import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

export const siteConfig = {
  name: "Integrate Claude",
  shortName: "Integrate Claude",
  description:
    "Independent Claude AI consultancy. We turn scattered Claude usage into measurable operating leverage with workflows redesigned, prompts hardened, and custom software where it matters. Built for regulated and brand-sensitive environments.",
  url: BASE_URL,
  ogImage: `${BASE_URL}/opengraph-image`,
  twitter: "@integrateclaude",
  author: "Ben Frost",
  authorUrl: `${BASE_URL}/about`,
  keywords: [
    "Claude AI consultant",
    "Claude integration consulting",
    "Claude AI consultancy",
    "Anthropic Claude consulting",
    "Claude implementation services",
    "AI integration consultant",
    "Claude AI for business",
    "Claude prompt library",
    "Claude prompt engineering",
    "AI workflow automation",
    "Custom Claude apps",
    "Claude AI security governance",
    "AI integration for regulated industries",
    "Claude for legal",
    "Claude for finance",
    "Claude for healthcare",
  ],
};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { openGraph: ogOverride, alternates: altOverride, ...rest } = overrides;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default:
        "Integrate Claude — Independent Claude AI Integration Consultancy",
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.authorUrl }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    category: "AI Integration Consulting",
    alternates: {
      canonical: BASE_URL,
      ...(altOverride ?? {}),
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: BASE_URL,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
      ...(ogOverride ?? {}),
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    ...rest,
  };
}
