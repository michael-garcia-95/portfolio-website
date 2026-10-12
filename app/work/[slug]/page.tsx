import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import ProjectCover from "@/components/projects/ProjectCover";
import { getProjectBySlug } from "@/lib/projects";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return createPageMetadata(
    `${project.title} | Michael Garcia`,
    project.description,
    project.href
  );
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
      <section className="pb-8 pt-28 sm:pb-10 sm:pt-36">
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground"
          >
            ← Back to work
          </Link>

          <div className="mt-8 max-w-4xl sm:mt-10">
            <p className="text-sm font-medium text-accent">
              {project.category}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              {project.description}
            </p>

            {(project.sourceUrl || project.liveUrl) && (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-foreground"
                  >
                    View code ↗
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
                  >
                    Visit website ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <ProjectCover
            project={project}
            className="aspect-[16/9] rounded-2xl"
          />
          
          <div className="mt-6 rounded-2xl border border-border bg-surface/40 p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium text-muted">
                  My role
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {project.role}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-muted">
                  Status
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {project.status}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-background px-3 py-2 text-xs font-medium text-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface/30 py-14 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                About the project
              </h2>

              <div className="mt-6 max-w-2xl space-y-5">
                {project.story.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-8 text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                Some of the work
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-5 marker:text-accent">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="pl-1 text-sm leading-7 text-muted"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 max-w-3xl border-t border-border pt-8">
            <p className="text-base leading-8 text-muted">
              {project.note}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16">
        <Container>
          <Link
            href="/work"
            className="text-sm font-semibold text-accent hover:text-foreground"
          >
            ← See more projects
          </Link>
        </Container>
      </section>
    </main>
  );
}
