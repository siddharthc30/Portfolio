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
        The hardest part of building AI products isn't the model — it's everything around it. The APIs, the latency, 
        the failure modes, the infrastructure that keeps it running at 2am.
        That's the part I gravitate toward. Over the last few years I've built and secured production healthcare APIs, 
        designed distributed evaluation pipelines for large-scale LLM testing, and shipped computer vision systems from 
        research to live inference. I care as much about how a system holds up under load as I do about the model powering it.
        Right now I'm focused on the intersection of LLM infrastructure and backend engineering — RAG pipelines, agentic systems, 
        and the kind of production AI work that goes well beyond a Jupyter notebook. If you're building something hard in that space, 
        I'd like to hear about it.
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
