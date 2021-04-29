<template>
  <div class="loginframe">
    <div id="register">
      <img class="logo" src="../../public/images/logo.png">
      <h3 class="title">建立您的帳號</h3>
      <form class="form" @submit.prevent.stop="handleSubmit">
        <input
          inputmode="account"
          v-model="account"
          autocomplete="username"
          required
          autofocus
          placeholder="帳號"
        />
        <input
          inputmode="name"
          v-model="name"
          maxlength="25"
          required
          placeholder="顯示名稱"
        />
        <input
          inputmode="email"
          v-model="email"
          autocomplete="email"
          required
          placeholder="電子信箱"
        />
        <input
          type="password"
          v-model="password"
          autocomplete="new-password"
          required
          placeholder="密碼"
        />
        <input
          type="password"
          v-model="checkPassword"
          autocomplete="new-password"
          required
          placeholder="密碼確認"
        />
        <button
          type="submit"
          class="button"
          :disabled="isProcessing"
          :class="{isProcessing}"
        >註冊</button>
      </form>
      <router-link class="cancle" to="/login">取消</router-link>
    </div>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'

export default {
  data(){
    return{
      account: '',
      name: '',
      email: '',
      password: '',
      checkPassword: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit () {
      try {
        if (
          !this.account ||
          !this.name ||
          !this.email ||
          !this.password ||
          !this.checkPassword
        ) {
          Toast.fire({
            icon: 'warning',
            title: '請確認已填寫所有欄位'
          })
          return
        }
        if (this.password !== this.checkPassword) {
          Toast.fire({
            icon: 'warning',
            title: '兩次輸入的密碼不同'
          })
          this.checkPassword = ''
          return
        }
        this.isProcessing = true

        const { data } = await authorizationAPI.register({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword
        })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: data.message
        })
        this.isProcessing = false
        this.$router.push('/login')
      } catch (error) {
        this.isProcessing = false

        Toast.fire({
          icon: 'warning',
          title: '無法註冊 - 帳號已註冊過'
        })
        console.error(error.message)
      }
    }
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)

.loginframe
  display: flex
  justify-content: center
  #register
    display: flex
    flex-flow: column nowrap
    align-items: center
    .logo
      width: 50px
      margin:
        top: 20px
    .title
      margin: 20px
    .form
      display: flex
      flex-flow: column nowrap
      align-items: center
      input
        width: 360px
        line-height: 30px
        font-size: 16px
        padding: 10px
        margin: 10px
      .button
        background:
          color: $font-color
        width: 360px
        border: none
        border-radius: 20px
        padding: 10px
        margin: 10px
        font-size: 18px
        &:hover
          cursor: pointer
        &:active
          background:
            color: #a0c4e0
      .isProcessing:hover
        cursor: default
    .cancle
      color: $font-color
      text-shadow: 0px 0px 0.5px black
      margin:
        top: 10px
</style>
