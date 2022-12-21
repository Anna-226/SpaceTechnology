import '../styles/style.scss';
import burger from './modules/burger';
import Swiper from 'swiper';
import 'swiper/css';
import modal from './modules/modal'; 
import mask from './modules/mask';
import forms from './modules/forms';
import scrolling from './modules/scrolling';
import accordeon from './modules/accordeon';

window.addEventListener('DOMContentLoaded', () => {
   burger('.header__burger');
   modal('.button-modal', '.popup', '.popup__close'); 
   mask('.form__input_phone');
   forms();
   scrolling();
   accordeon('.links-list__title', '.link-list__block');
   const swiper = new Swiper('.swiper', {
      loop: true,
      spaceBetween: 23,
      centeredSlides: true,
      slidesPerView: 3,
      breakpoints: {
         0: {
            slidesPerView: 1
         },
         797.98: {
            slidesPerView: 3,
         }
      }
  });
});