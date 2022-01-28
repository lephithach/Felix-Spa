$(".partner-slider").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  arrow: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
      },
    },
  ],
});
