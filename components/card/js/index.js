// import jQuery
import $ from 'jquery';

// import flowbite
import flowbite from 'flowbite';

// Import Swiper and modules
// https://swiperjs.com/swiper-api#using-js-modules
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';


/**
 * Function Description Goes Here
 */
const Card = {

  init() {
    console.log('card hit');
  },

  methodName($param) {

  },

};

$('.blog-card').on({
    mousedown: function () {
        alert(1)
    }
});


// export
export default Card;

// initiate
Card.init();
