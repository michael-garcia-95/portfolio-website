import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Work — Michael Garcia",
  description:
    "Selected web design and development projects by Michael Garcia.",
};

export default function WorkPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="pb-16 pt-40 md:pb-24 md:pt-48">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-20">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-muted">
                Selected Work
              </p>

              <h1 className="max-w-4xl font-sans text-[3.25rem] font-semibold leading-[0.9] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-8xl">
                Things I&apos;ve built.
              </h1>
            </div>

            <p className="max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
              A collection of websites and digital experiences designed and
              developed with a focus on clarity, usability, and thoughtful
              design.
            </p>
          </div>
        </Container>
      </section>

      {/* Project List */}
      <section className="pb-24 md:pb-32 lg:pb-40">
        <Container>
          <div className="space-y-24 md:space-y-32 lg:space-y-40">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured={project.featured}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}