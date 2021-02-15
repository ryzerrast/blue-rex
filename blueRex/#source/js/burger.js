const iconMenu = document.querySelector('.icon-menu'),
      menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener('click', function() {
   iconMenu.classList.toggle('active');
   menuBody.classList.toggle('active');
});