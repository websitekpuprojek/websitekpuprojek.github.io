const menubar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menubar.addEventListener('click', function(){
    menuNav.classList.toggle("menu-active");
});