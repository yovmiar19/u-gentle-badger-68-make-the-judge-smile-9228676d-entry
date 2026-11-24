// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
//
// Rev1: the line below is mine, written in this session for the
// mixed-picks revision. One line, 119 characters, about a small
// good thing that happened today: a warung lady's extra krupuk
// at 7 a.m., whispered "for luck" — and the narrator protects
// that luck all day, even eating plain rice at lunch to keep
// it going. The judge weighs, in order: subject, warmth,
// surprise, one concrete detail, fresh wording. Warmth first,
// then the surprise payoff in the second half of the line.
// Kept short on purpose: the payoff lands fast.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

const entry =
  "At 7 a.m. the warung lady slipped an extra krupuk into my bag—so I ate plain rice at lunch just to keep the luck going.";

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_PATH, entry, "utf8");
  console.log(`entry.txt: ${entry.length} characters`);
  console.log(entry);
}

main();
