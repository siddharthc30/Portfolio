import { Container } from "@/components/Container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Siddharth",
  description: "More about Siddharth — background, education, and what I'm working on.",
};

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="block w-1.5 h-1.5 rounded-full bg-muted shrink-0" aria-hidden="true" />
      <h2 className="text-xs font-medium text-muted uppercase tracking-widest">{label}</h2>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="pt-14">
      <Container>

        {/* ── Page header ── */}
        <section className="pt-16 pb-10 sm:pt-20 sm:pb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-4">
            About me
          </h1>
          {/* <p className="text-base text-muted leading-relaxed">
            A bit more than the homepage summary.
          </p> */}
        </section>

        {/* ── Background ── */}
        <section className="border-t border-border pt-10 pb-10 sm:pt-12 sm:pb-12">
          <SectionHeading label="Background" />
          <div className="flex flex-col gap-4">
            <p className="text-sm text-foreground leading-relaxed text-justify">
              I&apos;m Siddharth, a graduate student in Computer Science at the University at
              Buffalo. My focus sits at the intersection of machine learning and distributed
              backend systems — two areas that I believe need to be understood together to
              build anything that actually works at scale.
            </p>
            <p className="text-sm text-foreground leading-relaxed text-justify">
              Before grad school, I spent time building production backend services and
              getting frustrated by the gap between research-grade ML and what runs reliably
              in real systems. That frustration is what drives most of my work now.
            </p>
            <p className="text-sm text-foreground leading-relaxed text-justify">
              I care deeply about software correctness, latency, and the kind of engineering
              discipline that makes systems trustworthy — not just impressive in a demo.
            </p>
          </div>
        </section>

        {/* ── Education ── */}
        <section className="border-t border-border pt-10 pb-10 sm:pt-12 sm:pb-12">
          <SectionHeading label="Education" />
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-[1fr_auto] gap-x-4 items-start">
              <div>
                <p className="text-sm font-medium text-foreground">
                  M.S. Computer Science
                </p>
                <p className="text-sm text-muted mt-0.5">
                  University at Buffalo, SUNY
                </p>
              </div>
              <span className="text-xs text-muted mt-0.5 shrink-0">2024 – Present</span>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-x-4 items-start">
              <div>
                <p className="text-sm font-medium text-foreground">
                  B.E. / B.Tech Computer Engineering
                </p>
                <p className="text-sm text-muted mt-0.5">
                  [Your undergraduate institution]
                </p>
              </div>
              <span className="text-xs text-muted mt-0.5 shrink-0">20XX – 20XX</span>
            </div>
          </div>
        </section>

        {/* ── What I'm working on ── */}
        <section className="border-t border-border pt-10 pb-10 sm:pt-12 sm:pb-12">
          <SectionHeading label="What I'm working on" />
          <div className="flex flex-col gap-4">
            <p className="text-sm text-foreground leading-relaxed text-justify">
              Right now I&apos;m focused on LLM inference pipelines — specifically how to
              serve large models cheaply and reliably without sacrificing latency. I&apos;m
              also exploring retrieval-augmented generation (RAG) architectures and how
              vector search integrates into production data pipelines.
            </p>
            <p className="text-sm text-foreground leading-relaxed text-justify">
              On the systems side, I&apos;m building and breaking distributed APIs, learning
              how consensus protocols behave under failure, and thinking a lot about
              observability — how you actually know what a system is doing when things go
              wrong.
            </p>
          </div>
        </section>

        {/* ── Interests ── */}
        <section className="border-t border-border pt-10 pb-10 sm:pt-12 sm:pb-12">
          <SectionHeading label="Outside work" />
          <p className="text-sm text-foreground leading-relaxed">
            When I&apos;m not writing code I tend to read about compilers, type systems, and
            programming language theory — things that make you appreciate how much thought
            went into the tools we take for granted. I also enjoy long-form technical
            writing, which is why I maintain a blog.
          </p>
        </section>

        {/* ── Footer links ── */}
        <section className="border-t border-border pt-10 pb-16 sm:pt-12 sm:pb-20">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium
                         bg-foreground text-background hover:bg-foreground/85 transition-colors duration-150"
            >
              ← Back to home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium
                         border border-border text-muted hover:text-foreground hover:border-foreground/30
                         transition-colors duration-150"
            >
              Read my blog
            </Link>
          </div>
        </section>

      </Container>
    </main>
  );
}
