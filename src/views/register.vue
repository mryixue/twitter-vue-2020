<template>
  <div class="loginframe">
    <div id="register">
      <img class="logo" src="/logo.png">
      <h3 class="title">登入 Twitter</h3>
      <form class="login-box">
        <input
          id="login-email"
          inputmode="email"
          v-model="email"
          autocomplete="username"
          required
          autofocus
          placeholder="電子郵件"
        />
        <input
          id="login-password"
          type="password"
          v-model="password"
          autocomplete="current-password"
          required
          placeholder="密碼"
        />
        <button class="login-button" type="submit">登入</button>
      </form>
      <a class="register" href="./register/">註冊 Twitter</a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email: '',
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
        &:hover, &:active
          cursor: pointer
          background:
            color: #a0c4e0
    .register
      color: $font-color
      text-shadow: 0px 0px 0.5px black
      margin:
        top: 10px
</style>