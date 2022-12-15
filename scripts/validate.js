//Объект селекторов
const selectorObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  fieldsetSelector: '.popup__fieldset'
}


// Функция показа ошибки
const showInputError = (formElement, inputElement, errorMessage, selectorObj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectorObj.inputErrorClass);
  errorElement.classList.add(selectorObj.errorClass);
  errorElement.textContent = errorMessage;
};

//Функция скрытия ошибки
const hideInputError = (formElement, inputElement, selectorObj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectorObj.inputErrorClass);
  errorElement.classList.remove(selectorObj.errorClass);
  errorElement.textContent = '';
};

//Функция проверки валидности формы
const checkInputValidity = (formElement, inputElement, selectorObj) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectorObj);
  } else {
    hideInputError(formElement, inputElement, selectorObj);
  }
};

// Функция добавления слушателя
const setEventListeners = (formElement, selectorObj) => {
  const inputList = Array.from(formElement.querySelectorAll(selectorObj.inputSelector));
  const buttonElement = formElement.querySelector(selectorObj.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, selectorObj);
      toggleButtonState(inputList, buttonElement, selectorObj);
    });
  });
};


const enableValidation = (selectorObj) => {
  const formList = Array.from(document.querySelectorAll(selectorObj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll(selectorObj.fieldsetSelector));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet, selectorObj);
    });
  });
};

//Функция проверки всех инпутов
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//Функция изменения состояния кнопки
const toggleButtonState = (inputList, buttonElement, selectorObj) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectorObj.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(selectorObj.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}


enableValidation(selectorObj);
