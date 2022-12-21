const forms = () => {
   const forms = document.querySelectorAll('form');

   const message = {
      loading: 'Loading...',
      success: "Thank you! We will call you",
      failure: "Something wrong...",
   };
   
   const path = 'assets/php/server.php';

   const postData = async (url, data) => {
      let res = await fetch(url, {
         method: 'POST',
         body: data
      });

      return await res.text();
   };
     
   forms.forEach(form => {
      form.addEventListener('submit', (e) => {
         e.preventDefault();
         
         let statusMessage = document.createElement('div');
         statusMessage.classList.add('status');
         statusMessage.textContent = message.loading;
         form.style.display = 'none';
         form.parentNode.appendChild(statusMessage);

         const formData =  new FormData(form); 

         postData(path, formData)
            .then(res => {
               console.log(res);
               statusMessage.textContent = message.success;
            })
            .catch(() => {
               statusMessage.textContent = message.failure;
            })
            .finally(() => {
               form.reset();
               setTimeout(() => {
                  statusMessage.remove();
                  form.style.display = 'flex';
               }, 5000);
            });
      });
   });
   
};

export default forms;