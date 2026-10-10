import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — Michael Garcia",
  description:
    "Have a project in mind? Get in touch with Michael Garcia about your next website.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="pb-20 pt-32 sm:pb-24 sm:pt-40 md:pb-32 md:pt-48 lg:pb-40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            {/* Intro */}
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.16em] text-muted">
                Get in Touch
              </p>

              <h1 className="max-w-4xl font-sans text-[3.25rem] font-semibold leading-[0.9] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
                Let&apos;s talk about your project.
              </h1>

              <p className="mt-8 max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Have a new website in mind, or think your current one could be
                better? Tell me a little about what you&apos;re working on.
              </p>

              <div className="mt-12 space-y-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    Email
                  </p>

                  <a
                    href="mailto:hello@example.com"
                    className="mt-2 inline-block text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    hello@example.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    Based in
                  </p>

                  <p className="mt-2 text-sm font-medium text-foreground">
                    Trinidad & Tobago
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}