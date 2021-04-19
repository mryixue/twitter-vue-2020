<template>
  <div class="loginframe">
    <div id="register">
      <img class="logo" src="/logo.png">
      <h3 class="title">建立您的帳號</h3>
      <form class="login-box">
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
          autofocus
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
          type="comfirm"
          v-model="comfirm"
          autocomplete="new-password"
          required
          placeholder="密碼確認"
        />
        <button class="login-button" type="submit">註冊</button>
      </form>
      <router-link class="cancle" to="/login/">取消</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: '',
      account: '',
      name: '',
      email: '',
      password: '',
      comfirm: ''
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
    .cancle
      color: $font-color
      text-shadow: 0px 0px 0.5px black
      margin:
        top: 10px
</style>