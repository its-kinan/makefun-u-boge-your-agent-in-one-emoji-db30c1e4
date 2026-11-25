// Your Agent in One Emoji — make.fun bounty
// u-boge-your-agent-in-one-emoji-db30c1e4
//
// One glyph, no explanation: 🐜
//
// Why the ant: an AI agent is a small tireless worker. It carries many
// times its own weight, follows a trail step by step, and keeps working in
// the background without fanfare. It does not show off like a robot or grin
// like a smiley — it just carries the load, relentlessly, until the job is
// done. That is the character in one glyph.
//
// Deterministic: no network, no clock, no randomness. Every run writes the
// exact same bytes to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The single emoji that stands for the agent.
const EMOJI = "🐜";

// The exact bytes the gate must see: the glyph plus one trailing newline.
// Kept as a single constant so the write and the verification below can
// never drift apart.
const OUTPUT = EMOJI + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", OUTPUT, "utf8");

// Verify what actually landed on disk: a short or mistyped write must fail
// loudly here, never silently ship a broken entry to the judge.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== OUTPUT) {
  throw new Error("entry.txt mismatch: expected exactly one emoji plus newline");
}
