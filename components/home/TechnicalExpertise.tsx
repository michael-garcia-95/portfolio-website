
import Container from "@/components/ui/Container";

const expertise = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and interactive interfaces with modern JavaScript frameworks and component-based architecture.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Developing application logic, APIs, authentication flows, and server-side functionality that support real-world applications.",
    technologies: [
      "PHP",
      "Laravel",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Databases & Services",
    description:
      "Working with relational databases, data models, and backend services to build connected, data-driven applications.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "Supabase",
    ],
  },
  {
    number: "04",
    title: "Software Engineering",
    description:
      "Approaching development with an emphasis on maintainability, testing, accessibility, and thoughtful technical decisions.",
    technologies: [
      "Git",
      "GitHub",
      "Vitest",
      "Testing",
      "Accessibility",
    ],
  },
];

export default function TechnicalExpertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            02 / Technical Expertise
          </p>

          <h2
            id="expertise-title"
            className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            The tools behind my work.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            From responsive interfaces to backend systems, I work
            across the stack to turn ideas into functional,
            maintainable software.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {expertise.map((item) => (
            <article
              key={item.number}
              className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-colors duration-200 hover:border-accent/40 sm:p-8"
            >
              <span className="font-mono text-xs font-medium text-accent">
                {item.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base">
                {item.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
