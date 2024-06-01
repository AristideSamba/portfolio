const menuDeroulant = document.querySelector(".menu-icon")
const navLinks = document.querySelector(".links")

menuDeroulant.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu')
})