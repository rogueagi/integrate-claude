import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Browse our services or the Claude prompt library instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 relative overflow-hidden">
        {/* Subtle terracotta gradient blob, scaled down from HeroSection */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[420px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="max-w-md mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-muted-foreground mb-8">
            <span className="size-1.5 rounded-full bg-accent inline-block" />
            404
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Page not found
          </h1>

          {/* Subhead */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            We can&apos;t find that page. It may have moved, or never existed in
            the first place.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 px-8 h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90 [a]:hover:bg-accent/90 border-0",
              )}
            >
              Back to home
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/prompts"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 px-8 h-12 text-base",
              )}
            >
              Browse the prompt library
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
