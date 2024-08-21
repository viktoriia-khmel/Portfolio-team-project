import { createErrMsg, createOkMsg } from '../helpers/create-msg';
import { customScrollToElement } from '../helpers/scroll';
import {
  setupCustomInputHandlers,
  getCustomInputValue,
  resetCustomInputValue,
} from './custom-input-handle';

import modalCreate from '../modal-window/modal-window-create';
import validateEmail from './validate-email';
import { axiosInst } from '../helpers/api';
import { WRONG_EMAIL, NO_COMMENT, NO_EMAIL } from './errors-messages';
import openModalWindow from '../modal-window/modalwindow-handle';

document.addEventListener('DOMContentLoaded', setupCustomInputHandlers);

const formRef = document.querySelector('.footer-form');
const emailInputRef = formRef.querySelector('.footer-email');
const commentInputRef = formRef.querySelector('.footer-comment');
const footerBtn = document.querySelector('.footer-button');
const errEmailSpanRef = document.querySelector('.footer-email-error');
const errCommentSpanRef = document.querySelector('.footer-comment-error');

const scrollUpBtn = document.querySelector('.js-footer-scroll-up');
if (scrollUpBtn) {
  scrollUpBtn.addEventListener('click', () => {
    customScrollToElement('id-hero', 3000);
  });
}

const successEmailSpanRef = document.querySelector('.footer-email-success');

formRef && formRef.addEventListener('submit', handleSendMessage);

const inputFields = [emailInputRef, commentInputRef];
inputFields.forEach(input => {
  if (input) {
    input.addEventListener('input', changeInputsStyle);
    input.addEventListener('input', changeBtnStatus);
    input.addEventListener('keydown', removeInputsMessages);
    input.addEventListener('focus', removeInputsMessages);
  }
});

async function handleSendMessage(event) {
  event.preventDefault();

  const emailValue = getCustomInputValue(emailInputRef);
  if (!emailValue) {
    showError(errEmailSpanRef, emailInputRef, NO_EMAIL);
    return;
  }
  const commentValue = getCustomInputValue(commentInputRef);
  if (!commentValue) {
    showError(errCommentSpanRef, commentInputRef, NO_COMMENT);
    return;
  }

  if (!validateEmail(emailValue)) {
    showError(errEmailSpanRef, emailInputRef, WRONG_EMAIL);
    return;
  }

  const bodyRequest = { email: emailValue, comment: commentValue };

  try {
    const response = await axiosInst.post('requests', bodyRequest);
    if (response) {
      if (response.status >= 200 && response.status < 300) {
        await modalCreate(
          response.data,
          document.querySelector('.modal-backdrop')
        );
        createOkMsg('Success!');
        openModalWindow();
        resetCustomInputValue(emailInputRef);
        resetCustomInputValue(commentInputRef);
        successEmailSpanRef && successEmailSpanRef.classList.add('visible');
        emailInputRef && emailInputRef.classList.add('success');
        formRef.reset();
      }
    }
  } catch (error) {
    showError(errEmailSpanRef, emailInputRef, WRONG_EMAIL);
  } finally {
    changeBtnStatus();
  }
}

function changeBtnStatus() {
  footerBtn.disabled =
    !emailInputRef.value.trim() || !commentInputRef.value.trim();
}

function changeInputsStyle() {
  errEmailSpanRef && errEmailSpanRef.classList.remove('visible');
  errCommentSpanRef && errCommentSpanRef.classList.remove('visible');
  emailInputRef && emailInputRef.classList.remove('error');
  commentInputRef && commentInputRef.classList.remove('error');
}

function removeInputsMessages() {
  errEmailSpanRef && errEmailSpanRef.classList.remove('visible');
  errCommentSpanRef && errCommentSpanRef.classList.remove('visible');
  successEmailSpanRef && successEmailSpanRef.classList.remove('visible');
  emailInputRef && emailInputRef.classList.remove('error');
  commentInputRef && commentInputRef.classList.remove('error');
  emailInputRef && emailInputRef.classList.remove('success');
}

function showError(spanRef, inputRef, message) {
  spanRef && spanRef.classList.add('visible');
  inputRef && inputRef.classList.add('error');
  createErrMsg(message);
}

changeBtnStatus();