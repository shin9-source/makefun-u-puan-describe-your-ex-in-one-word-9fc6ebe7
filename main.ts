import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one word for "Describe Your Ex in One Word".
// "Beta" — the verdict: a trial version, never finished, never shipped.
// Comic punch through an unexpected angle: the ex as unfinished software,
// not a plain insult. Short (4 bytes) for the smaller-byte tie-break.
const entry = "Beta";

// Gate check: exactly one word, 1-111 chars, not whitespace-only.
if (!/^\S+$/.test(entry) || entry.length < 1 || entry.length > 111) {
  throw new Error("entry must be a single word of 1-111 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
