# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Tamir Akademisi: a free, brand-independent Turkish course on phone/tablet repair. Plain HTML/CSS/JS single-page app, no build step, no dependencies, no backend, no tests. Installable as a PWA and works offline. Progress lives only in the browser's `localStorage`.

All identifiers, comments, UI text and lesson content are in Turkish (e.g. `ilerleme` = progress, `ders` = lesson, `modul` = module, `kaydet` = save). Keep new code and content in Turkish. Lesson text addresses the reader as "sen".

## Running and deploying

- Quick look: open `index.html` directly. The service worker only registers over http(s), so to test offline/PWA behaviour serve the folder, e.g. `python -m http.server 8000`.
- Deploy: pushing to `main` publishes the repo root to GitHub Pages via `.github/workflows/pages.yml` (`.nojekyll` keeps files served as-is).

## Architecture

Scripts load in order from `index.html`, sharing one global namespace `window.TA`:

1. `js/veri/moduller.js` defines `TA.moduller` (the 8-module catalog: `id`, `no`, `baslik`, `ozet`) and an empty `TA.icerik`.
2. `js/veri/modul-<id>.js` files each register content as `TA.icerik[<id>] = { dersler: [...], quiz: [...] }`. Only `modul-temeller.js` exists so far; a module without an entry in `TA.icerik` is automatically shown as "Yakında" (locked) on the home page.
3. `js/app.js` is an IIFE that renders everything into `<main id="uygulama">` as HTML strings, routed by `location.hash`:
   `#/` home · `#/modul/<mid>` · `#/ders/<mid>/<did>` · `#/quiz/<mid>` · `#/hakkinda`.

Data shapes:
- Lesson: `{ id, baslik, sure /* minutes */, html /* template string */ }`. Lesson `html` is trusted and injected raw; titles and quiz text go through `kacis()` for escaping.
- Quiz question: `{ soru, secenekler: [...], dogru /* index */, aciklama }`.
- Progress (`localStorage['ta-ilerleme']`): `{ biten: { "<mid>/<did>": true }, quiz: { <mid>: correctCount } }`. Lesson completion is recorded by clicking a link with the `data-bitir` attribute. Theme choice is stored in `ta-tema` and applied by an inline script in `index.html` before first paint.

Lesson HTML uses CSS classes from `css/style.css`: callout boxes `<div class="kutu ipucu|uyari|tehlike|not"><span class="kutu-ikon">…</span><div>…</div></div>`, numbered steps `<ol class="adimlar">`, tool grid `.alet-izgara > .alet`, and inline SVG diagrams in `<figure class="cizim">`. SVGs should color via CSS variables (`currentColor`, `var(--vurgu)`, `var(--uyari)`, `var(--tehlike)`) so they work in both themes.

Theming: all colors are tokens on `:root` in `css/style.css`, redefined for dark mode under `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])` and `[data-theme="dark"]`. Add new colors as tokens in all of these blocks.

## Adding a module or changing files

To add module content:
1. Create `js/veri/modul-<id>.js` (the `<id>` must match the entry in `moduller.js`).
2. Add its `<script>` tag in `index.html` after `moduller.js` and before `app.js`.
3. Add the path to `DOSYALAR` in `sw.js`.

Whenever any cached file changes, bump `SURUM` in `sw.js` (e.g. `ta-v1` → `ta-v2`) so installed copies refresh their cache. The service worker is network-first with cache fallback.
