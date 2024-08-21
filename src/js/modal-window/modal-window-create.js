import modalWindowMarkup from './modal-window-markup';

const modalCreate = async (data, modalContainer) => {
  const strMarkup = modalWindowMarkup(data);
  modalContainer.innerHTML = '';
  modalContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default modalCreate;