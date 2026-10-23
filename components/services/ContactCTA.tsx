
import Container from "@/components/ui/Container";

const email = "michael.anthony.garcia@hotmail.com";

const contactHref = `mailto:${email}?subject=${encodeURIComponent(
  "Website Development Enquiry"
)}`;

export default function ContactCTA() {
  return (
    <section
      aria-labelledby="services-contact-title"
      className="py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="rounded-2xl bg-foreground px-6 py-12 text-background sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#76D5C6]">
              06 / Get in Touch
            </p>

            <h2
              id="services-contact-title"
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
            >
              Ready to get your business online?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-background/80 sm:text-lg">
              Tell me a little about your business and the
              website you have in mind. I&apos;ll be happy
              to discuss which option makes sense for you.
            </p>

            <div className="mt-9 flex flex-col items-start gap-5">
              <a
                href={contactHref}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
              >
                Discuss Your Website ↗
              </a>

              <a
                href={`mailto:${email}`}
                className="max-w-full break-all text-sm text-background/80 underline decoration-background/40 underline-offset-4 transition-colors hover:text-background hover:decoration-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
              >
                {email}
              </a>
            </div>

            <p className="mt-10 border-t border-background/20 pt-6 text-xs leading-6 text-background/60">
              Michael Garcia · Independent Full-Stack Developer
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              Trinidad &amp; Tobago
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
