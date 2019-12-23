import Cookies from 'js-cookie'
// 对密码加密
import md5 from 'js-md5'
import sha1 from 'js-sha1'
const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function encrypt(data) {
  const one = md5(data).toUpperCase()
  const two = sha1(one).toUpperCase()
  const three = sha1(two).toUpperCase()
  return three
}
