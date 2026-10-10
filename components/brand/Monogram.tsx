import Link from "next/link";

export default function Monogram() {
  return (
    <Link
      href="/"
      aria-label="Michael Garcia — Home"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground font-sans text-sm font-bold tracking-[-0.04em] text-background transition-transform duration-300 hover:scale-105"
    >
      MG
    </Link>
  );
}