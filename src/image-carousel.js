export const InitImageCarousel = () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.image');
  let timeOutId;

  const showSlide = (index) => {
    clearTimeout(timeOutId);
    currentIndex = index;
    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < slides.length; i++) {
      if (i === index) {
        slides[i].style.display = 'block';
        dots[i].classList.add('selected');
        continue;
      }
      slides[i].style.display = 'none';
      dots[i].classList.remove('selected');
    }
    if (index < slides.length - 1) {
      index += 1;
    } else {
      index = 0;
    }
    timeOutId = setTimeout(showSlide, 5000, index);
  };

  const dotContainer = document.querySelector('.dot-container');
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  dotContainer.addEventListener('click', (e) => {
    if (e.target.dataset.index != null) {
      const index = Number(e.target.dataset.index);
      showSlide(index);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex += 1;
      showSlide(currentIndex);
      return;
    }
    currentIndex = 0;
    showSlide(currentIndex);
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      showSlide(currentIndex);
      return;
    }
    currentIndex = slides.length - 1;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
};
