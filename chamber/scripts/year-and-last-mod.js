const currentYear = document.getElementById('currentYear');
const lastMod = document.getElementById('lastModification');

// Get today's date and time
let currentTime = new Date()

// Get the year
let year = currentTime.getFullYear()

// Display the year to HTML
currentYear.innerHTML = year;

// This only shows when HTML is modified
lastMod.innerHTML = document.lastModified;