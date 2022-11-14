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
const PropertyCard = {
  popup: false,
  init() {
    console.log('property card');
  },

  methodName($param) {

  },

};

// let popoverHandler = () => {
//   let width = window.innerWidth;
//   if (width <= 648) {
    
//   } else {
//     // $("#popover-additional").css("data-popover-trigger", "hover")
//   }
// }
// popoverHandler()

// window.addEventListener('resize', function(event) {
//   popoverHandler()
// }, true);

$("#popover-additional-btn").click(function () {
  $("#popover-additional").show()
})
$("#popover-additional-close").click(function () {
  $("#popover-additional").hide()
})

// export
export default PropertyCard;

// initiate
PropertyCard.init();