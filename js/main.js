const mainMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.menu');
const menuitems = document.querySelectorAll('.mobile-menu li a');
function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-100%';
}
// close menu when you click on a menu item
menuitems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// For different placeholders for mobile and desktop
const textarea = document.querySelector('.message-contactform');

if (window.innerWidth < 768) {
  textarea.placeholder = 'Enter text here'; // For mobile
} else {
  textarea.placeholder = 'Hello. I would like to get in touch with you...'; // For desktop
}
