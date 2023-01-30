const mainMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.menu');
const menu_items = document.querySelectorAll('.mobile-menu li a');
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}