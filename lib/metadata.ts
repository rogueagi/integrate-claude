import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

export const siteConfig = {
  name: "Integrate Claude",
  description:
    "We make Claude actually work inside your business. AI integration consulting, prompting, custom apps, and the largest free Claude prompt library.",
  url: BASE_URL,
  ogImage: `${BASE_URL}/og.png`,
  twitter: "@integrateclaude",
};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: BASE_URL,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
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
    ...overrides,
  };
}
