<template>
  <div id="userReplyModal" v-show="modalOn" @click.self="closeModal()">
    <div class="form" @submit.prevent.stop="replyTweet">
      <div class="tweet">
        <div class="left">
          <img class="avatar" :src="tweet.avatar" alt="tweet.avatar">
        </div>
        <div class="right">
          <div class="name">{{ tweet.name }}
            <span class="account">@{{ tweet.account }}</span>
            <span class="creatTime">·{{ tweet.createdAt | fromNow}}</span>
          </div>
          <p class="description">{{ tweet.description }}</p>
          <div class="tweetAt">回覆給 <span>@{{tweet.name}}</span></div>
        </div>
      </div>
      <form>
        <textarea
          v-model="comment"
          placeholder="推你的回覆"
        >
        </textarea>
        <button
          type="submit"
          class="button"
          :disabled="isProcessing"
          :class="{isProcessing}"
        >回覆</button>
        <div class="close" @click.self="closeModal()">×</div>
      </form>
    </div>
  </div>
</template>

<script>
import Bus from '../bus.js'
import { Toast } from './../utils/helpers'
import { fromNowFilter } from './../utils/mixins'
import tweetsAPI from './../apis/tweets'

export default {
  mixins: [fromNowFilter],
  data () {
    return {
      tweet: {},
      comment: '',
      tweetId: -1,
      modalOn: false,
      isProcessing: false
    }
  },
  created() {
    Bus.$on('toreply', (tweet) => {
      this.tweet = tweet
      this.modalOn = !this.modalOn
    })
    const { tweetId } = this.$route.params
    this.tweetId = tweetId
  },
  methods: {
    closeModal(){
      if(this.comment){
        Toast.fire({
          title: '儲存變更?',
          position: 'center',
          showDenyButton: true,
          showConfirmButton: true,
          confirmButtonText: `儲存`,
          denyButtonText: `取消儲存`,
          timer: undefined
        }).then(result => {
          if (result.isConfirmed) {
            this.modalOn = !this.modalOn
          } else if (result.isDenied) {
            this.comment = ''
            this.modalOn = !this.modalOn
          }
        })
      } else {
        this.modalOn = !this.modalOn
      }
    },
    async replyTweet () {
      try {
        if (!this.comment) {
          Toast.fire({
            icon: 'warning',
            title: '請確認已填寫回覆內容'
          })
          return
        }

        this.isProcessing = true

        const { data } = await tweetsAPI.replyTweet({
          tweetId: this.tweetId,
          comment: this.comment
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        Toast.fire({
          icon: 'success',
          title: '新增回覆成功'
        })
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false

        Toast.fire({
          icon: 'warning',
          title: '無法回覆推文'
        })
        console.error(error.message)
      }
    }
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#userReplyModal
  display: flex
  align-items: center
  justify-content: center
  .form
    position: relative
    width: 50vw
    padding: 10px
    padding-top: 20px
    border-radius: 10px
    background: white
    .tweet
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
          .account,
          .creatTime
            color: grey
        p
          white-space: normal
          font-size: 14px
          margin: 10px 0
        .tweetAt
          margin: 5px 0
          font-size: 13px
          span
            color: $font-color
            font-weight: bold
    form
      textarea
        resize: none
        width: 40vw
        height: 20vh
        font-size: 16px
        margin:
          top: 20px
        border: none
      button
        position: absolute
        right: 10px
        bottom: 10px
        background:
          color: $font_color
        width: 60px
        height: 30px
        font-size: 16px
        text-align: center
        border-radius: 15px
        margin:
          top: 20px
        &:hover
          cursor: pointer
      .isProcessing:hover
        cursor: default
      .close
        position: absolute
        top: 10px
        right: 5px
        font-size: 18px
        &:hover
          cursor: pointer
</style>
