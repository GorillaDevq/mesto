//Открыть-закрыть попап редакции
const openPopupEdit = document.querySelector('.button_type_edit');
const popupEdit = document.querySelector('.popup_type_edit');
const closePopupEdit = document.querySelector('.button-close_type_edit');
const professionUser = document.querySelector('.profile__profession');
const professionUserInput = document.querySelector('.popup__input_type_profession');
const nameUser = document.querySelector('.profile__name');
const nameUserInput = document.querySelector('.popup__input_type_name');

function closeEdit() {
  popupEdit.classList.remove('popup_opened');
};

closePopupEdit.addEventListener('click',closeEdit);

openPopupEdit.addEventListener('click', function (){
  professionUserInput.value = professionUser.textContent;
  nameUserInput.value = nameUser.textContent;
  popupEdit.classList.add('popup_opened');
});

// Субмит попап редакции
const formSubmitEdit = document.querySelector('.popup__form_type_edit');

formSubmitEdit.addEventListener('submit', function (evt){
  evt.preventDefault();
  nameUser.textContent = nameUserInput.value;
  professionUser.textContent = professionUserInput.value;
  closeEdit();
});


// Открыть-закрыть попап добавления
const openPopupAdd = document.querySelector('.button_type_add');
const popupAdd = document.querySelector('.popup_type_add');
const closePopupAdd = document.querySelector('.button-close_type_add');

function closeAdd() {
  popupAdd.classList.remove('popup_opened');
};

closePopupAdd.addEventListener('click', closeAdd);

openPopupAdd.addEventListener('click', function (){
  popupAdd.classList.add('popup_opened');
});

// Добавление карточки
const formSubmitAdd = document.querySelector('.popup__form_type_add');
const locationInput = document.querySelector('.popup__input_type_location');
const linkInput = document.querySelector('.popup__input_type_link');

formSubmitAdd.addEventListener('submit', function(e){
  e.preventDefault();
  initialCards.push({name: locationInput.value, link: linkInput.value, alt: locationInput.value});
  const initialCardsNew = initialCards.slice(-1);
  initialCardsNew.forEach(renderElement);
  closeAdd();
});

// Открыть фотографию
const popupImage = document.querySelector('.popup-image');
const closePopupImage = document.querySelector('.button-close_type_image');
closePopupImage.addEventListener('click', () => {
  popupImage.classList.remove('popup-image_opened');
});

// Добавление карточек
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

function renderElement(item) {
    const cardElementTemplate = document.querySelector('#card-element').content;
    const cardElement = cardElementTemplate.querySelector('.element').cloneNode(true);
    const sectionElement = document.querySelector('.elements');
    // Лайк элемента
    const cardElementLike = cardElement.querySelector('.element__like');
    cardElementLike.addEventListener('click', (event) =>{
      event.target.classList.toggle('element__like_active');
    });
    // Удаление элемента
    const cardElementTrash = cardElement.querySelector('.element__delete');
    cardElementTrash.addEventListener('click', (event) => {
      event.target.parentElement.remove();
    });
    // Открыть изображение
    const cardElementImage = cardElement.querySelector('.element__image');
    cardElementImage.addEventListener('click', (event) => {
      document.querySelector('.popup-image').classList.add('popup-image_opened');
      document.querySelector('.popup-image__image').src = event.target.src;
      document.querySelector('.popup-image__image').alt = event.target.alt;
      document.querySelector('.popup-image__heading').textContent = item.name;
    });
    sectionElement.prepend(cardElement);
    cardElement.querySelector('.element__heading').textContent = item.name;
    cardElement.querySelector('.element__image').src = item.link;
    cardElement.querySelector('.element__image').alt = item.alt;
    return item;
};

initialCards.forEach(renderElement);
