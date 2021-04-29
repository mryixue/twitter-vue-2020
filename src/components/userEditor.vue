<template>
  <div id="userEditor" v-show="modalOn" @click.self="closeModal()">
    <div class="form">
      <h3>編輯個人資料</h3>
      <div class="image">
        <div class="cover" :style="'background-image: url('+ user.cover || emptyImage +')'">
          <img src="../../public/images/camera-add.png" @click="changeCover(user)">
        </div>
        <div class="avatar" :style="'background-image: url('+ user.avatar || emptyImage +')'">
          <img src="../../public/images/camera-add.png" @click="changeAvatar(user)">
        </div>
      </div>
      <form @submit.prevent.stop="handleSubmit(user)">
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
            @keydown.prevent.stop.enter.exact="handleSubmit(user)"
            @keydown.esc="closeModal()"
          ></textarea>
          <div class="length">{{introCount}}/160</div>
        </div>
        <button
          type="submit"
          class="button"
          :disabled="isProcessing"
          :class="{isProcessing}"
        >儲存</button>
        <div class="close" @click.self="closeModal()">×</div>
      </form>
    </div>
  </div>
</template>

<script>
import Bus from '../bus.js'
import { Toast } from './../utils/helpers'
import usersAPI from './../apis/users'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      user: {},
      modalOn: false,
      introCount: 0,
      nameCount: 0,
      isProcessing: false,
    }
  },
  created() {
    Bus.$on('toeditor', user => {
      this.user = user
      this.modalOn = !this.modalOn
      this.introCount = this.user.introduction.length
      this.nameCount = this.user.name.length
    })
  },
  methods: {
    async handleSubmit (user) {
      try {
        this.isProcessing = true

        const { data } = await usersAPI.putProfile({
          userId: this.currentUser.id,
          profile: {
            cover: user.cover,
            avatar: user.avatar,
            name: user.name,
            introduction: user.introduction,
          }
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        Toast.fire({
          icon: 'success',
          title: '更新個人資料成功'
        })
        this.modalOn = !this.modalOn
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: '無法更新'
        })
        console.error(error.message)
      }
    },
    changeCover(user){
      Toast.fire({
        title: '輸入封面網址',
        input: 'text',
        timer: undefined,
        position: 'center',
        showCancelButton: true,
        showConfirmButton: true,
      }).then(result => {
        if(result.isConfirmed){
          user.cover = result.value
          this.handleSubmit(user)
        }
      })
    },
    changeAvatar(user){
      Toast.fire({
        title: '輸入大頭貼網址',
        input: 'text',
        timer: undefined,
        position: 'center',
        showCancelButton: true,
        showConfirmButton: true,
      }).then(result => {
        if(result.isConfirmed){
          user.avatar = result.value
          this.handleSubmit(user)
        }
      })
    },
    closeModal(){
      this.modalOn = !this.modalOn
    },
    countIntro(){
      this.introCount = this.user.introduction.length
    },
    countName(){
      this.nameCount = this.user.name.length
    },
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
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
    padding-top: 20px
    padding-bottom: 50px
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
        img
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
        img
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
          border-style: none none solid none
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
