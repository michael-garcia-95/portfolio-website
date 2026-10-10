import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  index,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`w-full ${
        featured ? "" : "lg:max-w-[80%] lg:ml-auto"
      }`}
    >
      <Link href={project.href} className="group block">
        {/* Image */}
        <div
          className={`relative overflow-hidden bg-border ${
            featured
              ? "aspect-[16/9] rounded-xl sm:rounded-2xl md:rounded-3xl"
              : "aspect-[16/10] rounded-xl sm:rounded-2xl md:rounded-3xl"
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.title} website`}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 1200px"
                : "(max-width: 768px) 100vw, 960px"
            }
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />

          {/* View project */}
          <div className="absolute bottom-5 right-5 translate-y-2 rounded-full bg-background px-4 py-2 text-xs font-medium text-foreground opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View project ↗
          </div>
        </div>

        {/* Information */}
        <div className="mt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-medium tracking-[0.12em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-px w-5 bg-border" />

                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  {project.category}
                </p>
              </div>

              <h3 className="font-sans text-3xl font-semibold tracking-[-0.035em] text-foreground transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                {project.title}
              </h3>
            </div>

            <span className="hidden text-sm text-muted sm:block">
              {project.featured ? "Featured project" : "Project"}
            </span>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            {project.description}
          </p>
        </div>
      </Link>
    </article>
  );
}