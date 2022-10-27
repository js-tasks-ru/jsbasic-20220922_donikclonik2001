import createElement from '../../assets/lib/create-element.js';
export default class Carousel {

  constructor(slides) {
    this.slides = slides;

    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
        </div>
      </div>`);

      let carouselInner = this.elem.querySelector('.carousel__inner');

      slides.forEach(slide => {
        let slideElement = createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="../../assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`);

        let addButton = slideElement.querySelector('.carousel__button');
        let productAddEvent = new CustomEvent('product-add', {
          bubbles: true,
          detail: slide.id,
        });
        
        addButton.addEventListener('click', () => {
          this.elem.dispatchEvent(productAddEvent);
        })

        carouselInner.append(slideElement);
      });

      this.initCarousel();
  }

  initCarousel() {
    const carousel = this.elem;
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
}
