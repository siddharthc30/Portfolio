import { Container } from "@/components/Container";
import { publications } from "@/data/publications";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — Siddharth",
  description: "Publications and research work by Sai Siddharth Cilamkoti.",
};

export default function ResearchPage() {
  return (
    <main className="pt-14">
      <Container>

        {/* ── Page header ── */}
        <section className="pt-16 pb-10 sm:pt-20 sm:pb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Research
          </h1>
          <p className="text-base text-muted leading-relaxed">
            {publications.length} publication{publications.length !== 1 ? "s" : ""} in machine learning and AI systems.
          </p>
        </section>

        {/* ── Publications ── */}
        <div className="flex flex-col divide-y divide-border">
          {publications.map((pub) => (
            <article key={pub.title} className="py-10">

              {/* Venue badge + full venue name */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-muted border border-border rounded px-2 py-0.5">
                  {pub.venueShort}
                </span>
                <span className="text-xs text-muted">{pub.venue}</span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-foreground leading-snug mb-2">
                {pub.paperUrl ? (
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-muted transition-colors duration-150"
                  >
                    {pub.title}
                  </a>
                ) : (
                  pub.title
                )}
              </h2>

              {/* Authors */}
              <p className="text-sm text-muted mb-4 leading-relaxed">
                {pub.authors}
              </p>

              {/* Abstract */}
              <p className="text-sm text-foreground leading-relaxed mb-5 text-justify">
                {pub.abstract}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {pub.paperUrl && (
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                               bg-foreground text-background hover:bg-foreground/85 transition-colors duration-150"
                  >
                    Paper ↗
                  </a>
                )}
                {pub.pdfUrl && (
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                               border border-border text-muted hover:text-foreground hover:border-foreground/30
                               transition-colors duration-150"
                  >
                    PDF ↗
                  </a>
                )}
                {pub.codeUrl && (
                  <a
                    href={pub.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                               border border-border text-muted hover:text-foreground hover:border-foreground/30
                               transition-colors duration-150"
                  >
                    Code ↗
                  </a>
                )}
                {pub.bibtex && (
                  <details className="inline-block">
                    <summary className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                                        border border-border text-muted hover:text-foreground hover:border-foreground/30
                                        transition-colors duration-150 cursor-pointer list-none">
                      BibTeX
                    </summary>
                    <div className="mt-3 w-full">
                      <pre className="text-xs font-mono bg-surface border border-border rounded-lg p-4
                                      overflow-x-auto leading-relaxed text-foreground whitespace-pre">
                        {pub.bibtex}
                      </pre>
                    </div>
                  </details>
                )}
              </div>

            </article>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="border-t border-border py-10">
          <a
            href="/"
            className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium
                       bg-foreground text-background hover:bg-foreground/85 transition-colors duration-150"
          >
            ← Back to home
          </a>
        </div>

      </Container>
    </main>
  );
}
