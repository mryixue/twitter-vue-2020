<template>
  <div id="userTop">
    <div class="image">
      <img width="100%" height="100%" :src="user.cover | emptyImage" alt="user.cover">
      <img class="avatar" :src="user.avatar | emptyImage" alt="user.avatar">
    </div>
    <div class="button">
      <div>編輯個人資料</div>
    </div>
    <div class="card">
      <div class="name">{{user.name}}
        <div class="account">@{{user.account}}</div>
      </div>
      <div class="intro">{{user.introduction}}</div>
      <div class="follow">
        <div class="following">{{user.followingCount}} 跟隨中</div>
        <div class="follower">{{user.followerCount}} 跟隨者</div>
      </div>
    </div>
    <div class="filter">
      <div :class="{tweet:links == 'tweet'}" @click="tweet">推文</div>
      <div :class="{reply:links == 'reply'}" @click="reply">推文與回覆</div>
      <div :class="{like:links == 'like'}" @click="like">喜歡的內容</div>
    </div>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],
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
    }
  },
  created () {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  beforeRouteUpdate (to, from, next) {
    const { id: userId } = to.params
    this.fetchUser(userId)
    next()
  },
  methods: {
    tweet(){
      this.links = 'tweet'
    },
    reply(){
      this.links = 'reply'
    },
    like(){
      this.links = 'like'
    },
    async fetchUser (userId) {
      try {
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
      } catch (error) {
        console.error(error.message)
      }
    }
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#userTop
  padding: 10px
  .image
    background-color: grey
    height: 20vh
    position: relative
    .avatar
      width: 100px
      height: 100px
      border-radius: 100px
      background-color: grey
      border: 5px solid white
      position: absolute
      bottom: -50px
      left: 10px
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
      div
        padding: 5px
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
