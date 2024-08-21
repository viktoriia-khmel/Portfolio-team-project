import reviewsMarkup from './reviews-markup';

const reviewsCreate = async (data, reviewsContainer) => {
  try {
    let strMarkup = '';
    if (data.length === 0) {
      strMarkup = `<span class="notfound">Not found!</span>`;
    } else {
      strMarkup = reviewsMarkup(data);
    }
    reviewsContainer.innerHTML = '';

    reviewsContainer.insertAdjacentHTML('beforeend', strMarkup);
  } catch (error) {
    console.error('Error creating reviews:', error);
  }
};

export default reviewsCreate;