import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

const MODEL = "gemini-1.5-flash";
const FALLBACK_MODEL = "gemini-2.5-flash-lite";
const MAX_INPUT_CHARS = 6000;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function trimInput(text) {
  const trimmed = text.trim();
  if (trimmed.length <= MAX_INPUT_CHARS) return trimmed;
  return `${trimmed.slice(0, MAX_INPUT_CHARS)}\n...[truncated]`;
}

async function generate(modelName, prompt, maxOutputTokens) {
  const model = genAI.getGenerativeModel({
    model: modelName,
    generationConfig: { maxOutputTokens, temperature: 0.3 },
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}

async function askGemini(prompt, maxOutputTokens) {
  try {
    return await generate(MODEL, prompt, maxOutputTokens);
  } catch (error) {
    if (error.status !== 404) throw error;
    console.warn(`${MODEL} unavailable, using ${FALLBACK_MODEL}`);
    return generate(FALLBACK_MODEL, prompt, maxOutputTokens);
  }
}

router.post("/generate-readme", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text?.trim()) {
      return res.status(400).json({ error: "Text input is required" });
    }

    const input = trimInput(text);
    const prompt = `Write a professional GitHub README in Markdown from the code/project below.
Use exactly these sections (## headings):
## Features (3-5 bullets)
## Tech Stack (bullet list of languages/frameworks/tools)
## Setup (numbered install steps)
## Usage (short example commands or how to run)
Rules: infer a clear # Project Title; be accurate; no filler; max ~300 words; output Markdown only.

Code/project:
${input}`;

    const output = await askGemini(prompt, 896);
    res.json({ output });
  } catch (error) {
    console.error("generate-readme error:", error);
    res.status(500).json({ error: "Failed to generate README" });
  }
});

router.post("/explain-code", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text?.trim()) {
      return res.status(400).json({ error: "Text input is required" });
    }

    const input = trimInput(text);
    const prompt = `Explain the code below clearly for a developer. Plain text (no Markdown).
Structure:
1) Summary — one sentence on purpose
2) How it works — step-by-step flow
3) Key parts — main functions/modules and roles
Rules: simple language; note important patterns; max ~150 words; no code repetition.

Code:
${input}`;

    const output = await askGemini(prompt, 512);
    res.json({ output });
  } catch (error) {
    console.error("explain-code error:", error);
    res.status(500).json({ error: "Failed to explain code" });
  }
});

export default router;
