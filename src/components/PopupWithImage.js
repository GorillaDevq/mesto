import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(selector){
    super(selector);
  }

  open(data) {
    super.open();
    this._element.querySelector(Popup.selectors.popupImage).src = data.link;
    this._element.querySelector(Popup.selectors.popupImage).alt = data.name;
    this._element.querySelector(Popup.selectors.popupLocation).textContent = data.name;
  }
}
