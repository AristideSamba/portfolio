const menuDeroulant = document.querySelector(".menu-icon")
const navLinks = document.querySelector(".links")
const overlay = document.querySelector('.overlay')
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let caroussel = document.querySelector('.caroussel');
let items = caroussel.querySelectorAll('.list .item');
let indicators = caroussel.querySelector('.indicators');
let dots = indicators.querySelectorAll('ul li');
let active = 0;
let firstPosition = 0;
let lastPosition = items.length -1;


const setSlider = () => {
  let itemActiveOld = caroussel.querySelector('.list .item.active');
  if (itemActiveOld){
      itemActiveOld.classList.remove('active');
  }
  items[active].classList.add('active');

  let dotActiveOld = indicators.querySelector('li.active');
  if (dotActiveOld){
      dotActiveOld.classList.remove('active');
  }
  
}

setSlider();
nextBtn.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  caroussel.style.setProperty('--calculation', 1);
  setSlider();
}


menuDeroulant.addEventListener('click', ()=> {
  navLinks.classList.toggle('mobile-menu')
})
