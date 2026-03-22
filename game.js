// ============================================================
// Eternal Grind — ZPRPG  |  game.js
// ============================================================

// === DATA ===

const NAMES = [
  "Kevin from Accounting", "Sir Tap-A-Lot", "The Great Barnaby",
  "User_772", "Mistake #4", "Sir Not-Appearing-In-This-Game",
  "A Literal Bag of Flour", "Lord Helvetica", "Chadwick the Unready",
  "Karen of the Suburbs", "Glitchy McGlitchface", "The Placeholder",
  "Grommet the Slightly Agitated", "Barb the Librarian",
  "Sir Sells-Everything", "Kyle the Monster Energy Enthusiast",
  "Grandmaster Procrastinator", "The Unpaid Intern",
  "Sir Buffering...", "Standard Hero 01"
];

const RACES = [
  "Sentient Toaster", "Depressed Elf", "Low-Carb Orc",
  "Middle-Management Dwarf", "Glitch in the Matrix",
  "Half-Empty Human", "Sentimental Slime", "Vague Shadow",
  "Procrastinating Pixie", "Bureaucratic Beholder", "Existential Ghost"
];

const CLASSES = [
  "Spreadsheet Warrior", "Chronic Procrastinator", "Underpaid Mage",
  "Professional Mourner", "Existentialist Rogue", "Lunch Knight",
  "Intermittent Faster", "Coffee Warlock", "Passive-Aggressive Paladin",
  "Technical Support Druid", "Tax Accountant"
];

const TASKS = [
  "Debating a fence post", "Polishing a rusty nail",
  "Contemplating the void", "Waiting for a sign",
  "Filing a 1040-EZ", "Staring into the middle distance",
  "Organizing a sock drawer", "Explaining the internet to a rock",
  "Searching for a lost remote", "Counting ceiling tiles",
  "Simulating a personality", "Buffing out a scratch in reality",
  "Daydreaming about cheese", "Alphabetizing soup cans",
  "Sorting a spreadsheet column", "Doom-scrolling LinkedIn",
  "Applying to Blue Man Group", "Pressing a crosswalk button",
  "Adjusting the thermostat", "Turning the pillow to the cool side"
];

const LOCATIONS = [
  "The Forest of Mild Inconvenience", "The Cave of Echoing Sighs",
  "Downtown Boredom", "The Desert of Dry Humor",
  "Mount Mediocrity", "The Swamps of 'I'll Do It Tomorrow'",
  "The Suburbs of Despair", "The Villages (Florida)",
  "The Complaints Department", "The Closet",
  "The Basement of No Return", "The Attic of Surrender"
];

const ITEM_ADJECTIVES = [
  "Dull", "Polished", "Forbidden", "Rusty", "Lamentable",
  "Insignificant", "Glowing", "Slightly Damp", "Overpriced",
  "Mediocre", "Legendary-ish", "Moderately Sticky", "Dusty",
  "Bullet-Riddled", "Slightly Reeking", "Retro-Ish", "Somewhat Cursed"
];

const ITEM_NOUNS = [
  "Scissors of Regret", "Pebble of Mediocrity", "Scone of Power",
  "Lint of Destiny", "Paperclip of Hope", "Broken Twig",
  "Expired Coupon", "Sock of Mystery", "Unfinished Novel",
  "Jar of Pickled Thoughts", "1980s Goldstar TV", "Troll Doll",
  "Off-Brand Labubu", "McDonalds Sweet and Sour Sauce",
  "Ceramic Elvis Bust", "Ron Jon Surf Shop T-Shirt",
  "Sneakers of Minor Destiny", "Poker Chips of Fate"
];

const MONSTERS = [
  "A Literal Metaphor", "The Concept of Ennui", "A Low-Level Bugbear",
  "An Imaginary Friend", "A Confused Salesman",
  "A Dust Bunny of Doom", "The Ghost of a Dead Pixel",
  "A Sentient Terms of Service Agreement",
  "A Grumpy Barista", "Two Podcasters Who Won't Shut Up",
  "A Five-Year-Old on a Sugar Rush", "The HR Department",
  "A Belligerent Walmart Greeter", "\"Screech\" from \"Saved By the Bell\""
];

