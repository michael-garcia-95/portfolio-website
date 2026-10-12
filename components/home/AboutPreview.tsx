
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-preview-title"
      className="scroll-mt-28 border-t border-border bg-surface/40 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              03 / A Little About Me
            </p>

            <h2
              id="about-preview-title"
              className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
            >
              I learned by building things.
            </h2>
          </div>

          <div className="lg:pt-8">
            <div className="max-w-2xl space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">
              <p>
                I&apos;m Michael, a software developer based in Trinidad
                &amp; Tobago. I&apos;ve been building websites and apps
                independently for more than eight years, starting mainly
                with JavaScript and PHP.
              </p>

              <p>
                These days, I also work with React, Next.js, and TypeScript.
                I enjoy taking an idea, figuring out how to make it work,
                and seeing it come together.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-9 inline-flex min-h-11 items-center gap-3 rounded-md text-sm font-semibold text-accent transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              More about me

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 border-t border-border pt-6">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-accent"
          />

          <p className="font-mono text-xs text-muted">
            Based in Trinidad &amp; Tobago
          </p>
        </div>
      </Container>
    </section>
  );
}
