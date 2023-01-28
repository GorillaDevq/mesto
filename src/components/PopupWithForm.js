import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, submitForm ) {
    super(selector);
    this._form = this._element.querySelector(Popup.selectors.popupForm);
    this._submitForm = submitForm;
    this._inputList = this._form.querySelectorAll(Popup.selectors.popupInput);
  }

  _getInputValues() {
    this._odject = {};
    this._inputList.forEach(item => {
      this._odject[item.name] = item.value;
      return this._odject
    })
    return this._odject
  }

  setInputValues(data) {
    this._inputList.forEach(item => {
      item.value = data[item.name]
    })
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues())
    })
  }
}
