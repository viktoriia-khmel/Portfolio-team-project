function reviewsMarkup(reviews = []) {
  if (!reviews || reviews.length === 0) {
    return '';
  }

  return reviews.reduce(
    (
      strMarkup,
      {
        _id,
        author = 'Anonymous',
        avatar_url = 'default-avatar.png',
        review = 'No review provided',
      }
    ) =>
      strMarkup +
      `
       <li class="reviews-list-item swiper-slide" id="review-${_id}">
        <img
          class="reviews-list-avatar"
          src="${avatar_url}"
          alt="${author} avatar"
        />
        <div class="reviews-list-item-info">
          <h3 class="reviews-list-fullname">${escapeHTML(author)}</h3>
          <p class="reviews-list-text">
            ${escapeHTML(review)}
          </p>
        </div>
      </li>
      `,
    ''
  );
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function (match) {
    const escapeChars = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return escapeChars[match];
  });
}

export default reviewsMarkup;