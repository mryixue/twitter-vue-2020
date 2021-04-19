<template>
  <div class="loginframe">
    <div id="login">
      <img class="logo" src="/logo.png">
      <h3 class="title">登入 Twitter</h3>
      <form class="login-box">
        <input
          inputmode="user"
          v-model="user"
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
        <button class="login-button" type="submit">登入</button>
      </form>
      <div class="links">
        <router-link to="/register/">註冊 Twitter</router-link>
        <span>‧</span>
        <router-link to="/">後台登入</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user: '',
      password: ''
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
    .login-box
      display: flex
      flex-flow: column nowrap
      align-items: center
      input
        width: 360px
        line-height: 30px
        font-size: 16px
        padding: 10px
        margin: 10px
      button
        background:
          color: $font-color
        width: 360px
        border: none
        border-radius: 20px
        padding: 10px
        margin: 10px
        font-size: 18px
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