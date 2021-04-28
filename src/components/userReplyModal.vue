<template>
  <div id="userReplyModal" v-show="modalOn" @click.self="closeModal()">
    <div class="form">
      <div class="tweet">
        <div class="left">
          <!-- <img class="avatar" :src="tweet.User.avatar | emptyImage" alt="tweet.avatar"> -->
          <div class="avatar"></div>
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
          v-model="reply"
          placeholder="推你的回覆"
        >
        </textarea>
        <button
          type="submit"
          class="button"
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

export default {
  mixins: [fromNowFilter],
  data () {
    return {
      tweet: {},
      reply: '',
      modalOn: false
    }
  },
  created() {
    Bus.$on('toreply', (tweet) => {
      this.tweet = tweet
      this.modalOn = !this.modalOn
    })
  },
  methods: {
    closeModal(){
      if(this.reply){
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
            this.reply = ''
            this.modalOn = !this.modalOn
          }
        })
      } else {
        this.modalOn = !this.modalOn
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
      top: 20px
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
