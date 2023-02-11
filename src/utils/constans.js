const selectorObj = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
}

const options = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '51623cde-03bb-453b-8d97-8650ef55de1f',
    'Content-Type': 'application/json'
  }
}

const buttonEditProfile = document.querySelector('.button_type_edit');
const formSubmitEdit = document.forms["user"];
const buttonAddCard = document.querySelector('.button_type_add');
const formSubmitAdd = document.forms["card"];
const formSubmitAvatar = document.forms["avatar"];
const avatarListener = document.querySelector('.profile__avatar')

export { options, selectorObj, buttonEditProfile, formSubmitEdit, buttonAddCard, formSubmitAdd, formSubmitAvatar, avatarListener }
