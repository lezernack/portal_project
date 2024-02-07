let currentDate = new Date().toLocaleDateString();
let date = document.querySelecter("#date");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelecter("#year");

year.textContent = currentYear;
