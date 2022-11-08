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
const QuestionCard = {

  init() {
    console.log('question card');
  },

  methodName($param) {

  },

};

$('.question-card').on({
    mousedown: function () {
        $('.question-card-icon').css('fill', "#FAFAFF");
    }
});

$('.question-card-sm').on({
    mousedown: function () {
        $('.question-card-sm-icon').css('fill', "#FAFAFF");
    }
});


// export
export default QuestionCard;

// initiate
QuestionCard.init();