<template>
  <div id="userTweet">
    <Spinner v-if="isLoading" />
    <div class="cards" v-for="tweet in tweets" :key="tweet.id">
      <div class="left">
        <img class="avatar" :src="tweet.User.avatar | emptyImage" alt="tweet.avater">
      </div>
      <div class="right">
        <h5 class="info">{{ tweet.User.name }}
          <span>@{{ tweet.User.account }}·{{ tweet.createdAt | fromNow }}</span>
        </h5>
        <p class="article">{{ tweet.description }}</p>
        <div class="icons">
          <div class="reply">{{ tweet.replyCount }} 則留言</div>
          <div class="like">{{ tweet.likeCount }} 位喜歡</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import { fromNowFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import Spinner from './../components/spinner'

export default {
  mixins: [emptyImageFilter, fromNowFilter],
  components: {
    Spinner
  },
  data() {
    return {
      tweets: [],
      isLoading: true,
    }
  },
  created () {
    const { id: userId } = this.$route.params
    this.fetchUserTweets(userId)
  },
  beforeRouteUpdate (to, from, next) {
    const { id: userId } = to.params
    this.fetchUserTweets(userId)
    next()
  },
  methods: {
    async fetchUserTweets (userId) {
      try {
        this.isLoading = true
        const data = await usersAPI.getUserTweets({ userId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = data.data

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得推文，請稍後再試'
        })
        console.error(error.message)
      }
    }
  },
}
</script>

<style lang="sass">
#userTweet
  overflow: auto
  .cards
    display: flex
    margin: 15px 20px
    border-radius: 10px
    background-color: #f1f7fd
    .left .avatar
      width: 50px
      height: 50px
      margin: 10px
      background-color: gray
      border-radius: 50px
      object-fit: cover
    .right
      width: 100%
      position: relative
      padding:
        top: 10px
        bottom: 10px
        left: 10px
      .info
        font-size: 18px
      .info span
        color: rgba(gray,.7)
        padding:
          left: 5px
      .article
        padding:
          top: 5px
        white-space: normal
      .icons
        display: flex
        justify-content: flex-end
        margin:
          top: 10px
        padding:
          right: 10px
        div
          margin: 0 10px
      .delete
        font-size: 25px
        position: absolute
        right: 5px
        top: 0px
        &:hover
          cursor: pointer
</style>
