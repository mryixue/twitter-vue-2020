import { apiHelper } from './../utils/helpers'

export default {
  logIn ({ account, password }) {
    return apiHelper.post('/admin/login', {
      account,
      password
    })
  },
  tweets: {
    get () {
      return apiHelper.get('admin/tweets')
    },
    delete ({ tweetId }) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`)
    }
  },
  users: {
    get () {
      return apiHelper.get('admin/users')
    }
  }
}
