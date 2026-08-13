import { Container } from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Siddharth",
  description: "Siddharth's resume.",
};

export default function ResumePage() {
  return (
    <main className="pt-14">
      <Container>

        {/* ── Page heading ── */}
        <div className="py-6 border-b border-border">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            Resume
          </h1>
          <p className="text-xs text-muted mt-0.5">
            Use the toolbar inside the viewer to download or print.
          </p>
        </div>

        {/* ── PDF viewer ── */}
        <div className="py-6">
          <iframe
            src="/Siddharth_Resume_SU.pdf"
            className="w-full rounded-lg border border-border"
            style={{ height: "calc(100vh - 10rem)" }}
            title="Siddharth's Resume"
          />
        </div>

      </Container>
    </main>
  );
}
