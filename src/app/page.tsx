"use client";

import { useEffect, useRef, useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import AppMockup from "@/components/AppMockup";
import EmailMockup from "@/components/EmailMockup";
import Rationale from "@/components/Rationale";

const sections = [
  { id: "app-preview", label: "App Preview" },
  { id: "email-preview", label: "Email Preview" },
  { id: "rationale", label: "Rationale" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("app-preview");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--color-neutral-light)" }}>
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b" style={{ background: "var(--color-neutral-light)", borderColor: "var(--color-neutral-mid)" }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="text-left">
            <h1
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral-dark)" }}
            >
              Sage Brand Showcase
            </h1>
            <p
              className="text-sm opacity-50 mt-0.5"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
            >
              Switch themes to preview 3 design directions
            </p>
          </div>
          <ThemeSwitcher />
        </div>
      </header>

      {/* Body: TOC + Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-10">
        {/* Vertical TOC */}
        <aside className="hidden md:block w-44 shrink-0">
          <nav className="sticky top-28 flex flex-col gap-1">
            {sections.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-sm px-3 py-2 rounded transition-all"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-neutral-dark)",
                    background: isActive ? "color-mix(in srgb, var(--color-primary) 10%, transparent)" : "transparent",
                    fontWeight: isActive ? 600 : 400,
                    opacity: 1,
                    borderLeft: `2px solid ${isActive ? "var(--color-primary)" : "transparent"}`,
                  }}
                >
                  {label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Sections */}
        <main className="flex-1 flex flex-col gap-16 min-w-0">
          <section id="app-preview">
            <h2
              className="text-lg text-center font-semibold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral-dark)" }}
            >
              App Preview
            </h2>
            <AppMockup />
          </section>

          <section id="email-preview">
            <h2
              className="text-lg text-center font-semibold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral-dark)" }}
            >
              Email Preview
            </h2>
            <EmailMockup />
          </section>

          <section id="rationale">
            <h2
              className="text-lg text-center font-semibold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral-dark)" }}
            >
              Rationale
            </h2>
            <Rationale />
          </section>
        </main>
      </div>
    </div>
  );
}
