import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import { initialCards, selectorObj, buttonEditProfile, formSubmitEdit, popupAdd, buttonAddCard, formSubmitAdd, sectionElement } from "./objects.js";

const userInfo = new UserInfo('.profile__name', '.profile__profession')
const formAddValidator = new FormValidator (selectorObj, formSubmitAdd);
const formEditValidator = new FormValidator (selectorObj, formSubmitEdit);
const popupWithImage = new PopupWithImage('.popup_type_image')

const createCard = (name, link, alt) => {
  const card = new Card(name, link, alt, '#card-element', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const popupAddCard = new PopupWithForm('.popup_type_add', { submitForm: (evt) => {
    evt.preventDefault();
    const { location, link } = popupAddCard._getInputValues();
    sectionElement.prepend(createCard(location.value, link.value, location.value));
    popupAddCard.close()
  }
})

const popupEditProfile = new PopupWithForm('.popup_type_edit', { submitForm: (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo();
  popupEditProfile.close();
  }
})

const handleCardClick = (link, alt, name) => {
  popupWithImage.open(link, alt, name)
}

const cardList = new Section({ items: initialCards, renderer: (item) => {
  cardList.addItem(createCard(item.name, item.link, item.alt));
}}, ".elements")
cardList.renderer();

buttonEditProfile.addEventListener('click', function (){
  userInfo.getUserInfo();
  popupEditProfile.open();
});

buttonAddCard.addEventListener('click', function (){
  popupAddCard.open();
  const buttonElement = popupAdd.querySelector('.popup__submit');
  formAddValidator.disableButton(buttonElement);
});

popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();
formEditValidator.enableValidation();
formAddValidator.enableValidation();


