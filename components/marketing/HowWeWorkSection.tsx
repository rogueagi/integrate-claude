const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn your business, your team, your current Claude usage, and where the real leverage points are.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We map the workflows, write the prompts, and spec the integrations — before a line of code is written.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "We build, train, and deploy — with your team alongside us so knowledge transfers.",
  },
  {
    number: "04",
    title: "Enable",
    description:
      "We don't disappear after launch. We monitor, iterate, and expand as your needs evolve.",
  },
];

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            How we work
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-lg mx-auto">
            A structured process that moves fast without cutting corners.
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-6 left-[calc(12.5%+1px)] right-[calc(12.5%+1px)] h-px bg-border" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center px-6 relative"
            >
              {/* Step circle */}
              <div className="relative z-10 flex size-12 items-center justify-center rounded-full border-2 border-accent bg-background mb-5">
                <span className="text-xs font-bold text-accent">
                  {step.number}
                </span>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden flex flex-col gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-6 bottom-6 left-6 w-px bg-border" />

          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={[
                "flex gap-6",
                idx !== steps.length - 1 ? "pb-8" : "",
              ].join(" ")}
            >
              {/* Step circle */}
              <div className="relative z-10 flex-shrink-0 flex size-12 items-center justify-center rounded-full border-2 border-accent bg-background">
                <span className="text-xs font-bold text-accent">
                  {step.number}
                </span>
              </div>

              <div className="pt-2">
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
