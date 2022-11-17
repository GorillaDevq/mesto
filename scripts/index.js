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
let submitPopup = document.querySelector('.popup__submit');
let nameUser = document.querySelector('.profile__name');
let nameUserInput = document.querySelector('.popup__input_type_name');

submitPopup.addEventListener('click', function (evt){
  evt.preventDefault();
  if (nameUserInput.value === '' || professionUserInput.value === ''){
  } else {
    nameUser.textContent = nameUserInput.value;
    professionUser.textContent = professionUserInput.value;
    close();
  };
});
