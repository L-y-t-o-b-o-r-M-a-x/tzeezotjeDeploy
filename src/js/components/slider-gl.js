import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const elList = document.querySelector(".news-slider-gallery");
console.log(elList);

const swiperGallery = new Swiper(elList, {
  slidesPerView: "auto",
  // slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  initialSlide: 1,

  spaceBetween: 30,
  navigation: {
    prevEl: ".news-btn--gallery-prev",
    nextEl: ".news-btn--gallery-next",
  },

  // breakpoints: {
  //   1200: {
  //     slidesPerView: 1,
  //   },
  // }
});
