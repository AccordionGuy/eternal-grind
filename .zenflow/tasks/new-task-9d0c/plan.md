# Eternal Grind (ZPRPG) - Implementation Plan

## Configuration
- **Artifacts Path**: `.zenflow/tasks/new-task-9d0c`

---

## Summary

Single-page Zero-Player RPG in vanilla HTML/CSS/JS (no build tools, no frameworks). One `index.html`, one `style.css`, one `game.js`. Three-column dashboard with Win95/MMO retro aesthetic. All game logic runs in a `setInterval` loop.

---

## Workflow Steps

### [x] Step: Planning
<!-- chat-id: c9cce5e5-02e1-41d6-a948-08ee8dbcffcb -->

Wrote the implementation plan below.

### [x] Step: Project Setup & Game Data
<!-- chat-id: fe9f8794-6ccb-4823-a3f7-0662e79cb7b2 -->
- Create `.gitignore` (node_modules, dist, *.log, .DS_Store)
- Create `index.html` with three-column dashboard skeleton
- Create `style.css` with Win95/MMO retro aesthetic (high-contrast borders, pixel fonts fallback, panel backgrounds)
- Create `game.js` with all data arrays:
  - NAMES, RACES, CLASSES, TASKS, LOCATIONS, ITEM_ADJECTIVES, ITEM_NOUNS, MONSTERS, SPELLS, STATS from spec
  - `EQUIPMENT_SLOTS`: ["Helm", "Torso", "Left Hand", "Right Hand", "Legs", "Boots", "Neck Amulet", "Ring (Existential)"] — absurdist slot names
  - `ACTS`: ["Act I: The Tutorial Nobody Asked For", "Act II: The Grinding Begins", "Act III: Despair in Four Stages", "Act IV: The Post-Credits Confusion"]
- Define `state` object: character (name, level, race, class), stats map, equipment map, spells[], inventory[], log[], xpProgress, plotProgress, taskProgress, currentAct
- Implement `initCharacter()`: random name, race, class, stats (3–18 each), random starting item per equipment slot
- Call `initCharacter()` on page load and render initial UI

### [x] Step: UI Rendering — Character Sheet (Left Column)
- `renderCharacterSheet()`: populate name, level, race, class
- `renderStats()`: render stat table (name + value)
- `renderEquipment()`: render equipment slot list
- `renderSpells()`: render spell list (scrollable)
- All functions read from `state` and update DOM elements

### [x] Step: UI Rendering — Engine of Progress (Center Column)
- `renderLocation()`: update location header from `state.location`
- `renderTaskBar()`: update task bar label + fill % from `state.taskProgress`
- `renderPlotBar()`: update plot bar fill % from `state.plotProgress`
- `renderXPBar()`: update XP bar fill % from `state.xpProgress`
- Static character portrait (CSS emoji or ASCII art div)

### [x] Step: UI Rendering — Data Feed (Right Column)
- `renderInventory()`: render inventory list (max 15 items shown)
- `renderLog()`: append new lines to quest log, prune to 100 lines, auto-scroll to bottom

### [x] Step: Game Loop & Core Mechanics
- `startGameLoop()`: `setInterval` at ~100ms tick
- **Questing**: increment `taskProgress` each tick (fills in 3–8s, randomized per task)
- **Task completion**: on 100% — defeat monster, generate item (adjective + noun), add log entry, increment XP bar, reset task with new random task + duration
- **Market mode trigger**: when inventory reaches 15 items, pause the loop and enter market mode (handled separately per line below)
- **Leveling up**: when XP bar hits 100% — increment level, +1 random stat, add random spell, reset XP, log the event
- **Plot bar**: increments by 2% per task completion (50 completions = one act); on act completion advance `currentAct` index and log it
- **Market mode**: task bar freezes at 100% and label changes to "Heading to market to sell junk"; after 3s delay inventory clears and questing resumes
- Re-render affected UI components after each state change
