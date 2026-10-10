
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="flex min-h-[90svh] items-center pb-20 pt-36 sm:pb-28 sm:pt-44 lg:min-h-screen"
    >
      <Container>
        <div className="max-w-5xl">
          {/* Identity */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-accent"
            />

            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent sm:text-sm">
              Full-Stack Software Developer
            </p>
          </div>

          {/* Headline */}
          <h1
            id="home-hero-title"
            className="max-w-5xl font-sans text-[clamp(3rem,7vw,5.75rem)] font-semibold leading-[1.07] tracking-[-0.055em] text-foreground"
          >
            Building modern applications and tools for the web.
          </h1>

          {/* Introduction */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:mt-10 sm:text-lg sm:leading-9">
            I'm Michael Garcia, an independent full-stack developer
            building practical applications and open-source tools
            with React, TypeScript, Next.js, PHP, and Laravel.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Explore my work

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <a
              href="https://github.com/michael-garcia-95"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              View GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Supporting details */}
          <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium text-muted">
              Based in Trinidad & Tobago
            </p>

            <p className="font-mono text-xs text-muted">
              Applications / Developer Tools / Open Source
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
