//Открыть-закрыть попап
let openPopup = document.querySelector('.button_type_edit');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');
let professionUser = document.querySelector('.profile__profession');
let professionUserInput = document.querySelector('.popup__input_type_profession');
function close(){
  popup.classList.remove('popup_opened');
};

openPopup.addEventListener('click', function (){
  professionUserInput.value = professionUser.textContent;
  nameUserInput.value = nameUser.textContent;
  popup.classList.add('popup_opened');
});
closePopup.addEventListener('click', close);
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

