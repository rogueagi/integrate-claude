export function SocialProofBar() {
  return (
    <section className="border-y border-border bg-muted/40 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Pull quote */}
        <figure className="flex flex-col items-center text-center gap-4">
          <blockquote className="max-w-2xl text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
            &ldquo;Claude went from something a few people used casually to the
            backbone of our ops workflow within 60 days.&rdquo;
          </blockquote>
          <figcaption className="text-sm text-muted-foreground">
            — Director of Operations, growth-stage professional services firm
          </figcaption>
        </figure>

        {/* Company badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <p className="w-full text-center text-xs uppercase tracking-widest text-muted-foreground mb-1">
            Trusted by operators at growth-stage companies
          </p>
          {[
            "Acme Corp",
            "NovaTech",
            "Meridian Partners",
            "Apex Ops",
            "Bridgewell Co.",
          ].map((name) => (
            <span
              key={name}
              className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
