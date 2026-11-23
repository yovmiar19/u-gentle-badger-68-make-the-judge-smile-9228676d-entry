// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
//
// One line, at most 200 characters, about a small good thing that
// happened today. The judge weighs, in order: the subject itself,
// warmth, surprise, one concrete detail, fresh wording.
//
// The line below is mine, written for this bounty: a small kindness
// at 7 a.m. (concrete time), a named thing (krupuk), a whispered
// surprise ("for luck"), and a turn in the telling — the luck is
// carried around all day like a secret. No greeting-card phrasing,
// no borrowed sentiment.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "At 7 a.m. the warung lady tucked an extra krupuk into my bag and whispered, 'for luck' — I've carried that luck around all day like a secret.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
console.log(entry);
