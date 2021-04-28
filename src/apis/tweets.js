import { apiHelper } from './../utils/helpers'

export default {
  getTweets () {
    return apiHelper.get('/tweets')
  },
  getTweet ({ tweetId }) {
    return apiHelper.get(`/tweets/${tweetId}`)
  },
  create ({ description }) {
    return apiHelper.post('/tweets', {
      description
    })
  },
  replyTweet ({ tweetId, comment }) {
    return apiHelper.post(`/tweets/${tweetId}/replies`, {
      comment
    })
  }
}
