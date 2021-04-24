<template>
  <div id="adminRIghtTweets">
    <h3 class="title">推文清單</h3>
    <!-- <Spinner v-if="isLoading" /> -->
    <div class="box">
      <div class="cards" v-for="tweet in tweets" :key="tweet.id">
        <div class="left">
            <img class="avatar" :src="tweet.User.avatar | emptyImage" alt="tweet.avater">
        </div>
        <div class="right">
          <h5 class="info">{{ tweet.User.name }}
            <span>@{{ tweet.User.account }}·{{ tweet.createdAt | fromNow }}</span>
          </h5>
          <p class="article">{{ tweet.description }}</p>
          <div class="delete" @click.stop.prevent="deleteTweet(tweet.id)">×</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import { fromNowFilter } from './../utils/mixins'
import adminAPI from './../apis/admin'
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
      // isLoading: true,
      tweets1: [
        {
          id: 1,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: 2,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: 3,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: 4,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: 5,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: 6,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
        {
          id: 7,
          avater: '',
          name: 'Apple',
          at: 'apple',
          postTime: '3小時',
          article: 'abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz.'
        },
      ]
    }
  },
  created () {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets () {
      try {
        //this.isLoading = true
        const data = await adminAPI.tweets.get()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = data.data

        //this.isLoading = false
      } catch (error) {
        //this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得推文，請稍後再試'
        })
        console.error(error.message)
      }
    },
  }
}
</script>

<style lang="sass">
#adminRIghtTweets
  &:hover
    cursor: default
  .title
    padding: 10px 20px
  .cards
    display: flex
    box-shadow: 0.3px 1px 1.5px rgba(gray,.7)
    .left .avatar
      width: 50px
      height: 50px
      margin: 10px
      background-color: gray
      border-radius: 50px
    .right
      width: 100%
      position: relative
      padding:
        top: 10px
        bottom: 30px
        left: 10px
      .info span
        color: rgba(gray,.7)
        padding:
          left: 5px
      .article
        padding:
          top: 5px
        white-space: normal
      .delete
        font-size: 25px
        position: absolute
        right: 5px
        top: 0px
        &:hover
          cursor: pointer
</style>