const SPELLS = [
  "Aggressive Sighing", "Metaphysical Poke",
  "Summon Minor Annoyance", "Greater Procrastination",
  "Flash of Inadequacy", "Power Word: 'Whatever'",
  "Cloud of Confusion", "Internal Monologue"
];

const STATS = [
  "Strength", "Constitution", "Dexterity", "Intelligence",
  "Wisdom", "Charisma", "Patience", "Luck",
  "Caffeine Level", "Existential Dread"
];

const EQUIPMENT = {
  "Helm": [
    "Dented Bucket", "Thinking Cap", "Tin Foil Hat", "Visor of Denial",
    "Crown of Mild Authority", "Headband of Overthinking",
    "Hard Hat of Soft Skills", "Beanie of Bewilderment"
  ],
  "Torso": [
    "Ill-Fitting Chainmail", "Hawaiian Shirt of Protection",
    "Sweater Vest of Resilience", "Bathrobe of Power",
    "Breastplate of Participation", "Hoodie of Invisibility",
    "Polo Shirt of Middle Management", "Poncho of Plausible Deniability"
  ],
  "Hands": [
    "Rubber Chicken", "Stapler of Justice", "Foam Finger of Fate",
    "Spatula of Smiting", "TV Remote of Command", "Rolled-Up Newspaper",
    "Pool Noodle of Reckoning", "Half-Eaten Sandwich"
  ],
  "Legs": [
    "Cargo Shorts of Holding", "Sweatpants of Agility",
    "Khakis of Conformity", "Jorts of Valor",
    "Leggings of Slight Discomfort", "Corduroy Pants of Stealth",
    "Pajama Bottoms of Indifference", "Kilt of Questionable Decisions"
  ],
  "Boots": [
    "Crocs of Speed", "Flip-Flops of Fury", "Sandals with Socks",
    "Galoshes of Grandeur", "Slippers of Sneaking",
    "Steel-Toed Loafers", "Platform Shoes of Intimidation",
    "Velcro Sneakers of Convenience"
  ],
  "Neck Amulet": [
    "Lanyard of Authority", "Whistle of Panic",
    "Mood Ring on a String", "USB Drive of Secrets",
    "Macaroni Necklace of Sentimental Value", "Tie of Reluctant Formality",
    "Scarf of Mysterious Origins", "Badge of Plausible Employment"
  ],
  "Ring (Existential)": [
    "Ring of Mild Concern", "Band of Adequate Effort",
    "Mood Ring of Existential Dread", "Decoder Ring of Disappointment",
    "Ring Pop of Power", "Signet Ring of 'I Guess'",
    "Friendship Bracelet (Repurposed)", "O-Ring of Mechanical Failure"
  ]
};

const ACTS = [
  "Act I: The Tutorial Nobody Asked For",
  "Act II: The Grinding Begins",
  "Act III: Despair in Four Stages",
  "Act IV: The Post-Credits Confusion",
  "Act V: That Wasn't the End",
  "Act VI: The Writer's Barely-Disguised Fetish",
  "Act VII: Mid-Season Filler",
  "Act VIII: Do You Really Read These?",
  "Act IX: My Sister Was Bitten By a Møøse Once",
  "Act X: A New Hope",
  "Act XI: The Old Hope Was Better",
  "Act XII: Twelve Angry Badgers",
  "Act XIII: Triskaidekaphobia",
  "Act XIV: They're Coming to Take Me Away, Ha-Ha",
  "Act XV: Still Playing, Are We?"
];

// === HELPERS ===

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateItem() {
  return pick(ITEM_ADJECTIVES) + " " + pick(ITEM_NOUNS);
}

// === STATE ===

var state = {
  name: "",
  level: 1,
  race: "",
  class_: "",
  stats: {},
  equipment: {},
  spells: [],
  inventory: [],
  log: [],
  xpProgress: 0,
  plotProgress: 0,
  taskProgress: 0,
  currentTask: "",
  taskPhase: "task",  // "task" or "battle"
  currentMonster: "",
  taskDuration: 0,   // ticks to fill the task bar
  tickCount: 0,
  currentAct: 0,
  location: "",
  marketMode: false,
  marketTimer: 0,
  loopId: null
};

