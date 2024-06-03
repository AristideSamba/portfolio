const menuDeroulant = document.querySelector(".menu-icon")
const navLinks = document.querySelector(".links")
const overlay = document.querySelector('.overlay')

menuDeroulant.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu')
    overlay.classList.toggle('active')
})