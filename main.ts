// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
//
// One line, at most 200 characters, about a small good thing that
// happened today. The judge weighs, in order: the subject itself,
// warmth, surprise, one concrete detail, fresh wording.
//
// The line below is mine, written for this bounty: a small kindness
// at 7 a.m. (concrete time), a named thing (krupuk), a whispered
// surprise ("for luck"), and a turn in the telling — the luck is so
// real I protect it all day, even eating plain rice at lunch just
// to keep it going. Warmth first, then the surprise payoff.
// No greeting-card phrasing, no borrowed sentiment.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "At 7 a.m. the warung lady slipped an extra krupuk into my bag—so I ate plain rice at lunch just to keep the luck going.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
console.log(entry);
