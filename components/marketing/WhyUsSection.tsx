import Image from "next/image";
import { founder, trackRecord, capabilities } from "@/lib/founder";

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Why Integrate Claude
          </h2>
          <p className="mt-3 sm:mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            A rare blend of cybersecurity rigor, marketing operator instincts,
            and a track record of generating real revenue with AI.
          </p>
        </div>

        {/* Founder card */}
        <div className="max-w-5xl mx-auto mb-4 sm:mb-6">
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-10 items-start">
            {/* Photo */}
            <div className="relative w-32 h-32 sm:w-56 sm:h-56 aspect-square sm:flex-shrink-0 overflow-hidden rounded-xl bg-muted mx-auto sm:mx-0">
              <Image
                src={founder.photo}
                alt="Ben Frost, Founder of Integrate Claude"
                fill
                sizes="(max-width: 640px) 128px, 224px"
                className="object-cover"
                priority
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-3 sm:gap-4 flex-1 text-center sm:text-left">
              <div>
                <p className="text-lg font-semibold text-foreground">
                  {founder.name}
                </p>
                <p className="text-sm text-muted-foreground">{founder.role}</p>
              </div>
              <p className="text-base text-foreground leading-relaxed max-w-prose">
                {founder.shortBio}
              </p>
            </div>
          </div>
        </div>

        {/* Track-record stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-4 sm:mb-6">
          {trackRecord.map(({ metric, label }) => (
            <div
              key={label}
              className="flex flex-col gap-2 rounded-xl border border-border bg-background p-5 sm:p-6"
            >
              <p className="text-3xl font-bold tracking-tight text-accent leading-none">
                {metric}
              </p>
              <p className="text-sm text-muted-foreground leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Capability signals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {capabilities.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-lg border border-border bg-background p-5 sm:p-6"
            >
              <div className="flex size-8 items-center justify-center rounded-md bg-accent/10 text-accent flex-shrink-0">
                <Icon className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
