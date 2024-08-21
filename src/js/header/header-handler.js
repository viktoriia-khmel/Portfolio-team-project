import { customScrollToElement } from '../helpers/scroll';

const menuBtn = document.querySelector('.js-header-menu-btn');
const headerMenuRef = document.querySelector('.js-header-menu');
const headerOrderLinkRef = document.querySelector('.js-header-order-link');

menuBtn && menuBtn.addEventListener('click', handleMenuOpen);
headerMenuRef && headerMenuRef.addEventListener('click', handleScrollDocument);

headerOrderLinkRef &&
  headerOrderLinkRef.addEventListener('click', handlerOrderLink);

function handleMenuOpen() {
  headerMenuRef && headerMenuRef.classList.toggle('isopen');
}

function handleScrollDocument(event) {
  event.preventDefault();
  const item = event.target;
  if (!item.matches('a')) return;
  const targetId = item.getAttribute('href').substring(1);
  customScrollToElement(targetId);
  handleMenuOpen();
}

function handlerOrderLink(event) {
  event.preventDefault();
  const item = event.target;
  if (!item.matches('a')) return;
  const targetId = item.getAttribute('href').substring(1);
  customScrollToElement(targetId);
}