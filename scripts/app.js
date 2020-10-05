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
