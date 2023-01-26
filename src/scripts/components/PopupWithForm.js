import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, { submitForm }) {
    super(selector);
    this._element = document.querySelector(selector);
    this._form = this._element.querySelector(Popup.selectors.popupForm);
    this._submitForm = submitForm;
  }

  _getInputValues() {
    const { elements } = this._form;
    return elements
  }

  close() {
    this._element.classList.remove(Popup.selectors.popupActive);
    document.removeEventListener('keydown', (evt) => { this._handleEscClose(evt) });
    this._form.reset();
  }

  setEventListeners() {
    this._element.addEventListener('mouseup', (evt) =>{
      const targetClassList = evt.target.classList;
      if (targetClassList.contains(Popup.selectors.popup) || targetClassList.contains(Popup.selectors.popupCloseImage)) {
        this.close();
      }
    });
    this._form.addEventListener('submit', this._submitForm)
  }
}
