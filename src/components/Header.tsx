"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About",    href: "/#about"    },
  { label: "Projects", href: "/#projects" },
  { label: "Research", href: "/#research"  },
  { label: "Blog",     href: "/blog"      },
  { label: "Contact",  href: "/#contact"  },
  { label: "Resume",   href: "/resume"    },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Close on desktop resize
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-header]")) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <>
      {/* ── Main header bar ── */}
      <header
        data-header
        className="fixed top-0 right-0 left-0 z-50 border-b border-border/60 bg-background/60 backdrop-blur-md transition-colors duration-200"
      >
        <Container>
          <div className="h-14 flex items-center justify-between">

            {/* Left — name / logo */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-foreground hover:text-muted transition-colors duration-150 shrink-0"
            >
              Siddharth
            </Link>

            {/* Right — desktop links + theme toggle + hamburger */}
            <nav className="flex items-center gap-4 sm:gap-5">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs sm:text-sm text-foreground hover:text-muted transition-colors duration-150 hidden sm:block"
                >
                  {label}
                </a>
              ))}

              <ThemeToggle />

              {/* Hamburger button — mobile only */}
              <button
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] rounded-md
                           hover:bg-foreground/5 transition-colors duration-150"
              >
                <span
                  className="block h-px bg-foreground rounded-full transition-all duration-200 origin-center"
                  style={{ width: 18, transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
                />
                <span
                  className="block h-px bg-foreground rounded-full transition-all duration-200"
                  style={{ width: 18, opacity: open ? 0 : 1 }}
                />
                <span
                  className="block h-px bg-foreground rounded-full transition-all duration-200 origin-center"
                  style={{ width: 18, transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
                />
              </button>
            </nav>
          </div>
        </Container>
      </header>

      {/* ── Mobile dropdown — separate fixed layer ── */}
      {open && (
        <div
          data-header
          className="fixed top-14 left-0 right-0 z-40 sm:hidden
                     border-b border-border/60 bg-background/80 backdrop-blur-md"
        >
          <Container>
            <nav className="flex flex-col py-2">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-150 py-3 border-b border-border/40 last:border-0"
                >
                  {label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </>
  );
}
