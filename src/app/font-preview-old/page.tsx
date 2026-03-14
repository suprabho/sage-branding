"use client";

const HEADING = "Parent with confidence, every day.";
const BODY =
  "Meet Sage. The personalized AI partner that helps you navigate tantrums, milestones, and the millions of decisions in between.";

interface FontDef {
  name: string;
  family: string;
  googleUrl: string;
  description: string;
  usedIn: string;
}

const fonts: FontDef[] = [
  {
    name: "Fraunces",
    family: "Fraunces",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600;1,9..144,700&display=swap",
    description: "Variable optical serif with warmth and personality. Slightly literary.",
    usedIn: "Morning Light \u2014 Display",
  },
  {
    name: "Plus Jakarta Sans",
    family: "Plus Jakarta Sans",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap",
    description: "Rounded, modern grotesque with subtle friendliness.",
    usedIn: "Morning Light \u2014 Body",
  },
  {
    name: "Sora",
    family: "Sora",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap",
    description: "Geometric, rounded, contemporary. Ambitious but approachable.",
    usedIn: "Soft Blueprint \u2014 Display",
  },
  {
    name: "DM Sans",
    family: "DM Sans",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap",
    description: "Neutral, low-friction reading. Optical sizing across scales.",
    usedIn: "Soft Blueprint \u2014 Body",
  },
  {
    name: "Archivo",
    family: "Archivo",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,400..700;1,62..125,400..700&display=swap",
    description: "Variable-width grotesque (62%–125%). Dynamic hierarchy via width axis — expanded for heroes, condensed for labels.",
    usedIn: "Dusk & Bloom \u2014 Display",
  },
  {
    name: "Lexend Deca",
    family: "Lexend Deca",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap",
    description: "Designed for optimal readability with open letterforms. Modern and effortlessly legible.",
    usedIn: "Dusk & Bloom \u2014 Body",
  },
];

const PALETTES = [
  {
    name: "Morning Light (current)",
    bg: "#F7F3EE",
    text: "#2E3830",
    primary: "#4A7C59",
  },
  {
    name: "Soft Blueprint (current)",
    bg: "#F4F6FB",
    text: "#1E2A45",
    primary: "#5B7FD4",
  },
  {
    name: "Dusk & Bloom (current)",
    bg: "#F6F2EF",
    text: "#2A1F33",
    primary: "#6B4F8C",
  },
];

export default function FontPreviewOld() {
  return (
    <>
      {fonts.map((font) => (
        <link key={font.name} rel="stylesheet" href={font.googleUrl} />
      ))}

      <div style={{ padding: "40px 24px", maxWidth: 1200, margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700 }}>
            Original Fonts (Rejected)
          </h1>
          <span style={{
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#B91C1C",
            background: "#FEE2E2",
            padding: "4px 12px",
            borderRadius: 99,
          }}>
            Too safe
          </span>
        </div>
        <p style={{ fontSize: 14, opacity: 0.6, marginBottom: 12 }}>
          Feedback: &ldquo;Typography choices are a bit too safe and ordinary.&rdquo;
        </p>
        <p style={{ fontSize: 13, opacity: 0.4, marginBottom: 40 }}>
          Compare with: <a href="/font-preview-new" style={{ color: "#2563EB", textDecoration: "underline" }}>/font-preview-new</a> (proposed replacements)
        </p>

        {fonts.map((font) => (
          <div
            key={font.name}
            style={{
              marginBottom: 40,
              borderBottom: "1px solid #e5e5e5",
              paddingBottom: 28,
            }}
          >
            <div style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700 }}>{font.name}</h2>
                <span style={{ fontSize: 12, opacity: 0.4, fontStyle: "italic" }}>{font.usedIn}</span>
              </div>
              <p style={{ fontSize: 13, opacity: 0.5 }}>{font.description}</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              {PALETTES.map((palette) => (
                <div
                  key={palette.name}
                  style={{
                    background: palette.bg,
                    padding: 20,
                    borderRadius: 12,
                    border: `1px solid ${palette.primary}22`,
                  }}
                >
                  <p style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: palette.primary,
                    marginBottom: 10,
                    fontWeight: 600,
                    fontFamily: "system-ui",
                  }}>
                    {palette.name}
                  </p>

                  <p style={{
                    fontFamily: `"${font.family}", system-ui`,
                    fontSize: 48,
                    fontWeight: 700,
                    color: palette.primary,
                    lineHeight: 1,
                    marginBottom: 10,
                  }}>
                    Sage
                  </p>

                  <p style={{
                    fontFamily: `"${font.family}", system-ui`,
                    fontSize: 22,
                    fontWeight: 700,
                    color: palette.text,
                    lineHeight: 1.2,
                    marginBottom: 10,
                  }}>
                    {HEADING}
                  </p>

                  <p style={{
                    fontFamily: `"${font.family}", system-ui`,
                    fontSize: 15,
                    fontWeight: 400,
                    color: palette.text,
                    lineHeight: 1.6,
                    opacity: 0.8,
                    marginBottom: 14,
                  }}>
                    {BODY}
                  </p>

                  <button style={{
                    fontFamily: `"${font.family}", system-ui`,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "white",
                    background: palette.primary,
                    border: "none",
                    padding: "10px 24px",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}>
                    Chat with Sage
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
