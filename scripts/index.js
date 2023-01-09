import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { initialCards, selectorObj } from "./objects.js";

const popupList = Array.from(document.querySelectorAll('.popup'));
const popupEdit = document.querySelector('.popup_type_edit');
const buttonEditProfile = document.querySelector('.button_type_edit');
const professionUser = document.querySelector('.profile__profession');
const professionUserInput = document.querySelector('.popup__input_type_profession');
const nameUser = document.querySelector('.profile__name');
const nameUserInput = document.querySelector('.popup__input_type_name');
const formSubmitEdit = document.forms["user"];
const popupImage = document.querySelector('.popup_type_image');
const popupImageChoose = document.querySelector('.popup__image');
const popupLocationChoose = document.querySelector('.popup__location');
const popupAdd = document.querySelector('.popup_type_add');
const buttonAddCard = document.querySelector('.button_type_add');
const formSubmitAdd = document.forms["card"];
const locationInput = document.querySelector('.popup__input_type_location');
const linkInput = document.querySelector('.popup__input_type_link');
const sectionElement = document.querySelector('.elements');
const formElementList = document.querySelectorAll('.popup__form');

const openPopupImage = (link, alt, name) => {
  openPopup(popupImage);
  popupImageChoose.src = link;
  popupImageChoose.alt = alt;
  popupLocationChoose.textContent = name;
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
}

const closePopupByEscape = (evt) => {
  if (evt.key === 'Escape'){
    const findOpenPopup = document.querySelector('.popup_opened');
    closePopup(findOpenPopup);
  }
}

const createCard = (name, link, alt) => {
  const card = new Card(name, link, alt, '#card-element', openPopupImage);
  const cardElement = card.generateCard();
  return cardElement;
}

buttonEditProfile.addEventListener('click', function (){
  professionUserInput.value = professionUser.textContent;
  nameUserInput.value = nameUser.textContent;
  openPopup(popupEdit);
});

formSubmitEdit.addEventListener('submit', function (evt){
  evt.preventDefault();
  nameUser.textContent = nameUserInput.value;
  professionUser.textContent = professionUserInput.value;
  closePopup(popupEdit);
});

buttonAddCard.addEventListener('click', function (){
  const buttonElement = popupAdd.querySelector('.popup__submit');
  openPopup(popupAdd);
  const disableButton = new FormValidator (selectorObj, formSubmitAdd);
  disableButton._disableSubmitButton(buttonElement);
});

formSubmitAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  sectionElement.prepend(createCard(locationInput.value, linkInput.value, locationInput.value));
  evt.target.reset();
  closePopup(popupAdd);
});

popupList.forEach((popup) => {
  popup.addEventListener('mouseup', (event) => {
    const targetClassList = event.target.classList;
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close-image')) {
      closePopup(popup);
    }
  })
})

initialCards.forEach ((item) => {
  sectionElement.append(createCard(item.name, item.link, item.alt));
})

formElementList.forEach((formElement) => {
  const validator = new FormValidator (selectorObj, formElement);
  validator.enableValidation();
});

