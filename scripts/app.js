let arrowsDown = document.querySelector(".top-triangle");
let closeX = document.querySelector(".closeX");
let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav-links");
let topLinks = document.querySelector(".container-topbar-class");
let urGoingDown = document.querySelector(".urGoingDown");
let verticalNav = document.querySelector(".vertical-nav");
function openMenu(){
    navLinks.classList.toggle('open');   
};
function openTopBar(){
    topLinks.classList.toggle('down');
    arrowsDown.classList.toggle('rotation');    
};
function downMenu(){
    verticalNav.classList.toggle('reopen');   
};
hamburger.addEventListener("click", openMenu);
closeX.addEventListener("click", openMenu);
arrowsDown.addEventListener("click", openTopBar);
urGoingDown.addEventListener("click", downMenu);


// let widthMatch = window.matchMedia("(min-width: 500px;)");

// let bodyBody = document.querySelector('global-container-id');
// function offAll(event){
//     if (event.target == verticalNav){
//         verticalNav.style.display = "none"

//     }
    
// }
// bodyBody.addEventListener('click', offAll);
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 9000;
let slideInterval;


const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
