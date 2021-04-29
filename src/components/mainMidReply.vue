<template>
  <div id="mainMidReply">
    <div class="back">
      <a @click="$router.go(-1)">←</a>
    </div>
    <div class="article" :class="{one: replies.length === 0}">
      <Spinner v-if="isLoading" />
      <div class="info">
        <div class="left">
          <router-link :to="{ name: 'others', params: { id: tweet.UserId } }">
            <img class="avatar" :src="tweet.avatar | emptyImage" alt="tweet.avatar">
          </router-link>
        </div>
        <div class="right">
          <router-link :to="{ name: 'others', params: { id: tweet.UserId } }">
            <div class="name">{{ tweet ? tweet.name : 'Unknown'}}</div>
            <div class="account">@{{ tweet ? tweet.account : 'unknown'}}</div>
          </router-link>
        </div>
      </div>
      <p class="description">{{ tweet ? tweet.description : ''}}</p>
      <div class="createTime">{{ tweet.createdAt | formatDate}}</div>
      <div class="count">
        <div class="reply">{{ tweet ? tweet.replyCount : 0}} 回覆</div>
        <div class="like">{{ tweet ? tweet.likeCount : 0}} 喜歡次數</div>
      </div>
      <div class="icons">
        <img src="../../public/images/reply.png" @click="reply(tweet)">
        <template>
          <img
          v-show="!tweet.isLiked"
          @click="handleLike(tweet.id)"
          src="../../public/images/like.png"
          >
          <img
          v-show="tweet.isLiked"
          @click="handleUnlike(tweet.id)"
          src="../../public/images/heart.png"
          >
        </template>
      </div>
    </div>
    <div class="replies">
      <div class="reply" v-for="reply in replies" :key="reply.id">
        <div class="left">
          <router-link :to="{ name: 'others', params: { id: reply.User.id } }">
            <img class="avatar" :src="reply.User.avatar | emptyImage" alt="tweet.avatar">
          </router-link>
        </div>
        <div class="right">
          <router-link :to="{ name: 'others', params: { id: reply.User.id } }">
            <div class="name">{{ reply ? reply.User.name : 'Unknown'}}
              <span class="account">@{{ reply ? reply.User.account : 'unknown'}}</span>
              <span class="creatTime">·{{ reply.createdAt | fromNow}}</span>
            </div>
          </router-link>
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
import { Toast } from '../utils/helpers'

export default {
  mixins: [emptyImageFilter, fromNowFilter, formatDateFilter],
  components: {
    Spinner
  },
  data() {
    return {
      isLoading: true,
      isLikeClicked: false,
      isUnikeClicked: false,
      tweet: {},
      replies: [],
    }
  },
  created () {
    const { tweetId } = this.$route.params
    this.fetchTweet (tweetId)
    Bus.$on('replySuccess', () => {
      this.fetchTweet (tweetId)
    })
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

        const { User, Replies, UserId } = data
        const { id, description, createdAt, replyCount, likeCount, isLiked } = data
        const { avatar, name, account } = User

        this.tweet = {
          ...this.tweet,
          id,
          description,
          createdAt,
          avatar,
          name,
          account,
          replyCount,
          likeCount,
          isLiked,
          UserId
        }

        this.replies = Replies

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.error(error.message)
      }
    },
    async handleLike (id) {
      try {
        if (this.isLikeClicked) {
          return
        }
        this.isLikeClicked = true
        if (!id) {
          Toast.fire({
            icon: 'warning',
            title: '此推文不存在，無法按讚'
          })
          return
        }

        const data = await tweetsAPI.like({id})
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '已按讚此推文'
        })
        this.tweet.isLiked = true
        this.tweet.likeCount++
        this.isLikeClicked = false
      } catch(error) {
        Toast.fire({
          icon: 'warning',
          title: '按讚失敗，請稍後再試'
        })
        this.isLikeClicked = false
        console.error(error.message)
      }
    },
    async handleUnlike (id) {
      try {
        if (this.isUnikeClicked) {
          return
        }
        this.isUnikeClicked = true
        if (!id) {
          Toast.fire({
            icon: 'warning',
            title: '此推文不存在，無法按讚'
          })
          return
        }

        const data = await tweetsAPI.unlike({id})
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '已取消按讚此推文'
        })
        this.tweet.isLiked = false
        this.tweet.likeCount--
        this.isUnikeClicked = false
      } catch(error) {
        Toast.fire({
          icon: 'warning',
          title: '取消按讚失敗，請稍後再試'
        })
        this.isUnikeClicked = false
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
    border-radius: 10px 0
    background-color: #f1f7fd
    &.one
      border-radius: 10px
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
        &:hover
          text-decoration: underline
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
    border-radius: 0 10px
    background-color: #f1f7fd
    margin:
      bottom: 10px
    .reply
      display: flex
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
          &:hover
            text-decoration: underline
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
