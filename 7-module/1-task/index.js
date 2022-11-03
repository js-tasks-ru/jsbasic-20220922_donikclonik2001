import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = createElement(`
        <div class="ribbon">
          <button class="ribbon__arrow ribbon__arrow_left">
            <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
          </button>
          <nav class="ribbon__inner">
          </nav>
          <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
            <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
          </button>
        </div>`);

      this.ribbonInner = this.elem.querySelector('.ribbon__inner');

      categories.forEach(category => {
        let categoryLink = createElement(`<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`);
        categoryLink.addEventListener('click', (evt) => {
          evt.preventDefault();
          this.elem.querySelector('.ribbon__item_active')?.classList.remove('ribbon__item_active');
          evt.currentTarget.classList.add('ribbon__item_active');

          let customEvent = new CustomEvent('ribbon-select', {
            detail: category.id,
            bubbles: true
          });
          this.elem.dispatchEvent(customEvent);
        });

        this.ribbonInner.append(categoryLink);
      });

      this.ribbonInner.addEventListener('scroll', () => {
        let scrollLeft = this.ribbonInner.scrollLeft;
        let scrollRight = this.ribbonInner.scrollWidth - this.ribbonInner.clientWidth - scrollLeft;

        if (scrollLeft < 1) {
          this.leftArrow.classList.remove('ribbon__arrow_visible');
        } else {
          this.leftArrow.classList.add('ribbon__arrow_visible');
        }

        if (scrollRight < 1) {
          this.rightArrow.classList.remove('ribbon__arrow_visible');
        } else {
          this.rightArrow.classList.add('ribbon__arrow_visible');
        }
      });

      this.leftArrow = this.elem.querySelector('.ribbon__arrow_left');
      this.leftArrow.addEventListener('click', () => {
        this.ribbonInner.scrollBy(-350, 0);
      });

      this.rightArrow = this.elem.querySelector('.ribbon__arrow_right');
      this.rightArrow.addEventListener('click', () => {
        this.ribbonInner.scrollBy(350, 0);
      });
  }
}
