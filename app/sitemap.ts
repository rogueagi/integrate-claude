import type { MetadataRoute } from "next";
import { getAllPrompts, getPromptCounts } from "@/lib/prompts";
import { FUNCTION_LABELS, ROLES_BY_FUNCTION } from "@/types/prompt";
import type { PromptFunction } from "@/types/prompt";

const BASE = "https://integrateclaude.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const prompts = getAllPrompts();
  const counts = getPromptCounts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/prompts`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const functionPages: MetadataRoute.Sitemap = Object.keys(FUNCTION_LABELS)
    .filter((fn) => (counts[fn as PromptFunction] ?? 0) > 0)
    .map((fn) => ({
      url: `${BASE}/prompts/${fn}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const rolePages: MetadataRoute.Sitemap = Object.entries(
    ROLES_BY_FUNCTION,
  ).flatMap(([fn, roles]) =>
    roles.map((role) => ({
      url: `${BASE}/prompts/${fn}/${role}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  const promptPages: MetadataRoute.Sitemap = prompts.map((p) => ({
    url: `${BASE}/prompts/${p.function}/${p.role}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...functionPages, ...rolePages, ...promptPages];
}
