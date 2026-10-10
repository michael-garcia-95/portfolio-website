
import Link from "next/link";
import Container from "@/components/ui/Container";
import Monogram from "@/components/brand/Monogram";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <Container>
        <div className="grid gap-12 py-14 md:grid-cols-2 md:py-20">
          <div>
            <Link
              href="/"
              aria-label="Michael Garcia — Home"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
            >
              <Monogram />
              <span className="font-sans text-base font-semibold">
                Michael Garcia
              </span>
            </Link>

            <p className="mt-5 text-sm font-medium text-background/80">
              Full-Stack Software Developer
            </p>

            <p className="mt-4 text-xs text-background/55">
              Based in Trinidad & Tobago
            </p>
          </div>

          <div className="flex flex-col gap-8 md:items-end">
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-6"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-background/75 transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/michael-garcia-95"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md text-sm text-background/75 transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/michael-garcia-aa658615b"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md text-sm text-background/75 transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-background/15 py-6 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Michael Garcia.
          </p>

          <p>Built with Next.js and TypeScript.</p>
        </div>
      </Container>
    </footer>
  );
}
