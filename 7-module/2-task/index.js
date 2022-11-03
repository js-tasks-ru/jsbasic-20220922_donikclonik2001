import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(`
    <div class="modal">
      <div class="modal__overlay">
      </div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="../../assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title">
          </h3>
        </div>
        <div class="modal__body">
        </div>
      </div>
    </div>`);

    this.elem.querySelector('.modal__close').addEventListener('click', () => {
      this.close();
    });

    this.setEsc = function(evt) {
      if (evt.code === 'Escape') {
        this.close();
      }
    }.bind(this);
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.append(this.elem);
    document.addEventListener('keydown', this.setEsc);
  }

  setTitle(title) {
    this.elem.querySelector('.modal__title').textContent = title;
  }

  setBody(node) {
    let modalBody = this.elem.querySelector('.modal__body')
    modalBody.innerHTML = '';
    modalBody.append(node);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    document.body.querySelector('.modal')?.remove();
    document.removeEventListener('keydown', this.setEsc);
  }
}
