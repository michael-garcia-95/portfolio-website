import Container from "@/components/ui/Container";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Thoughtful, modern interfaces designed around your brand, your audience, and what you want your website to accomplish.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Fast, responsive websites built with modern technologies and structured to work beautifully across devices.",
  },
  {
    number: "03",
    title: "Website Redesigns",
    description:
      "A fresh digital experience for businesses with websites that no longer represent the quality of what they do.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Continued updates, improvements, maintenance, and technical support after your website goes live.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border py-24 sm:py-28 lg:py-40">
      <Container>
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
              What I Do
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-sans text-4xl font-semibold leading-[1] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              Websites built to make your business look as good online as it
              does in real life.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              From the first idea to the final launch, I handle the design and
              development needed to create a website that feels like your
              business.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-20 border-t border-border md:mt-28">
          {services.map((service) => (
            <div
              key={service.number}
              className="group grid gap-6 border-b border-border py-8 md:grid-cols-[80px_1fr_1.5fr] md:items-start md:gap-8 md:py-10"
            >
              <span className="text-xs font-medium tracking-[0.12em] text-muted">
                {service.number}
              </span>

              <h3 className="font-sans text-2xl font-semibold tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                {service.title}
              </h3>

              <p className="max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}