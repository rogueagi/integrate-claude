"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Chip = {
  label: string;
  slug: string | null;
};

const chips: Chip[] = [
  { label: "All", slug: null },
  { label: "Legal", slug: "legal" },
  { label: "Finance", slug: "finance" },
  { label: "Healthcare", slug: "healthcare" },
  { label: "Marketing", slug: "marketing" },
  { label: "Federal & Regulated", slug: "regulated" },
];

export function VerticalDoorway() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = searchParams.get("vertical");

  const handleSelect = (slug: string | null) => {
    const url = slug ? `${pathname}?vertical=${slug}` : pathname;
    router.replace(url, { scroll: false });

    // Smooth-scroll to the case studies section
    if (typeof window !== "undefined") {
      const target = document.getElementById("results");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className="py-8 sm:py-10 border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <p className="text-sm font-medium text-muted-foreground shrink-0">
          See results in your industry:
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {chips.map((chip) => {
            const isSelected = chip.slug ? current === chip.slug : !current;
            return (
              <button
                key={chip.label}
                type="button"
                onClick={() => handleSelect(chip.slug)}
                aria-pressed={isSelected}
                className={cn(
                  "min-h-9 sm:min-h-0 rounded-full px-4 py-2 sm:py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isSelected
                    ? "bg-accent text-accent-foreground"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40",
                )}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
