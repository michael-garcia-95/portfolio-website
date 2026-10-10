import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Michael Garcia — Home"
      className="font-sans text-xl font-semibold tracking-[-0.03em] text-foreground transition-opacity duration-300 hover:opacity-70"
    >
      Michael Garcia
    </Link>
  );
}