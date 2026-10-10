import Link from "next/link";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="work" className="py-24 sm:py-28 lg:py-40">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
              Selected Work
            </p>

            <h2 className="mt-4 max-w-2xl font-sans text-4xl font-semibold leading-[1] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              A few things I&apos;ve built.
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-foreground"
          >
            View all work

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Featured projects */}
        <div className="mt-14 grid gap-12 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured
            />
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-16 flex justify-center md:mt-24">
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
  );
}