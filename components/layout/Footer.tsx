import Link from "next/link";
import Monogram from "@/components/brand/Monogram";
import Container from "@/components/ui/Container";

const navigation = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Brand */}
            <div>
              <Monogram />

              <p className="mt-6 max-w-sm font-sans text-2xl font-medium leading-tight tracking-[-0.03em] text-foreground">
                Designing and building better websites for businesses.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col justify-between gap-10 md:items-end">
              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end"
              >
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground md:self-end"
              >
                Let&apos;s work together

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Michael Garcia. All rights reserved.</p>

            <p>
              Web Design & Development
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}