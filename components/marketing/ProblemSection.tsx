export function ProblemSection() {
  return (
    <section id="problem" className="py-16 sm:py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            It&rsquo;s not an AI adoption problem.{" "}
            <br className="hidden sm:block" />
            It&rsquo;s a design problem.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            Most companies today have at least a handful of employees using
            Claude on their own. They paste in documents, draft emails, and
            summarize meeting notes. It works well enough that leadership nods
            and says, &ldquo;Yes, we should be doing more of this.&rdquo; And
            then nothing really changes.
          </p>
          <p>
            The gap isn&rsquo;t about access. Your team already has it.
            It&rsquo;s about everything that comes after: the rollout plan that
            never gets written, the prompts that stay stuck at &ldquo;good
            enough,&rdquo; the workflows that still run on manual work because
            no one has the time or mandate to redesign them. Moving from casual
            to operational is a different problem than getting started, and
            internal teams rarely have the bandwidth, or the outside
            perspective, to cross it alone.
          </p>
          <p>
            What looks like an adoption gap is usually a design gap. The
            companies getting real leverage from Claude aren&rsquo;t using it
            more. They&rsquo;re using it differently. They&rsquo;ve rebuilt
            workflows around it, trained their teams to use it with discipline,
            and in many cases built software that makes it impossible to do
            certain tasks the old way. That&rsquo;s not something that happens
            organically. It&rsquo;s engineered.
          </p>
        </div>
      </div>
    </section>
  );
}
