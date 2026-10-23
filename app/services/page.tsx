
import Image from "next/image";
import Container from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";
import Packages from "@/components/services/Packages";
import AddOns from "@/components/services/AddOns";
import HowItWorks from "@/components/services/HowItWorks";
import FAQs from "@/components/services/FAQs";
import ContactCTA from "@/components/services/ContactCTA";

export const metadata = createPageMetadata(
  "Web Development Services | Michael Garcia",
  "Professional, mobile-friendly websites for small businesses in Trinidad & Tobago. Explore affordable website packages with hosting and ongoing care.",
  "/services"
);

const contactHref =
  "mailto:michael.anthony.garcia@hotmail.com?subject=Website%20Development%20Enquiry";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        aria-labelledby="services-title"
        className="pb-12 pt-36 sm:pb-16 sm:pt-44"
      >
        <Container>
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
              Web Development Services · Trinidad &amp; Tobago
            </p>

            <h1
              id="services-title"
              className="mt-7 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl"
            >
              A professional website for your business,{" "}
              <span className="text-accent">
                without the complexity.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
              I build clean, mobile-friendly websites that help
              small businesses showcase their services and make
              it easier for customers to get in touch.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={contactHref}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Discuss Your Website ↗
              </a>

              <a
                href="#packages"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                View Packages ↓
              </a>
            </div>

            <p className="mt-6 text-sm text-muted">
              Website setup from{" "}
              <strong className="font-semibold text-foreground">
                TT$1,750
              </strong>{" "}
              +{" "}
              <strong className="font-semibold text-foreground">
                TT$150
              </strong>{" "}
              monthly Website Care
            </p>
          </div>
        </Container>
      </section>

      {/* Featured sample website */}
      <section
        aria-labelledby="sample-design-title"
        className="border-y border-border bg-surface/40 py-14 sm:py-20"
      >
        <Container>
          <div className="mb-9 max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              01 / Sample Website
            </p>

            <h2
              id="sample-design-title"
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              See what your website could look like.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              A professional website helps customers learn about
              your business, explore your services, and find the
              information they need to contact you.
            </p>
          </div>

          <figure>
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <a
                href="/portfolio-website/images/services/sample-website.webp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the sample website design at full size"
                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <Image
                  src="/portfolio-website/images/services/sample-website.webp"
                  alt="Sample home services business website displayed on desktop and mobile devices"
                  width={1448}
                  height={1086}
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="h-auto w-full"
                />
              </a>
            </div>

            <figcaption className="mt-4 text-sm leading-6 text-muted">
              Sample website design concept. This is an
              illustrative example, not a completed client project.
            </figcaption>
          </figure>
        </Container>
      </section>
      {/* Website packages */}
      <Packages />

      {/* Optional add-ons */}
      <AddOns />

      {/* How it works */}
      <HowItWorks />

      {/* Frequently asked questions */}
      <FAQs />

      {/* Final contact */}
      <ContactCTA />
    </main>
  );
}
