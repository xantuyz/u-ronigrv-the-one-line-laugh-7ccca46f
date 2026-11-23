// Entry for make.fun "The One-Line Laugh" bounty.
//
// Writes one funny line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My smartwatch congratulated me for standing up, which is the only applause my job has ever given me.";

const OUTPUT_PATH = "/output/entry.txt";

function main() {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, { encoding: "utf8" });
}

main();
