
interface MonogramProps {
  className?: string;
}

export default function Monogram({
  className = "",
}: MonogramProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent font-sans text-sm font-bold tracking-tight text-accent-foreground ${className}`}
    >
      MG.
    </span>
  );
}
