
import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectCover from "@/components/projects/ProjectCover";

interface ProjectCardProps {
  project: Project;
  prominent?: boolean;
}

export default function ProjectCard({
  project,
  prominent = false,
}: ProjectCardProps) {
  return (
    <article
      className={`min-w-0 overflow-hidden rounded-2xl border border-border bg-white ${
        prominent ? "lg:col-span-2" : ""
      }`}
    >
      <Link
        href={project.href}
        className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <ProjectCover
          project={project}
          className={
            prominent
              ? "aspect-[16/8] min-h-56"
              : "aspect-[16/10] min-h-52"
          }
        />

        <div className="p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-medium text-accent">
              {project.category}
            </span>
            <span className="text-muted" aria-hidden="true">
              ·
            </span>
            <span className="text-muted">
              {project.status}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-3xl">
              {project.title}
            </h3>

            <span
              aria-hidden="true"
              className="text-xl text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              ↗
            </span>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-surface px-2.5 py-1.5 text-xs font-medium text-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
