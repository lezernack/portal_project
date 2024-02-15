let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;

let cardsList = document.querySelector(".cards");
let cards = [];

const project = {
  name: "Project1",
  href: "./project_1/project1.html",
};

cards.push(project);

cards.map((item) => {
  cardsList.innerHTML += ``;
  cards.innerHTML += ``;
});
