"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import AppMockup from "@/components/AppMockup";
import EmailMockup from "@/components/EmailMockup";
import Rationale from "@/components/Rationale";

const sections = [
  { id: "app-preview", label: "01", subtitle: "Product Experience" },
  { id: "email-preview", label: "02", subtitle: "Email Campaign" },
  { id: "rationale", label: "03", subtitle: "Rationale" },
];

export default function Home() {
  const { themeId, theme } = useTheme();
  const [activeSection, setActiveSection] = useState("app-preview");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isDusk = themeId === "dusk-bloom";

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
    <div
      className="min-h-screen"
      style={{ background: isDusk ? "#6B4F8C" : "var(--color-neutral-light)" }}
    >
      {/* Hero Header */}
      <header
        className="relative overflow-hidden"
        style={{
          background: isDusk
            ? "linear-gradient(180deg, #2A1F33 0%, #6B4F8C 100%)"
            : "var(--color-neutral-light)",
          borderBottom: isDusk ? "none" : "1px solid var(--color-neutral-mid)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-10 md:pt-16 md:pb-14">
          {/* Top row: thin nav */}
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <span
              className="text-xs uppercase tracking-[0.15em] opacity-50"
              style={{
                fontFamily: "var(--font-body)",
                color: isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
              }}
            >
              Brand Showcase
            </span>
            <span
              className="text-xs opacity-30"
              style={{
                fontFamily: "var(--font-body)",
                color: isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
              }}
            >
              {theme.name} Direction
            </span>
          </div>

          {/* Title Block */}
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
                ...(themeId === "dusk-bloom" ? { fontStretch: "115%" } : {}),
              }}
            >
              Sage
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-lg opacity-60 mb-8"
              style={{
                fontFamily: "var(--font-body)",
                color: isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
              }}
            >
              {theme.tagline}
            </p>
            <div
              className="flex items-center gap-3 text-xs uppercase tracking-[0.1em] opacity-40 mb-10"
              style={{
                fontFamily: "var(--font-body)",
                color: isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
              }}
            >
              <span>{theme.emotionalRegister}</span>
              <span style={{ color: "var(--color-secondary)" }}>—</span>
              <span>{theme.displayFont} + {theme.bodyFont}</span>
            </div>
          </div>

          {/* Theme Switcher */}
          <ThemeSwitcher />
        </div>
      </header>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex gap-12">
        {/* Vertical TOC — editorial numbered nav */}
        <aside className="hidden lg:block w-48 shrink-0">
          <nav className="sticky top-12 flex flex-col gap-0">
            {sections.map(({ id, label, subtitle }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left py-4 transition-all cursor-pointer group"
                  style={{
                    borderTop: `1px solid ${isDusk ? "rgba(246,242,239,0.1)" : "var(--color-neutral-mid)"}`,
                    opacity: isActive ? 1 : 0.4,
                  }}
                >
                  <span
                    className="block text-3xl font-bold leading-none mb-1 transition-colors"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: isActive
                        ? "var(--color-primary)"
                        : isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
                      ...(themeId === "dusk-bloom" ? { fontStretch: "115%" } : {}),
                    }}
                  >
                    {label}
                  </span>
                  <span
                    className="block text-xs uppercase tracking-[0.08em]"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
                    }}
                  >
                    {subtitle}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content Sections */}
        <main className="flex-1 flex flex-col gap-24 md:gap-32 min-w-0">
          {/* Section 01 — App Preview */}
          <section id="app-preview">
            <SectionHeader
              number="01"
              title="Product Experience"
              subtitle="Mobile UI Screen"
              themeId={themeId}
              isDusk={isDusk}
            />
            <AppMockup />
          </section>

          {/* Section 02 — Email Preview */}
          <section id="email-preview">
            <SectionHeader
              number="02"
              title="Marketing Asset"
              subtitle="Email Campaign"
              themeId={themeId}
              isDusk={isDusk}
            />
            <EmailMockup />
          </section>

          {/* Section 03 — Rationale */}
          <section id="rationale">
            <SectionHeader
              number="03"
              title="Rationale"
              subtitle="Design Decisions"
              themeId={themeId}
              isDusk={isDusk}
            />
            <Rationale />
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer
        className="border-t py-12 text-center"
        style={{
          borderColor: isDusk ? "rgba(246,242,239,0.08)" : "var(--color-neutral-mid)",
        }}
      >
        <p
          className="text-xs uppercase tracking-[0.12em] opacity-30"
          style={{
            fontFamily: "var(--font-body)",
            color: isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
          }}
        >
          Sage — Brand Direction Explorations
        </p>
      </footer>
    </div>
  );
}

/* ============ SECTION HEADER ============ */

function SectionHeader({
  number,
  title,
  subtitle,
  themeId,
  isDusk,
}: {
  number: string;
  title: string;
  subtitle: string;
  themeId: string;
  isDusk: boolean;
}) {
  const textColor = isDusk ? "#F6F2EF" : "var(--color-neutral-dark)";

  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-end gap-4 mb-3">
        <span
          className="text-6xl md:text-8xl font-bold leading-none opacity-10"
          style={{
            fontFamily: "var(--font-display)",
            color: textColor,
            ...(themeId === "dusk-bloom" ? { fontStretch: "115%" } : {}),
          }}
        >
          {number}
        </span>
      </div>
      <h2
        className="text-xl md:text-2xl font-semibold leading-tight"
        style={{
          fontFamily: "var(--font-display)",
          color: textColor,
          ...(themeId === "dusk-bloom" ? { fontStretch: "110%" } : {}),
        }}
      >
        {title}
      </h2>
      <p
        className="text-sm opacity-40 mt-1"
        style={{
          fontFamily: "var(--font-body)",
          color: textColor,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}
