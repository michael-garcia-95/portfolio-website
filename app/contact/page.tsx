
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Michael Garcia | Software Developer",
  description:
    "Connect with Michael Garcia about software development opportunities, technical collaboration, or freelance projects.",
};

const linkClass =
  "group flex min-h-44 flex-col justify-between rounded-2xl border border-border bg-white p-6 transition-colors hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-8";

export default function ContactPage() {
  return (
    <main>
      <section className="pb-24 pt-40 sm:pb-32 sm:pt-48">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Get in Touch
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
              Let&apos;s connect.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              I&apos;m interested in conversations about
              software development opportunities,
              technical challenges, and potential
              collaborations.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              You can reach me through the channels below.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {contact.publicEmail && (
              <a
                href={`mailto:${contact.publicEmail}`}
                className={linkClass}
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    Email
                  </p>

                  <h2 className="mt-4 break-words text-xl font-semibold text-foreground">
                    {contact.publicEmail}
                  </h2>
                </div>

                <p className="mt-6 text-sm text-muted">
                  Send an email →
                </p>
              </a>
            )}

            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  Professional Network
                </p>

                <h2 className="mt-4 text-2xl font-semibold text-foreground">
                  LinkedIn
                </h2>
              </div>

              <p className="mt-6 text-sm text-muted">
                View my profile ↗
              </p>
            </a>

            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  Code & Open Source
                </p>

                <h2 className="mt-4 text-2xl font-semibold text-foreground">
                  GitHub
                </h2>
              </div>

              <p className="mt-6 text-sm text-muted">
                Explore my repositories ↗
              </p>
            </a>
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Location
            </p>

            <p className="mt-3 text-base font-medium text-foreground">
              Trinidad &amp; Tobago
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
