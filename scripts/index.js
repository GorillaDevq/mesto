//Глобальные переменные
  //Редакция профиля
const popupEdit = document.querySelector('.popup_type_edit');
const openPopupEdit = document.querySelector('.button_type_edit');
const professionUser = document.querySelector('.profile__profession');
const professionUserInput = document.querySelector('.popup__input_type_profession');
const nameUser = document.querySelector('.profile__name');
const nameUserInput = document.querySelector('.popup__input_type_name');
const formSubmitEdit = document.forms["user"];
  //Закрытие попапов
const closeButtons = document.querySelectorAll('.popup__button-close');
  //Открытие попапа фотографии
const popupImage = document.querySelector('.popup_type_image');
const chooseImage = document.querySelector('.popup__image');
const chooseLocation = document.querySelector('.popup__location');
  //Добавление карточек
const popupAdd = document.querySelector('.popup_type_add');
const openPopupAdd = document.querySelector('.button_type_add');
const formSubmitAdd = document.forms["card"];
const locationInput = document.querySelector('.popup__input_type_location');
const linkInput = document.querySelector('.popup__input_type_link');
const sectionElement = document.querySelector('.elements');
  //Массив объектов
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  }
];
// Функция закытия попапов
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


//Функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
openPopupEdit.addEventListener('click', function (){
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
openPopupAdd.addEventListener('click', function (){
  openPopup(popupAdd);
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
      chooseImage.src = event.target.src;
      chooseImage.alt = event.target.alt;
      chooseLocation.textContent = item.name;
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
