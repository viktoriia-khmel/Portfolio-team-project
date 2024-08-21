import { customScrollToElement } from '../helpers/scroll';

const mobileMenuBtn = document.querySelector('.js-header-mobile-menu-btn');
const mobileMenuRef = document.querySelector('.js-mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.js-mobile-menu-close-btn');
const mobileNavRef = document.querySelector('.js-mobile-menu-nav');
const mobileOrderLink = document.querySelector('.js-mobile-menu-order');

mobileMenuBtn && mobileMenuBtn.addEventListener('click', handleOpenMobileMenu);

mobileMenuCloseBtn &&
  mobileMenuCloseBtn.addEventListener('click', handleCloseMobileMenu);
mobileNavRef && mobileNavRef.addEventListener('click', handleScrollDocument);
mobileOrderLink &&
  mobileOrderLink.addEventListener('click', handleScrollDocument);

function handleOpenMobileMenu() {
  mobileMenuRef.classList.add('is-open');
}

function handleCloseMobileMenu() {
  mobileMenuRef.classList.remove('is-open');
}

function handleScrollDocument(event) {
  event.preventDefault();
  const item = event.target;
  if (!item.matches('a')) return;
  const targetId = item.getAttribute('href').substring(1);
  customScrollToElement(targetId);
  handleCloseMobileMenu();
}