import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(selector){
    super(selector);
    this._elementImage = this._element.querySelector(Popup.selectors.popupImage);
    this._elementLocation = this._element.querySelector(Popup.selectors.popupLocation);
  }

  open(data) {
    super.open();
    this._elementImage.src = data.link;
    this._elementImage.alt = data.name;
    this._elementLocation.textContent = data.name;
  }
}
