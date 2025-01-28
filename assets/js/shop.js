let swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 2,
  grabCursor: true,
  spaceBetween: 10,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    993: {
      slidesPerView: 4,
    },
  },
});
