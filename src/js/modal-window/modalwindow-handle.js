import { KEY_CODE_ESC } from '../footer/errors-messages';
import modalDelete from './modal-window-delete';

let modalBackdrop = document.querySelector('.modal-backdrop');
modalBackdrop && modalBackdrop.addEventListener('click', onBackdropClick);

let closeBtn;

function openModalWindow() {
  modalBackdrop.classList.add('is-open');
  window.addEventListener('keydown', onWindowKeydown);
  closeBtn = document.querySelector('.modal-close-btn');
  closeBtn && closeBtn.addEventListener('click', onCloseBtn);
}

function onWindowKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    onCloseBtn(event);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseBtn(event);
  }
}

function onCloseBtn(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  modalBackdrop.classList.remove('is-open');
  modalDelete(modalBackdrop);
}

export default openModalWindow;