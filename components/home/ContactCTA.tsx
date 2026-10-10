import Link from "next/link";
import Container from "@/components/ui/Container";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 lg:py-40"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-accent px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {/* Decorative element */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-background/10"
          />

          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-background/10"
          />

          <div className="relative max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-background/60">
              Have a project in mind?
            </p>

            <h2 className="mt-6 font-sans text-4xl font-semibold leading-[0.95] tracking-[-0.045em] text-background sm:text-5xl lg:text-7xl">
              Let&apos;s make something great.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-background/65 sm:text-lg sm:leading-8">
              Whether you&apos;re starting from scratch or your current website
              needs a refresh, I&apos;d love to hear what you&apos;re working on.
            </p>

            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/90"
            >
              Start a conversation

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}