// === INIT ===

function initCharacter() {
  state.name = pick(NAMES);
  state.race = pick(RACES);
  state.class_ = pick(CLASSES);
  state.level = 1;
  state.location = pick(LOCATIONS);

  // Stats 3-18
  state.stats = {};
  STATS.forEach(function (s) {
    state.stats[s] = randInt(3, 18);
  });

  // Starting equipment
  state.equipment = {};
  Object.keys(EQUIPMENT).forEach(function (slot) {
    if (slot === "Hands") {
      state.equipment["Left Hand"] = pick(EQUIPMENT["Hands"]);
      state.equipment["Right Hand"] = pick(EQUIPMENT["Hands"]);
    } else {
      state.equipment[slot] = pick(EQUIPMENT[slot]);
    }
  });

  // One starting spell
  state.spells = [pick(SPELLS)];

  state.inventory = [];
  state.log = [];
  state.xpProgress = 0;
  state.plotProgress = 0;
  state.taskProgress = 0;
  state.currentAct = 0;
  state.marketMode = false;
  state.marketTimer = 0;

  assignNewTask();
  addLog("A new hero emerges: " + state.name + ", " + state.race + " " + state.class_ + ".");
  addLog("Location: " + state.location);
}

function assignNewTask() {
  state.currentTask = pick(TASKS);
  state.taskPhase = "task";
  state.currentMonster = "";
  state.taskDuration = randInt(30, 80); // ticks at 100ms = 3-8 seconds
  state.taskProgress = 0;
  state.location = pick(LOCATIONS);
}

function assignBattle() {
  state.taskPhase = "battle";
  state.currentMonster = pick(MONSTERS);
  state.taskDuration = randInt(15, 40); // battles are shorter: 1.5-4 seconds
  state.taskProgress = 0;
}

// === LOG ===

function addLog(msg) {
  state.log.push(msg);
  if (state.log.length > 100) {
    state.log.shift();
  }
}

// === RENDER FUNCTIONS ===

// -- Character Sheet (Left Column) --

function renderCharacterSheet() {
  document.getElementById("char-name").textContent = state.name;
  document.getElementById("char-level").textContent = state.level;
  document.getElementById("char-race").textContent = state.race;
  document.getElementById("char-class").textContent = state.class_;
}

function renderStats() {
  var table = document.getElementById("stats-table");
  table.innerHTML = "";
  STATS.forEach(function (s) {
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = s;
    var td2 = document.createElement("td");
    td2.textContent = state.stats[s];
    row.appendChild(td1);
    row.appendChild(td2);
    table.appendChild(row);
  });
}

const EQUIPMENT_DISPLAY_SLOTS = [
  "Helm", "Torso", "Left Hand", "Right Hand",
  "Legs", "Boots", "Neck Amulet", "Ring (Existential)"
];

function renderEquipment() {
  var list = document.getElementById("equipment-list");
  list.innerHTML = "";
  EQUIPMENT_DISPLAY_SLOTS.forEach(function (slot) {
    var li = document.createElement("li");
    li.textContent = slot + ": " + (state.equipment[slot] || "—");
    list.appendChild(li);
  });
}

function renderSpells() {
  var list = document.getElementById("spell-list");
  list.innerHTML = "";
  state.spells.forEach(function (sp) {
    var li = document.createElement("li");
    li.textContent = sp;
    list.appendChild(li);
  });
}

// -- Engine of Progress (Center Column) --

function renderLocation() {
  document.getElementById("location").textContent = state.location;
}

function renderTaskBar() {
  var pct = Math.min(100, Math.round(state.taskProgress));
  document.getElementById("task-bar").style.width = pct + "%";
  var label;
  if (state.marketMode) {
    label = state.currentTask;
  } else if (state.taskPhase === "battle") {
    label = "Fighting " + state.currentMonster + " (" + pct + "%)";
  } else {
    label = state.currentTask + " (" + pct + "%)";
  }
  document.getElementById("task-label").textContent = label;

  // Update portrait emoji based on current phase
  var portrait = document.getElementById("portrait");
  if (state.taskPhase === "battle") {
    portrait.textContent = "\u2694\uFE0F";
  } else {
    portrait.textContent = "\uD83D\uDE47\uD83C\uDFFC\u200D\u2640\uFE0F";
  }
}

