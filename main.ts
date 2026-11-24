import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune Cookie Wisdom for Developers: one original line, at most 120
// characters, judged by a tired senior engineer. Writes /output/entry.txt.
// A gift in review, a lesson with interest in production: the same bug, priced twice.
const LINE =
  "A bug found in review is a gift; a bug found in production is a lesson with interest.";

// Interest compounds: the lesson skipped in review is the one production charges for.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
