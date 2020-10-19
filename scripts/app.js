// let triangle = document.querySelector(".topbar__triangle");
// let topbar = document.querySelector(".topbar");
// let closeX = document.querySelector(".navbar__close-x");
// let bars = document.querySelector(".navbar__bars");
// let navUl = document.querySelector(".navbar__elements");
// let dropdown = document.querySelector(".navbar--dropdown");
// let verticalNav = document.querySelector(".navbar__verticalnav-elements");
// function openMenu(){
//     navUl.classList.toggle('open');   
// };
// function openTopBar(){
//     topbar.classList.toggle('down');
//     triangle.classList.toggle('rotation');    
// };
// function downMenu(){
//     verticalNav.classList.toggle('reopen');   
// };
// bars.addEventListener("click", openMenu);
// closeX.addEventListener("click", openMenu);
// triangle.addEventListener("click", openTopBar);
// dropdown.addEventListener("click", downMenu);

/**************************MAIN SLIDE**************************/
const slides = document.querySelectorAll('.slideshow__slides');
const next = document.querySelector('#slideshow__next');
const prev = document.querySelector('#slideshow__prev');
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
/**************************************************************/


/*************************SALES SLIDER*************************/
window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel__elements'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dragVelocity: 1,
    // dots: '.carousel-bullets',
    arrows: {
      prev: '.carousel__prev',
      next: '.carousel__next'
    },
    responsive: [
      {
        // screens greater than >= 321px
        breakpoint: 321,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },{
        // screens greater than >= 481px
        breakpoint: 481,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },{
        // screens greater than >= 590px
        breakpoint: 590,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },{
        // screens greater than >= 850px
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },{
        // screens greater than >= 1100px
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      }
    ]
  });
});
/**************************************************************/

/*********************NEW PRODUCTS SLIDER*********************/
window.addEventListener('load', function(){
  new Glider(document.querySelector('.ce--second'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dragVelocity: 1,
    // dots: '.carousel-bullets',
    arrows: {
      prev: '.cp--second',
      next: '.cn--second'
    },
    responsive: [
      {
        // screens greater than >= 321px
        breakpoint: 321,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },{
        // screens greater than >= 481px
        breakpoint: 481,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },{
        // screens greater than >= 590px
        breakpoint: 590,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },{
        // screens greater than >= 850px
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },{
        // screens greater than >= 1100px
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      }
    ]
  });
});
/*************************************************************/
