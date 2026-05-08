import { Suspense } from "react";
import { CaseStudiesGrid } from "./CaseStudiesGrid";

export function CaseStudiesSection() {
  return (
    <section id="results" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Results we&rsquo;ve delivered
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Representative engagements across legal, finance, healthcare,
            marketing, and custom software. Names anonymized; outcomes verified.
          </p>
        </div>

        <Suspense fallback={null}>
          <CaseStudiesGrid />
        </Suspense>
      </div>
    </section>
  );
}
