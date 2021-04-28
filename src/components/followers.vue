<template>
  <div id="follow">
    <div class="links">
      <a @click="$router.go(-1)">←</a>
      <div :class="{filter:!filter}" @click="fetchFollowers(userId)">跟隨者</div>
      <div :class="{filter:filter}" @click="fetchFollowingUsers(userId)">正在跟隨</div>
    </div>
    <Spinner v-if="isLoading" />

    <!-- v-if="tweet.ifFollowed == true || tweet.ifFollowed == filter" -->
    <div
      class="cards"
      v-for="tweet in tweets"
      :key="tweet.followingId">
      <div class="left">
        <img class="avatar" :src="tweet.avatar | emptyImage">
      </div>
      <div class="right">
        <h5 class="info">{{ tweet.name }}
          <div>@{{ tweet.account }}</div>
        </h5>
        <p class="article">{{ tweet.introduction }}</p>
      </div>
      <div class="switch">
        <div class="on" v-show="tweet.ifFollowed">正在跟隨</div>
        <div class="off" v-show="!tweet.ifFollowed">跟隨</div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import Spinner from './../components/spinner'

export default {
  mixins: [emptyImageFilter],
  components: {
    Spinner
  },
  data(){
    return{
      filter: false,
      tweets: [],
      userId: -1,
      isLoading: true,
    }
  },
  created () {
    const { id: userId } = this.$route.params
    this.fetchFollowers (userId)
    this.fetchFollowingUsers (userId)
    this.userId = userId
  },
  beforeRouteUpdate (to, from, next) {
    const { id: userId } = to.params
    this.fetchFollowers (userId)
    this.fetchFollowingUsers (userId)
    this.userId = userId
    next()
  },
  methods: {
    async fetchFollowingUsers (userId) {
      this.filter = true
      try {
        this.isLoading = true
        const data = await usersAPI.getFollowingUsers({ userId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = data.data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得正在跟隨的使用者，請稍後再試'
        })
        console.error(error.message)
      }
    },
    async fetchFollowers (userId) {
      this.filter = false
      try {
        this.isLoading = true
        const data = await usersAPI.getFollowers({ userId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = data.data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得跟隨者資料，請稍後再試'
        })
        console.error(error.message)
      }
    }
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#follow
  padding: 10px
  overflow-x: hidden
  overflow-y: auto
  .links
    display: grid
    grid-template:
      columns: repeat(3, 1fr)
    width: 250px
    a
      font-size: 24px
    div
      text-align: center
      padding: 10px 0
    &:hover
      cursor: pointer
    .filter
      border-bottom: 5px solid $font-color
  .cards
    width: 100%
    display: flex
    border-radius: 10px
    background-color: #f1f7fd
    margin: 20px 0
    padding:
      top: 20px
      bottom: 15px
    position: relative
    .left
      padding: 0 10px
      .avatar
        width: 50px
        height: 50px
        border-radius: 50px
        background-color: grey
        object-fit: cover
    .right
      .info div
        color: grey
      .article
        margin:
          top: 10px
        white-space: normal
    .switch
      position: absolute
      top: 10px
      right: 20px
      div
        text-align: center
        padding: 5px 10px
        border-radius: 10px
        &:hover
          cursor: pointer
      .on
        background:
          color: $font_color
      .off
        color: $font_color
        border: 2px solid $font_color
</style>
