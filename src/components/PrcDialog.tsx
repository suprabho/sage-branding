"use client";

import { useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import { X } from "@phosphor-icons/react";

const AGES = [2, 3, 4, 5];

/* Shared leaf SVG path */
const LeafPath = ({ fill = "#FFFFFF" }: { fill?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-3s4.71-4.44 10.29-5c0 0-3 4-7 6l1 1c4.5-2.5 8-7 8-7s3-5 0-10c-1-2-2.82-2-2.82-2S19 4 17 8z" fill={fill} />
  </svg>
);

export default function PrcDialog() {
  const { themeId } = useTheme();
  const [screen, setScreen] = useState<"assessment" | "coming-soon">("assessment");
  const handleAgeClick = () => setScreen("coming-soon");
  const handleReset = () => setScreen("assessment");

  if (themeId === "grounded") return <GroundedDialog screen={screen} onAgeClick={handleAgeClick} onClose={handleReset} />;
  if (themeId === "soft-blueprint") return <BlueprintDialog screen={screen} onAgeClick={handleAgeClick} onClose={handleReset} />;
  if (themeId === "dusk-bloom") return <DuskBloomDialog screen={screen} onAgeClick={handleAgeClick} onClose={handleReset} />;

  return <GroundedDialog screen={screen} onAgeClick={handleAgeClick} onClose={handleReset} />;
}

interface DialogProps {
  screen: "assessment" | "coming-soon";
  onAgeClick: () => void;
  onClose: () => void;
}

/* ================================================================
   GROUNDED — Editorial, warm, serif-driven
   ================================================================ */
function GroundedDialog({ screen, onAgeClick, onClose }: DialogProps) {
  const [hoveredAge, setHoveredAge] = useState<number | null>(null);
  return (
    <div className="flex justify-center">
      <div
        style={{
          width: "520px",
          maxWidth: "100%",
          background: "#f6ede2",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(28, 32, 36, 0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "4px",
            right: "4px",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            border: "none",
            background: "#ffffff",
            cursor: "pointer",
            color: "#1E3540",
            opacity: 0.4,
            zIndex: 2,
          }}
        >
          <X size={20} weight="bold" />
        </button>

        <div>
          {/* Lifestyle image */}
          <div
            style={{
              width: "100%",
              aspectRatio: "21 / 9",
              borderRadius: "2px",
              overflow: "hidden",
              marginBottom: "24px",
            }}
          >
            <img
              src="/generated/grounded-email-header.jpg"
              alt="Lifestyle"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 33%",
              }}
            />
          </div>

          {screen === "assessment" ? (
            <>
              {/* Title */}
              <h2
                className="text-center mb-4"
                style={{
                  fontFamily: '"Lora", Georgia, serif',
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#004f3b",
                }}
              >
                Get a clearer picture of your child&rsquo;s progress.
              </h2>

              {/* Divider */}
              <div className="flex justify-center mb-6">
                <div style={{ width: "220px", height: "1px", background: "#E5E5E3" }} />
              </div>

              {/* Subtitle */}
              <p
                className="text-center mb-8"
                style={{
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                  fontSize: "17px",
                  color: "#1E3540",
                  opacity: 0.65,
                  letterSpacing: "0.01em",
                }}
              >
                2 minutes. Real insight. Zero guesswork.
              </p>

              {/* Start label */}
              <p
                className="text-center mb-5"
                style={{
                  fontFamily: '"Lora", Georgia, serif',
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#B5531E",
                }}
              >
                Start the assessment:
              </p>

              {/* Age buttons */}
              <div className="flex gap-3 justify-center mb-9">
                {AGES.map((age) => (
                  <button
                    key={age}
                    onClick={onAgeClick}
                    onMouseEnter={() => setHoveredAge(age)}
                    onMouseLeave={() => setHoveredAge(null)}
                    style={{
                      padding: "18px 28px",
                      color: hoveredAge === age ? "#FFFFFF" : "#B5531E",
                      backgroundColor: hoveredAge === age ? "#B5531E" : "transparent",
                      borderRadius: "10px",
                      border: "solid",
                      borderColor: "#B5531E",
                      fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                      fontSize: "16px",
                      fontWeight: 700,
                      cursor: "pointer",
                      minWidth: "90px",
                      transition: "all 0.2s ease",
                    }}
                  >
                     Age {age}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Coming Soon Title */}
              <h2
                className="text-center mb-3"
                style={{
                  fontFamily: '"Lora", Georgia, serif',
                  fontSize: "34px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#004f3b",
                }}
              >
                Coming Soon
              </h2>

              {/* Divider */}
              <div className="flex justify-center mb-6">
                <div style={{ width: "220px", height: "1px", background: "#E5E5E3" }} />
              </div>

              {/* Description */}
              <p
                className="text-center mb-6"
                style={{
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                  fontSize: "17px",
                  lineHeight: 1.6,
                  color: "#1E3540",
                  opacity: 0.75,
                }}
              >
                In the meantime, check out <strong style={{ fontWeight: 700, opacity: 1, color: "#004f3b" }}>Sage</strong>, your AI parenting partner
                for personalized resources and advice.
              </p>

              {/* Value props */}
              <p
                className="text-center mb-8"
                style={{
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#B5531E",
                  letterSpacing: "0.04em",
                }}
              >
                Personalized. &nbsp; Safe. &nbsp; Expert-Backed. &nbsp; Free.
              </p>

              {/* CTA */}
              <div className="flex justify-center mb-9">
                <button
                  style={{
                    padding: "18px 48px",
                    background: "#B5531E",
                    color: "#FFFFFF",
                    borderRadius: "10px",
                    border: "none",
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    cursor: "pointer",
                  }}
                >
                  Visit Sage
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   SOFT BLUEPRINT — Technical, sharp, monospace, bold borders
   ================================================================ */
function BlueprintDialog({ screen, onAgeClick, onClose }: DialogProps) {
  const [hoveredAge, setHoveredAge] = useState<number | null>(null);
  return (
    <div className="flex justify-center">
      <div
        style={{
          width: "520px",
          maxWidth: "100%",
          background: "#FFFFFF",
          borderRadius: "8px",
          border: "2px solid #0F172A",
          boxShadow: "6px 6px 0px #FFD93D",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top accent bar */}
        <div style={{ height: "4px", background: "#2563EB" }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
            border: "2px solid #0F172A",
            background: "#FFFFFF",
            cursor: "pointer",
            color: "#0F172A",
            zIndex: 2,
          }}
        >
          <X size={14} weight="bold" />
        </button>

        <div>
          {/* Lifestyle image */}
          <div
            style={{
              width: "100%",
              aspectRatio: "21 / 9",
              overflow: "hidden",
            }}
          >
            <img
              src="/generated/soft-blueprint-email-header.jpg"
              alt="Lifestyle"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 33%",
              }}
            />
          </div>

        <div style={{ padding: "0 36px 36px" }}>
          {screen === "assessment" ? (
            <>
              {/* Title */}
              <h2
                className="text-center my-3"
                style={{
                  fontFamily: '"Space Mono", "Courier New", monospace',
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#0F172A",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.02em",
                }}
              >
                Get a clearer picture of your child&rsquo;s progress.
              </h2>

              {/* Divider */}
              <div className="flex justify-center mb-5">
                <div style={{ width: "100%", height: "2px", background: "#0F172A" }} />
              </div>

              {/* Subtitle */}
              <p
                className="text-center mb-7"
                style={{
                  fontFamily: '"Inter Tight", system-ui, sans-serif',
                  fontSize: "15px",
                  color: "#0F172A",
                  opacity: 0.6,
                  letterSpacing: "0.02em",
                }}
              >
                2 minutes. Real insight. Zero guesswork.
              </p>

              {/* Start label */}
              <p
                className="text-center mb-4"
                style={{
                  fontFamily: '"Space Mono", "Courier New", monospace',
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0F172A",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                }}
              >
                Start the assessment:
              </p>

              {/* Age buttons */}
              <div className="flex gap-2 justify-center">
                {AGES.map((age) => (
                  <button
                    key={age}
                    onClick={onAgeClick}
                    onMouseEnter={() => setHoveredAge(age)}
                    onMouseLeave={() => setHoveredAge(null)}
                    style={{
                      padding: "14px 20px",
                      background: hoveredAge === age ? "#1D4ED8" : "#2563EB",
                      color: "#FFFFFF",
                      borderRadius: "4px",
                      border: "2px solid #0F172A",
                      boxShadow: hoveredAge === age ? "1px 1px 0px #0F172A" : "3px 3px 0px #0F172A",
                      fontFamily: '"Space Mono", "Courier New", monospace',
                      fontSize: "13px",
                      fontWeight: 700,
                      cursor: "pointer",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.04em",
                      transform: hoveredAge === age ? "translate(2px, 2px)" : "none",
                      transition: "all 0.15s ease",
                    }}
                  >
                     Age {age}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Coming Soon Title */}
              <h2
                className="text-center my-3"
                style={{
                  fontFamily: '"Space Mono", "Courier New", monospace',
                  fontSize: "28px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#0F172A",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.04em",
                }}
              >
                Coming Soon
              </h2>

              {/* Divider */}
              <div className="flex justify-center mb-5">
                <div style={{ width: "100%", height: "2px", background: "#0F172A" }} />
              </div>

              {/* Description */}
              <p
                className="text-center mb-5"
                style={{
                  fontFamily: '"Inter Tight", system-ui, sans-serif',
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#0F172A",
                  opacity: 0.7,
                }}
              >
                In the meantime, check out <strong style={{ fontWeight: 700 }}>Sage</strong>, your AI parenting partner
                for personalized resources and advice.
              </p>

              {/* Value props */}
              <p
                className="text-center mb-7"
                style={{
                  fontFamily: '"Space Mono", "Courier New", monospace',
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0F172A",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                }}
              >
                Personalized. &nbsp; Safe. &nbsp; Expert-Backed. &nbsp; Free.
              </p>

              {/* CTA */}
              <div className="flex justify-center">
                <button
                  style={{
                    padding: "14px 40px",
                    background: "#2563EB",
                    color: "#FFFFFF",
                    borderRadius: "4px",
                    border: "2px solid #0F172A",
                    boxShadow: "4px 4px 0px #0F172A",
                    fontFamily: '"Space Mono", "Courier New", monospace',
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    cursor: "pointer",
                  }}
                >
                  Visit Sage
                </button>
              </div>
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   DUSK & BLOOM — Premium, dark, rounded, frosted glass
   ================================================================ */
function DuskBloomDialog({ screen, onAgeClick, onClose }: DialogProps) {
  const [hoveredAge, setHoveredAge] = useState<number | null>(null);
  return (
    <div className="flex justify-center">
      <div
        style={{
          width: "520px",
          maxWidth: "100%",
          background: "linear-gradient(180deg, #3A2850 0%, #2A1F33 100%)",
          borderRadius: "28px",
          boxShadow: "0 20px 60px rgba(42, 31, 51, 0.5), 0 0 0 1px rgba(168, 137, 204, 0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "240px",
            height: "140px",
            background: "radial-gradient(ellipse, rgba(168, 137, 204, 0.2), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "99px",
            border: "1px solid rgba(168, 137, 204, 0.2)",
            background: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(8px)",
            cursor: "pointer",
            color: "#F6F2EF",
            opacity: 0.6,
            zIndex: 2,
          }}
        >
          <X size={16} weight="bold" />
        </button>

        <div>
          {/* Lifestyle image */}
          <div
            style={{
              width: "100%",
              aspectRatio: "21 / 9",
              overflow: "hidden",
            }}
          >
            <img
              src="/generated/dusk-bloom-email-header.jpg"
              alt="Lifestyle"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 33%",
              }}
            />
          </div>

        <div style={{ padding: "0 40px 44px", position: "relative" }}>
          {screen === "assessment" ? (
            <>
              {/* Title */}
              <h2
                className="text-center my-4"
                style={{
                  fontFamily: '"Archivo", system-ui, sans-serif',
                  fontSize: "28px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#F6F2EF",
                  fontStretch: "110%",
                }}
              >
                Get a clearer picture of your child&rsquo;s progress.
              </h2>

              {/* Divider */}
              <div className="flex justify-center mb-6">
                <div
                  style={{
                    width: "180px",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(168, 137, 204, 0.4), transparent)",
                  }}
                />
              </div>

              {/* Subtitle */}
              <p
                className="text-center mb-8"
                style={{
                  fontFamily: '"Lexend Deca", system-ui, sans-serif',
                  fontSize: "16px",
                  color: "#F6F2EF",
                  opacity: 0.5,
                }}
              >
                2 minutes. Real insight. Zero guesswork.
              </p>

              {/* Start label */}
              <p
                className="text-center mb-5"
                style={{
                  fontFamily: '"Archivo", system-ui, sans-serif',
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#E8A838",
                  fontStretch: "105%",
                }}
              >
                Start the assessment:
              </p>

              {/* Age buttons */}
              <div className="flex gap-3 justify-center">
                {AGES.map((age) => (
                  <button
                    key={age}
                    onClick={onAgeClick}
                    onMouseEnter={() => setHoveredAge(age)}
                    onMouseLeave={() => setHoveredAge(null)}
                    style={{
                      padding: "16px 24px",
                      background: hoveredAge === age
                        ? "linear-gradient(135deg, #F0B848, #E8A838)"
                        : "linear-gradient(135deg, #E8A838, #D4943A)",
                      color: "#2A1F33",
                      borderRadius: "99px",
                      border: "none",
                      fontFamily: '"Lexend Deca", system-ui, sans-serif',
                      fontSize: "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: hoveredAge === age
                        ? "0 6px 24px rgba(232, 168, 56, 0.5)"
                        : "0 4px 16px rgba(232, 168, 56, 0.3)",
                      transform: hoveredAge === age ? "translateY(-2px)" : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                     Age {age}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Coming Soon Title */}
              <h2
                className="text-center my-3"
                style={{
                  fontFamily: '"Archivo", system-ui, sans-serif',
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#C4ADDE",
                  fontStretch: "110%",
                }}
              >
                Coming Soon
              </h2>

              {/* Divider */}
              <div className="flex justify-center mb-6">
                <div
                  style={{
                    width: "180px",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(168, 137, 204, 0.4), transparent)",
                  }}
                />
              </div>

              {/* Description */}
              <p
                className="text-center mb-6"
                style={{
                  fontFamily: '"Lexend Deca", system-ui, sans-serif',
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#C4ADDE",
                  opacity: 1,
                }}
              >
                In the meantime, check out <strong style={{ fontWeight: 600, color: "#D98B8B", opacity: 1 }}>Sage</strong>, your AI parenting partner
                for personalized resources and advice.
              </p>

              {/* Value props */}
              <p
                className="text-center mb-8"
                style={{
                  fontFamily: '"Lexend Deca", system-ui, sans-serif',
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#C4ADDE",
                  opacity: 0.6,
                  letterSpacing: "0.06em",
                }}
              >
                Personalized. &nbsp; Safe. &nbsp; Expert-Backed. &nbsp; Free.
              </p>

              {/* CTA */}
              <div className="flex justify-center">
                <button
                  style={{
                    padding: "16px 48px",
                    background: "linear-gradient(135deg, #E8A838, #D4943A)",
                    color: "#2A1F33",
                    borderRadius: "99px",
                    border: "none",
                    fontFamily: '"Lexend Deca", system-ui, sans-serif',
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(232, 168, 56, 0.35)",
                  }}
                >
                  Visit Sage
                </button>
              </div>
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
