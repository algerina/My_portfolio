const hambuMenu = document.querySelector('.hambu-menu');
const closeMenu = document.querySelector('.x-img');
const menuToggle = document.querySelector('#menu-toggle');
const hambuChilds = document.querySelectorAll('.hambu-child');

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

const cardArray = [ {
    header: 'Tonic',
    list: ['Canopy', 'Back End Dev', '2015'],
    image: '../img/popupdesk.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
    listbuttons: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'], 
    live: 'https://algerina.github.io/My_portfolio/', 
    source: 'https://github.com/algerina', 

},

]

const popup = document.getElementById('popup');
cardArray.forEach((item) => {
  popup.innerHTML += `
<h2 class="popup-name">
${item.header}
</h2>
<img  src="${item.image}" class="popup-img">
<p class="p-popup">${item.text}
</p>
<ul class="popup-list">
<li class="popup-list-item">${item.listbuttons[0]}</li>
<li class="popup-list-item">${item.listbuttons[1]}</li>
<li class="popup-list-item">${item.listbuttons[2]}</li>
<li class="popup-list-item">${item.listbuttons[3]}</li>
<li class="popup-list-item">${item.listbuttons[4]}</li>
<li class="popup-list-item">${item.listbuttons[5]}</li>
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