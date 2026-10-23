
import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "What's included in monthly Website Care?",
    answer:
      "Both packages include hosting, domain renewal, monitoring, and basic maintenance. One-Page Presence includes one minor content update per quarter. Business Website includes minor content updates totaling up to 30 minutes per month, along with contact-form checks.",
  },
  {
    question: "Do I need to provide the text and photos?",
    answer:
      "Yes. You'll provide your business information, service descriptions, and photos. If you need help preparing written content, copywriting can be quoted separately.",
  },
  {
    question: "Is a domain name included?",
    answer:
      "Yes. Both packages include one standard .com or .co.tt domain, subject to availability and eligibility. Premium domains may cost extra. If you already have a domain, we can discuss using it instead.",
  },
  {
    question: "How do payments work?",
    answer:
      "A 50% deposit is required before development begins. The remaining 50% is due after you approve the completed website and before it goes live. Your first monthly Website Care payment is due at launch, with subsequent payments billed monthly in advance.",
  },
  {
    question: "Can I request changes to my website?",
    answer:
      "Two rounds of revisions are included before launch. After launch, your Website Care package includes a limited amount of content updating. Additional updates are available at TT$200 per hour, and larger changes can be quoted separately.",
  },
  {
    question: "Can I add more features later?",
    answer:
      "Yes. Additional pages, business email, Google Business Profile setup, and basic booking integrations are available as add-ons. Online stores, payment processing, complex booking systems, and custom applications are outside the standard packages and require separate quotations.",
  },
  {
    question: "Who owns my domain and website?",
    answer:
      "Your domain will be registered in your name wherever the registrar permits, and your business content and supplied images remain yours. You'll also have the right to continue using your completed website. Reusable development templates and tools remain my intellectual property.",
  },
  {
    question: "What happens if I cancel Website Care?",
    answer:
      "Website Care is billed month-to-month, with 30 days' written notice required to cancel. There is no additional minimum contract period. Your domain and business content remain yours, and I'll provide a deployable copy of your completed website with basic transfer assistance at no additional charge. Complex migrations or new hosting configurations may be quoted separately.",
  },
];

export default function FAQs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-y border-border bg-surface/40 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              05 / Common Questions
            </p>

            <h2
              id="faqs-title"
              className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              Frequently asked questions.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted">
              Here are some useful details about getting
              started, payments, and ongoing website care.
            </p>
          </div>

          <div className="min-w-0 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-border bg-background"
              >
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 text-left font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-6 [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 text-sm leading-6 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl font-normal text-accent transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-sm leading-7 text-muted">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
