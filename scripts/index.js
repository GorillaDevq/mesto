//Открыть-закрыть попап
let openPopup = document.querySelector('.button_type_edit');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.button-close');
let professionUser = document.querySelector('.profile__profession');
let professionUserInput = document.querySelector('.popup__input_type_profession');
function close(){
  popup.classList.remove('popup_opened');
  document.querySelector('.popup-image').classList.remove('popup-image_active');
};

openPopup.addEventListener('click', function (){
  professionUserInput.value = professionUser.textContent;
  nameUserInput.value = nameUser.textContent;
  popup.classList.add('popup_opened');
});

const closed = Array.from(document.querySelectorAll('.button-close'));
closed.forEach((item) =>{
  item.addEventListener('click', close);
})



// Submit popap
let formSubmit = document.querySelector('.popup__form');
let nameUser = document.querySelector('.profile__name');
let nameUserInput = document.querySelector('.popup__input_type_name');

formSubmit.addEventListener('submit', function (evt){
  evt.preventDefault();
  nameUser.textContent = nameUserInput.value;
  professionUser.textContent = professionUserInput.value;
  close();
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

 initialCards.forEach((item) => {
  const cardElementTemplate = document.querySelector('#card-element').content;
  const cardElement = cardElementTemplate.querySelector('.element').cloneNode(true);
  const sectionElement = document.querySelector('.elements');
  sectionElement.append(cardElement);
  cardElement.querySelector('.element__heading').textContent = item.name;
  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__image').alt = item.alt;
  return item;
});

// Лайк елемента
const like = document.querySelectorAll('.element__like');
const likeArr = Array.from(like);
likeArr.forEach((item) => {
  item.addEventListener('click', function (e){
  const eventTarget = e.target;
  eventTarget.classList.toggle('element__like_active');
})
})

// Удаление элементов
const deleted = document.querySelectorAll('.element__delete');
const deletedArr = Array.from(deleted);
deletedArr.forEach((item) =>{
  item.addEventListener('click', function (e) {
    const eventTarget = e.target;
    eventTarget.parentElement.remove();
  });
});


//initialCards.forEach(function (item){
//  if (item.name === eventTarget){
//    item.remove();
//  };
//  return item;
//});
//initialCards.forEach(function (item, position, array){
//  initialCards.splice(eventTarget.position, 1);
//});
// Открытие изображений
const chooseImage = document.querySelectorAll('.element__image');
const chooseImageArr = Array.from(chooseImage);
const chooseHeading = document.querySelectorAll('.element__heading');
const chooseHeadingArr = Array.from(chooseHeading);
chooseImageArr.forEach(function (item, positionImage){
  item.addEventListener('click', function (e){
    eventTarget = e.target;
    document.querySelector('.popup-image').classList.add('popup-image_active');
    document.querySelector('.popup-image__image').src = item.src;
    document.querySelector('.popup-image__image').alt = item.alt;
    chooseHeadingArr.forEach((item, position) =>{
      if (positionImage === position){
        document.querySelector('.popup-image__heading').textContent = item.textContent;
      }
    });
  });
});
