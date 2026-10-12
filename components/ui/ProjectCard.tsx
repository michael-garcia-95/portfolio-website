
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
      className={`min-w-0 overflow-hidden rounded-2xl border bg-white transition-shadow duration-200 hover:shadow-lg ${
        prominent
          ? "border-accent/30 border-t-4 border-t-accent lg:col-span-2"
          : "border-border"
      }`}
    >
      <Link
        href={project.href}
        className={`group h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
          prominent
            ? "block lg:grid lg:grid-cols-[0.9fr_1.1fr]"
            : "block"
        }`}
      >
        <ProjectCover
          project={project}
          className={
            prominent
              ? "aspect-[16/10] lg:order-2 lg:aspect-auto lg:h-full lg:min-h-[320px]"
              : "aspect-[16/10]"
          }
        />

        <div
          className={
            prominent
              ? "flex min-w-0 flex-col justify-center bg-[#F2F7F4] p-6 sm:p-8 lg:order-1 lg:p-10"
              : "min-w-0 p-6 sm:p-8"
          }
        >
          {prominent && (
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Featured Project
            </p>
          )}

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

          <h3
            className={`font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent ${
              prominent
                ? "text-3xl leading-tight sm:text-4xl lg:text-[2.65rem]"
                : "text-2xl sm:text-3xl"
            }`}
          >
            {project.title}
          </h3>

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

          <span
          className={`mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors ${
            prominent
              ? "rounded-lg bg-accent px-4 py-3 text-accent-foreground group-hover:bg-foreground"
              : "text-accent"
          }`}
          >
            View project
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
