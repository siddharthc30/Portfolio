import { publications } from "@/data/publications";

export function Research() {
  return (
    <section id="research" className="border-t border-border pt-10 pb-10 sm:pt-12 sm:pb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="block w-1.5 h-1.5 rounded-full bg-muted shrink-0" aria-hidden="true" />
          <h2 className="text-xs font-medium text-muted uppercase tracking-widest">
            Research
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {publications.map((pub) => (
          <div key={pub.title} className="flex items-baseline justify-between gap-4">
            {/* Title — linked if URL available */}
            {pub.paperUrl ? (
              <a
                href={pub.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-muted transition-colors duration-150 leading-snug"
              >
                {pub.title}
              </a>
            ) : (
              <span className="text-sm text-foreground leading-snug">{pub.title}</span>
            )}

            {/* Venue badge */}
            <span className="text-xs text-muted font-mono shrink-0 border border-border rounded px-1.5 py-0.5">
              {pub.venueShort}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
