import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="flex min-h-[90svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40 lg:min-h-screen lg:pb-24">
      <Container>
        <div className="max-w-6xl">
          {/* Eyebrow */}
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.16em] text-muted">
            Web Designer & Developer
          </p>

          {/* Heading */}
          <h1 className="max-w-6xl font-sans text-[3.25rem] font-semibold leading-[0.9] tracking-[-0.055em] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            I build websites
            <br />
            that feel as good
            <br />
            <span className="text-muted">as they look.</span>
          </h1>

          {/* Bottom content */}
          <div className="mt-10 flex flex-col gap-8 sm:mt-12 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Thoughtful, modern websites for businesses that want a stronger
                presence online.
              </p>

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-muted/70">
                Based in Trinidad & Tobago · Working worldwide
              </p>
            </div>

            <Link
              href="/work"
              className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-foreground"
            >
              View selected work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}