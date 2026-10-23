
import Container from "@/components/ui/Container";

const email = "michael.anthony.garcia@hotmail.com";

const packages = [
  {
    name: "One-Page Presence",
    setupPrice: "TT$1,750",
    monthlyPrice: "TT$150",
    description:
      "A simple, professional website that gives your business a place online.",
    features: [
      "One responsive page with up to six sections",
      "Information about up to six services",
      "Up to six client-supplied images",
      "Business details, opening hours and location",
      "WhatsApp and telephone contact links",
      "Social media links",
      "Google Maps where appropriate",
      "Basic search engine optimization (SEO)",
      "One standard .com or .co.tt domain",
      "Hosting and HTTPS",
      "Two rounds of revisions",
    ],
    care:
      "Hosting, domain renewal, monitoring, basic maintenance and one minor content update per quarter.",
    delivery: "5–7 working days",
  },
  {
    name: "Business Website",
    setupPrice: "TT$3,250",
    monthlyPrice: "TT$250",
    description:
      "A more complete website for businesses that want to showcase their services across multiple pages.",
    features: [
      "Up to five responsive website pages",
      "Descriptions for up to six services",
      "Gallery with up to 15 client-supplied images",
      "Contact form",
      "WhatsApp and telephone contact links",
      "Social media links",
      "Google Maps integration",
      "Basic search engine optimization (SEO)",
      "One standard .com or .co.tt domain",
      "Hosting and HTTPS",
      "Two rounds of revisions",
    ],
    care:
      "Hosting, domain renewal, monitoring, contact-form checks, maintenance and minor content changes totaling up to 30 minutes per month.",
    delivery: "10–15 working days",
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      aria-labelledby="packages-title"
      className="scroll-mt-28 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            02 / Website Packages
          </p>

          <h2
            id="packages-title"
            className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            Find the right fit for your business.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Two straightforward options, whether you need a
            simple online presence or a more complete business
            website. All prices are in Trinidad &amp; Tobago
            dollars (TTD).
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
          {packages.map((websitePackage) => {
            const contactHref = `mailto:${email}?subject=${encodeURIComponent(
              `Website Development Enquiry - ${websitePackage.name}`
            )}`;

            return (
              <article
                key={websitePackage.name}
                className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div className="border-t-4 border-accent p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {websitePackage.name}
                  </h3>

                  <p className="mt-3 min-h-0 text-sm leading-7 text-muted">
                    {websitePackage.description}
                  </p>

                  <div className="mt-8">
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
                      One-time setup
                    </p>

                    <p className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
                      {websitePackage.setupPrice}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-6">
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
                      Monthly Website Care
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-accent">
                      {websitePackage.monthlyPrice}
                      <span className="ml-1 text-sm font-normal text-muted">
                        /month
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col border-t border-border p-6 sm:p-8">
                  <h4 className="text-base font-semibold text-foreground">
                    What&apos;s included
                  </h4>

                  <ul className="mt-5 space-y-3">
                    {websitePackage.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 font-semibold text-accent"
                        >
                          ✓
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-xl bg-surface/60 p-5">
                    <h4 className="text-sm font-semibold text-foreground">
                      Monthly Website Care includes
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {websitePackage.care}
                    </p>
                  </div>

                  <div className="mt-7">
                    <p className="text-sm font-semibold text-foreground">
                      Estimated delivery
                    </p>

                    <p className="mt-2 text-sm text-muted">
                      {websitePackage.delivery}
                    </p>

                    <p className="mt-2 text-xs leading-6 text-muted">
                      After receiving the required materials
                      and deposit.
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <a
                      href={contactHref}
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      Discuss This Package ↗
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 max-w-3xl space-y-2 text-sm leading-7 text-muted">
          <p>
            Standard domain registration is subject to
            availability and eligibility. Premium domains
            may cost extra.
          </p>

          <p>
            A 50% setup deposit is required to begin, with
            the remaining 50% due after approval and before
            launch. Monthly Website Care begins at launch
            and is billed in advance.
          </p>
        </div>
      </Container>
    </section>
  );
}
