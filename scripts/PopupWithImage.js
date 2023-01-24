import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(selector){
    super(selector);
    this._element = document.querySelector(selector);
  }

  open(link, alt, name) {
    this._element.classList.add(Popup.selectors.popupActive);
    document.addEventListener('keydown', (evt) => { super._handleEscClose(evt) });
    this._element.querySelector(Popup.selectors.popupImage).src = link;
    this._element.querySelector(Popup.selectors.popupImage).alt = alt;
    this._element.querySelector(Popup.selectors.popupLocation).textContent = name;
  }
}
