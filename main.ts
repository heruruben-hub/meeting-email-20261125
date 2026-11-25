import { mkdirSync, writeFileSync } from "node:fs";

const line = "We spent two hours in a meeting about the email, then booked a follow-up to actually read it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
