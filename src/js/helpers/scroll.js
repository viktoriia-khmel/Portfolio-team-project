export const scrollUp = () => {
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }
};

export const scrollToElement = elementId => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: offsetTop - 60, behavior: 'smooth' });
  }
};

export const scrollDown = () => {
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition < documentHeight) {
    setTimeout(function () {
      window.scrollBy({
        top: documentHeight - scrollPosition,
        behavior: 'smooth',
      });
    }, 300);
  }
};

export const customScrollToElement = (elementId, duration = 1000) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const start = window.scrollY;
  const target = element.getBoundingClientRect().top + start;
  const startTime = performance.now();

  const animateScroll = currentTime => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + (target - start) * easeInOutQuad(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  const easeInOutQuad = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  requestAnimationFrame(animateScroll);
};