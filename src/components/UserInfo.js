export default class UserInfo {
  constructor({ name, profession, avatar }, { handleAvatarClick }){
    this._name = document.querySelector(name);
    this._profession = document.querySelector(profession);
    this._avatar = document.querySelector(avatar);
    this._handleAvatarClick = handleAvatarClick;
  }

  getUserInfo() {
    this._odject = {
      name: this._name.textContent,
      about: this._profession.textContent
    }
    return this._odject
  }

  setUserId(data) {
    this._id = data._id
  }

  getUserId() {
    return this._id
  }

  setAvatar(data) {
    this._avatar.src = data.avatar
  }

  setListenerAvatar() {
    this._avatar.addEventListener('click', () => { this._handleAvatarClick() })
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._profession.textContent = data.about;
    this._id = data._id
  }
}
