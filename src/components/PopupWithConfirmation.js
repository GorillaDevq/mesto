import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(selector, confirmForm) {
    super(selector)
    this._form = this._element.querySelector(Popup.selectors.popupForm);
    this._confirmForm = confirmForm;
    this._submitButton = this._form.querySelector(Popup.selectors.popupSubmit);
  }

  open(functionDelete, cardId) {
    super.open()
    this._delete = functionDelete
    this._id = cardId
  }

  setText(text) {
    this._submitButton.textContent = text
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._confirmForm(this._delete, this._id)
    })
  }
}
