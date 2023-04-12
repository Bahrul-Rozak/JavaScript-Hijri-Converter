const gregorianToHijri = require("./src/gregorianToHijri");

const today = new Date(2023, 4, 12);
const hijriDate = gregorianToHijri(today);

console.log(`Today is ${hijriDate} (Hijri)`);
