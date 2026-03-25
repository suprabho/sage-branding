"use client";

import { useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import { X, CaretDown, Book, Users, MathOperations, Palette, Eye, EyeSlash } from "@phosphor-icons/react";

const AGE_OPTIONS = ["2-3 years", "4-5 years", "6-7 years", "8-10 years"];

const FOCUS_AREAS = [
  { id: "reading", label: "Reading", emoji: "\uD83D\uDCDA", icon: Book },
  { id: "emotions", label: "Big Emotions", emoji: "\uD83E\uDDD1\u200D\uD83E\uDDD1\u200D\uD83E\uDDD2", icon: Users },
  { id: "math", label: "Math", emoji: "\uD83D\uDD22", icon: MathOperations },
  { id: "creativity", label: "Creativity", emoji: "\uD83C\uDFA8", icon: Palette },
];

export default function PrcDialog() {
  const { themeId } = useTheme();
  const [selectedAge, setSelectedAge] = useState("");
  const [ageOpen, setAgeOpen] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState("");
  const [email, setEmail] = useState("");
  const [emailVisible, setEmailVisible] = useState(false);

  if (themeId === "grounded") return <GroundedDialog {...{ selectedAge, setSelectedAge, ageOpen, setAgeOpen, selectedFocus, setSelectedFocus, email, setEmail, emailVisible, setEmailVisible }} />;
  if (themeId === "soft-blueprint") return <BlueprintDialog {...{ selectedAge, setSelectedAge, ageOpen, setAgeOpen, selectedFocus, setSelectedFocus, email, setEmail, emailVisible, setEmailVisible }} />;
  if (themeId === "dusk-bloom") return <DuskBloomDialog {...{ selectedAge, setSelectedAge, ageOpen, setAgeOpen, selectedFocus, setSelectedFocus, email, setEmail, emailVisible, setEmailVisible }} />;

  return <GroundedDialog {...{ selectedAge, setSelectedAge, ageOpen, setAgeOpen, selectedFocus, setSelectedFocus, email, setEmail, emailVisible, setEmailVisible }} />;
}

interface DialogProps {
  selectedAge: string;
  setSelectedAge: (v: string) => void;
  ageOpen: boolean;
  setAgeOpen: (v: boolean) => void;
  selectedFocus: string;
  setSelectedFocus: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  emailVisible: boolean;
  setEmailVisible: (v: boolean) => void;
}

/* ================================================================
   GROUNDED — Editorial, warm, serif-driven
   ================================================================ */
function GroundedDialog({ selectedAge, setSelectedAge, ageOpen, setAgeOpen, selectedFocus, setSelectedFocus, email, setEmail, emailVisible, setEmailVisible }: DialogProps) {
  return (
    <div className="flex justify-center">
      <div
        style={{
          width: "460px",
          maxWidth: "100%",
          background: "#FFFFFF",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(28, 32, 36, 0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Close button */}
        <button
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "#1E3540",
            opacity: 0.4,
          }}
        >
          <X size={20} weight="bold" />
        </button>

        <div style={{ padding: "40px 36px 36px" }}>
          {/* Sage leaf icon */}
          <div className="flex justify-center mb-5">
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "#004f3b",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-3s4.71-4.44 10.29-5c0 0-3 4-7 6l1 1c4.5-2.5 8-7 8-7s3-5 0-10c-1-2-2.82-2-2.82-2S19 4 17 8z" fill="#FFFFFF" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-center mb-3"
            style={{
              fontFamily: '"Lora", Georgia, serif',
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#1E3540",
            }}
          >
            What activity does your child need right now?
          </h2>

          {/* Divider */}
          <div className="flex justify-center mb-5">
            <div style={{ width: "200px", height: "1px", background: "#E5E5E3" }} />
          </div>

          {/* Subtitle */}
          <p
            className="text-center mb-6"
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: "15px",
              color: "#1E3540",
              opacity: 0.7,
            }}
          >
            Tell us a little. Get the right activity{" "}
            <strong style={{ fontWeight: 700 }}>in seconds</strong>.
          </p>

          {/* Age Dropdown */}
          <div className="relative mb-5">
            <button
              onClick={() => setAgeOpen(!ageOpen)}
              className="w-full flex items-center justify-between"
              style={{
                padding: "14px 16px",
                borderRadius: "10px",
                border: "1px solid #E5E5E3",
                background: "#FFFFFF",
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: "15px",
                color: selectedAge ? "#1E3540" : "#1E354080",
                cursor: "pointer",
              }}
            >
              <span>{selectedAge || "Your child's age"}</span>
              <CaretDown size={18} style={{ opacity: 0.4, transform: ageOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>
            {ageOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#FFFFFF",
                  border: "1px solid #E5E5E3",
                  borderRadius: "10px",
                  marginTop: "4px",
                  zIndex: 10,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
              >
                {AGE_OPTIONS.map((age) => (
                  <button
                    key={age}
                    className="w-full text-left"
                    onClick={() => { setSelectedAge(age); setAgeOpen(false); }}
                    style={{
                      padding: "12px 16px",
                      fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                      fontSize: "14px",
                      color: "#1E3540",
                      background: selectedAge === age ? "#f6ede2" : "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {age}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Focus Area */}
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: "15px",
              color: "#1E3540",
              marginBottom: "12px",
            }}
          >
            What are you working on?
          </p>
          <div className="flex flex-col gap-2 mb-6">
            {FOCUS_AREAS.map((area) => (
              <label
                key={area.id}
                className="flex items-center gap-3 cursor-pointer"
                style={{
                  padding: "10px 14px",
                  borderRadius: "10px",
                  background: selectedFocus === area.id ? "#f6ede2" : "transparent",
                  transition: "background 0.15s",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: `2px solid ${selectedFocus === area.id ? "#004f3b" : "#E5E5E3"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "border-color 0.15s",
                  }}
                >
                  {selectedFocus === area.id && (
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#004f3b" }} />
                  )}
                </div>
                <input
                  type="radio"
                  name="focus-grounded"
                  value={area.id}
                  checked={selectedFocus === area.id}
                  onChange={() => setSelectedFocus(area.id)}
                  className="sr-only"
                />
                <span style={{ fontSize: "16px" }}>{area.emoji}</span>
                <span
                  style={{
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#1E3540",
                  }}
                >
                  {area.label}
                </span>
              </label>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="w-full"
            style={{
              padding: "16px 24px",
              background: "#004f3b",
              color: "#FFFFFF",
              borderRadius: "10px",
              border: "none",
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              cursor: "pointer",
            }}
          >
            Get My Personalized Activity &rarr;
          </button>

          {/* Email input */}
          <div className="relative mt-4">
            <input
              type={emailVisible ? "text" : "email"}
              placeholder="test@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                paddingRight: "100px",
                borderRadius: "10px",
                border: "1px solid #E5E5E3",
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: "14px",
                color: "#1E3540",
                background: "#FFFFFF",
                boxSizing: "border-box",
              }}
            />
            <button
              onClick={() => setEmailVisible(!emailVisible)}
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                background: "#B5531E",
                color: "#FFFFFF",
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {emailVisible ? <Eye size={14} /> : <EyeSlash size={14} />}
              {emailVisible ? "Visible" : "Hidden"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   SOFT BLUEPRINT — Technical, sharp, monospace, bold borders
   ================================================================ */
function BlueprintDialog({ selectedAge, setSelectedAge, ageOpen, setAgeOpen, selectedFocus, setSelectedFocus, email, setEmail, emailVisible, setEmailVisible }: DialogProps) {
  return (
    <div className="flex justify-center">
      <div
        style={{
          width: "460px",
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
          }}
        >
          <X size={14} weight="bold" />
        </button>

        <div style={{ padding: "36px 32px 32px" }}>
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div
              style={{
                width: "44px",
                height: "44px",
                background: "#2563EB",
                borderRadius: "4px",
                border: "2px solid #0F172A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-3s4.71-4.44 10.29-5c0 0-3 4-7 6l1 1c4.5-2.5 8-7 8-7s3-5 0-10c-1-2-2.82-2-2.82-2S19 4 17 8z" fill="#FFFFFF" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-center mb-2"
            style={{
              fontFamily: '"Space Mono", "Courier New", monospace',
              fontSize: "22px",
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#0F172A",
              textTransform: "uppercase" as const,
              letterSpacing: "0.02em",
            }}
          >
            What activity does your child need right now?
          </h2>

          {/* Divider */}
          <div className="flex justify-center mb-4">
            <div style={{ width: "100%", height: "2px", background: "#0F172A" }} />
          </div>

          {/* Subtitle */}
          <p
            className="text-center mb-6"
            style={{
              fontFamily: '"Inter Tight", system-ui, sans-serif',
              fontSize: "14px",
              color: "#0F172A",
              opacity: 0.6,
            }}
          >
            Tell us a little. Get the right activity{" "}
            <strong style={{ fontWeight: 700 }}>in seconds</strong>.
          </p>

          {/* Age Dropdown */}
          <div className="relative mb-5">
            <button
              onClick={() => setAgeOpen(!ageOpen)}
              className="w-full flex items-center justify-between"
              style={{
                padding: "12px 14px",
                borderRadius: "4px",
                border: "2px solid #CBD5E8",
                background: "#F0F4FF",
                fontFamily: '"Inter Tight", system-ui, sans-serif',
                fontSize: "14px",
                color: selectedAge ? "#0F172A" : "#0F172A80",
                cursor: "pointer",
                textTransform: "uppercase" as const,
                letterSpacing: "0.04em",
              }}
            >
              <span>{selectedAge || "Your child's age"}</span>
              <CaretDown size={16} style={{ opacity: 0.5, transform: ageOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>
            {ageOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#FFFFFF",
                  border: "2px solid #0F172A",
                  borderRadius: "4px",
                  marginTop: "4px",
                  zIndex: 10,
                  boxShadow: "4px 4px 0px #FFD93D",
                }}
              >
                {AGE_OPTIONS.map((age) => (
                  <button
                    key={age}
                    className="w-full text-left"
                    onClick={() => { setSelectedAge(age); setAgeOpen(false); }}
                    style={{
                      padding: "10px 14px",
                      fontFamily: '"Inter Tight", system-ui, sans-serif',
                      fontSize: "13px",
                      color: "#0F172A",
                      background: selectedAge === age ? "#E8EEFF" : "transparent",
                      border: "none",
                      borderBottom: "1px solid #CBD5E8",
                      cursor: "pointer",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {age}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Focus Area */}
          <p
            style={{
              fontFamily: '"Space Mono", "Courier New", monospace',
              fontSize: "12px",
              fontWeight: 700,
              color: "#0F172A",
              textTransform: "uppercase" as const,
              letterSpacing: "0.08em",
              marginBottom: "10px",
            }}
          >
            What are you working on?
          </p>
          <div className="flex flex-col gap-1 mb-6">
            {FOCUS_AREAS.map((area) => {
              const isSelected = selectedFocus === area.id;
              return (
                <label
                  key={area.id}
                  className="flex items-center gap-3 cursor-pointer"
                  style={{
                    padding: "10px 12px",
                    borderRadius: "4px",
                    border: `2px solid ${isSelected ? "#2563EB" : "transparent"}`,
                    background: isSelected ? "#E8EEFF" : "transparent",
                    transition: "all 0.12s",
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "3px",
                      border: `2px solid ${isSelected ? "#2563EB" : "#CBD5E8"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background: isSelected ? "#2563EB" : "transparent",
                    }}
                  >
                    {isSelected && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <input
                    type="radio"
                    name="focus-blueprint"
                    value={area.id}
                    checked={isSelected}
                    onChange={() => setSelectedFocus(area.id)}
                    className="sr-only"
                  />
                  <area.icon size={18} weight="bold" color="#2563EB" />
                  <span
                    style={{
                      fontFamily: '"Inter Tight", system-ui, sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#0F172A",
                    }}
                  >
                    {area.label}
                  </span>
                </label>
              );
            })}
          </div>

          {/* CTA Button */}
          <button
            className="w-full"
            style={{
              padding: "14px 24px",
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
            Get My Personalized Activity &rarr;
          </button>

          {/* Email input */}
          <div className="relative mt-4">
            <input
              type={emailVisible ? "text" : "email"}
              placeholder="test@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px",
                paddingRight: "110px",
                borderRadius: "4px",
                border: "2px solid #CBD5E8",
                fontFamily: '"Inter Tight", system-ui, sans-serif',
                fontSize: "13px",
                color: "#0F172A",
                background: "#F0F4FF",
                boxSizing: "border-box",
                textTransform: "uppercase" as const,
                letterSpacing: "0.02em",
              }}
            />
            <button
              onClick={() => setEmailVisible(!emailVisible)}
              style={{
                position: "absolute",
                right: "6px",
                top: "50%",
                transform: "translateY(-50%)",
                padding: "5px 10px",
                borderRadius: "4px",
                border: "2px solid #0F172A",
                background: "#FF6B6B",
                color: "#FFFFFF",
                fontFamily: '"Space Mono", "Courier New", monospace',
                fontSize: "10px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
              }}
            >
              {emailVisible ? <Eye size={12} weight="bold" /> : <EyeSlash size={12} weight="bold" />}
              {emailVisible ? "Visible" : "Hidden"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   DUSK & BLOOM — Premium, dark, rounded, frosted glass
   ================================================================ */
function DuskBloomDialog({ selectedAge, setSelectedAge, ageOpen, setAgeOpen, selectedFocus, setSelectedFocus, email, setEmail, emailVisible, setEmailVisible }: DialogProps) {
  return (
    <div className="flex justify-center">
      <div
        style={{
          width: "460px",
          maxWidth: "100%",
          background: "linear-gradient(180deg, #3A2850 0%, #2A1F33 100%)",
          borderRadius: "28px",
          boxShadow: "0 20px 60px rgba(42, 31, 51, 0.5), 0 0 0 1px rgba(168, 137, 204, 0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle glow accent */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
            height: "120px",
            background: "radial-gradient(ellipse, rgba(168, 137, 204, 0.2), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Close button */}
        <button
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
          }}
        >
          <X size={16} weight="bold" />
        </button>

        <div style={{ padding: "44px 36px 36px", position: "relative" }}>
          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div
              style={{
                width: "52px",
                height: "52px",
                background: "linear-gradient(135deg, #A889CC, #7B5FA0)",
                borderRadius: "99px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(168, 137, 204, 0.35)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-3s4.71-4.44 10.29-5c0 0-3 4-7 6l1 1c4.5-2.5 8-7 8-7s3-5 0-10c-1-2-2.82-2-2.82-2S19 4 17 8z" fill="#F6F2EF" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-center mb-3"
            style={{
              fontFamily: '"Archivo", system-ui, sans-serif',
              fontSize: "26px",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#F6F2EF",
              fontStretch: "110%",
            }}
          >
            What activity does your child need right now?
          </h2>

          {/* Divider */}
          <div className="flex justify-center mb-5">
            <div
              style={{
                width: "160px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(168, 137, 204, 0.4), transparent)",
              }}
            />
          </div>

          {/* Subtitle */}
          <p
            className="text-center mb-7"
            style={{
              fontFamily: '"Lexend Deca", system-ui, sans-serif',
              fontSize: "15px",
              color: "#F6F2EF",
              opacity: 0.55,
            }}
          >
            Tell us a little. Get the right activity{" "}
            <strong style={{ fontWeight: 600, opacity: 1, color: "#E8A838" }}>in seconds</strong>.
          </p>

          {/* Age Dropdown */}
          <div className="relative mb-5">
            <button
              onClick={() => setAgeOpen(!ageOpen)}
              className="w-full flex items-center justify-between"
              style={{
                padding: "14px 18px",
                borderRadius: "99px",
                border: "1px solid rgba(168, 137, 204, 0.25)",
                background: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(8px)",
                fontFamily: '"Lexend Deca", system-ui, sans-serif',
                fontSize: "14px",
                color: selectedAge ? "#F6F2EF" : "rgba(246, 242, 239, 0.4)",
                cursor: "pointer",
              }}
            >
              <span>{selectedAge || "Your child's age"}</span>
              <CaretDown size={16} style={{ color: "#A889CC", transform: ageOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)" }} />
            </button>
            {ageOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#3A2850",
                  border: "1px solid rgba(168, 137, 204, 0.2)",
                  borderRadius: "20px",
                  marginTop: "6px",
                  zIndex: 10,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                }}
              >
                {AGE_OPTIONS.map((age) => (
                  <button
                    key={age}
                    className="w-full text-left"
                    onClick={() => { setSelectedAge(age); setAgeOpen(false); }}
                    style={{
                      padding: "12px 18px",
                      fontFamily: '"Lexend Deca", system-ui, sans-serif',
                      fontSize: "13px",
                      color: "#F6F2EF",
                      background: selectedAge === age ? "rgba(168, 137, 204, 0.15)" : "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {age}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Focus Area */}
          <p
            style={{
              fontFamily: '"Lexend Deca", system-ui, sans-serif',
              fontSize: "14px",
              color: "#F6F2EF",
              opacity: 0.5,
              marginBottom: "12px",
            }}
          >
            What are you working on?
          </p>
          <div className="flex flex-col gap-2 mb-7">
            {FOCUS_AREAS.map((area) => {
              const isSelected = selectedFocus === area.id;
              return (
                <label
                  key={area.id}
                  className="flex items-center gap-3 cursor-pointer"
                  style={{
                    padding: "12px 16px",
                    borderRadius: "16px",
                    border: `1px solid ${isSelected ? "rgba(232, 168, 56, 0.4)" : "rgba(168, 137, 204, 0.1)"}`,
                    background: isSelected ? "rgba(232, 168, 56, 0.08)" : "rgba(255, 255, 255, 0.03)",
                    transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: `2px solid ${isSelected ? "#E8A838" : "rgba(168, 137, 204, 0.3)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "border-color 0.2s",
                    }}
                  >
                    {isSelected && (
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#E8A838", boxShadow: "0 0 8px rgba(232, 168, 56, 0.5)" }} />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="focus-dusk"
                    value={area.id}
                    checked={isSelected}
                    onChange={() => setSelectedFocus(area.id)}
                    className="sr-only"
                  />
                  <span style={{ fontSize: "16px" }}>{area.emoji}</span>
                  <span
                    style={{
                      fontFamily: '"Lexend Deca", system-ui, sans-serif',
                      fontSize: "15px",
                      fontWeight: 500,
                      color: isSelected ? "#E8A838" : "#F6F2EF",
                      transition: "color 0.2s",
                    }}
                  >
                    {area.label}
                  </span>
                </label>
              );
            })}
          </div>

          {/* CTA Button */}
          <button
            className="w-full"
            style={{
              padding: "16px 24px",
              background: "linear-gradient(135deg, #E8A838, #D4943A)",
              color: "#2A1F33",
              borderRadius: "99px",
              border: "none",
              fontFamily: '"Lexend Deca", system-ui, sans-serif',
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(232, 168, 56, 0.35)",
            }}
          >
            Get My Personalized Activity &rarr;
          </button>

          {/* Email input */}
          <div className="relative mt-4">
            <input
              type={emailVisible ? "text" : "email"}
              placeholder="test@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 18px",
                paddingRight: "110px",
                borderRadius: "99px",
                border: "1px solid rgba(168, 137, 204, 0.2)",
                fontFamily: '"Lexend Deca", system-ui, sans-serif',
                fontSize: "14px",
                color: "#F6F2EF",
                background: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(8px)",
                boxSizing: "border-box",
              }}
            />
            <button
              onClick={() => setEmailVisible(!emailVisible)}
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                padding: "6px 14px",
                borderRadius: "99px",
                border: "none",
                background: "#D98B8B",
                color: "#FFFFFF",
                fontFamily: '"Lexend Deca", system-ui, sans-serif',
                fontSize: "11px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {emailVisible ? <Eye size={12} /> : <EyeSlash size={12} />}
              {emailVisible ? "Visible" : "Hidden"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
