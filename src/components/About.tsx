import Link from "next/link";

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

export function About() {
  return (
    <section id="about" className="border-t border-border pt-10 pb-10 sm:pt-12 sm:pb-12">
      <div className="flex items-center gap-2 mb-6">
        <span className="block w-1.5 h-1.5 rounded-full bg-muted shrink-0" aria-hidden="true" />
        <h2 className="text-xs font-medium text-muted uppercase tracking-widest">
          About
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm text-foreground leading-relaxed text-justify">
        I build backend systems and applied AI — and most of the time, the most interesting work happens where those two things meet. 
        I've spent the last few years working on everything from securing healthcare APIs and optimizing SQL schemas to evaluating 
        large language models at scale and building computer vision pipelines. What drives me isn't any single technology, 
        but the process of turning a messy real-world problem into something clean, reliable, and useful. I'm at my best when 
        I'm both writing the system and understanding why it's built the way it is.
        </p>
        

        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            href="/about"
            className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium
                       bg-foreground text-background
                       hover:bg-foreground/85 transition-colors duration-150"
          >
            More about me <ArrowUpRightIcon />
            
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium
                       bg-foreground text-background
                       hover:bg-foreground/85 transition-colors duration-150"
          >
            Read my blog <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
