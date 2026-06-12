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
              I'm Siddharth — a recent M.S. in Computer Science from the University at Buffalo, working at 
              the intersection of machine learning and distributed backend systems. I'm convinced these two 
              areas need to be understood together to build anything that actually works at scale.
            </p>
            <p className="text-sm text-foreground leading-relaxed text-justify">
             For the past year and a half, I've been a Research AI Engineer at UB, where I co-authored a paper accepted at FLLM 2025 on the large-scale 
             evaluation of frontier LLMs for code generation. The study spanned 20 models — GPT-4o, Claude 3.5 Sonnet, DeepSeek-v3, Gemini, Llama, Grok, 
             and others — across 878 coding tasks, run through OpenAI, Anthropic, Vertex AI, and Bedrock with batch inference. An automated LLM-as-evaluator
             pipeline with 25-iteration regeneration on execution errors, paired with an iterative prompt-feedback loop, lifted Pass@25 from 51% to 92%. 
             Separately, I optimized GPT-2 for summarization using knowledge distillation, 8-bit quantization, and structured pruning — cutting inference energy 
             30% while retaining 95%+ of baseline ROUGE quality. <a href="https://arxiv.org/abs/2505.20324" className="underline hover:no-underline">paper here</a>.
            </p>
            <p className="text-sm text-foreground leading-relaxed text-justify">
              Alongside the research, I led backend development on a capstone project with Kaleida Health: a microservices-based healthcare platform 
              in Java Spring Boot, deployed to Azure, with JWT/RBAC-secured REST APIs, WebSocket-driven real-time communication, and MySQL schema work that brought query latency 
              down meaningfully.
              What I care about across all of it is the engineering discipline that makes systems trustworthy under load — correctness, latency, 
              observability — not just impressive in a demo.
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
              <span className="text-xs text-muted mt-0.5 shrink-0">2023 – 2025</span>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-x-4 items-start">
              <div>
                <p className="text-sm font-medium text-foreground">
                  B.Tech Computer Science and Engineering with Artificial Intelligence
                </p>
                <p className="text-sm text-muted mt-0.5">
                  Amrita Vishwa Vidyapeetham
                </p>
              </div>
              <span className="text-xs text-muted mt-0.5 shrink-0">2019 – 2023</span>
            </div>
          </div>
        </section>

        {/* ── What I'm working on ── */}
        <section className="border-t border-border pt-10 pb-10 sm:pt-12 sm:pb-12">
          <SectionHeading label="What I'm working on" />
          <div className="flex flex-col gap-4">
            <p className="text-sm text-foreground leading-relaxed text-justify">
              I'm building a retrieval-augmented generation pipeline of my own. Today it's a minimal end-to-end system: it retrieves 
              relevant context from a small document set and generates grounded answers. The interesting problems are the ones I'm working 
              on next — bringing latency down to something usable, adding stateful memory so queries aren't standalone, and getting it deployed. 
              I'm treating it as a forcing function for thinking carefully about the production-side trade-offs in RAG: retrieval latency, caching,
              and what observability looks like for a system that's partly probabilistic.
            </p>
    
          </div>
        </section>

        {/* ── outside work ── */}
        <section className="border-t border-border pt-10 pb-10 sm:pt-12 sm:pb-12">
          <SectionHeading label="Outside work" />
          <p className="text-sm text-foreground leading-relaxed">
            When I'm not writing code, I read about compilers, type systems, and programming language theory — the kind of work that makes 
            you appreciate how much thought went into the tools we take for granted. I also enjoy long-form technical writing, 
            which is why I maintain a blog.
          </p>
        </section>

        {/* ── What I'm looking for  ── */}
        <section className="border-t border-border pt-10 pb-10 sm:pt-12 sm:pb-12">
          <SectionHeading label="What I'm looking for" />
          <p className="text-sm text-foreground leading-relaxed">
            I'm looking for my first full-time role — AI Engineer, AI Software Engineer, or backend Software Engineer. Open to startups, 
            mid-size companies, and big tech across the US, including W-2 contract roles. If any of this resonates, I'd love to talk.
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
