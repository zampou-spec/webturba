const navbar = document.querySelector('.navbar')
const menu = document.querySelector('.navbar nav')
const menu_icon_open = document.querySelector('.mobile-icon-open')
const menu_icon_close = document.querySelector('.mobile-icon-close')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150

  if (y >= 1.34) {
    navbar.classList.add('fixed')
  } else {
    navbar.classList.remove('fixed')
  }
})

menu_icon_open.addEventListener('click', () => {
  menu.style.left = 0;
})

menu_icon_close.addEventListener('click', () => {
  menu.style.left = '100%';
})

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
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 2500,
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
    1440: {
      slidesPerView: 4,
    },
    2560: {
      slidesPerView: 5,
    },
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
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 2500,
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
    1440: {
      slidesPerView: 4,
    },
    2560: {
      slidesPerView: 5,
    },
  }
})