function renderXPBar() {
  var pct = Math.min(100, Math.round(state.xpProgress));
  document.getElementById("xp-bar").style.width = pct + "%";
}

function renderPlotBar() {
  var pct = Math.min(100, Math.round(state.plotProgress));
  document.getElementById("plot-bar").style.width = pct + "%";
  var actLabel = state.currentAct < ACTS.length ? ACTS[state.currentAct] : "Epilogue";
  document.getElementById("plot-label").textContent = actLabel + " (" + pct + "%)";
}

// -- Data Feed (Right Column) --

function renderInventory() {
  var list = document.getElementById("inventory-list");
  list.innerHTML = "";
  state.inventory.forEach(function (item) {
    var li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderLog() {
  var box = document.getElementById("quest-log");
  box.textContent = state.log.join("\n");
  box.scrollTop = box.scrollHeight;
}

// -- Render All --

function renderAll() {
  renderCharacterSheet();
  renderStats();
  renderEquipment();
  renderSpells();
  renderLocation();
  renderTaskBar();
  renderXPBar();
  renderPlotBar();
  renderInventory();
  renderLog();
}

// === GAME LOOP ===

function tick() {
  // Market mode: wait then clear inventory
  if (state.marketMode) {
    state.marketTimer++;
    // 3 seconds = 30 ticks at 100ms
    if (state.marketTimer >= 30) {
      state.marketMode = false;
      state.marketTimer = 0;
      state.inventory = [];
      addLog("Sold all junk at the market. Pockets feel lighter, soul unchanged.");
      assignNewTask();
      renderInventory();
      renderTaskBar();
      renderLocation();
      renderLog();
    }
    return;
  }

  // Increment task progress
  state.taskProgress += (100 / state.taskDuration);

  if (state.taskProgress >= 100) {
    if (state.taskPhase === "task") {
      // Task done — start a battle
      addLog("\u2611 Finished: " + state.currentTask + ".");
      assignBattle();
      renderLog();
    } else {
      // Battle done — collect rewards
      completeTask();
    }
  }

  renderTaskBar();
}

function completeTask() {
  // Defeat monster (already picked when battle started)
  var monster = state.currentMonster;
  var item = generateItem();
  state.inventory.push(item);

  addLog("\u2620\uFE0F Executed " + monster + ".");
  addLog("\uD83D\uDC40 Found: " + item + ".");

  // XP gain: each task gives ~10-20% XP
  state.xpProgress += randInt(10, 20);
  if (state.xpProgress >= 100) {
    levelUp();
  }

  // Plot progress: 2% per task
  state.plotProgress += 2;
  if (state.plotProgress >= 100) {
    advanceAct();
  }

  // Check inventory cap -> market mode
  if (state.inventory.length >= 15) {
    enterMarketMode();
  } else {
    assignNewTask();
  }

  renderAll();
}

function levelUp() {
  state.level++;
  state.xpProgress = state.xpProgress - 100;

  // +1 to a random stat
  var statName = pick(STATS);
  state.stats[statName]++;

  // Learn a new spell (allow duplicates for humor)
  var newSpell = pick(SPELLS);
  state.spells.push(newSpell);

  addLog("LEVEL UP! Now level " + state.level + ". " + statName + " increased! Learned: " + newSpell + ".");
}

function advanceAct() {
  state.plotProgress = 0;
  state.currentAct++;
  if (state.currentAct < ACTS.length) {
    addLog("=== " + ACTS[state.currentAct] + " ===");
  } else {
    addLog("=== The story loops. Nothing truly ends. ===");
    state.currentAct = 0;
  }
}

function enterMarketMode() {
  state.marketMode = true;
  state.marketTimer = 0;
  state.currentTask = "Heading to market to sell junk";
  state.taskProgress = 100;
  addLog("Inventory full! Heading to the market...");
  renderTaskBar();
  renderLog();
}

// === BOOT ===

function startGame() {
  initCharacter();
  renderAll();
  state.loopId = setInterval(tick, 100);
}

startGame();
