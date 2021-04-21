<template>
  <div class="loginframe">
    <div id="login">
      <img class="logo" src="/logo.png">
      <h3 class="title">登入 Twitter</h3>
      <form class="form" @keydown.enter.exact="handleSubmit">
        <input
          inputmode="user"
          v-model="account"
          autocomplete="username"
          required
          autofocus
          placeholder="帳號"
        />
        <input
          type="password"
          v-model="password"
          autocomplete="current-password"
          required
          placeholder="密碼"
        />
        <div class="button" type="submit" @click="handleSubmit">登入</div>
      </form>
      <div class="links">
        <router-link to="/register/">註冊 Twitter</router-link>
        <span>‧</span>
        <router-link to="/admin/">後台登入</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization'

export default {
  data () {
    return {
      account: '',
      password: '',
    }
  },
  methods: {
    handleSubmit() {
      authorizationAPI.logIn({
        account: this.account,
        password: this.password
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="sass">
$font-color: rgba(#b0d7f6, .8)

.loginframe
  display: flex
  justify-content: center
  #login
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
        text-align: center
        &:hover, &:active
          cursor: pointer
          background:
            color: #a0c4e0
    .links a
      color: $font-color
      text-shadow: 0px 0px 0.5px black
      margin:
        top: 10px
</style>
