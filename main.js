const hambuMenu = document.querySelector('.hambu-menu');
const closeMenu = document.querySelector('.x-img');
const menuToggle = document.querySelector('#menu-toggle');
const hambuChilds = document.querySelectorAll('.hambu-child');
const seeproject1 = document.querySelector('#buttonds1');
const seeproject2 = document.querySelector('#buttonds2');
const seeproject3 = document.querySelector('#buttonds3');
const seeproject4 = document.querySelector('#buttonds4');
const popupWindow = document.querySelector('#popup');

const show = () => hambuMenu.style.display = 'flex';

const close = () => hambuMenu.style.display = 'none';


menuToggle.addEventListener('click', show);
closeMenu.addEventListener('click', close);
hambuChilds.forEach((chld) => {
  chld.addEventListener('click', close);
});

const cardArray = [
    {
        id: 0,
        header: 'Multi-Post Stories',
        header2: 'Canopy',
        heaederlist: ['Back End Dev', '2015'],
        list: ['Canopy', 'Back End Dev'],
        image: './img/popupdesk.png',
        text: 'A daily selection of privately <br> personalized reads; no accounts or <br> sign-ups required.',
        listbuttons: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
        live: 'https://algerina.github.io/My_portfolio/',
        source: 'https://github.com/algerina',
    },
    {
        id: 1,
        header: 'Tonic',
        header2: 'Facebook',
        heaederlist: ['Back End Dev', '2015'],
        list: ['Canopy', 'Back End Dev', '2015'],
        image: './img/card2.png',
        text: 'Experimental content creation feature that allows users to <br> add to an existing story over the course of a day without <br> spamming their friends.',
        listbuttons: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
        live: 'https://algerina.github.io/My_portfolio/',
        source: 'https://github.com/algerina',
    },
    {
        id: 2,
        header: 'Facebook 360',
        header2: 'Facebook',
        heaederlist: ['Full Stack Dev', '2015'],
        list: ['Facebook', 'Back End Dev', '2015'],
        image: './img/card3.png',
        text: "Exploring the future of media in Facebook's first Virtual Reality <br> app; a place to discover and enjoy 360 photos and videos on <br> Gear VR.",
        listbuttons: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
        live: 'https://algerina.github.io/My_portfolio/',
        source: 'https://github.com/algerina',
    },
    {
        id: 3,
        header: 'Uber Navigation',
        heaederlist: ['Lead Developer', '2018'],
        header2: 'Uber',
        list: ['Uber', 'Lead developer', '2018'],
        image: './img/card4.png',
        text: 'A smart assistant to make driving more safe, efficient, and fun <br> by unlocking your most expensive computer: your car.',
        listbuttons: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
        live: 'https://algerina.github.io/My_portfolio/',
        source: 'https://github.com/algerina',
    }
];

const desktopCardsContainer = document.querySelector('#cards-container-desktop');
const mobileCardsContainer = document.querySelector('#portfolio');

cardArray.forEach(project => {
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
    cardArray.forEach(project => {
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

const popup = document.getElementById('popup');
const projectButtons = document.querySelectorAll('.project-button');

const populatePopup = (num) => {
  projectButtons.forEach(() => {
    popupWindow.classList.add('popup-active');
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
  })
}