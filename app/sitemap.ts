import type { MetadataRoute } from "next";
import { getAllPrompts, getPromptCounts } from "@/lib/prompts";
import { FUNCTION_LABELS, ROLES_BY_FUNCTION } from "@/types/prompt";
import type { PromptFunction } from "@/types/prompt";
import { services } from "@/lib/services";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const prompts = getAllPrompts();
  const counts = getPromptCounts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/prompts`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/deployment-playbook`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 9 service detail pages (sourced from lib/services.ts)
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Industry landing pages
  const industryPages: MetadataRoute.Sitemap = [
    "for-legal",
    "for-finance",
    "for-healthcare",
    "for-marketing",
    "for-sales",
    "for-saas",
    "for-real-estate",
    "for-hospitality",
    "for-federal",
    "for-ecommerce",
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const functionPages: MetadataRoute.Sitemap = Object.keys(FUNCTION_LABELS)
    .filter((fn) => (counts[fn as PromptFunction] ?? 0) > 0)
    .map((fn) => ({
      url: `${BASE_URL}/prompts/${fn}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const rolePages: MetadataRoute.Sitemap = Object.entries(
    ROLES_BY_FUNCTION,
  ).flatMap(([fn, roles]) =>
    roles.map((role) => ({
      url: `${BASE_URL}/prompts/${fn}/${role}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  const promptPages: MetadataRoute.Sitemap = prompts.map((p) => ({
    url: `${BASE_URL}/prompts/${p.function}/${p.role}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...functionPages,
    ...rolePages,
    ...promptPages,
  ];
}
