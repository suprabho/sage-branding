"use client";

const HEADING = "Parent with confidence, every day.";
const BODY =
  "Meet Sage. The personalized AI partner that helps you navigate tantrums, milestones, and the millions of decisions in between.";

interface FontDef {
  name: string;
  family: string;
  googleUrl: string;
  widthAxes: string;
  widths: { label: string; style: React.CSSProperties }[];
  character: string;
}

const fonts: FontDef[] = [
  {
    name: "Archivo",
    family: "Archivo",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,400..700;1,62..125,400..700&display=swap",
    widthAxes: "wdth 62\u2013125",
    widths: [
      { label: "Condensed (62%)", style: { fontStretch: "62%" } },
      { label: "Normal (100%)", style: { fontStretch: "100%" } },
      { label: "Expanded (125%)", style: { fontStretch: "125%" } },
    ],
    character: "Structured, industrial, engineering-confident",
  },
  {
    name: "Anybody",
    family: "Anybody",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Anybody:ital,wdth,wght@0,50..150,400..700;1,50..150,400..700&display=swap",
    widthAxes: "wdth 50\u2013150 (extreme range)",
    widths: [
      { label: "Condensed (50%)", style: { fontStretch: "50%" } },
      { label: "Normal (100%)", style: { fontStretch: "100%" } },
      { label: "Wide (125%)", style: { fontStretch: "125%" } },
      { label: "Ultra Wide (150%)", style: { fontStretch: "150%" } },
    ],
    character: "EXTREME width range \u2014 from ultra-condensed to absurdly wide",
  },
  {
    name: "Fredoka",
    family: "Fredoka",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Fredoka:wdth,wght@75..125,400..700&display=swap",
    widthAxes: "wdth 75\u2013125",
    widths: [
      { label: "Condensed (75%)", style: { fontStretch: "75%" } },
      { label: "Normal (100%)", style: { fontStretch: "100%" } },
      { label: "Wide (125%)", style: { fontStretch: "125%" } },
    ],
    character: "Rounded, playful, warm \u2014 friendly authority with soft edges",
  },
  {
    name: "Lexend Deca",
    family: "Lexend Deca",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500;600;700&display=swap",
    widthAxes: "Standard width (naturally wide letterforms)",
    widths: [
      { label: "Default (naturally wide)", style: {} },
    ],
    character: "Designed for readability \u2014 wide, open letterforms, modern confidence",
  },
];

const PALETTES = [
  {
    name: "Soft Blueprint (Bold)",
    bg: "#F0F2F8",
    text: "#080E1F",
    primary: "#1338BE",
    secondary: "#FF4F2B",
    accent: "#FFB800",
  },
  {
    name: "Dusk & Bloom (Wild)",
    bg: "#F5F0F8",
    text: "#0D0517",
    primary: "#3A0E6E",
    secondary: "#E8175D",
    accent: "#FF8C00",
  },
];

export default function FontPreviewNew() {
  return (
    <>
      {fonts.map((font) => (
        <link key={font.name} rel="stylesheet" href={font.googleUrl} />
      ))}

      <div style={{ padding: "40px 24px", maxWidth: 1200, margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700 }}>
            Proposed Fonts (New Direction)
          </h1>
          <span style={{
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#15803D",
            background: "#DCFCE7",
            padding: "4px 12px",
            borderRadius: 99,
          }}>
            Bold + Wide
          </span>
        </div>
        <p style={{ fontSize: 14, opacity: 0.6, marginBottom: 12 }}>
          Variable-width fonts with bold palettes. Shown at multiple widths against proposed color schemes.
        </p>
        <p style={{ fontSize: 13, opacity: 0.4, marginBottom: 40 }}>
          Compare with: <a href="/font-preview-old" style={{ color: "#2563EB", textDecoration: "underline" }}>/font-preview-old</a> (original rejected fonts)
        </p>

        {fonts.map((font) => (
          <div
            key={font.name}
            style={{
              marginBottom: 48,
              borderBottom: "1px solid #ddd",
              paddingBottom: 32,
            }}
          >
            <div style={{ marginBottom: 16 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>
                {font.name}
              </h2>
              <p style={{ fontSize: 13, opacity: 0.5 }}>
                Axes: {font.widthAxes} &mdash; {font.character}
              </p>
            </div>

            {font.widths.map((width) => (
              <div key={width.label} style={{ marginBottom: 24 }}>
                <p
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.4,
                    marginBottom: 8,
                  }}
                >
                  {width.label}
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {PALETTES.map((palette) => (
                    <div
                      key={palette.name}
                      style={{
                        background: palette.bg,
                        padding: 24,
                        borderRadius: 12,
                        border: `1px solid ${palette.primary}22`,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 10,
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          color: palette.primary,
                          marginBottom: 12,
                          fontWeight: 600,
                          fontFamily: "system-ui",
                        }}
                      >
                        {palette.name}
                      </p>

                      {/* Giant "Sage" */}
                      <p
                        style={{
                          fontFamily: `"${font.family}", system-ui`,
                          fontSize: 64,
                          fontWeight: 700,
                          color: palette.primary,
                          lineHeight: 1,
                          marginBottom: 12,
                          ...width.style,
                        }}
                      >
                        Sage
                      </p>

                      {/* Heading */}
                      <p
                        style={{
                          fontFamily: `"${font.family}", system-ui`,
                          fontSize: 28,
                          fontWeight: 700,
                          color: palette.text,
                          lineHeight: 1.15,
                          marginBottom: 12,
                          ...width.style,
                        }}
                      >
                        {HEADING}
                      </p>

                      {/* Body */}
                      <p
                        style={{
                          fontFamily: `"${font.family}", system-ui`,
                          fontSize: 16,
                          fontWeight: 400,
                          color: palette.text,
                          lineHeight: 1.6,
                          opacity: 0.8,
                          marginBottom: 16,
                          ...width.style,
                        }}
                      >
                        {BODY}
                      </p>

                      {/* Sample button */}
                      <button
                        style={{
                          fontFamily: `"${font.family}", system-ui`,
                          fontSize: 14,
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "white",
                          background: palette.primary,
                          border: "none",
                          padding: "12px 28px",
                          borderRadius: 8,
                          cursor: "pointer",
                          ...width.style,
                        }}
                      >
                        Chat with Sage
                      </button>

                      {/* Color swatches */}
                      <div style={{ display: "flex", gap: 6, marginTop: 16 }}>
                        {[palette.primary, palette.secondary, palette.accent].map((c) => (
                          <div
                            key={c}
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: 4,
                              background: c,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
