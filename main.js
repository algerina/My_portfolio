const hambuMenu = document.querySelector('.hambu-menu');
const closeMenu = document.querySelector('.x-img');
const menuToggle = document.querySelector('#menu-toggle');
const hambuChilds = document.querySelectorAll('.hambu-child');
const seeproject1 = document.querySelector('#buttonds1');
const seeproject2 = document.querySelector('#buttonds2');
const seeproject3 = document.querySelector('#buttonds3');
const seeproject4 = document.querySelector('#buttonds4');
const popupWindow = document.querySelector('#popup');

function show() {
  hambuMenu.style.display = 'flex';
}

function close() {
  hambuMenu.style.display = 'none';
}

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
  header: 'Tonic',
  list: ['Canopy', 'Back End Dev', '2015'],
  image: './img/popupdesk.png',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
  listbuttons: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
  live: 'https://algerina.github.io/My_portfolio/',
  source: 'https://github.com/algerina',

},

];

const popup = document.getElementById('popup');
cardArray.forEach((item) => {
  popup.innerHTML += `
  <span onclick="popupWindow.classList.remove('popup-active')" class="close">X</span>
<h2 class="popup-name">
${item.header}
</h2>
<img  src="${item.image}" class="popup-img">
<div class="popup-image-mobile"> </div>
<p class="p-popup">${item.text}
</p>
<ul class="popup-list">
<li class="popup-list-item">${item.listbuttons[0]}</li>
<li class="popup-list-item">${item.listbuttons[1]}</li>
<li class="popup-list-item">${item.listbuttons[2]}</li>
<li class="popup-list-item-hidden">${item.listbuttons[3]}</li>
<li class="popup-list-item-hidden">${item.listbuttons[4]}</li>
<li class="popup-list-item-hidden">${item.listbuttons[5]}</li>
</ul>
<div class="button-from">
<form  action="${item.live}" method="get" target="_blank">
         <button class="popup-button" type="submit">See Live</button>
      </form>
 <form action="${item.source}" method="get" target="_blank">
         <button class="popup-button" type="submit">See Source</button>
      </form>
      <div/>
`;
});

const form = document.getElementById('contact-form');
const formEmail = document.getElementById('email');
const errormsg = document.getElementById('error');

function Lowercase(str) {
  return str === str.toLowerCase();
}

form.addEventListener('submit', (event) => {
  if (!Lowercase(formEmail.value)) {
    errormsg.innerHTML = 'The Email Address has to be Lower Case';
    formEmail.classList.add('email-error');
    event.preventDefault();
  } else {
    errormsg.innerHTML = '';
  }
});

const formStorage = document.getElementById('contact-form');
const nameStore = formStorage.elements.fullname;
const emailStore = formStorage.elements.email;
const messageStore = formStorage.elements.User_message;

function dataStorage() {
  const formData = {

    name: nameStore.value,
    email: emailStore.value,
    message: messageStore.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

nameStore.onchange = dataStorage;
emailStore.onchange = dataStorage;
messageStore.onchange = dataStorage;

const storeData = JSON.parse(localStorage.getItem('formData'));

nameStore.value = storeData.name;
emailStore.value = storeData.email;
messageStore.value = storeData.message;