import { apiHelper } from './../utils/helpers'

export default {
  getUser ({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  getUserTweets ({ userId }) {
    return apiHelper.get(`/users/${userId}/tweets`)
  },
  getUserRepliedTweets ({ userId }) {
    return apiHelper.get(`/users/${userId}/replied_tweets`)
  },
  getUserLikedTweets ({ userId }) {
    return apiHelper.get(`/users/${userId}/likes`)
  },
  getCurrentUser () {
    return apiHelper.get('/users/current')
  }
}
