export default class Card {
  static selector =  {
    element: '.element',
    heading: '.element__heading',
    image: '.element__image',
    like: '.element__like',
    trash: '.element__delete',
    trashHidden: 'element__delete_hidden',
    likeActive: 'element__like_active',
    likeCounter: '.element__counter'
  }

  constructor(data, templateSelector, userId, handleCardClick, { handleDeleteCard }, { handleLikeCard }) {
    this._data = data
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._arrLike = data.likes;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
  }

  getId() {
    return this._id
  }

  deleteCard = () => {
    this._element.remove()
    this._element = null
  }

  _checkOwnerId() {
    if (this._userId === this._ownerId) {
      this._cardTrash.classList.remove(Card.selector.trashHidden)
    } else {
      this._cardTrash.classList.add(Card.selector.trashHidden)
    }
  }

  _checkUserLike() {
    if (this.isLike()) {
      this._cardLike.classList.add(Card.selector.likeActive);
    } else {
      this._cardLike.classList.remove(Card.selector.likeActive);
    }
  }

  setlikeCounter(data) {
    this._cardLikeCounter.textContent = data.likes.length;
  }

  toggleLike() {
    this._cardLike.classList.toggle(Card.selector.likeActive);
  }

  isLike() {
    return this._arrLike.some((item) => {
      return item._id === this._userId
  })}

  _setListeners() {
    this._cardLike.addEventListener('click', () => {
      this._handleLikeCard();
    })
    this._cardTrash.addEventListener('click', () => { this._handleDeleteCard() })
    this._cardImage.addEventListener('click', () => { this._handleCardClick(this._data) })
  }

  generateCard() {
    this._template = document.querySelector(this._templateSelector);
    this._element = this._template
      .content
      .querySelector(Card.selector.element)
      .cloneNode(true);
    this._cardTrash = this._element.querySelector(Card.selector.trash);
    this._cardLike = this._element.querySelector(Card.selector.like);
    this._cardLikeCounter = this._element.querySelector(Card.selector.likeCounter);
    this._cardImage = this._element.querySelector(Card.selector.image);
    this._cardHeading = this._element.querySelector(Card.selector.heading);
    this._cardHeading.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardLikeCounter.textContent = this._arrLike.length;
    this._checkUserLike();
    this._checkOwnerId();
    this._setListeners();
    return this._element;
  }
}
