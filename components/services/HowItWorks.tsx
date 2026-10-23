
import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Discuss",
    description:
      "Tell me about your business, the services you offer, and what you need from your website.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I'll build your website using your business information, photos, and feedback. Two rounds of revisions are included.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Once approved, your website goes live with its domain, secure hosting, and ongoing Website Care.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            04 / How It Works
          </p>

          <h2
            id="process-title"
            className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            Getting started is simple.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            From our first conversation to launching your
            website, I&apos;ll guide you through the process.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-border bg-white p-6 sm:p-8"
            >
              <span className="font-mono text-sm font-semibold text-accent">
                {step.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
