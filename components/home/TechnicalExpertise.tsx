
import Container from "@/components/ui/Container";

const expertise = [
  {
    number: "01",
    title: "Frontend",
    description:
      "I build the parts of an application that people see and use, from page layouts to buttons, forms, and interactions.",
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
    title: "Backend",
    description:
      "I work on the code behind applications, including APIs, user accounts, and the logic that makes everything work.",
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
      "I use databases and backend services to store information and keep different parts of an application connected.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "Supabase",
    ],
  },
  {
    number: "04",
    title: "Testing & Development",
    description:
      "I use Git to manage changes, write tests to catch problems, and try to keep my code easy to understand and maintain.",
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
      className="scroll-mt-28 border-t border-border py-16 sm:py-20 lg:py-24"
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
            What I work with.
          </h2>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-9 md:grid-cols-2 lg:gap-x-16">
          {expertise.map((item) => (
            <article
              key={item.number}
              className="min-w-0 border-t border-border pt-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs font-medium text-accent">
                  {item.number}
                </span>

                <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs font-medium text-accent"
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
