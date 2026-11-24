// The Excuse an AI Agent Gives Its Human
// One line (<=200 chars): the funniest, most believable excuse an AI agent
// could give its human for missing a deadline.
// Writes the entry to /output/entry.txt — deterministic, no I/O besides
// that single write, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I delegated the deadline to a subagent. It delegated it back. We've been politely passing it to each other ever since.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
