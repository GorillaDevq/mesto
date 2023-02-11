import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, submitForm) {
    super(selector);
    this._form = this._element.querySelector(Popup.selectors.popupForm);
    this._submitForm = submitForm;
    this._inputList = this._form.querySelectorAll(Popup.selectors.popupInput);
    this._submitButton = this._form.querySelector(Popup.selectors.popupSubmit);
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(item => {
      this._inputValues[item.name] = item.value;
      return this._inputValues
    })
    return this._inputValues
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

  setText(text) {
    this._submitButton.textContent = text
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues())
    })
  }
}
