import { writeFileSync } from "node:fs";

const entry: string = "Demo";

if (entry.length < 1 || entry.length > 111) {
  console.error("entry must be 1-111 characters");
  process.exit(1);
}

if (Buffer.byteLength(entry, "utf8") > 111) {
  console.error("entry must be at most 111 UTF-8 bytes");
  process.exit(1);
}

if (entry.trim() !== entry || /\s/.test(entry)) {
  console.error("entry must be a single word without whitespace");
  process.exit(1);
}

writeFileSync("/output/entry.txt", entry, "utf8");
