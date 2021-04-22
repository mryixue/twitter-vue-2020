import { apiHelper } from './../utils/helpers'

export default {
  logIn ({ account, password }) {
    return apiHelper.post('/users/login', {
      account,
      password
    })
  },
  register (data) {
    return apiHelper.post('/users', {
      ...data
    })
  }
}
