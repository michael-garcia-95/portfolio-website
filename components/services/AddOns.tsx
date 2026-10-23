
import Image from "next/image";
import Container from "@/components/ui/Container";

const flyerPath =
  "/portfolio-website/images/services/packages-flyer.webp";

const addOnGroups = [
  {
    title: "Email & Communication",
    items: [
      {
        name: "Email forwarding",
        price: "TT$150 setup",
      },
      {
        name: "Professional business email",
        price: "TT$300 setup + provider subscription",
      },
      {
        name: "Additional mailbox configuration",
        price: "TT$100",
      },
    ],
  },
  {
    title: "Website Features",
    items: [
      {
        name: "Contact form for One-Page Presence",
        price: "TT$350",
      },
      {
        name: "Additional website page",
        price: "TT$450",
      },
      {
        name: "Basic booking integration",
        price: "From TT$450",
      },
    ],
  },
  {
    title: "Business Visibility & Support",
    items: [
      {
        name: "Google Business Profile setup",
        price: "TT$450",
      },
      {
        name: "Additional website updates",
        price: "TT$200/hour",
      },
      {
        name: "Copywriting and advanced functionality",
        price: "Quoted separately",
      },
    ],
  },
];

export default function AddOns() {
  return (
    <section
      id="add-ons"
      aria-labelledby="addons-title"
      className="border-y border-border bg-surface/40 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            03 / Optional Extras
          </p>

          <h2
            id="addons-title"
            className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            Need something extra?
          </h2>

          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Add extra features or services to your website
            package. You only pay for what your business needs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          {/* Add-on price lists */}
          <div className="min-w-0 space-y-5">
            {addOnGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border bg-background p-5 sm:p-7"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>

                <dl className="mt-5 divide-y divide-border">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-5"
                    >
                      <dt className="min-w-0 text-sm leading-6 text-muted">
                        {item.name}
                      </dt>

                      <dd className="shrink-0 text-sm font-semibold leading-6 text-foreground sm:text-right">
                        {item.price}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}

            <p className="text-sm leading-7 text-muted">
              Third-party subscriptions, where required,
              are charged separately. Advanced functionality
              and custom requirements are quoted before
              work begins.
            </p>
          </div>

          {/* Promotional flyer */}
          <aside className="min-w-0 rounded-2xl border border-border bg-background p-5">
            <h3 className="text-base font-semibold text-foreground">
              Website Packages Flyer
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted">
              A quick overview of the two website packages.
            </p>

            <a
              href={flyerPath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the full website packages promotional flyer"
              className="group mt-5 block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[230px] overflow-hidden rounded-lg border border-border bg-white">
                <Image
                  src={flyerPath}
                  alt="Promotional flyer showing the One-Page Presence and Business Website packages"
                  fill
                  sizes="230px"
                  className="object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>

              <span className="mt-4 block text-center text-sm font-semibold text-accent group-hover:text-foreground">
                View Full Flyer ↗
              </span>
            </a>
          </aside>
        </div>
      </Container>
    </section>
  );
}
