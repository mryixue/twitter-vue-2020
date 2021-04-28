<template>
  <div id="setting">
    <h1 class="title">帳戶設定</h1>
    <form>
      <div class="group">
        <label for="account">帳號</label>
        <input
          inputmode="account"
          v-model="account"
          autocomplete="username"
          required
          autofocus
          id="account">
      </div>
      <div class="group">
        <label for="name">名稱</label>
        <input
          inputmode="name"
          v-model="name"
          maxlength="25"
          required
          id="name">
      </div>
      <div class="group">
        <label for="email">Email</label>
        <input
          inputmode="email"
          v-model="email"
          autocomplete="email"
          required
          id="email">
      </div>
      <div class="group">
        <label for="password">密碼</label>
        <input
          type="password"
          v-model="password"
          autocomplete="new-password"
          required
          id="password">
      </div>
      <div class="group">
        <label for="checkPassword">密碼確認</label>
        <input
          type="password"
          v-model="checkPassword"
          autocomplete="new-password"
          required
          id="checkPassword">
      </div>
      <button
        type="submit"
        class="button"
      >送出</button>
    </form>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import Spinner from './../components/spinner'

export default {
  components: {
    Spinner
  },
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
  created () {
    this.fetchUserSetting ()
  },
  methods: {
    async fetchUserSetting () {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getCurrentUser()

        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { account, name, email, password } = data.currentUser
        this.account = account
        this.name = name
        this.email = email
        this.password = password
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得帳戶資料，請稍後再試'
        })
        console.error(error.message)
      }
    }
  }
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
