//Глобальные переменные
const popupList = Array.from(document.querySelectorAll('.popup'));
  //Редакция профиля
const popupEdit = document.querySelector('.popup_type_edit');
const buttonEditProfile = document.querySelector('.button_type_edit');
const professionUser = document.querySelector('.profile__profession');
const professionUserInput = document.querySelector('.popup__input_type_profession');
const nameUser = document.querySelector('.profile__name');
const nameUserInput = document.querySelector('.popup__input_type_name');
const formSubmitEdit = document.forms["user"];
  //Закрытие попапов
const buttonsClose = document.querySelectorAll('.popup__button-close');
  //Открытие попапа фотографии
const popupImage = document.querySelector('.popup_type_image');
const popupImageChoose = document.querySelector('.popup__image');
const popupLocationChoose = document.querySelector('.popup__location');
  //Добавление карточек
const popupAdd = document.querySelector('.popup_type_add');
const buttonAddCard = document.querySelector('.button_type_add');
const formSubmitAdd = document.forms["card"];
const locationInput = document.querySelector('.popup__input_type_location');
const linkInput = document.querySelector('.popup__input_type_link');
const sectionElement = document.querySelector('.elements');

//Функция закытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

buttonEditProfile.addEventListener('click', function (){
  professionUserInput.value = professionUser.textContent;
  nameUserInput.value = nameUser.textContent;
  openPopup(popupEdit);
});

//Функция субмита попапа редакции
formSubmitEdit.addEventListener('submit', function (evt){
  evt.preventDefault();
  nameUser.textContent = nameUserInput.value;
  professionUser.textContent = professionUserInput.value;
  closePopup(popupEdit);
});

//Функция открытия попапа добавления
buttonAddCard.addEventListener('click', function (){
  openPopup(popupAdd);
  enableSubmitButtonAdd(popupAdd);
  document.addEventListener('keydown', closePopupByEscape);
});

//Функция субмита попапа добавления
formSubmitAdd.addEventListener('submit', function(e){
  e.preventDefault();
  const item = {name: locationInput.value, link: linkInput.value, alt: locationInput.value};
  const cardElement = createCard(item);
  sectionElement.prepend(cardElement);
  e.target.reset();
  closePopup(popupAdd);
});

//Функция создания карточки
function createCard(item) {
    const cardElementTemplate = document.querySelector('#card-element').content;
    const cardElement = cardElementTemplate.querySelector('.element').cloneNode(true);
    // Лайк элемента
    const cardElementLike = cardElement.querySelector('.element__like');
    cardElementLike.addEventListener('click', (event) =>{
      event.target.classList.toggle('element__like_active');
    });
    // Удаление элемента
    const cardElementTrash = cardElement.querySelector('.element__delete');
    cardElementTrash.addEventListener('click', (event) => {
      event.target.closest('.element').remove();
    });
    // Открыть изображение
    const cardElementImage = cardElement.querySelector('.element__image');
    const cardElementHeading = cardElement.querySelector('.element__heading');
    cardElementImage.addEventListener('click', (event) => {
      openPopup(popupImage);
      popupImageChoose.src = event.target.src;
      popupImageChoose.alt = event.target.alt;
      popupLocationChoose.textContent = item.name;
    });
    cardElementHeading.textContent = item.name;
    cardElementImage.src = item.link;
    cardElementImage.alt = item.alt;
    return cardElement;
};
//Рендеринг карт
initialCards.forEach((item) => {
  const cardElement = createCard(item);
  sectionElement.append(cardElement);
});

//Функция закрытия попапап
popupList.forEach((popup) => {
  popup.addEventListener('mouseup', (event) => {
    const targetClassList = event.target.classList;
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close-image')) {
      closePopup(popup);
      document.removeEventListener('keydown', closePopupByEscape);
    }
  })
})

//Функция неактивной кнопки
function enableSubmitButtonAdd (choosePopup) {
  const buttonElement = choosePopup.querySelector('.popup__submit');
  buttonElement.classList.add(selectorObj.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

//Функция закрытия через escape
function closePopupByEscape (evt) {
  if (evt.key === 'Escape'){
    const findOpenPopup = document.querySelector('.popup_opened');
    closePopup(findOpenPopup);
  };
};
