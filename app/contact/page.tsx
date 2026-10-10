import { createPageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import { contact } from "@/data/contact";

export const metadata = createPageMetadata(
  "About Michael Garcia | Full-Stack Software Developer",
  "Learn about Michael Garcia, an independent software developer based in Trinidad & Tobago with over eight years of experience building websites and applications."
);

const linkClass =
  "group flex min-h-44 flex-col justify-between rounded-2xl border border-border bg-white p-6 transition-colors hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-8";

export default function ContactPage() {
  return (
    <main>
      <section className="pb-24 pt-40 sm:pb-32 sm:pt-48">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              If you&apos;d like to talk about a job opportunity,
              a project, or something I&apos;ve built, the easiest
              way to reach me is through LinkedIn.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              You can also find my code and projects on GitHub.
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
                  Contact
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
                  My Code
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
