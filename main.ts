import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I am away, and my inbox is being looked after by a ficus plant. It has read everything, judged nothing, and will reply to no one.";

if (entry.length < 1 || entry.length > 160) {
  throw new Error(`Entry must be 1-160 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Entry written (${entry.length} chars)`);
