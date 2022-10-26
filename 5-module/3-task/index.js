function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel__inner');
  const carouselSlide = carousel.querySelector('.carousel__slide');
  const slidesAmount = carousel.querySelectorAll('.carousel__slide').length;
  const carouselArrowRight = carousel.querySelector('.carousel__arrow_right');
  const carouselArrowLeft = carousel.querySelector('.carousel__arrow_left');
  let count = 0;

  carouselArrowLeft.style.display = "none";

  carouselArrowRight.addEventListener('click', function() {
    ++count;
    if (count === slidesAmount - 1) {
      this.style.display = "none";
    } else {
      carouselArrowLeft.style.display = "";
      carouselArrowRight.style.display = "";
    }
    carouselInner.style.transform = `translateX(-${carouselSlide.offsetWidth * count}px)`;
  });

  carouselArrowLeft.addEventListener('click', function() {
    --count;
    if (count === 0) {
      this.style.display = "none";
    } else {
      carouselArrowLeft.style.display = "";
      carouselArrowRight.style.display = "";
    }
    carouselInner.style.transform = `translateX(-${carouselSlide.offsetWidth * count}px)`;
  });
}
