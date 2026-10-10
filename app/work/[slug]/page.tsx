import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { getProjectBySlug } from "@/lib/projects";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Project Hero */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24">
        <Container>
          <Link
            href="/#work"
            className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to work
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-20">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-muted">
                {project.category}
              </p>

              <h1 className="max-w-5xl font-sans text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-8xl">
                {project.title}
              </h1>
            </div>

            <div>
              <p className="max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {project.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-border md:rounded-3xl">
            <Image
              src={project.image}
              alt={`${project.title} website`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </Container>
      </section>

      {/* Project Details */}
      <section className="border-y border-border">
        <Container>
          <div className="grid md:grid-cols-3">
            <div className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Client
              </p>

              <p className="mt-3 text-sm font-medium text-foreground">
                {project.client}
              </p>
            </div>

            <div className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:py-10">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Year
              </p>

              <p className="mt-3 text-sm font-medium text-foreground">
                {project.year}
              </p>
            </div>

            <div className="py-8 md:px-8 md:py-10 md:last:pr-0">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Built With
              </p>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-sm font-medium text-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge */}
      <section className="py-24 md:py-32 lg:py-40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
              The Challenge
            </p>

            <h2 className="max-w-4xl font-sans text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
              {project.challenge}
            </h2>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="bg-foreground py-24 text-background md:py-32 lg:py-40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-background/50">
              The Approach
            </p>

            <div>
              <p className="max-w-3xl text-2xl font-medium leading-[1.25] tracking-[-0.025em] text-background sm:text-3xl lg:text-4xl">
                {project.approach}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Outcome */}
      <section className="py-24 md:py-32 lg:py-40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
              The Outcome
            </p>

            <div>
              <p className="max-w-3xl text-2xl font-medium leading-[1.25] tracking-[-0.025em] text-foreground sm:text-3xl lg:text-4xl">
                {project.outcome}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Next Project */}
      <section className="border-t border-border py-24 md:py-32">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
                More Work
              </p>

              <h2 className="mt-3 font-sans text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
                Keep exploring.
              </h2>
            </div>

            <Link
              href="/work"
              className="group inline-flex items-center gap-3 text-sm font-medium text-foreground"
            >
              View all work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}