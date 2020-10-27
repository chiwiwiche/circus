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


/***********************PRODUCTS SLIDER***********************/
window.addEventListener('load', function(){
  new Glider(document.querySelector('.ce--third'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dragVelocity: 1,
    // dots: '.carousel-bullets',
    arrows: {
      prev: '.cp--third',
      next: '.cn--third'
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