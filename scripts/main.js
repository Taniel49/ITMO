const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    564: {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: false,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  }
});
