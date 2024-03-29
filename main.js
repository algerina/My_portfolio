const hambuMenu = document.querySelector(".hambu-menu");
const closeMenu = document.querySelector(".x-img");
const menuToggle = document.querySelector("#menu-toggle");
const hambuChilds = document.querySelectorAll(".hambu-child");
const seeproject1 = document.querySelector("#buttonds1");
const seeproject2 = document.querySelector("#buttonds2");
const seeproject3 = document.querySelector("#buttonds3");
const seeproject4 = document.querySelector("#buttonds4");
const popupWindow = document.querySelector("#popup");

const show = () => (hambuMenu.style.display = "flex");

const close = () => (hambuMenu.style.display = "none");

menuToggle.addEventListener("click", show);
closeMenu.addEventListener("click", close);
hambuChilds.forEach((chld) => {
  chld.addEventListener("click", close);
});

const cardArray = [
  {
    id: 0,
    header: "Wishyacht",
    header2: "Microverse",
    heaederlist: ["2022"],
    list: ["Microverse"],
    image: "./img/rent-yacht.jpg",
    text: "This is a Web application where users should sign in to rent a Yacht from a list and then reserve it for a determined period, users can then see their reservations or cancel them.",
    listbuttons: ["React", "Ruby on Rails", "Bootstrap"],
    live: "https://wishyacht.netlify.app/login/",
    source: "https://github.com/algerina/rent-yacht-frontend",
  },
  {
    id: 1,
    header: "Wallet",
    header2: "Microverse",
    heaederlist: ["Full Stack Dev", "2022"],
    list: ["Microverse", "Full Stack Dev"],
    image: "./img/wallet.jpg",
    text: "This is a minimalist and simple To-Do list. It simply lists the things needed to do and allows to mark them as complete.",
    listbuttons: ["Ruby on Rails", "Bootstrap"],
    live: "https://shrouded-dusk-01690.herokuapp.com/",
    source: "https://github.com/algerina/yourWallet",
  },
  {
    id: 2,
    header: "MMC Barcelona",
    header2: "Facebook",
    heaederlist: ["Front end Dev", "2021"],
    list: ["Microverse", "Front End Dev", "2021"],
    image: "./img/capstonescreen1.JPG",
    text: "This project is my first Microverse Front End Capstone project using Front end tools.",
    listbuttons: ["html", "css", "javascript", "github", "bootstrap"],
    live: "https://rawcdn.githack.com/algerina/Capstone1/7cebc30ff90cfef9437b1af73ec6f73c73f79ff9/index.html",
    source: "https://github.com/algerina/Capstone1",
  },
  {
    id: 3,
    header: "Awesome books",
    header2: "Microverse",
    heaederlist: ["Full Stack Dev", "2021"],
    list: ["Microverse", "Back End Dev", "2021"],
    image: "./img/Books.png",
    text: "This project consists of building a basic website that allows users to add/remove books from a list.",
    listbuttons: ["html", "css", "javascript", "github"],
    live: "https://algerina.github.io/Awesome-books/",
    source: "https://github.com/algerina/Awesome-books",
  },
  {
    id: 4,
    header: "To-do list",
    header2: "Microverse",
    heaederlist: ["Front End Dev", "2021"],
    list: ["Microverse", "Front End Dev"],
    image: "./img/screen.JPG",
    text: "This is a minimalist and simple To-Do list. It simply lists the things needed to do and allows to mark them as complete.",
    listbuttons: ["html", "css", "javascript"],
    live: "https://algerina.github.io/My-To-do-list/dist/",
    source: "https://github.com/algerina/My-To-do-list",
  },
];

const desktopCardsContainer = document.querySelector(
  "#cards-container-desktop"
);
const mobileCardsContainer = document.querySelector("#portfolio");

cardArray.forEach((project) => {
  desktopCardsContainer.innerHTML += `
        <div class="card">
            <img class="img-one" src="${project.image}" alt="project thumbnail">
            <div class="grid-cardone">
            <h1 class="leftds">${project.header}</h1>
            <div class="flexds custom-gap">
                <h2>${project.header2}</h2>
                <ul class="list-ds">
                <li>${project.heaederlist[0]}</li>
                <li>${project.heaederlist[1]}</li>
                </ul>
            </div>
            <p>${project.text}</p>
            <ul class="flex-buttonds">
                <li><button class="custom-buttonds" type="button">${project.listbuttons[0]}</button></li>
                <li><button class="custom-buttonds" type="button">${project.listbuttons[1]}</button></li>
                <li><button class="custom-buttonds" type="button">${project.listbuttons[2]}</button></li>
            </ul>
            <button id="buttonds1" class="big-buttonds project-button" type="button" onclick="populatePopup(${project.id});">See Project</button>
            </div>
        </div>`;
});

if (window.innerWidth < 901) {
  cardArray.forEach((project) => {
    mobileCardsContainer.innerHTML += `
        <div class="pageone">
            <img class="card-image" src="${project.image}" alt="portfolio-snapshoot1">
            <h1 class="left">${project.header}</h1>
            <div class="flex custom-gap">
            <h2>${project.header2}</h2>
            <ul class="flex-items">
                <li>${project.heaederlist[0]}</li>
                <li>${project.heaederlist[1]}</li>
            </ul>
            </div>
            <p class="left">${project.text}</p>
            <ul class="flex-button">
                <li><button class="custom-button" type="button">${project.listbuttons[0]}</button></li>
                <li><button class="custom-button" type="button">${project.listbuttons[1]}</button></li>
                <li><button class="custom-button" type="button">${project.listbuttons[2]}</button></li>
            </ul>
            <button id="buttonds5" onclick="populatePopup(${project.id});" class="big-button" type="button">See Project</button>
        </div>
        `;
  });
}

const popup = document.getElementById("popup");
const projectButtons = document.querySelectorAll(".project-button");

const populatePopup = (num) => {
  projectButtons.forEach(() => {
    popupWindow.classList.add("popup-active");
    popup.innerHTML = `
    <span onclick="popupWindow.classList.remove('popup-active')" class="close">X</span>
  <h2 class="popup-name">
  ${cardArray[num].header}
  </h2>
  <div class="flexds custom-gap">
  <h2 class="headerTwo">${cardArray[num].header2}</h2>
  <ul class="list-ds">
    <li>${cardArray[num].heaederlist[0]}</li>
    <li>${cardArray[num].heaederlist[1]}</li>
  </ul>
</div>
  <img  src="${cardArray[num].image}" class="popup-img">
  <div class="popup-image-mobile"> </div>
  <p class="p-popup">${cardArray[num].text}
  </p>
  <ul class="popup-list">
  <li class="popup-list-item">${cardArray[num].listbuttons[0]}</li>
  <li class="popup-list-item">${cardArray[num].listbuttons[1]}</li>
  <li class="popup-list-item">${cardArray[num].listbuttons[2]}</li>
  <li class="popup-list-item-hidden">${cardArray[num].listbuttons[3]}</li>
  <li class="popup-list-item-hidden">${cardArray[num].listbuttons[4]}</li>
  <li class="popup-list-item-hidden">${cardArray[num].listbuttons[5]}</li>
  </ul>
  <div class="button-from">
  <form  action="${cardArray[num].live}" method="get" target="_blank">
           <button class="popup-button" type="submit">See Live</button>
        </form>
   <form action="${cardArray[num].source}" method="get" target="_blank">
           <button class="popup-button" type="submit">See Source</button>
        </form>
        <div/>
  `;
  });
};
