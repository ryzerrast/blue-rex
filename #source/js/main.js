//@prepros-append ibg.js
//@prepros-append slider.js
//@prepros-append animScroll.js

const menuIcon = document.querySelector('.header__icon'),
      menuBody = document.querySelector('.header__body');

menuIcon.addEventListener('click', function() {
   this.classList.toggle('active');
   menuBody.classList.toggle('active'); 
   if(menuBody.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
   } else {
      document.body.style.overflow = 'auto';
   }
});

const menu = document.querySelectorAll('.filter__link'),
   modal = document.querySelector('.portfolio__modal'),
   closed = document.querySelector('.portfolio__closed'),
   slides = document.querySelectorAll('.portfolio__slide'),
   prev = document.querySelector('.portfolio__prev'),
   next = document.querySelector('.portfolio__next'),
   img = document.querySelectorAll('.portfolio__img'),
   item = document.querySelectorAll('.portfolio__item')
   slider = document.querySelector('.portfolio__slider');

for (let i = 0; i < img.length; i++) {
   img[i].style.display = 'block';
}

let num = 0;

menu[0].classList.add('active');

for (let i = 0; i < menu.length; i++) {
   menu[i].addEventListener('click', function (e) {
      for (let k = 0; k < menu.length; k++) {
         menu[k].classList.remove('active');
      }
      console.log(e.target.id)
      menu[i].classList.add('active');
      for (let j = 0; j < img.length; j++) {
         if (img[j].classList.contains(e.target.id)) {
            item[j].style.display = 'block';
            num += 1;
         } else {
            item[j].style.display = 'none';
         }
      }
      if (num == 1) {
         next.style.display = 'none';
         prev.style.display = 'none';
      } else {
         num = 0;
         next.style.display = 'block';
         prev.style.display = 'block';
      }
   });
}

const activateModal = () => {
   modal.style.display = 'block';
   document.body.style.overflow = "hidden";
}

const deactivateModal = () => {
   modal.style.display = 'none';
   document.body.style.overflow = "auto";
}

closed.addEventListener('click', function () {
   deactivateModal();
});

for (let i = 0; i < img.length; i++) {
   img[i].addEventListener('click', function () {
      activateModal();
      showSlide(index = i);
   });
}

let index = 0;

prev.addEventListener('click', function () {
   if (index == 0) {
      index = slides.length - 1;
      prevBlockImg(index);
   } else {
      index--;
      prevBlockImg(index);
   }
});

next.addEventListener('click', function () {
   if (index == slides.length - 1) {
      index = 0;
      nextBlockImg(index);
   } else {
      index++;
      nextBlockImg(index);
   }
});

const nextBlockImg = n => {
   if (img[n].style.display == 'block') {
      showSlide(n);
   } else if (index == slides.length - 1){
      index = -1;
      nextBlockImg(++index);
   } else {
      nextBlockImg(++index);
   }
}

const prevBlockImg = n => {
   if (img[n].style.display == 'block') {
      showSlide(n);
   } else if(index == 0) {
      index = slides.length;
      prevBlockImg(--index);
   } else {
      prevBlockImg(--index);
   }  
}

const showSlide = n => {
   for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
   }
   slides[n].style.display = 'block';
}

const filterList = document.querySelector('.filter'),
      blockText = document.querySelector('#blockText');

function mediaFunc() {
   if (window.innerWidth < 1100) {
      filterList.parentNode.insertBefore(blockText, filterList);
   } else {
      filterList.parentNode.insertBefore(filterList, blockText);
   }
 }
 window.addEventListener('resize', mediaFunc);

 const dreamFilter = document.querySelectorAll('.filter_d'),
       dreamItem = document.querySelectorAll('.dream__item');

for(let i = 0; i < dreamFilter.length; i++) {
   dreamFilter[i].addEventListener('click', function() {
      dreamItem.forEach(element => {
         element.classList.remove('active');
      });
      dreamItem[i].classList.add('active')
   });
}