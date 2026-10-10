import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "About — Michael Garcia",
  description:
    "Learn more about Michael Garcia, a web designer and developer focused on building thoughtful digital experiences.",
};

const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Git",
];

export default function AboutPage() {
  return (
    <main>
      {/* Intro */}
      <section className="pb-24 pt-40 md:pb-32 md:pt-48 lg:pb-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.16em] text-muted">
                About Me
              </p>

              <h1 className="max-w-5xl font-sans text-[3.25rem] font-semibold leading-[0.9] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-8xl">
                I&apos;m Michael.
                <br />
                I build things
                <br />
                <span className="text-muted">for the web.</span>
              </h1>
            </div>

            <div className="flex items-end">
              <p className="max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
                I&apos;m a web developer who enjoys combining thoughtful design
                with modern technology to create websites that are useful,
                approachable, and built to last.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Personal introduction */}
      <section className="border-y border-border">
        <Container>
          <div className="grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:py-32">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
                A little more
              </p>
            </div>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-foreground/75 sm:text-xl sm:leading-9">
              <p>
                I got into web development because I enjoy the process of
                turning an idea into something people can actually interact
                with.
              </p>

              <p>
                There&apos;s something satisfying about taking a blank screen,
                figuring out what needs to be there, and gradually turning it
                into something that feels simple and intuitive.
              </p>

              <p>
                These days, I focus on helping businesses create a stronger
                presence online through modern, well-designed websites.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-foreground py-24 text-background md:py-32 lg:py-40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-background/50">
              How I Work
            </p>

            <div>
              <h2 className="max-w-4xl font-sans text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Good websites don&apos;t need to be complicated.
              </h2>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-background">
                    Design with purpose
                  </p>

                  <p className="mt-3 text-sm leading-6 text-background/55">
                    Every layout, interaction, and piece of content should
                    have a reason for being there.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-background">
                    Build for people
                  </p>

                  <p className="mt-3 text-sm leading-6 text-background/55">
                    A website should be easy to understand, navigate, and use
                    regardless of who is visiting it.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-background">
                    Sweat the details
                  </p>

                  <p className="mt-3 text-sm leading-6 text-background/55">
                    Typography, spacing, responsiveness, and small interactions
                    can make a surprisingly big difference.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-background">
                    Keep it maintainable
                  </p>

                  <p className="mt-3 text-sm leading-6 text-background/55">
                    Clean code and a sensible structure make a website easier
                    to improve long after launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tools */}
      <section className="py-24 md:py-32 lg:py-40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
              Tools I Use
            </p>

            <div>
              <h2 className="max-w-3xl font-sans text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Modern tools for modern websites.
              </h2>

              <div className="mt-10 grid grid-cols-2 border-t border-border sm:grid-cols-3">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="border-b border-border py-5 text-sm font-medium text-foreground"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
                Based in
              </p>

              <p className="mt-2 font-sans text-2xl font-semibold tracking-[-0.03em] text-foreground">
                Trinidad & Tobago
              </p>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted sm:text-right">
              Working with businesses locally and wherever a good project
              takes me.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32 lg:pb-40">
        <Container>
          <div className="rounded-3xl bg-accent px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-background/60">
              Have a project in mind?
            </p>

            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] text-background sm:text-5xl lg:text-6xl">
              Let&apos;s build something together.
            </h2>

            <Link
              href="/#contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              Start a conversation

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}