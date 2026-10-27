// Lists the English text that still needs a Hindi translation.
// Usage: node tools/hindi/extract.js            -> reports with no Hindi yet
//        node tools/hindi/extract.js --all      -> every report
// Writes tools/hindi/work/en.json  ({ reportId: { "field.path": "English" } }).
// Translate the values (keep ids, paths, numbers and "[[key|" markup), save as work/hi.json, then run merge.js.
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..", ".."), JS = path.join(ROOT, "assets", "js");
const ctx = { window: {}, localStorage: { getItem: () => "en" } }; vm.createContext(ctx);
for (const f of ["data.js", "reports-v2.js", "reports-2025-26.js", "reports-hi.js"]) vm.runInContext(fs.readFileSync(path.join(JS, f), "utf8"), ctx);
const W = ctx.window, have = W.HI_TEXT || {}, all = process.argv.includes("--all");
const out = {};
const add = (id, p, v) => { if (typeof v === "string" && /[a-z]{2}/i.test(v)) (out[id] = out[id] || {})[p] = v; };
const walk = (id, o, pre, skip) => {
  if (o == null) return;
  if (typeof o === "string") return add(id, pre, o);
  if (Array.isArray(o)) return o.forEach((x, i) => walk(id, x, pre + "." + i, skip));
  if (typeof o === "object") for (const k in o) if (!skip.includes(k)) walk(id, o[k], pre ? pre + "." + k : k, skip);
};
const SK1 = ["id", "body", "level", "state", "topic", "year", "month", "date", "keys", "src", "ref", "money", "c", "v"];
for (const r of W.REPORTS) {
  if (!all && have[r.id]) continue;
  const o = {}; for (const k of ["title", "hook", "big", "tldr", "background", "checked", "simple", "detailed", "findings", "stats", "charts", "other", "next", "act"]) if (r[k] != null) o[k] = r[k];
  walk(r.id, o, "", SK1);
}
const SK2 = ["id", "body", "kind", "reportNo", "sector", "date", "dateISO", "flagged", "en", "hi", "glossary", "related", "src", "kw", "a", "type", "max", "sev", "amt", "ref", "state"];
for (const s of W.SPEC_REPORTS) {
  const id = "spec:" + s.id; if (!all && have[id]) continue;
  const o = {}; for (const k in s) if (!SK2.includes(k)) o[k] = s[k];
  walk(id, o, "", SK2);
}
// figures, dates, colour keys and state names used for lookups stay in English
for (const id in out) for (const p in out[id])
  if (/^(nums|timeline)\.\d+\.0$/.test(p) || /^stats\.\d+\.v$/.test(p) || p === "big.v" || /^groups\.\d+\.(1|2\.\d+)$/.test(p)) delete out[id][p];
fs.mkdirSync(path.join(__dirname, "work"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "work", "en.json"), JSON.stringify(out, null, 1));
console.log(`${Object.keys(out).length} report(s) written to tools/hindi/work/en.json`);
