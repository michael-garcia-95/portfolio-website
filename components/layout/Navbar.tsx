"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-4 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 sm:px-6 sm:py-5 lg:px-8 ${
          isScrolled
            ? "border-border bg-background/90 shadow-sm backdrop-blur-md"
            : "border-transparent bg-transparent shadow-none"
        }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="relative z-10 font-sans text-lg font-semibold tracking-[-0.04em] text-foreground"
          >
            Michael Garcia
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
            >
              Let&apos;s talk
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-1 block h-px w-5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-3 block h-px w-5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-[1px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-32">
          <nav className="flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className={`border-b border-border py-5 font-sans text-4xl font-semibold tracking-[-0.04em] text-foreground transition-all duration-500 ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${index * 60 + 100}ms`
                    : "0ms",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            className={`mt-auto transition-all duration-500 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isMenuOpen
                ? `${navigation.length * 60 + 100}ms`
                : "0ms",
            }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Have a project in mind?
            </p>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="inline-flex items-center gap-3 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
            >
              Let&apos;s talk

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}