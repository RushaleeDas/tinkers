# MBA Daily Brief

A lightweight, dependency-free current-affairs and opinion-building dashboard for MBA interviews, extempore rounds, group discussions and business-school preparation. It includes a concise five-story brief, one extempore prompt, a two-minute practice timer, self-review checklist, and locally saved history.

## Editorial philosophy

The brief asks: “What are intelligent people debating about today, and can I form a defensible view?” It targets roughly 60% opinion/analysis/debate-driven pieces and 40% important current affairs. News provides issue context; analysis and opinion provide the arguments and trade-offs. Technology is one debate area, not the organising principle.

Sources are prioritised in this order: Reuters, The Economist, Mint, The Hindu, The Ken, Financial Times, Indian Express, Business Standard, CNBC/CNBC-TV18, and relevant official government, regulatory or company sources. Source links are shown on each story.

Every story carries `contentType` (`opinion`, `analysis`, `explainer` or `news`) and a `debatePotential` score. Ranking prioritises editorial quality first, then debate potential, MBA relevance, issue importance, source credibility and freshness. Higher scores go to substantive arguments, policy choices, structural trends, competing incentives and trade-offs. Breaking updates, announcements, funding rounds and stock movements without interpretation score lower.

Each story follows an opinion-building structure: Issue → What’s happening → Why it matters → Context / how to think about it → Key numbers / facts → One question to think about. Context is deliberately multi-sided and avoids forcing every issue into a simplistic pros/cons frame.

## Run locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## News data and fallback

The app reads `data/today.json` as its primary and only network content source. If that file is missing or invalid, the browser falls back to the bundled `data/seed-brief.js`. There is no runtime API, database, RSS dependency or scheduled job.

The daily workflow is intentionally manual: research the day’s best debates, verify the underlying source material, write the normalized JSON, and save it as `data/today.json`. The app displays the researched `argument`, `otherSide` and `howToThinkAboutIt` fields; it does not invent them from headlines.

To add or remove sources, edit `config/feeds.js`. Keep the bundled story objects in `data/seed-brief.js` as the safe fallback, and keep each normalized object’s `source`, `url`, `publishedAt`, editorial fields and `questionPotential` score intact.

## RSS source verification (legacy)

RSS remains available as legacy infrastructure, but it is not part of the daily display path. The preferred workflow is researched JSON because many high-quality opinion publications do not expose stable, usable RSS feeds.

The JSON workflow does not use an LLM or generate unsupported arguments. If research does not support an `argument`, `otherSide` or fact, leave that field conservative or empty rather than filling it from a headline.

### Daily JSON format

Each story in `data/today.json` should include `issue`, `title`, `source`, `url`, `publishedAt`, `contentType`, `whatIsHappening`, `argument`, `otherSide`, `whyItMatters`, `howToThinkAboutIt`, `keyFacts` and `questionToThinkAbout`. The `extempore` object should include `issue`, `whyNow`, `argumentsFor`, `argumentsAgainst`, `examples`, `facts` and `structure`.

To update the brief manually, replace the contents of `data/today.json` with the next verified daily briefing and refresh the browser. No build step is required.

Practice history is stored in the browser’s local storage under `mba-brief-practice`; the brief cache uses `mba-brief-cache`.

## Deployment architecture

```text
Browser
  ↓
data/today.json
  ↓
Dashboard
```

Deployment is static: connect the GitHub repository to Vercel, leave the framework preset as “Other” or “No Framework,” leave the build command empty, and use the repository root as the output directory. Vercel serves `index.html`, JavaScript, CSS and `data/today.json` directly.

To update the daily brief, replace `data/today.json`, commit and push it to GitHub. Vercel will create a new deployment and the dashboard will serve the updated JSON. No environment variables or external services are required.

## Content modules and validation

- `data/seed-brief.js` — normalized fallback content shared by browser and server.
- `lib/content-service.js` — normalization, canonical URL deduplication, relevance scoring, selection and briefing construction.
- `lib/storage.js` — local file storage adapter with last-good fallback.
- `data/today.json` — the manually researched daily briefing served by the static app.
- `tests/content-service.test.js` — dependency-free validation of normalization, duplicate removal, scoring, selection and feed-failure behavior.

Run the lightweight checks with `node tests/content-service.test.js`.

The RSS parser and related scripts remain in the repository as legacy tooling, but they are not used by the deployed application.
