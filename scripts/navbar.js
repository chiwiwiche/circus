let triangle = document.querySelector(".topbar__triangle");
let topbar = document.querySelector(".topbar");
let closeX = document.querySelector(".navbar__close-x");
let bars = document.querySelector(".navbar__bars");
let navUl = document.querySelector(".navbar__elements");
let dropdown = document.querySelector(".navbar--dropdown");
let verticalNav = document.querySelector(".navbar__verticalnav-elements");
function openMenu(){
    navUl.classList.toggle('open');   
};
function openTopBar(){
    topbar.classList.toggle('down');
    triangle.classList.toggle('rotation');    
};
function downMenu(){
    verticalNav.classList.toggle('reopen');   
};
bars.addEventListener("click", openMenu);
closeX.addEventListener("click", openMenu);
triangle.addEventListener("click", openTopBar);
dropdown.addEventListener("mousemove", downMenu);