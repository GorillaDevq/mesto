import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(selector){
    super(selector);
  }

  open(link, alt, name) {
    super.open();
    this._element.querySelector(Popup.selectors.popupImage).src = link;
    this._element.querySelector(Popup.selectors.popupImage).alt = alt;
    this._element.querySelector(Popup.selectors.popupLocation).textContent = name;
  }
}
