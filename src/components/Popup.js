export default class Popup {
  static selectors = {
    popup: 'popup',
    popupActive: 'popup_opened',
    popupCloseImage: 'popup__close-image',
    buttonEdit: '.button_type_edit',
    buttonAdd: '.button_type_add',
    popupImage: '.popup__image',
    popupLocation: '.popup__location',
    popupInput: '.popup__input',
    popupForm: '.popup__form',
    popupSubmit: '.popup__submit'
  }

  constructor(selector) {
    this._element = document.querySelector(selector);
  }

  open() {
    this._element.classList.add(Popup.selectors.popupActive);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._element.classList.remove(Popup.selectors.popupActive);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._element.addEventListener('mouseup', (evt) =>{
      const targetClassList = evt.target.classList;
      if (targetClassList.contains(Popup.selectors.popup) || targetClassList.contains(Popup.selectors.popupCloseImage)) {
        this.close();
      }
    });
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
}
