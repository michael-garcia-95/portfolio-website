
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="flex items-center pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pb-14 lg:pt-36"
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
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:mt-7 sm:text-lg sm:leading-9">
            I&apos;m Michael Garcia, an independent software
            developer. My projects include party games, a
            vehicle classifieds website, and a charting
            library for React.
          </p>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
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
        </div>
      </Container>
    </section>
  );
}
