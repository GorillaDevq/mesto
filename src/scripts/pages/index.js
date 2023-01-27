import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, selectorObj, buttonEditProfile, formSubmitEdit, buttonAddCard, formSubmitAdd } from "../utils/constans.js";
import '../../pages/index.css'

const userInfo = new UserInfo({name: '.profile__name', profession: '.profile__profession'});
const formAddValidator = new FormValidator (selectorObj, formSubmitAdd);
const formEditValidator = new FormValidator (selectorObj, formSubmitEdit);
const popupWithImage = new PopupWithImage('.popup_type_image');

const createCard = (name, link, alt) => {
  const card = new Card(name, link, alt, '#card-element', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const submitFormAdd = data => {
  cardList.addItemPrepend(createCard(data.location, data.link, data.location));
}
const submitFormEdit = data => {
  userInfo.setUserInfo(data)
}
const popupAddCard = new PopupWithForm('.popup_type_add', submitFormAdd)

const popupEditProfile = new PopupWithForm('.popup_type_edit', submitFormEdit)

const handleCardClick = (link, alt, name) => {
  popupWithImage.open(link, alt, name)
}

const cardList = new Section({ renderer: (item) => {
  cardList.addItemAppend(createCard(item.name, item.link, item.alt));
}}, ".elements")
cardList.rendererItems(initialCards);

buttonEditProfile.addEventListener('click', function (){
  popupEditProfile.setInputValues(userInfo.getUserInfo())
  popupEditProfile.open();
});

buttonAddCard.addEventListener('click', function (){
  popupAddCard.open();
  formAddValidator.disableButton();
});

popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();
formEditValidator.enableValidation();
formAddValidator.enableValidation();
