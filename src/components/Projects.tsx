import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border pt-10 pb-10 sm:pt-12 sm:pb-12">
      <div className="flex items-center gap-2 mb-6">
        <span className="block w-1.5 h-1.5 rounded-full bg-muted shrink-0" aria-hidden="true" />
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest">
          Projects
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
