import { createPageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = createPageMetadata(
  "Selected Work | Michael Garcia",
  "Explore software projects by Michael Garcia, including Roundza, TTMotorSales, and React Simple Charts."
);


export default function WorkPage() {
  return (
    <main>
      <section className="pb-20 pt-40 sm:pt-48">
        <Container>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Selected Work
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Things I&apos;ve built.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Full-stack applications, open-source tools, and
            practical software projects.
          </p>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                prominent={index === 0}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
