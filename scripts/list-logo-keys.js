#!/usr/bin/env node
// Walks js/data.js and prints every unique logo key currently referenced
// (via `key:` or `vendorKey:` fields), plus which ones already have a file
// under logos/. Run with plain `node scripts/list-logo-keys.js` — not a
// build step, just a way to keep the "logos still needed" list in sync
// with data instead of hand-maintaining it.
"use strict";
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dataSrc = fs.readFileSync(path.join(root, "js", "data.js"), "utf8");
const logosDir = path.join(root, "logos");

const keys = new Set();
for (const m of dataSrc.matchAll(/\b(?:key|vendorKey)\s*:\s*"([^"]+)"/g)) {
  keys.add(m[1]);
}

const existing = new Set(
  fs.existsSync(logosDir)
    ? fs.readdirSync(logosDir).map((f) => f.replace(/\.(svg|png)$/i, ""))
    : []
);

const sorted = [...keys].sort();
console.log(sorted.length + " logo key(s) referenced in js/data.js:\n");
sorted.forEach((key) => {
  console.log((existing.has(key) ? "[x] " : "[ ] ") + key);
});

const missing = sorted.filter((k) => !existing.has(k));
console.log("\n" + missing.length + " still needed: " + missing.join(", "));
