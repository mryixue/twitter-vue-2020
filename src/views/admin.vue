<template>
  <div class="loginframe">
    <div id="admin">
      <img class="logo" src="/logo.png">
      <h3 class="title">後台登入</h3>
      <form class="form" @submit.prevent.stop="login">
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
        <button type="submit" class="button">登入</button>
      </form>
      <router-link class="links" to="/login/">前台登入</router-link>
    </div>
  </div>
</template>

<script>
const admin = {
  user: 'root',
  password: 'aaa'
}
export default {
  data(){
    return{
      user: 'root',
      password: 'aaa'
    }
  },
  methods: {
    login(){
      if(this.user === admin.user && this.password === admin.password){
        this.$router.push('/admin_main')
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
  #admin
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
    .links
      color: $font-color
      text-shadow: 0px 0px 0.5px black
      margin:
        top: 10px
</style>