import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/JsonLd";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Integrate Claude",
  alternateName: "Integrate Claude Consultancy",
  url: BASE_URL,
  logo: `${BASE_URL}/brand-mark.svg`,
  image: `${BASE_URL}/opengraph-image`,
  description: siteConfig.description,
  founder: {
    "@type": "Person",
    "@id": `${BASE_URL}/#founder`,
    name: "Ben Frost",
    jobTitle: "Founder & AI Integration Lead",
    url: `${BASE_URL}/about`,
    image: `${BASE_URL}/founder-ben-frost.jpg`,
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Claude AI",
    "Anthropic API",
    "AI integration",
    "Prompt engineering",
    "AI workflow design",
    "Cybersecurity",
    "AI governance",
  ],
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@integrateclaude.com",
    contactType: "Customer Service",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#founder`,
  name: "Ben Frost",
  jobTitle: "Founder & AI Integration Lead",
  image: `${BASE_URL}/founder-ben-frost.jpg`,
  url: `${BASE_URL}/about`,
  worksFor: {
    "@id": `${BASE_URL}/#organization`,
  },
  knowsAbout: [
    "Claude AI",
    "Anthropic Claude",
    "AI integration",
    "AI strategy",
    "Cybersecurity",
    "Federal-scale program governance",
    "Prompt engineering",
    "Claude Projects",
    "Workflow automation",
    "Marketing operations",
  ],
  alumniOf: [],
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Integrate Claude",
  url: BASE_URL,
  description: siteConfig.description,
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  inLanguage: "en-US",
};

// Styrene B (text grade) — for headlines and UI
const styrene = localFont({
  src: [
    {
      path: "../public/fonts/StyreneB-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/StyreneB-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/StyreneB-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-styrene",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial"],
});

// Tiempos Text — for body copy
const tiempos = localFont({
  src: [
    {
      path: "../public/fonts/TiemposText-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TiemposText-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/TiemposText-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-tiempos",
  display: "swap",
  fallback: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
});

// Geist Mono — for code blocks and prompts
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${styrene.variable} ${tiempos.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <JsonLd data={organizationSchema} />
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
