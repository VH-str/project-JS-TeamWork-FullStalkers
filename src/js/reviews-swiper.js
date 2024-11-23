// core version + navigation, pagination modules:

// import Swiper from 'swiper';
// import { Navigation, Keyboard } from 'swiper/modules';
import Swiper, { Navigation, Keyboard } from 'swiper';

// import Swiper and modules styles

import 'swiper/css';
import 'swiper/css/navigation';

const swiperContainer = document.querySelector('.swiper');
if (swiperContainer) {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
    },
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
      1280: {
        slidesPerView: 2,
      },
    },
  });
} else {
  console.error('Swiper container not found');
}
