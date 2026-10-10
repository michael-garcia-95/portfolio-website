import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a conversation about your business, your goals, your audience, and what you want your website to achieve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I turn those ideas into a clear visual direction, focusing on the structure, content, and experience of your website.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Once the direction is approved, I bring the design to life with a responsive, fast, and reliable website.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing everything across devices, we launch your website and make sure you're comfortable managing what comes next.",
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
              The Process
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              From idea to launch, without the headache.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              A straightforward process designed to keep things clear,
              collaborative, and moving forward.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-20 grid border-t border-border md:mt-28 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group relative border-b border-border py-8 md:px-8 md:py-10 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0 ${
                index === 0 ? "lg:pr-8" : ""
              }`}
            >
              {/* Number */}
              <span className="text-xs font-medium tracking-[0.12em] text-muted">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                {step.description}
              </p>

              {/* Decorative line */}
              <div className="mt-8 h-px w-8 bg-border transition-all duration-500 group-hover:w-14 group-hover:bg-accent" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}