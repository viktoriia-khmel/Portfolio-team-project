import getReviewsList from './get-reviews';
//import { getReviewsList } from './get-reviews';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

let reviewsSwiper;

getReviewsList()
  .then(() => {
    if (!isEnableSwiperContainer) return;
    reviewsSwiper = new Swiper('.reviews-swiper-container', {
      modules: [Navigation],
      slidesPerView: 1,
      loop: false,
      navigation: {
        nextEl: '.reviews-btn-next',
        prevEl: '.reviews-btn-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
      speed: 700,
      effect: 'coverflow', // ('slide', 'fade', 'cube', 'coverflow', '')
      on: {
        init: updateNavigationState,
        slideChange: updateNavigationState,
      },
      touchEventsTarget: 'wrapper',
      simulateTouch: true,
      touchRatio: 1,
      touchAngle: 45,
    });
  })
  .catch(error => {
    console.error(error.message);
  });

function updateNavigationState() {
  if (!reviewsSwiper) return;

  const prevButton = document.querySelector('.reviews-btn-prev');
  const nextButton = document.querySelector('.reviews-btn-next');

  if (reviewsSwiper.isBeginning) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (reviewsSwiper.isEnd) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function hideNavigateBtns() {
  const prevButton = document.querySelector('.reviews-btn-prev');
  const nextButton = document.querySelector('.reviews-btn-next');

  prevButton && prevButton.classList.add('hide');
  nextButton && nextButton.classList.add('hide');
}

function isEnableSwiperContainer() {
  const containerRef = document.querySelector('.reviews-container');
  const containerSwiperRef = document.querySelector(
    '.reviews-swiper-container'
  );
  const prevBtnRef = document.querySelector('.reviews-btn-prev');
  const nextBtnRef = document.querySelector('.reviews-btn-next');
  const listItemRef = containerRef.querySelector('.reviews-list-item');

  if (
    !containerRef ||
    !containerSwiperRef ||
    !prevBtnRef ||
    !nextBtnRef ||
    !listItemRef
  ) {
    hideNavigateBtns();
    return false;
  }

  return true;
}