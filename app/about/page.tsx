
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Michael Garcia | Full-Stack Software Developer",
  description:
    "Learn about Michael Garcia, an independent full-stack developer based in Trinidad & Tobago, building web applications and open-source developer tools.",
};

const principles = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "Good software starts with understanding what needs to be solved. I try to make technical decisions based on the problem rather than the technology alone.",
  },
  {
    number: "02",
    title: "Build thoughtfully",
    description:
      "I value clear interfaces, maintainable code, and practical architecture. I aim for solutions that work well today and can continue evolving.",
  },
  {
    number: "03",
    title: "Keep improving",
    description:
      "Every project offers opportunities to learn. Testing, iteration, and revisiting earlier decisions are important parts of how I develop software.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Introduction */}
      <section className="pb-20 pt-40 sm:pb-28 sm:pt-48">
        <Container>
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              About Me
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
              I&apos;m Michael.
              <br />
              I build software
              <br />
              <span className="text-accent">
                for the web.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-muted sm:text-xl">
              I&apos;m an independent full-stack software
              developer based in Trinidad &amp; Tobago,
              with a passion for building useful applications
              and thoughtful developer tools.
            </p>
          </div>
        </Container>
      </section>

      {/* Development background */}
      <section className="border-y border-border py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                01 / My Background
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Learning by building.
              </h2>
            </div>

            <div className="max-w-3xl space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">
              <p>
                My path into software development has been
                largely self-directed. For more than eight
                years, I&apos;ve been building websites and
                applications independently, primarily using
                JavaScript and PHP.
              </p>

              <p>
                Over time, my interests expanded beyond
                individual websites into larger applications,
                backend systems, and software architecture.
                More recently, I&apos;ve focused on modern
                React and Next.js development, alongside
                TypeScript and reusable component design.
              </p>

              <p>
                Working independently has given me experience
                across different parts of the development
                process, from planning and implementation
                to debugging, testing, and maintenance.
                It&apos;s also taught me to approach unfamiliar
                problems with patience and curiosity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Engineering approach */}
      <section className="bg-surface/50 py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              02 / How I Work
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Practical thinking. Thoughtful execution.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted">
              I believe effective software development
              balances technical decisions with the needs
              of the people using the product.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-border bg-white p-6 sm:p-8"
              >
                <span className="font-mono text-xs font-medium text-accent">
                  {principle.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-foreground">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Current work */}
      <section className="border-t border-border py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                03 / What I Build
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From applications to developer tools.
              </h2>
            </div>

            <div>
              <div className="max-w-3xl space-y-6 text-base leading-8 text-muted sm:text-lg">
                <p>
                  My projects reflect different areas of
                  software development. Roundza explores
                  interactive multiplayer experiences,
                  while TTMotorSales represents practical
                  business-oriented application development.
                </p>

                <p>
                  I&apos;m also developing React Simple Charts,
                  an open-source charting library that lets
                  me explore component architecture,
                  TypeScript API design, accessibility,
                  and library development.
                </p>

                <p>
                  I&apos;m interested in opportunities to
                  contribute to teams building useful web
                  products, where I can apply my experience,
                  collaborate with other developers, and
                  continue growing professionally.
                </p>
              </div>

              <Link
                href="/work"
                className="group mt-8 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Explore my projects
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section className="border-t border-border pb-28 pt-20">
        <Container>
          <div className="rounded-2xl bg-foreground px-6 py-12 text-background sm:px-10 sm:py-16">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#76D5C6]">
              Let&apos;s Connect
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Interested in working together?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-background/75">
              I&apos;m always interested in conversations
              about software development, new opportunities,
              and interesting technical challenges.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
            >
              Get in touch →
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
