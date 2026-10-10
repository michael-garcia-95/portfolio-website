
import Image from "next/image";
import type { Project } from "@/data/projects";

const covers = {
  charts: {
    background: "bg-[#E8F0EC]",
    foreground: "text-[#0E6E68]",
    mark: "RSC",
  },
  games: {
    background: "bg-[#E8ECF5]",
    foreground: "text-[#526A97]",
    mark: "R",
  },
  marketplace: {
    background: "bg-[#F3EBE2]",
    foreground: "text-[#956C48]",
    mark: "TT",
  },
};

interface ProjectCoverProps {
  project: Project;
  className?: string;
}

export default function ProjectCover({
  project,
  className = "",
}: ProjectCoverProps) {
  const cover = covers[project.cover];

  return (
    <div
      className={`relative isolate overflow-hidden ${cover.background} ${cover.foreground} ${className}`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 1100px"
          className="object-cover object-top"
        />
      ) : (
        <div className="relative flex h-full min-h-56 flex-col justify-between p-6 sm:p-9">
          <span className="relative z-10 font-mono text-xs font-semibold uppercase tracking-widest">
            {project.category}
          </span>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-12 size-72 rounded-full border-[35px] border-current opacity-10"
          />

          <div className="relative z-10 flex items-end justify-between gap-4">
            <span
              aria-hidden="true"
              className="font-sans text-6xl font-bold tracking-tighter opacity-75 sm:text-8xl"
            >
              {cover.mark}
            </span>
            <span className="max-w-32 text-right font-mono text-[10px] uppercase leading-5 tracking-wide opacity-70">
              Project artwork
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
