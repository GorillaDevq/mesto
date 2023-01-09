class Card {
  static selector =  {
    element: '.element',
    heading: '.element__heading',
    image: '.element__image',
    like: '.element__like',
    trash: '.element__delete'
  }

  constructor(name, link, alt, templateSelector, openPopup) {
    this._name = name;
    this._link = link;
    this._alt = alt;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
  }

  _listenerLike() {
    this._element.querySelector(Card.selector.like).classList.toggle('element__like_active');
  }

  _listenerTrash() {
    this._element.querySelector(Card.selector.trash).closest(Card.selector.element).remove();
  }

  _listenerImage() {
    openPopup(popupImage);
    popupImageChoose.src = this._link;
    popupImageChoose.alt = this._alt;
    popupLocationChoose.textContent = this._name;
  }

  _setListeners() {
    this._element.querySelector(Card.selector.like).addEventListener('click', () => {
      this._listenerLike();
    })

    this._element.querySelector(Card.selector.trash).addEventListener('click', () => {
      this._listenerTrash();
    })

    this._element.querySelector(Card.selector.image).addEventListener('click', () => { this._openPopup(this._link, this._alt, this._name) })
  }

  generateCard() {
    this._template = document.querySelector(this._templateSelector);
    this._element = this._template
      .content
      .querySelector(Card.selector.element)
      .cloneNode(true);
    this._element.querySelector(Card.selector.heading).textContent = this._name;
    this._element.querySelector(Card.selector.image).src = this._link;
    this._element.querySelector(Card.selector.image).alt = this.alt;
    this._setListeners();
    return this._element
  }
}

export { Card }
