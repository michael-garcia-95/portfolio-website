
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
    title: "Planning",
    description:
      "I like to get a clear idea of what a project needs to do before getting too far into the code.",
  },
  {
    number: "02",
    title: "Building",
    description:
      "I try to keep things straightforward and write code that's easy to understand and change later.",
  },
  {
    number: "03",
    title: "Testing and improving",
    description:
      "Not everything works perfectly the first time. I test things, fix problems, and make improvements as I go.",
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
              I&apos;m a software developer based in Trinidad &amp;
              Tobago. Most of my experience has come from working
              on my own projects, from websites to more involved
              applications.
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
                How I got into development.
              </h2>
            </div>

            <div className="max-w-3xl space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">

              <p>
                I&apos;ve been building websites and applications independently
                for more than eight years. I started mainly with JavaScript
                and PHP and learned a lot by making things myself.
              </p>

              <p>
                Over time, I started working on more involved projects.
                More recently, I&apos;ve been using React, Next.js, and
                TypeScript, alongside the backend work I was already
                familiar with.
              </p>

              <p>
                One thing I enjoy about development is that there&apos;s
                always something new to figure out. Sometimes that means
                building a feature from scratch. Other times it means
                tracking down a problem or finding a simpler way
                to do something.
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
              How I approach a project.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted">
              Every project is a little different, but I generally
              try to keep the process simple.
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
                What I&apos;ve been working on.
              </h2>
            </div>

            <div>
              <div className="max-w-3xl space-y-6 text-base leading-8 text-muted sm:text-lg">

                <p>
                  I&apos;ve worked on a few different kinds of projects.
                  Roundza is a party-game app, TTMotorSales is a website
                  for buying and selling used vehicles, and React Simple
                  Charts is a library for adding charts to React apps.
                </p>

                <p>
                  They&apos;ve given me experience with different parts of
                  development, from building interfaces to working on
                  the systems behind them. I&apos;d like to bring that
                  experience to a development team and continue learning
                  from other developers.
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
              Want to get in touch?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-background/75">
              If you&apos;d like to talk about a developer role, a
              project, or something I&apos;ve built, feel free
              to reach out.
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
