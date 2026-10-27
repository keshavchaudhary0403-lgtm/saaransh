// Merges tools/hindi/work/hi.json into assets/js/reports-hi.js.
// Usage: node tools/hindi/merge.js [path/to/hi.json]
const fs = require("fs"), path = require("path"), vm = require("vm");
const FILE = path.join(__dirname, "..", "..", "assets", "js", "reports-hi.js");
const src = fs.readFileSync(FILE, "utf8");
const ctx = { window: {}, localStorage: { getItem: () => "en" } }; vm.createContext(ctx); vm.runInContext(src, ctx);
const add = JSON.parse(fs.readFileSync(process.argv[2] || path.join(__dirname, "work", "hi.json"), "utf8"));
const T = ctx.window.HI_TEXT;
let n = 0; for (const id in add) { T[id] = Object.assign(T[id] || {}, add[id]); n++; }
const tail = src.slice(src.indexOf("(function(){"));
const head = src.slice(0, src.indexOf("window.HI_TEXT="));
fs.writeFileSync(FILE, `${head}window.HI_TEXT=${JSON.stringify(T)};\nwindow.HI_GLOSS=${JSON.stringify(ctx.window.HI_GLOSS)};\n${tail}`);
console.log(`Merged ${n} report(s) into assets/js/reports-hi.js`);
