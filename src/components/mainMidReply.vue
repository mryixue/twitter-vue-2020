<template>
  <div id="mainMidReply">
    <div class="back">
      <a @click="$router.go(-1)">←</a>
    </div>
    <div class="article">
      <Spinner v-if="isLoading" />
      <div class="info">
        <div class="left">
          <img class="avatar" :src="tweet.avatar | emptyImage" alt="tweet.avatar">
        </div>
        <div class="right">
          <div class="name">{{ tweet ? tweet.name : 'Unknown'}}</div>
          <div class="account">@{{ tweet ? tweet.account : 'unknown'}}</div>
        </div>
      </div>
      <p class="description">{{ tweet ? tweet.description : ''}}</p>
      <div class="createTime">{{ tweet.createdAt | formatDate}}</div>
      <div class="count">
        <div class="reply">{{ tweet ? tweet.replyCount : 0}} 回覆</div>
        <div class="like">{{ tweet ? tweet.likeCount : 0}} 喜歡次數</div>
      </div>
      <div class="icons">
        <img src="/reply.png" @click="reply(tweet)">
        <img src="/like.png">
      </div>
    </div>
    <div class="replies">
      <div class="reply" v-for="reply in replies" :key="reply.id">
        <div class="left">
          <img class="avatar" :src="reply.User.avatar | emptyImage" alt="tweet.avatar">
        </div>
        <div class="right">
          <div class="name">{{ reply ? reply.User.name : 'Unknown'}}
            <span class="account">@{{ reply ? reply.User.account : 'unknown'}}</span>
            <span class="creatTime">·{{ reply.createdAt | fromNow}}</span>
          </div>
          <div class="replyAt">回覆 <span>@{{tweet ? tweet.name : 'Unknown'}}</span></div>
          <p class="description">{{ reply ? reply.comment : ''}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '../bus.js'
import tweetsAPI from './../apis/tweets'
import { emptyImageFilter } from './../utils/mixins'
import { fromNowFilter, formatDateFilter } from './../utils/mixins'
import Spinner from './../components/spinner'

export default {
  mixins: [emptyImageFilter, fromNowFilter, formatDateFilter],
  components: {
    Spinner
  },
  data() {
    return {
      isLoading: true,
      tweet: {},
      replies: [],
    }
  },
  created () {
    const { tweetId } = this.$route.params
    this.fetchTweet (tweetId)
  },
  beforeRouteUpdate (to, from, next) {
    const { tweetId } = to.params
    this.fetchTweet (tweetId)
    next()
  },
  methods: {
    reply(tweet){
      Bus.$emit('toreply', tweet)
    },
    async fetchTweet (tweetId) {
      try {
        this.isLoading = true
        const { data } = await tweetsAPI.getTweet({ tweetId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const { User, Replies } = data
        const { description, createdAt, replyCount, likeCount } = data
        const { avatar, name, account } = User

        this.tweet = {
          ...this.tweet,
          description,
          createdAt,
          avatar,
          name,
          account,
          replyCount,
          likeCount
        }

        this.replies = Replies

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.error(error.message)
      }
    }
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#mainMidReply
  overflow-x: hidden
  overflow-y: auto
  .back
    font-size: 24px
    &:hover
      cursor: pointer
  .article
    padding: 5px
    border: 1px solid rgba(grey,.5)
    style: solid solid none solid
    .info
      display: flex
      .left .avatar
        width: 50px
        height: 50px
        border-radius: 50px
        background-color: grey
        margin: 10px
      .right
        display: flex
        flex-direction: column
        justify-content: center
        .name
          font-weight: bold
        .account
          color: grey
    .description
      white-space: normal
      font-size: 24px
      padding: 10px
    .createTime
      color: grey
      padding:
        left: 10px
      font-size: 14px
    .count
      display: flex
      padding: 20px 10px
      div
        margin:
          right: 20px
    .icons img
      width: 25px
      margin:
        left: 10px
        right: 50px
      &:hover
        cursor: pointer
  .replies
    .reply
      display: flex
      border: 1px solid rgba(grey,.5)
      style: solid solid none solid
      font-size: 13px
      padding:
        top: 10px
        bottom: 20px
      .left .avatar
        width: 50px
        height: 50px
        border-radius: 50px
        background-color: grey
        margin: 10px
      .right
        display: flex
        flex-direction: column
        justify-content: center
        .name
          font-weight: bold
          .account,
          .creatTime
            color: grey
        .replyAt
          margin: 5px 0
          span
            color: $font-color
            font-weight: bold
        p
          white-space: normal
</style>
