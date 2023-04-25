const currYear = document.getElementById('currentYear');
const lastMod = document.getElementById('modLast');

// Get today's date and time
let currentTime = new Date()

// Get the year
let year = currentTime.getFullYear()

// Display the year to HTML
currYear.innerHTML = year;

// This only shows when HTML is modified
lastMod.innerHTML = document.lastModified;

/*
new Date().getDate()          // Get the day as a number (1-31)
new Date().getDay()           // Get the weekday as a number (0-6)
new Date().getFullYear()      // Get the four digit year (yyyy)
new Date().getHours()         // Get the hour (0-23)
new Date().getMilliseconds()  // Get the milliseconds (0-999)
new Date().getMinutes()       // Get the minutes (0-59)
new Date().getMonth()         // Get the month (0-11)
new Date().getSeconds()       // Get the seconds (0-59)
new Date().getTime()          // Get the time (milliseconds since January 1, 1970)
*/