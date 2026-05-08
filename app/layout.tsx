import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { buildMetadata } from "@/lib/metadata";

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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
