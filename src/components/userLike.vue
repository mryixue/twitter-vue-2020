<template>
  <div id="userLike">
    <Spinner v-if="isLoading" />
    <div class="cards" v-for="like in likes" :key="like.id">
      <div class="left">
        <router-link :to="{ name: 'user', params: { id: like.User.id } }">
          <img class="avatar" :src="like.User.avatar | emptyImage" alt="like.avatar">
        </router-link>
      </div>
      <div class="right">
        <router-link class="info" :to="{ name: 'user', params: { id: like.User.id } }">{{ like.User.name }}
          <span>@{{ like.User.account }}·{{ like.createdAt | fromNow }}</span>
        </router-link>
        <router-link class="article" :to="{ name: 'reply_list', params: { tweetId: like.TweetId } }">
          <p>{{ like.description }}</p>
        </router-link>
        <div class="icons">
          <div class="like">{{ like.likeCount }} 位喜歡</div>
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
      likes: [],
      isLoading: true,
    }
  },
  created () {
    const { id: userId } = this.$route.params
    this.fetchUserLikedTweets(userId)
  },
  beforeRouteUpdate (to, from, next) {
    const { id: userId } = to.params
    this.fetchUserLikedTweets(userId)
    next()
  },
  methods: {
    async fetchUserLikedTweets (userId) {
      try {
        this.isLoading = true
        const data = await usersAPI.getUserLikedTweets({ userId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.likes = data.data

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得按讚過的推文，請稍後再試'
        })
        console.error(error.message)
      }
    }
  },
}
</script>

<style lang="sass">
#userLike
  overflow-x: hidden
  overflow-y: auto
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
        font-weight: bold
        &:hover
          text-decoration: underline
      .info span
        color: rgba(gray,.7)
        padding:
          left: 5px
        font-size: 12px
      .article
        padding:
          top: 5px
        p
          white-space: normal
          &:hover
            text-decoration: underline
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
