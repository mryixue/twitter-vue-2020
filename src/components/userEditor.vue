<template>
  <div id="userEditor" v-show="modalOn" @click.self="closeModal()">
    <div class="form">
      <h3>編輯個人資料</h3>
      <div class="image">
        <div class="cover" :style="'background-image: url('+ user.cover || emptyImage +')'">
          <img src="/camera-add.png" alt="camera-add" v-show="user.cover === ''">
          <div class="delete" v-show="user.cover !== ''">×</div>
        </div>
        <div class="avatar" :style="'background-image: url('+ user.avatar || emptyImage +')'">
          <img src="/camera-add.png" alt="camera-add" v-show="user.avatar === ''">
          <div class="delete" v-show="user.avatar !== ''">×</div>
        </div>
      </div>
      <form>
        <div class="input-group">
          <label for="name">名稱</label>
          <input
            type="text"
            id="name"
            v-model="user.name"
            @input="countName"
            maxlength="50">
          <div class="length">{{nameCount}}/50</div>
        </div>
        <div class="input-group">
          <label for="intro">自我介紹</label>
          <textarea
            v-model="user.introduction"
            id="intro"
            @input="countIntro"
            maxlength="160"
          ></textarea>
          <div class="length">{{introCount}}/160</div>
        </div>
        <button
          type="submit"
          class="button"
        >儲存</button>
        <div class="close" @click.self="closeModal()">×</div>
      </form>
    </div>
  </div>
</template>

<script>
import Bus from '../bus.js'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      user: {},
      reply: '',
      modalOn: false,
      introCount: 0,
      nameCount: 0
    }
  },
  created() {
    Bus.$on('toeditor', (user) => {
      this.user = user
      this.modalOn = !this.modalOn
      this.introCount = this.user.introduction.length
      this.nameCount = this.user.name.length
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
    },
    countIntro(){
      this.introCount = this.user.introduction.length
    },
    countName(){
      this.nameCount = this.user.name.length
    },
  }

}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#userEditor
  display: flex
  align-items: center
  justify-content: center
  h3
    padding: 5px
  .form
    position: relative
    width: 50vw
    padding: 10px
      top: 20px
      bottom: 50px
    border-radius: 10px
    background: white
    .image
      position: relative
      background: grey
      height: 20vh
      .cover
        height: 20vh
        background:
          position: center
          repeat: no-repeat
        position: relative
      .avatar
        width: 100px
        height: 100px
        border-radius: 100px
        background:
          position: center
          size: cover
          repeat: no-repeat
          color: grey
        border: 5px solid white
        position: absolute
        bottom: -50px
        left: 10px
        object-fit: cover
      .cover, .avatar
        img, .delete
          position: absolute
          width: 30px
          height: 30px
          background-color: rgba(grey,.5)
          border-radius: 30px
          text-align: center
          top: 50%
          left: 50%
          box-sizing: content-box
          transform: translate(-50%,-50%)
          display: none
      .cover:hover, .avatar:hover
        img, .delete
          display: block
          cursor: pointer
    form
      margin:
        top: 60px
      .input-group
        display: flex
        flex-direction: column
        input
          border: 1px
            style: none none solid none
        .length
          text-align: right
          font-size: 13px
        textarea
          resize: none
          height: 10vh
          border: 1px solid black
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
