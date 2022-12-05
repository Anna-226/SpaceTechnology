import '../styles/style.scss';
import burger from './modules/burger';
import Swiper from 'swiper';
import 'swiper/css';


window.addEventListener('DOMContentLoaded', () => {
   burger('.header__burger');
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