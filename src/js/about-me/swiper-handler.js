import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiperSkills = new Swiper('.about-skills-container', {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 2,
  loop: true,
  navigation: {
    nextEl: '.about-arrow-btn-next',
  },
  speed: 700,
  effect: 'coverflow', // ('slide', 'fade', 'cube', 'coverflow', '')
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 2,
    },
  },
});

swiperSkills.on('init', updateActiveElement);
swiperSkills.on('slideChange', updateActiveElement);

function updateActiveElement() {
  if (!swiperSkills || !swiperSkills.slides) return;

  swiperSkills.slides.forEach(slide => {
    slide.classList.remove('active');
  });

  const activeSlide = swiperSkills.slides[swiperSkills.activeIndex];
  if (activeSlide) {
    activeSlide.classList.add('active');
  }
}