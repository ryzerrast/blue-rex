if( $('.client__content').length > 0 ) {
   $('.client__content').slick({
      dots: true,
      arrows: false,
      accessibility: false,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplaySpeed: 3000
    });
}

if( $('.dream__slider').length > 0 ) {
   $('.dream__slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
}