export const InitImageCarousel = () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.image');

  const showSlide = (index) => {
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
  };

  const dotContainer = document.querySelector('.dot-container');

  dotContainer.addEventListener('click', (e) => {
    if (e.target.dataset.index != null) {
      const index = Number(e.target.dataset.index);
      showSlide(index);
    }
  });

  const nextButton = document.querySelector('.next');
  nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex += 1;
      showSlide(currentIndex);
      return;
    }
    currentIndex = 0;
    showSlide(currentIndex);
  });

  const prevButton = document.querySelector('.prev');
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
