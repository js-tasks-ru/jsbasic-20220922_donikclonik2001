import createElement from "../../assets/lib/create-element.js";
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.elem = createElement(`
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value"></span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">
        </div>
      </div>
    `);

    this.sliderThumb = this.elem.querySelector('.slider__thumb');
    this.sliderValue = this.elem.querySelector('.slider__value');
    this.sliderProgress = this.elem.querySelector('.slider__progress');

    this.sliderSteps = this.elem.querySelector('.slider__steps');
    for (let i = 0; i < steps; i++) {
      this.sliderSteps.append(document.createElement('span'));
    }

    this.stepsCollection = this.sliderSteps.querySelectorAll('span');

    this.setValue(value);

    this.elem.addEventListener('click', (evt) => {
      let evtCoords = evt.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = evtCoords / this.elem.offsetWidth;
      let value = Math.round(leftRelative * (this.stepsCollection.length - 1));
      this.setValue(value);

      this.elem.dispatchEvent(new CustomEvent("slider-change", {
        detail: value,
        bubbles: true
      }))
    })
  }

  setValue(value) {
    this.sliderValue.textContent = value;

    this.sliderSteps.querySelector('.slider__step-active')?.classList.remove('slider__step-active');
    this.stepsCollection[value]?.classList.add('slider__step-active');

    let percent = value / (this.stepsCollection.length - 1) * 100;

    this.sliderThumb.style.left = `${percent}%`;
    this.sliderProgress.style.width = `${percent}%`;
  }
}
