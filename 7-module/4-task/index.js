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
    this.stepsCollection = this.sliderSteps.querySelectorAll('span');
    for (let i = 0; i < steps; i++) {
      this.sliderSteps.append(document.createElement('span'));
    }

    this.setValue(value);
    this.changePos(value);

    this.elem.addEventListener('click', (evt) => {
      let value = this.findClosestValue(evt);
      this.setValue(value);
      this.changePos(value);

      this.elem.dispatchEvent(new CustomEvent("slider-change", {
        detail: value,
        bubbles: true
      }));
    });

    this.sliderThumb.addEventListener('pointerdown', (evt) => {
      this.elem.classList.add('slider_dragging');

      let onPointerMove = (evt) => {
        let evtCoords = evt.clientX - this.elem.getBoundingClientRect().left;
        let percent = evtCoords / this.elem.offsetWidth;

        if (percent < 0) {
          percent = 0;
        }
        if (percent > 1) {
          percent = 1;
        }

        this.sliderThumb.style.left = `${percent * 100}%`;
        this.sliderProgress.style.width = `${percent * 100}%`;

        let value = this.findClosestValue(evt);
        this.setValue(value);
      }

      document.addEventListener('pointermove', onPointerMove);

      let onPointerUp = (evt) => {
        let value = this.findClosestValue(evt);
        this.setValue(value);
        this.changePos(value);

        this.elem.classList.remove('slider_dragging');
        evt.currentTarget.removeEventListener('pointermove', onPointerMove);
        evt.currentTarget.removeEventListener('pointerup', onPointerUp);

        this.elem.dispatchEvent(new CustomEvent("slider-change", {
          detail: value,
          bubbles: true
        }));
      }

      document.addEventListener('pointerup', onPointerUp);
    })
  }

  findClosestValue(evt) {
    let evtCoords = evt.clientX - this.elem.getBoundingClientRect().left;
    if (evtCoords >= this.elem.offsetWidth) {
      evtCoords = this.elem.offsetWidth;
    }
    if (evtCoords < 0) {
      evtCoords = 0;
    }
    let leftRelative = evtCoords / this.elem.offsetWidth;
    return Math.round(leftRelative * (this.stepsCollection.length - 1));
  }

  changePos(value) {
    let percent = value / (this.stepsCollection.length - 1) * 100;
    this.sliderThumb.style.left = `${percent}%`;
    this.sliderProgress.style.width = `${percent}%`;
  }

  setValue(value) {
    this.sliderValue.textContent = value;
    this.sliderSteps.querySelector('.slider__step-active')?.classList.remove('slider__step-active');
    this.stepsCollection[value]?.classList.add('slider__step-active');
  }
}
