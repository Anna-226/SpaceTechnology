const modal = (triggerSelector, modalSelector, closeSelector) => {
     
   const triggers = document.querySelectorAll(triggerSelector),
         modal = document.querySelector(modalSelector),
         closeBtn = document.querySelector(closeSelector),
         scrollbar = calcScrollbar();

      
   triggers.forEach(item =>{
      item.addEventListener('click', (e) =>{
         e.preventDefault();
         modal.style.display = 'flex';
         document.body.style.marginRight = `${scrollbar}px`;
      });
   });
   
   function closeModal() {
      document.querySelector(modalSelector).style.display = 'none';
      document.body.style.overflow = 'auto';
      document.body.style.marginRight = `0px`;
   }

   closeBtn.addEventListener('click', ()=>{
         closeModal();
   });

   document.addEventListener('click', (e) => {
      if (e.target && e.target === modal) {
         closeModal();
      }
   });

   document.addEventListener('keydown', function (e) {
      if(e.key === 'Escape') {
         closeModal();
      }
   }); 
   
   function calcScrollbar() {
      let techDiv = document.createElement('div');
      techDiv.style.width = '50px';
      techDiv.style.height = '50px';
      techDiv.style.overflowY = 'scroll';
      techDiv.style.visibility = 'hidden';
      document.body.append(techDiv);
      let scrollbarWidth = techDiv.offsetWidth - techDiv.clientWidth;
      techDiv.remove();
      return scrollbarWidth;
   }
};


export default modal;