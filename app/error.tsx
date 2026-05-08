"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console so it shows up in browser devtools and any
    // wired-up reporting service.
    console.error(error);
  }, [error]);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 relative overflow-hidden">
        {/* Subtle terracotta gradient blob */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[420px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="max-w-md mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-muted-foreground mb-8">
            <span className="size-1.5 rounded-full bg-accent inline-block" />
            Error
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Something went wrong
          </h1>

          {/* Subhead */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            An unexpected error occurred. We&apos;ve logged it and will look
            into it. You can try again or head back to the homepage.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={() => reset()}
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 px-8 h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90 border-0",
              )}
            >
              <RefreshCw className="size-4" />
              Try again
            </button>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 px-8 h-12 text-base",
              )}
            >
              Back to home
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {error.digest && (
            <p className="mt-10 text-xs text-muted-foreground font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
