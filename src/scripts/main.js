// const swiper = new Swiper('.swiper', {
//   slidesPerView: 3,
//   spaceBetween: 0,
//   freeMode: true,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//   },
//   pagination: {
//     clickable: true,
//   },
// });
const swiper = new Swiper('.swiper', {
  freeMode: {
    enabled: true,
    sticky: true,
  },
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  // slidesPerView: 4,
  slidesPerView: 2,
  spaceBetween: 0,
  speed: 2300,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    2560: {
      slidesPerView: 4,
    }
  }
});