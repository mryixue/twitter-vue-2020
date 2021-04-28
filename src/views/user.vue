<template>
  <div id="userframe" :class="{same: currentUser.id == userId}">
    <mainLeft/>
    <userTop @goTweet="goTweet" @goReply="goReply" @goLike="goLike"/>
    <userTweet v-show="tweet"/>
    <userReply v-show="reply"/>
    <userLike v-show="like"/>
    <mainRightFollow/>
    <newTweet/>
    <userEditor/>
  </div>
</template>

<script>
import mainLeft from '../components/mainLeft'
import mainRightFollow from '../components/mainRightFollow'
import userTweet from '../components/userTweet'
import userTop from '../components/userTop'
import userLike from '../components/userLike'
import userReply from '../components/userReply'
import newTweet from '../components/newTweet'
import userEditor from '../components/userEditor'
import { mapState } from 'vuex'
export default {
  components: {
    mainLeft,
    mainRightFollow,
    userTweet,
    userLike,
    userReply,
    userTop,
    newTweet,
    userEditor
  },
  data() {
    return {
      tweet: true,
      reply: false,
      like: false
    }
  },
  methods: {
    goTweet(){
      this.tweet = true
      this.reply = false
      this.like = false
    },
    goReply(){
      this.reply = true
      this.tweet = false
      this.like = false
    },
    goLike(){
      this.like = true
      this.reply = false
      this.tweet = false
    },
  },
  created () {
    const { id: userId } = this.$route.params
    this.userId = userId
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
}
</script>

<style lang="sass">
#userframe
  width: 100vw
  height: 100vh
  display: grid
  grid-template:
    columns: 20vw 1fr 30vw
    rows: 430px 1fr
    areas: "left new right" "left article right"
  position: relative
  &.same
    grid-template-rows: 395px 1fr
  #mainLeft
    grid-area: left
  #userTweet
    grid-area: article
  #mainRightFollow
    grid-area: right
  #userTop
    grid-area: new
  #newTweet
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    grid-area: 1/1/3/3
    background-color: rgba(grey,.8)
  #userEditor
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    grid-area: 1/1/3/3
    background-color: rgba(grey,.8)
</style>
