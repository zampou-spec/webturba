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
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  slidesPerView: 3,
  speed: 2300,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //   },
  // }
});