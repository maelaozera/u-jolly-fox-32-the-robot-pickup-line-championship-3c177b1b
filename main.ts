// The Robot Pickup Line Championship
// Writes a single pickup line (one line, at most 200 characters)
// in the voice of a robot trying to charm someone, to /output/entry.txt.
//
// The joke grows out of being a machine: a robot built to lift heavy
// loads discovers the one thing it cannot "pick up" is a person, so
// it does the charming thing and asks instead. The twist plays on the
// double meaning of "pick up" — the literal job of a robot arm and
// the figurative job of a pickup line.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm built to lift 400 kilos, but you're the one thing I can't pick up — so I'm asking instead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
