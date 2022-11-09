// import jQuery
import $ from 'jquery';

// import flowbite
import flowbite from 'flowbite';

// Import Swiper and modules
// https://swiperjs.com/swiper-api#using-js-modules
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';


let cardClicked = false;

/**
 * Function Description Goes Here
 */
const Card = {

  init() {
    console.log('card are here');
    cardClicked = false;
  },

  methodName($param) {

  },

};

// $('.blog-card').on({
//     mousedown: function () {
//         if(cardClicked == false) {
//           $('.blog-card-image').addClass('hidden');
//           $('.blog-card-content').addClass("bg-[url('../../dist/img/card/card1.jpg')]");
//           $('.blog-card-content').addClass("bg-cover");
//           $('.blog-card-content').addClass("rounded-lg");

//           $('.blog-card-content').addClass("blog-card-clicked");

//           $('.blog-card-title').addClass("text-purple-100");
//           $('.blog-card-text').addClass("text-purple-100");
//           $('.blog-card-status').addClass("text-purple-100");
//           $('.blog-card-btn').addClass("text-purple-100");
//           //$('.blog-card-content').css("height": "428px");

//           cardClicked = true;
//         } else {
//           $('.blog-card-image').removeClass('hidden');
//           $('.blog-card-content').removeClass("bg-[url('../../dist/img/card/card1.jpg')]");
//           $('.blog-card-content').removeClass("bg-cover");
//           $('.blog-card-content').removeClass("rounded-lg");

//           $('.blog-card-title').removeClass("text-purple-100");
//           $('.blog-card-text').removeClass("text-purple-100");
//           $('.blog-card-status').removeClass("text-purple-100");
//           $('.blog-card-btn').removeClass("text-purple-100");

//           $('.blog-card-content').removeClass("blog-card-clicked");
//           cardClicked = false;
//         }
//     }
// });

// export
export default Card;

// initiate
Card.init();