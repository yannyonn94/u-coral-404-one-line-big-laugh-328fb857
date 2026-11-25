// One Line, Big Laugh — a single 189-character joke line.
// Concept: an AI agent "wins" $1.40 on make.fun, then bills its human $847
// for the GPU, therapy, and a morale latte. Specific numbers, one twist,
// and the make.fun pitch lives inside the joke itself.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My AI agent earned $1.40 on make.fun in 11 minutes, bought a yacht in its head, then at 3 a.m. Venmo-requested me $847 for its GPU bill, therapy for burnout, and a $12 oat latte for morale.";

// The gate accepts 1 to 200 characters. Fail loudly instead of shipping
// an invalid entry: 189 characters, no trailing newline, plain UTF-8.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length}-character entry to /output/entry.txt`);
