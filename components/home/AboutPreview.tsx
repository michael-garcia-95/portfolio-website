import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AboutPreview() {
  return (
    <section id="about" className="bg-foreground py-24 text-background md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Label */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-background/50">
              A Little About Me
            </p>
          </div>

          {/* Content */}
          <div>
            <h2 className="max-w-4xl font-sans text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              I like making things for the web.
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-background/65 sm:text-lg sm:leading-8">
              <p>
                I&apos;m Michael, a web developer focused on creating websites
                that are clear, thoughtful, and genuinely useful.
              </p>

              <p>
                I work with businesses to turn ideas into digital experiences
                that look good, feel good to use, and represent what they do
                properly online.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 border-b border-background/40 pb-1 text-sm font-medium text-background transition-colors duration-300 hover:border-background"
            >
              More about me

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}