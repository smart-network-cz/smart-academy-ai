// Při startu sezení vloží pravidla skillu do kontextu, aby platila v každé odpovědi.
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "..", "skills", "smart-academy", "SKILL.md");
const text = fs.readFileSync(file, "utf8").replace(/^---[\s\S]*?---\s*/, "");
process.stdout.write("SMART ACADEMY MODE ACTIVE\n\n" + text);
