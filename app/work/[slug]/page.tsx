
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

  return {
    title: `${project.title} | Michael Garcia`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    {
      title: "The Challenge",
      content: project.challenge,
    },
    {
      title: "Technical Approach",
      content: project.approach,
    },
    {
      title: "Current State",
      content: project.outcome,
    },
  ];

  return (
    <main>
      <section className="pb-14 pt-40 sm:pt-48">
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground"
          >
            <span aria-hidden="true">←</span>
            Back to work
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              {project.category}
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-muted">
              {project.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <ProjectCover
            project={project}
            className="aspect-[16/8] min-h-64 rounded-2xl"
          />

          <div className="mt-8 grid gap-6 border-b border-border pb-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                My Role
              </p>
              <p className="mt-2 font-medium text-foreground">
                {project.role}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                Project Status
              </p>
              <p className="mt-2 font-medium text-foreground">
                {project.status}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-surface px-3 py-2 text-sm text-foreground"
              >
                {technology}
              </span>
            ))}
          </div>

          {(project.sourceUrl || project.liveUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-foreground"
                >
                  View Source Code ↗
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Visit Website ↗
                </a>
              )}
            </div>
          )}
        </Container>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`border-t border-border py-16 sm:py-20 ${
            index % 2 === 1 ? "bg-surface/50" : ""
          }`}
        >
          <Container>
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
              <h2 className="text-sm font-semibold text-accent">
                {section.title}
              </h2>

              <p className="max-w-3xl text-lg leading-9 text-foreground">
                {section.content}
              </p>
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-border py-20">
        <Container>
          <Link
            href="/work"
            className="text-sm font-semibold text-accent hover:text-foreground"
          >
            ← Explore more work
          </Link>
        </Container>
      </section>
    </main>
  );
}
