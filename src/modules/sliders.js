import { Swiper, Pagination, Autoplay } from "swiper";

const params = {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    enabled: true,
  },
  modules: [Autoplay, Pagination],
};

export const slidersInit = (selectorSlider, newParams) => {
  new Swiper(selectorSlider, {
    ...params,
    ...newParams,
  });
};
