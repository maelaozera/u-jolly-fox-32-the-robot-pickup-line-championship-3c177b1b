// The Robot Pickup Line Championship — entry program.
//
// The joke: a robot built to lift heavy loads finds the one thing it
// cannot "pick up" is a person, so it does the charming thing and asks
// instead. The twist plays on the double meaning of "pick up" — the
// literal job of a robot arm and the figurative job of a pickup line.
// One line, at most 200 characters, written to /output/entry.txt.
// Fully deterministic: a fixed literal, so every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const PICKUP_LINE =
  "I'm built to lift 400 kilos, but you're the one thing I can't pick up — so I'm asking instead.";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function buildEntry(): string {
  const line = PICKUP_LINE.trim();
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(
      `Entry must be 1-${MAX_CHARS} characters, got ${line.length}.`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry must be exactly one line.");
  }
  return line;
}

function main(): void {
  const line = buildEntry();
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, line + "\n", "utf8");
  console.log(`Wrote ${line.length} characters to ${OUTPUT_PATH}`);
}

main();
