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
