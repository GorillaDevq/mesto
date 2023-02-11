export default class UserInfo {
  constructor({ name, profession, avatar }){
    this._name = document.querySelector(name);
    this._profession = document.querySelector(profession);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    this._odject = {
      name: this._name.textContent,
      about: this._profession.textContent
    }
    return this._odject
  }

  getUserId() {
    return this._id
  }

  setAvatar(data) {
    this._avatar.src = data.avatar
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._name.textContent = name;
    this._profession.textContent = about;
    this._avatar.src = avatar
    this._id = _id
  }
}
