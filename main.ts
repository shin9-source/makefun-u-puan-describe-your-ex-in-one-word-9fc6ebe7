import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Warmup";

if (entry.trim().length === 0) {
  throw new Error("entry must not be blank");
}

if (/\s/.test(entry)) {
  throw new Error("entry must be a single word");
}

if (Buffer.byteLength(entry, "utf8") > 111) {
  throw new Error("entry exceeds 111 UTF-8 bytes");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
