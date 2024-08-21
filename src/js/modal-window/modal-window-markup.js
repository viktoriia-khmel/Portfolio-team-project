import iconURL from '../../img/icons/symbols.svg';

function modalWindowMarkup({ title, message }) {
  return `
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"            
                aria-label="Close icon"
              >
                <use href="${iconURL}#icon-x"></use>
              </svg>
            </button>
            <p class="modal-title">
              ${title}            
            </p>
            <p class="modal-message">${message}</p>
          </div>
        </div>   
      `;
}

export default modalWindowMarkup;