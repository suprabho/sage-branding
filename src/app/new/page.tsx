"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import AppMockup from "@/components/AppMockup";
import EmailMockup from "@/components/EmailMockup";
import Rationale from "@/components/Rationale";

const sections = [
  { id: "new-app-preview", label: "App Preview" },
  { id: "new-email-preview", label: "Email Preview" },
  { id: "new-rationale", label: "Rationale" },
];

/*
 * NEW DESIGN OVERRIDES
 * Morning Light: unchanged
 * Soft Blueprint: Electric Cobalt palette + candidate fonts
 * Dusk & Bloom: Ultra Violet palette + candidate fonts
 */
const NEW_OVERRIDES: Record<string, Record<string, string>> = {
  "soft-blueprint": {
    "--color-primary": "#1338BE",
    "--color-primary-light": "#4169E1",
    "--color-secondary": "#FF4F2B",
    "--color-accent": "#FFB800",
    "--color-neutral-light": "#F0F2F8",
    "--color-neutral-mid": "#C8D1E8",
    "--color-neutral-dark": "#080E1F",
    "--color-surface": "#FFFFFF",
    "--color-sage-bubble": "#DBE4FC",
    "--radius-card": "8px",
    "--radius-bubble": "6px",
    "--radius-bubble-tail": "2px",
    "--radius-button": "4px",
    "--radius-input": "4px",
  },
  "dusk-bloom": {
    "--color-primary": "#3A0E6E",
    "--color-primary-light": "#7B3FA0",
    "--color-secondary": "#E8175D",
    "--color-accent": "#FF8C00",
    "--color-neutral-light": "#F5F0F8",
    "--color-neutral-mid": "#C5B8D4",
    "--color-neutral-dark": "#0D0517",
    "--color-surface": "#FEFBFF",
    "--color-sage-bubble": "#EDE0F8",
    "--radius-card": "28px",
    "--radius-bubble": "26px",
    "--radius-bubble-tail": "6px",
    "--radius-button": "99px",
    "--radius-input": "99px",
  },
};

// Font candidates to preview — user can toggle between them
const FONT_OPTIONS = [
  { label: "Archivo (expanded)", family: "Archivo", url: "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..700&display=swap", stretch: "115%" },
  { label: "Anybody (wide)", family: "Anybody", url: "https://fonts.googleapis.com/css2?family=Anybody:wdth,wght@50..150,400..700&display=swap", stretch: "130%" },
  { label: "Fredoka (wide)", family: "Fredoka", url: "https://fonts.googleapis.com/css2?family=Fredoka:wdth,wght@75..125,400..700&display=swap", stretch: "120%" },
  { label: "Lexend Deca", family: "Lexend Deca", url: "https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500;600;700&display=swap", stretch: "100%" },
];

export default function NewDesign() {
  const { themeId } = useTheme();
  const [activeSection, setActiveSection] = useState("new-app-preview");
  const [selectedFont, setSelectedFont] = useState(0);
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

  // Apply CSS variable overrides for non-Morning-Light themes
  const overrides = NEW_OVERRIDES[themeId] || {};
  const font = FONT_OPTIONS[selectedFont];

  // For non-Morning-Light themes, override the display and body font
  const fontOverrides: Record<string, string> = {};
  if (themeId !== "morning-light") {
    fontOverrides["--font-display"] = `"${font.family}", system-ui, sans-serif`;
    fontOverrides["--font-body"] = `"${font.family}", system-ui, sans-serif`;
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Load candidate fonts */}
      {FONT_OPTIONS.map((f) => (
        <link key={f.family} rel="stylesheet" href={f.url} />
      ))}

      <div
        className="min-h-screen"
        style={{
          ...overrides,
          ...fontOverrides,
          background: "var(--color-neutral-light)",
          ...(themeId !== "morning-light" ? { fontStretch: font.stretch } : {}),
        } as React.CSSProperties}
      >
        {/* Top Bar */}
        <header className="sticky top-0 z-50 border-b" style={{ background: "var(--color-neutral-light)", borderColor: "var(--color-neutral-mid)" }}>
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between gap-4 items-center">
            <div className="text-left">
              <div className="flex items-center gap-3">
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral-dark)" }}
                >
                  Sage Brand Showcase
                </h1>
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#15803D",
                  background: "#DCFCE7",
                  padding: "3px 10px",
                  borderRadius: 99,
                }}>
                  Proposed / New
                </span>
              </div>
              <p
                className="text-sm opacity-50 mt-0.5"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
              >
                Bold colors + wide fonts &middot; <a href="/old" style={{ textDecoration: "underline" }}>View original design &rarr;</a>
              </p>
            </div>
            <ThemeSwitcher />
          </div>
        </header>

        {/* Font Selector (only shows for non-Morning-Light themes) */}
        {themeId !== "morning-light" && (
          <div style={{
            background: "var(--color-surface)",
            borderBottom: "1px solid var(--color-neutral-mid)",
            padding: "10px 16px",
          }}>
            <div className="max-w-6xl mx-auto flex items-center gap-3 flex-wrap justify-center">
              <span style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                opacity: 0.4,
              }}>
                Display font:
              </span>
              {FONT_OPTIONS.map((f, i) => (
                <button
                  key={f.family}
                  onClick={() => setSelectedFont(i)}
                  style={{
                    fontSize: 13,
                    fontWeight: selectedFont === i ? 700 : 400,
                    fontFamily: `"${f.family}", system-ui`,
                    color: selectedFont === i ? "var(--color-primary)" : "var(--color-neutral-dark)",
                    background: selectedFont === i ? "var(--color-sage-bubble)" : "transparent",
                    border: selectedFont === i ? "1px solid var(--color-primary)" : "1px solid transparent",
                    padding: "6px 14px",
                    borderRadius: 99,
                    cursor: "pointer",
                    fontStretch: f.stretch,
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        )}

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
                      color: isActive ? "var(--color-primary)" : "var(--color-neutral-dark)",
                      background: isActive ? "color-mix(in srgb, var(--color-primary) 10%, transparent)" : "transparent",
                      fontWeight: isActive ? 600 : 400,
                      opacity: isActive ? 1 : 0.55,
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
            <section id="new-app-preview">
              <h2
                className="text-lg text-center font-semibold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral-dark)" }}
              >
                App Preview
              </h2>
              <AppMockup />
            </section>

            <section id="new-email-preview">
              <h2
                className="text-lg text-center font-semibold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral-dark)" }}
              >
                Email Preview
              </h2>
              <EmailMockup />
            </section>

            <section id="new-rationale">
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
    </>
  );
}
