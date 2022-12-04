new Swiper('.slider-1', {
  freeMode: {
    enabled: true,
    sticky: true,
  },
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
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
      slidesPerView: 5,
      // innerHeight: 100
    }
  }
})

new Swiper('.slider-2', {
  freeMode: {
    enabled: true,
    sticky: true,
  },
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  slidesPerView: 2,
  spaceBetween: 0,
  speed: 2300,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    2560: {
      slidesPerView: 10,
    }
  }
})