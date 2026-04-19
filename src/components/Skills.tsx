import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section className="border-t border-border pt-10 pb-10 sm:pt-12 sm:pb-12">
      <div className="flex items-center gap-2 mb-6">
        <span className="block w-1.5 h-1.5 rounded-full bg-muted shrink-0" aria-hidden="true" />
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest">
          Skills
        </h2>
      </div>

      <div className="flex flex-col gap-3.5">
        {skills.map(({ label, items }) => (
          <div key={label} className="grid grid-cols-[82px_1fr] sm:grid-cols-[110px_1fr] gap-x-5 items-baseline">
            <span className="text-xs text-muted font-medium leading-relaxed">
              {label}
            </span>
            <p className="text-sm text-foreground leading-relaxed">
              {items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
