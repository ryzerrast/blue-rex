const menuIcon=document.querySelector(".header__icon"),menuBody=document.querySelector(".header__body");menuIcon.addEventListener("click",(function(){this.classList.toggle("active"),menuBody.classList.toggle("active"),menuBody.classList.contains("active")?document.body.style.overflow="hidden":document.body.style.overflow="auto"}));const menu=document.querySelectorAll(".filter__link"),modal=document.querySelector(".portfolio__modal"),closed=document.querySelector(".portfolio__closed"),slides=document.querySelectorAll(".portfolio__slide"),prev=document.querySelector(".portfolio__prev"),next=document.querySelector(".portfolio__next"),img=document.querySelectorAll(".portfolio__img"),item=document.querySelectorAll(".portfolio__item");slider=document.querySelector(".portfolio__slider");for(let e=0;e<img.length;e++)img[e].style.display="block";let num=0;menu[0].classList.add("active");for(let e=0;e<menu.length;e++)menu[e].addEventListener("click",(function(t){for(let e=0;e<menu.length;e++)menu[e].classList.remove("active");console.log(t.target.id),menu[e].classList.add("active");for(let e=0;e<img.length;e++)img[e].classList.contains(t.target.id)?(item[e].style.display="block",num+=1):item[e].style.display="none";1==num?(next.style.display="none",prev.style.display="none"):(num=0,next.style.display="block",prev.style.display="block")}));const activateModal=()=>{modal.style.display="block",document.body.style.overflow="hidden"},deactivateModal=()=>{modal.style.display="none",document.body.style.overflow="auto"};closed.addEventListener("click",(function(){modal.style.display="none",document.body.style.overflow="auto"}));for(let e=0;e<img.length;e++)img[e].addEventListener("click",(function(){modal.style.display="block",document.body.style.overflow="hidden",showSlide(index=e)}));let index=0;prev.addEventListener("click",(function(){0==index?(index=slides.length-1,prevBlockImg(index)):(index--,prevBlockImg(index))})),next.addEventListener("click",(function(){index==slides.length-1?(index=0,nextBlockImg(index)):(index++,nextBlockImg(index))}));const nextBlockImg=e=>{"block"==img[e].style.display?showSlide(e):index==slides.length-1?(index=-1,nextBlockImg(++index)):nextBlockImg(++index)},prevBlockImg=e=>{"block"==img[e].style.display?showSlide(e):0==index?(index=slides.length,prevBlockImg(--index)):prevBlockImg(--index)},showSlide=e=>{for(let e=0;e<slides.length;e++)slides[e].style.display="none";slides[e].style.display="block"},filterList=document.querySelector(".filter"),blockText=document.querySelector("#blockText");function mediaFunc(){window.innerWidth<1100?filterList.parentNode.insertBefore(blockText,filterList):filterList.parentNode.insertBefore(filterList,blockText)}window.addEventListener("resize",mediaFunc);const dreamFilter=document.querySelectorAll(".filter_d"),dreamItem=document.querySelectorAll(".dream__item");for(let e=0;e<dreamFilter.length;e++)dreamFilter[e].addEventListener("click",(function(){dreamItem.forEach((e=>{e.classList.remove("active")})),dreamItem[e].classList.add("active")}));function ibg(){let e=document.querySelectorAll(".ibg");for(let t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}ibg(),$(".client__content").length>0&&$(".client__content").slick({dots:!0,arrows:!1,accessibility:!1,slidesToShow:1,adaptiveHeight:!0,autoplaySpeed:3e3}),$(".dream__slider").length>0&&$(".dream__slider").slick({dots:!0,infinite:!0,speed:500,fade:!0,cssEase:"linear"});const animItems=document.querySelectorAll("._anim-items");if(animItems.length>0){function animOnScroll(){for(let e=0;e<animItems.length;e++){const t=animItems[e],l=t.offsetHeight,o=offset(t).top,n=4;let i=window.innerHeight-l/n;l>window.innerHeight&&(i=window.innerHeight-window.innerHeight/n),pageYOffset>o-i&&pageYOffset<o+l?t.classList.add("_active"):t.classList.contains("_anim-no-hide")||t.classList.remove("_active")}}function offset(e){const t=e.getBoundingClientRect(),l=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+l}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),300)}