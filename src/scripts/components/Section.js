export default class Section {
  constructor({renderer}, selectorContainer) {
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  addItemAppend(element) {
    this._container.append(element);
  }

  addItemPrepend(element) {
    this._container.prepend(element);
  }

  rendererItems(cardsObj) {
    cardsObj.forEach(item => {
      this._renderer(item)
    })
  }
}
