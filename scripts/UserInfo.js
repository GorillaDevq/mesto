export default class UserInfo {
  static selectors = {
    inputName: '.popup__input_type_name',
    inputProfession: '.popup__input_type_profession',
  }

  constructor(name, profession){
    this._name = document.querySelector(name);
    this._profession = document.querySelector(profession);
    this._inputName = document.querySelector(UserInfo.selectors.inputName);
    this._inputProfession = document.querySelector(UserInfo.selectors.inputProfession);
  }

  getUserInfo() {
    this._inputName.value = this._name.textContent;
    this._inputProfession.value = this._profession.textContent;
  }

  setUserInfo() {
    this._name.textContent = this._inputName.value;
    this._profession.textContent = this._inputProfession.value;
  }
}
