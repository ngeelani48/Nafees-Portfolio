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

// Array of different professions
const professions = [
  "Full Stack Developer",
  "Back End Developer",
  "Front End Developer",
  // Add more professions as needed
];

const professionElement = document.getElementById("dynamic-profession").querySelector("span");

let professionIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < professions[professionIndex].length) {
    professionElement.textContent += professions[professionIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100); // Adjust the typing speed here
  } else {
    setTimeout(eraseText, 1000); // Pause before erasing
  }
}

function eraseText() {
  if (charIndex > 0) {
    professionElement.textContent = professions[professionIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50); // Adjust the erasing speed here
  } else {
    professionIndex = (professionIndex + 1) % professions.length;
    setTimeout(typeWriter, 500); // Pause before typing next profession
  }
}

// Initial call to start the typewriter effect
typeWriter();
