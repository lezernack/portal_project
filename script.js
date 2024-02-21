let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;

let cardsList = document.querySelector(".cards");
let cards = [];

const card = {
  title: "Project2",
  href: " https://lezernack.github.io/memoryGame/",
};

cards.push(card);

cards.map((item) => {
  cardsList.innerHTML += `<div class="card">
  <div class="card-inner">
    <div class="card-front">
      <h2 id="title">${card.title}</h2>
    </div>
    <div class="card-back">
      <a href= ${card.href} target="blank">Project Link</a>
    </div>
  </div>
</div>`;
  cards.innerHTML += ``;
});

let title = document.getElementById("title");
title = `${cards[project.name]}`;
