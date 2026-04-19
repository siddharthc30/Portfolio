import type { Project } from "@/data/projects";

function ArrowUpRightIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export function ProjectCard({ title, description, stack, github, demo }: Project) {
  return (
    <article
      className="
        group border border-border rounded-lg p-5
        bg-surface
        transition-colors duration-200
        hover:bg-surface-hover
      "
    >
      {/* Top row: title + links */}
      <div className="flex items-start justify-between gap-4 mb-2.5">
        <h3 className="text-sm font-semibold text-foreground leading-snug">
          {title}
        </h3>

        <div className="flex items-center gap-3 shrink-0 mt-0.5">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-muted hover:text-foreground transition-colors duration-150"
          >
            GitHub <ArrowUpRightIcon />
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted hover:text-foreground transition-colors duration-150"
            >
              Demo <ArrowUpRightIcon />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-4">
        {description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2 py-0.5 rounded-full border border-border text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
