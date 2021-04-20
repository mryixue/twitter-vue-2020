import { apiHelper } from './../utils/helpers'

export default {
  logIn ({ user, password }) {
    return apiHelper.post('/users/login', {
      user,
      password
    })
  },
  register (data) {
    return apiHelper.post('/register', {
      ...data
    })
  }
}
