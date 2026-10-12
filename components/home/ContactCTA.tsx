
import Link from "next/link";
import Container from "@/components/ui/Container";
import { contact } from "@/data/contact";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-28 border-t border-border py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="rounded-2xl bg-surface px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              04 / Get in Touch
            </p>

            <h2
              id="contact-title"
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Want to Talk?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              If you&apos;re hiring a developer, have a question about
              my work, or want to discuss a project, feel free
              to get in touch.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {contact.publicEmail ? (
                <a
                  href={`mailto:${contact.publicEmail}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Send an email →
                </a>
              ) : (
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Connect on LinkedIn ↗
                </a>
              )}

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Contact details →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
