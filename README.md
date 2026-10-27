# Saaransh · सारांश

**India's report tracker.** Saaransh explains CAG audits, NITI Aayog reports and official surveys in plain language, in English and Hindi. For each report it shows:

- the money flagged
- the findings
- the government's reply
- the sources
- exam practice

## What's inside

- **Dashboard**: money flagged across CAG audits, reports decoded by year, a rotating spotlight, every finding as a dot, who published what, flagged amounts on a log scale, a state map, the latest reports and a timeline.
- **Reports**: a searchable, filterable library. Each report opens in a reader with tabs for Overview, Findings, Numbers, Response & next, Exam corner and Sources.
- **Figures, Insights, States**: key numbers, money to scale, long-run trends, patterns that repeat across audits, and what the reports say about each state.
- **Practice and Learn**: estimation games, MCQs, flashcards, mains questions, how the CAG works, and a glossary.
- **English / हिंदी**: one switch translates the whole app, including every report and glossary term.
- **Light and dark themes**, keyboard shortcuts (`/` to search, `g` then a letter to jump), and saved reports. The theme and saved reports are kept in the browser.

## Tech

A static site with no build step and no framework: plain HTML, CSS and JavaScript. It deploys to any static host.

```
index.html              App shell, head, markup
404.html                Not-found page
assets/css/app.css      All styles (light and dark tokens)
assets/js/
  data.js               Original reports, glossary, trends, quiz, states
  reports-v2.js         Detailed reports (spec format) and site content
  reports-2025-26.js    Reports added for 2025 and 2026
  reports-hi.js         Hindi text for every report and glossary term
  app.js                The app: routing, views, charts, reader, search
  i18n.js               English/Hindi switch and interface dictionary
favicon.svg, favicon.ico, icons/, site.webmanifest, og-image.jpg
vercel.json             Clean URLs, security headers, caching
tools/hindi/            Scripts to translate new reports
```

## Run locally

```bash
npx serve .
# or
python3 -m http.server 8080
```

Open http://localhost:8080. Opening `index.html` straight from disk won't work, because asset paths start with `/`.

## Deploy on Vercel

1. In Vercel, choose **Add New → Project** and import this repository.
2. Set **Framework Preset** to **Other**. Leave the build command empty and the output directory as the default (the repository root).
3. Deploy. Every push to `main` redeploys.

Once you have a domain, consider adding absolute URLs to the `og:image` and `twitter:image` tags in `index.html` so link previews work on every platform.

## Adding a report

1. Add an entry to `window.SPEC_REPORTS` in `assets/js/reports-2025-26.js`, copying the shape of an existing entry. The report then appears everywhere: dashboard, library, search, state map, timeline and practice.
2. If it's a CAG audit with a money figure, set `flagged` (₹ crore) and a `flaggedNote` explaining what the amount is.
3. Add the Hindi version:
   ```bash
   node tools/hindi/extract.js      # writes tools/hindi/work/en.json with untranslated text
   # translate the values into tools/hindi/work/hi.json (keep keys, numbers and [[key|...]] markup)
   node tools/hindi/merge.js        # merges into assets/js/reports-hi.js
   ```
4. Raise the `?v=` number on the script tags in `index.html` so browsers fetch the new files.

## Content note

Saaransh is an independent explainer. It is not affiliated with the CAG, NITI Aayog or any government body. Figures come from the reports and from published coverage cited in each report's Sources tab, so check the original before quoting a figure. The Hindi translations were machine-assisted.
