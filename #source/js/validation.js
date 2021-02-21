'use strict'

document.addEventListener('DOMContentLoaded', function () {
   const form = document.querySelector('.form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
     e.preventDefault();

      let error = formValidate(form);

      if (error === 0) {

      } else {
         alert('Заполните обязательные поля');
      }
   }

   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');

      for (let i = 0; i < formReq.length; i++) {
         const input = formReq[i];
         formRemoveError(input);

         if (input.classList.contains('_email')) {
            if (emailTest(input)) {
               formAddError(input);
               error++;
            }
         } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            formAddError(input);
            error++;
         } else if (input.classList.contains('_name')) {
            if (nameTest(input)) {
               formAddError(input);
               error++;
            }
         } else {
            if (input.value === '') {
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }
   function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }
   // Функция теста email
   function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }
   function nameTest(input) {
      if(/[A-Z][a-z]+\s[A-Z][a-z]+/.test(input.value)) {

      } else {
         return true;
      }
   }
});