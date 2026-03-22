# Repository Guidelines

## Project Structure & Module Organization

Eternal Grind is a zero-player RPG (a parody idle game inspired by *Progress Quest*) built as a self-contained vanilla web application with no build tools, frameworks, or dependencies.

- `index.html` — Three-column dashboard layout (Character Sheet, Engine of Progress, Data Feed)
- `game.js` — All game logic in a single file: data arrays, helpers, state management, game loop, and DOM rendering
- `style.css` — Retro Windows 95 aesthetic using monospace fonts and high-contrast borders
- `docs/Eternal Grind spec.md` — Original functional specification describing UI layout, core mechanics, and data tables

The game runs entirely client-side. Open `index.html` in a browser to play — no server or build step required.

## Architecture Overview

`game.js` is structured in sections:

1. **Data constants** — Arrays of names, races, classes, tasks, locations, items, monsters, spells, stats, equipment slots, and plot acts
2. **Helper functions** — `pick()` for random selection, `randInt()` for random integers
3. **State & initialization** — Character generation, stat rolling, starting equipment
4. **Game loop** — Timed loop that fills progress bars, triggers task completion, handles inventory overflow (market mode), leveling, and plot advancement
5. **DOM rendering** — Direct DOM manipulation to update the three-column dashboard

All state lives in a single object; there is no persistence layer (refreshing starts a new game).

## Development

No build, lint, or test tooling is configured. To run locally:

```
open index.html
```

Or serve with any static file server.

## Commit Conventions

Based on git history: short imperative or past-tense subject lines without conventional commit prefixes. No PR template is configured.
