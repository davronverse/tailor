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

  init() {
    console.log('property card');
  },

  methodName($param) {

  },

};
$(function () {
  let width = window.innerWidth;
  if (width <= 648) {
    $("#popover-additional-btn-h").hide();
  } else {
    $("#popover-additional-btn-c").hide();
  }
});

window.addEventListener('resize', function(event) {
  let width = window.innerWidth;
  if (width <= 648) {
    $("#popover-additional-btn-h").hide();
    $("#popover-additional-btn-c").show();
  } else {
    $("#popover-additional-btn-c").hide();
    $("#popover-additional-btn-h").show();
  }
  
  // popover-additional-btn
}, true);
$("#popover-additional-close").click(function () {
  $("#popover-additional").hide();
})

$("#popover-additional-btn-h").hover(function () {
  $("#popover-additional").show();
})
$("#popover-additional-btn-c").click(function () {
  $("#popover-additional").show();
})


// export
export default PropertyCard;

// initiate
PropertyCard.init();