const menuDeroulant = document.querySelector(".menu-icon");
const iconeFermer = document.querySelector(".menu-burger-icon-fermer");
const navLinks = document.querySelector(".links");
const overlay = document.querySelector('.overlay');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let caroussel = document.querySelector('.caroussel');
let items = caroussel.querySelectorAll('.list .item');
let indicators = caroussel.querySelector('.indicators');
let dots = indicators.querySelectorAll('ul li');
let active = 0;
let firstPosition = 0;
let lastPosition = items.length -1;
let autoPlay;
const startAutoPlay = () => {
  clearInterval(autoPlay);
  autoPlay = setInterval (() => {
    nextBtn.click();
  }, 5000);
}


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
  dots[active].classList.add('active');
  startAutoPlay();
}

setSlider();
nextBtn.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  caroussel.style.setProperty('--calculation', 1);
  setSlider();
}

prevBtn.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  caroussel.style.setProperty('--calculation', -1);
  setSlider();
}


let menuOuvert = false; // Variable pour stocker l'état du menu (ouvert/fermé)
let liensCliquables = true;

menuDeroulant.addEventListener('click', () => {
  basculerMenu();
});

iconeFermer.addEventListener('click', () => {
  basculerMenu();
});

function basculerMenu() {
  menuOuvert = !menuOuvert; // Inverser l'état du menu

  if (menuOuvert) {
    navLinks.classList.add('mobile-menu'); // Ouvrir le menu
    iconeFermer.style.display = 'block'; // Afficher l'icône de fermeture
    menuDeroulant.style.display = 'none'; // Masquer l'icône du menu burger
    
  } else {
    navLinks.classList.remove('mobile-menu'); // Fermer le menu
    iconeFermer.style.display = 'none'; // Masquer l'icône de fermeture
    menuDeroulant.style.display = 'block'; // Afficher l'icône du menu burger
  }
}

function showMenuIcon() {
  if (window.matchMedia('(max-width: 1080px)').matches) {
    menuOuvert = !menuOuvert;
    menuDeroulant.style.display = 'block'; // Display the menu icon (only on small screens)
    iconeFermer.style.display = 'none';
  }
}

document.querySelectorAll('.nav-link').forEach(n => {
  n.addEventListener('click', () => {
    showMenuIcon(); // Show the menu icon (if appropriate)
    navLinks.classList.remove('mobile-menu'); // Hide the mobile menu
  });
});

// Hide hamburger menu on large screens (using media query)
window.matchMedia('(min-width: 1080px)').addEventListener('change', (event) => {
  if (event.matches) {
    navLinks.classList.remove('mobile-menu'); // Hide the mobile menu on large screens
  }
});

window.onload = () => {
  window.addEventListener("scroll", () => {
    let hauteur = document.documentElement.scrollHeight - window.innerHeight;
    let position = window.scrollY;
    let largeur = document.documentElement.clientWidth;

    let scroller = (position / hauteur) * largeur;

    document.getElementById("scroller").style.width = scroller + "px";
  })
}

const downloadLink = document.querySelector('.download');

downloadLink.addEventListener('click', (event) => {
  if (!confirm('Voulez-vous télécharger mon CV ?')) {
    event.preventDefault(); // Prevent download if the user cancels
  }
});

const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry){
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    } 
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r)
});

const navbar = document.getElementById('navbar'); 
  window.addEventListener('scroll', function(){
  const currentScrollPosition = window.scrollY;
  const previousScrollPosition = this.previousScrollPosition || 0;

  if(currentScrollPosition < previousScrollPosition) {
    navbar.classList.remove('hidden');
  } else if (currentScrollPosition > previousScrollPosition){
    navbar.classList.add('hidden');
  }
  this.previousScrollPosition = currentScrollPosition;
});