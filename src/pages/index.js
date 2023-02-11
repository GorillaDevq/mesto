import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import { options, selectorObj, buttonEditProfile, formSubmitEdit, buttonAddCard, formSubmitAdd, formSubmitAvatar, avatarListener } from "../utils/constans.js";
import './index.css'

const formAddValidator = new FormValidator (selectorObj, formSubmitAdd);
const formEditValidator = new FormValidator (selectorObj, formSubmitEdit);
const formAvatarValidator = new FormValidator (selectorObj, formSubmitAvatar);
const popupWithImage = new PopupWithImage('.popup_type_image');

const api = new Api(options);
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData)
    cardList.rendererItems(cards)
  })
  .catch((err) => { console.log(err) })

const userInfo = new UserInfo({name: '.profile__name', profession: '.profile__profession', avatar: '.profile__avatar'});

const createCard = (data) => {
  const card = new Card(data, '#card-element', userInfo.getUserId(), handleCardClick, { handleDeleteCard: () => {
    popupDeleteConfirm.open(card.deleteCard, card.getId())
  }}, { handleLikeCard: () => {
    if (!card.isLike()) {
      api.putLikeCard(card.getId())
        .then((res) => {
          card.setlikeCounter(res)
          card.toggleLike();
        })
        .catch((err) => { console.log(err) })
    } else {
      api.deleteLikeCard(card.getId())
        .then((res) => {
          card.setlikeCounter(res)
          card.toggleLike();
        })
        .catch((err) => { console.log(err) })
    }
  }});
  console.log(userInfo.getUserId())
  const cardElement = card.generateCard();
  return cardElement;
}

const submitFormAdd = (data) => {
  popupAddCard.setText('Создание...')
  api.postNewCard(data)
    .then((res) => {
      cardList.addItemPrepend(createCard(res))
      popupAddCard.close()
    })
    .catch((err) => { console.log(err) })
    .finally(() => { popupAddCard.setText('Создать') })
}

const submitFormEdit = (data) => {
  popupEditProfile.setText('Сохранение...')
  api.setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res)
      popupEditProfile.close();
    })
    .catch((err) => { console.log(err) })
    .finally(() => { popupEditProfile.setText('Сохранить') })
}

const submitFormConfirm = (functionDelete, cardId) => {
  popupDeleteConfirm.setText('Удаление...')
  api.deleteCard(cardId)
    .then(() => {
      functionDelete()
      popupDeleteConfirm.close()
    })
    .catch((err) => { console.log(err) })
    .finally(() => { popupDeleteConfirm.setText('Да') })
}

const submitFormAvatar = (data) => {
  popupSetAvatar.setText('Сохранение...')
  api.setAvatar(data)
    .then((res) => {
      userInfo.setUserInfo(res)
      popupSetAvatar.close()
    })
    .catch((err) => { console.log(err) })
    .finally(() => { popupSetAvatar.setText('Сохранить') })
}

const popupAddCard = new PopupWithForm('.popup_type_add', submitFormAdd)
const popupEditProfile = new PopupWithForm('.popup_type_edit', submitFormEdit)
const popupDeleteConfirm = new PopupWithConfirmation('.popup_type_confirm', submitFormConfirm)
const popupSetAvatar = new PopupWithForm('.popup_type_avatar', submitFormAvatar)


const handleCardClick = (data) => {
  popupWithImage.open(data)
}


const cardList = new Section({ renderer: (item) => {
  cardList.addItemAppend(createCard(item));
}}, ".elements")

buttonEditProfile.addEventListener('click', function (){
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formEditValidator.resetValidation();
  popupEditProfile.open();
});

buttonAddCard.addEventListener('click', function (){
  formAddValidator.resetValidation();
  popupAddCard.open();
});

avatarListener.addEventListener('click', function (){
  formAvatarValidator.resetValidation();
  popupSetAvatar.open();
})



popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupDeleteConfirm.setEventListeners();
popupSetAvatar.setEventListeners();
popupWithImage.setEventListeners();
formEditValidator.enableValidation();
formAddValidator.enableValidation();
formAvatarValidator.enableValidation();

