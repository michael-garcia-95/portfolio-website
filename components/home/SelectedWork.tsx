
import Link from "next/link";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="work"
      aria-labelledby="selected-work-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            01 / Selected Work
          </p>

          <h2
            id="selected-work-title"
            className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            Things I&apos;ve built.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              prominent={index === 0}
            />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Explore all projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
