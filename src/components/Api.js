export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getInitialCards() {
    return this._request(this._baseUrl + '/cards', {
      headers: this._headers
    })
  }

  getUserInfo() {
    return this._request(this._baseUrl + '/users/me', {
      headers: this._headers
    })
  }

  setUserInfo(data) {
    return this._request(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
  }

  postNewCard(data) {
    return this._request(this._baseUrl + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
  }

  deleteCard(idCard) {
    return this._request(this._baseUrl + '/cards/' + idCard, {
      method: 'DELETE',
      headers: this._headers,
      body: JSON.stringify({
        _id: idCard
      })
    })
  }

  putLikeCard(idCard) {
    return this._request(this._baseUrl + '/cards/' + idCard + '/likes', {
      method: 'PUT',
      headers: this._headers
    })
  }

  deleteLikeCard(idCard) {
    return this._request(this._baseUrl + '/cards/' + idCard + '/likes',  {
      method: 'DELETE',
      headers: this._headers
    })
  }

  setAvatar(data) {
    return this._request(this._baseUrl + '/users/me/avatar',  {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    })
  }
}
