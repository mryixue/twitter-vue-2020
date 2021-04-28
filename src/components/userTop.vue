<template>
  <div id="userTop">
    <!-- <Spinner v-if="isLoading" /> -->
    <router-link class="links" v-show="currentUser.id != userId" to="/main/">
      ← 首頁
    </router-link>
    <div class="image">
      <img class="cover" :src="user.cover | emptyImage" alt="user.cover">
      <img class="avatar" :src="user.avatar | emptyImage" alt="user.avatar">
    </div>
    <div class="button">
      <div @click="editor(user)" v-show="currentUser.id == userId">編輯個人資料</div>
      <div v-show="currentUser.id != userId">正在跟隨</div>
    </div>
    <div class="card">
      <div class="name">{{user.name}}
        <div class="account">@{{user.account}}</div>
      </div>
      <div class="intro">{{user.introduction}}</div>
      <div class="follow">
        <div class="following">{{user.followingCount}} 位跟隨中</div>
        <div class="follower">{{user.followerCount}} 位跟隨者</div>
      </div>
    </div>
    <div class="filter">
      <div :class="{tweet:links == 'tweet'}" @click="tweet">我的推文</div>
      <div :class="{reply:links == 'reply'}" @click="reply">我的回覆</div>
      <div :class="{like:links == 'like'}" @click="like">喜歡的內容</div>
    </div>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { emptyImageFilter } from './../utils/mixins'
import Spinner from './../components/spinner'
import Bus from '../bus.js'
import { mapState } from 'vuex'

export default {
  mixins: [emptyImageFilter],
  components: {
    Spinner
  },
  data() {
    return {
      links: 'tweet',
      user: {
        account: '',
        name: '',
        email: '',
        introduction: '',
        avatar: '',
        cover: '',
        tweetCount: 0,
        followingCount: 0,
        followerCount: 0,
        isFollowed: true
      },
      isLoading: true,
      userId: ''
    }
  },
  created () {
    const { id: userId } = this.$route.params
    this.fetchUser (userId)
    this.userId = userId
  },
  beforeRouteUpdate (to, from, next) {
    const { id: userId } = to.params
    this.fetchUser (userId)
    next()
  },
  methods: {
    tweet(){
      this.links = 'tweet'
      this.$emit('goTweet')
    },
    reply(){
      this.links = 'reply'
      this.$emit('goReply')
    },
    like(){
      this.links = 'like'
      this.$emit('goLike')
    },
    async fetchUser (userId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getUser({ userId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { account, name, email, introduction, avatar, cover, tweetCount, followingCount, followerCount, isFollowed } = data
        this.user = {
          ...this.user,
          account,
          name,
          email,
          introduction,
          avatar,
          cover,
          tweetCount,
          followingCount,
          followerCount,
          isFollowed
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.error(error.message)
      }
    },
    editor(user){
      Bus.$emit('toeditor',user)
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#userTop
  padding: 10px
  .links
    font-size: 24px
    &:hover
      cursor: pointer
  .image
    background-color: grey
    height: 20vh
    position: relative
    .cover
      width: 100%
      height: 100%
      object-fit: cover
    .avatar
      width: 100px
      height: 100px
      border-radius: 100px
      background-color: grey
      border: 5px solid white
      position: absolute
      bottom: -50px
      left: 10px
      object-fit: cover
  .button
    height: 50px
    display: flex
    justify-content: flex-end
    align-items: center
    div
      text-align: center
      padding: 5px 10px
      margin: 10px
      border-radius: 10px
      background:
        color: $font_color
      &:hover
        cursor: pointer
  .card
    margin:
      bottom: 10px
    .name
      color: black
      .account
        color: grey
    .intro
      padding: 10px
    .follow
      display: flex
      justify-content: flex-end
      padding:
        right: 30px
      div
        padding: 5px 10px
  .filter
    display: grid
    grid-template:
      columns: repeat(3,1fr)
    width: 80%
    padding:
      left: 20px
    div
      text-align: center
      padding: 10px 0
      &:hover
        cursor: pointer
    .tweet,
    .reply,
    .like
      border-bottom: 5px solid $font-color
</style>
