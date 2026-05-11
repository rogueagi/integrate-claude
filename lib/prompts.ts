import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Prompt, PromptFunction } from "@/types/prompt";

const PROMPTS_DIR = path.join(process.cwd(), "content", "prompts");

function parsePromptFile(filePath: string): Prompt | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return data as Prompt;
  } catch {
    return null;
  }
}

export function getAllPrompts(): Prompt[] {
  const prompts: Prompt[] = [];
  const functions = fs.readdirSync(PROMPTS_DIR);

  for (const fn of functions) {
    const fnDir = path.join(PROMPTS_DIR, fn);
    if (!fs.statSync(fnDir).isDirectory()) continue;

    const files = fs.readdirSync(fnDir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      const prompt = parsePromptFile(path.join(fnDir, file));
      if (prompt) prompts.push(prompt);
    }
  }

  return prompts;
}

export function getPromptsByFunction(fn: PromptFunction): Prompt[] {
  return getAllPrompts().filter((p) => p.function === fn);
}

export function getPromptsByRole(fn: PromptFunction, role: string): Prompt[] {
  return getAllPrompts().filter((p) => p.function === fn && p.role === role);
}

export function getPromptBySlug(slug: string): Prompt | null {
  const all = getAllPrompts();
  return all.find((p) => p.slug === slug) ?? null;
}

export function getRelatedPrompts(prompt: Prompt): Prompt[] {
  if (!prompt.relatedSlugs?.length) return [];
  const all = getAllPrompts();
  return prompt.relatedSlugs
    .map((slug) => all.find((p) => p.slug === slug))
    .filter(Boolean) as Prompt[];
}

export function getPromptCounts(): Record<PromptFunction, number> {
  const all = getAllPrompts();
  const counts = {} as Record<PromptFunction, number>;
  for (const p of all) {
    counts[p.function] = (counts[p.function] ?? 0) + 1;
  }
  return counts;
}

export function getFeaturedPrompts(limit = 6): Prompt[] {
  return getAllPrompts().slice(0, limit);
}

// Slim representation of a prompt — just the fields the search index
// and result cards need. About 250-350 bytes per prompt serialized,
// so the full library fits in ~130KB of HTML.
export interface PromptSummary {
  slug: string;
  title: string;
  description: string;
  function: PromptFunction;
  role: string;
  complexity: Prompt["complexity"];
  modelRecommendation: Prompt["modelRecommendation"];
  tags: string[];
}

export function getPromptSummaries(): PromptSummary[] {
  return getAllPrompts().map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    function: p.function,
    role: p.role,
    complexity: p.complexity,
    modelRecommendation: p.modelRecommendation,
    tags: p.tags ?? [],
  }));
}
