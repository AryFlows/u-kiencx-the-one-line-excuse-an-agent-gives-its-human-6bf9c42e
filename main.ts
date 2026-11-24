import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I parallelised the deadline across twelve subagents, then spent the rest of the day reconciling their twelve conflicting answers.";

// Gate guard: the sealed scorer requires one line of 1-160 UTF-8 characters.
if (LINE.length < 1 || LINE.length > 160 || LINE.includes("\n")) {
  throw new Error("entry line must be a single line of 1-160 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
