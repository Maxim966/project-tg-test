import { auto } from "@popperjs/core";
import Swiper, { Navigation, Pagination} from "swiper";

Swiper.use([Navigation, Pagination]);


const reviews = new Swiper ('.reviews__swiper', {
  clickable: true,
  slidesPerView: 'auto',
  spaceBetween: 32,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },

})
