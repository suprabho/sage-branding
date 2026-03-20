#!/usr/bin/env node

/**
 * Image Generation Script
 *
 * Detects changes in prompts/images/*.md files and sends updated prompts
 * to the Gemini API to generate images.
 *
 * Usage:
 *   node scripts/generate-images.mjs          # only regenerate changed prompts
 *   node scripts/generate-images.mjs --force   # regenerate all images
 *
 * Requires: GEMINI_API_KEY environment variable
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { GoogleGenAI } from "@google/genai";
import mime from "mime";

const ROOT = path.resolve(import.meta.dirname, "..");
const PROMPTS_DIR = path.join(ROOT, "prompts", "images");
const OUTPUT_DIR = path.join(ROOT, "public", "generated");
const CACHE_FILE = path.join(ROOT, ".image-cache", "checksums.json");

// Load .env.local (Node doesn't do this automatically)
function loadEnv() {
  for (const file of [".env.local", ".env"]) {
    const envPath = path.join(ROOT, file);
    if (!fs.existsSync(envPath)) continue;
    for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const idx = trimmed.indexOf("=");
      if (idx > 0) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) process.env[key] = val;
      }
    }
  }
}
loadEnv();

const FORCE = process.argv.includes("--force");
const API_KEY = process.env.GEMINI_API_KEY;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, prompt: content.trim() };

  const meta = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) {
      meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    }
  }
  return { meta, prompt: match[2].trim() };
}

function hash(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

function loadChecksums() {
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
  } catch {
    return {};
  }
}

function saveChecksums(checksums) {
  fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(checksums, null, 2));
}

// ---------------------------------------------------------------------------
// Gemini API — @google/genai SDK
// ---------------------------------------------------------------------------

const ai = API_KEY ? new GoogleGenAI({}) : null;

async function generateImage(prompt, aspectRatio = "1:1") {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-image-preview",
    contents: prompt,
    config: {
      responseModalities: ["IMAGE", "TEXT"],
      imageConfig: {
        aspectRatio,
      },
    },
  });

  const parts = response.candidates?.[0]?.content?.parts || [];
  for (const part of parts) {
    if (part.inlineData) {
      const ext = mime.getExtension(part.inlineData.mimeType || "image/png");
      const buffer = Buffer.from(part.inlineData.data || "", "base64");
      return { buffer, ext };
    }
  }

  throw new Error("No image returned in response");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!API_KEY || !ai) {
    console.log("⏭  GEMINI_API_KEY not set — skipping image generation.");
    console.log("   Set it in .env.local or export it to enable generation.");
    process.exit(0);
  }

  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Find all prompt files
  const files = fs.readdirSync(PROMPTS_DIR).filter((f) => f.endsWith(".md"));
  if (files.length === 0) {
    console.log("No prompt files found in prompts/images/");
    process.exit(0);
  }

  const checksums = loadChecksums();
  let generated = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(PROMPTS_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const contentHash = hash(content);
    const { meta, prompt } = parseFrontmatter(content);

    const outputBase = (meta.output || file.replace(".md", ".png")).replace(/\.[^.]+$/, "");
    const outputPath = path.join(OUTPUT_DIR, outputBase);
    const aspectRatio = meta.aspectRatio || "1:1";

    // Skip if unchanged and output exists (unless --force)
    const existingFile = fs.readdirSync(OUTPUT_DIR).find((f) => f.startsWith(outputBase + "."));
    if (
      !FORCE &&
      checksums[file] === contentHash &&
      existingFile
    ) {
      skipped++;
      continue;
    }

    console.log(`🎨 Generating: ${outputBase} (${aspectRatio})`);
    console.log(`   Prompt: ${prompt.slice(0, 80)}...`);

    try {
      const { buffer, ext } = await generateImage(prompt, aspectRatio);
      const finalName = `${outputBase}.${ext || "png"}`;
      fs.writeFileSync(path.join(OUTPUT_DIR, finalName), buffer);
      checksums[file] = contentHash;
      generated++;
      console.log(`   ✓ Saved to public/generated/${finalName}`);
    } catch (err) {
      console.error(`   ✗ Failed: ${err.message}`);
    }
  }

  saveChecksums(checksums);
  console.log(
    `\nDone: ${generated} generated, ${skipped} unchanged, ${files.length} total.`
  );
}

main();
