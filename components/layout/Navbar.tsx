
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Monogram from "@/components/brand/Monogram";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-sm backdrop-blur-md sm:px-5">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Michael Garcia — Home"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Monogram />
            <span className="font-sans text-sm font-semibold tracking-tight text-foreground sm:text-base">
              Michael Garcia
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {navigation.map((item) => {
              const isCurrent =
                item.href === "/work"
                  ? pathname.startsWith("/work")
                  : item.href === "/about"
                    ? pathname === "/about"
                    : false;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                    isCurrent
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href="https://github.com/michael-garcia-95"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              GitHub ↗
            </a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="portfolio-mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent md:hidden"
          >
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <div
          id="portfolio-mobile-nav"
          className={
            menuOpen
              ? "mt-2 rounded-2xl border border-border bg-background p-4 shadow-lg md:hidden"
              : "hidden"
          }
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://github.com/michael-garcia-95"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-lg border border-border px-3 py-3 text-base font-medium text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
