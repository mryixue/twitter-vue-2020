<template>
  <div id="setting">
    <h1 class="title">帳戶設定</h1>
    <form @submit.prevent.stop="handleSubmit">
      <div class="group">
        <label for="account">帳號</label>
        <input
          inputmode="account"
          v-model="setting.account"
          autocomplete="username"
          autofocus
          id="account">
      </div>
      <div class="group">
        <label for="name">名稱</label>
        <input
          inputmode="name"
          v-model="setting.name"
          maxlength="25"
          id="name">
      </div>
      <div class="group">
        <label for="email">Email</label>
        <input
          inputmode="email"
          v-model="setting.email"
          autocomplete="email"
          id="email">
      </div>
      <div class="group">
        <label for="password">密碼</label>
        <input
          type="password"
          v-model="setting.password"
          autocomplete="new-password"
          id="password">
      </div>
      <div class="group">
        <label for="checkPassword">密碼確認</label>
        <input
          type="password"
          v-model="setting.checkPassword"
          autocomplete="new-password"
          id="checkPassword">
      </div>
      <button
        type="submit"
        class="button"
        :disabled="isProcessing"
        :class="{isProcessing}"
      >送出</button>
    </form>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  data(){
    return{
      setting: {
        account: '',
        name: '',
        email: '',
        password: '12345678',
        checkPassword: '12345678',
      },
      isProcessing: false,
    }
  },
  created () {
    const { account, name, email } = this.currentUser
    this.setting.account = account
    this.setting.name = name
    this.setting.email = email
  },
  methods: {
    async handleSubmit () {
      try {
        if (!this.setting.checkPassword || !this.setting.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入帳號和密碼'
          })
          return
        }
        this.isProcessing = true

        const { data } = await usersAPI.setAccount({
          userId: this.currentUser.id,
          setting: this.setting
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        Toast.fire({
          icon: 'success',
          title: '更新帳戶設定成功'
        })

        try {
          console.log('go')
          const response = await authorizationAPI.logIn({
            account: this.setting.account,
            password: this.setting.password
          })
          const { account } = response
          localStorage.setItem('token', account.token)
          this.$store.commit('setCurrentUser', account.user)
        } catch (error) {
          console.error(error.message)
        }

        this.isProcessing = false
        this.$router.go()
      } catch (error) {
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: '無法更新'
        })
        console.error(error.message)
      }
    },
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)
#setting
  padding: 50px 100px
  h1
    font-size: 24px
  .group
    margin: 20px 0
    display: flex
    flex-flow: column nowrap
    width: 500px
    input
      border:
        style: none none solid none
      background-color: rgba(#e0eefa,.5)
      width: 500px
    label
      padding: 5px
      background-color: rgba(#e0eefa,.5)
  .button
    background:
      color: $font-color
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
</style>
