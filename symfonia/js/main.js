$('.otziv__content').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows : false,
  dots: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

new WOW().init();

