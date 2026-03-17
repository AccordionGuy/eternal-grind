# Functional Specification: Eternal Grind (ZPRPG)

## 1. Project Overview
"Eternal Grind" is a "Zero-Player RPG" (ZPRPG) inspired by the classic parody *Progress Quest*. The game automates all traditional RPG elements—questing, combat, looting, and leveling. The user's role is purely observational.

---

## 2. UI Layout (Three-Column Dashboard)
The application shall use a fixed-height, full-width dashboard layout using Flexbox or Grid.

### A. Character Sheet (Left Column - 25% Width)
* **Identity:** Displays Character Name (from `NAMES`), Level, Race, and Class.
* **Stats Table:** A vertical list of numerical values for the 10 core stats (e.g., Strength, Existential Dread).
* **Equipment:** A list of 6-10 equipment slots showing absurd gear.
* **Spells/Abilities:** A scrolling list of learned "skills" that grows upon leveling up.

### B. The Engine of Progress (Center Column - 50% Width)
* **Location Header:** Displays the current location from the `LOCATIONS` list.
* **Primary Task Bar:** A large progress bar indicating the current action (e.g., "Contemplating the void").
* **Plot Bar:** A slower-moving bar tracking progress toward the next "Act."
* **Experience Bar:** A bar tracking progress toward the next Level.
* **Portrait:** A central area for a static character icon or simple CSS animation.

### C. Data Feed (Right Column - 25% Width)
* **Inventory (Top Half):** A scrolling list of items collected. Maximum capacity: 15 items.
* **Quest Log (Bottom Half):** A vertical scrolling log of events. It must automatically scroll to the bottom as new lines are appended.

---

## 3. Core Mechanics & Logic

### 3.1 Initialization
When the application starts:
1.  **Name Selection:** A name is chosen randomly from the `NAMES` list and remains permanent.
2.  **Character Build:** A `RACE` and `CLASS` are randomly assigned.
3.  **Starting Stats:** Each stat in the `STATS` list is assigned a random base value between 3 and 18.

### 3.2 The Game Loop
The application runs on a continuous timed loop:
1.  **Questing:** The "Task Bar" fills over a period of 3–8 seconds.
2.  **Completion:** Once the bar hits 100%:
    * A random **Monster** is "defeated."
    * A random **Item** (Adjective + Noun) is added to the Inventory.
    * A line is added to the **Quest Log** (e.g., "Executed a Low-Level Bugbear. Found: Rusty Sock of Mystery").
    * The **Experience Bar** increments.
3.  **Market Mode:** When the Inventory reaches 15 items:
    * The current task changes to "Heading to market to sell junk."
    * After a short delay, the Inventory is cleared and the character returns to questing.
4.  **Leveling Up:** When the Experience Bar reaches 100%:
    * The Character Level increments.
    * A random **Stat** increases by 1.
    * A new **Spell** is randomly selected and added to the spell list.
    * The Experience Bar resets.

---

## 4. Technical Requirements
* **State:** The application must maintain a state object containing the character's profile, stats, inventory list, and log history.
* **Styling:** A "Retro Win95" or "Classic MMO" aesthetic with high-contrast borders.
* **Performance:** The log should prune entries older than 100 lines to maintain performance.

---

## 5. Data Appendix

### Character Names
* Kevin from Accounting, Sir Tap-A-Lot, The Great Barnaby, User_772, Mistake #4, Sir Not-Appearing-In-This-Game, A Literal Bag of Flour, Lord Helvetica, Chadwick the Unready, Karen of the Suburbs, Glitchy McGlitchface, The Placeholder, Grommet the Slightly Agitated, Barb the Librarian, Sir Sells-Everything, Kyle the Monster Energy Enthusiast, Grandmaster Procrastinator, The Unpaid Intern, Sir Buffering..., Standard Hero 01.

### Races
* Sentient Toaster, Depressed Elf, Low-Carb Orc, Middle-Management Dwarf, Glitch in the Matrix, Half-Empty Human, Sentimental Slime, Vague Shadow, Procrastinating Pixie, Bureaucratic Beholder, Existential Ghost.

### Classes
* Spreadsheet Warrior, Chronic Procrastinator, Underpaid Mage, Professional Mourner, Existentialist Rogue, Lunch Knight, Intermittent Faster, Coffee Warlock, Passive-Aggressive Paladin, Technical Support Druid, Tax Accountant.

### Tasks
* Debating a fence post, Polishing a rusty nail, Contemplating the void, Waiting for a sign, Filing a 1040-EZ, Staring into the middle distance, Organizing a sock drawer, Explaining the internet to a rock, Searching for a lost remote, Counting ceiling tiles, Simulating a personality, Buffing out a scratch in reality.

### Locations
* The Forest of Mild Inconvenience, The Cave of Echoing Sighs, Downtown Boredom, The Desert of Dry Humor, Mount Mediocrity, The Swamps of 'I'll Do It Tomorrow', The Suburbs of Despair.

### Item Adjectives
* Dull, Polished, Forbidden, Rusty, Lamentable, Insignificant, Glowing, Slightly Damp, Overpriced, Mediocre, Legendary-ish.

### Item Nouns
* Scissors of Regret, Pebble of Mediocrity, Scone of Power, Lint of Destiny, Paperclip of Hope, Broken Twig, Expired Coupon, Sock of Mystery, Unfinished Novel, Jar of Pickled Thoughts.

### Monsters
* A Literal Metaphor, The Concept of Ennui, A Low-Level Bugbear, An Imaginary Friend, A Confused Salesman, A Dust Bunny of Doom, The Ghost of a Dead Pixel, A Sentient Terms of Service Agreement.

### Spells
* Aggressive Sighing, Metaphysical Poke, Summon Minor Annoyance, Greater Procrastination, Flash of Inadequacy, Power Word: 'Whatever', Cloud of Confusion, Internal Monologue.

### Stats
* Strength, Constitution, Dexterity, Intelligence, Wisdom, Charisma, Patience, Luck, Caffeine Level, Existential Dread.