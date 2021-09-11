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

seeproject1.addEventListener('click', () => {
  popupWindow.classList.add('popup-active');
});

seeproject2.addEventListener('click', () => {
  popupWindow.classList.add('popup-active');
});

seeproject3.addEventListener('click', () => {
  popupWindow.classList.add('popup-active');
});

seeproject4.addEventListener('click', () => {
  popupWindow.classList.add('popup-active');
});

const cardArray = [{
  header: 'Multi-Post Stories',
  header2: 'Canopy',
  heaederlist: ['Back End Dev', '2015'],
  list: ['Canopy', 'Back End Dev'],
  image: './img/popupdesk.png',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
  listbuttons: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
  live: 'https://algerina.github.io/My_portfolio/',
  source: 'https://github.com/algerina',

},

{
  header: 'Tonic',
  header2: 'Facebook',
  heaederlist: ['Back End Dev', '2015'],
  list: ['Canopy', 'Back End Dev', '2015'],
  image: './img/card2.png',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
  listbuttons: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
  live: 'https://algerina.github.io/My_portfolio/',
  source: 'https://github.com/algerina',

},

{
  header: 'Facebook 360',
  header2: 'Facebook',
  heaederlist: ['Full Stack Dev', '2015'],
  list: ['Facebook', 'Back End Dev', '2015'],
  image: './img/card3.png',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
  listbuttons: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
  live: 'https://algerina.github.io/My_portfolio/',
  source: 'https://github.com/algerina',

},

{
  header: 'Uber Navigation',
  heaederlist: ['Lead Developer', '2018'],
  header2: 'Uber',
  list: ['Uber', 'Lead developer', '2018'],
  image: './img/card4.png',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
  listbuttons: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
  live: 'https://algerina.github.io/My_portfolio/',
  source: 'https://github.com/algerina',

},

];

const popup = document.getElementById('popup');
const projectButtons = document.querySelectorAll('.project-button');

const populatePopup = (num) => {
  projectButtons.forEach(() => {
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

