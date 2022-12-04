const burger = (burgerSelector) => {
   const burgerBtn = document.querySelector(burgerSelector),
         header = document.querySelector('header'),
         body = document. querySelector('body');

   burgerBtn.addEventListener('click', () => {
      if (document.documentElement.clientWidth < 767.99) {
         header.classList.toggle('menu-open');
         body.classList.toggle('locked');
      }
   });
   document.addEventListener('click', (e) => {
     let target = e.target;
      if (target && target.classList.contains('menu__link')) {
         header.classList.remove('menu-open');
         body.classList.remove('locked');
      }
   });
   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
         header.classList.remove('menu-open');
         body.classList.remove('locked');
      }
   });
   window.addEventListener('scroll', () => {
      if (window.pageYOffset>10) {
         header.classList.add('veil');
      }else{
         header.classList.remove('veil');
      }
   })

};

export default burger;